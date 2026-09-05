import { FixationExercise } from '../types';

/**
 * Robust, intelligent answer validator for fixation exercises.
 * Tolerates:
 * 1. Case differences (e.g., 'Do' vs 'do')
 * 2. Typing the complete sentence instead of just the blank:
 *    Prompt: "Preencha com o auxiliar correto para pergunta: '____ they work at the hospital?'"
 *    User answers: "Do they work at the hospital?" -> CORRECT!
 * 3. Contraction variations (e.g., "don't" vs "do not", "didn't" vs "did not")
 * 4. Punctuation at the end (dots, question marks, quotes)
 * 5. Whitespace trimming
 */
export function isExerciseAnswerCorrect(rawUserAnswer: string, exercise: FixationExercise): boolean {
  if (!rawUserAnswer || !rawUserAnswer.trim()) return false;

  const clean = (str: string) => {
    return str
      .toLowerCase()
      .replace(/[’´`]/g, "'")
      .replace(/[.,?!;:""''()]/g, '')
      .replace(/\s+/g, ' ')
      .trim();
  };

  const normalizeContractions = (str: string) => {
    return clean(str)
      .replace(/\bdon't\b/g, 'do not')
      .replace(/\bdoesn't\b/g, 'does not')
      .replace(/\bdidn't\b/g, 'did not')
      .replace(/\bcan't\b/g, 'cannot')
      .replace(/\bisn't\b/g, 'is not')
      .replace(/\baren't\b/g, 'are not')
      .replace(/\bwasn't\b/g, 'was not')
      .replace(/\bweren't\b/g, 'were not')
      .replace(/\bwon't\b/g, 'will not')
      .replace(/\bwouldn't\b/g, 'would not')
      .replace(/\bcouldn't\b/g, 'could not')
      .replace(/\bshouldn't\b/g, 'should not')
      .replace(/\bhaven't\b/g, 'have not')
      .replace(/\bhasn't\b/g, 'has not')
      .replace(/\bhadn't\b/g, 'had not')
      .replace(/\bi'm\b/g, 'i am')
      .replace(/\byou're\b/g, 'you are')
      .replace(/\bhe's\b/g, 'he is')
      .replace(/\bshe's\b/g, 'she is')
      .replace(/\bit's\b/g, 'it is')
      .replace(/\bwe're\b/g, 'we are')
      .replace(/\bthey're\b/g, 'they are');
  };

  const userClean = clean(rawUserAnswer);
  const correctClean = clean(exercise.correctAnswer);

  // 1. Direct clean match
  if (userClean === correctClean) return true;

  // 2. Normalized contractions match
  const userNorm = normalizeContractions(rawUserAnswer);
  const correctNorm = normalizeContractions(exercise.correctAnswer);
  if (userNorm === correctNorm) return true;

  // 3. Check if user typed the whole sentence with the blank filled!
  // Example: Prompt contains "'____ they work at the hospital?'"
  // User typed: "Do they work at the hospital?"
  const quoteMatches = exercise.prompt.match(/['"]([^'"]+)['"]/g);
  if (quoteMatches) {
    for (const rawQuoted of quoteMatches) {
      const quoted = rawQuoted.replace(/['"]/g, '');
      if (quoted.includes('_')) {
        // Replace blank with the correct answer
        const filledSentence = quoted.replace(/_{2,}(\s*\([^)]+\))?/, exercise.correctAnswer);
        if (clean(filledSentence) === userClean || normalizeContractions(filledSentence) === userNorm) {
          return true;
        }

        // Also try stripping parenthetical hints like (não sei)
        const strippedPrompt = quoted.replace(/\([^)]+\)/g, '').replace(/_{2,}/, exercise.correctAnswer);
        if (clean(strippedPrompt) === userClean || normalizeContractions(strippedPrompt) === userNorm) {
          return true;
        }
      }
    }
  }

  // 4. In case prompt has no quotes but has blanks:
  if (exercise.prompt.includes('_')) {
    const afterColon = exercise.prompt.includes(':') 
      ? exercise.prompt.split(':').slice(1).join(':') 
      : exercise.prompt;

    if (afterColon.includes('_')) {
      const filled = afterColon.replace(/_{2,}(\s*\([^)]+\))?/, exercise.correctAnswer);
      if (clean(filled) === userClean || normalizeContractions(filled) === userNorm) {
        return true;
      }
    }
  }

  // 5. If user wrote the correct word inside a completed clause
  // e.g. prompt has "they work at the hospital" and user entered "Do they work at the hospital"
  const cleanPrompt = clean(exercise.prompt);
  const wordsInUser = userClean.split(' ');
  if (wordsInUser.length > 2 && userClean.includes(correctClean)) {
    // Check if remaining words match prompt context
    const matchingWords = wordsInUser.filter(w => cleanPrompt.includes(w));
    if (matchingWords.length >= 2) {
      return true;
    }
  }

  return false;
}
