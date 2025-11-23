/**
 * GameBoard Component
 *
 * Main game layout with two columns:
 * - Left column (1/3 width): Session history
 * - Right column (2/3 width): Game area
 *
 * Responsive: columns stack on mobile with game area on top
 */

import SessionHistory from './SessionHistory';

function GameBoard({ children, currentSessionResults, pastSessions }) {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex flex-col-reverse lg:flex-row gap-6">
        {/* Left Column - Session History (1/3 width on desktop) */}
        <aside className="lg:w-1/3">
          <SessionHistory
            currentSessionResults={currentSessionResults}
            pastSessions={pastSessions}
          />
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Session History
            </h2>
            <div className="text-gray-600 dark:text-gray-400">
              {/* Session history content will go here */}
              <p className="text-sm">Current session results will appear here...</p>
            </div>
          </div>
        </aside>

        {/* Right Column - Game Area (2/3 width on desktop) */}
        <main className="lg:w-2/3">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 min-h-[500px]">
            {children || (
              <div className="text-center text-gray-600 dark:text-gray-400">
                <p>Game area - Choose your opponent to begin</p>
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}

export default GameBoard;
