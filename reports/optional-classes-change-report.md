# Optional Classes Page Change Report

## Summary
Updated `classes/optional-classes.html` to make the optional classes easier to adjudicate at the table. The page now preserves the original White Box optional class content while adding explanatory rules notes adapted from *Swords & Wizardry Continual Light* and cross-links to relevant White Box SRD rules, classes, spells, equipment, combat, saving throws, and monsters.

## Page-level changes
- Added a **Using These Classes** section explaining that optional classes require Referee permission, inherit normal rules from their listed parent class, and use their own advancement tables.
- Added a race/class permission note: use the parent class to decide race availability unless the Referee rules otherwise.
- Reworked each “Otherwise uses” line into a linked **Parent class** line.
- Added internal links to parent classes, spell pages, attack roll rules, saving throws, equipment armor tables, Back Stab, Thievery, Turn Undead, spell lists, and relevant monster entries.
- Kept the collapsible *Swords & Wizardry Continual Light* OGL section in place.

## Class-by-class changes
### Bard
- Linked the parent class to `thief.html`.
- Linked `Charm Person` and `Detect Magic` to their spell pages.
- Clarified that the daily spells are class abilities, not Magic-User or Cleric spell slots.
- Linked the inspiring song attack bonus to the attack roll rules and rounds to the time rules.

### Assassin
- Expanded **Death Attack** so it now explains when the Assassin can use it: only when the Assassin could otherwise use Thief **Back Stab**.
- Clarified that the attack is resolved first; the save-or-die effect only occurs if the attack hits.
- Linked Back Stab, Thievery, saving throws, and leather armor.

### Druid
- Linked the parent class to `cleric.html`.
- Linked the animal-only `Charm Person` feature to the spell page.
- Clarified that the Druid otherwise uses Cleric Hit Dice, saving throws, Cleric spells, and Cleric procedures unless changed by the optional class.
- Clarified that the leather armor line replaces the Cleric’s normal armor permission.

### Monk
- Clarified that the AC and unarmed damage bonuses use the advancement table values and stop increasing at the stated maximums.
- Clarified that, as a Cleric-based class, the Monk otherwise inherits Cleric procedures unless the Referee revises them.
- Linked Cleric and Turn Undead.

### Necromancer
- Expanded Banish/Turn Undead by linking it to the Cleric Turning Procedure and explaining that the Necromancer reads its class level as Cleric level.
- Clarified that successfully banished undead are controlled for 5 rounds instead of being turned or banished.
- Added a note that SWCL does not define detailed command or post-duration behavior, so those remain Referee decisions.
- Linked Magic-User spellcasting and the Magic-User spell table.

### Paladin
- Expanded “casts Cleric spells as a Cleric one level lower” with examples: 1st-level Paladins have no effective Cleric spellcasting level, 2nd-level Paladins cast as 1st-level Clerics, and so on.
- Linked the Cleric spell list and Cleric spell table.
- Clarified that only spellcasting is delayed; other Fighter features remain inherited from the parent class.

### Ranger
- Linked leather and chain armor to the equipment armor table.
- Clarified that tracking is a 1d6 roll and that the wilderness chance is better than the dungeon/urban chance.
- Clarified that the +1 favored-enemy damage modifies damage rolls only, not attack rolls.
- Linked goblins, ogres, trolls, and giants to appropriate monster pages/subcategory.

### Swashbuckler
- Linked the Fighter attack roll table and melee weapon rules.
- Clarified that Fighter attack progression applies only while using a melee weapon.
- Clarified that other attacks continue to use the Thief attack progression.
- Linked Back Stab and Thievery.

## Files changed
- `classes/optional-classes.html`
- `optional-classes-change-report.md` (this report)

## Validation
- Ran an internal link checker over all local `.html` files in the site.
- Result: no missing local links detected.
