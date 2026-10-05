# Documentation demo assets

These assets are local files. The docs do not embed or request media from
dev.fast at runtime. `DemoFigure.astro` provides playback controls, descriptive
captions, and links to enlarge still images. Videos are silent and do not
autoplay. Keep the instructions and captions useful without playback.

## Video source

The three MP4 files and their WebP posters come from
`.github/assets/whiteboard-demo.gif`. Its Git blob is
`45fa6abf20bd67b03190b1916dbef0e258ac7823`, identical to the asset in Whiteboard
v0.2.0 (`3ede058ae2f27c4d58e2291be1e307af072da46a`).

| File            | Start        | Duration      | Poster time |
| --------------- | ------------ | ------------- | ----------- |
| overview        | 4 seconds    | 35.15 seconds | 16 seconds  |
| diagram-to-code | 12 seconds   | 8 seconds     | 16 seconds  |
| copy-for-agent  | 21.5 seconds | 5 seconds     | 24 seconds  |

To regenerate a video from the repository root, substitute the table's values:

```sh
ffmpeg -i .github/assets/whiteboard-demo.gif -ss START -t DURATION \
  -an -c:v libx264 -crf 23 -preset slow -pix_fmt yuv420p \
  -movflags +faststart apps/docs/src/assets/demos/NAME.mp4
```

The posters use the source frame at the listed time, encoded as WebP at
quality 85. The source GIF uses 50 milliseconds per frame.

For `copy-for-agent`, add `-vf crop=816:572:370:70` to the video command. Crop
its poster to `(370, 70, 1186, 642)` too. This keeps the selection toolbar and
confirmation visible at a larger size.

## Website stills

`diff-summary.webp` and `linked-conversation.webp` are captures of the
[dev.fast homepage](https://dev.fast/) demo from October 4, 2026. They
illustrate folding code and opening linked conversations. Captions identify
these as website examples, rather than exact screenshots of a released desktop
interface.

Capture at a 1280 × 900 viewport in dark mode:

1. Open the live demo with **open full screen**.
2. Select **read beautiful, semantic diffs**.
3. Capture the region labeled **Expandable jsonl-storage.ts diff**.
4. Select **audit agent trajectories**.
5. Select the quote **Keep existing JSONL sessions compatible**.
6. Capture the review and conversation together, without the website navigation.

The conversation crop uses viewport coordinates `(271, 38, 1268, 530)`. Both
stills use WebP at quality 90. Reassess the crop if the website layout changes.
Before replacing media, make sure that the demonstrated actions exist in the
documented stable release.
