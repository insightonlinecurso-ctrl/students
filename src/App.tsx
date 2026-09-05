import React, { useState } from 'react';
import { AuthProvider, useAuth } from './context/AuthContext';
import { ProgressProvider, useProgress } from './context/ProgressContext';
import { Navbar, MainTabType } from './components/Navbar';
import { PaywallGate } from './components/PaywallGate';
import { AuthModal } from './components/AuthModal';

import { HomeView } from './components/HomeView';
import { MaterialView } from './components/MaterialView';
import { ExtrasView } from './components/ExtrasView';
import { TestesView } from './components/TestesView';
import { AulasView } from './components/AulasView';
import { StudentProfileView } from './components/StudentProfileView';
import { AdminView } from './components/AdminView';
import { AiTutorView } from './components/AiTutorView';
import { InsightLogo } from './components/InsightLogo';
import { INSIGHT_LOGO_ICON } from './assets/brand';

import { Sparkles, MessageSquare, X } from 'lucide-react';

const MainAppContent: React.FC = () => {
  const { isAuthenticated, isAdmin, user, isSubscriptionBlocked, renewStudentCycle } = useAuth();
  
  const [currentTab, setCurrentTab] = useState<MainTabType>('home');
  const [selectedMaterialUnitId, setSelectedMaterialUnitId] = useState<number | null>(null);
  const [extrasSubTab, setExtrasSubTab] = useState<'hub' | 'planner' | 'exercises'>('hub');
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [authModalDefaultAdmin, setAuthModalDefaultAdmin] = useState(false);
  const [isAiTutorModalOpen, setIsAiTutorModalOpen] = useState(false);

  const handleOpenAuth = (defaultAdmin = false) => {
    setAuthModalDefaultAdmin(defaultAdmin);
    setIsAuthModalOpen(true);
  };

  const handleGoToMaterial = (unitId?: number) => {
    if (unitId) {
      setSelectedMaterialUnitId(unitId);
    }
    setCurrentTab('material');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col font-sans selection:bg-blue-500 selection:text-white">
      {/* Top Navigation */}
      <Navbar
        currentTab={currentTab}
        onTabChange={(tab) => {
          if (tab === 'extras') {
            setExtrasSubTab('hub');
          }
          setCurrentTab(tab);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onOpenAuth={handleOpenAuth}
      />

      {/* Subscription Alert Bar (if days <= 5 and not admin) */}
      {isAuthenticated && !isAdmin && user && user.subscriptionDaysLeft <= 5 && (
        <div className="bg-amber-500 text-slate-950 px-4 py-2 text-xs font-bold text-center flex items-center justify-center space-x-2">
          <span>
            Atenção: Faltam apenas {user.subscriptionDaysLeft} dia(s) para renovar sua assinatura do site!
          </span>
          <button
            onClick={() => {
              renewStudentCycle(user.id);
            }}
            className="underline ml-2 bg-slate-950 text-white px-2.5 py-0.5 rounded text-[11px] font-mono hover:bg-slate-800"
          >
            Renovar por 30 dias agora
          </button>
        </div>
      )}

      {/* Main Viewport */}
      <main className="flex-1 pb-16">
        {!isAuthenticated ? (
          <PaywallGate onOpenLogin={() => handleOpenAuth(false)} />
        ) : isSubscriptionBlocked && !isAdmin ? (
          <div className="max-w-xl mx-auto my-16 p-8 bg-white border border-rose-200 rounded-3xl text-center space-y-4 shadow-lg">
            <h2 className="text-2xl font-black text-rose-600">Período de Acesso Expirado</h2>
            <p className="text-sm text-slate-600">
              Seus 30 dias de acesso ao site expiraram. Renove sua assinatura por mais um ciclo de 30 dias para continuar acessando o Material, Planner e Testes.
            </p>
            <button
              onClick={() => renewStudentCycle(user!.id)}
              className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm shadow-md"
            >
              Renovar por mais um ciclo (+30 dias)
            </button>
          </div>
        ) : (
          <>
            {currentTab === 'home' && (
              <HomeView
                onGoToMaterial={handleGoToMaterial}
                onGoToAulas={() => setCurrentTab('aulas')}
                onGoToExtras={() => {
                  setExtrasSubTab('hub');
                  setCurrentTab('extras');
                }}
                onGoToTestes={() => setCurrentTab('testes')}
                onGoToProfile={() => setCurrentTab('perfil')}
              />
            )}

            {currentTab === 'material' && (
              <MaterialView
                initialUnitId={selectedMaterialUnitId}
              />
            )}

            {currentTab === 'extras' && (
              <ExtrasView
                key={extrasSubTab}
                defaultSubTab={extrasSubTab}
                onSelectUnit={(uId) => handleGoToMaterial(uId)}
              />
            )}

            {currentTab === 'testes' && (
              <TestesView />
            )}

            {currentTab === 'aulas' && (
              <AulasView
                onGoToMaterial={() => setCurrentTab('material')}
              />
            )}

            {currentTab === 'perfil' && (
              <StudentProfileView
                onSelectUnit={(uId) => handleGoToMaterial(uId)}
                onGoToPlanner={() => {
                  setExtrasSubTab('planner');
                  setCurrentTab('extras');
                }}
                onGoToVocab={() => {
                  setExtrasSubTab('exercises');
                  setCurrentTab('extras');
                }}
              />
            )}

            {currentTab === 'admin' && (
              <AdminView />
            )}
          </>
        )}
      </main>

      {/* Floating AI Tutor Quick Help Button */}
      {isAuthenticated && (
        <button
          onClick={() => setIsAiTutorModalOpen(true)}
          className="fixed bottom-6 right-6 z-30 px-4 py-3 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white shadow-xl shadow-blue-600/30 flex items-center space-x-2.5 transition-all hover:scale-105 border border-blue-400/30 font-semibold"
          title="Tutor de IA"
        >
          <Sparkles className="w-4 h-4 text-blue-200 animate-pulse" />
          <span className="text-xs hidden sm:inline">Dúvidas com IA</span>
        </button>
      )}

      {/* AI Tutor Floating Modal */}
      {isAiTutorModalOpen && (
        <div className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white border border-slate-200 rounded-3xl max-w-2xl w-full max-h-[85vh] flex flex-col shadow-2xl overflow-hidden relative">
            <div className="flex items-center justify-between p-4 border-b border-slate-200 bg-slate-50">
              <div className="flex items-center space-x-2">
                <Sparkles className="w-5 h-5 text-blue-600" />
                <h3 className="font-bold text-sm text-slate-900">Tutor de IA Integrado • Tire suas Dúvidas</h3>
              </div>
              <button
                onClick={() => setIsAiTutorModalOpen(false)}
                className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-200"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <div className="flex-1 overflow-y-auto p-2">
              <AiTutorView />
            </div>
          </div>
        </div>
      )}

      {/* Auth Modal (Aluno / Carlos Admin) */}
      <AuthModal
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
        defaultToAdmin={authModalDefaultAdmin}
      />

      {/* Footer */}
      <footer className="border-t border-slate-800 bg-slate-900 py-8 text-center text-xs text-slate-400">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center space-x-3">
            <div className="w-7 h-7 rounded-lg overflow-hidden bg-[#8897a2] border border-slate-700 flex-shrink-0 shadow-xs">
              <img 
                src={INSIGHT_LOGO_ICON} 
                alt="Insight Logo" 
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover" 
              />
            </div>
            <div className="text-left">
              <div className="flex items-center space-x-2">
                <span className="font-bold text-white text-sm">Insight English</span>
                <span className="text-[10px] text-slate-400">Plataforma Oficial</span>
              </div>
              <p className="text-[11px] text-slate-400">Site para os Planos • Metodologia 30 Unidades</p>
            </div>
          </div>

          <div className="flex items-center space-x-4 text-slate-400 text-[11px]">
            <span>Início & Validade (30 dias)</span>
            <span>•</span>
            <span>CEFR Skills</span>
            <span>•</span>
            <button
              onClick={() => handleOpenAuth(true)}
              className="text-emerald-400 hover:underline font-mono"
            >
              Acesso Professor Carlos
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default function App() {
  return (
    <AuthProvider>
      <ProgressProvider>
        <MainAppContent />
      </ProgressProvider>
    </AuthProvider>
  );
}
