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
    small: 'w-20 h-20',
    medium: 'w-24 h-24',
    large: 'w-28 h-28'
  };

  // Calculate positions for buttons around the circle
  const getButtonPosition = (index, total) => {
    const angle = (index / total) * 2 * Math.PI - Math.PI / 2; // Start at top
    const radius = size === 'large' ? 140 : size === 'medium' ? 120 : 100;
    const x = Math.cos(angle) * radius;
    const y = Math.sin(angle) * radius;
    return { x, y };
  };

  return (
    <div className="relative flex items-center justify-center" style={{ minHeight: '400px' }}>
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
          >
            <span className="text-white font-bold text-center px-2 leading-tight">
              {option.name}
            </span>
          </button>
        );
      })}
    </div>
  );
}

export default MenuWheel;
