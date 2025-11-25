/**
 * Verify Complete Matchup Coverage
 *
 * Checks that EVERY pair of characters has exactly one winner defined
 */

import { avengersBase, infinityDelta, multiverseDelta } from './redesignForAllModes.js';

// Build complete beats lists for each character
const allChars = [...new Set([
  ...Object.keys(avengersBase),
  ...Object.keys(infinityDelta),
  ...Object.keys(multiverseDelta)
])];

const completeBeats = {};
allChars.forEach(char => {
  completeBeats[char] = [
    ...(avengersBase[char] || []),
    ...(infinityDelta[char] || []),
    ...(multiverseDelta[char] || [])
  ];
});

console.log('=== VERIFYING COMPLETE MATCHUP COVERAGE ===\n');

let errors = 0;
let checked = 0;

allChars.forEach(char1 => {
  allChars.forEach(char2 => {
    if (char1 === char2) return; // Skip self

    checked++;
    const char1BeatsChar2 = completeBeats[char1].includes(char2);
    const char2BeatsChar1 = completeBeats[char2].includes(char1);

    if (!char1BeatsChar2 && !char2BeatsChar1) {
      console.log(`❌ No winner: ${char1} vs ${char2}`);
      errors++;
    } else if (char1BeatsChar2 && char2BeatsChar1) {
      console.log(`❌ CONFLICT: Both win: ${char1} vs ${char2}`);
      errors++;
    }
  });
});

console.log(`\nChecked ${checked} matchups`);

if (errors === 0) {
  console.log('✅ All matchups have exactly one winner!\n');
} else {
  console.log(`\n❌ Found ${errors} incomplete or conflicting matchups\n`);
  console.log('This means the matchup data needs to be completely redesigned.');
  process.exit(1);
}
