/**
 * Convert Threat Level Matchups to Character Registry Format
 *
 * Reads allThreatLevelMatchups.js and converts it to the character registry format
 * used by the game's data/characters.js file.
 */

const fs = require('fs');
const path = require('path');

// Read the threat level matchups file
const matchupsPath = path.join(__dirname, '../../allThreatLevelMatchups.js');
const matchupsContent = fs.readFileSync(matchupsPath, 'utf8');

// Extract the data object (remove the const declaration and module.exports)
const dataMatch = matchupsContent.match(/const allThreatLevelMatchups = ({[\s\S]*?});[\s\S]*module\.exports/);
if (!dataMatch) {
  console.error('Could not parse allThreatLevelMatchups.js');
  process.exit(1);
}

// Use eval to parse the object (safe in this context as it's our own file)
const allThreatLevelMatchups = eval('(' + dataMatch[1] + ')');

// MCU-accurate character colors
const characterColors = {
  // Street Level Heroes
  "Kate Bishop": "#663399",
  "Mockingbird": "#4169E1",
  "Luke Cage": "#FFD700",
  "Jessica Jones": "#800080",
  "Phil Coulson": "#0A3161",
  "Daredevil": "#8B0000",
  "White Tiger": "#FFFFFF",
  "The Punisher": "#000000",

  // Street Level Villains
  "The Swordsman": "#8B4513",
  "Madame Gao": "#2F4F2F",
  "Grant Ward": "#2F4F4F",
  "Purple Man": "#663399",
  "Cottonmouth": "#2F4F2F",
  "Kingpin": "#1A1A1A",
  "Bullseye": "#000000",

  // Street Level Neutral
  "Echo": "#8B4513",
  "Elektra": "#8B0000",

  // Skilled Level Heroes
  "Black Widow": "#000000",
  "Hawkeye": "#663399",
  "Falcon": "#8B0000",
  "Gamora": "#228B22",
  "Okoye": "#8B0000",
  "Shang-Chi": "#FFD700",
  "Rocket Raccoon": "#8B4513",

  // Skilled Level Villains
  "Crossbones": "#2F4F4F",
  "Ulysses Klaue": "#FF4500",
  "Baron Zemo": "#800080",
  "Corvus Glaive": "#000080",
  "Killmonger": "#FFD700",
  "Proxima Midnight": "#000080",
  "The Mandarin": "#228B22",

  // Skilled Level Neutral
  "Nick Fury": "#000000",
  "Power Broker": "#8B0000",
  "Taskmaster": "#FF8C00",

  // Tech Level Heroes
  "Iron Man": "#C8102E",
  "Ant-Man": "#DC143C",
  "Shuri": "#663399",
  "The Wasp": "#FFD700",
  "Nebula": "#4169E1",
  "White Vision": "#FFFFFF",
  "Ironheart": "#8B0000",

  // Tech Level Villains
  "Whiplash": "#FFD700",
  "Yellowjacket": "#FFD700",
  "Arnim Zola": "#228B22",
  "Ghost": "#FFFFFF",
  "Mysterio": "#228B22",
  "M.O.D.O.K.": "#FFD700",
  "Ultron": "#C0C0C0",

  // Tech Level Neutral
  "Hank Pym": "#DC143C",
  "The Collector": "#FFD700",
  "The Grandmaster": "#4169E1",

  // Enhanced Level Heroes
  "Captain America": "#0A3161",
  "Hulk": "#228B22",
  "Spider-Man": "#DF1F2D",
  "Wolverine": "#FFD700",
  "Groot": "#8B4513",
  "Scarlet Witch": "#DC143C",
  "Professor X": "#4B0082",

  // Enhanced Level Villains
  "Red Skull": "#8B0000",
  "Abomination": "#6B8E23",
  "Green Goblin": "#228B22",
  "Juggernaut": "#8B4513",
  "Ronan the Accuser": "#000080",
  "Apocalypse": "#4B0082",
  "Magneto": "#8A2BE2",

  // Enhanced Level Neutral
  "Venom": "#0D0D0D",
  "Deadpool": "#DC143C",
  "The Sentry": "#FFD700",

  // God Level Heroes
  "Thor": "#B0B0B0",
  "Doctor Strange": "#1B4B8C",
  "Valkyrie": "#FFFFFF",
  "Wong": "#FF8C00",
  "Captain Marvel": "#DC143C",
  "America Chavez": "#DF1F2D",
  "Mighty Thor": "#B0B0B0",

  // God Level Villains
  "Malekith": "#2F4F4F",
  "Kaecilius": "#228B22",
  "Hela": "#228B22",
  "Dormammu": "#663399",
  "The Supreme Intelligence": "#4169E1",
  "Mephisto": "#DC143C",
  "Gorr the God Butcher": "#2F4F4F",

  // God Level Neutral
  "Loki": "#2D5016",
  "The Ancient One": "#F5DEB3",
  "Adam Warlock": "#FFD700",

  // Cosmic Level Heroes
  "Nova": "#FFD700",
  "Jean Grey (Phoenix Force)": "#DC143C",
  "Ajak": "#4169E1",
  "Sersi": "#228B22",
  "Mr. Fantastic": "#4682B4",
  "Silver Surfer": "#C0C0C0",
  "Eternity": "#663399",

  // Cosmic Level Villains
  "Ego": "#4169E1",
  "Thanos": "#6A1B9A",
  "Dark Phoenix": "#DC143C",
  "Arishem": "#8B0000",
  "Doctor Doom": "#2F4F4F",
  "Galactus": "#663399",
  "Knull": "#000000",

  // Cosmic Level Neutral
  "Uatu the Watcher": "#F5F5DC",
  "The Living Tribunal": "#FFD700",
  "The One Above All": "#FFFFFF"
};

// Character alignment (heroes/villains/neutral)
const heroCharacters = [
  "Kate Bishop", "Mockingbird", "Luke Cage", "Jessica Jones", "Phil Coulson", "Daredevil", "White Tiger",
  "Black Widow", "Hawkeye", "Falcon", "Gamora", "Okoye", "Shang-Chi", "Rocket Raccoon",
  "Iron Man", "Ant-Man", "Shuri", "The Wasp", "Nebula", "White Vision", "Ironheart",
  "Captain America", "Hulk", "Spider-Man", "Wolverine", "Groot", "Scarlet Witch", "Professor X",
  "Thor", "Doctor Strange", "Valkyrie", "Wong", "Captain Marvel", "America Chavez", "Mighty Thor",
  "Nova", "Jean Grey (Phoenix Force)", "Ajak", "Sersi", "Mr. Fantastic", "Silver Surfer", "Eternity"
];

const villainCharacters = [
  "The Swordsman", "Madame Gao", "Grant Ward", "Purple Man", "Cottonmouth", "Kingpin", "Bullseye",
  "Crossbones", "Ulysses Klaue", "Baron Zemo", "Corvus Glaive", "Killmonger", "Proxima Midnight", "The Mandarin",
  "Whiplash", "Yellowjacket", "Arnim Zola", "Ghost", "Mysterio", "M.O.D.O.K.", "Ultron",
  "Red Skull", "Abomination", "Green Goblin", "Juggernaut", "Ronan the Accuser", "Apocalypse", "Magneto",
  "Malekith", "Kaecilius", "Hela", "Dormammu", "The Supreme Intelligence", "Mephisto", "Gorr the God Butcher",
  "Ego", "Thanos", "Dark Phoenix", "Arishem", "Doctor Doom", "Galactus", "Knull"
];

// Build character registry
const characterRegistry = {};
const threatLevelRosters = {
  street: { easy: { heroes: [], villains: [], neutral: [] }, medium: { heroes: [], villains: [], neutral: [] }, hard: { heroes: [], villains: [], neutral: [] } },
  skilled: { easy: { heroes: [], villains: [], neutral: [] }, medium: { heroes: [], villains: [], neutral: [] }, hard: { heroes: [], villains: [], neutral: [] } },
  tech: { easy: { heroes: [], villains: [], neutral: [] }, medium: { heroes: [], villains: [], neutral: [] }, hard: { heroes: [], villains: [], neutral: [] } },
  enhanced: { easy: { heroes: [], villains: [], neutral: [] }, medium: { heroes: [], villains: [], neutral: [] }, hard: { heroes: [], villains: [], neutral: [] } },
  god: { easy: { heroes: [], villains: [], neutral: [] }, medium: { heroes: [], villains: [], neutral: [] }, hard: { heroes: [], villains: [], neutral: [] } },
  cosmic: { easy: { heroes: [], villains: [], neutral: [] }, medium: { heroes: [], villains: [], neutral: [] }, hard: { heroes: [], villains: [], neutral: [] } }
};

// Process each threat level
Object.keys(allThreatLevelMatchups).forEach(threatLevel => {
  const levels = allThreatLevelMatchups[threatLevel];

  Object.keys(levels).forEach(difficulty => {
    const characters = levels[difficulty];

    Object.keys(characters).forEach(charName => {
      const charData = characters[charName];

      // Initialize character if not exists
      if (!characterRegistry[charName]) {
        characterRegistry[charName] = {
          color: characterColors[charName] || "#808080",
          action: Object.values(charData.descriptions)[0] || "Special Attack",
          firstAppearance: `${threatLevel}-${difficulty}`,
          beats: {}
        };
      }

      // Add beats for this difficulty
      characterRegistry[charName].beats[`${threatLevel}-${difficulty}`] = charData.beats;

      // Add to roster
      const alignment = heroCharacters.includes(charName) ? 'heroes' :
                       villainCharacters.includes(charName) ? 'villains' : 'neutral';
      if (!threatLevelRosters[threatLevel][difficulty][alignment].includes(charName)) {
        threatLevelRosters[threatLevel][difficulty][alignment].push(charName);
      }
    });
  });
});

// Generate the output file
let output = `/**
 * Character Registry - Threat Level System
 *
 * Six threat level categories with three difficulty levels each:
 * - Street, Skilled, Tech, Enhanced, God, Cosmic
 * - Easy (7 chars), Medium (11 chars), Hard (15 chars)
 *
 * Total: 90+ unique MCU characters across 18 complete matchup sets
 */

export const characterRegistry = {\n`;

// Write each character
Object.keys(characterRegistry).sort().forEach(charName => {
  const char = characterRegistry[charName];
  output += `  "${charName}": {\n`;
  output += `    color: "${char.color}",\n`;
  output += `    action: "${char.action}",\n`;
  output += `    firstAppearance: "${char.firstAppearance}",\n`;
  output += `    beats: {\n`;

  Object.keys(char.beats).sort().forEach(key => {
    output += `      "${key}": ${JSON.stringify(char.beats[key])},\n`;
  });

  output += `    }\n`;
  output += `  },\n\n`;
});

output += `};\n\n`;

// Write threat level rosters
output += `/**
 * Threat Level Rosters by Difficulty
 */
export const threatLevelRosters = ${JSON.stringify(threatLevelRosters, null, 2)};\n`;

// Write to file
const outputPath = path.join(__dirname, '../src/data/characters.js');
fs.writeFileSync(outputPath, output);

console.log('✅ Character registry converted successfully!');
console.log(`   Total characters: ${Object.keys(characterRegistry).length}`);
console.log(`   Output: ${outputPath}`);
