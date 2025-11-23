import { useState } from 'react';
import { useTheme } from './context/ThemeContext';
import Header from './components/Header';
import GameBoard from './components/GameBoard';
import HelpModal from './components/HelpModal';
import './App.css';

function App() {
  const { isDarkMode, toggleTheme } = useTheme();
  const [showHelpModal, setShowHelpModal] = useState(false);

  const handleHelpClick = () => {
    setShowHelpModal(true);
  };

  const handleCloseHelp = () => {
    setShowHelpModal(false);
  };

  return (
    <div className={isDarkMode ? 'dark' : ''}>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
        <Header
          onHelpClick={handleHelpClick}
          onThemeToggle={toggleTheme}
          isDarkMode={isDarkMode}
        />

        <GameBoard>
          {/* Game stages will go here */}
        </GameBoard>

        <HelpModal isOpen={showHelpModal} onClose={handleCloseHelp} />
      </div>
    </div>
  );
}

export default App;
