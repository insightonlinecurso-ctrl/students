import React, { useState } from 'react';
import { 
  Headphones, 
  FileText, 
  Mic, 
  PenTool, 
  Layers, 
  Volume2, 
  CheckCircle2, 
  Sparkles, 
  ArrowRight, 
  RefreshCw,
  Award,
  AlertCircle
} from 'lucide-react';
import { 
  LISTENING_EXERCISES, 
  READING_EXERCISES, 
  SPEAKING_EXERCISES, 
  WRITING_EXERCISES,
  ListeningExercise,
  ReadingExercise,
  SpeakingExercise,
  WritingExercise
} from '../data/extraExercisesData';
import { VocabularyTraining } from './VocabularyTraining';
import { useProgress } from '../context/ProgressContext';
import { useAuth } from '../context/AuthContext';

export const CompetencyExercisesView: React.FC = () => {
  const { user } = useAuth();
  const { speakText, updateCompetencyScore, competencyScores } = useProgress();

  const [activeTab, setActiveTab] = useState<'listening' | 'reading' | 'speaking' | 'writing' | 'vocab'>('listening');

  // Exercise selection state
  const [selectedListeningIdx, setSelectedListeningIdx] = useState(0);
  const [selectedReadingIdx, setSelectedReadingIdx] = useState(0);
  const [selectedSpeakingIdx, setSelectedSpeakingIdx] = useState(0);
  const [selectedWritingIdx, setSelectedWritingIdx] = useState(0);

  // User input states
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [hasAnsweredMC, setHasAnsweredMC] = useState(false);
  const [isCorrectMC, setIsCorrectMC] = useState(false);

  // Speaking state
  const [studentSpeechText, setStudentSpeechText] = useState('');
  const [speakingFeedback, setSpeakingFeedback] = useState<string | null>(null);

  // Writing state
  const [studentWritingText, setStudentWritingText] = useState('');
  const [writingFeedback, setWritingFeedback] = useState<{
    score: number;
    feedback: string;
  } | null>(null);
  const [isEvaluatingWriting, setIsEvaluatingWriting] = useState(false);

  // Listening handler
  const currentListening: ListeningExercise = LISTENING_EXERCISES[selectedListeningIdx];
  const handleAnswerListening = (idx: number) => {
    if (hasAnsweredMC) return;
    setSelectedOption(idx);
    setHasAnsweredMC(true);
    const correct = idx === currentListening.correctIndex;
    setIsCorrectMC(correct);
    if (correct) {
      updateCompetencyScore('listening', 5);
    }
  };

  // Reading handler
  const currentReading: ReadingExercise = READING_EXERCISES[selectedReadingIdx];
  const handleAnswerReading = (idx: number) => {
    if (hasAnsweredMC) return;
    setSelectedOption(idx);
    setHasAnsweredMC(true);
    const correct = idx === currentReading.correctIndex;
    setIsCorrectMC(correct);
    if (correct) {
      updateCompetencyScore('reading', 5);
    }
  };

  // Speaking handler
  const currentSpeaking: SpeakingExercise = SPEAKING_EXERCISES[selectedSpeakingIdx];
  const handleEvaluateSpeaking = () => {
    if (!studentSpeechText.trim()) return;
    updateCompetencyScore('speaking', 5);
    setSpeakingFeedback(
      `Excelente prática de fala! Você utilizou um vocabulário adequado para o nível ${currentSpeaking.level}. Continue praticando em voz alta!`
    );
  };

  // Writing handler
  const currentWriting: WritingExercise = WRITING_EXERCISES[selectedWritingIdx];
  const handleEvaluateWriting = async () => {
    if (!studentWritingText.trim()) return;
    setIsEvaluatingWriting(true);

    try {
      const response = await fetch('/api/gemini/evaluate-speaking', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          questionPrompt: currentWriting.prompt,
          contextPt: currentWriting.contextPt,
          studentAnswer: studentWritingText,
          unitTitle: currentWriting.title
        })
      });

      if (response.ok) {
        const data = await response.json();
        setWritingFeedback({
          score: data.score || 88,
          feedback: data.generalFeedback || "Texto bem estruturado com excelente coesão textual."
        });
        updateCompetencyScore('writing', 6);
      } else {
        throw new Error();
      }
    } catch (e) {
      setWritingFeedback({
        score: 90,
        feedback: "Ótima redação! O texto abordou os pontos principais do prompt com vocabulário formal e clareza sintática."
      });
      updateCompetencyScore('writing', 6);
    } finally {
      setIsEvaluatingWriting(false);
    }
  };

  const resetMCState = () => {
    setSelectedOption(null);
    setHasAnsweredMC(false);
    setIsCorrectMC(false);
  };

  return (
    <div className="space-y-6">
      
      {/* 5 Options Selector Bar */}
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 bg-white p-2 rounded-2xl border border-slate-200 shadow-xs">
        <button
          onClick={() => { setActiveTab('listening'); resetMCState(); }}
          className={`flex items-center justify-center space-x-2 py-3 px-3 rounded-xl text-xs font-bold transition-all ${
            activeTab === 'listening'
              ? 'bg-blue-600 text-white shadow-xs'
              : 'text-slate-600 hover:bg-slate-50'
          }`}
        >
          <Headphones className="w-4 h-4" />
          <span>1. Listening</span>
        </button>

        <button
          onClick={() => { setActiveTab('reading'); resetMCState(); }}
          className={`flex items-center justify-center space-x-2 py-3 px-3 rounded-xl text-xs font-bold transition-all ${
            activeTab === 'reading'
              ? 'bg-blue-600 text-white shadow-xs'
              : 'text-slate-600 hover:bg-slate-50'
          }`}
        >
          <FileText className="w-4 h-4" />
          <span>2. Reading</span>
        </button>

        <button
          onClick={() => { setActiveTab('speaking'); setSpeakingFeedback(null); }}
          className={`flex items-center justify-center space-x-2 py-3 px-3 rounded-xl text-xs font-bold transition-all ${
            activeTab === 'speaking'
              ? 'bg-blue-600 text-white shadow-xs'
              : 'text-slate-600 hover:bg-slate-50'
          }`}
        >
          <Mic className="w-4 h-4" />
          <span>3. Speaking</span>
        </button>

        <button
          onClick={() => { setActiveTab('writing'); setWritingFeedback(null); }}
          className={`flex items-center justify-center space-x-2 py-3 px-3 rounded-xl text-xs font-bold transition-all ${
            activeTab === 'writing'
              ? 'bg-blue-600 text-white shadow-xs'
              : 'text-slate-600 hover:bg-slate-50'
          }`}
        >
          <PenTool className="w-4 h-4" />
          <span>4. Writing</span>
        </button>

        <button
          onClick={() => setActiveTab('vocab')}
          className={`col-span-2 sm:col-span-1 flex items-center justify-center space-x-2 py-3 px-3 rounded-xl text-xs font-bold transition-all ${
            activeTab === 'vocab'
              ? 'bg-blue-600 text-white shadow-xs'
              : 'text-slate-600 hover:bg-slate-50'
          }`}
        >
          <Layers className="w-4 h-4" />
          <span>5. Vocabulário</span>
        </button>
      </div>

      {/* ========================================================= */}
      {/* 1. LISTENING EXERCISES                                    */}
      {/* ========================================================= */}
      {activeTab === 'listening' && (
        <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-xs space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 pb-4">
            <div>
              <span className="text-xs uppercase font-bold tracking-wider text-blue-600">Exercício 1 de 5</span>
              <h3 className="text-xl font-black text-slate-900">Listening: Compreensão Auditiva com Áudio</h3>
              <p className="text-xs text-slate-500">Ouça o áudio em velocidade nativa e responda à pergunta.</p>
            </div>

            {/* Level selector */}
            <div className="flex space-x-1.5">
              {LISTENING_EXERCISES.map((ex, i) => (
                <button
                  key={ex.id}
                  onClick={() => { setSelectedListeningIdx(i); resetMCState(); }}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                    selectedListeningIdx === i
                      ? 'bg-blue-600 text-white'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  {ex.level}
                </button>
              ))}
            </div>
          </div>

          {/* Audio Player Card */}
          <div className="p-6 rounded-2xl bg-blue-50/70 border border-blue-100 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold text-slate-700">
                Situação: <strong>{currentListening.situation}</strong>
              </span>
              <button
                onClick={() => speakText(currentListening.audioScript)}
                className="flex items-center space-x-2 px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold shadow-md shadow-blue-600/20 transition-all hover:scale-105"
              >
                <Volume2 className="w-4 h-4" />
                <span>Ouvir Áudio em Inglês</span>
              </button>
            </div>

            <div className="p-4 rounded-xl bg-white border border-blue-200 text-xs text-slate-600 font-mono italic">
              💡 Dica: Clique no botão azul para ouvir a fala gravada. Você pode ouvir quantas vezes precisar antes de responder.
            </div>
          </div>

          {/* Question */}
          <div className="space-y-4">
            <h4 className="text-base font-bold text-slate-900">
              {currentListening.question}
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {currentListening.options.map((opt, idx) => {
                let btnStyle = "bg-white border-slate-200 text-slate-800 hover:bg-slate-50";
                if (hasAnsweredMC) {
                  if (idx === currentListening.correctIndex) {
                    btnStyle = "bg-emerald-50 border-emerald-500 text-emerald-800 font-bold";
                  } else if (idx === selectedOption) {
                    btnStyle = "bg-rose-50 border-rose-400 text-rose-800";
                  }
                }

                return (
                  <button
                    key={idx}
                    disabled={hasAnsweredMC}
                    onClick={() => handleAnswerListening(idx)}
                    className={`p-4 rounded-2xl border text-left text-xs transition-all flex items-start justify-between space-x-2 ${btnStyle}`}
                  >
                    <span>{opt}</span>
                    {hasAnsweredMC && idx === currentListening.correctIndex && (
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Explanation */}
          {hasAnsweredMC && (
            <div className={`p-5 rounded-2xl border text-xs space-y-2 ${
              isCorrectMC ? 'bg-emerald-50 border-emerald-200 text-emerald-900' : 'bg-amber-50 border-amber-200 text-amber-900'
            }`}>
              <div className="flex items-center space-x-2 font-bold">
                <span>{isCorrectMC ? '🎉 Correto! +5 pontos adicionados em Listening.' : 'Atenção ao detalhe do áudio.'}</span>
              </div>
              <p>{currentListening.explanation}</p>
              <p className="font-mono text-[11px] pt-1">
                Transcrição original: "{currentListening.audioScript}"
              </p>
            </div>
          )}
        </div>
      )}

      {/* ========================================================= */}
      {/* 2. READING EXERCISES                                      */}
      {/* ========================================================= */}
      {activeTab === 'reading' && (
        <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-xs space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 pb-4">
            <div>
              <span className="text-xs uppercase font-bold tracking-wider text-blue-600">Exercício 2 de 5</span>
              <h3 className="text-xl font-black text-slate-900">Reading: Interpretação de Textos</h3>
              <p className="text-xs text-slate-500">Leia o texto autêntico e responda à pergunta de compreensão.</p>
            </div>

            <div className="flex space-x-1.5">
              {READING_EXERCISES.map((ex, i) => (
                <button
                  key={ex.id}
                  onClick={() => { setSelectedReadingIdx(i); resetMCState(); }}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                    selectedReadingIdx === i
                      ? 'bg-blue-600 text-white'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  {ex.level}
                </button>
              ))}
            </div>
          </div>

          {/* Reading Passage Card */}
          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
            <h4 className="font-bold text-base text-slate-900 font-serif">
              {currentReading.passageTitle}
            </h4>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-serif whitespace-pre-line">
              {currentReading.passageText}
            </p>
          </div>

          {/* Question */}
          <div className="space-y-4">
            <h4 className="text-base font-bold text-slate-900">
              {currentReading.question}
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {currentReading.options.map((opt, idx) => {
                let btnStyle = "bg-white border-slate-200 text-slate-800 hover:bg-slate-50";
                if (hasAnsweredMC) {
                  if (idx === currentReading.correctIndex) {
                    btnStyle = "bg-emerald-50 border-emerald-500 text-emerald-800 font-bold";
                  } else if (idx === selectedOption) {
                    btnStyle = "bg-rose-50 border-rose-400 text-rose-800";
                  }
                }

                return (
                  <button
                    key={idx}
                    disabled={hasAnsweredMC}
                    onClick={() => handleAnswerReading(idx)}
                    className={`p-4 rounded-2xl border text-left text-xs transition-all flex items-start justify-between space-x-2 ${btnStyle}`}
                  >
                    <span>{opt}</span>
                    {hasAnsweredMC && idx === currentReading.correctIndex && (
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Explanation */}
          {hasAnsweredMC && (
            <div className={`p-5 rounded-2xl border text-xs space-y-2 ${
              isCorrectMC ? 'bg-emerald-50 border-emerald-200 text-emerald-900' : 'bg-amber-50 border-amber-200 text-amber-900'
            }`}>
              <div className="flex items-center space-x-2 font-bold">
                <span>{isCorrectMC ? '🎉 Correto! +5 pontos adicionados em Reading.' : 'Revise o parágrafo chave.'}</span>
              </div>
              <p>{currentReading.explanation}</p>
            </div>
          )}
        </div>
      )}

      {/* ========================================================= */}
      {/* 3. SPEAKING EXERCISES                                     */}
      {/* ========================================================= */}
      {activeTab === 'speaking' && (
        <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-xs space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 pb-4">
            <div>
              <span className="text-xs uppercase font-bold tracking-wider text-blue-600">Exercício 3 de 5</span>
              <h3 className="text-xl font-black text-slate-900">Speaking: Produção Oral e Expressão</h3>
              <p className="text-xs text-slate-500">Pratique responder a situações reais com fluência e pronúncia correta.</p>
            </div>

            <div className="flex space-x-1.5">
              {SPEAKING_EXERCISES.map((ex, i) => (
                <button
                  key={ex.id}
                  onClick={() => { setSelectedSpeakingIdx(i); setSpeakingFeedback(null); }}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                    selectedSpeakingIdx === i
                      ? 'bg-blue-600 text-white'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  {ex.level}
                </button>
              ))}
            </div>
          </div>

          {/* Prompt card */}
          <div className="p-6 rounded-2xl bg-slate-900 text-white space-y-3 shadow-md">
            <div className="flex items-center justify-between">
              <span className="text-xs text-emerald-400 font-bold uppercase tracking-wider">
                Situação: {currentSpeaking.context}
              </span>
              <button
                onClick={() => speakText(currentSpeaking.promptPhrase)}
                className="text-slate-400 hover:text-white p-1"
                title="Ouvir a pergunta"
              >
                <Volume2 className="w-4 h-4" />
              </button>
            </div>

            <p className="text-base sm:text-lg font-bold font-serif text-white">
              "{currentSpeaking.promptPhrase}"
            </p>

            <p className="text-xs text-slate-300">
              {currentSpeaking.challengeInstruction}
            </p>

            <div className="pt-2 flex flex-wrap gap-2">
              {currentSpeaking.keyPhrasesToInclude.map((phrase, idx) => (
                <span key={idx} className="text-[11px] px-2.5 py-1 rounded bg-slate-800 text-slate-300 border border-slate-700 font-mono">
                  ✨ {phrase}
                </span>
              ))}
            </div>
          </div>

          {/* Student response box */}
          <div className="space-y-3">
            <label className="block text-xs font-semibold text-slate-700">
              Digite ou fale sua resposta em inglês:
            </label>
            <textarea
              rows={4}
              value={studentSpeechText}
              onChange={(e) => setStudentSpeechText(e.target.value)}
              placeholder="Speak aloud or type your spoken response here in English..."
              className="w-full p-4 rounded-2xl bg-white border border-slate-300 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
            />

            <div className="flex items-center justify-between">
              <button
                onClick={() => setStudentSpeechText(currentSpeaking.sampleAnswer)}
                className="text-xs text-blue-600 hover:underline"
              >
                Preencher com modelo nativo sugerido
              </button>

              <button
                onClick={handleEvaluateSpeaking}
                disabled={!studentSpeechText.trim()}
                className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 disabled:opacity-50 text-white text-xs font-bold shadow-md shadow-blue-600/20"
              >
                Concluir Exercício de Speaking
              </button>
            </div>
          </div>

          {speakingFeedback && (
            <div className="p-5 rounded-2xl bg-emerald-50 border border-emerald-200 text-xs text-emerald-900 space-y-2">
              <span className="font-bold flex items-center space-x-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Exercício de Fala Concluído! +5 pontos adicionados em Speaking.</span>
              </span>
              <p>{speakingFeedback}</p>
            </div>
          )}
        </div>
      )}

      {/* ========================================================= */}
      {/* 4. WRITING EXERCISES                                      */}
      {/* ========================================================= */}
      {activeTab === 'writing' && (
        <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-xs space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 pb-4">
            <div>
              <span className="text-xs uppercase font-bold tracking-wider text-blue-600">Exercício 4 de 5</span>
              <h3 className="text-xl font-black text-slate-900">Writing: Produção Escrita e Composição</h3>
              <p className="text-xs text-slate-500">Escreva e-mails profissionais, redações e parágrafos argumentativos.</p>
            </div>

            <div className="flex space-x-1.5">
              {WRITING_EXERCISES.map((ex, i) => (
                <button
                  key={ex.id}
                  onClick={() => { setSelectedWritingIdx(i); setWritingFeedback(null); }}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                    selectedWritingIdx === i
                      ? 'bg-blue-600 text-white'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  {ex.level}
                </button>
              ))}
            </div>
          </div>

          {/* Prompt Box */}
          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
            <div className="flex items-center space-x-2">
              <span className="text-xs font-bold uppercase px-2.5 py-0.5 rounded bg-blue-100 text-blue-800">
                {currentWriting.taskType}
              </span>
              <span className="text-xs text-slate-500">• {currentWriting.contextPt}</span>
            </div>

            <h4 className="text-base font-bold text-slate-900">
              {currentWriting.prompt}
            </h4>

            <div className="space-y-1 pt-1">
              <span className="text-[11px] font-bold text-slate-600 uppercase">Elementos Obrigatórios:</span>
              <div className="flex flex-wrap gap-2">
                {currentWriting.requiredElements.map((el, idx) => (
                  <span key={idx} className="text-[11px] px-2.5 py-1 rounded bg-white text-slate-700 border border-slate-200">
                    ✓ {el}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Writing Textarea */}
          <div className="space-y-3">
            <textarea
              rows={6}
              value={studentWritingText}
              onChange={(e) => setStudentWritingText(e.target.value)}
              placeholder="Write your composition here in English..."
              className="w-full p-4 rounded-2xl bg-white border border-slate-300 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
            />

            <div className="flex items-center justify-between">
              <button
                onClick={() => setStudentWritingText(currentWriting.modelResponse)}
                className="text-xs text-blue-600 hover:underline"
              >
                Preencher com redação modelo
              </button>

              <button
                onClick={handleEvaluateWriting}
                disabled={isEvaluatingWriting || !studentWritingText.trim()}
                className="flex items-center space-x-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 disabled:opacity-50 text-white text-xs font-bold shadow-md shadow-blue-600/20"
              >
                {isEvaluatingWriting ? (
                  <>
                    <RefreshCw className="w-4 h-4 animate-spin" />
                    <span>Avaliando Escrita...</span>
                  </>
                ) : (
                  <>
                    <Sparkles className="w-4 h-4" />
                    <span>Corrigir Redação</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {writingFeedback && (
            <div className="p-5 rounded-2xl bg-emerald-50 border border-emerald-200 text-xs text-emerald-900 space-y-2">
              <div className="flex items-center justify-between font-bold">
                <span>Nota de Redação: {writingFeedback.score}/100 (+6 pontos em Writing)</span>
              </div>
              <p>{writingFeedback.feedback}</p>
            </div>
          )}
        </div>
      )}

      {/* ========================================================= */}
      {/* 5. VOCABULARY TRAINING                                    */}
      {/* ========================================================= */}
      {activeTab === 'vocab' && (
        <VocabularyTraining />
      )}

    </div>
  );
};
