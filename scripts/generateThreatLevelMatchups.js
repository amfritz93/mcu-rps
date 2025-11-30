/**
 * Generate Matchups for All Threat Levels
 *
 * This script creates win/loss matchup combinations for all 6 threat levels
 * across Easy (7), Medium (11), and Hard (15) character rosters.
 */

// STREET LEVEL
const streetLevel = {
  easy: {
    heroes: ['Kate Bishop', 'Mockingbird', 'Luke Cage'],
    villains: ['The Swordsman', 'Madame Gao', 'Grant Ward'],
    neutral: ['Echo']
  },
  medium: {
    heroes: ['Kate Bishop', 'Mockingbird', 'Luke Cage', 'Jessica Jones', 'Phil Coulson'],
    villains: ['The Swordsman', 'Madame Gao', 'Grant Ward', 'Purple Man', 'Cottonmouth'],
    neutral: ['Elektra']
  },
  hard: {
    heroes: ['Kate Bishop', 'Mockingbird', 'Luke Cage', 'Jessica Jones', 'Phil Coulson', 'Daredevil', 'White Tiger'],
    villains: ['The Swordsman', 'Madame Gao', 'Grant Ward', 'Purple Man', 'Cottonmouth', 'Kingpin', 'Bullseye'],
    neutral: ['The Punisher']
  }
};

// SKILLED LEVEL
const skilledLevel = {
  easy: {
    heroes: ['Black Widow', 'Hawkeye', 'Falcon'],
    villains: ['Crossbones', 'Ulysses Klaue', 'Baron Zemo'],
    neutral: ['Nick Fury']
  },
  medium: {
    heroes: ['Black Widow', 'Hawkeye', 'Falcon', 'Gamora', 'Okoye'],
    villains: ['Crossbones', 'Ulysses Klaue', 'Baron Zemo', 'Corvus Glaive', 'Killmonger'],
    neutral: ['Power Broker']
  },
  hard: {
    heroes: ['Black Widow', 'Hawkeye', 'Falcon', 'Gamora', 'Okoye', 'Shang-Chi', 'Rocket Raccoon'],
    villains: ['Crossbones', 'Ulysses Klaue', 'Baron Zemo', 'Corvus Glaive', 'Killmonger', 'Proxima Midnight', 'The Mandarin'],
    neutral: ['Taskmaster']
  }
};

// TECH LEVEL
const techLevel = {
  easy: {
    heroes: ['Iron Man', 'Ant-Man', 'Shuri'],
    villains: ['Whiplash', 'Yellowjacket', 'Arnim Zola'],
    neutral: ['Hank Pym']
  },
  medium: {
    heroes: ['Iron Man', 'Ant-Man', 'Shuri', 'The Wasp', 'Nebula'],
    villains: ['Whiplash', 'Yellowjacket', 'Arnim Zola', 'Ghost', 'Mysterio'],
    neutral: ['The Collector']
  },
  hard: {
    heroes: ['Iron Man', 'Ant-Man', 'Shuri', 'The Wasp', 'Nebula', 'White Vision', 'Ironheart'],
    villains: ['Whiplash', 'Yellowjacket', 'Arnim Zola', 'Ghost', 'Mysterio', 'M.O.D.O.K.', 'Ultron'],
    neutral: ['The Grandmaster']
  }
};

// ENHANCED LEVEL
const enhancedLevel = {
  easy: {
    heroes: ['Captain America', 'Hulk', 'Spider-Man'],
    villains: ['Red Skull', 'Abomination', 'Green Goblin'],
    neutral: ['Venom']
  },
  medium: {
    heroes: ['Captain America', 'Hulk', 'Spider-Man', 'Wolverine', 'Groot'],
    villains: ['Red Skull', 'Abomination', 'Green Goblin', 'Juggernaut', 'Ronan the Accuser'],
    neutral: ['Deadpool']
  },
  hard: {
    heroes: ['Captain America', 'Hulk', 'Spider-Man', 'Wolverine', 'Groot', 'Scarlet Witch', 'Professor X'],
    villains: ['Red Skull', 'Abomination', 'Green Goblin', 'Juggernaut', 'Ronan the Accuser', 'Apocalypse', 'Magneto'],
    neutral: ['The Sentry']
  }
};

// GOD LEVEL
const godLevel = {
  easy: {
    heroes: ['Thor', 'Doctor Strange', 'Valkyrie'],
    villains: ['Malekith', 'Kaecilius', 'Hela'],
    neutral: ['Loki']
  },
  medium: {
    heroes: ['Thor', 'Doctor Strange', 'Valkyrie', 'Wong', 'Captain Marvel'],
    villains: ['Malekith', 'Kaecilius', 'Hela', 'Dormammu', 'The Supreme Intelligence'],
    neutral: ['The Ancient One']
  },
  hard: {
    heroes: ['Thor', 'Doctor Strange', 'Valkyrie', 'Wong', 'Captain Marvel', 'America Chavez', 'Mighty Thor'],
    villains: ['Malekith', 'Kaecilius', 'Hela', 'Dormammu', 'The Supreme Intelligence', 'Mephisto', 'Gorr the God Butcher'],
    neutral: ['Adam Warlock']
  }
};

// COSMIC LEVEL
const cosmicLevel = {
  easy: {
    heroes: ['Nova', 'Jean Grey (Phoenix Force)', 'Ajak'],
    villains: ['Ego', 'Thanos', 'Dark Phoenix'],
    neutral: ['Uatu the Watcher']
  },
  medium: {
    heroes: ['Nova', 'Jean Grey (Phoenix Force)', 'Ajak', 'Sersi', 'Mr. Fantastic'],
    villains: ['Ego', 'Thanos', 'Dark Phoenix', 'Arishem', 'Doctor Doom'],
    neutral: ['The Living Tribunal']
  },
  hard: {
    heroes: ['Nova', 'Jean Grey (Phoenix Force)', 'Ajak', 'Sersi', 'Mr. Fantastic', 'Silver Surfer', 'Eternity'],
    villains: ['Ego', 'Thanos', 'Dark Phoenix', 'Arishem', 'Doctor Doom', 'Galactus', 'Knull'],
    neutral: ['The One Above All']
  }
};

// Combine all threat levels
const allThreatLevels = {
  street: streetLevel,
  skilled: skilledLevel,
  tech: techLevel,
  enhanced: enhancedLevel,
  god: godLevel,
  cosmic: cosmicLevel
};

console.log('Threat Level Character Rosters Defined');
console.log('Ready to generate matchups for all 6 threat levels');
console.log('\nTotal configurations to generate:');
console.log('- 6 threat levels × 3 difficulties = 18 complete matchup sets');
console.log('- Easy: 7 characters each (21 total across Easy modes)');
console.log('- Medium: 11 characters each (33 total across Medium modes)');
console.log('- Hard: 15 characters each (45 total across Hard modes)');

module.exports = { allThreatLevels };
