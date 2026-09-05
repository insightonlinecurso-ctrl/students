export type SkillCategory = 'Listening' | 'Speaking' | 'Reading' | 'Writing';

export type CEFRLevel = 'A1' | 'A2' | 'B1' | 'B2' | 'C1' | 'C2';

export interface CompetencyScores {
  listening: number;
  speaking: number;
  reading: number;
  writing: number;
}

export interface AccessRequest {
  id: string;
  name: string;
  email: string;
  phone: string;
  notes?: string;
  createdAt: string;
  status: 'pending' | 'approved' | 'rejected';
}

export type LoginResult =
  | { success: true; role: 'admin' }
  | { success: true; role: 'student' }
  | { success: false; status: 'pending'; name: string }
  | { success: false; status: 'not_found'; message: string }
  | { success: false; status: 'blocked'; message: string };

export interface User {
  id: string;
  name: string;
  email: string;
  phone?: string;
  role: 'student' | 'admin';
  avatarUrl?: string;
  createdAt: string;
  subscriptionDaysLeft: number;
  subscriptionStatus: 'active' | 'expired' | 'blocked';
  isRequestPending?: boolean;
  requestNotes?: string;
  requestedAt?: string;
  isPaidMember?: boolean;
  planType?: string;
  subscriptionExpiresAt?: string;
  joinedAt?: string;
  totalHoursStudied?: number;
  studyStreakDays?: number;
  cefrLevel: CEFRLevel | 'Não realizado';
  currentUnitNumber: number;
  progressPercent: number;
  completedUnits: number[];
  competencyScores: CompetencyScores;
  lastActiveDate: string;
  usageFrequency: {
    loginCount: number;
    lastLogins: string[];
    totalStudyHours: number;
    daysActiveStreak: number;
  };
  completedClassesCount: number;
}

export interface ExampleSentence {
  en: string;
  pt: string;
  note?: string;
  highlightWord?: string;
}

export interface IllustratedStory {
  title: string;
  storyEn: string;
  storyPt: string;
  highlightSentence: string;
  visualTheme: string;
  tags: string[];
}

export interface FixationExercise {
  id: number;
  type: 'multiple-choice' | 'fill-blank';
  prompt: string;
  options?: string[];
  correctAnswer: string;
  explanation: string;
  points: number;
}

export interface ConversationExercise {
  questionPrompt: string;
  contextPt: string;
  exampleAnswer: string;
  hints: string[];
}

export interface GrammarUnit {
  id: number;
  number: number;
  title: string;
  subtitle: string;
  category: 'Auxiliares' | 'To Be' | 'Pronomes' | 'Caso Genitivo' | 'Modais' | 'Tempos Perfeitos' | 'Condicionais';
  estimatedHours: number;
  explanation: string;
  keyRules: string[];
  videoUrl: string;
  examples: {
    affirmatives: ExampleSentence[];
    negatives: ExampleSentence[];
    interrogatives: ExampleSentence[];
  };
  illustratedStory: IllustratedStory;
  fixationExercises: FixationExercise[];
  conversationExercise: ConversationExercise;
  plannerExerciseSuggestion: string;
}

export interface VocabularyWord {
  id: number;
  word: string;
  phonetic?: string;
  translation: string;
  partOfSpeech: string;
  exampleSentence: string;
  exampleTranslation: string;
  category?: string;
}

export interface UserWordProgress {
  word: string;
  translation: string;
  studentSentence: string;
  correctedSentence?: string;
  feedback?: string;
  score: number;
  learnedAt: string;
}

export interface ConversationSubmission {
  id: string;
  studentId: string;
  studentName: string;
  unitNumber: number;
  unitTitle: string;
  questionPrompt: string;
  studentAnswer: string;
  correctedSentence?: string;
  feedback?: string;
  score: number;
  submittedAt: string;
}

export interface ScheduledClass {
  id: string;
  studentId: string;
  studentName: string;
  studentProgressUnit: number;
  classType: 'Ponto Gramatical' | 'Conversação' | 'Pronúncia' | 'Livre';
  date: string;
  time: string;
  studentGoals: string;
  status: 'agendada' | 'concluída' | 'cancelada';
  calendlyUrl?: string;
  createdAt: string;
}

export interface PlannerDay {
  dayNumber: number;
  unitNumber: number;
  unitTitle: string;
  hours: number;
  exerciseSuggestion: string;
  focusSkill: 'Gramática' | 'Conversação' | 'Audição' | 'Vocabulário';
  completed: boolean;
}

export interface PlannerPlan {
  id: string;
  studentId: string;
  studentName: string;
  studentLevel?: string;
  mode: 'deadline' | 'hoursPerWeek';
  startDate: string;
  targetDate?: string;
  hoursPerWeek?: number;
  dailyMinutes: number;
  totalDays: number;
  totalHours: number;
  excludedUnits: number[];
  days: PlannerDay[];
  createdAt: string;
}

export interface PlacementQuestion {
  id: number;
  level: CEFRLevel;
  section: 'Grammar' | 'Vocabulary' | 'Reading' | 'Listening' | 'Use of English';
  prompt: string;
  readingPassage?: string;
  audioText?: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export interface TestResultRecord {
  id: string;
  studentId: string;
  studentName: string;
  totalScore: number; // out of 45
  percent: number;
  cefrLevel: CEFRLevel;
  breakdown: {
    listening: number;
    reading: number;
    grammar: number;
    vocabulary: number;
    useOfEnglish: number;
  };
  strengths: string[];
  weaknesses: string[];
  takenAt: string;
}

export interface ExtraExercise {
  id: string;
  skill: SkillCategory;
  level: 'Básico (A1-A2)' | 'Intermediário (B1-B2)' | 'Avançado (C1-C2)';
  title: string;
  description: string;
  instructions: string;
  content: any;
}
