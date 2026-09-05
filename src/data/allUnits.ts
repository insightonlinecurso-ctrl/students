import { GrammarUnit } from '../types';
import { UNITS_1_TO_10 } from './units1to10';
import { UNITS_11_TO_20 } from './units11to20';
import { UNITS_21_TO_30 } from './units21to30';

export const ALL_GRAMMAR_UNITS: GrammarUnit[] = [
  ...UNITS_1_TO_10,
  ...UNITS_11_TO_20,
  ...UNITS_21_TO_30
];

export const TOTAL_STUDY_HOURS = ALL_GRAMMAR_UNITS.reduce(
  (sum, unit) => sum + unit.estimatedHours,
  0
);

export function getUnitById(id: number): GrammarUnit | undefined {
  return ALL_GRAMMAR_UNITS.find((u) => u.id === id);
}

export function getUnitsByCategory(category: string): GrammarUnit[] {
  return ALL_GRAMMAR_UNITS.filter((u) => u.category === category);
}

export const CATEGORIES = [
  "Todos",
  "Fundamentos",
  "Tempos Verbais",
  "Caso Genitivo",
  "Modais",
  "Tempos Perfeitos",
  "Condicionais"
];
