/**
 * OpponentSelector Component
 *
 * First stage of game setup - choose opponent type:
 * - Player vs Computer (AI)
 * - Player vs Player (pass-the-device)
 */

function OpponentSelector({ onSelect }) {
  const options = [
    {
      key: 'computer',
      title: 'Player vs Computer',
      description: 'Play against the AI',
      icon: (
        <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      key: 'player',
      title: 'Player vs Player',
      description: 'Pass-the-device with a friend',
      icon: (
        <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      )
    }
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-[400px]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-2xl">
        {options.map((option) => (
          <button
            key={option.key}
            onClick={() => onSelect(option.key)}
            className="group relative flex flex-col items-center justify-center p-8 bg-white dark:bg-gray-700 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-blue-500 dark:hover:border-blue-400"
          >
            {/* Icon */}
            <div className="text-gray-400 dark:text-gray-500 group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors duration-300 mb-4">
              {option.icon}
            </div>

            {/* Title */}
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 text-center">
              {option.title}
            </h3>

            {/* Description */}
            <p className="text-sm text-gray-600 dark:text-gray-400 text-center">
              {option.description}
            </p>

            {/* Hover effect indicator */}
            <div className="absolute inset-0 bg-blue-500 dark:bg-blue-400 rounded-lg opacity-0 group-hover:opacity-5 transition-opacity duration-300" />
          </button>
        ))}
      </div>

      <div className="mt-8 text-center">
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Choose how you want to play
        </p>
      </div>
    </div>
  );
}

export default OpponentSelector;
