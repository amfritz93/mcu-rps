/**
 * Saga Helper Functions
 *
 * Helper functions to build character lists and retrieve character data
 * based on game mode and saga selections.
 */

import { characterRegistry } from '../data/characters.js';
import { gameData } from '../data/game.js';

/**
 * Recursively builds the list of character names for a saga,
 * including all characters from parent sagas if 'extends' is defined
 *
 * @param {string} gameMode - 'heroes', 'villains', or 'mixed'
 * @param {string} sagaKey - 'avengers', 'infinity', or 'multiverse'
 * @returns {string[]} Array of character names
 */
function getCharacterNamesRecursive(gameMode, sagaKey) {
  const saga = gameData.gameModes[gameMode].sagas[sagaKey];

  if (!saga.extends) {
    // Base saga - return its character names
    return [...saga.characterNames];
  }

  // Recursive case - get parent saga characters and add new ones
  const parentCharacters = getCharacterNamesRecursive(gameMode, saga.extends);
  return [...parentCharacters, ...saga.additionalCharacters];
}

/**
 * Builds the full character object with cumulative beats and actions
 * based on the saga level
 *
 * @param {string} name - Character name
 * @param {string} sagaKey - 'avengers', 'infinity', or 'multiverse'
 * @returns {Object} Character object with name, color, beats, and actions
 */
function buildCharacterForSaga(name, sagaKey) {
  const char = characterRegistry[name];

  if (!char) {
    console.error(`Character "${name}" not found in character registry`);
    return null;
  }

  // Start with base beats and actions
  let beats = [...char.baseBeats];
  let actions = { ...char.baseActions };

  // Add infinity saga beats/actions if applicable
  if (sagaKey === 'infinity' || sagaKey === 'multiverse') {
    if (char.deltasPerSaga.infinity) {
      beats = [...beats, ...char.deltasPerSaga.infinity];
    }
    if (char.deltasPerSaga.infinityActions) {
      actions = { ...actions, ...char.deltasPerSaga.infinityActions };
    }
  }

  // Add multiverse saga beats/actions if applicable
  if (sagaKey === 'multiverse') {
    if (char.deltasPerSaga.multiverse) {
      beats = [...beats, ...char.deltasPerSaga.multiverse];
    }
    if (char.deltasPerSaga.multiverseActions) {
      actions = { ...actions, ...char.deltasPerSaga.multiverseActions };
    }
  }

  return {
    name,
    color: char.color,
    beats,
    actions
  };
}

/**
 * Gets the complete list of character objects for a specific game mode and saga
 *
 * @param {string} gameMode - 'heroes', 'villains', or 'mixed'
 * @param {string} sagaKey - 'avengers', 'infinity', or 'multiverse'
 * @returns {Object[]} Array of character objects with full data
 */
export function getCharactersForSaga(gameMode, sagaKey) {
  const characterNames = getCharacterNamesRecursive(gameMode, sagaKey);

  return characterNames
    .map(name => buildCharacterForSaga(name, sagaKey))
    .filter(char => char !== null); // Filter out any errors
}

/**
 * Gets saga metadata (name, difficulty, character count)
 *
 * @param {string} gameMode - 'heroes', 'villains', or 'mixed'
 * @param {string} sagaKey - 'avengers', 'infinity', or 'multiverse'
 * @returns {Object} Saga metadata
 */
export function getSagaMetadata(gameMode, sagaKey) {
  const saga = gameData.gameModes[gameMode].sagas[sagaKey];

  return {
    name: saga.name,
    difficulty: saga.difficulty,
    characterCount: saga.characterCount
  };
}

/**
 * Gets game mode metadata (name, description)
 *
 * @param {string} gameMode - 'heroes', 'villains', or 'mixed'
 * @returns {Object} Game mode metadata
 */
export function getGameModeMetadata(gameMode) {
  const mode = gameData.gameModes[gameMode];

  return {
    name: mode.name,
    description: mode.description
  };
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
