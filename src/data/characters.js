/**
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

  "Captain America": {
    color: "#0A3161",
    baseBeats: ["Black Widow","Hulk","Loki","Red Skull"],
    baseAction: "Vibranium Shield",
    deltasPerSaga: {
      infinity: ["Spider-Man","Black Panther","Thanos","Venom","Mysterio"],
      infinityAction: "Worthy of Mjolnir",
      multiverse: ["Hawk-Eye","The Vision","Star-Lord","Galactus","Magneto","Doctor Octopus"],
      multiverseAction: "I Can Do This All Day"
    }
  },

  "Iron Man": {
    color: "#C8102E",
    baseBeats: ["Captain America","Black Widow","Ultron","Ronan the Accuser"],
    baseAction: "Repulsor Rays",
    deltasPerSaga: {
      infinity: ["Spider-Man","Dr. Strange","Hela","Mysterio","Venom"],
      infinityAction: "Hulkbuster Armor",
      multiverse: ["Ant-Man","Captain Marvel","Mr. Fantastic","Doctor Doom","Green Goblin","The Watcher"],
      multiverseAction: "Nanotech Arsenal"
    }
  },

  "Thor": {
    color: "#B0B0B0",
    baseBeats: ["Iron Man","Captain America","Loki","Killmonger"],
    baseAction: "Mjolnir Strike",
    deltasPerSaga: {
      infinity: ["Dr. Strange","Scarlet Witch","Thanos","Hela","Mysterio"],
      infinityAction: "Stormbreaker",
      multiverse: ["Hawk-Eye","Star-Lord","Ant-Man","Magneto","Doctor Octopus","Kingpin"],
      multiverseAction: "God of Thunder"
    }
  },

  "Hulk": {
    color: "#6DAA2C",
    baseBeats: ["Thor","Iron Man","Ultron","Ronan the Accuser"],
    baseAction: "Hulk Smash",
    deltasPerSaga: {
      infinity: ["Spider-Man","Black Panther","Hela","Venom","Mysterio"],
      infinityAction: "World Breaker",
      multiverse: ["The Vision","Captain Marvel","Mr. Fantastic","Galactus","Green Goblin","The Watcher"],
      multiverseAction: "Smart Hulk"
    }
  },

  "Black Widow": {
    color: "#1A1A1A",
    baseBeats: ["Hulk","Thor","Red Skull","Killmonger"],
    baseAction: "Widow's Bite",
    deltasPerSaga: {
      infinity: ["Spider-Man","Dr. Strange","Thanos","Mysterio","Venom"],
      infinityAction: "Red Room Master",
      multiverse: ["Hawk-Eye","Ant-Man","Mr. Fantastic","Doctor Doom","Magneto","Kingpin"],
      multiverseAction: "Ultimate Sacrifice"
    }
  },

  "Spider-Man": {
    color: "#DF1F2D",
    baseBeats: [],
    baseAction: "Web-Slinger",
    deltasPerSaga: {
      infinity: ["Dr. Strange","Scarlet Witch","Black Panther","Black Widow","Loki","Ultron","Thanos","Mysterio","Venom"],
      infinityAction: "Web-Slinger",
      multiverse: ["The Vision","Star-Lord","Captain Marvel","Galactus","Doctor Doom","Kingpin"],
      multiverseAction: "Iron Spider"
    }
  },

  "Dr. Strange": {
    color: "#1B4B8C",
    baseBeats: [],
    baseAction: "Mystic Arts",
    deltasPerSaga: {
      infinity: ["Black Panther","Scarlet Witch","Hulk","Black Widow","Red Skull","Ronan the Accuser","Killmonger","Hela","Venom"],
      infinityAction: "Mystic Arts",
      multiverse: ["Hawk-Eye","Star-Lord","Ant-Man","Galactus","Doctor Octopus","Green Goblin"],
      multiverseAction: "Master of the Mystic Arts"
    }
  },

  "Black Panther": {
    color: "#2C2C54",
    baseBeats: [],
    baseAction: "Vibranium Claws",
    deltasPerSaga: {
      infinity: ["Scarlet Witch","Spider-Man","Iron Man","Black Widow","Loki","Red Skull","Ronan the Accuser","Thanos","Hela"],
      infinityAction: "Vibranium Claws",
      multiverse: ["The Vision","Captain Marvel","Mr. Fantastic","Doctor Doom","Green Goblin","The Watcher"],
      multiverseAction: "Wakanda Forever"
    }
  },

  "Scarlet Witch": {
    color: "#DC143C",
    baseBeats: [],
    baseAction: "Hex Bolts",
    deltasPerSaga: {
      infinity: ["Captain America","Iron Man","Thor","Spider-Man","Loki","Red Skull","Ultron","Thanos","Hela"],
      infinityAction: "Hex Bolts",
      multiverse: ["Hawk-Eye","Star-Lord","Ant-Man","Magneto","Kingpin","The Watcher"],
      multiverseAction: "Chaos Magic"
    }
  },

  "Hawk-Eye": {
    color: "#4B0082",
    baseBeats: [],
    baseAction: "Perfect Aim",
    deltasPerSaga: {
      infinity: [],
      infinityAction: null,
      multiverse: ["The Vision","Star-Lord","Ant-Man","Captain Marvel","Mr. Fantastic","Spider-Man","Scarlet Witch","Loki","Red Skull","Ronan the Accuser","Thanos","Galactus","Doctor Doom","Green Goblin","Kingpin"],
      multiverseAction: "Perfect Aim"
    }
  },

  "The Vision": {
    color: "#E83F6F",
    baseBeats: [],
    baseAction: "Mind Stone Beam",
    deltasPerSaga: {
      infinity: [],
      infinityAction: null,
      multiverse: ["Star-Lord","Ant-Man","Captain Marvel","Mr. Fantastic","Black Widow","Spider-Man","Black Panther","Red Skull","Ultron","Killmonger","Hela","Venom","Magneto","Doctor Octopus","Kingpin"],
      multiverseAction: "Mind Stone Beam"
    }
  },

  "Star-Lord": {
    color: "#8B4513",
    baseBeats: [],
    baseAction: "Celestial Power",
    deltasPerSaga: {
      infinity: [],
      infinityAction: null,
      multiverse: ["Ant-Man","Captain Marvel","Mr. Fantastic","Hawk-Eye","Iron Man","Dr. Strange","Scarlet Witch","Loki","Ronan the Accuser","Killmonger","Thanos","Venom","Doctor Doom","Magneto","Green Goblin"],
      multiverseAction: "Celestial Power"
    }
  },

  "Ant-Man": {
    color: "#B8001F",
    baseBeats: [],
    baseAction: "Quantum Realm",
    deltasPerSaga: {
      infinity: [],
      infinityAction: null,
      multiverse: ["Captain Marvel","Mr. Fantastic","Hawk-Eye","The Vision","Captain America","Thor","Black Widow","Loki","Red Skull","Ultron","Thanos","Hela","Galactus","Magneto","Doctor Octopus"],
      multiverseAction: "Quantum Realm"
    }
  },

  "Captain Marvel": {
    color: "#FDB827",
    baseBeats: [],
    baseAction: "Binary Form",
    deltasPerSaga: {
      infinity: [],
      infinityAction: null,
      multiverse: ["Mr. Fantastic","Hawk-Eye","Star-Lord","The Vision","Iron Man","Hulk","Black Panther","Loki","Ronan the Accuser","Ultron","Killmonger","Thanos","Hela","Doctor Doom","Magneto"],
      multiverseAction: "Binary Form"
    }
  },

  "Mr. Fantastic": {
    color: "#4682B4",
    baseBeats: [],
    baseAction: "Genius Intellect",
    deltasPerSaga: {
      infinity: [],
      infinityAction: null,
      multiverse: ["Hawk-Eye","The Vision","Ant-Man","Star-Lord","Captain America","Black Widow","Dr. Strange","Loki","Red Skull","Killmonger","Thanos","Hela","Galactus","Doctor Doom","Doctor Octopus"],
      multiverseAction: "Genius Intellect"
    }
  },

  // ========================================
  // VILLAINS
  // ========================================

  "Loki": {
    color: "#2D5016",
    baseBeats: ["Red Skull","Killmonger","Iron Man","Black Widow"],
    baseAction: "God of Mischief",
    deltasPerSaga: {
      infinity: ["Hela","Mysterio","Spider-Man","Dr. Strange","Black Panther"],
      infinityAction: "Glorious Purpose",
      multiverse: ["Hawk-Eye","The Vision","Ant-Man","Galactus","Magneto","Green Goblin"],
      multiverseAction: "Variant Chaos"
    }
  },

  "Red Skull": {
    color: "#8B0000",
    baseBeats: ["Ronan the Accuser","Ultron","Thor","Hulk"],
    baseAction: "HYDRA Technology",
    deltasPerSaga: {
      infinity: ["Thanos","Venom","Spider-Man","Scarlet Witch","Black Panther"],
      infinityAction: "Cosmic Cube",
      multiverse: ["Star-Lord","Captain Marvel","Mr. Fantastic","Doctor Doom","Doctor Octopus","The Watcher"],
      multiverseAction: "Soul Stone Guardian"
    }
  },

  "Ronan the Accuser": {
    color: "#1C3A70",
    baseBeats: ["Loki","Ultron","Captain America","Black Widow"],
    baseAction: "Universal Weapon",
    deltasPerSaga: {
      infinity: ["Thanos","Venom","Spider-Man","Dr. Strange","Scarlet Witch"],
      infinityAction: "Power Stone",
      multiverse: ["Hawk-Eye","The Vision","Captain Marvel","Galactus","Kingpin","The Watcher"],
      multiverseAction: "Kree Accuser"
    }
  },

  "Ultron": {
    color: "#C0C0C0",
    baseBeats: ["Killmonger","Loki","Captain America","Thor"],
    baseAction: "Age of Ultron",
    deltasPerSaga: {
      infinity: ["Hela","Mysterio","Dr. Strange","Black Panther","Black Widow"],
      infinityAction: "Vibranium Evolution",
      multiverse: ["Hawk-Eye","Star-Lord","Ant-Man","Doctor Doom","Magneto","Doctor Octopus"],
      multiverseAction: "Infinity Ultron"
    }
  },

  "Killmonger": {
    color: "#FFD700",
    baseBeats: ["Red Skull","Ronan the Accuser","Iron Man","Hulk"],
    baseAction: "Golden Jaguar",
    deltasPerSaga: {
      infinity: ["Thanos","Venom","Spider-Man","Scarlet Witch","Black Panther"],
      infinityAction: "Wakandan Revolution",
      multiverse: ["The Vision","Star-Lord","Mr. Fantastic","Galactus","Green Goblin","Kingpin"],
      multiverseAction: "Royal Challenger"
    }
  },

  "Thanos": {
    color: "#6A1B9A",
    baseBeats: [],
    baseAction: "Infinity Gauntlet",
    deltasPerSaga: {
      infinity: ["Iron Man","Thor","Hulk","Dr. Strange","Black Panther","Loki","Red Skull","Hela","Mysterio"],
      infinityAction: "Infinity Gauntlet",
      multiverse: ["Captain America","Iron Man","Black Widow","Hawk-Eye","Magneto","Doctor Octopus"],
      multiverseAction: "The Snap"
    }
  },

  "Hela": {
    color: "#00FF00",
    baseBeats: [],
    baseAction: "Goddess of Death",
    deltasPerSaga: {
      infinity: ["Captain America","Iron Man","Black Widow","Dr. Strange","Spider-Man","Ronan the Accuser","Killmonger","Mysterio","Venom"],
      infinityAction: "Goddess of Death",
      multiverse: ["Thor","Hulk","Spider-Man","Star-Lord","Ant-Man","Green Goblin"],
      multiverseAction: "Necroswords"
    }
  },

  "Mysterio": {
    color: "#32CD32",
    baseBeats: [],
    baseAction: "Holographic Illusion",
    deltasPerSaga: {
      infinity: ["Captain America","Thor","Hulk","Spider-Man","Black Panther","Loki","Ronan the Accuser","Hela","Venom"],
      infinityAction: "Holographic Illusion",
      multiverse: ["Black Panther","Scarlet Witch","The Vision","Captain Marvel","Doctor Doom","Kingpin"],
      multiverseAction: "Master of Illusions"
    }
  },

  "Venom": {
    color: "#0D0D0D",
    baseBeats: [],
    baseAction: "Symbiote Strike",
    deltasPerSaga: {
      infinity: ["Thor","Black Widow","Spider-Man","Black Panther","Scarlet Witch","Red Skull","Ultron","Killmonger","Mysterio"],
      infinityAction: "Symbiote Strike",
      multiverse: ["Captain America","Scarlet Witch","Hawk-Eye","Mr. Fantastic","Galactus","The Watcher"],
      multiverseAction: "Lethal Protector"
    }
  },

  "Galactus": {
    color: "#FF1493",
    baseBeats: [],
    baseAction: "Devourer of Worlds",
    deltasPerSaga: {
      infinity: [],
      infinityAction: null,
      multiverse: ["Captain America","Iron Man","Thor","Hulk","Black Widow","Spider-Man","Dr. Strange","Scarlet Witch","Doctor Doom","Magneto","Doctor Octopus","Green Goblin","Kingpin","The Watcher","Loki"],
      multiverseAction: "Devourer of Worlds"
    }
  },

  "Doctor Doom": {
    color: "#2F4F4F",
    baseBeats: [],
    baseAction: "Latverian Sorcery",
    deltasPerSaga: {
      infinity: [],
      infinityAction: null,
      multiverse: ["Captain America","Thor","Hulk","Spider-Man","Dr. Strange","Black Panther","Scarlet Witch","Star-Lord","Loki","Ronan the Accuser","Thanos","Hela","Magneto","Green Goblin","The Watcher"],
      multiverseAction: "Latverian Sorcery"
    }
  },

  "Magneto": {
    color: "#8A2BE2",
    baseBeats: [],
    baseAction: "Master of Magnetism",
    deltasPerSaga: {
      infinity: [],
      infinityAction: null,
      multiverse: ["Iron Man","Black Widow","Dr. Strange","Black Panther","Hawk-Eye","Star-Lord","Mr. Fantastic","Captain Marvel","Red Skull","Killmonger","Venom","Galactus","Doctor Octopus","Kingpin","The Watcher"],
      multiverseAction: "Master of Magnetism"
    }
  },

  "Doctor Octopus": {
    color: "#2E8B57",
    baseBeats: [],
    baseAction: "Superior Intellect",
    deltasPerSaga: {
      infinity: [],
      infinityAction: null,
      multiverse: ["Iron Man","Black Widow","Spider-Man","Black Panther","The Vision","Ant-Man","Captain Marvel","Mr. Fantastic","Loki","Ultron","Mysterio","Galactus","Doctor Doom","Green Goblin","The Watcher"],
      multiverseAction: "Superior Intellect"
    }
  },

  "Green Goblin": {
    color: "#556B2F",
    baseBeats: [],
    baseAction: "Goblin Formula",
    deltasPerSaga: {
      infinity: [],
      infinityAction: null,
      multiverse: ["Black Widow","Dr. Strange","Scarlet Witch","Star-Lord","Ant-Man","Captain Marvel","Mr. Fantastic","The Vision","Ronan the Accuser","Thanos","Venom","Galactus","Magneto","Kingpin","The Watcher"],
      multiverseAction: "Goblin Formula"
    }
  },

  "Kingpin": {
    color: "#FFFFFF",
    baseBeats: [],
    baseAction: "Crime Lord",
    deltasPerSaga: {
      infinity: [],
      infinityAction: null,
      multiverse: ["Captain America","Black Widow","Black Panther","Hawk-Eye","The Vision","Captain Marvel","Mr. Fantastic","Spider-Man","Red Skull","Killmonger","Hela","Galactus","Doctor Doom","Magneto","Doctor Octopus"],
      multiverseAction: "Crime Lord"
    }
  },

  "The Watcher": {
    color: "#F5F5DC",
    baseBeats: [],
    baseAction: "Cosmic Observer",
    deltasPerSaga: {
      infinity: [],
      infinityAction: null,
      multiverse: ["Thor","Hulk","Spider-Man","Dr. Strange","Scarlet Witch","Ant-Man","Iron Man","Black Panther","Loki","Ultron","Thanos","Mysterio","Galactus","Magneto","Doctor Octopus"],
      multiverseAction: "Cosmic Observer"
    }
  }

};
