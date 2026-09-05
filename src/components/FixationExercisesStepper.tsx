import React, { useState } from 'react';
import { 
  CheckCircle2, 
  Check, 
  X, 
  ChevronLeft, 
  ChevronRight, 
  RefreshCw, 
  HelpCircle, 
  Award, 
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { FixationExercise } from '../types';
import { isExerciseAnswerCorrect } from '../utils/exerciseValidator';

interface FixationExercisesStepperProps {
  exercises: FixationExercise[];
  unitId: number;
  onSaveScore: (score: number) => void;
  initialScore?: number;
}

export const FixationExercisesStepper: React.FC<FixationExercisesStepperProps> = ({
  exercises,
  unitId,
  onSaveScore,
  initialScore
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<Record<number, string>>({});
  const [answeredIds, setAnsweredIds] = useState<number[]>([]);
  const [isFinished, setIsFinished] = useState(false);
  const [score, setScore] = useState<number | null>(initialScore ?? null);

  const currentExercise = exercises[currentIndex];
  const currentAnswer = userAnswers[currentExercise.id] || '';
  const isCurrentAnswered = answeredIds.includes(currentExercise.id);
  const isCurrentCorrect = isCurrentAnswered && 
    isExerciseAnswerCorrect(currentAnswer, currentExercise);

  const handleSelectOption = (option: string) => {
    if (isCurrentAnswered) return;
    setUserAnswers((prev) => ({ ...prev, [currentExercise.id]: option }));
    setAnsweredIds((prev) => [...prev, currentExercise.id]);
  };

  const handleFillSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!currentAnswer.trim() || isCurrentAnswered) return;
    setAnsweredIds((prev) => [...prev, currentExercise.id]);
  };

  const handleNext = () => {
    if (currentIndex < exercises.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      // Finish and compute final score
      calculateAndFinish();
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  const calculateAndFinish = () => {
    let totalCorrect = 0;
    exercises.forEach((ex) => {
      const ans = userAnswers[ex.id] || '';
      if (isExerciseAnswerCorrect(ans, ex)) {
        totalCorrect += 1;
      }
    });

    const finalPct = Math.round((totalCorrect / exercises.length) * 100);
    setScore(finalPct);
    setIsFinished(true);
    onSaveScore(finalPct);
  };

  const handleReset = () => {
    setUserAnswers({});
    setAnsweredIds([]);
    setCurrentIndex(0);
    setIsFinished(false);
    setScore(null);
  };

  // If student has finished and is viewing results summary
  if (isFinished && score !== null) {
    return (
      <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 space-y-6 shadow-sm animate-fadeIn">
        <div className="text-center space-y-3 max-w-lg mx-auto">
          <div className={`w-16 h-16 rounded-2xl mx-auto flex items-center justify-center text-white text-2xl shadow-sm ${
            score >= 70 ? 'bg-emerald-600' : 'bg-amber-500'
          }`}>
            {score >= 70 ? <Award className="w-8 h-8" /> : <HelpCircle className="w-8 h-8" />}
          </div>

          <h3 className="text-2xl font-bold text-slate-900">
            {score >= 70 ? 'Parabéns! Exercícios Concluídos' : 'Bom esforço! Que tal revisar?'}
          </h3>

          <p className="text-sm text-slate-600">
            Você acertou <strong>{Math.round((score / 100) * exercises.length)} de {exercises.length}</strong> questões nesta rodada de fixação.
          </p>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 inline-block">
            <span className="text-xs text-slate-500 block">Pontuação Oficial Registrada</span>
            <span className={`text-3xl font-bold ${score >= 70 ? 'text-emerald-600' : 'text-amber-600'}`}>
              {score}%
            </span>
          </div>
        </div>

        {/* Quick Review List */}
        <div className="space-y-3 pt-4 border-t border-slate-100">
          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">Resumo dos 10 Exercícios:</h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {exercises.map((ex, idx) => {
              const ans = userAnswers[ex.id] || '';
              const isCorrect = isExerciseAnswerCorrect(ans, ex);

              return (
                <div
                  key={ex.id}
                  onClick={() => {
                    setIsFinished(false);
                    setCurrentIndex(idx);
                  }}
                  className={`p-3 rounded-xl border flex items-center justify-between text-xs cursor-pointer transition-colors ${
                    isCorrect ? 'bg-emerald-50/60 border-emerald-200 hover:bg-emerald-100/50' : 'bg-rose-50/60 border-rose-200 hover:bg-rose-100/50'
                  }`}
                >
                  <div className="flex items-center space-x-2 truncate max-w-[240px]">
                    <span className="font-mono font-bold text-slate-700">#{idx + 1}</span>
                    <span className="truncate text-slate-800">{ex.prompt}</span>
                  </div>
                  {isCorrect ? (
                    <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                  ) : (
                    <X className="w-4 h-4 text-rose-600 shrink-0" />
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4 border-t border-slate-100">
          <button
            onClick={handleReset}
            className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold transition-colors flex items-center justify-center space-x-2"
          >
            <RefreshCw className="w-4 h-4" />
            <span>Refazer os 10 Exercícios</span>
          </button>

          <button
            onClick={() => setIsFinished(false)}
            className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold shadow-sm transition-all flex items-center justify-center space-x-2"
          >
            <span>Revisar Questão por Questão</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 space-y-6 shadow-sm">
      
      {/* Header & Step Indicator */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-100">
        <div>
          <div className="flex items-center space-x-2 text-blue-600">
            <CheckCircle2 className="w-5 h-5" />
            <h2 className="font-bold text-lg sm:text-xl text-slate-900">
              Exercícios de Fixação ({currentIndex + 1} de {exercises.length})
            </h2>
          </div>
          <p className="text-xs text-slate-500 mt-0.5">
            Responda um exercício por vez para fixar a regra gramatical antes de avançar
          </p>
        </div>

        {/* Question Step Pills */}
        <div className="flex items-center space-x-1.5 overflow-x-auto pb-1 sm:pb-0">
          {exercises.map((ex, idx) => {
            const isAnswered = answeredIds.includes(ex.id);
            const ans = (userAnswers[ex.id] || '').trim().toLowerCase();
            const isCorrect = isAnswered && ans === ex.correctAnswer.trim().toLowerCase();
            const isCurrent = currentIndex === idx;

            return (
              <button
                key={ex.id}
                onClick={() => setCurrentIndex(idx)}
                title={`Ir para o exercício ${idx + 1}`}
                className={`w-7 h-7 rounded-lg text-xs font-mono font-bold transition-all flex items-center justify-center ${
                  isCurrent
                    ? 'ring-2 ring-blue-600 bg-blue-600 text-white shadow-sm'
                    : isAnswered
                    ? isCorrect
                      ? 'bg-emerald-100 text-emerald-800 border border-emerald-300'
                      : 'bg-rose-100 text-rose-800 border border-rose-300'
                    : 'bg-slate-100 text-slate-600 border border-slate-200 hover:bg-slate-200'
                }`}
              >
                {idx + 1}
              </button>
            );
          })}
        </div>
      </div>

      {/* Active Exercise Card */}
      <div className="p-6 rounded-xl bg-slate-50 border border-slate-200 space-y-5">
        
        {/* Prompt Header */}
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="px-2.5 py-0.5 rounded-md bg-blue-100 text-blue-800 text-[11px] font-mono font-bold">
              QUESTÃO #{currentIndex + 1} • {currentExercise.type === 'multiple-choice' ? 'Múltipla Escolha' : 'Preencher Lacuna'}
            </span>

            {isCurrentAnswered && (
              <span className={`inline-flex items-center space-x-1 text-xs font-bold px-2.5 py-0.5 rounded-full ${
                isCurrentCorrect ? 'bg-emerald-100 text-emerald-800' : 'bg-rose-100 text-rose-800'
              }`}>
                {isCurrentCorrect ? <Check className="w-3.5 h-3.5" /> : <X className="w-3.5 h-3.5" />}
                <span>{isCurrentCorrect ? 'Correto (+10 pts)' : 'Incorreto'}</span>
              </span>
            )}
          </div>

          <h3 className="text-base sm:text-lg font-semibold text-slate-900 leading-snug">
            {currentExercise.prompt}
          </h3>
        </div>

        {/* Multiple Choice Mode */}
        {currentExercise.type === 'multiple-choice' && currentExercise.options && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
            {currentExercise.options.map((opt, optIdx) => {
              const isSelected = currentAnswer === opt;
              const isOptionCorrect = opt.trim().toLowerCase() === currentExercise.correctAnswer.trim().toLowerCase();

              let buttonStyle = 'bg-white hover:bg-slate-100 border-slate-200 text-slate-800';
              if (isCurrentAnswered) {
                if (isOptionCorrect) {
                  buttonStyle = 'bg-emerald-100 border-emerald-500 text-emerald-900 font-bold';
                } else if (isSelected && !isCurrentCorrect) {
                  buttonStyle = 'bg-rose-100 border-rose-500 text-rose-900';
                } else {
                  buttonStyle = 'bg-white opacity-60 border-slate-200 text-slate-600';
                }
              } else if (isSelected) {
                buttonStyle = 'bg-blue-50 border-blue-500 text-blue-900 font-semibold';
              }

              return (
                <button
                  key={optIdx}
                  disabled={isCurrentAnswered}
                  onClick={() => handleSelectOption(opt)}
                  className={`text-left p-4 rounded-xl text-xs sm:text-sm font-medium transition-all border shadow-sm flex items-center justify-between ${buttonStyle}`}
                >
                  <div className="flex items-center space-x-2.5">
                    <span className="w-6 h-6 rounded-md bg-slate-100 text-slate-600 text-xs font-mono font-bold flex items-center justify-center shrink-0">
                      {String.fromCharCode(65 + optIdx)}
                    </span>
                    <span>{opt}</span>
                  </div>

                  {isCurrentAnswered && isOptionCorrect && (
                    <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                  )}
                  {isCurrentAnswered && isSelected && !isCurrentCorrect && (
                    <X className="w-4 h-4 text-rose-600 shrink-0" />
                  )}
                </button>
              );
            })}
          </div>
        )}

        {/* Fill in the blank Mode */}
        {currentExercise.type === 'fill-blank' && (
          <form onSubmit={handleFillSubmit} className="space-y-3 pt-2">
            <div className="flex flex-col sm:flex-row gap-2">
              <input
                type="text"
                disabled={isCurrentAnswered}
                value={currentAnswer}
                onChange={(e) => setUserAnswers((prev) => ({ ...prev, [currentExercise.id]: e.target.value }))}
                placeholder="Digite a palavra ou expressão em inglês..."
                className="flex-1 px-4 py-3 rounded-xl bg-white border border-slate-300 text-sm text-slate-900 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 disabled:opacity-80"
              />
              {!isCurrentAnswered && (
                <button
                  type="submit"
                  disabled={!currentAnswer.trim()}
                  className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 disabled:opacity-50 text-white text-xs font-semibold shadow-sm transition-all"
                >
                  Confirmar Resposta
                </button>
              )}
            </div>
          </form>
        )}

        {/* Immediate Explanation Banner (shown once answered) */}
        {isCurrentAnswered && (
          <div className="p-4 rounded-xl bg-white border border-slate-200 text-xs text-slate-700 space-y-1.5 animate-fadeIn">
            <div className="flex items-center space-x-2 text-slate-900 font-semibold">
              <span>Resposta Correta:</span>
              <span className="font-mono text-emerald-700 font-bold px-2 py-0.5 rounded bg-emerald-50 border border-emerald-200">
                {currentExercise.correctAnswer}
              </span>
            </div>
            <p className="text-slate-600 leading-relaxed pt-1">
              <strong>Explicação:</strong> {currentExercise.explanation}
            </p>
          </div>
        )}

      </div>

      {/* Stepper Navigation Footer */}
      <div className="flex items-center justify-between pt-2">
        <button
          onClick={handlePrev}
          disabled={currentIndex === 0}
          className="flex items-center space-x-1.5 px-4 py-2 rounded-xl bg-white hover:bg-slate-100 text-slate-700 text-xs font-semibold border border-slate-200 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
        >
          <ChevronLeft className="w-4 h-4" />
          <span>Exercício Anterior</span>
        </button>

        <span className="text-xs text-slate-500 font-medium">
          {answeredIds.length} de {exercises.length} respondidos
        </span>

        <button
          onClick={handleNext}
          disabled={!isCurrentAnswered}
          className={`flex items-center space-x-1.5 px-5 py-2.5 rounded-xl text-xs font-semibold transition-all shadow-sm ${
            isCurrentAnswered
              ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-blue-500/20'
              : 'bg-slate-200 text-slate-400 cursor-not-allowed'
          }`}
        >
          <span>{currentIndex === exercises.length - 1 ? 'Concluir 10 Exercícios' : 'Próximo Exercício'}</span>
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>

    </div>
  );
};
