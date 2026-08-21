/* ---------- Inline line-art icon set (no emoji, no external files) ---------- */

const ICONS = {
  certificate: '<path d="M5 3h9l5 5v13H5V3Z"/><path d="M14 3v5h5"/><circle cx="12" cy="13" r="2.4"/><path d="M10.4 15.2 9.9 19l2.1-1.1 2.1 1.1-.5-3.8"/>',
  layers: '<path d="M12 3 3 7.5l9 4.5 9-4.5L12 3Z"/><path d="M3 12.4 12 17l9-4.6"/><path d="M3 16.9 12 21.5l9-4.6"/>',
  chart: '<path d="M3 20h18"/><path d="M6.5 20v-4.5"/><path d="M11 20V10"/><path d="M15.5 20v-7"/><path d="M20 20V5.5"/>',
  clock: '<circle cx="12" cy="12" r="8.5"/><path d="M12 7.2V12l3.4 2"/>',
  list: '<path d="M9.5 6.5h10"/><path d="M9.5 12h10"/><path d="M9.5 17.5h10"/><circle cx="5" cy="6.5" r="1.3"/><circle cx="5" cy="12" r="1.3"/><circle cx="5" cy="17.5" r="1.3"/>',
  person: '<circle cx="12" cy="8" r="3.4"/><path d="M5.5 20c0-3.4 2.9-5.8 6.5-5.8s6.5 2.4 6.5 5.8"/>',
  check: '<circle cx="12" cy="12" r="8.5"/><path d="m8.2 12.2 2.8 2.8 4.8-5.8"/>',
  star: '<path d="m12 3.6 2.5 5.2 5.7.8-4.1 4 1 5.7-5.1-2.7-5.1 2.7 1-5.7-4.1-4 5.7-.8L12 3.6Z"/>',
  play: '<circle cx="12" cy="12" r="8.5"/><path d="M10.2 8.4 16 12l-5.8 3.6V8.4Z"/>',
  book: '<path d="M12 6.6C10.5 5.1 8 4.6 4.2 4.6v12.6c3.8 0 6.3.5 7.8 2 1.5-1.5 4-2 7.8-2V4.6c-3.8 0-6.3.5-7.8 2Z"/><path d="M12 6.6v14.6"/>',
  chat: '<path d="M20 11.6c0 3.9-3.6 7-8 7-1 0-2-.15-2.9-.44L4.2 19.8l1.2-3.3a6.5 6.5 0 0 1-1.4-4.9C4 7.7 7.6 4.6 12 4.6s8 3.1 8 7Z"/><path d="M9 11.4h.01M12 11.4h.01M15 11.4h.01"/>',
  flask: '<path d="M9.2 3.2h5.6"/><path d="M10.2 3.2v5.5L5.8 17a2.4 2.4 0 0 0 2.2 3.4h8a2.4 2.4 0 0 0 2.2-3.4l-4.4-8.3V3.2"/><path d="M7.4 14.2h9.2"/>',
  question: '<circle cx="12" cy="12" r="8.5"/><path d="M9.7 9.7a2.4 2.4 0 1 1 3.4 2.2c-.7.3-1.1.9-1.1 1.7"/><path d="M12 16.8h.01"/>',
  rosette: '<circle cx="12" cy="8.6" r="4.7"/><path d="m8.8 12.7-1.6 7.7 4.8-2.4 4.8 2.4-1.6-7.7"/>',
  trophy: '<path d="M8 4.2h8v4.6a4 4 0 0 1-8 0V4.2Z"/><path d="M16 5.7h2.4a2.4 2.4 0 0 1-2.4 3.9"/><path d="M8 5.7H5.6A2.4 2.4 0 0 0 8 9.6"/><path d="M12 12.8v2.9"/><path d="M9.4 19.8h5.2"/><path d="M10.6 15.7h2.8l.6 4.1h-4l.6-4.1Z"/>',
  scale: '<path d="M12 4.2v15.6"/><path d="M9 19.8h6"/><path d="M5 7.6h14"/><path d="M7 7.6 4.2 13.4h5.6L7 7.6Z"/><path d="M17 7.6l-2.8 5.8h5.6L17 7.6Z"/>',
  arrow: '<path d="M5 12h13"/><path d="m13 6.5 5.5 5.5L13 17.5"/>',
  mic: '<path d="M12 3.4a2.9 2.9 0 0 1 2.9 2.9v5a2.9 2.9 0 0 1-5.8 0v-5A2.9 2.9 0 0 1 12 3.4Z"/><path d="M6.6 11.3a5.4 5.4 0 0 0 10.8 0"/><path d="M12 16.7v3.9"/><path d="M9.2 20.6h5.6"/>',
  plugin: '<path d="M9 3.4v4.2"/><path d="M15 3.4v4.2"/><path d="M6.4 7.6h11.2v3.8a5.6 5.6 0 0 1-11.2 0V7.6Z"/><path d="M12 17v3.6"/>',
  lightbulb: '<path d="M9.4 17.6h5.2"/><path d="M10.2 20.5h3.6"/><path d="M12 3.4a5.4 5.4 0 0 1 3.2 9.8c-.5.4-.8.9-.8 1.5v.6H9.6v-.6c0-.6-.3-1.1-.8-1.5A5.4 5.4 0 0 1 12 3.4Z"/>',
  gear: '<circle cx="12" cy="12" r="3"/><path d="M12 3.6v2.3M12 18.1v2.3M5.1 7.7l2 1.2M16.9 15.1l2 1.2M5.1 16.3l2-1.2M16.9 8.9l2-1.2"/>',
  copyright: '<circle cx="12" cy="12" r="8.5"/><path d="M14.9 9.5a3.7 3.7 0 1 0 0 5"/>',
  access: '<circle cx="12" cy="12" r="8.5"/><circle cx="12" cy="7.7" r="1.2"/><path d="M7.6 10.3h8.8"/><path d="M12 10.7v4.4"/><path d="m9.3 19 1.5-3.9h2.4l1.5 3.9"/>',
  home: '<path d="M4 10.5 12 4l8 6.5"/><path d="M6 9.4V20h12V9.4"/><path d="M10 20v-5.5h4V20"/>',
};

function icon(name) {
  return `<svg class="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"
    stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ICONS[name] || ''}</svg>`;
}

/* ---------- State + routing ---------- */

let C = null;

async function init() {
  const res = await fetch('content.json');
  C = await res.json();
  window.addEventListener('hashchange', render);
  render();
}

/* Hash is "page" or "page/section" — e.g. "assets" or "assets/reading" */
function parseHash() {
  const raw = location.hash.replace(/^#\/?/, '').split('?')[0];
  const [page, section] = raw.split('/');
  return { page: C.pages[page] ? page : '', section: section || '' };
}

function render() {
  const { page, section } = parseHash();
  renderFlowNav(page);
  document.getElementById('page').innerHTML = page ? pageHtml(page) : homeHtml();
  wireHomeNavigation();
  wireAssetJump();
  wireAdvice();

  // Arriving from a link, jump straight there — the smooth easing is for in-page use.
  // Learning-asset blocks use asset-*; every other linkable section uses sec-*.
  const target =
    section &&
    (document.getElementById(`asset-${section}`) || document.getElementById(`sec-${section}`));
  if (target) target.scrollIntoView({ behavior: 'instant', block: 'start' });
  else window.scrollTo(0, 0);
}

function esc(str) {
  const d = document.createElement('div');
  d.textContent = str == null ? '' : str;
  return d.innerHTML;
}

/* ---------- Flow navigation (shows scale and where you are) ---------- */

function renderFlowNav(current) {
  const nav = document.getElementById('flow-nav');
  const steps = C.nav
    .map(
      (n, i) => `
      ${i > 0 ? '<span class="flow-arrow" aria-hidden="true">&rsaquo;</span>' : ''}
      <a class="flow-step tier-${n.tier}${current === n.id ? ' current' : ''}"
         href="#${n.id}"${current === n.id ? ' aria-current="page"' : ''}>
        <span class="flow-dot"></span>${esc(n.label)}
      </a>`
    )
    .join('');
  nav.innerHTML = `
    <a class="flow-home${current === '' ? ' current' : ''}" href="#/">${icon('home')}<span>Overview</span></a>
    <span class="flow-divider" aria-hidden="true"></span>
    ${steps}`;
}

/* ---------- Home ---------- */

/* Faculty land on a welcome, then a translation of their own course, then the
   structure diagram. The diagram used to come first, which asked them to read an
   unfamiliar shape before anything had connected it to what they already know. */
function homeHtml() {
  const h = C.home;
  return `
    ${heroHtml(h.hero)}
    ${introHtml(h.intro)}
    ${mappingHtml(h.mapping)}
    ${structureHtml(h)}
    ${reuseHtml(h.reuse)}
    ${handoffHtml(h.handoff)}`;
}

function introHtml(i) {
  return `
    <section class="intro">
      <p class="intro-body">${esc(i.body)}</p>
    </section>`;
}

function structureHtml(h) {
  return `
    <section class="compare">
      <div class="compare-head">
        <span class="compare-icon">${icon('layers')}</span>
        <div><h2 class="section-title">${esc(h.structure.title)}</h2></div>
      </div>
      ${legendHtml(h.legend)}
      <div class="infographic">
        ${homeSpecHtml(h.specialization)}
        ${fanHtml(3, '', '42px')}
        ${homeCoursesHtml(h.courses)}
        ${dropHtml(1, 3, 'dashed')}
        ${homeModulesHtml(h.modules)}
        ${dropHtml(1, 3, 'dashed')}
        ${homeAssetsHtml()}
      </div>
    </section>`;
}

function heroHtml(hero) {
  return `
    <section class="hero">
      <h1 class="hero-title">${esc(hero.title)}</h1>
    </section>`;
}

function legendHtml(legend) {
  return `
    <div class="legend">
      ${legend
        .map((l) => `<span class="legend-item tier-${l.tier}"><span class="legend-dot"></span>${esc(l.label)}</span>`)
        .join('')}
    </div>`;
}

function stemHtml(mod = '') {
  return `<div class="stem ${mod}"></div>`;
}

function fanHtml(cols, mod = '', gap = '16px') {
  return `
    <div class="fan ${mod}" style="--cols:${cols};--gap:${gap}">
      <div class="fan-stem"></div>
      <div class="fan-bar"></div>
      <div class="fan-drops">${'<span></span>'.repeat(cols)}</div>
    </div>`;
}

/* Vertical connector under a single column — used to enter the first module */
function dropHtml(col, cols, mod = '', gap = '42px') {
  const cells = Array.from({ length: cols }, (_, i) => `<span${i === col - 1 ? ' class="has-line"' : ''}></span>`).join('');
  return `<div class="drop-row ${mod}" style="--cols:${cols};--gap:${gap}">${cells}</div>`;
}

function openCue(label) {
  return `<span class="more-cue">${esc(label)} &rarr;</span>`;
}

/* Shaped like the Course and Module cards — a larger container, not a louder one */
function homeSpecHtml(s) {
  return `
    <section class="tier tier-spec">
      <div class="tier-body spec-body">
        <button type="button" class="card spec-card" data-goto="specialization">
          <span class="card-top">
            <span class="icon-badge">${icon('certificate')}</span>
            <span class="card-title">Specialization</span>
          </span>
          <span class="card-role">${esc(s.definition)}</span>
          <span class="spec-list">${specRowsHtml(s.specs)}</span>
          ${openCue('Plan your Specialization')}
        </button>
      </div>
    </section>`;
}

function specRowsHtml(specs) {
  return specs.map((s) => `<span class="spec-row">${icon(s.icon)}<span>${esc(s.label)}</span></span>`).join('');
}

function homeCoursesHtml(c) {
  return `
    <section class="tier tier-course">
      <div class="tier-body">
        <div class="course-row">
          ${c.cards
            .map(
              (card) => `
            <button type="button" class="card course-card" data-goto="course">
              <span class="card-top">
                <span class="num-badge">${card.n}</span>
                <span class="card-title">${esc(card.title)}</span>
              </span>
              <span class="card-role">${esc(card.role)}</span>
              <span class="spec-list">${specRowsHtml(c.cardSpecs)}</span>
              ${openCue('Plan a course')}
            </button>`
            )
            .join('')}
        </div>
        ${threadHtml(c.thread, c.cards.length)}
      </div>
    </section>`;
}

/* One thread spanning all the courses, rather than a badge repeated on each card.
   The ticks line up with the card centres so it reads as tying them together. */
function threadHtml(thread, cols) {
  if (!thread) return '';
  return `
    <div class="thread" style="--cols:${cols};--gap:42px">
      <div class="thread-ticks">${'<span></span>'.repeat(cols)}</div>
      <div class="thread-body">
        <span class="thread-icon">${icon('layers')}</span>
        <p>${esc(thread.body)}</p>
      </div>
    </div>`;
}

function homeModulesHtml(m) {
  return `
    <section class="tier tier-module">
      <div class="tier-body">
        <div class="module-row">
          ${m.cards
            .map(
              (card) => `
            <button type="button" class="card module-card" data-goto="module">
              <span class="card-top">
                <span class="icon-badge">${icon('list')}</span>
                <span class="card-title">${esc(card.title)} ${card.n}</span>
              </span>
              <span class="card-role">${esc(card.role)}</span>
              <span class="spec-list">${specRowsHtml(m.cardSpecs)}</span>
              ${openCue('Plan a module')}
            </button>`
            )
            .join('')}
          ${m.cards
            .slice(1)
            .map((_, i) => `<span class="row-arrow" data-gap="${i + 1}" aria-hidden="true">${icon('arrow')}</span>`)
            .join('')}
        </div>
      </div>
    </section>`;
}

function homeAssetsHtml() {
  return `
    <section class="tier tier-asset">
      <div class="tier-body">
        <div class="asset-band">
          <div class="asset-band-head">
            <span class="asset-band-icon">${icon('play')}</span>
            <div>
              <p class="asset-band-title">${esc(C.home.assets.title)}</p>
              <p class="asset-band-note">${esc(C.home.assets.note)}</p>
            </div>
          </div>
          <div class="asset-tiles">
          ${C.pages.assets.items
            .map(
              (a) => `
            <button type="button" class="asset-tile" data-goto="assets/${a.id}">
              <span class="asset-tile-icon">${icon(a.icon)}</span>
              <span class="asset-tile-title">${esc(a.title)}</span>
              <span class="asset-tile-short">${esc(a.short)}</span>
            </button>`
            )
            .join('')}
          </div>
        </div>
      </div>
    </section>`;
}

function reuseHtml(r) {
  return `
    <section class="compare">
      <div class="compare-head">
        <span class="compare-icon">${icon('star')}</span>
        <div>
          <h2 class="section-title">${esc(r.title)}</h2>
          <p class="section-intro">${esc(r.lead)}</p>
        </div>
      </div>
      <div class="reuse-grid">
        ${r.items
          .map(
            (it) => `
          <div class="reuse-item">
            <span class="reuse-icon">${icon(it.icon)}</span>
            <div>
              <p class="reuse-label">${esc(it.label)}</p>
              <p class="reuse-body">${esc(it.body)}</p>
            </div>
          </div>`
          )
          .join('')}
      </div>
    </section>`;
}

/* ---------- Mapping: a semester course translated into Coursera's shape ----------
   Replaces the old differences table. Showing faculty that their existing work has
   a home lands better than listing what's unfamiliar. */

function mappingHtml(m) {
  return `
    <section class="compare">
      <div class="compare-head">
        <span class="compare-icon">${icon('scale')}</span>
        <div>
          <h2 class="section-title">${esc(m.title)}</h2>
          ${m.intro ? `<p class="section-intro">${esc(m.intro)}</p>` : ''}
        </div>
      </div>

      <div class="map">
        <div class="map-heads">
          <span class="map-head-your">${esc(m.yourLabel)}</span>
          <span></span>
          <span class="map-head-cr">${esc(m.courseraLabel)}</span>
        </div>
        ${m.rows
          .map(
            (r) => `
          <div class="map-row">
            <div class="map-from">
              <span class="map-from-label">${esc(r.fromLabel)}</span>
              <span class="map-detail">${esc(r.fromDetail)}</span>
            </div>
            <span class="map-arrow" aria-hidden="true">${icon('arrow')}</span>
            <div class="map-to tier-${r.tier}">
              <span class="map-to-top">
                <span class="map-to-icon">${icon(r.icon)}</span>
                <span class="map-to-label">${esc(r.toLabel)}</span>
              </span>
              <span class="map-detail">${esc(r.toDetail)}</span>
            </div>
          </div>`
          )
          .join('')}
      </div>

      <div class="map-note">
        <span class="map-note-icon">${icon(m.note.icon)}</span>
        <div>
          <p class="map-note-title">${esc(m.note.title)}</p>
          <p class="map-note-body">${esc(m.note.body)}</p>
        </div>
      </div>

    </section>`;
}

function handoffHtml(h) {
  const href = C.templateUrl ? `href="${C.templateUrl}" target="_blank" rel="noopener"` : 'href="#" aria-disabled="true"';
  return `
    <section class="handoff">
      <h2 class="handoff-title">${esc(h.title)}</h2>
      <p class="handoff-body">${esc(h.body)}</p>
      <a class="handoff-cta" ${href}>${esc(h.cta)} &nearr;</a>
    </section>`;
}

/* ---------- Drill-down pages ---------- */

function pageHtml(id) {
  const p = C.pages[id];
  return `
    <article class="page tier-${p.tier}">
      <header class="page-head${p.lead === 'hero' ? ' page-head-hero' : ''}">
        <p class="page-label tier-${p.tier}">${esc(p.label)}</p>
        <h1 class="page-title">${esc(p.title)}</h1>
        ${
          // `lead: "hero"` borrows the Overview's shape: centred title, then the
          // intro inside a white callout rather than running as plain page text.
          p.lead === 'hero'
            ? `<section class="intro">${(Array.isArray(p.lede) ? p.lede : [p.lede])
                .map((t) =>
                  typeof t === 'string'
                    ? `<p class="intro-body">${esc(t)}</p>`
                    : `<ul class="intro-list">${t.bullets
                        .map((b) => `<li>${esc(b)}</li>`)
                        .join('')}</ul>`
                )
                .join('')}</section>`
            : ledeHtml(p.lede)
        }
        ${p.facts ? factsHtml(p.facts) : ''}
        ${p.factsNote ? `<p class="facts-note">${esc(p.factsNote)}</p>` : ''}
      </header>
      ${id === 'assets' ? assetsPageHtml(p) : ''}
      ${(p.sections || []).map((s) => sectionHtml(s, p.tier)).join('')}
      ${nextPrevHtml(id)}
    </article>`;
}

/* ---------- Field advice overlays ----------
   Each template field can carry `advice`, shown in a popover on click. Native
   `popover` gives light-dismiss, Escape, and top-layer stacking for free; only
   the placement needs script. Fields without advice get no button, so nothing
   looks clickable that isn't. */

let adviceSeq = 0;

function adviceExampleHtml(ex) {
  if (!ex) return '';
  const parts = [];
  if (ex.lead) parts.push(`<p class="adv-lead">${esc(ex.lead)}</p>`);
  if (ex.swap) {
    parts.push(`
      <p class="adv-swap"><span class="adv-swap-k">Instead of</span>
        <span class="adv-swap-weak">${esc(ex.swap.instead)}</span></p>
      <p class="adv-swap"><span class="adv-swap-k">Consider</span>
        <span class="adv-swap-strong">${esc(ex.swap.consider)}</span></p>`);
  }
  (ex.paras || []).forEach((t) => parts.push(`<p class="adv-p">${esc(t)}</p>`));
  if (ex.bullets) {
    parts.push(`<ul class="adv-list">${ex.bullets
      .map((b) => `<li>${esc(b)}</li>`)
      .join('')}</ul>`);
  }
  if (ex.table) {
    parts.push(`
      <div class="adv-table-wrap">
        <table class="adv-table">
          <thead><tr>${ex.table.headers.map((h) => `<th>${esc(h)}</th>`).join('')}</tr></thead>
          <tbody>${ex.table.rows
            .map((r) => `<tr>${r.map((c) => `<td>${esc(c)}</td>`).join('')}</tr>`)
            .join('')}</tbody>
        </table>
      </div>`);
  }
  if (ex.note) parts.push(`<p class="adv-note">${esc(ex.note)}</p>`);
  return `<p class="adv-kicker">Example</p>${parts.join('')}`;
}

function adviceHtml(label, advice) {
  if (!advice) return '';
  const id = `adv-${++adviceSeq}`;
  return `
    <button class="adv-btn" type="button" popovertarget="${id}"
            aria-label="Guidance for ${esc(label)}">${icon('question')}</button>
    <div class="adv-pop" id="${id}" popover>
      <p class="adv-field">${esc(label)}</p>
      <p class="adv-kicker">Best practice</p>
      <p class="adv-p">${esc(advice.best)}</p>
      ${adviceExampleHtml(advice.example)}
    </div>`;
}

/* Anchor the panel to its button, clamped so it can never render off-screen.
   CSS anchor positioning is not portable enough to rely on yet. Placement runs
   twice: once before open using the height cap as an estimate, then again once
   the panel is measurable, so a tall panel on a short window still fits. */
function placeAdvice(pop, btn) {
  const MARGIN = 12;
  const GAP = 8;
  const vw = window.innerWidth;
  const vh = window.innerHeight;
  const r = btn.getBoundingClientRect();

  const w = Math.min(430, vw - MARGIN * 2);
  pop.style.width = `${w}px`;
  let left = r.left + r.width / 2 - w / 2;
  pop.style.left = `${Math.max(MARGIN, Math.min(left, vw - w - MARGIN))}px`;

  const below = vh - r.bottom - GAP - MARGIN;
  const above = r.top - GAP - MARGIN;
  const useAbove = below < 200 && above > below;
  const cap = Math.max(140, Math.min(520, useAbove ? above : below));
  pop.style.maxHeight = `${cap}px`;

  const h = pop.offsetHeight ? Math.min(pop.offsetHeight, cap) : cap;
  let top = useAbove ? r.top - GAP - h : r.bottom + GAP;
  pop.style.bottom = 'auto';
  pop.style.top = `${Math.max(MARGIN, Math.min(top, vh - h - MARGIN))}px`;
}

function wireAdvice() {
  document.querySelectorAll('.adv-pop').forEach((pop) => {
    const btn = document.querySelector(`[popovertarget="${pop.id}"]`);
    if (!btn) return;
    pop.addEventListener('beforetoggle', (e) => {
      if (e.newState === 'open') placeAdvice(pop, btn);
    });
    pop.addEventListener('toggle', (e) => {
      if (e.newState === 'open') placeAdvice(pop, btn);
    });
  });
}

/* Section header. With an `icon` it takes the Overview's shape — a circular badge
   beside the title — so the interior pages read as the same family of blocks.
   Without one it stays a plain heading. Carries whichever of intro/note the
   section uses, so callers don't emit it a second time. */
function sectionHeadHtml(s) {
  const title = `<h2 class="section-title">${esc(s.title)}</h2>`;
  const sub = s.intro || s.note;
  const intro = sub ? `<p class="section-intro">${esc(sub)}</p>` : '';
  if (!s.icon) return title + intro;
  return `
    <div class="compare-head">
      <span class="compare-icon">${icon(s.icon)}</span>
      <div>${title}${intro}</div>
    </div>`;
}

/* A lede may be one string or several paragraphs. */
function ledeHtml(lede) {
  if (!lede) return '';
  const paras = Array.isArray(lede) ? lede : [lede];
  return paras.map((t) => `<p class="page-lede">${esc(t)}</p>`).join('');
}

function factsHtml(facts) {
  return `
    <div class="facts-row">
      ${facts
        .map(
          (f) => `
        <div class="fact">
          <span class="fact-icon">${icon(f.icon)}</span>
          <span class="fact-label">${esc(f.label)}</span>
          <span class="fact-sub">${esc(f.sub)}</span>
        </div>`
        )
        .join('')}
    </div>`;
}


/* ---------- Topic -> competency ladder ----------
   Faculty often use these four words interchangeably. Separating them is what makes
   an outcome writable, so this sits right after the considerations. */

function ladderHtml(s) {
  return `
    <section class="block">
      ${sectionHeadHtml(s)}
      <div class="ladder">
        ${
          s.headers
            ? `<div class="rung rung-head">${s.headers
                .map((h) => `<span>${esc(h)}</span>`)
                .join('')}</div>`
            : ''
        }
        ${s.rungs
          .map(
            (r, i) => `
          <div class="rung${i === s.rungs.length - 1 ? ' final' : ''}">
            <span class="rung-term">${esc(r.term)}</span>
            <span class="rung-gloss">${esc(r.gloss)}</span>
            <span class="rung-example">${esc(r.example)}</span>
          </div>`
          )
          .join('')}
      </div>
      <div class="verb-panel">
        <p class="verb-prompt">${esc(s.prompt)}</p>
        <div class="verb-cols">
          <div class="verb-col good">
            <p class="verb-label">${esc(s.goodLabel || 'Verbs that work')}</p>
            <p class="verb-list">${s.goodVerbs.map(esc).join(' · ')}</p>
          </div>
          <div class="verb-col weak">
            <p class="verb-label">${esc(s.weakLabel || 'Harder to assess')}</p>
            <p class="verb-list">${s.weakVerbs.map(esc).join(' · ')}</p>
            <p class="verb-note">${esc(s.weakNote)}</p>
          </div>
        </div>
      </div>
    </section>`;
}

/* ---------- Weaker / stronger versions of the same field ---------- */

function contrastHtml(s) {
  return `
    <section class="block">
      <h2 class="section-title">${esc(s.title)}</h2>
      ${s.intro ? `<p class="section-intro">${esc(s.intro)}</p>` : ''}
      <div class="contrast-list">
        ${s.items
          .map(
            (it) => `
          <div class="contrast">
            <p class="contrast-field">${esc(it.field)}</p>
            <div class="contrast-pair">
              <div class="contrast-side weak">
                <p class="contrast-label">${esc(s.weakLabel)}</p>
                <p class="contrast-text">${esc(it.weak)}</p>
              </div>
              <div class="contrast-side strong">
                <p class="contrast-label">${esc(s.strongLabel)}</p>
                <p class="contrast-text">${esc(it.strong)}</p>
              </div>
            </div>
            <p class="contrast-why">${icon('star')}<span>${esc(it.why)}</span></p>
          </div>`
          )
          .join('')}
      </div>
    </section>`;
}

/* ---------- Template preview: a replica of the matching template section ---------- */

function previewFieldHtml(r, tier) {
  const lines = String(r.ph).split('\n');
  return `
    <div class="tp-field">
      <p class="tp-label">${esc(r.label)}${adviceHtml(r.label, r.advice)}</p>
      ${r.hint ? `<p class="tp-hint">${esc(r.hint)}</p>` : ''}
      <div class="tp-box${r.tall ? ' tall' : ''}">
        ${lines.map((l) => `<span class="tp-ph">${esc(l)}</span>`).join('')}
      </div>
    </div>`;
}

function previewRowHtml(r, tier) {
  switch (r.kind) {
    case 'field':
      return previewFieldHtml(r, tier);

    case 'pair':
      return `
        <div class="tp-pair">
          ${previewFieldHtml(r.left, tier)}
          ${previewFieldHtml(r.right, tier)}
        </div>`;

    case 'band':
      return `
        <div class="tp-band tier-${r.tier}">
          <span class="tp-band-icon">${icon(r.icon)}</span>
          <span class="tp-band-title">${esc(r.title)}</span>
        </div>`;

    case 'note':
      return `<p class="tp-note">${esc(r.text)}</p>`;

    case 'grid': {
      const cls = r.tier ? ` tier-${r.tier}` : '';
      return `
        <div class="tp-field">
          ${r.label ? `<p class="tp-label">${esc(r.label)}</p>` : ''}
          <div class="tp-grid-wrap">
            <table class="tp-grid${cls}">
              <thead><tr>${r.headers
                .map(
                  (h, i) =>
                    `<th style="width:${r.widths[i]}%">${esc(h)}${adviceHtml(
                      h,
                      (r.advice || {})[h]
                    )}</th>`
                )
                .join('')}</tr></thead>
              <tbody>${r.rows
                .map((row) => `<tr>${row
                  .map((c, i) => `<td${i === 0 ? ' class="tp-n"' : ''}>${esc(c)}</td>`)
                  .join('')}</tr>`)
                .join('')}</tbody>
            </table>
          </div>
        </div>`;
    }

    case 'quiz':
      return `
        <div class="tp-quiz">
          <p class="tp-quiz-title">${esc(r.title)}</p>
          <p class="tp-quiz-body">${esc(r.text)}</p>
        </div>`;

    default:
      return '';
  }
}

function templatePreviewHtml(s, tier) {
  const href = C.templateUrl
    ? `href="${C.templateUrl}" target="_blank" rel="noopener"`
    : 'href="#" aria-disabled="true"';
  return `
    <section class="block">
      ${sectionHeadHtml(s)}
      <div class="tp-page tier-${s.band.tier}">
        <div class="tp-band tier-${s.band.tier}">
          <span class="tp-band-icon">${icon(s.band.icon)}</span>
          <span class="tp-band-title">${esc(s.band.title)}</span>
          ${s.band.sub ? `<span class="tp-band-sub">${esc(s.band.sub)}</span>` : ''}
        </div>
        ${s.rows.map((r) => previewRowHtml(r, tier)).join('')}
      </div>
      <a class="tp-open" ${href}>Open the template in Google Docs &nearr;</a>
    </section>`;
}

/* ---------- Two panels, side by side ----------
   Deliberately neutral by default. Some pairs here are a better/worse framing
   ("you might ask instead"), but others are two legitimate choices — a sequenced
   course is not a mistake — so only an explicit `emphasis` tints a side. */

function sideBySideHtml(s, tier) {
  const panel = (side, key) => `
    <div class="sbs-panel${s.emphasis === key ? ` emphasis tier-${s.tier || tier}` : ''}">
      <p class="sbs-label">${esc(side.label)}</p>
      <p class="sbs-body">${esc(side.body)}</p>
    </div>`;
  return `
    <section class="block">
      ${sectionHeadHtml(s)}
      ${(s.body || []).map((b) => `<p class="block-p">${esc(b)}</p>`).join('')}
      <div class="sbs">
        ${panel(s.left, 'left')}
        ${panel(s.right, 'right')}
      </div>
      ${s.note ? `<p class="sbs-note">${esc(s.note)}</p>` : ''}
    </section>`;
}

/* ---------- Carryover: an idea taught in full on an earlier page ----------
   The topic-to-competency ladder is written out once, on the Specialization page.
   Courses need the same idea, so this restates it briefly and links back rather
   than repeating the whole thing — the density the old workbooks suffered from. */

function carryoverHtml(s, tier) {
  // A cross-reference can carry the tier colour of where it points rather than
  // the page it sits on, which is the cue that it sends you somewhere else.
  return `
    <section class="block">
      ${sectionHeadHtml(s)}
      <div class="carry tier-${s.tier || tier}">
        <div class="carry-main">
          ${(s.body || []).map((b) => `<p class="carry-p">${esc(b)}</p>`).join('')}
          ${
            s.recall
              ? `<div class="carry-recall">
                   <p class="carry-recall-label">${esc(s.recall.label)}</p>
                   <p class="carry-recall-list">${s.recall.items.map(esc).join(' · ')}</p>
                 </div>`
              : ''
          }
          ${
            s.link
              ? `<a class="carry-link" href="${esc(s.link.href)}">
                   <span>${esc(s.link.label)}</span>${icon('arrow')}
                 </a>`
              : ''
          }
        </div>
      </div>
    </section>`;
}

/* ---------- Three things to get right ---------- */

function considerationsHtml(s, tier) {
  // `numbered: false` for a set of parallel principles, where 1-2-3 would imply
  // an order that isn't there.
  const numbered = s.numbered !== false;
  return `
    <section class="block">
      ${sectionHeadHtml(s)}
      <div class="consider-list">
        ${s.items
          .map(
            (it, i) => `
          <div class="consider tier-${tier}${numbered ? '' : ' plain'}">
            ${numbered ? `<span class="consider-n">${i + 1}</span>` : ''}
            <div>
              <p class="consider-heading">${esc(it.heading)}</p>
              <p class="consider-body">${esc(it.body)}</p>
            </div>
          </div>`
          )
          .join('')}
      </div>
    </section>`;
}

/* A section marked `collapsed: true` renders inside a <details> — available to the
   faculty member who wants the depth, invisible to the one who doesn't. */
function sectionHtml(s, tier) {
  const inner = sectionBody(s, tier);
  const body = s.collapsed
    ? `<details class="ref-block">
         <summary>
           <span class="ref-summary-text">${esc(s.title)}</span>
           <span class="ref-chevron">&#9662;</span>
         </summary>
         <div class="ref-body">${inner}</div>
       </details>`
    : inner;
  // A section with an id can be linked to from another page, e.g. #specialization/objectives
  return s.id ? `<div class="sec-anchor" id="sec-${esc(s.id)}">${body}</div>` : body;
}

function sectionBody(s, tier) {
  switch (s.type) {
    case 'templatePreview':
      return templatePreviewHtml(s, tier);

    case 'considerations':
      return considerationsHtml(s, tier);

    case 'ladder':
      return ladderHtml(s);

    case 'contrast':
      return contrastHtml(s);

    case 'carryover':
      return carryoverHtml(s, tier);

    case 'sidebyside':
      return sideBySideHtml(s, tier);

    case 'prose':
      return `
        <section class="block">
          <h2 class="section-title">${esc(s.title)}</h2>
          ${(s.body || []).map((b) => `<p class="block-p">${esc(b)}</p>`).join('')}
          ${
            s.bullets && s.bullets.length
              ? `<ul class="prose-list">${s.bullets.map((b) => `<li>${esc(b)}</li>`).join('')}</ul>`
              : ''
          }
          ${s.after ? `<p class="block-p block-after">${esc(s.after)}</p>` : ''}
          ${
            s.tips && s.tips.length
              ? `<p class="tips-label">Keep in mind</p>
                 <ul class="tips-list">${s.tips.map((t) => `<li>${esc(t)}</li>`).join('')}</ul>`
              : ''
          }
        </section>`;

    case 'checklist':
      return `
        <section class="block">
          <h2 class="section-title">${esc(s.title)}</h2>
          ${s.note ? `<p class="section-intro">${esc(s.note)}</p>` : ''}
          <ul class="prep-list">
            ${s.items.map((i) => `<li>${icon('check')}<span>${esc(i)}</span></li>`).join('')}
          </ul>
        </section>`;

    case 'cards':
      return `
        <section class="block">
          <h2 class="section-title">${esc(s.title)}</h2>
          ${s.note ? `<p class="section-intro">${esc(s.note)}</p>` : ''}
          <div class="contents-grid">
            ${s.items
              .map(
                (i) => `
              <div class="contents-item">
                <span class="contents-icon">${icon(i.icon)}</span>
                <span class="contents-label">${esc(i.label)}</span>
                <span class="contents-sub">${esc(i.sub)}</span>
              </div>`
              )
              .join('')}
          </div>
        </section>`;

    case 'callout':
      return `
        <div class="callout callout-${s.tier || tier}">
          <span class="callout-icon">${icon(s.icon || 'layers')}</span>
          <div>
            <p class="callout-title">${esc(s.title)}</p>
            <p class="callout-body">${esc(s.body)}</p>
          </div>
        </div>`;

    case 'sequence':
      return `
        <section class="block">
          ${sectionHeadHtml(s)}
          <ol class="example-list${s.tier ? ` tier-${s.tier}` : ''}">
            ${s.items
              .map(
                (it) => `
              <li class="example-item">
                <span class="example-n">${it.n}</span>
                <span class="example-body">
                  <span class="example-type">${esc(it.type)}</span>
                  <span class="example-what">${esc(it.what)}</span>
                </span>
                ${it.phase ? `<span class="example-phase">${esc(it.phase)}</span>` : ''}
              </li>`
              )
              .join('')}
          </ol>
          ${s.footnote ? `<p class="seq-foot">${esc(s.footnote)}</p>` : ''}
        </section>`;

    case 'compare':
      return `
        <section class="block">
          ${sectionHeadHtml(s)}
          <div class="phrasing-table">
            <div class="phrasing-row phrasing-header">
              <span></span>
              <span class="col-dont">${esc(s.weakLabel)}</span>
              <span class="col-do">${esc(s.strongLabel)}</span>
            </div>
            ${s.rows
              .map(
                (r) => `
              <div class="phrasing-row">
                <span class="phrasing-aspect">${esc(r.aspect)}</span>
                <span class="phrasing-dont">${esc(r.dont)}</span>
                <span class="phrasing-do">${esc(r.do)}</span>
              </div>`
              )
              .join('')}
          </div>
        </section>`;

    case 'example':
      return `
        <section class="block block-placeholder">
          <h2 class="section-title">${esc(s.title)}</h2>
          <p class="placeholder-note">
            ${icon('star')}
            <span>A worked example goes here — a real Specialization, course, or module showing what a
            finished plan looks like. Awaiting the gold-standard example content.</span>
          </p>
        </section>`;

    case 'template':
      return `
        <section class="block block-placeholder">
          <h2 class="section-title">${esc(s.title)}</h2>
          <p class="placeholder-note">
            ${icon('star')}
            <span>Guidance on filling in the matching part of the planning template goes here.
            Awaiting the redrafted template.</span>
          </p>
        </section>`;

    default:
      return '';
  }
}

/* Learning Assets page: in-page menu plus one section per asset type */
function assetsPageHtml(p) {
  return `
    <nav class="asset-jump" aria-label="Asset types">
      ${p.items
        .map((a) => `<a class="asset-jump-link" href="#assets" data-jump="${a.id}">${icon(a.icon)}${esc(a.title)}</a>`)
        .join('')}
    </nav>
    <p class="tier-note">${icon('star')}<span>${esc(p.alsoAvailable)}</span></p>
    ${p.items
      .map(
        (a) => `
      <section class="block asset-block" id="asset-${a.id}">
        <div class="asset-block-head">
          <span class="asset-block-icon">${icon(a.icon)}</span>
          <h2 class="section-title">${esc(a.title)}</h2>
        </div>
        <p class="block-p">${esc(a.what)}</p>
        <div class="asset-cols">
          ${assetColHtml('Pedagogy', 'star', a.pedagogy, 'ped')}
          ${assetColHtml('Accessibility', 'access', a.accessibility, 'a11y')}
          ${assetColHtml('Copyright', 'copyright', a.copyright, 'copy')}
        </div>
      </section>`
      )
      .join('')}`;
}

function assetColHtml(label, iconName, items, kind) {
  return `
    <div class="asset-col asset-col--${kind}">
      <p class="asset-col-label">${icon(iconName)}${esc(label)}</p>
      <ul class="asset-col-list">${items.map((i) => `<li>${esc(i)}</li>`).join('')}</ul>
    </div>`;
}

/* Previous / next through the flow */
function nextPrevHtml(id) {
  const ids = C.nav.map((n) => n.id);
  const i = ids.indexOf(id);
  const prev = i > 0 ? C.nav[i - 1] : null;
  const next = i < ids.length - 1 ? C.nav[i + 1] : null;
  return `
    <nav class="page-nav" aria-label="Move through the structure">
      ${
        prev
          ? `<a class="page-nav-link prev" href="#${prev.id}"><span class="page-nav-dir">&larr; Zoom out</span><span class="page-nav-label">${esc(prev.label)}</span></a>`
          : `<a class="page-nav-link prev" href="#/"><span class="page-nav-dir">&larr; Back</span><span class="page-nav-label">Overview</span></a>`
      }
      ${
        next
          ? `<a class="page-nav-link next" href="#${next.id}"><span class="page-nav-dir">Zoom in &rarr;</span><span class="page-nav-label">${esc(next.label)}</span></a>`
          : ''
      }
    </nav>`;
}

/* ---------- Event wiring ---------- */

function wireHomeNavigation() {
  document.querySelectorAll('[data-goto]').forEach((el) => {
    el.addEventListener('click', () => {
      location.hash = `#${el.dataset.goto}`;
    });
  });
}

function wireAssetJump() {
  document.querySelectorAll('[data-jump]').forEach((el) => {
    el.addEventListener('click', (e) => {
      e.preventDefault();
      const id = el.dataset.jump;
      const target = document.getElementById(`asset-${id}`);
      if (!target) return;
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      // Update the URL without re-rendering, so the link stays shareable
      history.replaceState(null, '', `#assets/${id}`);
    });
  });
}

init();
