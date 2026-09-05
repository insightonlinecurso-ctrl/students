import React, { useState } from 'react';
import { 
  User as UserIcon, 
  Award, 
  Clock, 
  CheckCircle2, 
  Flame, 
  BookOpen, 
  Calendar, 
  Sliders, 
  Sparkles, 
  Download, 
  Layers, 
  FileText, 
  Bookmark, 
  ChevronRight, 
  ShieldCheck, 
  GraduationCap,
  Volume2,
  TrendingUp,
  BarChart3,
  Headphones,
  Mic,
  PenTool
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useProgress } from '../context/ProgressContext';
import { ALL_GRAMMAR_UNITS, TOTAL_STUDY_HOURS } from '../data/allUnits';
import { INSIGHT_LOGO_ICON, INSIGHT_HEADER_BANNER } from '../assets/brand';

interface StudentProfileViewProps {
  onSelectUnit: (unitId: number) => void;
  onGoToPlanner: () => void;
  onGoToVocab: () => void;
}

interface MetricPieChartCardProps {
  title: string;
  icon: React.ReactNode;
  percent: number;
  centerMain: string;
  centerSub: string;
  slicePrimaryColor: string;
  sliceSecondaryColor?: string;
  primaryLabel: string;
  primaryValue: string;
  secondaryLabel: string;
  secondaryValue: string;
  footerText: string;
  badgeText?: string;
  size?: number;
}

const MetricPieChartCard: React.FC<MetricPieChartCardProps> = ({
  title,
  icon,
  percent,
  centerMain,
  centerSub,
  slicePrimaryColor,
  sliceSecondaryColor = '#e2e8f0',
  primaryLabel,
  primaryValue,
  secondaryLabel,
  secondaryValue,
  footerText,
  badgeText,
  size = 94
}) => {
  const clamped = Math.min(100, Math.max(0, percent));
  const cx = size / 2;
  const cy = size / 2;
  const r = (size / 2) - 4;

  const getCoordinates = (p: number) => {
    const angle = (p / 100) * 2 * Math.PI - Math.PI / 2;
    return [cx + r * Math.cos(angle), cy + r * Math.sin(angle)];
  };

  const [startX, startY] = getCoordinates(0);
  const [endX, endY] = getCoordinates(clamped);
  const largeArcFlag = clamped > 50 ? 1 : 0;

  const pathData = clamped >= 100
    ? undefined
    : `M ${cx} ${cy} L ${startX} ${startY} A ${r} ${r} 0 ${largeArcFlag} 1 ${endX} ${endY} Z`;

  return (
    <div className="bg-white border border-slate-200 rounded-2xl p-4 sm:p-5 shadow-sm flex flex-col justify-between space-y-3">
      {/* Header */}
      <div className="flex items-center justify-between text-slate-500 text-xs">
        <span className="font-semibold text-slate-700">{title}</span>
        <div className="p-1 rounded-lg bg-slate-50 border border-slate-100">
          {icon}
        </div>
      </div>

      {/* Pie Chart + Legend */}
      <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-start gap-3 py-1">
        <div className="relative flex items-center justify-center shrink-0">
          <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} className="drop-shadow-xs">
            {/* Secondary Slice (Remaining / Background) */}
            <circle cx={cx} cy={cy} r={r} fill={sliceSecondaryColor} />

            {/* Primary Slice (Completed) */}
            {clamped >= 100 ? (
              <circle cx={cx} cy={cy} r={r} fill={slicePrimaryColor} />
            ) : clamped > 0 ? (
              <path d={pathData} fill={slicePrimaryColor} />
            ) : null}

            {/* Outer Divider Ring */}
            <circle cx={cx} cy={cy} r={r} fill="none" stroke="#ffffff" strokeWidth="1.5" />

            {/* Center Donut Hole for Modern Readability */}
            <circle cx={cx} cy={cy} r={r * 0.58} fill="#ffffff" stroke="#f8fafc" strokeWidth="1" />
          </svg>

          {/* Center Text inside the Pie */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center select-none pointer-events-none px-1">
            <span className="text-xs sm:text-sm font-black text-slate-900 font-mono leading-none">
              {centerMain}
            </span>
            <span className="text-[8px] text-slate-400 font-bold uppercase tracking-wider mt-0.5">
              {centerSub}
            </span>
          </div>
        </div>

        {/* Legend beside the Pie Chart */}
        <div className="flex flex-col justify-center space-y-1.5 text-xs w-full sm:w-auto">
          <div className="flex items-center justify-between sm:justify-start gap-2">
            <div className="flex items-center space-x-1.5">
              <span className="w-2.5 h-2.5 rounded-full shrink-0" style={{ backgroundColor: slicePrimaryColor }} />
              <span className="text-slate-600 text-[11px] font-medium">{primaryLabel}</span>
            </div>
            <span className="font-bold text-slate-900 text-[11px] font-mono">{primaryValue}</span>
          </div>

          <div className="flex items-center justify-between sm:justify-start gap-2">
            <div className="flex items-center space-x-1.5">
              <span className="w-2.5 h-2.5 rounded-full shrink-0" style={{ backgroundColor: sliceSecondaryColor }} />
              <span className="text-slate-500 text-[11px] font-medium">{secondaryLabel}</span>
            </div>
            <span className="font-semibold text-slate-600 text-[11px] font-mono">{secondaryValue}</span>
          </div>
        </div>
      </div>

      {/* Footer Text */}
      <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
        <span className="truncate">{footerText}</span>
        {badgeText && (
          <span className="text-[10px] font-bold text-slate-700 bg-slate-100 px-1.5 py-0.5 rounded shrink-0">
            {badgeText}
          </span>
        )}
      </div>
    </div>
  );
};

// Helper to parse dates into Day, Month, Year parts safely
const parseDateParts = (dateInput: string | Date | undefined) => {
  if (!dateInput) {
    return { year: 2026, month: 9, day: 1 };
  }
  const str = String(dateInput).trim();
  // Check DD/MM/YYYY
  if (/^\d{1,2}\/\d{1,2}\/\d{4}$/.test(str)) {
    const [d, m, y] = str.split('/').map(Number);
    return { year: y, month: m, day: d };
  }
  // Check ISO YYYY-MM-DD
  const isoMatch = str.match(/^(\d{4})-(\d{1,2})-(\d{1,2})/);
  if (isoMatch) {
    return { year: Number(isoMatch[1]), month: Number(isoMatch[2]), day: Number(isoMatch[3]) };
  }
  return { year: 2026, month: 9, day: 1 };
};

const padZero = (n: number) => String(n).padStart(2, '0');

export const StudentProfileView: React.FC<StudentProfileViewProps> = ({
  onSelectUnit,
  onGoToPlanner,
  onGoToVocab
}) => {
  const { user, renewStudentCycle } = useAuth();
  const { 
    completedUnitIds, 
    unitScores, 
    unitNotes, 
    learnedWordIds, 
    masteredWordIds,
    weeklyStudyHours, 
    studyDaysPerWeek,
    overallProgressPercentage,
    totalCompletedHours,
    conversationSubmissions,
    scheduledClasses
  } = useProgress();

  const [activeSubTab, setActiveSubTab] = useState<'overview' | 'units-scores' | 'notes' | 'classes' | 'certificate'>('overview');
  const [renewalMessage, setRenewalMessage] = useState(false);

  // Início: data formatada rigorosamente em dia, mês e ano (DD/MM/AAAA)
  const startParts = parseDateParts(user?.joinedAt || user?.createdAt || '2026-09-01');
  const formattedStartDate = `${padZero(startParts.day)}/${padZero(startParts.month)}/${startParts.year}`;

  // Validade: exatamente 1 mês a partir do início (30 dias de acesso)
  let expMonth = startParts.month + 1;
  let expYear = startParts.year;
  if (expMonth > 12) {
    expMonth = 1;
    expYear += 1;
  }
  const maxDaysInExpMonth = new Date(expYear, expMonth, 0).getDate();
  const expDay = Math.min(startParts.day, maxDaysInExpMonth);
  const formattedExpiryDate = `${padZero(expDay)}/${padZero(expMonth)}/${expYear}`;

  // Dias restantes de acesso
  const expiryDateObj = new Date(expYear, expMonth - 1, expDay, 23, 59, 59);
  const now = new Date();
  const diffMs = expiryDateObj.getTime() - now.getTime();
  const daysRemaining = Math.max(0, Math.ceil(diffMs / (1000 * 60 * 60 * 24)));
  const [showCertificateModal, setShowCertificateModal] = useState(false);

  if (!user) {
    return null;
  }

  // Calculate scores average
  const scoredUnits: number[] = Object.values(unitScores);
  const averageScore = scoredUnits.length > 0
    ? Math.round(scoredUnits.reduce((a: number, b: number) => a + b, 0) / scoredUnits.length)
    : 0;

  const notesList = Object.entries(unitNotes)
    .filter(([_, note]) => typeof note === 'string' && note.trim().length > 0)
    .map(([unitId, note]) => {
      const u = ALL_GRAMMAR_UNITS.find((unit) => unit.id === Number(unitId));
      return {
        unitId: Number(unitId),
        unitNumber: u ? u.number : Number(unitId),
        unitTitle: u ? u.title : `Unidade ${unitId}`,
        note: String(note)
      };
    });

  const isEligibleForCertificate = completedUnitIds.length >= 30;

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8 animate-fadeIn">
      
      {/* Top Profile Header Card */}
      <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm relative overflow-hidden">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          
          <div className="flex items-start sm:items-center space-x-4">
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-blue-600 flex items-center justify-center text-white text-2xl font-bold shadow-md shrink-0">
              {user.name.charAt(0).toUpperCase()}
            </div>
            
            <div className="space-y-1.5">
              <div className="flex flex-wrap items-center gap-2">
                <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                  {user.name}
                </h1>
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
                  <ShieldCheck className="w-3.5 h-3.5 mr-1 text-emerald-600" />
                  Matrícula Ativa
                </span>
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-blue-50 text-blue-700 border border-blue-200">
                  {user.planType || 'Acesso 30 Dias'}
                </span>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 font-mono">
                {user.email}
              </p>

              <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-slate-500 pt-1">
                <span>Início: <strong className="text-slate-800 font-bold font-mono">{formattedStartDate}</strong></span>
                <span>•</span>
                <span>Validade: <strong className="text-slate-800 font-bold font-mono">{formattedExpiryDate}</strong> <span className="text-slate-400 font-normal">({daysRemaining > 0 ? `${daysRemaining} dias restantes` : '30 dias de acesso'})</span></span>
                <span>•</span>
                <span>Nível CEFR: <strong className="text-blue-700 font-semibold">{user.cefrLevel || 'Não realizado'}</strong></span>
              </div>

              {/* Renewal Action */}
              <div className="pt-2 flex flex-wrap items-center gap-3">
                <button
                  type="button"
                  id="btn-profile-renew-subscription"
                  onClick={() => {
                    renewStudentCycle(user.id);
                    setRenewalMessage(true);
                    setTimeout(() => setRenewalMessage(false), 4000);
                  }}
                  className="inline-flex items-center space-x-1.5 px-3.5 py-1.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold shadow-xs transition-all hover:scale-105"
                >
                  <span>Renovar Assinatura (+30 Dias)</span>
                </button>
                {renewalMessage && (
                  <span className="text-xs text-emerald-600 font-semibold animate-fadeIn">
                    ✓ Assinatura renovada por mais 30 dias com sucesso!
                  </span>
                )}
              </div>
            </div>
          </div>

          {/* Quick Streak & Graduation Stats */}
          <div className="flex flex-row md:flex-col items-center md:items-end justify-between w-full md:w-auto pt-4 md:pt-0 border-t md:border-t-0 border-slate-100 gap-4">
            <div className="flex items-center space-x-2 bg-amber-50 border border-amber-200 px-3.5 py-2 rounded-xl text-amber-800 text-xs font-semibold shadow-sm">
              <Flame className="w-4 h-4 text-amber-500 fill-amber-500" />
              <span>{user.studyStreakDays ?? 1} Dia{(user.studyStreakDays ?? 1) === 1 ? '' : 's'} de Sequência</span>
            </div>

            <button
              onClick={() => setActiveSubTab('certificate')}
              className="flex items-center space-x-1.5 px-3.5 py-2 rounded-xl bg-blue-50 hover:bg-blue-100 text-blue-700 border border-blue-200 text-xs font-semibold transition-colors"
            >
              <Award className="w-4 h-4 text-blue-600" />
              <span>Certificado de Conclusão</span>
            </button>
          </div>

        </div>
      </div>

      {/* Main KPI Stats Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        
        {/* Progress % - Pie Chart */}
        <MetricPieChartCard
          title="Progresso Geral"
          icon={<CheckCircle2 className="w-4 h-4 text-emerald-600" />}
          percent={overallProgressPercentage}
          centerMain={`${overallProgressPercentage}%`}
          centerSub="Concluído"
          slicePrimaryColor="#059669"
          sliceSecondaryColor="#e2e8f0"
          primaryLabel="Concluído"
          primaryValue={`${completedUnitIds.length} un (${overallProgressPercentage}%)`}
          secondaryLabel="Pendente"
          secondaryValue={`${Math.max(0, 30 - completedUnitIds.length)} un (${100 - overallProgressPercentage}%)`}
          footerText={`${completedUnitIds.length} de 30 unidades`}
          badgeText={`${completedUnitIds.length}/30`}
        />

        {/* Hours Studied - Pie Chart */}
        {(() => {
          const hoursPercent = Math.min(100, Math.round((totalCompletedHours / TOTAL_STUDY_HOURS) * 100));
          const remainingHours = Math.max(0, TOTAL_STUDY_HOURS - totalCompletedHours);
          return (
            <MetricPieChartCard
              title="Horas Cumpridas"
              icon={<Clock className="w-4 h-4 text-blue-600" />}
              percent={hoursPercent}
              centerMain={`${totalCompletedHours}h`}
              centerSub={`de ${TOTAL_STUDY_HOURS}h`}
              slicePrimaryColor="#2563eb"
              sliceSecondaryColor="#e2e8f0"
              primaryLabel="Estudadas"
              primaryValue={`${totalCompletedHours}h (${hoursPercent}%)`}
              secondaryLabel="Restantes"
              secondaryValue={`${remainingHours}h (${100 - hoursPercent}%)`}
              footerText={`${remainingHours}h restantes para meta`}
              badgeText={`${totalCompletedHours}h/${TOTAL_STUDY_HOURS}h`}
            />
          );
        })()}

        {/* Average Fixation Score */}
        <div className="bg-white border border-slate-200 rounded-2xl p-4 sm:p-5 shadow-sm flex flex-col justify-between space-y-3">
          <div className="flex items-center justify-between text-slate-500 text-xs">
            <span className="font-semibold text-slate-700">Média nos Exercícios</span>
            <div className="p-1 rounded-lg bg-blue-50 border border-blue-100">
              <TrendingUp className="w-4 h-4 text-blue-600" />
            </div>
          </div>
          <div className="py-2">
            <div className="text-2xl sm:text-3xl font-bold text-slate-900 font-mono">
              {averageScore > 0 ? `${averageScore}%` : '—'}
            </div>
            <p className="text-xs text-slate-500 mt-1">Aproveitamento nos quizzes</p>
          </div>
          <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
            <span>{scoredUnits.length} de 30 unidades</span>
            <span className="text-[10px] font-bold text-slate-700 bg-slate-100 px-1.5 py-0.5 rounded">
              {scoredUnits.length}/30
            </span>
          </div>
        </div>

        {/* Vocabulary Progress */}
        <div className="bg-white border border-slate-200 rounded-2xl p-4 sm:p-5 shadow-sm flex flex-col justify-between space-y-3">
          <div className="flex items-center justify-between text-slate-500 text-xs">
            <span className="font-semibold text-slate-700">Vocabulário Ativo</span>
            <div className="p-1 rounded-lg bg-indigo-50 border border-indigo-100">
              <Layers className="w-4 h-4 text-indigo-600" />
            </div>
          </div>
          <div className="py-2">
            <div className="text-2xl sm:text-3xl font-bold text-slate-900 font-mono">
              {learnedWordIds.length}{' '}
              <span className="text-xs font-normal text-emerald-600 font-semibold">
                ({masteredWordIds.length} master)
              </span>
            </div>
            <p className="text-xs text-slate-500 mt-1">Palavras fixadas no Vocab Lab</p>
          </div>
          <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
            <span>Vocab Lab</span>
            <span className="text-[10px] font-bold text-indigo-700 bg-indigo-50 px-1.5 py-0.5 rounded">
              Ativo
            </span>
          </div>
        </div>

      </div>

      {/* Navigation Sub-Tabs */}
      <div className="flex items-center space-x-2 border-b border-slate-200 pb-2 overflow-x-auto scrollbar-thin">
        <button
          onClick={() => setActiveSubTab('overview')}
          className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap ${
            activeSubTab === 'overview'
              ? 'bg-blue-600 text-white shadow-sm'
              : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
          }`}
        >
          Visão Geral & Competências
        </button>

        <button
          onClick={() => setActiveSubTab('units-scores')}
          className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap ${
            activeSubTab === 'units-scores'
              ? 'bg-blue-600 text-white shadow-sm'
              : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
          }`}
        >
          Histórico das 30 Unidades ({completedUnitIds.length}/30)
        </button>

        <button
          onClick={() => setActiveSubTab('notes')}
          className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap flex items-center space-x-1.5 ${
            activeSubTab === 'notes'
              ? 'bg-blue-600 text-white shadow-sm'
              : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
          }`}
        >
          <Bookmark className="w-3.5 h-3.5" />
          <span>Caderno de Anotações ({notesList.length})</span>
        </button>

        <button
          onClick={() => setActiveSubTab('classes')}
          className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap flex items-center space-x-1.5 ${
            activeSubTab === 'classes'
              ? 'bg-blue-600 text-white shadow-sm'
              : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
          }`}
        >
          <Calendar className="w-3.5 h-3.5" />
          <span>Aulas & Conversação ({scheduledClasses.length + conversationSubmissions.length})</span>
        </button>

        <button
          onClick={() => setActiveSubTab('certificate')}
          className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap flex items-center space-x-1.5 ${
            activeSubTab === 'certificate'
              ? 'bg-blue-600 text-white shadow-sm'
              : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
          }`}
        >
          <Award className="w-3.5 h-3.5" />
          <span>Certificado Oficial</span>
        </button>
      </div>

      {/* Sub-Tab 1: Overview & Competencies */}
      {activeSubTab === 'overview' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            
            {/* Competency Breakdown - Vertical Bars */}
            <div className="lg:col-span-2 bg-white border border-slate-200 rounded-2xl p-6 shadow-sm space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-3">
                <div className="flex items-center space-x-2 text-slate-900">
                  <BarChart3 className="w-5 h-5 text-blue-600" />
                  <h3 className="font-bold text-base">Habilidades Linguísticas (CEFR Skills)</h3>
                </div>
                <div className="flex items-center space-x-2 text-xs text-slate-500">
                  <span className="inline-block w-2 h-2 rounded-full bg-emerald-500"></span>
                  <span>Avaliação Contínua e Adaptativa</span>
                </div>
              </div>

              {/* Vertical Bars Chart Container */}
              <div className="pt-2">
                <div className="relative pl-7 sm:pl-10">
                  {/* Background horizontal guideline scale aligned with the tracks */}
                  <div className="absolute left-0 right-0 top-6 h-40 sm:h-48 flex flex-col justify-between pointer-events-none z-0">
                    {[100, 75, 50, 25, 0].map((val) => (
                      <div key={val} className="w-full flex items-center">
                        <span className="text-[10px] font-mono font-medium text-slate-400 w-7 sm:w-10 text-right pr-2 select-none">
                          {val}%
                        </span>
                        <div className={`flex-1 border-b ${val === 0 ? 'border-slate-300' : 'border-dashed border-slate-200'}`} />
                      </div>
                    ))}
                  </div>

                  {/* Vertical Bars Columns */}
                  <div className="relative z-10 grid grid-cols-5 gap-2 sm:gap-4 items-end">
                    {[
                      { 
                        shortName: 'Listening', 
                        fullName: 'Compreensão Auditiva',
                        score: user.competencyScores?.listening || 85, 
                        gradient: 'from-blue-600 to-sky-500',
                        icon: Headphones,
                        iconBg: 'bg-blue-50 text-blue-600',
                        cefr: (user.competencyScores?.listening || 85) >= 85 ? 'B2' : (user.competencyScores?.listening || 85) >= 70 ? 'B1' : 'A2'
                      },
                      { 
                        shortName: 'Speaking', 
                        fullName: 'Conversação & IA',
                        score: user.competencyScores?.speaking || 80, 
                        gradient: 'from-indigo-600 to-indigo-400',
                        icon: Mic,
                        iconBg: 'bg-indigo-50 text-indigo-600',
                        cefr: (user.competencyScores?.speaking || 80) >= 85 ? 'B2' : (user.competencyScores?.speaking || 80) >= 70 ? 'B1' : 'A2'
                      },
                      { 
                        shortName: 'Grammar', 
                        fullName: 'Estrutura & Regras',
                        score: averageScore || 88, 
                        gradient: 'from-emerald-600 to-teal-400',
                        icon: BookOpen,
                        iconBg: 'bg-emerald-50 text-emerald-600',
                        cefr: (averageScore || 88) >= 85 ? 'B2' : (averageScore || 88) >= 70 ? 'B1' : 'A2'
                      },
                      { 
                        shortName: 'Reading', 
                        fullName: 'Histórias & Contexto',
                        score: user.competencyScores?.reading || 90, 
                        gradient: 'from-amber-500 to-amber-400',
                        icon: FileText,
                        iconBg: 'bg-amber-50 text-amber-600',
                        cefr: (user.competencyScores?.reading || 90) >= 85 ? 'B2' : (user.competencyScores?.reading || 90) >= 70 ? 'B1' : 'A2'
                      },
                      { 
                        shortName: 'Writing', 
                        fullName: 'Construção & Escrita',
                        score: user.competencyScores?.writing || 82, 
                        gradient: 'from-violet-600 to-purple-400',
                        icon: PenTool,
                        iconBg: 'bg-violet-50 text-violet-600',
                        cefr: (user.competencyScores?.writing || 82) >= 85 ? 'B2' : (user.competencyScores?.writing || 82) >= 70 ? 'B1' : 'A2'
                      },
                    ].map((skill, idx) => {
                      const IconComponent = skill.icon;
                      return (
                        <div key={idx} className="flex flex-col items-center h-full justify-end group">
                          {/* Score Tag above vertical bar */}
                          <div className="h-6 flex items-center justify-center">
                            <span className="text-[11px] sm:text-xs font-mono font-bold text-slate-800 tracking-tight group-hover:scale-110 transition-transform">
                              {skill.score}%
                            </span>
                          </div>

                          {/* Vertical Bar Track & Fill */}
                          <div className="w-8 sm:w-14 h-40 sm:h-48 bg-slate-100/90 rounded-t-xl overflow-hidden relative flex flex-col justify-end border border-slate-200/80 shadow-2xs group-hover:border-slate-300 transition-colors">
                            <div 
                              className={`w-full bg-gradient-to-t ${skill.gradient} rounded-t-xl transition-all duration-700 ease-out relative flex flex-col items-center justify-start pt-1.5 shadow-xs`}
                              style={{ height: `${skill.score}%` }}
                            >
                              {/* CEFR level mini-badge inside bar */}
                              <span className="text-[9px] sm:text-[10px] font-black text-white/95 uppercase tracking-wider bg-black/20 px-1 py-0.5 rounded leading-none">
                                {skill.cefr}
                              </span>
                            </div>
                          </div>

                          {/* Skill Label beneath the bar */}
                          <div className="mt-3 flex flex-col items-center text-center space-y-1 w-full">
                            <div className={`w-7 h-7 rounded-lg ${skill.iconBg} flex items-center justify-center shadow-2xs group-hover:scale-105 transition-transform`}>
                              <IconComponent className="w-3.5 h-3.5" />
                            </div>
                            <div className="w-full">
                              <span className="block text-[11px] sm:text-xs font-bold text-slate-800 truncate">
                                {skill.shortName}
                              </span>
                              <span className="block text-[9px] sm:text-[10px] text-slate-500 truncate hidden sm:block">
                                {skill.fullName}
                              </span>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600 flex items-start space-x-2.5">
                <Sparkles className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                <p>
                  <strong>Insight Pedagógico:</strong> Sua retenção na fixação de regras gramaticais e leitura de histórias está em nível de proficiência alto. Recomendamos manter a prática contínua no <em>Laboratório de IA</em> para acelerar a fluência oral.
                </p>
              </div>
            </div>

            {/* Study Preferences & Goal Info */}
            <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm space-y-4 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-center space-x-2 text-slate-900 border-b border-slate-100 pb-3">
                  <Sliders className="w-5 h-5 text-blue-600" />
                  <h3 className="font-bold text-base">Rotina Cadastrada</h3>
                </div>

                <div className="space-y-3 text-xs">
                  <div className="p-3 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-between">
                    <span className="text-slate-500">Carga Semanal:</span>
                    <strong className="text-slate-900">{weeklyStudyHours} horas por semana</strong>
                  </div>

                  <div className="p-3 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-between">
                    <span className="text-slate-500">Frequência:</span>
                    <strong className="text-slate-900">{studyDaysPerWeek} dias por semana</strong>
                  </div>

                  <div className="p-3 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-between">
                    <span className="text-slate-500">Carga Horária Total:</span>
                    <strong className="text-blue-700">{TOTAL_STUDY_HOURS} Horas de Curso</strong>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 space-y-2">
                <button
                  onClick={onGoToPlanner}
                  className="w-full py-2.5 px-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold shadow-sm transition-all flex items-center justify-center space-x-2"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Ajustar no Planner de Estudos</span>
                </button>
              </div>
            </div>

          </div>
        </div>
      )}

      {/* Sub-Tab 2: Units Scores & Status */}
      {activeSubTab === 'units-scores' && (
        <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-4">
            <div>
              <h3 className="font-bold text-lg text-slate-900">Progresso Detalhado das 30 Unidades</h3>
              <p className="text-xs text-slate-500">Acompanhe as notas dos exercícios de fixação e o status de cada lição</p>
            </div>
            <span className="text-xs font-semibold px-3 py-1 bg-blue-50 text-blue-700 rounded-lg border border-blue-200">
              {completedUnitIds.length} de 30 Concluídas
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5">
            {ALL_GRAMMAR_UNITS.map((unit) => {
              const isCompleted = completedUnitIds.includes(unit.id);
              const score = unitScores[unit.id];

              return (
                <div
                  key={unit.id}
                  onClick={() => onSelectUnit(unit.id)}
                  className={`p-4 rounded-xl border transition-all cursor-pointer flex flex-col justify-between space-y-3 ${
                    isCompleted
                      ? 'bg-emerald-50/40 border-emerald-200 hover:border-emerald-400'
                      : 'bg-slate-50 border-slate-200 hover:border-blue-300'
                  }`}
                >
                  <div className="flex items-start justify-between gap-2">
                    <div className="space-y-1">
                      <div className="flex items-center space-x-2">
                        <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-white text-slate-700 border border-slate-200">
                          U{String(unit.number).padStart(2, '0')}
                        </span>
                        <span className="text-[10px] text-slate-500 font-medium">
                          {unit.category}
                        </span>
                      </div>
                      <h4 className="text-xs font-bold text-slate-900 leading-snug">
                        {unit.title}
                      </h4>
                    </div>

                    {isCompleted ? (
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    ) : (
                      <div className="w-4 h-4 rounded-full border border-slate-300 shrink-0" />
                    )}
                  </div>

                  <div className="flex items-center justify-between text-[11px] pt-2 border-t border-slate-200/60">
                    <span className="text-slate-500">{unit.estimatedHours}h de estudo</span>
                    {score !== undefined ? (
                      <span className="font-bold text-emerald-700">Nota: {score}%</span>
                    ) : (
                      <span className="text-slate-400 italic">Pendente</span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Sub-Tab 3: Student Notes */}
      {activeSubTab === 'notes' && (
        <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm space-y-6">
          <div className="flex items-center justify-between border-b border-slate-100 pb-4">
            <div>
              <h3 className="font-bold text-lg text-slate-900">Meu Caderno de Anotações Pessoais</h3>
              <p className="text-xs text-slate-500">Todas as observações salvas por você durante o estudo das unidades</p>
            </div>
            <span className="text-xs font-semibold px-3 py-1 bg-slate-100 text-slate-700 rounded-lg border border-slate-200">
              {notesList.length} Anotações
            </span>
          </div>

          {notesList.length === 0 ? (
            <div className="text-center py-12 space-y-3 bg-slate-50 rounded-xl border border-slate-200">
              <Bookmark className="w-8 h-8 text-slate-300 mx-auto" />
              <p className="text-sm font-semibold text-slate-700">Nenhuma anotação registrada ainda</p>
              <p className="text-xs text-slate-500 max-w-md mx-auto">
                Abra qualquer unidade do material e use a seção "Meu Caderno de Anotações" para registrar regras, macetes e dúvidas.
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              {notesList.map((item) => (
                <div key={item.unitId} className="p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <span className="px-2.5 py-0.5 rounded-md bg-blue-50 text-blue-700 font-mono font-bold text-xs border border-blue-200">
                        Unidade {item.unitNumber}
                      </span>
                      <strong className="text-xs font-semibold text-slate-900">{item.unitTitle}</strong>
                    </div>
                    <button
                      onClick={() => onSelectUnit(item.unitId)}
                      className="text-xs text-blue-600 hover:text-blue-800 font-semibold flex items-center space-x-0.5"
                    >
                      <span>Abrir Unidade</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-700 whitespace-pre-line bg-white p-3.5 rounded-lg border border-slate-200 leading-relaxed font-sans">
                    {item.note}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Sub-Tab 4: Classes & Conversas History */}
      {activeSubTab === 'classes' && (
        <div className="space-y-6">
          {/* Aulas Particulares */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm space-y-4">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div className="flex items-center space-x-2 text-slate-900">
                <Calendar className="w-5 h-5 text-blue-600" />
                <h3 className="font-bold text-base">Aulas Particulares Agendadas</h3>
              </div>
              <span className="text-xs text-slate-400 font-mono">
                {scheduledClasses.length} aula(s)
              </span>
            </div>

            {scheduledClasses.length === 0 ? (
              <div className="text-center py-6 text-xs text-slate-500 bg-slate-50 rounded-xl">
                Você ainda não agendou aulas particulares. Complete 5 unidades para liberar o agendamento!
              </div>
            ) : (
              <div className="space-y-3">
                {scheduledClasses.map((cls) => (
                  <div key={cls.id} className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                    <div>
                      <div className="flex items-center space-x-2">
                        <span className="text-xs font-bold text-slate-900 font-mono">
                          {cls.date} às {cls.time}
                        </span>
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 uppercase">
                          {cls.status}
                        </span>
                        <span className="text-xs text-blue-600 font-semibold">• {cls.classType}</span>
                      </div>
                      <p className="text-xs text-slate-600 mt-1 italic">
                        Objetivos: "{cls.studentGoals}"
                      </p>
                    </div>
                    {cls.calendlyUrl && (
                      <a
                        href={cls.calendlyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-3 py-1.5 rounded-lg bg-blue-600 text-white text-xs font-semibold hover:bg-blue-700 transition-colors shrink-0"
                      >
                        Abrir Link da Aula
                      </a>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Respostas de Conversação */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm space-y-4">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div className="flex items-center space-x-2 text-slate-900">
                <Mic className="w-5 h-5 text-indigo-600" />
                <h3 className="font-bold text-base">Exercícios de Conversação Enviados</h3>
              </div>
              <span className="text-xs text-slate-400 font-mono">
                {conversationSubmissions.length} envio(s)
              </span>
            </div>

            {conversationSubmissions.length === 0 ? (
              <div className="text-center py-6 text-xs text-slate-500 bg-slate-50 rounded-xl">
                Nenhuma resposta de conversação enviada ainda. Acesse o <strong>Material</strong> e responda ao exercício de conversação ao final das unidades!
              </div>
            ) : (
              <div className="space-y-4">
                {conversationSubmissions.map((sub) => (
                  <div key={sub.id} className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-blue-600">{sub.unitTitle}</span>
                      <span className="text-xs font-mono font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                        Score: {sub.score}/100
                      </span>
                    </div>
                    <p className="text-xs text-slate-500 italic">"{sub.questionPrompt}"</p>
                    <div className="p-3 rounded-lg bg-white border border-slate-200 text-xs text-slate-800">
                      <strong>Sua resposta:</strong> "{sub.studentAnswer}"
                    </div>
                    {sub.correctedSentence && (
                      <div className="p-3 rounded-lg bg-blue-50 border border-blue-200 text-xs text-blue-900">
                        <strong>Sugestão & Correção:</strong> "{sub.correctedSentence}"
                        <p className="text-[11px] text-slate-600 mt-1">{sub.feedback}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}

      {/* Sub-Tab 5: Official Certificate */}
      {activeSubTab === 'certificate' && (
        <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-4">
            <div>
              <div className="flex items-center space-x-2 text-blue-600">
                <Award className="w-6 h-6" />
                <h3 className="font-bold text-xl text-slate-900">Certificado Oficial de Conclusão</h3>
              </div>
              <p className="text-xs text-slate-500 mt-0.5">
                Certificação de 68 Horas de Estudo em Gramática & Fluência no Inglês
              </p>
            </div>

            <span className={`text-xs font-bold px-3 py-1.5 rounded-lg border ${
              isEligibleForCertificate 
                ? 'bg-emerald-50 text-emerald-700 border-emerald-200' 
                : 'bg-amber-50 text-amber-800 border-amber-200'
            }`}>
              {isEligibleForCertificate ? 'Pronto para Emissão' : `${completedUnitIds.length}/30 Unidades Concluídas`}
            </span>
          </div>

          {/* Certificate Preview Card */}
          <div className="relative border-4 border-double border-slate-300 rounded-2xl p-8 sm:p-12 bg-gradient-to-b from-white via-slate-50 to-white text-center space-y-6 shadow-md max-w-3xl mx-auto">
            
            {/* Certificate Header */}
            <div className="space-y-2">
              <div className="w-16 h-16 rounded-2xl mx-auto overflow-hidden bg-[#8897a2] border border-slate-300 shadow-sm flex items-center justify-center">
                <img 
                  src={INSIGHT_LOGO_ICON} 
                  alt="Insight Origami Logo" 
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>
              <h4 className="text-xl sm:text-2xl font-serif font-bold text-slate-900 tracking-wider uppercase">
                Certificado de Conclusão
              </h4>
              <p className="text-xs text-slate-700 font-bold uppercase tracking-widest">
                Insight English • Certificação Oficial
              </p>
            </div>

            {/* Certificate Body */}
            <div className="space-y-3 max-w-xl mx-auto">
              <p className="text-xs sm:text-sm text-slate-600">
                Certificamos que o aluno(a)
              </p>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 font-serif border-b border-slate-300 pb-2 inline-block px-8">
                {user.name}
              </h2>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed pt-2">
                concluiu com êxito o programa completo de <strong>30 Unidades Gramaticais & Treinamento de Fluência</strong>, totalizando a carga horária oficial de <strong>68 Horas</strong> de estudos práticos, fixação e conversação com Inteligência Artificial.
              </p>
            </div>

            {/* Certificate Footer Stamp */}
            <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-6 border-t border-slate-200 text-xs text-slate-500">
              <div>
                <span className="block font-mono font-bold text-slate-700">Carga Horária: 68 Horas</span>
                <span>Insight English Academy</span>
              </div>
              <div className="flex items-center space-x-2">
                <ShieldCheck className="w-5 h-5 text-blue-600" />
                <span className="font-mono text-[11px]">Autenticação Digital: IE-2026-{user.id.slice(-6).toUpperCase()}</span>
              </div>
            </div>

          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <button
              onClick={() => window.print()}
              className="px-6 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold shadow-sm transition-all flex items-center space-x-2"
            >
              <Download className="w-4 h-4" />
              <span>Imprimir / Salvar em PDF</span>
            </button>
          </div>
        </div>
      )}

    </div>
  );
};
