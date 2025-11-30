/**
 * GameArea Component
 *
 * Right column game area displaying the current game stage
 * Stages: 1. Your Opponent -> 2. Your Threat -> 3. Your Alignment -> 4. Your Difficulty -> 5. Your Character
 */

function GameArea({ currentStage, children }) {
  const stages = [
    { key: 'opponent', label: 'Choose Your Opponent', shortLabel: 'Your\nOpponent' },
    { key: 'threatLevel', label: 'Choose Your Threat Level', shortLabel: 'Your\nThreat' },
    { key: 'alignment', label: 'Choose Your Alignment', shortLabel: 'Your\nAlignment' },
    { key: 'difficulty', label: 'Choose Your Difficulty', shortLabel: 'Your\nDifficulty' },
    { key: 'playing', label: 'Choose Your Character', shortLabel: 'Your\nCharacter' },
    { key: 'result', label: 'Round Result' }
  ];

  const currentStageIndex = stages.findIndex(s => s.key === currentStage);

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 min-h-[500px] flex flex-col">
      {/* Stage Progress Indicator */}
      {currentStageIndex !== -1 && currentStage !== 'result' && (
        <div className="mb-6">
          <div className="flex items-center justify-center gap-2 sm:gap-4">
            {stages.slice(0, 5).map((stage, index) => (
              <div key={stage.key} className="flex items-center">
                <div className="flex flex-col items-center">
                  <div
                    className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-xs sm:text-sm font-medium transition-colors duration-200 ${
                      index <= currentStageIndex
                        ? 'bg-blue-600 dark:bg-blue-500 text-white'
                        : 'bg-gray-200 dark:bg-gray-600 text-gray-500 dark:text-gray-400'
                    }`}
                  >
                    {index + 1}
                  </div>
                  <p
                    className={`text-xs mt-2 text-center whitespace-pre-line leading-tight ${
                      index <= currentStageIndex
                        ? 'text-gray-900 dark:text-white font-medium'
                        : 'text-gray-500 dark:text-gray-400'
                    }`}
                  >
                    {stage.shortLabel}
                  </p>
                </div>
                {index < 4 && (
                  <div
                    className={`h-0.5 w-8 sm:w-12 mx-1 sm:mx-2 transition-colors duration-200 ${
                      index < currentStageIndex
                        ? 'bg-blue-600 dark:bg-blue-500'
                        : 'bg-gray-200 dark:bg-gray-600'
                    }`}
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Stage Title */}
      {currentStageIndex !== -1 && (
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
          {stages[currentStageIndex].label}
        </h2>
      )}

      {/* Stage Content */}
      <div className="flex-1 flex items-center justify-center">
        {children || (
          <div className="text-center text-gray-500 dark:text-gray-400">
            <p>Select a stage to begin</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default GameArea;
