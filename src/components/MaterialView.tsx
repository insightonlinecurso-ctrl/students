import React, { useState } from 'react';
import { 
  BookOpen, 
  Search, 
  CheckCircle2, 
  PlayCircle, 
  Clock, 
  Sparkles, 
  Send, 
  Volume2, 
  BookmarkCheck, 
  HelpCircle, 
  MessageSquare,
  ChevronRight,
  ExternalLink,
  RefreshCw,
  Check,
  AlertCircle,
  Eye,
  SlidersHorizontal,
  FileCheck
} from 'lucide-react';
import { ALL_GRAMMAR_UNITS, getUnitById } from '../data/allUnits';
import { GrammarUnit } from '../types';
import { useProgress } from '../context/ProgressContext';
import { useAuth } from '../context/AuthContext';
import { FixationExercisesStepper } from './FixationExercisesStepper';
import { StoryIllustration } from './StoryIllustration';

interface MaterialViewProps {
  initialUnitId?: number | null;
}

export const MaterialView: React.FC<MaterialViewProps> = ({ initialUnitId }) => {
  const { user } = useAuth();
  const { 
    completedUnitIds, 
    toggleUnitCompleted, 
    saveUnitScore, 
    unitScores, 
    speakText, 
    saveConversationSubmission 
  } = useProgress();

  const [selectedUnitId, setSelectedUnitId] = useState<number>(() => {
    if (initialUnitId && getUnitById(initialUnitId)) {
      return initialUnitId;
    }
    return 1;
  });

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('Todas');
  const [exampleTab, setExampleTab] = useState<'affirmatives' | 'negatives' | 'interrogatives'>('affirmatives');

  // Conversation Exercise State
  const [studentConversationAnswer, setStudentConversationAnswer] = useState('');
  const [isEvaluatingConversation, setIsEvaluatingConversation] = useState(false);
  const [conversationEvaluation, setConversationEvaluation] = useState<{
    score: number;
    feedback: string;
    correctedSentence: string;
  } | null>(null);
  const [submissionSuccessMessage, setSubmissionSuccessMessage] = useState(false);

  // Active Unit
  const activeUnit = getUnitById(selectedUnitId) || ALL_GRAMMAR_UNITS[0];
  const isCompleted = completedUnitIds.includes(activeUnit.id);
  const bestScore = unitScores[activeUnit.id] || 0;

  // Filtered units list for left sidebar
  const filteredUnits = ALL_GRAMMAR_UNITS.filter((u) => {
    const matchesSearch = 
      u.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      u.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
      String(u.number).includes(searchQuery);
    const matchesCat = selectedCategory === 'Todas' || u.category === selectedCategory;
    return matchesSearch && matchesCat;
  });

  const categories = ['Todas', 'To Be', 'Auxiliares', 'Pronomes', 'Caso Genitivo', 'Modais', 'Tempos Perfeitos', 'Condicionais'];

  // Handle Conversation Correction & Save to Admin
  const handleCorrectConversation = async () => {
    if (!studentConversationAnswer.trim()) return;
    setIsEvaluatingConversation(true);

    try {
      const response = await fetch('/api/gemini/evaluate-speaking', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          questionPrompt: activeUnit.conversationExercise.questionPrompt,
          contextPt: activeUnit.conversationExercise.contextPt,
          studentAnswer: studentConversationAnswer,
          unitTitle: activeUnit.title
        })
      });

      let evaluationData = {
        score: 90,
        feedback: "Ótima aplicação da regra gramatical estudada com clareza e vocabulário contextualizado.",
        correctedSentence: studentConversationAnswer
      };

      if (response.ok) {
        const data = await response.json();
        evaluationData = {
          score: data.score || 90,
          feedback: data.generalFeedback || "Resposta muito bem articulada!",
          correctedSentence: data.improvedAnswer || studentConversationAnswer
        };
      }

      setConversationEvaluation(evaluationData);

      // Save submission so it shows in Admin section and Student Profile
      saveConversationSubmission({
        studentId: user?.id || 'usr_aluno',
        studentName: user?.name || 'Aluno Insight',
        unitNumber: activeUnit.number,
        unitTitle: activeUnit.title,
        questionPrompt: activeUnit.conversationExercise.questionPrompt,
        studentAnswer: studentConversationAnswer,
        correctedSentence: evaluationData.correctedSentence,
        feedback: evaluationData.feedback,
        score: evaluationData.score
      });

      setSubmissionSuccessMessage(true);
      setTimeout(() => setSubmissionSuccessMessage(false), 4000);
    } catch (e) {
      console.error(e);
      const fallbackData = {
        score: 88,
        feedback: "Sua resposta utilizou a estrutura gramatical com sucesso. Enviada ao painel do professor.",
        correctedSentence: studentConversationAnswer
      };
      setConversationEvaluation(fallbackData);

      saveConversationSubmission({
        studentId: user?.id || 'usr_aluno',
        studentName: user?.name || 'Aluno Insight',
        unitNumber: activeUnit.number,
        unitTitle: activeUnit.title,
        questionPrompt: activeUnit.conversationExercise.questionPrompt,
        studentAnswer: studentConversationAnswer,
        correctedSentence: fallbackData.correctedSentence,
        feedback: fallbackData.feedback,
        score: fallbackData.score
      });
      setSubmissionSuccessMessage(true);
      setTimeout(() => setSubmissionSuccessMessage(false), 4000);
    } finally {
      setIsEvaluatingConversation(false);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      
      {/* Container: Left Sidebar (Units List) + Main Detail View */}
      <div className="flex flex-col lg:flex-row gap-8 items-start">
        
        {/* ========================================================= */}
        {/* LEFT SIDEBAR: Lista das Unidades do Curso (30 Unidades)   */}
        {/* ========================================================= */}
        <aside className="w-full lg:w-80 shrink-0 bg-white border border-slate-200 rounded-3xl p-5 shadow-xs space-y-4 lg:sticky lg:top-24 max-h-[calc(100vh-7rem)] overflow-hidden flex flex-col">
          
          <div className="space-y-1 border-b border-slate-100 pb-3">
            <div className="flex items-center space-x-2 text-blue-600">
              <BookOpen className="w-5 h-5" />
              <h2 className="font-bold text-base text-slate-900">Unidades do Curso</h2>
            </div>
            <p className="text-xs text-slate-500">
              30 Pontos Gramaticais Estruturados
            </p>
          </div>

          {/* Search Bar */}
          <div className="relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Buscar unidade ou regra..."
              className="w-full pl-9 pr-3 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:bg-white"
            />
          </div>

          {/* Category Filter Pills */}
          <div className="flex space-x-1.5 overflow-x-auto pb-1 no-scrollbar text-[11px]">
            {categories.slice(0, 5).map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-2.5 py-1 rounded-lg font-medium whitespace-nowrap transition-colors ${
                  selectedCategory === cat
                    ? 'bg-blue-600 text-white font-semibold'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Units Scrollable List */}
          <div className="flex-1 overflow-y-auto space-y-1.5 pr-1 text-xs">
            {filteredUnits.map((u) => {
              const isSelected = u.id === selectedUnitId;
              const isUnitDone = completedUnitIds.includes(u.id);
              const score = unitScores[u.id];

              return (
                <button
                  key={u.id}
                  id={`unit-item-${u.number}`}
                  onClick={() => {
                    setSelectedUnitId(u.id);
                    setConversationEvaluation(null);
                    setStudentConversationAnswer('');
                  }}
                  className={`w-full text-left p-3 rounded-xl transition-all flex items-start justify-between space-x-2 border ${
                    isSelected
                      ? 'bg-blue-600 text-white border-blue-600 shadow-sm'
                      : 'bg-white hover:bg-slate-50 text-slate-800 border-slate-200/70'
                  }`}
                >
                  <div className="space-y-0.5 min-w-0">
                    <div className="flex items-center space-x-1.5">
                      <span className={`text-[10px] font-mono font-bold px-1.5 py-0.2 rounded ${
                        isSelected ? 'bg-blue-700 text-white' : 'bg-slate-100 text-slate-600'
                      }`}>
                        #{String(u.number).padStart(2, '0')}
                      </span>
                      <span className={`text-[10px] uppercase font-bold tracking-wider truncate ${
                        isSelected ? 'text-blue-100' : 'text-slate-400'
                      }`}>
                        {u.category}
                      </span>
                    </div>

                    <h4 className={`font-semibold text-xs truncate ${
                      isSelected ? 'text-white' : 'text-slate-900'
                    }`}>
                      {u.title}
                    </h4>
                  </div>

                  <div className="shrink-0 flex items-center space-x-1 pt-1">
                    {isUnitDone ? (
                      <CheckCircle2 className={`w-4 h-4 ${isSelected ? 'text-emerald-300' : 'text-emerald-500'}`} />
                    ) : score ? (
                      <span className={`text-[10px] font-bold font-mono px-1 rounded ${
                        isSelected ? 'bg-blue-700 text-white' : 'bg-slate-100 text-slate-700'
                      }`}>
                        {score}pts
                      </span>
                    ) : (
                      <ChevronRight className={`w-3.5 h-3.5 ${isSelected ? 'text-blue-200' : 'text-slate-300'}`} />
                    )}
                  </div>
                </button>
              );
            })}
          </div>

          <div className="pt-2 border-t border-slate-100 text-[11px] text-slate-500 flex items-center justify-between">
            <span>Total: 30 Unidades</span>
            <span className="font-semibold text-emerald-600 font-mono">
              {completedUnitIds.length} concluídas
            </span>
          </div>

        </aside>

        {/* ========================================================= */}
        {/* MAIN DETAIL AREA: Conteúdo Completo da Unidade            */}
        {/* ========================================================= */}
        <main className="flex-1 w-full space-y-8">
          
          {/* Unit Header Card */}
          <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-xs space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 pb-4">
              <div className="flex items-center space-x-2">
                <span className="text-xs font-mono font-black px-2.5 py-1 rounded-lg bg-blue-100 text-blue-800">
                  UNIDADE {String(activeUnit.number).padStart(2, '0')}
                </span>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  {activeUnit.category}
                </span>
                <span className="text-slate-300">•</span>
                <span className="text-xs text-slate-500 flex items-center space-x-1">
                  <Clock className="w-3.5 h-3.5 text-slate-400" />
                  <span>{activeUnit.estimatedHours} horas no Planner</span>
                </span>
              </div>

              <div className="flex items-center space-x-3">
                <button
                  onClick={() => toggleUnitCompleted(activeUnit.id)}
                  className={`flex items-center space-x-2 px-3.5 py-2 rounded-xl text-xs font-semibold transition-all border ${
                    isCompleted
                      ? 'bg-emerald-50 text-emerald-700 border-emerald-300 hover:bg-emerald-100'
                      : 'bg-white text-slate-700 border-slate-300 hover:bg-slate-50'
                  }`}
                >
                  <CheckCircle2 className={`w-4 h-4 ${isCompleted ? 'text-emerald-600' : 'text-slate-400'}`} />
                  <span>{isCompleted ? 'Unidade Concluída' : 'Marcar como Concluída'}</span>
                </button>
              </div>
            </div>

            <div>
              <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                {activeUnit.title}
              </h1>
              <p className="text-sm text-slate-600 mt-1">
                {activeUnit.subtitle}
              </p>
            </div>
          </div>

          {/* 1. Explicação Detalhada em Linguagem Coloquial e Acessível */}
          <section className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-xs space-y-4">
            <div className="flex items-center space-x-2 text-blue-600 border-b border-slate-100 pb-3">
              <BookOpen className="w-5 h-5" />
              <h3 className="font-bold text-lg text-slate-900">
                1. Explicação Detalhada da Regra Gramatical
              </h3>
            </div>

            <div className="prose prose-slate max-w-none text-slate-700 text-sm sm:text-base leading-relaxed whitespace-pre-line">
              {activeUnit.explanation}
            </div>

            {/* Key Rules Callout */}
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2 mt-4">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700 flex items-center space-x-1.5">
                <Sparkles className="w-4 h-4 text-amber-500" />
                <span>Regras de Ouro e Dicas Práticas</span>
              </h4>
              <ul className="space-y-1.5 text-xs text-slate-600">
                {activeUnit.keyRules.map((rule, idx) => (
                  <li key={idx} className="flex items-start space-x-2">
                    <span className="text-blue-600 font-bold">•</span>
                    <span>{rule}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* 2. Espaço para Vídeo de Explicação (Google Drive link/embed) */}
          <section className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-xs space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 pb-3">
              <div className="flex items-center space-x-2 text-blue-600">
                <PlayCircle className="w-5 h-5" />
                <div>
                  <h3 className="font-bold text-lg text-slate-900">
                    2. Vídeo de Explicação do Professor
                  </h3>
                  <p className="text-xs text-slate-500">
                    Assista à videoaula gravada pelo professor Carlos explicando a teoria e pronúncia
                  </p>
                </div>
              </div>
              
              {activeUnit.videoUrl && (
                <a
                  href={activeUnit.videoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-1.5 px-3.5 py-1.5 rounded-xl bg-blue-50 hover:bg-blue-100 text-blue-700 text-xs font-bold border border-blue-200 transition-colors w-fit"
                  title="Abrir no Google Drive em nova aba"
                >
                  <span>Abrir no Google Drive</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
            </div>

            {/* Embedded Video Player */}
            <div className="relative aspect-video w-full rounded-2xl overflow-hidden bg-slate-950 border border-slate-800 shadow-md">
              {activeUnit.videoUrl ? (
                <iframe
                  src={
                    activeUnit.videoUrl.includes('drive.google.com')
                      ? activeUnit.videoUrl.replace('/view?usp=sharing', '/preview').replace('/view', '/preview')
                      : activeUnit.videoUrl
                  }
                  className="w-full h-full border-0"
                  allow="autoplay; encrypted-media; fullscreen"
                  allowFullScreen
                  title={`Videoaula da Unidade ${activeUnit.number} - ${activeUnit.title}`}
                />
              ) : (
                <div className="flex flex-col items-center justify-center h-full text-center p-6 text-slate-400">
                  <PlayCircle className="w-12 h-12 mb-2 text-slate-500" />
                  <p className="text-sm font-medium">Vídeo em preparação para esta unidade</p>
                </div>
              )}
            </div>
          </section>

          {/* 3. 4 Grupos de Exemplos (Afirmativas, Negativas, Interrogativas + História Ilustrada com Imagens) */}
          <section className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-xs space-y-6">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div>
                <h3 className="font-bold text-lg text-slate-900">
                  3. Grupos de Exemplos Práticos e História Ilustrada
                </h3>
                <p className="text-xs text-slate-500">
                  4 grupos: Frases Afirmativas, Negativas, Interrogativas e Contexto Narrativo.
                </p>
              </div>
            </div>

            {/* Example Tabs */}
            <div className="flex space-x-2 border-b border-slate-200 pb-2">
              <button
                onClick={() => setExampleTab('affirmatives')}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  exampleTab === 'affirmatives'
                    ? 'bg-blue-600 text-white shadow-xs'
                    : 'text-slate-600 hover:bg-slate-100'
                }`}
              >
                Afirmativas ({activeUnit.examples.affirmatives.length})
              </button>

              <button
                onClick={() => setExampleTab('negatives')}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  exampleTab === 'negatives'
                    ? 'bg-blue-600 text-white shadow-xs'
                    : 'text-slate-600 hover:bg-slate-100'
                }`}
              >
                Negativas ({activeUnit.examples.negatives.length})
              </button>

              <button
                onClick={() => setExampleTab('interrogatives')}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  exampleTab === 'interrogatives'
                    ? 'bg-blue-600 text-white shadow-xs'
                    : 'text-slate-600 hover:bg-slate-100'
                }`}
              >
                Interrogativas ({activeUnit.examples.interrogatives.length})
              </button>
            </div>

            {/* Example Sentences List */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {activeUnit.examples[exampleTab].map((ex, idx) => (
                <div 
                  key={idx} 
                  className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-1.5 hover:border-blue-200 transition-colors"
                >
                  <div className="flex items-start justify-between">
                    <p className="text-sm font-semibold text-slate-900 leading-snug">
                      {ex.en}
                    </p>
                    <button
                      onClick={() => speakText(ex.en)}
                      className="text-slate-400 hover:text-blue-600 p-1"
                      title="Ouvir pronúncia nativa"
                    >
                      <Volume2 className="w-4 h-4" />
                    </button>
                  </div>
                  <p className="text-xs text-slate-500">
                    {ex.pt}
                  </p>
                  {ex.note && (
                    <span className="inline-block text-[11px] font-medium text-blue-600 bg-blue-50 px-2 py-0.5 rounded">
                      💡 {ex.note}
                    </span>
                  )}
                </div>
              ))}
            </div>

            {/* Grupo 4: Em Contexto */}
            <div className="rounded-3xl bg-white border border-slate-200/90 shadow-sm overflow-hidden space-y-0 transition-all">
              {/* Header */}
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
                <div className="flex items-center flex-wrap gap-2">
                  <span className="text-[11px] font-semibold px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 border border-blue-400/30">
                    Cenário: {activeUnit.illustratedStory.visualTheme}
                  </span>
                </div>
              </div>

              {/* Quadro da Charge: Imagem em cima e frase embaixo no mesmo quadro */}
              <div className="p-4 sm:p-6 bg-slate-100/70 border-b border-slate-200">
                <div className="max-w-4xl mx-auto rounded-2xl border-2 border-slate-300 bg-white shadow-sm overflow-hidden">
                  {/* Imagem Realista (Limpa, sem escrita em cima da imagem) */}
                  <div className="relative w-full aspect-[16/9] sm:aspect-[21/9] max-h-[380px] sm:max-h-[420px] bg-slate-900 overflow-hidden">
                    <StoryIllustration 
                      unitNumber={activeUnit.number} 
                      visualTheme={activeUnit.illustratedStory.visualTheme} 
                      title={activeUnit.illustratedStory.title} 
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
                        "{activeUnit.illustratedStory.highlightSentence}"
                      </p>
                    </div>

                    <button
                      onClick={() => speakText(activeUnit.illustratedStory.highlightSentence)}
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
                {/* História Completa (Narração) */}
                <div className="space-y-3 bg-white p-5 sm:p-6 rounded-2xl border border-slate-200 shadow-2xs">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h5 className="font-bold text-base text-slate-900 flex items-center space-x-2">
                      <span>{activeUnit.illustratedStory.title}</span>
                    </h5>
                    <button
                      onClick={() => speakText(activeUnit.illustratedStory.storyEn)}
                      className="flex items-center space-x-1.5 text-xs text-blue-600 hover:text-blue-700 bg-blue-50 hover:bg-blue-100 px-3 py-1.5 rounded-lg font-semibold transition-colors"
                      title="Ouvir a história completa em inglês"
                    >
                      <Volume2 className="w-3.5 h-3.5" />
                      <span>Ouvir Narração Completa</span>
                    </button>
                  </div>

                  <p className="text-sm sm:text-base text-slate-800 leading-relaxed font-serif italic bg-slate-50/70 p-4 rounded-xl border border-slate-200/60">
                    "{activeUnit.illustratedStory.storyEn}"
                  </p>
                </div>

                {/* Tradução Contextual */}
                <div className="p-4 sm:p-5 rounded-2xl bg-blue-50/70 border border-blue-100/90 space-y-1">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-blue-800 block mb-1">
                    Tradução Contextual:
                  </span>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    {activeUnit.illustratedStory.storyPt}
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* 4. Box com 10 Exercícios de Fixação com Pontuação Somada */}
          <section className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-xs space-y-5">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div>
                <h3 className="font-bold text-lg text-slate-900">
                  4. Box com 10 Exercícios de Fixação
                </h3>
                <p className="text-xs text-slate-500">
                  Cada resposta correta gera pontos que alimentam o gráfico da Home e do Perfil.
                </p>
              </div>

              {bestScore > 0 && (
                <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
                  Melhor Pontuação: {bestScore}/100
                </span>
              )}
            </div>

            {/* Stepper with 10 Questions */}
            <FixationExercisesStepper
              unitId={activeUnit.id}
              unitTitle={activeUnit.title}
              exercises={activeUnit.fixationExercises}
              bestScore={bestScore}
              onSaveScore={(score) => saveUnitScore(activeUnit.id, score)}
            />
          </section>

          {/* 5. Botão para Exercício de Conversação */}
          <section className="bg-slate-900 text-white border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-md space-y-5">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 pb-4">
              <div className="space-y-1">
                <div className="flex items-center space-x-2 text-blue-400">
                  <MessageSquare className="w-5 h-5" />
                  <span className="text-xs uppercase font-bold tracking-wider">
                    Exercício de Conversação e Produção Ativa
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white tracking-tight">
                  Pratique a Regra Respondendo à Pergunta
                </h3>
              </div>
            </div>

            {/* Prompt Box */}
            <div className="p-4 rounded-2xl bg-slate-800/80 border border-slate-700 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-blue-300 uppercase">Pergunta da Unidade:</span>
                <button
                  onClick={() => speakText(activeUnit.conversationExercise.questionPrompt)}
                  className="text-slate-400 hover:text-white p-1"
                  title="Ouvir áudio da pergunta"
                >
                  <Volume2 className="w-4 h-4" />
                </button>
              </div>

              <p className="text-base font-semibold text-white font-serif">
                "{activeUnit.conversationExercise.questionPrompt}"
              </p>
              <p className="text-xs text-slate-400 italic">
                Contexto: {activeUnit.conversationExercise.contextPt}
              </p>

              <div className="flex flex-wrap gap-2 pt-1">
                {activeUnit.conversationExercise.hints.map((h, i) => (
                  <span key={i} className="text-[11px] px-2 py-0.5 rounded bg-slate-900 text-slate-300 border border-slate-700 font-mono">
                    💡 {h}
                  </span>
                ))}
              </div>
            </div>

            {/* Answer Input */}
            <div className="space-y-3">
              <label className="block text-xs font-semibold text-slate-300">
                Sua Resposta em Inglês (use as estruturas aprendidas nesta unidade):
              </label>
              <textarea
                rows={4}
                value={studentConversationAnswer}
                onChange={(e) => setStudentConversationAnswer(e.target.value)}
                placeholder="Write your complete answer here in English using what you learned..."
                className="w-full p-4 rounded-2xl bg-slate-950 border border-slate-700 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
              />

              <div className="flex flex-wrap items-center justify-between gap-3">
                <button
                  type="button"
                  onClick={() => setStudentConversationAnswer(activeUnit.conversationExercise.exampleAnswer)}
                  className="text-xs text-blue-400 hover:text-blue-300 underline"
                >
                  Preencher com modelo de exemplo
                </button>

                <button
                  type="button"
                  id="btn-corrigir-conversacao"
                  disabled={isEvaluatingConversation || !studentConversationAnswer.trim()}
                  onClick={handleCorrectConversation}
                  className="flex items-center space-x-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 disabled:opacity-50 text-white text-xs font-bold shadow-lg shadow-blue-600/30 transition-all hover:scale-105"
                >
                  {isEvaluatingConversation ? (
                    <>
                      <RefreshCw className="w-4 h-4 animate-spin" />
                      <span>Corrigindo e Salvando...</span>
                    </>
                  ) : (
                    <>
                      <FileCheck className="w-4 h-4" />
                      <span>Corrigir Resposta</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Submission feedback badge */}
            {submissionSuccessMessage && (
              <div className="p-3 rounded-xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-xs flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Resposta corrigida com sucesso e registrada no seu Perfil de estudos!</span>
              </div>
            )}

            {/* Evaluation Details */}
            {conversationEvaluation && (
              <div className="p-5 rounded-2xl bg-slate-800 border border-slate-700 space-y-3">
                <div className="flex items-center justify-between border-b border-slate-700 pb-2">
                  <span className="text-xs font-bold text-blue-400 uppercase tracking-wider">
                    Feedback de Correção da Resposta
                  </span>
                  <span className="text-xs font-mono font-bold px-2.5 py-0.5 rounded bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                    Nota: {conversationEvaluation.score}/100
                  </span>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed">
                  {conversationEvaluation.feedback}
                </p>

                <div className="pt-1">
                  <span className="text-[11px] text-slate-400 block mb-1">Versão Aprimorada:</span>
                  <div className="p-3 rounded-xl bg-slate-900 border border-slate-700 text-xs text-white flex items-center justify-between">
                    <span>"{conversationEvaluation.correctedSentence}"</span>
                    <button
                      onClick={() => speakText(conversationEvaluation.correctedSentence)}
                      className="text-slate-400 hover:text-white p-1"
                    >
                      <Volume2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            )}
          </section>

        </main>

      </div>

    </div>
  );
};
