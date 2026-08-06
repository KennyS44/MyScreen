/* All site copy, in both languages. Logic lives in main.js — this file is
   only text, so adding a project or fixing wording never touches the code.

   To add a project: append an object to PROJECTS. Fields outside `en`/`ru`
   are language-independent; `kind` is a key ('tool' | 'site'), and its visible
   label comes from UI['kind.tool'] / UI['kind.site']. */

const GITHUB = 'https://github.com/KennyS44';
const TELEGRAM = 'https://t.me/Romannn_nn';

/* ---------- Interface strings ---------- */

const UI = {
  en: {
    'html.lang': 'en',
    'meta.title': 'Kenny — front-end developer: sites, calculators, catalogues',
    'meta.description':
      "Kenny's portfolio: a landing page with a price calculator, a catalogue " +
      'with filters and a cart, and tools for tabletop game masters. All in ' +
      'plain HTML, CSS and JavaScript, with live demos and open code.',
    'meta.ogSiteName': 'Kenny — project showcase',
    'meta.ogDescription':
      'Commercial sites and tools in plain HTML, CSS and JavaScript: a price ' +
      "calculator, a catalogue with a cart, a tabletop game master's codex. " +
      'Live demos and open code.',
    'meta.ogLocale': 'en_US',

    'nav.projects': 'Projects',
    'nav.about': 'About',

    'hero.eyebrow': 'Work showcase',
    'hero.title': 'I build tools<br><span class="accent">that actually work</span>',
    'hero.lead':
      'These are my projects: commercial sites with price calculation and a ' +
      'cart, and tools that run without a server. Every one of them can be ' +
      'opened and used right now, and the source code is on GitHub. Open a ' +
      'card to look at a project more closely.',
    'hero.cta.projects': 'View projects',
    'hero.cta.repos': 'Repositories',

    'stats.projects': 'Projects',
    'stats.stack': 'Stack',
    'stats.hosting': 'Hosting',
    'stats.hosting.value': 'Static',

    'projects.title': 'Projects',
    'projects.sub': 'Click a card to open a detailed description of the project.',
    'projects.filterLabel': 'Project filter',

    'about.title': 'About',
    'about.p1':
      'I build sites and tools in plain HTML, CSS and JavaScript — no heavy ' +
      'build pipelines and no server where none is needed. A landing page ' +
      'with a calculator, a catalogue with a cart, an offline application: ' +
      'different tasks, one approach. I value clean interfaces, honest copy ' +
      'and code that still reads well six months later.',
    'about.p2':
      'New projects show up on GitHub, and the source code of everything on ' +
      'this page lives there too.',
    'about.p3':
      'Open to project work and collaboration. Write to me on Telegram — I ' +
      'reply within a day.',

    'filter.all': 'All',
    'kind.tool': 'Tool',
    'kind.site': 'Site',
    'status.live': 'Live',

    'card.details': 'Details →',

    'modal.about': 'About the project',
    'modal.inside': 'What is inside',
    'modal.stack': 'Stack',
    'modal.demo': 'Open demo',
    'modal.repo': 'View on GitHub',
    'modal.close': 'Close',
    'modal.zoom': 'Take a closer look: ',

    'a11y.close': 'Close',
    'a11y.closeImage': 'Close image',
    'a11y.language': 'Language',
    'a11y.switchToEn': 'Switch the site to English',
    'a11y.switchToRu': 'Переключить сайт на русский',
  },

  ru: {
    'html.lang': 'ru',
    'meta.title': 'Kenny — фронтенд-разработчик: сайты, калькуляторы, каталоги',
    'meta.description':
      'Портфолио Kenny: лендинг с калькулятором стоимости, каталог с ' +
      'фильтрами и корзиной, инструменты для мастеров настольных игр. Всё на ' +
      'чистых HTML, CSS и JavaScript, с живыми демо и открытым кодом.',
    'meta.ogSiteName': 'Kenny — витрина проектов',
    'meta.ogDescription':
      'Коммерческие сайты и инструменты на чистых HTML, CSS и JavaScript: ' +
      'калькулятор стоимости, каталог с корзиной, кодекс мастера НРИ. Живые ' +
      'демо и открытый код.',
    'meta.ogLocale': 'ru_RU',

    'nav.projects': 'Проекты',
    'nav.about': 'Обо мне',

    'hero.eyebrow': 'Витрина работ',
    'hero.title': 'Собираю инструменты,<br><span class="accent">которые работают</span>',
    'hero.lead':
      'Здесь собраны мои проекты: коммерческие сайты с расчётом и корзиной и ' +
      'инструменты, которые работают без сервера. Каждый можно открыть и ' +
      'потрогать прямо сейчас — исходный код лежит на GitHub. Откройте ' +
      'карточку, чтобы посмотреть проект ближе.',
    'hero.cta.projects': 'Смотреть проекты',
    'hero.cta.repos': 'Репозитории',

    'stats.projects': 'Проектов',
    'stats.stack': 'Стек',
    'stats.hosting': 'Хостинг',
    'stats.hosting.value': 'Статика',

    'projects.title': 'Проекты',
    'projects.sub': 'Нажмите на карточку — откроется подробное описание проекта.',
    'projects.filterLabel': 'Фильтр проектов',

    'about.title': 'Обо мне',
    'about.p1':
      'Делаю сайты и инструменты на чистых HTML, CSS и JavaScript — без ' +
      'тяжёлых сборок и без сервера там, где он не нужен. Лендинг с расчётом, ' +
      'каталог с корзиной, офлайн-приложение: разные задачи, один подход. ' +
      'Ценю чистые интерфейсы, честные тексты и код, который можно спокойно ' +
      'прочитать через полгода.',
    'about.p2':
      'Новые проекты появляются на GitHub — там же лежит исходный код всего, ' +
      'что показано на этой странице.',
    'about.p3':
      'Открыт к работе над проектами и к сотрудничеству. Напишите в Telegram — ' +
      'отвечаю в течение дня.',

    'filter.all': 'Все',
    'kind.tool': 'Инструмент',
    'kind.site': 'Сайт',
    'status.live': 'Работает',

    'card.details': 'Подробнее →',

    'modal.about': 'О проекте',
    'modal.inside': 'Что внутри',
    'modal.stack': 'Стек',
    'modal.demo': 'Открыть демо',
    'modal.repo': 'Смотреть на GitHub',
    'modal.close': 'Закрыть',
    'modal.zoom': 'Рассмотреть ближе: ',

    'a11y.close': 'Закрыть',
    'a11y.closeImage': 'Закрыть изображение',
    'a11y.language': 'Язык',
    'a11y.switchToEn': 'Switch the site to English',
    'a11y.switchToRu': 'Переключить сайт на русский',
  },
};

/* ---------- Projects ---------- */

const PROJECTS = [
  {
    id: 'journeyman',
    title: 'Journeyman',
    kind: 'tool',
    status: 'live',
    year: '2026',
    tags: ['HTML/CSS/JS', 'IndexedDB', 'localStorage'],
    repo: GITHUB + '/Journeyman',
    demo: 'https://kennys44.github.io/Journeyman/',
    shots: [
      {
        src: 'img/journeyman-canvas.jpg', w: 1920, h: 1200,
        alt: {
          en: 'A space is an endless canvas that fits any number of objects linked by threads',
          ru: 'Пространство — бесконечный холст, на который помещается сколько угодно объектов, связанных нитями',
        },
      },
      {
        src: 'img/journeyman-object.jpg', w: 1920, h: 810,
        alt: {
          en: 'Every object has its own directory: text with tables and images, and panels with files, music and notes next to it',
          ru: 'У каждого объекта своя директория: текст с таблицами и картинками, а рядом — панели с файлами, музыкой и пометками',
        },
      },
    ],
    en: {
      tagline: 'A codex for tabletop roleplaying game masters',
      summary:
        "A store for a tabletop game master's material: canvas spaces, object " +
        'cards, links between them, a text editor, dice and music. It all runs ' +
        'in the browser, with no server.',
      about:
        'A game master has to keep towns, dungeons and the ties between ' +
        'characters in his head. Journeyman moves all of that onto an open ' +
        'canvas: objects are dragged with a mouse or a finger, threads are ' +
        'pulled between them, and every object has its own directory with ' +
        'text, images, music and notes. So that all of this is visible right ' +
        'away, the app lays out a demo scene on first launch.',
      features: [
        'Canvas spaces with zoom, panning and a "Show all" mode.',
        'A "Link" tool: a thread between two objects in two clicks.',
        'A text editor with tables and images that are resized by dragging a corner.',
        'Dice from d4 to d100 with a roll animation, and a calculator with a history of results.',
        'Session notes in a side tab, kept separately for each space.',
        'Backup: the whole codex is saved into a single file and loaded back from it.',
      ],
      stack: 'Plain HTML, CSS and JavaScript. IndexedDB for records and files, localStorage for the camera position.',
    },
    ru: {
      tagline: 'Кодекс мастера настольных ролевых игр',
      summary:
        'Хранилище материалов для мастера настольных ролевых игр: ' +
        'пространства-холсты, карточки объектов, связи между ними, текстовый ' +
        'редактор, кубики и музыка. Всё работает в браузере, без сервера.',
      about:
        'Мастеру игры приходится держать в голове города, подземелья и связи ' +
        'между персонажами. Journeyman переносит это на свободный холст: ' +
        'объекты перемещаются мышью или пальцем, между ними протягиваются ' +
        'нити, а у каждого объекта есть собственная директория с текстом, ' +
        'изображениями, музыкой и пометками. Чтобы всё это можно было увидеть ' +
        'сразу, при первом запуске приложение само раскладывает демо-сцену.',
      features: [
        'Пространства-холсты с масштабом, панорамой и режимом «Показать всё».',
        'Инструмент «Связь»: нить между двумя объектами в два нажатия.',
        'Редактор текста с таблицами и изображениями, размер которых меняется перетаскиванием за угол.',
        'Кубики от d4 до d100 с анимацией броска и калькулятор с историей вычислений.',
        'Заметки к плану игры в боковой вкладке — отдельные для каждого пространства.',
        'Резервная копия: весь кодекс сохраняется в один файл и загружается обратно.',
      ],
      stack: 'Чистые HTML, CSS и JavaScript. IndexedDB — для записей и файлов, localStorage — для положения камеры.',
    },
  },
  {
    id: 'journeyman-desktop',
    title: 'Journeyman Desktop',
    kind: 'tool',
    status: 'live',
    year: '2026',
    tags: ['Electron', 'Node.js', 'electron-builder'],
    repo: GITHUB + '/Journeyman-Desktop',
    shots: [
      {
        src: 'img/journeyman-desktop.png', w: 1280, h: 793,
        alt: {
          en: 'A standalone application window with the same interface as in the browser: no browser and no internet needed',
          ru: 'Отдельное окно программы с тем же интерфейсом, что и в браузере: браузер и интернет не нужны',
        },
      },
    ],
    en: {
      tagline: "The same master's codex, as a desktop application",
      summary:
        'The desktop build of Journeyman: a shortcut and its own window ' +
        'instead of a browser. Data is stored as a folder on disk, and no ' +
        'internet connection is needed at all.',
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
    },
    ru: {
      tagline: 'Тот же кодекс мастера — в виде настольного приложения',
      summary:
        'Настольная версия Journeyman: ярлык и отдельное окно вместо ' +
        'браузера. Данные хранятся папкой на диске, а интернет не нужен вовсе.',
      about:
        'Всё, что умеет веб-версия, перенесено в обычное приложение. ' +
        'Отличие — в хранении: записи и файлы лежат на диске одной папкой, ' +
        'которую можно скопировать на флешку. Это и есть резервная копия.',
      features: [
        'Данные хранятся обычными файлами: db.json и папка assets рядом с ним.',
        'Полная работа офлайн: шрифты встроены, из сети не загружается ничего.',
        'Окно запоминает размер и положение, а вторая копия приложения не запустится.',
        'Меню с горячими клавишами: правка текста, масштаб, полный экран, сохранение и загрузка кодекса.',
        'Готовая сборка под Windows — установщик или переносимая версия без установки.',
      ],
      stack: 'Electron и Node.js. Вместо браузерной базы — обычные файлы на диске; сборки под Windows и Linux собираются автоматически.',
    },
  },
  {
    id: 'brightside',
    title: 'Brightside',
    kind: 'site',
    status: 'live',
    year: '2026',
    tags: ['HTML/CSS/JS', 'Schema.org'],
    repo: GITHUB + '/Brightside',
    demo: 'https://kennys44.github.io/Brightside/',
    shots: [
      {
        src: 'img/brightside-hero.jpg', w: 1920, h: 1200,
        alt: {
          en: 'The first screen of the landing page: headline, action buttons and the key terms of service',
          ru: 'Первый экран лендинга: заголовок, кнопки действия и краткие условия работы',
        },
      },
      {
        src: 'img/brightside-calc.jpg', w: 1920, h: 1200,
        alt: {
          en: 'The calculator: parameters on the left, a line-by-line breakdown and the total in a sticky panel on the right',
          ru: 'Калькулятор: параметры слева, построчный расчёт и итоговая сумма в закреплённой панели справа',
        },
      },
    ],
    en: {
      tagline: 'A service landing page with a price calculator',
      summary:
        'A one-page site for a cleaning service: a price calculator, a request ' +
        'form with field validation, and sections for services, reviews and ' +
        'questions. A light business theme.',
      about:
        'A complete, typical commercial landing page — from the first screen ' +
        'to the request form. The calculator is the centrepiece: the visitor ' +
        'picks the type of cleaning, the area and any extras, and immediately ' +
        'sees the price line by line, without a phone call or an on-site ' +
        'estimate. The result is attached to the request. The company is ' +
        'fictional — the project was built as a work sample.',
      features: [
        'A calculator with five parameters: the total is recomputed on every change.',
        'The area field and the slider drive one value, and out-of-range input is clamped.',
        'Request validation: name, phone format, no dates in the past — with hints next to the fields.',
        'The request is assembled into ready-to-send text together with the calculation.',
        'FAQ structured data and a social preview.',
      ],
      stack: 'Plain HTML, CSS and JavaScript. The font is local, and there is no build step and no server.',
    },
    ru: {
      tagline: 'Лендинг услуги с расчётом стоимости',
      summary:
        'Одностраничный сайт клининговой службы: калькулятор стоимости, ' +
        'заявка с проверкой полей, разделы услуг, отзывов и вопросов. ' +
        'Светлая деловая тема.',
      about:
        'Типовой коммерческий лендинг целиком — от первого экрана до заявки. ' +
        'Главное здесь калькулятор: человек отмечает тип уборки, площадь и ' +
        'дополнительные услуги и сразу видит цену построчно, без звонка и ' +
        'выезда оценщика. Итог расчёта прикладывается к заявке. Компания ' +
        'вымышленная — проект собран как образец работы.',
      features: [
        'Калькулятор с пятью параметрами: сумма пересчитывается на каждое изменение.',
        'Поле площади и ползунок ведут одно значение, ввод за границами зажимается.',
        'Проверка заявки: имя, формат телефона, дата не в прошлом — с подсказками у полей.',
        'Заявка собирается в готовый текст вместе с расчётом.',
        'Микроразметка вопросов-ответов и превью для соцсетей.',
      ],
      stack: 'Чистые HTML, CSS и JavaScript. Шрифт локальный, сборки и сервера нет.',
    },
  },
  {
    id: 'roastery',
    title: 'Roastery',
    kind: 'site',
    status: 'live',
    year: '2026',
    tags: ['HTML/CSS/JS', 'localStorage', 'History API'],
    repo: GITHUB + '/Roastery',
    demo: 'https://kennys44.github.io/Roastery/',
    shots: [
      {
        src: 'img/roastery-grid.jpg', w: 1920, h: 1200,
        alt: {
          en: 'The catalogue with a condition applied: the filter list on the left has narrowed to the options that still have products',
          ru: 'Каталог с выбранным условием: список подбора слева сузился до тех пунктов, под которые ещё есть товары',
        },
      },
      {
        src: 'img/roastery-cart.jpg', w: 1920, h: 1200,
        alt: {
          en: 'The cart slides in over the catalogue: order contents, quantities and the total',
          ru: 'Корзина выезжает поверх каталога: состав заказа, количество и сумма',
        },
      },
    ],
    en: {
      tagline: 'A product catalogue with filtering and a cart',
      summary:
        'A coffee shop storefront: filtering by roast, country, brewing ' +
        'method and price, plus search, sorting and a cart. The selection is ' +
        'kept in the page URL.',
      about:
        'As close to an online store as you can get without a server. Filters ' +
        'inside a group combine with OR, and groups combine with AND. The ' +
        'selection is recomputed on the fly: options that no longer match any ' +
        'product are removed from the list, so an obviously empty set of ' +
        'conditions cannot be chosen. The filter state lives in the URL — a ' +
        'link to the results can be shared, and Back undoes the last filter. ' +
        'The cart is stored in the browser and survives a reload. The shop is ' +
        'fictional.',
      features: [
        'Filtering by four conditions at once: the counts next to the options are recomputed, and options with no matching lots disappear.',
        'Search by name, country and tasting notes; four sort orders.',
        'A cart with a running total and stock limits: you cannot add more than is in stock.',
        'The filter state sits in the page URL, so a link can be shared.',
        'Product covers are drawn in code: SVG instead of photographs.',
      ],
      stack: 'Plain HTML, CSS and JavaScript. The cart lives in localStorage, the filters in the URL parameters.',
    },
    ru: {
      tagline: 'Каталог товаров с подбором и корзиной',
      summary:
        'Витрина магазина кофе: подбор по обжарке, стране, способу и цене, ' +
        'поиск, сортировка и корзина. Подборка сохраняется в адресе страницы.',
      about:
        'Ближайший к интернет-магазину проект, который можно собрать без ' +
        'сервера. Фильтры внутри группы складываются по «или», между ' +
        'группами — по «и». Подбор пересчитывается на лету: пункты, под ' +
        'которые не осталось ни одного товара, убираются из списка, поэтому ' +
        'выбрать заведомо пустой набор условий нельзя. Состояние подбора живёт ' +
        'в адресе — ссылку на выдачу можно переслать, а «Назад» отменяет ' +
        'последний фильтр. Корзина лежит в браузере и переживает перезагрузку. ' +
        'Магазин вымышленный.',
      features: [
        'Подбор по четырём условиям сразу: числа рядом с пунктами пересчитываются, а пункты без подходящих лотов исчезают.',
        'Поиск по названию, стране и вкусовым нотам; четыре порядка сортировки.',
        'Корзина с пересчётом суммы и остатками: больше, чем есть на складе, не набрать.',
        'Состояние подбора в адресе страницы — ссылку можно переслать.',
        'Обложки товаров рисуются кодом: SVG вместо фотографий.',
      ],
      stack: 'Чистые HTML, CSS и JavaScript. Корзина — в localStorage, подбор — в параметрах адреса.',
    },
  },
];
