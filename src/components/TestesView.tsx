import React, { useState } from 'react';
import { 
  Sparkles, 
  GraduationCap, 
  Layers, 
  ChevronRight, 
  Headphones, 
  BookOpen, 
  Mic, 
  PenTool, 
  Award, 
  CheckCircle2, 
  Clock, 
  FileText,
  Zap,
  ArrowRight
} from 'lucide-react';
import { SkillType } from '../data/skillsTestData';
import { PlacementTestRunner } from './PlacementTestRunner';
import { SkillsHubView } from './SkillsHubView';

// Widget illustrations
import placementWidgetImg from '../assets/images/placement_test_widget_1788445066271.jpg';
import skillsTestsWidgetImg from '../assets/images/skills_tests_widget_1788445082805.jpg';
import listeningWidgetImg from '../assets/images/listening_skill_widget_1788445101219.jpg';
import readingWidgetImg from '../assets/images/reading_skill_widget_1788445119265.jpg';
import speakingWidgetImg from '../assets/images/speaking_skill_widget_1788445140383.jpg';
import writingWidgetImg from '../assets/images/writing_skill_widget_1788445159210.jpg';
import { INSIGHT_HEADER_BANNER } from '../assets/brand';

export const TestesView: React.FC = () => {
  const [currentView, setCurrentView] = useState<'hub' | 'placement' | 'skills'>('hub');
  const [initialSelectedSkill, setInitialSelectedSkill] = useState<SkillType | null>(null);

  // If inside the Placement Test runner
  if (currentView === 'placement') {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <PlacementTestRunner onBackToHub={() => setCurrentView('hub')} />
      </div>
    );
  }

  // If inside the Skills Hub (Skill selection -> Level selection -> 15-exercise test)
  if (currentView === 'skills') {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <SkillsHubView 
          initialSkill={initialSelectedSkill}
          onBackToMainHub={() => {
            setCurrentView('hub');
            setInitialSelectedSkill(null);
          }} 
        />
      </div>
    );
  }

  // =========================================================
  // MAIN "TESTES" HUB (Aparência visual moderna em widgets)
  // =========================================================
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10">
      {/* Header */}
      <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-xs">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="max-w-3xl space-y-2">
            <div className="flex items-center space-x-2">
              <span className="text-xs uppercase font-bold tracking-wider px-3 py-1 rounded-full bg-blue-50 text-blue-700 border border-blue-200 inline-flex items-center space-x-1.5">
                <GraduationCap className="w-3.5 h-3.5 text-blue-600" />
                <span>Avaliação & Certificação de Proficiência</span>
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              Centro de Testes e Diagnóstico de Inglês
            </h1>
            <p className="text-sm text-slate-600 leading-relaxed">
              Selecione uma das modalidades de avaliação abaixo. Você pode realizar o <strong>Teste de Nivelamento Geral</strong> para descobrir seu nível CEFR oficial, ou treinar as <strong>Habilidades Separadamente</strong> (Listening, Reading, Speaking e Writing) com 15 atividades sob medida para cada nível.
            </p>
          </div>
          <div className="hidden lg:block shrink-0">
            <div className="w-44 h-24 rounded-2xl overflow-hidden shadow-sm border border-slate-200 bg-[#8897a2]">
              <img 
                src={INSIGHT_HEADER_BANNER} 
                alt="Insight English" 
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover" 
              />
            </div>
          </div>
        </div>
      </div>

      {/* Primary 2 Big Mode Widgets (Square Widget Layout) */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-base font-extrabold text-slate-900 flex items-center space-x-2">
            <Sparkles className="w-4 h-4 text-blue-600" />
            <span>Modalidades Principais de Avaliação</span>
          </h2>
          <span className="text-xs text-slate-500">Escolha como deseja ser avaliado</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Widget 1: Teste de Nivelamento (Placement Test) */}
          <button
            id="btn-widget-placement-test"
            onClick={() => setCurrentView('placement')}
            className="group text-left bg-white rounded-3xl border-2 border-slate-200 hover:border-blue-500 shadow-xs hover:shadow-lg transition-all duration-300 overflow-hidden flex flex-col p-5 sm:p-6 focus:outline-none focus:ring-4 focus:ring-blue-100"
          >
            {/* Square Image / Widget Icon */}
            <div className="relative w-full aspect-square sm:aspect-video md:aspect-square rounded-2xl overflow-hidden bg-slate-900 border border-slate-100 shadow-inner group-hover:scale-[1.01] transition-transform duration-300">
              <img 
                src={placementWidgetImg} 
                alt="Ilustração do Teste de Nivelamento"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center"
              />
              {/* Top Floating Badge */}
              <div className="absolute top-3 left-3">
                <span className="inline-flex items-center space-x-1 px-3 py-1 rounded-xl bg-slate-900/85 backdrop-blur-md text-white text-[10px] font-bold border border-white/20 shadow-sm">
                  <Award className="w-3 h-3 text-blue-400" />
                  <span>Diagnóstico Oficial</span>
                </span>
              </div>
            </div>

            {/* Card Body underneath the image (frase embaixo da imagem, no mesmo quadro) */}
            <div className="pt-5 pb-1 flex-1 flex flex-col justify-between space-y-3">
              <div>
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-black text-slate-900 group-hover:text-blue-600 transition-colors">
                    Teste de Nivelamento
                  </h3>
                  <span className="w-8 h-8 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    <ChevronRight className="w-4 h-4" />
                  </span>
                </div>
                <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">
                  Avaliação diagnóstica completa com 45 questões (Gramática, Vocabulário, Reading e Listening) para determinar sua classificação oficial no Quadro Europeu (A1 a C2) e emitir certificado em PDF.
                </p>
              </div>

              {/* Quick Metrics Bar */}
              <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] font-semibold text-slate-500">
                <span className="flex items-center space-x-1 text-blue-700">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>45 Questões Avaliativas</span>
                </span>
                <span className="text-slate-400">Emissão de PDF</span>
              </div>
            </div>
          </button>

          {/* Widget 2: Testes por Habilidade (Skills Hub) */}
          <button
            id="btn-widget-skills-tests"
            onClick={() => {
              setInitialSelectedSkill(null);
              setCurrentView('skills');
            }}
            className="group text-left bg-white rounded-3xl border-2 border-slate-200 hover:border-emerald-500 shadow-xs hover:shadow-lg transition-all duration-300 overflow-hidden flex flex-col p-5 sm:p-6 focus:outline-none focus:ring-4 focus:ring-emerald-100"
          >
            {/* Square Image / Widget Icon */}
            <div className="relative w-full aspect-square sm:aspect-video md:aspect-square rounded-2xl overflow-hidden bg-slate-900 border border-slate-100 shadow-inner group-hover:scale-[1.01] transition-transform duration-300">
              <img 
                src={skillsTestsWidgetImg} 
                alt="Ilustração dos Testes por Habilidade"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center"
              />
              {/* Top Floating Badge */}
              <div className="absolute top-3 left-3">
                <span className="inline-flex items-center space-x-1 px-3 py-1 rounded-xl bg-slate-900/85 backdrop-blur-md text-white text-[10px] font-bold border border-white/20 shadow-sm">
                  <Layers className="w-3 h-3 text-emerald-400" />
                  <span>Treino por Competência</span>
                </span>
              </div>
            </div>

            {/* Card Body underneath the image */}
            <div className="pt-5 pb-1 flex-1 flex flex-col justify-between space-y-3">
              <div>
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-black text-slate-900 group-hover:text-emerald-600 transition-colors">
                    Testes por Habilidade
                  </h3>
                  <span className="w-8 h-8 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                    <ChevronRight className="w-4 h-4" />
                  </span>
                </div>
                <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">
                  Treine as habilidades de forma isolada e focada: Listening, Reading, Speaking e Writing. Escolha sua habilidade e seu nível CEFR para realizar 15 atividades exclusivas com correção e modelos nativos.
                </p>
              </div>

              {/* Quick Metrics Bar */}
              <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] font-semibold text-slate-500">
                <span className="flex items-center space-x-1 text-emerald-700">
                  <Zap className="w-3.5 h-3.5" />
                  <span>4 Habilidades • 15 Exercícios/Nível</span>
                </span>
                <span className="text-slate-400">Níveis A1 ao C1</span>
              </div>
            </div>
          </button>

        </div>
      </div>

      {/* Direct Illustrated Skill Buttons Section */}
      <div className="space-y-4 pt-2">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
          <div>
            <h2 className="text-base font-extrabold text-slate-900 flex items-center space-x-2">
              <Zap className="w-4 h-4 text-amber-500" />
              <span>Acesso Direto: Botões Ilustrados de cada Habilidade</span>
            </h2>
            <p className="text-xs text-slate-500 mt-0.5">
              Clique diretamente na habilidade que deseja treinar para escolher seu nível (A1 ao C1) e iniciar os 15 exercícios:
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Skill 1: Listening */}
          <button
            id="btn-direct-listening"
            onClick={() => {
              setInitialSelectedSkill('listening');
              setCurrentView('skills');
            }}
            className="group text-left bg-white rounded-3xl border-2 border-slate-200 hover:border-blue-500 shadow-xs hover:shadow-lg transition-all duration-300 overflow-hidden flex flex-col p-4 sm:p-5 focus:outline-none focus:ring-4 focus:ring-blue-100"
          >
            <div className="relative w-full aspect-square rounded-2xl overflow-hidden bg-slate-900 border border-slate-100 shadow-inner group-hover:scale-[1.01] transition-transform duration-300">
              <img 
                src={listeningWidgetImg} 
                alt="Listening Widget"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute top-2.5 left-2.5">
                <span className="inline-flex items-center space-x-1 px-2.5 py-0.5 rounded-lg bg-slate-900/85 backdrop-blur-md text-white text-[10px] font-bold border border-white/20 shadow-sm">
                  <Headphones className="w-3 h-3 text-blue-400" />
                  <span>Áudio Nativo</span>
                </span>
              </div>
            </div>

            <div className="pt-4 pb-1 flex-1 flex flex-col justify-between space-y-2">
              <div>
                <div className="flex items-center justify-between">
                  <h3 className="text-base font-black text-slate-900 group-hover:text-blue-600 transition-colors">
                    Listening
                  </h3>
                  <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-blue-600 transition-colors" />
                </div>
                <p className="text-xs text-slate-500 mt-1 line-clamp-2">
                  Treine compreensão auditiva em velocidade nativa com áudio player e 15 atividades por nível.
                </p>
              </div>

              <div className="pt-2.5 border-t border-slate-100 flex items-center justify-between text-[11px] font-semibold text-slate-500">
                <span className="text-blue-700">15 Atividades/Nível</span>
                <span className="text-slate-400">A1 ao C1</span>
              </div>
            </div>
          </button>

          {/* Skill 2: Reading */}
          <button
            id="btn-direct-reading"
            onClick={() => {
              setInitialSelectedSkill('reading');
              setCurrentView('skills');
            }}
            className="group text-left bg-white rounded-3xl border-2 border-slate-200 hover:border-emerald-500 shadow-xs hover:shadow-lg transition-all duration-300 overflow-hidden flex flex-col p-4 sm:p-5 focus:outline-none focus:ring-4 focus:ring-emerald-100"
          >
            <div className="relative w-full aspect-square rounded-2xl overflow-hidden bg-slate-900 border border-slate-100 shadow-inner group-hover:scale-[1.01] transition-transform duration-300">
              <img 
                src={readingWidgetImg} 
                alt="Reading Widget"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute top-2.5 left-2.5">
                <span className="inline-flex items-center space-x-1 px-2.5 py-0.5 rounded-lg bg-slate-900/85 backdrop-blur-md text-white text-[10px] font-bold border border-white/20 shadow-sm">
                  <BookOpen className="w-3 h-3 text-emerald-400" />
                  <span>Textos Reais</span>
                </span>
              </div>
            </div>

            <div className="pt-4 pb-1 flex-1 flex flex-col justify-between space-y-2">
              <div>
                <div className="flex items-center justify-between">
                  <h3 className="text-base font-black text-slate-900 group-hover:text-emerald-600 transition-colors">
                    Reading
                  </h3>
                  <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-emerald-600 transition-colors" />
                </div>
                <p className="text-xs text-slate-500 mt-1 line-clamp-2">
                  Leitura crítica e interpretação de textos autênticos com vocabulário progressivo e 15 atividades.
                </p>
              </div>

              <div className="pt-2.5 border-t border-slate-100 flex items-center justify-between text-[11px] font-semibold text-slate-500">
                <span className="text-emerald-700">15 Atividades/Nível</span>
                <span className="text-slate-400">A1 ao C1</span>
              </div>
            </div>
          </button>

          {/* Skill 3: Speaking */}
          <button
            id="btn-direct-speaking"
            onClick={() => {
              setInitialSelectedSkill('speaking');
              setCurrentView('skills');
            }}
            className="group text-left bg-white rounded-3xl border-2 border-slate-200 hover:border-amber-500 shadow-xs hover:shadow-lg transition-all duration-300 overflow-hidden flex flex-col p-4 sm:p-5 focus:outline-none focus:ring-4 focus:ring-amber-100"
          >
            <div className="relative w-full aspect-square rounded-2xl overflow-hidden bg-slate-900 border border-slate-100 shadow-inner group-hover:scale-[1.01] transition-transform duration-300">
              <img 
                src={speakingWidgetImg} 
                alt="Speaking Widget"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute top-2.5 left-2.5">
                <span className="inline-flex items-center space-x-1 px-2.5 py-0.5 rounded-lg bg-slate-900/85 backdrop-blur-md text-white text-[10px] font-bold border border-white/20 shadow-sm">
                  <Mic className="w-3 h-3 text-amber-400" />
                  <span>Gravação & Fala</span>
                </span>
              </div>
            </div>

            <div className="pt-4 pb-1 flex-1 flex flex-col justify-between space-y-2">
              <div>
                <div className="flex items-center justify-between">
                  <h3 className="text-base font-black text-slate-900 group-hover:text-amber-600 transition-colors">
                    Speaking
                  </h3>
                  <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-amber-600 transition-colors" />
                </div>
                <p className="text-xs text-slate-500 mt-1 line-clamp-2">
                  Pratique sua fala em cenários reais com gravação de voz, feedback e modelos de pronúncia.
                </p>
              </div>

              <div className="pt-2.5 border-t border-slate-100 flex items-center justify-between text-[11px] font-semibold text-slate-500">
                <span className="text-amber-700">15 Atividades/Nível</span>
                <span className="text-slate-400">A1 ao C1</span>
              </div>
            </div>
          </button>

          {/* Skill 4: Writing */}
          <button
            id="btn-direct-writing"
            onClick={() => {
              setInitialSelectedSkill('writing');
              setCurrentView('skills');
            }}
            className="group text-left bg-white rounded-3xl border-2 border-slate-200 hover:border-violet-500 shadow-xs hover:shadow-lg transition-all duration-300 overflow-hidden flex flex-col p-4 sm:p-5 focus:outline-none focus:ring-4 focus:ring-violet-100"
          >
            <div className="relative w-full aspect-square rounded-2xl overflow-hidden bg-slate-900 border border-slate-100 shadow-inner group-hover:scale-[1.01] transition-transform duration-300">
              <img 
                src={writingWidgetImg} 
                alt="Writing Widget"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute top-2.5 left-2.5">
                <span className="inline-flex items-center space-x-1 px-2.5 py-0.5 rounded-lg bg-slate-900/85 backdrop-blur-md text-white text-[10px] font-bold border border-white/20 shadow-sm">
                  <PenTool className="w-3 h-3 text-violet-400" />
                  <span>Redação & Estilo</span>
                </span>
              </div>
            </div>

            <div className="pt-4 pb-1 flex-1 flex flex-col justify-between space-y-2">
              <div>
                <div className="flex items-center justify-between">
                  <h3 className="text-base font-black text-slate-900 group-hover:text-violet-600 transition-colors">
                    Writing
                  </h3>
                  <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-violet-600 transition-colors" />
                </div>
                <p className="text-xs text-slate-500 mt-1 line-clamp-2">
                  Redija textos com contador de palavras ao vivo, checagem de expressões e redações de referência.
                </p>
              </div>

              <div className="pt-2.5 border-t border-slate-100 flex items-center justify-between text-[11px] font-semibold text-slate-500">
                <span className="text-violet-700">15 Atividades/Nível</span>
                <span className="text-slate-400">A1 ao C1</span>
              </div>
            </div>
          </button>

        </div>
      </div>
    </div>
  );
};
