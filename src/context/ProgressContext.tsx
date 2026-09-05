import React, { createContext, useContext, useState, useEffect } from 'react';
import { ALL_GRAMMAR_UNITS } from '../data/allUnits';
import { CompetencyScores, ConversationSubmission, ScheduledClass } from '../types';

interface ProgressContextType {
  completedUnitIds: number[];
  unitScores: Record<number, number>; // unitId -> best score (0 - 100)
  unitNotes: Record<number, string>; // unitId -> student personal notes
  learnedWordIds: number[];
  masteredWordIds: number[];
  completedPlannerTaskIds: string[];
  weeklyStudyHours: number;
  studyDaysPerWeek: number;
  competencyScores: CompetencyScores;
  conversationSubmissions: ConversationSubmission[];
  scheduledClasses: ScheduledClass[];
  
  toggleUnitCompleted: (unitId: number) => void;
  saveUnitScore: (unitId: number, score: number) => void;
  saveUnitNote: (unitId: number, note: string) => void;
  toggleWordLearned: (wordId: number) => void;
  toggleWordMastered: (wordId: number) => void;
  togglePlannerTask: (taskId: string) => void;
  setWeeklyHours: (hours: number) => void;
  setStudyDays: (days: number) => void;
  speakText: (text: string, lang?: string) => void;
  updateCompetencyScore: (skill: 'listening' | 'speaking' | 'reading' | 'writing', points: number) => void;
  saveConversationSubmission: (submission: Omit<ConversationSubmission, 'id' | 'submittedAt'>) => void;
  createScheduledClass: (classData: Omit<ScheduledClass, 'id' | 'createdAt' | 'status'>) => void;
  
  overallProgressPercentage: number;
  totalCompletedHours: number;
  resetAllProgress: () => void;
}

const ProgressContext = createContext<ProgressContextType | undefined>(undefined);

// Purge legacy demo data from localStorage on first load
if (typeof window !== 'undefined') {
  try {
    const isCleaned = localStorage.getItem('insight_prod_clean_v5');
    if (!isCleaned) {
      localStorage.removeItem('insight_completed_units');
      localStorage.removeItem('insight_unit_scores');
      localStorage.removeItem('insight_unit_notes');
      localStorage.removeItem('insight_learned_words');
      localStorage.removeItem('insight_mastered_words');
      localStorage.removeItem('insight_planner_tasks');
      localStorage.removeItem('insight_competency_scores_v4');
      localStorage.removeItem('insight_conversation_submissions_v4');
      localStorage.removeItem('insight_scheduled_classes_v4');
      localStorage.removeItem('insight_all_students_v4');
      localStorage.removeItem('insight_english_user');
      localStorage.setItem('insight_prod_clean_v5', 'true');
    }
  } catch (e) {
    // ignore
  }
}

export const ProgressProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [completedUnitIds, setCompletedUnitIds] = useState<number[]>(() => {
    const saved = localStorage.getItem('insight_completed_units_v5');
    return saved ? JSON.parse(saved) : [];
  });

  const [unitScores, setUnitScores] = useState<Record<number, number>>(() => {
    const saved = localStorage.getItem('insight_unit_scores_v5');
    return saved ? JSON.parse(saved) : {};
  });

  const [unitNotes, setUnitNotes] = useState<Record<number, string>>(() => {
    const saved = localStorage.getItem('insight_unit_notes_v5');
    return saved ? JSON.parse(saved) : {};
  });

  const [learnedWordIds, setLearnedWordIds] = useState<number[]>(() => {
    const saved = localStorage.getItem('insight_learned_words_v5');
    return saved ? JSON.parse(saved) : [];
  });

  const [masteredWordIds, setMasteredWordIds] = useState<number[]>(() => {
    const saved = localStorage.getItem('insight_mastered_words_v5');
    return saved ? JSON.parse(saved) : [];
  });

  const [completedPlannerTaskIds, setCompletedPlannerTaskIds] = useState<string[]>(() => {
    const saved = localStorage.getItem('insight_planner_tasks_v5');
    return saved ? JSON.parse(saved) : [];
  });

  const [weeklyStudyHours, setWeeklyStudyHours] = useState<number>(() => {
    const saved = localStorage.getItem('insight_weekly_hours_v5');
    return saved ? Number(saved) : 4;
  });

  const [studyDaysPerWeek, setStudyDaysPerWeek] = useState<number>(() => {
    const saved = localStorage.getItem('insight_study_days_v5');
    return saved ? Number(saved) : 3;
  });

  const [competencyScores, setCompetencyScores] = useState<CompetencyScores>(() => {
    const saved = localStorage.getItem('insight_competency_scores_v5');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        // fallback below
      }
    }
    return {
      listening: 0,
      speaking: 0,
      reading: 0,
      writing: 0
    };
  });

  const [conversationSubmissions, setConversationSubmissions] = useState<ConversationSubmission[]>(() => {
    const saved = localStorage.getItem('insight_conversation_submissions_v5');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        // fallback below
      }
    }
    return [];
  });

  const [scheduledClasses, setScheduledClasses] = useState<ScheduledClass[]>(() => {
    const saved = localStorage.getItem('insight_scheduled_classes_v5');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        // fallback below
      }
    }
    return [];
  });

  // Sync to localStorage
  useEffect(() => {
    localStorage.setItem('insight_completed_units_v5', JSON.stringify(completedUnitIds));
  }, [completedUnitIds]);

  useEffect(() => {
    localStorage.setItem('insight_unit_scores_v5', JSON.stringify(unitScores));
  }, [unitScores]);

  useEffect(() => {
    localStorage.setItem('insight_unit_notes_v5', JSON.stringify(unitNotes));
  }, [unitNotes]);

  useEffect(() => {
    localStorage.setItem('insight_learned_words_v5', JSON.stringify(learnedWordIds));
  }, [learnedWordIds]);

  useEffect(() => {
    localStorage.setItem('insight_mastered_words_v5', JSON.stringify(masteredWordIds));
  }, [masteredWordIds]);

  useEffect(() => {
    localStorage.setItem('insight_planner_tasks_v5', JSON.stringify(completedPlannerTaskIds));
  }, [completedPlannerTaskIds]);

  useEffect(() => {
    localStorage.setItem('insight_weekly_hours_v5', String(weeklyStudyHours));
  }, [weeklyStudyHours]);

  useEffect(() => {
    localStorage.setItem('insight_study_days_v5', String(studyDaysPerWeek));
  }, [studyDaysPerWeek]);

  useEffect(() => {
    localStorage.setItem('insight_competency_scores_v5', JSON.stringify(competencyScores));
  }, [competencyScores]);

  useEffect(() => {
    localStorage.setItem('insight_conversation_submissions_v5', JSON.stringify(conversationSubmissions));
  }, [conversationSubmissions]);

  useEffect(() => {
    localStorage.setItem('insight_scheduled_classes_v5', JSON.stringify(scheduledClasses));
  }, [scheduledClasses]);

  const resetAllProgress = () => {
    setCompletedUnitIds([]);
    setUnitScores({});
    setUnitNotes({});
    setLearnedWordIds([]);
    setMasteredWordIds([]);
    setCompletedPlannerTaskIds([]);
    setWeeklyStudyHours(4);
    setStudyDaysPerWeek(3);
    setCompetencyScores({ listening: 0, speaking: 0, reading: 0, writing: 0 });
    setConversationSubmissions([]);
    setScheduledClasses([]);
    localStorage.removeItem('insight_completed_units_v5');
    localStorage.removeItem('insight_unit_scores_v5');
    localStorage.removeItem('insight_unit_notes_v5');
    localStorage.removeItem('insight_learned_words_v5');
    localStorage.removeItem('insight_mastered_words_v5');
    localStorage.removeItem('insight_planner_tasks_v5');
    localStorage.removeItem('insight_competency_scores_v5');
    localStorage.removeItem('insight_conversation_submissions_v5');
    localStorage.removeItem('insight_scheduled_classes_v5');
  };

  const toggleUnitCompleted = (unitId: number) => {
    setCompletedUnitIds((prev) =>
      prev.includes(unitId) ? prev.filter((id) => id !== unitId) : [...prev, unitId]
    );
  };

  const saveUnitScore = (unitId: number, score: number) => {
    setUnitScores((prev) => ({
      ...prev,
      [unitId]: Math.max(prev[unitId] || 0, score)
    }));
    if (score >= 70 && !completedUnitIds.includes(unitId)) {
      toggleUnitCompleted(unitId);
    }
    // Also increment Reading and Writing competencies slightly when grammar fixation is done
    updateCompetencyScore('reading', 2);
    updateCompetencyScore('writing', 2);
  };

  const saveUnitNote = (unitId: number, note: string) => {
    setUnitNotes((prev) => ({
      ...prev,
      [unitId]: note
    }));
  };

  const toggleWordLearned = (wordId: number) => {
    setLearnedWordIds((prev) =>
      prev.includes(wordId) ? prev.filter((id) => id !== wordId) : [...prev, wordId]
    );
  };

  const toggleWordMastered = (wordId: number) => {
    setMasteredWordIds((prev) =>
      prev.includes(wordId) ? prev.filter((id) => id !== wordId) : [...prev, wordId]
    );
    if (!learnedWordIds.includes(wordId)) {
      setLearnedWordIds((prev) => [...prev, wordId]);
    }
  };

  const togglePlannerTask = (taskId: string) => {
    setCompletedPlannerTaskIds((prev) =>
      prev.includes(taskId) ? prev.filter((id) => id !== taskId) : [...prev, taskId]
    );
  };

  const updateCompetencyScore = (skill: 'listening' | 'speaking' | 'reading' | 'writing', points: number) => {
    setCompetencyScores((prev) => {
      const current = prev[skill] || 50;
      const next = Math.min(100, Math.max(10, current + points));
      return {
        ...prev,
        [skill]: next
      };
    });
  };

  const saveConversationSubmission = (submission: Omit<ConversationSubmission, 'id' | 'submittedAt'>) => {
    const newSubmission: ConversationSubmission = {
      ...submission,
      id: `sub_${Date.now()}`,
      submittedAt: new Date().toISOString()
    };
    setConversationSubmissions((prev) => [newSubmission, ...prev]);
    // Boost speaking & writing competencies
    updateCompetencyScore('speaking', 4);
    updateCompetencyScore('writing', 3);
  };

  const createScheduledClass = (classData: Omit<ScheduledClass, 'id' | 'createdAt' | 'status'>) => {
    const newClass: ScheduledClass = {
      ...classData,
      id: `cls_${Date.now()}`,
      status: 'agendada',
      createdAt: new Date().toISOString()
    };
    setScheduledClasses((prev) => [newClass, ...prev]);
  };

  const speakText = (text: string, lang: string = 'en-US') => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = lang;
      utterance.rate = 0.92;
      window.speechSynthesis.speak(utterance);
    }
  };

  const totalUnits = ALL_GRAMMAR_UNITS.length;
  const overallProgressPercentage = totalUnits > 0 
    ? Math.round((completedUnitIds.length / totalUnits) * 100) 
    : 0;

  const totalCompletedHours = ALL_GRAMMAR_UNITS
    .filter((u) => completedUnitIds.includes(u.id))
    .reduce((sum, u) => sum + u.estimatedHours, 0);

  return (
    <ProgressContext.Provider
      value={{
        completedUnitIds,
        unitScores,
        unitNotes,
        learnedWordIds,
        masteredWordIds,
        completedPlannerTaskIds,
        weeklyStudyHours,
        studyDaysPerWeek,
        competencyScores,
        conversationSubmissions,
        scheduledClasses,
        toggleUnitCompleted,
        saveUnitScore,
        saveUnitNote,
        toggleWordLearned,
        toggleWordMastered,
        togglePlannerTask,
        setWeeklyHours: setWeeklyStudyHours,
        setStudyDays: setStudyDaysPerWeek,
        speakText,
        updateCompetencyScore,
        saveConversationSubmission,
        createScheduledClass,
        overallProgressPercentage,
        totalCompletedHours,
        resetAllProgress
      }}
    >
      {children}
    </ProgressContext.Provider>
  );
};

export const useProgress = () => {
  const context = useContext(ProgressContext);
  if (!context) {
    throw new Error("useProgress must be used within a ProgressProvider");
  }
  return context;
};
