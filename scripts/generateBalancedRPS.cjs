/**
 * Proper Extended RPS Matchup Generator
 *
 * Generates truly balanced Rock-Paper-Scissors matchups where:
 * - Each character beats exactly (n-1)/2 opponents
 * - Each character loses to exactly (n-1)/2 opponents
 * - If A beats B, then B cannot beat A (reciprocal relationships)
 */

const threatLevelRosters = require('./rosters.cjs');

/**
 * Generates balanced reciprocal RPS matchups
 * Uses a circular tournament algorithm where each character beats
 * the next (n-1)/2 characters in circular order
 */
function generateBalancedRPSMatchups(characters) {
  const n = characters.length;
  const matchups = {};
  const beatsCount = Math.floor((n - 1) / 2);

  characters.forEach((char, i) => {
    matchups[char] = [];

    // Each character beats the next beatsCount characters in circular order
    for (let j = 1; j <= beatsCount; j++) {
      const opponentIndex = (i + j) % n;
      matchups[char].push(characters[opponentIndex]);
    }
  });

  return matchups;
}

/**
 * Verifies matchups are properly reciprocal
 */
function verifyReciprocal(matchups, characters) {
  const errors = [];

  characters.forEach(charA => {
    matchups[charA].forEach(charB => {
      // If A beats B, check that B doesn't beat A
      if (matchups[charB].includes(charA)) {
        errors.push(`ERROR: ${charA} beats ${charB} AND ${charB} beats ${charA} (non-reciprocal)`);
      }
    });
  });

  return errors;
}

// Test with street-easy
const streetEasy = [...threatLevelRosters.street.easy.heroes,
                    ...threatLevelRosters.street.easy.villains,
                    ...threatLevelRosters.street.easy.neutral];

console.log('Testing Street-Easy (7 characters):');
console.log('Characters:', streetEasy.join(', '));
console.log('');

const matchups = generateBalancedRPSMatchups(streetEasy);

console.log('Generated Matchups:');
streetEasy.forEach(char => {
  console.log(`${char} beats: ${matchups[char].join(', ')}`);
});

console.log('\nVerifying Reciprocal Relationships:');
const errors = verifyReciprocal(matchups, streetEasy);

if (errors.length > 0) {
  console.log('❌ ERRORS FOUND:');
  errors.forEach(err => console.log('  ' + err));
} else {
  console.log('✅ All matchups are properly reciprocal!');
}

// Test specific matchups mentioned by user
console.log('\nTesting Specific Matchups:');
console.log(`Kate Bishop vs Luke Cage: Kate wins=${matchups['Kate Bishop'].includes('Luke Cage')}, Luke wins=${matchups['Luke Cage'].includes('Kate Bishop')}`);
console.log(`Kate Bishop vs Mockingbird: Kate wins=${matchups['Kate Bishop'].includes('Mockingbird')}, Mockingbird wins=${matchups['Mockingbird'].includes('Kate Bishop')}`);
console.log(`Mockingbird vs Luke Cage: Mockingbird wins=${matchups['Mockingbird'].includes('Luke Cage')}, Luke wins=${matchups['Luke Cage'].includes('Mockingbird')}`);
