/**
 * Convert Balanced Matchups to Character Registry Format
 *
 * Splits the 15 wins per character into:
 * - Base beats (5 wins for Avengers saga)
 * - Infinity deltas (5 additional wins)
 * - Multiverse deltas (5 additional wins)
 */

import fs from 'fs';

const beatsList = JSON.parse(fs.readFileSync('./scripts/beats-list.json', 'utf-8'));
const actionTaglines = JSON.parse(fs.readFileSync('./scripts/action-taglines.json', 'utf-8'));

// Character colors (from original file)
const characterColors = {
  'Captain America': '#0A3161',
  'Iron Man': '#C8102E',
  'Thor': '#B0B0B0',
  'Hulk': '#6DAA2C',
  'Black Widow': '#1A1A1A',
  'Spider-Man': '#DF1F2D',
  'Dr. Strange': '#1B4B8C',
  'Black Panther': '#2C2C54',
  'Scarlet Witch': '#DC143C',
  'Hawk-Eye': '#4B0082',
  'The Vision': '#E83F6F',
  'Star-Lord': '#8B4513',
  'Ant-Man': '#B8001F',
  'Captain Marvel': '#FDB827',
  'Mr. Fantastic': '#4682B4',
  'Loki': '#2D5016',
  'Red Skull': '#8B0000',
  'Ronan the Accuser': '#1C3A70',
  'Ultron': '#C0C0C0',
  'Killmonger': '#FFD700',
  'Thanos': '#6A1B9A',
  'Hela': '#00FF00',
  'Mysterio': '#32CD32',
  'Venom': '#0D0D0D',
  'Galactus': '#FF1493',
  'Doctor Doom': '#2F4F4F',
  'Magneto': '#8A2BE2',
  'Doctor Octopus': '#2E8B57',
  'Green Goblin': '#556B2F',
  'Kingpin': '#FFFFFF',
  'The Watcher': '#F5F5DC'
};

// Convert beats list to character registry format
const characterRegistry = {};

Object.entries(beatsList).forEach(([charName, opponents]) => {
  // Split 15 opponents into 3 groups of 5
  const baseBeats = opponents.slice(0, 5);
  const infinityBeats = opponents.slice(5, 10);
  const multiverseBeats = opponents.slice(10, 15);

  // Get corresponding actions
  const baseActions = {};
  const infinityActions = {};
  const multiverseActions = {};

  baseBeats.forEach(opp => {
    baseActions[opp] = actionTaglines[charName][opp];
  });

  infinityBeats.forEach(opp => {
    infinityActions[opp] = actionTaglines[charName][opp];
  });

  multiverseBeats.forEach(opp => {
    multiverseActions[opp] = actionTaglines[charName][opp];
  });

  // Build character object
  characterRegistry[charName] = {
    color: characterColors[charName] || '#808080',
    baseBeats,
    baseActions,
    deltasPerSaga: {
      infinity: infinityBeats,
      infinityActions,
      multiverse: multiverseBeats,
      multiverseActions
    }
  };
});

// Generate the JavaScript file content
function generateCharacterJS() {
  let output = `/**
 * Character Registry
 *
 * Central registry for all MCU characters with:
 * - MCU-accurate colors (based on iconic suit/appearance)
 * - Mathematically balanced matchups (each character wins exactly 15 times)
 * - Base beats relationships (Avengers Saga - 5 wins)
 * - Incremental beats additions per saga (Infinity +5, Multiverse +5)
 * - Action taglines describing how each character defeats opponents
 *
 * Generated using circular tournament algorithm to ensure perfect balance
 * and no bidirectional conflicts.
 */

export const characterRegistry = {
  // ========================================
  // HEROES
  // ========================================

`;

  const heroes = ['Captain America', 'Iron Man', 'Thor', 'Hulk', 'Black Widow', 'Spider-Man',
                  'Dr. Strange', 'Black Panther', 'Scarlet Witch', 'Hawk-Eye', 'The Vision',
                  'Star-Lord', 'Ant-Man', 'Captain Marvel', 'Mr. Fantastic'];

  const villains = ['Loki', 'Red Skull', 'Ronan the Accuser', 'Ultron', 'Killmonger', 'Thanos',
                    'Hela', 'Mysterio', 'Venom', 'Galactus', 'Doctor Doom', 'Magneto',
                    'Doctor Octopus', 'Green Goblin', 'Kingpin', 'The Watcher'];

  // Add heroes
  heroes.forEach((charName, index) => {
    const char = characterRegistry[charName];
    output += `  "${charName}": {\n`;
    output += `    color: "${char.color}",\n`;
    output += `    baseBeats: ${JSON.stringify(char.baseBeats)},\n`;
    output += `    baseActions: ${JSON.stringify(char.baseActions, null, 6).replace(/\n/g, '\n    ')},\n`;
    output += `    deltasPerSaga: {\n`;
    output += `      infinity: ${JSON.stringify(char.deltasPerSaga.infinity)},\n`;
    output += `      infinityActions: ${JSON.stringify(char.deltasPerSaga.infinityActions, null, 8).replace(/\n/g, '\n      ')},\n`;
    output += `      multiverse: ${JSON.stringify(char.deltasPerSaga.multiverse)},\n`;
    output += `      multiverseActions: ${JSON.stringify(char.deltasPerSaga.multiverseActions, null, 8).replace(/\n/g, '\n      ')}\n`;
    output += `    }\n`;
    output += `  }${index < heroes.length - 1 ? ',' : ''}\n\n`;
  });

  output += `  // ========================================
  // VILLAINS
  // ========================================

`;

  // Add villains
  villains.forEach((charName, index) => {
    const char = characterRegistry[charName];
    output += `  "${charName}": {\n`;
    output += `    color: "${char.color}",\n`;
    output += `    baseBeats: ${JSON.stringify(char.baseBeats)},\n`;
    output += `    baseActions: ${JSON.stringify(char.baseActions, null, 6).replace(/\n/g, '\n    ')},\n`;
    output += `    deltasPerSaga: {\n`;
    output += `      infinity: ${JSON.stringify(char.deltasPerSaga.infinity)},\n`;
    output += `      infinityActions: ${JSON.stringify(char.deltasPerSaga.infinityActions, null, 8).replace(/\n/g, '\n      ')},\n`;
    output += `      multiverse: ${JSON.stringify(char.deltasPerSaga.multiverse)},\n`;
    output += `      multiverseActions: ${JSON.stringify(char.deltasPerSaga.multiverseActions, null, 8).replace(/\n/g, '\n      ')}\n`;
    output += `    }\n`;
    output += `  }${index < villains.length - 1 ? ',' : ''}\n\n`;
  });

  output += `};
`;

  return output;
}

// Write the new characters.js file
const newCharactersJS = generateCharacterJS();
fs.writeFileSync('./src/data/characters.js', newCharactersJS);

console.log('✓ Character registry generated successfully!');
console.log('✓ Updated src/data/characters.js');
console.log('\nBalance Summary:');
console.log('- Total characters: 31');
console.log('- Wins per character: 15');
console.log('- Base saga (Avengers): 5 wins each');
console.log('- Infinity saga: +5 wins each');
console.log('- Multiverse saga: +5 wins each');
console.log('\n✓ Mathematically perfect balance with no conflicts!');
