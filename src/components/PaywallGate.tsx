import React, { useState } from 'react';
import { 
  Lock, 
  CheckCircle2, 
  Sparkles, 
  BookOpen, 
  Calendar, 
  Layers, 
  ShieldCheck, 
  ArrowRight,
  GraduationCap,
  Star,
  UserPlus,
  X,
  Send
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { INSIGHT_HEADER_BANNER } from '../assets/brand';

interface PaywallGateProps {
  onOpenLogin: () => void;
}

export const PaywallGate: React.FC<PaywallGateProps> = ({ onOpenLogin }) => {
  const { login, quickDemoLogin, requestAccess } = useAuth();
  const [customEmail, setCustomEmail] = useState('');
  const [customName, setCustomName] = useState('');

  // Request Access Modal State
  const [isRequestModalOpen, setIsRequestModalOpen] = useState(false);
  const [reqName, setReqName] = useState('');
  const [reqEmail, setReqEmail] = useState('');
  const [reqPhone, setReqPhone] = useState('');
  const [reqNotes, setReqNotes] = useState('');
  const [reqSuccess, setReqSuccess] = useState(false);

  const handleCustomLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (customEmail) {
      login(customEmail, customName || 'Aluno Insight');
    }
  };

  const handleRequestSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (reqEmail && reqName) {
      // Dispara o registro centralizado que sincroniza imediatamente com o Painel Admin do Carlos
      requestAccess({
        name: reqName,
        email: reqEmail,
        phone: reqPhone,
        notes: reqNotes
      });

      setReqSuccess(true);
      setTimeout(() => {
        setIsRequestModalOpen(false);
        setReqSuccess(false);
        setReqName('');
        setReqEmail('');
        setReqPhone('');
        setReqNotes('');
      }, 2500);
    }
  };

  return (
    <div className="min-h-[85vh] bg-slate-50 text-slate-900 flex flex-col justify-center items-center px-4 py-12">
      <div className="max-w-4xl w-full">
        
        {/* Header Hero */}
        <div className="text-center space-y-6 mb-12">
          {/* Official Insight Header Banner */}
          <div className="max-w-xl mx-auto overflow-hidden rounded-3xl shadow-lg border border-slate-300/80 bg-[#8897a2] transition-transform hover:scale-[1.01]">
            <img 
              src={INSIGHT_HEADER_BANNER} 
              alt="Insight English - Origami Header"
              referrerPolicy="no-referrer"
              className="w-full h-auto object-cover max-h-48 sm:max-h-56"
            />
          </div>

          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold uppercase tracking-wider">
            <Lock className="w-3.5 h-3.5" />
            <span>Área Exclusiva para Alunos Matriculados</span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
            Insight English <span className="text-blue-600">Planos Novos</span>
          </h1>

          <p className="max-w-2xl mx-auto text-slate-600 text-base sm:text-lg leading-relaxed">
            O material estruturado completo com 30 unidades gramaticais, distribuição horária personalizada no Planner, treinamento avançado de vocabulário e avaliação com Inteligência Artificial.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm relative overflow-hidden group hover:border-blue-300 hover:shadow-md transition-all">
            <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600 mb-4">
              <BookOpen className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-lg text-slate-900 mb-2">Material Completo (30 Unidades)</h3>
            <p className="text-sm text-slate-500 leading-relaxed">
              Do Verbo To Be ao Third Conditional com explicações diretas, regras chave, histórias ilustradas e 10 exercícios por unidade com correção imediata.
            </p>
          </div>

          <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm relative overflow-hidden group hover:border-blue-300 hover:shadow-md transition-all">
            <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600 mb-4">
              <Calendar className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-lg text-slate-900 mb-2">Smart Planner de Estudos</h3>
            <p className="text-sm text-slate-500 leading-relaxed">
              Cronograma inteligente baseado na carga horária oficial de cada ponto gramatical (68h totais) adaptado ao seu ritmo semanal de estudos.
            </p>
          </div>

          <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm relative overflow-hidden group hover:border-blue-300 hover:shadow-md transition-all">
            <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600 mb-4">
              <Layers className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-lg text-slate-900 mb-2">Vocabulary & AI Speaking</h3>
            <p className="text-sm text-slate-500 leading-relaxed">
              Flashcards, quiz de soletração com a Lista Oficial de Palavras e laboratório de pronúncia e redação corrigido em tempo real pelo Gemini.
            </p>
          </div>
        </div>

        {/* Login Box */}
        <div className="bg-white border border-slate-200 rounded-2xl p-8 sm:p-10 shadow-sm relative">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            
            <div className="space-y-4 max-w-md">
              <div className="flex items-center space-x-2 text-blue-600">
                <Star className="w-4 h-4 fill-blue-600" />
                <span className="text-xs font-bold uppercase tracking-wider">Acesso Imediato</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
                Já é aluno matriculado?
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                Faça login com o e-mail cadastrado na sua matrícula para desbloquear todas as 30 unidades, videoaulas e o seu Planner personalizado.
              </p>

              <div className="space-y-2 pt-2">
                <div className="flex items-center space-x-2 text-xs text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                  <span>30 Unidades com 300+ exercícios corrigidos na hora</span>
                </div>
                <div className="flex items-center space-x-2 text-xs text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                  <span>Planner com cálculo automático de horas de estudo</span>
                </div>
                <div className="flex items-center space-x-2 text-xs text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                  <span>Feedback instantâneo de conversação com IA</span>
                </div>
              </div>
            </div>

            {/* Login Form or Quick Demo */}
            <div className="w-full md:w-80 bg-slate-50 p-6 rounded-xl border border-slate-200 shadow-sm">
              <form onSubmit={handleCustomLogin} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                    Nome do Aluno
                  </label>
                  <input
                    type="text"
                    value={customName}
                    onChange={(e) => setCustomName(e.target.value)}
                    placeholder="Seu nome completo"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-slate-300 text-sm text-slate-900 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 shadow-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                    E-mail do Aluno
                  </label>
                  <input
                    type="email"
                    required
                    value={customEmail}
                    onChange={(e) => setCustomEmail(e.target.value)}
                    placeholder="aluno@email.com"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-slate-300 text-sm text-slate-900 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 shadow-sm"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-2.5 px-4 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm shadow-sm transition-all flex items-center justify-center space-x-2"
                >
                  <span>Entrar na Plataforma</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>

              <div className="mt-4 pt-4 border-t border-slate-200 text-center">
                <button
                  type="button"
                  id="btn-request-access"
                  onClick={() => setIsRequestModalOpen(true)}
                  className="w-full py-2.5 px-3 rounded-lg bg-white hover:bg-slate-100 text-slate-700 text-xs font-semibold border border-slate-300 transition-colors flex items-center justify-center space-x-1.5 shadow-sm"
                >
                  <UserPlus className="w-3.5 h-3.5 text-blue-600" />
                  <span>Requisitar Acesso</span>
                </button>
              </div>
            </div>

          </div>
        </div>

      </div>

      {/* Modal de Requisitar Acesso */}
      {isRequestModalOpen && (
        <div className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 sm:p-7 shadow-2xl border border-slate-200 relative animate-fadeIn text-slate-900">
            <button
              onClick={() => setIsRequestModalOpen(false)}
              className="absolute top-4 right-4 p-1.5 text-slate-400 hover:text-slate-700 rounded-lg hover:bg-slate-100"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center space-x-2 text-blue-600 mb-2">
              <UserPlus className="w-5 h-5" />
              <span className="text-xs font-bold uppercase tracking-wider">Insight English Club</span>
            </div>

            <h3 className="text-xl font-bold text-slate-900 mb-1">
              Requisitar Acesso à Plataforma
            </h3>
            <p className="text-xs text-slate-600 mb-5 leading-relaxed">
              Informe seus dados para solicitar matrícula ou liberação do seu plano de estudos no Insight English Club.
            </p>

            {reqSuccess ? (
              <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-5 text-center space-y-2">
                <CheckCircle2 className="w-8 h-8 text-emerald-600 mx-auto" />
                <h4 className="font-bold text-emerald-900 text-sm">Solicitação Enviada!</h4>
                <p className="text-xs text-emerald-700">
                  Sua solicitação de acesso foi registrada com sucesso. Entraremos em contato para a liberação da sua conta!
                </p>
              </div>
            ) : (
              <form onSubmit={handleRequestSubmit} className="space-y-3.5">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Nome Completo <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={reqName}
                    onChange={(e) => setReqName(e.target.value)}
                    placeholder="Seu nome completo"
                    className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    E-mail para Acesso <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    value={reqEmail}
                    onChange={(e) => setReqEmail(e.target.value)}
                    placeholder="seuemail@exemplo.com"
                    className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    WhatsApp / Telefone (opcional)
                  </label>
                  <input
                    type="tel"
                    value={reqPhone}
                    onChange={(e) => setReqPhone(e.target.value)}
                    placeholder="(XX) 9XXXX-XXXX"
                    className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Mensagem ou Nível de Interesse (opcional)
                  </label>
                  <textarea
                    rows={2}
                    value={reqNotes}
                    onChange={(e) => setReqNotes(e.target.value)}
                    placeholder="Ex.: Gostaria de iniciar o curso do básico / tirar dúvidas sobre o plano."
                    className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 resize-none"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-2.5 px-4 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs shadow-md flex items-center justify-center space-x-2 transition-colors"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Enviar Solicitação de Acesso</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
