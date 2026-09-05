import React, { useState } from 'react';
import { 
  Calendar, 
  Dumbbell, 
  Sparkles, 
  ArrowLeft, 
  ChevronRight, 
  Clock, 
  Layers, 
  Zap, 
  CheckCircle2,
  Plus
} from 'lucide-react';
import { PlannerView } from './PlannerView';
import { CompetencyExercisesView } from './CompetencyExercisesView';
import plannerWidgetImg from '../assets/images/planner_widget_illustration_1788444022248.jpg';
import exercisesWidgetImg from '../assets/images/exercises_widget_illustration_1788444035946.jpg';

interface ExtrasViewProps {
  onSelectUnit: (unitId: number) => void;
  defaultSubTab?: 'hub' | 'planner' | 'exercises';
}

export const ExtrasView: React.FC<ExtrasViewProps> = ({ 
  onSelectUnit, 
  defaultSubTab = 'hub' 
}) => {
  const [currentView, setCurrentView] = useState<'hub' | 'planner' | 'exercises'>(defaultSubTab);

  // If inside a specific tool, render it with a prominent back button & top bar
  if (currentView === 'planner') {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6">
        {/* Navigation Bar inside Planner */}
        <div className="bg-white border border-slate-200 rounded-3xl p-4 sm:p-5 shadow-xs flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center space-x-3">
            <button
              id="btn-back-to-extras-hub"
              onClick={() => setCurrentView('hub')}
              className="inline-flex items-center space-x-2 px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs transition-colors border border-slate-200"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Voltar aos Extras</span>
            </button>

            <div className="h-6 w-px bg-slate-200 hidden sm:block" />

            <div>
              <div className="flex items-center space-x-2">
                <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-blue-50 text-blue-700 border border-blue-200">
                  Módulo Extra
                </span>
              </div>
              <h2 className="text-lg sm:text-xl font-black text-slate-900 tracking-tight">
                Planner Inteligente de Estudos
              </h2>
            </div>
          </div>

          {/* Quick toggle to Exercícios */}
          <div className="flex items-center space-x-2">
            <button
              id="btn-quick-to-exercises"
              onClick={() => setCurrentView('exercises')}
              className="inline-flex items-center space-x-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold text-slate-600 hover:text-blue-700 hover:bg-blue-50 border border-transparent hover:border-blue-200 transition-all"
            >
              <Dumbbell className="w-3.5 h-3.5" />
              <span>Ver Exercícios</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Content */}
        <PlannerView onSelectUnit={onSelectUnit} />
      </div>
    );
  }

  if (currentView === 'exercises') {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6">
        {/* Navigation Bar inside Exercícios */}
        <div className="bg-white border border-slate-200 rounded-3xl p-4 sm:p-5 shadow-xs flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center space-x-3">
            <button
              id="btn-back-to-extras-hub-2"
              onClick={() => setCurrentView('hub')}
              className="inline-flex items-center space-x-2 px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs transition-colors border border-slate-200"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Voltar aos Extras</span>
            </button>

            <div className="h-6 w-px bg-slate-200 hidden sm:block" />

            <div>
              <div className="flex items-center space-x-2">
                <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-blue-50 text-blue-700 border border-blue-200">
                  Módulo Extra
                </span>
              </div>
              <h2 className="text-lg sm:text-xl font-black text-slate-900 tracking-tight">
                Exercícios por Competência
              </h2>
            </div>
          </div>

          {/* Quick toggle to Planner */}
          <div className="flex items-center space-x-2">
            <button
              id="btn-quick-to-planner"
              onClick={() => setCurrentView('planner')}
              className="inline-flex items-center space-x-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold text-slate-600 hover:text-blue-700 hover:bg-blue-50 border border-transparent hover:border-blue-200 transition-all"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Ver Planner</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Content */}
        <CompetencyExercisesView />
      </div>
    );
  }

  // HUB / DASHBOARD OF SQUARE WIDGET BUTTONS
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Header */}
      <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-xs">
        <div className="max-w-3xl space-y-2">
          <div className="flex items-center space-x-2">
            <span className="text-xs uppercase font-bold tracking-wider px-3 py-1 rounded-full bg-blue-50 text-blue-700 border border-blue-200 inline-flex items-center space-x-1.5">
              <Sparkles className="w-3 h-3 text-blue-600" />
              <span>Recursos Extras & Widgets</span>
            </span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
            Ferramentas Complementares de Aprendizado
          </h1>
          <p className="text-sm text-slate-600 leading-relaxed">
            Selecione uma das ferramentas abaixo para potencializar seus estudos. Como este espaço foi projetado para crescer, cada módulo é acessado como um widget ilustrado independente.
          </p>
        </div>
      </div>

      {/* Grid of Square Widget Buttons */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        
        {/* Widget 1: Planner Inteligente */}
        <button
          id="btn-widget-planner"
          onClick={() => setCurrentView('planner')}
          className="group text-left bg-white rounded-3xl border-2 border-slate-200 hover:border-blue-500 shadow-xs hover:shadow-lg transition-all duration-300 overflow-hidden flex flex-col p-4 sm:p-5 focus:outline-none focus:ring-4 focus:ring-blue-100"
        >
          {/* Square Image / Widget Icon */}
          <div className="relative w-full aspect-square rounded-2xl overflow-hidden bg-slate-900 border border-slate-100 shadow-inner group-hover:scale-[1.01] transition-transform duration-300">
            <img 
              src={plannerWidgetImg} 
              alt="Ilustração do Planner de Estudos"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-center"
            />
            {/* Top Floating Badge */}
            <div className="absolute top-3 left-3">
              <span className="inline-flex items-center space-x-1 px-2.5 py-1 rounded-xl bg-slate-900/85 backdrop-blur-md text-white text-[10px] font-bold border border-white/20 shadow-sm">
                <Calendar className="w-3 h-3 text-blue-400" />
                <span>Cronograma</span>
              </span>
            </div>
          </div>

          {/* Card Body */}
          <div className="pt-4 pb-2 flex-1 flex flex-col justify-between space-y-2">
            <div>
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-black text-slate-900 group-hover:text-blue-600 transition-colors">
                  Planner Inteligente
                </h3>
                <span className="w-7 h-7 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <ChevronRight className="w-4 h-4" />
                </span>
              </div>
              <p className="text-xs text-slate-500 mt-1 line-clamp-2">
                Defina sua meta de formatura, gerencie as 68 horas do curso e organize sua rotina dia a dia no calendário.
              </p>
            </div>

            {/* Quick Metrics Bar */}
            <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] font-semibold text-slate-500">
              <span className="flex items-center space-x-1 text-blue-700">
                <Clock className="w-3 h-3" />
                <span>68 Horas Totais</span>
              </span>
              <span className="text-slate-400">30 Unidades</span>
            </div>
          </div>
        </button>

        {/* Widget 2: Exercícios por Competência */}
        <button
          id="btn-widget-exercises"
          onClick={() => setCurrentView('exercises')}
          className="group text-left bg-white rounded-3xl border-2 border-slate-200 hover:border-blue-500 shadow-xs hover:shadow-lg transition-all duration-300 overflow-hidden flex flex-col p-4 sm:p-5 focus:outline-none focus:ring-4 focus:ring-blue-100"
        >
          {/* Square Image / Widget Icon */}
          <div className="relative w-full aspect-square rounded-2xl overflow-hidden bg-slate-900 border border-slate-100 shadow-inner group-hover:scale-[1.01] transition-transform duration-300">
            <img 
              src={exercisesWidgetImg} 
              alt="Ilustração dos Exercícios por Competência"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-center"
            />
            {/* Top Floating Badge */}
            <div className="absolute top-3 left-3">
              <span className="inline-flex items-center space-x-1 px-2.5 py-1 rounded-xl bg-slate-900/85 backdrop-blur-md text-white text-[10px] font-bold border border-white/20 shadow-sm">
                <Dumbbell className="w-3 h-3 text-emerald-400" />
                <span>Treinamento</span>
              </span>
            </div>
          </div>

          {/* Card Body */}
          <div className="pt-4 pb-2 flex-1 flex flex-col justify-between space-y-2">
            <div>
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-black text-slate-900 group-hover:text-blue-600 transition-colors">
                  Exercícios por Competência
                </h3>
                <span className="w-7 h-7 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <ChevronRight className="w-4 h-4" />
                </span>
              </div>
              <p className="text-xs text-slate-500 mt-1 line-clamp-2">
                Treine as 5 competências essenciais: Gramática, Compreensão, Escuta com áudio, Fala e Desafios Práticos.
              </p>
            </div>

            {/* Quick Metrics Bar */}
            <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] font-semibold text-slate-500">
              <span className="flex items-center space-x-1 text-emerald-700">
                <Zap className="w-3 h-3" />
                <span>5 Habilidades</span>
              </span>
              <span className="text-slate-400">Score & Feedback</span>
            </div>
          </div>
        </button>

        {/* Widget 3: Espaço para Próximos Extras (Escalabilidade) */}
        <div className="rounded-3xl border-2 border-dashed border-slate-200 bg-slate-50/70 p-4 sm:p-5 flex flex-col justify-between text-slate-400">
          <div className="relative w-full aspect-square rounded-2xl bg-white border border-slate-200/80 flex flex-col items-center justify-center p-6 text-center space-y-3">
            <div className="w-14 h-14 rounded-2xl bg-slate-100 text-slate-400 flex items-center justify-center border border-slate-200">
              <Plus className="w-7 h-7" />
            </div>
            <div>
              <p className="text-sm font-extrabold text-slate-700">Novos Módulos</p>
              <p className="text-xs text-slate-400 mt-0.5">Em desenvolvimento</p>
            </div>
          </div>

          <div className="pt-4 pb-1 space-y-1">
            <span className="text-[10px] uppercase font-bold tracking-wider text-slate-400 block">
              Expansão do Curso
            </span>
            <p className="text-xs text-slate-500">
              Novas ferramentas complementares e atividades extras serão integradas aqui nesta grade.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};
