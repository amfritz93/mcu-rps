/**
 * Saga Helper Functions - Threat Level System
 *
 * Helper functions to build character lists and retrieve character data
 * based on threat level, game mode, and difficulty selections.
 */

import { characterRegistry, threatLevelRosters } from '../data/characters.js';

/**
 * Gets the character names for a specific threat level, game mode, and difficulty
 *
 * @param {string} threatLevel - 'street', 'skilled', 'tech', 'enhanced', 'god', or 'cosmic'
 * @param {string} gameMode - 'heroes', 'villains', or 'mixed'
 * @param {string} difficultyKey - 'easy', 'medium', or 'hard'
 * @returns {string[]} Array of character names
 */
function getCharacterNames(threatLevel, gameMode, difficultyKey) {
  const roster = threatLevelRosters[threatLevel]?.[difficultyKey];

  if (!roster) {
    console.error(`Threat level "${threatLevel}" or difficulty "${difficultyKey}" not found`);
    return [];
  }

  if (gameMode === 'heroes') {
    return [...roster.heroes];
  }

  if (gameMode === 'villains') {
    return [...roster.villains];
  }

  // Mixed mode: all characters including neutral
  return [...roster.heroes, ...roster.villains, ...roster.neutral];
}

/**
 * Builds the character object for a specific threat level and difficulty
 *
 * @param {string} name - Character name
 * @param {string} threatLevel - 'street', 'skilled', 'tech', 'enhanced', 'god', or 'cosmic'
 * @param {string} difficultyKey - 'easy', 'medium', or 'hard'
 * @returns {Object} Character object with name, color, beats, and actions
 */
function buildCharacterForDifficulty(name, threatLevel, difficultyKey) {
  const char = characterRegistry[name];

  if (!char) {
    console.error(`Character "${name}" not found in character registry`);
    return null;
  }

  // Get the beats array for this threat level and difficulty
  const beatsKey = `${threatLevel}-${difficultyKey}`;
  const beats = char.beats[beatsKey] || [];

  // Build actions object - character uses their signature action for all matchups
  const actions = {};
  beats.forEach(opponent => {
    actions[opponent] = char.action;
  });

  return {
    name,
    color: char.color,
    beats,
    actions
  };
}

/**
 * Gets the complete list of character objects for a threat level, game mode, and difficulty
 *
 * @param {string} threatLevel - 'street', 'skilled', 'tech', 'enhanced', 'god', or 'cosmic'
 * @param {string} gameMode - 'heroes', 'villains', or 'mixed'
 * @param {string} difficultyKey - 'easy', 'medium', or 'hard'
 * @returns {Object[]} Array of character objects with full data
 */
export function getCharactersForThreatLevel(threatLevel, gameMode, difficultyKey) {
  const characterNames = getCharacterNames(threatLevel, gameMode, difficultyKey);

  return characterNames
    .map(name => buildCharacterForDifficulty(name, threatLevel, difficultyKey))
    .filter(char => char !== null); // Filter out any errors
}

/**
 * Legacy function for backwards compatibility
 * Uses 'street' as default threat level
 *
 * @deprecated Use getCharactersForThreatLevel instead
 */
export function getCharactersForDifficulty(gameMode, difficultyKey) {
  // Default to street level for backwards compatibility
  return getCharactersForThreatLevel('street', gameMode, difficultyKey);
}

/**
 * Gets difficulty metadata (name, difficulty, character count)
 *
 * @param {string} difficultyKey - 'easy', 'medium', or 'hard'
 * @returns {Object} Difficulty metadata
 */
export function getDifficultyMetadata(difficultyKey) {
  const difficultyMap = {
    easy: { name: 'Easy', difficulty: 1, characterCount: 7 },
    medium: { name: 'Medium', difficulty: 2, characterCount: 11 },
    hard: { name: 'Hard', difficulty: 3, characterCount: 15 }
  };

  return difficultyMap[difficultyKey] || null;
}

/**
 * Gets game mode metadata (name, description)
 *
 * @param {string} gameMode - 'heroes', 'villains', or 'mixed'
 * @returns {Object} Game mode metadata
 */
export function getGameModeMetadata(gameMode) {
  const modes = {
    heroes: {
      name: 'Heroes',
      description: 'Fight for justice with the heroes'
    },
    villains: {
      name: 'Villains',
      description: 'Embrace chaos with the villains'
    },
    mixed: {
      name: 'Mixed',
      description: 'Battle across both sides'
    }
  };

  return modes[gameMode] || null;
}

/**
 * Gets threat level metadata (name, description)
 *
 * @param {string} threatLevel - 'street', 'skilled', 'tech', 'enhanced', 'god', or 'cosmic'
 * @returns {Object} Threat level metadata
 */
export function getThreatLevelMetadata(threatLevel) {
  const levels = {
    street: {
      name: 'Street',
      description: 'Grounded heroes and villains',
      key: 'street'
    },
    skilled: {
      name: 'Skilled',
      description: 'Peak human combatants',
      key: 'skilled'
    },
    tech: {
      name: 'Tech',
      description: 'Technology-based characters',
      key: 'tech'
    },
    enhanced: {
      name: 'Enhanced',
      description: 'Super-powered beings',
      key: 'enhanced'
    },
    god: {
      name: 'God',
      description: 'Mystical and cosmic entities',
      key: 'god'
    },
    cosmic: {
      name: 'Cosmic',
      description: 'Universe-level threats',
      key: 'cosmic'
    }
  };

  return levels[threatLevel] || null;
}

/**
 * Gets all threat level options
 *
 * @returns {Object[]} Array of threat level options
 */
export function getThreatLevelOptions() {
  return [
    { key: 'street', name: 'Street', description: 'Grounded heroes and villains' },
    { key: 'skilled', name: 'Skilled', description: 'Peak human combatants' },
    { key: 'tech', name: 'Tech', description: 'Technology-based characters' },
    { key: 'enhanced', name: 'Enhanced', description: 'Super-powered beings' },
    { key: 'god', name: 'God', description: 'Mystical and cosmic entities' },
    { key: 'cosmic', name: 'Cosmic', description: 'Universe-level threats' }
  ];
}

/**
 * Determines the winner of a matchup and returns the action tagline
 *
 * @param {Object} character1 - First character object
 * @param {Object} character2 - Second character object
 * @returns {Object} Result object with winner, loser, action, and isTie
 */
export function determineWinner(character1, character2) {
  // Check for tie
  if (character1.name === character2.name) {
    return {
      winner: null,
      loser: null,
      action: null,
      isTie: true
    };
  }

  // Check if character1 beats character2
  if (character1.beats.includes(character2.name)) {
    return {
      winner: character1,
      loser: character2,
      action: character1.actions[character2.name],
      isTie: false
    };
  }

  // Check if character2 beats character1
  if (character2.beats.includes(character1.name)) {
    return {
      winner: character2,
      loser: character1,
      action: character2.actions[character1.name],
      isTie: false
    };
  }

  // This shouldn't happen if data is configured correctly
  console.error(`No winner determined between ${character1.name} and ${character2.name}`);
  return {
    winner: null,
    loser: null,
    action: null,
    isTie: true
  };
}

// Legacy compatibility - export old function names as aliases
export const getCharactersForSaga = getCharactersForDifficulty;
export const getSagaMetadata = getDifficultyMetadata;
