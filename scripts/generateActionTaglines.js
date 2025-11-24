/**
 * Generate Action Taglines for MCU Matchups
 *
 * Creates thematic action descriptions for how each character defeats their opponents
 * Based on MCU canon powers, abilities, and memorable moments
 */

import fs from 'fs';

const beatsList = JSON.parse(fs.readFileSync('./scripts/beats-list.json', 'utf-8'));

// Character signature abilities and powers
const characterSignatures = {
  'The Watcher': ['Multiversal Knowledge', 'Cosmic Awareness', 'Reality Observation', 'Infinite Wisdom', 'Universal Authority', 'Omniscient Power', 'Uatu\'s Intervention', 'Breaking the Oath', 'Fourth Wall Break', 'Absolute Power', 'Timeless Existence', 'What If...?', 'Watcher\'s Oath', 'Cosmic Observer', 'Reality Manipulation'],

  'Galactus': ['Devourer of Worlds', 'Power Cosmic', 'Planet Eater', 'Universal Threat', 'Cosmic Hunger', 'Celestial Being', 'Infinite Power', 'World Consumption', 'Cosmic Energy', 'Galactic Domination', 'Ultimate Power', 'Herald Summon', 'Reality Warping', 'Energy Absorption', 'Cosmic Force'],

  'Scarlet Witch': ['Chaos Magic', 'Reality Warping', 'Hex Bolts', 'Darkhold Power', 'Probability Manipulation', 'Mind Manipulation', 'Scarlet Fury', 'Chaos Energy', 'Magical Mastery', 'Nexus Being', 'Reality Alteration', 'Psionic Blast', 'Magical Shield', 'Chaos Control', 'Hex Wave'],

  'Doctor Doom': ['Latverian Sorcery', 'Doom Armor', 'Mystical Barriers', 'Doombots', 'Genius and Magic', 'Victor Von Doom', 'Scientific Sorcery', 'Time Platform', 'Diplomatic Immunity', 'Latverian Technology', 'Sorcery and Science', 'Mystical Armor', 'Doom\'s Genius', 'Royal Authority', 'Latverian Power'],

  'Thanos': ['Infinity Gauntlet', 'Power Stone Punch', 'Mad Titan', 'Reality Stone', 'Time Stone', 'Snap', 'Titan\'s Strength', 'Cosmic Power', 'Space Stone', 'Eternal Might', 'Universal Balance', 'Inevitable Doom', 'Titan Strength', 'Soul Stone', 'Mind Stone'],

  'Thor': ['Lightning Strike', 'Mjolnir Throw', 'Stormbreaker Axe', 'God of Thunder', 'Bifrost Summon', 'Asgardian Strength', 'Thunderous Force', 'Lightning Bolt', 'King of Asgard', 'Odinforce Power', 'Hammer Strike', 'Thunder God', 'Storm Summoning', 'Godly Power', 'Rainbow Bridge'],

  'Hela': ['Goddess of Death', 'Necrosword Throw', 'Asgardian Power', 'Death\'s Touch', 'Eternal Flame', 'Death Magic', 'Necro Blades', 'Death Goddess', 'Asgard\'s Heir', 'Infinite Weapons', 'Dark Magic', 'Death Strike', 'Hela\'s Wrath', 'Necromancy', 'Goddess Fury'],

  'Captain Marvel': ['Photon Blast', 'Binary Form', 'Cosmic Energy', 'Energy Absorption', 'Space Stone Power', 'Supersonic Flight', 'Kree Warrior', 'Captain\'s Power', 'Photon Energy', 'Star Power', 'Energy Projection', 'Binary Mode', 'Cosmic Flight', 'Energy Shield', 'Carol\'s Fury'],

  'The Vision': ['Mind Stone Beam', 'Density Manipulation', 'Phasing Attack', 'Infinite Processing', 'Vibranium Body', 'Advanced AI', 'Synthetic Superiority', 'Phase Through', 'Vision Beam', 'Android Power', 'Molecular Control', 'Computational Speed', 'Synthezoid Strength', 'Neural Network', 'Perfect Logic'],

  'Dr. Strange': ['Mystic Arts', 'Time Stone', 'Mirror Dimension', 'Sorcery Supreme', 'Astral Projection', 'Portals and Spells', 'Reality Manipulation', 'Magical Mastery', 'Crimson Bands', 'Dimensional Magic', 'Spell Casting', 'Vishanti Power', 'Time Loop', 'Eldritch Magic', 'Sorcerer Supreme'],

  'Hulk': ['Thunderclap', 'Brute Strength', 'Gamma Rage', 'Crushing Power', 'Unstoppable Force', 'Smash Attack', 'Gamma Radiation', 'World Breaker', 'Savage Hulk', 'Raw Power', 'Green Fury', 'Incredible Strength', 'Hulk Smash', 'Rage Mode', 'Banner\'s Anger'],

  'Iron Man': ['Repulsor Technology', 'Hulkbuster Armor', 'Arc Reactor Beam', 'Stark Tech Superiority', 'Sonic Cannons', 'Electromagnetic Pulse', 'Micro-Missile Barrage', 'Nanotech Arsenal', 'Unibeam Blast', 'Stark Innovation', 'Armor Superiority', 'J.A.R.V.I.S.', 'Mark 50 Suit', 'Repulsor Rays', 'Tony\'s Genius'],

  'Magneto': ['Magnetic Mastery', 'Electromagnetic Control', 'Metal Manipulation', 'Master of Magnetism', 'Helmet Defense', 'Mutant Supremacy', 'Magnetic Field', 'Metal Control', 'Erik\'s Power', 'Brotherhood', 'Magnetic Shield', 'Metal Storm', 'Electromagnetic Force', 'Magnetic Fury', 'Omega Mutant'],

  'Venom': ['Symbiote Takeover', 'Savage Bite', 'Alien Symbiosis', 'Lethal Protector', 'Venomous Tendrils', 'Web Strike', 'Carnage Form', 'Symbiote Strike', 'We Are Venom', 'Alien Bond', 'Symbiote Rage', 'Klyntar Power', 'Venom Blast', 'Symbiotic Strength', 'Eddie\'s Partner'],

  'Ultron': ['Artificial Intelligence', 'Vibranium Body', 'Drone Army', 'Upgrade Protocol', 'Machine Supremacy', 'Sentient AI', 'Electromagnetic Field', 'Hivemind Network', 'Evolution Directive', 'Robot Army', 'Energy Beam', 'Self-Repair', 'Ultron Prime', 'Digital Mind', 'No Strings'],

  'Captain America': ['Vibranium Shield', 'Tactical Strategy', 'Super Soldier Serum', 'Worthy of Mjolnir', 'Shield Ricochet', 'Unbreakable Will', 'Experience and Leadership', 'Hand-to-Hand Combat', 'Tactical Superiority', 'Cap\'s Shield', 'I Can Do This All Day', 'Star-Spangled Plan', 'Patriotic Power', 'Avenger\'s Leader', 'Never Give Up'],

  'Black Panther': ['Vibranium Claws', 'Wakandan Technology', 'Kinetic Energy Blast', 'Panther Habit', 'Vibranium Suit', 'Royal Combat Training', 'Heart-Shaped Herb', 'King\'s Power', 'Wakanda Forever', 'Panther Strike', 'Royal Warrior', 'Advanced Tech', 'T\'Challa\'s Skill', 'Ancestral Power', 'Black Panther Fury'],

  'Spider-Man': ['Spider-Sense', 'Web Strike', 'Agile Reflexes', 'Youth and Speed', 'Web Cocoon', 'Wall-Crawler Advantage', 'Iron Spider Suit', 'Spidey Sense', 'Web-Slinging', 'Friendly Neighborhood', 'Quick Reflexes', 'Sticky Situation', 'Peter\'s Wit', 'Web Shooter', 'Spider Agility'],

  'Loki': ['Illusion Magic', 'Trickster\'s Deception', 'Scepter Strike', 'God of Mischief', 'Asgardian Sorcery', 'Mind Control', 'Frost Giant Strength', 'Chitauri Army', 'Dagger Throw', 'Tesseract Power', 'Glorious Purpose', 'Mischief Magic', 'Shapeshifting', 'Loki\'s Tricks', 'God of Lies'],

  'Mr. Fantastic': ['Elastic Absorption', 'Genius Intellect', 'Stretch Attack', 'Scientific Superiority', 'Molecular Manipulation', 'Unstable Molecules', 'Reed Richards Strategy', 'Elasticity', 'Brilliant Mind', 'Fantastic Four', 'Stretch Power', 'Scientific Method', 'Reed\'s Brain', 'Rubber Body', 'Genius Plan'],

  'Black Widow': ['Black Widow\'s Bite', 'Stealth and Agility', 'Espionage Training', 'Tactical Precision', 'Red Room Technique', 'Assassin\'s Strike', 'Superior Tactics', 'Widow\'s Sting', 'Covert Operations', 'Spy Mastery', 'Natasha\'s Skill', 'Assassin Training', 'Stealth Attack', 'Widow Shock', 'Red Room'],

  'Hawk-Eye': ['Explosive Arrow', 'Precision Shot', 'Trick Arrow', 'Perfect Aim', 'EMP Arrow', 'Pym Particle Arrow', 'Quantum Arrow', 'Never Miss', 'Hawkeye\'s Aim', 'Ronin Strike', 'Tactical Arrow', 'Clint\'s Precision', 'Arrow Barrage', 'Sharpshooter', 'Bull\'s-Eye'],

  'Star-Lord': ['Element Guns', 'Jet Boot Maneuver', 'Quad Blasters', 'Legendary Outlaw', 'Celestial Power', 'Awesome Mix Vol. 3', 'Hadron Enforcer', 'Star-Lord Dance', 'Guardians Leader', 'Blaster Fire', 'Peter Quill', 'Ravager Tactics', 'Outlaw Hero', 'Space Pirate', 'Celestial Gene'],

  'Ant-Man': ['Shrinking Surprise', 'Subatomic Strike', 'Giant-Man Stomp', 'Quantum Realm', 'Pym Particle Punch', 'Microscopic Evasion', 'Size Manipulation', 'Grow and Shrink', 'Scott\'s Surprise', 'Tiny Hero', 'Quantum Power', 'Ant Army', 'Size Change', 'Pym Tech', 'Microverse'],

  'Red Skull': ['Tesseract Weapon', 'HYDRA Technology', 'Super Soldier Formula', 'Cosmic Cube', 'Strategic Genius', 'Nazi Science', 'Death\'s Head Insignia', 'Red Skull\'s Army', 'HYDRA Leader', 'Master Strategist', 'Schmidt\'s Plan', 'HYDRA Power', 'Evil Genius', 'Skull Face', 'Ruthless Leader'],

  'Ronan the Accuser': ['Universal Weapon', 'Kree Strength', 'Accusation Hammer', 'Fanatical Zealot', 'Power Stone', 'Kree Warlord', 'Accuser\'s Judgment', 'Cosmic Rod', 'Alien Technology', 'Kree Empire', 'Hammer Strike', 'Kree Warrior', 'Accuser Power', 'Ronan\'s Fury', 'Kree Justice'],

  'Killmonger': ['Vibranium Suit', 'Wakandan Warrior', 'Black Panther Powers', 'Golden Jaguar', 'Ritual Combat', 'Royal Challenger', 'Vibranium Claws', 'Dora Milaje Training', 'N\'Jadaka\'s Revenge', 'Wakanda\'s Shadow', 'Golden Suit', 'Challenger\'s Might', 'Erik\'s Fury', 'Royal Combat', 'Panther Rivalry'],

  'Mysterio': ['Holographic Illusion', 'Drone Technology', 'Mind Games', 'Master of Deception', 'Illusionist', 'False Reality', 'Stark Drones', 'Smoke and Mirrors', 'Beck\'s Tricks', 'Illusion Master', 'Fake Hero', 'Drone Attack', 'Mind Tricks', 'CGI Magic', 'Mysterio\'s Lies'],

  'Doctor Octopus': ['Mechanical Arms', 'Superior Mind', 'Tentacle Strike', 'Nuclear Fusion', 'Sinister Six', 'Mad Scientist', 'Adamantium Tentacles', 'Doc Ock Power', 'Otto\'s Genius', 'Four Arms', 'Mechanical Mastery', 'Tentacle Grip', 'Superior Spider-Man', 'Scientific Madness', 'Metal Tentacles'],

  'Green Goblin': ['Goblin Glider', 'Pumpkin Bomb', 'Insane Genius', 'Goblin Formula', 'Razor Bats', 'Green Goblin Serum', 'Osborn Industries', 'Maniacal Laugh', 'Norman\'s Madness', 'Glider Attack', 'Goblin Bombs', 'Split Personality', 'Osborn Power', 'Goblin Cackling', 'Insanity Serum'],

  'Kingpin': ['Crime Lord', 'Brutal Strength', 'Street Control', 'Wilson Fisk Power', 'Underground Empire', 'Corporate Influence', 'Raw Power', 'Fisk\'s Fury', 'Criminal Mastermind', 'Business Empire', 'Kingpin Strength', 'Ruthless Boss', 'Street King', 'Iron Fist', 'Criminal Genius']
};

// Generate action tagline for a matchup
function generateActionTagline(winner, loser, index) {
  const signatures = characterSignatures[winner];
  if (!signatures || !Array.isArray(signatures)) {
    console.warn(`Warning: No signatures found for ${winner}`);
    return `Defeats ${loser}`;
  }

  // Use index to cycle through available signatures
  const signatureIndex = index % signatures.length;
  return signatures[signatureIndex];
}

// Generate all action taglines
const actionTaglines = {};

Object.entries(beatsList).forEach(([winner, opponents]) => {
  actionTaglines[winner] = {};

  opponents.forEach((loser, index) => {
    const tagline = generateActionTagline(winner, loser, index);
    actionTaglines[winner][loser] = tagline;
  });
});

// Save the action taglines
fs.writeFileSync(
  './scripts/action-taglines.json',
  JSON.stringify(actionTaglines, null, 2)
);

console.log('✓ Action taglines generated successfully!');
console.log('✓ Saved to scripts/action-taglines.json');
console.log(`\nGenerated ${Object.keys(actionTaglines).length} characters with action taglines`);

// Sample output
console.log('\nSample taglines:');
console.log('='.repeat(60));
['The Watcher', 'Scarlet Witch', 'Spider-Man', 'Kingpin'].forEach(char => {
  console.log(`\n${char}:`);
  const beats = Object.entries(actionTaglines[char]).slice(0, 3);
  beats.forEach(([opponent, action]) => {
    console.log(`  vs ${opponent}: ${action}`);
  });
});
console.log('\n' + '='.repeat(60));
