/**
 * Game Mode Structure
 *
 * Defines the game flow:
 * 1. User selects Game Mode (Heroes, Villains, or Mixed)
 * 2. User selects Saga/Difficulty (Avengers, Infinity, or Multiverse)
 * 3. Character list is built based on selection
 */

export const gameData = {
  gameModes: {
    heroes: {
      name: "Heroes",
      description: "Play as the good guys of the MCU",
      sagas: {
        avengers: {
          name: "Avengers Saga",
          difficulty: 1,
          characterCount: 5,
          characterNames: [
            "Captain America",
            "Iron Man",
            "Thor",
            "Hulk",
            "Black Widow"
          ]
        },
        infinity: {
          name: "Infinity Saga",
          difficulty: 2,
          characterCount: 9,
          extends: "avengers",
          additionalCharacters: [
            "Spider-Man",
            "Dr. Strange",
            "Black Panther",
            "Scarlet Witch"
          ]
        },
        multiverse: {
          name: "Multiverse Saga",
          difficulty: 3,
          characterCount: 15,
          extends: "infinity",
          additionalCharacters: [
            "Hawk-Eye",
            "The Vision",
            "Star-Lord",
            "Ant-Man",
            "Captain Marvel",
            "Mr. Fantastic"
          ]
        }
      }
    },
    villains: {
      name: "Villains",
      description: "Play as the bad guys of the MCU",
      sagas: {
        avengers: {
          name: "Avengers Saga",
          difficulty: 1,
          characterCount: 5,
          characterNames: [
            "Loki",
            "Red Skull",
            "Ronan the Accuser",
            "Ultron",
            "Killmonger"
          ]
        },
        infinity: {
          name: "Infinity Saga",
          difficulty: 2,
          characterCount: 9,
          extends: "avengers",
          additionalCharacters: [
            "Thanos",
            "Hela",
            "Mysterio",
            "Venom"
          ]
        },
        multiverse: {
          name: "Multiverse Saga",
          difficulty: 3,
          characterCount: 15,
          extends: "infinity",
          additionalCharacters: [
            "Galactus",
            "Doctor Doom",
            "Magneto",
            "Doctor Octopus",
            "Green Goblin",
            "Kingpin"
          ]
        }
      }
    },
    mixed: {
      name: "Heroes vs Villains",
      description: "Play with both heroes and villains",
      sagas: {
        avengers: {
          name: "Avengers Saga",
          difficulty: 1,
          characterCount: 10,
          characterNames: [
            "Captain America",
            "Iron Man",
            "Thor",
            "Hulk",
            "Black Widow",
            "Loki",
            "Red Skull",
            "Ronan the Accuser",
            "Ultron",
            "Killmonger"
          ]
        },
        infinity: {
          name: "Infinity Saga",
          difficulty: 2,
          characterCount: 18,
          extends: "avengers",
          additionalCharacters: [
            "Spider-Man",
            "Dr. Strange",
            "Black Panther",
            "Scarlet Witch",
            "Thanos",
            "Hela",
            "Mysterio",
            "Venom"
          ]
        },
        multiverse: {
          name: "Multiverse Saga",
          difficulty: 3,
          characterCount: 31,
          extends: "infinity",
          additionalCharacters: [
            "Hawk-Eye",
            "The Vision",
            "Star-Lord",
            "Ant-Man",
            "Captain Marvel",
            "Mr. Fantastic",
            "Galactus",
            "Doctor Doom",
            "Magneto",
            "Doctor Octopus",
            "Green Goblin",
            "Kingpin",
            "The Watcher"
          ]
        }
      }
    }
  }
};
