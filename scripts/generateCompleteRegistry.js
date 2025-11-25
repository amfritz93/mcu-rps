/**
 * Generate Complete Character Registry with Narrative Matchups
 *
 * This script generates a complete, balanced character registry for all three sagas:
 * - Avengers Saga: 5 heroes + 5 villains (10 total in mixed)
 * - Infinity Saga: +4 heroes + +4 villains (18 total in mixed)
 * - Multiverse Saga: +6 heroes + +7 villains (31 total in mixed)
 *
 * Each character in mixed mode will have exactly 15 wins across all sagas:
 * - Base (Avengers): 4 wins
 * - Infinity delta: +5 wins
 * - Multiverse delta: +6 wins
 */

import fs from 'fs';

// =============================================================================
// AVENGERS SAGA BASE MATCHUPS
// =============================================================================

const avengersHeroBeats = {
  'Captain America': ['Black Widow', 'Hulk', 'Loki', 'Red Skull'],
  'Iron Man': ['Captain America', 'Black Widow', 'Ultron', 'Ronan the Accuser'],
  'Thor': ['Iron Man', 'Captain America', 'Loki', 'Killmonger'],
  'Hulk': ['Thor', 'Iron Man', 'Ultron', 'Ronan the Accuser'],
  'Black Widow': ['Hulk', 'Thor', 'Red Skull', 'Killmonger']
};

const avengersVillainBeats = {
  'Loki': ['Red Skull', 'Killmonger', 'Iron Man', 'Black Widow'],
  'Red Skull': ['Ronan the Accuser', 'Ultron', 'Thor', 'Hulk'],
  'Ronan the Accuser': ['Loki', 'Ultron', 'Captain America', 'Black Widow'],
  'Ultron': ['Killmonger', 'Loki', 'Captain America', 'Thor'],
  'Killmonger': ['Red Skull', 'Ronan the Accuser', 'Iron Man', 'Hulk']
};

// =============================================================================
// INFINITY SAGA ADDITIONS
// =============================================================================

// New heroes in Infinity: Spider-Man, Dr. Strange, Black Panther, Scarlet Witch
// New villains in Infinity: Thanos, Hela, Mysterio, Venom

// Each existing character gets +5 wins (mix of old and new characters)
// Each new character gets 9 base wins (to reach 9 total in 18-character pool)

const infinityDeltaHeroBeats = {
  // Existing Avengers heroes get +5 wins
  'Captain America': ['Spider-Man', 'Black Panther', 'Scarlet Witch', 'Thanos', 'Venom'],
  'Iron Man': ['Spider-Man', 'Dr. Strange', 'Black Panther', 'Hela', 'Mysterio'],
  'Thor': ['Dr. Strange', 'Scarlet Witch', 'Thanos', 'Hela', 'Mysterio'],
  'Hulk': ['Spider-Man', 'Black Panther', 'Scarlet Witch', 'Hela', 'Venom'],
  'Black Widow': ['Spider-Man', 'Dr. Strange', 'Black Panther', 'Thanos', 'Mysterio'],

  // New Infinity heroes get 9 base wins each
  'Spider-Man': ['Dr. Strange', 'Scarlet Witch', 'Loki', 'Ultron', 'Killmonger', 'Thanos', 'Mysterio', 'Venom', 'Black Panther'],
  'Dr. Strange': ['Black Panther', 'Hulk', 'Red Skull', 'Ronan the Accuser', 'Ultron', 'Killmonger', 'Hela', 'Mysterio', 'Venom'],
  'Black Panther': ['Scarlet Witch', 'Loki', 'Red Skull', 'Ronan the Accuser', 'Killmonger', 'Thanos', 'Hela', 'Mysterio', 'Venom'],
  'Scarlet Witch': ['Captain America', 'Iron Man', 'Thor', 'Loki', 'Red Skull', 'Ultron', 'Thanos', 'Hela', 'Venom']
};

const infinityDeltaVillainBeats = {
  // Existing Avengers villains get +5 wins
  'Loki': ['Spider-Man', 'Dr. Strange', 'Black Panther', 'Hela', 'Mysterio'],
  'Red Skull': ['Spider-Man', 'Scarlet Witch', 'Thanos', 'Mysterio', 'Venom'],
  'Ronan the Accuser': ['Spider-Man', 'Dr. Strange', 'Scarlet Witch', 'Thanos', 'Venom'],
  'Ultron': ['Dr. Strange', 'Black Panther', 'Black Widow', 'Hela', 'Mysterio'],
  'Killmonger': ['Spider-Man', 'Scarlet Witch', 'Thanos', 'Hela', 'Venom'],

  // New Infinity villains get 9 base wins each
  'Thanos': ['Iron Man', 'Thor', 'Hulk', 'Dr. Strange', 'Loki', 'Red Skull', 'Ultron', 'Hela', 'Mysterio'],
  'Hela': ['Captain America', 'Iron Man', 'Black Widow', 'Dr. Strange', 'Ronan the Accuser', 'Killmonger', 'Thanos', 'Mysterio', 'Venom'],
  'Mysterio': ['Captain America', 'Thor', 'Hulk', 'Spider-Man', 'Loki', 'Ronan the Accuser', 'Thanos', 'Hela', 'Venom'],
  'Venom': ['Thor', 'Black Widow', 'Spider-Man', 'Black Panther', 'Red Skull', 'Ronan the Accuser', 'Ultron', 'Killmonger', 'Mysterio']
};

// =============================================================================
// MULTIVERSE SAGA ADDITIONS
// =============================================================================

// New heroes in Multiverse: Hawk-Eye, The Vision, Star-Lord, Ant-Man, Captain Marvel, Mr. Fantastic (6)
// New villains in Multiverse: Galactus, Doctor Doom, Magneto, Doctor Octopus, Green Goblin, Kingpin, The Watcher (7)

// Each existing character gets +6 wins (to total 15)
// Each new character gets 15 base wins

const multiverseDeltaHeroBeats = {
  // Existing characters get +6 wins
  'Captain America': ['Hawk-Eye', 'The Vision', 'Star-Lord', 'Galactus', 'Magneto', 'Doctor Octopus'],
  'Iron Man': ['Ant-Man', 'Captain Marvel', 'Mr. Fantastic', 'Doctor Doom', 'Green Goblin', 'The Watcher'],
  'Thor': ['Hawk-Eye', 'Star-Lord', 'Ant-Man', 'Magneto', 'Doctor Octopus', 'Kingpin'],
  'Hulk': ['The Vision', 'Captain Marvel', 'Mr. Fantastic', 'Galactus', 'Green Goblin', 'The Watcher'],
  'Black Widow': ['Hawk-Eye', 'Ant-Man', 'Mr. Fantastic', 'Doctor Doom', 'Magneto', 'Kingpin'],
  'Spider-Man': ['The Vision', 'Star-Lord', 'Captain Marvel', 'Galactus', 'Doctor Doom', 'Kingpin'],
  'Dr. Strange': ['Hawk-Eye', 'Star-Lord', 'Ant-Man', 'Galactus', 'Doctor Octopus', 'Green Goblin'],
  'Black Panther': ['The Vision', 'Captain Marvel', 'Mr. Fantastic', 'Doctor Doom', 'Green Goblin', 'The Watcher'],
  'Scarlet Witch': ['Hawk-Eye', 'Star-Lord', 'Ant-Man', 'Magneto', 'Kingpin', 'The Watcher'],

  // New Multiverse heroes get 15 base wins each
  'Hawk-Eye': ['The Vision', 'Star-Lord', 'Ant-Man', 'Captain Marvel', 'Mr. Fantastic', 'Loki', 'Red Skull', 'Ronan the Accuser', 'Thanos', 'Mysterio', 'Galactus', 'Doctor Doom', 'Green Goblin', 'Kingpin', 'The Watcher'],
  'The Vision': ['Star-Lord', 'Ant-Man', 'Captain Marvel', 'Mr. Fantastic', 'Red Skull', 'Ultron', 'Killmonger', 'Hela', 'Venom', 'Galactus', 'Magneto', 'Doctor Octopus', 'Green Goblin', 'Kingpin', 'The Watcher'],
  'Star-Lord': ['Ant-Man', 'Captain Marvel', 'Mr. Fantastic', 'Loki', 'Ronan the Accuser', 'Killmonger', 'Thanos', 'Venom', 'Galactus', 'Doctor Doom', 'Magneto', 'Doctor Octopus', 'Green Goblin', 'Kingpin', 'The Watcher'],
  'Ant-Man': ['Captain Marvel', 'Mr. Fantastic', 'Loki', 'Red Skull', 'Ultron', 'Thanos', 'Hela', 'Mysterio', 'Galactus', 'Doctor Doom', 'Magneto', 'Doctor Octopus', 'Green Goblin', 'Kingpin', 'The Watcher'],
  'Captain Marvel': ['Mr. Fantastic', 'Loki', 'Ronan the Accuser', 'Ultron', 'Killmonger', 'Thanos', 'Hela', 'Mysterio', 'Venom', 'Doctor Doom', 'Magneto', 'Doctor Octopus', 'Green Goblin', 'Kingpin', 'The Watcher'],
  'Mr. Fantastic': ['Loki', 'Red Skull', 'Ronan the Accuser', 'Killmonger', 'Thanos', 'Hela', 'Mysterio', 'Venom', 'Galactus', 'Doctor Doom', 'Magneto', 'Doctor Octopus', 'Green Goblin', 'Kingpin', 'The Watcher']
};

const multiverseDeltaVillainBeats = {
  // Existing villains get +6 wins
  'Loki': ['Hawk-Eye', 'The Vision', 'Ant-Man', 'Galactus', 'Magneto', 'Green Goblin'],
  'Red Skull': ['Star-Lord', 'Captain Marvel', 'Mr. Fantastic', 'Doctor Doom', 'Doctor Octopus', 'The Watcher'],
  'Ronan the Accuser': ['Hawk-Eye', 'The Vision', 'Captain Marvel', 'Galactus', 'Kingpin', 'The Watcher'],
  'Ultron': ['Hawk-Eye', 'Star-Lord', 'Ant-Man', 'Doctor Doom', 'Magneto', 'Doctor Octopus'],
  'Killmonger': ['The Vision', 'Star-Lord', 'Mr. Fantastic', 'Galactus', 'Green Goblin', 'Kingpin'],
  'Thanos': ['Captain America', 'Iron Man', 'Black Widow', 'Hawk-Eye', 'Magneto', 'Doctor Octopus'],
  'Hela': ['Thor', 'Hulk', 'Spider-Man', 'Star-Lord', 'Ant-Man', 'Green Goblin'],
  'Mysterio': ['Black Panther', 'Scarlet Witch', 'The Vision', 'Captain Marvel', 'Doctor Doom', 'Kingpin'],
  'Venom': ['Captain America', 'Scarlet Witch', 'Hawk-Eye', 'Mr. Fantastic', 'Galactus', 'The Watcher'],

  // New Multiverse villains get 15 base wins each
  'Galactus': ['Captain America', 'Iron Man', 'Thor', 'Hulk', 'Black Widow', 'Spider-Man', 'Dr. Strange', 'Black Panther', 'Scarlet Witch', 'Doctor Doom', 'Magneto', 'Doctor Octopus', 'Green Goblin', 'Kingpin', 'The Watcher'],
  'Doctor Doom': ['Captain America', 'Thor', 'Hulk', 'Spider-Man', 'Dr. Strange', 'Scarlet Witch', 'Loki', 'Ronan the Accuser', 'Thanos', 'Hela', 'Magneto', 'Doctor Octopus', 'Green Goblin', 'Kingpin', 'The Watcher'],
  'Magneto': ['Iron Man', 'Black Widow', 'Dr. Strange', 'Black Panther', 'Hawk-Eye', 'Star-Lord', 'Mr. Fantastic', 'Red Skull', 'Killmonger', 'Venom', 'Galactus', 'Doctor Octopus', 'Green Goblin', 'Kingpin', 'The Watcher'],
  'Doctor Octopus': ['Iron Man', 'Black Widow', 'Spider-Man', 'Black Panther', 'The Vision', 'Ant-Man', 'Captain Marvel', 'Loki', 'Ultron', 'Mysterio', 'Galactus', 'Doctor Doom', 'Green Goblin', 'Kingpin', 'The Watcher'],
  'Green Goblin': ['Black Widow', 'Dr. Strange', 'Scarlet Witch', 'Star-Lord', 'Ant-Man', 'Captain Marvel', 'Mr. Fantastic', 'Ronan the Accuser', 'Thanos', 'Venom', 'Galactus', 'Doctor Doom', 'Magneto', 'Kingpin', 'The Watcher'],
  'Kingpin': ['Captain America', 'Black Widow', 'Black Panther', 'Hawk-Eye', 'The Vision', 'Captain Marvel', 'Mr. Fantastic', 'Red Skull', 'Killmonger', 'Hela', 'Galactus', 'Doctor Doom', 'Magneto', 'Doctor Octopus', 'Green Goblin'],
  'The Watcher': ['Thor', 'Hulk', 'Spider-Man', 'Dr. Strange', 'Scarlet Witch', 'Ant-Man', 'Loki', 'Ultron', 'Thanos', 'Mysterio', 'Galactus', 'Doctor Doom', 'Magneto', 'Doctor Octopus', 'Kingpin']
};

// =============================================================================
// VERIFICATION
// =============================================================================

console.log('=== VERIFYING ALL CHARACTER WIN COUNTS ===\n');

const allCharacters = [
  ...Object.keys(avengersHeroBeats),
  ...Object.keys(avengersVillainBeats),
  'Spider-Man', 'Dr. Strange', 'Black Panther', 'Scarlet Witch',
  'Thanos', 'Hela', 'Mysterio', 'Venom',
  'Hawk-Eye', 'The Vision', 'Star-Lord', 'Ant-Man', 'Captain Marvel', 'Mr. Fantastic',
  'Galactus', 'Doctor Doom', 'Magneto', 'Doctor Octopus', 'Green Goblin', 'Kingpin', 'The Watcher'
];

let allBalanced = true;

allCharacters.forEach(char => {
  const baseWins = (avengersHeroBeats[char] || avengersVillainBeats[char] || []).length;
  const infinityWins = (infinityDeltaHeroBeats[char] || infinityDeltaVillainBeats[char] || []).length;
  const multiverseWins = (multiverseDeltaHeroBeats[char] || multiverseDeltaVillainBeats[char] || []).length;
  const totalWins = baseWins + infinityWins + multiverseWins;

  const status = totalWins === 15 ? '✓' : '❌';
  console.log(`${status} ${char}: Base(${baseWins}) + Infinity(${infinityWins}) + Multiverse(${multiverseWins}) = ${totalWins}`);

  if (totalWins !== 15) {
    allBalanced = false;
  }
});

if (allBalanced) {
  console.log('\n✅ All characters have exactly 15 wins!\n');
} else {
  console.log('\n❌ Some characters are imbalanced!\n');
  process.exit(1);
}

console.log('Registry generation ready!');
