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

        {/* Main content will go here */}
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center text-gray-700 dark:text-gray-300">
            <p>Game content coming soon...</p>
          </div>
        </main>
        <GameBoard>
          {/* Game stages will go here */}
        </GameBoard>
      </div>
    </div>
  );
}

export default App;
