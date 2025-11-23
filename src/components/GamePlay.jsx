/**
 * GamePlay Component
 *
 * Handles the actual game play logic:
 * - Player selects character for the round
 * - Computer/Player 2 selection
 * - Winner determination
 * - Round results display
 */

import { useState } from 'react';
import CharacterSelector from './CharacterSelector';
import { getRandomCharacter, playRound, getCharacterByName } from '../utils/gameLogic';

function GamePlay({
  gameMode,
  saga,
  opponentType,
  onRoundComplete,
  onGameEnd
}) {
  const [roundStage, setRoundStage] = useState('player-select'); // player-select, opponent-select, result
  const [playerSelection, setPlayerSelection] = useState(null);
  const [opponentSelection, setOpponentSelection] = useState(null);
  const [roundResult, setRoundResult] = useState(null);

  const handlePlayerSelect = (characterName) => {
    setPlayerSelection(characterName);

    if (opponentType === 'computer') {
      // Computer makes automatic selection
      const computerChar = getRandomCharacter(gameMode, saga);
      setOpponentSelection(computerChar.name);

      // Determine winner
      const result = playRound(characterName, computerChar.name, gameMode, saga);
      const playerChar = getCharacterByName(characterName, gameMode, saga);

      setRoundResult({
        ...result,
        playerCharacter: playerChar,
        opponentCharacter: computerChar,
        isPlayerWin: result.winner?.name === characterName
      });
      setRoundStage('result');
    } else {
      // Player vs Player - wait for second player
      setRoundStage('opponent-select');
    }
  };

  const handleOpponentSelect = (characterName) => {
    setOpponentSelection(characterName);

    // Determine winner
    const result = playRound(playerSelection, characterName, gameMode, saga);
    const playerChar = getCharacterByName(playerSelection, gameMode, saga);
    const opponentChar = getCharacterByName(characterName, gameMode, saga);

    setRoundResult({
      ...result,
      playerCharacter: playerChar,
      opponentCharacter: opponentChar,
      isPlayerWin: result.winner?.name === playerSelection
    });
    setRoundStage('result');
  };

  const handleNextRound = () => {
    // Report round result to parent
    onRoundComplete(roundResult);

    // Reset for next round
    setPlayerSelection(null);
    setOpponentSelection(null);
    setRoundResult(null);
    setRoundStage('player-select');
  };

  const handleEndGame = () => {
    // Report final round before ending
    if (roundResult) {
      onRoundComplete(roundResult);
    }
    onGameEnd();
  };

  if (roundStage === 'player-select') {
    return (
      <div>
        <CharacterSelector
          gameMode={gameMode}
          saga={saga}
          onSelect={handlePlayerSelect}
        />
      </div>
    );
  }

  if (roundStage === 'opponent-select') {
    return (
      <div>
        <div className="text-center mb-8 p-4 bg-yellow-50 dark:bg-yellow-900 rounded-lg">
          <p className="text-yellow-900 dark:text-yellow-100 font-semibold">
            Player 1 has made their selection!
          </p>
          <p className="text-yellow-800 dark:text-yellow-200 text-sm mt-1">
            Pass the device to Player 2
          </p>
        </div>
        <CharacterSelector
          gameMode={gameMode}
          saga={saga}
          onSelect={handleOpponentSelect}
        />
      </div>
    );
  }

  if (roundStage === 'result') {
    return (
      <div className="flex flex-col items-center justify-center min-h-[400px]">
        {/* Round Result */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            {roundResult.isTie ? "It's a Tie!" :
             roundResult.isPlayerWin ? "You Win!" :
             opponentType === 'computer' ? "Computer Wins!" : "Player 2 Wins!"}
          </h2>

          {/* Character matchup */}
          <div className="flex items-center justify-center gap-8 mb-6">
            <div className="text-center">
              <div
                className="w-32 h-32 rounded-full shadow-lg flex items-center justify-center mb-2"
                style={{ backgroundColor: roundResult.playerCharacter.color }}
              >
                <span className="text-white font-bold text-center px-2 leading-tight">
                  {roundResult.playerCharacter.name}
                </span>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {opponentType === 'player' ? 'Player 1' : 'You'}
              </p>
            </div>

            <div className="text-4xl text-gray-400 dark:text-gray-600">VS</div>

            <div className="text-center">
              <div
                className="w-32 h-32 rounded-full shadow-lg flex items-center justify-center mb-2"
                style={{ backgroundColor: roundResult.opponentCharacter.color }}
              >
                <span className="text-white font-bold text-center px-2 leading-tight">
                  {roundResult.opponentCharacter.name}
                </span>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {opponentType === 'player' ? 'Player 2' : 'Computer'}
              </p>
            </div>
          </div>

          {/* Result text with action */}
          {!roundResult.isTie && (
            <div className="max-w-md mx-auto p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
              <p className="text-lg">
                <span style={{ color: roundResult.winner.color }} className="font-bold">
                  {roundResult.winner.name}
                </span>
                {' '}beats{' '}
                <span style={{ color: roundResult.loser.color }} className="font-bold">
                  {roundResult.loser.name}
                </span>
                {' '}with{' '}
                <span className="text-gray-400 dark:text-gray-300 font-bold">
                  {roundResult.action}
                </span>
                !
              </p>
            </div>
          )}
        </div>

        {/* Action buttons */}
        <div className="flex gap-4">
          <button
            onClick={handleNextRound}
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-200 font-medium"
          >
            Next Round
          </button>
          <button
            onClick={handleEndGame}
            className="px-6 py-3 bg-gray-600 hover:bg-gray-700 text-white rounded-lg transition-colors duration-200 font-medium"
          >
            End Game
          </button>
        </div>
      </div>
    );
  }

  return null;
}

export default GamePlay;
