import React, { useState, useEffect } from 'react';
import { 
  ArrowLeft, 
  ArrowRight, 
  RotateCcw, 
  CheckCircle2, 
  AlertCircle, 
  Volume2, 
  Mic, 
  MicOff, 
  FileText, 
  BookOpen, 
  Headphones, 
  PenTool, 
  Eye, 
  EyeOff, 
  Sparkles,
  Award,
  Play,
  Square,
  HelpCircle,
  MessageSquare
} from 'lucide-react';
import { SkillType, SkillLevel, SkillTestItem, SKILLS_CONFIG, CEFR_LEVELS_CONFIG } from '../data/skillsTestData';
import { getSkillQuestions } from '../data/skills';
import { useProgress } from '../context/ProgressContext';
import { useAuth } from '../context/AuthContext';

interface SkillTestRunnerProps {
  skill: SkillType;
  level: SkillLevel;
  onBackToLevelSelect: () => void;
  onBackToHub: () => void;
  onChangeLevel: (lvl: SkillLevel) => void;
}

export const SkillTestRunner: React.FC<SkillTestRunnerProps> = ({
  skill,
  level,
  onBackToLevelSelect,
  onBackToHub,
  onChangeLevel
}) => {
  const { speakText } = useProgress();
  const { user } = useAuth();

  const questions: SkillTestItem[] = getSkillQuestions(skill, level);
  const totalQuestions = questions.length || 15;

  const [currentIdx, setCurrentIdx] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, number>>({});
  const [writtenAnswers, setWrittenAnswers] = useState<Record<number, string>>({});
  const [spokenCompleted, setSpokenCompleted] = useState<Record<number, boolean>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showTranscript, setShowTranscript] = useState(false);
  const [audioSpeed, setAudioSpeed] = useState<number>(1.0);
  const [isRecording, setIsRecording] = useState(false);
  const [spokenTranscript, setSpokenTranscript] = useState<string>('');
  const [showSampleWriting, setShowSampleWriting] = useState(false);

  // Web speech recognition instance (if supported)
  const [recognition, setRecognition] = useState<any>(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
      if (SpeechRecognition) {
        const recog = new SpeechRecognition();
        recog.continuous = true;
        recog.interimResults = true;
        recog.lang = 'en-US';

        recog.onresult = (event: any) => {
          let currentSpeech = '';
          for (let i = event.resultIndex; i < event.results.length; ++i) {
            currentSpeech += event.results[i][0].transcript;
          }
          setSpokenTranscript(currentSpeech);
        };

        recog.onerror = () => {
          setIsRecording(false);
        };

        recog.onend = () => {
          setIsRecording(false);
        };

        setRecognition(recog);
      }
    }
  }, []);

  const currentItem: SkillTestItem | undefined = questions[currentIdx];
  const skillInfo = SKILLS_CONFIG[skill];
  const levelInfo = CEFR_LEVELS_CONFIG.find(l => l.level === level);

  // Auto-reset state when switching question
  useEffect(() => {
    setShowTranscript(false);
    setShowSampleWriting(false);
    setSpokenTranscript('');
    if (isRecording && recognition) {
      recognition.stop();
      setIsRecording(false);
    }
  }, [currentIdx]);

  if (!currentItem) {
    return (
      <div className="bg-white border border-slate-200 rounded-3xl p-8 text-center space-y-4">
        <p className="text-slate-600 text-sm">Nenhuma atividade encontrada para {skillInfo.name} nível {level}.</p>
        <button
          onClick={onBackToLevelSelect}
          className="px-5 py-2.5 rounded-xl bg-blue-600 text-white text-xs font-bold"
        >
          Voltar e Escolher Outro Nível
        </button>
      </div>
    );
  }

  // Handlers for interactive questions
  const handleSelectOption = (optIdx: number) => {
    setSelectedAnswers(prev => ({
      ...prev,
      [currentItem.id]: optIdx
    }));
  };

  const handleWritingChange = (text: string) => {
    setWrittenAnswers(prev => ({
      ...prev,
      [currentItem.id]: text
    }));
  };

  const toggleRecording = () => {
    if (!recognition) {
      // Fallback if browser doesn't support Web Speech
      if (!isRecording) {
        setIsRecording(true);
        setSpokenTranscript('Simulando gravação de voz... (Microfone ativo). Pratique falando a frase-alvo em voz alta!');
        setTimeout(() => {
          setIsRecording(false);
          setSpokenCompleted(prev => ({ ...prev, [currentItem.id]: true }));
        }, 4000);
      } else {
        setIsRecording(false);
      }
      return;
    }

    if (isRecording) {
      recognition.stop();
      setIsRecording(false);
      setSpokenCompleted(prev => ({ ...prev, [currentItem.id]: true }));
    } else {
      setSpokenTranscript('');
      try {
        recognition.start();
        setIsRecording(true);
      } catch (err) {
        console.error('Speech recognition error:', err);
      }
    }
  };

  const handleNext = () => {
    if (currentIdx < totalQuestions - 1) {
      setCurrentIdx(prev => prev + 1);
    } else {
      setIsSubmitted(true);
    }
  };

  const handlePrev = () => {
    if (currentIdx > 0) {
      setCurrentIdx(prev => prev - 1);
    }
  };

  const handleResetTest = () => {
    setSelectedAnswers({});
    setWrittenAnswers({});
    setSpokenCompleted({});
    setCurrentIdx(0);
    setIsSubmitted(false);
    setShowTranscript(false);
    setShowSampleWriting(false);
  };

  // Calculate score for multiple-choice skills
  const calculateScore = () => {
    if (skill === 'listening' || skill === 'reading') {
      let correct = 0;
      questions.forEach(q => {
        if (selectedAnswers[q.id] === q.correctIndex) {
          correct += 1;
        }
      });
      return correct;
    }
    if (skill === 'speaking') {
      return Object.keys(spokenCompleted).length;
    }
    if (skill === 'writing') {
      let completedCount = 0;
      questions.forEach(q => {
        const text = writtenAnswers[q.id] || '';
        const words = text.trim().split(/\s+/).filter(Boolean).length;
        if (words >= (q.minWords || 15)) {
          completedCount += 1;
        }
      });
      return completedCount;
    }
    return 0;
  };

  const score = calculateScore();
  const scorePercent = Math.round((score / totalQuestions) * 100);

  // Word count for writing
  const currentWritingText = writtenAnswers[currentItem.id] || '';
  const currentWordCount = currentWritingText.trim().split(/\s+/).filter(Boolean).length;
  const targetMinWords = currentItem.minWords || 20;

  // Render Skill Icon
  const renderSkillIcon = () => {
    switch (skill) {
      case 'listening': return <Headphones className="w-4 h-4 text-blue-600" />;
      case 'reading': return <BookOpen className="w-4 h-4 text-emerald-600" />;
      case 'speaking': return <Mic className="w-4 h-4 text-amber-600" />;
      case 'writing': return <PenTool className="w-4 h-4 text-violet-600" />;
    }
  };

  return (
    <div className="space-y-6">
      {/* Top Navigation Bar */}
      <div className="bg-white border border-slate-200 rounded-3xl p-5 sm:p-6 shadow-xs flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center space-x-3">
          <button
            id="btn-back-to-level-select"
            onClick={onBackToLevelSelect}
            className="inline-flex items-center space-x-2 px-3.5 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs transition-colors border border-slate-200"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Mudar Nível</span>
          </button>

          <button
            id="btn-back-to-testes-hub"
            onClick={onBackToHub}
            className="text-xs font-semibold text-slate-500 hover:text-slate-800 transition-colors hidden sm:inline-block"
          >
            Voltar ao Hub
          </button>

          <div className="h-6 w-px bg-slate-200 hidden sm:block" />

          <div>
            <div className="flex items-center space-x-2">
              <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-blue-50 text-blue-700 border border-blue-200 inline-flex items-center space-x-1">
                {renderSkillIcon()}
                <span>{skillInfo.name}</span>
              </span>
              <span className="text-xs text-slate-400">•</span>
              <span className={`text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full border ${levelInfo?.colorBadge}`}>
                Nível {level} ({levelInfo?.name.split(' ')[0]})
              </span>
            </div>
            <h2 className="text-lg sm:text-xl font-black text-slate-900 tracking-tight mt-0.5">
              Treino de Habilidade: 15 Atividades Oficiais
            </h2>
          </div>
        </div>

        {/* Quick Level Selector dropdown/pills */}
        <div className="flex items-center space-x-1.5 bg-slate-100 p-1.5 rounded-2xl border border-slate-200">
          {(['A1', 'A2', 'B1', 'B2', 'C1'] as SkillLevel[]).map(lvl => (
            <button
              key={lvl}
              onClick={() => {
                onChangeLevel(lvl);
                setCurrentIdx(0);
                setIsSubmitted(false);
              }}
              className={`px-2.5 py-1 rounded-xl text-xs font-bold transition-all ${
                lvl === level 
                  ? 'bg-slate-900 text-white shadow-xs' 
                  : 'text-slate-600 hover:text-slate-900 hover:bg-white/60'
              }`}
            >
              {lvl}
            </button>
          ))}
        </div>
      </div>

      {/* ========================================================= */}
      {/* TEST SUBMITTED RESULT VIEW                                */}
      {/* ========================================================= */}
      {isSubmitted ? (
        <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-xs space-y-8">
          <div className="bg-gradient-to-br from-slate-900 via-blue-950 to-indigo-950 text-white rounded-3xl p-6 sm:p-8 space-y-6">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-white/10 pb-6">
              <div className="space-y-1">
                <span className="text-xs uppercase font-bold tracking-widest text-blue-400 flex items-center space-x-1.5">
                  <Award className="w-4 h-4" />
                  <span>Resultado da Habilidade • {skillInfo.name}</span>
                </span>
                <h2 className="text-2xl sm:text-3xl font-black text-white">
                  Teste de {skillInfo.namePt} Concluído!
                </h2>
                <p className="text-xs text-slate-300">
                  Nível testado: <strong>{level} ({levelInfo?.name})</strong> • Aluno: <strong>{user?.name || 'Aluno Insight'}</strong>
                </p>
              </div>

              <div className="text-center sm:text-right bg-white/10 backdrop-blur-xs px-6 py-4 rounded-2xl border border-white/20 shrink-0">
                <span className="text-xs uppercase font-bold text-blue-300 block">Pontuação</span>
                <span className="text-4xl font-black text-white font-mono tracking-tight">
                  {score} / {totalQuestions}
                </span>
                <span className="text-[11px] text-slate-300 block mt-0.5">
                  {scorePercent}% de aproveitamento
                </span>
              </div>
            </div>

            {/* Performance message */}
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 flex items-start space-x-3">
              <Sparkles className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
              <div>
                <h4 className="text-sm font-bold text-white">
                  {scorePercent >= 80 ? 'Excelente Desempenho!' : scorePercent >= 60 ? 'Bom Progresso!' : 'Continue Praticando!'}
                </h4>
                <p className="text-xs text-slate-300 mt-0.5">
                  {scorePercent >= 80 
                    ? `Você demonstrou forte domínio das 15 atividades de ${skillInfo.name} no nível ${level}. Recomendamos avançar para o próximo nível!`
                    : scorePercent >= 60 
                    ? `Você completou a maioria das tarefas com sucesso. Revise as correções abaixo para consolidar seu vocabulário e estruturas.`
                    : `Este nível apresentou alguns desafios. Pratique novamente as atividades e confira as explicações detalhadas para aperfeiçoar seu aprendizado.`}
                </p>
              </div>
            </div>

            {/* Action buttons */}
            <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
              <button
                onClick={handleResetTest}
                className="inline-flex items-center space-x-2 px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold border border-slate-700 transition-all"
              >
                <RotateCcw className="w-4 h-4" />
                <span>Refazer este Teste (15 Atividades)</span>
              </button>

              <div className="flex items-center space-x-2">
                <button
                  onClick={onBackToLevelSelect}
                  className="px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-semibold transition-all border border-white/20"
                >
                  Mudar de Nível
                </button>
                <button
                  onClick={onBackToHub}
                  className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold shadow-md transition-all"
                >
                  Voltar ao Menu de Testes
                </button>
              </div>
            </div>
          </div>

          {/* Detailed Question Review List */}
          <div className="space-y-4">
            <h3 className="text-base font-extrabold text-slate-900 flex items-center space-x-2">
              <span>Gabarito e Revisão Detalhada das 15 Questões</span>
            </h3>

            <div className="divide-y divide-slate-100 border border-slate-200 rounded-3xl overflow-hidden bg-slate-50/50">
              {questions.map((q, idx) => {
                const userSelected = selectedAnswers[q.id];
                const isCorrect = userSelected === q.correctIndex;

                return (
                  <div key={q.id} className="p-4 sm:p-5 bg-white space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <span className="w-6 h-6 rounded-full bg-slate-100 text-slate-700 text-xs font-mono font-bold flex items-center justify-center">
                          {idx + 1}
                        </span>
                        <span className="text-xs font-bold text-slate-900">{q.title}</span>
                      </div>
                      {(skill === 'listening' || skill === 'reading') && (
                        <span className={`inline-flex items-center space-x-1 text-[11px] font-bold px-2 py-0.5 rounded-full ${
                          isCorrect ? 'bg-emerald-50 text-emerald-700' : 'bg-rose-50 text-rose-700'
                        }`}>
                          {isCorrect ? <CheckCircle2 className="w-3.5 h-3.5" /> : <AlertCircle className="w-3.5 h-3.5" />}
                          <span>{isCorrect ? 'Acertou' : 'Errou'}</span>
                        </span>
                      )}
                    </div>

                    {q.question && (
                      <p className="text-xs text-slate-700 font-medium">{q.question}</p>
                    )}

                    {q.options && q.correctIndex !== undefined && (
                      <div className="text-xs space-y-1 pt-1">
                        <div className="text-emerald-700 font-semibold flex items-center space-x-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5" />
                          <span>Resposta correta: {q.options[q.correctIndex]}</span>
                        </div>
                        {userSelected !== undefined && userSelected !== q.correctIndex && (
                          <div className="text-rose-600 flex items-center space-x-1.5">
                            <AlertCircle className="w-3.5 h-3.5" />
                            <span>Sua resposta: {q.options[userSelected]}</span>
                          </div>
                        )}
                        {q.explanation && (
                          <p className="text-[11px] text-slate-500 bg-slate-50 p-2.5 rounded-xl border border-slate-100 mt-1">
                            💡 <strong>Explicação:</strong> {q.explanation}
                          </p>
                        )}
                      </div>
                    )}

                    {q.targetResponse && (
                      <div className="text-xs text-slate-600 bg-amber-50/70 p-3 rounded-xl border border-amber-200/60 space-y-1 mt-1">
                        <p className="font-semibold text-amber-900">Modelo Nativo Recomendado:</p>
                        <p className="italic font-serif text-slate-800">"{q.targetResponse}"</p>
                        {q.pronunciationNotes && (
                          <p className="text-[11px] text-amber-800 pt-1">🗣️ {q.pronunciationNotes}</p>
                        )}
                      </div>
                    )}

                    {q.sampleResponse && (
                      <div className="text-xs text-slate-600 bg-violet-50/70 p-3 rounded-xl border border-violet-200/60 space-y-1 mt-1">
                        <p className="font-semibold text-violet-900">Exemplo de Redação Modelo:</p>
                        <p className="italic font-serif text-slate-800">"{q.sampleResponse}"</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      ) : (
        /* ========================================================= */
        /* ACTIVE QUESTION WORKSPACE                                 */
        /* ========================================================= */
        <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-xs space-y-6">
          {/* Question Navigator: 15 Pills */}
          <div className="space-y-2 border-b border-slate-100 pb-4">
            <div className="flex flex-wrap items-center justify-between text-xs text-slate-500 gap-2">
              <span className="font-semibold text-slate-900">
                Atividade {currentIdx + 1} de {totalQuestions}: <strong className="text-blue-700">{currentItem.title}</strong>
              </span>
              <span className="font-mono text-slate-500">
                Progresso: {Math.round(((currentIdx + 1) / totalQuestions) * 100)}%
              </span>
            </div>

            {/* Quick 15 question pills */}
            <div className="flex flex-wrap gap-1.5 pt-1">
              {questions.map((q, idx) => {
                const isCurrent = idx === currentIdx;
                const hasAnswer = skill === 'writing' 
                  ? Boolean(writtenAnswers[q.id]?.trim())
                  : skill === 'speaking'
                  ? Boolean(spokenCompleted[q.id])
                  : selectedAnswers[q.id] !== undefined;

                return (
                  <button
                    key={q.id}
                    id={`pill-q-${q.id}`}
                    onClick={() => setCurrentIdx(idx)}
                    className={`w-7 h-7 sm:w-8 sm:h-8 rounded-xl font-mono text-xs font-bold transition-all flex items-center justify-center ${
                      isCurrent 
                        ? 'bg-blue-600 text-white shadow-sm ring-2 ring-blue-300' 
                        : hasAnswer
                        ? 'bg-emerald-100 text-emerald-800 border border-emerald-300'
                        : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                    }`}
                  >
                    {idx + 1}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Instructions Box */}
          <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 flex items-start space-x-2.5">
            <HelpCircle className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
            <div className="text-xs text-slate-700 leading-relaxed">
              <strong className="text-slate-900">Instrução:</strong> {currentItem.instruction}
            </div>
          </div>

          {/* ========================================================= */}
          {/* SKILL-SPECIFIC INTERFACE: LISTENING                       */}
          {/* ========================================================= */}
          {skill === 'listening' && currentItem.audioScript && (
            <div className="space-y-4">
              {/* Native Audio Player Control */}
              <div className="p-4 sm:p-5 rounded-3xl bg-blue-50/80 border border-blue-200 space-y-3">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div className="flex items-center space-x-2">
                    <span className="w-8 h-8 rounded-xl bg-blue-600 text-white flex items-center justify-center shadow-xs">
                      <Volume2 className="w-4 h-4" />
                    </span>
                    <div>
                      <h4 className="text-xs font-bold text-blue-950">Áudio Nativo Gravado</h4>
                      <p className="text-[11px] text-blue-700">Ouça com atenção quantas vezes desejar</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-2">
                    {/* Speed button */}
                    <button
                      onClick={() => setAudioSpeed(prev => prev === 1.0 ? 0.8 : 1.0)}
                      className="px-2.5 py-1.5 rounded-xl bg-white border border-blue-200 text-blue-800 text-[11px] font-bold hover:bg-blue-100 transition-colors"
                    >
                      Velocidade: {audioSpeed}x
                    </button>

                    {/* Play Audio Button */}
                    <button
                      id="btn-play-listening-audio"
                      onClick={() => speakText(currentItem.audioScript!)}
                      className="inline-flex items-center space-x-2 px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold shadow-sm transition-all"
                    >
                      <Play className="w-3.5 h-3.5 fill-current" />
                      <span>Reproduzir Áudio</span>
                    </button>
                  </div>
                </div>

                {/* Transcript Toggle */}
                <div className="pt-2 border-t border-blue-100 flex items-center justify-between">
                  <button
                    onClick={() => setShowTranscript(prev => !prev)}
                    className="inline-flex items-center space-x-1.5 text-xs font-semibold text-blue-800 hover:text-blue-900"
                  >
                    {showTranscript ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
                    <span>{showTranscript ? 'Ocultar Transcrição' : 'Ver Transcrição Escrita (Dica)'}</span>
                  </button>
                  <span className="text-[10px] text-blue-500 font-mono">EN-US Natural Accent</span>
                </div>

                {showTranscript && (
                  <div className="p-3.5 rounded-2xl bg-white border border-blue-200 text-xs text-slate-800 font-serif leading-relaxed italic animate-fadeIn">
                    "{currentItem.audioScript}"
                  </div>
                )}
              </div>

              {/* Question & Options */}
              {currentItem.question && currentItem.options && (
                <div className="space-y-3 pt-2">
                  <h3 className="text-base sm:text-lg font-bold text-slate-900">
                    {currentItem.question}
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {currentItem.options.map((opt, idx) => {
                      const isSelected = selectedAnswers[currentItem.id] === idx;
                      return (
                        <button
                          key={idx}
                          id={`opt-list-${idx}`}
                          onClick={() => handleSelectOption(idx)}
                          className={`p-4 rounded-2xl border text-left text-xs sm:text-sm font-medium transition-all flex items-start justify-between space-x-2 ${
                            isSelected
                              ? 'bg-blue-600 text-white border-blue-600 shadow-sm'
                              : 'bg-white hover:bg-slate-50 text-slate-800 border-slate-200'
                          }`}
                        >
                          <span>{opt}</span>
                          <div className={`w-4 h-4 rounded-full border flex items-center justify-center shrink-0 mt-0.5 ${
                            isSelected ? 'border-white bg-white/20' : 'border-slate-300'
                          }`}>
                            {isSelected && <div className="w-2 h-2 rounded-full bg-white" />}
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* ========================================================= */}
          {/* SKILL-SPECIFIC INTERFACE: READING                         */}
          {/* ========================================================= */}
          {skill === 'reading' && (
            <div className="space-y-4">
              {/* Reading Passage Card */}
              {currentItem.passageText && (
                <div className="p-5 sm:p-6 rounded-3xl bg-slate-50 border border-slate-200 space-y-3">
                  {currentItem.passageTitle && (
                    <div className="border-b border-slate-200 pb-2">
                      <span className="text-[10px] uppercase font-bold tracking-wider text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200">
                        Texto de Leitura Autêntico
                      </span>
                      <h4 className="text-sm sm:text-base font-extrabold text-slate-900 mt-1">
                        {currentItem.passageTitle}
                      </h4>
                    </div>
                  )}

                  <div className="text-xs sm:text-sm text-slate-800 leading-relaxed font-serif whitespace-pre-line space-y-2">
                    {currentItem.passageText}
                  </div>
                </div>
              )}

              {/* Question & Options */}
              {currentItem.question && currentItem.options && (
                <div className="space-y-3 pt-2">
                  <h3 className="text-base sm:text-lg font-bold text-slate-900">
                    {currentItem.question}
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {currentItem.options.map((opt, idx) => {
                      const isSelected = selectedAnswers[currentItem.id] === idx;
                      return (
                        <button
                          key={idx}
                          id={`opt-read-${idx}`}
                          onClick={() => handleSelectOption(idx)}
                          className={`p-4 rounded-2xl border text-left text-xs sm:text-sm font-medium transition-all flex items-start justify-between space-x-2 ${
                            isSelected
                              ? 'bg-emerald-600 text-white border-emerald-600 shadow-sm'
                              : 'bg-white hover:bg-slate-50 text-slate-800 border-slate-200'
                          }`}
                        >
                          <span>{opt}</span>
                          <div className={`w-4 h-4 rounded-full border flex items-center justify-center shrink-0 mt-0.5 ${
                            isSelected ? 'border-white bg-white/20' : 'border-slate-300'
                          }`}>
                            {isSelected && <div className="w-2 h-2 rounded-full bg-white" />}
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* ========================================================= */}
          {/* SKILL-SPECIFIC INTERFACE: SPEAKING                        */}
          {/* ========================================================= */}
          {skill === 'speaking' && (
            <div className="space-y-5">
              {/* Context and Examiner Prompt */}
              <div className="p-5 rounded-3xl bg-amber-50/80 border border-amber-200 space-y-3">
                <div className="flex items-center space-x-2">
                  <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-amber-100 text-amber-900 border border-amber-300">
                    Cenário Prático de Comunicação
                  </span>
                </div>

                <p className="text-xs text-slate-700 leading-relaxed font-medium">
                  {currentItem.speakingContext}
                </p>

                {currentItem.promptToRespond && (
                  <div className="p-4 rounded-2xl bg-white border border-amber-200 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-bold text-amber-900 flex items-center space-x-1.5">
                        <MessageSquare className="w-3.5 h-3.5" />
                        <span>O que o examinador/interlocutor diz:</span>
                      </span>
                      <button
                        onClick={() => speakText(currentItem.promptToRespond!)}
                        className="inline-flex items-center space-x-1 text-[11px] font-bold text-amber-800 hover:text-amber-950"
                      >
                        <Volume2 className="w-3.5 h-3.5" />
                        <span>Ouvir Pergunta</span>
                      </button>
                    </div>
                    <p className="text-sm font-serif italic text-slate-900 font-semibold">
                      "{currentItem.promptToRespond}"
                    </p>
                  </div>
                )}
              </div>

              {/* Voice Practice & Recording Section */}
              <div className="p-5 rounded-3xl bg-slate-900 text-white space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div>
                    <h4 className="text-sm font-bold text-white flex items-center space-x-2">
                      <Mic className="w-4 h-4 text-amber-400" />
                      <span>Grave ou Treine sua Resposta Oral</span>
                    </h4>
                    <p className="text-xs text-slate-300">
                      Fale em voz alta com clareza. Use o botão abaixo para gravar sua voz e testar sua fala.
                    </p>
                  </div>

                  <button
                    id="btn-toggle-recording"
                    onClick={toggleRecording}
                    className={`px-5 py-2.5 rounded-xl text-xs font-bold flex items-center space-x-2 transition-all shrink-0 ${
                      isRecording 
                        ? 'bg-rose-600 text-white animate-pulse shadow-lg shadow-rose-600/40' 
                        : 'bg-amber-500 hover:bg-amber-400 text-slate-950 shadow-md'
                    }`}
                  >
                    {isRecording ? <MicOff className="w-4 h-4" /> : <Mic className="w-4 h-4" />}
                    <span>{isRecording ? 'Parar Gravação' : 'Gravar Minha Voz'}</span>
                  </button>
                </div>

                {/* Spoken transcription feedback box */}
                {spokenTranscript && (
                  <div className="p-3.5 rounded-2xl bg-slate-800 border border-slate-700 text-xs text-slate-200">
                    <span className="text-[10px] uppercase font-bold text-amber-400 block mb-1">
                      Transcrição Detectada da sua Fala:
                    </span>
                    <p className="font-serif italic text-sm">"{spokenTranscript}"</p>
                  </div>
                )}
              </div>

              {/* Native Model Target Response & Pronunciation Notes */}
              {currentItem.targetResponse && (
                <div className="p-5 rounded-3xl bg-slate-50 border border-slate-200 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-extrabold text-slate-900 flex items-center space-x-1.5">
                      <Sparkles className="w-4 h-4 text-blue-600" />
                      <span>Resposta Modelo Nativa (Target Response)</span>
                    </span>
                    <button
                      id="btn-speak-target-response"
                      onClick={() => speakText(currentItem.targetResponse!)}
                      className="inline-flex items-center space-x-1.5 text-xs font-bold text-blue-700 hover:text-blue-900"
                    >
                      <Volume2 className="w-4 h-4" />
                      <span>Ouvir Modelo Nativo</span>
                    </button>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-white border border-slate-200 text-xs sm:text-sm font-serif italic text-slate-900">
                    "{currentItem.targetResponse}"
                  </div>

                  {currentItem.pronunciationNotes && (
                    <div className="text-xs text-slate-600 bg-amber-50/60 p-3 rounded-2xl border border-amber-200/60">
                      <strong>Dica Fonética & Entonação:</strong> {currentItem.pronunciationNotes}
                    </div>
                  )}

                  {currentItem.keyPhrases && currentItem.keyPhrases.length > 0 && (
                    <div className="pt-2">
                      <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block mb-1.5">
                        Expressões-chave recomendadas nesta atividade:
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {currentItem.keyPhrases.map((phrase, idx) => (
                          <span key={idx} className="px-2.5 py-1 rounded-lg bg-white border border-slate-200 text-[11px] font-semibold text-slate-700">
                            ✓ {phrase}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          )}

          {/* ========================================================= */}
          {/* SKILL-SPECIFIC INTERFACE: WRITING                         */}
          {/* ========================================================= */}
          {skill === 'writing' && (
            <div className="space-y-5">
              {/* Context & Task */}
              <div className="p-5 rounded-3xl bg-violet-50/80 border border-violet-200 space-y-3">
                <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-violet-100 text-violet-900 border border-violet-300">
                  Cenário de Escrita
                </span>
                <p className="text-xs text-slate-700 leading-relaxed font-medium">
                  {currentItem.writingContext}
                </p>

                {currentItem.writingTask && (
                  <div className="p-3.5 rounded-2xl bg-white border border-violet-200">
                    <strong className="text-xs font-bold text-violet-950 block mb-1">Sua Tarefa de Redação:</strong>
                    <p className="text-xs sm:text-sm text-slate-900 font-semibold">{currentItem.writingTask}</p>
                  </div>
                )}

                {/* Guidelines */}
                {currentItem.writingGuidelines && currentItem.writingGuidelines.length > 0 && (
                  <div className="space-y-1.5 pt-1">
                    <span className="text-[11px] font-bold text-violet-900 uppercase tracking-wider block">
                      Diretrizes Obrigatórias:
                    </span>
                    <ul className="space-y-1 text-xs text-slate-700">
                      {currentItem.writingGuidelines.map((g, idx) => (
                        <li key={idx} className="flex items-start space-x-1.5">
                          <span className="text-violet-600 font-bold">•</span>
                          <span>{g}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {/* Reactive Textarea with Live Word Count */}
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <label htmlFor="writing-input" className="font-bold text-slate-800">
                    Escreva sua resposta abaixo em inglês:
                  </label>
                  <div className="flex items-center space-x-2">
                    <span className={`font-mono text-xs font-bold px-2 py-0.5 rounded-md ${
                      currentWordCount >= targetMinWords
                        ? 'bg-emerald-100 text-emerald-800'
                        : 'bg-amber-100 text-amber-800'
                    }`}>
                      {currentWordCount} / mín. {targetMinWords} palavras
                    </span>
                  </div>
                </div>

                <textarea
                  id="writing-input"
                  rows={6}
                  value={currentWritingText}
                  onChange={(e) => handleWritingChange(e.target.value)}
                  placeholder="Type your English response here..."
                  className="w-full p-4 rounded-2xl border border-slate-300 focus:border-violet-600 focus:ring-4 focus:ring-violet-100 text-sm font-serif leading-relaxed text-slate-900 placeholder:text-slate-400 resize-y"
                />
              </div>

              {/* Key phrases detection & Sample Response Toggle */}
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
                {currentItem.keyPhrases && currentItem.keyPhrases.length > 0 && (
                  <div>
                    <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block mb-1.5">
                      Palavras & Estruturas Recomendadas:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {currentItem.keyPhrases.map((phrase, idx) => {
                        const isIncluded = currentWritingText.toLowerCase().includes(phrase.toLowerCase());
                        return (
                          <span 
                            key={idx} 
                            className={`px-2.5 py-1 rounded-lg text-[11px] font-semibold transition-colors border ${
                              isIncluded 
                                ? 'bg-emerald-100 text-emerald-800 border-emerald-300' 
                                : 'bg-white text-slate-600 border-slate-200'
                            }`}
                          >
                            {isIncluded ? '✓' : '+'} {phrase}
                          </span>
                        );
                      })}
                    </div>
                  </div>
                )}

                <div className="pt-2 border-t border-slate-200 flex items-center justify-between">
                  <button
                    onClick={() => setShowSampleWriting(prev => !prev)}
                    className="inline-flex items-center space-x-1.5 text-xs font-semibold text-violet-700 hover:text-violet-900"
                  >
                    {showSampleWriting ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
                    <span>{showSampleWriting ? 'Ocultar Modelo Nativo' : 'Ver Exemplo de Redação Modelo'}</span>
                  </button>
                </div>

                {showSampleWriting && currentItem.sampleResponse && (
                  <div className="p-3.5 rounded-2xl bg-white border border-violet-200 text-xs sm:text-sm font-serif italic text-slate-900 leading-relaxed animate-fadeIn">
                    "{currentItem.sampleResponse}"
                  </div>
                )}
              </div>
            </div>
          )}

          {/* ========================================================= */}
          {/* BOTTOM CONTROLS: PREV / NEXT / FINISH                     */}
          {/* ========================================================= */}
          <div className="flex items-center justify-between pt-6 border-t border-slate-100">
            <button
              onClick={handlePrev}
              disabled={currentIdx === 0}
              className="flex items-center space-x-2 px-4 py-2.5 rounded-xl border border-slate-200 text-xs font-semibold text-slate-700 hover:bg-slate-50 disabled:opacity-30 disabled:pointer-events-none"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Anterior</span>
            </button>

            <span className="text-xs text-slate-400 font-mono">
              Atividade {currentIdx + 1} / {totalQuestions}
            </span>

            {currentIdx === totalQuestions - 1 ? (
              <button
                id="btn-finish-skill-test"
                onClick={handleNext}
                className="flex items-center space-x-2 px-6 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold shadow-md shadow-emerald-600/20"
              >
                <span>Finalizar e Ver Resultado</span>
                <CheckCircle2 className="w-4 h-4" />
              </button>
            ) : (
              <button
                onClick={handleNext}
                className="flex items-center space-x-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold shadow-md shadow-blue-600/20"
              >
                <span>Próxima Atividade</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
