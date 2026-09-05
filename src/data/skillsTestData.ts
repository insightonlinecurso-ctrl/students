export type SkillType = 'listening' | 'reading' | 'speaking' | 'writing';
export type SkillLevel = 'A1' | 'A2' | 'B1' | 'B2' | 'C1';

export interface SkillTestItem {
  id: number; // 1 to 15
  skill: SkillType;
  level: SkillLevel;
  title: string;
  instruction: string;
  
  // Listening fields
  audioScript?: string;
  
  // Reading fields
  passageTitle?: string;
  passageText?: string;
  
  // Multiple-choice questions (Listening & Reading)
  question?: string;
  options?: string[];
  correctIndex?: number;
  explanation?: string;
  
  // Speaking fields
  speakingContext?: string;
  promptToRespond?: string;
  targetResponse?: string;
  pronunciationNotes?: string;
  keyPhrases?: string[];
  
  // Writing fields
  writingContext?: string;
  writingTask?: string;
  writingGuidelines?: string[];
  sampleResponse?: string;
  minWords?: number;
}

export interface SkillInfo {
  id: SkillType;
  name: string;
  namePt: string;
  description: string;
  badge: string;
  color: string;
  accentBg: string;
  borderClass: string;
  iconName: string;
}

export const SKILLS_CONFIG: Record<SkillType, SkillInfo> = {
  listening: {
    id: 'listening',
    name: 'Listening',
    namePt: 'Compreensão Auditiva',
    description: 'Ouça diálogos e monólogos em velocidade nativa e responda a perguntas de interpretação.',
    badge: 'Áudio Nativo',
    color: 'text-blue-600',
    accentBg: 'bg-blue-50',
    borderClass: 'border-blue-200 hover:border-blue-500',
    iconName: 'Headphones'
  },
  reading: {
    id: 'reading',
    name: 'Reading',
    namePt: 'Leitura & Interpretação',
    description: 'Textos autênticos de complexidade progressiva para testar compreensão textual e vocabulário.',
    badge: 'Textos Reais',
    color: 'text-emerald-600',
    accentBg: 'bg-emerald-50',
    borderClass: 'border-emerald-200 hover:border-emerald-500',
    iconName: 'BookOpen'
  },
  speaking: {
    id: 'speaking',
    name: 'Speaking',
    namePt: 'Expressão Oral & Fala',
    description: 'Pratique respostas orais a situações reais com modelo nativo, gravação e critérios de fluência.',
    badge: 'Gravação & Pronúncia',
    color: 'text-amber-600',
    accentBg: 'bg-amber-50',
    borderClass: 'border-amber-200 hover:border-amber-500',
    iconName: 'Mic'
  },
  writing: {
    id: 'writing',
    name: 'Writing',
    namePt: 'Produção Textual',
    description: 'Crie e-mails, redações, argumentos e sínteses com contagem de palavras e modelo de resposta.',
    badge: 'Redação & Gramática',
    color: 'text-violet-600',
    accentBg: 'bg-violet-50',
    borderClass: 'border-violet-200 hover:border-violet-500',
    iconName: 'PenTool'
  }
};

export const CEFR_LEVELS_CONFIG: {
  level: SkillLevel;
  name: string;
  description: string;
  colorBadge: string;
}[] = [
  {
    level: 'A1',
    name: 'Iniciante (Beginner)',
    description: 'Frases simples do dia a dia, saudações, horários e vocabulário essencial.',
    colorBadge: 'bg-emerald-100 text-emerald-800 border-emerald-300'
  },
  {
    level: 'A2',
    name: 'Básico (Elementary)',
    description: 'Rotina, compras, direções, passado simples e situações cotidianas familiares.',
    colorBadge: 'bg-teal-100 text-teal-800 border-teal-300'
  },
  {
    level: 'B1',
    name: 'Intermediário (Intermediate)',
    description: 'Viagens, opiniões, sentimentos, planos futuros e compreensão de conversas gerais.',
    colorBadge: 'bg-blue-100 text-blue-800 border-blue-300'
  },
  {
    level: 'B2',
    name: 'Intermediário Superior (Upper-Intermediate)',
    description: 'Debates, tópicos técnicos e abstratos, nuances de linguagem e fluência espontânea.',
    colorBadge: 'bg-indigo-100 text-indigo-800 border-indigo-300'
  },
  {
    level: 'C1',
    name: 'Avançado (Advanced)',
    description: 'Textos acadêmicos e profissionais complexos, ironia, termos idiomáticos e discurso refinado.',
    colorBadge: 'bg-purple-100 text-purple-800 border-purple-300'
  }
];
