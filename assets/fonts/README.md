# Self-hosted fonts

Work Sans comes from Google Fonts. Wremena does not, so it lives here.

## Wremena Light — wordmark and headings

`styles.css` declares `--font-logo` and `--font-display` as
`'Wremena', 'Fraunces', Georgia, serif`, used by the ADDRESS wordmark, every
heading (h1 to h3), the section titles and the Contacts headline.

The font arrived as `Wremena Light.otf` (59KB) and was converted here to
`Wremena-Light.woff2` (26KB) and `Wremena-Light.woff` (31KB), which is what
browsers download. The `.otf` stays as the source; the `@font-face` rule
lists all three, best format first.

To replace the font later, drop the new file in and convert it the same way:

```
pip install fonttools brotli
python3 -c "from fontTools.ttLib import TTFont; f=TTFont('NEW.otf'); f.flavor='woff2'; f.save('Wremena-Light.woff2')"
```

The face carries both Cyrillic and Latin, so both languages are covered.

## What the rest of the site uses

- **Work Sans** (Google Fonts): body copy, buttons, form fields, labels and
  every run of digits, including the 01 to 06 section numbers.
- **IBM Plex Mono**: only the small journal-style tags (`personal`,
  `tailored`, `сервисы`) and the language switch.

## NewParis Skyline

No longer referenced. `NewParisSkyline-Regular.woff2` and `.woff` are still in
this folder; nothing loads them.

## Fraunces

Still requested from Google Fonts as the fallback behind Wremena, so a slow
or blocked font request degrades to something close rather than to Georgia.
