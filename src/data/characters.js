/**
 * Character Registry
 *
 * Central registry for all MCU characters with:
 * - MCU-accurate colors (based on iconic suit/appearance)
 * - Base beats relationships (Avengers Saga)
 * - Incremental beats additions per saga (Infinity, Multiverse)
 * - Action taglines describing how each character defeats opponents
 */

export const characterRegistry = {
  // ========================================
  // HEROES
  // ========================================

  "Captain America": {
    color: "#0A3161", // Deep blue from his suit
    baseBeats: ["Hulk", "Iron Man"],
    baseActions: {
      "Hulk": "Tactical Strategy",
      "Iron Man": "Vibranium Shield"
    },
    deltasPerSaga: {
      infinity: ["Thor", "Black Widow"],
      infinityActions: {
        "Thor": "Worthy of Mjolnir",
        "Black Widow": "Super Soldier Serum"
      },
      multiverse: ["Spider-Man", "Scarlet Witch", "Hawk-Eye", "Star-Lord", "Mr. Fantastic"],
      multiverseActions: {
        "Spider-Man": "Experience and Leadership",
        "Scarlet Witch": "Unbreakable Will",
        "Hawk-Eye": "Shield Ricochet",
        "Star-Lord": "Hand-to-Hand Combat",
        "Mr. Fantastic": "Tactical Superiority"
      }
    }
  },

  "Iron Man": {
    color: "#C8102E", // Iron Man red
    baseBeats: ["Black Widow", "Hulk"],
    baseActions: {
      "Black Widow": "Repulsor Technology",
      "Hulk": "Hulkbuster Armor"
    },
    deltasPerSaga: {
      infinity: ["Thor", "Spider-Man"],
      infinityActions: {
        "Thor": "Arc Reactor Beam",
        "Spider-Man": "Stark Tech Superiority"
      },
      multiverse: ["Black Panther", "The Vision", "Ant-Man", "Captain Marvel"],
      multiverseActions: {
        "Black Panther": "Sonic Cannons",
        "The Vision": "Electromagnetic Pulse",
        "Ant-Man": "Micro-Missile Barrage",
        "Captain Marvel": "Nanotech Arsenal"
      }
    }
  },

  "Thor": {
    color: "#B0B0B0", // Silver from armor/helmet
    baseBeats: ["Iron Man", "Captain America"],
    baseActions: {
      "Iron Man": "Lightning Strike",
      "Captain America": "Mjolnir Throw"
    },
    deltasPerSaga: {
      infinity: ["Hulk", "Black Widow", "Spider-Man", "Dr. Strange"],
      infinityActions: {
        "Hulk": "God of Thunder",
        "Black Widow": "Asgardian Strength",
        "Spider-Man": "Bifrost Summon",
        "Dr. Strange": "Stormbreaker Axe"
      },
      multiverse: ["Scarlet Witch", "Hawk-Eye", "Star-Lord", "Mr. Fantastic"],
      multiverseActions: {
        "Scarlet Witch": "Thunderous Force",
        "Hawk-Eye": "Lightning Bolt",
        "Star-Lord": "King of Asgard",
        "Mr. Fantastic": "Odinforce Power"
      }
    }
  },

  "Hulk": {
    color: "#6DAA2C", // Hulk green
    baseBeats: ["Thor", "Black Widow"],
    baseActions: {
      "Thor": "Thunderclap",
      "Black Widow": "Brute Strength"
    },
    deltasPerSaga: {
      infinity: ["Black Widow", "Spider-Man", "Dr. Strange", "Black Panther"],
      infinityActions: {
        "Black Widow": "Gamma Rage",
        "Spider-Man": "Crushing Power",
        "Dr. Strange": "Unstoppable Force",
        "Black Panther": "Smash Attack"
      },
      multiverse: ["The Vision", "Ant-Man", "Captain Marvel"],
      multiverseActions: {
        "The Vision": "Gamma Radiation",
        "Ant-Man": "World Breaker",
        "Captain Marvel": "Savage Hulk"
      }
    }
  },

  "Black Widow": {
    color: "#1A1A1A", // Black from suit
    baseBeats: ["Captain America", "Thor"],
    baseActions: {
      "Captain America": "Black Widow's Bite",
      "Thor": "Stealth and Agility"
    },
    deltasPerSaga: {
      infinity: ["Spider-Man", "Dr. Strange", "Black Panther", "Scarlet Witch"],
      infinityActions: {
        "Spider-Man": "Espionage Training",
        "Dr. Strange": "Tactical Precision",
        "Black Panther": "Red Room Technique",
        "Scarlet Witch": "Assassin's Strike"
      },
      multiverse: ["Hawk-Eye", "Star-Lord", "Mr. Fantastic"],
      multiverseActions: {
        "Hawk-Eye": "Superior Tactics",
        "Star-Lord": "Widow's Sting",
        "Mr. Fantastic": "Covert Operations"
      }
    }
  },

  "Spider-Man": {
    color: "#DF1F2D", // Spider-Man red
    baseBeats: ["Dr. Strange", "Black Panther", "Scarlet Witch", "Captain America"],
    baseActions: {
      "Dr. Strange": "Spider-Sense",
      "Black Panther": "Web Strike",
      "Scarlet Witch": "Agile Reflexes",
      "Captain America": "Youth and Speed"
    },
    deltasPerSaga: {
      multiverse: ["The Vision", "Ant-Man", "Captain Marvel"],
      multiverseActions: {
        "The Vision": "Web Cocoon",
        "Ant-Man": "Wall-Crawler Advantage",
        "Captain Marvel": "Iron Spider Suit"
      }
    }
  },

  "Dr. Strange": {
    color: "#1B4B8C", // Blue from robes
    baseBeats: ["Black Panther", "Scarlet Witch", "Captain America", "Iron Man"],
    baseActions: {
      "Black Panther": "Mystic Arts",
      "Scarlet Witch": "Time Stone",
      "Captain America": "Mirror Dimension",
      "Iron Man": "Sorcery Supreme"
    },
    deltasPerSaga: {
      multiverse: ["Hawk-Eye", "Star-Lord", "Mr. Fantastic"],
      multiverseActions: {
        "Hawk-Eye": "Astral Projection",
        "Star-Lord": "Portals and Spells",
        "Mr. Fantastic": "Reality Manipulation"
      }
    }
  },

  "Black Panther": {
    color: "#2C2C54", // Dark purple/blue from suit
    baseBeats: ["Scarlet Witch", "Captain America", "Iron Man", "Thor"],
    baseActions: {
      "Scarlet Witch": "Vibranium Claws",
      "Captain America": "Wakandan Technology",
      "Iron Man": "Kinetic Energy Blast",
      "Thor": "Panther Habit"
    },
    deltasPerSaga: {
      multiverse: ["The Vision", "Ant-Man", "Captain Marvel"],
      multiverseActions: {
        "The Vision": "Vibranium Suit",
        "Ant-Man": "Royal Combat Training",
        "Captain Marvel": "Heart-Shaped Herb"
      }
    }
  },

  "Scarlet Witch": {
    color: "#DC143C", // Crimson red
    baseBeats: ["Captain America", "Iron Man", "Thor", "Hulk"],
    baseActions: {
      "Captain America": "Chaos Magic",
      "Iron Man": "Hex Bolts",
      "Thor": "Reality Warping",
      "Hulk": "Mind Manipulation"
    },
    deltasPerSaga: {
      multiverse: ["The Vision", "Star-Lord", "Mr. Fantastic"],
      multiverseActions: {
        "The Vision": "Darkhold Power",
        "Star-Lord": "Scarlet Witch Fury",
        "Mr. Fantastic": "Probability Manipulation"
      }
    }
  },

  "Hawk-Eye": {
    color: "#4B0082", // Deep purple from suit
    baseBeats: ["Iron Man", "Hulk", "Spider-Man", "Black Panther", "Scarlet Witch"],
    baseActions: {
      "Iron Man": "Explosive Arrow",
      "Hulk": "Precision Shot",
      "Spider-Man": "Trick Arrow",
      "Black Panther": "Perfect Aim",
      "Scarlet Witch": "EMP Arrow"
    },
    deltasPerSaga: {
      multiverse: ["Ant-Man", "Captain Marvel"],
      multiverseActions: {
        "Ant-Man": "Pym Particle Arrow",
        "Captain Marvel": "Quantum Arrow"
      }
    }
  },

  "The Vision": {
    color: "#E83F6F", // Pink/red from synthezoid body
    baseBeats: ["Captain America", "Thor", "Black Widow", "Dr. Strange", "Hawk-Eye"],
    baseActions: {
      "Captain America": "Mind Stone Beam",
      "Thor": "Density Manipulation",
      "Black Widow": "Synthetic Superiority",
      "Dr. Strange": "Phasing Attack",
      "Hawk-Eye": "Infinite Processing"
    },
    deltasPerSaga: {
      multiverse: ["Star-Lord", "Mr. Fantastic"],
      multiverseActions: {
        "Star-Lord": "Vibranium Body",
        "Mr. Fantastic": "Advanced AI"
      }
    }
  },

  "Star-Lord": {
    color: "#8B4513", // Brown from jacket
    baseBeats: ["Iron Man", "Hulk", "Spider-Man", "Black Panther", "The Vision"],
    baseActions: {
      "Iron Man": "Element Guns",
      "Hulk": "Jet Boot Maneuver",
      "Spider-Man": "Quad Blasters",
      "Black Panther": "Legendary Outlaw",
      "The Vision": "Celestial Power"
    },
    deltasPerSaga: {
      multiverse: ["Ant-Man", "Captain Marvel"],
      multiverseActions: {
        "Ant-Man": "Awesome Mix Vol. 3",
        "Captain Marvel": "Hadron Enforcer"
      }
    }
  },

  "Ant-Man": {
    color: "#B8001F", // Dark red from suit
    baseBeats: ["Captain America", "Thor", "Black Widow", "Dr. Strange", "Scarlet Witch"],
    baseActions: {
      "Captain America": "Shrinking Surprise",
      "Thor": "Subatomic Strike",
      "Black Widow": "Giant-Man Stomp",
      "Dr. Strange": "Quantum Realm",
      "Scarlet Witch": "Pym Particle Punch"
    },
    deltasPerSaga: {
      multiverse: ["Hawk-Eye", "Mr. Fantastic"],
      multiverseActions: {
        "Hawk-Eye": "Microscopic Evasion",
        "Mr. Fantastic": "Size Manipulation"
      }
    }
  },

  "Captain Marvel": {
    color: "#FDB827", // Gold from suit
    baseBeats: ["Captain America", "Thor", "Black Widow", "Dr. Strange", "Scarlet Witch"],
    baseActions: {
      "Captain America": "Photon Blast",
      "Thor": "Binary Form",
      "Black Widow": "Cosmic Energy",
      "Dr. Strange": "Energy Absorption",
      "Scarlet Witch": "Space Stone Power"
    },
    deltasPerSaga: {
      multiverse: ["Hawk-Eye", "Star-Lord"],
      multiverseActions: {
        "Hawk-Eye": "Supersonic Flight",
        "Star-Lord": "Kree Warrior"
      }
    }
  },

  "Mr. Fantastic": {
    color: "#4682B4", // Steel blue from suit
    baseBeats: ["Iron Man", "Hulk", "Spider-Man", "Black Panther", "The Vision"],
    baseActions: {
      "Iron Man": "Elastic Absorption",
      "Hulk": "Genius Intellect",
      "Spider-Man": "Stretch Attack",
      "Black Panther": "Scientific Superiority",
      "The Vision": "Molecular Manipulation"
    },
    deltasPerSaga: {
      multiverse: ["Ant-Man", "Star-Lord"],
      multiverseActions: {
        "Ant-Man": "Unstable Molecules",
        "Star-Lord": "Reed Richards Strategy"
      }
    }
  },

  // ========================================
  // VILLAINS
  // ========================================

  "Loki": {
    color: "#2D5016", // Dark green from armor
    baseBeats: ["Red Skull", "Ronan the Accuser"],
    baseActions: {
      "Red Skull": "Illusion Magic",
      "Ronan the Accuser": "Trickster's Deception"
    },
    deltasPerSaga: {
      infinity: ["Hela", "Mysterio", "Venom", "Thanos"],
      infinityActions: {
        "Hela": "Scepter Strike",
        "Mysterio": "God of Mischief",
        "Venom": "Asgardian Sorcery",
        "Thanos": "Mind Control"
      },
      multiverse: ["Doctor Doom", "Ronan the Accuser", "Kingpin", "Green Goblin"],
      multiverseActions: {
        "Doctor Doom": "Frost Giant Strength",
        "Ronan the Accuser": "Chitauri Army",
        "Kingpin": "Dagger Throw",
        "Green Goblin": "Tesseract Power"
      }
    }
  },

  "Red Skull": {
    color: "#8B0000", // Dark red
    baseBeats: ["Ultron", "Killmonger"],
    baseActions: {
      "Ultron": "Tesseract Weapon",
      "Killmonger": "HYDRA Technology"
    },
    deltasPerSaga: {
      infinity: ["Ronan the Accuser", "Mysterio", "Hela"],
      infinityActions: {
        "Ronan the Accuser": "Super Soldier Formula",
        "Mysterio": "Cosmic Cube",
        "Hela": "Strategic Genius"
      },
      multiverse: ["Kingpin", "Magneto", "Ultron", "Doctor Octopus", "Green Goblin", "Loki"],
      multiverseActions: {
        "Kingpin": "Nazi Science",
        "Magneto": "Death's Head Insignia",
        "Ultron": "Ruthless Tactician",
        "Doctor Octopus": "Red Skull's Army",
        "Green Goblin": "HYDRA Leader",
        "Loki": "Master Strategist"
      }
    }
  },

  "Ronan the Accuser": {
    color: "#1C3A70", // Dark blue from armor
    baseBeats: ["Red Skull", "Killmonger"],
    baseActions: {
      "Red Skull": "Universal Weapon",
      "Killmonger": "Kree Strength"
    },
    deltasPerSaga: {
      infinity: ["Killmonger", "Mysterio", "Loki"],
      infinityActions: {
        "Killmonger": "Accusation Hammer",
        "Mysterio": "Fanatical Zealot",
        "Loki": "Power Stone"
      },
      multiverse: ["Doctor Octopus", "Green Goblin", "Mysterio", "Ultron", "Venom"],
      multiverseActions: {
        "Doctor Octopus": "Kree Warlord",
        "Green Goblin": "Accuser's Judgment",
        "Mysterio": "Cosmic Rod",
        "Ultron": "Alien Technology",
        "Venom": "Kree Empire"
      }
    }
  },

  "Ultron": {
    color: "#C0C0C0", // Silver chrome
    baseBeats: ["Loki", "Ronan the Accuser"],
    baseActions: {
      "Loki": "Artificial Intelligence",
      "Ronan the Accuser": "Vibranium Body"
    },
    deltasPerSaga: {
      infinity: ["Killmonger", "Venom"],
      infinityActions: {
        "Killmonger": "Drone Army",
        "Venom": "Upgrade Protocol"
      },
      multiverse: ["Doctor Doom", "Killmonger", "Doctor Octopus", "Green Goblin", "Mysterio"],
      multiverseActions: {
        "Doctor Doom": "Machine Supremacy",
        "Killmonger": "Sentient AI",
        "Doctor Octopus": "Electromagnetic Field",
        "Green Goblin": "Hivemind Network",
        "Mysterio": "Evolution Directive"
      }
    }
  },

  "Killmonger": {
    color: "#FFD700", // Gold from suit
    baseBeats: ["Loki", "Ultron"],
    baseActions: {
      "Loki": "Vibranium Suit",
      "Ultron": "Wakandan Warrior"
    },
    deltasPerSaga: {
      infinity: ["Red Skull", "Thanos", "Venom"],
      infinityActions: {
        "Red Skull": "Black Panther Powers",
        "Thanos": "Golden Jaguar",
        "Venom": "Ritual Combat"
      },
      multiverse: ["Kingpin", "Doctor Octopus", "Green Goblin"],
      multiverseActions: {
        "Kingpin": "Royal Challenger",
        "Doctor Octopus": "Vibranium Claws",
        "Green Goblin": "Dora Milaje Training"
      }
    }
  },

  "Thanos": {
    color: "#6A1B9A", // Purple from skin
    baseBeats: ["Hela", "Ronan the Accuser", "Loki", "Ultron"],
    baseActions: {
      "Hela": "Infinity Gauntlet",
      "Ronan the Accuser": "Power Stone Punch",
      "Loki": "Titan's Strength",
      "Ultron": "Reality Stone"
    },
    deltasPerSaga: {
      multiverse: ["Killmonger", "Red Skull", "Kingpin"],
      multiverseActions: {
        "Killmonger": "Mad Titan",
        "Red Skull": "Time Stone",
        "Kingpin": "Snap"
      }
    }
  },

  "Hela": {
    color: "#00FF00", // Bright green
    baseBeats: ["Ronan the Accuser", "Ultron", "Mysterio", "Venom"],
    baseActions: {
      "Ronan the Accuser": "Goddess of Death",
      "Ultron": "Necrosword Throw",
      "Mysterio": "Asgardian Power",
      "Venom": "Death's Touch"
    },
    deltasPerSaga: {
      multiverse: ["Doctor Doom"],
      multiverseActions: {
        "Doctor Doom": "Eternal Flame"
      }
    }
  },

  "Mysterio": {
    color: "#32CD32", // Lime green
    baseBeats: ["Ultron", "Killmonger", "Venom", "Thanos"],
    baseActions: {
      "Ultron": "Holographic Illusion",
      "Killmonger": "Drone Technology",
      "Venom": "Mind Games",
      "Thanos": "Master of Deception"
    },
    deltasPerSaga: {
      multiverse: ["Green Goblin", "Doctor Octopus", "Kingpin", "Red Skull"],
      multiverseActions: {
        "Green Goblin": "Illusionist",
        "Doctor Octopus": "False Reality",
        "Kingpin": "Stark Drones",
        "Red Skull": "Smoke and Mirrors"
      }
    }
  },

  "Venom": {
    color: "#0D0D0D", // Nearly black
    baseBeats: ["Killmonger", "Loki", "Thanos", "Hela"],
    baseActions: {
      "Killmonger": "Symbiote Takeover",
      "Loki": "Savage Bite",
      "Thanos": "Alien Symbiosis",
      "Hela": "Lethal Protector"
    },
    deltasPerSaga: {
      multiverse: ["Doctor Octopus", "Green Goblin", "Kingpin"],
      multiverseActions: {
        "Doctor Octopus": "Venomous Tendrils",
        "Green Goblin": "Web Strike",
        "Kingpin": "Carnage Form"
      }
    }
  },

  "Galactus": {
    color: "#FF1493", // Deep pink/magenta
    baseBeats: ["Thanos", "Hela", "Doctor Doom", "Magneto", "Ultron"],
    baseActions: {
      "Thanos": "Devourer of Worlds",
      "Hela": "Cosmic Power",
      "Doctor Doom": "Planet Eater",
      "Magneto": "Power Cosmic",
      "Ultron": "Universal Threat"
    },
    deltasPerSaga: {
      multiverse: ["Ronan the Accuser", "Kingpin"],
      multiverseActions: {
        "Ronan the Accuser": "Celestial Being",
        "Kingpin": "Infinite Hunger"
      }
    }
  },

  "Doctor Doom": {
    color: "#2F4F4F", // Dark slate gray
    baseBeats: ["Galactus", "Magneto", "Hela", "Ultron", "Thanos"],
    baseActions: {
      "Galactus": "Mystical Armor",
      "Magneto": "Latverian Sorcery",
      "Hela": "Time Platform",
      "Ultron": "Doombots",
      "Thanos": "Genius and Magic"
    },
    deltasPerSaga: {
      multiverse: ["Loki", "Mysterio"],
      multiverseActions: {
        "Loki": "Victor Von Doom",
        "Mysterio": "Diplomatic Immunity"
      }
    }
  },

  "Magneto": {
    color: "#8A2BE2", // Blue-violet
    baseBeats: ["Doctor Doom", "Ultron", "Killmonger", "Doctor Octopus", "Green Goblin"],
    baseActions: {
      "Doctor Doom": "Magnetic Mastery",
      "Ultron": "Electromagnetic Control",
      "Killmonger": "Metal Manipulation",
      "Doctor Octopus": "Master of Magnetism",
      "Green Goblin": "Helmet Defense"
    },
    deltasPerSaga: {
      multiverse: ["Red Skull", "Venom"],
      multiverseActions: {
        "Red Skull": "Mutant Supremacy",
        "Venom": "Magnetic Field"
      }
    }
  },

  "Doctor Octopus": {
    color: "#2E8B57", // Sea green
    baseBeats: ["Mysterio", "Killmonger", "Green Goblin", "Kingpin", "Red Skull"],
    baseActions: {
      "Mysterio": "Mechanical Arms",
      "Killmonger": "Superior Mind",
      "Green Goblin": "Tentacle Strike",
      "Kingpin": "Nuclear Fusion",
      "Red Skull": "Sinister Six"
    },
    deltasPerSaga: {
      multiverse: ["Loki", "Venom"],
      multiverseActions: {
        "Loki": "Mad Scientist",
        "Venom": "Adamantium Tentacles"
      }
    }
  },

  "Green Goblin": {
    color: "#556B2F", // Dark olive green
    baseBeats: ["Doctor Octopus", "Mysterio", "Kingpin", "Red Skull", "Killmonger"],
    baseActions: {
      "Doctor Octopus": "Goblin Glider",
      "Mysterio": "Pumpkin Bomb",
      "Kingpin": "Insane Genius",
      "Red Skull": "Goblin Formula",
      "Killmonger": "Razor Bats"
    },
    deltasPerSaga: {
      multiverse: ["Loki", "Thanos"],
      multiverseActions: {
        "Loki": "Green Goblin Serum",
        "Thanos": "Osborn Industries"
      }
    }
  },

  "Kingpin": {
    color: "#FFFFFF", // White from suit
    baseBeats: ["Red Skull", "Mysterio", "Green Goblin", "Doctor Octopus", "Killmonger"],
    baseActions: {
      "Red Skull": "Crime Lord",
      "Mysterio": "Brutal Strength",
      "Green Goblin": "Street Control",
      "Doctor Octopus": "Wilson Fisk Power",
      "Killmonger": "Underground Empire"
    },
    deltasPerSaga: {
      multiverse: ["Venom", "Loki"],
      multiverseActions: {
        "Venom": "Corporate Influence",
        "Loki": "Raw Power"
      }
    }
  },

  "The Watcher": {
    color: "#F5F5DC", // Beige/cream
    baseBeats: ["Galactus", "Thanos", "Hela", "Doctor Doom", "Captain Marvel"],
    baseActions: {
      "Galactus": "Cosmic Observer",
      "Thanos": "Multiversal Knowledge",
      "Hela": "Omniscient Being",
      "Doctor Doom": "Watcher's Oath",
      "Captain Marvel": "Fourth Wall Break"
    },
    deltasPerSaga: {
      multiverse: ["Scarlet Witch", "Dr. Strange", "The Vision", "Ronan the Accuser", "Ultron", "Magneto", "Loki", "Mysterio", "Venom", "Kingpin"],
      multiverseActions: {
        "Scarlet Witch": "Universal Awareness",
        "Dr. Strange": "Timeless Existence",
        "The Vision": "Absolute Power",
        "Ronan the Accuser": "Cosmic Authority",
        "Ultron": "Infinite Wisdom",
        "Magneto": "Reality Observation",
        "Loki": "Uatu's Intervention",
        "Mysterio": "What If...?",
        "Venom": "Watcher's Power",
        "Kingpin": "Breaking the Oath"
      }
    }
  }
};
