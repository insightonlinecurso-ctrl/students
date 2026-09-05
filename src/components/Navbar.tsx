import React, { useState } from 'react';
import { 
  Home,
  BookOpen, 
  Sparkles, 
  GraduationCap, 
  Calendar, 
  User as UserIcon, 
  ShieldCheck, 
  Menu, 
  X, 
  Flame, 
  Clock, 
  LogOut,
  CalendarCheck,
  Dumbbell
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useProgress } from '../context/ProgressContext';
import { InsightLogo } from './InsightLogo';

export type MainTabType = 'home' | 'material' | 'extras' | 'testes' | 'aulas' | 'perfil' | 'admin';

interface NavbarProps {
  currentTab: MainTabType;
  onTabChange: (tab: MainTabType) => void;
  onOpenAuth: (defaultAdmin?: boolean) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentTab,
  onTabChange,
  onOpenAuth
}) => {
  const { user, isAuthenticated, isAdmin, logout } = useAuth();
  const { completedUnitIds } = useProgress();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const daysLeft = user?.subscriptionDaysLeft ?? 30;

  const handleNavClick = (tab: MainTabType) => {
    if (tab === 'admin' && !isAdmin) {
      onOpenAuth(true);
      return;
    }
    onTabChange(tab);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 bg-slate-900 border-b border-slate-800 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo & Brand with official Origami Logo */}
          <div 
            className="flex items-center cursor-pointer" 
            onClick={() => onTabChange('home')}
          >
            <InsightLogo variant="nav" />
          </div>

          {/* Desktop Navigation Tabs: Home - Material - Extras - Testes - Aulas - Perfil - (Admin) */}
          <nav className="hidden lg:flex items-center space-x-1 bg-slate-950/80 p-1.5 rounded-2xl border border-slate-800">
            <button
              id="nav-tab-home"
              onClick={() => handleNavClick('home')}
              className={`flex items-center space-x-1.5 px-3 py-2 rounded-xl text-xs font-bold transition-all ${
                currentTab === 'home'
                  ? 'bg-blue-600 text-white shadow-xs'
                  : 'text-slate-400 hover:text-white hover:bg-slate-850'
              }`}
            >
              <Home className="w-3.5 h-3.5" />
              <span>Home</span>
            </button>

            <button
              id="nav-tab-material"
              onClick={() => handleNavClick('material')}
              className={`flex items-center space-x-1.5 px-3 py-2 rounded-xl text-xs font-bold transition-all ${
                currentTab === 'material'
                  ? 'bg-blue-600 text-white shadow-xs'
                  : 'text-slate-400 hover:text-white hover:bg-slate-850'
              }`}
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>Material</span>
            </button>

            <button
              id="nav-tab-extras"
              onClick={() => handleNavClick('extras')}
              className={`flex items-center space-x-1.5 px-3 py-2 rounded-xl text-xs font-bold transition-all ${
                currentTab === 'extras'
                  ? 'bg-blue-600 text-white shadow-xs'
                  : 'text-slate-400 hover:text-white hover:bg-slate-850'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Extras</span>
            </button>

            <button
              id="nav-tab-testes"
              onClick={() => handleNavClick('testes')}
              className={`flex items-center space-x-1.5 px-3 py-2 rounded-xl text-xs font-bold transition-all ${
                currentTab === 'testes'
                  ? 'bg-blue-600 text-white shadow-xs'
                  : 'text-slate-400 hover:text-white hover:bg-slate-850'
              }`}
            >
              <GraduationCap className="w-3.5 h-3.5" />
              <span>Testes</span>
            </button>

            <button
              id="nav-tab-aulas"
              onClick={() => handleNavClick('aulas')}
              className={`flex items-center space-x-1.5 px-3 py-2 rounded-xl text-xs font-bold transition-all ${
                currentTab === 'aulas'
                  ? 'bg-blue-600 text-white shadow-xs'
                  : 'text-slate-400 hover:text-white hover:bg-slate-850'
              }`}
            >
              <CalendarCheck className="w-3.5 h-3.5" />
              <span>Aulas</span>
            </button>

            <button
              id="nav-tab-perfil"
              onClick={() => handleNavClick('perfil')}
              className={`flex items-center space-x-1.5 px-3 py-2 rounded-xl text-xs font-bold transition-all ${
                currentTab === 'perfil'
                  ? 'bg-blue-600 text-white shadow-xs'
                  : 'text-slate-400 hover:text-white hover:bg-slate-850'
              }`}
            >
              <UserIcon className="w-3.5 h-3.5" />
              <span>Perfil</span>
            </button>

            {/* Admin Tab (Gated with Carlos / 10186810) */}
            <button
              id="nav-tab-admin"
              onClick={() => handleNavClick('admin')}
              className={`flex items-center space-x-1.5 px-3 py-2 rounded-xl text-xs font-bold transition-all ${
                currentTab === 'admin'
                  ? 'bg-emerald-600 text-white shadow-xs'
                  : isAdmin
                    ? 'text-emerald-400 hover:bg-emerald-950/40'
                    : 'text-slate-400 hover:text-white'
              }`}
            >
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>(Admin)</span>
            </button>
          </nav>

          {/* Right Area: Days Remaining Counter (Only when logged in as student) & User Profile */}
          <div className="flex items-center space-x-3">
            {/* Days remaining counter pill - ONLY visible when authenticated as student */}
            {isAuthenticated && user && !isAdmin && (
              <div 
                id="nav-user-days-left"
                onClick={() => onTabChange('perfil')}
                className="cursor-pointer hidden sm:flex items-center space-x-2 px-3 py-1.5 rounded-xl bg-slate-800 border border-slate-700 text-xs text-slate-300 hover:border-slate-600 transition-colors"
                title="Validade da assinatura do site"
              >
                <Clock className="w-3.5 h-3.5 text-blue-400" />
                <span>
                  <strong className="text-white font-mono">{daysLeft}d</strong> restantes
                </span>
              </div>
            )}

            {isAuthenticated && user ? (
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => onTabChange('perfil')}
                  className="flex items-center space-x-2 px-3 py-1.5 rounded-xl bg-slate-800 border border-slate-700 text-xs hover:border-slate-600 transition-colors"
                >
                  <div className="w-6 h-6 rounded-lg bg-blue-600 flex items-center justify-center font-bold text-white text-[10px]">
                    {user.name.charAt(0)}
                  </div>
                  <span className="font-semibold text-slate-200 hidden md:inline truncate max-w-[100px]">
                    {user.name.split(' ')[0]}
                  </span>
                </button>

                <button
                  onClick={logout}
                  title="Encerrar sessão"
                  className="p-2 text-slate-400 hover:text-white rounded-xl hover:bg-slate-800"
                >
                  <LogOut className="w-4 h-4" />
                </button>
              </div>
            ) : (
              <button
                onClick={() => onOpenAuth(false)}
                className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold shadow-md shadow-blue-600/20"
              >
                Entrar
              </button>
            )}

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-slate-400 hover:text-white rounded-xl hover:bg-slate-800"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-slate-950 border-b border-slate-800 px-4 py-4 space-y-2 animate-fadeIn">
          <div className="pb-3 mb-2 border-b border-slate-850 flex items-center justify-between">
            <InsightLogo variant="nav" />
          </div>
          {[
            { tab: 'home' as MainTabType, label: 'Home', icon: Home },
            { tab: 'material' as MainTabType, label: 'Material (30 Unidades)', icon: BookOpen },
            { tab: 'extras' as MainTabType, label: 'Extras (Planner & Exercícios)', icon: Sparkles },
            { tab: 'testes' as MainTabType, label: 'Testes (Nivelamento)', icon: GraduationCap },
            { tab: 'aulas' as MainTabType, label: 'Aulas Particulares', icon: CalendarCheck },
            { tab: 'perfil' as MainTabType, label: 'Perfil do Aluno', icon: UserIcon },
            { tab: 'admin' as MainTabType, label: '(Admin) - Seção Carlos', icon: ShieldCheck },
          ].map((item) => {
            const Icon = item.icon;
            const isSelected = currentTab === item.tab;
            return (
              <button
                key={item.tab}
                onClick={() => handleNavClick(item.tab)}
                className={`w-full flex items-center space-x-3 px-4 py-2.5 rounded-xl text-xs font-bold transition-all ${
                  isSelected
                    ? 'bg-blue-600 text-white'
                    : 'text-slate-300 hover:bg-slate-800'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{item.label}</span>
              </button>
            );
          })}
        </div>
      )}
    </header>
  );
};
