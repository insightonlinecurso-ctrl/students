import { SkillType, SkillLevel, SkillTestItem } from '../skillsTestData';
import { LISTENING_DATA } from './listeningData';
import { READING_DATA } from './readingData';
import { SPEAKING_DATA } from './speakingData';
import { WRITING_DATA } from './writingData';

export const ALL_SKILLS_DATA: Record<SkillType, Record<string, SkillTestItem[]>> = {
  listening: LISTENING_DATA,
  reading: READING_DATA,
  speaking: SPEAKING_DATA,
  writing: WRITING_DATA
};

export function getSkillQuestions(skill: SkillType, level: SkillLevel): SkillTestItem[] {
  const skillCategory = ALL_SKILLS_DATA[skill];
  if (!skillCategory) return [];
  const levelItems = skillCategory[level];
  return levelItems || [];
}

export { LISTENING_DATA, READING_DATA, SPEAKING_DATA, WRITING_DATA };
