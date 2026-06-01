# White Box Core Monster Category Description Update Report

## Scope

Updated only the core White Box monster pages in the Demon, Dragon, Golem, Human, and Lycanthrope groups. I did not rewrite the Basic Fantasy or Basic Fantasy Field Guide conversion pages in those categories.

## Summary of changes

- Replaced every `migrated-category-notes` block on the targeted core pages with source-style `category-notes` using the White Box SRD category text.
- Removed the synthesized/editorial category-note text that summarized mechanics across converted SRD pages.
- Preserved all existing monster stat blocks, images/figures, image captions, navigation, backlinks, and See Also sections.
- Corrected the core creature description text from the White Box PDF where the website text had drifted or was truncated; most notably, `dragon-blue.html` now includes the full lightning-breath sentence.

## Formatting applied

For short category descriptions, the description area now follows this pattern:

```text
[SRD Text for General Category]

[SRD Text for Specific Creature]
```

This was applied to the Demon, Golem, Human, and Lycanthrope pages.

For dragons, which have shared age and breath-weapon rules and tables, the description area now follows this pattern:

```text
[SRD Text for Specific Creature]

Dragons

[SRD Text for General Category, tables, rules, and notes]
```

The dragon category section now uses the original White Box text, Table 41: Dragon Age Category, Table 42: Dragon Breath Weapons, the original table footnote, and the original note about dragons being dangerous but not invincible.

## Files changed

### Demons

- `monsters/demon-balor.html`
- `monsters/demon-imp.html`
- `monsters/demon-lemure.html`
- `monsters/demon-succubus.html`

### Dragons

- `monsters/dragon-black.html`
- `monsters/dragon-blue.html`
- `monsters/dragon-gold.html`
- `monsters/dragon-green.html`
- `monsters/dragon-red.html`
- `monsters/dragon-white.html`

### Golems

- `monsters/golem-flesh.html`
- `monsters/golem-glass.html`
- `monsters/golem-iron.html`
- `monsters/golem-stone.html`
- `monsters/golem-wood.html`

### Humans

- `monsters/human-bandit.html`
- `monsters/human-berserker.html`
- `monsters/human-sergeant-at-arms.html`
- `monsters/human-soldier.html`

### Lycanthropes

- `monsters/lycanthrope-werebear.html`
- `monsters/lycanthrope-wererat.html`
- `monsters/lycanthrope-werewolf.html`

## Category-specific notes

### Demons

The former Demon Notes block contained a rewritten lower-planar description plus a cross-entry mechanics summary. I replaced it with the single White Box category paragraph and moved it before each demon's specific description.

### Dragons

The former Dragon Rules block contained a mixture of White Box rules, converted-dragon coverage, expanded breath categories, source-reference notes, and editorial guidance. I replaced it with the White Box dragon category text and original tables. The specific dragon description now appears first, followed by a `Dragons` heading and the shared category rules.

### Golems

The former Golem Notes block discussed Basic Fantasy and Field Guide variants and warned that not all golems share a universal rules package. I replaced it on the core White Box golems with the White Box golem category paragraph and placed that paragraph before each golem's specific description.

### Humans

The former Human Notes block added reskinning guidance and a mechanics summary. I replaced it with the two White Box human-category paragraphs and placed them before each human NPC's specific description.

### Lycanthropes

The former Lycanthrope Notes block discussed mixed White Box and Basic Fantasy handling. I replaced it with the White Box lycanthrope category paragraph and placed it before each core lycanthrope's specific description.

## Validation

- Targeted pages no longer contain `migrated-category-notes`.
- Targeted pages no longer contain `conversion-note` category guidance.
- Targeted dragon pages no longer include non-SRD `Source PDF page` paragraphs.
- Existing See Also sections remain in place.
- Existing figures remain in place. Figure counts after update: `{"demon-balor.html": 0, "demon-imp.html": 1, "demon-lemure.html": 0, "demon-succubus.html": 1, "dragon-black.html": 1, "dragon-blue.html": 1, "dragon-gold.html": 1, "dragon-green.html": 1, "dragon-red.html": 1, "dragon-white.html": 1, "golem-flesh.html": 0, "golem-glass.html": 0, "golem-iron.html": 0, "golem-stone.html": 1, "golem-wood.html": 0, "human-bandit.html": 0, "human-berserker.html": 0, "human-sergeant-at-arms.html": 0, "human-soldier.html": 0, "lycanthrope-werebear.html": 0, "lycanthrope-wererat.html": 0, "lycanthrope-werewolf.html": 1}`.
