/**
 * Narrative Matchup Designer
 *
 * Helps design MCU-accurate matchups for rock-paper-scissors mechanics
 */

// AVENGERS SAGA - 5 HEROES
// Each character must beat exactly 2 others and lose to exactly 2 others

const avengersHeroes = [
  'Captain America',
  'Iron Man',
  'Thor',
  'Hulk',
  'Black Widow'
];

// User's narrative requirements:
// - Iron Man beats Captain America (Civil War)
// - Black Widow beats Hulk (calming ability)
// - Thor beats Iron Man (lightning overpowers suit)

// Building the matchup matrix
const heroMatchups = {
  'Captain America': {
    beats: ['Black Widow', 'Hulk'],
    reasoning: [
      'Black Widow - Superior combat training and strength',
      'Hulk - Tactical mind, held Thanos\' hand'
    ]
  },
  'Iron Man': {
    beats: ['Captain America', 'Black Widow'],
    reasoning: [
      'Captain America - Civil War victory',
      'Black Widow - Tech and firepower advantage'
    ]
  },
  'Thor': {
    beats: ['Iron Man', 'Captain America'],
    reasoning: [
      'Iron Man - Lightning disrupts/overpowers arc reactor',
      'Captain America - God-tier power vs super soldier'
    ]
  },
  'Hulk': {
    beats: ['Thor', 'Iron Man'],
    reasoning: [
      'Thor - Can match god strength with rage (Age of Ultron)',
      'Iron Man - Brute force breaks armor'
    ]
  },
  'Black Widow': {
    beats: ['Hulk', 'Thor'],
    reasoning: [
      'Hulk - Lullaby/calming ability, psychological manipulation',
      'Thor - Espionage and cunning defeats arrogance'
    ]
  }
};

// Verify balance
console.log('=== AVENGERS SAGA HEROES MATCHUP VERIFICATION ===\n');

let isBalanced = true;
avengersHeroes.forEach(hero => {
  const beats = heroMatchups[hero].beats;
  console.log(`${hero}:`);
  console.log(`  Beats (${beats.length}):`, beats);

  // Count losses
  let losses = [];
  avengersHeroes.forEach(opponent => {
    if (opponent !== hero && heroMatchups[opponent].beats.includes(hero)) {
      losses.push(opponent);
    }
  });
  console.log(`  Loses to (${losses.length}):`, losses);

  if (beats.length !== 2 || losses.length !== 2) {
    console.log(`  ⚠️  IMBALANCED! Should have exactly 2 wins and 2 losses`);
    isBalanced = false;
  } else {
    console.log(`  ✓ Balanced`);
  }

  console.log(`  Reasoning:`);
  heroMatchups[hero].reasoning.forEach(r => console.log(`    - ${r}`));
  console.log();
});

if (isBalanced) {
  console.log('✅ All heroes are balanced!\n');
} else {
  console.log('❌ Matchups need adjustment\n');
}

// Check for conflicts (A beats B AND B beats A)
console.log('=== CHECKING FOR CONFLICTS ===\n');
let hasConflicts = false;
avengersHeroes.forEach(hero => {
  heroMatchups[hero].beats.forEach(opponent => {
    if (heroMatchups[opponent].beats.includes(hero)) {
      console.log(`⚠️  CONFLICT: ${hero} beats ${opponent} AND ${opponent} beats ${hero}`);
      hasConflicts = true;
    }
  });
});

if (!hasConflicts) {
  console.log('✅ No conflicts found\n');
}

// AVENGERS SAGA - 5 VILLAINS
// Each character must beat exactly 2 others and lose to exactly 2 others

const avengersVillains = [
  'Loki',
  'Red Skull',
  'Ronan the Accuser',
  'Ultron',
  'Killmonger'
];

const villainMatchups = {
  'Loki': {
    beats: ['Red Skull', 'Killmonger'],
    reasoning: [
      'Red Skull - God of Mischief vs Nazi scientist, magic beats tactics',
      'Killmonger - Trickery and illusions defeat warrior pride'
    ]
  },
  'Red Skull': {
    beats: ['Ronan the Accuser', 'Ultron'],
    reasoning: [
      'Ronan the Accuser - Tesseract/Cosmic Cube knowledge counters Power Stone',
      'Ultron - HYDRA tech understanding, experience with advanced AI'
    ]
  },
  'Ronan the Accuser': {
    beats: ['Loki', 'Ultron'],
    reasoning: [
      'Loki - Universal Weapon + Kree strength overpowers trickster',
      'Ultron - Power Stone energy can disrupt AI systems'
    ]
  },
  'Ultron': {
    beats: ['Killmonger', 'Loki'],
    reasoning: [
      'Killmonger - Vibranium body vs vibranium suit, superior intelligence',
      'Loki - AI evolution defeats magic, no mind to trick'
    ]
  },
  'Killmonger': {
    beats: ['Red Skull', 'Ronan the Accuser'],
    reasoning: [
      'Red Skull - Vibranium suit overpowers HYDRA tech',
      'Ronan the Accuser - Wakandan combat prowess and agility defeats brute force'
    ]
  }
};

// Verify villain balance
console.log('=== AVENGERS SAGA VILLAINS MATCHUP VERIFICATION ===\n');

let villainsBalanced = true;
avengersVillains.forEach(villain => {
  const beats = villainMatchups[villain].beats;
  console.log(`${villain}:`);
  console.log(`  Beats (${beats.length}):`, beats);

  // Count losses
  let losses = [];
  avengersVillains.forEach(opponent => {
    if (opponent !== villain && villainMatchups[opponent].beats.includes(villain)) {
      losses.push(opponent);
    }
  });
  console.log(`  Loses to (${losses.length}):`, losses);

  if (beats.length !== 2 || losses.length !== 2) {
    console.log(`  ⚠️  IMBALANCED! Should have exactly 2 wins and 2 losses`);
    villainsBalanced = false;
  } else {
    console.log(`  ✓ Balanced`);
  }

  console.log(`  Reasoning:`);
  villainMatchups[villain].reasoning.forEach(r => console.log(`    - ${r}`));
  console.log();
});

if (villainsBalanced) {
  console.log('✅ All villains are balanced!\n');
} else {
  console.log('❌ Villain matchups need adjustment\n');
}

// Check for villain conflicts
console.log('=== CHECKING FOR VILLAIN CONFLICTS ===\n');
let hasVillainConflicts = false;
avengersVillains.forEach(villain => {
  villainMatchups[villain].beats.forEach(opponent => {
    if (villainMatchups[opponent].beats.includes(villain)) {
      console.log(`⚠️  CONFLICT: ${villain} beats ${opponent} AND ${opponent} beats ${villain}`);
      hasVillainConflicts = true;
    }
  });
});

if (!hasVillainConflicts) {
  console.log('✅ No conflicts found\n');
}

// AVENGERS SAGA - MIXED MODE (10 characters: 5 heroes + 5 villains)
// Each character must beat exactly 4 others (2 from own faction, 2 from opposite faction)

console.log('=== AVENGERS SAGA MIXED MODE DESIGN ===\n');

const mixedMatchups = {
  // HEROES
  'Captain America': {
    beats: [
      // Same-faction (from hero matchups above)
      'Black Widow',
      'Hulk',
      // Cross-faction (heroes vs villains)
      'Loki',
      'Red Skull'
    ],
    reasoning: [
      'Black Widow - Superior combat training and strength',
      'Hulk - Tactical mind, held Thanos\' hand',
      'Loki - Resists mind control, shield defeats scepter (Avengers 1)',
      'Red Skull - Literally fought and defeated him (First Avenger)'
    ]
  },
  'Iron Man': {
    beats: [
      'Captain America',
      'Black Widow',
      'Ultron',
      'Loki'
    ],
    reasoning: [
      'Captain America - Civil War victory',
      'Black Widow - Tech and firepower advantage',
      'Ultron - Creator knowledge, father vs son (even though they tie in film)',
      'Loki - Tower fight in Avengers 1, tech superiority'
    ]
  },
  'Thor': {
    beats: [
      'Iron Man',
      'Captain America',
      'Loki',
      'Ultron'
    ],
    reasoning: [
      'Iron Man - Lightning disrupts/overpowers arc reactor',
      'Captain America - God-tier power vs super soldier',
      'Loki - Brother rivalry, always comes out on top eventually',
      'Ultron - Lightning can short-circuit AI systems'
    ]
  },
  'Hulk': {
    beats: [
      'Thor',
      'Iron Man',
      'Loki',
      'Ultron'
    ],
    reasoning: [
      'Thor - Can match god strength with rage',
      'Iron Man - Brute force breaks armor',
      'Loki - \"Puny god\" scene from Avengers 1',
      'Ultron - Raw strength can tear through vibranium'
    ]
  },
  'Black Widow': {
    beats: [
      'Hulk',
      'Thor',
      'Loki',
      'Killmonger'
    ],
    reasoning: [
      'Hulk - Lullaby/calming ability, psychological manipulation',
      'Thor - Espionage and cunning defeats arrogance',
      'Loki - Resisted interrogation, outsmarted the trickster',
      'Killmonger - Spy craft and experience vs warrior training'
    ]
  },

  // VILLAINS
  'Loki': {
    beats: [
      'Red Skull',
      'Killmonger',
      'Iron Man',
      'Black Widow'
    ],
    reasoning: [
      'Red Skull - God of Mischief vs Nazi scientist',
      'Killmonger - Trickery defeats warrior pride',
      'Iron Man - Wait, Iron Man beats Loki...'
    ]
  }
};

console.log('Mixed mode requires careful balancing...\n');
console.log('Each character needs: 2 same-faction wins + 2 cross-faction wins = 4 total\n');
