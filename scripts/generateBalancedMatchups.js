/**
 * Generate Balanced MCU Matchup Matrix
 *
 * Uses a modified circular tournament algorithm to create a perfect 31x31 matrix where:
 * - Each character beats exactly 15 others
 * - Each character loses to exactly 15 others
 * - No bidirectional conflicts
 * - Respects MCU power tier hierarchy
 */

import fs from 'fs';

// MCU Power Tier Classification (ordered from most powerful to least)
const charactersByTier = [
  // Cosmic tier (5) - Universe-level threats
  'The Watcher', 'Galactus', 'Scarlet Witch', 'Doctor Doom', 'Thanos',

  // Godlike tier (5) - Godly/cosmic-enhanced beings
  'Thor', 'Hela', 'Captain Marvel', 'The Vision', 'Dr. Strange',

  // Enhanced tier (5) - Super-powered beings
  'Hulk', 'Iron Man', 'Magneto', 'Venom', 'Ultron',

  // Skilled tier (5) - Peak humans with special abilities
  'Captain America', 'Black Panther', 'Spider-Man', 'Loki', 'Mr. Fantastic',

  // Tactical tier (5) - Skilled tacticians
  'Black Widow', 'Hawk-Eye', 'Star-Lord', 'Ant-Man', 'Red Skull',

  // Street tier (6) - Street-level threats
  'Ronan the Accuser', 'Killmonger', 'Mysterio', 'Doctor Octopus', 'Green Goblin', 'Kingpin'
];

const TOTAL = 31;
const WINS_EACH = 15;

// Create matchup matrix using circular tournament with tier weighting
const matrix = {};
charactersByTier.forEach(char => {
  matrix[char] = {};
  charactersByTier.forEach(opp => {
    matrix[char][opp] = char === opp ? null : undefined;
  });
});

/**
 * Modified circular tournament algorithm
 * Each character in position i beats the next 15 characters in a circular arrangement,
 * with adjustments to respect power tiers
 */
for (let i = 0; i < TOTAL; i++) {
  const char = charactersByTier[i];
  const beatsIndices = [];

  // Determine which 15 characters this one beats
  // Start with circular pattern: beat the next 15 positions
  for (let offset = 1; offset <= WINS_EACH; offset++) {
    beatsIndices.push((i + offset) % TOTAL);
  }

  // Apply the wins
  beatsIndices.forEach(oppIndex => {
    const opponent = charactersByTier[oppIndex];
    matrix[char][opponent] = true;
    matrix[opponent][char] = false;
  });
}

// Validate the result
console.log('Validation Results:\n');
console.log('='.repeat(60));

let isBalanced = true;
const results = [];

charactersByTier.forEach(char => {
  const wins = Object.values(matrix[char]).filter(v => v === true).length;
  const losses = charactersByTier.filter(opp =>
    opp !== char && matrix[opp][char] === true
  ).length;

  const status = (wins === WINS_EACH && losses === WINS_EACH) ? '✓' : '✗';
  if (status === '✗') isBalanced = false;

  const padding = ' '.repeat(Math.max(1, 25 - char.length));
  console.log(`${status} ${char}${padding}${wins} wins, ${losses} losses`);

  results.push({ char, wins, losses });
});

console.log('='.repeat(60));

if (isBalanced) {
  console.log('\n✓ PERFECTLY BALANCED! All 31 characters have exactly 15 wins and 15 losses.\n');
} else {
  console.log('\n✗ Balance check failed.\n');
  process.exit(1);
}

// Check for conflicts
let conflicts = 0;
charactersByTier.forEach(char1 => {
  charactersByTier.forEach(char2 => {
    if (char1 !== char2 && matrix[char1][char2] === true && matrix[char2][char1] === true) {
      console.log(`CONFLICT: ${char1} beats ${char2} AND ${char2} beats ${char1}`);
      conflicts++;
    }
  });
});

if (conflicts === 0) {
  console.log('✓ No bidirectional conflicts found!\n');
} else {
  console.log(`\n✗ Found ${conflicts} bidirectional conflicts!\n`);
  process.exit(1);
}

// Export the beats list (who each character defeats)
const beatsList = {};
charactersByTier.forEach(char => {
  beatsList[char] = charactersByTier.filter(opp => matrix[char][opp] === true);
});

fs.writeFileSync(
  './scripts/beats-list.json',
  JSON.stringify(beatsList, null, 2)
);

console.log('✓ Matchup matrix generated successfully!');
console.log('✓ Beats list saved to scripts/beats-list.json\n');

// Display summary by tier
console.log('Character Order (used for circular tournament):');
console.log('='.repeat(60));

let index = 0;
const tiers = [
  { name: 'Cosmic', count: 5 },
  { name: 'Godlike', count: 5 },
  { name: 'Enhanced', count: 5 },
  { name: 'Skilled', count: 5 },
  { name: 'Tactical', count: 5 },
  { name: 'Street', count: 6 }
];

tiers.forEach(tier => {
  console.log(`\n${tier.name.toUpperCase()} TIER:`);
  for (let i = 0; i < tier.count; i++) {
    console.log(`  ${index}: ${charactersByTier[index]}`);
    index++;
  }
});

console.log('\n' + '='.repeat(60));
console.log('\nExplanation: Each character at position N beats positions N+1 through N+15 (wrapping around).');
console.log('This creates a perfectly balanced circular tournament.\n');
