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
};

function icon(name) {
  return `<svg class="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"
    stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ICONS[name] || ''}</svg>`;
}

/* ---------- State ---------- */

let C = null;
const DETAILS = {};
let lastFocused = null;

async function init() {
  const res = await fetch('content.json');
  C = await res.json();
  wireTemplateLink();
  document.getElementById('page').innerHTML = pageHtml();
  wireDetailTriggers();
  wireDrawer();
}

function wireTemplateLink() {
  const link = document.getElementById('template-link');
  if (C.templateUrl) {
    link.href = C.templateUrl;
  } else {
    link.removeAttribute('href');
    link.setAttribute('aria-disabled', 'true');
    link.title = 'Add your template URL to content.json (templateUrl) to activate this link.';
    link.addEventListener('click', (e) => e.preventDefault());
  }
}

function esc(str) {
  const d = document.createElement('div');
  d.textContent = str == null ? '' : str;
  return d.innerHTML;
}

/* Register a detail payload and return the attributes that open it */
let detailSeq = 0;
function trigger(detail) {
  if (!detail) return '';
  const id = `d${++detailSeq}`;
  DETAILS[id] = detail;
  return `data-detail="${id}"`;
}

/* ---------- Page ---------- */

function pageHtml() {
  return `
    ${heroHtml()}
    ${legendHtml()}
    <div class="infographic">
      ${specHtml()}
      ${fanHtml(3, '', '16px')}
      ${coursesHtml()}
      ${fanHtml(3, 'dashed', '16px')}
      ${modulesHtml()}
      ${stemHtml('dashed')}
      ${lessonsHtml()}
      ${stemHtml('dashed')}
      ${assetsHtml()}
    </div>
    ${comparisonHtml()}
    ${completionHtml()}
    ${handoffHtml()}
  `;
}

function heroHtml() {
  const h = C.hero;
  return `
    <section class="hero">
      <h1 class="hero-title">${esc(h.title)}</h1>
      <p class="hero-sub">${esc(h.subtitle)}</p>
      <p class="hero-hint">${icon('star')}${esc(h.hint)}</p>
    </section>`;
}

function legendHtml() {
  return `
    <div class="legend">
      ${C.legend
        .map((l) => `<span class="legend-item tier-${l.tier}"><span class="legend-dot"></span>${esc(l.label)}</span>`)
        .join('')}
    </div>`;
}

/* Connector: single vertical stem */
function stemHtml(mod = '') {
  return `<div class="stem ${mod}"></div>`;
}

/* Connector: stem, horizontal bar, and one drop per column.
   `gap` must match the gap of the card row below it so the drops land on card centres. */
function fanHtml(cols, mod = '', gap = '16px') {
  return `
    <div class="fan ${mod}" style="--cols:${cols};--gap:${gap}">
      <div class="fan-stem"></div>
      <div class="fan-bar"></div>
      <div class="fan-drops">${'<span></span>'.repeat(cols)}</div>
    </div>`;
}

function railHtml(tier, data) {
  return `
    <div class="rail">
      <p class="rail-label tier-${tier}">${esc(data.label)}</p>
      <p class="rail-sublabel">${esc(data.sublabel)}</p>
      <p class="rail-text">${esc(data.rail)}</p>
    </div>`;
}

function specHtml() {
  const s = C.specialization;
  return `
    <section class="tier tier-spec">
      ${railHtml('spec', s)}
      <div class="tier-body">
        <button type="button" class="big-card" ${trigger(s.detail)}>
          <span class="big-card-icon">${icon('certificate')}</span>
          <span class="big-card-main">
            <span class="big-card-title">Specialization</span>
            <span class="big-card-def">${esc(s.definition)}</span>
            <span class="outcome-box">${icon('star')}<span>${esc(s.outcome)}</span></span>
          </span>
          <span class="big-card-includes">
            <span class="includes-label">Includes</span>
            ${s.includes
              .map((i) => `<span class="include-row">${icon(i.icon)}<span>${esc(i.label)}</span></span>`)
              .join('')}
          </span>
          <span class="more-cue">Learn more</span>
        </button>
      </div>
    </section>`;
}

function specRowsHtml(specs) {
  return specs
    .map((s) => `<span class="spec-row">${icon(s.icon)}<span>${esc(s.label)}</span></span>`)
    .join('');
}

function coursesHtml() {
  const c = C.courses;
  return `
    <section class="tier tier-course">
      ${railHtml('course', c)}
      <div class="tier-body">
        <div class="course-row">
          ${c.cards
            .map(
              (card) => `
            <button type="button" class="card course-card" ${trigger(c.detail)}>
              <span class="card-top">
                <span class="num-badge">${card.n}</span>
                <span class="card-titles">
                  <span class="card-title">${esc(card.title)}</span>
                  <span class="card-focus">${esc(card.focus)}</span>
                </span>
              </span>
              <span class="spec-list">${specRowsHtml(c.cardSpecs)}</span>
              <span class="reuse-badge">${icon('layers')}${esc(c.reuseBadge)}</span>
              <span class="more-cue">Learn more</span>
            </button>`
            )
            .join('')}
        </div>
        <span class="pill tier-course">${icon(c.pill.icon)}${esc(c.pill.label)}</span>
        <div class="callout callout-course">
          <span class="callout-icon">${icon('layers')}</span>
          <div>
            <p class="callout-title">${esc(c.callout.title)}</p>
            <p class="callout-body">${esc(c.callout.body)}</p>
          </div>
        </div>
      </div>
    </section>`;
}

function modulesHtml() {
  const m = C.modules;
  return `
    <section class="tier tier-module">
      ${railHtml('module', m)}
      <div class="tier-body">
        <div class="module-row">
          ${m.cards
            .map(
              (card) => `
            <button type="button" class="card module-card" ${trigger(m.detail)}>
              <span class="card-top">
                <span class="icon-badge">${icon('list')}</span>
                <span class="card-title">${esc(card.title)} ${card.n}</span>
              </span>
              <span class="card-role">${esc(card.role)}</span>
              <span class="spec-list">${specRowsHtml(m.cardSpecs)}</span>
              <span class="more-cue">Learn more</span>
            </button>`
            )
            .join('')}
        </div>
        <span class="pill tier-module">${icon(m.pill.icon)}${esc(m.pill.label)}</span>
        <p class="tier-note">${icon('star')}<span>${esc(m.note)}</span></p>
      </div>
    </section>`;
}

function lessonsHtml() {
  const l = C.lessons;
  return `
    <section class="tier tier-lesson">
      ${railHtml('lesson', l)}
      <div class="tier-body">
        <button type="button" class="lesson-card" ${trigger(l.detail)}>
          <span class="lesson-card-top">
            <span class="icon-badge">${icon('book')}</span>
            <span class="card-title">Lessons</span>
            <span class="optional-tag">Optional</span>
          </span>
          <span class="card-role">${esc(l.definition)}</span>
          <span class="lesson-count">${icon('list')}${esc(l.count)}</span>
          <span class="more-cue">Learn more</span>
        </button>
      </div>
    </section>`;
}

function assetsHtml() {
  const a = C.assets;
  return `
    <section class="tier tier-asset">
      ${railHtml('asset', a)}
      <div class="tier-body">
        <div class="asset-band">
          ${a.cards
            .map(
              (card) => `
            <button type="button" class="asset-tile" ${trigger(card.detail)}>
              <span class="asset-tile-icon">${icon(card.icon)}</span>
              <span class="asset-tile-title">${esc(card.title)}</span>
              <span class="asset-tile-short">${esc(card.short)}</span>
            </button>`
            )
            .join('')}
        </div>
        <p class="tier-note">${icon('star')}<span>${esc(a.alsoAvailable)}</span></p>
      </div>
    </section>`;
}

function comparisonHtml() {
  const c = C.comparison;
  return `
    <section class="compare">
      <div class="compare-head">
        <span class="compare-icon">${icon('scale')}</span>
        <div>
          <h2 class="section-title">${esc(c.title)}</h2>
          <p class="section-intro">${esc(c.intro)}</p>
        </div>
      </div>
      <div class="compare-table">
        <div class="compare-row compare-header">
          <span></span>
          <span>For-credit course</span>
          <span class="col-coursera">Coursera course</span>
        </div>
        ${c.rows
          .map(
            (r) => `
          <div class="compare-row">
            <span class="compare-aspect">${esc(r.aspect)}</span>
            <span class="compare-credit">${esc(r.credit)}</span>
            <span class="compare-coursera">${esc(r.coursera)}</span>
          </div>`
          )
          .join('')}
      </div>
    </section>`;
}

function completionHtml() {
  const c = C.completion;
  return `
    <section class="completion">
      <span class="completion-icon">${icon('trophy')}</span>
      <div>
        <h2 class="completion-title">${esc(c.title)}</h2>
        <p class="completion-body">${esc(c.body)}</p>
      </div>
    </section>`;
}

function handoffHtml() {
  const h = C.handoff;
  const href = C.templateUrl ? `href="${C.templateUrl}" target="_blank" rel="noopener"` : 'href="#" aria-disabled="true"';
  return `
    <section class="handoff">
      <h2 class="handoff-title">${esc(h.title)}</h2>
      <p class="handoff-body">${esc(h.body)}</p>
      <a class="handoff-cta" ${href}>${esc(h.cta)} &nearr;</a>
    </section>`;
}

/* ---------- Detail drawer ---------- */

function wireDetailTriggers() {
  document.querySelectorAll('[data-detail]').forEach((el) => {
    el.addEventListener('click', () => openDrawer(el.dataset.detail, el));
  });
}

function openDrawer(id, sourceEl) {
  const d = DETAILS[id];
  if (!d) return;
  lastFocused = sourceEl || null;

  document.getElementById('drawer-content').innerHTML = `
    <h2 class="drawer-title" id="drawer-title">${esc(d.title)}</h2>
    ${(d.body || []).map((p) => `<p class="drawer-p">${esc(p)}</p>`).join('')}
    ${
      d.tips && d.tips.length
        ? `<p class="drawer-tips-label">Keep in mind</p>
           <ul class="drawer-tips">${d.tips.map((t) => `<li>${esc(t)}</li>`).join('')}</ul>`
        : ''
    }`;

  document.getElementById('drawer').hidden = false;
  document.getElementById('drawer-backdrop').hidden = false;
  document.body.classList.add('drawer-open');
  document.getElementById('drawer-close').focus();
}

function closeDrawer() {
  document.getElementById('drawer').hidden = true;
  document.getElementById('drawer-backdrop').hidden = true;
  document.body.classList.remove('drawer-open');
  if (lastFocused) lastFocused.focus();
}

function wireDrawer() {
  document.getElementById('drawer-close').addEventListener('click', closeDrawer);
  document.getElementById('drawer-backdrop').addEventListener('click', closeDrawer);
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !document.getElementById('drawer').hidden) closeDrawer();
  });
}

init();
