import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getLocalizedText = (textObj: { en: string; ar: string }, language: string) => {
  return textObj[language as keyof typeof textObj];
};