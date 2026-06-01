# Monster Conversion Fixes

This patch updates the 35 high-confidence bad Basic Fantasy → White Box monster conversions identified in the audit. It corrects parser spillover, false keyword-derived Special tags, malformed HD/AC fields, and missing signature abilities.

| Monster | Slug | Key fix |
|---|---|---|
| Aboleth | `aboleth-bfomnibus` | special → tentacle transformation, enslave, illusions, slime/water breathing, air suffocation, see description |
| Skum | `skum-bfomnibus` | attacks → Bite, Claw, or Weapon (1d6+2); special → darkvision, aboleth slime breathing limitation, fearless near master, frenzy if master dies |
| Advi, Avenger | `advi-avenger-bfomnibus` | attacks → Blade (1d6+2) or Beam (4d6); special → immune to charm/fear, fire resistance, beam every 3 rounds ignites flammables |
| Advi, Charity | `advi-charity-bfomnibus` | attacks → Fireballs (1d6, up to 4 targets); special → immune to charm/fear, fire resistance, four 1d6 fireballs, 80-foot range, ignites flammables |
| Advi, Diligence | `advi-diligence-bfomnibus` | attacks → Tools (1d3); special → immune to charm/fear, fire resistance |
| Aergian Amalgamation | `aergian-amalgamation-bfomnibus` | attacks → Grasp (1d6+1) or Weapon (1d6); special → grasp energy drain, 1d3 weapon attacks, light vulnerability, poison immunity, darkvision |
| Aeromi | `aeromi-bfomnibus` | special → glide, climb, darkvision, sunlight/light penalty |
| Allip | `allip-bfomnibus` | attacks → Touch (energy drain); special → insane babbling paralysis, energy drain heals 1d6 hp, undead immunities, turned as mummy, mind-reading backlash |
| Amalgam | `amalgam-bfomnibus` | attacks → Engulf (1d6 cold + energy drain); special → magic weapons to hit, cold immunity, at-will hold/invisibility/silence, cloudkill 1/day, undead immunities, turned as ghost |
| Armorphage | `armorphage-bfomnibus` | attacks → Tendril (1d6) or Constrict (1d6+1); special → enthrall wearer, host control, daily energy drain, constrict on removal, split damage while worn |
| Awful Offal | `awful-offal-bfomnibus` | attacks → Bite or Spit (1d6+1); special → acid bile/spit, splits when struck in melee, half damage from ranged weapons, silver prevents splitting |
| Axolotl, Giant | `axolotl-giant-bfomnibus` | attacks → Bite (1d6+2) or Gaze (mind swap); special → magic weapons to hit, regeneration, mind-swap gaze (save vs. Spells) |
| Living Statue, Iron | `living-statue-iron-bfrpg` | attacks → Fist (1d6+1); special → metal weapons stick, save vs. Spells |
| Living Statue, Stone | `living-statue-stone-bfrpg` | attacks → Lava spray (1d6+1); special → lava spray, 5-foot range |
| Dragon Turtle | `dragon-turtle-bfrpg` | attacks → Bite (1d6+2) or Breath (30d8); special → steam breath weapon 100 ft. by 75 ft. (save for half), poison immunity, age-category spell use |
| Cragodile | `cragodile-bfomnibus` | special → half damage from piercing/edged weapons, underwater bottom-walking, aquatic ambush/surprise 1-4 |
| Kappa | `kappa-bfomnibus` | attacks → Claw and Choke (1d6); special → hold/grab, choke and drowning, aquatic |
| Suiko | `suiko-bfomnibus` | attacks → Claw/Knee and Choke (1d6+2); special → hold/grab, stronger choke and drowning, knee attack, aquatic |
| Main Bush | `main-bush-bfomnibus` | attacks → Entangle (1d3/round); special → undead, surprise 1-3, entangle, drag 5 ft./round, ongoing damage, turned as 4 HD |
| Small Bush | `small-bush-bfomnibus` | attacks → Entangle (1d3/round); special → undead, surprise 1-3, entangle, drag 5 ft./round, ongoing damage, destroyed if turned |
| Otyugh | `otyugh-bfomnibus` | attacks → Tentacle (1d6; hold/drag) or Bite (1d6, disease); special → tentacle hold/drag, automatic tentacle damage while held, diseased bite/filth fever |
| Plague Hound | `plague-hound-bfomnibus` | special → paralysis, ghoul fever, undead immunities, turned as wight |
| Sea-Ghoul | `sea-ghoul-bfomnibus` | special → poison aura 5 ft., paralysis 1/day, aquatic undead, turned as ghoul, undead immunities, avoids holy water |
| Sea-Ghast | `sea-ghast-bfomnibus` | special → poison aura 10 ft., paralysis 1d4+1/day, aquatic undead, turned as ghast, undead immunities, avoids holy water |
| Skeletal Legs | `skeletal-legs-bfomnibus` | attacks → Kick (1d3); special → undead immunities, turned as skeleton (+1), surprise 1-3, half edged damage, 1 point from arrows/bolts/stones, mindless |
| Eel, Electric | `common-electric-bfomnibus` | name → Eel, Electric; armor class → 9 [10]; hit dice → 2; attacks → Bite (1d3) or Shock (special); special → electric burst 1/turn in water, range-based damage, save half, stun 2d4 rounds, electricity immunity; hde xp → 3/60 |
| Eel, Giant | `eel-common-electric-weed-giant-giant-bfomnibus` | name → Eel, Giant; armor class → 8 [11]; hit dice → 2, 4, or 6; attacks → Bite (1d6/1d6+1/1d6+2); special → 1-in-6 can shock 3/day (1d4 per HD, 20-ft. radius, save half), electricity resistance; hde xp → 2, 4, or 6 (electric: 3, 5, or 7)/30/120/400 (electric: 60/240/600) |
| Eel, Weed | `eel-common-electric-weed-giant-weed-bfomnibus` | name → Eel, Weed; armor class → 7 [12]; hit dice → 1; attacks → Bite (1d3 + poison); special → poison bite (save or die), camouflage, surprise 1-5; hde xp → 1/15 |
| Corpse Abomination | `corpse-abomination-bfomnibus` | armor class → 6 [13] (6 HD), 3 [16] (12 HD), or 0 [19] (18 HD); hit dice → 6, 12, or 18; attacks → Bludgeon (1d6/1d6+1/1d6+2); special → undead, stench, 10-ft. reach, leap 60 ft., 6-HD form can be turned; hde xp → 6, 12, or 18/400/2,000/3,800 |
| Vermen | `vermen-bfomnibus` | hit dice → 1+1; special → group morale, leaders in large groups |
| Water Weird | `water-weird-bfomnibus` | hit dice → 3+3; attacks → Grab (drowning); special → invisible in water, surprise 1-4, save vs. Paralysis or dragged under, drowning, disrupted at 0 hp, special weapon/spell effects, controls water elementals |
| Golem, Amber | `golem-amber-bfrpg` | special → magic weapons to hit, golem immunities/berserk, detect invisible, track 95%, healed by electricity |
| Golem, Bone | `golem-bone-bfrpg` | special → magic weapons to hit, golem immunities/berserk, not undead/cannot be turned, four weapon arms |
| Golem, Bronze | `golem-bronze-bfrpg` | attacks → Fist (1d6+2 plus heat); special → magic weapons to hit, golem immunities/berserk, heat damage, molten spray when hit |
| Cu-Sidhe (Special) | `cu-sidhe-special-bfomnibus` | attacks → Bite (1d6; 1d6+1 enlarged); special → detect magic/invisibility, self-enlarge 2/day, silver or magic weapons to hit, regeneration above 0 hp, darkvision, +4 saves vs. magic |
