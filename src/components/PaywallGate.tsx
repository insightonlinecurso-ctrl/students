import React, { useState } from 'react';
import { 
  Lock, 
  CheckCircle2, 
  Sparkles, 
  BookOpen, 
  Calendar, 
  Layers, 
  ArrowRight,
  GraduationCap,
  Star,
  UserPlus,
  LogIn,
  X,
  Send,
  Clock,
  AlertCircle,
  Eye,
  EyeOff
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { INSIGHT_HEADER_BANNER } from '../assets/brand';

interface PaywallGateProps {
  onOpenLogin: (mode?: 'login' | 'request') => void;
}

export const PaywallGate: React.FC<PaywallGateProps> = ({ onOpenLogin }) => {
  const { login, requestAccess } = useAuth();

  // Tab state in the access card: 'login' | 'request'
  const [boxTab, setBoxTab] = useState<'login' | 'request'>('login');

  // Login form state
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [showLoginPassword, setShowLoginPassword] = useState(false);
  const [loginError, setLoginError] = useState<string | null>(null);

  // Request access form state
  const [reqName, setReqName] = useState('');
  const [reqEmail, setReqEmail] = useState('');
  const [reqPhone, setReqPhone] = useState('');
  const [reqPassword, setReqPassword] = useState('');
  const [reqConfirmPassword, setReqConfirmPassword] = useState('');
  const [showReqPassword, setShowReqPassword] = useState(false);
  const [reqNotes, setReqNotes] = useState('');
  const [reqError, setReqError] = useState<string | null>(null);

  // Notice state for pending or submitted requests
  const [notice, setNotice] = useState<{
    title: string;
    name: string;
    message: string;
  } | null>(null);

  // Modal for quick request access (if opened via button)
  const [isRequestModalOpen, setIsRequestModalOpen] = useState(false);

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoginError(null);
    setNotice(null);

    const cleanEmail = loginEmail.trim();
    if (!cleanEmail) {
      setLoginError('Por favor, informe seu e-mail de aluno.');
      return;
    }

    if (!loginPassword.trim()) {
      setLoginError('Por favor, digite sua senha de acesso.');
      return;
    }

    const result = login(cleanEmail, cleanEmail, loginPassword);

    if (result.success) {
      return;
    }

    if (result.status === 'not_found') {
      setLoginError(result.message);
      return;
    }

    if (result.status === 'invalid_password') {
      setLoginError(result.message);
      return;
    }

    if (result.status === 'pending') {
      setNotice({
        title: 'Acesso em Análise',
        name: result.name,
        message: 'Sua solicitação de acesso já está registrada e em análise pela Equipe Insight. Por favor, aguarde a liberação para poder entrar.'
      });
      return;
    }

    if (result.status === 'blocked') {
      setLoginError(result.message);
      return;
    }
  };

  const handleRequestSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setReqError(null);
    setNotice(null);

    if (!reqName.trim() || !reqEmail.trim()) {
      setReqError('Por favor, informe seu nome e e-mail.');
      return;
    }

    if (!reqPassword.trim()) {
      setReqError('Por favor, defina uma senha de acesso.');
      return;
    }

    if (reqPassword.trim().length < 4) {
      setReqError('A senha deve conter pelo menos 4 caracteres.');
      return;
    }

    if (reqPassword !== reqConfirmPassword) {
      setReqError('A confirmação de senha não confere. Digite a mesma senha em ambos os campos.');
      return;
    }

    requestAccess({
      name: reqName.trim(),
      email: reqEmail.trim(),
      phone: reqPhone.trim(),
      password: reqPassword.trim(),
      notes: reqNotes.trim()
    });

    setNotice({
      title: 'Solicitação Enviada com Sucesso!',
      name: reqName.trim(),
      message: 'Seus dados e senha foram registrados com sucesso. Para a segurança dos alunos, novos acessos são verificados e liberados pela Equipe Insight. Assim que sua conta for ativada, você poderá entrar na plataforma utilizando seu e-mail e a senha cadastrada!'
    });

    setReqNotes('');
    setIsRequestModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 selection:bg-blue-500 selection:text-white">
      
      {/* Container */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        
        {/* Banner Institucional */}
        <div className="mb-8 rounded-3xl overflow-hidden shadow-lg border border-slate-200 bg-[#8897a2] max-h-56 sm:max-h-72 flex items-center justify-center">
          <img 
            src={INSIGHT_HEADER_BANNER} 
            alt="Insight English Club" 
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Hero Section */}
        <div className="text-center space-y-4 mb-10">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Área Exclusiva para Alunos Insight</span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
            Insight English <span className="text-blue-600">Planos Novos</span>
          </h1>

          <p className="max-w-2xl mx-auto text-slate-600 text-base sm:text-lg leading-relaxed">
            O material estruturado completo com 30 unidades gramaticais, distribuição horária personalizada no Planner, treinamento avançado de vocabulário e avaliação com Inteligência Artificial.
          </p>

          {/* Botões Principais no Topo: Entrar e Requisitar Acesso */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <button
              id="hero-btn-login"
              onClick={() => {
                setBoxTab('login');
                const card = document.getElementById('access-auth-card');
                if (card) card.scrollIntoView({ behavior: 'smooth' });
                else onOpenLogin('login');
              }}
              className="px-6 py-3 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs sm:text-sm shadow-md shadow-blue-600/20 transition-all hover:scale-105 flex items-center space-x-2 cursor-pointer"
            >
              <LogIn className="w-4 h-4" />
              <span>Entrar</span>
            </button>

            <button
              id="hero-btn-request-access"
              onClick={() => {
                setBoxTab('request');
                const card = document.getElementById('access-auth-card');
                if (card) card.scrollIntoView({ behavior: 'smooth' });
                else onOpenLogin('request');
              }}
              className="px-6 py-3 rounded-2xl bg-white hover:bg-slate-100 border border-slate-300 text-slate-800 font-bold text-xs sm:text-sm shadow-xs transition-all hover:scale-105 flex items-center space-x-2 cursor-pointer"
            >
              <UserPlus className="w-4 h-4 text-blue-600" />
              <span>Requisitar Acesso</span>
            </button>
          </div>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs relative overflow-hidden group hover:border-blue-300 hover:shadow-md transition-all">
            <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600 mb-4">
              <BookOpen className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-base text-slate-900 mb-2">Material Completo (30 Unidades)</h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              Do Verbo To Be ao Third Conditional com explicações diretas, regras chave, histórias ilustradas e 10 exercícios por unidade com correção imediata.
            </p>
          </div>

          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs relative overflow-hidden group hover:border-blue-300 hover:shadow-md transition-all">
            <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600 mb-4">
              <Calendar className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-base text-slate-900 mb-2">Smart Planner de Estudos</h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              Cronograma inteligente baseado na carga horária oficial de cada ponto gramatical (68h totais) adaptado ao seu ritmo semanal de estudos.
            </p>
          </div>

          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs relative overflow-hidden group hover:border-blue-300 hover:shadow-md transition-all">
            <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600 mb-4">
              <Layers className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-base text-slate-900 mb-2">Vocabulary & AI Speaking</h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              Flashcards, quiz de soletração com a Lista Oficial de Palavras e laboratório de pronúncia e redação corrigido em tempo real pelo Gemini.
            </p>
          </div>
        </div>

        {/* Unified Access Card: Organized with Tabs */}
        <div id="access-auth-card" className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-sm relative scroll-mt-20">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            
            {/* Left Column: Benefits info */}
            <div className="space-y-4 max-w-md">
              <div className="flex items-center space-x-2 text-blue-600">
                <Star className="w-4 h-4 fill-blue-600" />
                <span className="text-xs font-bold uppercase tracking-wider">Acesso Insight English</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
                Acesse sua Conta de Aluno
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Faça login com seu e-mail cadastrado ou requisite seu primeiro acesso caso ainda não possua matrícula aprovada.
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

            {/* Right Column: Form Container with distinct Entrar vs Requisitar Acesso Tabs */}
            <div className="w-full md:w-92 bg-slate-50 p-6 rounded-2xl border border-slate-200 shadow-sm">
              
              {/* Notice Box (if request was made or pending) */}
              {notice ? (
                <div className="text-center space-y-3 p-4 bg-amber-50 border border-amber-200 rounded-xl animate-fadeIn">
                  <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-600 flex items-center justify-center mx-auto">
                    <Clock className="w-5 h-5" />
                  </div>
                  <h4 className="font-bold text-sm text-slate-900">{notice.title}</h4>
                  <p className="text-xs text-amber-800 font-semibold">Olá, {notice.name}!</p>
                  <p className="text-xs text-slate-600 leading-relaxed">{notice.message}</p>
                  <button
                    type="button"
                    onClick={() => {
                      setNotice(null);
                      setBoxTab('login');
                    }}
                    className="mt-2 w-full py-2 px-3 rounded-lg bg-slate-800 hover:bg-slate-900 text-white text-xs font-bold transition-colors cursor-pointer"
                  >
                    Voltar ao Login
                  </button>
                </div>
              ) : (
                <>
                  {/* Top Tabs: Entrar vs Requisitar Acesso */}
                  <div className="grid grid-cols-2 p-1 bg-slate-200/70 rounded-xl border border-slate-300/80 mb-4">
                    <button
                      type="button"
                      id="card-tab-login"
                      onClick={() => {
                        setBoxTab('login');
                        setLoginError(null);
                      }}
                      className={`py-2 px-3 rounded-lg text-xs font-bold transition-all flex items-center justify-center space-x-1.5 cursor-pointer ${
                        boxTab === 'login'
                          ? 'bg-blue-600 text-white shadow-xs'
                          : 'text-slate-700 hover:text-slate-900'
                      }`}
                    >
                      <LogIn className="w-3.5 h-3.5" />
                      <span>Entrar</span>
                    </button>

                    <button
                      type="button"
                      id="card-tab-request"
                      onClick={() => {
                        setBoxTab('request');
                        setReqError(null);
                      }}
                      className={`py-2 px-3 rounded-lg text-xs font-bold transition-all flex items-center justify-center space-x-1.5 cursor-pointer ${
                        boxTab === 'request'
                          ? 'bg-blue-600 text-white shadow-xs'
                          : 'text-slate-700 hover:text-slate-900'
                      }`}
                    >
                      <UserPlus className="w-3.5 h-3.5" />
                      <span>Requisitar Acesso</span>
                    </button>
                  </div>

                  {/* FORM 1: ENTRAR (Entrar é exclusivamente para entrar) */}
                  {boxTab === 'login' && (
                    <form onSubmit={handleLoginSubmit} className="space-y-3.5 animate-fadeIn">
                      {loginError && (
                        <div className="p-2.5 rounded-lg bg-rose-50 border border-rose-200 text-rose-700 text-xs flex items-center space-x-2">
                          <AlertCircle className="w-4 h-4 shrink-0 text-rose-500" />
                          <span>{loginError}</span>
                        </div>
                      )}

                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1">
                          E-mail do Aluno
                        </label>
                        <input
                          type="text"
                          required
                          value={loginEmail}
                          onChange={(e) => setLoginEmail(e.target.value)}
                          placeholder="aluno@email.com"
                          className="w-full px-3.5 py-2 rounded-lg bg-white border border-slate-300 text-xs text-slate-900 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 shadow-xs"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1">
                          Senha de Acesso
                        </label>
                        <div className="relative">
                          <input
                            type={showLoginPassword ? 'text' : 'password'}
                            required
                            value={loginPassword}
                            onChange={(e) => setLoginPassword(e.target.value)}
                            placeholder="••••••••"
                            className="w-full pl-3.5 pr-10 py-2 rounded-lg bg-white border border-slate-300 text-xs text-slate-900 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 shadow-xs"
                          />
                          <button
                            type="button"
                            onClick={() => setShowLoginPassword(!showLoginPassword)}
                            className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-700"
                            tabIndex={-1}
                          >
                            {showLoginPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                          </button>
                        </div>
                      </div>

                      <button
                        type="submit"
                        id="card-btn-login-submit"
                        className="w-full py-2.5 px-4 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs shadow-xs transition-all flex items-center justify-center space-x-2 cursor-pointer mt-1"
                      >
                        <LogIn className="w-4 h-4" />
                        <span>Entrar na Plataforma</span>
                      </button>

                      <div className="pt-2 text-center">
                        <p className="text-[11px] text-slate-500">
                          Ainda não possui matrícula ativa?{' '}
                          <button
                            type="button"
                            onClick={() => {
                              setBoxTab('request');
                              setReqError(null);
                            }}
                            className="text-blue-600 hover:underline font-bold"
                          >
                            Requisitar Acesso
                          </button>
                        </p>
                      </div>
                    </form>
                  )}

                  {/* FORM 2: REQUISITAR ACESSO (Cadastrar solicitação) */}
                  {boxTab === 'request' && (
                    <form onSubmit={handleRequestSubmit} className="space-y-3 animate-fadeIn">
                      {reqError && (
                        <div className="p-2.5 rounded-lg bg-rose-50 border border-rose-200 text-rose-700 text-xs flex items-center space-x-2">
                          <AlertCircle className="w-4 h-4 shrink-0 text-rose-500" />
                          <span>{reqError}</span>
                        </div>
                      )}

                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1">
                          Nome Completo <span className="text-rose-500">*</span>
                        </label>
                        <input
                          type="text"
                          required
                          value={reqName}
                          onChange={(e) => setReqName(e.target.value)}
                          placeholder="Seu nome completo"
                          className="w-full px-3.5 py-1.5 rounded-lg bg-white border border-slate-300 text-xs text-slate-900 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 shadow-xs"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1">
                          E-mail <span className="text-rose-500">*</span>
                        </label>
                        <input
                          type="email"
                          required
                          value={reqEmail}
                          onChange={(e) => setReqEmail(e.target.value)}
                          placeholder="seu.email@exemplo.com"
                          className="w-full px-3.5 py-1.5 rounded-lg bg-white border border-slate-300 text-xs text-slate-900 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 shadow-xs"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1">
                          WhatsApp / Telefone <span className="text-rose-500">*</span>
                        </label>
                        <input
                          type="tel"
                          required
                          value={reqPhone}
                          onChange={(e) => setReqPhone(e.target.value)}
                          placeholder="(11) 99999-9999"
                          className="w-full px-3.5 py-1.5 rounded-lg bg-white border border-slate-300 text-xs text-slate-900 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 shadow-xs"
                        />
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        <div>
                          <label className="block text-xs font-semibold text-slate-700 mb-1">
                            Criar Senha <span className="text-rose-500">*</span>
                          </label>
                          <div className="relative">
                            <input
                              type={showReqPassword ? 'text' : 'password'}
                              required
                              value={reqPassword}
                              onChange={(e) => setReqPassword(e.target.value)}
                              placeholder="Mínimo 4 dígitos"
                              className="w-full pl-3 pr-8 py-1.5 rounded-lg bg-white border border-slate-300 text-xs text-slate-900 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 shadow-xs"
                            />
                            <button
                              type="button"
                              onClick={() => setShowReqPassword(!showReqPassword)}
                              className="absolute right-2 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-700"
                              tabIndex={-1}
                            >
                              {showReqPassword ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
                            </button>
                          </div>
                        </div>

                        <div>
                          <label className="block text-xs font-semibold text-slate-700 mb-1">
                            Confirmar Senha <span className="text-rose-500">*</span>
                          </label>
                          <input
                            type={showReqPassword ? 'text' : 'password'}
                            required
                            value={reqConfirmPassword}
                            onChange={(e) => setReqConfirmPassword(e.target.value)}
                            placeholder="Repita a senha"
                            className="w-full px-3 py-1.5 rounded-lg bg-white border border-slate-300 text-xs text-slate-900 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 shadow-xs"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1">
                          Mensagem ou Nível de Inglês <span className="text-slate-400 font-normal">(opcional)</span>
                        </label>
                        <textarea
                          rows={2}
                          value={reqNotes}
                          onChange={(e) => setReqNotes(e.target.value)}
                          placeholder="Ex: Gostaria de começar do zero..."
                          className="w-full px-3.5 py-1.5 rounded-lg bg-white border border-slate-300 text-xs text-slate-900 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 shadow-xs resize-none"
                        />
                      </div>

                      <button
                        type="submit"
                        id="card-btn-request-submit"
                        className="w-full py-2.5 px-4 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs shadow-xs transition-all flex items-center justify-center space-x-2 cursor-pointer mt-1"
                      >
                        <Send className="w-3.5 h-3.5" />
                        <span>Enviar Solicitação de Acesso</span>
                      </button>

                      <div className="pt-2 text-center">
                        <p className="text-[11px] text-slate-500">
                          Já possui matrícula?{' '}
                          <button
                            type="button"
                            onClick={() => {
                              setBoxTab('login');
                              setLoginError(null);
                            }}
                            className="text-blue-600 hover:underline font-bold"
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
        </div>

      </div>

      {/* Modal de Requisitar Acesso rápido */}
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
                  WhatsApp / Telefone <span className="text-rose-500">*</span>
                </label>
                <input
                  type="tel"
                  required
                  value={reqPhone}
                  onChange={(e) => setReqPhone(e.target.value)}
                  placeholder="(11) 99999-9999"
                  className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Criar Senha <span className="text-rose-500">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type={showReqPassword ? 'text' : 'password'}
                      required
                      value={reqPassword}
                      onChange={(e) => setReqPassword(e.target.value)}
                      placeholder="Mínimo 4 dígitos"
                      className="w-full pl-3 pr-8 py-2 text-xs rounded-lg border border-slate-300 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                    />
                    <button
                      type="button"
                      onClick={() => setShowReqPassword(!showReqPassword)}
                      className="absolute right-2 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-700"
                      tabIndex={-1}
                    >
                      {showReqPassword ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
                    </button>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Confirmar Senha <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type={showReqPassword ? 'text' : 'password'}
                    required
                    value={reqConfirmPassword}
                    onChange={(e) => setReqConfirmPassword(e.target.value)}
                    placeholder="Repita a senha"
                    className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                  />
                </div>
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
                  className="w-full py-2.5 px-4 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs shadow-md flex items-center justify-center space-x-2 transition-colors cursor-pointer"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Enviar Solicitação de Acesso</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
