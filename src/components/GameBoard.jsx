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
