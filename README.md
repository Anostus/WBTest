# White Box SRD Site

This folder contains a static HTML reference site generated from the uploaded White Box PDF.

Start at `index.html`.

Key files:

- `monsters/index.html` - alphabetical monster index with Hit Dice and HDE/XP.
- `pages/` - chapter pages preserving extracted source text.
- `monsters/monster-index.json` - machine-readable monster index data.

Notes:

- The source PDF did not contain extractable full text on the cover page, and the final House Rules page is mostly blank.
- Artwork from the PDF is not included.
- Review legal/license text before public posting; this generated package reproduces extractable text from the uploaded PDF and source credits.

Monster entries parsed: 106.


## v2 update

- Added `ogl.html` with the OGL 1.0a license and White Box open-content designation.
- Added `tables.html` and chapter-level formatted table sections using semantic HTML tables.


## BFRPG monster conversion update

- Converted entries are marked with `†` in tables and indexes; the footnote identifies them as converted creatures.
- Individual converted creature pages include a CC BY-SA source note.
- See `BFRPG_CONVERSION_ISSUES.txt` for conversion notes and judgment calls.


This build also adds 672 converted creatures from the Basic Fantasy Field Guide Omnibus. Field Guide pages include a Creative Commons Attribution-ShareAlike 4.0 source note, and the monster indexes mark converted creatures with a dagger (†).

This trimmed build omits the redundant `monsters/all.html` and `full-text.html` aggregate pages to keep the static SRD smaller. Individual monster pages, the Monster Index, and chapter/index tables remain available.


## v3 reflow update

- Split the four character classes into `classes/` pages and added a class index.
- Split Chapter 6 spell descriptions into individual `spells/` pages.
- Added `spells/index.html`, `spells/cleric.html`, and `spells/magic-user.html`.
- Moved class, spell, and monster indexes into the appropriate chapter areas in the site navigation.
- Reflowed core chapter text away from page-by-page source cards and kept formatted tables in semantic HTML.


Update: Race pages have been split into `races/`, and Chapters 1 and 5 have been reflowed for textual/formatting fidelity with tables placed in context.


Update: Chapters 4 and 7 have been reflowed for textual/formatting fidelity, and Chapter 8 now focuses on general monster rules while individual monster entries remain in the monster index/pages.

## Duplicate Monster Cull

Removed duplicate monster conversion pages according to the project rules: White Box core takes precedence over same-name BFRPG conversions within 3 HD, and BFRPG core conversions take precedence over same-name Field Guide Omnibus conversions.

Additional optional-rule page:
- `pages/the-d6-principle-optional-rule.html` — formatted optional rule adapted from White Box: Dungeon Adventures page 22.
