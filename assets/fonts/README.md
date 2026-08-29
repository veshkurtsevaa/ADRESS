# Self-hosted fonts

Neither font below is on Google Fonts, so both are self-hosted here rather
than loaded from a CDN. Until the real files are dropped in, each one falls
back gracefully — nothing breaks, the site just uses the fallback look.

## Wremena — logo font

`styles.css` declares `--font-logo: 'Wremena', Georgia, serif;` and applies it
only to `.logo` (the "ADDRESS" wordmark in the header/footer).

Drop the licensed font files you have for Wremena into this folder as:

- `Wremena-Regular.woff2` (required)
- `Wremena-Regular.woff` (fallback for older browsers)

Until added, the logo falls back to `Georgia, serif`.

## NewParis Skyline — heading font

`styles.css` declares
`--font-display: 'NewParis Skyline', 'Fraunces', Georgia, serif;`, used for
every heading and section title sitewide (h1–h3, section titles, the
Contacts headline, etc).

Drop the licensed font files into this folder as:

- `NewParisSkyline-Regular.woff2` (required)
- `NewParisSkyline-Regular.woff` (fallback for older browsers)

Until added, headings fall back to Fraunces (already loaded from Google
Fonts), so the look stays presentable in the meantime.

`styles.css` already has the matching `@font-face` rules for both fonts,
pointing at the paths above.
