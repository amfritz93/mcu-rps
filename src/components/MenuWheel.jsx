/**
 * MenuWheel Component
 *
 * Circular menu wheel for displaying options
 * Used for game mode, saga, and character selection
 */

function MenuWheel({ options, onSelect, size = 'large' }) {
  const sizeClasses = {
    small: 'w-32 h-32 text-xs',
    medium: 'w-40 h-40 text-sm',
    large: 'w-48 h-48 text-base'
  };

  const buttonSize = {
    small: 'w-16 h-16 md:w-18 md:h-18',
    medium: 'w-20 h-20 md:w-22 md:h-22',
    large: 'w-24 h-24 md:w-28 md:h-28'
  };

  const buttonTextSize = {
    small: 'text-[0.6rem] md:text-xs',
    medium: 'text-xs md:text-sm',
    large: 'text-sm md:text-base'
  };

  // Calculate positions for buttons around the circle with increased radius for better spacing
  const getButtonPosition = (index, total) => {
    const angle = (index / total) * 2 * Math.PI - Math.PI / 2; // Start at top
    const radius = size === 'large' ? 160 : size === 'medium' ? 140 : 120;
    const x = Math.cos(angle) * radius;
    const y = Math.sin(angle) * radius;
    return { x, y };
  };

  return (
    <div className="relative flex items-center justify-center" style={{ minHeight: '450px', minWidth: '450px' }}>
      {/* Center circle (decorative) */}
      <div className={`absolute rounded-full border-4 border-gray-200 dark:border-gray-700 ${sizeClasses[size]}`} />

      {/* Option buttons */}
      {options.map((option, index) => {
        const pos = getButtonPosition(index, options.length);
        return (
          <button
            key={option.key}
            onClick={() => onSelect(option.key)}
            className={`absolute ${buttonSize[size]} rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 flex items-center justify-center`}
            style={{
              left: `calc(50% + ${pos.x}px)`,
              top: `calc(50% + ${pos.y}px)`,
              transform: 'translate(-50%, -50%)',
              backgroundColor: option.color || '#3B82F6',
            }}
            title={option.name}
            aria-label={option.name}
          >
            <span className={`text-white font-bold text-center px-2 leading-tight ${buttonTextSize[size]}`}>
              {option.name}
            </span>
          </button>
        );
      })}
    </div>
  );
}

export default MenuWheel;
