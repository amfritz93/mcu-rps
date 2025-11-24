/**
 * Generate Saga-Specific Action Taglines
 *
 * Creates single action taglines per saga that reflect character evolution:
 * - Avengers Saga: Early MCU characterization
 * - Infinity Saga: Character development and power growth
 * - Multiverse Saga: Peak powers and final evolution
 */

import fs from 'fs';
import { characterRegistry } from '../src/data/characters.js';

// Character availability by saga
const characterSagas = {
  // Heroes - Avengers Saga
  'Captain America': 'avengers',
  'Iron Man': 'avengers',
  'Thor': 'avengers',
  'Hulk': 'avengers',
  'Black Widow': 'avengers',

  // Heroes - Infinity Saga
  'Spider-Man': 'infinity',
  'Dr. Strange': 'infinity',
  'Black Panther': 'infinity',
  'Scarlet Witch': 'infinity',

  // Heroes - Multiverse Saga
  'Hawk-Eye': 'multiverse',
  'The Vision': 'multiverse',
  'Star-Lord': 'multiverse',
  'Ant-Man': 'multiverse',
  'Captain Marvel': 'multiverse',
  'Mr. Fantastic': 'multiverse',

  // Villains - Avengers Saga
  'Loki': 'avengers',
  'Red Skull': 'avengers',
  'Ronan the Accuser': 'avengers',
  'Ultron': 'avengers',
  'Killmonger': 'avengers',

  // Villains - Infinity Saga
  'Thanos': 'infinity',
  'Hela': 'infinity',
  'Mysterio': 'infinity',
  'Venom': 'infinity',

  // Villains - Multiverse Saga
  'Galactus': 'multiverse',
  'Doctor Doom': 'multiverse',
  'Magneto': 'multiverse',
  'Doctor Octopus': 'multiverse',
  'Green Goblin': 'multiverse',
  'Kingpin': 'multiverse',
  'The Watcher': 'multiverse'
};

// MCU-accurate saga-specific action taglines for each character
const sagaActions = {
  // HEROES - AVENGERS SAGA
  'Captain America': {
    avengers: 'Vibranium Shield',
    infinity: 'Worthy of Mjolnir',
    multiverse: 'I Can Do This All Day'
  },
  'Iron Man': {
    avengers: 'Repulsor Rays',
    infinity: 'Hulkbuster Armor',
    multiverse: 'Nanotech Arsenal'
  },
  'Thor': {
    avengers: 'Mjolnir Strike',
    infinity: 'Stormbreaker',
    multiverse: 'God of Thunder'
  },
  'Hulk': {
    avengers: 'Hulk Smash',
    infinity: 'World Breaker',
    multiverse: 'Smart Hulk'
  },
  'Black Widow': {
    avengers: 'Widow\'s Bite',
    infinity: 'Red Room Master',
    multiverse: 'Ultimate Sacrifice'
  },

  // HEROES - INFINITY SAGA
  'Spider-Man': {
    infinity: 'Web-Slinger',
    multiverse: 'Iron Spider'
  },
  'Dr. Strange': {
    infinity: 'Mystic Arts',
    multiverse: 'Master of the Mystic Arts'
  },
  'Black Panther': {
    infinity: 'Vibranium Claws',
    multiverse: 'Wakanda Forever'
  },
  'Scarlet Witch': {
    infinity: 'Hex Bolts',
    multiverse: 'Chaos Magic'
  },

  // HEROES - MULTIVERSE SAGA
  'Hawk-Eye': {
    multiverse: 'Perfect Aim'
  },
  'The Vision': {
    multiverse: 'Mind Stone Beam'
  },
  'Star-Lord': {
    multiverse: 'Celestial Power'
  },
  'Ant-Man': {
    multiverse: 'Quantum Realm'
  },
  'Captain Marvel': {
    multiverse: 'Binary Form'
  },
  'Mr. Fantastic': {
    multiverse: 'Genius Intellect'
  },

  // VILLAINS - AVENGERS SAGA
  'Loki': {
    avengers: 'God of Mischief',
    infinity: 'Glorious Purpose',
    multiverse: 'Variant Chaos'
  },
  'Red Skull': {
    avengers: 'HYDRA Technology',
    infinity: 'Cosmic Cube',
    multiverse: 'Soul Stone Guardian'
  },
  'Ronan the Accuser': {
    avengers: 'Universal Weapon',
    infinity: 'Power Stone',
    multiverse: 'Kree Accuser'
  },
  'Ultron': {
    avengers: 'Age of Ultron',
    infinity: 'Vibranium Evolution',
    multiverse: 'Infinity Ultron'
  },
  'Killmonger': {
    avengers: 'Golden Jaguar',
    infinity: 'Wakandan Revolution',
    multiverse: 'Royal Challenger'
  },

  // VILLAINS - INFINITY SAGA
  'Thanos': {
    infinity: 'Infinity Gauntlet',
    multiverse: 'The Snap'
  },
  'Hela': {
    infinity: 'Goddess of Death',
    multiverse: 'Necroswords'
  },
  'Mysterio': {
    infinity: 'Holographic Illusion',
    multiverse: 'Master of Illusions'
  },
  'Venom': {
    infinity: 'Symbiote Strike',
    multiverse: 'Lethal Protector'
  },

  // VILLAINS - MULTIVERSE SAGA
  'Galactus': {
    multiverse: 'Devourer of Worlds'
  },
  'Doctor Doom': {
    multiverse: 'Latverian Sorcery'
  },
  'Magneto': {
    multiverse: 'Master of Magnetism'
  },
  'Doctor Octopus': {
    multiverse: 'Superior Intellect'
  },
  'Green Goblin': {
    multiverse: 'Goblin Formula'
  },
  'Kingpin': {
    multiverse: 'Crime Lord'
  },
  'The Watcher': {
    multiverse: 'Cosmic Observer'
  }
};

// Generate new character registry with consolidated actions
const newCharacterRegistry = {};

Object.keys(characterRegistry).forEach(charName => {
  const char = characterRegistry[charName];
  const firstSaga = characterSagas[charName];
  const actions = sagaActions[charName];

  // Build new structure
  newCharacterRegistry[charName] = {
    color: char.color,
    baseBeats: char.baseBeats,
    baseAction: actions[firstSaga] || actions.avengers || actions.infinity || actions.multiverse,
    deltasPerSaga: {
      infinity: char.deltasPerSaga.infinity,
      infinityAction: actions.infinity || null,
      multiverse: char.deltasPerSaga.multiverse,
      multiverseAction: actions.multiverse || null
    }
  };
});

// Generate the new characters.js content
function generateCharactersJS() {
  let output = `/**
 * Character Registry
 *
 * Central registry for all MCU characters with:
 * - MCU-accurate colors (based on iconic suit/appearance)
 * - Mathematically balanced matchups (each character wins exactly 15 times)
 * - Base beats relationships (Avengers Saga - 5 wins)
 * - Incremental beats additions per saga (Infinity +5, Multiverse +5)
 * - Saga-specific action taglines reflecting character evolution
 *
 * Action taglines are consolidated per saga:
 * - baseAction: Used for all wins in the character's first available saga
 * - infinityAction: Used for all wins in Infinity Saga (if character available)
 * - multiverseAction: Used for all wins in Multiverse Saga (if character available)
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
    const char = newCharacterRegistry[charName];
    output += `  "${charName}": {\n`;
    output += `    color: "${char.color}",\n`;
    output += `    baseBeats: ${JSON.stringify(char.baseBeats)},\n`;
    output += `    baseAction: "${char.baseAction}",\n`;
    output += `    deltasPerSaga: {\n`;
    output += `      infinity: ${JSON.stringify(char.deltasPerSaga.infinity)},\n`;
    output += `      infinityAction: ${char.deltasPerSaga.infinityAction ? `"${char.deltasPerSaga.infinityAction}"` : 'null'},\n`;
    output += `      multiverse: ${JSON.stringify(char.deltasPerSaga.multiverse)},\n`;
    output += `      multiverseAction: ${char.deltasPerSaga.multiverseAction ? `"${char.deltasPerSaga.multiverseAction}"` : 'null'}\n`;
    output += `    }\n`;
    output += `  }${index < heroes.length - 1 ? ',' : ''}\n\n`;
  });

  output += `  // ========================================
  // VILLAINS
  // ========================================

`;

  // Add villains
  villains.forEach((charName, index) => {
    const char = newCharacterRegistry[charName];
    output += `  "${charName}": {\n`;
    output += `    color: "${char.color}",\n`;
    output += `    baseBeats: ${JSON.stringify(char.baseBeats)},\n`;
    output += `    baseAction: "${char.baseAction}",\n`;
    output += `    deltasPerSaga: {\n`;
    output += `      infinity: ${JSON.stringify(char.deltasPerSaga.infinity)},\n`;
    output += `      infinityAction: ${char.deltasPerSaga.infinityAction ? `"${char.deltasPerSaga.infinityAction}"` : 'null'},\n`;
    output += `      multiverse: ${JSON.stringify(char.deltasPerSaga.multiverse)},\n`;
    output += `      multiverseAction: ${char.deltasPerSaga.multiverseAction ? `"${char.deltasPerSaga.multiverseAction}"` : 'null'}\n`;
    output += `    }\n`;
    output += `  }${index < villains.length - 1 ? ',' : ''}\n\n`;
  });

  output += `};
`;

  return output;
}

// Write the updated characters.js file
const updatedCharactersJS = generateCharactersJS();
fs.writeFileSync('./src/data/characters.js', updatedCharactersJS);

console.log('✓ Character registry updated with saga-specific actions!');
console.log('\nAction Structure:');
console.log('- baseAction: Used for all base saga wins');
console.log('- infinityAction: Used for all infinity saga wins (if applicable)');
console.log('- multiverseAction: Used for all multiverse saga wins (if applicable)');
console.log('\nExample: Iron Man');
console.log('  Avengers Saga: "Repulsor Rays" (all 5 wins)');
console.log('  Infinity Saga: "Hulkbuster Armor" (all 5 wins)');
console.log('  Multiverse Saga: "Nanotech Arsenal" (all 5 wins)');
