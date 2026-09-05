import React, { useState } from 'react';
import { 
  Calendar, 
  Clock, 
  Lock, 
  CheckCircle2, 
  ExternalLink, 
  Sparkles, 
  ArrowRight, 
  Send, 
  MessageSquare,
  Video,
  UserCheck,
  CalendarDays,
  HelpCircle,
  Headphones,
  BookOpen,
  Briefcase,
  Mic,
  ChevronDown,
  Info,
  CalendarCheck,
  ShieldCheck
} from 'lucide-react';
import { useProgress } from '../context/ProgressContext';
import { useAuth } from '../context/AuthContext';
import { INSIGHT_LOGO_ICON } from '../assets/brand';
import mentoringBannerImg from '../assets/images/private_mentoring_banner_1788459652545.jpg';

interface AulasViewProps {
  onGoToMaterial: () => void;
}

type FocusOption = 'Conversação' | 'Ponto Gramatical' | 'Pronúncia' | 'Inglês para Negócios';

export const AulasView: React.FC<AulasViewProps> = ({ onGoToMaterial }) => {
  const { user } = useAuth();
  const { completedUnitIds, scheduledClasses, createScheduledClass } = useProgress();

  const [classType, setClassType] = useState<FocusOption>('Conversação');
  const [studentGoals, setStudentGoals] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [isSuccessSaved, setIsSuccessSaved] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const unitsCompletedCount = completedUnitIds.length;
  const isGatedUnlocked = unitsCompletedCount >= 5;
  const unitsNeeded = Math.max(0, 5 - unitsCompletedCount);

  // Quick suggestion chips to save time for the student
  const QUICK_SUGGESTIONS = [
    'Simular entrevista de emprego em inglês',
    'Treinar pronúncia do som do TH e connected speech',
    'Conversação espontânea sobre rotina e viagens',
    'Tirar dúvidas sobre Simple Past e Present Perfect',
    'Praticar apresentações e reuniões corporativas'
  ];

  const FOCUS_CARDS: { id: FocusOption; title: string; desc: string; icon: React.ReactNode; tag: string }[] = [
    {
      id: 'Conversação',
      title: 'Conversação Fluente',
      desc: 'Diálogo 100% em inglês com correções naturais e expansão de vocabulário prático.',
      icon: <MessageSquare className="w-5 h-5 text-blue-600" />,
      tag: 'Mais Escolhida'
    },
    {
      id: 'Ponto Gramatical',
      title: 'Dúvidas Gramaticais',
      desc: 'Destravamento cirúrgico dos pontos mais difíceis das unidades que você já estudou.',
      icon: <BookOpen className="w-5 h-5 text-indigo-600" />,
      tag: 'Gramática Prática'
    },
    {
      id: 'Pronúncia',
      title: 'Pronúncia & Entonação',
      desc: 'Redução de sotaque, ritmo, linking words e fonética dos sons desafiadores.',
      icon: <Mic className="w-5 h-5 text-purple-600" />,
      tag: 'Fonética Aplicada'
    },
    {
      id: 'Inglês para Negócios',
      title: 'Business & Entrevistas',
      desc: 'Simulações de entrevistas de emprego, reuniões internacionais e apresentações.',
      icon: <Briefcase className="w-5 h-5 text-emerald-600" />,
      tag: 'Carreira'
    }
  ];

  const FAQS = [
    {
      q: 'Qual a duração e o formato da aula individual?',
      a: 'Cada aula tem 50 minutos de duração e é realizada ao vivo, individualmente (1-a-1), pela plataforma Google Meet com o professor Carlos.'
    },
    {
      q: 'Posso remarcar se tiver um imprevisto?',
      a: 'Sim! Caso precise remarcar, entre em contato com antecedência para realinhar um novo dia e horário disponível na agenda.'
    },
    {
      q: 'Por que o requisito de 5 unidades concluídas?',
      a: 'Para que a aula 1-a-1 seja 100% produtiva, o aluno precisa dominar as estruturas essenciais do início do curso. Dessa forma, aproveitamos os 50 minutos praticando fala e eliminando travas, e não apenas apresentando vocabulário básico.'
    }
  ];

  const handleSavePreparation = (e: React.FormEvent) => {
    e.preventDefault();
    if (!studentGoals.trim()) return;

    createScheduledClass({
      studentId: user?.id || 'usr_aluno',
      studentName: user?.name || 'Aluno Insight',
      studentProgressUnit: completedUnitIds[completedUnitIds.length - 1] || 1,
      classType: classType === 'Inglês para Negócios' ? 'Conversação' : classType,
      date: selectedDate || new Date().toLocaleDateString('pt-BR'),
      time: selectedTime || 'Horário via Calendly',
      studentGoals: `[Foco: ${classType}] ${studentGoals}`,
      calendlyUrl: 'https://calendly.com'
    });

    setIsSuccessSaved(true);
    setTimeout(() => setIsSuccessSaved(false), 6000);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      
      {/* ========================================================= */}
      {/* 1. HERO HEADER: CLEAN, REFINED & INSPIRATIONAL            */}
      {/* ========================================================= */}
      <div className="bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-xs">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
          
          <div className="lg:col-span-7 p-6 sm:p-8 lg:p-10 space-y-4">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs uppercase font-bold tracking-wider px-3 py-1 rounded-full bg-blue-50 text-blue-700 border border-blue-200 inline-flex items-center space-x-1.5">
                <Video className="w-3.5 h-3.5 text-blue-600" />
                <span>Mentoria 1-a-1 ao Vivo</span>
              </span>
              <span className="text-xs text-slate-400 hidden sm:inline">•</span>
              <span className="text-xs font-semibold text-slate-500">
                Google Meet com o Professor Carlos
              </span>
            </div>

            <div className="space-y-2">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight leading-tight">
                Aulas Individuais de Conversação & Destravamento
              </h1>
              <p className="text-sm text-slate-600 leading-relaxed max-w-xl">
                Sessões particulares de 50 minutos desenhadas para destravar sua fala, corrigir sotaque e simular situações reais de trabalho, reuniões e viagens.
              </p>
            </div>

            {/* Feature Pills */}
            <div className="pt-2 grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
              <div className="bg-slate-50 border border-slate-200/80 rounded-xl p-2.5 text-center">
                <p className="font-bold text-slate-900">50 minutos</p>
                <p className="text-[11px] text-slate-500">Duração da sessão</p>
              </div>
              <div className="bg-slate-50 border border-slate-200/80 rounded-xl p-2.5 text-center">
                <p className="font-bold text-slate-900">Google Meet</p>
                <p className="text-[11px] text-slate-500">Ao vivo 1-a-1</p>
              </div>
              <div className="bg-slate-50 border border-slate-200/80 rounded-xl p-2.5 text-center">
                <p className="font-bold text-slate-900">100% Prática</p>
                <p className="text-[11px] text-slate-500">Foco nas suas metas</p>
              </div>
              <div className="bg-slate-50 border border-slate-200/80 rounded-xl p-2.5 text-center">
                <p className="font-bold text-slate-900">Feedback Escrito</p>
                <p className="text-[11px] text-slate-500">Anotações pós-aula</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 h-56 sm:h-72 lg:h-full min-h-[220px] bg-slate-100 overflow-hidden relative border-t lg:border-t-0 lg:border-l border-slate-200">
            <img 
              src={mentoringBannerImg} 
              alt="Mentoria de Inglês Individual" 
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent lg:hidden" />
            <div className="absolute bottom-3 left-3 right-3 lg:hidden flex items-center justify-between text-white text-xs bg-slate-950/70 backdrop-blur-xs px-3.5 py-1.5 rounded-xl border border-white/20">
              <span className="font-bold">Professor Carlos</span>
              <span className="text-slate-300">Insight English</span>
            </div>
          </div>

        </div>
      </div>

      {/* ========================================================= */}
      {/* 2. PEDAGOGICAL MILESTONE / PROGRESS STATUS (CLEAN & CLEAR) */}
      {/* ========================================================= */}
      <div className={`rounded-3xl p-6 sm:p-7 border transition-all shadow-xs ${
        isGatedUnlocked
          ? 'bg-emerald-50/50 border-emerald-200'
          : 'bg-white border-slate-200'
      }`}>
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-5">
          
          <div className="flex items-start space-x-4">
            <div className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 shadow-xs border ${
              isGatedUnlocked 
                ? 'bg-emerald-500 text-white border-emerald-400' 
                : 'bg-blue-50 text-blue-700 border-blue-200'
            }`}>
              {isGatedUnlocked ? (
                <CheckCircle2 className="w-6 h-6" />
              ) : (
                <CalendarCheck className="w-6 h-6" />
              )}
            </div>

            <div className="space-y-1 max-w-xl">
              <div className="flex items-center space-x-2">
                <span className={`text-xs uppercase font-bold tracking-wider px-2.5 py-0.5 rounded-full border ${
                  isGatedUnlocked 
                    ? 'bg-emerald-100 text-emerald-800 border-emerald-300' 
                    : 'bg-slate-100 text-slate-700 border-slate-200'
                }`}>
                  {isGatedUnlocked ? 'Agenda Liberada para Você' : 'Requisito Pedagógico de Qualidade'}
                </span>
              </div>
              <h2 className="text-lg sm:text-xl font-black text-slate-900">
                {isGatedUnlocked
                  ? 'Você concluiu a base necessária e pode agendar suas aulas!'
                  : `Conclua pelo menos 5 unidades no material para agendar (Faltam ${unitsNeeded})`}
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {isGatedUnlocked
                  ? 'Personalize abaixo o tema que deseja praticar e abra o calendário oficial para reservar seu dia e horário.'
                  : 'Para garantir que a aula de conversação seja 100% aproveitada, exigimos o domínio prévio de 5 unidades de gramática estruturada.'}
              </p>
            </div>
          </div>

          {/* Progress Indicator & CTA */}
          <div className="w-full md:w-auto shrink-0 flex flex-col sm:flex-row md:flex-col items-stretch md:items-end gap-3">
            <div className="bg-white px-4 py-2.5 rounded-2xl border border-slate-200 shadow-xs min-w-[200px]">
              <div className="flex justify-between items-center text-xs font-bold text-slate-700 mb-1.5">
                <span>Progresso no Curso</span>
                <span className="font-mono text-blue-600">{unitsCompletedCount}/5 Unidades</span>
              </div>
              <div className="w-full bg-slate-100 h-2.5 rounded-full overflow-hidden border border-slate-200">
                <div 
                  className={`h-full rounded-full transition-all duration-500 ${
                    isGatedUnlocked ? 'bg-emerald-500' : 'bg-blue-600'
                  }`}
                  style={{ width: `${Math.min(100, (unitsCompletedCount / 5) * 100)}%` }}
                />
              </div>
            </div>

            {!isGatedUnlocked && (
              <button
                onClick={onGoToMaterial}
                className="inline-flex items-center justify-center space-x-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold shadow-xs hover:shadow-blue-500/20 transition-all active:scale-95"
              >
                <span>Concluir Unidades no Material</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

        </div>
      </div>

      {/* ========================================================= */}
      {/* 3. STEP-BY-STEP SCHEDULING FLOW (INTUITIVE & CLEAR)       */}
      {/* ========================================================= */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Column: 2-Step Preparation Form */}
        <div className="lg:col-span-7 space-y-6">
          
          <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-xs space-y-6">
            
            {/* Header of Form */}
            <div className="border-b border-slate-100 pb-5 space-y-1">
              <div className="flex items-center space-x-2 text-blue-600">
                <span className="w-6 h-6 rounded-full bg-blue-100 font-bold text-blue-700 text-xs flex items-center justify-center">
                  1
                </span>
                <span className="text-xs uppercase font-bold tracking-wider">
                  Passo 1: Defina o Foco da Sua Aula
                </span>
              </div>
              <h3 className="text-xl font-black text-slate-900">
                O que você deseja priorizar com o professor?
              </h3>
              <p className="text-xs text-slate-500">
                O professor Carlos revisará suas escolhas antes da sessão para preparar exercícios sob medida.
              </p>
            </div>

            {/* Focus Options Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {FOCUS_CARDS.map((card) => {
                const isSelected = classType === card.id;
                return (
                  <button
                    key={card.id}
                    type="button"
                    onClick={() => setClassType(card.id)}
                    className={`p-4 rounded-2xl border text-left transition-all relative flex flex-col justify-between ${
                      isSelected
                        ? 'border-blue-600 bg-blue-50/60 shadow-xs ring-2 ring-blue-500/20'
                        : 'border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50/50'
                    }`}
                  >
                    <div className="flex items-start justify-between mb-2">
                      <div className={`p-2 rounded-xl border ${
                        isSelected ? 'bg-white border-blue-200' : 'bg-slate-50 border-slate-200'
                      }`}>
                        {card.icon}
                      </div>
                      <span className={`text-[10px] font-bold uppercase px-2 py-0.5 rounded-full ${
                        isSelected ? 'bg-blue-200/70 text-blue-800' : 'bg-slate-100 text-slate-500'
                      }`}>
                        {card.tag}
                      </span>
                    </div>
                    <div>
                      <h4 className="text-xs sm:text-sm font-bold text-slate-900">{card.title}</h4>
                      <p className="text-[11px] text-slate-500 mt-0.5 leading-relaxed">{card.desc}</p>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Step 2: Custom Goals & Notes */}
            <div className="border-t border-slate-100 pt-6 space-y-4">
              <div className="flex items-center space-x-2 text-blue-600">
                <span className="w-6 h-6 rounded-full bg-blue-100 font-bold text-blue-700 text-xs flex items-center justify-center">
                  2
                </span>
                <span className="text-xs uppercase font-bold tracking-wider">
                  Passo 2: Anotações & Dúvidas Específicas
                </span>
              </div>
              
              <div className="space-y-2">
                <label className="block text-xs font-semibold text-slate-700">
                  Descreva o que você gostaria de praticar (ou clique em uma sugestão rápida):
                </label>
                
                {/* Quick Chips */}
                <div className="flex flex-wrap gap-1.5 pb-1">
                  {QUICK_SUGGESTIONS.map((sug, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => setStudentGoals(prev => prev ? `${prev} + ${sug}` : sug)}
                      className="text-[11px] font-medium px-2.5 py-1 rounded-full bg-slate-100 hover:bg-blue-50 hover:text-blue-700 text-slate-600 border border-slate-200 transition-colors"
                    >
                      + {sug}
                    </button>
                  ))}
                </div>

                <textarea
                  rows={3}
                  value={studentGoals}
                  onChange={(e) => setStudentGoals(e.target.value)}
                  placeholder="Ex: Gostaria de simular uma entrevista de emprego em inglês para cargo de liderança e tirar dúvidas sobre Present Perfect..."
                  className="w-full p-3.5 rounded-2xl bg-slate-50 border border-slate-200 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:bg-white transition-all"
                />
              </div>

              {isSuccessSaved && (
                <div className="p-3.5 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-900 text-xs flex items-center space-x-2.5 animate-fadeIn">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Suas preferências foram registradas no seu perfil! Agora selecione seu horário no Calendly.</span>
                </div>
              )}

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2">
                <button
                  type="button"
                  onClick={handleSavePreparation}
                  disabled={!studentGoals.trim()}
                  className="w-full sm:w-auto px-5 py-2.5 rounded-xl border border-slate-200 hover:bg-slate-50 text-slate-700 text-xs font-bold transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Salvar Observações
                </button>

                <a
                  href="https://calendly.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold shadow-sm hover:shadow-blue-500/25 transition-all active:scale-95"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Passo 3: Escolher Horário no Calendly</span>
                </a>
              </div>

            </div>

          </div>

          {/* Teacher Profile Spotlight */}
          <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-xs flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-5">
            <div className="w-16 h-16 rounded-2xl overflow-hidden bg-[#8897a2] border border-slate-300 shrink-0 shadow-xs flex items-center justify-center p-1">
              <img 
                src={INSIGHT_LOGO_ICON} 
                alt="Insight Logo" 
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
            <div className="space-y-1">
              <div className="flex items-center space-x-2">
                <h4 className="font-extrabold text-sm sm:text-base text-slate-900">Professor Carlos</h4>
                <span className="text-[10px] font-bold uppercase px-2 py-0.5 rounded-full bg-blue-50 text-blue-700 border border-blue-200">
                  Mentor Oficial Insight
                </span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Especialista no método Insight English de fala ativa. Suas aulas são conduzidas com paciência, acolhimento e técnicas de eliminação de bloqueios psicológicos para destravar sua confiança em inglês.
              </p>
            </div>
          </div>

        </div>

        {/* Right Column: Scheduled Classes + Calendly Live Card + FAQ */}
        <div className="lg:col-span-5 space-y-6">
          
          {/* Quick Schedule Launcher */}
          <div className="bg-gradient-to-br from-slate-900 to-slate-950 text-white rounded-3xl p-6 sm:p-7 border border-slate-800 shadow-md space-y-5">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2 text-blue-400">
                <CalendarDays className="w-5 h-5" />
                <span className="text-xs uppercase font-bold tracking-wider">Agenda Integrada</span>
              </div>
              <span className="text-[10px] font-mono text-slate-400 bg-white/10 px-2 py-0.5 rounded-full">
                Sincronizado
              </span>
            </div>

            <div className="space-y-1.5">
              <h3 className="text-lg font-bold text-white tracking-tight">
                Calendário Oficial do Professor
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Selecione o melhor dia e horário disponível na agenda do Google Meet em apenas 2 cliques.
              </p>
            </div>

            <div className="space-y-2 text-xs text-slate-300 pt-1">
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Sessão individual e personalizada de 50 minutos</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Prática de conversação e pronúncia com o professor</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Ambiente seguro para destravar a fala sem julgamentos</span>
              </div>
            </div>

            <a
              href="https://calendly.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 px-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold flex items-center justify-center space-x-2 shadow-xs transition-all active:scale-98"
            >
              <ExternalLink className="w-4 h-4" />
              <span>Abrir Agenda Oficial no Calendly</span>
            </a>
          </div>

          {/* Scheduled Classes Card */}
          <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-xs space-y-4">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div className="flex items-center space-x-2">
                <Calendar className="w-4 h-4 text-blue-600" />
                <h3 className="font-bold text-sm text-slate-900">
                  Suas Aulas Registradas
                </h3>
              </div>
              <span className="text-xs text-slate-400 font-mono">
                {scheduledClasses.length} {scheduledClasses.length === 1 ? 'sessão' : 'sessões'}
              </span>
            </div>

            {scheduledClasses.length === 0 ? (
              <div className="text-center py-6 space-y-2">
                <p className="text-xs text-slate-500">
                  Você ainda não possui aulas registradas.
                </p>
                <p className="text-[11px] text-slate-400">
                  Ao salvar suas preferências ou agendar no Calendly, seus registros aparecerão aqui.
                </p>
              </div>
            ) : (
              <div className="space-y-3 max-h-[300px] overflow-y-auto pr-1">
                {scheduledClasses.map((cls) => (
                  <div key={cls.id} className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-slate-900 font-mono">
                        {cls.date} • {cls.time}
                      </span>
                      <span className={`text-[10px] font-bold uppercase px-2 py-0.5 rounded-full ${
                        cls.status === 'concluída'
                          ? 'bg-slate-200 text-slate-700'
                          : 'bg-emerald-100 text-emerald-800 border border-emerald-200'
                      }`}>
                        {cls.status}
                      </span>
                    </div>

                    <div className="text-xs font-semibold text-blue-700">
                      Foco: {cls.classType}
                    </div>

                    {cls.studentGoals && (
                      <p className="text-[11px] text-slate-500 line-clamp-2 italic bg-white p-2 rounded-lg border border-slate-200/60">
                        "{cls.studentGoals}"
                      </p>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Quick FAQs */}
          <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-xs space-y-3">
            <div className="flex items-center space-x-2 text-slate-900 font-bold text-sm border-b border-slate-100 pb-3">
              <HelpCircle className="w-4 h-4 text-blue-600" />
              <span>Dúvidas Frequentes sobre as Aulas</span>
            </div>

            <div className="space-y-2">
              {FAQS.map((faq, index) => {
                const isOpen = activeFaq === index;
                return (
                  <div key={index} className="border border-slate-100 rounded-xl overflow-hidden">
                    <button
                      onClick={() => setActiveFaq(isOpen ? null : index)}
                      className="w-full p-3 text-left flex items-center justify-between text-xs font-bold text-slate-800 hover:bg-slate-50"
                    >
                      <span>{faq.q}</span>
                      <ChevronDown className={`w-3.5 h-3.5 text-slate-400 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                    </button>
                    {isOpen && (
                      <div className="p-3 pt-0 text-[11px] text-slate-600 leading-relaxed bg-slate-50/50">
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

        </div>

      </div>

    </div>
  );
};
