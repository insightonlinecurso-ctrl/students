import React from 'react';
import { 
  BookOpen, 
  Calendar, 
  Clock, 
  GraduationCap, 
  Award, 
  Flame, 
  ArrowRight, 
  CheckCircle2, 
  PlayCircle,
  Headphones,
  Mic,
  FileText,
  PenTool,
  TrendingUp,
  AlertCircle,
  Sparkles,
  CalendarCheck
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useProgress } from '../context/ProgressContext';
import { ALL_GRAMMAR_UNITS, getUnitById } from '../data/allUnits';
import { INSIGHT_HEADER_BANNER, INSIGHT_LOGO_ICON } from '../assets/brand';

interface HomeViewProps {
  onGoToMaterial: (unitId?: number) => void;
  onGoToAulas: () => void;
  onGoToExtras: () => void;
  onGoToTestes: () => void;
  onGoToProfile: () => void;
}

export const HomeView: React.FC<HomeViewProps> = ({
  onGoToMaterial,
  onGoToAulas,
  onGoToExtras,
  onGoToTestes,
  onGoToProfile
}) => {
  const { user, isSubscriptionBlocked } = useAuth();
  const { 
    completedUnitIds, 
    overallProgressPercentage, 
    totalCompletedHours, 
    competencyScores 
  } = useProgress();

  // Find the unit where the student paused / next unit to study
  const nextUnitToStudy = React.useMemo(() => {
    const uncompleted = ALL_GRAMMAR_UNITS.find((u) => !completedUnitIds.includes(u.id));
    return uncompleted || ALL_GRAMMAR_UNITS[0];
  }, [completedUnitIds]);

  // Subscription calculation
  const daysRemaining = user?.subscriptionDaysLeft ?? 30;

  // Radar / Spider Chart calculation for 4 competencies
  // Listening (Top), Speaking (Right), Reading (Bottom), Writing (Left)
  const size = 260;
  const center = size / 2;
  const radius = 90;

  // Coordinates helper (angle 0 is top)
  const getPoint = (score: number, angleDeg: number) => {
    const r = (score / 100) * radius;
    const rad = ((angleDeg - 90) * Math.PI) / 180;
    return {
      x: center + r * Math.cos(rad),
      y: center + r * Math.sin(rad)
    };
  };

  const pListening = getPoint(competencyScores.listening, 0);   // Top
  const pSpeaking = getPoint(competencyScores.speaking, 90);    // Right
  const pReading = getPoint(competencyScores.reading, 180);     // Bottom
  const pWriting = getPoint(competencyScores.writing, 270);     // Left

  const polygonPoints = `${pListening.x},${pListening.y} ${pSpeaking.x},${pSpeaking.y} ${pReading.x},${pReading.y} ${pWriting.x},${pWriting.y}`;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      
      {/* Official Insight Brand Header Banner */}
      <div className="overflow-hidden rounded-3xl border border-slate-300/80 bg-[#8897a2] shadow-md relative transition-all group">
        <div className="relative w-full overflow-hidden flex flex-col justify-between min-h-[220px] sm:min-h-[260px] md:min-h-[300px]">
          {/* Panoramic Origami Header Background Image */}
          <div className="absolute inset-0 flex items-center justify-center bg-[#8897a2] overflow-hidden">
            <img 
              src={INSIGHT_HEADER_BANNER} 
              alt="Insight English Header"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-[1.01]"
            />
            {/* Subtle soft ambient gradient for legibility */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent pointer-events-none" />
          </div>

          {/* Top Floating Badges */}
          <div className="relative z-10 p-4 sm:p-6 flex items-center justify-between">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-slate-900/65 backdrop-blur-md border border-white/20 text-white shadow-xs">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-[11px] font-bold tracking-wide uppercase">Insight English Oficial</span>
            </div>
            <div className="hidden sm:inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-slate-900/65 backdrop-blur-md border border-white/20 text-white text-xs font-medium">
              <span className="text-slate-200">Metodologia 30 Unidades • Do A1 ao C2</span>
            </div>
          </div>

          {/* Bottom Integrated Glass Ribbon */}
          <div className="relative z-10 bg-slate-950/75 backdrop-blur-md border-t border-white/15 px-5 sm:px-8 py-3.5 sm:py-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-white">
            <div className="flex items-center space-x-3.5">
              <div className="w-10 h-10 rounded-xl overflow-hidden bg-white/10 border border-white/25 shadow-xs shrink-0 flex items-center justify-center p-0.5">
                <img 
                  src={INSIGHT_LOGO_ICON} 
                  alt="Insight Logo Icon"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <div>
                <div className="flex items-center space-x-2">
                  <span className="font-extrabold text-sm sm:text-base tracking-tight text-white">Insight English</span>
                  <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-blue-500/30 text-blue-300 border border-blue-400/30">
                    Plataforma do Aluno
                  </span>
                </div>
                <p className="text-xs text-slate-300 hidden md:block">
                  Gramática Aplicada • Planner Inteligente com IA • Testes de Proficiência CEFR
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-3 self-end sm:self-auto shrink-0 text-xs">
              <div className="hidden md:flex items-center space-x-1.5 text-slate-300 bg-white/10 px-3 py-1.5 rounded-xl border border-white/15">
                <span className="text-slate-400">Seu Nível:</span>
                <span className="font-bold text-white">{user?.cefrLevel || 'B1 (Intermediário)'}</span>
              </div>
              <button
                onClick={() => onGoToMaterial()}
                className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs transition-all shadow-sm hover:shadow-blue-500/25 active:scale-95 inline-flex items-center space-x-1.5"
              >
                <span>Acessar Material</span>
                <span>→</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Top Banner / Welcome Bar */}
      <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-xs flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="space-y-2">
          <div className="flex items-center space-x-2.5">
            <span className="text-xs uppercase font-bold tracking-wider px-2.5 py-0.5 rounded-full bg-blue-50 text-blue-700 border border-blue-200">
              Painel do Estudante
            </span>
            <span className="text-xs text-slate-500 font-medium">
              Nível CEFR: <strong className="text-slate-800 font-semibold">{user?.cefrLevel || 'B1 (Intermediário)'}</strong>
            </span>
          </div>

          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Olá, {user?.name ? user.name.split(' ')[0] : 'Aluno'}! Bem-vindo de volta.
          </h1>
          <p className="text-sm text-slate-600 max-w-2xl leading-relaxed">
            Seu centro de comando de fluência: acompanhe seu progresso nas 30 unidades, métricas das 4 competências e agendamento de aulas.
          </p>
        </div>

        {/* Counter of Days Remaining */}
        <div className="w-full md:w-auto shrink-0 bg-slate-900 text-white rounded-2xl p-5 border border-slate-800 shadow-md">
          <div className="flex items-center justify-between space-x-4 mb-2">
            <span className="text-xs uppercase font-bold text-slate-400 tracking-wider">
              Assinatura do Site
            </span>
            <span className={`inline-flex items-center px-2 py-0.5 rounded text-[11px] font-bold ${
              daysRemaining > 5 ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30' : 'bg-rose-500/20 text-rose-400 border border-rose-500/30'
            }`}>
              {daysRemaining > 0 ? 'Ativa' : 'Expirada'}
            </span>
          </div>

          <div className="flex items-baseline space-x-2">
            <span className="text-3xl font-black text-white font-mono tracking-tight">
              {daysRemaining}
            </span>
            <span className="text-xs text-slate-400 font-medium">
              dias restantes para renovar
            </span>
          </div>

          <div className="w-full bg-slate-800 h-2 rounded-full mt-3 overflow-hidden">
            <div 
              className="bg-blue-500 h-full rounded-full transition-all"
              style={{ width: `${Math.min(100, (daysRemaining / 30) * 100)}%` }}
            />
          </div>

          <div className="mt-3 text-right">
            <button
              onClick={onGoToProfile}
              className="text-[11px] font-semibold text-blue-400 hover:text-blue-300 hover:underline"
            >
              Ver detalhes ou renovar ciclo →
            </button>
          </div>
        </div>
      </div>

      {/* Grid: Unit Progress & Call to Actions */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left 7 cols: Current Unit Progress & Direct Action */}
        <div className="lg:col-span-7 space-y-6">
          
          {/* Continue Material Card */}
          <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-7 shadow-xs space-y-5">
            <div className="flex items-center justify-between border-b border-slate-100 pb-4">
              <div className="flex items-center space-x-2.5 text-blue-600">
                <BookOpen className="w-5 h-5" />
                <h2 className="font-bold text-lg text-slate-900">Progresso no Material Gramatical</h2>
              </div>
              <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-blue-50 text-blue-700 border border-blue-100 font-mono">
                {completedUnitIds.length} de 30 unidades concluídas
              </span>
            </div>

            {/* Overall Progress Bar */}
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs font-medium text-slate-600">
                <span>Conclusão Global do Curso</span>
                <span className="font-bold text-slate-900 font-mono">{overallProgressPercentage}%</span>
              </div>
              <div className="w-full bg-slate-100 h-3 rounded-full overflow-hidden border border-slate-200">
                <div 
                  className="bg-blue-600 h-full rounded-full transition-all duration-500 shadow-xs"
                  style={{ width: `${overallProgressPercentage}%` }}
                />
              </div>
            </div>

            {/* Current Unit Highlight Box */}
            <div className="p-5 rounded-2xl bg-blue-50/70 border border-blue-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="space-y-1">
                <div className="flex items-center space-x-2">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-blue-600 bg-white px-2 py-0.5 rounded border border-blue-200">
                    Onde você parou
                  </span>
                  <span className="text-xs text-slate-500">• {nextUnitToStudy.category}</span>
                </div>
                <h3 className="font-bold text-base text-slate-900">
                  Unidade {String(nextUnitToStudy.number).padStart(2, '0')}: {nextUnitToStudy.title}
                </h3>
                <p className="text-xs text-slate-600 line-clamp-1">
                  {nextUnitToStudy.subtitle}
                </p>
              </div>

              <button
                id="btn-home-continue-unit"
                onClick={() => onGoToMaterial(nextUnitToStudy.id)}
                className="shrink-0 flex items-center justify-center space-x-2 px-5 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold shadow-md shadow-blue-600/20 transition-all hover:scale-[1.02]"
              >
                <span>Continuar Esta Unidade</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Highlights metrics */}
            <div className="grid grid-cols-3 gap-3 pt-1 text-center">
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
                <span className="text-[11px] text-slate-500 font-medium block">Horas Dedicadas</span>
                <span className="text-lg font-black text-slate-900 font-mono">{totalCompletedHours}h</span>
              </div>
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
                <span className="text-[11px] text-slate-500 font-medium block">Sequência Diária</span>
                <span className="text-lg font-black text-amber-600 font-mono flex items-center justify-center space-x-1">
                  <Flame className="w-4 h-4 fill-amber-500 text-amber-500" />
                  <span>{user?.studyStreakDays || 1}d</span>
                </span>
              </div>
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
                <span className="text-[11px] text-slate-500 font-medium block">Unidades Restantes</span>
                <span className="text-lg font-black text-blue-700 font-mono">{30 - completedUnitIds.length}</span>
              </div>
            </div>
          </div>

          {/* Schedule Classes Direct Callout */}
          <div className="bg-gradient-to-br from-indigo-900 via-slate-900 to-blue-950 text-white border border-slate-800 rounded-3xl p-6 sm:p-7 shadow-md flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-indigo-400">
                <CalendarCheck className="w-5 h-5" />
                <span className="text-xs uppercase font-bold tracking-wider">Aulas Individuais ao Vivo</span>
              </div>
              <h3 className="text-lg font-bold text-white tracking-tight">
                Precisa tirar dúvidas ou praticar conversação 1 a 1?
              </h3>
              <p className="text-xs text-slate-300 max-w-md leading-relaxed">
                Agende sua aula personalizada integrada com o Calendly. Escolha seu tópico gramatical, pronúncia ou conversação livre.
              </p>
            </div>

            <button
              id="btn-home-book-class"
              onClick={onGoToAulas}
              className="shrink-0 flex items-center space-x-2 px-5 py-3 rounded-xl bg-indigo-500 hover:bg-indigo-400 text-white text-xs font-bold shadow-lg shadow-indigo-500/25 transition-all hover:scale-105"
            >
              <Calendar className="w-4 h-4" />
              <span>Marcar Aulas Agora</span>
            </button>
          </div>

        </div>

        {/* Right 5 cols: Gráfico de Desempenho por Competência (Listening, Speaking, Reading, Writing) */}
        <div className="lg:col-span-5 bg-white border border-slate-200 rounded-3xl p-6 sm:p-7 shadow-xs space-y-6">
          <div className="border-b border-slate-100 pb-4">
            <div className="flex items-center space-x-2 text-blue-600 mb-1">
              <TrendingUp className="w-5 h-5" />
              <h2 className="font-bold text-lg text-slate-900">Desempenho por Competência</h2>
            </div>
            <p className="text-xs text-slate-500">
              Dados extraídos em tempo real dos seus exercícios de fixação, conversação e testes.
            </p>
          </div>

          {/* Visual Radar Spider Chart */}
          <div className="flex flex-col items-center justify-center py-2">
            <div className="relative">
              <svg width={size} height={size} className="overflow-visible">
                {/* Background Concentric Rings (25%, 50%, 75%, 100%) */}
                {[0.25, 0.5, 0.75, 1.0].map((level, i) => (
                  <circle
                    key={i}
                    cx={center}
                    cy={center}
                    r={radius * level}
                    fill="none"
                    stroke="#E2E8F0"
                    strokeWidth="1"
                    strokeDasharray={level < 1 ? "3 3" : undefined}
                  />
                ))}

                {/* Axes lines */}
                <line x1={center} y1={center - radius} x2={center} y2={center + radius} stroke="#CBD5E1" strokeWidth="1" />
                <line x1={center - radius} y1={center} x2={center + radius} y2={center} stroke="#CBD5E1" strokeWidth="1" />

                {/* Student Score Polygon */}
                <polygon
                  points={polygonPoints}
                  fill="rgba(37, 99, 235, 0.2)"
                  stroke="#2563EB"
                  strokeWidth="2.5"
                />

                {/* Points */}
                <circle cx={pListening.x} cy={pListening.y} r="4.5" fill="#2563EB" className="transition-all" />
                <circle cx={pSpeaking.x} cy={pSpeaking.y} r="4.5" fill="#2563EB" className="transition-all" />
                <circle cx={pReading.x} cy={pReading.y} r="4.5" fill="#2563EB" className="transition-all" />
                <circle cx={pWriting.x} cy={pWriting.y} r="4.5" fill="#2563EB" className="transition-all" />
              </svg>

              {/* Competency Labels */}
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 text-center pointer-events-none">
                <span className="text-[11px] font-bold text-slate-800 bg-white px-2 py-0.5 rounded shadow-xs border border-slate-200">
                  Listening {competencyScores.listening}%
                </span>
              </div>

              <div className="absolute top-1/2 -right-10 -translate-y-1/2 text-center pointer-events-none">
                <span className="text-[11px] font-bold text-slate-800 bg-white px-2 py-0.5 rounded shadow-xs border border-slate-200">
                  Speaking {competencyScores.speaking}%
                </span>
              </div>

              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 text-center pointer-events-none">
                <span className="text-[11px] font-bold text-slate-800 bg-white px-2 py-0.5 rounded shadow-xs border border-slate-200">
                  Reading {competencyScores.reading}%
                </span>
              </div>

              <div className="absolute top-1/2 -left-8 -translate-y-1/2 text-center pointer-events-none">
                <span className="text-[11px] font-bold text-slate-800 bg-white px-2 py-0.5 rounded shadow-xs border border-slate-200">
                  Writing {competencyScores.writing}%
                </span>
              </div>
            </div>
          </div>

          {/* Competency Breakdown Meters */}
          <div className="space-y-3 pt-2">
            <div className="space-y-1">
              <div className="flex items-center justify-between text-xs">
                <span className="flex items-center space-x-1.5 text-slate-700 font-medium">
                  <Headphones className="w-3.5 h-3.5 text-blue-500" />
                  <span>Listening (Audição)</span>
                </span>
                <span className="font-bold text-slate-900 font-mono">{competencyScores.listening}%</span>
              </div>
              <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                <div className="bg-blue-600 h-full rounded-full" style={{ width: `${competencyScores.listening}%` }} />
              </div>
            </div>

            <div className="space-y-1">
              <div className="flex items-center justify-between text-xs">
                <span className="flex items-center space-x-1.5 text-slate-700 font-medium">
                  <Mic className="w-3.5 h-3.5 text-emerald-500" />
                  <span>Speaking (Fala)</span>
                </span>
                <span className="font-bold text-slate-900 font-mono">{competencyScores.speaking}%</span>
              </div>
              <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                <div className="bg-emerald-500 h-full rounded-full" style={{ width: `${competencyScores.speaking}%` }} />
              </div>
            </div>

            <div className="space-y-1">
              <div className="flex items-center justify-between text-xs">
                <span className="flex items-center space-x-1.5 text-slate-700 font-medium">
                  <FileText className="w-3.5 h-3.5 text-indigo-500" />
                  <span>Reading (Leitura)</span>
                </span>
                <span className="font-bold text-slate-900 font-mono">{competencyScores.reading}%</span>
              </div>
              <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                <div className="bg-indigo-500 h-full rounded-full" style={{ width: `${competencyScores.reading}%` }} />
              </div>
            </div>

            <div className="space-y-1">
              <div className="flex items-center justify-between text-xs">
                <span className="flex items-center space-x-1.5 text-slate-700 font-medium">
                  <PenTool className="w-3.5 h-3.5 text-purple-500" />
                  <span>Writing (Escrita)</span>
                </span>
                <span className="font-bold text-slate-900 font-mono">{competencyScores.writing}%</span>
              </div>
              <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                <div className="bg-purple-500 h-full rounded-full" style={{ width: `${competencyScores.writing}%` }} />
              </div>
            </div>
          </div>

          <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
            <button
              onClick={onGoToExtras}
              className="text-xs font-semibold text-blue-600 hover:text-blue-800"
            >
              Fazer exercícios extras para subir nota →
            </button>
            <button
              onClick={onGoToTestes}
              className="text-xs font-semibold text-slate-500 hover:text-slate-800"
            >
              Fazer Nivelamento →
            </button>
          </div>

        </div>

      </div>

    </div>
  );
};
