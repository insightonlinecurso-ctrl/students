import React, { createContext, useContext, useState, useEffect } from 'react';
import { User, CEFRLevel, AccessRequest } from '../types';

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  isAdmin: boolean;
  isSubscriptionBlocked: boolean;
  login: (email: string, name?: string, password?: string, phone?: string) => boolean;
  loginAsAdmin: (name: string, password?: string) => boolean;
  logout: () => void;
  quickDemoLogin: () => void;
  updateUserHours: (hours: number) => void;
  setStudentCefrLevel: (level: CEFRLevel) => void;
  renewStudentCycle: (studentId: string) => void;
  allStudents: User[];
  accessRequests: AccessRequest[];
  requestAccess: (data: { name: string; email: string; phone?: string; notes?: string }) => void;
  approveAccessRequest: (requestId: string) => void;
  deleteAccessRequest: (requestId: string) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Helper to construct new student record
  const createStudentRecord = (
    id: string,
    name: string,
    email: string,
    phone: string = '',
    notes: string = '',
    createdAt?: string,
    isRequestPending: boolean = false
  ): User => {
    const today = new Date();
    const pad = (n: number) => String(n).padStart(2, '0');
    const todayIso = createdAt || `${today.getFullYear()}-${pad(today.getMonth() + 1)}-${pad(today.getDate())}`;
    
    const nextMonth = new Date(today);
    nextMonth.setDate(nextMonth.getDate() + 30);
    const expiresIso = `${nextMonth.getFullYear()}-${pad(nextMonth.getMonth() + 1)}-${pad(nextMonth.getDate())}`;

    return {
      id,
      name: name || 'Aluno Insight',
      email,
      phone,
      role: 'student',
      createdAt: todayIso,
      subscriptionDaysLeft: 30,
      subscriptionStatus: 'active',
      isRequestPending,
      requestNotes: notes,
      requestedAt: createdAt || new Date().toISOString(),
      isPaidMember: true,
      planType: isRequestPending ? 'Acesso Requisitado' : 'Acesso 30 Dias',
      subscriptionExpiresAt: expiresIso,
      joinedAt: todayIso,
      studyStreakDays: 1,
      totalHoursStudied: 0,
      cefrLevel: 'Não realizado',
      currentUnitNumber: 1,
      progressPercent: 0,
      completedUnits: [],
      competencyScores: {
        listening: 0,
        speaking: 0,
        reading: 0,
        writing: 0
      },
      lastActiveDate: todayIso,
      usageFrequency: {
        loginCount: 1,
        lastLogins: [new Date().toISOString()],
        totalStudyHours: 0,
        daysActiveStreak: 1
      },
      completedClassesCount: 0
    };
  };

  // Carrega e migra solicitações de acesso
  const [accessRequests, setAccessRequests] = useState<AccessRequest[]>(() => {
    const requests: AccessRequest[] = [];
    const saved = localStorage.getItem('insight_access_requests_v2');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed)) requests.push(...parsed);
      } catch {}
    }
    // Migra de armazenamento anterior (ex: teste recente com nome, email, telefone)
    const legacy = localStorage.getItem('insight_access_requests');
    if (legacy) {
      try {
        const parsedLegacy = JSON.parse(legacy);
        if (Array.isArray(parsedLegacy)) {
          parsedLegacy.forEach((item: any, idx: number) => {
            if (item && item.email && !requests.some((r) => r.email.toLowerCase() === item.email.toLowerCase())) {
              requests.push({
                id: `req_legacy_${idx}_${Date.now()}`,
                name: item.name || 'Aluno Teste',
                email: item.email,
                phone: item.phone || '',
                notes: item.notes || '',
                createdAt: item.date || new Date().toISOString(),
                status: 'pending'
              });
            }
          });
        }
      } catch {}
    }
    return requests;
  });

  const [allStudents, setAllStudents] = useState<User[]>(() => {
    let students: User[] = [];
    const saved = localStorage.getItem('insight_all_students_v5');
    if (saved) {
      try {
        const parsed: User[] = JSON.parse(saved);
        students = parsed.filter((u) => u.id !== 'usr_demo_101');
      } catch (e) {
        students = [];
      }
    }

    // Garante que qualquer solicitação de acesso gravada (incluindo teste com telefone) seja importada para allStudents
    const legacy = localStorage.getItem('insight_access_requests');
    if (legacy) {
      try {
        const parsedLegacy = JSON.parse(legacy);
        if (Array.isArray(parsedLegacy)) {
          parsedLegacy.forEach((item: any) => {
            if (item && item.email && !students.some((s) => s.email.toLowerCase() === item.email.toLowerCase())) {
              const newSt = createStudentRecord(
                `usr_req_${Date.now()}_${Math.floor(Math.random() * 1000)}`,
                item.name,
                item.email,
                item.phone || '',
                item.notes || '',
                item.date,
                true
              );
              students.unshift(newSt);
            }
          });
        }
      } catch {}
    }

    return students;
  });

  const [user, setUser] = useState<User | null>(() => {
    const saved = localStorage.getItem('insight_english_user_v5');
    if (saved) {
      try {
        const parsed: User = JSON.parse(saved);
        if (parsed.id === 'usr_demo_101') return null;
        return parsed;
      } catch (e) {
        return null;
      }
    }
    return null;
  });

  // Keep accessRequests synced to localStorage
  useEffect(() => {
    localStorage.setItem('insight_access_requests_v2', JSON.stringify(accessRequests));
  }, [accessRequests]);

  // Keep allStudents synced to localStorage
  useEffect(() => {
    localStorage.setItem('insight_all_students_v5', JSON.stringify(allStudents));
  }, [allStudents]);

  // Keep currentUser synced to localStorage
  useEffect(() => {
    if (user) {
      localStorage.setItem('insight_english_user_v5', JSON.stringify(user));
      if (user.role === 'student') {
        setAllStudents((prev) => {
          const exists = prev.some((s) => s.id === user.id);
          if (exists) {
            return prev.map((s) => (s.id === user.id ? { ...s, ...user } : s));
          }
          return [user, ...prev];
        });
      }
    } else {
      localStorage.removeItem('insight_english_user_v5');
    }
  }, [user]);

  const loginAsAdmin = (name: string, password?: string): boolean => {
    const normalizedName = name.trim().toLowerCase();
    if (normalizedName === 'carlos' && password === '10186810') {
      const adminUser: User = {
        id: 'usr_admin_carlos',
        name: 'Carlos (Administrador)',
        email: 'carlos.admin@insightenglish.com',
        role: 'admin',
        createdAt: '2026-01-01',
        subscriptionDaysLeft: 999,
        subscriptionStatus: 'active',
        isPaidMember: true,
        planType: 'Master Professor / Admin',
        subscriptionExpiresAt: '2030-01-01',
        joinedAt: '2026-01-01',
        studyStreakDays: 365,
        totalHoursStudied: 500,
        cefrLevel: 'C2',
        currentUnitNumber: 30,
        progressPercent: 100,
        completedUnits: Array.from({ length: 30 }, (_, i) => i + 1),
        competencyScores: {
          listening: 100,
          speaking: 100,
          reading: 100,
          writing: 100
        },
        lastActiveDate: new Date().toISOString().split('T')[0],
        usageFrequency: {
          loginCount: 150,
          lastLogins: [new Date().toISOString()],
          totalStudyHours: 500,
          daysActiveStreak: 365
        },
        completedClassesCount: 120
      };
      setUser(adminUser);
      return true;
    }
    return false;
  };

  const login = (email: string, name: string = 'Aluno Insight', password?: string, phone?: string): boolean => {
    if (name.trim().toLowerCase() === 'carlos' && password === '10186810') {
      return loginAsAdmin(name, password);
    }

    // Look for existing student by email
    const existing = allStudents.find((s) => s.email.toLowerCase() === email.toLowerCase());
    if (existing) {
      const updated = phone && !existing.phone ? { ...existing, phone } : existing;
      setUser(updated);
      return true;
    }

    const newStudent = createStudentRecord(
      `usr_${Date.now()}`,
      name,
      email,
      phone || '',
      '',
      undefined,
      false
    );

    setAllStudents((prev) => [newStudent, ...prev]);
    setUser(newStudent);
    return true;
  };

  // Requisitar Acesso: Adiciona solicitação formal E cadastra em allStudents para o admin Carlos visualizar
  const requestAccess = (data: { name: string; email: string; phone?: string; notes?: string }) => {
    const newReq: AccessRequest = {
      id: `req_${Date.now()}`,
      name: data.name,
      email: data.email,
      phone: data.phone || '',
      notes: data.notes || '',
      createdAt: new Date().toISOString(),
      status: 'pending'
    };

    setAccessRequests((prev) => [
      newReq,
      ...prev.filter((r) => r.email.toLowerCase() !== data.email.toLowerCase())
    ]);

    // Cria ou atualiza o aluno na lista do Admin
    setAllStudents((prev) => {
      const existingIdx = prev.findIndex((s) => s.email.toLowerCase() === data.email.toLowerCase());
      if (existingIdx >= 0) {
        const updated = [...prev];
        updated[existingIdx] = {
          ...updated[existingIdx],
          name: data.name || updated[existingIdx].name,
          phone: data.phone || updated[existingIdx].phone,
          requestNotes: data.notes || updated[existingIdx].requestNotes,
          isRequestPending: true,
          requestedAt: new Date().toISOString()
        };
        return updated;
      }

      const newStudent = createStudentRecord(
        `usr_req_${Date.now()}`,
        data.name,
        data.email,
        data.phone || '',
        data.notes || '',
        undefined,
        true
      );
      return [newStudent, ...prev];
    });
  };

  const approveAccessRequest = (requestId: string) => {
    setAccessRequests((prev) =>
      prev.map((r) => {
        if (r.id === requestId) {
          return { ...r, status: 'approved' as const };
        }
        return r;
      })
    );

    const targetReq = accessRequests.find((r) => r.id === requestId);
    if (targetReq) {
      setAllStudents((prev) =>
        prev.map((s) => {
          if (s.email.toLowerCase() === targetReq.email.toLowerCase()) {
            return {
              ...s,
              isRequestPending: false,
              subscriptionStatus: 'active',
              subscriptionDaysLeft: 30
            };
          }
          return s;
        })
      );
    }
  };

  const deleteAccessRequest = (requestId: string) => {
    setAccessRequests((prev) => prev.filter((r) => r.id !== requestId));
  };

  const quickDemoLogin = () => {
    login('aluno.novo@insightenglish.com', 'Novo Aluno Insight');
  };

  const logout = () => {
    setUser(null);
  };

  const updateUserHours = (hours: number) => {
    if (user) {
      setUser((prev) =>
        prev
          ? {
              ...prev,
              totalHoursStudied: Math.round(((prev.totalHoursStudied || 0) + hours) * 10) / 10
            }
          : null
      );
    }
  };

  const setStudentCefrLevel = (level: CEFRLevel) => {
    if (user) {
      setUser((prev) => (prev ? { ...prev, cefrLevel: level } : null));
    }
  };

  // Renova por mais um ciclo (+30 dias)
  const renewStudentCycle = (studentId: string) => {
    const pad = (n: number) => String(n).padStart(2, '0');
    const now = new Date();
    const newExpiry = new Date(now);
    newExpiry.setDate(newExpiry.getDate() + 30);
    const expiresIso = `${newExpiry.getFullYear()}-${pad(newExpiry.getMonth() + 1)}-${pad(newExpiry.getDate())}`;

    setAllStudents((prev) =>
      prev.map((s) => {
        if (s.id === studentId) {
          return {
            ...s,
            subscriptionDaysLeft: 30,
            subscriptionExpiresAt: expiresIso,
            subscriptionStatus: 'active',
            isPaidMember: true
          };
        }
        return s;
      })
    );

    if (user && user.id === studentId) {
      setUser((prev) =>
        prev
          ? {
              ...prev,
              subscriptionDaysLeft: 30,
              subscriptionExpiresAt: expiresIso,
              subscriptionStatus: 'active',
              isPaidMember: true
            }
          : null
      );
    }
  };

  const isAdmin = user?.role === 'admin';
  const isSubscriptionBlocked =
    !isAdmin &&
    !!user &&
    (user.subscriptionDaysLeft <= 0 || user.subscriptionStatus === 'blocked');

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        isAdmin,
        isSubscriptionBlocked,
        login,
        loginAsAdmin,
        logout,
        quickDemoLogin,
        updateUserHours,
        setStudentCefrLevel,
        renewStudentCycle,
        allStudents,
        accessRequests,
        requestAccess,
        approveAccessRequest,
        deleteAccessRequest
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
