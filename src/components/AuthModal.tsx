import React, { useState } from 'react';
import { X, Lock, CheckCircle2, Sparkles, ArrowRight, GraduationCap, ShieldCheck } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { INSIGHT_HEADER_BANNER } from '../assets/brand';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultToAdmin?: boolean;
}

export const AuthModal: React.FC<AuthModalProps> = ({ isOpen, onClose, defaultToAdmin = false }) => {
  const { login, loginAsAdmin, quickDemoLogin } = useAuth();
  const [activeTab, setActiveTab] = useState<'student' | 'admin'>(defaultToAdmin ? 'admin' : 'student');
  
  // Student fields
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  // Admin fields
  const [adminUser, setAdminUser] = useState('Carlos');
  const [adminPassword, setAdminPassword] = useState('10186810');
  const [adminError, setAdminError] = useState('');

  if (!isOpen) return null;

  const handleStudentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      login(email, name || 'Aluno Insight', undefined, phone);
      onClose();
    }
  };

  const handleAdminSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setAdminError('');
    const success = loginAsAdmin(adminUser, adminPassword);
    if (success) {
      onClose();
    } else {
      setAdminError('Credenciais incorretas. Usuário esperado: Carlos / Senha: 10186810');
    }
  };

  const handleDemo = () => {
    quickDemoLogin();
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 max-w-md w-full space-y-6 shadow-2xl relative animate-fadeIn">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute right-5 top-5 p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-850 z-10"
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

        {/* Modal Tabs: Aluno vs Admin */}
        <div className="flex bg-slate-950 p-1.5 rounded-2xl border border-slate-800">
          <button
            type="button"
            onClick={() => setActiveTab('student')}
            className={`flex-1 py-2 rounded-xl text-xs font-bold transition-all ${
              activeTab === 'student'
                ? 'bg-blue-600 text-white shadow-xs'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Área do Aluno
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('admin')}
            className={`flex-1 py-2 rounded-xl text-xs font-bold transition-all flex items-center justify-center space-x-1.5 ${
              activeTab === 'admin'
                ? 'bg-blue-600 text-white shadow-xs'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Acesso Admin</span>
          </button>
        </div>

        {activeTab === 'student' ? (
          <>
            {/* Student Header */}
            <div className="space-y-1.5 text-center">
              <div className="w-12 h-12 rounded-2xl bg-blue-500/10 border border-blue-500/20 text-blue-400 flex items-center justify-center mx-auto mb-2">
                <GraduationCap className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white">Login do Aluno Insight English</h3>
              <p className="text-xs text-slate-400">
                Acesse suas 30 unidades, métricas das 4 competências e aulas.
              </p>
            </div>

            {/* Student Form */}
            <form onSubmit={handleStudentSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                  Nome do Aluno
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Ex: Rafael Silva"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white focus:outline-none focus:border-blue-500"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                  E-mail de Matrícula
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="aluno@email.com"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white focus:outline-none focus:border-blue-500"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                  WhatsApp / Telefone <span className="text-slate-500 font-normal">(opcional)</span>
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
                className="w-full py-3 px-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs shadow-lg shadow-blue-600/30 transition-all flex items-center justify-center space-x-2"
              >
                <span>Entrar como Aluno</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </>
        ) : (
          <>
            {/* Admin Header */}
            <div className="space-y-1.5 text-center">
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto mb-2">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white">Área Restrita do Professor Carlos</h3>
              <p className="text-xs text-slate-400">
                Acesse os perfis dos alunos, respostas de conversação e gerencie assinaturas.
              </p>
            </div>

            {adminError && (
              <div className="p-3 rounded-xl bg-rose-500/20 border border-rose-500/30 text-rose-300 text-xs text-center">
                {adminError}
              </div>
            )}

            {/* Admin Form */}
            <form onSubmit={handleAdminSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                  Usuário do Professor
                </label>
                <input
                  type="text"
                  required
                  value={adminUser}
                  onChange={(e) => setAdminUser(e.target.value)}
                  placeholder="Carlos"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white focus:outline-none focus:border-blue-500 font-mono"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                  Senha de Acesso
                </label>
                <input
                  type="password"
                  required
                  value={adminPassword}
                  onChange={(e) => setAdminPassword(e.target.value)}
                  placeholder="10186810"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white focus:outline-none focus:border-blue-500 font-mono"
                />
              </div>

              <button
                type="submit"
                id="btn-login-admin-submit"
                className="w-full py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow-lg shadow-emerald-600/30 transition-all flex items-center justify-center space-x-2"
              >
                <ShieldCheck className="w-4 h-4" />
                <span>Autenticar como Carlos (Admin)</span>
              </button>
            </form>
          </>
        )}

      </div>
    </div>
  );
};
