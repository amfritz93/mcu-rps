/**
 * Final Balanced RPS Matchup Generator
 *
 * Hero foundation chains (narrative basis from user):
 * - Street: Luke Cage > Kate Bishop > Mockingbird
 * - Skilled: Hawkeye > Falcon > Black Widow
 * - Tech: Ant-Man > Iron Man > Shuri
 * - Enhanced: Hulk > Spider-Man > Captain America
 * - God: Valkyrie > Thor > Doctor Strange
 * - Cosmic: Ajak > Jean Grey (Phoenix Force) > Nova
 *
 * Algorithm: Circular tournament where each character beats the next (n-1)/2
 * characters in the circular ordering, creating perfect game balance.
 */

const fs = require('fs');
const threatLevelRosters = require('./rosters.cjs');

// Character actions and colors
const characterActions = {
  "Kate Bishop": "Trick Arrows", "Mockingbird": "Battle Staves", "Luke Cage": "Unbreakable Skin",
  "The Swordsman": "Blade Pierce", "Madame Gao": "Chi Strike", "Grant Ward": "Combat Training",
  "Echo": "Mimic Strike", "Jessica Jones": "Super Strength", "Phil Coulson": "Tactical Genius",
  "Daredevil": "Radar Sense", "White Tiger": "Chi Power", "Purple Man": "Mind Control",
  "Cottonmouth": "Sonic Scream", "Kingpin": "Brute Force", "Bullseye": "Perfect Aim",
  "Elektra": "Ninja Strikes", "Black Widow": "Spy Mastery", "Hawkeye": "Perfect Shot",
  "Falcon": "Aerial Strike", "Crossbones": "Brute Strength", "Ulysses Klaue": "Sonic Blast",
  "Baron Zemo": "Strategic Mind", "Nick Fury": "Spy Network", "Gamora": "Blade Dance",
  "Okoye": "Warrior Pride", "Corvus Glaive": "Weapon Master", "Killmonger": "Combat Fury",
  "Power Broker": "Power Surge", "Shang-Chi": "Kung Fu", "Rocket Raccoon": "Heavy Arsenal",
  "Proxima Midnight": "Spear Strike", "The Mandarin": "Ten Rings", "Taskmaster": "Combat Mimic",
  "Iron Man": "Repulsor Rays", "Ant-Man": "Size Shift", "Shuri": "Vibranium Tech",
  "Whiplash": "Arc Whips", "Yellowjacket": "Shrink Attack", "Arnim Zola": "Digital Mind",
  "Hank Pym": "Pym Particles", "The Wasp": "Wasp Sting", "Nebula": "Cyber Strike",
  "Ghost": "Phase Shift", "Mysterio": "Illusion Tech", "The Collector": "Reality Gems",
  "White Vision": "Synthezoid", "Ironheart": "Armor Tech", "The Grandmaster": "Contest Master",
  "M.O.D.O.K.": "Mental Power", "Ultron": "Robot Army", "Captain America": "Shield Throw",
  "Hulk": "Gamma Smash", "Spider-Man": "Web Swing", "Red Skull": "Hydra Strike",
  "Abomination": "Gamma Fury", "Green Goblin": "Pumpkin Bombs", "Venom": "Symbiote Wrap",
  "Wolverine": "Adamantium Claws", "Groot": "Wood Growth", "Juggernaut": "Unstoppable Force",
  "Ronan the Accuser": "Universal Weapon", "Deadpool": "Chaos Strike", "Scarlet Witch": "Chaos Magic",
  "Professor X": "Mind Control", "Apocalypse": "Mutation Power", "Magneto": "Metal Master",
  "The Sentry": "Golden Power", "Thor": "Lightning Strike", "Doctor Strange": "Time Stone",
  "Valkyrie": "Dragonfang Blade", "Malekith": "Dark Energy", "Kaecilius": "Dark Magic",
  "Hela": "Death Touch", "Loki": "Trickster Magic", "Wong": "Portal Magic",
  "Captain Marvel": "Binary Power", "Dormammu": "Dark Dimension", "The Supreme Intelligence": "Kree Mind",
  "The Ancient One": "Master Magic", "America Chavez": "Star Portals", "Mighty Thor": "Mjolnir Power",
  "Mephisto": "Hell Fire", "Gorr the God Butcher": "God Slayer", "Adam Warlock": "Soul Stone",
  "Nova": "Nova Force", "Jean Grey (Phoenix Force)": "Phoenix Fire", "Ajak": "Celestial Power",
  "Ego": "Living Planet", "Thanos": "Infinity Stones", "Dark Phoenix": "Dark Phoenix",
  "Uatu the Watcher": "Cosmic Awareness", "Sersi": "Matter Control", "Mr. Fantastic": "Elastic Mind",
  "Arishem": "Celestial Judge", "Doctor Doom": "Mystic Tech", "The Living Tribunal": "Universal Law",
  "Silver Surfer": "Power Cosmic", "Eternity": "Time Control", "Galactus": "Planet Eater",
  "Knull": "Void Power", "The One Above All": "Omnipotence"
};

const characterColors = {
  "Kate Bishop": "#663399", "Mockingbird": "#4169E1", "Luke Cage": "#FFD700",
  "The Swordsman": "#8B4513", "Madame Gao": "#2F4F2F", "Grant Ward": "#2F4F4F",
  "Echo": "#8B4513", "Jessica Jones": "#800080", "Phil Coulson": "#0A3161",
  "Daredevil": "#8B0000", "White Tiger": "#FFFFFF", "Purple Man": "#663399",
  "Cottonmouth": "#2F4F2F", "Kingpin": "#1A1A1A", "Bullseye": "#000000",
  "Elektra": "#8B0000", "Black Widow": "#000000", "Hawkeye": "#663399",
  "Falcon": "#8B0000", "Crossbones": "#2F4F4F", "Ulysses Klaue": "#FF4500",
  "Baron Zemo": "#800080", "Nick Fury": "#000000", "Gamora": "#228B22",
  "Okoye": "#8B0000", "Corvus Glaive": "#000080", "Killmonger": "#FFD700",
  "Power Broker": "#8B0000", "Shang-Chi": "#FFD700", "Rocket Raccoon": "#8B4513",
  "Proxima Midnight": "#000080", "The Mandarin": "#228B22", "Taskmaster": "#FF8C00",
  "Iron Man": "#C8102E", "Ant-Man": "#DC143C", "Shuri": "#663399",
  "Whiplash": "#FFD700", "Yellowjacket": "#FFD700", "Arnim Zola": "#228B22",
  "Hank Pym": "#DC143C", "The Wasp": "#FFD700", "Nebula": "#4169E1",
  "Ghost": "#FFFFFF", "Mysterio": "#228B22", "The Collector": "#FFD700",
  "White Vision": "#FFFFFF", "Ironheart": "#8B0000", "The Grandmaster": "#4169E1",
  "M.O.D.O.K.": "#FFD700", "Ultron": "#C0C0C0", "Captain America": "#0A3161",
  "Hulk": "#228B22", "Spider-Man": "#DF1F2D", "Red Skull": "#8B0000",
  "Abomination": "#6B8E23", "Green Goblin": "#228B22", "Venom": "#0D0D0D",
  "Wolverine": "#FFD700", "Groot": "#8B4513", "Juggernaut": "#8B4513",
  "Ronan the Accuser": "#000080", "Deadpool": "#DC143C", "Scarlet Witch": "#DC143C",
  "Professor X": "#4B0082", "Apocalypse": "#4B0082", "Magneto": "#8A2BE2",
  "The Sentry": "#FFD700", "Thor": "#B0B0B0", "Doctor Strange": "#1B4B8C",
  "Valkyrie": "#FFFFFF", "Malekith": "#2F4F4F", "Kaecilius": "#228B22",
  "Hela": "#228B22", "Loki": "#2D5016", "Wong": "#FF8C00",
  "Captain Marvel": "#DC143C", "Dormammu": "#663399", "The Supreme Intelligence": "#4169E1",
  "The Ancient One": "#F5DEB3", "America Chavez": "#DF1F2D", "Mighty Thor": "#B0B0B0",
  "Mephisto": "#DC143C", "Gorr the God Butcher": "#2F4F4F", "Adam Warlock": "#FFD700",
  "Nova": "#FFD700", "Jean Grey (Phoenix Force)": "#DC143C", "Ajak": "#4169E1",
  "Ego": "#4169E1", "Thanos": "#6A1B9A", "Dark Phoenix": "#DC143C",
  "Uatu the Watcher": "#F5F5DC", "Sersi": "#228B22", "Mr. Fantastic": "#4682B4",
  "Arishem": "#8B0000", "Doctor Doom": "#2F4F4F", "The Living Tribunal": "#FFD700",
  "Silver Surfer": "#C0C0C0", "Eternity": "#663399", "Galactus": "#663399",
  "Knull": "#000000", "The One Above All": "#FFFFFF"
};

// Hero foundations
const heroFoundations = {
  street: ["Luke Cage", "Kate Bishop", "Mockingbird"],
  skilled: ["Hawkeye", "Falcon", "Black Widow"],
  tech: ["Ant-Man", "Iron Man", "Shuri"],
  enhanced: ["Hulk", "Spider-Man", "Captain America"],
  god: ["Valkyrie", "Thor", "Doctor Strange"],
  cosmic: ["Ajak", "Jean Grey (Phoenix Force)", "Nova"]
};

/**
 * Build complete ordering with hero foundation as base
 */
function buildOrdering(threatLevel, difficulty) {
  const roster = threatLevelRosters[threatLevel][difficulty];
  const allChars = [...roster.heroes, ...roster.villains, ...roster.neutral];
  const foundation = heroFoundations[threatLevel];

  // Start with foundation
  const ordered = [...foundation];
  const remaining = allChars.filter(c => !foundation.includes(c));

  // Interleave remaining evenly
  remaining.forEach((char, i) => {
    const pos = Math.floor((ordered.length * (i + 1)) / (remaining.length + 1));
    ordered.splice(pos, 0, char);
  });

  return ordered;
}

/**
 * Generate circular tournament matchups
 */
function generateMatchups(ordering) {
  const n = ordering.length;
  const matchups = {};
  const beatsCount = Math.floor((n - 1) / 2);

  ordering.forEach((char, i) => {
    matchups[char] = [];
    for (let j = 1; j <= beatsCount; j++) {
      matchups[char].push(ordering[(i + j) % n]);
    }
  });

  return matchups;
}

// Generate complete registry
const registry = {};
const threatLevels = ['street', 'skilled', 'tech', 'enhanced', 'god', 'cosmic'];
const difficulties = ['easy', 'medium', 'hard'];

console.log('Generating balanced RPS matchups...\n');

threatLevels.forEach(threatLevel => {
  difficulties.forEach(difficulty => {
    const key = `${threatLevel}-${difficulty}`;
    const ordering = buildOrdering(threatLevel, difficulty);
    const matchups = generateMatchups(ordering);

    console.log(`${key}: ${ordering.length} chars, each beats ${Math.floor((ordering.length - 1) / 2)}`);

    ordering.forEach(charName => {
      if (!registry[charName]) {
        registry[charName] = {
          color: characterColors[charName] || "#808080",
          action: characterActions[charName] || "Attack",
          firstAppearance: key,
          beats: {}
        };
      }
      registry[charName].beats[key] = matchups[charName];
    });
  });
});

console.log(`\n✅ Generated ${Object.keys(registry).length} characters with balanced matchups`);

// Write output
const output = `/**
 * Character Registry - Balanced Extended RPS
 *
 * Total: ${Object.keys(registry).length} unique MCU characters across 18 matchup sets
 * Each character beats exactly (n-1)/2 opponents for perfect game balance
 */

export const characterRegistry = ${JSON.stringify(registry, null, 2)};

export const threatLevelRosters = ${JSON.stringify(threatLevelRosters, null, 2)};
`;

fs.writeFileSync('./src/data/characters.js', output, 'utf8');
console.log('Wrote ./src/data/characters.js');
