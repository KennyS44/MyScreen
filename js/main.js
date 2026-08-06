/* Project data and all showcase logic. To add a project, append an object
   to the PROJECTS array below — everything else assembles itself. */

const GITHUB = 'https://github.com/KennyS44';

const PROJECTS = [
  {
    id: 'journeyman',
    title: 'Journeyman',
    tagline: 'A codex for tabletop roleplaying game masters',
    status: 'live',
    statusText: 'Live',
    year: '2026',
    kind: 'Tool',
    tags: ['HTML/CSS/JS', 'IndexedDB', 'localStorage'],
    summary:
      'A store for a tabletop game master\'s material: canvas spaces, object ' +
      'cards, links between them, a text editor, dice and music. It all runs ' +
      'in the browser, with no server.',
    about:
      'A game master has to keep towns, dungeons and the ties between ' +
      'characters in his head. Journeyman moves all of that onto an open ' +
      'canvas: objects are dragged with a mouse or a finger, threads are ' +
      'pulled between them, and every object has its own directory with text, ' +
      'images, music and notes. So that all of this is visible right away, ' +
      'the app lays out a demo scene on first launch.',
    features: [
      'Canvas spaces with zoom, panning and a "Show all" mode.',
      'A "Link" tool: a thread between two objects in two clicks.',
      'A text editor with tables and images that are resized by dragging a corner.',
      'Dice from d4 to d100 with a roll animation, and a calculator with a history of results.',
      'Session notes in a side tab, kept separately for each space.',
      'Backup: the whole codex is saved into a single file and loaded back from it.',
    ],
    stack: 'Plain HTML, CSS and JavaScript. IndexedDB for records and files, localStorage for the camera position.',
    repo: GITHUB + '/Journeyman',
    demo: 'https://kennys44.github.io/Journeyman/',
    shots: [
      { src: 'img/journeyman-canvas.jpg', w: 1920, h: 1200, alt: 'A space is an endless canvas that fits any number of objects linked by threads' },
      { src: 'img/journeyman-object.jpg', w: 1920, h: 810, alt: 'Every object has its own directory: text with tables and images, and panels with files, music and notes next to it' },
    ],
  },
  {
    id: 'journeyman-desktop',
    title: 'Journeyman Desktop',
    tagline: 'The same master\'s codex, as a desktop application',
    status: 'live',
    statusText: 'Live',
    year: '2026',
    kind: 'Tool',
    tags: ['Electron', 'Node.js', 'electron-builder'],
    summary:
      'The desktop build of Journeyman: a shortcut and its own window instead ' +
      'of a browser. Data is stored as a folder on disk, and no internet ' +
      'connection is needed at all.',
    about:
      'Everything the web version can do has been moved into a regular ' +
      'application. The difference is storage: records and files sit on disk ' +
      'as a single folder that can be copied onto a flash drive. That folder ' +
      'is the backup.',
    features: [
      'Data is kept in ordinary files: db.json and an assets folder beside it.',
      'Fully offline: fonts are bundled, nothing is fetched from the network.',
      'The window remembers its size and position, and a second instance will not start.',
      'A menu with keyboard shortcuts: text editing, zoom, full screen, saving and loading the codex.',
      'A ready Windows build — an installer or a portable version that needs no installation.',
    ],
    stack: 'Electron and Node.js. Ordinary files on disk instead of a browser database; Windows and Linux builds are produced automatically.',
    repo: GITHUB + '/Journeyman-Desktop',
    shots: [
      { src: 'img/journeyman-desktop.png', w: 1280, h: 793, alt: 'A standalone application window with the same interface as in the browser: no browser and no internet needed' },
    ],
  },
  {
    id: 'brightside',
    title: 'Brightside',
    tagline: 'A service landing page with a price calculator',
    status: 'live',
    statusText: 'Live',
    year: '2026',
    kind: 'Site',
    tags: ['HTML/CSS/JS', 'Schema.org'],
    summary:
      'A one-page site for a cleaning service: a price calculator, a request ' +
      'form with field validation, and sections for services, reviews and ' +
      'questions. A light business theme.',
    about:
      'A complete, typical commercial landing page — from the first screen to ' +
      'the request form. The calculator is the centrepiece: the visitor picks ' +
      'the type of cleaning, the area and any extras, and immediately sees the ' +
      'price line by line, without a phone call or an on-site estimate. The ' +
      'result is attached to the request. The company is fictional — the ' +
      'project was built as a work sample.',
    features: [
      'A calculator with five parameters: the total is recomputed on every change.',
      'The area field and the slider drive one value, and out-of-range input is clamped.',
      'Request validation: name, phone format, no dates in the past — with hints next to the fields.',
      'The request is assembled into ready-to-send text together with the calculation.',
      'FAQ structured data and a social preview.',
    ],
    stack: 'Plain HTML, CSS and JavaScript. The font is local, and there is no build step and no server.',
    repo: GITHUB + '/Brightside',
    demo: 'https://kennys44.github.io/Brightside/',
    shots: [
      { src: 'img/brightside-hero.jpg', w: 1920, h: 1200, alt: 'The first screen of the landing page: headline, action buttons and the key terms of service' },
      { src: 'img/brightside-calc.jpg', w: 1920, h: 1200, alt: 'The calculator: parameters on the left, a line-by-line breakdown and the total in a sticky panel on the right' },
    ],
  },
  {
    id: 'roastery',
    title: 'Roastery',
    tagline: 'A product catalogue with filtering and a cart',
    status: 'live',
    statusText: 'Live',
    year: '2026',
    kind: 'Site',
    tags: ['HTML/CSS/JS', 'localStorage', 'History API'],
    summary:
      'A coffee shop storefront: filtering by roast, country, brewing method ' +
      'and price, plus search, sorting and a cart. The selection is kept in ' +
      'the page URL.',
    about:
      'As close to an online store as you can get without a server. Filters ' +
      'inside a group combine with OR, and groups combine with AND. The ' +
      'selection is recomputed on the fly: options that no longer match any ' +
      'product are removed from the list, so an obviously empty set of ' +
      'conditions cannot be chosen. The filter state lives in the URL — a link ' +
      'to the results can be shared, and Back undoes the last filter. The cart ' +
      'is stored in the browser and survives a reload. The shop is fictional.',
    features: [
      'Filtering by four conditions at once: the counts next to the options are recomputed, and options with no matching lots disappear.',
      'Search by name, country and tasting notes; four sort orders.',
      'A cart with a running total and stock limits: you cannot add more than is in stock.',
      'The filter state sits in the page URL, so a link can be shared.',
      'Product covers are drawn in code: SVG instead of photographs.',
    ],
    stack: 'Plain HTML, CSS and JavaScript. The cart lives in localStorage, the filters in the URL parameters.',
    repo: GITHUB + '/Roastery',
    demo: 'https://kennys44.github.io/Roastery/',
    shots: [
      { src: 'img/roastery-grid.jpg', w: 1920, h: 1200, alt: 'The catalogue with a condition applied: the filter list on the left has narrowed to the options that still have products' },
      { src: 'img/roastery-cart.jpg', w: 1920, h: 1200, alt: 'The cart slides in over the catalogue: order contents, quantities and the total' },
    ],
  },
];

/* ---------- Cards ---------- */

const cardsEl = document.getElementById('cards');
const filtersEl = document.querySelector('.filters');
const modal = document.getElementById('modal');
const modalPanel = modal.querySelector('.modal-panel');
const modalBody = modal.querySelector('.modal-body');

let activeFilter = 'All';
let lastFocused = null;

function cardMarkup(p, index) {
  const num = String(index + 1).padStart(2, '0');
  const shot = p.shots && p.shots[0];
  const cover = shot
    ? `<span class="card-shot"><img src="${shot.src}" width="${shot.w}" height="${shot.h}"
         alt="${shot.alt}" loading="lazy" decoding="async"></span>`
    : '<span class="card-shot card-shot-empty" aria-hidden="true">//</span>';
  return `
    <li>
      <button class="card" type="button" data-id="${p.id}">
        ${cover}
        <span class="card-top">
          <span class="card-id">${num} · ${p.kind}</span>
          <span class="status ${p.status}">${p.statusText}</span>
        </span>
        <h3>${p.title}</h3>
        <p>${p.summary}</p>
        <span class="tags">${p.tags.map((t) => `<span class="tag">${t}</span>`).join('')}</span>
        <span class="card-more">Details →</span>
      </button>
    </li>`;
}

function renderCards() {
  const list = activeFilter === 'All'
    ? PROJECTS
    : PROJECTS.filter((p) => p.kind === activeFilter);
  cardsEl.innerHTML = list.map(cardMarkup).join('');
}

function renderFilters() {
  const kinds = ['All', ...new Set(PROJECTS.map((p) => p.kind))];
  filtersEl.innerHTML = kinds
    .map((k) => `<button class="chip" type="button" aria-pressed="${k === activeFilter}">${k}</button>`)
    .join('');
}

/* ---------- Project panel ---------- */

function openProject(id) {
  const p = PROJECTS.find((item) => item.id === id);
  if (!p) return;

  const features = p.features.length
    ? `<h4>What is inside</h4><ul>${p.features.map((f) => `<li>${f}</li>`).join('')}</ul>`
    : '';

  const shots = p.shots
    ? `<div class="modal-shots">${p.shots.map((s) => `
        <figure>
          <button class="shot-zoom" type="button" aria-label="Take a closer look: ${s.alt}">
            <img src="${s.src}" width="${s.w}" height="${s.h}" alt="${s.alt}"
                 loading="lazy" decoding="async">
          </button>
          <figcaption>${s.alt}</figcaption>
        </figure>`).join('')}</div>`
    : '';

  const demo = p.demo
    ? `<a class="btn btn-solid" href="${p.demo}" target="_blank" rel="noopener">Open demo</a>`
    : '';

  modalBody.innerHTML = `
    <p class="eyebrow">${p.kind} · ${p.year}</p>
    <h2 id="modal-title">${p.title}</h2>
    <p class="modal-sub">${p.tagline}</p>
    <h4>About the project</h4>
    <p>${p.about}</p>
    ${shots}
    ${features}
    <h4>Stack</h4>
    <p>${p.stack}</p>
    <div class="modal-actions">
      ${demo}
      <a class="btn ${p.demo ? 'btn-ghost' : 'btn-solid'}" href="${p.repo}" target="_blank" rel="noopener">View on GitHub</a>
      <button class="btn btn-ghost" type="button" data-close>Close</button>
    </div>`;

  lastFocused = document.activeElement;
  modal.hidden = false;
  document.body.style.overflow = 'hidden';
  modalPanel.scrollTop = 0;              // otherwise the next project opens where the previous one was left
  modalPanel.focus({ preventScroll: true });
}

function closeProject() {
  modal.hidden = true;
  document.body.style.overflow = '';
  if (lastFocused) lastFocused.focus();
}

/* ---------- Image close-up ---------- */

const lightbox = document.getElementById('lightbox');
const lightboxPanel = lightbox.querySelector('.lightbox-panel');
const lightboxStage = lightbox.querySelector('.lightbox-stage');
const lightboxImg = lightbox.querySelector('img');
const lightboxCaption = lightbox.querySelector('.lightbox-caption');

let lastZoomed = null;

function openShot(img) {
  lightboxImg.src = img.currentSrc || img.src;
  lightboxImg.alt = img.alt;
  lightboxCaption.textContent = img.alt;
  lastZoomed = document.activeElement;
  lightbox.hidden = false;
  lightboxStage.scrollLeft = 0;          // a new screenshot is shown from its left edge
  lightboxPanel.focus({ preventScroll: true });
}

function closeShot() {
  lightbox.hidden = true;
  lightboxImg.removeAttribute('src');
  if (lastZoomed) lastZoomed.focus();
}

/* ---------- Events ---------- */

cardsEl.addEventListener('click', (e) => {
  const card = e.target.closest('.card');
  if (card) openProject(card.dataset.id);
});

filtersEl.addEventListener('click', (e) => {
  const chip = e.target.closest('.chip');
  if (!chip) return;
  activeFilter = chip.textContent;
  renderFilters();
  renderCards();
});

modal.addEventListener('click', (e) => {
  const zoom = e.target.closest('.shot-zoom');
  if (zoom) return openShot(zoom.querySelector('img'));
  if (e.target.closest('[data-close]')) closeProject();
});

lightbox.addEventListener('click', (e) => {
  if (e.target.closest('[data-lb-close]') || e.target === lightboxImg) closeShot();
});

document.addEventListener('keydown', (e) => {
  if (e.key !== 'Escape') return;
  if (!lightbox.hidden) return closeShot();   // the top layer closes first
  if (!modal.hidden) closeProject();
});

/* ---------- Start ---------- */

renderFilters();
renderCards();
document.querySelector('[data-stat="count"]').textContent =
  PROJECTS.filter((p) => p.status !== 'idea').length;
document.querySelector('[data-year]').textContent = new Date().getFullYear();
