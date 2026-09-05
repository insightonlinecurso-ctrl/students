import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Users, 
  Search, 
  Calendar, 
  Clock, 
  Flame, 
  CheckCircle2, 
  AlertCircle, 
  RefreshCw, 
  MessageSquare, 
  GraduationCap, 
  Lock, 
  Unlock, 
  ExternalLink,
  ChevronRight,
  TrendingUp,
  SlidersHorizontal,
  FileText,
  Phone,
  Mail,
  UserPlus,
  Trash2,
  MessageCircle,
  Sparkles,
  Key,
  Eye,
  EyeOff,
  Copy,
  Check
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useProgress } from '../context/ProgressContext';
import { User } from '../types';
import { INSIGHT_LOGO_ICON, CALENDLY_BOOKING_URL } from '../assets/brand';

export const AdminView: React.FC = () => {
  const { 
    allStudents, 
    accessRequests, 
    approveAccessRequest, 
    approveStudentDirectly, 
    deleteAccessRequest, 
    deleteStudent,
    renewStudentCycle,
    updateStudentPassword,
    user 
  } = useAuth();
  const { conversationSubmissions, scheduledClasses } = useProgress();

  const [selectedStudentId, setSelectedStudentId] = useState<string>(
    allStudents[0]?.id || ''
  );
  const [searchTerm, setSearchTerm] = useState('');
  const [renewalSuccessId, setRenewalSuccessId] = useState<string | null>(null);
  const [actionNotice, setActionNotice] = useState<string | null>(null);
  const [studentToDelete, setStudentToDelete] = useState<User | null>(null);

  // Password management state
  const [editingPasswordStudentId, setEditingPasswordStudentId] = useState<string | null>(null);
  const [newPasswordInput, setNewPasswordInput] = useState<string>('');
  const [showPassword, setShowPassword] = useState<{ [id: string]: boolean }>({});
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const toggleShowPassword = (id: string) => {
    setShowPassword((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const generateRandomPassword = () => {
    const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
    let pass = '';
    for (let i = 0; i < 6; i++) {
      pass += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return pass;
  };

  const handleCopyCredentials = (student: User) => {
    const pass = student.password || '123456';
    const text = `Olá ${student.name}, seu acesso à plataforma Insight English Club está liberado!\n\nDados de login:\nE-mail: ${student.email}\nSenha: ${pass}\nLink de acesso: ${window.location.origin}\n\nBons estudos!`;
    navigator.clipboard.writeText(text);
    setCopiedId(student.id);
    setActionNotice(`Dados de acesso de ${student.name} copiados com sucesso!`);
    setTimeout(() => {
      setCopiedId(null);
      setActionNotice(null);
    }, 4000);
  };

  const handleSavePassword = (studentId: string) => {
    const clean = newPasswordInput.trim();
    if (!clean) return;
    updateStudentPassword(studentId, clean);
    setActionNotice('Senha do aluno atualizada com sucesso!');
    setEditingPasswordStudentId(null);
    setNewPasswordInput('');
    setTimeout(() => setActionNotice(null), 3500);
  };

  const handleConfirmDeleteStudent = () => {
    if (!studentToDelete) return;
    const deletedName = studentToDelete.name;
    deleteStudent(studentToDelete.id);
    setActionNotice(`Aluno "${deletedName}" foi descadastrado com sucesso.`);
    setTimeout(() => setActionNotice(null), 4000);
    const remaining = allStudents.filter((s) => s.id !== studentToDelete.id);
    if (remaining.length > 0) {
      setSelectedStudentId(remaining[0].id);
    } else {
      setSelectedStudentId('');
    }
    setStudentToDelete(null);
  };

  // Filter students by name, email or phone
  const filteredStudents = allStudents.filter((s) =>
    s.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    s.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    (s.phone && s.phone.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const selectedStudent = allStudents.find((s) => s.id === selectedStudentId) || allStudents[0];

  // Conversation answers submitted by this student
  const studentSubmissions = conversationSubmissions.filter(
    (sub) => sub.studentId === selectedStudent?.id || sub.studentName === selectedStudent?.name
  );

  // Classes for this student
  const studentClasses = scheduledClasses.filter(
    (c) => c.studentId === selectedStudent?.id || c.studentName === selectedStudent?.name
  );

  // Format date DD/MM/AAAA
  const formatDateBR = (iso?: string) => {
    if (!iso) return '01/09/2026';
    const clean = iso.split('T')[0];
    const parts = clean.split('-');
    if (parts.length === 3) {
      return `${parts[2]}/${parts[1]}/${parts[0]}`;
    }
    return iso;
  };

  const handleRenewCycle = (studentId: string) => {
    renewStudentCycle(studentId);
    setRenewalSuccessId(studentId);
    setTimeout(() => setRenewalSuccessId(null), 3000);
  };

  const handleApprove = (reqId: string, reqName: string) => {
    approveAccessRequest(reqId);
    setActionNotice(`Acesso de ${reqName} liberado com sucesso por 30 dias!`);
    setTimeout(() => setActionNotice(null), 4000);
  };

  const handleDeleteReq = (reqId: string) => {
    deleteAccessRequest(reqId);
    setActionNotice('Solicitação removida.');
    setTimeout(() => setActionNotice(null), 3000);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      
      {/* Top Banner Admin */}
      <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-8 border border-slate-800 shadow-md flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="flex items-start space-x-4">
          <div className="w-12 h-12 rounded-2xl overflow-hidden bg-[#8897a2] border border-slate-700 flex-shrink-0 shadow-md">
            <img 
              src={INSIGHT_LOGO_ICON} 
              alt="Insight Logo" 
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover" 
            />
          </div>
          <div className="space-y-1.5">
            <div className="flex items-center space-x-2 text-emerald-400">
              <ShieldCheck className="w-5 h-5" />
              <span className="text-xs uppercase font-bold tracking-wider">Painel Administrativo Master</span>
              <span className="text-slate-500">•</span>
              <span className="text-xs text-slate-300 font-mono">Autenticado: Carlos (10186810)</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
              Gestão Pedagógica & Matrículas dos Alunos
            </h1>
            <p className="text-xs text-slate-400 max-w-2xl leading-relaxed">
              Monitore solicitações de primeiro acesso, frequência de cada estudante, respostas de conversação submetidas no Material, agendamentos de aulas e renove ciclos de assinatura de 30 dias.
            </p>
          </div>
        </div>

        {/* Global metric pills */}
        <div className="flex flex-wrap gap-3">
          <div className="px-4 py-2.5 rounded-2xl bg-slate-800 border border-slate-700 text-center relative">
            <span className="text-[10px] uppercase font-bold text-amber-400 block">Solicitações de Acesso</span>
            <span className="text-xl font-black text-amber-300 font-mono">{accessRequests.length}</span>
          </div>
          <div className="px-4 py-2.5 rounded-2xl bg-slate-800 border border-slate-700 text-center">
            <span className="text-[10px] uppercase font-bold text-slate-400 block">Total de Alunos</span>
            <span className="text-xl font-black text-white font-mono">{allStudents.length}</span>
          </div>
          <div className="px-4 py-2.5 rounded-2xl bg-slate-800 border border-slate-700 text-center">
            <span className="text-[10px] uppercase font-bold text-slate-400 block">Respostas Enviadas</span>
            <span className="text-xl font-black text-blue-400 font-mono">{conversationSubmissions.length}</span>
          </div>
          <div className="px-4 py-2.5 rounded-2xl bg-slate-800 border border-slate-700 text-center">
            <span className="text-[10px] uppercase font-bold text-slate-400 block">Aulas Marcadas</span>
            <span className="text-xl font-black text-emerald-400 font-mono">{scheduledClasses.length}</span>
          </div>
        </div>
      </div>

      {/* Alerta de Ação */}
      {actionNotice && (
        <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold flex items-center space-x-2 animate-fadeIn">
          <CheckCircle2 className="w-4 h-4 text-emerald-600" />
          <span>{actionNotice}</span>
        </div>
      )}

      {/* ========================================================= */}
      {/* SEÇÃO DESTACADA: Solicitações de Primeiro Acesso          */}
      {/* ========================================================= */}
      <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-7 shadow-xs space-y-4">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 border-b border-slate-100 pb-4">
          <div className="flex items-center space-x-3">
            <div className="w-9 h-9 rounded-xl bg-amber-50 text-amber-600 border border-amber-200 flex items-center justify-center">
              <UserPlus className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <h2 className="font-black text-lg text-slate-900">
                  Solicitações de Primeiro Acesso & Matrículas
                </h2>
                <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-amber-100 text-amber-800 font-mono">
                  {accessRequests.length} {accessRequests.length === 1 ? 'registro' : 'registros'}
                </span>
              </div>
              <p className="text-xs text-slate-500">
                Pessoas que preencheram nome, e-mail e telefone na tela inicial solicitando acesso à plataforma.
              </p>
            </div>
          </div>
        </div>

        {accessRequests.length === 0 ? (
          <div className="p-6 text-center bg-slate-50 rounded-2xl border border-dashed border-slate-200 text-xs text-slate-500">
            Nenhuma nova solicitação pendente no momento. Quando um visitante solicitar acesso pelo formulário, os dados (nome, e-mail e telefone) aparecerão aqui instantaneamente.
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pt-2">
            {accessRequests.map((req) => {
              const cleanPhone = req.phone.replace(/\D/g, '');
              const waLink = cleanPhone ? `https://wa.me/55${cleanPhone}` : null;

              return (
                <div 
                  key={req.id} 
                  className={`p-5 rounded-2xl border transition-all space-y-3 relative ${
                    req.status === 'approved' 
                      ? 'bg-slate-50 border-slate-200 opacity-90' 
                      : 'bg-white border-amber-300 shadow-sm ring-2 ring-amber-100'
                  }`}
                >
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <h4 className="font-bold text-sm text-slate-900">{req.name}</h4>
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider ${
                        req.status === 'approved' 
                          ? 'bg-emerald-100 text-emerald-800' 
                          : 'bg-amber-100 text-amber-800'
                      }`}>
                        {req.status === 'approved' ? 'Acesso Liberado (+30d)' : 'Primeiro Acesso Pendente'}
                      </span>
                    </div>
                    <button
                      onClick={() => handleDeleteReq(req.id)}
                      title="Remover solicitação"
                      className="p-1.5 text-slate-400 hover:text-rose-600 rounded-lg hover:bg-slate-100"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  <div className="space-y-1.5 text-xs text-slate-700">
                    <div className="flex items-center space-x-2">
                      <Mail className="w-3.5 h-3.5 text-slate-400" />
                      <span className="font-mono truncate">{req.email}</span>
                    </div>

                    {req.phone ? (
                      <div className="flex items-center space-x-2">
                        <Phone className="w-3.5 h-3.5 text-emerald-600" />
                        <span className="font-mono font-bold text-slate-900">{req.phone}</span>
                      </div>
                    ) : (
                      <div className="flex items-center space-x-2 text-slate-400 italic text-[11px]">
                        <Phone className="w-3.5 h-3.5" />
                        <span>Telefone não informado</span>
                      </div>
                    )}

                    <div className="flex items-center space-x-2 text-[10px] text-slate-400 pt-1">
                      <Clock className="w-3 h-3" />
                      <span>Data: {new Date(req.createdAt).toLocaleString('pt-BR')}</span>
                    </div>

                    <div className="flex items-center space-x-2 text-xs pt-1 p-2 rounded-xl bg-blue-50/70 border border-blue-100">
                      <Key className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                      <span className="text-slate-600 font-medium">Senha solicitada:</span>
                      <span className="font-mono font-bold text-slate-900 bg-white px-2 py-0.5 rounded border border-blue-200 text-xs">
                        {req.password || '123456'}
                      </span>
                    </div>

                    {req.notes && (
                      <div className="p-2.5 rounded-xl bg-slate-100 border border-slate-200 text-[11px] text-slate-700 mt-2">
                        <strong className="block text-[10px] uppercase font-bold text-slate-500">Observações:</strong>
                        {req.notes}
                      </div>
                    )}
                  </div>

                  {/* Ações para o Professor Carlos */}
                  <div className="pt-2 flex items-center space-x-2 border-t border-slate-100">
                    {req.status !== 'approved' && (
                      <button
                        onClick={() => handleApprove(req.id, req.name)}
                        className="flex-1 py-2 px-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs shadow-xs flex items-center justify-center space-x-1.5"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        <span>Aprovar Acesso</span>
                      </button>
                    )}

                    {waLink && (
                      <a
                        href={waLink}
                        target="_blank"
                        rel="noreferrer"
                        className="p-2 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white shadow-xs flex items-center justify-center"
                        title="Conversar no WhatsApp"
                      >
                        <MessageCircle className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* Main Grid: Left Students List + Right Student Detailed File */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* ========================================================= */}
        {/* LEFT 4 COLS: Lista de Alunos                              */}
        {/* ========================================================= */}
        <div className="lg:col-span-4 bg-white border border-slate-200 rounded-3xl p-5 shadow-xs space-y-4">
          <div className="flex items-center justify-between border-b border-slate-100 pb-3">
            <div className="flex items-center space-x-2 text-blue-600">
              <Users className="w-5 h-5" />
              <h2 className="font-bold text-base text-slate-900">Alunos Cadastrados</h2>
            </div>
            <span className="text-xs text-slate-500 font-mono font-bold">
              {filteredStudents.length}
            </span>
          </div>

          {/* Search */}
          <div className="relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Buscar por nome, e-mail ou telefone..."
              className="w-full pl-9 pr-3 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-500"
            />
          </div>

          {/* Students List */}
          <div className="space-y-2">
            {filteredStudents.length === 0 ? (
              <div className="p-8 text-center bg-slate-50 rounded-2xl border border-dashed border-slate-200">
                <Users className="w-8 h-8 text-slate-300 mx-auto mb-2" />
                <p className="text-xs font-semibold text-slate-700 mb-1">Nenhum aluno encontrado</p>
                <p className="text-[11px] text-slate-500">
                  Os alunos aparecerão aqui automaticamente quando realizarem o primeiro acesso.
                </p>
              </div>
            ) : (
              filteredStudents.map((s) => {
                const isSelected = s.id === selectedStudent?.id;
                const isBlocked = s.subscriptionDaysLeft <= 0 || s.subscriptionStatus === 'blocked';

                return (
                  <button
                    key={s.id}
                    onClick={() => setSelectedStudentId(s.id)}
                    className={`w-full text-left p-3.5 rounded-2xl border transition-all flex items-start justify-between space-x-3 ${
                      isSelected
                        ? 'bg-blue-600 text-white border-blue-600 shadow-sm'
                        : 'bg-white hover:bg-slate-50 text-slate-800 border-slate-200/80'
                    }`}
                  >
                    <div className="space-y-1 min-w-0 flex-1">
                      <div className="flex items-center space-x-2">
                        <span className={`font-bold text-xs truncate ${isSelected ? 'text-white' : 'text-slate-900'}`}>
                          {s.name}
                        </span>
                        {s.isRequestPending && (
                          <span className="text-[9px] font-bold px-1.5 py-0.2 rounded bg-amber-400 text-slate-950">
                            Requisitado
                          </span>
                        )}
                        <span className={`text-[10px] font-bold px-1.5 py-0.2 rounded font-mono ${
                          isBlocked
                            ? 'bg-rose-100 text-rose-800'
                            : isSelected ? 'bg-blue-700 text-white' : 'bg-emerald-100 text-emerald-800'
                        }`}>
                          {isBlocked ? 'Bloqueado' : `${s.subscriptionDaysLeft}d`}
                        </span>
                      </div>

                      <p className={`text-[11px] truncate ${isSelected ? 'text-blue-100' : 'text-slate-500'}`}>
                        {s.email}
                      </p>

                      {s.phone && (
                        <p className={`text-[10px] font-mono flex items-center space-x-1 ${isSelected ? 'text-emerald-200' : 'text-emerald-600'}`}>
                          <Phone className="w-2.5 h-2.5" />
                          <span>{s.phone}</span>
                        </p>
                      )}

                      <div className={`flex items-center space-x-2 text-[10px] ${isSelected ? 'text-blue-200' : 'text-slate-400'}`}>
                        <span>Início: {formatDateBR(s.joinedAt || s.createdAt)}</span>
                        <span>•</span>
                        <span>CEFR: {s.cefrLevel || 'A1'}</span>
                      </div>
                    </div>

                    <ChevronRight className={`w-4 h-4 shrink-0 mt-1 ${isSelected ? 'text-white' : 'text-slate-300'}`} />
                  </button>
                );
              })
            )}
          </div>
        </div>

        {/* ========================================================= */}
        {/* RIGHT 8 COLS: Detalhes, Respostas e Histórico do Aluno     */}
        {/* ========================================================= */}
        {selectedStudent ? (
          <div className="lg:col-span-8 space-y-6">
            
            {/* Student Dossier Header Card */}
            <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-7 shadow-xs space-y-6">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-100 pb-5">
                <div className="flex items-center space-x-4">
                  <div className="w-14 h-14 rounded-2xl bg-slate-900 text-white flex items-center justify-center font-bold text-xl shadow-xs">
                    {selectedStudent.name.charAt(0)}
                  </div>
                  <div>
                    <div className="flex items-center space-x-2">
                      <h2 className="text-xl font-black text-slate-900">{selectedStudent.name}</h2>
                      <span className={`text-[11px] font-bold px-2 py-0.5 rounded-full ${
                        selectedStudent.subscriptionDaysLeft > 0
                          ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                          : 'bg-rose-50 text-rose-700 border border-rose-200'
                      }`}>
                        {selectedStudent.subscriptionDaysLeft > 0 ? 'Assinatura Ativa' : 'Acesso Expirado'}
                      </span>
                    </div>
                    <div className="flex flex-wrap items-center gap-3 pt-1">
                      <p className="text-xs text-slate-500 font-mono flex items-center space-x-1">
                        <Mail className="w-3 h-3 text-slate-400" />
                        <span>{selectedStudent.email}</span>
                      </p>

                      {selectedStudent.phone && (
                        <a 
                          href={`https://wa.me/55${selectedStudent.phone.replace(/\D/g, '')}`}
                          target="_blank"
                          rel="noreferrer"
                          className="text-xs font-mono font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-lg border border-emerald-200 hover:bg-emerald-100 flex items-center space-x-1"
                        >
                          <Phone className="w-3 h-3 text-emerald-600" />
                          <span>{selectedStudent.phone} (WhatsApp)</span>
                        </a>
                      )}
                    </div>
                  </div>
                </div>

                {/* Botões de Ação do Aluno */}
                <div className="w-full sm:w-auto flex flex-col sm:flex-row items-stretch sm:items-center gap-2">
                  {selectedStudent.isRequestPending && (
                    <button
                      onClick={() => {
                        approveStudentDirectly(selectedStudent.id);
                        setActionNotice(`Acesso de ${selectedStudent.name} liberado com sucesso por 30 dias!`);
                        setTimeout(() => setActionNotice(null), 4000);
                      }}
                      className="flex items-center justify-center space-x-2 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold shadow-md shadow-emerald-600/20 transition-all hover:scale-105 cursor-pointer"
                    >
                      <CheckCircle2 className="w-4 h-4" />
                      <span>Aprovar Acesso Agora (+30 dias)</span>
                    </button>
                  )}

                  <button
                    onClick={() => handleRenewCycle(selectedStudent.id)}
                    className="flex items-center justify-center space-x-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold shadow-md shadow-blue-600/20 transition-all hover:scale-105 cursor-pointer"
                  >
                    <RefreshCw className="w-4 h-4" />
                    <span>Renovar Ciclo (+30 dias)</span>
                  </button>

                  <button
                    onClick={() => setStudentToDelete(selectedStudent)}
                    title="Descadastrar aluno da plataforma"
                    className="flex items-center justify-center space-x-1.5 px-4 py-2.5 rounded-xl bg-rose-50 hover:bg-rose-100 border border-rose-200 text-rose-700 text-xs font-bold transition-all hover:scale-105 cursor-pointer"
                  >
                    <Trash2 className="w-3.5 h-3.5 text-rose-600" />
                    <span>Descadastrar Aluno</span>
                  </button>
                </div>
              </div>

              {/* Mensagem deixada no Primeiro Acesso (se houver) */}
              {selectedStudent.requestNotes && (
                <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-xs text-amber-900 space-y-1">
                  <span className="font-bold flex items-center space-x-1.5 text-amber-800">
                    <UserPlus className="w-3.5 h-3.5 text-amber-600" />
                    <span>Mensagem enviada no formulário de primeiro acesso:</span>
                  </span>
                  <p className="pl-5 text-slate-700 italic">"{selectedStudent.requestNotes}"</p>
                </div>
              )}

              {/* Data de Início, Validade & Frequência de Uso */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
                <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-100">
                  <span className="text-[11px] font-semibold text-slate-500 block">Data de Início</span>
                  <span className="text-sm font-black text-slate-900 font-mono">
                    {formatDateBR(selectedStudent.joinedAt || selectedStudent.createdAt)}
                  </span>
                </div>

                <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-100">
                  <span className="text-[11px] font-semibold text-slate-500 block">Dias Restantes</span>
                  <span className="text-sm font-black text-blue-600 font-mono">
                    {selectedStudent.subscriptionDaysLeft} dias
                  </span>
                </div>

                <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-100">
                  <span className="text-[11px] font-semibold text-slate-500 block">Frequência de Logins</span>
                  <span className="text-sm font-black text-slate-900 font-mono">
                    {selectedStudent.usageFrequency?.loginCount || 1} acessos
                  </span>
                </div>

                <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-100">
                  <span className="text-[11px] font-semibold text-slate-500 block">Telefone</span>
                  <span className="text-xs font-bold text-slate-900 font-mono truncate block">
                    {selectedStudent.phone || 'Não informado'}
                  </span>
                </div>
              </div>
            </div>

            {/* Credenciais & Senha do Aluno */}
            <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-7 shadow-xs space-y-4">
              <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                <div className="flex items-center space-x-2 text-blue-600">
                  <Key className="w-5 h-5" />
                  <div>
                    <h3 className="font-bold text-base text-slate-900">
                      Credenciais & Senha de Acesso do Aluno
                    </h3>
                    <p className="text-[11px] text-slate-400">
                      Visualize ou redefina a senha deste aluno e copie os dados de acesso prontos para o WhatsApp.
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* E-mail cadastrado */}
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 space-y-1">
                  <span className="text-[11px] font-semibold text-slate-500 block">E-mail de Login</span>
                  <span className="text-sm font-bold text-slate-900 font-mono block truncate">
                    {selectedStudent.email}
                  </span>
                </div>

                {/* Senha cadastrada com toggle */}
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-between">
                  <div>
                    <span className="text-[11px] font-semibold text-slate-500 block">Senha Atual</span>
                    <span className="text-sm font-black text-slate-900 font-mono">
                      {showPassword[selectedStudent.id] 
                        ? (selectedStudent.password || '123456') 
                        : '••••••••'}
                    </span>
                  </div>
                  <button
                    onClick={() => toggleShowPassword(selectedStudent.id)}
                    className="p-2 text-slate-500 hover:text-slate-900 rounded-xl hover:bg-slate-200/60 transition-colors"
                    title={showPassword[selectedStudent.id] ? 'Ocultar Senha' : 'Ver Senha'}
                  >
                    {showPassword[selectedStudent.id] ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              {/* Botões de Ação de Senha */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  onClick={() => handleCopyCredentials(selectedStudent)}
                  className={`py-2.5 px-4 rounded-xl text-xs font-bold transition-all flex items-center space-x-2 cursor-pointer shadow-xs ${
                    copiedId === selectedStudent.id
                      ? 'bg-emerald-600 text-white'
                      : 'bg-slate-900 hover:bg-slate-800 text-white'
                  }`}
                >
                  {copiedId === selectedStudent.id ? (
                    <>
                      <Check className="w-4 h-4" />
                      <span>Copiado para WhatsApp!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      <span>Copiar Dados de Acesso (WhatsApp)</span>
                    </>
                  )}
                </button>

                {editingPasswordStudentId !== selectedStudent.id ? (
                  <>
                    <button
                      onClick={() => {
                        setEditingPasswordStudentId(selectedStudent.id);
                        setNewPasswordInput(selectedStudent.password || '');
                      }}
                      className="py-2.5 px-4 rounded-xl bg-blue-50 hover:bg-blue-100 border border-blue-200 text-blue-700 text-xs font-bold transition-all cursor-pointer flex items-center space-x-1.5"
                    >
                      <Key className="w-3.5 h-3.5" />
                      <span>Alterar Senha do Aluno</span>
                    </button>

                    <button
                      onClick={() => {
                        const random = generateRandomPassword();
                        updateStudentPassword(selectedStudent.id, random);
                        setActionNotice(`Nova senha gerada automaticamente para ${selectedStudent.name}: ${random}`);
                        setTimeout(() => setActionNotice(null), 5000);
                      }}
                      className="py-2.5 px-4 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold transition-all cursor-pointer flex items-center space-x-1.5"
                      title="Gera uma senha curta e segura automaticamente"
                    >
                      <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                      <span>Gerar Senha Automática</span>
                    </button>
                  </>
                ) : null}
              </div>

              {/* Formulário Inline de Alteração de Senha */}
              {editingPasswordStudentId === selectedStudent.id && (
                <div className="p-4 rounded-2xl bg-blue-50/70 border border-blue-200 space-y-3 animate-fadeIn mt-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-blue-900">
                      Definir Nova Senha para {selectedStudent.name}
                    </span>
                    <button
                      type="button"
                      onClick={() => {
                        const random = generateRandomPassword();
                        setNewPasswordInput(random);
                      }}
                      className="text-[11px] text-blue-700 hover:underline font-bold flex items-center space-x-1"
                    >
                      <Sparkles className="w-3 h-3 text-amber-600" />
                      <span>Sugerir Senha Automática</span>
                    </button>
                  </div>

                  <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2">
                    <input
                      type="text"
                      value={newPasswordInput}
                      onChange={(e) => setNewPasswordInput(e.target.value)}
                      placeholder="Digite a nova senha..."
                      className="flex-1 px-3.5 py-2 rounded-xl bg-white border border-blue-300 text-xs font-mono font-bold text-slate-900 focus:outline-none focus:border-blue-500"
                    />
                    <button
                      onClick={() => handleSavePassword(selectedStudent.id)}
                      className="py-2 px-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs shadow-xs cursor-pointer"
                    >
                      Salvar Nova Senha
                    </button>
                    <button
                      onClick={() => {
                        setEditingPasswordStudentId(null);
                        setNewPasswordInput('');
                      }}
                      className="py-2 px-3 rounded-xl bg-white border border-slate-200 text-slate-600 hover:bg-slate-100 text-xs font-medium cursor-pointer"
                    >
                      Cancelar
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Respostas do Aluno nos Exercícios de Conversação do Material */}
            <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-7 shadow-xs space-y-4">
              <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                <div className="flex items-center space-x-2 text-blue-600">
                  <MessageSquare className="w-5 h-5" />
                  <h3 className="font-bold text-base text-slate-900">
                    Respostas dos Exercícios de Conversação (Material)
                  </h3>
                </div>
                <span className="text-xs text-slate-400 font-mono">
                  {studentSubmissions.length} respostas registradas
                </span>
              </div>

              {studentSubmissions.length === 0 ? (
                <div className="p-6 rounded-2xl bg-slate-50 text-center text-xs text-slate-500">
                  Nenhuma resposta de conversação enviada por este aluno ainda.
                </div>
              ) : (
                <div className="space-y-4">
                  {studentSubmissions.map((sub) => (
                    <div key={sub.id} className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-3">
                      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-200 pb-2">
                        <span className="text-xs font-bold text-blue-700">
                          {sub.unitTitle}
                        </span>
                        <div className="flex items-center space-x-2">
                          <span className="text-[11px] font-mono font-bold px-2 py-0.5 rounded bg-emerald-100 text-emerald-800">
                            Nota: {sub.score}/100
                          </span>
                          <span className="text-[10px] text-slate-400">
                            {new Date(sub.submittedAt).toLocaleDateString('pt-BR')}
                          </span>
                        </div>
                      </div>

                      <div>
                        <span className="text-[11px] font-semibold text-slate-500 block">Pergunta da Unidade:</span>
                        <p className="text-xs font-bold text-slate-900 font-serif italic">
                          "{sub.questionPrompt}"
                        </p>
                      </div>

                      <div className="p-3 rounded-xl bg-white border border-slate-200 space-y-1">
                        <span className="text-[10px] font-bold text-slate-400 uppercase">Resposta Escrita pelo Aluno:</span>
                        <p className="text-xs text-slate-800 font-medium">
                          "{sub.studentAnswer}"
                        </p>
                      </div>

                      {sub.correctedSentence && (
                        <div className="p-3 rounded-xl bg-blue-50/70 border border-blue-200 text-xs space-y-1">
                          <span className="text-[10px] font-bold text-blue-700 uppercase">Sugestão & Correção:</span>
                          <p className="text-xs text-blue-950 font-medium">
                            "{sub.correctedSentence}"
                          </p>
                          <p className="text-[11px] text-slate-600 mt-1">
                            {sub.feedback}
                          </p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Histórico de Aulas Marcadas pelo Aluno */}
            <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-7 shadow-xs space-y-4">
              <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                <div className="flex items-center space-x-2 text-indigo-600">
                  <Calendar className="w-5 h-5" />
                  <h3 className="font-bold text-base text-slate-900">
                    Aulas Particulares do Aluno
                  </h3>
                </div>
                <span className="text-xs text-slate-400 font-mono">
                  {studentClasses.length} aulas registradas
                </span>
              </div>

              {studentClasses.length === 0 ? (
                <div className="p-6 rounded-2xl bg-slate-50 text-center text-xs text-slate-500">
                  O aluno ainda não agendou aulas pelo portal.
                </div>
              ) : (
                <div className="space-y-3">
                  {studentClasses.map((cls) => (
                    <div key={cls.id} className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                      <div className="space-y-1">
                        <div className="flex items-center space-x-2">
                          <span className="text-xs font-bold text-slate-900 font-mono">
                            {cls.date} às {cls.time}
                          </span>
                          <span className={`text-[10px] font-bold uppercase px-2 py-0.5 rounded-full ${
                            cls.status === 'concluída' ? 'bg-slate-200 text-slate-700' : 'bg-emerald-100 text-emerald-800'
                          }`}>
                            {cls.status}
                          </span>
                          <span className="text-xs text-blue-600 font-semibold">• {cls.classType}</span>
                        </div>
                        <p className="text-xs text-slate-600 italic">
                          Objetivos do aluno: "{cls.studentGoals}"
                        </p>
                      </div>

                      <a
                        href={cls.calendlyUrl || CALENDLY_BOOKING_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-3.5 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-white text-[11px] font-semibold flex items-center space-x-1.5 shrink-0"
                      >
                        <ExternalLink className="w-3 h-3" />
                        <span>Ver no Calendly</span>
                      </a>
                    </div>
                  ))}
                </div>
              )}
            </div>

          </div>
        ) : (
          <div className="lg:col-span-8 bg-white border border-slate-200 rounded-3xl p-12 text-center shadow-xs">
            <Users className="w-12 h-12 text-slate-300 mx-auto mb-3" />
            <h3 className="text-base font-bold text-slate-900 mb-1">Nenhum Aluno Selecionado</h3>
            <p className="text-xs text-slate-500 max-w-md mx-auto leading-relaxed">
              Assim que os alunos acessarem a plataforma pela primeira vez com seu e-mail, os perfis aparecerão listados aqui com histórico de unidades estudadas, exercícios e agendamentos.
            </p>
          </div>
        )}

      </div>

      {/* Modal de Confirmação para Descadastrar Aluno */}
      {studentToDelete && (
        <div className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl border border-slate-200 text-slate-900 space-y-4 animate-fadeIn">
            <div className="w-12 h-12 rounded-2xl bg-rose-100 text-rose-600 flex items-center justify-center mx-auto">
              <Trash2 className="w-6 h-6" />
            </div>
            <div className="text-center space-y-2">
              <h3 className="text-lg font-black text-slate-900">Confirmar Descadastro</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Tem certeza que deseja descadastrar o aluno <strong className="text-slate-900">{studentToDelete.name}</strong> ({studentToDelete.email})?
              </p>
              <div className="text-[11px] text-rose-700 bg-rose-50 p-3 rounded-xl border border-rose-200 text-left space-y-1">
                <p className="font-bold flex items-center space-x-1">
                  <AlertCircle className="w-3.5 h-3.5 text-rose-600 shrink-0" />
                  <span>Atenção:</span>
                </p>
                <p>Esta ação removerá o acesso do aluno, impedirá novos logins e excluirá o perfil da lista da plataforma.</p>
              </div>
            </div>

            <div className="flex items-center space-x-3 pt-2">
              <button
                type="button"
                onClick={() => setStudentToDelete(null)}
                className="flex-1 py-2.5 rounded-xl border border-slate-300 text-slate-700 text-xs font-bold hover:bg-slate-50 transition-colors cursor-pointer"
              >
                Cancelar
              </button>
              <button
                type="button"
                onClick={handleConfirmDeleteStudent}
                className="flex-1 py-2.5 rounded-xl bg-rose-600 hover:bg-rose-700 text-white text-xs font-bold shadow-md shadow-rose-600/20 transition-all cursor-pointer flex items-center justify-center space-x-1.5"
              >
                <Trash2 className="w-3.5 h-3.5" />
                <span>Sim, Descadastrar</span>
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
