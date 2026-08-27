# Wremena — logo font

`styles.css` declares `--font-logo: 'Wremena', Georgia, serif;` and applies it
only to `.logo` (the "ADDRESS" wordmark in the header/footer). Wremena is not
on Google Fonts, so it isn't loaded from a CDN — it needs to be self-hosted
here.

Drop the licensed font files you have for Wremena into this folder as:

- `Wremena-Regular.woff2` (required)
- `Wremena-Regular.woff` (fallback for older browsers)

`styles.css` already has the matching `@font-face` rule pointing at these
paths. Until the files are added, the logo falls back to `Georgia, serif`
with no error — nothing else on the site depends on this font.
