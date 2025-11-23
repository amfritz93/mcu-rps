/**
 * SessionHistory Component
 *
 * Displays current session game results and provides access to past sessions
 * Includes tabs to switch between current session and past sessions
 * Shows real-time scoreboard during gameplay
 */

import { useState } from 'react';
import Scoreboard from './Scoreboard';

function SessionHistory({ currentSessionResults = [], pastSessions = [], opponentType = null }) {
  const [activeTab, setActiveTab] = useState('current');

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md h-full">
      {/* Header with Tabs */}
      <div className="border-b border-gray-200 dark:border-gray-700">
        <div className="flex">
          <button
            onClick={() => setActiveTab('current')}
            className={`flex-1 px-4 py-3 text-sm font-medium transition-colors duration-200 ${
              activeTab === 'current'
                ? 'text-blue-600 dark:text-blue-400 border-b-2 border-blue-600 dark:border-blue-400'
                : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200'
            }`}
          >
            Current Session
          </button>
          <button
            onClick={() => setActiveTab('past')}
            className={`flex-1 px-4 py-3 text-sm font-medium transition-colors duration-200 ${
              activeTab === 'past'
                ? 'text-blue-600 dark:text-blue-400 border-b-2 border-blue-600 dark:border-blue-400'
                : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200'
            }`}
          >
            Past Sessions
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        {activeTab === 'current' ? (
          <CurrentSessionTab results={currentSessionResults} opponentType={opponentType} />
        ) : (
          <PastSessionsTab sessions={pastSessions} />
        )}
      </div>
    </div>
  );
}

function CurrentSessionTab({ results, opponentType }) {
  if (results.length === 0) {
    return (
      <div className="text-center text-gray-500 dark:text-gray-400 py-8">
        <p className="text-sm">No games played yet.</p>
        <p className="text-xs mt-2">Start a game to see results here!</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Scoreboard */}
      <Scoreboard results={results} opponentType={opponentType} />

      {/* Round Results */}
      <div className="space-y-3">
        <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
          Round History
        </h3>
        <div className="space-y-2 max-h-80 overflow-y-auto">
          {results.map((result, index) => (
            <div
              key={index}
              className="p-3 bg-gray-50 dark:bg-gray-700 rounded-md text-sm"
            >
              <p className="text-gray-900 dark:text-white font-medium">
                Round {index + 1}
              </p>
              <p className="text-gray-600 dark:text-gray-400 mt-1">
                {result.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function PastSessionsTab({ sessions }) {
  if (sessions.length === 0) {
    return (
      <div className="text-center text-gray-500 dark:text-gray-400 py-8">
        <p className="text-sm">No past sessions found.</p>
        <p className="text-xs mt-2">Complete a session to see history!</p>
      </div>
    );
  }

  return (
    <div className="space-y-3">
      <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
        Previous Games
      </h3>
      <div className="space-y-3 max-h-96 overflow-y-auto">
        {sessions.map((session, index) => (
          <div
            key={index}
            className="p-4 bg-gray-50 dark:bg-gray-700 rounded-md"
          >
            <div className="flex items-center justify-between mb-2">
              <p className="text-xs text-gray-500 dark:text-gray-400">
                {session.date}
              </p>
              <span className="text-xs font-medium px-2 py-1 rounded bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200">
                {session.alignment}
              </span>
            </div>
            <div className="grid grid-cols-3 gap-2 text-xs text-gray-600 dark:text-gray-400">
              <div>
                <p className="font-semibold text-gray-900 dark:text-white">
                  {session.playerWins}
                </p>
                <p>Wins</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 dark:text-white">
                  {session.losses}
                </p>
                <p>Losses</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 dark:text-white">
                  {session.winPercentage}%
                </p>
                <p>Win Rate</p>
              </div>
            </div>
            {session.favoredCharacter && (
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">
                Favored: {session.favoredCharacter}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default SessionHistory;
