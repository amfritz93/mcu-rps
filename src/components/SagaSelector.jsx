/**
 * SagaSelector Component
 *
 * Second stage of game setup - choose saga/difficulty:
 * - Avengers Saga (10 characters)
 * - Infinity Saga (18 characters)
 * - Multiverse Saga (31 characters)
 */

import { getSagaOptions } from '../helpers/menu-wheel';
import MenuWheel from './MenuWheel';

function SagaSelector({ onSelect }) {
  const options = getSagaOptions().map(saga => ({
    key: saga.key,
    name: saga.name,
    color: saga.key === 'avengers' ? '#10B981' : saga.key === 'infinity' ? '#F59E0B' : '#EF4444'
  }));

  const sagaDetails = getSagaOptions();

  return (
    <div className="flex flex-col items-center justify-center min-h-[400px]">
      <div className="mb-8 text-center">
        <p className="text-sm text-gray-600 dark:text-gray-400">
          Select your difficulty level
        </p>
      </div>

      <MenuWheel options={options} onSelect={onSelect} size="large" />

      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl">
        {sagaDetails.map((saga) => (
          <div
            key={saga.key}
            className={`text-center p-4 rounded-lg ${
              saga.key === 'avengers'
                ? 'bg-green-50 dark:bg-green-900'
                : saga.key === 'infinity'
                ? 'bg-yellow-50 dark:bg-yellow-900'
                : 'bg-red-50 dark:bg-red-900'
            }`}
          >
            <div className="flex items-center justify-between mb-2">
              <h4
                className={`font-semibold ${
                  saga.key === 'avengers'
                    ? 'text-green-900 dark:text-green-100'
                    : saga.key === 'infinity'
                    ? 'text-yellow-900 dark:text-yellow-100'
                    : 'text-red-900 dark:text-red-100'
                }`}
              >
                {saga.name}
              </h4>
              <span
                className={`px-2 py-1 text-xs rounded-full font-medium ${
                  saga.key === 'avengers'
                    ? 'bg-green-200 dark:bg-green-700 text-green-900 dark:text-green-100'
                    : saga.key === 'infinity'
                    ? 'bg-yellow-200 dark:bg-yellow-700 text-yellow-900 dark:text-yellow-100'
                    : 'bg-red-200 dark:bg-red-700 text-red-900 dark:text-red-100'
                }`}
              >
                {saga.difficulty === 1 ? 'Beginner' : saga.difficulty === 2 ? 'Intermediate' : 'Advanced'}
              </span>
            </div>
            <p
              className={`text-xs ${
                saga.key === 'avengers'
                  ? 'text-green-800 dark:text-green-200'
                  : saga.key === 'infinity'
                  ? 'text-yellow-800 dark:text-yellow-200'
                  : 'text-red-800 dark:text-red-200'
              }`}
            >
              {saga.characterCount} character{saga.characterCount !== 1 ? 's' : ''}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SagaSelector;
