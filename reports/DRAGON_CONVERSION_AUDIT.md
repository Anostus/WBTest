# Dragon Conversion Audit: Basic Fantasy to White Box

## Scope

I audited the White Box SRD monster pages for the converted Basic Fantasy dragon-family creatures:

- Dragon, Cloud
- Dragon, Plains (Yellow Dragon)
- Dragon, Sea (Gray Dragon)
- Dragon Turtle
- Dragon, Cave
- Dragon, Death
- Dracomander, Flame
- Dracomander, Frost
- Dracomander, Lightning
- Cow Dragon

The first four come from the Basic Fantasy RPG core rules; the cave dragon, death dragon, dracomanders, and cow dragon come from the Basic Fantasy Field Guide Omnibus.

## Source-system differences that matter

| Topic | Basic Fantasy approach | White Box approach | Conversion consequence |
|---|---|---|---|
| Monster hit dice | Monsters use d8 hit dice. Dragons change Hit Dice by age category. | Monsters use d6 hit dice. Dragons have a Hit Dice range by type, while age determines hit points per Hit Die and breath damage per Hit Die. | Do not import Basic Fantasy’s per-creature age tables. Give dragon types a White Box-style HD range and use the single White Box dragon age rule. |
| Dragon attacks | Basic Fantasy dragons usually attack with 2 claws, bite or breath, and sometimes tail. | White Box core dragons use a single bite attack and a breath special. | Drop claw/tail routines except when a source creature’s special identity depends on them, as with the death dragon’s paralyzing claw and lightning dracomander’s two heads. |
| Armor Class | Basic Fantasy uses ascending AC with more granularity; the audited creatures ranged from AC 16 to 22. | White Box core dragons are consistently AC 2 [17], with the game leaning toward broad archetypes instead of fine AC distinctions. | Normalize true dragons and dracomanders toward AC 2 [17]. Give the dragon turtle a modestly exceptional shell at AC 0 [19] rather than the very hard -2 [21]. |
| Breath damage | Basic Fantasy breath damage is fixed in dice for the listed age, e.g., 8d8, 10d8, 30d8. | White Box breath damage equals the dragon’s Hit Dice multiplied by the age category’s damage-per-HD value. | Replace fixed d8 breath damage with the White Box age rule and describe only shape/area and special rider effects. |
| Experience | Basic Fantasy XP uses its own XP table and special-ability asterisks. | White Box uses HDE/XP; core dragons are generally HDE = HD + 2. | Use HD + 2 for breath-weapon dragon-family monsters. For ranges, list HDE/XP ranges in the same style as core White Box dragons. |
| Stat block style | Basic Fantasy includes Save As, Morale, Treasure Type, No. Appearing, Attack Bonus, and age tables. | White Box stat blocks are minimal: AC, HD, Attacks, Special, Move, HDE/XP. | Remove Basic Fantasy-only rows and age tables from these pages. Put referee-facing exceptions in short prose. |

## Main audit findings

1. The existing website conversions imported Basic Fantasy age tables directly. Those tables include Attack Bonus, spell rows, seven age categories, and damage progressions that do not fit White Box’s single dragon age table.
2. Several attack lines accidentally treated breath damage as melee damage. The dracomanders had attacks such as `Bite or Claw (10d6)` or `Bite or Tail (12d6)`, and the dragon turtle had `Bite (1d6+2) or Breath (30d8)`. In White Box, breath belongs in Special/prose, not as the default melee attack.
3. Some AC values were too tightly converted from Basic Fantasy. White Box dragons are deadly but generally not presented as hyper-granular AC puzzles.
4. Several fixed-HD conversions should have been HD ranges. Basic Fantasy’s “adult” dragon Hit Dice map well to the center of White Box’s dragon HD range: White Box red dragons are 9–11 HD where Basic Fantasy mountain/red adult dragons are 10 HD, green dragons are 7–9 HD where Basic Fantasy forest/green adult dragons are 8 HD, and so on. I used that pattern for the converted dragon types.
5. The sea dragon had an erroneous `web` special, apparently a bad conversion artifact. It is now `steam breath, hold breath`.

## Conversion rule applied

For true dragons and dragon-like conversions, I used the Basic Fantasy adult/age-category-4 Hit Dice as the midpoint of a White Box-style three-HD range:

- adult 5 HD → 4–6 HD
- adult 8 HD → 7–9 HD
- adult 9 HD → 8–10 HD
- adult 10 HD → 9–11 HD
- adult 11 HD → 10–12 HD

Exceptions:

- **Death Dragon** remains fixed at 11 HD because it is a unique undead ancient dragon rather than a full species with a normal age spread.
- **Dragon Turtle** remains a 30 HD adult-scale monster because White Box already supports very large sea monsters at 30 HD; smaller or larger examples are described in prose as ±5 HD steps.
- **Cow Dragon** remains fixed at 8 HD because it is explicitly not a true dragon and has no age table.

## Updated White Box stat summary

| Monster | Old website stats | Updated stats | Rationale |
|---|---:|---:|---|
| Dragon, Cloud | AC -2 [21], HD 11, Bite 1d6+2, HDE 13 | AC 2 [17], HD 10–12, Bite 2d6+2, HDE 12–14 | Cloud dragons are comparable to gold/red-scale dragons. HD range follows adult 11 HD ±1; bite damage follows gold dragon. |
| Dragon, Plains | AC 4 [15], HD 5, HDE 7 | AC 2 [17], HD 4–6, Bite 1d6+1, HDE 6–8 | Smallest true dragon; adult 5 HD becomes 4–6. Kept fast land movement and surprise. |
| Dragon, Sea | AC 1 [18], HD 8, Special `web`, HDE 10 | AC 2 [17], HD 7–9, Bite 2d6, Special steam breath/hold breath, HDE 9–11 | Comparable to green dragon by HD; removed erroneous web special. |
| Dragon, Cave | AC -1 [20], HD 9, Bite/Claw 3d6, HDE 11 | AC 2 [17], HD 8–10, Bite 2d6, HDE 10–12 | Comparable to blue dragon by HD. Kept sonic breath, echolocation, stun, and cave-in notes in prose. |
| Dragon, Death | AC -2 [21], HD 11, Bite/Claw 4d6, HDE 13 | AC 2 [17], HD 11, Bite 2d6+2 or claw 1d6, HDE 13 | Unique ancient undead. Kept paralysis/mummy-rot breath, but reduced melee to White Box scale. |
| Dragon Turtle | AC -2 [21], HD 30, Bite 1d6+2 or Breath 30d8, HDE 32 | AC 0 [19], HD 30, Bite 4d6, HDE 32 | Breath is now handled by White Box dragon age rules; bite is brought closer to giant sea monster scale. |
| Dracomander, Flame | AC 1 [18] (m), HD 8, Bite/Claw 10d6, HDE 10 | AC 2 [17] (m), HD 7–9, Bite 2d6, HDE 9–11 | Adult 8 HD becomes 7–9. Heat aura and fire immunity retained. |
| Dracomander, Frost | AC -1 [20] (m), HD 10, Bite/Claw 13d6, HDE 12 | AC 2 [17] (m), HD 9–11, Bite 2d6+1, HDE 11–13 | Adult 10 HD becomes 9–11. Cold aura and immunity retained. |
| Dracomander, Lightning | AC 0 [19] (m), HD 9, Bite/Tail 12d6, HDE 11 | AC 2 [17] (m), HD 8–10, 2 bites 1d6+1 each, HDE 10–12 | Adult 9 HD becomes 8–10. Two heads retained without importing breath dice as melee damage. |
| Cow Dragon | AC 1 [18], HD 8, Gore/Breath 9d6, HDE 10 | AC 2 [17], HD 8, Gore 2d6+1, HDE 10 | Non-true dragon. Breath remains a special 8d6 scalding milk cone rather than a melee attack. |

## Website files changed

Updated monster pages:

- `monsters/dragon-cloud-bfrpg.html`
- `monsters/dragon-plains-bfrpg.html`
- `monsters/dragon-sea-bfrpg.html`
- `monsters/dragon-turtle-bfrpg.html`
- `monsters/dragon-cave-bfomnibus.html`
- `monsters/dragon-death-bfomnibus.html`
- `monsters/dracomander-flame-bfomnibus.html`
- `monsters/dracomander-frost-bfomnibus.html`
- `monsters/dracomander-lightning-bfomnibus.html`
- `monsters/cow-dragon-bfomnibus.html`

Updated indexes/search data:

- `monsters/index.html`
- `monsters/monster-index.json`
- `monsters/subcategories/dragon-white-box.html`
- `monsters/subcategories/dracomander-field-guide-omnibus.html`

Added report copy:

- `reports/DRAGON_CONVERSION_AUDIT.md`

## Notes for future conversion passes

The biggest reusable lesson is to avoid direct mechanical copying when converting dragons. For White Box, pick the dragon’s archetypal HD range, give it one bite attack, put breath in Special/prose, and let the universal White Box dragon age table do the work. That keeps the creature playable at the table and preserves the White Box feel.
