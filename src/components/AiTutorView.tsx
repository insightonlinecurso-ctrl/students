import React, { useState, useRef, useEffect } from 'react';
import { 
  Sparkles, 
  Send, 
  Bot, 
  User, 
  Volume2, 
  RefreshCw, 
  CheckCircle2, 
  HelpCircle, 
  Lightbulb, 
  Briefcase, 
  Plane, 
  Coffee,
  MessageSquare
} from 'lucide-react';
import { useProgress } from '../context/ProgressContext';

interface ChatMessage {
  id: string;
  sender: 'ai' | 'user';
  text: string;
  timestamp: string;
}

const ROLEPLAY_SCENARIOS = [
  {
    title: "Job Interview in Tech",
    icon: Briefcase,
    prompt: "Hello! I am Mr. Harrison, the senior hiring manager. Thank you for coming today. To start our interview, could you please tell me about yourself and your professional background?"
  },
  {
    title: "Ordering at a London Cafe",
    icon: Coffee,
    prompt: "Good morning, welcome to Crown Coffee London! What can I get started for you today? We have freshly baked scones and our famous English breakfast tea."
  },
  {
    title: "Airport Check-in & Security",
    icon: Plane,
    prompt: "Good afternoon, sir/madam. May I please see your passport and flight booking reference? Are you checking in any luggage today?"
  }
];

export const AiTutorView: React.FC = () => {
  const { speakText } = useProgress();
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'm-1',
      sender: 'ai',
      text: "Hello! I am your Insight English AI Tutor. I can answer any grammar question, correct your sentences, explain tricky rules in Portuguese, or practice real conversational English with you. What would you like to practice today?",
      timestamp: "Agora"
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  const handleSendMessage = async (customPrompt?: string) => {
    const textToSend = customPrompt || inputText;
    if (!textToSend.trim() || isLoading) return;

    const userMessage: ChatMessage = {
      id: `usr_${Date.now()}`,
      sender: 'user',
      text: textToSend,
      timestamp: new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })
    };

    setMessages((prev) => [...prev, userMessage]);
    if (!customPrompt) setInputText('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/gemini/tutor-chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: textToSend,
          history: messages.map((m) => ({
            role: m.sender === 'user' ? 'user' : 'model',
            text: m.text
          }))
        })
      });

      if (!response.ok) throw new Error('Falha no servidor');
      const data = await response.json();

      const aiReply: ChatMessage = {
        id: `ai_${Date.now()}`,
        sender: 'ai',
        text: data.reply || "Great job practicing! Let's continue.",
        timestamp: new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })
      };

      setMessages((prev) => [...prev, aiReply]);
    } catch (err) {
      console.error(err);
      const fallbackReply: ChatMessage = {
        id: `ai_${Date.now()}`,
        sender: 'ai',
        text: "That was a great attempt! In natural English, you can also say: 'I am looking forward to mastering English with Insight English.' How else can I help you?",
        timestamp: new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })
      };
      setMessages((prev) => [...prev, fallbackReply]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleStartRoleplay = (scenario: typeof ROLEPLAY_SCENARIOS[0]) => {
    const roleplayStart: ChatMessage = {
      id: `ai_${Date.now()}`,
      sender: 'ai',
      text: `[Cenário: ${scenario.title}]\n\n${scenario.prompt}`,
      timestamp: new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })
    };
    setMessages((prev) => [...prev, roleplayStart]);
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
      
      {/* Header */}
      <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="space-y-2">
          <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 text-blue-700 border border-blue-200">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Tutor Inteligente de Conversação</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
            Laboratório de Fluência & IA Tutor
          </h1>
          <p className="text-xs sm:text-sm text-slate-600">
            Converse em tempo real, tire dúvidas sobre as 30 unidades e simule situações do dia a dia.
          </p>
        </div>

        {/* Quick Roleplay Buttons */}
        <div className="flex flex-wrap gap-2">
          {ROLEPLAY_SCENARIOS.map((sc, idx) => {
            const Icon = sc.icon;
            return (
              <button
                key={idx}
                onClick={() => handleStartRoleplay(sc)}
                className="flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-slate-50 hover:bg-slate-100 text-slate-700 hover:text-blue-700 text-xs font-semibold border border-slate-200 transition-colors"
              >
                <Icon className="w-3.5 h-3.5 text-blue-600" />
                <span>{sc.title}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Chat Container */}
      <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm flex flex-col h-[560px]">
        
        {/* Messages Scroll Area */}
        <div className="flex-1 overflow-y-auto space-y-4 pr-2 scrollbar-thin">
          {messages.map((msg) => {
            const isAi = msg.sender === 'ai';

            return (
              <div
                key={msg.id}
                className={`flex items-start space-x-3 ${isAi ? '' : 'flex-row-reverse space-x-reverse'}`}
              >
                {/* Avatar */}
                <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${
                  isAi ? 'bg-blue-600 text-white shadow-sm' : 'bg-slate-700 text-white'
                }`}>
                  {isAi ? <Bot className="w-4 h-4" /> : <User className="w-4 h-4" />}
                </div>

                {/* Message Bubble */}
                <div className={`max-w-xl rounded-2xl p-4 text-xs sm:text-sm space-y-1.5 ${
                  isAi 
                    ? 'bg-slate-50 border border-slate-200 text-slate-800' 
                    : 'bg-blue-600 text-white shadow-sm'
                }`}>
                  <p className="whitespace-pre-line leading-relaxed">{msg.text}</p>
                  
                  <div className={`flex items-center justify-between pt-1 text-[10px] ${isAi ? 'text-slate-400' : 'text-blue-100'}`}>
                    <span>{msg.timestamp}</span>
                    {isAi && (
                      <button
                        onClick={() => speakText(msg.text)}
                        className="hover:text-blue-600 p-0.5"
                        title="Ouvir Áudio"
                      >
                        <Volume2 className="w-3.5 h-3.5" />
                      </button>
                    )}
                  </div>
                </div>
              </div>
            );
          })}

          {isLoading && (
            <div className="flex items-center space-x-2 text-xs text-slate-500 p-3 bg-slate-50 rounded-xl border border-slate-200 max-w-xs">
              <RefreshCw className="w-3.5 h-3.5 animate-spin text-blue-600" />
              <span>O Tutor está digitando a resposta...</span>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Input Bar */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSendMessage();
          }}
          className="mt-4 pt-4 border-t border-slate-100 flex items-center space-x-2"
        >
          <input
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder="Type your message in English or ask a grammar question in Portuguese..."
            className="flex-1 px-4 py-2.5 rounded-xl bg-white border border-slate-300 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 shadow-sm"
          />

          <button
            type="submit"
            disabled={isLoading || !inputText.trim()}
            className="p-2.5 px-4 rounded-xl bg-blue-600 hover:bg-blue-700 disabled:opacity-50 text-white shadow-sm transition-all shrink-0 flex items-center justify-center"
          >
            <Send className="w-4 h-4" />
          </button>
        </form>

      </div>

    </div>
  );
};
