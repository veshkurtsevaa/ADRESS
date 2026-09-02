# Photos

Three sets live here: the homepage index rows, the seven shots used by
the five About slides and the one used by the Contacts closing slides.
`styles.css` layers each `<img>` over its frame and
`script.js` removes an `<img>` that fails to load, so a missing file falls
back to the grey placeholder rather than a broken-image icon.

## Homepage — `index.html`, section `#index`

| File                     | Row                  | Photo                                        |
| ------------------------ | -------------------- | -------------------------------------------- |
| `index-01-personal.jpg`  | 01 — Address Personal | Sitting room with the stone fireplace        |
| `index-02-tailored.jpg`  | 02 — Address Tailored | Ocean shoreline at sunset                    |
| `index-03-hotels.jpg`    | 03 — Hotel Booking   | Hotel lounge under a vault, arched window     |
| `index-03-concierge.jpg` | 04 — Concierge       | Pool and loungers beside a villa in the jungle |

`index-04-about.jpg` and `index-05-contacts.jpg` are unused since the index
dropped its About and Contacts rows; they are kept for a future slide.

`index-03-hotels.jpg` is a copy of `photo_2026-08-30 00.21.42.jpeg`; the file
names keep their original numbering, so `index-03-concierge.jpg` now sits in
row 04. All the others are 1080×1440 (3:4) and the media box is 3:4 to match, so each frame
shows in full with no crop. A replacement shot at a different ratio will be
cropped to 3:4 by `object-fit: cover` — either crop it to 3:4 first, or adjust
`.index-row__reveal-media .photo-placeholder` in `styles.css`.

## About — `about.html`, the five slides

| File                          | Slide                  | Photo                                     |
| ----------------------------- | ---------------------- | ----------------------------------------- |
| `about-01-hero.jpg`           | 01 — ADDRESS           | Parasol and two loungers on white sand     |
| `about-02-hotel-interior.jpg` | 02 — Hotels, left      | Lit sideboard under silk pendant lamps     |
| `about-03-hotel-grounds.jpg`  | 02 — Hotels, right     | Formal garden and oval pool from above     |
| `about-04-process.jpg`        | 03 — How we work       | Paper cup on a stone ledge above the water |
| `about-05-guide-italy.jpg`    | 04 — Guides, ITALY     | Pale leather bag on marble by a hedge      |
| `about-06-guide-london.jpg`   | 04 — Guides, LONDON    | Statues along a hedge on a gravel walk     |
| `about-07-closing.jpg`        | 05 — Closing, full-bleed | Pale blossom in a shaft of light         |

The About frames are 4:5 (the hero is 3:4) and the shots are 1440×1795 and
1080×1440, so they fill their frames with no visible crop. `about-07` is the
only one used as a full-bleed background: it is deliberately inset past the
section edges in `styles.css` — top and bottom to leave room for the parallax
drift, left and right to crop away its own white border — so it is cropped by
design.

## Contacts — `contacts.html`

| File                    | Where                        | Photo                                       |
| ----------------------- | ---------------------------- | ------------------------------------------- |
| `contacts-03-table.jpg` | Direct channels, full-bleed  | Round table and four chairs in raking light |

It is 1440×1920 (3:4) and is used as a full-bleed background, inset past the
section edges in `styles.css`, so it is cropped by design — same as
`about-07`. The trip-brief slide below it is flat navy, with no photo.

The `photo_2026-08-30 *.jpeg` files are the rest of that upload, kept for
future slides; nothing references them yet.

The photos carry their own white border, so `styles.css` drops the
placeholder's hairline border whenever a photo is present — otherwise it reads
as a second frame.

If a photo is swapped, update the `alt` text on the matching `<img>` so it
still describes what's in the frame.
