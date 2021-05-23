import { Direction } from './types';

export const isNumeric = (char: any) => !isNaN(char);

// In case of matching characters, recursively checking characters a difference is found
export const recursiveStringSort = (a: string, b: string, direction: Direction): number => {
  const charA = a[0] && a[0].toLowerCase();
  const charB = b[0] && b[0].toLowerCase();
  if (charA > charB || !charB) return direction;
  if (charA < charB || !charA) return -direction;
  return recursiveStringSort(a.slice(1), b.slice(1), direction);
};

export const numericSort = (a: number, b: number, direction: number): number =>
  direction === Direction.Asc ? a - b : b - a;
