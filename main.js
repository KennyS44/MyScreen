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
      'Хранилище материалов для мастера НРИ: пространства-холсты, карточки ' +
      'объектов, связи между ними, текстовый редактор, кубики и музыка. ' +
      'Всё живёт в браузере, без сервера.',
    about:
      'Мастеру игры нужно держать в голове города, подземелья и связи между ' +
      'персонажами. Journeyman превращает это в свободный холст: объекты ' +
      'таскаются мышью, между ними тянутся нити, у каждого объекта — своя ' +
      'внутренняя директория с текстом, картинками, музыкой и пометками.',
    features: [
      'Пространства-холсты с масштабом, панорамой и режимом «Показать всё».',
      'Инструмент «Связь»: нить между двумя объектами в два нажатия.',
      'Редактор текста объекта с таблицами и картинками, размер которых тянется за угол.',
      'Кубики d4–d100 с анимацией броска и калькулятор с историей.',
      'Заметки плана в боковой вкладке — свои для каждого пространства.',
    ],
    stack: 'Чистые HTML/CSS/JS, IndexedDB для записей и файлов, localStorage для камеры.',
    repo: GITHUB + '/Journeyman',
  },
  {
    id: 'journeyman-desktop',
    title: 'Journeyman Desktop',
    tagline: 'Тот же кодекс мастера, но обычной программой',
    status: 'live',
    statusText: 'Работает',
    year: '2026',
    kind: 'Инструмент',
    tags: ['Electron', 'Node.js', 'Офлайн'],
    summary:
      'Настольная версия Journeyman: ярлык и окно вместо браузера. ' +
      'Данные лежат папкой на диске, интернет не нужен совсем.',
    about:
      'Всё, что умеет веб-версия, перенесено в обычную программу. Разница — ' +
      'в хранении: записи и файлы лежат на диске папкой, которую можно ' +
      'скопировать на флешку. Это и есть резервная копия.',
    features: [
      'Данные — обычные файлы: db.json и папка assets рядом с ним.',
      'Полностью офлайн: шрифты вшиты, из сети не грузится ничего.',
      'Окно помнит размер и положение, вторая копия программы не запустится.',
      'Меню с горячими клавишами: правка текста, масштаб, полный экран.',
      'Готовые сборки для Windows и Linux собираются автоматически.',
    ],
    stack: 'Electron + Node.js, тесты на все три экрана.',
    repo: GITHUB + '/Journeyman-Desktop',
  },
  {
    id: 'next',
    title: 'Следующий проект',
    tagline: 'Место готово, код на подходе',
    status: 'idea',
    statusText: 'Скоро',
    year: '—',
    kind: 'Эксперимент',
    tags: ['Скоро'],
    summary:
      'Свободный слот для новой работы. Как только репозиторий появится ' +
      'на GitHub, карточка займёт его место.',
    about:
      'Здесь появится следующий проект. Пока — прямая ссылка на GitHub: ' +
      'всё новое выкладывается туда первым.',
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
  return `
    <li>
      <button class="card" type="button" data-id="${p.id}">
        <span class="card-top">
          <span class="card-id">${num} · ${p.kind}</span>
          <span class="status ${p.status}">${p.statusText}</span>
        </span>
        <h3>${p.title}</h3>
        <p>${p.summary}</p>
        <span class="tags">${p.tags.map((t) => `<span class="tag">${t}</span>`).join('')}</span>
        <span class="card-more">Познакомиться →</span>
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

  modalBody.innerHTML = `
    <p class="eyebrow">${p.kind} · ${p.year}</p>
    <h2 id="modal-title">${p.title}</h2>
    <p class="modal-sub">${p.tagline}</p>
    <h4>О проекте</h4>
    <p>${p.about}</p>
    ${features}
    <h4>Стек</h4>
    <p>${p.stack}</p>
    <div class="modal-actions">
      <a class="btn btn-solid" href="${p.repo}" target="_blank" rel="noopener">Открыть на GitHub</a>
      <button class="btn btn-ghost" type="button" data-close>Закрыть</button>
    </div>`;

  lastFocused = document.activeElement;
  modal.hidden = false;
  document.body.style.overflow = 'hidden';
  modalPanel.focus();
}

function closeProject() {
  modal.hidden = true;
  document.body.style.overflow = '';
  if (lastFocused) lastFocused.focus();
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
  if (e.target.closest('[data-close]')) closeProject();
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && !modal.hidden) closeProject();
});

/* ---------- Старт ---------- */

renderFilters();
renderCards();
document.querySelector('[data-stat="count"]').textContent =
  PROJECTS.filter((p) => p.status !== 'idea').length;
document.querySelector('[data-year]').textContent = new Date().getFullYear();
