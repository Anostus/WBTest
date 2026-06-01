# Basic Fantasy Hit Dice Reconsolidation Report

## Scope

Reconsolidated Basic Fantasy-derived monster entries that had been split into separate files by Hit Dice. The requested creatures now appear as single entries with Hit Dice ranges or stage ranges, matching the structure of the Basic Fantasy source material while preserving the White Box-specific mechanics already present in the site.

Reference sources consulted:

- **Basic Fantasy Role-Playing Game, 4th Edition, Release 142**
- **Basic Fantasy Field Guide Omnibus, Release 4**

All six requested creature groups were in the Basic Fantasy core rules. The Field Guide was checked for context and consistency, but these reconsolidations used the core Basic Fantasy entries as the primary reference.

## Files added

- `monsters/blood-rose-bfrpg.html`
- `monsters/insect-swarm-bfrpg.html`
- `monsters/trollkin-adolescent-bfrpg.html`
- `monsters/trollkin-infant-bfrpg.html`
- `monsters/trollkin-juvenile-bfrpg.html`
- `monsters/water-termite-giant-bfrpg.html`

## Split files removed

- `monsters/blood-rose-2-hd-bfrpg.html`
- `monsters/blood-rose-3-hd-bfrpg.html`
- `monsters/blood-rose-4-hd-bfrpg.html`
- `monsters/insect-swarm-2-hd-bfrpg.html`
- `monsters/insect-swarm-3-hd-bfrpg.html`
- `monsters/insect-swarm-4-hd-bfrpg.html`
- `monsters/trollkin-adolescent-5-hd-bfrpg.html`
- `monsters/trollkin-adolescent-6-hd-bfrpg.html`
- `monsters/trollkin-infant-1-hd-bfrpg.html`
- `monsters/trollkin-infant-2-hd-bfrpg.html`
- `monsters/trollkin-juvenile-3-hd-bfrpg.html`
- `monsters/trollkin-juvenile-4-hd-bfrpg.html`
- `monsters/water-termite-giant-1-hd-bfrpg.html`
- `monsters/water-termite-giant-2-hd-bfrpg.html`
- `monsters/water-termite-giant-3-hd-bfrpg.html`
- `monsters/water-termite-giant-4-hd-bfrpg.html`

Net index reduction: **16 split stat-block pages became 6 consolidated stat-block pages**, reducing the monster index from **934** to **924** rows.

## Creature changes and mechanics retained

### Blood Rose

New consolidated file: `blood-rose-bfrpg.html`

Restored to a single entry with:

- Hit Dice: `2 to 4`
- Attacks: `1 to 3 canes (1d6 + blood drain)`
- HDE/XP mapping: `2 HD: 3/60; 3 HD: 4/120; 4 HD: 5/240`

Mechanics retained:

- White Box AC translation: `7 [12]`.
- Befuddling fragrance remains a save vs. Poison effect.
- Blood drain remains `1d6` per round after a successful cane hit.
- The flower-color change after feeding remains in the description.
- The Basic Fantasy “1, 2 or 3 canes” mechanic was restored to the stat block instead of leaving each split page with only a generic single-cane attack.

### Insect Swarm

New consolidated file: `insect-swarm-bfrpg.html`

Restored to a single entry with:

- Hit Dice: `2 to 4`
- Attacks: `Swarm (1d6-1)`
- HDE/XP mapping: `2 HD: 3/60; 3 HD: 4/120; 4 HD: 5/240`

Mechanics retained:

- White Box movement remains `3 Fly 6`, corresponding to the Basic Fantasy crawling/flying movement scale.
- Damage remains the White Box-adjusted `1d6-1` rather than reverting to Basic Fantasy’s `1d3` wording.
- The unarmored threshold remains White Box-facing: worse than `AC 5 [14]`.
- Immunity to normal weapons remains in the stat block and description.
- Sleep, smoke, torch, warding-off, exiting-the-swarm, and diving-into-water rules were retained.
- Added a See Also link to `Insect Plague`, since that spell directly references insect swarm behavior.

### Trollkin, Infant

New consolidated file: `trollkin-infant-bfrpg.html`

Restored to a single stage entry with:

- Hit Dice: `1 or 2`
- HDE/XP mapping: `1 HD: 2/30; 2 HD: 3/60`

Mechanics retained:

- White Box AC translation: `6 [13]`.
- White Box movement: `9`.
- White Box single attack line retained: `Claws or bite (1d6)`.
- Regeneration remains in the stat block and description.
- Trollkin brood-generation rules from Basic Fantasy were restored/cleaned.

### Trollkin, Juvenile

New consolidated file: `trollkin-juvenile-bfrpg.html`

Restored to a single stage entry with:

- Hit Dice: `3 or 4`
- HDE/XP mapping: `3 HD: 4/120; 4 HD: 5/240`

Mechanics retained:

- White Box AC translation: `5 [14]`.
- White Box movement: `15`.
- White Box single attack line retained: `Claws or bite (1d6)`.
- Regeneration and brood-generation rules retained.

### Trollkin, Adolescent

New consolidated file: `trollkin-adolescent-bfrpg.html`

Restored to a single stage entry with:

- Hit Dice: `5 or 6`
- HDE/XP mapping: `5 HD: 6/400; 6 HD: 7/600`

Mechanics retained:

- White Box AC translation: `4 [15]`.
- White Box movement: `12`.
- White Box attack line retained: `Claws or bite (1d6+1)`.
- Regeneration and brood-generation rules retained.

### Water Termite, Giant

New consolidated file: `water-termite-giant-bfrpg.html`

Restored to a single entry with:

- Hit Dice: `1 to 4`
- HDE/XP mapping: `1 HD: 1/15; 2 HD: 2/30; 3 HD: 3/60; 4 HD: 4/120`

Mechanics retained:

- White Box AC translation: `7 [12]`.
- White Box movement: `Swim 9`.
- Stun spray remains the attack and special ability.
- Save vs. Poison to avoid stun remains.
- Ship-hull damage remains `2d4` per round for `1d4 + Hit Dice` rounds.
- The freshwater/saltwater/swamp Hit Dice distribution remains in the description.

## See Also and images

- No monster artwork was present on the split Blood Rose, Insect Swarm, Trollkin, or Giant Water Termite pages, so no images were removed.
- Obsolete See Also blocks that only linked among now-removed Hit Dice variants were removed.
- Trollkin stage pages now keep useful See Also links among the other trollkin stages plus `Troll` and `Trollwife`.
- Insect Swarm now has a See Also link to `Insect Plague`.

## Index and data changes

Updated files:

- `monsters/index.html`
- `monsters/monster-index.json`

Changes made:

- Removed all old split HD rows from the Monster Index.
- Added the six consolidated rows.
- Preserved the existing Name, HD, and HDE client-side sorting support.
- Verified all indexed monster links resolve to existing HTML files.
- Verified every monster page with a stat block is represented in the index.

## Verification

- Confirmed no remaining references to the removed split-page slugs in `monsters/index.html` or `monsters/monster-index.json`.
- Confirmed the Monster Index now contains 924 stat-block rows.
- Confirmed the six new consolidated pages contain stat blocks and updated descriptions.
- Confirmed `assets/site.js` still passes JavaScript syntax checking.
