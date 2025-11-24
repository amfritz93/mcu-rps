/**
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

  "Captain America": {
    color: "#0A3161",
    baseBeats: ["Black Panther","Spider-Man","Loki","Mr. Fantastic","Black Widow"],
    baseAction: "Vibranium Shield",
    deltasPerSaga: {
      infinity: ["Hawk-Eye","Star-Lord","Ant-Man","Red Skull","Ronan the Accuser"],
      infinityAction: "Worthy of Mjolnir",
      multiverse: ["Killmonger","Mysterio","Doctor Octopus","Green Goblin","Kingpin"],
      multiverseAction: "I Can Do This All Day"
    }
  },

  "Iron Man": {
    color: "#C8102E",
    baseBeats: ["Magneto","Venom","Ultron","Captain America","Black Panther"],
    baseAction: "Repulsor Rays",
    deltasPerSaga: {
      infinity: ["Spider-Man","Loki","Mr. Fantastic","Black Widow","Hawk-Eye"],
      infinityAction: "Hulkbuster Armor",
      multiverse: ["Star-Lord","Ant-Man","Red Skull","Ronan the Accuser","Killmonger"],
      multiverseAction: "Nanotech Arsenal"
    }
  },

  "Thor": {
    color: "#B0B0B0",
    baseBeats: ["Hela","Captain Marvel","The Vision","Dr. Strange","Hulk"],
    baseAction: "Mjolnir Strike",
    deltasPerSaga: {
      infinity: ["Iron Man","Magneto","Venom","Ultron","Captain America"],
      infinityAction: "Stormbreaker",
      multiverse: ["Black Panther","Spider-Man","Loki","Mr. Fantastic","Black Widow"],
      multiverseAction: "God of Thunder"
    }
  },

  "Hulk": {
    color: "#6DAA2C",
    baseBeats: ["Iron Man","Magneto","Venom","Ultron","Captain America"],
    baseAction: "Hulk Smash",
    deltasPerSaga: {
      infinity: ["Black Panther","Spider-Man","Loki","Mr. Fantastic","Black Widow"],
      infinityAction: "World Breaker",
      multiverse: ["Hawk-Eye","Star-Lord","Ant-Man","Red Skull","Ronan the Accuser"],
      multiverseAction: "Smart Hulk"
    }
  },

  "Black Widow": {
    color: "#1A1A1A",
    baseBeats: ["The Watcher","Galactus","Scarlet Witch","Doctor Doom","Thanos"],
    baseAction: "Widow's Bite",
    deltasPerSaga: {
      infinity: ["Hawk-Eye","Star-Lord","Ant-Man","Red Skull","Ronan the Accuser"],
      infinityAction: "Red Room Master",
      multiverse: ["Killmonger","Mysterio","Doctor Octopus","Green Goblin","Kingpin"],
      multiverseAction: "Ultimate Sacrifice"
    }
  },

  "Spider-Man": {
    color: "#DF1F2D",
    baseBeats: ["The Watcher","Galactus","Loki","Mr. Fantastic","Black Widow"],
    baseAction: "Web-Slinger",
    deltasPerSaga: {
      infinity: ["Hawk-Eye","Star-Lord","Ant-Man","Red Skull","Ronan the Accuser"],
      infinityAction: "Web-Slinger",
      multiverse: ["Killmonger","Mysterio","Doctor Octopus","Green Goblin","Kingpin"],
      multiverseAction: "Iron Spider"
    }
  },

  "Dr. Strange": {
    color: "#1B4B8C",
    baseBeats: ["Hulk","Iron Man","Magneto","Venom","Ultron"],
    baseAction: "Mystic Arts",
    deltasPerSaga: {
      infinity: ["Captain America","Black Panther","Spider-Man","Loki","Mr. Fantastic"],
      infinityAction: "Mystic Arts",
      multiverse: ["Black Widow","Hawk-Eye","Star-Lord","Ant-Man","Red Skull"],
      multiverseAction: "Master of the Mystic Arts"
    }
  },

  "Black Panther": {
    color: "#2C2C54",
    baseBeats: ["The Watcher","Spider-Man","Loki","Mr. Fantastic","Black Widow"],
    baseAction: "Vibranium Claws",
    deltasPerSaga: {
      infinity: ["Hawk-Eye","Star-Lord","Ant-Man","Red Skull","Ronan the Accuser"],
      infinityAction: "Vibranium Claws",
      multiverse: ["Killmonger","Mysterio","Doctor Octopus","Green Goblin","Kingpin"],
      multiverseAction: "Wakanda Forever"
    }
  },

  "Scarlet Witch": {
    color: "#DC143C",
    baseBeats: ["Doctor Doom","Thanos","Thor","Hela","Captain Marvel"],
    baseAction: "Hex Bolts",
    deltasPerSaga: {
      infinity: ["The Vision","Dr. Strange","Hulk","Iron Man","Magneto"],
      infinityAction: "Hex Bolts",
      multiverse: ["Venom","Ultron","Captain America","Black Panther","Spider-Man"],
      multiverseAction: "Chaos Magic"
    }
  },

  "Hawk-Eye": {
    color: "#4B0082",
    baseBeats: ["The Watcher","Galactus","Scarlet Witch","Doctor Doom","Thanos"],
    baseAction: "Perfect Aim",
    deltasPerSaga: {
      infinity: ["Thor","Star-Lord","Ant-Man","Red Skull","Ronan the Accuser"],
      infinityAction: null,
      multiverse: ["Killmonger","Mysterio","Doctor Octopus","Green Goblin","Kingpin"],
      multiverseAction: "Perfect Aim"
    }
  },

  "The Vision": {
    color: "#E83F6F",
    baseBeats: ["Dr. Strange","Hulk","Iron Man","Magneto","Venom"],
    baseAction: "Mind Stone Beam",
    deltasPerSaga: {
      infinity: ["Ultron","Captain America","Black Panther","Spider-Man","Loki"],
      infinityAction: null,
      multiverse: ["Mr. Fantastic","Black Widow","Hawk-Eye","Star-Lord","Ant-Man"],
      multiverseAction: "Mind Stone Beam"
    }
  },

  "Star-Lord": {
    color: "#8B4513",
    baseBeats: ["The Watcher","Galactus","Scarlet Witch","Doctor Doom","Thanos"],
    baseAction: "Celestial Power",
    deltasPerSaga: {
      infinity: ["Thor","Hela","Ant-Man","Red Skull","Ronan the Accuser"],
      infinityAction: null,
      multiverse: ["Killmonger","Mysterio","Doctor Octopus","Green Goblin","Kingpin"],
      multiverseAction: "Celestial Power"
    }
  },

  "Ant-Man": {
    color: "#B8001F",
    baseBeats: ["The Watcher","Galactus","Scarlet Witch","Doctor Doom","Thanos"],
    baseAction: "Quantum Realm",
    deltasPerSaga: {
      infinity: ["Thor","Hela","Captain Marvel","Red Skull","Ronan the Accuser"],
      infinityAction: null,
      multiverse: ["Killmonger","Mysterio","Doctor Octopus","Green Goblin","Kingpin"],
      multiverseAction: "Quantum Realm"
    }
  },

  "Captain Marvel": {
    color: "#FDB827",
    baseBeats: ["The Vision","Dr. Strange","Hulk","Iron Man","Magneto"],
    baseAction: "Binary Form",
    deltasPerSaga: {
      infinity: ["Venom","Ultron","Captain America","Black Panther","Spider-Man"],
      infinityAction: null,
      multiverse: ["Loki","Mr. Fantastic","Black Widow","Hawk-Eye","Star-Lord"],
      multiverseAction: "Binary Form"
    }
  },

  "Mr. Fantastic": {
    color: "#4682B4",
    baseBeats: ["The Watcher","Galactus","Scarlet Witch","Doctor Doom","Black Widow"],
    baseAction: "Genius Intellect",
    deltasPerSaga: {
      infinity: ["Hawk-Eye","Star-Lord","Ant-Man","Red Skull","Ronan the Accuser"],
      infinityAction: null,
      multiverse: ["Killmonger","Mysterio","Doctor Octopus","Green Goblin","Kingpin"],
      multiverseAction: "Genius Intellect"
    }
  },

  // ========================================
  // VILLAINS
  // ========================================

  "Loki": {
    color: "#2D5016",
    baseBeats: ["The Watcher","Galactus","Scarlet Witch","Mr. Fantastic","Black Widow"],
    baseAction: "God of Mischief",
    deltasPerSaga: {
      infinity: ["Hawk-Eye","Star-Lord","Ant-Man","Red Skull","Ronan the Accuser"],
      infinityAction: "Glorious Purpose",
      multiverse: ["Killmonger","Mysterio","Doctor Octopus","Green Goblin","Kingpin"],
      multiverseAction: "Variant Chaos"
    }
  },

  "Red Skull": {
    color: "#8B0000",
    baseBeats: ["The Watcher","Galactus","Scarlet Witch","Doctor Doom","Thanos"],
    baseAction: "HYDRA Technology",
    deltasPerSaga: {
      infinity: ["Thor","Hela","Captain Marvel","The Vision","Ronan the Accuser"],
      infinityAction: "Cosmic Cube",
      multiverse: ["Killmonger","Mysterio","Doctor Octopus","Green Goblin","Kingpin"],
      multiverseAction: "Soul Stone Guardian"
    }
  },

  "Ronan the Accuser": {
    color: "#1C3A70",
    baseBeats: ["The Watcher","Galactus","Scarlet Witch","Doctor Doom","Thanos"],
    baseAction: "Universal Weapon",
    deltasPerSaga: {
      infinity: ["Thor","Hela","Captain Marvel","The Vision","Dr. Strange"],
      infinityAction: "Power Stone",
      multiverse: ["Killmonger","Mysterio","Doctor Octopus","Green Goblin","Kingpin"],
      multiverseAction: "Kree Accuser"
    }
  },

  "Ultron": {
    color: "#C0C0C0",
    baseBeats: ["Captain America","Black Panther","Spider-Man","Loki","Mr. Fantastic"],
    baseAction: "Age of Ultron",
    deltasPerSaga: {
      infinity: ["Black Widow","Hawk-Eye","Star-Lord","Ant-Man","Red Skull"],
      infinityAction: "Vibranium Evolution",
      multiverse: ["Ronan the Accuser","Killmonger","Mysterio","Doctor Octopus","Green Goblin"],
      multiverseAction: "Infinity Ultron"
    }
  },

  "Killmonger": {
    color: "#FFD700",
    baseBeats: ["The Watcher","Galactus","Scarlet Witch","Doctor Doom","Thanos"],
    baseAction: "Golden Jaguar",
    deltasPerSaga: {
      infinity: ["Thor","Hela","Captain Marvel","The Vision","Dr. Strange"],
      infinityAction: "Wakandan Revolution",
      multiverse: ["Hulk","Mysterio","Doctor Octopus","Green Goblin","Kingpin"],
      multiverseAction: "Royal Challenger"
    }
  },

  "Thanos": {
    color: "#6A1B9A",
    baseBeats: ["Thor","Hela","Captain Marvel","The Vision","Dr. Strange"],
    baseAction: "Infinity Gauntlet",
    deltasPerSaga: {
      infinity: ["Hulk","Iron Man","Magneto","Venom","Ultron"],
      infinityAction: "Infinity Gauntlet",
      multiverse: ["Captain America","Black Panther","Spider-Man","Loki","Mr. Fantastic"],
      multiverseAction: "The Snap"
    }
  },

  "Hela": {
    color: "#00FF00",
    baseBeats: ["Captain Marvel","The Vision","Dr. Strange","Hulk","Iron Man"],
    baseAction: "Goddess of Death",
    deltasPerSaga: {
      infinity: ["Magneto","Venom","Ultron","Captain America","Black Panther"],
      infinityAction: "Goddess of Death",
      multiverse: ["Spider-Man","Loki","Mr. Fantastic","Black Widow","Hawk-Eye"],
      multiverseAction: "Necroswords"
    }
  },

  "Mysterio": {
    color: "#32CD32",
    baseBeats: ["The Watcher","Galactus","Scarlet Witch","Doctor Doom","Thanos"],
    baseAction: "Holographic Illusion",
    deltasPerSaga: {
      infinity: ["Thor","Hela","Captain Marvel","The Vision","Dr. Strange"],
      infinityAction: "Holographic Illusion",
      multiverse: ["Hulk","Iron Man","Doctor Octopus","Green Goblin","Kingpin"],
      multiverseAction: "Master of Illusions"
    }
  },

  "Venom": {
    color: "#0D0D0D",
    baseBeats: ["Ultron","Captain America","Black Panther","Spider-Man","Loki"],
    baseAction: "Symbiote Strike",
    deltasPerSaga: {
      infinity: ["Mr. Fantastic","Black Widow","Hawk-Eye","Star-Lord","Ant-Man"],
      infinityAction: "Symbiote Strike",
      multiverse: ["Red Skull","Ronan the Accuser","Killmonger","Mysterio","Doctor Octopus"],
      multiverseAction: "Lethal Protector"
    }
  },

  "Galactus": {
    color: "#FF1493",
    baseBeats: ["Scarlet Witch","Doctor Doom","Thanos","Thor","Hela"],
    baseAction: "Devourer of Worlds",
    deltasPerSaga: {
      infinity: ["Captain Marvel","The Vision","Dr. Strange","Hulk","Iron Man"],
      infinityAction: null,
      multiverse: ["Magneto","Venom","Ultron","Captain America","Black Panther"],
      multiverseAction: "Devourer of Worlds"
    }
  },

  "Doctor Doom": {
    color: "#2F4F4F",
    baseBeats: ["Thanos","Thor","Hela","Captain Marvel","The Vision"],
    baseAction: "Latverian Sorcery",
    deltasPerSaga: {
      infinity: ["Dr. Strange","Hulk","Iron Man","Magneto","Venom"],
      infinityAction: null,
      multiverse: ["Ultron","Captain America","Black Panther","Spider-Man","Loki"],
      multiverseAction: "Latverian Sorcery"
    }
  },

  "Magneto": {
    color: "#8A2BE2",
    baseBeats: ["Venom","Ultron","Captain America","Black Panther","Spider-Man"],
    baseAction: "Master of Magnetism",
    deltasPerSaga: {
      infinity: ["Loki","Mr. Fantastic","Black Widow","Hawk-Eye","Star-Lord"],
      infinityAction: null,
      multiverse: ["Ant-Man","Red Skull","Ronan the Accuser","Killmonger","Mysterio"],
      multiverseAction: "Master of Magnetism"
    }
  },

  "Doctor Octopus": {
    color: "#2E8B57",
    baseBeats: ["The Watcher","Galactus","Scarlet Witch","Doctor Doom","Thanos"],
    baseAction: "Superior Intellect",
    deltasPerSaga: {
      infinity: ["Thor","Hela","Captain Marvel","The Vision","Dr. Strange"],
      infinityAction: null,
      multiverse: ["Hulk","Iron Man","Magneto","Green Goblin","Kingpin"],
      multiverseAction: "Superior Intellect"
    }
  },

  "Green Goblin": {
    color: "#556B2F",
    baseBeats: ["The Watcher","Galactus","Scarlet Witch","Doctor Doom","Thanos"],
    baseAction: "Goblin Formula",
    deltasPerSaga: {
      infinity: ["Thor","Hela","Captain Marvel","The Vision","Dr. Strange"],
      infinityAction: null,
      multiverse: ["Hulk","Iron Man","Magneto","Venom","Kingpin"],
      multiverseAction: "Goblin Formula"
    }
  },

  "Kingpin": {
    color: "#FFFFFF",
    baseBeats: ["The Watcher","Galactus","Scarlet Witch","Doctor Doom","Thanos"],
    baseAction: "Crime Lord",
    deltasPerSaga: {
      infinity: ["Thor","Hela","Captain Marvel","The Vision","Dr. Strange"],
      infinityAction: null,
      multiverse: ["Hulk","Iron Man","Magneto","Venom","Ultron"],
      multiverseAction: "Crime Lord"
    }
  },

  "The Watcher": {
    color: "#F5F5DC",
    baseBeats: ["Galactus","Scarlet Witch","Doctor Doom","Thanos","Thor"],
    baseAction: "Cosmic Observer",
    deltasPerSaga: {
      infinity: ["Hela","Captain Marvel","The Vision","Dr. Strange","Hulk"],
      infinityAction: null,
      multiverse: ["Iron Man","Magneto","Venom","Ultron","Captain America"],
      multiverseAction: "Cosmic Observer"
    }
  }

};
