import { useState } from 'react';
import Header from './components/Header';
import GameBoard from './components/GameBoard';
import './App.css';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [showHelpModal, setShowHelpModal] = useState(false);

  const handleThemeToggle = () => {
    setIsDarkMode(!isDarkMode);
  };

  const handleHelpClick = () => {
    setShowHelpModal(true);
  };

  return (
    <div className={isDarkMode ? 'dark' : ''}>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
        <Header
          onHelpClick={handleHelpClick}
          onThemeToggle={handleThemeToggle}
          isDarkMode={isDarkMode}
        />

        <GameBoard>
          {/* Game stages will go here */}
        </GameBoard>
      </div>
    </div>
  );
}

export default App;
