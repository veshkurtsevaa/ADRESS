# Self-hosted fonts

Work Sans and Fraunces come from Google Fonts. Wremena does not, so it lives
here. Until its file is added the site falls back to Fraunces and nothing
breaks: the moment the file appears, every heading and the wordmark switch
over on their own.

## Wremena Light — wordmark and headings

`styles.css` declares `--font-logo` and `--font-display` as
`'Wremena', 'Fraunces', Georgia, serif`, used by the ADDRESS wordmark, every
heading (h1 to h3), the section titles and the Contacts headline.

Drop the font file into this folder as one of these, in order of preference:

- `Wremena-Light.woff2` (best: smallest file)
- `Wremena-Light.woff`
- `Wremena-Light.ttf` (works as is, just heavier to download)

The `@font-face` rule already lists all three paths, so whichever one you
upload is picked up. A `.ttf` you have on hand can be dropped in unchanged.

## What the rest of the site uses

- **Work Sans** (Google Fonts): body copy, buttons, form fields, labels and
  every run of digits, including the 01 to 06 section numbers.
- **IBM Plex Mono**: only the small journal-style tags (`personal`,
  `tailored`, `сервисы`) and the language switch.

## NewParis Skyline

No longer referenced. `NewParisSkyline-Regular.woff2` and `.woff` are still in
this folder; nothing loads them.
