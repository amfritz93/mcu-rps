/**
 * SagaSelector Component
 *
 * Third stage of game setup - choose difficulty:
 * Character counts vary by alignment (heroes/villains/mixed)
 */

import { getDifficultyOptions } from '../helpers/menu-wheel';
import { threatLevelRosters } from '../data/characters';
import MenuWheel from './MenuWheel';

function SagaSelector({ gameMode, onSelect, onBack }) {
  const options = getDifficultyOptions().map(difficulty => ({
    key: difficulty.key,
    name: difficulty.name,
    color: difficulty.key === 'easy' ? '#10B981' : difficulty.key === 'medium' ? '#F59E0B' : '#EF4444'
  }));

  // Calculate actual character counts based on gameMode
  const getCharacterCount = (difficultyKey) => {
    // Use street level as representative (all threat levels have same structure)
    const roster = threatLevelRosters.street[difficultyKey];

    if (gameMode === 'heroes') {
      return roster.heroes.length;
    } else if (gameMode === 'villains') {
      return roster.villains.length;
    } else {
      // mixed mode includes all
      return roster.heroes.length + roster.villains.length + roster.neutral.length;
    }
  };

  const difficultyDetails = getDifficultyOptions().map(difficulty => ({
    ...difficulty,
    characterCount: getCharacterCount(difficulty.key)
  }));

  return (
    <div className="flex flex-col items-center justify-center min-h-[400px] relative">
      {onBack && (
        <button
          onClick={onBack}
          className="absolute top-0 left-0 px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors shadow-sm"
        >
          ← Back
        </button>
      )}
      <div className="mb-8 text-center">
        <p className="text-sm text-gray-600 dark:text-gray-400">
          Select your difficulty level
        </p>
      </div>

      <MenuWheel options={options} onSelect={onSelect} size="large" />

      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl">
        {difficultyDetails.map((difficulty) => (
          <div
            key={difficulty.key}
            className={`text-center p-4 rounded-lg ${
              difficulty.key === 'easy'
                ? 'bg-green-50 dark:bg-green-900'
                : difficulty.key === 'medium'
                ? 'bg-yellow-50 dark:bg-yellow-900'
                : 'bg-red-50 dark:bg-red-900'
            }`}
          >
            <div className="flex items-center justify-between mb-2">
              <h4
                className={`font-semibold ${
                  difficulty.key === 'easy'
                    ? 'text-green-900 dark:text-green-100'
                    : difficulty.key === 'medium'
                    ? 'text-yellow-900 dark:text-yellow-100'
                    : 'text-red-900 dark:text-red-100'
                }`}
              >
                {difficulty.name}
              </h4>
              <span
                className={`px-2 py-1 text-xs rounded-full font-medium ${
                  difficulty.key === 'easy'
                    ? 'bg-green-200 dark:bg-green-700 text-green-900 dark:text-green-100'
                    : difficulty.key === 'medium'
                    ? 'bg-yellow-200 dark:bg-yellow-700 text-yellow-900 dark:text-yellow-100'
                    : 'bg-red-200 dark:bg-red-700 text-red-900 dark:text-red-100'
                }`}
              >
                {difficulty.difficulty === 1 ? 'Beginner' : difficulty.difficulty === 2 ? 'Intermediate' : 'Advanced'}
              </span>
            </div>
            <p
              className={`text-xs ${
                difficulty.key === 'easy'
                  ? 'text-green-800 dark:text-green-200'
                  : difficulty.key === 'medium'
                  ? 'text-yellow-800 dark:text-yellow-200'
                  : 'text-red-800 dark:text-red-200'
              }`}
            >
              {difficulty.characterCount} {gameMode === 'heroes' ? 'hero' : gameMode === 'villains' ? 'villain' : 'character'}{difficulty.characterCount !== 1 ? 's' : ''}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SagaSelector;
