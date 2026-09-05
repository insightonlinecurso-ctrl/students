import React, { useState, useMemo, useEffect } from 'react';
import { 
  Calendar as CalendarIcon, 
  Clock, 
  CheckCircle2, 
  Sparkles, 
  ChevronRight, 
  ChevronLeft,
  CalendarDays, 
  CheckSquare, 
  Square,
  RefreshCw,
  Zap,
  ArrowRight,
  RotateCcw,
  Copy,
  Sun,
  Sunset,
  Moon,
  Coffee,
  Target,
  Sliders,
  Trash2,
  CalendarCheck,
  Award
} from 'lucide-react';
import { ALL_GRAMMAR_UNITS, TOTAL_STUDY_HOURS } from '../data/allUnits';
import { useProgress } from '../context/ProgressContext';
import { useAuth } from '../context/AuthContext';

interface PlannerViewProps {
  onSelectUnit: (unitId: number) => void;
}

interface DaySchedule {
  hours: number;
  timeSlot?: string;
  notes?: string;
}

type PlannerMode = 'hours_per_day' | 'target_end_date';

const DEFAULT_TIME_SLOTS = [
  { id: 'morning', label: 'Manhã (07:30 - 09:00)', icon: Sun },
  { id: 'afternoon', label: 'Tarde (14:00 - 15:30)', icon: Sunset },
  { id: 'evening', label: 'Noite (19:30 - 21:00)', icon: Moon },
  { id: 'flexible', label: 'Horário Livre / Flexível', icon: Coffee },
];

const HOUR_PRESETS = [
  { hours: 0, label: '0h (Folga)' },
  { hours: 0.5, label: '30 min' },
  { hours: 1, label: '1.0h' },
  { hours: 1.5, label: '1.5h' },
  { hours: 2, label: '2.0h' },
  { hours: 3, label: '3.0h' },
  { hours: 4, label: '4.0h (Imersão)' },
];

export const PlannerView: React.FC<PlannerViewProps> = ({ onSelectUnit }) => {
  const { user } = useAuth();
  const { 
    weeklyStudyHours, 
    setWeeklyHours, 
    completedPlannerTaskIds,
    togglePlannerTask
  } = useProgress();

  // Mode: 'hours_per_day' (custom daily hours, strictly 0h by default) or 'target_end_date'
  const [plannerMode, setPlannerMode] = useState<PlannerMode>('hours_per_day');

  // Selected date for calendar inspector
  const [selectedDate, setSelectedDate] = useState<Date>(() => new Date());
  
  // Target graduation date in 'target_end_date' mode (default: 3 months from now)
  const [targetGraduationDate, setTargetGraduationDate] = useState<Date>(() => {
    const saved = localStorage.getItem('insight_target_graduation_date');
    if (saved) {
      const d = new Date(saved);
      if (!isNaN(d.getTime())) return d;
    }
    const d = new Date();
    d.setDate(d.getDate() + 90); // ~3 months default
    return d;
  });

  // Current calendar month view
  const [currentMonth, setCurrentMonth] = useState<Date>(() => {
    const d = new Date();
    d.setDate(1);
    return d;
  });

  // Purge any legacy localStorage keys that may have retained pre-filled hours
  useEffect(() => {
    try {
      localStorage.removeItem('insight_daily_schedule');
      localStorage.removeItem('insight_daily_schedule_v2');
      localStorage.removeItem('insight_daily_schedule_v3');
      localStorage.removeItem('insight_daily_schedule_v4');
    } catch (e) {
      console.error(e);
    }
  }, []);

  // Schedule mapping: YYYY-MM-DD -> { hours: number, timeSlot: string }
  // DEFAULT IS STRICTLY 0 HOURS FOR EVERY DAY (no pre-filled hours)
  const [scheduleMap, setScheduleMap] = useState<Record<string, DaySchedule>>(() => {
    try {
      // Clean legacy keys on initialization as well
      localStorage.removeItem('insight_daily_schedule');
      localStorage.removeItem('insight_daily_schedule_v2');
      localStorage.removeItem('insight_daily_schedule_v3');
      localStorage.removeItem('insight_daily_schedule_v4');

      const saved = localStorage.getItem('insight_daily_schedule_v5');
      if (saved) {
        return JSON.parse(saved);
      }
    } catch (e) {
      console.error(e);
    }
    // All days strictly start at 0h (empty map)
    return {};
  });

  // Save scheduleMap & target date to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('insight_daily_schedule_v5', JSON.stringify(scheduleMap));
      localStorage.setItem('insight_target_graduation_date_v5', targetGraduationDate.toISOString());
    } catch (e) {
      console.error(e);
    }
  }, [scheduleMap, targetGraduationDate]);

  const [studentGoal, setStudentGoal] = useState<string>("Fluência para Carreira Internacional");
  const [isAiGenerating, setIsAiGenerating] = useState(false);
  const [aiCustomPlan, setAiCustomPlan] = useState<string | null>(null);

  // Agenda created toggle
  const [isAgendaCreated, setIsAgendaCreated] = useState<boolean>(() => {
    const saved = localStorage.getItem('insight_agenda_created');
    return saved === 'true';
  });

  const selectedDateKey = useMemo(() => {
    return selectedDate.toISOString().split('T')[0];
  }, [selectedDate]);

  const targetDateKey = useMemo(() => {
    return targetGraduationDate.toISOString().split('T')[0];
  }, [targetGraduationDate]);

  // Current selected day's schedule (default 0 hours)
  const currentDaySchedule = scheduleMap[selectedDateKey] || { hours: 0, timeSlot: 'evening' };

  // Update schedule for the selected day in hours_per_day mode
  const handleUpdateDayHours = (hours: number) => {
    setScheduleMap((prev) => ({
      ...prev,
      [selectedDateKey]: {
        ...(prev[selectedDateKey] || { timeSlot: 'evening' }),
        hours
      }
    }));
  };

  const handleUpdateDayTimeSlot = (timeSlot: string) => {
    setScheduleMap((prev) => ({
      ...prev,
      [selectedDateKey]: {
        ...(prev[selectedDateKey] || { hours: 0 }),
        timeSlot
      }
    }));
  };

  // Replicate hours to all matching days of the week in current month
  const handleReplicateToSameWeekday = () => {
    const targetWeekday = selectedDate.getDay();
    const currentYear = currentMonth.getFullYear();
    const currentMonthIdx = currentMonth.getMonth();
    const daysInMonth = new Date(currentYear, currentMonthIdx + 1, 0).getDate();

    setScheduleMap((prev) => {
      const updated = { ...prev };
      for (let day = 1; day <= daysInMonth; day++) {
        const d = new Date(currentYear, currentMonthIdx, day);
        if (d.getDay() === targetWeekday) {
          const key = d.toISOString().split('T')[0];
          updated[key] = {
            hours: currentDaySchedule.hours,
            timeSlot: currentDaySchedule.timeSlot || 'evening'
          };
        }
      }
      return updated;
    });
  };

  // Clear all scheduled hours (reset to 0h everywhere)
  const handleClearAllHours = () => {
    setScheduleMap({});
    localStorage.removeItem('insight_daily_schedule');
    localStorage.removeItem('insight_daily_schedule_v2');
    localStorage.removeItem('insight_daily_schedule_v3');
    localStorage.removeItem('insight_daily_schedule_v4');
    localStorage.removeItem('insight_daily_schedule_v5');
  };

  // Target Date calculations (Mode 2: "Definir Data Final de Término")
  const targetDateAnalysis = useMemo(() => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const target = new Date(targetGraduationDate);
    target.setHours(0, 0, 0, 0);

    const diffTime = target.getTime() - today.getTime();
    const totalDays = Math.max(7, Math.ceil(diffTime / (1000 * 60 * 60 * 24)));
    const totalWeeks = Math.max(1, Math.ceil(totalDays / 7));
    const requiredWeeklyHours = Math.max(1, Math.round((TOTAL_STUDY_HOURS / totalWeeks) * 10) / 10);
    const dailyStudyHours5Days = Math.round((requiredWeeklyHours / 5) * 10) / 10;
    const isPast = diffTime <= 0;

    return {
      totalDays,
      totalWeeks,
      requiredWeeklyHours,
      dailyStudyHours5Days,
      isPast
    };
  }, [targetGraduationDate]);

  // Dynamic average weekly hours calculation based on active mode
  const activeWeeklyAverageHours = useMemo(() => {
    if (plannerMode === 'target_end_date') {
      return targetDateAnalysis.requiredWeeklyHours;
    }

    const today = new Date();
    let totalScheduledHours = 0;
    const daysCount = 28; // 4 weeks sample
    
    for (let i = 0; i < daysCount; i++) {
      const d = new Date(today);
      d.setDate(d.getDate() + i);
      const key = d.toISOString().split('T')[0];
      const entry = scheduleMap[key];
      totalScheduledHours += entry ? entry.hours : 0;
    }

    if (totalScheduledHours === 0) {
      return 5.0; // fallback sensible default if no hours set yet
    }

    const calculatedWeekly = Math.max(1, Math.round((totalScheduledHours / 4) * 10) / 10);
    return calculatedWeekly;
  }, [plannerMode, targetDateAnalysis.requiredWeeklyHours, scheduleMap]);

  // Keep progress context weekly hours in sync
  useEffect(() => {
    if (activeWeeklyAverageHours > 0 && Math.abs(weeklyStudyHours - activeWeeklyAverageHours) > 0.4) {
      setWeeklyHours(Math.round(activeWeeklyAverageHours));
    }
  }, [activeWeeklyAverageHours, weeklyStudyHours, setWeeklyHours]);

  // Estimated completion date:
  // In Target End Date mode, it is strictly the selected targetGraduationDate!
  // In Hours per Day mode, it calculates based on accumulated hours in the scheduleMap
  const calculatedGraduationDate = useMemo(() => {
    if (plannerMode === 'target_end_date') {
      return targetGraduationDate;
    }

    const today = new Date();
    let accumulatedHours = 0;
    let targetDate = new Date(today);
    let totalScheduledInMap = 0;

    Object.values(scheduleMap).forEach((s: DaySchedule) => {
      totalScheduledInMap += s.hours;
    });

    // If map has active hours, walk day-by-day
    if (totalScheduledInMap > 0) {
      for (let i = 0; i < 365; i++) {
        const d = new Date(today);
        d.setDate(d.getDate() + i);
        const key = d.toISOString().split('T')[0];
        const dayHours = scheduleMap[key]?.hours ?? 0;
        accumulatedHours += dayHours;

        if (accumulatedHours >= TOTAL_STUDY_HOURS) {
          return d;
        }
      }
    }

    // Fallback based on weekly average
    const weeksNeeded = Math.ceil(TOTAL_STUDY_HOURS / Math.max(1, activeWeeklyAverageHours));
    targetDate.setDate(targetDate.getDate() + weeksNeeded * 7);
    return targetDate;
  }, [plannerMode, targetGraduationDate, scheduleMap, activeWeeklyAverageHours]);

  const estimatedTotalWeeks = useMemo(() => {
    if (plannerMode === 'target_end_date') {
      return targetDateAnalysis.totalWeeks;
    }
    return Math.max(1, Math.ceil(TOTAL_STUDY_HOURS / Math.max(1, activeWeeklyAverageHours)));
  }, [plannerMode, targetDateAnalysis.totalWeeks, activeWeeklyAverageHours]);

  // Generate Week-by-Week Distribution based on units' estimatedHours
  // and real date ranges ending precisely on calculatedGraduationDate!
  const weeklyDistribution = useMemo(() => {
    const weeks: Array<{
      weekNumber: number;
      startDate: Date;
      endDate: Date;
      units: Array<{ id: number; number: number; title: string; hours: number; category: string }>;
      totalWeekHours: number;
    }> = [];

    const effectivePace = Math.max(2, activeWeeklyAverageHours);
    let currentWeekUnits: Array<{ id: number; number: number; title: string; hours: number; category: string }> = [];
    let currentWeekHours = 0;
    let weekIndex = 1;

    ALL_GRAMMAR_UNITS.forEach((unit) => {
      if (currentWeekHours + unit.estimatedHours > effectivePace && currentWeekUnits.length > 0) {
        weeks.push({
          weekNumber: weekIndex,
          startDate: new Date(),
          endDate: new Date(),
          units: [...currentWeekUnits],
          totalWeekHours: currentWeekHours
        });
        weekIndex++;
        currentWeekUnits = [];
        currentWeekHours = 0;
      }
      currentWeekUnits.push({
        id: unit.id,
        number: unit.number,
        title: unit.title,
        hours: unit.estimatedHours,
        category: unit.category
      });
      currentWeekHours += unit.estimatedHours;
    });

    if (currentWeekUnits.length > 0) {
      weeks.push({
        weekNumber: weekIndex,
        startDate: new Date(),
        endDate: new Date(),
        units: [...currentWeekUnits],
        totalWeekHours: currentWeekHours
      });
    }

    // Compute exact calendar dates for each week so the final week ends on calculatedGraduationDate
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const totalWks = weeks.length;

    weeks.forEach((wk, idx) => {
      const wkStart = new Date(today);
      wkStart.setDate(today.getDate() + idx * 7);
      
      const wkEnd = new Date(today);
      if (idx === totalWks - 1 && plannerMode === 'target_end_date') {
        // Last week ends exactly on target date chosen by user
        wk.endDate = new Date(calculatedGraduationDate);
      } else {
        wkEnd.setDate(today.getDate() + (idx + 1) * 7 - 1);
        wk.endDate = wkEnd;
      }
      wk.startDate = wkStart;
    });

    return weeks;
  }, [activeWeeklyAverageHours, calculatedGraduationDate, plannerMode]);

  // Calendar generation helpers
  const calendarDays = useMemo(() => {
    const year = currentMonth.getFullYear();
    const month = currentMonth.getMonth();

    const firstDayIndex = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const daysInPrevMonth = new Date(year, month, 0).getDate();

    const days: Array<{
      date: Date;
      dateKey: string;
      isCurrentMonth: boolean;
      isToday: boolean;
      isSelected: boolean;
      isTargetDate: boolean;
      hours: number;
      timeSlot?: string;
    }> = [];

    const todayKey = new Date().toISOString().split('T')[0];

    // Previous month filler days
    for (let i = firstDayIndex - 1; i >= 0; i--) {
      const d = new Date(year, month - 1, daysInPrevMonth - i);
      const key = d.toISOString().split('T')[0];
      const sched = scheduleMap[key] || { hours: 0 };
      days.push({
        date: d,
        dateKey: key,
        isCurrentMonth: false,
        isToday: key === todayKey,
        isSelected: key === selectedDateKey,
        isTargetDate: key === targetDateKey,
        hours: sched.hours,
        timeSlot: sched.timeSlot
      });
    }

    // Current month days
    for (let day = 1; day <= daysInMonth; day++) {
      const d = new Date(year, month, day);
      const key = d.toISOString().split('T')[0];
      const sched = scheduleMap[key] || { hours: 0 };
      days.push({
        date: d,
        dateKey: key,
        isCurrentMonth: true,
        isToday: key === todayKey,
        isSelected: key === selectedDateKey,
        isTargetDate: key === targetDateKey,
        hours: sched.hours,
        timeSlot: sched.timeSlot
      });
    }

    // Next month filler days to complete 35 or 42 grid cells
    const remaining = (7 - (days.length % 7)) % 7;
    for (let i = 1; i <= remaining; i++) {
      const d = new Date(year, month + 1, i);
      const key = d.toISOString().split('T')[0];
      const sched = scheduleMap[key] || { hours: 0 };
      days.push({
        date: d,
        dateKey: key,
        isCurrentMonth: false,
        isToday: key === todayKey,
        isSelected: key === selectedDateKey,
        isTargetDate: key === targetDateKey,
        hours: sched.hours,
        timeSlot: sched.timeSlot
      });
    }

    return days;
  }, [currentMonth, scheduleMap, selectedDateKey, targetDateKey]);

  const handlePrevMonth = () => {
    setCurrentMonth((prev) => {
      const next = new Date(prev);
      next.setMonth(next.getMonth() - 1);
      return next;
    });
  };

  const handleNextMonth = () => {
    setCurrentMonth((prev) => {
      const next = new Date(prev);
      next.setMonth(next.getMonth() + 1);
      return next;
    });
  };

  const handleGoToToday = () => {
    const today = new Date();
    setSelectedDate(today);
    const startOfMonth = new Date(today.getFullYear(), today.getMonth(), 1);
    setCurrentMonth(startOfMonth);
  };

  // Handle clicking on a calendar day based on active mode
  const handleCalendarDayClick = (date: Date) => {
    setSelectedDate(date);
    if (plannerMode === 'target_end_date') {
      setTargetGraduationDate(date);
    }
  };

  // Action: "Criar Agenda de Estudos"
  const handleCreateAgenda = () => {
    setIsAgendaCreated(true);
    localStorage.setItem('insight_agenda_created', 'true');
    window.scrollTo({ top: 580, behavior: 'smooth' });
  };

  const handleResetAgenda = () => {
    setIsAgendaCreated(false);
    localStorage.setItem('insight_agenda_created', 'false');
  };

  const handleGenerateAiPlan = async () => {
    setIsAiGenerating(true);
    try {
      const res = await fetch('/api/gemini/generate-planner', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          weeklyHours: activeWeeklyAverageHours,
          goal: studentGoal,
          currentStreak: user?.studyStreakDays || 14
        })
      });

      if (!res.ok) throw new Error('Falha ao gerar plano com IA');
      const data = await res.json();
      setAiCustomPlan(data.planSummary);
    } catch (e) {
      console.error(e);
      setAiCustomPlan(
        `Estratégia Recomendada para sua meta (${studentGoal}):
- Com seu planejamento para concluir em ${calculatedGraduationDate.toLocaleDateString('pt-BR', { day: '2-digit', month: 'long', year: 'numeric' })}, sua média ideal é de ~${activeWeeklyAverageHours}h semanais.
- Divisão sugerida por sessão de estudo:
  1. Teoria & Videoaula explicativa (35%).
  2. 10 Exercícios de Fixação passo a passo (35%).
  3. Prática oral no Laboratório de Conversação com IA (30%).
- Conclusão garantida das 30 unidades do curso (68h totais) exatamente no prazo estabelecido!`
      );
    } finally {
      setIsAiGenerating(false);
    }
  };

  const monthTitle = currentMonth.toLocaleDateString('pt-BR', { month: 'long', year: 'numeric' });
  const selectedDayFormatted = selectedDate.toLocaleDateString('pt-BR', { 
    weekday: 'long', 
    day: '2-digit', 
    month: 'long', 
    year: 'numeric' 
  });
  const targetDayFormatted = targetGraduationDate.toLocaleDateString('pt-BR', { 
    weekday: 'long', 
    day: '2-digit', 
    month: 'long', 
    year: 'numeric' 
  });

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8 animate-fadeIn">
      
      {/* Header Banner */}
      <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm relative overflow-hidden">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="flex items-center space-x-2">
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 text-blue-700 border border-blue-200 flex items-center space-x-1">
                <CalendarIcon className="w-3.5 h-3.5 text-blue-600" />
                <span>Planner Oficial Insight English</span>
              </span>
              <span className="text-xs text-slate-500">Carga Horária Total: {TOTAL_STUDY_HOURS} Horas (30 Unidades)</span>
            </div>

            <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              Calendário & Agenda Inteligente de Estudos
            </h1>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              {plannerMode === 'target_end_date' 
                ? 'Escolha no calendário o último dia de aula que deseja terminar o curso. O sistema calculará o ritmo e criará a agenda completa com término exato nessa data.'
                : 'Defina as horas dia a dia no calendário (inicia com 0h por padrão para você marcar apenas os dias que irá estudar).'}
            </p>
          </div>

          {/* Quick Graduation Card */}
          <div className="w-full lg:w-auto bg-slate-50 border border-slate-200 rounded-xl p-5 sm:min-w-[280px] shadow-sm space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs text-slate-500 font-medium block">
                {plannerMode === 'target_end_date' ? 'Último Dia de Aula Escolhido' : 'Previsão de Conclusão (68h)'}
              </span>
              {plannerMode === 'target_end_date' && (
                <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-blue-100 text-blue-800">
                  Meta Fixa
                </span>
              )}
            </div>
            <div className="text-lg sm:text-xl font-bold text-blue-700">
              {calculatedGraduationDate.toLocaleDateString('pt-BR', { day: '2-digit', month: 'long', year: 'numeric' })}
            </div>
            <div className="pt-2 border-t border-slate-200 text-xs text-slate-600 flex items-center justify-between">
              <span>{estimatedTotalWeeks} semanas de estudo</span>
              <span className="text-emerald-600 font-semibold font-mono">~{activeWeeklyAverageHours}h / semana</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Interactive Planner Section */}
      <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm space-y-6">
        
        {/* Top Control Bar: Mode Toggle Buttons + Calendar Navigation */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-4 border-b border-slate-100">
          
          {/* Mode Toggle Buttons (Novo Botão ao lado do Calendário para Mudar o Estilo de Escolha) */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-2">
            <span className="text-xs font-bold text-slate-600 uppercase tracking-wider mr-1">
              Modo de Seleção:
            </span>
            <div className="inline-flex rounded-xl bg-slate-100 p-1 border border-slate-200 shadow-2xs">
              
              {/* Mode Button 1: Target End Date (Simples - Clica na Data Final) */}
              <button
                onClick={() => setPlannerMode('target_end_date')}
                className={`flex items-center space-x-2 px-3.5 py-2 rounded-lg text-xs font-bold transition-all ${
                  plannerMode === 'target_end_date'
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'text-slate-700 hover:text-slate-900 hover:bg-slate-200/60'
                }`}
              >
                <Target className="w-3.5 h-3.5" />
                <span>Escolher Data Final (Último Dia)</span>
              </button>

              {/* Mode Button 2: Hours Per Day (Personalizar Horas) */}
              <button
                onClick={() => setPlannerMode('hours_per_day')}
                className={`flex items-center space-x-2 px-3.5 py-2 rounded-lg text-xs font-bold transition-all ${
                  plannerMode === 'hours_per_day'
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'text-slate-700 hover:text-slate-900 hover:bg-slate-200/60'
                }`}
              >
                <Sliders className="w-3.5 h-3.5" />
                <span>Agendar Horas por Dia (0h Padrão)</span>
              </button>

            </div>
          </div>

          {/* Month Navigation Controls */}
          <div className="flex items-center space-x-2">
            <button
              onClick={handleGoToToday}
              className="px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold border border-slate-200 transition-colors"
            >
              Hoje
            </button>
            <div className="flex items-center space-x-1 border border-slate-200 rounded-lg p-0.5 bg-slate-50">
              <button
                onClick={handlePrevMonth}
                aria-label="Mês Anterior"
                className="p-1.5 rounded-md hover:bg-white text-slate-600 hover:text-slate-900 transition-colors"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={handleNextMonth}
                aria-label="Próximo Mês"
                className="p-1.5 rounded-md hover:bg-white text-slate-600 hover:text-slate-900 transition-colors"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* 2-Column Layout: Calendar Grid (Left) + Selected Inspector (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          
          {/* Left: Interactive Calendar Grid */}
          <div className="lg:col-span-7 space-y-3">
            
            {/* Calendar Month Title & Helper Text */}
            <div className="flex items-center justify-between">
              <h2 className="text-base font-bold text-slate-900 capitalize flex items-center space-x-2">
                <CalendarDays className="w-4 h-4 text-blue-600" />
                <span>{monthTitle}</span>
              </h2>
              <span className="text-xs text-slate-500 font-medium">
                {plannerMode === 'target_end_date'
                  ? 'Clique no dia desejado para ser o último dia de aula'
                  : 'Clique nos dias para definir as horas de estudo'}
              </span>
            </div>

            {/* Days of Week Header */}
            <div className="grid grid-cols-7 gap-1 text-center font-semibold text-xs text-slate-500 pb-1">
              {['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'].map((dayName, idx) => (
                <div key={dayName} className={`py-1 ${idx === 0 || idx === 6 ? 'text-slate-400' : 'text-slate-700'}`}>
                  {dayName}
                </div>
              ))}
            </div>

            {/* Calendar Cells Grid */}
            <div className="grid grid-cols-7 gap-1.5 sm:gap-2">
              {calendarDays.map((cell) => {
                const dayNumber = cell.date.getDate();
                const isZero = cell.hours === 0;
                const isTarget = plannerMode === 'target_end_date' && cell.isTargetDate;

                return (
                  <button
                    key={cell.dateKey}
                    onClick={() => handleCalendarDayClick(cell.date)}
                    className={`min-h-[76px] sm:min-h-[84px] p-2 rounded-xl border text-left flex flex-col justify-between transition-all relative ${
                      isTarget
                        ? 'bg-blue-600 border-blue-600 text-white shadow-md ring-2 ring-blue-400/40 z-20 scale-[1.02]'
                        : cell.isSelected
                        ? 'bg-blue-50/90 border-blue-500 ring-2 ring-blue-500/20 shadow-sm z-10'
                        : cell.isCurrentMonth
                        ? 'bg-white hover:bg-slate-50 border-slate-200'
                        : 'bg-slate-50/60 hover:bg-slate-100/60 border-slate-100 text-slate-400'
                    }`}
                  >
                    {/* Top Row: Day Number & Target/Today Indicator */}
                    <div className="flex items-center justify-between w-full">
                      <span
                        className={`text-xs font-bold ${
                          isTarget
                            ? 'text-white font-black'
                            : cell.isToday
                            ? 'w-5 h-5 rounded-full bg-blue-600 text-white flex items-center justify-center text-[11px]'
                            : cell.isSelected
                            ? 'text-blue-700 font-extrabold'
                            : cell.isCurrentMonth
                            ? 'text-slate-800'
                            : 'text-slate-400'
                        }`}
                      >
                        {dayNumber}
                      </span>

                      {isTarget && (
                        <span className="p-0.5 rounded bg-white/20 text-white">
                          <Award className="w-3 h-3" />
                        </span>
                      )}

                      {!isTarget && cell.isSelected && (
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse" />
                      )}
                    </div>

                    {/* Bottom Row: Hours / Target Label */}
                    <div className="w-full mt-1">
                      {isTarget ? (
                        <span className="block text-[10px] font-black uppercase tracking-wider bg-white text-blue-800 px-1.5 py-0.5 rounded text-center shadow-xs">
                          Último Dia
                        </span>
                      ) : isZero ? (
                        <span className="inline-block text-[10px] font-medium text-slate-400 bg-slate-100 px-1.5 py-0.5 rounded">
                          0h
                        </span>
                      ) : (
                        <span className={`inline-flex items-center space-x-0.5 text-[10px] font-bold px-1.5 py-0.5 rounded shadow-2xs ${
                          cell.isSelected
                            ? 'bg-blue-600 text-white'
                            : cell.hours >= 2
                            ? 'bg-purple-100 text-purple-800 border border-purple-200'
                            : 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                        }`}>
                          <Clock className="w-2.5 h-2.5" />
                          <span>{cell.hours}h</span>
                        </span>
                      )}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Quick Helper Legend */}
            <div className="flex flex-wrap items-center justify-between gap-3 pt-2 text-[11px] text-slate-500">
              {plannerMode === 'target_end_date' ? (
                <div className="flex items-center space-x-2 text-blue-700 font-medium">
                  <Award className="w-3.5 h-3.5 text-blue-600" />
                  <span>Selecione qualquer dia futuro no calendário como sua meta final</span>
                </div>
              ) : (
                <div className="flex items-center space-x-3">
                  <span className="flex items-center space-x-1">
                    <span className="w-2.5 h-2.5 rounded-full bg-slate-300 inline-block" />
                    <span>0h (Padrão)</span>
                  </span>
                  <span className="flex items-center space-x-1">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 inline-block" />
                    <span>Estudo (0.5h–1.5h)</span>
                  </span>
                  <span className="flex items-center space-x-1">
                    <span className="w-2.5 h-2.5 rounded-full bg-purple-500 inline-block" />
                    <span>Intensivo (2h+)</span>
                  </span>
                </div>
              )}

              {plannerMode === 'hours_per_day' && (
                <button
                  onClick={handleClearAllHours}
                  className="text-slate-500 hover:text-red-600 flex items-center space-x-1 transition-colors"
                >
                  <Trash2 className="w-3 h-3" />
                  <span>Zerar todas as horas (Voltar a 0h)</span>
                </button>
              )}
            </div>

          </div>

          {/* Right: Inspector & Configuration Panel */}
          <div className="lg:col-span-5 bg-slate-50 border border-slate-200 rounded-xl p-5 space-y-5 animate-fadeIn">
            
            {/* MODE 1: TARGET END DATE (SIMPLIFIED / ESCOLHER DATA FINAL) */}
            {plannerMode === 'target_end_date' ? (
              <div className="space-y-5">
                
                {/* Header */}
                <div className="border-b border-slate-200 pb-3 space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-bold text-blue-700 uppercase tracking-wider flex items-center space-x-1">
                      <Target className="w-3.5 h-3.5" />
                      <span>Data Final de Conclusão</span>
                    </span>
                    <span className="px-2 py-0.5 rounded bg-blue-100 text-blue-800 text-xs font-mono font-bold">
                      {targetDateAnalysis.totalWeeks} semanas
                    </span>
                  </div>
                  <h3 className="text-sm sm:text-base font-bold text-slate-900 capitalize flex items-center space-x-1.5">
                    <CalendarCheck className="w-4 h-4 text-blue-600" />
                    <span>{targetDayFormatted}</span>
                  </h3>
                  <p className="text-xs text-slate-500">
                    Este será o <strong>último dia de aula da sua Agenda</strong> de 68 horas.
                  </p>
                </div>

                {/* Calculation Summary Card */}
                <div className="bg-white border border-slate-200 rounded-xl p-4 space-y-3 shadow-2xs">
                  <span className="text-xs font-bold text-slate-700 block">
                    Cálculo Automático de Ritmo:
                  </span>

                  <div className="grid grid-cols-2 gap-3 text-xs">
                    <div className="p-3 bg-blue-50/70 border border-blue-100 rounded-lg space-y-1">
                      <span className="text-slate-500 text-[11px] block">Prazo Total:</span>
                      <strong className="text-slate-900 text-sm block">
                        {targetDateAnalysis.totalDays} dias
                      </strong>
                      <span className="text-blue-700 text-[11px]">
                        ({targetDateAnalysis.totalWeeks} semanas)
                      </span>
                    </div>

                    <div className="p-3 bg-emerald-50/70 border border-emerald-100 rounded-lg space-y-1">
                      <span className="text-slate-500 text-[11px] block">Carga Semanal:</span>
                      <strong className="text-emerald-800 text-sm block">
                        ~{targetDateAnalysis.requiredWeeklyHours}h / sem
                      </strong>
                      <span className="text-slate-500 text-[11px]">
                        (~{targetDateAnalysis.dailyStudyHours5Days}h/dia seg-sex)
                      </span>
                    </div>
                  </div>

                  <div className="text-[11px] text-slate-600 leading-relaxed bg-slate-50 p-2.5 rounded-lg border border-slate-200/60">
                    ✨ Ao clicar em <strong>"Criar Agenda de Estudos"</strong> abaixo, o cronograma distribuirá as 30 unidades do curso semana a semana e terminará com exatidão em <strong>{targetGraduationDate.toLocaleDateString('pt-BR', { day: '2-digit', month: '2-digit', year: 'numeric' })}</strong>.
                  </div>
                </div>

              </div>
            ) : (
              /* MODE 2: HOURS PER DAY (MENU DE HORAS DO DIA ESCOLHIDO COM 0H PADRÃO) */
              <div className="space-y-5">
                
                {/* Day Header */}
                <div className="border-b border-slate-200 pb-3 space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-bold text-blue-700 uppercase tracking-wider">
                      Menu de Horas do Dia
                    </span>
                    <span className={`px-2 py-0.5 rounded text-xs font-mono font-bold ${
                      currentDaySchedule.hours > 0 ? 'bg-blue-100 text-blue-800' : 'bg-slate-200 text-slate-700'
                    }`}>
                      {currentDaySchedule.hours} horas
                    </span>
                  </div>
                  <h3 className="text-sm font-bold text-slate-900 capitalize">
                    {selectedDayFormatted}
                  </h3>
                </div>

                {/* 1. Hours Selection Buttons */}
                <div className="space-y-2">
                  <label className="block text-xs font-semibold text-slate-700">
                    Quanto tempo você vai estudar neste dia?
                  </label>
                  
                  <div className="grid grid-cols-3 sm:grid-cols-4 gap-1.5">
                    {HOUR_PRESETS.map((preset) => {
                      const isCurrent = currentDaySchedule.hours === preset.hours;
                      return (
                        <button
                          key={preset.hours}
                          onClick={() => handleUpdateDayHours(preset.hours)}
                          className={`py-2 px-2 rounded-lg text-xs font-bold transition-all ${
                            isCurrent
                              ? 'bg-blue-600 text-white shadow-sm scale-[1.02]'
                              : 'bg-white hover:bg-slate-100 text-slate-700 border border-slate-200'
                          }`}
                        >
                          {preset.label}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* 2. Preferred Study Slot / Turno */}
                {currentDaySchedule.hours > 0 && (
                  <div className="space-y-2 animate-fadeIn">
                    <label className="block text-xs font-semibold text-slate-700">
                      Horário / Turno de Estudo:
                    </label>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {DEFAULT_TIME_SLOTS.map((slot) => {
                        const isSelected = currentDaySchedule.timeSlot === slot.id;
                        const IconComp = slot.icon;
                        return (
                          <button
                            key={slot.id}
                            onClick={() => handleUpdateDayTimeSlot(slot.id)}
                            className={`flex items-center space-x-2 p-2.5 rounded-lg text-left text-xs font-medium transition-all border ${
                              isSelected
                                ? 'bg-blue-50 border-blue-500 text-blue-900 font-semibold'
                                : 'bg-white hover:bg-slate-100 border-slate-200 text-slate-700'
                            }`}
                          >
                            <IconComp className={`w-3.5 h-3.5 shrink-0 ${isSelected ? 'text-blue-600' : 'text-slate-400'}`} />
                            <span className="truncate">{slot.label}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* 3. Replicate Action */}
                <div className="pt-2 border-t border-slate-200">
                  <button
                    onClick={handleReplicateToSameWeekday}
                    className="w-full py-2 px-3 rounded-lg bg-white hover:bg-slate-100 text-slate-700 border border-slate-300 text-xs font-semibold transition-colors flex items-center justify-center space-x-1.5 shadow-2xs"
                  >
                    <Copy className="w-3.5 h-3.5 text-blue-600" />
                    <span>
                      Replicar {currentDaySchedule.hours}h em todas as{' '}
                      <strong className="capitalize">
                        {selectedDate.toLocaleDateString('pt-BR', { weekday: 'long' }).split('-')[0]}s
                      </strong>{' '}
                      deste mês
                    </span>
                  </button>
                </div>

                {/* Recommended Activity for this Day */}
                {currentDaySchedule.hours > 0 && (
                  <div className="p-3 rounded-lg bg-blue-50/60 border border-blue-200/80 text-xs text-slate-700 space-y-1">
                    <span className="font-semibold text-blue-900 block">Atividades planejadas no dia:</span>
                    <p className="text-[11px] leading-relaxed text-slate-600">
                      {Math.round(currentDaySchedule.hours * 0.4 * 60)}min de Videoaula & Regras • {Math.round(currentDaySchedule.hours * 0.3 * 60)}min de 10 Exercícios • {Math.round(currentDaySchedule.hours * 0.3 * 60)}min de Conversação IA.
                    </p>
                  </div>
                )}

              </div>
            )}

          </div>

        </div>

        {/* Student Goal & AI Recommendation Option */}
        <div className="pt-4 border-t border-slate-100 grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
          
          <div className="md:col-span-2 space-y-1.5">
            <label className="block text-xs font-semibold text-slate-700">
              Objetivo Principal do Aluno:
            </label>
            <select
              value={studentGoal}
              onChange={(e) => setStudentGoal(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-300 text-xs text-slate-800 focus:outline-none focus:border-blue-500"
            >
              <option value="Fluência para Carreira Internacional">Fluência para Carreira Internacional</option>
              <option value="Viagens e Imersão no Exterior">Viagens e Imersão no Exterior</option>
              <option value="Exames de Proficiência (IELTS/TOEFL)">Exames de Proficiência (IELTS/TOEFL)</option>
              <option value="Comunicação e Conversação Rápida">Comunicação e Conversação Rápida</option>
            </select>
          </div>

          <div>
            <button
              onClick={handleGenerateAiPlan}
              disabled={isAiGenerating}
              className="w-full py-2.5 px-4 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 border border-slate-300 text-xs font-semibold shadow-sm transition-all flex items-center justify-center space-x-2"
            >
              {isAiGenerating ? (
                <>
                  <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                  <span>Gerando Insights...</span>
                </>
              ) : (
                <>
                  <Sparkles className="w-3.5 h-3.5 text-blue-600" />
                  <span>Dicas Pedagógicas da IA</span>
                </>
              )}
            </button>
          </div>

        </div>

        {/* AI Insight Box */}
        {aiCustomPlan && (
          <div className="p-5 rounded-xl bg-blue-50 border border-blue-200 text-xs text-slate-800 space-y-2 animate-fadeIn">
            <div className="flex items-center space-x-1.5 text-blue-700 font-bold uppercase tracking-wider">
              <Zap className="w-4 h-4" />
              <span>Recomendações do Tutor Inteligente Gemini</span>
            </div>
            <p className="whitespace-pre-line leading-relaxed">{aiCustomPlan}</p>
          </div>
        )}

        {/* Primary CTA: "Criar Agenda de Estudos" */}
        {!isAgendaCreated ? (
          <div className="pt-6 border-t border-slate-200 flex flex-col items-center justify-center text-center space-y-4 py-4">
            <div className="max-w-md space-y-1">
              <h3 className="text-base font-bold text-slate-900">
                {plannerMode === 'target_end_date'
                  ? 'Pronto para gerar sua agenda até a data escolhida?'
                  : 'Tudo pronto com seu calendário?'}
              </h3>
              <p className="text-xs text-slate-500">
                {plannerMode === 'target_end_date'
                  ? `O sistema distribuirá as 68 horas e 30 unidades do curso para que o último dia de aula seja exatamente em ${targetGraduationDate.toLocaleDateString('pt-BR', { day: '2-digit', month: 'long', year: 'numeric' })}.`
                  : 'Ao clicar no botão abaixo, o planner distribuirá todas as 30 unidades do curso com as 68 horas nas semanas calculadas.'}
              </p>
            </div>

            <button
              id="btn-create-agenda"
              onClick={handleCreateAgenda}
              className="px-8 py-3.5 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm shadow-md shadow-blue-500/20 transition-all hover:scale-105 flex items-center space-x-2.5"
            >
              <Sparkles className="w-4 h-4 text-blue-200" />
              <span>Criar Agenda de Estudos</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        ) : (
          <div className="pt-4 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center space-x-2 text-emerald-700 text-xs font-semibold">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>
                Agenda de Estudos Ativa &bull; Término Programado para{' '}
                <strong>{calculatedGraduationDate.toLocaleDateString('pt-BR', { day: '2-digit', month: 'long', year: 'numeric' })}</strong>
              </span>
            </div>

            <div className="flex items-center space-x-2">
              <button
                onClick={handleCreateAgenda}
                className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold shadow-sm transition-all flex items-center space-x-1.5"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                <span>Atualizar Agenda</span>
              </button>

              <button
                onClick={handleResetAgenda}
                className="px-3.5 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-600 text-xs font-semibold border border-slate-200 transition-colors"
                title="Redefinir visualização da agenda"
              >
                <RotateCcw className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        )}

      </div>

      {/* Week-by-Week Agenda Details (RENDERED ONLY AFTER USER CLICKS "CRIAR AGENDA DE ESTUDOS") */}
      {isAgendaCreated && (
        <div className="space-y-6 animate-fadeIn">
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div className="flex items-center space-x-2 text-slate-900">
              <CalendarDays className="w-5 h-5 text-blue-600" />
              <h2 className="font-bold text-xl">
                Cronograma Semanal Detalhado ({weeklyDistribution.length} Semanas &bull; 68 Horas)
              </h2>
            </div>
            <span className="text-xs text-slate-500">
              Término: {calculatedGraduationDate.toLocaleDateString('pt-BR', { day: '2-digit', month: 'long', year: 'numeric' })}
            </span>
          </div>

          <div className="space-y-4">
            {weeklyDistribution.map((week) => {
              const formattedWeekPeriod = `${week.startDate.toLocaleDateString('pt-BR', { day: '2-digit', month: '2-digit' })} a ${week.endDate.toLocaleDateString('pt-BR', { day: '2-digit', month: '2-digit' })}`;
              const isFinalWeek = week.weekNumber === weeklyDistribution.length;

              return (
                <div
                  key={week.weekNumber}
                  className={`bg-white border rounded-xl p-5 sm:p-6 space-y-4 shadow-sm hover:border-slate-300 transition-all ${
                    isFinalWeek ? 'border-blue-300 ring-1 ring-blue-200' : 'border-slate-200'
                  }`}
                >
                  {/* Week Header */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-slate-100">
                    <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                      <span className={`px-3 py-1 rounded-md font-mono font-bold text-xs border ${
                        isFinalWeek 
                          ? 'bg-blue-600 text-white border-blue-600'
                          : 'bg-blue-50 text-blue-700 border-blue-200'
                      }`}>
                        SEMANA {week.weekNumber}
                      </span>
                      <span className="text-xs font-semibold text-slate-500 bg-slate-100 px-2.5 py-0.5 rounded-md">
                        {formattedWeekPeriod}
                      </span>
                      <h3 className="font-bold text-sm text-slate-900">
                        {week.units.map((u) => `Unidade ${u.number}`).join(' & ')}
                      </h3>
                    </div>

                    <div className="flex items-center space-x-3 text-xs text-slate-500">
                      {isFinalWeek && (
                        <span className="text-[11px] font-bold text-blue-700 bg-blue-50 border border-blue-200 px-2 py-0.5 rounded-md">
                          🎓 Semana de Formatura ({week.endDate.toLocaleDateString('pt-BR', { day: '2-digit', month: '2-digit', year: 'numeric' })})
                        </span>
                      )}
                      <span className="flex items-center space-x-1 text-blue-700 font-medium bg-blue-50 px-2.5 py-0.5 rounded-md border border-blue-100">
                        <Clock className="w-3.5 h-3.5" />
                        <span>{week.totalWeekHours} horas</span>
                      </span>
                    </div>
                  </div>

                  {/* Units within the Week */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {week.units.map((unit) => {
                      const taskId1 = `task_${unit.id}_theory`;
                      const taskId2 = `task_${unit.id}_exercises`;
                      const taskId3 = `task_${unit.id}_speaking`;

                      return (
                        <div
                          key={unit.id}
                          className="bg-slate-50 border border-slate-200 rounded-xl p-4 space-y-3"
                        >
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-2">
                              <span className="w-6 h-6 rounded-md bg-blue-100 text-blue-800 text-xs font-mono font-bold flex items-center justify-center">
                                {unit.number}
                              </span>
                              <span className="text-xs font-bold text-slate-900 truncate max-w-[200px]">
                                {unit.title}
                              </span>
                            </div>

                            <button
                              onClick={() => onSelectUnit(unit.id)}
                              className="text-xs text-blue-600 hover:text-blue-800 font-semibold flex items-center space-x-0.5"
                            >
                              <span>Abrir</span>
                              <ChevronRight className="w-3.5 h-3.5" />
                            </button>
                          </div>

                          {/* Task Breakdown Checklist */}
                          <div className="space-y-1.5 pt-1 text-xs">
                            <div
                              onClick={() => togglePlannerTask(taskId1)}
                              className="flex items-center space-x-2 text-slate-700 hover:text-slate-900 cursor-pointer select-none"
                            >
                              {completedPlannerTaskIds.includes(taskId1) ? (
                                <CheckSquare className="w-4 h-4 text-emerald-600 shrink-0" />
                              ) : (
                                <Square className="w-4 h-4 text-slate-400 shrink-0" />
                              )}
                              <span className={completedPlannerTaskIds.includes(taskId1) ? 'line-through text-slate-400' : ''}>
                                Assistir Videoaula & Regras ({Math.round(unit.hours * 0.4 * 10) / 10}h)
                              </span>
                            </div>

                            <div
                              onClick={() => togglePlannerTask(taskId2)}
                              className="flex items-center space-x-2 text-slate-700 hover:text-slate-900 cursor-pointer select-none"
                            >
                              {completedPlannerTaskIds.includes(taskId2) ? (
                                <CheckSquare className="w-4 h-4 text-emerald-600 shrink-0" />
                              ) : (
                                <Square className="w-4 h-4 text-slate-400 shrink-0" />
                              )}
                              <span className={completedPlannerTaskIds.includes(taskId2) ? 'line-through text-slate-400' : ''}>
                                10 Exercícios de Fixação Passo a Passo ({Math.round(unit.hours * 0.3 * 10) / 10}h)
                              </span>
                            </div>

                            <div
                              onClick={() => togglePlannerTask(taskId3)}
                              className="flex items-center space-x-2 text-slate-700 hover:text-slate-900 cursor-pointer select-none"
                            >
                              {completedPlannerTaskIds.includes(taskId3) ? (
                                <CheckSquare className="w-4 h-4 text-emerald-600 shrink-0" />
                              ) : (
                                <Square className="w-4 h-4 text-slate-400 shrink-0" />
                              )}
                              <span className={completedPlannerTaskIds.includes(taskId3) ? 'line-through text-slate-400' : ''}>
                                Speaking & Avaliação no Tutor IA ({Math.round(unit.hours * 0.3 * 10) / 10}h)
                              </span>
                            </div>
                          </div>

                        </div>
                      );
                    })}
                  </div>

                </div>
              );
            })}
          </div>
        </div>
      )}

    </div>
  );
};
