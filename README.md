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

- Modularity over sequence, which is Coursera's own stated first principle
  ("Design modular, standalone content"). Courses are framed as self-contained and
  reusable in another Specialization, not as chapters in a fixed path — but note the
  nuance Coursera is explicit about: standalone does *not* mean unsequenced. Content
  may increase in complexity; what breaks reuse is cross-referencing other courses,
  modules, or the Specialization by name.
- Definitions come from Coursera's "Getting Started: Coursera Terminology," "Course
  Content Specifications," and "Specialization Content Specifications."
- Deliberately omitted at Duke's direction: discussion prompts (being sunset in
  favour of practice quizzes and Coach Dialogues), peer review assignments (not
  recommended for public courses), and any mention of Specialization certificates
  counting toward a degree (Duke does not opt in).
- Structural targets are Duke's: 3–4 courses and 12–32 hours per Specialization;
  2–4 learning objectives, 3–4 modules, and 2–8 hours per course; 2–4 objectives,
  2–3 optional lessons, and 1 graded assessment per module. Coursera's current
  Specialization spec requires 3+ courses, so Duke's 3–4 sits inside it; the hour
  targets are intentionally lighter than Coursera's recommendations.

## Still open

- `templateUrl` is empty, so both "Open the planning template" buttons are inert.
- The Copyright and accessibility section holds general guidance only. Duke-specific
  policy is still to be supplied and slotted in.
- The `.docx` in `template/` predates several rounds of revision and needs a rebuild
  to match this site.

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
