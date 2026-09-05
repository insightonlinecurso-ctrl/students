import React, { useState } from 'react';
import { 
  ArrowLeft, 
  ArrowRight, 
  CheckCircle2, 
  AlertCircle, 
  Volume2, 
  Printer, 
  RotateCcw, 
  Download,
  GraduationCap
} from 'lucide-react';
import { PLACEMENT_QUESTIONS, calculateCefrFromScore } from '../data/placementQuestions';
import { useAuth } from '../context/AuthContext';
import { useProgress } from '../context/ProgressContext';
import { CEFRLevel } from '../types';
import { INSIGHT_LOGO_ICON } from '../assets/brand';

interface PlacementTestRunnerProps {
  onBackToHub: () => void;
}

export const PlacementTestRunner: React.FC<PlacementTestRunnerProps> = ({ onBackToHub }) => {
  const { user, setStudentCefrLevel } = useAuth();
  const { speakText } = useProgress();

  const [currentQuestionIdx, setCurrentQuestionIdx] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [isTestSubmitted, setIsTestSubmitted] = useState(false);
  const [testResult, setTestResult] = useState<{
    score: number;
    level: CEFRLevel;
    description: string;
    strengths: string[];
    weaknesses: string[];
    levelBreakdown: Record<string, { correct: number; total: number }>;
  } | null>(null);

  const totalQuestions = PLACEMENT_QUESTIONS.length;
  const currentQuestion = PLACEMENT_QUESTIONS[currentQuestionIdx];
  const selectedAnswer = answers[currentQuestion.id];

  const handleSelectOption = (optionIndex: number) => {
    setAnswers((prev) => ({
      ...prev,
      [currentQuestion.id]: optionIndex
    }));
  };

  const handleNext = () => {
    if (currentQuestionIdx < totalQuestions - 1) {
      setCurrentQuestionIdx((prev) => prev + 1);
    } else {
      finishTest();
    }
  };

  const handlePrev = () => {
    if (currentQuestionIdx > 0) {
      setCurrentQuestionIdx((prev) => prev - 1);
    }
  };

  const finishTest = () => {
    let score = 0;
    const breakdown: Record<string, { correct: number; total: number }> = {
      A1: { correct: 0, total: 0 },
      A2: { correct: 0, total: 0 },
      B1: { correct: 0, total: 0 },
      B2: { correct: 0, total: 0 },
      'C1/C2': { correct: 0, total: 0 }
    };

    PLACEMENT_QUESTIONS.forEach((q) => {
      const levelKey = q.level === 'C1' || q.level === 'C2' ? 'C1/C2' : q.level;
      if (breakdown[levelKey]) {
        breakdown[levelKey].total += 1;
      }
      if (answers[q.id] === q.correctIndex) {
        score += 1;
        if (breakdown[levelKey]) {
          breakdown[levelKey].correct += 1;
        }
      }
    });

    const evaluated = calculateCefrFromScore(score);
    const result = {
      score,
      level: evaluated.level,
      description: evaluated.description,
      strengths: evaluated.strengths,
      weaknesses: evaluated.weaknesses,
      levelBreakdown: breakdown
    };

    setTestResult(result);
    setIsTestSubmitted(true);
    setStudentCefrLevel(evaluated.level);
  };

  const handleResetTest = () => {
    setAnswers({});
    setCurrentQuestionIdx(0);
    setIsTestSubmitted(false);
    setTestResult(null);
  };

  const handlePrintPDF = () => {
    window.print();
  };

  const answeredCount = Object.keys(answers).length;
  const progressPercent = Math.round((answeredCount / totalQuestions) * 100);

  return (
    <div className="space-y-6">
      {/* Printable Report Only Header */}
      <div className="hidden print:block text-center border-b-2 border-slate-900 pb-6 mb-6">
        <h1 className="text-2xl font-black uppercase tracking-wider text-slate-900">
          Insight English • Relatório Oficial de Teste de Nivelamento CEFR
        </h1>
        <div className="flex justify-between text-xs text-slate-600 mt-3">
          <span>Aluno: <strong>{user?.name || 'Aluno Insight'}</strong></span>
          <span>Data de Emissão: <strong>{new Date().toLocaleDateString('pt-BR')}</strong></span>
          <span>Nível Atingido: <strong>{testResult?.level || user?.cefrLevel || 'B1'}</strong></span>
        </div>
      </div>

      {/* Screen Top Bar */}
      <div className="print:hidden bg-white border border-slate-200 rounded-3xl p-5 sm:p-6 shadow-xs flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center space-x-3">
          <button
            id="btn-back-to-testes-hub"
            onClick={onBackToHub}
            className="inline-flex items-center space-x-2 px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs transition-colors border border-slate-200"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Voltar aos Testes</span>
          </button>

          <div className="h-6 w-px bg-slate-200 hidden sm:block" />

          <div className="flex items-center space-x-3">
            <div className="w-9 h-9 rounded-xl overflow-hidden bg-[#8897a2] border border-slate-200 shadow-xs hidden sm:block shrink-0">
              <img 
                src={INSIGHT_LOGO_ICON} 
                alt="Insight Logo" 
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover" 
              />
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-blue-50 text-blue-700 border border-blue-200">
                  Nivelamento Geral
                </span>
                <span className="text-xs text-slate-400">•</span>
                <span className="text-xs font-semibold text-slate-500">
                  45 Questões Abrangentes
                </span>
              </div>
              <h2 className="text-lg sm:text-xl font-black text-slate-900 tracking-tight">
                Teste de Nivelamento Oficial CEFR
              </h2>
            </div>
          </div>
        </div>

        {isTestSubmitted && testResult && (
          <button
            onClick={handlePrintPDF}
            className="flex items-center space-x-2 px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold shadow-md transition-all shrink-0"
          >
            <Printer className="w-4 h-4" />
            <span>Gerar PDF do Resultado</span>
          </button>
        )}
      </div>

      {/* Test Result View */}
      {isTestSubmitted && testResult ? (
        <div className="space-y-6">
          <div className="bg-gradient-to-br from-blue-900 via-slate-900 to-indigo-950 text-white rounded-3xl p-8 shadow-lg border border-slate-800 space-y-6">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-800 pb-6">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 rounded-2xl overflow-hidden bg-[#8897a2] border border-slate-700 shadow-md shrink-0">
                  <img 
                    src={INSIGHT_LOGO_ICON} 
                    alt="Insight Logo" 
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover" 
                  />
                </div>
                <div className="space-y-1">
                  <span className="text-xs uppercase font-bold tracking-widest text-blue-400">
                    Diagnóstico Concluído • Insight English
                  </span>
                  <h2 className="text-2xl font-black text-white">
                    Parabéns, {user?.name ? user.name.split(' ')[0] : 'Aluno'}!
                  </h2>
                  <p className="text-xs text-slate-300">
                    Seu nível de inglês segundo o Quadro Comum Europeu de Referência (CEFR):
                  </p>
                </div>
              </div>

              <div className="text-center sm:text-right bg-white/10 backdrop-blur-xs px-6 py-4 rounded-2xl border border-white/20 shrink-0">
                <span className="text-xs uppercase font-bold text-blue-300 block">Nível CEFR</span>
                <span className="text-5xl font-black text-white font-mono tracking-tight">
                  {testResult.level}
                </span>
                <span className="text-[11px] text-slate-300 block mt-0.5">
                  {testResult.score} de 45 acertos ({Math.round((testResult.score / 45) * 100)}%)
                </span>
              </div>
            </div>

            <p className="text-sm text-slate-200 leading-relaxed font-medium">
              {testResult.description}
            </p>

            {/* Level breakdown */}
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 pt-2">
              {(Object.entries(testResult.levelBreakdown) as [string, { correct: number; total: number }][]).map(([lvl, data]) => {
                const pct = data.total > 0 ? Math.round((data.correct / data.total) * 100) : 0;
                return (
                  <div key={lvl} className="p-3 rounded-xl bg-slate-800/80 border border-slate-700 text-center">
                    <span className="text-xs font-bold text-slate-400 block font-mono">Nível {lvl}</span>
                    <span className="text-base font-black text-white font-mono mt-0.5 block">
                      {data.correct}/{data.total}
                    </span>
                    <div className="w-full bg-slate-700 h-1.5 rounded-full mt-2 overflow-hidden">
                      <div className="bg-blue-500 h-full rounded-full" style={{ width: `${pct}%` }} />
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Strengths & Weaknesses */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-2">
                <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider flex items-center space-x-1.5">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Pontos Fortes Identificados</span>
                </span>
                <ul className="space-y-1 text-xs text-slate-300">
                  {testResult.strengths.map((s, idx) => (
                    <li key={idx}>• {s}</li>
                  ))}
                </ul>
              </div>

              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-2">
                <span className="text-xs font-bold text-amber-400 uppercase tracking-wider flex items-center space-x-1.5">
                  <AlertCircle className="w-4 h-4" />
                  <span>Áreas Recomendadas para Reforço</span>
                </span>
                <ul className="space-y-1 text-xs text-slate-300">
                  {testResult.weaknesses.map((w, idx) => (
                    <li key={idx}>• {w}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-slate-800">
              <button
                onClick={handleResetTest}
                className="flex items-center space-x-2 text-xs font-semibold text-slate-400 hover:text-white"
              >
                <RotateCcw className="w-4 h-4" />
                <span>Refazer Teste de Nivelamento</span>
              </button>

              <button
                onClick={handlePrintPDF}
                className="flex items-center space-x-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold shadow-md transition-all"
              >
                <Download className="w-4 h-4" />
                <span>Salvar Relatório em PDF</span>
              </button>
            </div>
          </div>
        </div>
      ) : (
        /* Active Question View */
        <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-xs space-y-6">
          <div className="space-y-2 border-b border-slate-100 pb-4">
            <div className="flex items-center justify-between text-xs text-slate-500">
              <span className="font-semibold text-slate-900">
                Questão {currentQuestionIdx + 1} de {totalQuestions}
              </span>
              <span className="font-mono font-bold text-blue-600">
                {progressPercent}% respondido ({answeredCount}/{totalQuestions})
              </span>
            </div>
            <div className="w-full bg-slate-100 h-2.5 rounded-full overflow-hidden">
              <div 
                className="bg-blue-600 h-full rounded-full transition-all duration-300"
                style={{ width: `${((currentQuestionIdx + 1) / totalQuestions) * 100}%` }}
              />
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <span className="text-[11px] font-mono font-bold px-2.5 py-0.5 rounded-md bg-blue-100 text-blue-800">
              Nível {currentQuestion.level}
            </span>
            <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-500 bg-slate-100 px-2.5 py-0.5 rounded-md">
              Seção: {currentQuestion.section}
            </span>
          </div>

          {currentQuestion.audioText && (
            <div className="p-4 rounded-2xl bg-blue-50 border border-blue-200 flex items-center justify-between gap-4">
              <span className="text-xs text-blue-900 font-medium">
                Esta questão possui áudio. Clique para ouvir:
              </span>
              <button
                onClick={() => speakText(currentQuestion.audioText!)}
                className="flex items-center space-x-2 px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold shadow-xs transition-all shrink-0"
              >
                <Volume2 className="w-4 h-4" />
                <span>Ouvir Áudio</span>
              </button>
            </div>
          )}

          <div className="space-y-2">
            <h3 className="text-lg sm:text-xl font-bold text-slate-900 leading-snug">
              {currentQuestion.prompt}
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
            {currentQuestion.options.map((option, idx) => {
              const isSelected = selectedAnswer === idx;
              return (
                <button
                  key={idx}
                  id={`opt-placement-${idx}`}
                  onClick={() => handleSelectOption(idx)}
                  className={`p-4 rounded-2xl border text-left text-xs sm:text-sm font-medium transition-all flex items-start justify-between space-x-2 ${
                    isSelected
                      ? 'bg-blue-600 text-white border-blue-600 shadow-sm'
                      : 'bg-white hover:bg-slate-50 text-slate-800 border-slate-200'
                  }`}
                >
                  <span>{option}</span>
                  <div className={`w-4 h-4 rounded-full border flex items-center justify-center shrink-0 mt-0.5 ${
                    isSelected ? 'border-white bg-white/20' : 'border-slate-300'
                  }`}>
                    {isSelected && <div className="w-2 h-2 rounded-full bg-white" />}
                  </div>
                </button>
              );
            })}
          </div>

          <div className="flex items-center justify-between pt-6 border-t border-slate-100">
            <button
              onClick={handlePrev}
              disabled={currentQuestionIdx === 0}
              className="flex items-center space-x-2 px-4 py-2.5 rounded-xl border border-slate-200 text-xs font-semibold text-slate-700 hover:bg-slate-50 disabled:opacity-30 disabled:pointer-events-none"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Anterior</span>
            </button>

            <span className="text-xs text-slate-400 font-mono">
              {currentQuestionIdx + 1} / {totalQuestions}
            </span>

            {currentQuestionIdx === totalQuestions - 1 ? (
              <button
                id="btn-finish-placement-test"
                onClick={finishTest}
                className="flex items-center space-x-2 px-6 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold shadow-md shadow-emerald-600/20"
              >
                <span>Finalizar e Ver Nível CEFR</span>
                <CheckCircle2 className="w-4 h-4" />
              </button>
            ) : (
              <button
                onClick={handleNext}
                className="flex items-center space-x-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold shadow-md shadow-blue-600/20"
              >
                <span>Próxima Questão</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
