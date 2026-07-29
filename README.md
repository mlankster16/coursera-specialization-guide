# Coursera Specialization Guide

An interactive guide for Duke CTL faculty leads building a Coursera Specialization.
It explains the platform's structure — Specialization → Course → Module → Learning
asset — then hands off to a clean fill-in template.

**Live site:** https://mlankster16.github.io/coursera-specialization-guide/

## Structure

An Overview page plus four drill-down pages, routed by hash so there's no build step
and every page is directly linkable:

| Route | Page |
|---|---|
| `#/` | **Overview** — the hierarchy diagram, how this differs from a for-credit course, certificates |
| `#specialization` | Planning the whole program |
| `#course` | Planning a course |
| `#module` | Planning a module, including WWHAA, the first 10 items, and lessons |
| `#assets` | All 8 learning asset types, each with pedagogy, accessibility, and copyright |

A persistent flow nav in the header shows the hierarchy and marks the current page, so
faculty can see both the scale and where they are. Clicking any element in the Overview
diagram opens that level's page. Lessons deliberately have no page of their own — being
optional and internal to a module, they live on the Module page.

## Why it exists

It replaces two dense self-guided faculty workbooks that mixed Coursera guidance
and fill-in fields together on the same page, which buried the big picture. This
splits them:

- **This site** carries all the guidance and best practices. Read-only.
- **The template** (`template/`) is fields only — no instructions.

## Design notes

- Modularity over sequence, which is Coursera's own stated first principle
  ("Design modular, standalone content"). Courses are framed as self-contained rather
  than as chapters in a fixed path — but note the nuance Coursera is explicit about:
  standalone does *not* mean unsequenced. Content may increase in complexity; what
  breaks reuse is cross-referencing other courses, modules, or the Specialization by
  name.
- **The case for standalone design is made from the learner's side, not from reuse.**
  Faculty read this page, so it deliberately avoids implying that CTL might repurpose
  their courses into other Specializations without them. The reason each course must
  work alone is that learners genuinely enroll in one course without the others.
  Reuse is described only as an option that stays open, and the course drawer states
  plainly that any such decision would be a conversation with the faculty lead.
- Definitions come from Coursera's "Getting Started: Coursera Terminology," "Course
  Content Specifications," and "Specialization Content Specifications."
- Deliberately omitted at Duke's direction: discussion prompts (being sunset in
  favour of practice quizzes and Coach Dialogues), peer review assignments (not
  recommended for public courses), and any mention of Specialization certificates
  counting toward a degree (Duke does not opt in).
- Structural targets are Duke's:
  - **Specialization** — 3–6 courses, 12–48 hours of learner time
  - **Course** — 2–4 learning objectives, 3–6 modules, 2–8 hours
  - **Module** — 1–3 learning objectives, 2–5 optional lessons, 1 graded assessment

  Objectives differ by level deliberately: 2–4 per course, 1–3 per module. Coursera's
  current Specialization spec requires 3+ courses, so Duke's range sits inside it;
  the hour targets are intentionally lighter than Coursera's recommendations.

  All of these live in `content.json` only — grep a range before changing it, since
  some numbers that look alike are unrelated (Coach Dialogue's "2–4 follow-up areas",
  for one).

## Still open

- Every drill-down page ends with an **Example** and a **Filling out the template**
  section rendered as a visible dashed placeholder. They stay that way until the
  gold-standard example content and the redrafted template exist.
- `templateUrl` is empty, so both "Open the planning template" buttons are inert.
- Duke-specific copyright and accessibility policy still to be folded into the asset
  sections, which currently carry general guidance only.
- The `.docx` in `template/` predates several rounds of revision and needs a rebuild
  to match this site.
- Per-page structure is still being worked out; the four drill-down pages are a first
  pass, not settled.

## Editing

Plain HTML/CSS/JS. No build step — open `index.html` directly, or serve the folder.

All copy lives in **`content.json`**; `app.js` renders it. To change wording or counts,
edit that file only.

Page sections are typed, so a page's shape is data rather than code. Supported section
types: `prose`, `checklist`, `cards`, `callout`, `phases`, `sequence`, `compare`,
`example`, `template`. Add or reorder entries in a page's `sections` array and the
renderer handles the rest.

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
