/**
 * NPC Name Generator Utility
 * Handles random name generation with localStorage caching
 */

import { npcNameDatabase, NPCNameDatabase } from "./npcNameDatabase";

const STORAGE_KEY = "npc_name_database";

// Core PHB 2024 races
export const CORE_RACES = [
  "human",
  "elf",
  "dwarf",
  "halfling",
  "dragonborn",
  "gnome",
  "half-elf",
  "half-orc",
  "tiefling",
  "orc",
];

// Extended races from supplementary sources
export const EXTENDED_RACES = [
  "goliath",
  "aasimar",
  "genasi-air",
  "genasi-fire",
  "genasi-water",
  "genasi-earth",
  "kenku",
  "tabaxi",
  "tortle",
  "changeling",
  "warforged",
  "kalashtar",
  "harengon",
  "eladrin",
  "fairy",
];

let cachedDatabase: NPCNameDatabase | null = null;

/**
 * Initialize the name database from localStorage or store initial copy
 * This function loads the database once and caches it in memory
 */
export function initializeNameDatabase(): NPCNameDatabase {
  // Check if already loaded in memory
  if (cachedDatabase !== null) {
    return cachedDatabase;
  }

  // Try to load from localStorage
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored) {
    try {
      cachedDatabase = JSON.parse(stored) as NPCNameDatabase;
      return cachedDatabase;
    } catch {
      // If parsing fails, reinitialize
      localStorage.removeItem(STORAGE_KEY);
    }
  }

  // First time: store in localStorage for future loads
  cachedDatabase = npcNameDatabase;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(npcNameDatabase));
  return cachedDatabase;
}

/**
 * Get all available races (core + extended)
 */
export function getAllRaces(): string[] {
  return [...CORE_RACES, ...EXTENDED_RACES];
}

/**
 * Get all names for a specific race and gender (for reference)
 */
export function getNamesByRaceAndGender(
  race: string,
  gender: "female" | "male" | "neutral"
): string[] {
  const db = initializeNameDatabase();
  const raceData = db[race.toLowerCase()];

  if (!raceData) {
    throw new Error(`Unknown race: ${race}`);
  }

  const names = raceData[gender];
  if (!names || names.length === 0) {
    throw new Error(`No names available for race: ${race}, gender: ${gender}`);
  }

  return names;
}

/**
 * Get all surnames for a specific race and gender
 */
export function getSurnamesByRaceAndGender(
  race: string,
  gender: "female" | "male" | "neutral"
): string[] {
  const db = initializeNameDatabase();
  const raceData = db[race.toLowerCase()];

  if (!raceData) {
    throw new Error(`Unknown race: ${race}`);
  }

  const surnameKey = `${gender}Surnames` as keyof typeof raceData;
  const surnames = raceData[surnameKey];
  if (!surnames || surnames.length === 0) {
    throw new Error(
      `No surnames available for race: ${race}, gender: ${gender}`
    );
  }

  return surnames as string[];
}

/**
 * Generate a random name for a given race and gender
 */
export function generateRandomName(
  race: string,
  gender: "female" | "male" | "neutral"
): string {
  const names = getNamesByRaceAndGender(race, gender);
  const randomIndex = Math.floor(Math.random() * names.length);
  return names[randomIndex];
}

/**
 * Generate a random first name for a given race and gender
 */
export function generateRandomFirstName(
  race: string,
  gender: "female" | "male" | "neutral"
): string {
  return generateRandomName(race, gender);
}

/**
 * Generate a random surname for a given race and gender
 */
export function generateRandomSurname(
  race: string,
  gender: "female" | "male" | "neutral"
): string {
  const surnames = getSurnamesByRaceAndGender(race, gender);
  const randomIndex = Math.floor(Math.random() * surnames.length);
  return surnames[randomIndex];
}

/**
 * Type for full names with components
 */
export interface FullName {
  firstName: string;
  surname: string;
  fullName: string;
}

/**
 * Generate a full name (first name + surname) for a given race and gender
 */
export function generateFullName(
  race: string,
  gender: "female" | "male" | "neutral"
): FullName {
  const firstName = generateRandomFirstName(race, gender);
  const surname = generateRandomSurname(race, gender);
  return {
    firstName,
    surname,
    fullName: `${firstName} ${surname}`,
  };
}

/**
 * Generate 5 random full names for a given race and gender
 */
export function generate5Names(
  race: string,
  gender: "female" | "male" | "neutral"
): FullName[] {
  const names: FullName[] = [];
  for (let i = 0; i < 5; i++) {
    names.push(generateFullName(race, gender));
  }
  return names;
}

/**
 * Display name for a race (capitalize properly for UI)
 */
export function formatRaceName(race: string): string {
  return race
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}
