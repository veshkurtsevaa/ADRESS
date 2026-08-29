# Homepage index photos

The five index rows on the homepage (`index.html`, section `#index`) each show a
photo. `styles.css` layers the `<img>` over the grey `photo-placeholder` block,
and `script.js` removes the `<img>` if the file is missing — so until the real
files land here, the rows fall back to the placeholder instead of a broken
image icon.

Drop the photos in with exactly these names (JPEG, landscape, the row crops
them to a 4:3 box — ~1600px wide is plenty):

| File                      | Row              | Photo to use                                             |
| ------------------------- | ---------------- | -------------------------------------------------------- |
| `index-01-personal.jpg`   | 01 — Personal    | Hotel courtyard with the raked sand garden and stones     |
| `index-02-tailored.jpg`   | 02 — Tailored    | Ocean shoreline at sunset                                 |
| `index-03-concierge.jpg`  | 03 — Concierge   | Villa pool deck with loungers in the jungle               |
| `index-04-about.jpg`      | 04 — About Us    | Sitting room with the stone fireplace and vaulted ceiling |
| `index-05-contacts.jpg`   | 05 — Contacts    | Handwritten card and gift box on the armchair             |

If a photo is swapped for a different one, update the `alt` text on the matching
`<img>` in `index.html` so it still describes what's in the frame.
