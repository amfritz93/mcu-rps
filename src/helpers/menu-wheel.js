/**
 * Menu Wheel Helper Functions
 *
 * Helper functions to prepare character data for menu wheel rendering.
 * Handles layout logic for single-wheel vs dual-wheel configurations.
 */

import { getCharactersForThreatLevel } from './saga.js';
import { threatLevelRosters } from '../data/characters.js';

/**
 * Builds a complete set of heroes from all threat levels and difficulties
 * @returns {Set<string>} Set of all hero character names
 */
function getAllHeroes() {
  const heroes = new Set();
  Object.values(threatLevelRosters).forEach(threatLevel => {
    Object.values(threatLevel).forEach(difficulty => {
      difficulty.heroes.forEach(hero => heroes.add(hero));
    });
  });
  return heroes;
}

/**
 * Builds a complete set of villains from all threat levels and difficulties
 * @returns {Set<string>} Set of all villain character names
 */
function getAllVillains() {
  const villains = new Set();
  Object.values(threatLevelRosters).forEach(threatLevel => {
    Object.values(threatLevel).forEach(difficulty => {
      difficulty.villains.forEach(villain => villains.add(villain));
    });
  });
  return villains;
}

// Cache the hero and villain lists on module load
const allHeroes = getAllHeroes();
const allVillains = getAllVillains();

/**
 * Determines if a character is a hero based on the threat level rosters
 *
 * @param {string} characterName - Name of the character
 * @returns {boolean} True if hero, false if villain/neutral
 */
function isHero(characterName) {
  return allHeroes.has(characterName);
}

/**
 * Determines if a character is a villain based on the threat level rosters
 *
 * @param {string} characterName - Name of the character
 * @returns {boolean} True if villain, false if hero/neutral
 */
function isVillain(characterName) {
  return allVillains.has(characterName);
}

/**
 * Gets the menu wheel configuration for character selection
 * Supports heroes-only, villains-only, and mixed mode layouts
 *
 * @param {string} gameMode - 'heroes', 'villains', or 'mixed'
 * @param {string} difficultyKey - 'easy', 'medium', or 'hard'
 * @param {string} threatLevel - 'street', 'skilled', 'tech', 'enhanced', 'god', or 'cosmic' (default: 'street')
 * @returns {Object} Menu wheel configuration object
 */
export function getMenuWheelConfig(gameMode, difficultyKey, threatLevel = 'street') {
  const allCharacters = getCharactersForThreatLevel(threatLevel, gameMode, difficultyKey);

  const heroes = allCharacters.filter(char => isHero(char.name));
  const villains = allCharacters.filter(char => isVillain(char.name));
  const neutral = allCharacters.filter(char => !isHero(char.name) && !isVillain(char.name));

  // Heroes-only mode: single wheel with heroes
  if (gameMode === 'heroes') {
    return {
      layout: 'single-wheel',
      wheel: {
        type: 'heroes',
        characters: heroes
      }
    };
  }

  // Villains-only mode: single wheel with villains
  if (gameMode === 'villains') {
    return {
      layout: 'single-wheel',
      wheel: {
        type: 'villains',
        characters: villains
      }
    };
  }

  // Mixed mode: dual-wheel layout with optional center neutral character
  const config = {
    layout: neutral.length > 0 ? 'dual-wheel-with-center' : 'dual-wheel',
    leftWheel: {
      type: 'heroes',
      characters: heroes
    },
    rightWheel: {
      type: 'villains',
      characters: villains
    }
  };

  // Add neutral character as center button if present
  if (neutral.length > 0) {
    config.centerButton = {
      type: 'neutral',
      character: neutral[0] // Nick Fury, The Ancient One, or The Watcher
    };
  }

  return config;
}

/**
 * Gets game mode selection options for the home screen
 *
 * @returns {Object[]} Array of game mode options with metadata
 */
export function getGameModeOptions() {
  return [
    {
      key: 'heroes',
      name: 'Heroes',
      description: 'Fight for justice with the heroes'
    },
    {
      key: 'villains',
      name: 'Villains',
      description: 'Embrace chaos with the villains'
    },
    {
      key: 'mixed',
      name: 'Mixed',
      description: 'Battle across both sides'
    }
  ];
}

/**
 * Gets difficulty selection options for the difficulty screen
 *
 * @returns {Object[]} Array of difficulty options with metadata
 */
export function getDifficultyOptions() {
  return [
    {
      key: 'easy',
      name: 'Easy',
      difficulty: 1,
      characterCount: 7
    },
    {
      key: 'medium',
      name: 'Medium',
      difficulty: 2,
      characterCount: 11
    },
    {
      key: 'hard',
      name: 'Hard',
      difficulty: 3,
      characterCount: 15
    }
  ];
}
