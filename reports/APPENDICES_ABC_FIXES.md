# Appendix A-C Conversion Fixes

This pass continues the Basic Fantasy → White Box monster cleanup by reviewing the audit report appendices: false `spells` tags, false `clerical abilities` tags, and mechanically malformed stat fields.

## Summary

- Changed 207 monster pages / JSON records.
- Made 257 field-level edits.
- Reviewed 133 Appendix A entries and 96 Appendix B entries from the audit report.
- Applied manual Appendix C stat cleanup to 44 slugs, including variable AC/HD ranges, literal-label HD errors, and variable HDE/XP ranges.

## What changed

- 91: manual Appendix A/B/C review
- 89: removed likely false spells tag
- 24: removed likely false clerical abilities tag
- 17: removed likely false spells tag; removed likely false clerical abilities tag; normalized false charm/sleep/hold immunity tags
- 16: removed likely false clerical abilities tag; normalized false charm/sleep/hold immunity tags
- 8: normalized false charm/sleep/hold immunity tags
- 6: removed likely false spells tag; removed likely false clerical abilities tag
- 5: removed likely false spells tag; normalized false charm/sleep/hold immunity tags
- 1: rephrased generic spells tag for actual spellcaster; removed likely false clerical abilities tag

## Edited records

| Monster | Slug | Field | Before | After |
|---|---|---|---|---|
| Aghar | `aghar-bfomnibus` | special | magic weapons to hit, spells, fear, electricity, immunity | magic weapons to hit, earth powers, whirlwind form, electricity immunity, half damage from magical electricity/earth |
| Allip | `allip-bfomnibus` | special | insane babbling paralysis, energy drain heals 1d6 hp, undead immunities, turned as mummy, mind-reading backlash | insane babbling paralysis, energy drain heals 1d6 hp, undead immunities, turned as mummy, mind-reading backlash, immune to sleep/charm/hold |
| Amalgam | `amalgam-bfomnibus` | special | magic weapons to hit, cold immunity, at-will hold/invisibility/silence, cloudkill 1/day, undead immunities, turned as ghost | magic weapons to hit, cold immunity, at-will hold/invisibility/silence, cloudkill 1/day, undead immunities, turned as ghost, immune to sleep/charm/hold |
| Amarok | `amarok-bfomnibus` | special | spells, clerical abilities, darkvision | darkvision, strength damage bonus, pack tactics, leaders/shamans/witches in lair |
| Anubian | `anubian-bfomnibus` | special | clerical abilities | None |
| Bagobone, Aquatic | `bagobone-aquatic-bfomnibus` | special | magic weapons to hit, spells, hold/grab, charm, sleep, fire, immunity, undead | magic weapons to hit, fire, undead, immune to sleep/charm/hold |
| Bagobone, Forest | `bagobone-forest-bfomnibus` | special | magic weapons to hit, spells, hold/grab, charm, sleep, fire, immunity, undead | magic weapons to hit, fire, undead, immune to sleep/charm/hold |
| Baldander | `baldander-bfomnibus` | special | spells, clerical abilities, shapechanging | spells, shapechanging |
| Balroach | `balroach-bfomnibus` | special | poison, disease, clerical abilities, nausea, immunity | poison, disease, nausea, immunity |
| Barghest | `barghest-bfomnibus` | special | silver weapons to hit, paralysis, clerical abilities, shapechanging, hug, gaze, immunity, undead, see description | silver weapons to hit, paralyzing fear gaze, shapechanging, tenacious return, turned as wight, unholy but not undead |
| Barkgheist | `barkgheist-bfomnibus` | special | silver weapons to hit, paralysis, spells, clerical abilities, invisibility, hold/grab, charm, sleep, see description | silver weapons to hit, paralysis, invisibility, see description, immune to sleep/charm/hold |
| Bear, Dream | `bear-dream-bfomnibus` | special | spells, hug | hug |
| Bear, Ghost | `bear-ghost-bfomnibus` | special | magic weapons to hit, spells, clerical abilities, fear, hold/grab, hug, charm, sleep, see description | magic weapons to hit, fear, hug, see description, immune to sleep/charm/hold |
| Black Knight | `black-knight-bfomnibus` | special | energy drain, spells, clerical abilities, invisibility, hold/grab, charm, sleep, fire, see description | energy drain, spells, invisibility, charm, fire, see description, immune to sleep/charm/hold |
| Blade Spirit (Common) | `blade-spirit-common-bfomnibus` | special | magic weapons to hit, poison, spells, clerical abilities, hold/grab, charm, sleep, undead | magic weapons to hit, poison, hold/grab, charm, sleep, undead |
| Blade Spirit (Greater) | `blade-spirit-greater-bfomnibus` | special | magic weapons to hit, poison, spells, clerical abilities, hold/grab, charm, sleep, undead | magic weapons to hit, poison, hold/grab, charm, sleep, undead |
| Bloodshroud | `bloodshroud-bfomnibus` | special | poison, paralysis, energy drain, spells, clerical abilities, hold/grab, charm, sleep, see description | poison, paralysis, energy drain, see description, immune to sleep/charm/hold |
| Boggart | `boggart-bfomnibus` | special | spells, fear, illusion, charm, sleep | fear, illusion, charm, sleep |
| Bone Horror (Common) | `bone-horror-common-bfomnibus` | special | magic weapons to hit, poison, spells, clerical abilities, hold/grab, charm, sleep, fire, see description | magic weapons to hit, poison, fire, see description, immune to sleep/charm/hold |
| Bone Horror (Greater) | `bone-horror-greater-bfomnibus` | special | magic weapons to hit, poison, spells, clerical abilities, hold/grab, charm, sleep, fire, see description | magic weapons to hit, poison, fire, see description, immune to sleep/charm/hold |
| Bone Viper | `bone-viper-bfomnibus` | special | poison, clerical abilities, hold/grab, charm, sleep, undead | poison, hold/grab, charm, sleep, undead |
| Brain Parasite | `brain-parasite-bfomnibus` | special | disease, spells | disease |
| Bruhl | `bruhl-bfomnibus` | special | spells, clerical abilities, darkvision | spells, darkvision |
| Bubák (or Living Scarecrow) | `bub-k-or-living-scarecrow-bfomnibus` | special | spells, charm | charm |
| Cacophony | `cacophony-bfomnibus` | special | spells, fear | fear |
| Cadaver | `cadaver-bfomnibus` | special | spells, clerical abilities, hold/grab, charm, sleep, immunity, undead | 8th-level Cleric powers/spells, turns undead, undead immunities, turned as mummy |
| Cadaver | `cadaver-bfomnibus` | special | 8th-level Cleric powers/spells, turns undead, undead immunities, turned as mummy | 8th-level Cleric powers/spells, turns undead, undead immunities, turned as mummy, immune to sleep/charm/hold |
| Celestial, Arbiter | `celestial-arbiter-bfomnibus` | special | spells, clerical abilities, teleportation, hold/grab, illusion, charm, sleep, immunity, see description | teleportation, 18th-level Cleric spellcasting, immune to sleep/hold/charm/illusions, banished at 0 hp unless on home plane, see description |
| Celestial, Ascended | `celestial-ascended-bfomnibus` | special | magic weapons to hit, spells, clerical abilities, hold/grab, illusion, charm, sleep, silver weapons to hit | magic weapons to hit, 11th-level Cleric spellcasting, immune to sleep/hold/charm/illusions, banished at 0 hp unless on home plane |
| Celestial, Charger | `celestial-charger-bfomnibus` | special | spells, hold/grab, illusion, charm, sleep, immunity, silver weapons to hit | hold/grab, illusion, charm, sleep, immunity, silver weapons to hit |
| Celestial, Descendant | `celestial-descendant-bfomnibus` | special | spells, clerical abilities | 4th-level Cleric spellcasting, immune to sleep/hold/charm/illusions, banished at 0 hp unless on home plane |
| Celestial, Egregor | `celestial-egregor-bfomnibus` | special | magic weapons to hit, poison, spells, clerical abilities, teleportation, hold/grab, illusion, charm, see description | magic weapons to hit, poison/gas immunity, teleportation, 16th-level Cleric spellcasting, immune to sleep/hold/charm/illusions, banished at 0 hp unless on home plane, see description |
| Celestial, Guardian | `celestial-guardian-bfomnibus` | special | magic weapons to hit, spells, clerical abilities, teleportation, hold/grab, illusion, charm, sleep, see description | magic weapons to hit, teleportation, 10th-level Cleric spellcasting, immune to sleep/hold/charm/illusions, banished at 0 hp unless on home plane, see description |
| Celestial, Messenger | `celestial-messenger-bfomnibus` | special | magic weapons to hit, spells, hold/grab, illusion, charm, sleep, immunity, silver weapons to hit | magic weapons to hit, hold/grab, illusion, charm, sleep, immunity, silver weapons to hit |
| Celestial, Oracle | `celestial-oracle-bfomnibus` | special | spells, clerical abilities, hold/grab, illusion, charm, sleep, surprise | 12th-level Cleric spellcasting, immune to sleep/hold/charm/illusions, banished at 0 hp unless on home plane |
| Celestial, Solar | `celestial-solar-bfomnibus` | special | magic weapons to hit, spells, clerical abilities, hold/grab, illusion, charm, sleep, immunity, see description | magic weapons to hit, 9th-level Cleric spellcasting and turning, immune to sleep/hold/charm/illusions, banished at 0 hp unless on home plane, see description |
| Celestial, Warden | `celestial-warden-bfomnibus` | special | magic weapons to hit, poison, spells, clerical abilities, teleportation, hold/grab, illusion, charm, see description | magic weapons to hit, poison/gas immunity, teleportation, 16th-level Cleric spellcasting, immune to sleep/hold/charm/illusions, banished at 0 hp unless on home plane, see description |
| Celestial, Watcher | `celestial-watcher-bfomnibus` | special | spells, clerical abilities, hold/grab, illusion, charm, sleep, immunity | 12th-level Cleric and 10th-level Magic-User spellcasting, immune to sleep/hold/charm/illusions, banished at 0 hp unless on home plane |
| Changeling | `changeling-bfomnibus` | special | spells, illusion, fire | illusion, fire |
| Cheiropteran | `cheiropteran-bfomnibus` | special | spells, clerical abilities, shapechanging, illusion, immunity, silver weapons to hit | spellcasting, shapechanging, illusion, immunity, silver weapons to hit |
| Clockwork Skeleton | `clockwork-skeleton-bfomnibus` | special | spells, clerical abilities, hold/grab, charm, sleep, electricity, immunity, undead | electricity, undead, immune to sleep/charm/hold |
| Cockroach, Giant (Giant) | `cockroach-giant-giant-bfomnibus` | special | poison, disease, clerical abilities, nausea, immunity | poison, disease, nausea, immunity |
| Cockroach, Giant Ghoul | `cockroach-giant-ghoul-bfomnibus` | special | paralysis, disease, spells, clerical abilities, hold/grab, charm, sleep, immunity, see description | paralysis, disease, see description, immune to sleep/charm/hold |
| Couatl | `couatl-bfomnibus` | special | poison, spells, clerical abilities, invisibility, shapechanging, teleportation, constriction, darkvision | poison, constriction, Magic-User/Cleric spellcasting, at-will detection/mind-reading, invisibility/incorporeality, teleportation, polymorph, darkvision |
| Crawling Claw | `crawling-claw-bfomnibus` | special | spells, clerical abilities, hold/grab, charm, sleep, immunity, undead | spells, hold/grab, undead, immune to sleep/charm/hold |
| Crypt Dweller | `crypt-dweller-bfomnibus` | special | magic weapons to hit, spells, clerical abilities, hold/grab, charm, sleep, immunity, undead | magic weapons to hit, undead, immune to sleep/charm/hold |
| Cuhtli | `cuhtli-bfomnibus` | special | poison, spells, clerical abilities, invisibility, teleportation, constriction, charm, darkvision | poison, constriction, Magic-User/Cleric spellcasting, reptile/avian charm, at-will detection/mind-reading, invisibility/incorporeality, teleportation, polymorph, darkvision |
| Dancing Shadow | `dancing-shadow-bfomnibus` | special | magic weapons to hit, spells | magic weapons to hit |
| Dantaeons | `dantaeons-bfomnibus` | special | spells, clerical abilities, fear, fire | spells, fear, fire |
| Darktorch | `darktorch-bfomnibus` | special | spells, clerical abilities, invisibility, hold/grab, charm, sleep, immunity, undead | spells, invisibility, undead, immune to sleep/charm/hold |
| Deadringer | `deadringer-bfomnibus` | special | spells, clerical abilities, hold/grab, charm, sleep, immunity, undead | undead, immune to sleep/charm/hold |
| Dinosaur, Centrosaurus (Monoclonius) | `dinosaur-centrosaurus-monoclonius-bfomnibus` | armor_class | 3 [16] head 4 [15] body | 3 [16] head; 4 [15] body |
| Dinosaur, Centrosaurus (Monoclonius) | `dinosaur-centrosaurus-monoclonius-bfomnibus` | attacks | Gore or Trample (2d6) | Gore or Trample (1d6+2) |
| Dinosaur, Centrosaurus (Monoclonius) | `dinosaur-centrosaurus-monoclonius-bfomnibus` | special | None | front/body AC, ceratopsian charge, trample multiple smaller foes, gore larger foes |
| Dinosaur, Pentaceratops | `dinosaur-pentaceratops-bfomnibus` | armor_class | 2 [17] head, 6 [13] body | 2 [17] head; 6 [13] body |
| Dinosaur, Pentaceratops | `dinosaur-pentaceratops-bfomnibus` | attacks | Gore or Trample (2d6) | Gore or Trample (1d6+2) |
| Dinosaur, Pentaceratops | `dinosaur-pentaceratops-bfomnibus` | special | shapechanging | front/body AC, ceratopsian charge, trample multiple smaller foes, gore larger foes |
| Dinosaur, Styracosaurus | `dinosaur-styracosaurus-bfomnibus` | armor_class | 2 [17] head, 4 [15] body | 2 [17] head; 4 [15] body |
| Dinosaur, Styracosaurus | `dinosaur-styracosaurus-bfomnibus` | attacks | Gore or Trample (2d6) | Gore or Trample (1d6+2) |
| Dinosaur, Styracosaurus | `dinosaur-styracosaurus-bfomnibus` | special | None | front/body AC, ceratopsian charge, trample multiple smaller foes, gore larger foes |
| Dormayvoo | `dormayvoo-bfomnibus` | special | petrification, spells, clerical abilities, fear, charm, sleep, immunity, undead | petrification, spells, fear, charm, sleep, immunity, undead |
| Dragon, Cave | `dragon-cave-bfomnibus` | special | paralysis, breath weapon, spells, invisibility, fear, darkvision | paralysis, breath weapon, invisibility, fear, darkvision |
| Dragon, Plains (Yellow Dragon) | `dragon-plains-bfrpg` | special | spell use, breath weapon, fire, surprise | breath weapon, fire, surprise |
| Dragon, Sea (Gray Dragon) | `dragon-sea-bfrpg` | special | spell use, breath weapon, web | breath weapon, web |
| Draugr | `draugr-bfomnibus` | special | breath weapon, spells, clerical abilities, invisibility, hold/grab, charm, sleep, immunity, see description | breath weapon, spells, invisibility, see description, immune to sleep/charm/hold |
| Dreamless | `dreamless-bfomnibus` | special | magic weapons to hit, spells, fear, sleep | magic weapons to hit, fear, sleep |
| Dufferped | `dufferped-bfomnibus` | special | spells, invisibility, magic weapons to hit | invisibility, magic weapons to hit |
| Dynamo | `dynamo-bfomnibus` | special | poison, disease, spells, fire, lightning | poison, disease, fire, lightning |
| Elemental, Blood (Device) | `elemental-blood-device-bfomnibus` | special | magic weapons to hit, spells, shapechanging, fire, cold, lightning | magic weapons to hit, shapechanging, fire, cold, lightning |
| Elemental, Blood (Spell) | `elemental-blood-spell-bfomnibus` | special | magic weapons to hit, spells, shapechanging, fire, cold, lightning | magic weapons to hit, shapechanging, fire, cold, lightning |
| Elemental, Blood (Staff) | `elemental-blood-staff-bfomnibus` | special | magic weapons to hit, spells, shapechanging, fire, cold, lightning | magic weapons to hit, shapechanging, fire, cold, lightning |
| Ettercap | `ettercap-bfomnibus` | special | poison, paralysis, web, spells | poison, paralysis, web |
| Fairy Dragon | `fairy-dragon-bfomnibus` | special | breath weapon, spells, clerical abilities, invisibility | euphoria breath, spellcasting (5th-level Magic-User or 6th-level Cleric), invisibility |
| Fairy, Frost | `fairy-frost-bfomnibus` | special | magic weapons to hit, spells, cold | magic weapons to hit, cold |
| Fish, Crusher (Adult) | `fish-crusher-adult-bfomnibus` | special | poison, spells, shapechanging, undead, surprise | poison, shapechanging, undead, surprise |
| Fish, Crusher (Fry) | `fish-crusher-fry-bfomnibus` | special | poison, spells, shapechanging, undead, surprise | poison, shapechanging, undead, surprise |
| Fish, Crusher (Juvenile) | `fish-crusher-juvenile-bfomnibus` | special | poison, spells, shapechanging, undead, surprise | poison, shapechanging, undead, surprise |
| Fungi, Violet (Huge) | `fungi-violet-huge-bfomnibus` | special | poison, disease, spells | poison, disease |
| Fungi, Violet (Large) | `fungi-violet-large-bfomnibus` | special | poison, disease, spells | poison, disease |
| Fungi, Violet (Medium) | `fungi-violet-medium-bfomnibus` | special | poison, disease, spells | poison, disease |
| Fungi, Violet (Small) | `fungi-violet-small-bfomnibus` | special | poison, disease, spells | poison, disease |
| Fyrenewt | `fyrenewt-bfomnibus` | special | magic weapons to hit, breath weapon, spells, clerical abilities, shapechanging, fire, cold, immunity | magic weapons to hit, breath weapon, spells, shapechanging, fire, cold, immunity |
| Geminate Serpent, Blue | `geminate-serpent-blue-bfomnibus` | special | poison, breath weapon, spells, constriction, cold, immunity | poison, breath weapon, constriction, cold, immunity |
| Geminate Serpent, Green | `geminate-serpent-green-bfomnibus` | special | poison, breath weapon, spells, constriction, sleep, immunity | poison, breath weapon, constriction, sleep, immunity |
| Geminate Serpent, Pleasant | `geminate-serpent-pleasant-bfomnibus` | special | poison, breath weapon, spells, fear, constriction, immunity | poison, breath weapon, fear, constriction, immunity |
| Geminate Serpent, Sea | `geminate-serpent-sea-bfomnibus` | special | poison, paralysis, breath weapon, spells, constriction, immunity | poison, paralysis, breath weapon, constriction, immunity |
| Geminate Serpent, Shadow | `geminate-serpent-shadow-bfomnibus` | special | poison, energy drain, breath weapon, spells, constriction, immunity | poison, energy drain, breath weapon, constriction, immunity |
| Geminate Serpent, White | `geminate-serpent-white-bfomnibus` | special | poison, breath weapon, web, spells, constriction, immunity, surprise | poison, breath weapon, web, constriction, immunity, surprise |
| Gerbalaine | `gerbalaine-bfomnibus` | special | spells | None |
| Ghost Shroom | `ghost-shroom-bfomnibus` | special | clerical abilities, constriction, undead | constriction, undead |
| Gibbering Mouther | `gibbering-mouther-bfomnibus` | special | poison, paralysis, spells, swallow, acid, fire | poison, paralysis, swallow, acid, fire |
| Gila | `gila-bfomnibus` | special | poison, spells | poison |
| Goblin, Moon | `goblin-moon-bfomnibus` | special | poison, paralysis, spells, clerical abilities, fear | poison, paralysis, spells, fear |
| Grave Caller | `grave-caller-bfomnibus` | special | spells, clerical abilities, hold/grab, charm, sleep, undead | hold/grab, charm, sleep, undead |
| Grave Dancer | `grave-dancer-bfomnibus` | special | magic weapons to hit, spells, hold/grab, charm, sleep, immunity, undead | magic weapons to hit, undead, immune to sleep/charm/hold |
| Grave Sentinel (Watcher, and Guardian) (Guardian) | `grave-sentinel-watcher-and-guardian-guardian-bfomnibus` | special | spells, clerical abilities, teleportation, immunity, undead, silver weapons to hit | spells, teleportation, immunity, undead, silver weapons to hit |
| Grave Sentinel (Watcher, and Guardian) (Sentinel) | `grave-sentinel-watcher-and-guardian-sentinel-bfomnibus` | special | spells, clerical abilities, teleportation, immunity, undead, silver weapons to hit | spells, teleportation, immunity, undead, silver weapons to hit |
| Grave Sentinel (Watcher, and Guardian) (Watcher) | `grave-sentinel-watcher-and-guardian-watcher-bfomnibus` | special | spells, clerical abilities, teleportation, immunity, undead, silver weapons to hit | spells, teleportation, immunity, undead, silver weapons to hit |
| Great Orb of Eyes | `great-orb-of-eyes-bfomnibus` | special | paralysis, petrification, spells, clerical abilities, invisibility, fear, hold/grab, gaze, see description | paralysis, petrification, spells, invisibility, fear, hold/grab, gaze, see description |
| Gremilkin (Temple Cat) | `gremilkin-temple-cat-bfomnibus` | special | clerical abilities | None |
| Grim | `grim-bfomnibus` | special | magic weapons to hit, poison, disease, spells, clerical abilities, invisibility, hold/grab, illusion, see description | magic weapons to hit, disease, howls turn undead as 10th-level Cleric, invisibility, illusion, doom omen |
| Grim | `grim-bfomnibus` | special | magic weapons to hit, disease, howls turn undead as 10th-level Cleric, invisibility, illusion, doom omen | magic weapons to hit, disease, howls turn undead as 10th-level Cleric, invisibility, illusion, doom omen, immune to sleep/charm/hold |
| Grimfrog | `grimfrog-bfomnibus` | special | spells, fear, surprise | fear, surprise |
| Grimhost | `grimhost-bfomnibus` | special | magic weapons to hit, poison, disease, spells, clerical abilities, invisibility, hold/grab, illusion, see description | magic weapons to hit, disease, former-life abilities, dispel magic/evil, turns undead as 8th-level Cleric, invisibility/illusion, doom omen |
| Grimhost | `grimhost-bfomnibus` | special | magic weapons to hit, disease, former-life abilities, dispel magic/evil, turns undead as 8th-level Cleric, invisibility/illusion, doom omen | magic weapons to hit, disease, former-life abilities, dispel magic/evil, turns undead as 8th-level Cleric, invisibility/illusion, doom omen, immune to sleep/charm/hold |
| Grimlock | `grimlock-bfomnibus` | special | spells, gaze, illusion, immunity | gaze, illusion, immunity |
| Gump | `gump-bfomnibus` | special | paralysis, spells, hold/grab, gaze, surprise | paralysis, hold/grab, gaze, surprise |
| Hag | `hag-bfomnibus` | special | spells, charm, cold | charm, cold |
| Headless Horseman | `headless-horseman-bfomnibus` | special | poison, spells, clerical abilities, fear, hold/grab, charm, sleep, acid, see description | poison, fear, acid, see description, immune to sleep/charm/hold |
| Husk | `husk-bfomnibus` | special | spells, clerical abilities, hold/grab, illusion, charm, undead | hold/grab, illusion, charm, undead |
| Infected, Giant Ant | `infected-giant-ant-bfomnibus` | special | disease, regeneration, spells, invisibility, hold/grab, illusion, charm | disease, regeneration, invisibility, hold/grab, illusion, charm |
| Infected, Giant Rhinoceros Beetle | `infected-giant-rhinoceros-beetle-bfomnibus` | special | disease, regeneration, spells, invisibility, hold/grab, illusion, charm | disease, regeneration, invisibility, hold/grab, illusion, charm |
| Infected, Humanoid | `infected-humanoid-bfomnibus` | special | disease, regeneration, spells, invisibility, hold/grab, illusion, charm | disease, regeneration, invisibility, hold/grab, illusion, charm |
| Infected, Owl Bear | `infected-owl-bear-bfomnibus` | special | disease, regeneration, spells, invisibility, hold/grab, hug, illusion, charm | disease, regeneration, invisibility, hold/grab, hug, illusion, charm |
| Infected, Zombie | `infected-zombie-bfomnibus` | special | disease, regeneration, spells, invisibility, hold/grab, illusion, charm, undead | disease, regeneration, invisibility, hold/grab, illusion, charm, undead |
| Demon, Barbed Devil | `demon-barbed-devil-bfomnibus` | special | magic weapons to hit, spells, shapechanging, fear, hold/grab, surprise | magic weapons to hit, shapechanging, fear, hold/grab, surprise |
| Demon, Lemure | `demon-lemure-bfomnibus` | special | regeneration, spells, fire, magic weapons to hit | regeneration, fire, magic weapons to hit |
| Demon, Pazzu | `demon-pazzu-bfomnibus` | special | magic weapons to hit, poison, clerical abilities, hug, fire, cold, immunity | magic weapons to hit, poison, insect plague 1/turn, animate dead at will, disease immunity, fire/cold resistance |
| Jack O'Lantern | `jack-o-lantern-bfomnibus` | special | poison, breath weapon, spells, charm, sleep, fire, cold, immunity | poison, breath weapon, charm, sleep, fire, cold, immunity |
| Jackalwere | `jackalwere-bfomnibus` | special | spells, gaze, sleep | gaze, sleep |
| Kreptax | `kreptax-bfomnibus` | special | paralysis, spells, clerical abilities, fear, cold, darkvision | paralysis, spells, fear, cold, darkvision |
| Lammasu | `lammasu-bfomnibus` | special | spells, clerical abilities, invisibility, teleportation | 6th-level Cleric spellcasting, invisibility at will, dimension door, protection from evil 10-ft. radius |
| Living Candlestick | `living-candlestick-bfomnibus` | special | spells, fire | fire |
| Loadstar | `loadstar-bfomnibus` | special | disease, spells, clerical abilities, shapechanging | disease, shapechanging |
| Lobizon | `lobizon-bfomnibus` | special | silver weapons to hit, spells, hold/grab, darkvision | silver weapons to hit, hold/grab, darkvision |
| Lotl | `lotl-bfomnibus` | special | poison, disease, spells, clerical abilities, sleep, undead | poison, disease, spells, sleep, undead |
| Lycanthrope, Werecockroach | `lycanthrope-werecockroach-bfomnibus` | special | silver weapons to hit, poison, disease, spells, shapechanging, immunity, magic weapons to hit | silver weapons to hit, poison, disease, shapechanging, immunity, magic weapons to hit |
| Maggot-man | `maggot-man-bfomnibus` | special | magic weapons to hit, spells, clerical abilities, fear, hold/grab, charm, sleep, immunity, see description | magic weapons to hit, spells, fear, see description, immune to sleep/charm/hold |
| Marid | `marid-bfomnibus` | special | magic weapons to hit, spells, invisibility, fear, illusion, immunity, drowning | magic weapons to hit, invisibility, fear, illusion, immunity, drowning |
| Mesmerbelly | `mesmerbelly-bfomnibus` | special | spells, shapechanging | shapechanging |
| Mohrg | `mohrg-bfomnibus` | special | paralysis, clerical abilities, hold/grab, charm, sleep, immunity, undead | paralysis, undead, immune to sleep/charm/hold |
| Mold, Deadly (Brown) | `mold-deadly-brown-bfomnibus` | special | poison, spells, fire, cold, lightning | poison, fire, cold, lightning |
| Mold, Deadly (Yellow) | `mold-deadly-yellow-bfomnibus` | special | poison, spells, fire, cold, lightning | poison, fire, cold, lightning |
| Mosquito, Giant | `mosquito-giant-bfomnibus` | special | spells | None |
| Naga, Guardian | `naga-guardian-bfomnibus` | special | poison, spells, clerical abilities, constriction, silver weapons to hit | poison bite/spit, constriction, 6th-level Cleric spellcasting |
| Naga, Spirit | `naga-spirit-bfomnibus` | special | poison, paralysis, spells, clerical abilities, gaze, charm | poison, charm gaze, 5th-level Magic-User and 4th-level Cleric spellcasting |
| Naiad | `naiad-bfomnibus` | special | spells, charm, drowning | charm, drowning |
| Nazgorean, Hydramander | `nazgorean-hydramander-bfomnibus` | hde | 8 | 8 to 12 |
| Nazgorean, Hydramander | `nazgorean-hydramander-bfomnibus` | hde_xp | 8/800 | 8 to 12/800/1,100/1,400/1,700/2,000 |
| Nazgorean, Hydramander | `nazgorean-hydramander-bfomnibus` | hit_dice | 8 to 12 | 8 to 12 (+10) |
| Nazgorean, Hydramander | `nazgorean-hydramander-bfomnibus` | special | spells, invisibility, hold/grab, charm, sleep, immunity, darkvision | 5-8 heads, heads can be attacked separately, sound-sensing, silent foes treated as invisible, immune to charm/mind reading, sunlight/dry-air weakness, darkvision |
| Nazgorean, Hydramander | `nazgorean-hydramander-bfomnibus` | xp | 800 | 800/1,100/1,400/1,700/2,000 |
| Nazgorean, Nehnite | `nazgorean-nehnite-bfomnibus` | armor_class | 9 [10] soft portions, 5 [14] otherwise | 9 [10] soft portions; 5 [14] otherwise |
| Nazgorean, Nehnite | `nazgorean-nehnite-bfomnibus` | attacks | Bite or Weapon (1d3) | Bite (1d3 + poison) or Weapon (1d3) |
| Nazgorean, Nehnite | `nazgorean-nehnite-bfomnibus` | hit_dice | 1d4 per MU level (AB +1 per MU level) | 1d4* per Magic-User level |
| Nazgorean, Nehnite | `nazgorean-nehnite-bfomnibus` | special | poison, spells, hold/grab, charm, sleep, acid, fire, lightning, see description | poison, Magic-User spellcasting, wands, commands Nazgoreans, immune to charm/mind reading, sunlight/dry-air weakness |
| Necrotic Ooze | `necrotic-ooze-bfomnibus` | special | poison, disease, spells, clerical abilities, hold/grab, charm, sleep, immunity, see description | poison, disease, see description, immune to sleep/charm/hold |
| Nok Tantima | `nok-tantima-bfomnibus` | special | magic weapons to hit, spells, clerical abilities, immunity | magic weapons to hit, 6th-level Cleric spellcasting, magic resistance/immunity, see description |
| Octobat | `octobat-bfomnibus` | special | breath weapon, web, spells, fear, acid, immunity | breath weapon, web, fear, acid, immunity |
| Octopeople | `octopeople-bfomnibus` | special | paralysis, spells, illusion | paralysis, illusion |
| Oculus Abyssi | `oculus-abyssi-bfomnibus` | special | breath weapon, spells, hold/grab, illusion | breath weapon, hold/grab, illusion |
| Oculus Inferni | `oculus-inferni-bfomnibus` | special | regeneration, spells, fire, immunity, surprise | regeneration, fire, immunity, surprise |
| Oculus Rex (Common) | `oculus-rex-common-bfomnibus` | armor_class | 0 [19] body / 2 [17] main eye / 7 [12] eye stalks | 0 [19] body; 2 [17] main eye; 7 [12] eye stalks |
| Oculus Rex (Common) | `oculus-rex-common-bfomnibus` | attacks | Bite (1d6) | Bite (1d6) or Eye Power |
| Oculus Rex (Common) | `oculus-rex-common-bfomnibus` | special | regeneration, spells, fear, gaze, charm, sleep, cold, surprise | anti-magic main-eye cone, seven eye powers, eyestalks can be severed, eye regeneration, surprised only 1-in-8 |
| Oculus Rex (Emperor) | `oculus-rex-emperor-bfomnibus` | armor_class | 0 [19] body / 2 [17] main eye / 7 [12] eye stalks | 0 [19] body; 2 [17] main eye; 7 [12] eye stalks |
| Oculus Rex (Emperor) | `oculus-rex-emperor-bfomnibus` | attacks | Bite (1d6+1) | Bite (1d6+1) or Eye Power |
| Oculus Rex (Emperor) | `oculus-rex-emperor-bfomnibus` | special | regeneration, spells, fear, gaze, charm, sleep, cold, surprise | anti-magic main-eye cone, seven eye powers, eyestalks can be severed, eye regeneration, surprised only 1-in-8 |
| Oculus Somno | `oculus-somno-bfomnibus` | special | paralysis, spells, gaze, sleep | paralysis, gaze, sleep |
| Oculus Vigilans | `oculus-vigilans-bfomnibus` | armor_class | 4 [15] body, 7 [12] main eye/eye stalk | 4 [15] body; 7 [12] main eye/eye stalk |
| Oculus Vigilans | `oculus-vigilans-bfomnibus` | attacks | Bite (1d6) | Bite (1d6) or Eye Power |
| Oculus Vigilans | `oculus-vigilans-bfomnibus` | special | spells, clerical abilities, fear, hold/grab, surprise | spell-turning main-eye cone, 3-6 eyestalk powers, surprised only 1-in-6, eyes disabled by any hit, returns home if blinded |
| Odeum | `odeum-bfomnibus` | special | magic weapons to hit, spells, clerical abilities, hold/grab, charm, sleep, immunity, undead | magic weapons to hit, spells, undead, immune to sleep/charm/hold |
| Owlbearlin | `owlbearlin-bfomnibus` | special | clerical abilities | None |
| Pangotherium | `pangotherium-bfomnibus` | special | spells | None |
| Paper Tiger | `paper-tiger-bfomnibus` | special | poison, spells, hold/grab, charm, sleep, fire, immunity, surprise | poison, fire, surprise, immune to sleep/charm/hold |
| Phaerim | `phaerim-bfomnibus` | hit_dice | 1d6 hp (1 HD) | 1 (1d6 hp) |
| Phaerim | `phaerim-bfomnibus` | special | None | flight limit, forest hiding 90%, indoor hiding 70%, Elf saves |
| Phoenix | `phoenix-bfomnibus` | special | magic weapons to hit, spells, hold/grab, hug, charm, fire, immunity, undead | magic weapons to hit, hold/grab, hug, charm, fire, immunity, undead |
| Poludnitsa | `poludnitsa-bfomnibus` | special | spells, hold/grab | hold/grab |
| Quinotaur | `quinotaur-bfomnibus` | special | breath weapon, spells, fear | breath weapon, fear |
| Rakshasa | `rakshasa-bfomnibus` | special | magic weapons to hit, spells, clerical abilities, illusion | magic weapons to hit, 6th-level spellcasting from Magic-User/Cleric lists, powerful illusions, mind reading, +4 saves vs. magic, blessed bolt vulnerability |
| Raptorsapien | `raptorsapien-bfomnibus` | special | spells, clerical abilities, hold/grab | hold/grab |
| Resonated | `resonated-bfomnibus` | special | regeneration, spells, clerical abilities, hold/grab, charm, sleep, immunity, undead | regeneration, undead, immune to sleep/charm/hold |
| Rot Vulture | `rot-vulture-bfomnibus` | special | poison, paralysis, disease, spells, clerical abilities, fear, stench, hold/grab, see description | poison, paralysis, disease, fear, stench, see description, immune to sleep/charm/hold |
| Salamander, Wind | `salamander-wind-bfomnibus` | special | magic weapons to hit, petrification, spells | magic weapons to hit, petrification |
| Satyr | `satyr-bfomnibus` | special | spells, fear, charm, sleep, surprise | fear, charm, sleep, surprise |
| Scarecrow, Dread | `scarecrow-dread-bfomnibus` | special | spells, fear, gaze, fire, immunity, darkvision | fear, gaze, fire, immunity, darkvision |
| Scarecrow, Living (Normal) | `scarecrow-living-normal-bfomnibus` | special | spells, fear, fire, immunity, darkvision | fear, fire, immunity, darkvision |
| Scarecrow, Living (Small) | `scarecrow-living-small-bfomnibus` | special | spells, fear, fire, immunity, darkvision | fear, fire, immunity, darkvision |
| Scrab | `scrab-bfomnibus` | special | spells, hug | hug |
| Sea Hag | `sea-hag-bfomnibus` | special | paralysis, spells, shapechanging, fear, gaze | paralysis, shapechanging, fear, gaze |
| Sea Lion | `sea-lion-bfomnibus` | armor_class | 5 [14] head, 3 [16] body | 5 [14] head; 3 [16] body |
| Sea Lion | `sea-lion-bfomnibus` | special | None | separate head/body AC, aquatic, lair treasure from previous victims |
| Sea Monster | `sea-monster-bfomnibus` | attacks | Bite or Claw (8d6) | Bite, Tentacle, or Claw (1d6+2; see description) |
| Sea Monster | `sea-monster-bfomnibus` | hde | 7 | 7 to 12 |
| Sea Monster | `sea-monster-bfomnibus` | hde_xp | 7/600 | 7 to 12/600/800/1,100/1,400/1,700/2,000 |
| Sea Monster | `sea-monster-bfomnibus` | hit_dice | 7 to 12 | 7 to 12 (+10) |
| Sea Monster | `sea-monster-bfomnibus` | special | hug | custom sea-beast form, variable bite/tentacle/claw damage, ship-sinking predator |
| Sea Monster | `sea-monster-bfomnibus` | xp | 600 | 600/800/1,100/1,400/1,700/2,000 |
| Sea-Ghast | `sea-ghast-bfomnibus` | special | poison aura 10 ft., paralysis 1d4+1/day, aquatic undead, turned as ghast, undead immunities, avoids holy water | poison aura 10 ft., paralysis 1d4+1/day, aquatic undead, turned as ghast, undead immunities, avoids holy water, immune to sleep/charm/hold |
| Sea-Ghoul | `sea-ghoul-bfomnibus` | special | poison aura 5 ft., paralysis 1/day, aquatic undead, turned as ghoul, undead immunities, avoids holy water | poison aura 5 ft., paralysis 1/day, aquatic undead, turned as ghoul, undead immunities, avoids holy water, immune to sleep/charm/hold |
| Selkie | `selkie-bfomnibus` | special | breath weapon, web, spells, invisibility, hold/grab, charm, sleep, cold, see description | breath weapon, web, invisibility, hold/grab, charm, sleep, cold, see description |
| Shield Guardian | `shield-guardian-bfomnibus` | special | magic weapons to hit, spells, darkvision | magic weapons to hit, darkvision |
| Skeletal Flayer | `skeletal-flayer-bfomnibus` | special | clerical abilities, hold/grab, charm, sleep, immunity, undead | undead, immune to sleep/charm/hold |
| Skeletal Legs | `skeletal-legs-bfomnibus` | special | undead immunities, turned as skeleton (+1), surprise 1-3, half edged damage, 1 point from arrows/bolts/stones, mindless | undead immunities, turned as skeleton (+1), surprise 1-3, half edged damage, 1 point from arrows/bolts/stones, mindless, immune to sleep/charm/hold |
| Skeleton, Crimson Bones | `skeleton-crimson-bones-bfomnibus` | special | spells, clerical abilities, hold/grab, charm, sleep, immunity, undead | undead, immune to sleep/charm/hold |
| Skeleton, Diseased | `skeleton-diseased-bfomnibus` | special | disease, spells, clerical abilities, hold/grab, charm, sleep, undead | disease, spells, hold/grab, charm, sleep, undead |
| Skeleton, Gellybone | `skeleton-gellybone-bfomnibus` | special | clerical abilities, hold/grab, charm, sleep, immunity, undead | undead, immune to sleep/charm/hold |
| Skeleton, Haunted Bones | `skeleton-haunted-bones-bfomnibus` | special | clerical abilities, hold/grab, charm, sleep, immunity, undead | undead, immune to sleep/charm/hold |
| Skeleton, Lake | `skeleton-lake-bfomnibus` | special | breath weapon, clerical abilities, hold/grab, charm, sleep, immunity, undead, drowning | breath weapon, undead, drowning, immune to sleep/charm/hold |
| Skeleton, Lava Lake | `skeleton-lava-lake-bfomnibus` | special | clerical abilities, hold/grab, charm, sleep, fire, immunity, undead | fire, undead, immune to sleep/charm/hold |
| Skeleton, Pitch | `skeleton-pitch-bfomnibus` | special | clerical abilities, hold/grab, charm, sleep, fire, immunity, undead | fire, undead, immune to sleep/charm/hold |
| Skerraxis | `skerraxis-bfomnibus` | special | spells | None |
| Slime, Red | `slime-red-bfomnibus` | attacks | Slam (2d6) | Slam (1d4 to 2d8 by HD) |
| Slime, Red | `slime-red-bfomnibus` | hde | 3 | 2 to 7 |
| Slime, Red | `slime-red-bfomnibus` | hde_xp | 3/60 | 2 to 7/30/60/120/240/400/600 |
| Slime, Red | `slime-red-bfomnibus` | hit_dice | 1 to 6 | 1* to 6* |
| Slime, Red | `slime-red-bfomnibus` | special | regeneration, acid, fire, surprise | surprise, 2-ft./HD pseudopod, ensnare, automatic drain, grows by draining hp, regenerates, killed permanently by fire |
| Slime, Red | `slime-red-bfomnibus` | xp | 60 | 30/60/120/240/400/600 |
| Snake, Rainbow | `snake-rainbow-bfomnibus` | special | poison, petrification, spells, teleportation, acid, fire, electricity, undead | poison, petrification, teleportation, acid, fire, electricity, undead |
| Snake, Vort | `snake-vort-bfomnibus` | attacks | Attack (1d3) | Bite (1d3 + poison) |
| Snake, Vort | `snake-vort-bfomnibus` | hit_dice | 1+2 No of Attacks: 1 bite | 1+2* |
| Snake, Vort | `snake-vort-bfomnibus` | special | poison | weak poison: kills small creatures, knocks out halfling-sized creatures, sickens larger foes |
| Spellripper | `spellripper-bfomnibus` | special | magic weapons to hit, spells, clerical abilities, hold/grab, charm, sleep, immunity, undead | magic weapons to hit, spells, undead, immune to sleep/charm/hold |
| Sphinx, Androsphinx | `sphinx-androsphinx-bfomnibus` | special | paralysis, breath weapon, spells, clerical abilities, fear | 6th-level Cleric spellcasting, roar fear/paralysis/deafness/strength loss, rake, intelligent guardian |
| Spider, Giant Shrieking Tarantula | `spider-giant-shrieking-tarantula-bfomnibus` | attacks | Attack (1d6+1) | Bite (1d6+2) or Hairs/Shriek |
| Spider, Giant Shrieking Tarantula | `spider-giant-shrieking-tarantula-bfomnibus` | hit_dice | 7 No of Attacks: 1 bite | 7* |
| Spider, Giant Shrieking Tarantula | `spider-giant-shrieking-tarantula-bfomnibus` | special | poison, paralysis, spells | poison dance, secondary dancing contagion, urticating hairs 1/week, stunning shriek |
| Spider, Giant Tarantula | `spider-giant-tarantula-bfrpg` | special | poison, spell use | poison |
| Spider, Giant Water | `spider-giant-water-bfomnibus` | attacks | Attack (1d3) | Bite (1d3 + poison) |
| Spider, Giant Water | `spider-giant-water-bfomnibus` | hit_dice | 3+3 No of Attacks: 1 bite | 3+3* |
| Spider, Giant Water | `spider-giant-water-bfomnibus` | special | poison, breath weapon, web | poison bite, underwater web lair, air-breather, can operate underwater 1 turn, bottom-walking |
| Spider, Giant Wolf | `spider-giant-wolf-bfomnibus` | special | poison, paralysis, web, spells, surprise | poison, paralysis, web, surprise |
| Spirit of Vengeance | `spirit-of-vengeance-bfomnibus` | special | magic weapons to hit, energy drain, clerical abilities, fear, hold/grab, gaze, charm, sleep, see description | magic weapons to hit, energy drain, fear, gaze, see description, immune to sleep/charm/hold |
| Strix | `strix-bfomnibus` | special | poison, paralysis, disease, spells, fear, sleep, darkvision | poison, paralysis, disease, fear, sleep, darkvision |
| Swamp Monster | `swamp-monster-bfomnibus` | special | paralysis, spells, surprise | paralysis, surprise |
| Swanmay (and Black Swanmay) | `swanmay-and-black-swanmay-bfomnibus` | special | poison, paralysis, breath weapon, spells, shapechanging, fear, charm, cold, see description | poison, paralysis, breath weapon, shapechanging, fear, charm, cold, see description |
| Tapper | `tapper-bfomnibus` | special | silver weapons to hit, spells, clerical abilities, hold/grab, charm, sleep, immunity, undead, see description | silver weapons to hit, spells, undead, see description, immune to sleep/charm/hold |
| Tentacled Horror | `tentacled-horror-bfomnibus` | special | spells, hold/grab, charm, sleep, acid, fire, electricity, immunity, see description | acid, fire, electricity, see description, immune to sleep/charm/hold |
| Thulid, Great Brain | `thulid-great-brain-bfomnibus` | attacks | Attack (special) | Mental Blast or Enslave (special) |
| Thulid, Great Brain | `thulid-great-brain-bfomnibus` | hit_dice | 9 No of Attacks: Special | 9** (+8) |
| Thulid, Great Brain | `thulid-great-brain-bfomnibus` | special | spells, teleportation, hold/grab, charm | mental blast, enslave 3/day, teleport 1/day, psychic sense 100 ft., spells at will, telepathy |
| Tick, Giant | `tick-giant-bfomnibus` | special | poison, disease, spells, fire, surprise | poison, disease, fire, surprise |
| Timber Wolf | `timber-wolf-bfomnibus` | special | magic weapons to hit, spells, shapechanging, fire | magic weapons to hit, shapechanging, fire |
| Treant, Undead | `treant-undead-bfomnibus` | special | spells, clerical abilities, hold/grab, charm, sleep, undead | undead, immune to sleep/charm/hold |
| Trelanx | `trelanx-bfomnibus` | special | clerical abilities, surprise, darkvision | surprise, darkvision |
| Triton | `triton-bfomnibus` | attacks | Tail or Weapon (2d6) | Tail Smash, Weapon, or Spell (1d6+2) |
| Triton | `triton-bfomnibus` | hde | 5 | 5 to 7 |
| Triton | `triton-bfomnibus` | hde_xp | 5/240 | 5 to 7/240/400/600 |
| Triton | `triton-bfomnibus` | special | spells | Magic-User spellcasting two levels below HD, aquatic, often mounted on giant sea horses |
| Triton | `triton-bfomnibus` | xp | 240 | 240/400/600 |
| Troll, Moon | `troll-moon-bfomnibus` | special | silver weapons to hit, disease, regeneration, spells, shapechanging, hug, acid, fire, see description | silver weapons to hit, disease, regeneration, shapechanging, hug, acid, fire, see description |
| Troll, Rock | `troll-rock-bfomnibus` | special | petrification, regeneration, breath weapon, spells, fire, electricity | petrification, regeneration, breath weapon, fire, electricity |
| Turtle, Giant Sea | `turtle-giant-sea-bfomnibus` | armor_class | 2 [17] overall/ 5 [14] head and flippers | 2 [17] overall; 5 [14] head and flippers |
| Turtle, Giant Sea | `turtle-giant-sea-bfomnibus` | attacks | Bite (2d6) | Bite (1d6+2) |
| Turtle, Giant Sea | `turtle-giant-sea-bfomnibus` | special | swallow | swallows man-sized or smaller on natural 19-20, digestive damage, interior AC 12, shy unless threatened |
| Turtle, Giant Snapping | `turtle-giant-snapping-bfomnibus` | armor_class | 0 [19] overall/ 5 [14] head and flippers | 0 [19] overall; 5 [14] head and flippers |
| Turtle, Giant Snapping | `turtle-giant-snapping-bfomnibus` | attacks | Bite (3d6) | Bite (1d6+2) |
| Turtle, Giant Snapping | `turtle-giant-snapping-bfomnibus` | special | swallow, surprise | surprise 1-4 while submerged, swallows small prey, bites man-sized prey in half before swallowing |
| Uhul | `uhul-bfomnibus` | special | spells, clerical abilities, hug, surprise | spells, hug, surprise |
| Wind Walker | `wind-walker-bfomnibus` | special | magic weapons to hit, spells, invisibility, hold/grab, charm, sleep, cold, electricity, see description | magic weapons to hit, invisibility, hold/grab, charm, sleep, cold, electricity, see description |
| Wretchling | `wretchling-bfomnibus` | special | spells, fear, sleep, cold, undead, magic weapons to hit | fear, sleep, cold, undead, magic weapons to hit |
| Wug | `wug-bfomnibus` | special | clerical abilities | None |
| Zombie, Flesh Eater | `zombie-flesh-eater-bfomnibus` | special | disease, spells, clerical abilities, hold/grab, charm, sleep, immunity, undead | disease, spells, hold/grab, charm, sleep, immunity, undead |
| Zombie, Hexcore | `zombie-hexcore-bfomnibus` | special | magic weapons to hit, spells, clerical abilities, hold/grab, charm, sleep, immunity, undead | magic weapons to hit, undead, immune to sleep/charm/hold |
| Zombie, Leper | `zombie-leper-bfomnibus` | special | disease, spells, clerical abilities, hold/grab, charm, sleep, fire, immunity, see description | disease, fire, see description, immune to sleep/charm/hold |
