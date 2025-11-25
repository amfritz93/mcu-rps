/**
 * Complete Matchup Redesign for All Game Modes
 *
 * Ensures heroes-only, villains-only, AND mixed modes all work properly.
 * Each character's beats list includes characters from BOTH factions.
 */

// Avengers saga is already correct (2 same + 2 cross = 4 total)
const avengersBase = {
  'Captain America': ['Black Widow', 'Hulk', 'Loki', 'Red Skull'],
  'Iron Man': ['Captain America', 'Black Widow', 'Ultron', 'Ronan the Accuser'],
  'Thor': ['Iron Man', 'Captain America', 'Loki', 'Killmonger'],
  'Hulk': ['Thor', 'Iron Man', 'Ultron', 'Ronan the Accuser'],
  'Black Widow': ['Hulk', 'Thor', 'Red Skull', 'Killmonger'],
  'Loki': ['Red Skull', 'Killmonger', 'Iron Man', 'Black Widow'],
  'Red Skull': ['Ronan the Accuser', 'Ultron', 'Thor', 'Hulk'],
  'Ronan the Accuser': ['Loki', 'Ultron', 'Captain America', 'Black Widow'],
  'Ultron': ['Killmonger', 'Loki', 'Captain America', 'Thor'],
  'Killmonger': ['Red Skull', 'Ronan the Accuser', 'Iron Man', 'Hulk']
};

// Infinity saga: +5 wins for existing chars (split 2 same, 3 cross)
// New chars: 9 total wins (split 4 same, 5 cross)
const infinityDelta = {
  // EXISTING AVENGERS HEROES (+5: 2 heroes, 3 villains)
  'Captain America': [
    'Spider-Man', 'Black Panther', // 2 heroes
    'Thanos', 'Venom', 'Mysterio'  // 3 villains
  ],
  'Iron Man': [
    'Spider-Man', 'Dr. Strange',   // 2 heroes
    'Hela', 'Mysterio', 'Venom'    // 3 villains
  ],
  'Thor': [
    'Dr. Strange', 'Scarlet Witch', // 2 heroes
    'Thanos', 'Hela', 'Mysterio'   // 3 villains
  ],
  'Hulk': [
    'Spider-Man', 'Black Panther',  // 2 heroes
    'Hela', 'Venom', 'Mysterio'    // 3 villains
  ],
  'Black Widow': [
    'Spider-Man', 'Dr. Strange',    // 2 heroes
    'Thanos', 'Mysterio', 'Venom'  // 3 villains
  ],

  // EXISTING AVENGERS VILLAINS (+5: 2 villains, 3 heroes)
  'Loki': [
    'Hela', 'Mysterio',             // 2 villains
    'Spider-Man', 'Dr. Strange', 'Black Panther' // 3 heroes
  ],
  'Red Skull': [
    'Thanos', 'Venom',              // 2 villains
    'Spider-Man', 'Scarlet Witch', 'Black Panther' // 3 heroes
  ],
  'Ronan the Accuser': [
    'Thanos', 'Venom',              // 2 villains
    'Spider-Man', 'Dr. Strange', 'Scarlet Witch' // 3 heroes
  ],
  'Ultron': [
    'Hela', 'Mysterio',             // 2 villains
    'Dr. Strange', 'Black Panther', 'Black Widow' // 3 heroes
  ],
  'Killmonger': [
    'Thanos', 'Venom',              // 2 villains
    'Spider-Man', 'Scarlet Witch', 'Black Panther' // 3 heroes
  ],

  // NEW INFINITY HEROES (9 total: 4 heroes, 5 villains)
  'Spider-Man': [
    'Dr. Strange', 'Scarlet Witch', 'Black Panther', 'Black Widow', // 4 heroes
    'Loki', 'Ultron', 'Thanos', 'Mysterio', 'Venom'  // 5 villains
  ],
  'Dr. Strange': [
    'Black Panther', 'Scarlet Witch', 'Hulk', 'Black Widow', // 4 heroes
    'Red Skull', 'Ronan the Accuser', 'Killmonger', 'Hela', 'Venom' // 5 villains
  ],
  'Black Panther': [
    'Scarlet Witch', 'Spider-Man', 'Iron Man', 'Black Widow', // 4 heroes
    'Loki', 'Red Skull', 'Ronan the Accuser', 'Thanos', 'Hela' // 5 villains
  ],
  'Scarlet Witch': [
    'Captain America', 'Iron Man', 'Thor', 'Spider-Man', // 4 heroes
    'Loki', 'Red Skull', 'Ultron', 'Thanos', 'Hela' // 5 villains
  ],

  // NEW INFINITY VILLAINS (9 total: 5 heroes, 4 villains)
  'Thanos': [
    'Iron Man', 'Thor', 'Hulk', 'Dr. Strange', 'Black Panther', // 5 heroes
    'Loki', 'Red Skull', 'Hela', 'Mysterio' // 4 villains
  ],
  'Hela': [
    'Captain America', 'Iron Man', 'Black Widow', 'Dr. Strange', 'Spider-Man', // 5 heroes
    'Ronan the Accuser', 'Killmonger', 'Mysterio', 'Venom' // 4 villains
  ],
  'Mysterio': [
    'Captain America', 'Thor', 'Hulk', 'Spider-Man', 'Black Panther', // 5 heroes
    'Loki', 'Ronan the Accuser', 'Hela', 'Venom' // 4 villains
  ],
  'Venom': [
    'Thor', 'Black Widow', 'Spider-Man', 'Black Panther', 'Scarlet Witch', // 5 heroes
    'Red Skull', 'Ultron', 'Killmonger', 'Mysterio' // 4 villains
  ]
};

// Multiverse saga: +6 wins for existing (split 3 same, 3 cross)
// New heroes: 15 total (7 heroes, 8 villains)
// New villains: 15 total (8 heroes, 7 villains)
const multiverseDelta = {
  // EXISTING HEROES (+6: 3 heroes, 3 villains)
  'Captain America': [
    'Hawk-Eye', 'The Vision', 'Star-Lord',  // 3 heroes
    'Galactus', 'Magneto', 'Doctor Octopus' // 3 villains
  ],
  'Iron Man': [
    'Ant-Man', 'Captain Marvel', 'Mr. Fantastic', // 3 heroes
    'Doctor Doom', 'Green Goblin', 'The Watcher'  // 3 villains
  ],
  'Thor': [
    'Hawk-Eye', 'Star-Lord', 'Ant-Man',     // 3 heroes
    'Magneto', 'Doctor Octopus', 'Kingpin' // 3 villains
  ],
  'Hulk': [
    'The Vision', 'Captain Marvel', 'Mr. Fantastic', // 3 heroes
    'Galactus', 'Green Goblin', 'The Watcher'        // 3 villains
  ],
  'Black Widow': [
    'Hawk-Eye', 'Ant-Man', 'Mr. Fantastic', // 3 heroes
    'Doctor Doom', 'Magneto', 'Kingpin'     // 3 villains
  ],
  'Spider-Man': [
    'The Vision', 'Star-Lord', 'Captain Marvel', // 3 heroes
    'Galactus', 'Doctor Doom', 'Kingpin'         // 3 villains
  ],
  'Dr. Strange': [
    'Hawk-Eye', 'Star-Lord', 'Ant-Man',         // 3 heroes
    'Galactus', 'Doctor Octopus', 'Green Goblin' // 3 villains
  ],
  'Black Panther': [
    'The Vision', 'Captain Marvel', 'Mr. Fantastic', // 3 heroes
    'Doctor Doom', 'Green Goblin', 'The Watcher'     // 3 villains
  ],
  'Scarlet Witch': [
    'Hawk-Eye', 'Star-Lord', 'Ant-Man',  // 3 heroes
    'Magneto', 'Kingpin', 'The Watcher' // 3 villains
  ],

  // EXISTING VILLAINS (+6: 3 villains, 3 heroes)
  'Loki': [
    'Hawk-Eye', 'The Vision', 'Ant-Man',       // 3 heroes
    'Galactus', 'Magneto', 'Green Goblin'      // 3 villains
  ],
  'Red Skull': [
    'Star-Lord', 'Captain Marvel', 'Mr. Fantastic', // 3 heroes
    'Doctor Doom', 'Doctor Octopus', 'The Watcher' // 3 villains
  ],
  'Ronan the Accuser': [
    'Hawk-Eye', 'The Vision', 'Captain Marvel', // 3 heroes
    'Galactus', 'Kingpin', 'The Watcher'        // 3 villains
  ],
  'Ultron': [
    'Hawk-Eye', 'Star-Lord', 'Ant-Man',         // 3 heroes
    'Doctor Doom', 'Magneto', 'Doctor Octopus'  // 3 villains
  ],
  'Killmonger': [
    'The Vision', 'Star-Lord', 'Mr. Fantastic', // 3 heroes
    'Galactus', 'Green Goblin', 'Kingpin'       // 3 villains
  ],
  'Thanos': [
    'Captain America', 'Iron Man', 'Black Widow', // 3 heroes
    'Hawk-Eye', 'Magneto', 'Doctor Octopus'       // 3 villains
  ],
  'Hela': [
    'Thor', 'Hulk', 'Spider-Man',        // 3 heroes
    'Star-Lord', 'Ant-Man', 'Green Goblin' // 3 villains
  ],
  'Mysterio': [
    'Black Panther', 'Scarlet Witch', 'The Vision', // 3 heroes
    'Captain Marvel', 'Doctor Doom', 'Kingpin'      // 3 villains
  ],
  'Venom': [
    'Captain America', 'Scarlet Witch', 'Hawk-Eye', // 3 heroes
    'Mr. Fantastic', 'Galactus', 'The Watcher'      // 3 villains
  ],

  // NEW MULTIVERSE HEROES (15 total: 7 heroes, 8 villains)
  'Hawk-Eye': [
    'The Vision', 'Star-Lord', 'Ant-Man', 'Captain Marvel', 'Mr. Fantastic', 'Spider-Man', 'Scarlet Witch', // 7 heroes
    'Loki', 'Red Skull', 'Ronan the Accuser', 'Thanos', 'Galactus', 'Doctor Doom', 'Green Goblin', 'Kingpin' // 8 villains
  ],
  'The Vision': [
    'Star-Lord', 'Ant-Man', 'Captain Marvel', 'Mr. Fantastic', 'Black Widow', 'Spider-Man', 'Black Panther', // 7 heroes
    'Red Skull', 'Ultron', 'Killmonger', 'Hela', 'Venom', 'Magneto', 'Doctor Octopus', 'Kingpin' // 8 villains
  ],
  'Star-Lord': [
    'Ant-Man', 'Captain Marvel', 'Mr. Fantastic', 'Hawk-Eye', 'Iron Man', 'Dr. Strange', 'Scarlet Witch', // 7 heroes
    'Loki', 'Ronan the Accuser', 'Killmonger', 'Thanos', 'Venom', 'Doctor Doom', 'Magneto', 'Green Goblin' // 8 villains
  ],
  'Ant-Man': [
    'Captain Marvel', 'Mr. Fantastic', 'Hawk-Eye', 'The Vision', 'Captain America', 'Thor', 'Black Widow', // 7 heroes
    'Loki', 'Red Skull', 'Ultron', 'Thanos', 'Hela', 'Galactus', 'Magneto', 'Doctor Octopus' // 8 villains
  ],
  'Captain Marvel': [
    'Mr. Fantastic', 'Hawk-Eye', 'Star-Lord', 'The Vision', 'Iron Man', 'Hulk', 'Black Panther', // 7 heroes
    'Loki', 'Ronan the Accuser', 'Ultron', 'Killmonger', 'Thanos', 'Hela', 'Doctor Doom', 'Magneto' // 8 villains
  ],
  'Mr. Fantastic': [
    'Hawk-Eye', 'The Vision', 'Ant-Man', 'Star-Lord', 'Captain America', 'Black Widow', 'Dr. Strange', // 7 heroes
    'Loki', 'Red Skull', 'Killmonger', 'Thanos', 'Hela', 'Galactus', 'Doctor Doom', 'Doctor Octopus' // 8 villains
  ],

  // NEW MULTIVERSE VILLAINS (15 total: 8 heroes, 7 villains)
  'Galactus': [
    'Captain America', 'Iron Man', 'Thor', 'Hulk', 'Black Widow', 'Spider-Man', 'Dr. Strange', 'Scarlet Witch', // 8 heroes
    'Doctor Doom', 'Magneto', 'Doctor Octopus', 'Green Goblin', 'Kingpin', 'The Watcher', 'Loki' // 7 villains
  ],
  'Doctor Doom': [
    'Captain America', 'Thor', 'Hulk', 'Spider-Man', 'Dr. Strange', 'Black Panther', 'Scarlet Witch', 'Star-Lord', // 8 heroes
    'Loki', 'Ronan the Accuser', 'Thanos', 'Hela', 'Magneto', 'Green Goblin', 'The Watcher' // 7 villains
  ],
  'Magneto': [
    'Iron Man', 'Black Widow', 'Dr. Strange', 'Black Panther', 'Hawk-Eye', 'Star-Lord', 'Mr. Fantastic', 'Captain Marvel', // 8 heroes
    'Red Skull', 'Killmonger', 'Venom', 'Galactus', 'Doctor Octopus', 'Kingpin', 'The Watcher' // 7 villains
  ],
  'Doctor Octopus': [
    'Iron Man', 'Black Widow', 'Spider-Man', 'Black Panther', 'The Vision', 'Ant-Man', 'Captain Marvel', 'Mr. Fantastic', // 8 heroes
    'Loki', 'Ultron', 'Mysterio', 'Galactus', 'Doctor Doom', 'Green Goblin', 'The Watcher' // 7 villains
  ],
  'Green Goblin': [
    'Black Widow', 'Dr. Strange', 'Scarlet Witch', 'Star-Lord', 'Ant-Man', 'Captain Marvel', 'Mr. Fantastic', 'The Vision', // 8 heroes
    'Ronan the Accuser', 'Thanos', 'Venom', 'Galactus', 'Magneto', 'Kingpin', 'The Watcher' // 7 villains
  ],
  'Kingpin': [
    'Captain America', 'Black Widow', 'Black Panther', 'Hawk-Eye', 'The Vision', 'Captain Marvel', 'Mr. Fantastic', 'Spider-Man', // 8 heroes
    'Red Skull', 'Killmonger', 'Hela', 'Galactus', 'Doctor Doom', 'Magneto', 'Doctor Octopus' // 7 villains
  ],
  'The Watcher': [
    'Thor', 'Hulk', 'Spider-Man', 'Dr. Strange', 'Scarlet Witch', 'Ant-Man', 'Iron Man', 'Black Panther', // 8 heroes
    'Loki', 'Ultron', 'Thanos', 'Mysterio', 'Galactus', 'Magneto', 'Doctor Octopus' // 7 villains
  ]
};

// Verify balance
console.log('=== VERIFYING BALANCE ===\n');

const allChars = Object.keys({...avengersBase, ...infinityDelta, ...multiverseDelta});
let balanced = true;

allChars.forEach(char => {
  const base = avengersBase[char]?.length || 0;
  const infinity = infinityDelta[char]?.length || 0;
  const multiverse = multiverseDelta[char]?.length || 0;
  const total = base + infinity + multiverse;

  if (total !== 15) {
    console.log(`❌ ${char}: ${base} + ${infinity} + ${multiverse} = ${total} (expected 15)`);
    balanced = false;
  }
});

if (balanced) {
  console.log('✅ All characters have exactly 15 wins!\n');
} else {
  console.log('❌ Some characters are imbalanced\n');
  process.exit(1);
}

// Export for use in other scripts
export { avengersBase, infinityDelta, multiverseDelta };

console.log('Matchup redesign complete!');
