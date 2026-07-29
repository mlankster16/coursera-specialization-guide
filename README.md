# Coursera Specialization Guide

An interactive orientation page for Duke CTL faculty leads building a Coursera
Specialization. It explains the platform's structure — Specialization → Course →
Module → Lesson → Learning asset — then hands off to a clean fill-in template.

**Live site:** https://mlankster16.github.io/coursera-specialization-guide/

## Why it exists

It replaces two dense self-guided faculty workbooks that mixed Coursera guidance
and fill-in fields together on the same page, which buried the big picture. This
splits them:

- **This site** carries all the guidance and best practices. Read-only.
- **The template** (`template/`) is fields only — no instructions.

## Design notes

- Modularity over sequence. Courses are framed as self-contained and reusable in
  another Specialization, not as chapters in a fixed path. There is deliberately
  no skill ladder or prerequisite chain.
- Definitions come from Coursera's own "Getting Started: Coursera Terminology"
  documentation.
- Structural targets are Duke's: 3–4 courses and 12–32 hours per Specialization;
  2–4 learning objectives, 3–4 modules, and 2–8 hours per course; 2–4 objectives,
  2–3 optional lessons, and 1 graded assessment per module. These are intentionally
  lighter than Coursera's public guidance.

## Editing

Plain HTML/CSS/JS. No build step — open `index.html` directly, or serve the folder.

All copy lives in **`content.json`**; `app.js` renders it. To change wording, counts,
or the guidance in a detail drawer, edit that file only.

Icons are inline SVG paths in the `ICONS` map at the top of `app.js` — no icon
font or external assets, so nothing to install.

## Linking the template

The two "Open the planning template" buttons stay inert until `templateUrl` in
`content.json` is set. Upload `template/Coursera-Specialization-Template.docx` to
Google Drive, open it (Drive converts it), then paste its share link as
`templateUrl`.

## Deploying

Pushing to `main` publishes automatically via GitHub Pages (served from the branch
root). `.nojekyll` keeps Pages from running the files through Jekyll.
