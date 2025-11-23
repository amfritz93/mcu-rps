/**
 * AlignmentSelector Component
 *
 * Second stage of game setup - choose alignment:
 * - Heroes
 * - Villains
 * - Heroes & Villains (Mixed)
 */

import { getGameModeOptions } from '../helpers/menu-wheel';
import MenuWheel from './MenuWheel';

function AlignmentSelector({ onSelect }) {
  const options = getGameModeOptions().map(mode => ({
    key: mode.key,
    name: mode.name,
    color: mode.key === 'heroes' ? '#3B82F6' : mode.key === 'villains' ? '#EF4444' : '#8B5CF6'
  }));

  return (
    <div className="flex flex-col items-center justify-center min-h-[400px]">
      <div className="mb-8 text-center">
        <p className="text-sm text-gray-600 dark:text-gray-400">
          Select your alignment
        </p>
      </div>

      <MenuWheel options={options} onSelect={onSelect} size="large" />

      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl">
        <div className="text-center p-4 bg-blue-50 dark:bg-blue-900 rounded-lg">
          <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-1">Heroes</h4>
          <p className="text-xs text-blue-800 dark:text-blue-200">
            Play as the good guys of the MCU
          </p>
        </div>
        <div className="text-center p-4 bg-red-50 dark:bg-red-900 rounded-lg">
          <h4 className="font-semibold text-red-900 dark:text-red-100 mb-1">Villains</h4>
          <p className="text-xs text-red-800 dark:text-red-200">
            Embrace the dark side
          </p>
        </div>
        <div className="text-center p-4 bg-purple-50 dark:bg-purple-900 rounded-lg">
          <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-1">Heroes & Villains</h4>
          <p className="text-xs text-purple-800 dark:text-purple-200">
            Mix it up with crossover battles
          </p>
        </div>
      </div>
    </div>
  );
}

export default AlignmentSelector;
