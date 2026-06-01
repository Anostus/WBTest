# Expanded Monster Encounter Tables Report

Created `monsters/expanded-monster-encounter-tables.html`.

## Scope

- Monster entries covered: 924
- Source data: `monsters/monster-index.json`
- Encounter-level tables: 10, grouped by HDE into levels 1 through 10+
- Terrain and encounter-type tables: 18
- Navigation files updated: 1041

## Dice policy

Tables with 100 or fewer entries use d%. Tables with more than 100 entries use d1000. Roll ranges are distributed evenly across the die size.

## Terrain / type counts

| Table | Primary monsters |
|---|---:|
| Underworld, Caves & Dungeons | 118 |
| Settled Lands, Roads & Ruins | 25 |
| Open Country & Grasslands | 25 |
| Forest & Fey Woods | 99 |
| Rivers, Lakes & Coasts | 47 |
| Swamps & Jungles | 34 |
| Hills & Mountains | 37 |
| Deserts, Barren Lands & Wastelands | 17 |
| Seas & Deep Waters | 60 |
| Sky & Aerial Encounters | 64 |
| Haunted Places & Undead | 108 |
| Planar, Elemental & Infernal | 78 |
| Constructs, Clockworks & Living Objects | 48 |
| Dragons, Wyrms & Titanic Reptiles | 23 |
| Giants & Giant-Kin | 27 |
| Humanoids, Peoples & Factions | 52 |
| Animals, Vermin & Ordinary Beasts | 44 |
| Oozes, Slimes, Fungi & Strange Plants | 18 |


## Encounter-level counts

| Encounter Level | Monsters |
|---|---:|
| 1 | 85 |
| 2 | 119 |
| 3 | 101 |
| 4 | 92 |
| 5 | 82 |
| 6 | 67 |
| 7 | 53 |
| 8 | 51 |
| 9 | 68 |
| 10+ | 206 |

## Interactive rolling update

- Added Maze Rats-style roll buttons to all 28 expanded monster encounter tables.
- Extended `assets/site.js` to support d% and d1000 rolls, including en-dash roll ranges such as `001–008`.
- Left the existing coverage summary / table index at the top of the page unchanged.

