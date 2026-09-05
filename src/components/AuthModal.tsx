import React, { useState } from 'react';
import { X, Lock, ArrowRight, GraduationCap, Clock, CheckCircle2, AlertCircle } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { INSIGHT_HEADER_BANNER } from '../assets/brand';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAdminLogin?: () => void;
}

export const AuthModal: React.FC<AuthModalProps> = ({ isOpen, onClose, onAdminLogin }) => {
  const { login } = useAuth();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');

  const [error, setError] = useState<string | null>(null);
  const [pendingNotice, setPendingNotice] = useState<{
    title: string;
    studentName: string;
    description: string;
  } | null>(null);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setPendingNotice(null);

    if (!email.trim() && name.trim().toLowerCase() !== 'carlos') {
      setError('Por favor, informe o seu e-mail.');
      return;
    }

    const result = login(email, name, password, phone);

    if (result.success) {
      // Login com sucesso (Admin ou Aluno Aprovado)
      if (result.role === 'admin') {
        if (onAdminLogin) onAdminLogin();
      }
      onClose();
      return;
    }

    if (result.status === 'new_request') {
      setPendingNotice({
        title: 'Solicitação Enviada com Sucesso!',
        studentName: result.name,
        description: 'Seus dados foram registrados com sucesso. Para garantir a segurança dos alunos, novos acessos são verificados e liberados pela Equipe Insight. Por favor, aguarde a liberação do seu acesso. Entraremos em contato via WhatsApp ou e-mail assim que a sua matrícula for ativada.'
      });
      return;
    }

    if (result.status === 'pending') {
      setPendingNotice({
        title: 'Acesso em Análise',
        studentName: result.name,
        description: 'Sua solicitação de acesso já está registrada e em análise pela Equipe Insight. Por favor, aguarde a confirmação da liberação para poder entrar na plataforma.'
      });
      return;
    }

    if (result.status === 'blocked') {
      setError(result.message);
      return;
    }
  };

  const handleCloseNotice = () => {
    setPendingNotice(null);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 max-w-md w-full space-y-5 shadow-2xl relative animate-fadeIn">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute right-5 top-5 p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-850 z-10 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Brand Header Banner */}
        <div className="overflow-hidden rounded-2xl border border-slate-700/80 bg-[#8897a2] shadow-sm">
          <img 
            src={INSIGHT_HEADER_BANNER} 
            alt="Insight English Header"
            referrerPolicy="no-referrer"
            className="w-full h-24 sm:h-28 object-cover"
          />
        </div>

        {/* State: Pending Approval Notice */}
        {pendingNotice ? (
          <div className="p-6 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-center space-y-4 animate-fadeIn">
            <div className="w-12 h-12 rounded-2xl bg-amber-500/20 text-amber-400 flex items-center justify-center mx-auto shadow-inner">
              <Clock className="w-6 h-6" />
            </div>

            <div className="space-y-2">
              <h3 className="text-lg font-bold text-white">
                {pendingNotice.title}
              </h3>
              <p className="text-xs text-amber-300 font-semibold">
                Olá, {pendingNotice.studentName}!
              </p>
              <p className="text-xs text-slate-300 leading-relaxed text-left sm:text-center">
                {pendingNotice.description}
              </p>
            </div>

            <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800 text-[11px] text-slate-400 flex items-center justify-center space-x-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Liberação realizada pela Equipe Insight</span>
            </div>

            <button
              type="button"
              onClick={handleCloseNotice}
              className="w-full py-2.5 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs transition-colors"
            >
              OK, Entendi
            </button>
          </div>
        ) : (
          <>
            {/* Header */}
            <div className="space-y-1.5 text-center">
              <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400 flex items-center justify-center mx-auto mb-1">
                <GraduationCap className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white">Acesso à Plataforma</h3>
              <p className="text-xs text-slate-400">
                Acesse suas 30 unidades, métricas pedagógicas e aulas particulares.
              </p>
            </div>

            {error && (
              <div className="p-3 rounded-xl bg-rose-500/20 border border-rose-500/30 text-rose-300 text-xs flex items-center space-x-2">
                <AlertCircle className="w-4 h-4 text-rose-400 shrink-0" />
                <span>{error}</span>
              </div>
            )}

            {/* Single Unified Login Form */}
            <form onSubmit={handleSubmit} className="space-y-3.5">
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Nome Completo
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Seu nome completo"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white focus:outline-none focus:border-blue-500"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  E-mail
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="aluno@email.com"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white focus:outline-none focus:border-blue-500"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Senha de Acesso
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white focus:outline-none focus:border-blue-500"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  WhatsApp / Telefone <span className="text-slate-500 font-normal">(para novos cadastros)</span>
                </label>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="(11) 99999-9999"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white focus:outline-none focus:border-blue-500"
                />
              </div>

              <button
                type="submit"
                id="btn-login-submit"
                className="w-full py-3 px-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs shadow-lg shadow-blue-600/30 transition-all flex items-center justify-center space-x-2 cursor-pointer mt-2"
              >
                <span>Entrar na Plataforma</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </>
        )}

      </div>
    </div>
  );
};
