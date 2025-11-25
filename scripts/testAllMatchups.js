/**
 * Test All Matchups
 *
 * Comprehensive test to ensure all game modes and sagas have complete matchup coverage
 */

import { getCharactersForSaga, determineWinner } from '../src/helpers/saga.js';

const gameModes = ['heroes', 'villains', 'mixed'];
const sagas = ['avengers', 'infinity', 'multiverse'];

console.log('=== TESTING ALL GAME MODE + SAGA COMBINATIONS ===\n');

let totalTests = 0;
let passedTests = 0;
let failedTests = 0;

gameModes.forEach(gameMode => {
  sagas.forEach(saga => {
    console.log(`\n--- Testing ${gameMode.toUpperCase()} mode, ${saga.toUpperCase()} saga ---`);

    const characters = getCharactersForSaga(gameMode, saga);
    console.log(`Characters available: ${characters.length}`);

    let modeErrors = 0;

    // Test every possible matchup
    characters.forEach(char1 => {
      characters.forEach(char2 => {
        if (char1.name === char2.name) return; // Skip self-matchups

        totalTests++;
        const result = determineWinner(char1, char2);

        // Check if a winner was determined
        if (result.winner === null && !result.isTie) {
          console.log(`  ❌ No winner: ${char1.name} vs ${char2.name}`);
          failedTests++;
          modeErrors++;
        } else if (!result.isTie && result.action === null) {
          console.log(`  ❌ No action: ${char1.name} vs ${char2.name}`);
          failedTests++;
          modeErrors++;
        } else {
          passedTests++;
        }
      });
    });

    if (modeErrors === 0) {
      console.log(`  ✅ All matchups work correctly!`);
    } else {
      console.log(`  ❌ Found ${modeErrors} errors`);
    }
  });
});

console.log('\n=== TEST SUMMARY ===');
console.log(`Total matchups tested: ${totalTests}`);
console.log(`Passed: ${passedTests} ✅`);
console.log(`Failed: ${failedTests} ❌`);

if (failedTests === 0) {
  console.log('\n🎉 ALL TESTS PASSED! Game is ready to play!');
} else {
  console.log('\n⚠️  Some matchups need fixing');
  process.exit(1);
}
