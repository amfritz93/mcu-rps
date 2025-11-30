/**
 * Character Registry - Balanced Extended RPS
 *
 * Total: 101 unique MCU characters across 18 matchup sets
 * Each character beats exactly (n-1)/2 opponents for perfect game balance
 */

export const characterRegistry = {
  "The Swordsman": {
    "color": "#8B4513",
    "action": "Blade Pierce",
    "firstAppearance": "street-easy",
    "beats": {
      "street-easy": [
        "Madame Gao",
        "Luke Cage",
        "Grant Ward"
      ],
      "street-medium": [
        "Madame Gao",
        "Grant Ward",
        "Purple Man",
        "Daredevil",
        "Cottonmouth",
        "Kingpin",
        "Jessica Jones"
      ],
      "street-hard": [
        "Madame Gao",
        "Grant Ward",
        "Purple Man",
        "Daredevil",
        "Cottonmouth",
        "Kingpin",
        "Jessica Jones"
      ]
    }
  },
  "Madame Gao": {
    "color": "#2F4F2F",
    "action": "Chi Strike",
    "firstAppearance": "street-easy",
    "beats": {
      "street-easy": [
        "Luke Cage",
        "Grant Ward",
        "Echo"
      ],
      "street-medium": [
        "Grant Ward",
        "Purple Man",
        "Daredevil",
        "Cottonmouth",
        "Kingpin",
        "Jessica Jones",
        "Bullseye"
      ],
      "street-hard": [
        "Grant Ward",
        "Purple Man",
        "Daredevil",
        "Cottonmouth",
        "Kingpin",
        "Jessica Jones",
        "Bullseye"
      ]
    }
  },
  "Luke Cage": {
    "color": "#FFD700",
    "action": "Unbreakable Skin",
    "firstAppearance": "street-easy",
    "beats": {
      "street-easy": [
        "Grant Ward",
        "Echo",
        "Kate Bishop"
      ],
      "street-medium": [
        "Echo",
        "Elektra",
        "Kate Bishop",
        "Mockingbird",
        "Phil Coulson",
        "White Tiger",
        "The Swordsman"
      ],
      "street-hard": [
        "Echo",
        "Elektra",
        "Kate Bishop",
        "Mockingbird",
        "Phil Coulson",
        "White Tiger",
        "The Swordsman"
      ]
    }
  },
  "Grant Ward": {
    "color": "#2F4F4F",
    "action": "Combat Training",
    "firstAppearance": "street-easy",
    "beats": {
      "street-easy": [
        "Echo",
        "Kate Bishop",
        "Mockingbird"
      ],
      "street-medium": [
        "Purple Man",
        "Daredevil",
        "Cottonmouth",
        "Kingpin",
        "Jessica Jones",
        "Bullseye",
        "Luke Cage"
      ],
      "street-hard": [
        "Purple Man",
        "Daredevil",
        "Cottonmouth",
        "Kingpin",
        "Jessica Jones",
        "Bullseye",
        "Luke Cage"
      ]
    }
  },
  "Echo": {
    "color": "#8B4513",
    "action": "Mimic Strike",
    "firstAppearance": "street-easy",
    "beats": {
      "street-easy": [
        "Kate Bishop",
        "Mockingbird",
        "The Swordsman"
      ],
      "street-medium": [
        "Elektra",
        "Kate Bishop",
        "Mockingbird",
        "Phil Coulson",
        "White Tiger",
        "The Swordsman",
        "Madame Gao"
      ],
      "street-hard": [
        "Elektra",
        "Kate Bishop",
        "Mockingbird",
        "Phil Coulson",
        "White Tiger",
        "The Swordsman",
        "Madame Gao"
      ]
    }
  },
  "Kate Bishop": {
    "color": "#663399",
    "action": "Trick Arrows",
    "firstAppearance": "street-easy",
    "beats": {
      "street-easy": [
        "Mockingbird",
        "The Swordsman",
        "Madame Gao"
      ],
      "street-medium": [
        "Mockingbird",
        "Phil Coulson",
        "White Tiger",
        "The Swordsman",
        "Madame Gao",
        "Grant Ward",
        "Purple Man"
      ],
      "street-hard": [
        "Mockingbird",
        "Phil Coulson",
        "White Tiger",
        "The Swordsman",
        "Madame Gao",
        "Grant Ward",
        "Purple Man"
      ]
    }
  },
  "Mockingbird": {
    "color": "#4169E1",
    "action": "Battle Staves",
    "firstAppearance": "street-easy",
    "beats": {
      "street-easy": [
        "The Swordsman",
        "Madame Gao",
        "Luke Cage"
      ],
      "street-medium": [
        "Phil Coulson",
        "White Tiger",
        "The Swordsman",
        "Madame Gao",
        "Grant Ward",
        "Purple Man",
        "Daredevil"
      ],
      "street-hard": [
        "Phil Coulson",
        "White Tiger",
        "The Swordsman",
        "Madame Gao",
        "Grant Ward",
        "Purple Man",
        "Daredevil"
      ]
    }
  },
  "Phil Coulson": {
    "color": "#0A3161",
    "action": "Tactical Genius",
    "firstAppearance": "street-medium",
    "beats": {
      "street-medium": [
        "White Tiger",
        "The Swordsman",
        "Madame Gao",
        "Grant Ward",
        "Purple Man",
        "Daredevil",
        "Cottonmouth"
      ],
      "street-hard": [
        "White Tiger",
        "The Swordsman",
        "Madame Gao",
        "Grant Ward",
        "Purple Man",
        "Daredevil",
        "Cottonmouth"
      ]
    }
  },
  "White Tiger": {
    "color": "#FFFFFF",
    "action": "Chi Power",
    "firstAppearance": "street-medium",
    "beats": {
      "street-medium": [
        "The Swordsman",
        "Madame Gao",
        "Grant Ward",
        "Purple Man",
        "Daredevil",
        "Cottonmouth",
        "Kingpin"
      ],
      "street-hard": [
        "The Swordsman",
        "Madame Gao",
        "Grant Ward",
        "Purple Man",
        "Daredevil",
        "Cottonmouth",
        "Kingpin"
      ]
    }
  },
  "Purple Man": {
    "color": "#663399",
    "action": "Mind Control",
    "firstAppearance": "street-medium",
    "beats": {
      "street-medium": [
        "Daredevil",
        "Cottonmouth",
        "Kingpin",
        "Jessica Jones",
        "Bullseye",
        "Luke Cage",
        "Echo"
      ],
      "street-hard": [
        "Daredevil",
        "Cottonmouth",
        "Kingpin",
        "Jessica Jones",
        "Bullseye",
        "Luke Cage",
        "Echo"
      ]
    }
  },
  "Daredevil": {
    "color": "#8B0000",
    "action": "Radar Sense",
    "firstAppearance": "street-medium",
    "beats": {
      "street-medium": [
        "Cottonmouth",
        "Kingpin",
        "Jessica Jones",
        "Bullseye",
        "Luke Cage",
        "Echo",
        "Elektra"
      ],
      "street-hard": [
        "Cottonmouth",
        "Kingpin",
        "Jessica Jones",
        "Bullseye",
        "Luke Cage",
        "Echo",
        "Elektra"
      ]
    }
  },
  "Cottonmouth": {
    "color": "#2F4F2F",
    "action": "Sonic Scream",
    "firstAppearance": "street-medium",
    "beats": {
      "street-medium": [
        "Kingpin",
        "Jessica Jones",
        "Bullseye",
        "Luke Cage",
        "Echo",
        "Elektra",
        "Kate Bishop"
      ],
      "street-hard": [
        "Kingpin",
        "Jessica Jones",
        "Bullseye",
        "Luke Cage",
        "Echo",
        "Elektra",
        "Kate Bishop"
      ]
    }
  },
  "Kingpin": {
    "color": "#1A1A1A",
    "action": "Brute Force",
    "firstAppearance": "street-medium",
    "beats": {
      "street-medium": [
        "Jessica Jones",
        "Bullseye",
        "Luke Cage",
        "Echo",
        "Elektra",
        "Kate Bishop",
        "Mockingbird"
      ],
      "street-hard": [
        "Jessica Jones",
        "Bullseye",
        "Luke Cage",
        "Echo",
        "Elektra",
        "Kate Bishop",
        "Mockingbird"
      ]
    }
  },
  "Jessica Jones": {
    "color": "#800080",
    "action": "Super Strength",
    "firstAppearance": "street-medium",
    "beats": {
      "street-medium": [
        "Bullseye",
        "Luke Cage",
        "Echo",
        "Elektra",
        "Kate Bishop",
        "Mockingbird",
        "Phil Coulson"
      ],
      "street-hard": [
        "Bullseye",
        "Luke Cage",
        "Echo",
        "Elektra",
        "Kate Bishop",
        "Mockingbird",
        "Phil Coulson"
      ]
    }
  },
  "Bullseye": {
    "color": "#000000",
    "action": "Perfect Aim",
    "firstAppearance": "street-medium",
    "beats": {
      "street-medium": [
        "Luke Cage",
        "Echo",
        "Elektra",
        "Kate Bishop",
        "Mockingbird",
        "Phil Coulson",
        "White Tiger"
      ],
      "street-hard": [
        "Luke Cage",
        "Echo",
        "Elektra",
        "Kate Bishop",
        "Mockingbird",
        "Phil Coulson",
        "White Tiger"
      ]
    }
  },
  "Elektra": {
    "color": "#8B0000",
    "action": "Ninja Strikes",
    "firstAppearance": "street-medium",
    "beats": {
      "street-medium": [
        "Kate Bishop",
        "Mockingbird",
        "Phil Coulson",
        "White Tiger",
        "The Swordsman",
        "Madame Gao",
        "Grant Ward"
      ],
      "street-hard": [
        "Kate Bishop",
        "Mockingbird",
        "Phil Coulson",
        "White Tiger",
        "The Swordsman",
        "Madame Gao",
        "Grant Ward"
      ]
    }
  },
  "Crossbones": {
    "color": "#2F4F4F",
    "action": "Brute Strength",
    "firstAppearance": "skilled-easy",
    "beats": {
      "skilled-easy": [
        "Ulysses Klaue",
        "Hawkeye",
        "Baron Zemo"
      ],
      "skilled-medium": [
        "Ulysses Klaue",
        "Baron Zemo",
        "Gamora",
        "Corvus Glaive",
        "Hawkeye"
      ],
      "skilled-hard": [
        "Ulysses Klaue",
        "Baron Zemo",
        "Corvus Glaive",
        "Shang-Chi",
        "Killmonger",
        "Proxima Midnight",
        "Gamora"
      ]
    }
  },
  "Ulysses Klaue": {
    "color": "#FF4500",
    "action": "Sonic Blast",
    "firstAppearance": "skilled-easy",
    "beats": {
      "skilled-easy": [
        "Hawkeye",
        "Baron Zemo",
        "Nick Fury"
      ],
      "skilled-medium": [
        "Baron Zemo",
        "Gamora",
        "Corvus Glaive",
        "Hawkeye",
        "Killmonger"
      ],
      "skilled-hard": [
        "Baron Zemo",
        "Corvus Glaive",
        "Shang-Chi",
        "Killmonger",
        "Proxima Midnight",
        "Gamora",
        "The Mandarin"
      ]
    }
  },
  "Hawkeye": {
    "color": "#663399",
    "action": "Perfect Shot",
    "firstAppearance": "skilled-easy",
    "beats": {
      "skilled-easy": [
        "Baron Zemo",
        "Nick Fury",
        "Falcon"
      ],
      "skilled-medium": [
        "Killmonger",
        "Power Broker",
        "Falcon",
        "Black Widow",
        "Okoye"
      ],
      "skilled-hard": [
        "Taskmaster",
        "Power Broker",
        "Falcon",
        "Black Widow",
        "Okoye",
        "Rocket Raccoon",
        "Crossbones"
      ]
    }
  },
  "Baron Zemo": {
    "color": "#800080",
    "action": "Strategic Mind",
    "firstAppearance": "skilled-easy",
    "beats": {
      "skilled-easy": [
        "Nick Fury",
        "Falcon",
        "Black Widow"
      ],
      "skilled-medium": [
        "Gamora",
        "Corvus Glaive",
        "Hawkeye",
        "Killmonger",
        "Power Broker"
      ],
      "skilled-hard": [
        "Corvus Glaive",
        "Shang-Chi",
        "Killmonger",
        "Proxima Midnight",
        "Gamora",
        "The Mandarin",
        "Hawkeye"
      ]
    }
  },
  "Nick Fury": {
    "color": "#000000",
    "action": "Spy Network",
    "firstAppearance": "skilled-easy",
    "beats": {
      "skilled-easy": [
        "Falcon",
        "Black Widow",
        "Crossbones"
      ]
    }
  },
  "Falcon": {
    "color": "#8B0000",
    "action": "Aerial Strike",
    "firstAppearance": "skilled-easy",
    "beats": {
      "skilled-easy": [
        "Black Widow",
        "Crossbones",
        "Ulysses Klaue"
      ],
      "skilled-medium": [
        "Black Widow",
        "Okoye",
        "Crossbones",
        "Ulysses Klaue",
        "Baron Zemo"
      ],
      "skilled-hard": [
        "Black Widow",
        "Okoye",
        "Rocket Raccoon",
        "Crossbones",
        "Ulysses Klaue",
        "Baron Zemo",
        "Corvus Glaive"
      ]
    }
  },
  "Black Widow": {
    "color": "#000000",
    "action": "Spy Mastery",
    "firstAppearance": "skilled-easy",
    "beats": {
      "skilled-easy": [
        "Crossbones",
        "Ulysses Klaue",
        "Hawkeye"
      ],
      "skilled-medium": [
        "Okoye",
        "Crossbones",
        "Ulysses Klaue",
        "Baron Zemo",
        "Gamora"
      ],
      "skilled-hard": [
        "Okoye",
        "Rocket Raccoon",
        "Crossbones",
        "Ulysses Klaue",
        "Baron Zemo",
        "Corvus Glaive",
        "Shang-Chi"
      ]
    }
  },
  "Okoye": {
    "color": "#8B0000",
    "action": "Warrior Pride",
    "firstAppearance": "skilled-medium",
    "beats": {
      "skilled-medium": [
        "Crossbones",
        "Ulysses Klaue",
        "Baron Zemo",
        "Gamora",
        "Corvus Glaive"
      ],
      "skilled-hard": [
        "Rocket Raccoon",
        "Crossbones",
        "Ulysses Klaue",
        "Baron Zemo",
        "Corvus Glaive",
        "Shang-Chi",
        "Killmonger"
      ]
    }
  },
  "Gamora": {
    "color": "#228B22",
    "action": "Blade Dance",
    "firstAppearance": "skilled-medium",
    "beats": {
      "skilled-medium": [
        "Corvus Glaive",
        "Hawkeye",
        "Killmonger",
        "Power Broker",
        "Falcon"
      ],
      "skilled-hard": [
        "The Mandarin",
        "Hawkeye",
        "Taskmaster",
        "Power Broker",
        "Falcon",
        "Black Widow",
        "Okoye"
      ]
    }
  },
  "Corvus Glaive": {
    "color": "#000080",
    "action": "Weapon Master",
    "firstAppearance": "skilled-medium",
    "beats": {
      "skilled-medium": [
        "Hawkeye",
        "Killmonger",
        "Power Broker",
        "Falcon",
        "Black Widow"
      ],
      "skilled-hard": [
        "Shang-Chi",
        "Killmonger",
        "Proxima Midnight",
        "Gamora",
        "The Mandarin",
        "Hawkeye",
        "Taskmaster"
      ]
    }
  },
  "Killmonger": {
    "color": "#FFD700",
    "action": "Combat Fury",
    "firstAppearance": "skilled-medium",
    "beats": {
      "skilled-medium": [
        "Power Broker",
        "Falcon",
        "Black Widow",
        "Okoye",
        "Crossbones"
      ],
      "skilled-hard": [
        "Proxima Midnight",
        "Gamora",
        "The Mandarin",
        "Hawkeye",
        "Taskmaster",
        "Power Broker",
        "Falcon"
      ]
    }
  },
  "Power Broker": {
    "color": "#8B0000",
    "action": "Power Surge",
    "firstAppearance": "skilled-medium",
    "beats": {
      "skilled-medium": [
        "Falcon",
        "Black Widow",
        "Okoye",
        "Crossbones",
        "Ulysses Klaue"
      ],
      "skilled-hard": [
        "Falcon",
        "Black Widow",
        "Okoye",
        "Rocket Raccoon",
        "Crossbones",
        "Ulysses Klaue",
        "Baron Zemo"
      ]
    }
  },
  "Rocket Raccoon": {
    "color": "#8B4513",
    "action": "Heavy Arsenal",
    "firstAppearance": "skilled-hard",
    "beats": {
      "skilled-hard": [
        "Crossbones",
        "Ulysses Klaue",
        "Baron Zemo",
        "Corvus Glaive",
        "Shang-Chi",
        "Killmonger",
        "Proxima Midnight"
      ]
    }
  },
  "Shang-Chi": {
    "color": "#FFD700",
    "action": "Kung Fu",
    "firstAppearance": "skilled-hard",
    "beats": {
      "skilled-hard": [
        "Killmonger",
        "Proxima Midnight",
        "Gamora",
        "The Mandarin",
        "Hawkeye",
        "Taskmaster",
        "Power Broker"
      ]
    }
  },
  "Proxima Midnight": {
    "color": "#000080",
    "action": "Spear Strike",
    "firstAppearance": "skilled-hard",
    "beats": {
      "skilled-hard": [
        "Gamora",
        "The Mandarin",
        "Hawkeye",
        "Taskmaster",
        "Power Broker",
        "Falcon",
        "Black Widow"
      ]
    }
  },
  "The Mandarin": {
    "color": "#228B22",
    "action": "Ten Rings",
    "firstAppearance": "skilled-hard",
    "beats": {
      "skilled-hard": [
        "Hawkeye",
        "Taskmaster",
        "Power Broker",
        "Falcon",
        "Black Widow",
        "Okoye",
        "Rocket Raccoon"
      ]
    }
  },
  "Taskmaster": {
    "color": "#FF8C00",
    "action": "Combat Mimic",
    "firstAppearance": "skilled-hard",
    "beats": {
      "skilled-hard": [
        "Power Broker",
        "Falcon",
        "Black Widow",
        "Okoye",
        "Rocket Raccoon",
        "Crossbones",
        "Ulysses Klaue"
      ]
    }
  },
  "Whiplash": {
    "color": "#FFD700",
    "action": "Arc Whips",
    "firstAppearance": "tech-easy",
    "beats": {
      "tech-easy": [
        "Yellowjacket",
        "Ant-Man",
        "Arnim Zola"
      ],
      "tech-medium": [
        "Yellowjacket",
        "Arnim Zola",
        "Ghost",
        "The Wasp",
        "Mysterio"
      ],
      "tech-hard": [
        "Yellowjacket",
        "Arnim Zola",
        "Ghost",
        "White Vision",
        "Mysterio",
        "M.O.D.O.K.",
        "The Wasp"
      ]
    }
  },
  "Yellowjacket": {
    "color": "#FFD700",
    "action": "Shrink Attack",
    "firstAppearance": "tech-easy",
    "beats": {
      "tech-easy": [
        "Ant-Man",
        "Arnim Zola",
        "Hank Pym"
      ],
      "tech-medium": [
        "Arnim Zola",
        "Ghost",
        "The Wasp",
        "Mysterio",
        "Ant-Man"
      ],
      "tech-hard": [
        "Arnim Zola",
        "Ghost",
        "White Vision",
        "Mysterio",
        "M.O.D.O.K.",
        "The Wasp",
        "Ultron"
      ]
    }
  },
  "Ant-Man": {
    "color": "#DC143C",
    "action": "Size Shift",
    "firstAppearance": "tech-easy",
    "beats": {
      "tech-easy": [
        "Arnim Zola",
        "Hank Pym",
        "Iron Man"
      ],
      "tech-medium": [
        "The Collector",
        "Hank Pym",
        "Iron Man",
        "Shuri",
        "Nebula"
      ],
      "tech-hard": [
        "The Grandmaster",
        "Hank Pym",
        "Iron Man",
        "Shuri",
        "Nebula",
        "Ironheart",
        "Whiplash"
      ]
    }
  },
  "Arnim Zola": {
    "color": "#228B22",
    "action": "Digital Mind",
    "firstAppearance": "tech-easy",
    "beats": {
      "tech-easy": [
        "Hank Pym",
        "Iron Man",
        "Shuri"
      ],
      "tech-medium": [
        "Ghost",
        "The Wasp",
        "Mysterio",
        "Ant-Man",
        "The Collector"
      ],
      "tech-hard": [
        "Ghost",
        "White Vision",
        "Mysterio",
        "M.O.D.O.K.",
        "The Wasp",
        "Ultron",
        "Ant-Man"
      ]
    }
  },
  "Hank Pym": {
    "color": "#DC143C",
    "action": "Pym Particles",
    "firstAppearance": "tech-easy",
    "beats": {
      "tech-easy": [
        "Iron Man",
        "Shuri",
        "Whiplash"
      ],
      "tech-medium": [
        "Iron Man",
        "Shuri",
        "Nebula",
        "Whiplash",
        "Yellowjacket"
      ],
      "tech-hard": [
        "Iron Man",
        "Shuri",
        "Nebula",
        "Ironheart",
        "Whiplash",
        "Yellowjacket",
        "Arnim Zola"
      ]
    }
  },
  "Iron Man": {
    "color": "#C8102E",
    "action": "Repulsor Rays",
    "firstAppearance": "tech-easy",
    "beats": {
      "tech-easy": [
        "Shuri",
        "Whiplash",
        "Yellowjacket"
      ],
      "tech-medium": [
        "Shuri",
        "Nebula",
        "Whiplash",
        "Yellowjacket",
        "Arnim Zola"
      ],
      "tech-hard": [
        "Shuri",
        "Nebula",
        "Ironheart",
        "Whiplash",
        "Yellowjacket",
        "Arnim Zola",
        "Ghost"
      ]
    }
  },
  "Shuri": {
    "color": "#663399",
    "action": "Vibranium Tech",
    "firstAppearance": "tech-easy",
    "beats": {
      "tech-easy": [
        "Whiplash",
        "Yellowjacket",
        "Ant-Man"
      ],
      "tech-medium": [
        "Nebula",
        "Whiplash",
        "Yellowjacket",
        "Arnim Zola",
        "Ghost"
      ],
      "tech-hard": [
        "Nebula",
        "Ironheart",
        "Whiplash",
        "Yellowjacket",
        "Arnim Zola",
        "Ghost",
        "White Vision"
      ]
    }
  },
  "Nebula": {
    "color": "#4169E1",
    "action": "Cyber Strike",
    "firstAppearance": "tech-medium",
    "beats": {
      "tech-medium": [
        "Whiplash",
        "Yellowjacket",
        "Arnim Zola",
        "Ghost",
        "The Wasp"
      ],
      "tech-hard": [
        "Ironheart",
        "Whiplash",
        "Yellowjacket",
        "Arnim Zola",
        "Ghost",
        "White Vision",
        "Mysterio"
      ]
    }
  },
  "Ghost": {
    "color": "#FFFFFF",
    "action": "Phase Shift",
    "firstAppearance": "tech-medium",
    "beats": {
      "tech-medium": [
        "The Wasp",
        "Mysterio",
        "Ant-Man",
        "The Collector",
        "Hank Pym"
      ],
      "tech-hard": [
        "White Vision",
        "Mysterio",
        "M.O.D.O.K.",
        "The Wasp",
        "Ultron",
        "Ant-Man",
        "The Grandmaster"
      ]
    }
  },
  "The Wasp": {
    "color": "#FFD700",
    "action": "Wasp Sting",
    "firstAppearance": "tech-medium",
    "beats": {
      "tech-medium": [
        "Mysterio",
        "Ant-Man",
        "The Collector",
        "Hank Pym",
        "Iron Man"
      ],
      "tech-hard": [
        "Ultron",
        "Ant-Man",
        "The Grandmaster",
        "Hank Pym",
        "Iron Man",
        "Shuri",
        "Nebula"
      ]
    }
  },
  "Mysterio": {
    "color": "#228B22",
    "action": "Illusion Tech",
    "firstAppearance": "tech-medium",
    "beats": {
      "tech-medium": [
        "Ant-Man",
        "The Collector",
        "Hank Pym",
        "Iron Man",
        "Shuri"
      ],
      "tech-hard": [
        "M.O.D.O.K.",
        "The Wasp",
        "Ultron",
        "Ant-Man",
        "The Grandmaster",
        "Hank Pym",
        "Iron Man"
      ]
    }
  },
  "The Collector": {
    "color": "#FFD700",
    "action": "Reality Gems",
    "firstAppearance": "tech-medium",
    "beats": {
      "tech-medium": [
        "Hank Pym",
        "Iron Man",
        "Shuri",
        "Nebula",
        "Whiplash"
      ]
    }
  },
  "Ironheart": {
    "color": "#8B0000",
    "action": "Armor Tech",
    "firstAppearance": "tech-hard",
    "beats": {
      "tech-hard": [
        "Whiplash",
        "Yellowjacket",
        "Arnim Zola",
        "Ghost",
        "White Vision",
        "Mysterio",
        "M.O.D.O.K."
      ]
    }
  },
  "White Vision": {
    "color": "#FFFFFF",
    "action": "Synthezoid",
    "firstAppearance": "tech-hard",
    "beats": {
      "tech-hard": [
        "Mysterio",
        "M.O.D.O.K.",
        "The Wasp",
        "Ultron",
        "Ant-Man",
        "The Grandmaster",
        "Hank Pym"
      ]
    }
  },
  "M.O.D.O.K.": {
    "color": "#FFD700",
    "action": "Mental Power",
    "firstAppearance": "tech-hard",
    "beats": {
      "tech-hard": [
        "The Wasp",
        "Ultron",
        "Ant-Man",
        "The Grandmaster",
        "Hank Pym",
        "Iron Man",
        "Shuri"
      ]
    }
  },
  "Ultron": {
    "color": "#C0C0C0",
    "action": "Robot Army",
    "firstAppearance": "tech-hard",
    "beats": {
      "tech-hard": [
        "Ant-Man",
        "The Grandmaster",
        "Hank Pym",
        "Iron Man",
        "Shuri",
        "Nebula",
        "Ironheart"
      ]
    }
  },
  "The Grandmaster": {
    "color": "#4169E1",
    "action": "Contest Master",
    "firstAppearance": "tech-hard",
    "beats": {
      "tech-hard": [
        "Hank Pym",
        "Iron Man",
        "Shuri",
        "Nebula",
        "Ironheart",
        "Whiplash",
        "Yellowjacket"
      ]
    }
  },
  "Red Skull": {
    "color": "#8B0000",
    "action": "Hydra Strike",
    "firstAppearance": "enhanced-easy",
    "beats": {
      "enhanced-easy": [
        "Abomination",
        "Hulk",
        "Green Goblin"
      ],
      "enhanced-medium": [
        "Abomination",
        "Green Goblin",
        "Wolverine",
        "Juggernaut",
        "Hulk"
      ],
      "enhanced-hard": [
        "Abomination",
        "Green Goblin",
        "Juggernaut",
        "Scarlet Witch",
        "Ronan the Accuser",
        "Apocalypse",
        "Wolverine"
      ]
    }
  },
  "Abomination": {
    "color": "#6B8E23",
    "action": "Gamma Fury",
    "firstAppearance": "enhanced-easy",
    "beats": {
      "enhanced-easy": [
        "Hulk",
        "Green Goblin",
        "Venom"
      ],
      "enhanced-medium": [
        "Green Goblin",
        "Wolverine",
        "Juggernaut",
        "Hulk",
        "Ronan the Accuser"
      ],
      "enhanced-hard": [
        "Green Goblin",
        "Juggernaut",
        "Scarlet Witch",
        "Ronan the Accuser",
        "Apocalypse",
        "Wolverine",
        "Magneto"
      ]
    }
  },
  "Hulk": {
    "color": "#228B22",
    "action": "Gamma Smash",
    "firstAppearance": "enhanced-easy",
    "beats": {
      "enhanced-easy": [
        "Green Goblin",
        "Venom",
        "Spider-Man"
      ],
      "enhanced-medium": [
        "Ronan the Accuser",
        "Deadpool",
        "Spider-Man",
        "Captain America",
        "Groot"
      ],
      "enhanced-hard": [
        "Deadpool",
        "The Sentry",
        "Spider-Man",
        "Captain America",
        "Groot",
        "Professor X",
        "Red Skull"
      ]
    }
  },
  "Green Goblin": {
    "color": "#228B22",
    "action": "Pumpkin Bombs",
    "firstAppearance": "enhanced-easy",
    "beats": {
      "enhanced-easy": [
        "Venom",
        "Spider-Man",
        "Captain America"
      ],
      "enhanced-medium": [
        "Wolverine",
        "Juggernaut",
        "Hulk",
        "Ronan the Accuser",
        "Deadpool"
      ],
      "enhanced-hard": [
        "Juggernaut",
        "Scarlet Witch",
        "Ronan the Accuser",
        "Apocalypse",
        "Wolverine",
        "Magneto",
        "Hulk"
      ]
    }
  },
  "Venom": {
    "color": "#0D0D0D",
    "action": "Symbiote Wrap",
    "firstAppearance": "enhanced-easy",
    "beats": {
      "enhanced-easy": [
        "Spider-Man",
        "Captain America",
        "Red Skull"
      ]
    }
  },
  "Spider-Man": {
    "color": "#DF1F2D",
    "action": "Web Swing",
    "firstAppearance": "enhanced-easy",
    "beats": {
      "enhanced-easy": [
        "Captain America",
        "Red Skull",
        "Abomination"
      ],
      "enhanced-medium": [
        "Captain America",
        "Groot",
        "Red Skull",
        "Abomination",
        "Green Goblin"
      ],
      "enhanced-hard": [
        "Captain America",
        "Groot",
        "Professor X",
        "Red Skull",
        "Abomination",
        "Green Goblin",
        "Juggernaut"
      ]
    }
  },
  "Captain America": {
    "color": "#0A3161",
    "action": "Shield Throw",
    "firstAppearance": "enhanced-easy",
    "beats": {
      "enhanced-easy": [
        "Red Skull",
        "Abomination",
        "Hulk"
      ],
      "enhanced-medium": [
        "Groot",
        "Red Skull",
        "Abomination",
        "Green Goblin",
        "Wolverine"
      ],
      "enhanced-hard": [
        "Groot",
        "Professor X",
        "Red Skull",
        "Abomination",
        "Green Goblin",
        "Juggernaut",
        "Scarlet Witch"
      ]
    }
  },
  "Groot": {
    "color": "#8B4513",
    "action": "Wood Growth",
    "firstAppearance": "enhanced-medium",
    "beats": {
      "enhanced-medium": [
        "Red Skull",
        "Abomination",
        "Green Goblin",
        "Wolverine",
        "Juggernaut"
      ],
      "enhanced-hard": [
        "Professor X",
        "Red Skull",
        "Abomination",
        "Green Goblin",
        "Juggernaut",
        "Scarlet Witch",
        "Ronan the Accuser"
      ]
    }
  },
  "Wolverine": {
    "color": "#FFD700",
    "action": "Adamantium Claws",
    "firstAppearance": "enhanced-medium",
    "beats": {
      "enhanced-medium": [
        "Juggernaut",
        "Hulk",
        "Ronan the Accuser",
        "Deadpool",
        "Spider-Man"
      ],
      "enhanced-hard": [
        "Magneto",
        "Hulk",
        "Deadpool",
        "The Sentry",
        "Spider-Man",
        "Captain America",
        "Groot"
      ]
    }
  },
  "Juggernaut": {
    "color": "#8B4513",
    "action": "Unstoppable Force",
    "firstAppearance": "enhanced-medium",
    "beats": {
      "enhanced-medium": [
        "Hulk",
        "Ronan the Accuser",
        "Deadpool",
        "Spider-Man",
        "Captain America"
      ],
      "enhanced-hard": [
        "Scarlet Witch",
        "Ronan the Accuser",
        "Apocalypse",
        "Wolverine",
        "Magneto",
        "Hulk",
        "Deadpool"
      ]
    }
  },
  "Ronan the Accuser": {
    "color": "#000080",
    "action": "Universal Weapon",
    "firstAppearance": "enhanced-medium",
    "beats": {
      "enhanced-medium": [
        "Deadpool",
        "Spider-Man",
        "Captain America",
        "Groot",
        "Red Skull"
      ],
      "enhanced-hard": [
        "Apocalypse",
        "Wolverine",
        "Magneto",
        "Hulk",
        "Deadpool",
        "The Sentry",
        "Spider-Man"
      ]
    }
  },
  "Deadpool": {
    "color": "#DC143C",
    "action": "Chaos Strike",
    "firstAppearance": "enhanced-medium",
    "beats": {
      "enhanced-medium": [
        "Spider-Man",
        "Captain America",
        "Groot",
        "Red Skull",
        "Abomination"
      ],
      "enhanced-hard": [
        "The Sentry",
        "Spider-Man",
        "Captain America",
        "Groot",
        "Professor X",
        "Red Skull",
        "Abomination"
      ]
    }
  },
  "Professor X": {
    "color": "#4B0082",
    "action": "Mind Control",
    "firstAppearance": "enhanced-hard",
    "beats": {
      "enhanced-hard": [
        "Red Skull",
        "Abomination",
        "Green Goblin",
        "Juggernaut",
        "Scarlet Witch",
        "Ronan the Accuser",
        "Apocalypse"
      ]
    }
  },
  "Scarlet Witch": {
    "color": "#DC143C",
    "action": "Chaos Magic",
    "firstAppearance": "enhanced-hard",
    "beats": {
      "enhanced-hard": [
        "Ronan the Accuser",
        "Apocalypse",
        "Wolverine",
        "Magneto",
        "Hulk",
        "Deadpool",
        "The Sentry"
      ]
    }
  },
  "Apocalypse": {
    "color": "#4B0082",
    "action": "Mutation Power",
    "firstAppearance": "enhanced-hard",
    "beats": {
      "enhanced-hard": [
        "Wolverine",
        "Magneto",
        "Hulk",
        "Deadpool",
        "The Sentry",
        "Spider-Man",
        "Captain America"
      ]
    }
  },
  "Magneto": {
    "color": "#8A2BE2",
    "action": "Metal Master",
    "firstAppearance": "enhanced-hard",
    "beats": {
      "enhanced-hard": [
        "Hulk",
        "Deadpool",
        "The Sentry",
        "Spider-Man",
        "Captain America",
        "Groot",
        "Professor X"
      ]
    }
  },
  "The Sentry": {
    "color": "#FFD700",
    "action": "Golden Power",
    "firstAppearance": "enhanced-hard",
    "beats": {
      "enhanced-hard": [
        "Spider-Man",
        "Captain America",
        "Groot",
        "Professor X",
        "Red Skull",
        "Abomination",
        "Green Goblin"
      ]
    }
  },
  "Malekith": {
    "color": "#2F4F4F",
    "action": "Dark Energy",
    "firstAppearance": "god-easy",
    "beats": {
      "god-easy": [
        "Kaecilius",
        "Valkyrie",
        "Hela"
      ],
      "god-medium": [
        "Kaecilius",
        "Hela",
        "Wong",
        "Dormammu",
        "Valkyrie"
      ],
      "god-hard": [
        "Kaecilius",
        "Hela",
        "Dormammu",
        "America Chavez",
        "The Supreme Intelligence",
        "Mephisto",
        "Wong"
      ]
    }
  },
  "Kaecilius": {
    "color": "#228B22",
    "action": "Dark Magic",
    "firstAppearance": "god-easy",
    "beats": {
      "god-easy": [
        "Valkyrie",
        "Hela",
        "Loki"
      ],
      "god-medium": [
        "Hela",
        "Wong",
        "Dormammu",
        "Valkyrie",
        "The Supreme Intelligence"
      ],
      "god-hard": [
        "Hela",
        "Dormammu",
        "America Chavez",
        "The Supreme Intelligence",
        "Mephisto",
        "Wong",
        "Gorr the God Butcher"
      ]
    }
  },
  "Valkyrie": {
    "color": "#FFFFFF",
    "action": "Dragonfang Blade",
    "firstAppearance": "god-easy",
    "beats": {
      "god-easy": [
        "Hela",
        "Loki",
        "Thor"
      ],
      "god-medium": [
        "The Supreme Intelligence",
        "The Ancient One",
        "Thor",
        "Doctor Strange",
        "Captain Marvel"
      ],
      "god-hard": [
        "Adam Warlock",
        "The Ancient One",
        "Thor",
        "Doctor Strange",
        "Captain Marvel",
        "Mighty Thor",
        "Malekith"
      ]
    }
  },
  "Hela": {
    "color": "#228B22",
    "action": "Death Touch",
    "firstAppearance": "god-easy",
    "beats": {
      "god-easy": [
        "Loki",
        "Thor",
        "Doctor Strange"
      ],
      "god-medium": [
        "Wong",
        "Dormammu",
        "Valkyrie",
        "The Supreme Intelligence",
        "The Ancient One"
      ],
      "god-hard": [
        "Dormammu",
        "America Chavez",
        "The Supreme Intelligence",
        "Mephisto",
        "Wong",
        "Gorr the God Butcher",
        "Valkyrie"
      ]
    }
  },
  "Loki": {
    "color": "#2D5016",
    "action": "Trickster Magic",
    "firstAppearance": "god-easy",
    "beats": {
      "god-easy": [
        "Thor",
        "Doctor Strange",
        "Malekith"
      ]
    }
  },
  "Thor": {
    "color": "#B0B0B0",
    "action": "Lightning Strike",
    "firstAppearance": "god-easy",
    "beats": {
      "god-easy": [
        "Doctor Strange",
        "Malekith",
        "Kaecilius"
      ],
      "god-medium": [
        "Doctor Strange",
        "Captain Marvel",
        "Malekith",
        "Kaecilius",
        "Hela"
      ],
      "god-hard": [
        "Doctor Strange",
        "Captain Marvel",
        "Mighty Thor",
        "Malekith",
        "Kaecilius",
        "Hela",
        "Dormammu"
      ]
    }
  },
  "Doctor Strange": {
    "color": "#1B4B8C",
    "action": "Time Stone",
    "firstAppearance": "god-easy",
    "beats": {
      "god-easy": [
        "Malekith",
        "Kaecilius",
        "Valkyrie"
      ],
      "god-medium": [
        "Captain Marvel",
        "Malekith",
        "Kaecilius",
        "Hela",
        "Wong"
      ],
      "god-hard": [
        "Captain Marvel",
        "Mighty Thor",
        "Malekith",
        "Kaecilius",
        "Hela",
        "Dormammu",
        "America Chavez"
      ]
    }
  },
  "Captain Marvel": {
    "color": "#DC143C",
    "action": "Binary Power",
    "firstAppearance": "god-medium",
    "beats": {
      "god-medium": [
        "Malekith",
        "Kaecilius",
        "Hela",
        "Wong",
        "Dormammu"
      ],
      "god-hard": [
        "Mighty Thor",
        "Malekith",
        "Kaecilius",
        "Hela",
        "Dormammu",
        "America Chavez",
        "The Supreme Intelligence"
      ]
    }
  },
  "Wong": {
    "color": "#FF8C00",
    "action": "Portal Magic",
    "firstAppearance": "god-medium",
    "beats": {
      "god-medium": [
        "Dormammu",
        "Valkyrie",
        "The Supreme Intelligence",
        "The Ancient One",
        "Thor"
      ],
      "god-hard": [
        "Gorr the God Butcher",
        "Valkyrie",
        "Adam Warlock",
        "The Ancient One",
        "Thor",
        "Doctor Strange",
        "Captain Marvel"
      ]
    }
  },
  "Dormammu": {
    "color": "#663399",
    "action": "Dark Dimension",
    "firstAppearance": "god-medium",
    "beats": {
      "god-medium": [
        "Valkyrie",
        "The Supreme Intelligence",
        "The Ancient One",
        "Thor",
        "Doctor Strange"
      ],
      "god-hard": [
        "America Chavez",
        "The Supreme Intelligence",
        "Mephisto",
        "Wong",
        "Gorr the God Butcher",
        "Valkyrie",
        "Adam Warlock"
      ]
    }
  },
  "The Supreme Intelligence": {
    "color": "#4169E1",
    "action": "Kree Mind",
    "firstAppearance": "god-medium",
    "beats": {
      "god-medium": [
        "The Ancient One",
        "Thor",
        "Doctor Strange",
        "Captain Marvel",
        "Malekith"
      ],
      "god-hard": [
        "Mephisto",
        "Wong",
        "Gorr the God Butcher",
        "Valkyrie",
        "Adam Warlock",
        "The Ancient One",
        "Thor"
      ]
    }
  },
  "The Ancient One": {
    "color": "#F5DEB3",
    "action": "Master Magic",
    "firstAppearance": "god-medium",
    "beats": {
      "god-medium": [
        "Thor",
        "Doctor Strange",
        "Captain Marvel",
        "Malekith",
        "Kaecilius"
      ],
      "god-hard": [
        "Thor",
        "Doctor Strange",
        "Captain Marvel",
        "Mighty Thor",
        "Malekith",
        "Kaecilius",
        "Hela"
      ]
    }
  },
  "Mighty Thor": {
    "color": "#B0B0B0",
    "action": "Mjolnir Power",
    "firstAppearance": "god-hard",
    "beats": {
      "god-hard": [
        "Malekith",
        "Kaecilius",
        "Hela",
        "Dormammu",
        "America Chavez",
        "The Supreme Intelligence",
        "Mephisto"
      ]
    }
  },
  "America Chavez": {
    "color": "#DF1F2D",
    "action": "Star Portals",
    "firstAppearance": "god-hard",
    "beats": {
      "god-hard": [
        "The Supreme Intelligence",
        "Mephisto",
        "Wong",
        "Gorr the God Butcher",
        "Valkyrie",
        "Adam Warlock",
        "The Ancient One"
      ]
    }
  },
  "Mephisto": {
    "color": "#DC143C",
    "action": "Hell Fire",
    "firstAppearance": "god-hard",
    "beats": {
      "god-hard": [
        "Wong",
        "Gorr the God Butcher",
        "Valkyrie",
        "Adam Warlock",
        "The Ancient One",
        "Thor",
        "Doctor Strange"
      ]
    }
  },
  "Gorr the God Butcher": {
    "color": "#2F4F4F",
    "action": "God Slayer",
    "firstAppearance": "god-hard",
    "beats": {
      "god-hard": [
        "Valkyrie",
        "Adam Warlock",
        "The Ancient One",
        "Thor",
        "Doctor Strange",
        "Captain Marvel",
        "Mighty Thor"
      ]
    }
  },
  "Adam Warlock": {
    "color": "#FFD700",
    "action": "Soul Stone",
    "firstAppearance": "god-hard",
    "beats": {
      "god-hard": [
        "The Ancient One",
        "Thor",
        "Doctor Strange",
        "Captain Marvel",
        "Mighty Thor",
        "Malekith",
        "Kaecilius"
      ]
    }
  },
  "Ego": {
    "color": "#4169E1",
    "action": "Living Planet",
    "firstAppearance": "cosmic-easy",
    "beats": {
      "cosmic-easy": [
        "Thanos",
        "Ajak",
        "Dark Phoenix"
      ],
      "cosmic-medium": [
        "Thanos",
        "Dark Phoenix",
        "Sersi",
        "Arishem",
        "Ajak"
      ],
      "cosmic-hard": [
        "Thanos",
        "Dark Phoenix",
        "Silver Surfer",
        "Arishem",
        "Doctor Doom",
        "Sersi",
        "Galactus"
      ]
    }
  },
  "Thanos": {
    "color": "#6A1B9A",
    "action": "Infinity Stones",
    "firstAppearance": "cosmic-easy",
    "beats": {
      "cosmic-easy": [
        "Ajak",
        "Dark Phoenix",
        "Uatu the Watcher"
      ],
      "cosmic-medium": [
        "Dark Phoenix",
        "Sersi",
        "Arishem",
        "Ajak",
        "Doctor Doom"
      ],
      "cosmic-hard": [
        "Dark Phoenix",
        "Silver Surfer",
        "Arishem",
        "Doctor Doom",
        "Sersi",
        "Galactus",
        "Ajak"
      ]
    }
  },
  "Ajak": {
    "color": "#4169E1",
    "action": "Celestial Power",
    "firstAppearance": "cosmic-easy",
    "beats": {
      "cosmic-easy": [
        "Dark Phoenix",
        "Uatu the Watcher",
        "Jean Grey (Phoenix Force)"
      ],
      "cosmic-medium": [
        "Doctor Doom",
        "The Living Tribunal",
        "Jean Grey (Phoenix Force)",
        "Nova",
        "Mr. Fantastic"
      ],
      "cosmic-hard": [
        "Knull",
        "The One Above All",
        "Jean Grey (Phoenix Force)",
        "Nova",
        "Mr. Fantastic",
        "Eternity",
        "Ego"
      ]
    }
  },
  "Dark Phoenix": {
    "color": "#DC143C",
    "action": "Dark Phoenix",
    "firstAppearance": "cosmic-easy",
    "beats": {
      "cosmic-easy": [
        "Uatu the Watcher",
        "Jean Grey (Phoenix Force)",
        "Nova"
      ],
      "cosmic-medium": [
        "Sersi",
        "Arishem",
        "Ajak",
        "Doctor Doom",
        "The Living Tribunal"
      ],
      "cosmic-hard": [
        "Silver Surfer",
        "Arishem",
        "Doctor Doom",
        "Sersi",
        "Galactus",
        "Ajak",
        "Knull"
      ]
    }
  },
  "Uatu the Watcher": {
    "color": "#F5F5DC",
    "action": "Cosmic Awareness",
    "firstAppearance": "cosmic-easy",
    "beats": {
      "cosmic-easy": [
        "Jean Grey (Phoenix Force)",
        "Nova",
        "Ego"
      ]
    }
  },
  "Jean Grey (Phoenix Force)": {
    "color": "#DC143C",
    "action": "Phoenix Fire",
    "firstAppearance": "cosmic-easy",
    "beats": {
      "cosmic-easy": [
        "Nova",
        "Ego",
        "Thanos"
      ],
      "cosmic-medium": [
        "Nova",
        "Mr. Fantastic",
        "Ego",
        "Thanos",
        "Dark Phoenix"
      ],
      "cosmic-hard": [
        "Nova",
        "Mr. Fantastic",
        "Eternity",
        "Ego",
        "Thanos",
        "Dark Phoenix",
        "Silver Surfer"
      ]
    }
  },
  "Nova": {
    "color": "#FFD700",
    "action": "Nova Force",
    "firstAppearance": "cosmic-easy",
    "beats": {
      "cosmic-easy": [
        "Ego",
        "Thanos",
        "Ajak"
      ],
      "cosmic-medium": [
        "Mr. Fantastic",
        "Ego",
        "Thanos",
        "Dark Phoenix",
        "Sersi"
      ],
      "cosmic-hard": [
        "Mr. Fantastic",
        "Eternity",
        "Ego",
        "Thanos",
        "Dark Phoenix",
        "Silver Surfer",
        "Arishem"
      ]
    }
  },
  "Mr. Fantastic": {
    "color": "#4682B4",
    "action": "Elastic Mind",
    "firstAppearance": "cosmic-medium",
    "beats": {
      "cosmic-medium": [
        "Ego",
        "Thanos",
        "Dark Phoenix",
        "Sersi",
        "Arishem"
      ],
      "cosmic-hard": [
        "Eternity",
        "Ego",
        "Thanos",
        "Dark Phoenix",
        "Silver Surfer",
        "Arishem",
        "Doctor Doom"
      ]
    }
  },
  "Sersi": {
    "color": "#228B22",
    "action": "Matter Control",
    "firstAppearance": "cosmic-medium",
    "beats": {
      "cosmic-medium": [
        "Arishem",
        "Ajak",
        "Doctor Doom",
        "The Living Tribunal",
        "Jean Grey (Phoenix Force)"
      ],
      "cosmic-hard": [
        "Galactus",
        "Ajak",
        "Knull",
        "The One Above All",
        "Jean Grey (Phoenix Force)",
        "Nova",
        "Mr. Fantastic"
      ]
    }
  },
  "Arishem": {
    "color": "#8B0000",
    "action": "Celestial Judge",
    "firstAppearance": "cosmic-medium",
    "beats": {
      "cosmic-medium": [
        "Ajak",
        "Doctor Doom",
        "The Living Tribunal",
        "Jean Grey (Phoenix Force)",
        "Nova"
      ],
      "cosmic-hard": [
        "Doctor Doom",
        "Sersi",
        "Galactus",
        "Ajak",
        "Knull",
        "The One Above All",
        "Jean Grey (Phoenix Force)"
      ]
    }
  },
  "Doctor Doom": {
    "color": "#2F4F4F",
    "action": "Mystic Tech",
    "firstAppearance": "cosmic-medium",
    "beats": {
      "cosmic-medium": [
        "The Living Tribunal",
        "Jean Grey (Phoenix Force)",
        "Nova",
        "Mr. Fantastic",
        "Ego"
      ],
      "cosmic-hard": [
        "Sersi",
        "Galactus",
        "Ajak",
        "Knull",
        "The One Above All",
        "Jean Grey (Phoenix Force)",
        "Nova"
      ]
    }
  },
  "The Living Tribunal": {
    "color": "#FFD700",
    "action": "Universal Law",
    "firstAppearance": "cosmic-medium",
    "beats": {
      "cosmic-medium": [
        "Jean Grey (Phoenix Force)",
        "Nova",
        "Mr. Fantastic",
        "Ego",
        "Thanos"
      ]
    }
  },
  "Eternity": {
    "color": "#663399",
    "action": "Time Control",
    "firstAppearance": "cosmic-hard",
    "beats": {
      "cosmic-hard": [
        "Ego",
        "Thanos",
        "Dark Phoenix",
        "Silver Surfer",
        "Arishem",
        "Doctor Doom",
        "Sersi"
      ]
    }
  },
  "Silver Surfer": {
    "color": "#C0C0C0",
    "action": "Power Cosmic",
    "firstAppearance": "cosmic-hard",
    "beats": {
      "cosmic-hard": [
        "Arishem",
        "Doctor Doom",
        "Sersi",
        "Galactus",
        "Ajak",
        "Knull",
        "The One Above All"
      ]
    }
  },
  "Galactus": {
    "color": "#663399",
    "action": "Planet Eater",
    "firstAppearance": "cosmic-hard",
    "beats": {
      "cosmic-hard": [
        "Ajak",
        "Knull",
        "The One Above All",
        "Jean Grey (Phoenix Force)",
        "Nova",
        "Mr. Fantastic",
        "Eternity"
      ]
    }
  },
  "Knull": {
    "color": "#000000",
    "action": "Void Power",
    "firstAppearance": "cosmic-hard",
    "beats": {
      "cosmic-hard": [
        "The One Above All",
        "Jean Grey (Phoenix Force)",
        "Nova",
        "Mr. Fantastic",
        "Eternity",
        "Ego",
        "Thanos"
      ]
    }
  },
  "The One Above All": {
    "color": "#FFFFFF",
    "action": "Omnipotence",
    "firstAppearance": "cosmic-hard",
    "beats": {
      "cosmic-hard": [
        "Jean Grey (Phoenix Force)",
        "Nova",
        "Mr. Fantastic",
        "Eternity",
        "Ego",
        "Thanos",
        "Dark Phoenix"
      ]
    }
  }
};

export const threatLevelRosters = {
  "street": {
    "easy": {
      "heroes": [
        "Kate Bishop",
        "Mockingbird",
        "Luke Cage"
      ],
      "villains": [
        "The Swordsman",
        "Madame Gao",
        "Grant Ward"
      ],
      "neutral": [
        "Echo"
      ]
    },
    "medium": {
      "heroes": [
        "Kate Bishop",
        "Mockingbird",
        "Luke Cage",
        "Jessica Jones",
        "Phil Coulson",
        "Daredevil",
        "White Tiger"
      ],
      "villains": [
        "The Swordsman",
        "Madame Gao",
        "Grant Ward",
        "Purple Man",
        "Cottonmouth",
        "Kingpin",
        "Bullseye"
      ],
      "neutral": [
        "Echo",
        "Elektra"
      ]
    },
    "hard": {
      "heroes": [
        "Kate Bishop",
        "Mockingbird",
        "Luke Cage",
        "Jessica Jones",
        "Phil Coulson",
        "Daredevil",
        "White Tiger"
      ],
      "villains": [
        "The Swordsman",
        "Madame Gao",
        "Grant Ward",
        "Purple Man",
        "Cottonmouth",
        "Kingpin",
        "Bullseye"
      ],
      "neutral": [
        "Echo",
        "Elektra"
      ]
    }
  },
  "skilled": {
    "easy": {
      "heroes": [
        "Black Widow",
        "Hawkeye",
        "Falcon"
      ],
      "villains": [
        "Crossbones",
        "Ulysses Klaue",
        "Baron Zemo"
      ],
      "neutral": [
        "Nick Fury"
      ]
    },
    "medium": {
      "heroes": [
        "Black Widow",
        "Hawkeye",
        "Falcon",
        "Gamora",
        "Okoye"
      ],
      "villains": [
        "Crossbones",
        "Ulysses Klaue",
        "Baron Zemo",
        "Corvus Glaive",
        "Killmonger"
      ],
      "neutral": [
        "Power Broker"
      ]
    },
    "hard": {
      "heroes": [
        "Black Widow",
        "Hawkeye",
        "Falcon",
        "Gamora",
        "Okoye",
        "Shang-Chi",
        "Rocket Raccoon"
      ],
      "villains": [
        "Crossbones",
        "Ulysses Klaue",
        "Baron Zemo",
        "Corvus Glaive",
        "Killmonger",
        "Proxima Midnight",
        "The Mandarin"
      ],
      "neutral": [
        "Taskmaster",
        "Power Broker"
      ]
    }
  },
  "tech": {
    "easy": {
      "heroes": [
        "Iron Man",
        "Ant-Man",
        "Shuri"
      ],
      "villains": [
        "Whiplash",
        "Yellowjacket",
        "Arnim Zola"
      ],
      "neutral": [
        "Hank Pym"
      ]
    },
    "medium": {
      "heroes": [
        "Iron Man",
        "Ant-Man",
        "Shuri",
        "The Wasp",
        "Nebula"
      ],
      "villains": [
        "Whiplash",
        "Yellowjacket",
        "Arnim Zola",
        "Ghost",
        "Mysterio"
      ],
      "neutral": [
        "The Collector",
        "Hank Pym"
      ]
    },
    "hard": {
      "heroes": [
        "Iron Man",
        "Ant-Man",
        "Shuri",
        "The Wasp",
        "Nebula",
        "White Vision",
        "Ironheart"
      ],
      "villains": [
        "Whiplash",
        "Yellowjacket",
        "Arnim Zola",
        "Ghost",
        "Mysterio",
        "M.O.D.O.K.",
        "Ultron"
      ],
      "neutral": [
        "The Grandmaster",
        "Hank Pym"
      ]
    }
  },
  "enhanced": {
    "easy": {
      "heroes": [
        "Captain America",
        "Hulk",
        "Spider-Man"
      ],
      "villains": [
        "Red Skull",
        "Abomination",
        "Green Goblin"
      ],
      "neutral": [
        "Venom"
      ]
    },
    "medium": {
      "heroes": [
        "Captain America",
        "Hulk",
        "Spider-Man",
        "Wolverine",
        "Groot"
      ],
      "villains": [
        "Red Skull",
        "Abomination",
        "Green Goblin",
        "Juggernaut",
        "Ronan the Accuser"
      ],
      "neutral": [
        "Deadpool"
      ]
    },
    "hard": {
      "heroes": [
        "Captain America",
        "Hulk",
        "Spider-Man",
        "Wolverine",
        "Groot",
        "Scarlet Witch",
        "Professor X"
      ],
      "villains": [
        "Red Skull",
        "Abomination",
        "Green Goblin",
        "Juggernaut",
        "Ronan the Accuser",
        "Apocalypse",
        "Magneto"
      ],
      "neutral": [
        "Deadpool",
        "The Sentry"
      ]
    }
  },
  "god": {
    "easy": {
      "heroes": [
        "Thor",
        "Doctor Strange",
        "Valkyrie"
      ],
      "villains": [
        "Malekith",
        "Kaecilius",
        "Hela"
      ],
      "neutral": [
        "Loki"
      ]
    },
    "medium": {
      "heroes": [
        "Thor",
        "Doctor Strange",
        "Valkyrie",
        "Wong",
        "Captain Marvel"
      ],
      "villains": [
        "Malekith",
        "Kaecilius",
        "Hela",
        "Dormammu",
        "The Supreme Intelligence"
      ],
      "neutral": [
        "The Ancient One"
      ]
    },
    "hard": {
      "heroes": [
        "Thor",
        "Doctor Strange",
        "Valkyrie",
        "Wong",
        "Captain Marvel",
        "America Chavez",
        "Mighty Thor"
      ],
      "villains": [
        "Malekith",
        "Kaecilius",
        "Hela",
        "Dormammu",
        "The Supreme Intelligence",
        "Mephisto",
        "Gorr the God Butcher"
      ],
      "neutral": [
        "Adam Warlock",
        "The Ancient One"
      ]
    }
  },
  "cosmic": {
    "easy": {
      "heroes": [
        "Nova",
        "Jean Grey (Phoenix Force)",
        "Ajak"
      ],
      "villains": [
        "Ego",
        "Thanos",
        "Dark Phoenix"
      ],
      "neutral": [
        "Uatu the Watcher"
      ]
    },
    "medium": {
      "heroes": [
        "Nova",
        "Jean Grey (Phoenix Force)",
        "Ajak",
        "Sersi",
        "Mr. Fantastic"
      ],
      "villains": [
        "Ego",
        "Thanos",
        "Dark Phoenix",
        "Arishem",
        "Doctor Doom"
      ],
      "neutral": [
        "The Living Tribunal"
      ]
    },
    "hard": {
      "heroes": [
        "Nova",
        "Jean Grey (Phoenix Force)",
        "Ajak",
        "Sersi",
        "Mr. Fantastic",
        "Silver Surfer",
        "Eternity"
      ],
      "villains": [
        "Ego",
        "Thanos",
        "Dark Phoenix",
        "Arishem",
        "Doctor Doom",
        "Galactus",
        "Knull"
      ],
      "neutral": [
        "The One Above All"
      ]
    }
  }
};
