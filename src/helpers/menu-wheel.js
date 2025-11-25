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
 * Always returns dual-wheel layout (heroes vs villains)
 *
 * @param {string} gameMode - Always 'mixed'
 * @param {string} sagaKey - 'avengers', 'infinity', or 'multiverse'
 * @returns {Object} Menu wheel configuration object
 */
export function getMenuWheelConfig(gameMode, sagaKey) {
  const allCharacters = getCharactersForSaga(gameMode, sagaKey);

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

/**
 * Gets game mode selection options for the home screen
 *
 * @returns {Object[]} Array of game mode options with metadata
 */
export function getGameModeOptions() {
  return [
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
 * @returns {Object[]} Array of saga options with metadata
 */
export function getSagaOptions() {
  return [
    {
      key: 'avengers',
      name: 'Avengers Saga',
      difficulty: 1,
      characterCount: 10
    },
    {
      key: 'infinity',
      name: 'Infinity Saga',
      difficulty: 2,
      characterCount: 18
    },
    {
      key: 'multiverse',
      name: 'Multiverse Saga',
      difficulty: 3,
      characterCount: 31
    }
  ];
}
