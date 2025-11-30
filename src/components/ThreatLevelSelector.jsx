/**
 * ThreatLevelSelector Component
 *
 * Second stage of game setup - choose threat level:
 * - Street Level (grounded heroes/villains)
 * - Skilled (peak human combatants)
 * - Tech (technology-based)
 * - Enhanced (super-powered)
 * - God Tier (mystical/cosmic entities)
 * - Cosmic (universe-level threats)
 */

import { getThreatLevelOptions } from '../helpers/saga.js';
import MenuWheel from './MenuWheel';

function ThreatLevelSelector({ onSelect, onBack }) {
  const threatLevels = getThreatLevelOptions();

  const options = threatLevels.map(level => ({
    key: level.key,
    name: level.name,
    color: getThreatLevelColor(level.key)
  }));

  return (
    <div className="flex flex-col items-center justify-center min-h-[500px] relative">
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
          Select your threat level
        </p>
      </div>

      <MenuWheel options={options} onSelect={onSelect} size="large" />

      <div className="mt-8 grid grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl">
        {threatLevels.map((level) => (
          <div
            key={level.key}
            className="text-center p-4 rounded-lg"
            style={{
              backgroundColor: isDarkBackground(level.key)
                ? `${getThreatLevelColor(level.key)}20`
                : `${getThreatLevelColor(level.key)}10`,
              borderColor: getThreatLevelColor(level.key),
              borderWidth: '2px'
            }}
          >
            <h4
              className="font-semibold mb-2"
              style={{ color: getThreatLevelColor(level.key) }}
            >
              {level.name}
            </h4>
            <p className="text-xs text-gray-600 dark:text-gray-400">
              {level.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

function getThreatLevelColor(key) {
  const colors = {
    street: '#10B981',    // Green
    skilled: '#3B82F6',   // Blue
    tech: '#8B5CF6',      // Purple
    enhanced: '#EF4444',  // Red
    god: '#F59E0B',       // Amber
    cosmic: '#EC4899'     // Pink
  };
  return colors[key] || '#6B7280';
}

function isDarkBackground(key) {
  // For better contrast in dark mode
  return ['enhanced', 'god', 'cosmic'].includes(key);
}

export default ThreatLevelSelector;
