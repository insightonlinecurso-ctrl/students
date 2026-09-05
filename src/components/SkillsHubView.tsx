import React, { useState } from 'react';
import { 
  ArrowLeft, 
  ChevronRight, 
  Headphones, 
  BookOpen, 
  Mic, 
  PenTool, 
  Sparkles, 
  Layers, 
  CheckCircle2, 
  Award,
  Zap
} from 'lucide-react';
import { SkillType, SkillLevel, SKILLS_CONFIG, CEFR_LEVELS_CONFIG } from '../data/skillsTestData';
import { SkillTestRunner } from './SkillTestRunner';

// Import skill widget illustrations
import listeningWidgetImg from '../assets/images/listening_skill_widget_1788445101219.jpg';
import readingWidgetImg from '../assets/images/reading_skill_widget_1788445119265.jpg';
import speakingWidgetImg from '../assets/images/speaking_skill_widget_1788445140383.jpg';
import writingWidgetImg from '../assets/images/writing_skill_widget_1788445159210.jpg';

const SKILL_IMAGES: Record<SkillType, string> = {
  listening: listeningWidgetImg,
  reading: readingWidgetImg,
  speaking: speakingWidgetImg,
  writing: writingWidgetImg
};

interface SkillsHubViewProps {
  initialSkill?: SkillType | null;
  onBackToMainHub: () => void;
}

export const SkillsHubView: React.FC<SkillsHubViewProps> = ({ 
  initialSkill = null,
  onBackToMainHub 
}) => {
  const [selectedSkill, setSelectedSkill] = useState<SkillType | null>(initialSkill);
  const [selectedLevel, setSelectedLevel] = useState<SkillLevel | null>(null);
  const [isTestActive, setIsTestActive] = useState<boolean>(false);

  // If test is currently active, render the test runner
  if (isTestActive && selectedSkill && selectedLevel) {
    return (
      <SkillTestRunner
        skill={selectedSkill}
        level={selectedLevel}
        onBackToLevelSelect={() => setIsTestActive(false)}
        onBackToHub={onBackToMainHub}
        onChangeLevel={(newLevel) => setSelectedLevel(newLevel)}
      />
    );
  }

  // If a skill is chosen, show the Level Selection step
  if (selectedSkill) {
    const currentSkillInfo = SKILLS_CONFIG[selectedSkill];

    return (
      <div className="space-y-8 animate-fadeIn">
        {/* Navigation Bar inside Level Selection */}
        <div className="bg-white border border-slate-200 rounded-3xl p-5 sm:p-6 shadow-xs flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center space-x-3">
            <button
              id="btn-back-to-skills-selection"
              onClick={() => {
                setSelectedSkill(null);
                setSelectedLevel(null);
              }}
              className="inline-flex items-center space-x-2 px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs transition-colors border border-slate-200"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Outras Habilidades</span>
            </button>

            <div className="h-6 w-px bg-slate-200 hidden sm:block" />

            <div>
              <div className="flex items-center space-x-2">
                <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-blue-50 text-blue-700 border border-blue-200">
                  Etapa 2: Selecione o Nível
                </span>
                <span className="text-xs text-slate-400">•</span>
                <span className="text-xs font-semibold text-slate-500">
                  15 Atividades por Nível
                </span>
              </div>
              <h2 className="text-lg sm:text-xl font-black text-slate-900 tracking-tight">
                {currentSkillInfo.name} ({currentSkillInfo.namePt})
              </h2>
            </div>
          </div>

          <button
            onClick={onBackToMainHub}
            className="text-xs font-semibold text-slate-500 hover:text-slate-800 transition-colors"
          >
            Voltar ao Menu Geral de Testes
          </button>
        </div>

        {/* Selected Skill Banner */}
        <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-xs flex flex-col md:flex-row items-center gap-6">
          <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-2xl overflow-hidden shrink-0 border border-slate-100 shadow-sm bg-slate-900">
            <img 
              src={SKILL_IMAGES[selectedSkill]} 
              alt={currentSkillInfo.name}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-center"
            />
          </div>

          <div className="flex-1 space-y-2 text-center md:text-left">
            <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Habilidade Selecionada</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              Testes de {currentSkillInfo.name}: Escolha seu Nível CEFR
            </h1>
            <p className="text-sm text-slate-600 leading-relaxed max-w-2xl">
              {currentSkillInfo.description} Cada nível abaixo contém exatamente <strong>15 atividades personalizadas</strong> com dificuldade crescente.
            </p>
          </div>
        </div>

        {/* 5 CEFR Levels Grid */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-base font-extrabold text-slate-900 flex items-center space-x-2">
              <Layers className="w-4 h-4 text-blue-600" />
              <span>Níveis Disponíveis (Quadro Comum Europeu)</span>
            </h3>
            <span className="text-xs text-slate-500">15 Atividades cada</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {CEFR_LEVELS_CONFIG.map((lvlConfig) => (
              <button
                key={lvlConfig.level}
                id={`btn-select-level-${lvlConfig.level}`}
                onClick={() => {
                  setSelectedLevel(lvlConfig.level);
                  setIsTestActive(true);
                }}
                className="group text-left bg-white rounded-3xl border-2 border-slate-200 hover:border-blue-500 shadow-xs hover:shadow-lg transition-all duration-300 p-6 flex flex-col justify-between space-y-4 focus:outline-none focus:ring-4 focus:ring-blue-100"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className={`text-xs font-extrabold px-3 py-1 rounded-xl border ${lvlConfig.colorBadge}`}>
                      Nível {lvlConfig.level}
                    </span>
                    <span className="w-8 h-8 rounded-full bg-slate-100 text-slate-600 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors">
                      <ChevronRight className="w-4 h-4" />
                    </span>
                  </div>

                  <h4 className="text-lg font-black text-slate-900 group-hover:text-blue-600 transition-colors">
                    {lvlConfig.name}
                  </h4>

                  <p className="text-xs text-slate-500 leading-relaxed">
                    {lvlConfig.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold">
                  <span className="text-blue-700 flex items-center space-x-1">
                    <Zap className="w-3.5 h-3.5" />
                    <span>15 Atividades Práticas</span>
                  </span>
                  <span className="text-slate-400 group-hover:text-slate-700 transition-colors font-bold">
                    Iniciar Teste →
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // Step 1: Skill Selection Screen
  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Top Header Bar */}
      <div className="bg-white border border-slate-200 rounded-3xl p-5 sm:p-6 shadow-xs flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center space-x-3">
          <button
            id="btn-back-to-main-testes-hub"
            onClick={onBackToMainHub}
            className="inline-flex items-center space-x-2 px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs transition-colors border border-slate-200"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Voltar ao Menu Geral</span>
          </button>

          <div className="h-6 w-px bg-slate-200 hidden sm:block" />

          <div>
            <div className="flex items-center space-x-2">
              <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-blue-50 text-blue-700 border border-blue-200">
                Testes por Habilidade
              </span>
              <span className="text-xs text-slate-400">•</span>
              <span className="text-xs font-semibold text-slate-500">
                Listening, Reading, Speaking & Writing
              </span>
            </div>
            <h2 className="text-lg sm:text-xl font-black text-slate-900 tracking-tight">
              Escolha a Habilidade que Deseja Praticar
            </h2>
          </div>
        </div>
      </div>

      {/* Hero Explanatory Header */}
      <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-xs">
        <div className="max-w-3xl space-y-2">
          <div className="flex items-center space-x-2">
            <span className="text-xs uppercase font-bold tracking-wider px-3 py-1 rounded-full bg-blue-50 text-blue-700 border border-blue-200 inline-flex items-center space-x-1.5">
              <Sparkles className="w-3 h-3 text-blue-600" />
              <span>Treinamento Específico de Competências</span>
            </span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
            Treine as 4 Habilidades Separadamente
          </h1>
          <p className="text-sm text-slate-600 leading-relaxed">
            Aqui você pode focar exatamente no ponto que precisa aprimorar. Escolha abaixo entre <strong>Listening</strong>, <strong>Reading</strong>, <strong>Speaking</strong> ou <strong>Writing</strong>. Em seguida, selecione o nível desejado no Quadro Europeu (CEFR) para iniciar as 15 atividades sob medida.
          </p>
        </div>
      </div>

      {/* 4 Skill Cards Grid (Square widgets styled according to user design) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        
        {/* Card 1: Listening */}
        <button
          id="btn-skill-listening"
          onClick={() => setSelectedSkill('listening')}
          className="group text-left bg-white rounded-3xl border-2 border-slate-200 hover:border-blue-500 shadow-xs hover:shadow-lg transition-all duration-300 overflow-hidden flex flex-col p-4 sm:p-5 focus:outline-none focus:ring-4 focus:ring-blue-100"
        >
          <div className="relative w-full aspect-square rounded-2xl overflow-hidden bg-slate-900 border border-slate-100 shadow-inner group-hover:scale-[1.01] transition-transform duration-300">
            <img 
              src={listeningWidgetImg} 
              alt="Listening Skill Illustration"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute top-3 left-3">
              <span className="inline-flex items-center space-x-1 px-2.5 py-1 rounded-xl bg-slate-900/85 backdrop-blur-md text-white text-[10px] font-bold border border-white/20 shadow-sm">
                <Headphones className="w-3 h-3 text-blue-400" />
                <span>Áudio Nativo</span>
              </span>
            </div>
          </div>

          <div className="pt-4 pb-2 flex-1 flex flex-col justify-between space-y-2">
            <div>
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-black text-slate-900 group-hover:text-blue-600 transition-colors">
                  Listening
                </h3>
                <span className="w-7 h-7 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <ChevronRight className="w-4 h-4" />
                </span>
              </div>
              <p className="text-xs text-slate-500 mt-1 line-clamp-2">
                Compreensão auditiva de diálogos, pronúncia e velocidade nativa com áudio real e 15 atividades por nível.
              </p>
            </div>

            <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] font-semibold text-slate-500">
              <span className="flex items-center space-x-1 text-blue-700">
                <Zap className="w-3 h-3" />
                <span>15 Exercícios/Nível</span>
              </span>
              <span className="text-slate-400">A1 ao C1</span>
            </div>
          </div>
        </button>

        {/* Card 2: Reading */}
        <button
          id="btn-skill-reading"
          onClick={() => setSelectedSkill('reading')}
          className="group text-left bg-white rounded-3xl border-2 border-slate-200 hover:border-emerald-500 shadow-xs hover:shadow-lg transition-all duration-300 overflow-hidden flex flex-col p-4 sm:p-5 focus:outline-none focus:ring-4 focus:ring-emerald-100"
        >
          <div className="relative w-full aspect-square rounded-2xl overflow-hidden bg-slate-900 border border-slate-100 shadow-inner group-hover:scale-[1.01] transition-transform duration-300">
            <img 
              src={readingWidgetImg} 
              alt="Reading Skill Illustration"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute top-3 left-3">
              <span className="inline-flex items-center space-x-1 px-2.5 py-1 rounded-xl bg-slate-900/85 backdrop-blur-md text-white text-[10px] font-bold border border-white/20 shadow-sm">
                <BookOpen className="w-3 h-3 text-emerald-400" />
                <span>Textos Reais</span>
              </span>
            </div>
          </div>

          <div className="pt-4 pb-2 flex-1 flex flex-col justify-between space-y-2">
            <div>
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-black text-slate-900 group-hover:text-emerald-600 transition-colors">
                  Reading
                </h3>
                <span className="w-7 h-7 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                  <ChevronRight className="w-4 h-4" />
                </span>
              </div>
              <p className="text-xs text-slate-500 mt-1 line-clamp-2">
                Leitura e interpretação textual profunda de matérias, e-mails e ensaios com 15 atividades por nível.
              </p>
            </div>

            <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] font-semibold text-slate-500">
              <span className="flex items-center space-x-1 text-emerald-700">
                <Zap className="w-3 h-3" />
                <span>15 Exercícios/Nível</span>
              </span>
              <span className="text-slate-400">A1 ao C1</span>
            </div>
          </div>
        </button>

        {/* Card 3: Speaking */}
        <button
          id="btn-skill-speaking"
          onClick={() => setSelectedSkill('speaking')}
          className="group text-left bg-white rounded-3xl border-2 border-slate-200 hover:border-amber-500 shadow-xs hover:shadow-lg transition-all duration-300 overflow-hidden flex flex-col p-4 sm:p-5 focus:outline-none focus:ring-4 focus:ring-amber-100"
        >
          <div className="relative w-full aspect-square rounded-2xl overflow-hidden bg-slate-900 border border-slate-100 shadow-inner group-hover:scale-[1.01] transition-transform duration-300">
            <img 
              src={speakingWidgetImg} 
              alt="Speaking Skill Illustration"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute top-3 left-3">
              <span className="inline-flex items-center space-x-1 px-2.5 py-1 rounded-xl bg-slate-900/85 backdrop-blur-md text-white text-[10px] font-bold border border-white/20 shadow-sm">
                <Mic className="w-3 h-3 text-amber-400" />
                <span>Gravação & Fala</span>
              </span>
            </div>
          </div>

          <div className="pt-4 pb-2 flex-1 flex flex-col justify-between space-y-2">
            <div>
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-black text-slate-900 group-hover:text-amber-600 transition-colors">
                  Speaking
                </h3>
                <span className="w-7 h-7 rounded-full bg-amber-50 text-amber-600 flex items-center justify-center group-hover:bg-amber-600 group-hover:text-white transition-colors">
                  <ChevronRight className="w-4 h-4" />
                </span>
              </div>
              <p className="text-xs text-slate-500 mt-1 line-clamp-2">
                Prática oral de conversação em situações reais, modelo fonético nativo e gravação de voz interativa.
              </p>
            </div>

            <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] font-semibold text-slate-500">
              <span className="flex items-center space-x-1 text-amber-700">
                <Zap className="w-3 h-3" />
                <span>15 Exercícios/Nível</span>
              </span>
              <span className="text-slate-400">A1 ao C1</span>
            </div>
          </div>
        </button>

        {/* Card 4: Writing */}
        <button
          id="btn-skill-writing"
          onClick={() => setSelectedSkill('writing')}
          className="group text-left bg-white rounded-3xl border-2 border-slate-200 hover:border-violet-500 shadow-xs hover:shadow-lg transition-all duration-300 overflow-hidden flex flex-col p-4 sm:p-5 focus:outline-none focus:ring-4 focus:ring-violet-100"
        >
          <div className="relative w-full aspect-square rounded-2xl overflow-hidden bg-slate-900 border border-slate-100 shadow-inner group-hover:scale-[1.01] transition-transform duration-300">
            <img 
              src={writingWidgetImg} 
              alt="Writing Skill Illustration"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute top-3 left-3">
              <span className="inline-flex items-center space-x-1 px-2.5 py-1 rounded-xl bg-slate-900/85 backdrop-blur-md text-white text-[10px] font-bold border border-white/20 shadow-sm">
                <PenTool className="w-3 h-3 text-violet-400" />
                <span>Redação & Estilo</span>
              </span>
            </div>
          </div>

          <div className="pt-4 pb-2 flex-1 flex flex-col justify-between space-y-2">
            <div>
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-black text-slate-900 group-hover:text-violet-600 transition-colors">
                  Writing
                </h3>
                <span className="w-7 h-7 rounded-full bg-violet-50 text-violet-600 flex items-center justify-center group-hover:bg-violet-600 group-hover:text-white transition-colors">
                  <ChevronRight className="w-4 h-4" />
                </span>
              </div>
              <p className="text-xs text-slate-500 mt-1 line-clamp-2">
                Produção escrita com contagem de palavras ao vivo, checagem de expressões e redações modelo.
              </p>
            </div>

            <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] font-semibold text-slate-500">
              <span className="flex items-center space-x-1 text-violet-700">
                <Zap className="w-3 h-3" />
                <span>15 Exercícios/Nível</span>
              </span>
              <span className="text-slate-400">A1 ao C1</span>
            </div>
          </div>
        </button>

      </div>
    </div>
  );
};
