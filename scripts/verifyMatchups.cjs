const { characterRegistry, threatLevelRosters } = require('../src/data/characters.js');

// Check all threat levels and difficulties
const threatLevels = ['street', 'skilled', 'tech', 'enhanced', 'god', 'cosmic'];
const difficulties = ['easy', 'medium', 'hard'];

let totalErrors = 0;

threatLevels.forEach(threatLevel => {
  difficulties.forEach(difficulty => {
    const roster = threatLevelRosters[threatLevel][difficulty];
    const allChars = [...roster.heroes, ...roster.villains, ...roster.neutral];
    const key = `${threatLevel}-${difficulty}`;

    console.log(`\n${'='.repeat(60)}`);
    console.log(`${threatLevel.toUpperCase()} - ${difficulty.toUpperCase()} (${allChars.length} characters)`);
    console.log(`${'='.repeat(60)}`);

    let hasErrors = false;

    allChars.forEach(charName => {
      const char = characterRegistry[charName];

      if (!char) {
        console.log(`❌ ERROR: Character "${charName}" not found in registry`);
        totalErrors++;
        hasErrors = true;
        return;
      }

      const beats = char.beats[key] || [];

      // Check for invalid references
      const invalidRefs = beats.filter(opponentName => !allChars.includes(opponentName));

      if (invalidRefs.length > 0) {
        console.log(`❌ ${charName}:`);
        console.log(`   Beats: ${beats.join(', ')}`);
        console.log(`   Invalid references: ${invalidRefs.join(', ')}`);
        totalErrors++;
        hasErrors = true;
      }

      // Check for correct number of beats
      const expectedBeats = Math.floor((allChars.length - 1) / 2);
      if (beats.length !== expectedBeats) {
        console.log(`❌ ${charName}: Expected ${expectedBeats} beats, but has ${beats.length}`);
        totalErrors++;
        hasErrors = true;
      }
    });

    if (!hasErrors) {
      console.log(`✅ All matchups valid!`);
    }
  });
});

console.log(`\n${'='.repeat(60)}`);
console.log(`SUMMARY: ${totalErrors > 0 ? '❌' : '✅'} Total errors: ${totalErrors}`);
console.log(`${'='.repeat(60)}`);
