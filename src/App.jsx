import { useState, useEffect } from 'react';
import { useTheme } from './context/ThemeContext';
import { getSessions, saveSession } from './utils/sessionStorage';
import { calculateSessionStats } from './utils/gameLogic';
import Header from './components/Header';
import GameBoard from './components/GameBoard';
import HelpModal from './components/HelpModal';
import OpponentSelector from './components/OpponentSelector';
import SagaSelector from './components/SagaSelector';
import GamePlay from './components/GamePlay';
import './App.css';

function App() {
  const { isDarkMode, toggleTheme } = useTheme();

  // Apply dark mode to document root
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);
  const [showHelpModal, setShowHelpModal] = useState(false);

  // Game setup state
  const [gameStage, setGameStage] = useState('opponent'); // opponent, saga, playing
  const [opponentType, setOpponentType] = useState(null); // 'computer' or 'player'
  const [gameMode] = useState('mixed'); // Always 'mixed' mode
  const [saga, setSaga] = useState(null); // 'avengers', 'infinity', or 'multiverse'

  // Session data
  const [currentSessionResults, setCurrentSessionResults] = useState([]);
  const [pastSessions, setPastSessions] = useState(getSessions());

  const handleHelpClick = () => {
    setShowHelpModal(true);
  };

  const handleCloseHelp = () => {
    setShowHelpModal(false);
  };

  const handleOpponentSelect = (type) => {
    setOpponentType(type);
    setGameStage('saga');
  };

  const handleSagaSelect = (sagaKey) => {
    setSaga(sagaKey);
    setGameStage('playing');
  };

  const handleRoundComplete = (roundResult) => {
    // Add round to session results
    const resultText = roundResult.isTie
      ? `Tie! Both chose ${roundResult.playerCharacter.name}`
      : `${roundResult.winner.name} beats ${roundResult.loser.name} with ${roundResult.action}!`;

    setCurrentSessionResults(prev => [...prev, {
      ...roundResult,
      text: resultText
    }]);
  };

  const handleGameEnd = () => {
    // Calculate stats and save session
    const stats = calculateSessionStats(currentSessionResults);

    saveSession({
      alignment: gameMode,
      saga: saga,
      playerWins: stats.playerWins,
      opponentWins: stats.opponentWins,
      ties: stats.ties,
      favoredCharacter: stats.favoredCharacter,
      opponentType: opponentType
    });

    // Refresh past sessions
    setPastSessions(getSessions());

    // Reset game
    setGameStage('opponent');
    setOpponentType(null);
    setSaga(null);
    setCurrentSessionResults([]);
  };

  const renderGameStage = () => {
    switch (gameStage) {
      case 'opponent':
        return <OpponentSelector onSelect={handleOpponentSelect} />;
      case 'saga':
        return <SagaSelector gameMode={gameMode} onSelect={handleSagaSelect} />;
      case 'playing':
        return (
          <GamePlay
            gameMode={gameMode}
            saga={saga}
            opponentType={opponentType}
            onRoundComplete={handleRoundComplete}
            onGameEnd={handleGameEnd}
          />
        );
      default:
        return <div className="text-center text-gray-600 dark:text-gray-400">Select an opponent to begin</div>;
    }
  };

  return (
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
        opponentType={opponentType}
      >
        {renderGameStage()}
      </GameBoard>

      <HelpModal isOpen={showHelpModal} onClose={handleCloseHelp} />
    </div>
  );
}

export default App;
