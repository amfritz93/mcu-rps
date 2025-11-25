/**
 * Test Mixed Mode Only
 *
 * Verify that mixed mode works correctly for all sagas
 */

import { getCharactersForSaga, determineWinner } from '../src/helpers/saga.js';

const sagas = ['avengers', 'infinity', 'multiverse'];

console.log('=== TESTING MIXED MODE FOR ALL SAGAS ===\n');

let totalTests = 0;
let passedTests = 0;
let failedTests = 0;

sagas.forEach(saga => {
  console.log(`\n--- Testing MIXED mode, ${saga.toUpperCase()} saga ---`);

  const characters = getCharactersForSaga('mixed', saga);
  console.log(`Characters available: ${characters.length}`);

  let modeErrors = 0;
  const errors = [];

  // Test every possible matchup
  characters.forEach(char1 => {
    characters.forEach(char2 => {
      if (char1.name === char2.name) return; // Skip self-matchups

      totalTests++;
      const result = determineWinner(char1, char2);

      // Check if a winner was determined
      if (result.winner === null && !result.isTie) {
        errors.push(`No winner: ${char1.name} vs ${char2.name}`);
        failedTests++;
        modeErrors++;
      } else if (!result.isTie && result.action === null) {
        errors.push(`No action: ${char1.name} vs ${char2.name}`);
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
    console.log(`  ❌ Found ${modeErrors} errors:`);
    errors.forEach(err => console.log(`    - ${err}`));
  }
});

console.log('\n=== TEST SUMMARY ===');
console.log(`Total matchups tested: ${totalTests}`);
console.log(`Passed: ${passedTests} ✅`);
console.log(`Failed: ${failedTests} ❌`);

if (failedTests === 0) {
  console.log('\n🎉 ALL MIXED MODE TESTS PASSED! Game is ready to play!');
} else {
  console.log('\n⚠️  Some matchups need fixing');
  process.exit(1);
}
