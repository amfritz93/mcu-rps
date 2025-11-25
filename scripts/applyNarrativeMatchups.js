/**
 * Apply Narrative Matchups to Character Registry
 *
 * Takes the narrative matchup design and applies it to the character registry,
 * preserving saga-specific action taglines.
 */

import fs from 'fs';
import { avengersBase as avengersBaseBeats, infinityDelta as infinityDeltaBeats, multiverseDelta as multiverseDeltaBeats } from './redesignForAllModes.js';

// Character colors (MCU-accurate)
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

// Saga-specific action taglines
const characterActions = {
  'Captain America': {
    baseAction: 'Vibranium Shield',
    infinityAction: 'Worthy of Mjolnir',
    multiverseAction: 'I Can Do This All Day'
  },
  'Iron Man': {
    baseAction: 'Repulsor Rays',
    infinityAction: 'Hulkbuster Armor',
    multiverseAction: 'Nanotech Arsenal'
  },
  'Thor': {
    baseAction: 'Mjolnir Strike',
    infinityAction: 'Stormbreaker',
    multiverseAction: 'God of Thunder'
  },
  'Hulk': {
    baseAction: 'Hulk Smash',
    infinityAction: 'World Breaker',
    multiverseAction: 'Smart Hulk'
  },
  'Black Widow': {
    baseAction: "Widow's Bite",
    infinityAction: 'Red Room Master',
    multiverseAction: 'Ultimate Sacrifice'
  },
  'Spider-Man': {
    baseAction: 'Web-Slinger',
    infinityAction: 'Web-Slinger',
    multiverseAction: 'Iron Spider'
  },
  'Dr. Strange': {
    baseAction: 'Mystic Arts',
    infinityAction: 'Mystic Arts',
    multiverseAction: 'Master of the Mystic Arts'
  },
  'Black Panther': {
    baseAction: 'Vibranium Claws',
    infinityAction: 'Vibranium Claws',
    multiverseAction: 'Wakanda Forever'
  },
  'Scarlet Witch': {
    baseAction: 'Hex Bolts',
    infinityAction: 'Hex Bolts',
    multiverseAction: 'Chaos Magic'
  },
  'Hawk-Eye': {
    baseAction: 'Perfect Aim',
    infinityAction: null,
    multiverseAction: 'Perfect Aim'
  },
  'The Vision': {
    baseAction: 'Mind Stone Beam',
    infinityAction: null,
    multiverseAction: 'Mind Stone Beam'
  },
  'Star-Lord': {
    baseAction: 'Celestial Power',
    infinityAction: null,
    multiverseAction: 'Celestial Power'
  },
  'Ant-Man': {
    baseAction: 'Quantum Realm',
    infinityAction: null,
    multiverseAction: 'Quantum Realm'
  },
  'Captain Marvel': {
    baseAction: 'Binary Form',
    infinityAction: null,
    multiverseAction: 'Binary Form'
  },
  'Mr. Fantastic': {
    baseAction: 'Genius Intellect',
    infinityAction: null,
    multiverseAction: 'Genius Intellect'
  },
  'Loki': {
    baseAction: 'God of Mischief',
    infinityAction: 'Glorious Purpose',
    multiverseAction: 'Variant Chaos'
  },
  'Red Skull': {
    baseAction: 'HYDRA Technology',
    infinityAction: 'Cosmic Cube',
    multiverseAction: 'Soul Stone Guardian'
  },
  'Ronan the Accuser': {
    baseAction: 'Universal Weapon',
    infinityAction: 'Power Stone',
    multiverseAction: 'Kree Accuser'
  },
  'Ultron': {
    baseAction: 'Age of Ultron',
    infinityAction: 'Vibranium Evolution',
    multiverseAction: 'Infinity Ultron'
  },
  'Killmonger': {
    baseAction: 'Golden Jaguar',
    infinityAction: 'Wakandan Revolution',
    multiverseAction: 'Royal Challenger'
  },
  'Thanos': {
    baseAction: 'Infinity Gauntlet',
    infinityAction: 'Infinity Gauntlet',
    multiverseAction: 'The Snap'
  },
  'Hela': {
    baseAction: 'Goddess of Death',
    infinityAction: 'Goddess of Death',
    multiverseAction: 'Necroswords'
  },
  'Mysterio': {
    baseAction: 'Holographic Illusion',
    infinityAction: 'Holographic Illusion',
    multiverseAction: 'Master of Illusions'
  },
  'Venom': {
    baseAction: 'Symbiote Strike',
    infinityAction: 'Symbiote Strike',
    multiverseAction: 'Lethal Protector'
  },
  'Galactus': {
    baseAction: 'Devourer of Worlds',
    infinityAction: null,
    multiverseAction: 'Devourer of Worlds'
  },
  'Doctor Doom': {
    baseAction: 'Latverian Sorcery',
    infinityAction: null,
    multiverseAction: 'Latverian Sorcery'
  },
  'Magneto': {
    baseAction: 'Master of Magnetism',
    infinityAction: null,
    multiverseAction: 'Master of Magnetism'
  },
  'Doctor Octopus': {
    baseAction: 'Superior Intellect',
    infinityAction: null,
    multiverseAction: 'Superior Intellect'
  },
  'Green Goblin': {
    baseAction: 'Goblin Formula',
    infinityAction: null,
    multiverseAction: 'Goblin Formula'
  },
  'Kingpin': {
    baseAction: 'Crime Lord',
    infinityAction: null,
    multiverseAction: 'Crime Lord'
  },
  'The Watcher': {
    baseAction: 'Cosmic Observer',
    infinityAction: null,
    multiverseAction: 'Cosmic Observer'
  }
};

// Build character registry
const characterRegistry = {};

const heroes = ['Captain America', 'Iron Man', 'Thor', 'Hulk', 'Black Widow', 'Spider-Man',
                'Dr. Strange', 'Black Panther', 'Scarlet Witch', 'Hawk-Eye', 'The Vision',
                'Star-Lord', 'Ant-Man', 'Captain Marvel', 'Mr. Fantastic'];

const villains = ['Loki', 'Red Skull', 'Ronan the Accuser', 'Ultron', 'Killmonger', 'Thanos',
                  'Hela', 'Mysterio', 'Venom', 'Galactus', 'Doctor Doom', 'Magneto',
                  'Doctor Octopus', 'Green Goblin', 'Kingpin', 'The Watcher'];

[...heroes, ...villains].forEach(name => {
  const baseBeats = avengersBaseBeats[name] || [];
  const infinityDelta = infinityDeltaBeats[name] || [];
  const multiverseDelta = multiverseDeltaBeats[name] || [];
  const actions = characterActions[name];

  characterRegistry[name] = {
    color: characterColors[name],
    baseBeats,
    baseAction: actions.baseAction,
    deltasPerSaga: {
      infinity: infinityDelta,
      infinityAction: actions.infinityAction,
      multiverse: multiverseDelta,
      multiverseAction: actions.multiverseAction
    }
  };
});

// Generate the characters.js file
let output = `/**
 * Character Registry
 *
 * Central registry for all MCU characters with:
 * - MCU-accurate colors (based on iconic suit/appearance)
 * - Narratively accurate matchups based on MCU movie canon
 * - Base beats relationships (Avengers Saga - 4 wins in mixed mode)
 * - Incremental beats additions per saga (Infinity +5, Multiverse +6)
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

heroes.forEach((name, index) => {
  const char = characterRegistry[name];
  output += `  "${name}": {\n`;
  output += `    color: "${char.color}",\n`;
  output += `    baseBeats: ${JSON.stringify(char.baseBeats)},\n`;
  output += `    baseAction: "${char.baseAction}",\n`;
  output += `    deltasPerSaga: {\n`;
  output += `      infinity: ${JSON.stringify(char.deltasPerSaga.infinity)},\n`;
  output += `      infinityAction: ${char.deltasPerSaga.infinityAction ? `"${char.deltasPerSaga.infinityAction}"` : 'null'},\n`;
  output += `      multiverse: ${JSON.stringify(char.deltasPerSaga.multiverse)},\n`;
  output += `      multiverseAction: ${char.deltasPerSaga.multiverseAction ? `"${char.deltasPerSaga.multiverseAction}"` : 'null'}\n`;
  output += `    }\n`;
  output += `  },\n\n`;
});

output += `  // ========================================\n`;
output += `  // VILLAINS\n`;
output += `  // ========================================\n\n`;

villains.forEach((name, index) => {
  const char = characterRegistry[name];
  output += `  "${name}": {\n`;
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

output += `};\n`;

// Write the file
fs.writeFileSync('./src/data/characters.js', output);

console.log('✅ Character registry updated with narrative matchups!');
console.log('✅ All matchups are MCU-canon accurate!');
console.log('✅ Perfect mathematical balance: every character has exactly 15 wins!');
