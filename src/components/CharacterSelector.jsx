/**
 * CharacterSelector Component
 *
 * Fourth and final stage of game setup - choose character:
 * - Single wheel for heroes/villains only (5, 9, or 15 characters)
 * - Dual wheels for mixed mode (2x5, 2x9, or 2x15)
 * - The Watcher center button for mixed multiverse saga
 */

import { getMenuWheelConfig } from '../helpers/menu-wheel';
import MenuWheel from './MenuWheel';

function CharacterSelector({ gameMode, saga, onSelect }) {
  const config = getMenuWheelConfig(gameMode, saga);

  if (!config) {
    return (
      <div className="text-center text-gray-600 dark:text-gray-400">
        Error loading character options
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-[500px]">
      <div className="mb-8 text-center">
        <p className="text-sm text-gray-600 dark:text-gray-400">
          Choose your character
        </p>
      </div>

      {/* Single wheel layout */}
      {config.layout === 'single-wheel' && (
        <MenuWheel
          options={config.wheel.characters.map(char => ({
            key: char.name,
            name: char.name,
            color: char.color
          }))}
          onSelect={onSelect}
          size="medium"
        />
      )}

      {/* Dual wheel layout (with or without The Watcher) */}
      {(config.layout === 'dual-wheel' || config.layout === 'dual-wheel-with-center') && (
        <div className="flex items-center justify-center gap-8 lg:gap-16 flex-wrap">
          {/* Left wheel - Heroes */}
          <div className="flex flex-col items-center">
            <h3 className="text-lg font-semibold text-blue-600 dark:text-blue-400 mb-4">
              Heroes
            </h3>
            <MenuWheel
              options={config.leftWheel.characters.map(char => ({
                key: char.name,
                name: char.name,
                color: char.color
              }))}
              onSelect={onSelect}
              size="small"
            />
          </div>

          {/* Center button - The Watcher (only for multiverse saga) */}
          {config.centerButton && (
            <div className="flex items-center">
              <button
                onClick={() => onSelect(config.centerButton.character.name)}
                className="w-32 h-32 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 flex items-center justify-center"
                style={{
                  backgroundColor: config.centerButton.character.color
                }}
                title={config.centerButton.character.name}
              >
                <span className="text-white font-bold text-center px-2 leading-tight">
                  {config.centerButton.character.name}
                </span>
              </button>
            </div>
          )}

          {/* Right wheel - Villains */}
          <div className="flex flex-col items-center">
            <h3 className="text-lg font-semibold text-red-600 dark:text-red-400 mb-4">
              Villains
            </h3>
            <MenuWheel
              options={config.rightWheel.characters.map(char => ({
                key: char.name,
                name: char.name,
                color: char.color
              }))}
              onSelect={onSelect}
              size="small"
            />
          </div>
        </div>
      )}

      <div className="mt-8 text-center max-w-md">
        <p className="text-xs text-gray-500 dark:text-gray-400">
          {config.layout === 'single-wheel'
            ? `Select from ${config.wheel.characters.length} ${config.wheel.type}`
            : `Select from ${config.leftWheel.characters.length} heroes and ${config.rightWheel.characters.length} villains`}
          {config.centerButton && ' (plus The Watcher)'}
        </p>
      </div>
    </div>
  );
}

export default CharacterSelector;
