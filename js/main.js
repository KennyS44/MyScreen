/* Showcase logic. All copy lives in js/content.js — this file only assembles
   and switches it. */

const LANGS = ['en', 'ru'];
const LANG_KEY = 'myscreen-lang';
const DEFAULT_LANG = 'en';

/* Order matters: an explicit ?lang= in the address wins over a remembered
   choice, so a shared link always opens in the language it promises. */
function initialLang() {
  const fromUrl = new URLSearchParams(location.search).get('lang');
  if (LANGS.includes(fromUrl)) return fromUrl;

  let saved = null;
  try { saved = localStorage.getItem(LANG_KEY); } catch { /* private mode */ }
  if (LANGS.includes(saved)) return saved;

  return navigator.language && navigator.language.toLowerCase().startsWith('ru')
    ? 'ru'
    : DEFAULT_LANG;
}

let lang = initialLang();

const t = (key) => UI[lang][key];
const text = (project) => project[lang];

/* ---------- Elements ---------- */

const cardsEl = document.getElementById('cards');
const filtersEl = document.querySelector('.filters');
const langEl = document.querySelector('.lang');
const modal = document.getElementById('modal');
const modalPanel = modal.querySelector('.modal-panel');
const modalBody = modal.querySelector('.modal-body');

let activeFilter = 'all';
let openId = null;
let lastFocused = null;

/* ---------- Cards ---------- */

function cardMarkup(p, index) {
  const num = String(index + 1).padStart(2, '0');
  const shot = p.shots && p.shots[0];
  const cover = shot
    ? `<span class="card-shot"><img src="${shot.src}" width="${shot.w}" height="${shot.h}"
         alt="${shot.alt[lang]}" loading="lazy" decoding="async"></span>`
    : '<span class="card-shot card-shot-empty" aria-hidden="true">//</span>';
  return `
    <li>
      <button class="card" type="button" data-id="${p.id}">
        ${cover}
        <span class="card-top">
          <span class="card-id">${num} · ${t('kind.' + p.kind)}</span>
          <span class="status ${p.status}">${t('status.' + p.status)}</span>
        </span>
        <h3>${p.title}</h3>
        <p>${text(p).summary}</p>
        <span class="tags">${p.tags.map((tag) => `<span class="tag">${tag}</span>`).join('')}</span>
        <span class="card-more">${t('card.details')}</span>
      </button>
    </li>`;
}

function renderCards() {
  const list = activeFilter === 'all'
    ? PROJECTS
    : PROJECTS.filter((p) => p.kind === activeFilter);
  cardsEl.innerHTML = list.map(cardMarkup).join('');
}

/* Filters are keyed by `kind`, not by their label — otherwise switching the
   language would break the current selection. */
function renderFilters() {
  const kinds = ['all', ...new Set(PROJECTS.map((p) => p.kind))];
  filtersEl.innerHTML = kinds
    .map((k) => {
      const label = k === 'all' ? t('filter.all') : t('kind.' + k);
      return `<button class="chip" type="button" data-kind="${k}"
                aria-pressed="${k === activeFilter}">${label}</button>`;
    })
    .join('');
}

/* ---------- Project panel ---------- */

function renderModal(p) {
  const copy = text(p);

  const features = copy.features.length
    ? `<h4>${t('modal.inside')}</h4><ul>${copy.features.map((f) => `<li>${f}</li>`).join('')}</ul>`
    : '';

  const shots = p.shots
    ? `<div class="modal-shots">${p.shots.map((s) => `
        <figure>
          <button class="shot-zoom" type="button" aria-label="${t('modal.zoom')}${s.alt[lang]}">
            <img src="${s.src}" width="${s.w}" height="${s.h}" alt="${s.alt[lang]}"
                 loading="lazy" decoding="async">
          </button>
          <figcaption>${s.alt[lang]}</figcaption>
        </figure>`).join('')}</div>`
    : '';

  const demo = p.demo
    ? `<a class="btn btn-solid" href="${p.demo}" target="_blank" rel="noopener">${t('modal.demo')}</a>`
    : '';

  modalBody.innerHTML = `
    <p class="eyebrow">${t('kind.' + p.kind)} · ${p.year}</p>
    <h2 id="modal-title">${p.title}</h2>
    <p class="modal-sub">${copy.tagline}</p>
    <h4>${t('modal.about')}</h4>
    <p>${copy.about}</p>
    ${shots}
    ${features}
    <h4>${t('modal.stack')}</h4>
    <p>${copy.stack}</p>
    <div class="modal-actions">
      ${demo}
      <a class="btn ${p.demo ? 'btn-ghost' : 'btn-solid'}" href="${p.repo}" target="_blank" rel="noopener">${t('modal.repo')}</a>
      <button class="btn btn-ghost" type="button" data-close>${t('modal.close')}</button>
    </div>`;
}

function openProject(id) {
  const p = PROJECTS.find((item) => item.id === id);
  if (!p) return;

  renderModal(p);
  openId = id;
  lastFocused = document.activeElement;
  modal.hidden = false;
  document.body.style.overflow = 'hidden';
  modalPanel.scrollTop = 0;              // otherwise the next project opens where the previous one was left
  modalPanel.focus({ preventScroll: true });
}

function closeProject() {
  modal.hidden = true;
  openId = null;
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

/* ---------- Language ---------- */

function setMeta(selector, attr, value) {
  const el = document.querySelector(selector);
  if (el) el.setAttribute(attr, value);
}

function applyLang() {
  document.documentElement.lang = t('html.lang');
  document.title = t('meta.title');

  setMeta('meta[name="description"]', 'content', t('meta.description'));
  setMeta('meta[property="og:title"]', 'content', t('meta.title'));
  setMeta('meta[property="og:description"]', 'content', t('meta.ogDescription'));
  setMeta('meta[property="og:site_name"]', 'content', t('meta.ogSiteName'));
  setMeta('meta[property="og:locale"]', 'content', t('meta.ogLocale'));

  document.querySelectorAll('[data-i18n]').forEach((el) => {
    el.textContent = t(el.dataset.i18n);
  });
  document.querySelectorAll('[data-i18n-html]').forEach((el) => {
    el.innerHTML = t(el.dataset.i18nHtml);
  });
  document.querySelectorAll('[data-i18n-label]').forEach((el) => {
    el.setAttribute('aria-label', t(el.dataset.i18nLabel));
  });

  langEl.querySelectorAll('button').forEach((btn) => {
    btn.setAttribute('aria-pressed', String(btn.dataset.lang === lang));
  });

  renderFilters();
  renderCards();
  if (openId) renderModal(PROJECTS.find((p) => p.id === openId));
}

function setLang(next) {
  if (!LANGS.includes(next) || next === lang) return;
  lang = next;
  try { localStorage.setItem(LANG_KEY, lang); } catch { /* private mode */ }

  // Keep the address honest, so the page can be shared in the language shown.
  const url = new URL(location.href);
  url.searchParams.set('lang', lang);
  history.replaceState(null, '', url);

  if (!lightbox.hidden) closeShot();     // its caption belongs to the old language
  applyLang();
}

/* ---------- Events ---------- */

cardsEl.addEventListener('click', (e) => {
  const card = e.target.closest('.card');
  if (card) openProject(card.dataset.id);
});

filtersEl.addEventListener('click', (e) => {
  const chip = e.target.closest('.chip');
  if (!chip) return;
  activeFilter = chip.dataset.kind;
  renderFilters();
  renderCards();
});

langEl.addEventListener('click', (e) => {
  const btn = e.target.closest('button[data-lang]');
  if (btn) setLang(btn.dataset.lang);
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

applyLang();
document.querySelector('[data-stat="count"]').textContent =
  PROJECTS.filter((p) => p.status !== 'idea').length;
document.querySelector('[data-year]').textContent = new Date().getFullYear();
