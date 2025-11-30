/**
 * Game Logic Utilities
 *
 * Core game logic for determining winners and AI opponent selection
 */

import { getCharactersForThreatLevel, determineWinner } from '../helpers/saga.js';

/**
 * Gets a random character from the available characters
 * Used for computer opponent selection
 *
 * @param {string} threatLevel - 'street', 'skilled', 'tech', 'enhanced', 'god', or 'cosmic'
 * @param {string} gameMode - 'heroes', 'villains', or 'mixed'
 * @param {string} difficulty - 'easy', 'medium', or 'hard'
 * @returns {Object} Random character object
 */
export function getRandomCharacter(threatLevel, gameMode, difficulty) {
  const characters = getCharactersForThreatLevel(threatLevel, gameMode, difficulty);
  const randomIndex = Math.floor(Math.random() * characters.length);
  return characters[randomIndex];
}

/**
 * Gets a character by name from the current game configuration
 *
 * @param {string} characterName - Name of the character
 * @param {string} threatLevel - 'street', 'skilled', 'tech', 'enhanced', 'god', or 'cosmic'
 * @param {string} gameMode - 'heroes', 'villains', or 'mixed'
 * @param {string} difficulty - 'easy', 'medium', or 'hard'
 * @returns {Object|null} Character object or null if not found
 */
export function getCharacterByName(characterName, threatLevel, gameMode, difficulty) {
  const characters = getCharactersForThreatLevel(threatLevel, gameMode, difficulty);
  return characters.find(char => char.name === characterName) || null;
}

/**
 * Plays a round of the game
 *
 * @param {string} playerCharacterName - Player's selected character name
 * @param {string} opponentCharacterName - Opponent's selected character name
 * @param {string} threatLevel - 'street', 'skilled', 'tech', 'enhanced', 'god', or 'cosmic'
 * @param {string} gameMode - 'heroes', 'villains', or 'mixed'
 * @param {string} difficulty - 'easy', 'medium', or 'hard'
 * @returns {Object} Round result with winner, loser, action, and isTie
 */
export function playRound(playerCharacterName, opponentCharacterName, threatLevel, gameMode, difficulty) {
  const playerChar = getCharacterByName(playerCharacterName, threatLevel, gameMode, difficulty);
  const opponentChar = getCharacterByName(opponentCharacterName, threatLevel, gameMode, difficulty);

  if (!playerChar || !opponentChar) {
    console.error('Character not found:', { playerCharacterName, opponentCharacterName });
    return {
      winner: null,
      loser: null,
      action: null,
      isTie: true,
      error: 'Character not found'
    };
  }

  return determineWinner(playerChar, opponentChar);
}

/**
 * Formats the round result into a readable text message
 *
 * @param {Object} result - Result from playRound or determineWinner
 * @param {boolean} isPlayerVsPlayer - Whether this is a PvP game
 * @returns {string} Formatted result text
 */
export function formatRoundResult(result, isPlayerVsPlayer = false) {
  if (result.isTie) {
    return `It's a tie! Both players chose ${result.winner?.name || 'the same character'}!`;
  }

  const winnerLabel = isPlayerVsPlayer ? 'Player 1' : 'You';
  const loserLabel = isPlayerVsPlayer ? 'Player 2' : 'Computer';

  // Determine if player won or lost
  const playerWon = !isPlayerVsPlayer; // This will be set properly in the component

  return `${result.winner.name} beats ${result.loser.name} with ${result.action}!`;
}

/**
 * Calculates statistics for the current session
 *
 * @param {Array} results - Array of round results
 * @returns {Object} Session statistics
 */
export function calculateSessionStats(results) {
  const stats = {
    playerWins: 0,
    opponentWins: 0,
    ties: 0,
    totalRounds: results.length,
    characterUsage: {}
  };

  results.forEach(result => {
    if (result.isTie) {
      stats.ties++;
    } else if (result.isPlayerWin) {
      stats.playerWins++;
    } else {
      stats.opponentWins++;
    }

    // Track character usage
    if (result.playerCharacter) {
      if (!stats.characterUsage[result.playerCharacter]) {
        stats.characterUsage[result.playerCharacter] = 0;
      }
      stats.characterUsage[result.playerCharacter]++;
    }
  });

  // Find most used character
  const mostUsed = Object.keys(stats.characterUsage).reduce((a, b) =>
    stats.characterUsage[a] > stats.characterUsage[b] ? a : b
  , null);

  stats.favoredCharacter = mostUsed;

  return stats;
}
