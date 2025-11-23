/**
 * Scoreboard Component
 *
 * Displays real-time game statistics during gameplay:
 * - Player wins, opponent wins, ties
 * - Win percentage
 * - Current streak
 */

function Scoreboard({ results, opponentType }) {
  // Calculate stats from results
  const stats = results.reduce((acc, result) => {
    if (result.isTie) {
      acc.ties++;
    } else if (result.isPlayerWin) {
      acc.playerWins++;
    } else {
      acc.opponentWins++;
    }
    return acc;
  }, { playerWins: 0, opponentWins: 0, ties: 0 });

  const totalRounds = results.length;
  const playerWinPercent = totalRounds > 0
    ? Math.round((stats.playerWins / totalRounds) * 100)
    : 0;

  // Calculate current streak
  let currentStreak = 0;
  let streakType = null; // 'win', 'loss', or null

  for (let i = results.length - 1; i >= 0; i--) {
    const result = results[i];
    if (result.isTie) break; // Ties break streaks

    const isWin = result.isPlayerWin;
    if (streakType === null) {
      streakType = isWin ? 'win' : 'loss';
      currentStreak = 1;
    } else if ((streakType === 'win' && isWin) || (streakType === 'loss' && !isWin)) {
      currentStreak++;
    } else {
      break; // Different result type, streak ends
    }
  }

  if (totalRounds === 0) {
    return (
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
          Scoreboard
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-400 text-center py-4">
          Play some rounds to see stats!
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
      <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
        Scoreboard
      </h3>

      {/* Win/Loss/Tie Stats */}
      <div className="grid grid-cols-3 gap-3 mb-4">
        <div className="text-center p-3 bg-green-50 dark:bg-green-900 rounded-lg">
          <div className="text-2xl font-bold text-green-700 dark:text-green-300">
            {stats.playerWins}
          </div>
          <div className="text-xs text-green-600 dark:text-green-400 font-medium">
            Wins
          </div>
        </div>

        <div className="text-center p-3 bg-red-50 dark:bg-red-900 rounded-lg">
          <div className="text-2xl font-bold text-red-700 dark:text-red-300">
            {stats.opponentWins}
          </div>
          <div className="text-xs text-red-600 dark:text-red-400 font-medium">
            Losses
          </div>
        </div>

        <div className="text-center p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
          <div className="text-2xl font-bold text-gray-700 dark:text-gray-300">
            {stats.ties}
          </div>
          <div className="text-xs text-gray-600 dark:text-gray-400 font-medium">
            Ties
          </div>
        </div>
      </div>

      {/* Win Percentage */}
      <div className="mb-4 p-3 bg-blue-50 dark:bg-blue-900 rounded-lg">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-medium text-blue-700 dark:text-blue-300">
            Win Rate
          </span>
          <span className="text-lg font-bold text-blue-700 dark:text-blue-300">
            {playerWinPercent}%
          </span>
        </div>
        <div className="w-full bg-blue-200 dark:bg-blue-800 rounded-full h-2">
          <div
            className="bg-blue-600 dark:bg-blue-400 h-2 rounded-full transition-all duration-500"
            style={{ width: `${playerWinPercent}%` }}
          />
        </div>
      </div>

      {/* Current Streak */}
      {currentStreak > 0 && (
        <div className={`p-3 rounded-lg ${
          streakType === 'win'
            ? 'bg-gradient-to-r from-green-50 to-green-100 dark:from-green-900 dark:to-green-800'
            : 'bg-gradient-to-r from-red-50 to-red-100 dark:from-red-900 dark:to-red-800'
        }`}>
          <div className="flex items-center justify-between">
            <span className={`text-sm font-medium ${
              streakType === 'win'
                ? 'text-green-700 dark:text-green-300'
                : 'text-red-700 dark:text-red-300'
            }`}>
              Current Streak
            </span>
            <span className={`text-lg font-bold ${
              streakType === 'win'
                ? 'text-green-700 dark:text-green-300'
                : 'text-red-700 dark:text-red-300'
            }`}>
              {currentStreak} {streakType === 'win' ? '🔥' : '❄️'}
            </span>
          </div>
        </div>
      )}

      {/* Total Rounds */}
      <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
        <div className="flex justify-between items-center text-sm">
          <span className="text-gray-600 dark:text-gray-400">Total Rounds</span>
          <span className="font-bold text-gray-900 dark:text-white">{totalRounds}</span>
        </div>
      </div>
    </div>
  );
}

export default Scoreboard;
