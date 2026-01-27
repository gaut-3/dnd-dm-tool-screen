/**
 * Comprehensive D&D 2024 NPC Name Database
 * Culturally-accurate names for all PHB races and extended fantasy races
 * Each race has 25-30 names per gender category
 */

export interface RaceNames {
  female: string[];
  male: string[];
  neutral: string[];
  femaleSurnames: string[];
  maleSurnames: string[];
  neutralSurnames: string[];
}

export interface NPCNameDatabase {
  [raceName: string]: RaceNames;
}

export const npcNameDatabase: NPCNameDatabase = {
  human: {
    female: [
      "Aelia", "Brianna", "Cassandra", "Dorothea", "Elara", "Faye", "Gwendolyn", "Helena",
      "Iris", "Joanna", "Katherine", "Lydia", "Margot", "Nora", "Ophelia", "Phoebe",
      "Quinn", "Rosalind", "Sophia", "Thea", "Ursula", "Violet", "Winifred", "Xandra",
      "Yvonne", "Zelda", "Amelia", "Beatrice", "Celeste", "Delilah"
    ],
    male: [
      "Adrian", "Bartholomew", "Cedric", "Damien", "Edmund", "Frederick", "Garrett", "Henry",
      "Isidor", "Jonathan", "Kieran", "Leopold", "Marcus", "Nicholas", "Oliver", "Patrick",
      "Quentin", "Richard", "Samuel", "Theodore", "Ulrich", "Vincent", "William", "Xavier",
      "Yancy", "Zachary", "Alexander", "Benjamin", "Christopher", "Dimitri"
    ],
    neutral: [
      "Avery", "Blake", "Casey", "Drew", "Ellis", "Finley", "Grey", "Harper",
      "Indigo", "Jaden", "Kestrel", "London", "Morgan", "Noell", "Oscar", "Parker",
      "Quinn", "River", "Sandy", "Taylor", "Urban", "Vale", "Whitney", "Xander",
      "Yale", "Zephyr", "Angel", "Bailey", "Cameron", "Dakota"
    ],
    femaleSurnames: [
      "Ashford", "Blackwood", "Brightwell", "Castellan", "Clearwater", "Darrowfield", "Eastwick", "Fairweather",
      "Goldsmith", "Hartwell", "Ironside", "Jameson", "Kingsley", "Lockwood", "Meadows", "Northcote",
      "Oakley", "Pembroke", "Queensbury", "Rothschild", "Silverwood", "Thornfield", "Underwood", "Valence",
      "Westbrook", "Yarborough", "Ashton", "Blackwell", "Cordwell", "Drummond"
    ],
    maleSurnames: [
      "Ashford", "Blackwood", "Brightwell", "Castellan", "Clearwater", "Darrowfield", "Eastwick", "Fairweather",
      "Goldsmith", "Hartwell", "Ironside", "Jameson", "Kingsley", "Lockwood", "Meadows", "Northcote",
      "Oakley", "Pembroke", "Queensbury", "Rothschild", "Silverwood", "Thornfield", "Underwood", "Valence",
      "Westbrook", "Yarborough", "Ashton", "Blackwell", "Cordwell", "Drummond"
    ],
    neutralSurnames: [
      "Ashford", "Blackwood", "Brightwell", "Castellan", "Clearwater", "Darrowfield", "Eastwick", "Fairweather",
      "Goldsmith", "Hartwell", "Ironside", "Jameson", "Kingsley", "Lockwood", "Meadows", "Northcote",
      "Oakley", "Pembroke", "Queensbury", "Rothschild", "Silverwood", "Thornfield", "Underwood", "Valence",
      "Westbrook", "Yarborough", "Ashton", "Blackwell", "Cordwell", "Drummond"
    ]
  },
  elf: {
    female: [
      "Aelindor", "Briessa", "Calamwen", "Dalisande", "Elowen", "Farelle", "Galadriel", "Helluin",
      "Irimë", "Jamesilla", "Kaiyeth", "Laurëa", "Morwen", "Nëssa", "Oiorwen", "Pinthalion",
      "Querendë", "Rhaessa", "Saeleth", "Tauriel", "Ulanis", "Valewen", "Watara", "Xanthe",
      "Yavanna", "Zephyra", "Alastor", "Beornë", "Celaëndor", "Dorianna"
    ],
    male: [
      "Aerendil", "Belanor", "Caeldrim", "Delanorin", "Eladamor", "Falathion", "Galadwen", "Halindor",
      "Idaemon", "Jameson", "Kaelith", "Lanvaer", "Mortelion", "Narbeleth", "Orendiel", "Palanthor",
      "Quendor", "Rendarion", "Selandor", "Talinor", "Ulavor", "Vaeldir", "Walendor", "Xandrim",
      "Yalion", "Zelendor", "Aldebar", "Belthron", "Caranthir", "Denethor"
    ],
    neutral: [
      "Aelion", "Brion", "Caelen", "Dion", "Elwen", "Filon", "Gaelen", "Helon",
      "Ilion", "Jalen", "Kaelen", "Loren", "Meren", "Nalen", "Olwen", "Pelen",
      "Quen", "Relen", "Selen", "Telen", "Ulen", "Valen", "Welen", "Xalen",
      "Yelen", "Zalen", "Adrien", "Baelen", "Calon", "Dalen"
    ],
    femaleSurnames: [
      "Moonwhisper", "Starlight", "Silverwind", "Dawnbringer", "Forestsong", "Stillwater", "Swiftarrow", "Brighthelm",
      "Nightshade", "Stormwind", "Riverrun", "Shadowend", "Ironwood", "Starfire", "Cloudmist", "Lightbringer",
      "Shadowmere", "Thornbloom", "Blackthorn", "Whitewood", "Ashfall", "Crystalfall", "Leafwhisper", "Sunburst",
      "Moonbeam", "Starfell", "Windsong", "Waterfell", "Skydancer", "Emberfell"
    ],
    maleSurnames: [
      "Moonwhisper", "Starlight", "Silverwind", "Dawnbringer", "Forestsong", "Stillwater", "Swiftarrow", "Brighthelm",
      "Nightshade", "Stormwind", "Riverrun", "Shadowend", "Ironwood", "Starfire", "Cloudmist", "Lightbringer",
      "Shadowmere", "Thornbloom", "Blackthorn", "Whitewood", "Ashfall", "Crystalfall", "Leafwhisper", "Sunburst",
      "Moonbeam", "Starfell", "Windsong", "Waterfell", "Skydancer", "Emberfell"
    ],
    neutralSurnames: [
      "Moonwhisper", "Starlight", "Silverwind", "Dawnbringer", "Forestsong", "Stillwater", "Swiftarrow", "Brighthelm",
      "Nightshade", "Stormwind", "Riverrun", "Shadowend", "Ironwood", "Starfire", "Cloudmist", "Lightbringer",
      "Shadowmere", "Thornbloom", "Blackthorn", "Whitewood", "Ashfall", "Crystalfall", "Leafwhisper", "Sunburst",
      "Moonbeam", "Starfell", "Windsong", "Waterfell", "Skydancer", "Emberfell"
    ]
  },
  dwarf: {
    female: [
      "Aidra", "Bodica", "Catalina", "Doria", "Erika", "Fiona", "Greta", "Hlara",
      "Ilda", "Jorunn", "Kaida", "Logra", "Marta", "Nada", "Orkina", "Petra",
      "Qora", "Risha", "Sona", "Thalassa", "Ula", "Vada", "Wilda", "Xora",
      "Yasha", "Zara", "Astrid", "Brynhild", "Dagmar", "Eira"
    ],
    male: [
      "Aldric", "Balin", "Copper", "Dwalin", "Einar", "Frerin", "Gloin", "Hornbak",
      "Ironfist", "Jareth", "Karak", "Lorrek", "Moric", "Narak", "Orkul", "Parnak",
      "Qualin", "Regin", "Storn", "Thorin", "Uldar", "Vardin", "Wulfrim", "Xerik",
      "Yardin", "Zarmoth", "Argin", "Borin", "Corbin", "Donrik"
    ],
    neutral: [
      "Aldren", "Brusk", "Carn", "Dorn", "Erner", "Forn", "Garn", "Harn",
      "Irn", "Jorn", "Karn", "Lorn", "Marn", "Norn", "Orn", "Parn",
      "Qarn", "Rorn", "Sarn", "Torn", "Urn", "Vorn", "Worn", "Xarn",
      "Yarn", "Zorn", "Aprin", "Beorn", "Caarn", "Dorn"
    ],
    femaleSurnames: [
      "Ironforge", "Stonehammer", "Goldbeard", "Steelbrew", "Fireaxe", "Battlehammer", "Deepdelver", "Stonehelm",
      "Granitekin", "Ironfoot", "Bronzebeard", "Silverhelm", "Blacksmith", "Ironpick", "Stoneheart", "Metalworker",
      "Keeneye", "Boldfoot", "Stonekin", "Ironhand", "Deepdweller", "Gemfinder", "Ironchain", "Stonewood",
      "Mountainhome", "Deepguard", "Rockwall", "Stoneridge", "Ironhold", "Stronghold"
    ],
    maleSurnames: [
      "Ironforge", "Stonehammer", "Goldbeard", "Steelbrew", "Fireaxe", "Battlehammer", "Deepdelver", "Stonehelm",
      "Granitekin", "Ironfoot", "Bronzebeard", "Silverhelm", "Blacksmith", "Ironpick", "Stoneheart", "Metalworker",
      "Keeneye", "Boldfoot", "Stonekin", "Ironhand", "Deepdweller", "Gemfinder", "Ironchain", "Stonewood",
      "Mountainhome", "Deepguard", "Rockwall", "Stoneridge", "Ironhold", "Stronghold"
    ],
    neutralSurnames: [
      "Ironforge", "Stonehammer", "Goldbeard", "Steelbrew", "Fireaxe", "Battlehammer", "Deepdelver", "Stonehelm",
      "Granitekin", "Ironfoot", "Bronzebeard", "Silverhelm", "Blacksmith", "Ironpick", "Stoneheart", "Metalworker",
      "Keeneye", "Boldfoot", "Stonekin", "Ironhand", "Deepdweller", "Gemfinder", "Ironchain", "Stonewood",
      "Mountainhome", "Deepguard", "Rockwall", "Stoneridge", "Ironhold", "Stronghold"
    ]
  },
  halfling: {
    female: [
      "Aida", "Belladonna", "Calista", "Daisy", "Elodie", "Faye", "Gemma", "Hanna",
      "Iris", "Josie", "Kali", "Lila", "Melody", "Nola", "Olive", "Piper",
      "Quinn", "Rosie", "Stella", "Tilly", "Una", "Violet", "Winnie", "Xiomara",
      "Yara", "Zoe", "Amber", "Beth", "Cora", "Dotty"
    ],
    male: [
      "Aldwin", "Bilbo", "Corwin", "Dando", "Edwin", "Fredrick", "Goodwin", "Hadwin",
      "Iswin", "Jasper", "Kenrick", "Larkin", "Merlin", "Newlin", "Oswin", "Pippin",
      "Quillen", "Rosco", "Sandman", "Toly", "Ulwin", "Valwin", "Wilwin", "Xander",
      "Yarwin", "Zephyr", "Adwin", "Bingo", "Corin", "Dilly"
    ],
    neutral: [
      "Addison", "Berry", "Casey", "Darby", "Emery", "Finley", "Grey", "Haven",
      "Indigo", "Jasmine", "Keaton", "Levy", "Morgan", "Navy", "Owen", "Parker",
      "Quincy", "Riley", "Sage", "Talon", "Uley", "Vale", "Whitney", "Xander",
      "Yale", "Zephyr", "Alfie", "Bailey", "Corbyn", "Devon"
    ],
    femaleSurnames: [
      "Brandybuck", "Took", "Baggins", "Bolger", "Boffin", "Bracegirdle", "Brockhouse", "Burrows",
      "Greenfield", "Goodbody", "Goodchild", "Grubb", "Hornblower", "Lightfoot", "Longhole", "Proudfoot",
      "Sacville", "Smallburrow", "Smallfoot", "Thistlewool", "Tookburrow", "Underfoot", "Wellscott", "Willowfoot",
      "Brownhill", "Goldberry", "Sandyman", "Underhill", "Meadows", "Fairfax"
    ],
    maleSurnames: [
      "Brandybuck", "Took", "Baggins", "Bolger", "Boffin", "Bracegirdle", "Brockhouse", "Burrows",
      "Greenfield", "Goodbody", "Goodchild", "Grubb", "Hornblower", "Lightfoot", "Longhole", "Proudfoot",
      "Sacville", "Smallburrow", "Smallfoot", "Thistlewool", "Tookburrow", "Underfoot", "Wellscott", "Willowfoot",
      "Brownhill", "Goldberry", "Sandyman", "Underhill", "Meadows", "Fairfax"
    ],
    neutralSurnames: [
      "Brandybuck", "Took", "Baggins", "Bolger", "Boffin", "Bracegirdle", "Brockhouse", "Burrows",
      "Greenfield", "Goodbody", "Goodchild", "Grubb", "Hornblower", "Lightfoot", "Longhole", "Proudfoot",
      "Sacville", "Smallburrow", "Smallfoot", "Thistlewool", "Tookburrow", "Underfoot", "Wellscott", "Willowfoot",
      "Brownhill", "Goldberry", "Sandyman", "Underhill", "Meadows", "Fairfax"
    ]
  },
  dragonborn: {
    female: [
      "Avarynth", "Baslyss", "Calastryx", "Draksha", "Essalyss", "Flameth", "Gauraxia", "Hearthis",
      "Iskraxia", "Jaskotha", "Kalessar", "Lysandara", "Marthaxia", "Nykira", "Obsidara", "Phalassa",
      "Quarxis", "Raxara", "Scalestra", "Thyrmara", "Uraxia", "Valthris", "Wyrmsara", "Xanyth",
      "Yadara", "Zaxara", "Alkendra", "Brazara", "Cranaxis", "Drakera"
    ],
    male: [
      "Araxes", "Braknar", "Calastryx", "Drakharr", "Essalas", "Flamecrest", "Gaurath", "Harthax",
      "Iskrath", "Jaskorax", "Kalessar", "Lysandar", "Marthax", "Nykiros", "Obsidian", "Pharaxes",
      "Quaros", "Raxaren", "Scalebrand", "Thyrmor", "Uraxar", "Valthrum", "Wyrmscar", "Xanthros",
      "Yadaros", "Zaxaran", "Alkendor", "Brozar", "Cranaxis", "Draker"
    ],
    neutral: [
      "Arax", "Brex", "Calax", "Drax", "Essar", "Flamor", "Gaur", "Hearth",
      "Iskr", "Jask", "Kales", "Lysan", "Marth", "Nyk", "Obsid", "Pharr",
      "Quar", "Rax", "Scale", "Thyr", "Urax", "Valth", "Wyrm", "Xan",
      "Yad", "Zax", "Alken", "Broz", "Cran", "Drak"
    ],
    femaleSurnames: [
      "Flamefang", "Stonebreaker", "Clawtooth", "Inferno", "Drakebane", "Hotblood", "Skytalon", "Thornwing",
      "Emberclaw", "Firebrand", "Scalesbane", "Wyrmheart", "Ironfang", "Shatterclaw", "Sunderer", "Ashenfist",
      "Draketooth", "Flamewrath", "Goldscale", "Terrorbite", "Dragonfang", "Razorwing", "Magmafury", "Ironfang",
      "Stoneclaw", "Infernalwrath", "Blazefire", "Skydestroyer", "Volcanofury", "Cinderscale"
    ],
    maleSurnames: [
      "Flamefang", "Stonebreaker", "Clawtooth", "Inferno", "Drakebane", "Hotblood", "Skytalon", "Thornwing",
      "Emberclaw", "Firebrand", "Scalesbane", "Wyrmheart", "Ironfang", "Shatterclaw", "Sunderer", "Ashenfist",
      "Draketooth", "Flamewrath", "Goldscale", "Terrorbite", "Dragonfang", "Razorwing", "Magmafury", "Ironfang",
      "Stoneclaw", "Infernalwrath", "Blazefire", "Skydestroyer", "Volcanofury", "Cinderscale"
    ],
    neutralSurnames: [
      "Flamefang", "Stonebreaker", "Clawtooth", "Inferno", "Drakebane", "Hotblood", "Skytalon", "Thornwing",
      "Emberclaw", "Firebrand", "Scalesbane", "Wyrmheart", "Ironfang", "Shatterclaw", "Sunderer", "Ashenfist",
      "Draketooth", "Flamewrath", "Goldscale", "Terrorbite", "Dragonfang", "Razorwing", "Magmafury", "Ironfang",
      "Stoneclaw", "Infernalwrath", "Blazefire", "Skydestroyer", "Volcanofury", "Cinderscale"
    ]
  },
  gnome: {
    female: [
      "Adalhild", "Braela", "Calendria", "Danice", "Elowen", "Fizzwix", "Gyddra", "Hestia",
      "Idira", "Joliella", "Kenna", "Laundria", "Marta", "Narvia", "Olivia", "Piperain",
      "Quicksilver", "Rella", "Sparklina", "Tilly", "Uma", "Velina", "Windy", "Xenia",
      "Yarrow", "Zephyrina", "Ameilea", "Brigit", "Clarine", "Dailisca"
    ],
    male: [
      "Aerendil", "Bingle", "Copperbolt", "Dazzledrop", "Erebus", "Fizzlebop", "Glintworth", "Hasselgruff",
      "Infinitrix", "Jinglebop", "Knickerbocker", "Limpkin", "Mumbleton", "Nimblewit", "Oppenworth", "Prestidigitor",
      "Quibbledorf", "Ringleplop", "Sparkplug", "Tinkertop", "Utherwick", "Valvepop", "Whizzlebang", "Xandarrow",
      "Yawnbottom", "Zestworth", "Addlebrain", "Brightsworth", "Cringletop", "Diddlywhop"
    ],
    neutral: [
      "Addlebranch", "Bindlebark", "Coppertwig", "Diddlewort", "Elfling", "Fizzlebranch", "Glimmerwit", "Hastwick",
      "Ignatius", "Jingleworth", "Kestrelglow", "Limbert", "Mumblebark", "Nifflesnort", "Owlwick", "Pipwick",
      "Quickwick", "Ringlewick", "Sparkwick", "Tinkwick", "Umbwick", "Valewick", "Whistlewick", "Xeric",
      "Yawwick", "Zestwick", "Adamwick", "Brinwick", "Crimswick", "Dewwick"
    ],
    femaleSurnames: [
      "Ironfoot", "Tinkertop", "Sparkgem", "Brightbottle", "Cogsworth", "Fizzpop", "Gearsmith", "Hellspring",
      "Inventrix", "Jinglebell", "Keystrike", "Lightbringer", "Mumblejumble", "Niftydraft", "Owlfeather", "Potscrubber",
      "Quickwit", "Ringsmith", "Sparklebaum", "Tinkerer", "Underfoot", "Valvewick", "Whistlesmith", "Xeriswift",
      "Yawnsworth", "Zestfully", "Addletrick", "Brasswell", "Craftwork", "Dizzydraft"
    ],
    maleSurnames: [
      "Ironfoot", "Tinkertop", "Sparkgem", "Brightbottle", "Cogsworth", "Fizzpop", "Gearsmith", "Hellspring",
      "Inventrix", "Jinglebell", "Keystrike", "Lightbringer", "Mumblejumble", "Niftydraft", "Owlfeather", "Potscrubber",
      "Quickwit", "Ringsmith", "Sparklebaum", "Tinkerer", "Underfoot", "Valvewick", "Whistlesmith", "Xeriswift",
      "Yawnsworth", "Zestfully", "Addletrick", "Brasswell", "Craftwork", "Dizzydraft"
    ],
    neutralSurnames: [
      "Ironfoot", "Tinkertop", "Sparkgem", "Brightbottle", "Cogsworth", "Fizzpop", "Gearsmith", "Hellspring",
      "Inventrix", "Jinglebell", "Keystrike", "Lightbringer", "Mumblejumble", "Niftydraft", "Owlfeather", "Potscrubber",
      "Quickwit", "Ringsmith", "Sparklebaum", "Tinkerer", "Underfoot", "Valvewick", "Whistlesmith", "Xeriswift",
      "Yawnsworth", "Zestfully", "Addletrick", "Brasswell", "Craftwork", "Dizzydraft"
    ]
  },
  "half-elf": {
    female: [
      "Aelin", "Breanna", "Caelwen", "Dairine", "Elowen", "Faeleth", "Gaelwen", "Halwen",
      "Ileana", "Jaelwen", "Kaeleth", "Loralei", "Mirawen", "Nalwen", "Orendiel", "Paelwen",
      "Quareth", "Raelwen", "Saeleth", "Talewen", "Uralwen", "Valwen", "Waelwen", "Xarwen",
      "Yarwen", "Zalwen", "Amelia", "Brennia", "Celinde", "Daphne"
    ],
    male: [
      "Aldric", "Beldan", "Caldor", "Dalien", "Elden", "Falieth", "Gaeldan", "Haldan",
      "Ildan", "Jaeldan", "Kaeldan", "Lordan", "Mirdan", "Naldan", "Orendan", "Paeldan",
      "Quedan", "Raeldan", "Saeldan", "Taldan", "Urdan", "Valdan", "Waldan", "Xardan",
      "Yardan", "Zaldan", "Aldor", "Breldan", "Celdan", "Doran"
    ],
    neutral: [
      "Alder", "Bren", "Calen", "Dalen", "Elen", "Falen", "Galen", "Halen",
      "Ilen", "Jalen", "Kalen", "Loren", "Malen", "Nalen", "Olen", "Palen",
      "Qalen", "Ralen", "Salen", "Talen", "Ulen", "Valen", "Walen", "Xalen",
      "Yalen", "Zalen", "Alon", "Brelen", "Celen", "Dolen"
    ],
    femaleSurnames: [
      "Ashford", "Blackwood", "Brightwell", "Castellan", "Clearwater", "Darrowfield", "Eastwick", "Fairweather",
      "Goldsmith", "Hartwell", "Ironside", "Jameson", "Kingsley", "Lockwood", "Meadows", "Northcote",
      "Oakley", "Pembroke", "Queensbury", "Rothschild", "Silverwood", "Thornfield", "Underwood", "Valence",
      "Westbrook", "Yarborough", "Ashton", "Blackwell", "Cordwell", "Drummond"
    ],
    maleSurnames: [
      "Ashford", "Blackwood", "Brightwell", "Castellan", "Clearwater", "Darrowfield", "Eastwick", "Fairweather",
      "Goldsmith", "Hartwell", "Ironside", "Jameson", "Kingsley", "Lockwood", "Meadows", "Northcote",
      "Oakley", "Pembroke", "Queensbury", "Rothschild", "Silverwood", "Thornfield", "Underwood", "Valence",
      "Westbrook", "Yarborough", "Ashton", "Blackwell", "Cordwell", "Drummond"
    ],
    neutralSurnames: [
      "Ashford", "Blackwood", "Brightwell", "Castellan", "Clearwater", "Darrowfield", "Eastwick", "Fairweather",
      "Goldsmith", "Hartwell", "Ironside", "Jameson", "Kingsley", "Lockwood", "Meadows", "Northcote",
      "Oakley", "Pembroke", "Queensbury", "Rothschild", "Silverwood", "Thornfield", "Underwood", "Valence",
      "Westbrook", "Yarborough", "Ashton", "Blackwell", "Cordwell", "Drummond"
    ]
  },
  "half-orc": {
    female: [
      "Aida", "Bashira", "Calbria", "Dusra", "Ethera", "Fasha", "Gasha", "Hembra",
      "Irdaka", "Jasha", "Kashka", "Latasha", "Masha", "Nasha", "Orsha", "Pasha",
      "Qasha", "Rashka", "Sasha", "Tasha", "Urasha", "Vasha", "Washa", "Xasha",
      "Yasha", "Zasha", "Arika", "Brasha", "Casha", "Dasha"
    ],
    male: [
      "Agar", "Bashir", "Caragh", "Duskar", "Ethark", "Fashar", "Garish", "Hathak",
      "Irdak", "Jaskar", "Kashir", "Latash", "Mashak", "Nashir", "Orshak", "Pashar",
      "Qashar", "Rashar", "Sashar", "Tashar", "Urashar", "Vashar", "Washar", "Xashar",
      "Yashar", "Zashar", "Arik", "Brashar", "Cashar", "Dashar"
    ],
    neutral: [
      "Agir", "Bashr", "Cargh", "Dusk", "Eth", "Fash", "Gar", "Hath",
      "Ir", "Jask", "Kash", "Lata", "Mash", "Nash", "Or", "Pash",
      "Qash", "Rash", "Sash", "Tash", "Ura", "Vash", "Wash", "Xash",
      "Yash", "Zash", "Arik", "Brash", "Cash", "Dash"
    ],
    femaleSurnames: [
      "Grommash", "Durotan", "Garona", "Thrall", "Blackhand", "Hellscream", "Skullcrusher", "Frostmane",
      "Doomhammer", "Skullsplitter", "Bloodfist", "Deathwish", "Skullbark", "Boneshatter", "Tuskclaw", "Grimfang",
      "Darkblade", "Skullrender", "Axeheart", "Stonefist", "Gorefang", "Ravenbark", "Mutterance", "Blackboar",
      "Duskbringer", "Warsong", "Shatterfist", "Drakonid", "Shadowmane", "Bonegrinder"
    ],
    maleSurnames: [
      "Grommash", "Durotan", "Garona", "Thrall", "Blackhand", "Hellscream", "Skullcrusher", "Frostmane",
      "Doomhammer", "Skullsplitter", "Bloodfist", "Deathwish", "Skullbark", "Boneshatter", "Tuskclaw", "Grimfang",
      "Darkblade", "Skullrender", "Axeheart", "Stonefist", "Gorefang", "Ravenbark", "Mutterance", "Blackboar",
      "Duskbringer", "Warsong", "Shatterfist", "Drakonid", "Shadowmane", "Bonegrinder"
    ],
    neutralSurnames: [
      "Grommash", "Durotan", "Garona", "Thrall", "Blackhand", "Hellscream", "Skullcrusher", "Frostmane",
      "Doomhammer", "Skullsplitter", "Bloodfist", "Deathwish", "Skullbark", "Boneshatter", "Tuskclaw", "Grimfang",
      "Darkblade", "Skullrender", "Axeheart", "Stonefist", "Gorefang", "Ravenbark", "Mutterance", "Blackboar",
      "Duskbringer", "Warsong", "Shatterfist", "Drakonid", "Shadowmane", "Bonegrinder"
    ]
  },
  tiefling: {
    female: [
      "Abrivara", "Belstra", "Calista", "Dariella", "Elowen", "Fazira", "Galandra", "Hestara",
      "Indira", "Javella", "Kalista", "Lavina", "Marissandra", "Navara", "Omaira", "Palestra",
      "Quarissa", "Raziel", "Silvara", "Talistra", "Umbriel", "Vanessa", "Winterae", "Xariella",
      "Yasmine", "Zephyra", "Amberline", "Bristara", "Cerulean", "Demoness"
    ],
    male: [
      "Alister", "Belmont", "Carrion", "Damarion", "Emon", "Fatalis", "Germanicus", "Infernal",
      "Jaridian", "Kallistus", "Lazarus", "Malachor", "Nephrilex", "Omen", "Pluto", "Quillian",
      "Raze", "Scarzath", "Tantalus", "Umberion", "Valthrix", "Warwick", "Xarius", "Yahzakos",
      "Zaragon", "Abyssal", "Blaze", "Cataclysm", "Damnation"
    ],
    neutral: [
      "Abyss", "Bane", "Calix", "Daze", "Ebon", "Flame", "Grim", "Haze",
      "Infern", "Jharim", "Kalax", "Lax", "Malkin", "Nyx", "Obliv", "Phantasm",
      "Quarix", "Rax", "Scourge", "Thalix", "Umbral", "Vex", "Wraith", "Xeric",
      "Yul", "Zak", "Acrid", "Balthazar", "Cinder", "Dusk"
    ],
    femaleSurnames: [
      "Nethys", "Scorchveil", "Ashbrand", "Infernatrix", "Emberclaw", "Hellwraith", "Shadowborn", "Infernalveil",
      "Bloodthorn", "Sulfurebrand", "Demonjaw", "Hellfire", "Obsidianveil", "Scarletbane", "Infernoborn", "Cursemark",
      "Shadowscourge", "Flamebrand", "Voidwraith", "Netherveil", "Abyssborn", "Infernowhisper", "Cursedveil", "Demonscarl",
      "Infernalitch", "Shadowpact", "Hellbrand", "Scorchborn", "Ashenveil", "Damnationborn"
    ],
    maleSurnames: [
      "Nethys", "Scorchveil", "Ashbrand", "Infernatrix", "Emberclaw", "Hellwraith", "Shadowborn", "Infernalveil",
      "Bloodthorn", "Sulfurebrand", "Demonjaw", "Hellfire", "Obsidianveil", "Scarletbane", "Infernoborn", "Cursemark",
      "Shadowscourge", "Flamebrand", "Voidwraith", "Netherveil", "Abyssborn", "Infernowhisper", "Cursedveil", "Demonscarl",
      "Infernalitch", "Shadowpact", "Hellbrand", "Scorchborn", "Ashenveil", "Damnationborn"
    ],
    neutralSurnames: [
      "Nethys", "Scorchveil", "Ashbrand", "Infernatrix", "Emberclaw", "Hellwraith", "Shadowborn", "Infernalveil",
      "Bloodthorn", "Sulfurebrand", "Demonjaw", "Hellfire", "Obsidianveil", "Scarletbane", "Infernoborn", "Cursemark",
      "Shadowscourge", "Flamebrand", "Voidwraith", "Netherveil", "Abyssborn", "Infernowhisper", "Cursedveil", "Demonscarl",
      "Infernalitch", "Shadowpact", "Hellbrand", "Scorchborn", "Ashenveil", "Damnationborn"
    ]
  },
  orc: {
    female: [
      "Agara", "Bashka", "Calbira", "Dusara", "Ethara", "Fasha", "Garasha", "Hembra",
      "Irdaka", "Jashka", "Kashara", "Latasha", "Mashka", "Nashara", "Orsha", "Pashka",
      "Qasha", "Rashara", "Sashka", "Tashara", "Urasha", "Vashka", "Washa", "Xarasha",
      "Yashara", "Zashka", "Agara", "Brasha", "Casha", "Dasha"
    ],
    male: [
      "Agar", "Bashir", "Carash", "Duskar", "Ethark", "Fashar", "Garish", "Hathak",
      "Irdak", "Jaskar", "Kashir", "Latash", "Mashak", "Nashir", "Orshak", "Pashar",
      "Qashar", "Rashar", "Sashar", "Tashar", "Urashar", "Vashar", "Washar", "Xashar",
      "Yashar", "Zashar", "Arik", "Brashar", "Cashar", "Dashar"
    ],
    neutral: [
      "Ag", "Bash", "Car", "Dus", "Eth", "Fas", "Gar", "Hath",
      "Ird", "Jas", "Kash", "Lat", "Mash", "Nash", "Or", "Pash",
      "Qash", "Rash", "Sash", "Tash", "Ura", "Vash", "Wash", "Xash",
      "Yash", "Zash", "Ag", "Bra", "Cas", "Das"
    ],
    femaleSurnames: [
      "Blacktusk", "Skullcrusher", "Bonegrinder", "Hellscream", "Doomhammer", "Skullsplitter", "Tuskrend", "Warborn",
      "Bloodfist", "Stoneclaw", "Ironfang", "Darkblade", "Gorefang", "Tuskscar", "Bonebreaker", "Ashenfury",
      "Warbrand", "Skullrender", "Dreadfang", "Shadowtusk", "Hellbite", "Ravenclaw", "Duskbringer", "Firebrand",
      "Gravebark", "Morrguard", "Bloodclaw", "Stonefist", "Wraithfang", "Deathwish"
    ],
    maleSurnames: [
      "Blacktusk", "Skullcrusher", "Bonegrinder", "Hellscream", "Doomhammer", "Skullsplitter", "Tuskrend", "Warborn",
      "Bloodfist", "Stoneclaw", "Ironfang", "Darkblade", "Gorefang", "Tuskscar", "Bonebreaker", "Ashenfury",
      "Warbrand", "Skullrender", "Dreadfang", "Shadowtusk", "Hellbite", "Ravenclaw", "Duskbringer", "Firebrand",
      "Gravebark", "Morrguard", "Bloodclaw", "Stonefist", "Wraithfang", "Deathwish"
    ],
    neutralSurnames: [
      "Blacktusk", "Skullcrusher", "Bonegrinder", "Hellscream", "Doomhammer", "Skullsplitter", "Tuskrend", "Warborn",
      "Bloodfist", "Stoneclaw", "Ironfang", "Darkblade", "Gorefang", "Tuskscar", "Bonebreaker", "Ashenfury",
      "Warbrand", "Skullrender", "Dreadfang", "Shadowtusk", "Hellbite", "Ravenclaw", "Duskbringer", "Firebrand",
      "Gravebark", "Morrguard", "Bloodclaw", "Stonefist", "Wraithfang", "Deathwish"
    ]
  },
  goliath: {
    female: [
      "Akela", "Borya", "Citria", "Dolma", "Enara", "Faldara", "Garitha", "Halithra",
      "Ilara", "Jethara", "Kalara", "Lythara", "Malahar", "Nathara", "Oltara", "Pallara",
      "Qathara", "Rathara", "Sathara", "Tathara", "Ulathra", "Vathara", "Wathara", "Xathra",
      "Yathara", "Zathara", "Almara", "Barthara", "Calthra", "Daltara"
    ],
    male: [
      "Akos", "Borys", "Citrix", "Dolthor", "Enaros", "Faldar", "Garith", "Halthir",
      "Ilaros", "Jethar", "Kalaros", "Lythar", "Malahor", "Nathir", "Olthor", "Pallar",
      "Qathor", "Rathar", "Sathar", "Tathor", "Ulathor", "Vathar", "Wathor", "Xathor",
      "Yathor", "Zathor", "Almar", "Barthor", "Calthor", "Daltor"
    ],
    neutral: [
      "Akir", "Bor", "Citr", "Dol", "Ena", "Fal", "Gar", "Hal",
      "Ila", "Jeth", "Kal", "Lyt", "Mal", "Nat", "Ol", "Pal",
      "Qat", "Rat", "Sat", "Tat", "Ula", "Vat", "Wat", "Xat",
      "Yat", "Zat", "Alm", "Bar", "Cal", "Dal"
    ],
    femaleSurnames: [
      "Stonemight", "Skyhammer", "Earthfist", "Cloudborn", "Stonekin", "Skyborne", "Mountainheart", "Rockbane",
      "Stormfist", "Peakbringer", "Groundkeeper", "Skyshatter", "Stoneheart", "Mountainborn", "Rockfist", "Skyborn",
      "Earthborn", "Peakrunner", "Stonehelm", "Stormsong", "Mountainshield", "Rockhelm", "Skybreaker", "Groundshaker",
      "Stonewall", "Cloudwalker", "Mountainward", "Rockward", "Skyward", "Earthward"
    ],
    maleSurnames: [
      "Stonemight", "Skyhammer", "Earthfist", "Cloudborn", "Stonekin", "Skyborne", "Mountainheart", "Rockbane",
      "Stormfist", "Peakbringer", "Groundkeeper", "Skyshatter", "Stoneheart", "Mountainborn", "Rockfist", "Skyborn",
      "Earthborn", "Peakrunner", "Stonehelm", "Stormsong", "Mountainshield", "Rockhelm", "Skybreaker", "Groundshaker",
      "Stonewall", "Cloudwalker", "Mountainward", "Rockward", "Skyward", "Earthward"
    ],
    neutralSurnames: [
      "Stonemight", "Skyhammer", "Earthfist", "Cloudborn", "Stonekin", "Skyborne", "Mountainheart", "Rockbane",
      "Stormfist", "Peakbringer", "Groundkeeper", "Skyshatter", "Stoneheart", "Mountainborn", "Rockfist", "Skyborn",
      "Earthborn", "Peakrunner", "Stonehelm", "Stormsong", "Mountainshield", "Rockhelm", "Skybreaker", "Groundshaker",
      "Stonewall", "Cloudwalker", "Mountainward", "Rockward", "Skyward", "Earthward"
    ]
  },
  aasimar: {
    female: [
      "Adriella", "Bellara", "Celestine", "Diandra", "Elowen", "Farenna", "Gabriella", "Helaina",
      "Iriella", "Jadelynn", "Kalista", "Laurenna", "Marissa", "Navira", "Opalina", "Pharenna",
      "Quarenna", "Rahenna", "Selenna", "Telenna", "Uralenna", "Vaelenna", "Walenna", "Xialenna",
      "Yaelenna", "Zalenna", "Amirella", "Brighella", "Celestina", "Divinara"
    ],
    male: [
      "Adrian", "Belthran", "Cassian", "Delian", "Eladrian", "Felian", "Galathon", "Heliodor",
      "Ilithian", "Jadelion", "Kalimor", "Laurion", "Marithon", "Navithon", "Opalion", "Pharion",
      "Quarion", "Rahion", "Selion", "Telion", "Uralion", "Vaelion", "Walion", "Xialion",
      "Yaelion", "Zalion", "Amirlion", "Brighton", "Celestian", "Divino"
    ],
    neutral: [
      "Adren", "Belth", "Cass", "Deli", "Elad", "Feli", "Gala", "Heli",
      "Ili", "Jade", "Kali", "Lauri", "Mari", "Navi", "Opal", "Pha",
      "Qua", "Rah", "Sel", "Tel", "Ura", "Vael", "Wal", "Xia",
      "Yael", "Zal", "Amir", "Brig", "Celes", "Divi"
    ],
    femaleSurnames: [
      "Lightbringer", "Celestialveil", "Starborn", "Divinewrath", "Heavensong", "Angelwing", "Radiantheart", "Dawnbringer",
      "Halowraith", "Sanctuaryborn", "Grace born", "Halofire", "Divineflight", "Starwhisper", "Celestialfire", "Sunbringer",
      "Lightward", "Heavenborn", "Sanctified", "Radianceborn", "Dawnfire", "Haloborn", "Graceward", "Blessing",
      "Divinebringer", "Starhealth", "Lightborn", "Celestialward", "Heaveborn", "Sunlight"
    ],
    maleSurnames: [
      "Lightbringer", "Celestialveil", "Starborn", "Divinewrath", "Heavensong", "Angelwing", "Radiantheart", "Dawnbringer",
      "Halowraith", "Sanctuaryborn", "Graceborn", "Halofire", "Divineflight", "Starwhisper", "Celestialfire", "Sunbringer",
      "Lightward", "Heavenborn", "Sanctified", "Radianceborn", "Dawnfire", "Haloborn", "Graceward", "Blessedward",
      "Divinebringer", "Starhealth", "Lightborn", "Celestialward", "Heavenborn", "Sunlight"
    ],
    neutralSurnames: [
      "Lightbringer", "Celestialveil", "Starborn", "Divinewrath", "Heavensong", "Angelwing", "Radiantheart", "Dawnbringer",
      "Halowraith", "Sanctuaryborn", "Graceborn", "Halofire", "Divineflight", "Starwhisper", "Celestialfire", "Sunbringer",
      "Lightward", "Heavenborn", "Sanctified", "Radianceborn", "Dawnfire", "Haloborn", "Graceward", "Blessedward",
      "Divinebringer", "Starhealth", "Lightborn", "Celestialward", "Heavenborn", "Sunlight"
    ]
  },
  "genasi-air": {
    female: [
      "Aerika", "Breeanna", "Cyclone", "Driftia", "Ethereal", "Feather", "Gale", "Haze",
      "Iris", "Jetia", "Kestrel", "Levia", "Mistral", "Nimbus", "Oren", "Patia",
      "Quothe", "Raestia", "Silphia", "Tempest", "Uralene", "Vortia", "Whisper", "Xenia",
      "Yariel", "Zephyra", "Aether", "Breeze", "Cumulus", "Drift"
    ],
    male: [
      "Aeron", "Bredan", "Cyclenos", "Driftwyn", "Ethereal", "Featherwin", "Galewon", "Hazard",
      "Irius", "Jetson", "Kestrel", "Levian", "Mistral", "Nimbos", "Orion", "Patron",
      "Quothen", "Raeston", "Silph", "Tempeston", "Uraleon", "Vortex", "Whirlwind", "Xenophon",
      "Yarion", "Zephyr", "Aether", "Breedon", "Cumulus", "Driftwind"
    ],
    neutral: [
      "Aer", "Breeze", "Cycl", "Dri", "Eth", "Feath", "Gal", "Haz",
      "Ir", "Jet", "Kes", "Lev", "Mist", "Nimb", "Or", "Pat",
      "Quo", "Raes", "Silph", "Temp", "Ur", "Vor", "Whir", "Xen",
      "Yar", "Zeph", "Aether", "Breed", "Cum", "Drift"
    ],
    femaleSurnames: [
      "Windwalker", "Skyrunner", "Cloudborn", "Stormwind", "Breezeborn", "Windwhisper", "Skyborne", "Aerbringer",
      "Cloudwhisper", "Breezebringer", "Stormborn", "Skydancer", "Windborne", "Tempestborn", "Zephyrbringer", "Galeborn",
      "Cloudrunner", "Skywhisper", "Stormrunner", "Breezewhisper", "Windborn", "Tempestwind", "Airdancer", "Skyward",
      "Cloudward", "Windward", "Stormward", "Breezeward", "Skyborne", "Aertorn"
    ],
    maleSurnames: [
      "Windwalker", "Skyrunner", "Cloudborn", "Stormwind", "Breezeborn", "Windwhisper", "Skyborne", "Aerbringer",
      "Cloudwhisper", "Breezebringer", "Stormborn", "Skydancer", "Windborne", "Tempestborn", "Zephyrbringer", "Galeborn",
      "Cloudrunner", "Skywhisper", "Stormrunner", "Breezewhisper", "Windborn", "Tempestwind", "Airdancer", "Skyward",
      "Cloudward", "Windward", "Stormward", "Breezeward", "Skyborne", "Aertorn"
    ],
    neutralSurnames: [
      "Windwalker", "Skyrunner", "Cloudborn", "Stormwind", "Breezeborn", "Windwhisper", "Skyborne", "Aerbringer",
      "Cloudwhisper", "Breezebringer", "Stormborn", "Skydancer", "Windborne", "Tempestborn", "Zephyrbringer", "Galeborn",
      "Cloudrunner", "Skywhisper", "Stormrunner", "Breezewhisper", "Windborn", "Tempestwind", "Airdancer", "Skyward",
      "Cloudward", "Windward", "Stormward", "Breezeward", "Skyborne", "Aertorn"
    ]
  },
  "genasi-fire": {
    female: [
      "Ashara", "Blaze", "Cinara", "Drakiya", "Embara", "Flamin", "Galdren", "Hellara",
      "Inferna", "Javara", "Kahlara", "Lavaara", "Magara", "Nadira", "Obsidara", "Pyraia",
      "Quenara", "Raxara", "Scalara", "Thyara", "Uralya", "Volka", "Wildra", "Xanara",
      "Yarara", "Zakara", "Ashla", "Brasa", "Cindra", "Darka"
    ],
    male: [
      "Ashar", "Blazen", "Cinax", "Drakos", "Embar", "Flamin", "Galdaron", "Hellar",
      "Inferno", "Javar", "Kahlar", "Lavar", "Magar", "Nadir", "Obsidian", "Pyros",
      "Quenar", "Raxar", "Scalar", "Thyar", "Uralor", "Volkar", "Wildir", "Xanar",
      "Yarar", "Zakar", "Ashton", "Brasin", "Cindor", "Darkon"
    ],
    neutral: [
      "Ash", "Blaze", "Cin", "Drak", "Emb", "Flam", "Gal", "Hell",
      "Inf", "Jav", "Kahl", "Lav", "Mag", "Nad", "Obs", "Pyr",
      "Quen", "Rax", "Scal", "Thy", "Ural", "Volk", "Wild", "Xan",
      "Yar", "Zak", "Ash", "Bras", "Cind", "Dark"
    ],
    femaleSurnames: ["Flamebrand", "Infernalveil", "Scorchborn", "Wildfire", "Emberborn", "Hotblood", "Blazeborn", "Firefist", "Infernalwrath", "Pyreborn", "Ashenbrand", "Scorchbrand", "Cinderfire", "Magmaborn", "Lavafire", "Emberfire", "Flameheart", "Infernalheart", "Scorchfist", "Wildfang", "Emberfang", "Hotfang", "Blazefang", "Firefang", "Infernalbrand", "Pyrebrand", "Ashenfire", "Scorchwind", "Cinderwind", "Magmafire"],
    maleSurnames: ["Flamebrand", "Infernalveil", "Scorchborn", "Wildfire", "Emberborn", "Hotblood", "Blazeborn", "Firefist", "Infernalwrath", "Pyreborn", "Ashenbrand", "Scorchbrand", "Cinderfire", "Magmaborn", "Lavafire", "Emberfire", "Flameheart", "Infernalheart", "Scorchfist", "Wildfang", "Emberfang", "Hotfang", "Blazefang", "Firefang", "Infernalbrand", "Pyrebrand", "Ashenfire", "Scorchwind", "Cinderwind", "Magmafire"],
    neutralSurnames: ["Flamebrand", "Infernalveil", "Scorchborn", "Wildfire", "Emberborn", "Hotblood", "Blazeborn", "Firefist", "Infernalwrath", "Pyreborn", "Ashenbrand", "Scorchbrand", "Cinderfire", "Magmaborn", "Lavafire", "Emberfire", "Flameheart", "Infernalheart", "Scorchfist", "Wildfang", "Emberfang", "Hotfang", "Blazefang", "Firefang", "Infernalbrand", "Pyrebrand", "Ashenfire", "Scorchwind", "Cinderwind", "Magmafire"]
  },
   "genasi-water": {
     female: [
       "Acalia", "Brae", "Caelestra", "Deepa", "Elowen", "Flippa", "Galeana", "Hallara",
       "Idalya", "Jadeara", "Kalina", "Laurena", "Marilia", "Naida", "Opaline", "Pearla",
       "Qualia", "Raelena", "Selenia", "Tidalena", "Undina", "Valena", "Walenna", "Xenia",
       "Yavenna", "Zalina", "Adriana", "Breeyna", "Coralina", "Delina"
     ],
     male: [
       "Acalon", "Braelen", "Caelestris", "Deepleon", "Elowen", "Fliparon", "Galean", "Hallan",
       "Idalon", "Jadearon", "Kalin", "Lauren", "Marillon", "Naiden", "Opaline", "Pearlon",
       "Qualon", "Raelen", "Selenion", "Tidelon", "Undrian", "Valen", "Wallon", "Xenon",
       "Yavon", "Zalin", "Adrion", "Breeyn", "Coralan", "Delon"
     ],
     neutral: [
       "Acal", "Brae", "Caeles", "Deep", "Elo", "Flip", "Gal", "Hal",
       "Ida", "Jade", "Kal", "Lau", "Mari", "Nai", "Opal", "Peal",
       "Qual", "Rael", "Sele", "Tid", "Und", "Val", "Wal", "Xen",
       "Yav", "Zal", "Adri", "Bree", "Coral", "Del"
     ],
     femaleSurnames: [
       "Waterborn", "Tiderunner", "Seabringer", "Aquaborn", "Waveborn", "Deepbringer", "Riverborn", "Tidebringer",
       "Shellbringer", "Wetbringer", "Seaborn", "Oceanborn", "Floodborn", "Rainborn", "Moistbringer", "Streamborn",
       "Coralborn", "Pearlbringer", "Foamborn", "Dripingborn", "Mistyborn", "Dewborn", "Splashborn", "Rippleborn",
       "Crashborn", "Surgborn", "Swellborn", "Bubbleborn", "Driftborn", "Flowborn"
     ],
     maleSurnames: [
       "Waterborn", "Tiderunner", "Seabringer", "Aquaborn", "Waveborn", "Deepbringer", "Riverborn", "Tidebringer",
       "Shellbringer", "Wetbringer", "Seaborn", "Oceanborn", "Floodborn", "Rainborn", "Moistbringer", "Streamborn",
       "Coralborn", "Pearlbringer", "Foamborn", "Dripingborn", "Mistyborn", "Dewborn", "Splashborn", "Rippleborn",
       "Crashborn", "Surgborn", "Swellborn", "Bubbleborn", "Driftborn", "Flowborn"
     ],
     neutralSurnames: [
       "Waterborn", "Tiderunner", "Seabringer", "Aquaborn", "Waveborn", "Deepbringer", "Riverborn", "Tidebringer",
       "Shellbringer", "Wetbringer", "Seaborn", "Oceanborn", "Floodborn", "Rainborn", "Moistbringer", "Streamborn",
       "Coralborn", "Pearlbringer", "Foamborn", "Dripingborn", "Mistyborn", "Dewborn", "Splashborn", "Rippleborn",
       "Crashborn", "Surgborn", "Swellborn", "Bubbleborn", "Driftborn", "Flowborn"
     ]
   },
   "genasi-earth": {
     female: [
       "Aelara", "Bouldera", "Calista", "Doraia", "Earthara", "Feldspar", "Granite", "Hearthara",
       "Ironara", "Jade", "Kalara", "Lena", "Mara", "Niara", "Okaara", "Petra",
       "Quartzara", "Ranara", "Stoneara", "Talara", "Ulana", "Valara", "Walara", "Xanara",
       "Yarara", "Zarai", "Amalara", "Brickara", "Caramara", "Dalara"
     ],
     male: [
       "Aelar", "Boulden", "Calistar", "Dorain", "Earthar", "Feldspar", "Granito", "Hearthen",
       "Ironax", "Jaden", "Kalar", "Leno", "Maron", "Nior", "Okaar", "Petros",
       "Quartzar", "Ranir", "Stoneor", "Talar", "Ulano", "Valar", "Walar", "Xanar",
       "Yarar", "Zaro", "Amalor", "Brickar", "Caramar", "Dalor"
     ],
     neutral: [
       "Aela", "Bould", "Calis", "Dora", "Eart", "Feld", "Gran", "Heart",
       "Iron", "Jade", "Kale", "Len", "Mar", "Nia", "Oka", "Petr",
       "Quartz", "Ran", "Stone", "Tal", "Ulan", "Val", "Wal", "Xan",
       "Yar", "Zar", "Amal", "Brick", "Cara", "Dal"
     ],
     femaleSurnames: [
       "Stoneborn", "Mountainborn", "Earthborn", "Ironborn", "Rockfist", "Graniteheart", "Petalborn", "Quartzborn",
       "Gemborn", "Boulderborn", "Clayborn", "Sandborn", "Shaleborn", "Feldsparborn", "Mineborn", "Cavernborn",
       "Bedrock", "Clifford", "Dustborn", "Gravelborn", "Oreborn", "Stonework", "Masonborn", "Crumbleborn",
       "Sedimentborn", "Mineralborn", "Shardborn", "Rockwall", "Dusty", "Gritborn"
     ],
     maleSurnames: [
       "Stoneborn", "Mountainborn", "Earthborn", "Ironborn", "Rockfist", "Graniteheart", "Petalborn", "Quartzborn",
       "Gemborn", "Boulderborn", "Clayborn", "Sandborn", "Shaleborn", "Feldsparborn", "Mineborn", "Cavernborn",
       "Bedrock", "Clifford", "Dustborn", "Gravelborn", "Oreborn", "Stonework", "Masonborn", "Crumbleborn",
       "Sedimentborn", "Mineralborn", "Shardborn", "Rockwall", "Dusty", "Gritborn"
     ],
     neutralSurnames: [
       "Stoneborn", "Mountainborn", "Earthborn", "Ironborn", "Rockfist", "Graniteheart", "Petalborn", "Quartzborn",
       "Gemborn", "Boulderborn", "Clayborn", "Sandborn", "Shaleborn", "Feldsparborn", "Mineborn", "Cavernborn",
       "Bedrock", "Clifford", "Dustborn", "Gravelborn", "Oreborn", "Stonework", "Masonborn", "Crumbleborn",
       "Sedimentborn", "Mineralborn", "Shardborn", "Rockwall", "Dusty", "Gritborn"
     ]
   },
   kenku: {
     female: [
       "Chatter", "Caw", "Echo", "Feather", "Galewind", "Harrier", "Iris", "Jinx",
       "Kestrel", "Lark", "Myna", "Nest", "Oven", "Petrel", "Quill", "Raven",
       "Squawk", "Trill", "Umber", "Vesper", "Wing", "Xenith", "Yarrow", "Zenith",
       "Aero", "Breeze", "Chirp", "Dove"
     ],
     male: [
       "Chatter", "Clasp", "Glide", "Grackle", "Hoot", "Jagged", "Kite", "Latch",
       "Mourn", "Noose", "Osprey", "Perch", "Quest", "Reel", "Screech", "Talon",
       "Utter", "Vault", "Wail", "Xeric", "Yowl", "Zephyr", "Arch", "Brake",
       "Creel", "Dusk"
     ],
     neutral: [
       "Ash", "Bark", "Crest", "Drift", "Echo", "Flock", "Gleam", "Hail",
       "Inch", "Jeer", "Keel", "Loom", "Murk", "Niche", "Oakwood", "Perch",
       "Quick", "Rook", "Snap", "Thraw", "Utter", "Veil", "Wicker", "Xeric",
       "Yew", "Zenlike", "Aloof", "Bored", "Clank", "Dirge"
     ],
     femaleSurnames: [
       "Featherborne", "Skyclaw", "Wingborne", "Ebonfeather", "Talonfang", "Screechbringer", "Ravenborn", "Blackwing",
       "Sharptalon", "Eyekeeper", "Brightfeather", "Shadowwing", "Copperfeather", "Stormwing", "Silverwing", "Whitefeather",
       "Redfeather", "Goldwing", "Bonefeather", "Steelfeather", "Glasswing", "Sharpeye", "Deadeye", "Eyebright",
       "Eyesharp", "Eyewide", "Eyedeep", "Windsong", "Skyborn", "Cloudwing"
     ],
     maleSurnames: [
       "Featherborne", "Skyclaw", "Wingborne", "Ebonfeather", "Talonfang", "Screechbringer", "Ravenborn", "Blackwing",
       "Sharptalon", "Eyekeeper", "Brightfeather", "Shadowwing", "Copperfeather", "Stormwing", "Silverwing", "Whitefeather",
       "Redfeather", "Goldwing", "Bonefeather", "Steelfeather", "Glasswing", "Sharpeye", "Deadeye", "Eyebright",
       "Eyesharp", "Eyewide", "Eyedeep", "Windsong", "Skyborn", "Cloudwing"
     ],
     neutralSurnames: [
       "Featherborne", "Skyclaw", "Wingborne", "Ebonfeather", "Talonfang", "Screechbringer", "Ravenborn", "Blackwing",
       "Sharptalon", "Eyekeeper", "Brightfeather", "Shadowwing", "Copperfeather", "Stormwing", "Silverwing", "Whitefeather",
       "Redfeather", "Goldwing", "Bonefeather", "Steelfeather", "Glasswing", "Sharpeye", "Deadeye", "Eyebright",
       "Eyesharp", "Eyewide", "Eyedeep", "Windsong", "Skyborn", "Cloudwing"
     ]
   },
   tabaxi: {
     female: [
       "Adalira", "Bairesai", "Celesta", "Dalirai", "Ephari", "Falistra", "Gahana", "Hashari",
       "Inara", "Jaleila", "Kalista", "Lalara", "Marissa", "Nalira", "Okaira", "Palara",
       "Qahara", "Ralena", "Salira", "Talara", "Uralai", "Valira", "Waliara", "Xalara",
       "Yalira", "Zalira", "Amalira", "Baliara", "Calira", "Dalira"
     ],
     male: [
       "Adal", "Bairen", "Celebran", "Dalir", "Ephar", "Falir", "Gahan", "Hashar",
       "Inar", "Jalei", "Kalir", "Lalar", "Marir", "Nalir", "Okair", "Palar",
       "Qahar", "Ralen", "Salir", "Talar", "Uralai", "Valir", "Waliar", "Xalar",
       "Yalir", "Zalir", "Amalir", "Baliar", "Calir", "Dalir"
     ],
     neutral: [
       "Adi", "Bai", "Celes", "Dali", "Epha", "Fali", "Gah", "Hash",
       "Ina", "Jale", "Kali", "Lal", "Mari", "Nali", "Oka", "Pal",
       "Qah", "Ral", "Sal", "Tal", "Ura", "Val", "Wali", "Xal",
       "Yal", "Zal", "Amal", "Bal", "Cal", "Dal"
     ],
     femaleSurnames: [
       "Swiftpaw", "Silvertongue", "Shadowpaw", "Clawbringer", "Spottedhide", "Stripedbaneer", "Goldmane", "Fiercewhisker",
       "Swiftbrace", "Duskpaw", "Sunpaw", "Moonwhisker", "Starstripe", "Leafpaw", "Dustpaw", "Sandpaw",
       "Stonepaw", "Fireclaw", "Frostwhisker", "Stormclaw", "Airtail", "Seaswift", "Forestpaw", "Mountainclaw",
       "Skypounce", "Shadowstripe", "Ghostpaw", "Smokepaw", "Emberclaw", "Nightwhisker"
     ],
     maleSurnames: [
       "Swiftpaw", "Silvertongue", "Shadowpaw", "Clawbringer", "Spottedhide", "Stripedbaneer", "Goldmane", "Fiercewhisker",
       "Swiftbrace", "Duskpaw", "Sunpaw", "Moonwhisker", "Starstripe", "Leafpaw", "Dustpaw", "Sandpaw",
       "Stonepaw", "Fireclaw", "Frostwhisker", "Stormclaw", "Airtail", "Seaswift", "Forestpaw", "Mountainclaw",
       "Skypounce", "Shadowstripe", "Ghostpaw", "Smokepaw", "Emberclaw", "Nightwhisker"
     ],
     neutralSurnames: [
       "Swiftpaw", "Silvertongue", "Shadowpaw", "Clawbringer", "Spottedhide", "Stripedbaneer", "Goldmane", "Fiercewhisker",
       "Swiftbrace", "Duskpaw", "Sunpaw", "Moonwhisker", "Starstripe", "Leafpaw", "Dustpaw", "Sandpaw",
       "Stonepaw", "Fireclaw", "Frostwhisker", "Stormclaw", "Airtail", "Seaswift", "Forestpaw", "Mountainclaw",
       "Skypounce", "Shadowstripe", "Ghostpaw", "Smokepaw", "Emberclaw", "Nightwhisker"
     ]
   },
   tortle: {
     female: [
       "Aqualina", "Basiliara", "Carapacia", "Doralis", "Embera", "Faunaria", "Gastropoda", "Heliophil",
       "Iridora", "Javaria", "Kalimara", "Lethargara", "Mollusca", "Neritica", "Orbicalis", "Pseudalia",
       "Quasimara", "Reptilia", "Solifara", "Terrapia", "Umbra", "Vitellaria", "Watera", "Xana",
       "Yardia", "Zebraara", "Abalonia", "Barnadia", "Clammera", "Delaria"
     ],
     male: [
       "Aqualis", "Basilior", "Carapax", "Doralis", "Ember", "Fauna", "Gastropod", "Heliophile",
       "Irido", "Javaro", "Kalimar", "Lethargas", "Mollusk", "Neritic", "Orbicar", "Pseudar",
       "Quasimax", "Reptil", "Solifar", "Terrapo", "Umbro", "Vitellar", "Watero", "Xano",
       "Yardo", "Zebrax", "Abalon", "Barnado", "Clammer", "Delaro"
     ],
     neutral: [
       "Aqua", "Basil", "Cara", "Dor", "Emb", "Faun", "Gastr", "Hel",
       "Iri", "Jav", "Kali", "Leth", "Mol", "Ner", "Orb", "Pseud",
       "Qua", "Rep", "Sol", "Terr", "Umb", "Vit", "Wat", "Xan",
       "Yar", "Zeb", "Abal", "Barn", "Clam", "Del"
     ],
     femaleSurnames: [
       "Shellborn", "Coralborn", "Deeprunner", "Oceanborn", "Tideborn", "Sandborn", "Rockborn", "Layerborn",
       "Spiralborn", "Ridgeborn", "Creviceborn", "Currentborn", "Waveborn", "Reefborn", "Shellwork", "Pearlkeeper",
       "Boulderback", "Crabfoe", "Flipperfriend", "Shellsong", "Waterborn", "Mudborn", "Riverborn", "Lakeborn",
       "Marshborn", "Swampborn", "Beachborn", "Shoreborn", "Coveborn", "Deepborn"
     ],
     maleSurnames: [
       "Shellborn", "Coralborn", "Deeprunner", "Oceanborn", "Tideborn", "Sandborn", "Rockborn", "Layerborn",
       "Spiralborn", "Ridgeborn", "Creviceborn", "Currentborn", "Waveborn", "Reefborn", "Shellwork", "Pearlkeeper",
       "Boulderback", "Crabfoe", "Flipperfriend", "Shellsong", "Waterborn", "Mudborn", "Riverborn", "Lakeborn",
       "Marshborn", "Swampborn", "Beachborn", "Shoreborn", "Coveborn", "Deepborn"
     ],
     neutralSurnames: [
       "Shellborn", "Coralborn", "Deeprunner", "Oceanborn", "Tideborn", "Sandborn", "Rockborn", "Layerborn",
       "Spiralborn", "Ridgeborn", "Creviceborn", "Currentborn", "Waveborn", "Reefborn", "Shellwork", "Pearlkeeper",
       "Boulderback", "Crabfoe", "Flipperfriend", "Shellsong", "Waterborn", "Mudborn", "Riverborn", "Lakeborn",
       "Marshborn", "Swampborn", "Beachborn", "Shoreborn", "Coveborn", "Deepborn"
     ]
   },
   changeling: {
     female: [
       "Ambara", "Bella", "Cassara", "Dara", "Elara", "Faye", "Gala", "Hara",
       "Iris", "Jasmine", "Kayla", "Lara", "Maya", "Nara", "Opra", "Pala",
       "Quinara", "Rara", "Sara", "Tara", "Ura", "Vara", "Wara", "Xara",
       "Yara", "Zara", "Alara", "Bara", "Cara", "Dora"
     ],
     male: [
       "Ambar", "Bello", "Cassar", "Daro", "Elaro", "Fayel", "Galar", "Harol",
       "Irol", "Jasper", "Kaylo", "Laro", "Maro", "Naro", "Opro", "Palo",
       "Quinaro", "Raro", "Saro", "Taro", "Uro", "Varo", "Waro", "Xaro",
       "Yaro", "Zaro", "Alaro", "Baro", "Caro", "Doro"
     ],
     neutral: [
       "Amb", "Bell", "Cass", "Dar", "Elar", "Fay", "Gal", "Har",
       "Ir", "Jas", "Kay", "Lar", "May", "Nar", "Opr", "Pal",
       "Quin", "Rar", "Sar", "Tar", "Ur", "Var", "War", "Xar",
       "Yar", "Zar", "Alar", "Bar", "Car", "Dor"
     ],
     femaleSurnames: [
       "Shapeborn", "Changeborn", "Maskwearer", "Visageborn", "Formshifter", "Shimmerborn", "Illusionborn", "Mimicborn",
       "Trickborn", "Truthbender", "Falseface", "Wandererborn", "Nomadborn", "Shadowborn", "Ghostborn", "Spiritborn",
       "Phantomborn", "Veilborn", "Mysteryborn", "Enigmaborn", "Puzzleborn", "Riddleborn", "Secretborn", "Hiddenborn",
       "Lurkerborn", "Weaselborn", "Slipperyborn", "Flightborn", "Wanderborn", "Pathlessborn"
     ],
     maleSurnames: [
       "Shapeborn", "Changeborn", "Maskwearer", "Visageborn", "Formshifter", "Shimmerborn", "Illusionborn", "Mimicborn",
       "Trickborn", "Truthbender", "Falseface", "Wandererborn", "Nomadborn", "Shadowborn", "Ghostborn", "Spiritborn",
       "Phantomborn", "Veilborn", "Mysteryborn", "Enigmaborn", "Puzzleborn", "Riddleborn", "Secretborn", "Hiddenborn",
       "Lurkerborn", "Weaselborn", "Slipperyborn", "Flightborn", "Wanderborn", "Pathlessborn"
     ],
     neutralSurnames: [
       "Shapeborn", "Changeborn", "Maskwearer", "Visageborn", "Formshifter", "Shimmerborn", "Illusionborn", "Mimicborn",
       "Trickborn", "Truthbender", "Falseface", "Wandererborn", "Nomadborn", "Shadowborn", "Ghostborn", "Spiritborn",
       "Phantomborn", "Veilborn", "Mysteryborn", "Enigmaborn", "Puzzleborn", "Riddleborn", "Secretborn", "Hiddenborn",
       "Lurkerborn", "Weaselborn", "Slipperyborn", "Flightborn", "Wanderborn", "Pathlessborn"
     ]
   },
   warforged: {
     female: [
       "Construct-7A", "Bronze-Maiden", "Chamber-Five", "Delta-Unit", "Engineered-Iris", "Fabrication-One", "Guardian-Azure", "Harmonic-Steel",
       "Iron-Maiden", "Justice-Keeper", "Kinetic-Force", "Lattice-One", "Machine-Twelve", "Nova-Core", "Opus-Guard", "Prism-Construct",
       "Quantum-5B", "Resonance-Guard", "Sentinel-One", "Torsion-Frame", "Uniter-Six", "Vessel-Nine", "Waltz-Guard", "Xenial-Core",
       "Yonder-Five", "Zealous-Guard", "Adamant-One", "Bastion-Five", "Calibur-Six", "Defender-Seven"
     ],
     male: [
       "Construct-7B", "Bronze-Sentinel", "Chamber-Six", "Delta-Guard", "Engineered-Helm", "Fabrication-Two", "Guardian-Steel", "Harmonic-Guard",
       "Iron-Guard", "Justice-Sentinel", "Kinetic-Guardian", "Lattice-Two", "Machine-Thirteen", "Nova-Guard", "Opus-Sentinel", "Prism-Guard",
       "Quantum-5C", "Resonance-Sentinel", "Sentinel-Two", "Torsion-Guard", "Uniter-Seven", "Vessel-Ten", "Waltz-Sentinel", "Xenial-Guard",
       "Yonder-Six", "Zealous-Sentinel", "Adamant-Two", "Bastion-Six", "Calibur-Seven", "Defender-Eight"
     ],
     neutral: [
       "Construct-7", "Bronze", "Chamber", "Delta", "Engineered", "Fabrication", "Guardian", "Harmonic",
       "Iron", "Justice", "Kinetic", "Lattice", "Machine", "Nova", "Opus", "Prism",
       "Quantum", "Resonance", "Sentinel", "Torsion", "Uniter", "Vessel", "Waltz", "Xenial",
       "Yonder", "Zealous", "Adamant", "Bastion", "Calibur", "Defender"
     ],
     femaleSurnames: [
       "Construct01", "Sentinel01", "Guardian01", "Protector01", "Defender01", "Warden01", "Keeper01", "Sentinel02",
       "Guardian02", "Protector02", "Defender02", "Warden02", "Keeper02", "Sentinel03", "Guardian03", "Protector03",
       "Defender03", "Warden03", "Keeper03", "Sentinel04", "Guardian04", "Protector04", "Defender04", "Warden04",
       "Keeper04", "Sentinel05", "Guardian05", "Protector05", "Defender05", "Warden05"
     ],
     maleSurnames: [
       "Construct01", "Sentinel01", "Guardian01", "Protector01", "Defender01", "Warden01", "Keeper01", "Sentinel02",
       "Guardian02", "Protector02", "Defender02", "Warden02", "Keeper02", "Sentinel03", "Guardian03", "Protector03",
       "Defender03", "Warden03", "Keeper03", "Sentinel04", "Guardian04", "Protector04", "Defender04", "Warden04",
       "Keeper04", "Sentinel05", "Guardian05", "Protector05", "Defender05", "Warden05"
     ],
     neutralSurnames: [
       "Construct01", "Sentinel01", "Guardian01", "Protector01", "Defender01", "Warden01", "Keeper01", "Sentinel02",
       "Guardian02", "Protector02", "Defender02", "Warden02", "Keeper02", "Sentinel03", "Guardian03", "Protector03",
       "Defender03", "Warden03", "Keeper03", "Sentinel04", "Guardian04", "Protector04", "Defender04", "Warden04",
       "Keeper04", "Sentinel05", "Guardian05", "Protector05", "Defender05", "Warden05"
     ]
   },
   kalashtar: {
     female: [
       "Ashara", "Brenya", "Celestra", "Dalanis", "Elowen", "Fayani", "Galena", "Halina",
       "Iriana", "Jasmine", "Kalina", "Lyanna", "Mariana", "Nalini", "Ophelia", "Palina",
       "Quriana", "Ranira", "Selina", "Talina", "Uliana", "Valina", "Walina", "Xanira",
       "Yanira", "Zalina", "Amelina", "Briana", "Celina", "Dalina"
     ],
     male: [
       "Ashan", "Brenan", "Celebrian", "Dalian", "Elowen", "Fayan", "Galen", "Halian",
       "Irian", "Jaspian", "Kalian", "Lyan", "Marian", "Nalian", "Ophian", "Palian",
       "Qurian", "Ranian", "Selian", "Talian", "Ulian", "Valian", "Walian", "Xanian",
       "Yanian", "Zalian", "Amelian", "Brian", "Celian", "Dalian"
     ],
     neutral: [
       "Ash", "Bren", "Celes", "Dal", "Elo", "Fay", "Gal", "Hal",
       "Iri", "Jas", "Kal", "Lyan", "Mar", "Nal", "Oph", "Pal",
       "Qur", "Ran", "Sel", "Tal", "Uli", "Val", "Wal", "Xan",
       "Yan", "Zal", "Amel", "Bri", "Cel", "Dal"
     ],
     femaleSurnames: [
       "Mindborn", "Spiritborn", "Soulborn", "Psychborn", "Mentalist", "Etherealborn", "Planarborn", "Voidborn",
       "Astralborn", "Dreamborn", "Visionborn", "Insightborn", "Truthseer", "Mindeye", "Spiritspeaker", "Soulkeeper",
       "Psycheborn", "Awareness", "Illuminated", "Enlightened", "Receptive", "Sensitive", "Attuned", "Harmonic",
       "Resonant", "Aligned", "Unified", "Balanced", "Centered", "Grounded"
     ],
     maleSurnames: [
       "Mindborn", "Spiritborn", "Soulborn", "Psychborn", "Mentalist", "Etherealborn", "Planarborn", "Voidborn",
       "Astralborn", "Dreamborn", "Visionborn", "Insightborn", "Truthseer", "Mindeye", "Spiritspeaker", "Soulkeeper",
       "Psycheborn", "Awareness", "Illuminated", "Enlightened", "Receptive", "Sensitive", "Attuned", "Harmonic",
       "Resonant", "Aligned", "Unified", "Balanced", "Centered", "Grounded"
     ],
     neutralSurnames: [
       "Mindborn", "Spiritborn", "Soulborn", "Psychborn", "Mentalist", "Etherealborn", "Planarborn", "Voidborn",
       "Astralborn", "Dreamborn", "Visionborn", "Insightborn", "Truthseer", "Mindeye", "Spiritspeaker", "Soulkeeper",
       "Psycheborn", "Awareness", "Illuminated", "Enlightened", "Receptive", "Sensitive", "Attuned", "Harmonic",
       "Resonant", "Aligned", "Unified", "Balanced", "Centered", "Grounded"
     ]
   },
   harengon: {
     female: [
       "Alewife", "Buckwheat", "Cottontail", "Delia", "Eastwind", "Fawn", "Gingersnap", "Harriet",
       "Iris", "Junebug", "Kelsey", "Lavender", "Moonbeam", "Nutmeg", "Olivia", "Poppy",
       "Quickpaw", "Rosebud", "Sunflower", "Thistle", "Umber", "Verbena", "Willow", "Xanthe",
       "Yarrow", "Zinnia", "Angelica", "Barley", "Clover", "Daisy"
     ],
     male: [
       "Alewort", "Buckhorn", "Cottonwall", "Delian", "Eastfield", "Fawnhelm", "Gingertop", "Harry",
       "Iris", "Junewood", "Kelswin", "Lavendar", "Moonwell", "Nutworth", "Oliver", "Poppyseed",
       "Quickfoot", "Rosewell", "Sunwell", "Thistlewind", "Umberfield", "Verbwin", "Willowfoot", "Xanthos",
       "Yarrowfield", "Zinzel", "Angelwind", "Barleyworth", "Cloverfield", "Daisywell"
     ],
     neutral: [
       "Ale", "Buck", "Cott", "Del", "East", "Fawn", "Ging", "Harry",
       "Iris", "June", "Kels", "Lav", "Moon", "Nut", "Oli", "Pop",
       "Quick", "Rose", "Sun", "This", "Umb", "Verb", "Will", "Xan",
       "Yarr", "Zin", "Angel", "Barley", "Clov", "Daisy"
     ],
     femaleSurnames: [
       "Fortuneborn", "Luckyfoot", "Luckyhop", "Chanceborn", "Destinyborn", "Fatebringer", "Pathfinder", "Wanderer",
       "Adventurer", "Roamer", "Wayfarer", "Nomad", "Traveler", "Quester", "Expeditioner", "Explorer",
       "Discoverer", "Seeker", "Hunter", "Tracker", "Ranger", "Scout", "Guide", "Pathless",
       "Boundless", "Restless", "Tireless", "Ceaseless", "Endless", "Eternal"
     ],
     maleSurnames: [
       "Fortuneborn", "Luckyfoot", "Luckyhop", "Chanceborn", "Destinyborn", "Fatebringer", "Pathfinder", "Wanderer",
       "Adventurer", "Roamer", "Wayfarer", "Nomad", "Traveler", "Quester", "Expeditioner", "Explorer",
       "Discoverer", "Seeker", "Hunter", "Tracker", "Ranger", "Scout", "Guide", "Pathless",
       "Boundless", "Restless", "Tireless", "Ceaseless", "Endless", "Eternal"
     ],
     neutralSurnames: [
       "Fortuneborn", "Luckyfoot", "Luckyhop", "Chanceborn", "Destinyborn", "Fatebringer", "Pathfinder", "Wanderer",
       "Adventurer", "Roamer", "Wayfarer", "Nomad", "Traveler", "Quester", "Expeditioner", "Explorer",
       "Discoverer", "Seeker", "Hunter", "Tracker", "Ranger", "Scout", "Guide", "Pathless",
       "Boundless", "Restless", "Tireless", "Ceaseless", "Endless", "Eternal"
     ]
   },
   eladrin: {
     female: [
       "Aelindor", "Briessa", "Calamwen", "Dalisande", "Elowen", "Farelle", "Galadriel", "Helluin",
       "Irimë", "Jamesilla", "Kaiyeth", "Laurëa", "Morwen", "Nëssa", "Oiorwen", "Pinthalion",
       "Querendë", "Rhaessa", "Saeleth", "Tauriel", "Ulanis", "Valewen", "Watara", "Xanthe",
       "Yavanna", "Zephyra", "Alastor", "Beornë", "Celaëndor", "Dorianna"
     ],
     male: [
       "Aerendil", "Belanor", "Caeldrim", "Delanorin", "Eladamor", "Falathion", "Galadwen", "Halindor",
       "Idaemon", "Jameson", "Kaelith", "Lanvaer", "Mortelion", "Narbeleth", "Orendiel", "Palanthor",
       "Quendor", "Rendarion", "Selandor", "Talinor", "Ulavor", "Vaeldir", "Walendor", "Xandrim",
       "Yalion", "Zelendor", "Aldebar", "Belthron", "Caranthir", "Denethor"
     ],
     neutral: [
       "Aelion", "Brion", "Caelen", "Dion", "Elwen", "Filon", "Gaelen", "Helon",
       "Ilion", "Jalen", "Kaelen", "Loren", "Meren", "Nalen", "Olwen", "Pelen",
       "Quen", "Relen", "Selen", "Telen", "Ulen", "Valen", "Welen", "Xalen",
       "Yelen", "Zalen", "Adrien", "Baelen", "Calon", "Dalen"
     ],
     femaleSurnames: [
       "Seasonborn", "Springborn", "Summerborn", "Autumnborn", "Winterborn", "Celestialborn", "Starborn", "Moonborn",
       "Sunborn", "Dawnbringer", "Duskbringer", "Twilightborn", "Nightborn", "Starlight", "Moonglow", "Sunfire",
       "Dawnfire", "Duskfire", "Twilightfire", "Nightfire", "Elvenborn", "Feyborn", "Magicborn", "Enchanterborn",
       "Spellborn", "Mysterborn", "Wonderborn", "Dreamborn", "Visionborn", "Spiritborn"
     ],
     maleSurnames: [
       "Seasonborn", "Springborn", "Summerborn", "Autumnborn", "Winterborn", "Celestialborn", "Starborn", "Moonborn",
       "Sunborn", "Dawnbringer", "Duskbringer", "Twilightborn", "Nightborn", "Starlight", "Moonglow", "Sunfire",
       "Dawnfire", "Duskfire", "Twilightfire", "Nightfire", "Elvenborn", "Feyborn", "Magicborn", "Enchanterborn",
       "Spellborn", "Mysterborn", "Wonderborn", "Dreamborn", "Visionborn", "Spiritborn"
     ],
     neutralSurnames: [
       "Seasonborn", "Springborn", "Summerborn", "Autumnborn", "Winterborn", "Celestialborn", "Starborn", "Moonborn",
       "Sunborn", "Dawnbringer", "Duskbringer", "Twilightborn", "Nightborn", "Starlight", "Moonglow", "Sunfire",
       "Dawnfire", "Duskfire", "Twilightfire", "Nightfire", "Elvenborn", "Feyborn", "Magicborn", "Enchanterborn",
       "Spellborn", "Mysterborn", "Wonderborn", "Dreamborn", "Visionborn", "Spiritborn"
     ]
   },
   fairy: {
     female: [
       "Aethel", "Bluebell", "Candida", "Daphne", "Ethereal", "Fey", "Gossamer", "Hazel",
       "Iris", "Jasmine", "Kyrie", "Lilac", "Magnolia", "Narcissa", "Opalesca", "Petunia",
       "Quintesse", "Rosalind", "Sylpha", "Thistle", "Ulva", "Verbena", "Windy", "Xenia",
       "Yarrow", "Zephyr", "Aileana", "Blakely", "Cara", "Dareth"
     ],
     male: [
       "Aelian", "Blaidd", "Cedric", "Dagian", "Ethereon", "Feylan", "Gossamer", "Hailan",
       "Irian", "Jasper", "Kyriel", "Lilian", "Magnon", "Narcian", "Opalian", "Petrian",
       "Quintilian", "Rosian", "Sylvan", "Thian", "Ulian", "Verdian", "Wiladon", "Xenian",
       "Yarian", "Zephyran", "Ailean", "Blaidon", "Carian", "Darian"
     ],
     neutral: [
       "Aether", "Blae", "Cade", "Dae", "Eth", "Fey", "Goss", "Hai",
       "Iri", "Jas", "Kyr", "Lil", "Mag", "Nar", "Opal", "Pet",
       "Quin", "Ros", "Syl", "Thi", "Ul", "Ver", "Win", "Xen",
       "Yar", "Zeph", "Aile", "Blak", "Car", "Dar"
     ],
     femaleSurnames: [
       "Pixieborn", "Spriteborn", "Feyborn", "Magicborn", "Enchantborn", "Wildborn", "Naturebom", "Flowerbom",
       "Gardenborn", "Silkwing", "Dewdrop", "Starbright", "Moonwhisper", "Sunbeam", "Mistborn", "Cloudborn",
       "Skyborn", "Lightborn", "Shadowborn", "Dreamborn", "Wonderborn", "Mysterborn", "Magickborn", "Spellborn",
       "Auraborn", "Glitterborn", "Sparkleborn", "Shimmerborn", "Glowborn", "Radiantborn"
     ],
     maleSurnames: [
       "Pixieborn", "Spriteborn", "Feyborn", "Magicborn", "Enchantborn", "Wildborn", "Naturebom", "Flowerbom",
       "Gardenborn", "Silkwing", "Dewdrop", "Starbright", "Moonwhisper", "Sunbeam", "Mistborn", "Cloudborn",
       "Skyborn", "Lightborn", "Shadowborn", "Dreamborn", "Wonderborn", "Mysterborn", "Magickborn", "Spellborn",
       "Auraborn", "Glitterborn", "Sparkleborn", "Shimmerborn", "Glowborn", "Radiantborn"
     ],
     neutralSurnames: [
       "Pixieborn", "Spriteborn", "Feyborn", "Magicborn", "Enchantborn", "Wildborn", "Naturebom", "Flowerbom",
       "Gardenborn", "Silkwing", "Dewdrop", "Starbright", "Moonwhisper", "Sunbeam", "Mistborn", "Cloudborn",
       "Skyborn", "Lightborn", "Shadowborn", "Dreamborn", "Wonderborn", "Mysterborn", "Magickborn", "Spellborn",
       "Auraborn", "Glitterborn", "Sparkleborn", "Shimmerborn", "Glowborn", "Radiantborn"
     ]
   }
};
