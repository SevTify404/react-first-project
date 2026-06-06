import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Fonction de pause pour les fonctions asynchrones
 * j'ai ajouté juste pour simuler des délais de réponse dans les tests pour voir comment l'application réagit
 * @param seconds le nombre de secondes à sleep
 */
export const sleep = (seconds: number): Promise<void> => {
  return new Promise(resolve => setTimeout(resolve, seconds * 1000));
};