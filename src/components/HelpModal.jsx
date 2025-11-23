/**
 * HelpModal Component
 *
 * Modal dialog with tabbed content explaining:
 * - How to Play (RPS Lizard Spock rules)
 * - Alignments (Heroes/Villains/Mixed)
 * - Sagas (Difficulty levels)
 * - Session History (How to view past games)
 */

import { useState } from 'react';

function HelpModal({ isOpen, onClose }) {
  const [activeTab, setActiveTab] = useState('how-to-play');

  if (!isOpen) return null;

  const tabs = [
    { key: 'how-to-play', label: 'How to Play' },
    { key: 'alignments', label: 'Alignments' },
    { key: 'sagas', label: 'Sagas' },
    { key: 'history', label: 'Session History' }
  ];

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-200"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <div
          className="bg-white dark:bg-gray-800 rounded-lg shadow-xl max-w-2xl w-full max-h-[80vh] flex flex-col"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              Help & Rules
            </h2>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors"
              aria-label="Close modal"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Tabs */}
          <div className="border-b border-gray-200 dark:border-gray-700">
            <div className="flex overflow-x-auto">
              {tabs.map((tab) => (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key)}
                  className={`px-4 py-3 text-sm font-medium whitespace-nowrap transition-colors duration-200 ${
                    activeTab === tab.key
                      ? 'text-blue-600 dark:text-blue-400 border-b-2 border-blue-600 dark:border-blue-400'
                      : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 overflow-y-auto p-6">
            {activeTab === 'how-to-play' && <HowToPlayTab />}
            {activeTab === 'alignments' && <AlignmentsTab />}
            {activeTab === 'sagas' && <SagasTab />}
            {activeTab === 'history' && <HistoryTab />}
          </div>

          {/* Footer */}
          <div className="p-6 border-t border-gray-200 dark:border-gray-700">
            <button
              onClick={onClose}
              className="w-full px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-200 font-medium"
            >
              Got it!
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

function HowToPlayTab() {
  return (
    <div className="space-y-4 text-gray-700 dark:text-gray-300">
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
        Rock, Paper, Scissors, Lizard, Spock
      </h3>

      <p className="text-sm">
        This game is an extension of the classic Rock-Paper-Scissors, popularized by{' '}
        <span className="italic">The Big Bang Theory</span>. Each option beats two others and loses to two others.
      </p>

      <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 space-y-2">
        <p className="text-sm font-medium text-gray-900 dark:text-white mb-3">The Rules:</p>
        <ul className="space-y-2 text-sm">
          <li className="flex items-start">
            <span className="text-blue-600 dark:text-blue-400 mr-2">•</span>
            <span><strong>Scissors</strong> cuts <strong>Paper</strong></span>
          </li>
          <li className="flex items-start">
            <span className="text-blue-600 dark:text-blue-400 mr-2">•</span>
            <span><strong>Paper</strong> covers <strong>Rock</strong></span>
          </li>
          <li className="flex items-start">
            <span className="text-blue-600 dark:text-blue-400 mr-2">•</span>
            <span><strong>Rock</strong> crushes <strong>Lizard</strong></span>
          </li>
          <li className="flex items-start">
            <span className="text-blue-600 dark:text-blue-400 mr-2">•</span>
            <span><strong>Lizard</strong> poisons <strong>Spock</strong></span>
          </li>
          <li className="flex items-start">
            <span className="text-blue-600 dark:text-blue-400 mr-2">•</span>
            <span><strong>Spock</strong> smashes <strong>Scissors</strong></span>
          </li>
          <li className="flex items-start">
            <span className="text-blue-600 dark:text-blue-400 mr-2">•</span>
            <span><strong>Scissors</strong> decapitates <strong>Lizard</strong></span>
          </li>
          <li className="flex items-start">
            <span className="text-blue-600 dark:text-blue-400 mr-2">•</span>
            <span><strong>Lizard</strong> eats <strong>Paper</strong></span>
          </li>
          <li className="flex items-start">
            <span className="text-blue-600 dark:text-blue-400 mr-2">•</span>
            <span><strong>Paper</strong> disproves <strong>Spock</strong></span>
          </li>
          <li className="flex items-start">
            <span className="text-blue-600 dark:text-blue-400 mr-2">•</span>
            <span><strong>Spock</strong> vaporizes <strong>Rock</strong></span>
          </li>
          <li className="flex items-start">
            <span className="text-blue-600 dark:text-blue-400 mr-2">•</span>
            <span><strong>Rock</strong> crushes <strong>Scissors</strong></span>
          </li>
        </ul>
      </div>

      <div className="bg-blue-50 dark:bg-blue-900 rounded-lg p-4">
        <p className="text-sm">
          <strong className="text-blue-900 dark:text-blue-100">MCU Version:</strong>{' '}
          <span className="text-blue-800 dark:text-blue-200">
            Instead of Rock-Paper-Scissors, you're choosing MCU characters! Each character has unique matchups
            based on their powers and abilities. Choose wisely!
          </span>
        </p>
      </div>
    </div>
  );
}

function AlignmentsTab() {
  return (
    <div className="space-y-4 text-gray-700 dark:text-gray-300">
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
        Choose Your Alignment
      </h3>

      <p className="text-sm">
        Select which side of the MCU you want to play with. Each alignment offers different characters and strategies.
      </p>

      <div className="space-y-4">
        <div className="bg-blue-50 dark:bg-blue-900 rounded-lg p-4">
          <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">Heroes</h4>
          <p className="text-sm text-blue-800 dark:text-blue-200">
            Play as the good guys! Choose from iconic heroes like Captain America, Iron Man, Thor, and more.
            Perfect for those who fight for justice and protect the innocent.
          </p>
        </div>

        <div className="bg-red-50 dark:bg-red-900 rounded-lg p-4">
          <h4 className="font-semibold text-red-900 dark:text-red-100 mb-2">Villains</h4>
          <p className="text-sm text-red-800 dark:text-red-200">
            Embrace the dark side! Play as notorious villains like Thanos, Loki, and Hela.
            Perfect for those who want to conquer and rule.
          </p>
        </div>

        <div className="bg-purple-50 dark:bg-purple-900 rounded-lg p-4">
          <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-2">Heroes & Villains</h4>
          <p className="text-sm text-purple-800 dark:text-purple-200">
            Mix it up! Choose from both heroes and villains in epic crossover battles.
            The most diverse selection with unique matchups and strategies.
          </p>
        </div>
      </div>
    </div>
  );
}

function SagasTab() {
  return (
    <div className="space-y-4 text-gray-700 dark:text-gray-300">
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
        Choose Your Saga
      </h3>

      <p className="text-sm">
        Select your difficulty level. Each saga increases the number of characters and complexity of matchups.
      </p>

      <div className="space-y-4">
        <div className="bg-green-50 dark:bg-green-900 rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <h4 className="font-semibold text-green-900 dark:text-green-100">Avengers Saga</h4>
            <span className="px-2 py-1 bg-green-200 dark:bg-green-700 text-green-900 dark:text-green-100 text-xs rounded-full font-medium">
              Beginner
            </span>
          </div>
          <p className="text-sm text-green-800 dark:text-green-200 mb-2">
            Start your journey with 5 characters per alignment. Perfect for learning the basics!
          </p>
          <p className="text-xs text-green-700 dark:text-green-300">
            5 Heroes or 5 Villains (10 in mixed mode)
          </p>
        </div>

        <div className="bg-yellow-50 dark:bg-yellow-900 rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <h4 className="font-semibold text-yellow-900 dark:text-yellow-100">Infinity Saga</h4>
            <span className="px-2 py-1 bg-yellow-200 dark:bg-yellow-700 text-yellow-900 dark:text-yellow-100 text-xs rounded-full font-medium">
              Intermediate
            </span>
          </div>
          <p className="text-sm text-yellow-800 dark:text-yellow-200 mb-2">
            Expand your roster with 9 characters per alignment. More options, more strategy!
          </p>
          <p className="text-xs text-yellow-700 dark:text-yellow-300">
            9 Heroes or 9 Villains (18 in mixed mode)
          </p>
        </div>

        <div className="bg-red-50 dark:bg-red-900 rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <h4 className="font-semibold text-red-900 dark:text-red-100">Multiverse Saga</h4>
            <span className="px-2 py-1 bg-red-200 dark:bg-red-700 text-red-900 dark:text-red-100 text-xs rounded-full font-medium">
              Advanced
            </span>
          </div>
          <p className="text-sm text-red-800 dark:text-red-200 mb-2">
            The ultimate challenge! 15 characters per alignment with complex matchups.
          </p>
          <p className="text-xs text-red-700 dark:text-red-300">
            15 Heroes or 15 Villains (31 in mixed mode including The Watcher)
          </p>
        </div>
      </div>
    </div>
  );
}

function HistoryTab() {
  return (
    <div className="space-y-4 text-gray-700 dark:text-gray-300">
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
        Session History
      </h3>

      <p className="text-sm">
        Track your game performance across sessions with detailed statistics.
      </p>

      <div className="space-y-4">
        <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
          <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Current Session</h4>
          <p className="text-sm mb-2">
            View real-time results of your current game session. Each round result is displayed
            with the winner and the action used to win.
          </p>
          <ul className="space-y-1 text-sm">
            <li className="flex items-start">
              <span className="text-blue-600 dark:text-blue-400 mr-2">•</span>
              <span>Round-by-round breakdown</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 dark:text-blue-400 mr-2">•</span>
              <span>Character matchups and outcomes</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 dark:text-blue-400 mr-2">•</span>
              <span>Action taglines for each battle</span>
            </li>
          </ul>
        </div>

        <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
          <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Past Sessions</h4>
          <p className="text-sm mb-2">
            Review your game history with comprehensive statistics:
          </p>
          <ul className="space-y-1 text-sm">
            <li className="flex items-start">
              <span className="text-blue-600 dark:text-blue-400 mr-2">•</span>
              <span>Date and time of each session</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 dark:text-blue-400 mr-2">•</span>
              <span>Win/loss/tie counts</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 dark:text-blue-400 mr-2">•</span>
              <span>Win percentage calculation</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 dark:text-blue-400 mr-2">•</span>
              <span>Your favored character and alignment</span>
            </li>
          </ul>
        </div>

        <div className="bg-blue-50 dark:bg-blue-900 rounded-lg p-4">
          <p className="text-sm text-blue-800 dark:text-blue-200">
            <strong className="text-blue-900 dark:text-blue-100">Note:</strong> All session data is
            stored locally in your browser. Your history will persist across visits but won't be
            available on other devices.
          </p>
        </div>
      </div>
    </div>
  );
}

export default HelpModal;
