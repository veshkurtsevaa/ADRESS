# Hero video

`home-hero.mp4` plays behind the opening screen of `index.html`, muted and
looping. Uploaded as `Tai Long Wan (1).mp4` and prepared here:

| | |
| --- | --- |
| Picture | H.264, 1920×1080, 23.98 fps, 3168 kb/s |
| Length | 10.5 s |
| Size | 3.96 MB |

Two things were done to the upload, neither of which touches the picture:

- **The audio track was removed.** The tag is muted, so it never played;
  it was 127 kb/s of download nobody could hear.
- **The index was moved to the front** (`-movflags +faststart`). It sat at
  the end of the file, so a browser had to fetch all four megabytes before
  it could show a single frame. Now playback starts on the first chunk.

```
ffmpeg -i upload.mp4 -c:v copy -an -movflags +faststart home-hero.mp4
```

If the file needs to get lighter, re-encoding at CRF 26 brings it to about
2.6 MB with some loss of detail; a shorter loop saves proportionally more.
