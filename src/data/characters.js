/**
 * Character Registry
 *
 * Central registry for all MCU characters with:
 * - MCU-accurate colors (based on iconic suit/appearance)
 * - Mathematically balanced matchups (each character wins exactly 15 times)
 * - Base beats relationships (Avengers Saga - 5 wins)
 * - Incremental beats additions per saga (Infinity +5, Multiverse +5)
 * - Action taglines describing how each character defeats opponents
 *
 * Generated using circular tournament algorithm to ensure perfect balance
 * and no bidirectional conflicts.
 */

export const characterRegistry = {
  // ========================================
  // HEROES
  // ========================================

  "Captain America": {
    color: "#0A3161",
    baseBeats: ["Black Panther","Spider-Man","Loki","Mr. Fantastic","Black Widow"],
    baseActions: {
          "Black Panther": "Vibranium Shield",
          "Spider-Man": "Tactical Strategy",
          "Loki": "Super Soldier Serum",
          "Mr. Fantastic": "Worthy of Mjolnir",
          "Black Widow": "Shield Ricochet"
    },
    deltasPerSaga: {
      infinity: ["Hawk-Eye","Star-Lord","Ant-Man","Red Skull","Ronan the Accuser"],
      infinityActions: {
              "Hawk-Eye": "Unbreakable Will",
              "Star-Lord": "Experience and Leadership",
              "Ant-Man": "Hand-to-Hand Combat",
              "Red Skull": "Tactical Superiority",
              "Ronan the Accuser": "Cap's Shield"
      },
      multiverse: ["Killmonger","Mysterio","Doctor Octopus","Green Goblin","Kingpin"],
      multiverseActions: {
              "Killmonger": "I Can Do This All Day",
              "Mysterio": "Star-Spangled Plan",
              "Doctor Octopus": "Patriotic Power",
              "Green Goblin": "Avenger's Leader",
              "Kingpin": "Never Give Up"
      }
    }
  },

  "Iron Man": {
    color: "#C8102E",
    baseBeats: ["Magneto","Venom","Ultron","Captain America","Black Panther"],
    baseActions: {
          "Magneto": "Repulsor Technology",
          "Venom": "Hulkbuster Armor",
          "Ultron": "Arc Reactor Beam",
          "Captain America": "Stark Tech Superiority",
          "Black Panther": "Sonic Cannons"
    },
    deltasPerSaga: {
      infinity: ["Spider-Man","Loki","Mr. Fantastic","Black Widow","Hawk-Eye"],
      infinityActions: {
              "Spider-Man": "Electromagnetic Pulse",
              "Loki": "Micro-Missile Barrage",
              "Mr. Fantastic": "Nanotech Arsenal",
              "Black Widow": "Unibeam Blast",
              "Hawk-Eye": "Stark Innovation"
      },
      multiverse: ["Star-Lord","Ant-Man","Red Skull","Ronan the Accuser","Killmonger"],
      multiverseActions: {
              "Star-Lord": "Armor Superiority",
              "Ant-Man": "J.A.R.V.I.S.",
              "Red Skull": "Mark 50 Suit",
              "Ronan the Accuser": "Repulsor Rays",
              "Killmonger": "Tony's Genius"
      }
    }
  },

  "Thor": {
    color: "#B0B0B0",
    baseBeats: ["Hela","Captain Marvel","The Vision","Dr. Strange","Hulk"],
    baseActions: {
          "Hela": "Lightning Strike",
          "Captain Marvel": "Mjolnir Throw",
          "The Vision": "Stormbreaker Axe",
          "Dr. Strange": "God of Thunder",
          "Hulk": "Bifrost Summon"
    },
    deltasPerSaga: {
      infinity: ["Iron Man","Magneto","Venom","Ultron","Captain America"],
      infinityActions: {
              "Iron Man": "Asgardian Strength",
              "Magneto": "Thunderous Force",
              "Venom": "Lightning Bolt",
              "Ultron": "King of Asgard",
              "Captain America": "Odinforce Power"
      },
      multiverse: ["Black Panther","Spider-Man","Loki","Mr. Fantastic","Black Widow"],
      multiverseActions: {
              "Black Panther": "Hammer Strike",
              "Spider-Man": "Thunder God",
              "Loki": "Storm Summoning",
              "Mr. Fantastic": "Godly Power",
              "Black Widow": "Rainbow Bridge"
      }
    }
  },

  "Hulk": {
    color: "#6DAA2C",
    baseBeats: ["Iron Man","Magneto","Venom","Ultron","Captain America"],
    baseActions: {
          "Iron Man": "Thunderclap",
          "Magneto": "Brute Strength",
          "Venom": "Gamma Rage",
          "Ultron": "Crushing Power",
          "Captain America": "Unstoppable Force"
    },
    deltasPerSaga: {
      infinity: ["Black Panther","Spider-Man","Loki","Mr. Fantastic","Black Widow"],
      infinityActions: {
              "Black Panther": "Smash Attack",
              "Spider-Man": "Gamma Radiation",
              "Loki": "World Breaker",
              "Mr. Fantastic": "Savage Hulk",
              "Black Widow": "Raw Power"
      },
      multiverse: ["Hawk-Eye","Star-Lord","Ant-Man","Red Skull","Ronan the Accuser"],
      multiverseActions: {
              "Hawk-Eye": "Green Fury",
              "Star-Lord": "Incredible Strength",
              "Ant-Man": "Hulk Smash",
              "Red Skull": "Rage Mode",
              "Ronan the Accuser": "Banner's Anger"
      }
    }
  },

  "Black Widow": {
    color: "#1A1A1A",
    baseBeats: ["The Watcher","Galactus","Scarlet Witch","Doctor Doom","Thanos"],
    baseActions: {
          "The Watcher": "Black Widow's Bite",
          "Galactus": "Stealth and Agility",
          "Scarlet Witch": "Espionage Training",
          "Doctor Doom": "Tactical Precision",
          "Thanos": "Red Room Technique"
    },
    deltasPerSaga: {
      infinity: ["Hawk-Eye","Star-Lord","Ant-Man","Red Skull","Ronan the Accuser"],
      infinityActions: {
              "Hawk-Eye": "Assassin's Strike",
              "Star-Lord": "Superior Tactics",
              "Ant-Man": "Widow's Sting",
              "Red Skull": "Covert Operations",
              "Ronan the Accuser": "Spy Mastery"
      },
      multiverse: ["Killmonger","Mysterio","Doctor Octopus","Green Goblin","Kingpin"],
      multiverseActions: {
              "Killmonger": "Natasha's Skill",
              "Mysterio": "Assassin Training",
              "Doctor Octopus": "Stealth Attack",
              "Green Goblin": "Widow Shock",
              "Kingpin": "Red Room"
      }
    }
  },

  "Spider-Man": {
    color: "#DF1F2D",
    baseBeats: ["The Watcher","Galactus","Loki","Mr. Fantastic","Black Widow"],
    baseActions: {
          "The Watcher": "Spider-Sense",
          "Galactus": "Web Strike",
          "Loki": "Agile Reflexes",
          "Mr. Fantastic": "Youth and Speed",
          "Black Widow": "Web Cocoon"
    },
    deltasPerSaga: {
      infinity: ["Hawk-Eye","Star-Lord","Ant-Man","Red Skull","Ronan the Accuser"],
      infinityActions: {
              "Hawk-Eye": "Wall-Crawler Advantage",
              "Star-Lord": "Iron Spider Suit",
              "Ant-Man": "Spidey Sense",
              "Red Skull": "Web-Slinging",
              "Ronan the Accuser": "Friendly Neighborhood"
      },
      multiverse: ["Killmonger","Mysterio","Doctor Octopus","Green Goblin","Kingpin"],
      multiverseActions: {
              "Killmonger": "Quick Reflexes",
              "Mysterio": "Sticky Situation",
              "Doctor Octopus": "Peter's Wit",
              "Green Goblin": "Web Shooter",
              "Kingpin": "Spider Agility"
      }
    }
  },

  "Dr. Strange": {
    color: "#1B4B8C",
    baseBeats: ["Hulk","Iron Man","Magneto","Venom","Ultron"],
    baseActions: {
          "Hulk": "Mystic Arts",
          "Iron Man": "Time Stone",
          "Magneto": "Mirror Dimension",
          "Venom": "Sorcery Supreme",
          "Ultron": "Astral Projection"
    },
    deltasPerSaga: {
      infinity: ["Captain America","Black Panther","Spider-Man","Loki","Mr. Fantastic"],
      infinityActions: {
              "Captain America": "Portals and Spells",
              "Black Panther": "Reality Manipulation",
              "Spider-Man": "Magical Mastery",
              "Loki": "Crimson Bands",
              "Mr. Fantastic": "Dimensional Magic"
      },
      multiverse: ["Black Widow","Hawk-Eye","Star-Lord","Ant-Man","Red Skull"],
      multiverseActions: {
              "Black Widow": "Spell Casting",
              "Hawk-Eye": "Vishanti Power",
              "Star-Lord": "Time Loop",
              "Ant-Man": "Eldritch Magic",
              "Red Skull": "Sorcerer Supreme"
      }
    }
  },

  "Black Panther": {
    color: "#2C2C54",
    baseBeats: ["The Watcher","Spider-Man","Loki","Mr. Fantastic","Black Widow"],
    baseActions: {
          "The Watcher": "Vibranium Claws",
          "Spider-Man": "Wakandan Technology",
          "Loki": "Kinetic Energy Blast",
          "Mr. Fantastic": "Panther Habit",
          "Black Widow": "Vibranium Suit"
    },
    deltasPerSaga: {
      infinity: ["Hawk-Eye","Star-Lord","Ant-Man","Red Skull","Ronan the Accuser"],
      infinityActions: {
              "Hawk-Eye": "Royal Combat Training",
              "Star-Lord": "Heart-Shaped Herb",
              "Ant-Man": "King's Power",
              "Red Skull": "Wakanda Forever",
              "Ronan the Accuser": "Panther Strike"
      },
      multiverse: ["Killmonger","Mysterio","Doctor Octopus","Green Goblin","Kingpin"],
      multiverseActions: {
              "Killmonger": "Royal Warrior",
              "Mysterio": "Advanced Tech",
              "Doctor Octopus": "T'Challa's Skill",
              "Green Goblin": "Ancestral Power",
              "Kingpin": "Black Panther Fury"
      }
    }
  },

  "Scarlet Witch": {
    color: "#DC143C",
    baseBeats: ["Doctor Doom","Thanos","Thor","Hela","Captain Marvel"],
    baseActions: {
          "Doctor Doom": "Chaos Magic",
          "Thanos": "Reality Warping",
          "Thor": "Hex Bolts",
          "Hela": "Darkhold Power",
          "Captain Marvel": "Probability Manipulation"
    },
    deltasPerSaga: {
      infinity: ["The Vision","Dr. Strange","Hulk","Iron Man","Magneto"],
      infinityActions: {
              "The Vision": "Mind Manipulation",
              "Dr. Strange": "Scarlet Fury",
              "Hulk": "Chaos Energy",
              "Iron Man": "Magical Mastery",
              "Magneto": "Nexus Being"
      },
      multiverse: ["Venom","Ultron","Captain America","Black Panther","Spider-Man"],
      multiverseActions: {
              "Venom": "Reality Alteration",
              "Ultron": "Psionic Blast",
              "Captain America": "Magical Shield",
              "Black Panther": "Chaos Control",
              "Spider-Man": "Hex Wave"
      }
    }
  },

  "Hawk-Eye": {
    color: "#4B0082",
    baseBeats: ["The Watcher","Galactus","Scarlet Witch","Doctor Doom","Thanos"],
    baseActions: {
          "The Watcher": "Explosive Arrow",
          "Galactus": "Precision Shot",
          "Scarlet Witch": "Trick Arrow",
          "Doctor Doom": "Perfect Aim",
          "Thanos": "EMP Arrow"
    },
    deltasPerSaga: {
      infinity: ["Thor","Star-Lord","Ant-Man","Red Skull","Ronan the Accuser"],
      infinityActions: {
              "Thor": "Pym Particle Arrow",
              "Star-Lord": "Quantum Arrow",
              "Ant-Man": "Never Miss",
              "Red Skull": "Hawkeye's Aim",
              "Ronan the Accuser": "Ronin Strike"
      },
      multiverse: ["Killmonger","Mysterio","Doctor Octopus","Green Goblin","Kingpin"],
      multiverseActions: {
              "Killmonger": "Tactical Arrow",
              "Mysterio": "Clint's Precision",
              "Doctor Octopus": "Arrow Barrage",
              "Green Goblin": "Sharpshooter",
              "Kingpin": "Bull's-Eye"
      }
    }
  },

  "The Vision": {
    color: "#E83F6F",
    baseBeats: ["Dr. Strange","Hulk","Iron Man","Magneto","Venom"],
    baseActions: {
          "Dr. Strange": "Mind Stone Beam",
          "Hulk": "Density Manipulation",
          "Iron Man": "Phasing Attack",
          "Magneto": "Infinite Processing",
          "Venom": "Vibranium Body"
    },
    deltasPerSaga: {
      infinity: ["Ultron","Captain America","Black Panther","Spider-Man","Loki"],
      infinityActions: {
              "Ultron": "Advanced AI",
              "Captain America": "Synthetic Superiority",
              "Black Panther": "Phase Through",
              "Spider-Man": "Vision Beam",
              "Loki": "Android Power"
      },
      multiverse: ["Mr. Fantastic","Black Widow","Hawk-Eye","Star-Lord","Ant-Man"],
      multiverseActions: {
              "Mr. Fantastic": "Molecular Control",
              "Black Widow": "Computational Speed",
              "Hawk-Eye": "Synthezoid Strength",
              "Star-Lord": "Neural Network",
              "Ant-Man": "Perfect Logic"
      }
    }
  },

  "Star-Lord": {
    color: "#8B4513",
    baseBeats: ["The Watcher","Galactus","Scarlet Witch","Doctor Doom","Thanos"],
    baseActions: {
          "The Watcher": "Element Guns",
          "Galactus": "Jet Boot Maneuver",
          "Scarlet Witch": "Quad Blasters",
          "Doctor Doom": "Legendary Outlaw",
          "Thanos": "Celestial Power"
    },
    deltasPerSaga: {
      infinity: ["Thor","Hela","Ant-Man","Red Skull","Ronan the Accuser"],
      infinityActions: {
              "Thor": "Awesome Mix Vol. 3",
              "Hela": "Hadron Enforcer",
              "Ant-Man": "Star-Lord Dance",
              "Red Skull": "Guardians Leader",
              "Ronan the Accuser": "Blaster Fire"
      },
      multiverse: ["Killmonger","Mysterio","Doctor Octopus","Green Goblin","Kingpin"],
      multiverseActions: {
              "Killmonger": "Peter Quill",
              "Mysterio": "Ravager Tactics",
              "Doctor Octopus": "Outlaw Hero",
              "Green Goblin": "Space Pirate",
              "Kingpin": "Celestial Gene"
      }
    }
  },

  "Ant-Man": {
    color: "#B8001F",
    baseBeats: ["The Watcher","Galactus","Scarlet Witch","Doctor Doom","Thanos"],
    baseActions: {
          "The Watcher": "Shrinking Surprise",
          "Galactus": "Subatomic Strike",
          "Scarlet Witch": "Giant-Man Stomp",
          "Doctor Doom": "Quantum Realm",
          "Thanos": "Pym Particle Punch"
    },
    deltasPerSaga: {
      infinity: ["Thor","Hela","Captain Marvel","Red Skull","Ronan the Accuser"],
      infinityActions: {
              "Thor": "Microscopic Evasion",
              "Hela": "Size Manipulation",
              "Captain Marvel": "Grow and Shrink",
              "Red Skull": "Scott's Surprise",
              "Ronan the Accuser": "Tiny Hero"
      },
      multiverse: ["Killmonger","Mysterio","Doctor Octopus","Green Goblin","Kingpin"],
      multiverseActions: {
              "Killmonger": "Quantum Power",
              "Mysterio": "Ant Army",
              "Doctor Octopus": "Size Change",
              "Green Goblin": "Pym Tech",
              "Kingpin": "Microverse"
      }
    }
  },

  "Captain Marvel": {
    color: "#FDB827",
    baseBeats: ["The Vision","Dr. Strange","Hulk","Iron Man","Magneto"],
    baseActions: {
          "The Vision": "Photon Blast",
          "Dr. Strange": "Binary Form",
          "Hulk": "Cosmic Energy",
          "Iron Man": "Energy Absorption",
          "Magneto": "Space Stone Power"
    },
    deltasPerSaga: {
      infinity: ["Venom","Ultron","Captain America","Black Panther","Spider-Man"],
      infinityActions: {
              "Venom": "Supersonic Flight",
              "Ultron": "Kree Warrior",
              "Captain America": "Captain's Power",
              "Black Panther": "Photon Energy",
              "Spider-Man": "Star Power"
      },
      multiverse: ["Loki","Mr. Fantastic","Black Widow","Hawk-Eye","Star-Lord"],
      multiverseActions: {
              "Loki": "Energy Projection",
              "Mr. Fantastic": "Binary Mode",
              "Black Widow": "Cosmic Flight",
              "Hawk-Eye": "Energy Shield",
              "Star-Lord": "Carol's Fury"
      }
    }
  },

  "Mr. Fantastic": {
    color: "#4682B4",
    baseBeats: ["The Watcher","Galactus","Scarlet Witch","Doctor Doom","Black Widow"],
    baseActions: {
          "The Watcher": "Elastic Absorption",
          "Galactus": "Genius Intellect",
          "Scarlet Witch": "Stretch Attack",
          "Doctor Doom": "Scientific Superiority",
          "Black Widow": "Molecular Manipulation"
    },
    deltasPerSaga: {
      infinity: ["Hawk-Eye","Star-Lord","Ant-Man","Red Skull","Ronan the Accuser"],
      infinityActions: {
              "Hawk-Eye": "Unstable Molecules",
              "Star-Lord": "Reed Richards Strategy",
              "Ant-Man": "Elasticity",
              "Red Skull": "Brilliant Mind",
              "Ronan the Accuser": "Fantastic Four"
      },
      multiverse: ["Killmonger","Mysterio","Doctor Octopus","Green Goblin","Kingpin"],
      multiverseActions: {
              "Killmonger": "Stretch Power",
              "Mysterio": "Scientific Method",
              "Doctor Octopus": "Reed's Brain",
              "Green Goblin": "Rubber Body",
              "Kingpin": "Genius Plan"
      }
    }
  },

  // ========================================
  // VILLAINS
  // ========================================

  "Loki": {
    color: "#2D5016",
    baseBeats: ["The Watcher","Galactus","Scarlet Witch","Mr. Fantastic","Black Widow"],
    baseActions: {
          "The Watcher": "Illusion Magic",
          "Galactus": "Trickster's Deception",
          "Scarlet Witch": "Scepter Strike",
          "Mr. Fantastic": "God of Mischief",
          "Black Widow": "Asgardian Sorcery"
    },
    deltasPerSaga: {
      infinity: ["Hawk-Eye","Star-Lord","Ant-Man","Red Skull","Ronan the Accuser"],
      infinityActions: {
              "Hawk-Eye": "Mind Control",
              "Star-Lord": "Frost Giant Strength",
              "Ant-Man": "Chitauri Army",
              "Red Skull": "Dagger Throw",
              "Ronan the Accuser": "Tesseract Power"
      },
      multiverse: ["Killmonger","Mysterio","Doctor Octopus","Green Goblin","Kingpin"],
      multiverseActions: {
              "Killmonger": "Glorious Purpose",
              "Mysterio": "Mischief Magic",
              "Doctor Octopus": "Shapeshifting",
              "Green Goblin": "Loki's Tricks",
              "Kingpin": "God of Lies"
      }
    }
  },

  "Red Skull": {
    color: "#8B0000",
    baseBeats: ["The Watcher","Galactus","Scarlet Witch","Doctor Doom","Thanos"],
    baseActions: {
          "The Watcher": "Tesseract Weapon",
          "Galactus": "HYDRA Technology",
          "Scarlet Witch": "Super Soldier Formula",
          "Doctor Doom": "Cosmic Cube",
          "Thanos": "Strategic Genius"
    },
    deltasPerSaga: {
      infinity: ["Thor","Hela","Captain Marvel","The Vision","Ronan the Accuser"],
      infinityActions: {
              "Thor": "Nazi Science",
              "Hela": "Death's Head Insignia",
              "Captain Marvel": "Red Skull's Army",
              "The Vision": "HYDRA Leader",
              "Ronan the Accuser": "Master Strategist"
      },
      multiverse: ["Killmonger","Mysterio","Doctor Octopus","Green Goblin","Kingpin"],
      multiverseActions: {
              "Killmonger": "Schmidt's Plan",
              "Mysterio": "HYDRA Power",
              "Doctor Octopus": "Evil Genius",
              "Green Goblin": "Skull Face",
              "Kingpin": "Ruthless Leader"
      }
    }
  },

  "Ronan the Accuser": {
    color: "#1C3A70",
    baseBeats: ["The Watcher","Galactus","Scarlet Witch","Doctor Doom","Thanos"],
    baseActions: {
          "The Watcher": "Universal Weapon",
          "Galactus": "Kree Strength",
          "Scarlet Witch": "Accusation Hammer",
          "Doctor Doom": "Fanatical Zealot",
          "Thanos": "Power Stone"
    },
    deltasPerSaga: {
      infinity: ["Thor","Hela","Captain Marvel","The Vision","Dr. Strange"],
      infinityActions: {
              "Thor": "Kree Warlord",
              "Hela": "Accuser's Judgment",
              "Captain Marvel": "Cosmic Rod",
              "The Vision": "Alien Technology",
              "Dr. Strange": "Kree Empire"
      },
      multiverse: ["Killmonger","Mysterio","Doctor Octopus","Green Goblin","Kingpin"],
      multiverseActions: {
              "Killmonger": "Hammer Strike",
              "Mysterio": "Kree Warrior",
              "Doctor Octopus": "Accuser Power",
              "Green Goblin": "Ronan's Fury",
              "Kingpin": "Kree Justice"
      }
    }
  },

  "Ultron": {
    color: "#C0C0C0",
    baseBeats: ["Captain America","Black Panther","Spider-Man","Loki","Mr. Fantastic"],
    baseActions: {
          "Captain America": "Artificial Intelligence",
          "Black Panther": "Vibranium Body",
          "Spider-Man": "Drone Army",
          "Loki": "Upgrade Protocol",
          "Mr. Fantastic": "Machine Supremacy"
    },
    deltasPerSaga: {
      infinity: ["Black Widow","Hawk-Eye","Star-Lord","Ant-Man","Red Skull"],
      infinityActions: {
              "Black Widow": "Sentient AI",
              "Hawk-Eye": "Electromagnetic Field",
              "Star-Lord": "Hivemind Network",
              "Ant-Man": "Evolution Directive",
              "Red Skull": "Robot Army"
      },
      multiverse: ["Ronan the Accuser","Killmonger","Mysterio","Doctor Octopus","Green Goblin"],
      multiverseActions: {
              "Ronan the Accuser": "Energy Beam",
              "Killmonger": "Self-Repair",
              "Mysterio": "Ultron Prime",
              "Doctor Octopus": "Digital Mind",
              "Green Goblin": "No Strings"
      }
    }
  },

  "Killmonger": {
    color: "#FFD700",
    baseBeats: ["The Watcher","Galactus","Scarlet Witch","Doctor Doom","Thanos"],
    baseActions: {
          "The Watcher": "Vibranium Suit",
          "Galactus": "Wakandan Warrior",
          "Scarlet Witch": "Black Panther Powers",
          "Doctor Doom": "Golden Jaguar",
          "Thanos": "Ritual Combat"
    },
    deltasPerSaga: {
      infinity: ["Thor","Hela","Captain Marvel","The Vision","Dr. Strange"],
      infinityActions: {
              "Thor": "Royal Challenger",
              "Hela": "Vibranium Claws",
              "Captain Marvel": "Dora Milaje Training",
              "The Vision": "N'Jadaka's Revenge",
              "Dr. Strange": "Wakanda's Shadow"
      },
      multiverse: ["Hulk","Mysterio","Doctor Octopus","Green Goblin","Kingpin"],
      multiverseActions: {
              "Hulk": "Golden Suit",
              "Mysterio": "Challenger's Might",
              "Doctor Octopus": "Erik's Fury",
              "Green Goblin": "Royal Combat",
              "Kingpin": "Panther Rivalry"
      }
    }
  },

  "Thanos": {
    color: "#6A1B9A",
    baseBeats: ["Thor","Hela","Captain Marvel","The Vision","Dr. Strange"],
    baseActions: {
          "Thor": "Infinity Gauntlet",
          "Hela": "Power Stone Punch",
          "Captain Marvel": "Mad Titan",
          "The Vision": "Reality Stone",
          "Dr. Strange": "Time Stone"
    },
    deltasPerSaga: {
      infinity: ["Hulk","Iron Man","Magneto","Venom","Ultron"],
      infinityActions: {
              "Hulk": "Snap",
              "Iron Man": "Titan's Strength",
              "Magneto": "Cosmic Power",
              "Venom": "Space Stone",
              "Ultron": "Eternal Might"
      },
      multiverse: ["Captain America","Black Panther","Spider-Man","Loki","Mr. Fantastic"],
      multiverseActions: {
              "Captain America": "Universal Balance",
              "Black Panther": "Inevitable Doom",
              "Spider-Man": "Titan Strength",
              "Loki": "Soul Stone",
              "Mr. Fantastic": "Mind Stone"
      }
    }
  },

  "Hela": {
    color: "#00FF00",
    baseBeats: ["Captain Marvel","The Vision","Dr. Strange","Hulk","Iron Man"],
    baseActions: {
          "Captain Marvel": "Goddess of Death",
          "The Vision": "Necrosword Throw",
          "Dr. Strange": "Asgardian Power",
          "Hulk": "Death's Touch",
          "Iron Man": "Eternal Flame"
    },
    deltasPerSaga: {
      infinity: ["Magneto","Venom","Ultron","Captain America","Black Panther"],
      infinityActions: {
              "Magneto": "Death Magic",
              "Venom": "Necro Blades",
              "Ultron": "Death Goddess",
              "Captain America": "Asgard's Heir",
              "Black Panther": "Infinite Weapons"
      },
      multiverse: ["Spider-Man","Loki","Mr. Fantastic","Black Widow","Hawk-Eye"],
      multiverseActions: {
              "Spider-Man": "Dark Magic",
              "Loki": "Death Strike",
              "Mr. Fantastic": "Hela's Wrath",
              "Black Widow": "Necromancy",
              "Hawk-Eye": "Goddess Fury"
      }
    }
  },

  "Mysterio": {
    color: "#32CD32",
    baseBeats: ["The Watcher","Galactus","Scarlet Witch","Doctor Doom","Thanos"],
    baseActions: {
          "The Watcher": "Holographic Illusion",
          "Galactus": "Drone Technology",
          "Scarlet Witch": "Mind Games",
          "Doctor Doom": "Master of Deception",
          "Thanos": "Illusionist"
    },
    deltasPerSaga: {
      infinity: ["Thor","Hela","Captain Marvel","The Vision","Dr. Strange"],
      infinityActions: {
              "Thor": "False Reality",
              "Hela": "Stark Drones",
              "Captain Marvel": "Smoke and Mirrors",
              "The Vision": "Beck's Tricks",
              "Dr. Strange": "Illusion Master"
      },
      multiverse: ["Hulk","Iron Man","Doctor Octopus","Green Goblin","Kingpin"],
      multiverseActions: {
              "Hulk": "Fake Hero",
              "Iron Man": "Drone Attack",
              "Doctor Octopus": "Mind Tricks",
              "Green Goblin": "CGI Magic",
              "Kingpin": "Mysterio's Lies"
      }
    }
  },

  "Venom": {
    color: "#0D0D0D",
    baseBeats: ["Ultron","Captain America","Black Panther","Spider-Man","Loki"],
    baseActions: {
          "Ultron": "Symbiote Takeover",
          "Captain America": "Savage Bite",
          "Black Panther": "Alien Symbiosis",
          "Spider-Man": "Lethal Protector",
          "Loki": "Venomous Tendrils"
    },
    deltasPerSaga: {
      infinity: ["Mr. Fantastic","Black Widow","Hawk-Eye","Star-Lord","Ant-Man"],
      infinityActions: {
              "Mr. Fantastic": "Web Strike",
              "Black Widow": "Carnage Form",
              "Hawk-Eye": "Symbiote Strike",
              "Star-Lord": "We Are Venom",
              "Ant-Man": "Alien Bond"
      },
      multiverse: ["Red Skull","Ronan the Accuser","Killmonger","Mysterio","Doctor Octopus"],
      multiverseActions: {
              "Red Skull": "Symbiote Rage",
              "Ronan the Accuser": "Klyntar Power",
              "Killmonger": "Venom Blast",
              "Mysterio": "Symbiotic Strength",
              "Doctor Octopus": "Eddie's Partner"
      }
    }
  },

  "Galactus": {
    color: "#FF1493",
    baseBeats: ["Scarlet Witch","Doctor Doom","Thanos","Thor","Hela"],
    baseActions: {
          "Scarlet Witch": "Devourer of Worlds",
          "Doctor Doom": "Power Cosmic",
          "Thanos": "Planet Eater",
          "Thor": "Universal Threat",
          "Hela": "Cosmic Hunger"
    },
    deltasPerSaga: {
      infinity: ["Captain Marvel","The Vision","Dr. Strange","Hulk","Iron Man"],
      infinityActions: {
              "Captain Marvel": "Celestial Being",
              "The Vision": "Infinite Power",
              "Dr. Strange": "World Consumption",
              "Hulk": "Cosmic Energy",
              "Iron Man": "Galactic Domination"
      },
      multiverse: ["Magneto","Venom","Ultron","Captain America","Black Panther"],
      multiverseActions: {
              "Magneto": "Ultimate Power",
              "Venom": "Herald Summon",
              "Ultron": "Reality Warping",
              "Captain America": "Energy Absorption",
              "Black Panther": "Cosmic Force"
      }
    }
  },

  "Doctor Doom": {
    color: "#2F4F4F",
    baseBeats: ["Thanos","Thor","Hela","Captain Marvel","The Vision"],
    baseActions: {
          "Thanos": "Latverian Sorcery",
          "Thor": "Doom Armor",
          "Hela": "Mystical Barriers",
          "Captain Marvel": "Doombots",
          "The Vision": "Genius and Magic"
    },
    deltasPerSaga: {
      infinity: ["Dr. Strange","Hulk","Iron Man","Magneto","Venom"],
      infinityActions: {
              "Dr. Strange": "Victor Von Doom",
              "Hulk": "Scientific Sorcery",
              "Iron Man": "Time Platform",
              "Magneto": "Diplomatic Immunity",
              "Venom": "Latverian Technology"
      },
      multiverse: ["Ultron","Captain America","Black Panther","Spider-Man","Loki"],
      multiverseActions: {
              "Ultron": "Sorcery and Science",
              "Captain America": "Mystical Armor",
              "Black Panther": "Doom's Genius",
              "Spider-Man": "Royal Authority",
              "Loki": "Latverian Power"
      }
    }
  },

  "Magneto": {
    color: "#8A2BE2",
    baseBeats: ["Venom","Ultron","Captain America","Black Panther","Spider-Man"],
    baseActions: {
          "Venom": "Magnetic Mastery",
          "Ultron": "Electromagnetic Control",
          "Captain America": "Metal Manipulation",
          "Black Panther": "Master of Magnetism",
          "Spider-Man": "Helmet Defense"
    },
    deltasPerSaga: {
      infinity: ["Loki","Mr. Fantastic","Black Widow","Hawk-Eye","Star-Lord"],
      infinityActions: {
              "Loki": "Mutant Supremacy",
              "Mr. Fantastic": "Magnetic Field",
              "Black Widow": "Metal Control",
              "Hawk-Eye": "Erik's Power",
              "Star-Lord": "Brotherhood"
      },
      multiverse: ["Ant-Man","Red Skull","Ronan the Accuser","Killmonger","Mysterio"],
      multiverseActions: {
              "Ant-Man": "Magnetic Shield",
              "Red Skull": "Metal Storm",
              "Ronan the Accuser": "Electromagnetic Force",
              "Killmonger": "Magnetic Fury",
              "Mysterio": "Omega Mutant"
      }
    }
  },

  "Doctor Octopus": {
    color: "#2E8B57",
    baseBeats: ["The Watcher","Galactus","Scarlet Witch","Doctor Doom","Thanos"],
    baseActions: {
          "The Watcher": "Mechanical Arms",
          "Galactus": "Superior Mind",
          "Scarlet Witch": "Tentacle Strike",
          "Doctor Doom": "Nuclear Fusion",
          "Thanos": "Sinister Six"
    },
    deltasPerSaga: {
      infinity: ["Thor","Hela","Captain Marvel","The Vision","Dr. Strange"],
      infinityActions: {
              "Thor": "Mad Scientist",
              "Hela": "Adamantium Tentacles",
              "Captain Marvel": "Doc Ock Power",
              "The Vision": "Otto's Genius",
              "Dr. Strange": "Four Arms"
      },
      multiverse: ["Hulk","Iron Man","Magneto","Green Goblin","Kingpin"],
      multiverseActions: {
              "Hulk": "Mechanical Mastery",
              "Iron Man": "Tentacle Grip",
              "Magneto": "Superior Spider-Man",
              "Green Goblin": "Scientific Madness",
              "Kingpin": "Metal Tentacles"
      }
    }
  },

  "Green Goblin": {
    color: "#556B2F",
    baseBeats: ["The Watcher","Galactus","Scarlet Witch","Doctor Doom","Thanos"],
    baseActions: {
          "The Watcher": "Goblin Glider",
          "Galactus": "Pumpkin Bomb",
          "Scarlet Witch": "Insane Genius",
          "Doctor Doom": "Goblin Formula",
          "Thanos": "Razor Bats"
    },
    deltasPerSaga: {
      infinity: ["Thor","Hela","Captain Marvel","The Vision","Dr. Strange"],
      infinityActions: {
              "Thor": "Green Goblin Serum",
              "Hela": "Osborn Industries",
              "Captain Marvel": "Maniacal Laugh",
              "The Vision": "Norman's Madness",
              "Dr. Strange": "Glider Attack"
      },
      multiverse: ["Hulk","Iron Man","Magneto","Venom","Kingpin"],
      multiverseActions: {
              "Hulk": "Goblin Bombs",
              "Iron Man": "Split Personality",
              "Magneto": "Osborn Power",
              "Venom": "Goblin Cackling",
              "Kingpin": "Insanity Serum"
      }
    }
  },

  "Kingpin": {
    color: "#FFFFFF",
    baseBeats: ["The Watcher","Galactus","Scarlet Witch","Doctor Doom","Thanos"],
    baseActions: {
          "The Watcher": "Crime Lord",
          "Galactus": "Brutal Strength",
          "Scarlet Witch": "Street Control",
          "Doctor Doom": "Wilson Fisk Power",
          "Thanos": "Underground Empire"
    },
    deltasPerSaga: {
      infinity: ["Thor","Hela","Captain Marvel","The Vision","Dr. Strange"],
      infinityActions: {
              "Thor": "Corporate Influence",
              "Hela": "Raw Power",
              "Captain Marvel": "Fisk's Fury",
              "The Vision": "Criminal Mastermind",
              "Dr. Strange": "Business Empire"
      },
      multiverse: ["Hulk","Iron Man","Magneto","Venom","Ultron"],
      multiverseActions: {
              "Hulk": "Kingpin Strength",
              "Iron Man": "Ruthless Boss",
              "Magneto": "Street King",
              "Venom": "Iron Fist",
              "Ultron": "Criminal Genius"
      }
    }
  },

  "The Watcher": {
    color: "#F5F5DC",
    baseBeats: ["Galactus","Scarlet Witch","Doctor Doom","Thanos","Thor"],
    baseActions: {
          "Galactus": "Multiversal Knowledge",
          "Scarlet Witch": "Cosmic Awareness",
          "Doctor Doom": "Reality Observation",
          "Thanos": "Infinite Wisdom",
          "Thor": "Universal Authority"
    },
    deltasPerSaga: {
      infinity: ["Hela","Captain Marvel","The Vision","Dr. Strange","Hulk"],
      infinityActions: {
              "Hela": "Omniscient Power",
              "Captain Marvel": "Uatu's Intervention",
              "The Vision": "Breaking the Oath",
              "Dr. Strange": "Fourth Wall Break",
              "Hulk": "Absolute Power"
      },
      multiverse: ["Iron Man","Magneto","Venom","Ultron","Captain America"],
      multiverseActions: {
              "Iron Man": "Timeless Existence",
              "Magneto": "What If...?",
              "Venom": "Watcher's Oath",
              "Ultron": "Cosmic Observer",
              "Captain America": "Reality Manipulation"
      }
    }
  }

};
