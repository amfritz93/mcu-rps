/**
 * Menu Wheel Helper Functions
 *
 * Helper functions to prepare character data for menu wheel rendering.
 * Handles layout logic for single-wheel vs dual-wheel configurations.
 */

import { getCharactersForSaga } from './saga.js';
import { characterRegistry } from '../data/characters.js';

/**
 * Determines if a character is a hero based on the character registry
 *
 * @param {string} characterName - Name of the character
 * @returns {boolean} True if hero, false if villain/neutral
 */
function isHero(characterName) {
  const heroes = [
    "Captain America",
    "Iron Man",
    "Thor",
    "Hulk",
    "Black Widow",
    "Spider-Man",
    "Dr. Strange",
    "Black Panther",
    "Scarlet Witch",
    "Hawk-Eye",
    "The Vision",
    "Star-Lord",
    "Ant-Man",
    "Captain Marvel",
    "Mr. Fantastic"
  ];
  return heroes.includes(characterName);
}

/**
 * Determines if a character is a villain based on the character registry
 *
 * @param {string} characterName - Name of the character
 * @returns {boolean} True if villain, false if hero/neutral
 */
function isVillain(characterName) {
  const villains = [
    "Loki",
    "Red Skull",
    "Ronan the Accuser",
    "Ultron",
    "Killmonger",
    "Thanos",
    "Hela",
    "Mysterio",
    "Venom",
    "Galactus",
    "Doctor Doom",
    "Magneto",
    "Doctor Octopus",
    "Green Goblin",
    "Kingpin"
  ];
  return villains.includes(characterName);
}

/**
 * Gets the menu wheel configuration for character selection
 *
 * @param {string} gameMode - 'heroes', 'villains', or 'mixed'
 * @param {string} sagaKey - 'avengers', 'infinity', or 'multiverse'
 * @returns {Object} Menu wheel configuration object
 */
export function getMenuWheelConfig(gameMode, sagaKey) {
  const allCharacters = getCharactersForSaga(gameMode, sagaKey);

  // Single-wheel layout for heroes-only or villains-only
  if (gameMode === 'heroes' || gameMode === 'villains') {
    return {
      layout: 'single-wheel',
      wheel: {
        type: gameMode, // 'heroes' or 'villains'
        characters: allCharacters
      }
    };
  }

  // Dual-wheel layout for mixed mode
  if (gameMode === 'mixed') {
    const heroes = allCharacters.filter(char => isHero(char.name));
    const villains = allCharacters.filter(char => isVillain(char.name));
    const watcher = allCharacters.find(char => char.name === 'The Watcher');

    const config = {
      layout: watcher ? 'dual-wheel-with-center' : 'dual-wheel',
      leftWheel: {
        type: 'heroes',
        characters: heroes
      },
      rightWheel: {
        type: 'villains',
        characters: villains
      }
    };

    // Add The Watcher center button only for multiverse saga
    if (watcher) {
      config.centerButton = {
        type: 'neutral',
        character: watcher
      };
    }

    return config;
  }

  // Fallback - should never reach here
  console.error(`Invalid game mode: ${gameMode}`);
  return null;
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
      description: 'Play as the good guys of the MCU'
    },
    {
      key: 'villains',
      name: 'Villains',
      description: 'Play as the bad guys of the MCU'
    },
    {
      key: 'mixed',
      name: 'Heroes & Villains',
      description: 'Play with both heroes and villains'
    }
  ];
}

/**
 * Gets saga selection options for the difficulty screen
 *
 * @param {string} gameMode - The selected game mode
 * @returns {Object[]} Array of saga options with metadata
 */
export function getSagaOptions(gameMode) {
  const characterCounts = {
    heroes: { avengers: 5, infinity: 9, multiverse: 15 },
    villains: { avengers: 5, infinity: 9, multiverse: 15 },
    mixed: { avengers: 10, infinity: 18, multiverse: 31 }
  };

  return [
    {
      key: 'avengers',
      name: 'Avengers Saga',
      difficulty: 1,
      characterCount: characterCounts[gameMode].avengers
    },
    {
      key: 'infinity',
      name: 'Infinity Saga',
      difficulty: 2,
      characterCount: characterCounts[gameMode].infinity
    },
    {
      key: 'multiverse',
      name: 'Multiverse Saga',
      difficulty: 3,
      characterCount: characterCounts[gameMode].multiverse
    }
  ];
}
