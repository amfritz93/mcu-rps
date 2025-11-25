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
import { getRandomCharacter, getCharacterByName } from '../utils/gameLogic';
import { determineWinner } from '../helpers/saga.js';

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

      // Get player character object
      const playerChar = getCharacterByName(characterName, gameMode, saga);

      // Determine winner using the actual character objects
      const result = determineWinner(playerChar, computerChar);

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

    // Get character objects
    const playerChar = getCharacterByName(playerSelection, gameMode, saga);
    const opponentChar = getCharacterByName(characterName, gameMode, saga);

    // Determine winner
    const result = determineWinner(playerChar, opponentChar);

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
    const winnerGlow = roundResult.isTie ? '' :
      `0 0 20px ${roundResult.winner.color}40, 0 0 40px ${roundResult.winner.color}20`;

    return (
      <div className="flex flex-col items-center justify-center min-h-[400px]">
        {/* Round Result Header */}
        <div className="text-center mb-8">
          <h2 className={`text-4xl font-bold mb-6 ${
            roundResult.isTie
              ? 'text-gray-600 dark:text-gray-400'
              : roundResult.isPlayerWin
                ? 'text-green-600 dark:text-green-400'
                : 'text-red-600 dark:text-red-400'
          }`}>
            {roundResult.isTie ? "It's a Tie!" :
             roundResult.isPlayerWin
               ? (opponentType === 'player' ? "Player 1 Wins!" : "You Win!")
               : (opponentType === 'computer' ? "Computer Wins!" : "Player 2 Wins!")}
          </h2>

          {/* Character matchup */}
          <div className="flex items-center justify-center gap-6 md:gap-12 mb-8 flex-wrap">
            <div className="text-center">
              <div
                className={`w-36 h-36 md:w-40 md:h-40 rounded-full shadow-2xl flex items-center justify-center mb-3 transition-all duration-300 ${
                  !roundResult.isTie && roundResult.isPlayerWin ? 'ring-4 ring-green-400 dark:ring-green-500' : ''
                }`}
                style={{
                  backgroundColor: roundResult.playerCharacter.color,
                  boxShadow: !roundResult.isTie && roundResult.isPlayerWin ? winnerGlow : undefined
                }}
              >
                <span className="text-white font-bold text-center px-3 leading-tight text-sm md:text-base">
                  {roundResult.playerCharacter.name}
                </span>
              </div>
              <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
                {opponentType === 'player' ? 'Player 1' : 'You'}
              </p>
            </div>

            <div className="text-5xl font-bold text-gray-300 dark:text-gray-600">
              VS
            </div>

            <div className="text-center">
              <div
                className={`w-36 h-36 md:w-40 md:h-40 rounded-full shadow-2xl flex items-center justify-center mb-3 transition-all duration-300 ${
                  !roundResult.isTie && !roundResult.isPlayerWin ? 'ring-4 ring-red-400 dark:ring-red-500' : ''
                }`}
                style={{
                  backgroundColor: roundResult.opponentCharacter.color,
                  boxShadow: !roundResult.isTie && !roundResult.isPlayerWin ? winnerGlow : undefined
                }}
              >
                <span className="text-white font-bold text-center px-3 leading-tight text-sm md:text-base">
                  {roundResult.opponentCharacter.name}
                </span>
              </div>
              <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
                {opponentType === 'player' ? 'Player 2' : 'Computer'}
              </p>
            </div>
          </div>

          {/* Result text with action */}
          {!roundResult.isTie && (
            <div className="max-w-lg mx-auto p-6 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 rounded-xl shadow-lg border-2 border-gray-200 dark:border-gray-600">
              <p className="text-xl md:text-2xl leading-relaxed">
                <span
                  style={{ color: roundResult.winner.color }}
                  className="font-extrabold drop-shadow-sm"
                >
                  {roundResult.winner.name}
                </span>
                <span className="text-gray-700 dark:text-gray-300 font-semibold"> defeats </span>
                <span
                  style={{ color: roundResult.loser.color }}
                  className="font-extrabold drop-shadow-sm"
                >
                  {roundResult.loser.name}
                </span>
              </p>
              <div className="mt-3 pt-3 border-t-2 border-gray-300 dark:border-gray-600">
                <p className="text-sm text-gray-500 dark:text-gray-400 uppercase tracking-wide font-medium mb-1">
                  Finishing Move
                </p>
                <p className="text-lg font-bold text-gray-600 dark:text-gray-200">
                  {roundResult.action}
                </p>
              </div>
            </div>
          )}

          {roundResult.isTie && (
            <div className="max-w-lg mx-auto p-6 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800 rounded-xl shadow-lg border-2 border-gray-300 dark:border-gray-600">
              <p className="text-lg text-gray-700 dark:text-gray-300">
                Both players chose <span className="font-bold" style={{ color: roundResult.playerCharacter.color }}>
                  {roundResult.playerCharacter.name}
                </span>!
              </p>
            </div>
          )}
        </div>

        {/* Action buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          <button
            onClick={handleNextRound}
            className="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-xl transition-all duration-200 font-bold shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            Next Round
          </button>
          <button
            onClick={handleEndGame}
            className="px-8 py-4 bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-700 hover:to-gray-800 text-white rounded-xl transition-all duration-200 font-bold shadow-lg hover:shadow-xl transform hover:scale-105"
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
