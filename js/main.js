/* Данные проектов и вся логика витрины. Чтобы добавить проект —
   допишите объект в массив PROJECTS ниже, остальное соберётся само. */

const GITHUB = 'https://github.com/KennyS44';

const PROJECTS = [
  {
    id: 'journeyman',
    title: 'Journeyman',
    tagline: 'Кодекс мастера настольных ролевых игр',
    status: 'live',
    statusText: 'Работает',
    year: '2026',
    kind: 'Инструмент',
    tags: ['HTML/CSS/JS', 'IndexedDB', 'Бесконечный холст'],
    summary:
      'Хранилище материалов для мастера настольных ролевых игр: ' +
      'пространства-холсты, карточки объектов, связи между ними, текстовый ' +
      'редактор, кубики и музыка. Всё работает в браузере, без сервера.',
    about:
      'Мастеру игры приходится держать в голове города, подземелья и связи ' +
      'между персонажами. Journeyman переносит это на свободный холст: ' +
      'объекты перемещаются мышью, между ними протягиваются нити, а у ' +
      'каждого объекта есть собственная директория с текстом, изображениями, ' +
      'музыкой и пометками.',
    features: [
      'Пространства-холсты с масштабом, панорамой и режимом «Показать всё».',
      'Инструмент «Связь»: нить между двумя объектами в два нажатия.',
      'Редактор текста с таблицами и изображениями, размер которых меняется перетаскиванием за угол.',
      'Кубики от d4 до d100 с анимацией броска и калькулятор с историей.',
      'Заметки к плану игры в боковой вкладке — отдельные для каждого пространства.',
    ],
    stack: 'Чистые HTML, CSS и JavaScript. IndexedDB — для записей и файлов, localStorage — для положения камеры.',
    repo: GITHUB + '/Journeyman',
    demo: 'https://kennys44.github.io/Journeyman/',
    shots: [
      { src: 'img/journeyman-canvas.jpg', w: 1920, h: 1200, alt: 'Пространство — бесконечный холст, на который помещается сколько угодно объектов, связанных нитями' },
      { src: 'img/journeyman-object.jpg', w: 1920, h: 810, alt: 'Внутренняя директория объекта: текстовый редактор и боковые панели' },
    ],
  },
  {
    id: 'journeyman-desktop',
    title: 'Journeyman Desktop',
    tagline: 'Тот же кодекс мастера — в виде настольного приложения',
    status: 'live',
    statusText: 'Работает',
    year: '2026',
    kind: 'Инструмент',
    tags: ['Electron', 'Node.js', 'Офлайн'],
    summary:
      'Настольная версия Journeyman: ярлык и отдельное окно вместо браузера. ' +
      'Данные хранятся папкой на диске, а интернет не нужен вовсе.',
    about:
      'Всё, что умеет веб-версия, перенесено в обычное приложение. Отличие — ' +
      'в хранении: записи и файлы лежат на диске одной папкой, которую можно ' +
      'скопировать на флешку. Это и есть резервная копия.',
    features: [
      'Данные хранятся обычными файлами: db.json и папка assets рядом с ним.',
      'Полная работа офлайн: шрифты встроены, из сети не загружается ничего.',
      'Окно запоминает размер и положение, а вторая копия приложения не запустится.',
      'Меню с горячими клавишами: правка текста, масштаб, полноэкранный режим.',
      'Готовые сборки для Windows и Linux формируются автоматически.',
    ],
    stack: 'Electron и Node.js. Сборки для Windows и Linux готовятся автоматически.',
    repo: GITHUB + '/Journeyman-Desktop',
    shots: [
      { src: 'img/journeyman-desktop.png', w: 1280, h: 793, alt: 'Окно программы: заметки объекта и калькулятор с броском 2d6+3' },
    ],
  },
  {
    id: 'next',
    title: 'Следующий проект',
    tagline: 'Место готово, работа в процессе',
    status: 'idea',
    statusText: 'Скоро',
    year: '—',
    kind: 'Эксперимент',
    tags: ['Скоро'],
    summary:
      'Свободное место для новой работы. Как только репозиторий появится ' +
      'на GitHub, карточка заполнится описанием проекта.',
    about:
      'Здесь появится следующий проект. Пока оставляю прямую ссылку на ' +
      'GitHub: всё новое публикуется там в первую очередь.',
    features: [],
    stack: '—',
    repo: GITHUB,
  },
];

/* ---------- Карточки ---------- */

const cardsEl = document.getElementById('cards');
const filtersEl = document.querySelector('.filters');
const modal = document.getElementById('modal');
const modalPanel = modal.querySelector('.modal-panel');
const modalBody = modal.querySelector('.modal-body');

let activeFilter = 'Все';
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
        <span class="card-more">Подробнее →</span>
      </button>
    </li>`;
}

function renderCards() {
  const list = activeFilter === 'Все'
    ? PROJECTS
    : PROJECTS.filter((p) => p.kind === activeFilter);
  cardsEl.innerHTML = list.map(cardMarkup).join('');
}

function renderFilters() {
  const kinds = ['Все', ...new Set(PROJECTS.map((p) => p.kind))];
  filtersEl.innerHTML = kinds
    .map((k) => `<button class="chip" type="button" aria-pressed="${k === activeFilter}">${k}</button>`)
    .join('');
}

/* ---------- Знакомство с проектом ---------- */

function openProject(id) {
  const p = PROJECTS.find((item) => item.id === id);
  if (!p) return;

  const features = p.features.length
    ? `<h4>Что внутри</h4><ul>${p.features.map((f) => `<li>${f}</li>`).join('')}</ul>`
    : '';

  const shots = p.shots
    ? `<div class="modal-shots">${p.shots.map((s) => `
        <figure>
          <button class="shot-zoom" type="button" aria-label="Рассмотреть подробнее: ${s.alt}">
            <img src="${s.src}" width="${s.w}" height="${s.h}" alt="${s.alt}"
                 loading="lazy" decoding="async">
          </button>
          <figcaption>${s.alt}</figcaption>
        </figure>`).join('')}</div>`
    : '';

  const demo = p.demo
    ? `<a class="btn btn-solid" href="${p.demo}" target="_blank" rel="noopener">Открыть демо</a>`
    : '';

  modalBody.innerHTML = `
    <p class="eyebrow">${p.kind} · ${p.year}</p>
    <h2 id="modal-title">${p.title}</h2>
    <p class="modal-sub">${p.tagline}</p>
    <h4>О проекте</h4>
    <p>${p.about}</p>
    ${shots}
    ${features}
    <h4>Стек</h4>
    <p>${p.stack}</p>
    <div class="modal-actions">
      ${demo}
      <a class="btn ${p.demo ? 'btn-ghost' : 'btn-solid'}" href="${p.repo}" target="_blank" rel="noopener">Открыть на GitHub</a>
      <button class="btn btn-ghost" type="button" data-close>Закрыть</button>
    </div>`;

  lastFocused = document.activeElement;
  modal.hidden = false;
  document.body.style.overflow = 'hidden';
  modalPanel.scrollTop = 0;              // иначе следующий проект откроется там же, где бросили прошлый
  modalPanel.focus({ preventScroll: true });
}

function closeProject() {
  modal.hidden = true;
  document.body.style.overflow = '';
  if (lastFocused) lastFocused.focus();
}

/* ---------- Изображение крупным планом ---------- */

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
  lightboxStage.scrollLeft = 0;          // новый снимок показываем с левого края
  lightboxPanel.focus({ preventScroll: true });
}

function closeShot() {
  lightbox.hidden = true;
  lightboxImg.removeAttribute('src');
  if (lastZoomed) lastZoomed.focus();
}

/* ---------- События ---------- */

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
  if (!lightbox.hidden) return closeShot();   // сначала закрывается верхний слой
  if (!modal.hidden) closeProject();
});

/* ---------- Старт ---------- */

renderFilters();
renderCards();
document.querySelector('[data-stat="count"]').textContent =
  PROJECTS.filter((p) => p.status !== 'idea').length;
document.querySelector('[data-year]').textContent = new Date().getFullYear();
