/**
 * Proper Balanced RPS with Transitive Chains
 *
 * For n characters (odd), each character beats (n-1)/2 others
 * Characters are arranged in a circle, each beats the next k characters
 * where k = (n-1)/2
 *
 * This creates proper transitive chains: if A beats B and B beats C, then C beats A
 */

const threatLevelRosters = require('./rosters.cjs');

/**
 * Generates balanced RPS matchups with transitive chains
 * For odd n: Character at position i beats characters at positions (i+1) through (i+k) mod n
 * where k = (n-1)/2
 */
function generateProperRPS(characters) {
  const n = characters.length;

  if (n % 2 === 0) {
    throw new Error('RPS only works with odd numbers of characters');
  }

  const matchups = {};
  const beatsCount = Math.floor((n - 1) / 2);

  // Each character beats the next beatsCount characters in the circle
  characters.forEach((char, i) => {
    matchups[char] = [];
    for (let j = 1; j <= beatsCount; j++) {
      const beatenIndex = (i + j) % n;
      matchups[char].push(characters[beatenIndex]);
    }
  });

  return matchups;
}

/**
 * Verify the matchups are properly balanced and reciprocal
 */
function verifyBalance(matchups, characters) {
  const errors = [];
  const warnings = [];

  characters.forEach(charA => {
    const beatenBy = matchups[charA];

    // Check each character beats exactly (n-1)/2 others
    const expected = Math.floor((characters.length - 1) / 2);
    if (beatenBy.length !== expected) {
      errors.push(`${charA} beats ${beatenBy.length} characters, expected ${expected}`);
    }

    // Check reciprocal - if A beats B, then B should NOT beat A
    beatenBy.forEach(charB => {
      if (matchups[charB].includes(charA)) {
        errors.push(`Non-reciprocal: ${charA} beats ${charB} AND ${charB} beats ${charA}`);
      }
    });
  });

  // Check for transitive chains (this is informational, not an error)
  characters.forEach((charA, i) => {
    const charB = characters[(i + 1) % characters.length];
    const charC = characters[(i + 2) % characters.length];

    const aBeatsB = matchups[charA].includes(charB);
    const bBeatsC = matchups[charB].includes(charC);
    const cBeatsA = matchups[charC].includes(charA);

    if (aBeatsB && bBeatsC && !cBeatsA) {
      warnings.push(`Broken chain: ${charA} > ${charB} > ${charC}, but ${charC} doesn't beat ${charA}`);
    }
  });

  return { errors, warnings };
}

// Test with Street-Easy
console.log('Testing Proper RPS Generation\n');
console.log('='.repeat(60));

const streetEasy = [
  ...threatLevelRosters.street.easy.heroes,
  ...threatLevelRosters.street.easy.villains,
  ...threatLevelRosters.street.easy.neutral
];

console.log(`\nStreet-Easy (${streetEasy.length} characters):`);
console.log(streetEasy.join(', '));
console.log('');

const matchups = generateProperRPS(streetEasy);

console.log('Generated Matchups:');
streetEasy.forEach((char, i) => {
  console.log(`${i}. ${char} beats: ${matchups[char].join(', ')}`);
});

console.log('\n' + '='.repeat(60));
console.log('Verification:');
const { errors, warnings } = verifyBalance(matchups, streetEasy);

if (errors.length > 0) {
  console.log('\n❌ ERRORS:');
  errors.forEach(err => console.log('  - ' + err));
} else {
  console.log('\n✅ All matchups are properly balanced and reciprocal!');
}

if (warnings.length > 0) {
  console.log('\n⚠️  WARNINGS:');
  warnings.forEach(warn => console.log('  - ' + warn));
}

// Test the specific matchups you mentioned
console.log('\n' + '='.repeat(60));
console.log('User-Requested Matchups:');
console.log(`Kate Bishop beats Mockingbird: ${matchups['Kate Bishop'].includes('Mockingbird')}`);
console.log(`Mockingbird beats Luke Cage: ${matchups['Mockingbird'].includes('Luke Cage')}`);
console.log(`Luke Cage beats Kate Bishop: ${matchups['Luke Cage'].includes('Kate Bishop')}`);

console.log('\nComplete chain check:');
if (matchups['Kate Bishop'].includes('Mockingbird') &&
    matchups['Mockingbird'].includes('Luke Cage') &&
    matchups['Luke Cage'].includes('Kate Bishop')) {
  console.log('✅ Perfect transitive chain: Kate Bishop > Mockingbird > Luke Cage > Kate Bishop');
} else {
  console.log('❌ Chain is broken');
  console.log(`   Kate Bishop > Mockingbird? ${matchups['Kate Bishop'].includes('Mockingbird')}`);
  console.log(`   Mockingbird > Luke Cage? ${matchups['Mockingbird'].includes('Luke Cage')}`);
  console.log(`   Luke Cage > Kate Bishop? ${matchups['Luke Cage'].includes('Kate Bishop')}`);
}
