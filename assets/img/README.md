# Photos

Two sets live here: the five homepage index rows and the seven shots used by
the five About slides. `styles.css` layers each `<img>` over its frame and
`script.js` removes an `<img>` that fails to load, so a missing file falls
back to the grey placeholder rather than a broken-image icon.

## Homepage — `index.html`, section `#index`

| File                     | Row            | Photo                                        |
| ------------------------ | -------------- | -------------------------------------------- |
| `index-01-personal.jpg`  | 01 — Personal  | Sitting room with the stone fireplace         |
| `index-02-tailored.jpg`  | 02 — Tailored  | Ocean shoreline at sunset                     |
| `index-03-concierge.jpg` | 03 — Concierge | Pool and loungers beside a villa in the jungle |
| `index-04-about.jpg`     | 04 — About Us  | Stone benches around a lit fire pit            |
| `index-05-contacts.jpg`  | 05 — Contacts  | Handwritten card and perfume box on an armchair |

All five are 1080×1440 (3:4) and the media box is 3:4 to match, so each frame
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

The photos carry their own white border, so `styles.css` drops the
placeholder's hairline border whenever a photo is present — otherwise it reads
as a second frame.

If a photo is swapped, update the `alt` text on the matching `<img>` so it
still describes what's in the frame.
