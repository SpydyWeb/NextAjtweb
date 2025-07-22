import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getLocalizedText = (
  textObj: { en: string; ar: string } | undefined, 
  language: string
): string => {
  // Return empty string if textObj is undefined or null
  if (!textObj) {
    console.warn('getLocalizedText: textObj is undefined');
    return '';
  }
  
  // Check if the language key exists
  const key = language as keyof typeof textObj;
  if (!(key in textObj)) {
    console.warn(`getLocalizedText: language "${language}" not found in textObj`);
    return textObj.en || ''; // fallback to English
  }
  
  return textObj[key];
};