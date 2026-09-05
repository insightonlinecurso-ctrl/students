import React, { useState, useMemo } from 'react';
import { 
  Layers, 
  Search, 
  Volume2, 
  Sparkles, 
  RotateCw, 
  CheckCircle2, 
  Award, 
  BookOpen, 
  Check, 
  X, 
  HelpCircle,
  Zap,
  ArrowRight,
  Flame
} from 'lucide-react';
import { VOCABULARY_LIST, VOCABULARY_CATEGORIES } from '../data/vocabularyData';
import { useProgress } from '../context/ProgressContext';
import { VocabularyWord } from '../types';

export const VocabularyTraining: React.FC = () => {
  const { 
    learnedWordIds, 
    masteredWordIds, 
    toggleWordLearned, 
    toggleWordMastered, 
    speakText 
  } = useProgress();

  const [activeCategory, setActiveCategory] = useState('Todos');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeMode, setActiveMode] = useState<'flashcards' | 'quiz' | 'dictionary'>('flashcards');

  // Flashcards state
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  // AI Sentence Generator state
  const [selectedWordForAi, setSelectedWordForAi] = useState<VocabularyWord | null>(null);
  const [aiGeneratedSentences, setAiGeneratedSentences] = useState<string[]>([]);
  const [isAiGeneratingSentence, setIsAiGeneratingSentence] = useState(false);

  // Quiz state
  const [quizScore, setQuizScore] = useState(0);
  const [quizCurrentIndex, setQuizCurrentIndex] = useState(0);
  const [quizSelectedOption, setQuizSelectedOption] = useState<string | null>(null);
  const [isQuizAnswerSubmitted, setIsQuizAnswerSubmitted] = useState(false);

  const filteredWords = useMemo(() => {
    return VOCABULARY_LIST.filter((w) => {
      const matchesCat = activeCategory === 'Todos' || w.category === activeCategory;
      const matchesSearch =
        w.word.toLowerCase().includes(searchQuery.toLowerCase()) ||
        w.translation.toLowerCase().includes(searchQuery.toLowerCase()) ||
        w.exampleSentence.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCat && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  const currentFlashcard = filteredWords[currentCardIndex % (filteredWords.length || 1)] || VOCABULARY_LIST[0];

  const handleNextCard = () => {
    setIsFlipped(false);
    setCurrentCardIndex((prev) => (prev + 1) % filteredWords.length);
  };

  const handlePrevCard = () => {
    setIsFlipped(false);
    setCurrentCardIndex((prev) => (prev - 1 + filteredWords.length) % filteredWords.length);
  };

  // Generate AI Sentences for word
  const handleGenerateAiSentence = async (word: VocabularyWord) => {
    setSelectedWordForAi(word);
    setIsAiGeneratingSentence(true);
    try {
      const res = await fetch('/api/gemini/correct', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          text: `Create 3 distinct, practical conversation sentences in English using the word "${word.word}" (${word.translation}) with Brazilian Portuguese translations.`,
          task: 'generate-sentences'
        })
      });

      if (!res.ok) throw new Error('Falha ao gerar');
      const data = await res.json();
      setAiGeneratedSentences([
        data.correctedText || `1. I always keep my ${word.word} organized. (Eu sempre mantenho meu ${word.translation} organizado.)`,
        `2. Can you show me how to use the ${word.word}? (Você pode me mostrar como usar?)`,
        `3. This is the most efficient ${word.word} we have. (Este é o mais eficiente que temos.)`
      ]);
    } catch (e) {
      console.error(e);
      setAiGeneratedSentences([
        `1. I use my ${word.word} every single day at work. (Eu uso todos os dias no trabalho.)`,
        `2. Do you know where the ${word.word} is? (Você sabe onde está?)`,
        `3. That was an extraordinary ${word.word}! (Foi extraordinário!)`
      ]);
    } finally {
      setIsAiGeneratingSentence(false);
    }
  };

  // Generate 4 Quiz Options for current quiz word
  const quizCurrentWord = filteredWords[quizCurrentIndex % (filteredWords.length || 1)] || VOCABULARY_LIST[0];
  
  const quizOptions = useMemo(() => {
    if (!quizCurrentWord) return [];
    const wrongOptions = VOCABULARY_LIST
      .filter((w) => w.id !== quizCurrentWord.id)
      .sort(() => 0.5 - Math.random())
      .slice(0, 3)
      .map((w) => w.translation);
    
    return [quizCurrentWord.translation, ...wrongOptions].sort(() => 0.5 - Math.random());
  }, [quizCurrentWord]);

  const handleSelectQuizOption = (opt: string) => {
    if (isQuizAnswerSubmitted) return;
    setQuizSelectedOption(opt);
    setIsQuizAnswerSubmitted(true);
    if (opt === quizCurrentWord.translation) {
      setQuizScore((prev) => prev + 10);
      toggleWordMastered(quizCurrentWord.id);
    }
  };

  const handleNextQuizQuestion = () => {
    setIsQuizAnswerSubmitted(false);
    setQuizSelectedOption(null);
    setQuizCurrentIndex((prev) => (prev + 1) % filteredWords.length);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      
      {/* Header Banner */}
      <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm relative overflow-hidden">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="flex items-center space-x-2">
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 text-blue-700 border border-blue-200 flex items-center space-x-1">
                <Layers className="w-3.5 h-3.5" />
                <span>Lista Oficial de Palavras</span>
              </span>
              <span className="text-xs text-slate-500">{VOCABULARY_LIST.length} Palavras Selecionadas</span>
            </div>

            <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              Vocabulary Training & Flashcards
            </h1>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Treine vocabulário de alta frequência com flashcards interativos, áudio fonético nativo, quiz de retenção e gerador de frases contextualizadas com IA.
            </p>
          </div>

          {/* Mastery Progress Card */}
          <div className="w-full lg:w-auto bg-slate-50 border border-slate-200 rounded-xl p-5 sm:min-w-[280px] shadow-sm space-y-3">
            <div className="flex items-center justify-between text-xs">
              <span className="text-slate-600">Palavras Dominadas</span>
              <span className="font-bold text-emerald-600">{masteredWordIds.length} de {VOCABULARY_LIST.length}</span>
            </div>

            <div className="w-full bg-slate-200 rounded-full h-2 overflow-hidden">
              <div 
                className="bg-emerald-500 h-2 rounded-full transition-all duration-500"
                style={{ width: `${Math.round((masteredWordIds.length / VOCABULARY_LIST.length) * 100)}%` }}
              />
            </div>

            <div className="flex items-center justify-between pt-1 text-xs text-slate-500">
              <span>Em aprendizado: <strong className="text-slate-800">{learnedWordIds.length}</strong></span>
              <span className="font-medium text-slate-700">{Math.round((masteredWordIds.length / VOCABULARY_LIST.length) * 100)}% concluído</span>
            </div>
          </div>
        </div>
      </div>

      {/* Mode Selector & Filter Bar */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        
        {/* Mode Switcher */}
        <div className="flex items-center space-x-1 bg-slate-200/70 p-1.5 rounded-xl border border-slate-300/60 w-full sm:w-auto">
          <button
            onClick={() => setActiveMode('flashcards')}
            className={`flex-1 sm:flex-initial px-4 py-2 rounded-lg text-xs font-semibold transition-all ${
              activeMode === 'flashcards'
                ? 'bg-blue-600 text-white shadow-sm'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Modo Flashcards
          </button>

          <button
            onClick={() => setActiveMode('quiz')}
            className={`flex-1 sm:flex-initial px-4 py-2 rounded-lg text-xs font-semibold transition-all ${
              activeMode === 'quiz'
                ? 'bg-blue-600 text-white shadow-sm'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Quiz de Retenção
          </button>

          <button
            onClick={() => setActiveMode('dictionary')}
            className={`flex-1 sm:flex-initial px-4 py-2 rounded-lg text-xs font-semibold transition-all ${
              activeMode === 'dictionary'
                ? 'bg-blue-600 text-white shadow-sm'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Dicionário Completo
          </button>
        </div>

        {/* Search */}
        <div className="relative w-full sm:w-72">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Buscar palavra ou tradução..."
            className="w-full pl-9 pr-3 py-2 rounded-xl bg-white border border-slate-200 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 shadow-sm"
          />
        </div>
      </div>

      {/* Category Chips */}
      <div className="flex items-center space-x-2 overflow-x-auto pb-1 scrollbar-thin">
        {VOCABULARY_CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => {
              setActiveCategory(cat);
              setCurrentCardIndex(0);
            }}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-all ${
              activeCategory === cat
                ? 'bg-blue-600 text-white shadow-sm'
                : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50 hover:text-slate-900'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* MODE 1: FLASHCARDS */}
      {activeMode === 'flashcards' && (
        <div className="max-w-xl mx-auto space-y-6">
          
          {/* Card Component */}
          <div
            onClick={() => setIsFlipped(!isFlipped)}
            className="w-full min-h-[320px] bg-white border border-slate-200 rounded-2xl p-8 shadow-sm flex flex-col justify-between items-center text-center cursor-pointer hover:border-blue-300 hover:shadow-md transition-all select-none relative group"
          >
            <div className="w-full flex items-center justify-between text-xs text-slate-400">
              <span className="font-mono">{currentCardIndex + 1} de {filteredWords.length}</span>
              <span className="px-2.5 py-0.5 rounded-md bg-blue-50 text-blue-700 font-medium border border-blue-100">
                {currentFlashcard.category}
              </span>
            </div>

            {/* Front & Back Content */}
            {!isFlipped ? (
              <div className="space-y-3 my-auto">
                <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-wide">
                  {currentFlashcard.word}
                </h2>
                <p className="text-sm font-mono text-blue-600 font-medium">
                  /{currentFlashcard.phonetic}/
                </p>
                <div className="inline-flex items-center space-x-1 text-xs text-slate-500 bg-slate-50 px-3 py-1.5 rounded-full border border-slate-200">
                  <RotateCw className="w-3 h-3 text-blue-500" />
                  <span>Clique para ver a tradução e exemplo</span>
                </div>
              </div>
            ) : (
              <div className="space-y-3 my-auto animate-fadeIn">
                <span className="text-xs font-bold text-emerald-600 uppercase tracking-wider">Tradução</span>
                <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
                  {currentFlashcard.translation}
                </h2>
                <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 text-xs text-slate-700 max-w-md">
                  <p className="font-semibold text-slate-900 mb-1">"{currentFlashcard.exampleSentence}"</p>
                  <p className="text-slate-500 italic">"{currentFlashcard.exampleTranslation}"</p>
                </div>
              </div>
            )}

            {/* Card Footer Actions */}
            <div className="w-full flex items-center justify-between pt-4 border-t border-slate-100">
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  speakText(currentFlashcard.word);
                }}
                className="p-2 px-3 rounded-lg bg-slate-50 hover:bg-slate-100 text-slate-700 border border-slate-200 transition-colors flex items-center space-x-1.5 text-xs font-medium"
                title="Ouvir Áudio"
              >
                <Volume2 className="w-4 h-4 text-blue-600" />
                <span>Ouvir</span>
              </button>

              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  toggleWordMastered(currentFlashcard.id);
                }}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold border transition-all flex items-center space-x-1.5 ${
                  masteredWordIds.includes(currentFlashcard.id)
                    ? 'bg-emerald-50 text-emerald-700 border-emerald-200'
                    : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50'
                }`}
              >
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                <span>{masteredWordIds.includes(currentFlashcard.id) ? 'Dominada' : 'Marcar Dominada'}</span>
              </button>
            </div>
          </div>

          {/* Stepper Controls */}
          <div className="flex items-center justify-center space-x-4">
            <button
              onClick={handlePrevCard}
              className="px-5 py-2.5 rounded-lg bg-white hover:bg-slate-50 text-slate-700 text-xs font-semibold border border-slate-200 shadow-sm transition-colors"
            >
              Anterior
            </button>
            <button
              onClick={handleNextCard}
              className="px-6 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold shadow-sm transition-all flex items-center space-x-1.5"
            >
              <span>Próximo Flashcard</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>
      )}

      {/* MODE 2: RETENTION QUIZ */}
      {activeMode === 'quiz' && (
        <div className="max-w-xl mx-auto bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 space-y-6 shadow-sm">
          <div className="flex items-center justify-between border-b border-slate-100 pb-4">
            <div>
              <h2 className="font-bold text-lg text-slate-900">Quiz Rápido de Retenção</h2>
              <p className="text-xs text-slate-500">Qual a tradução correta da palavra em destaque?</p>
            </div>
            <div className="text-right">
              <span className="text-xs text-slate-500">Pontuação:</span>
              <div className="text-base font-bold text-emerald-600 font-mono">{quizScore} pts</div>
            </div>
          </div>

          {/* Word prompt */}
          <div className="text-center py-6 bg-slate-50 rounded-xl border border-slate-200 space-y-2">
            <h3 className="text-3xl font-bold text-slate-900">{quizCurrentWord.word}</h3>
            <p className="text-xs font-mono text-blue-600 font-medium">/{quizCurrentWord.phonetic}/</p>
          </div>

          {/* 4 Choices */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {quizOptions.map((opt, idx) => {
              const isSelected = quizSelectedOption === opt;
              const isCorrect = opt === quizCurrentWord.translation;

              return (
                <button
                  key={idx}
                  disabled={isQuizAnswerSubmitted}
                  onClick={() => handleSelectQuizOption(opt)}
                  className={`p-4 rounded-xl text-left text-xs font-semibold transition-all border ${
                    isQuizAnswerSubmitted && isCorrect
                      ? 'bg-emerald-50 border-emerald-500 text-emerald-800'
                      : isQuizAnswerSubmitted && isSelected && !isCorrect
                      ? 'bg-rose-50 border-rose-500 text-rose-800'
                      : 'bg-slate-50 hover:bg-slate-100 border-slate-200 text-slate-800'
                  }`}
                >
                  <span className="font-mono text-slate-400 mr-2">{String.fromCharCode(65 + idx)})</span>
                  {opt}
                </button>
              );
            })}
          </div>

          {/* Next Button */}
          {isQuizAnswerSubmitted && (
            <div className="flex items-center justify-between pt-4 border-t border-slate-100">
              <div className="text-xs">
                {quizSelectedOption === quizCurrentWord.translation ? (
                  <span className="text-emerald-600 font-bold">Correto! +10 pontos</span>
                ) : (
                  <span className="text-rose-600 font-bold">A tradução correta é: {quizCurrentWord.translation}</span>
                )}
              </div>

              <button
                onClick={handleNextQuizQuestion}
                className="px-5 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold shadow-sm transition-all flex items-center space-x-1.5"
              >
                <span>Próxima Pergunta</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          )}
        </div>
      )}

      {/* MODE 3: FULL DICTIONARY & AI SENTENCE BUILDER */}
      {activeMode === 'dictionary' && (
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredWords.map((word) => {
              const isMastered = masteredWordIds.includes(word.id);

              return (
                <div
                  key={word.id}
                  className="bg-white border border-slate-200 rounded-xl p-5 space-y-3 hover:border-blue-300 hover:shadow-sm transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[11px] font-medium px-2.5 py-0.5 rounded-md bg-blue-50 text-blue-700 border border-blue-100">
                        {word.category}
                      </span>

                      <button
                        onClick={() => speakText(word.word)}
                        className="p-1.5 rounded-md bg-slate-50 hover:bg-slate-100 text-slate-500 hover:text-blue-600"
                        title="Ouvir"
                      >
                        <Volume2 className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    <h4 className="text-lg font-bold text-slate-900">{word.word}</h4>
                    <p className="text-xs font-semibold text-slate-700 mb-2">{word.translation}</p>
                    <p className="text-xs text-slate-500 italic">"{word.exampleSentence}"</p>
                  </div>

                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                    <button
                      onClick={() => handleGenerateAiSentence(word)}
                      className="text-xs text-blue-600 hover:text-blue-800 font-semibold flex items-center space-x-1"
                    >
                      <Sparkles className="w-3 h-3" />
                      <span>Gerar Frases IA</span>
                    </button>

                    <button
                      onClick={() => toggleWordMastered(word.id)}
                      className={`text-xs p-1 rounded-md ${
                        isMastered ? 'text-emerald-600' : 'text-slate-300 hover:text-slate-600'
                      }`}
                      title={isMastered ? 'Palavra Dominada' : 'Marcar como Dominada'}
                    >
                      <CheckCircle2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* AI Sentences Modal / Drawer */}
          {selectedWordForAi && (
            <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4">
              <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 max-w-lg w-full space-y-5 shadow-2xl animate-fadeIn">
                <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                  <div className="flex items-center space-x-2 text-blue-600">
                    <Sparkles className="w-5 h-5" />
                    <h3 className="font-bold text-base text-slate-900">
                      Exemplos Práticos com "{selectedWordForAi.word}"
                    </h3>
                  </div>
                  <button
                    onClick={() => setSelectedWordForAi(null)}
                    className="p-1 text-slate-400 hover:text-slate-600"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {isAiGeneratingSentence ? (
                  <div className="text-center py-8 text-slate-500 space-y-2">
                    <Zap className="w-8 h-8 text-blue-600 animate-bounce mx-auto" />
                    <p className="text-xs">Gerando frases de conversação natural com Gemini...</p>
                  </div>
                ) : (
                  <div className="space-y-3">
                    {aiGeneratedSentences.map((s, idx) => (
                      <div key={idx} className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-800 flex items-start justify-between gap-2">
                        <span>{s}</span>
                        <button
                          onClick={() => speakText(s.split('(')[0])}
                          className="p-1 text-slate-400 hover:text-blue-600 shrink-0"
                          title="Ouvir Frase"
                        >
                          <Volume2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    ))}
                  </div>
                )}

                <button
                  onClick={() => setSelectedWordForAi(null)}
                  className="w-full py-2.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-semibold transition-colors"
                >
                  Fechar
                </button>
              </div>
            </div>
          )}
        </div>
      )}

    </div>
  );
};
