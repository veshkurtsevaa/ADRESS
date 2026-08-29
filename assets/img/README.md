# Homepage index photos

The five index rows on the homepage (`index.html`, section `#index`) each show a
photo from this folder. `styles.css` layers the `<img>` over the grey
`photo-placeholder` block, and `script.js` removes the `<img>` if the file is
missing — so a row with no photo falls back to the placeholder rather than a
broken image icon.

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

The photos carry their own white border, so `styles.css` drops the
placeholder's hairline border whenever a photo is present — otherwise it reads
as a second frame.

If a photo is swapped, update the `alt` text on the matching `<img>` in
`index.html` so it still describes what's in the frame.
