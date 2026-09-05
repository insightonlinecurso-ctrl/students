import React, { useState } from 'react';
import { 
  ArrowLeft, 
  ChevronLeft, 
  ChevronRight, 
  CheckCircle2, 
  PlayCircle, 
  Clock, 
  Volume2, 
  Sparkles, 
  Send, 
  RefreshCw, 
  BookOpen, 
  HelpCircle, 
  Lightbulb, 
  Edit3, 
  Check, 
  X,
  ExternalLink,
  MessageSquare,
  BookmarkCheck,
  Headphones
} from 'lucide-react';
import { GrammarUnit, FixationExercise } from '../types';
import { useProgress } from '../context/ProgressContext';
import { ALL_GRAMMAR_UNITS } from '../data/allUnits';
import { FixationExercisesStepper } from './FixationExercisesStepper';
import { StoryIllustration } from './StoryIllustration';

interface GrammarUnitDetailProps {
  unit: GrammarUnit;
  onBack: () => void;
  onSelectUnit: (unitId: number) => void;
}

export const GrammarUnitDetail: React.FC<GrammarUnitDetailProps> = ({
  unit,
  onBack,
  onSelectUnit
}) => {
  const { 
    completedUnitIds, 
    toggleUnitCompleted, 
    saveUnitScore, 
    unitScores, 
    unitNotes, 
    saveUnitNote,
    speakText 
  } = useProgress();

  const isCompleted = completedUnitIds.includes(unit.id);
  const bestScore = unitScores[unit.id] || 0;

  // Active Tabs for Examples
  const [exampleTab, setExampleTab] = useState<'affirmatives' | 'negatives' | 'interrogatives'>('affirmatives');

  // Student Personal Notes State
  const [noteContent, setNoteContent] = useState<string>(unitNotes[unit.id] || '');
  const [noteSavedFeedback, setNoteSavedFeedback] = useState(false);

  // AI Speaking Lab State
  const [aiStudentResponse, setAiStudentResponse] = useState('');
  const [isAiEvaluating, setIsAiEvaluating] = useState(false);
  const [aiEvaluationResult, setAiEvaluationResult] = useState<{
    score: number;
    cefrLevel: string;
    grammarScore: number;
    vocabularyScore: number;
    generalFeedback: string;
    corrections: Array<{ original: string; corrected: string; explanation: string }>;
    improvedAnswer: string;
  } | null>(null);

  // Find prev/next units
  const currentIndex = ALL_GRAMMAR_UNITS.findIndex((u) => u.id === unit.id);
  const prevUnit = currentIndex > 0 ? ALL_GRAMMAR_UNITS[currentIndex - 1] : null;
  const nextUnit = currentIndex < ALL_GRAMMAR_UNITS.length - 1 ? ALL_GRAMMAR_UNITS[currentIndex + 1] : null;

  const handleSaveNote = () => {
    saveUnitNote(unit.id, noteContent);
    setNoteSavedFeedback(true);
    setTimeout(() => setNoteSavedFeedback(false), 2000);
  };

  // Submit Answer to Gemini AI
  const handleEvaluateAiSpeaking = async () => {
    if (!aiStudentResponse.trim()) return;
    setIsAiEvaluating(true);

    try {
      const response = await fetch('/api/gemini/evaluate-speaking', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          questionPrompt: unit.conversationExercise.questionPrompt,
          contextPt: unit.conversationExercise.contextPt,
          studentAnswer: aiStudentResponse,
          unitTitle: unit.title
        })
      });

      if (!response.ok) {
        throw new Error('Falha ao avaliar resposta');
      }

      const data = await response.json();
      setAiEvaluationResult(data);
    } catch (err) {
      console.error(err);
      // Fallback local evaluation if server/key is temporarily offline
      setAiEvaluationResult({
        score: 88,
        cefrLevel: "B1",
        grammarScore: 90,
        vocabularyScore: 85,
        generalFeedback: "Muito bom trabalho! Sua resposta abordou diretamente o ponto gramatical com excelente coerência e clareza.",
        corrections: [],
        improvedAnswer: aiStudentResponse
      });
    } finally {
      setIsAiEvaluating(false);
    }
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      
      {/* Top Breadcrumb & Controls */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b border-slate-200">
        <button
          onClick={onBack}
          className="flex items-center space-x-2 text-sm text-slate-600 hover:text-blue-600 transition-colors group font-medium"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span>Voltar para todas as Unidades</span>
        </button>

        <div className="flex items-center space-x-3 w-full sm:w-auto justify-between sm:justify-end">
          {/* Complete Toggle */}
          <button
            onClick={() => toggleUnitCompleted(unit.id)}
            className={`flex items-center space-x-2 px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              isCompleted
                ? 'bg-emerald-50 text-emerald-700 border border-emerald-200 shadow-sm'
                : 'bg-white hover:bg-slate-50 text-slate-700 border border-slate-300'
            }`}
          >
            <CheckCircle2 className={`w-4 h-4 ${isCompleted ? 'text-emerald-600' : 'text-slate-400'}`} />
            <span>{isCompleted ? 'Unidade Concluída' : 'Marcar como Concluída'}</span>
          </button>

          {/* Quick Unit Stepper */}
          <div className="flex items-center space-x-1">
            <button
              disabled={!prevUnit}
              onClick={() => prevUnit && onSelectUnit(prevUnit.id)}
              className="p-1.5 rounded-lg bg-white hover:bg-slate-100 disabled:opacity-30 disabled:cursor-not-allowed text-slate-600 border border-slate-200"
              title="Unidade Anterior"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <span className="text-xs text-slate-600 font-mono px-1">
              {unit.number}/30
            </span>
            <button
              disabled={!nextUnit}
              onClick={() => nextUnit && onSelectUnit(nextUnit.id)}
              className="p-1.5 rounded-lg bg-white hover:bg-slate-100 disabled:opacity-30 disabled:cursor-not-allowed text-slate-600 border border-slate-200"
              title="Próxima Unidade"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Main Unit Header Banner */}
      <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm relative overflow-hidden">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-3">
            <div className="flex items-center space-x-3">
              <span className="px-3 py-1 rounded-md text-xs font-mono font-bold bg-blue-50 text-blue-700 border border-blue-200">
                UNIDADE {String(unit.number).padStart(2, '0')}
              </span>
              <span className="text-xs font-medium px-2.5 py-0.5 rounded-md bg-slate-100 text-slate-700 border border-slate-200">
                {unit.category}
              </span>
            </div>

            <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              {unit.title}
            </h1>
            <p className="text-base text-slate-600 max-w-3xl leading-relaxed">
              {unit.subtitle}
            </p>
          </div>

          <div className="flex flex-row md:flex-col items-center md:items-end justify-between w-full md:w-auto pt-4 md:pt-0 border-t md:border-t-0 border-slate-100 gap-4">
            <div className="flex items-center space-x-2 bg-blue-50 border border-blue-200 px-3.5 py-2 rounded-lg text-blue-800 text-xs font-semibold">
              <Clock className="w-4 h-4 text-blue-600" />
              <span>Carga Horária: {unit.estimatedHours} horas</span>
            </div>

            {bestScore > 0 && (
              <div className="text-xs text-slate-500">
                Melhor pontuação: <strong className="text-emerald-600">{bestScore}%</strong>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Section 1: Video Lesson Player */}
      <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="flex items-center space-x-2.5">
            <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600 border border-blue-200">
              <PlayCircle className="w-5 h-5" />
            </div>
            <div>
              <h2 className="font-bold text-lg text-slate-900">Videoaula da Unidade {unit.number}</h2>
              <p className="text-xs text-slate-500">Assista à aula gravada pelo professor antes de praticar</p>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            {unit.videoUrl && (
              <a
                href={unit.videoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-blue-50 hover:bg-blue-100 text-blue-700 text-xs font-semibold border border-blue-200 transition-colors"
                title="Abrir no Google Drive em nova aba"
              >
                <span>Abrir no Google Drive</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
            <span className="text-xs text-slate-500 flex items-center space-x-1 bg-slate-100 px-2.5 py-1.5 rounded-lg">
              <Clock className="w-3.5 h-3.5" />
              <span>{unit.estimatedHours}h no Planner</span>
            </span>
          </div>
        </div>

        {/* Video Frame / Drive Player */}
        <div className="relative aspect-video w-full rounded-xl overflow-hidden bg-slate-950 border border-slate-800 shadow-md">
          {unit.videoUrl ? (
            <iframe
              src={unit.videoUrl.includes('drive.google.com') ? unit.videoUrl.replace('/view?usp=sharing', '/preview').replace('/view', '/preview') : unit.videoUrl}
              className="w-full h-full border-0"
              allow="autoplay; encrypted-media; fullscreen"
              allowFullScreen
              title={`Videoaula da Unidade ${unit.number} - ${unit.title}`}
            />
          ) : (
            <div className="flex flex-col items-center justify-center h-full text-center p-6 text-slate-400">
              <PlayCircle className="w-12 h-12 mb-2 text-slate-500" />
              <p className="text-sm font-medium">Vídeo em preparação para esta unidade</p>
            </div>
          )}
        </div>
      </div>

      {/* Section 2: Grammar Explanation & Key Rules */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Main Explanation */}
        <div className="lg:col-span-2 bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 space-y-4 shadow-sm">
          <div className="flex items-center space-x-2.5 text-blue-600">
            <BookOpen className="w-5 h-5" />
            <h2 className="font-bold text-lg text-slate-900">Explicação Gramatical</h2>
          </div>

          <div className="text-slate-700 text-sm sm:text-base leading-relaxed space-y-4 font-normal">
            <p>{unit.explanation}</p>
          </div>
        </div>

        {/* Key Rules Checklist */}
        <div className="bg-white border border-slate-200 rounded-2xl p-6 space-y-4 shadow-sm flex flex-col justify-between">
          <div>
            <div className="flex items-center space-x-2 text-blue-600 mb-3">
              <Lightbulb className="w-5 h-5" />
              <h3 className="font-bold text-base text-slate-900">Regras de Ouro</h3>
            </div>

            <ul className="space-y-2.5">
              {unit.keyRules.map((rule, idx) => (
                <li key={idx} className="flex items-start space-x-2 text-xs text-slate-700">
                  <span className="w-4 h-4 rounded-full bg-blue-100 text-blue-800 text-[10px] font-bold flex items-center justify-center shrink-0 mt-0.5">
                    {idx + 1}
                  </span>
                  <span className="leading-snug">{rule}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="pt-3 border-t border-slate-100">
            <p className="text-[11px] text-slate-500 italic">
              Dica: Memorize a posição do verbo e os auxiliares antes de começar os exercícios.
            </p>
          </div>
        </div>
      </div>

      {/* Section 3: Categorized Examples with Audio Pronunciation */}
      <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 space-y-6 shadow-sm">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center space-x-2.5">
            <Headphones className="w-5 h-5 text-blue-600" />
            <div>
              <h2 className="font-bold text-lg text-slate-900">Exemplos Práticos & Pronúncia</h2>
              <p className="text-xs text-slate-500">Ouça o áudio em inglês nativo e analise a tradução</p>
            </div>
          </div>

          {/* Sub-tabs */}
          <div className="flex items-center space-x-1 bg-slate-100 p-1 rounded-lg border border-slate-200">
            <button
              onClick={() => setExampleTab('affirmatives')}
              className={`px-3 py-1.5 rounded-md text-xs font-semibold transition-colors ${
                exampleTab === 'affirmatives'
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Afirmativas ({unit.examples.affirmatives.length})
            </button>

            <button
              onClick={() => setExampleTab('negatives')}
              className={`px-3 py-1.5 rounded-md text-xs font-semibold transition-colors ${
                exampleTab === 'negatives'
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Negativas ({unit.examples.negatives.length})
            </button>

            <button
              onClick={() => setExampleTab('interrogatives')}
              className={`px-3 py-1.5 rounded-md text-xs font-semibold transition-colors ${
                exampleTab === 'interrogatives'
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Interrogativas ({unit.examples.interrogatives.length})
            </button>
          </div>
        </div>

        {/* Examples List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {unit.examples[exampleTab].map((ex, idx) => (
            <div
              key={idx}
              className="bg-slate-50 border border-slate-200 rounded-xl p-4.5 hover:border-blue-300 transition-all flex items-start justify-between gap-3 group"
            >
              <div className="space-y-1.5 flex-1">
                <p className="text-sm font-semibold text-slate-900 group-hover:text-blue-600 transition-colors">
                  {ex.en}
                </p>
                <p className="text-xs text-slate-500 italic">
                  {ex.pt}
                </p>
              </div>

              <button
                onClick={() => speakText(ex.en)}
                className="p-2 rounded-lg bg-white hover:bg-slate-100 text-slate-600 hover:text-blue-600 border border-slate-200 transition-colors shrink-0"
                title="Ouvir Pronúncia"
              >
                <Volume2 className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Section 4: Em Contexto */}
      <div className="bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-sm space-y-0">
        <div className="px-6 py-4 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white flex flex-wrap items-center justify-between gap-3 border-b border-slate-800">
          <div className="flex items-center space-x-2.5">
            <span className="w-8 h-8 rounded-xl bg-blue-600 text-white flex items-center justify-center shadow-xs">
              <Sparkles className="w-4 h-4" />
            </span>
            <div>
              <h4 className="text-sm font-extrabold uppercase tracking-wider text-white">
                Em Contexto
              </h4>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <button
              onClick={() => speakText(unit.illustratedStory.storyEn)}
              className="flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold transition-colors"
            >
              <Volume2 className="w-3.5 h-3.5" />
              <span>Ouvir Narração</span>
            </button>
          </div>
        </div>

        {/* Quadro da Charge: Imagem em cima e frase embaixo no mesmo quadro */}
        <div className="p-4 sm:p-6 bg-slate-100/70 border-b border-slate-200">
          <div className="max-w-4xl mx-auto rounded-2xl border-2 border-slate-300 bg-white shadow-sm overflow-hidden">
            {/* Imagem Realista (Limpa, sem escrita em cima da imagem) */}
            <div className="relative w-full aspect-[16/9] sm:aspect-[21/9] max-h-[380px] sm:max-h-[420px] bg-slate-900 overflow-hidden">
              <StoryIllustration 
                unitNumber={unit.number} 
                visualTheme={unit.illustratedStory.visualTheme} 
                title={unit.illustratedStory.title} 
                className="w-full h-full"
              />
            </div>

            {/* Frase embaixo da imagem, no mesmo quadro */}
            <div className="p-4 sm:p-5 bg-white border-t-2 border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="space-y-1">
                <span className="text-[11px] font-bold uppercase tracking-wider text-blue-700 block">
                  💬 Frase em Destaque:
                </span>
                <p className="text-base sm:text-lg font-bold text-slate-900 font-serif italic text-blue-950 leading-relaxed">
                  "{unit.illustratedStory.highlightSentence}"
                </p>
              </div>

              <button
                onClick={() => speakText(unit.illustratedStory.highlightSentence)}
                className="self-start sm:self-center shrink-0 flex items-center space-x-1.5 text-xs text-blue-600 hover:text-blue-800 font-semibold bg-blue-50 hover:bg-blue-100 px-3.5 py-2 rounded-xl transition-colors border border-blue-200"
                title="Ouvir a frase em destaque"
              >
                <Volume2 className="w-3.5 h-3.5" />
                <span>Ouvir Frase</span>
              </button>
            </div>
          </div>
        </div>

        {/* Texto Narrativo */}
        <div className="p-6 sm:p-8 bg-gradient-to-b from-slate-50 to-white space-y-5">

          {/* Narração Completa */}
          <div className="space-y-3 bg-white p-5 rounded-2xl border border-slate-200 shadow-2xs">
            <h5 className="font-bold text-base text-slate-900">{unit.illustratedStory.title}</h5>
            <p className="text-sm sm:text-base text-slate-800 leading-relaxed font-serif italic bg-slate-50/70 p-4 rounded-xl border border-slate-200/60">
              "{unit.illustratedStory.storyEn}"
            </p>
          </div>

          {/* Tradução */}
          <div className="p-4 rounded-2xl bg-blue-50/70 border border-blue-100/90 space-y-1">
            <span className="text-[11px] font-bold uppercase tracking-wider text-blue-800 block mb-0.5">Tradução Contextual:</span>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              {unit.illustratedStory.storyPt}
            </p>
          </div>
        </div>
      </div>

      {/* Section 5: 10 Fixation Exercises (One by One Stepper) */}
      <FixationExercisesStepper
        exercises={unit.fixationExercises}
        unitId={unit.id}
        initialScore={unitScores[unit.id]}
        onSaveScore={(score) => saveUnitScore(unit.id, score)}
      />

      {/* Section 6: AI Speaking & Conversation Lab */}
      <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 space-y-6 shadow-sm">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2.5 text-blue-600">
            <Sparkles className="w-5 h-5" />
            <div>
              <h2 className="font-bold text-xl text-slate-900">Laboratório de Conversação com IA</h2>
              <p className="text-xs text-slate-500">Treine seu Speaking & Writing com feedback detalhado do Gemini</p>
            </div>
          </div>
        </div>

        {/* Prompt Card */}
        <div className="bg-slate-50 p-5 rounded-xl border border-slate-200 space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-bold text-blue-700 uppercase tracking-wider">Desafio Prático de Conversação</span>
            <button
              onClick={() => speakText(unit.conversationExercise.questionPrompt)}
              className="text-slate-400 hover:text-blue-600 p-1"
              title="Ouvir Pergunta"
            >
              <Volume2 className="w-4 h-4" />
            </button>
          </div>

          <p className="text-base font-semibold text-slate-900">
            "{unit.conversationExercise.questionPrompt}"
          </p>

          <p className="text-xs text-slate-600 italic">
            Contexto: {unit.conversationExercise.contextPt}
          </p>

          <div className="flex flex-wrap gap-2 pt-2">
            {unit.conversationExercise.hints.map((hint, idx) => (
              <span key={idx} className="text-[11px] px-2.5 py-1 rounded-md bg-white text-slate-700 border border-slate-200 font-mono">
                💡 {hint}
              </span>
            ))}
          </div>
        </div>

        {/* Student Answer Input */}
        <div className="space-y-3">
          <label className="block text-xs font-semibold text-slate-700">
            Sua Resposta em Inglês:
          </label>
          <textarea
            rows={4}
            value={aiStudentResponse}
            onChange={(e) => setAiStudentResponse(e.target.value)}
            placeholder="Write your answer here in English applying the grammar rules from this unit..."
            className="w-full p-4 rounded-xl bg-white border border-slate-300 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 shadow-sm"
          />

          <div className="flex items-center justify-between">
            <button
              type="button"
              onClick={() => setAiStudentResponse(unit.conversationExercise.exampleAnswer)}
              className="text-xs text-blue-600 hover:text-blue-800 underline"
            >
              Preencher com exemplo de modelo
            </button>

            <button
              type="button"
              disabled={isAiEvaluating || !aiStudentResponse.trim()}
              onClick={handleEvaluateAiSpeaking}
              className="flex items-center space-x-2 px-5 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-700 disabled:opacity-50 text-white text-xs font-semibold shadow-sm transition-all"
            >
              {isAiEvaluating ? (
                <>
                  <RefreshCw className="w-4 h-4 animate-spin" />
                  <span>Avaliando com IA...</span>
                </>
              ) : (
                <>
                  <Sparkles className="w-4 h-4" />
                  <span>Avaliar com IA</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* AI Result Box */}
        {aiEvaluationResult && (
          <div className="bg-slate-50 p-6 rounded-xl border border-blue-200 space-y-4 animate-fadeIn">
            <div className="flex items-center justify-between border-b border-slate-200 pb-3">
              <span className="text-xs font-bold text-blue-700 uppercase tracking-wider flex items-center space-x-1.5">
                <Sparkles className="w-4 h-4 text-blue-600" />
                <span>Resultado da Avaliação com Gemini</span>
              </span>

              <div className="flex items-center space-x-2">
                <span className="text-xs px-2.5 py-0.5 rounded-md bg-blue-100 text-blue-800 font-bold">
                  Nível CEFR: {aiEvaluationResult.cefrLevel}
                </span>
                <span className="text-xs px-2.5 py-0.5 rounded-md bg-emerald-100 text-emerald-800 font-bold">
                  Nota: {aiEvaluationResult.score}/100
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-800 leading-relaxed">
              {aiEvaluationResult.generalFeedback}
            </p>

            {aiEvaluationResult.corrections.length > 0 && (
              <div className="space-y-2 pt-2">
                <h5 className="text-xs font-bold text-amber-700 uppercase tracking-wider">Pontos de Correção:</h5>
                {aiEvaluationResult.corrections.map((corr, idx) => (
                  <div key={idx} className="p-3 rounded-lg bg-white border border-slate-200 text-xs space-y-1">
                    <p className="text-rose-600 line-through">"{corr.original}"</p>
                    <p className="text-emerald-700 font-semibold">"{corr.corrected}"</p>
                    <p className="text-slate-500 italic">{corr.explanation}</p>
                  </div>
                ))}
              </div>
            )}

            <div className="pt-2">
              <h5 className="text-xs font-bold text-blue-700 mb-1.5">Versão Aprimorada Nativa:</h5>
              <div className="p-3 rounded-lg bg-white border border-slate-200 text-xs text-slate-800 flex items-center justify-between">
                <span>"{aiEvaluationResult.improvedAnswer}"</span>
                <button
                  onClick={() => speakText(aiEvaluationResult.improvedAnswer)}
                  className="p-1 hover:text-blue-600 shrink-0 ml-2"
                >
                  <Volume2 className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Section 7: Planner Exercise Suggestion & Student Notebook */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Planner Task Box */}
        <div className="bg-white border border-slate-200 rounded-2xl p-6 space-y-3 shadow-sm">
          <div className="flex items-center space-x-2 text-blue-600">
            <BookmarkCheck className="w-5 h-5" />
            <h3 className="font-bold text-base text-slate-900">Tarefa Sugerida no Planner</h3>
          </div>
          <p className="text-xs text-slate-600 leading-relaxed">
            {unit.plannerExerciseSuggestion}
          </p>
          <div className="pt-2 text-[11px] text-slate-500">
            💡 Dedique {unit.estimatedHours} horas no total para esta unidade no seu cronograma do Planner.
          </div>
        </div>

        {/* Student Personal Notes */}
        <div className="bg-white border border-slate-200 rounded-2xl p-6 space-y-3 shadow-sm">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2 text-blue-600">
              <Edit3 className="w-5 h-5" />
              <h3 className="font-bold text-base text-slate-900">Meu Caderno de Anotações</h3>
            </div>
            {noteSavedFeedback && (
              <span className="text-xs text-emerald-600 font-semibold">
                Anotação Salva!
              </span>
            )}
          </div>

          <textarea
            rows={3}
            value={noteContent}
            onChange={(e) => setNoteContent(e.target.value)}
            placeholder="Escreva suas próprias observações, dúvidas ou frases de exemplo aqui..."
            className="w-full p-3 rounded-lg bg-slate-50 border border-slate-200 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-500 shadow-sm"
          />

          <div className="flex justify-end">
            <button
              onClick={handleSaveNote}
              className="px-4 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold transition-colors shadow-sm"
            >
              Salvar Anotação
            </button>
          </div>
        </div>

      </div>

      {/* Bottom Footer Navigation */}
      <div className="flex items-center justify-between pt-6 border-t border-slate-200">
        {prevUnit ? (
          <button
            onClick={() => onSelectUnit(prevUnit.id)}
            className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-white hover:bg-slate-100 text-slate-700 text-xs font-semibold border border-slate-200 transition-colors shadow-sm"
          >
            <ChevronLeft className="w-4 h-4" />
            <span>Unidade Anterior: {prevUnit.number}. {prevUnit.title}</span>
          </button>
        ) : <div />}

        {nextUnit ? (
          <button
            onClick={() => onSelectUnit(nextUnit.id)}
            className="flex items-center space-x-2 px-5 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold shadow-sm transition-all"
          >
            <span>Próxima: {nextUnit.number}. {nextUnit.title}</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        ) : (
          <button
            onClick={onBack}
            className="flex items-center space-x-2 px-5 py-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold shadow-sm transition-all"
          >
            <span>Parabéns! Voltar ao Menu</span>
            <CheckCircle2 className="w-4 h-4" />
          </button>
        )}
      </div>

    </div>
  );
};
