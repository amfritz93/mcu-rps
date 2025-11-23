import { useState } from 'react';
import { useTheme } from './context/ThemeContext';
import { getSessions } from './utils/sessionStorage';
import Header from './components/Header';
import GameBoard from './components/GameBoard';
import HelpModal from './components/HelpModal';
import OpponentSelector from './components/OpponentSelector';
import AlignmentSelector from './components/AlignmentSelector';
import SagaSelector from './components/SagaSelector';
import './App.css';

function App() {
  const { isDarkMode, toggleTheme } = useTheme();
  const [showHelpModal, setShowHelpModal] = useState(false);

  // Game setup state
  const [gameStage, setGameStage] = useState('opponent'); // opponent, alignment, saga, character, playing, result
  const [opponentType, setOpponentType] = useState(null); // 'computer' or 'player'
  const [gameMode, setGameMode] = useState(null); // 'heroes', 'villains', or 'mixed'
  const [saga, setSaga] = useState(null); // 'avengers', 'infinity', or 'multiverse'

  // Session data
  const [currentSessionResults, setCurrentSessionResults] = useState([]);
  const [pastSessions] = useState(getSessions());

  const handleHelpClick = () => {
    setShowHelpModal(true);
  };

  const handleCloseHelp = () => {
    setShowHelpModal(false);
  };

  const handleOpponentSelect = (type) => {
    setOpponentType(type);
    setGameStage('alignment');
  };

  const handleAlignmentSelect = (mode) => {
    setGameMode(mode);
    setGameStage('saga');
  };

  const handleSagaSelect = (sagaKey) => {
    setSaga(sagaKey);
    setGameStage('character');
  };

  const renderGameStage = () => {
    switch (gameStage) {
      case 'opponent':
        return <OpponentSelector onSelect={handleOpponentSelect} />;
      case 'alignment':
        return <AlignmentSelector onSelect={handleAlignmentSelect} />;
      case 'saga':
        return <SagaSelector gameMode={gameMode} onSelect={handleSagaSelect} />;
      case 'character':
        return <div className="text-center text-gray-600 dark:text-gray-400">Character selector coming soon...</div>;
      default:
        return <div className="text-center text-gray-600 dark:text-gray-400">Select an opponent to begin</div>;
    }
  };

  return (
    <div className={isDarkMode ? 'dark' : ''}>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
        <Header
          onHelpClick={handleHelpClick}
          onThemeToggle={toggleTheme}
          isDarkMode={isDarkMode}
        />

        <GameBoard
          currentStage={gameStage}
          currentSessionResults={currentSessionResults}
          pastSessions={pastSessions}
        >
          {renderGameStage()}
        </GameBoard>

        <HelpModal isOpen={showHelpModal} onClose={handleCloseHelp} />
      </div>
    </div>
  );
}

export default App;
