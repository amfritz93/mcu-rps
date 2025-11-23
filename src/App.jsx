import { useState } from 'react';
import { useTheme } from './context/ThemeContext';
import { getSessions, saveSession } from './utils/sessionStorage';
import { calculateSessionStats } from './utils/gameLogic';
import Header from './components/Header';
import GameBoard from './components/GameBoard';
import HelpModal from './components/HelpModal';
import OpponentSelector from './components/OpponentSelector';
import AlignmentSelector from './components/AlignmentSelector';
import SagaSelector from './components/SagaSelector';
import GamePlay from './components/GamePlay';
import './App.css';

function App() {
  const { isDarkMode, toggleTheme } = useTheme();
  const [showHelpModal, setShowHelpModal] = useState(false);

  // Game setup state
  const [gameStage, setGameStage] = useState('opponent'); // opponent, alignment, saga, playing
  const [opponentType, setOpponentType] = useState(null); // 'computer' or 'player'
  const [gameMode, setGameMode] = useState(null); // 'heroes', 'villains', or 'mixed'
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
    setGameStage('alignment');
  };

  const handleAlignmentSelect = (mode) => {
    setGameMode(mode);
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
    setGameMode(null);
    setSaga(null);
    setCurrentSessionResults([]);
  };

  const renderGameStage = () => {
    switch (gameStage) {
      case 'opponent':
        return <OpponentSelector onSelect={handleOpponentSelect} />;
      case 'alignment':
        return <AlignmentSelector onSelect={handleAlignmentSelect} />;
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
          opponentType={opponentType}
        >
          {renderGameStage()}
        </GameBoard>

        <HelpModal isOpen={showHelpModal} onClose={handleCloseHelp} />
      </div>
    </div>
  );
}

export default App;
