/**
 * Session Storage Utilities
 *
 * Utilities for managing game session data in localStorage
 * Includes error handling and data validation
 */

const STORAGE_KEY = 'mcu-rps-sessions';

/**
 * Saves a completed game session to localStorage
 *
 * @param {Object} session - Session data object
 * @param {string} session.alignment - Game mode (heroes/villains/mixed)
 * @param {string} session.saga - Difficulty level (avengers/infinity/multiverse)
 * @param {number} session.playerWins - Number of player wins
 * @param {number} session.opponentWins - Number of opponent wins (computer or player 2)
 * @param {number} session.ties - Number of ties
 * @param {string} session.favoredCharacter - Most used character
 * @param {string} session.opponentType - 'computer' or 'player'
 */
export function saveSession(session) {
  try {
    const sessions = getSessions();
    const totalGames = session.playerWins + session.opponentWins + session.ties;
    const winPercentage = totalGames > 0
      ? Math.round((session.playerWins / totalGames) * 100)
      : 0;

    const sessionData = {
      ...session,
      date: new Date().toLocaleString(),
      timestamp: Date.now(),
      winPercentage,
      losses: session.opponentWins
    };

    sessions.unshift(sessionData); // Add to beginning of array

    // Keep only the last 50 sessions to prevent storage overflow
    const trimmedSessions = sessions.slice(0, 50);

    localStorage.setItem(STORAGE_KEY, JSON.stringify(trimmedSessions));
    return true;
  } catch (error) {
    console.error('Error saving session to localStorage:', error);
    return false;
  }
}

/**
 * Retrieves all saved sessions from localStorage
 *
 * @returns {Array} Array of session objects, newest first
 */
export function getSessions() {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    if (!data) {
      return [];
    }

    const sessions = JSON.parse(data);
    return Array.isArray(sessions) ? sessions : [];
  } catch (error) {
    console.error('Error loading sessions from localStorage:', error);
    return [];
  }
}

/**
 * Clears all saved sessions from localStorage
 *
 * @returns {boolean} True if successful, false otherwise
 */
export function clearSessions() {
  try {
    localStorage.removeItem(STORAGE_KEY);
    return true;
  } catch (error) {
    console.error('Error clearing sessions from localStorage:', error);
    return false;
  }
}

/**
 * Gets statistics across all sessions
 *
 * @returns {Object} Aggregate statistics
 */
export function getOverallStats() {
  try {
    const sessions = getSessions();

    if (sessions.length === 0) {
      return {
        totalSessions: 0,
        totalWins: 0,
        totalLosses: 0,
        totalTies: 0,
        overallWinRate: 0,
        favoriteAlignment: null,
        favoriteCharacter: null
      };
    }

    const stats = sessions.reduce((acc, session) => {
      acc.totalWins += session.playerWins;
      acc.totalLosses += session.losses;
      acc.totalTies += session.ties;

      // Count alignment preferences
      if (!acc.alignments[session.alignment]) {
        acc.alignments[session.alignment] = 0;
      }
      acc.alignments[session.alignment]++;

      // Count character preferences
      if (session.favoredCharacter) {
        if (!acc.characters[session.favoredCharacter]) {
          acc.characters[session.favoredCharacter] = 0;
        }
        acc.characters[session.favoredCharacter]++;
      }

      return acc;
    }, {
      totalWins: 0,
      totalLosses: 0,
      totalTies: 0,
      alignments: {},
      characters: {}
    });

    const totalGames = stats.totalWins + stats.totalLosses + stats.totalTies;
    const overallWinRate = totalGames > 0
      ? Math.round((stats.totalWins / totalGames) * 100)
      : 0;

    // Find favorite alignment and character
    const favoriteAlignment = Object.keys(stats.alignments).reduce((a, b) =>
      stats.alignments[a] > stats.alignments[b] ? a : b
    , null);

    const favoriteCharacter = Object.keys(stats.characters).length > 0
      ? Object.keys(stats.characters).reduce((a, b) =>
          stats.characters[a] > stats.characters[b] ? a : b
        )
      : null;

    return {
      totalSessions: sessions.length,
      totalWins: stats.totalWins,
      totalLosses: stats.totalLosses,
      totalTies: stats.totalTies,
      overallWinRate,
      favoriteAlignment,
      favoriteCharacter
    };
  } catch (error) {
    console.error('Error calculating overall stats:', error);
    return {
      totalSessions: 0,
      totalWins: 0,
      totalLosses: 0,
      totalTies: 0,
      overallWinRate: 0,
      favoriteAlignment: null,
      favoriteCharacter: null
    };
  }
}
