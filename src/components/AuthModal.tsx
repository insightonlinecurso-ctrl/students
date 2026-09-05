import React, { useState, useEffect } from 'react';
import { 
  X, 
  LogIn, 
  UserPlus, 
  ArrowRight, 
  GraduationCap, 
  Clock, 
  CheckCircle2, 
  AlertCircle,
  Send,
  Lock,
  Eye,
  EyeOff
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { INSIGHT_HEADER_BANNER } from '../assets/brand';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAdminLogin?: () => void;
  initialMode?: 'login' | 'request';
}

export const AuthModal: React.FC<AuthModalProps> = ({ 
  isOpen, 
  onClose, 
  onAdminLogin,
  initialMode = 'login' 
}) => {
  const { login, requestAccess } = useAuth();

  const [mode, setMode] = useState<'login' | 'request'>('login');

  // Login form state
  const [loginIdentifier, setLoginIdentifier] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [showLoginPassword, setShowLoginPassword] = useState(false);

  // Request access form state
  const [reqName, setReqName] = useState('');
  const [reqEmail, setReqEmail] = useState('');
  const [reqPhone, setReqPhone] = useState('');
  const [reqPassword, setReqPassword] = useState('');
  const [reqConfirmPassword, setReqConfirmPassword] = useState('');
  const [showReqPassword, setShowReqPassword] = useState(false);
  const [reqNotes, setReqNotes] = useState('');

  const [error, setError] = useState<string | null>(null);
  const [pendingNotice, setPendingNotice] = useState<{
    title: string;
    studentName: string;
    description: string;
  } | null>(null);

  useEffect(() => {
    if (isOpen) {
      setMode(initialMode || 'login');
      setError(null);
      setPendingNotice(null);
    }
  }, [isOpen, initialMode]);

  if (!isOpen) return null;

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setPendingNotice(null);

    const cleanId = loginIdentifier.trim();
    if (!cleanId) {
      setError('Por favor, informe seu e-mail de aluno.');
      return;
    }

    if (!loginPassword.trim()) {
      setError('Por favor, digite sua senha de acesso.');
      return;
    }

    const result = login(cleanId, cleanId, loginPassword);

    if (result.success) {
      if (result.role === 'admin' && onAdminLogin) {
        onAdminLogin();
      }
      onClose();
      return;
    }

    if (result.status === 'not_found') {
      setError(result.message);
      return;
    }

    if (result.status === 'invalid_password') {
      setError(result.message);
      return;
    }

    if (result.status === 'pending') {
      setPendingNotice({
        title: 'Acesso em Análise',
        studentName: result.name,
        description: 'Sua solicitação de acesso já está registrada e em análise pela Equipe Insight. Por favor, aguarde a liberação do seu cadastro para poder entrar na plataforma.'
      });
      return;
    }

    if (result.status === 'blocked') {
      setError(result.message);
      return;
    }
  };

  const handleRequestSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setPendingNotice(null);

    if (!reqName.trim() || !reqEmail.trim()) {
      setError('Por favor, informe seu nome e e-mail.');
      return;
    }

    if (!reqPassword.trim()) {
      setError('Por favor, crie uma senha para acessar sua conta.');
      return;
    }

    if (reqPassword.trim().length < 4) {
      setError('A senha deve conter pelo menos 4 caracteres.');
      return;
    }

    if (reqPassword !== reqConfirmPassword) {
      setError('A confirmação de senha não confere. Por favor, digite a mesma senha em ambos os campos.');
      return;
    }

    requestAccess({
      name: reqName.trim(),
      email: reqEmail.trim(),
      phone: reqPhone.trim(),
      password: reqPassword.trim(),
      notes: reqNotes.trim()
    });

    setPendingNotice({
      title: 'Solicitação Enviada com Sucesso!',
      studentName: reqName.trim(),
      description: 'Sua solicitação e sua senha foram registradas com sucesso. Novos acessos são verificados e liberados pela Equipe Insight. Assim que sua matrícula for ativada, você poderá entrar na plataforma com seu e-mail e a senha que acabou de cadastrar!'
    });
  };

  const handleCloseNotice = () => {
    setPendingNotice(null);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 max-w-md w-full space-y-5 shadow-2xl relative animate-fadeIn text-slate-100">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute right-5 top-5 p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 z-10 transition-colors cursor-pointer"
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
              className="w-full py-2.5 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs transition-colors cursor-pointer"
            >
              OK, Entendi
            </button>
          </div>
        ) : (
          <>
            {/* Top Mode Selector Tabs */}
            <div className="grid grid-cols-2 p-1 bg-slate-950 rounded-2xl border border-slate-800">
              <button
                type="button"
                id="modal-tab-login"
                onClick={() => {
                  setMode('login');
                  setError(null);
                }}
                className={`py-2 px-3 rounded-xl text-xs font-bold transition-all flex items-center justify-center space-x-1.5 cursor-pointer ${
                  mode === 'login'
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <LogIn className="w-3.5 h-3.5" />
                <span>Entrar</span>
              </button>

              <button
                type="button"
                id="modal-tab-request"
                onClick={() => {
                  setMode('request');
                  setError(null);
                }}
                className={`py-2 px-3 rounded-xl text-xs font-bold transition-all flex items-center justify-center space-x-1.5 cursor-pointer ${
                  mode === 'request'
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <UserPlus className="w-3.5 h-3.5" />
                <span>Requisitar Acesso</span>
              </button>
            </div>

            {error && (
              <div className="p-3 rounded-xl bg-rose-500/20 border border-rose-500/30 text-rose-300 text-xs flex items-center space-x-2 animate-fadeIn">
                <AlertCircle className="w-4 h-4 text-rose-400 shrink-0" />
                <span className="flex-1">{error}</span>
              </div>
            )}

            {/* FORM 1: ENTRAR (Strictly login, no registration) */}
            {mode === 'login' && (
              <form onSubmit={handleLoginSubmit} className="space-y-3.5">
                <div className="space-y-1 text-center">
                  <h3 className="text-base font-bold text-white">Entrar na Plataforma</h3>
                  <p className="text-[11px] text-slate-400">
                    Acesse com seu e-mail cadastrado e senha de aluno.
                  </p>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    E-mail do Aluno
                  </label>
                  <input
                    type="text"
                    required
                    value={loginIdentifier}
                    onChange={(e) => setLoginIdentifier(e.target.value)}
                    placeholder="aluno@email.com"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white focus:outline-none focus:border-blue-500 shadow-inner"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Senha de Acesso
                  </label>
                  <div className="relative">
                    <input
                      type={showLoginPassword ? 'text' : 'password'}
                      required
                      value={loginPassword}
                      onChange={(e) => setLoginPassword(e.target.value)}
                      placeholder="••••••••"
                      className="w-full pl-3.5 pr-10 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white focus:outline-none focus:border-blue-500 shadow-inner"
                    />
                    <button
                      type="button"
                      onClick={() => setShowLoginPassword(!showLoginPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white"
                      tabIndex={-1}
                    >
                      {showLoginPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                  </div>
                </div>

                <button
                  type="submit"
                  id="btn-login-submit"
                  className="w-full py-3 px-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs shadow-lg shadow-blue-600/30 transition-all flex items-center justify-center space-x-2 cursor-pointer mt-2"
                >
                  <LogIn className="w-4 h-4" />
                  <span>Entrar</span>
                </button>

                <div className="pt-2 text-center">
                  <p className="text-xs text-slate-400">
                    Ainda não possui matrícula?{' '}
                    <button
                      type="button"
                      onClick={() => {
                        setMode('request');
                        setError(null);
                      }}
                      className="text-blue-400 hover:underline font-bold"
                    >
                      Requisitar Acesso
                    </button>
                  </p>
                </div>
              </form>
            )}

            {/* FORM 2: REQUISITAR ACESSO (Dedicated registration/request) */}
            {mode === 'request' && (
              <form onSubmit={handleRequestSubmit} className="space-y-3.5">
                <div className="space-y-1 text-center">
                  <h3 className="text-base font-bold text-white">Requisitar Primeiro Acesso</h3>
                  <p className="text-[11px] text-slate-400">
                    Preencha os dados abaixo e defina sua senha para análise da Equipe Insight.
                  </p>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Nome Completo <span className="text-rose-400">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={reqName}
                    onChange={(e) => setReqName(e.target.value)}
                    placeholder="Seu nome completo"
                    className="w-full px-3.5 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white focus:outline-none focus:border-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    E-mail <span className="text-rose-400">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    value={reqEmail}
                    onChange={(e) => setReqEmail(e.target.value)}
                    placeholder="seu.email@exemplo.com"
                    className="w-full px-3.5 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white focus:outline-none focus:border-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    WhatsApp / Telefone <span className="text-rose-400">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    value={reqPhone}
                    onChange={(e) => setReqPhone(e.target.value)}
                    placeholder="(11) 99999-9999"
                    className="w-full px-3.5 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white focus:outline-none focus:border-blue-500"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      Criar Senha <span className="text-rose-400">*</span>
                    </label>
                    <div className="relative">
                      <input
                        type={showReqPassword ? 'text' : 'password'}
                        required
                        value={reqPassword}
                        onChange={(e) => setReqPassword(e.target.value)}
                        placeholder="Mínimo 4 dígitos"
                        className="w-full pl-3.5 pr-8 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white focus:outline-none focus:border-blue-500"
                      />
                      <button
                        type="button"
                        onClick={() => setShowReqPassword(!showReqPassword)}
                        className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white"
                        tabIndex={-1}
                      >
                        {showReqPassword ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
                      </button>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      Confirmar Senha <span className="text-rose-400">*</span>
                    </label>
                    <input
                      type={showReqPassword ? 'text' : 'password'}
                      required
                      value={reqConfirmPassword}
                      onChange={(e) => setReqConfirmPassword(e.target.value)}
                      placeholder="Repita sua senha"
                      className="w-full px-3.5 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white focus:outline-none focus:border-blue-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Mensagem ou Nível de Inglês <span className="text-slate-500 font-normal">(opcional)</span>
                  </label>
                  <textarea
                    rows={2}
                    value={reqNotes}
                    onChange={(e) => setReqNotes(e.target.value)}
                    placeholder="Ex: Já estudei básico, preciso de inglês para o trabalho..."
                    className="w-full px-3.5 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white focus:outline-none focus:border-blue-500 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  id="btn-request-submit"
                  className="w-full py-2.5 px-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs shadow-lg shadow-blue-600/30 transition-all flex items-center justify-center space-x-2 cursor-pointer mt-1"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Enviar Solicitação de Acesso</span>
                </button>

                <div className="pt-2 text-center">
                  <p className="text-xs text-slate-400">
                    Já é aluno matriculado?{' '}
                    <button
                      type="button"
                      onClick={() => {
                        setMode('login');
                        setError(null);
                      }}
                      className="text-blue-400 hover:underline font-bold"
                    >
                      Fazer Login
                    </button>
                  </p>
                </div>
              </form>
            )}
          </>
        )}

      </div>
    </div>
  );
};
