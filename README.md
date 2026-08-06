# MyScreen — project showcase

> [Русская версия](README.ru.md)

A personal portfolio page: dark cyberpunk styling with a businesslike tone,
project cards and a "get to know it" panel for each one. A static site, with no
build step and no server.

## Files

    index.html                the only page, the entry point
    css/style.css             styling: dark base, cyan accent, grid
    css/fonts.css             local font declarations
    js/content.js             all copy in both languages: interface + projects
    js/main.js                cards, filters, project panel, language switching
    fonts/                    Exo 2 (headings) and Inter (text), Latin + Cyrillic
    img/og.png                1200×630 preview for social networks and messengers
    img/favicon.svg           tab icon
    img/apple-touch-icon.png  icon for the iOS home screen
    img/journeyman-*.jpg      Journeyman screenshots: the space canvas and an object
    img/journeyman-desktop.png screenshot of the desktop version
    img/brightside-*.jpg      screenshots of the Brightside landing page
    img/roastery-*.jpg        screenshots of the Roastery catalogue
    tools/og-template.html    the template og.png is captured from
    robots.txt                crawl permission + pointer to the sitemap
    sitemap.xml               sitemap for Google and Yandex

`index.html`, `robots.txt` and `sitemap.xml` must sit in the root: the first is
the site's entry point, and search engines look for the other two only there.

The fonts live in the repository: the site never calls Google Fonts and does not
break without an internet connection. The heading font was picked for its
Cyrillic coverage — many "techno" fonts lack it, and Russian text then falls back
to a system font.

## Site address

The address is written in three files: `<link rel="canonical">` and the `og:`
tags in `index.html` (including `og:image` — the path `img/og.png`),
`sitemap.xml`, `robots.txt`. Right now they all point to
`https://kennys44.github.io/MyScreen/`. When moving to your own domain, change
these lines — otherwise social previews will keep pulling the image from the old
address.

## Two languages

The page is English by default and switches to Russian with the EN/RU control in
the header. Nothing is reloaded: the switch rewrites the visible text, the page
`lang`, the title and the social-preview tags in place.

Which language a visitor gets, in order of priority:

1. `?lang=en` or `?lang=ru` in the address — an explicit link always wins, so a
   link can be shared in the language it promises;
2. the choice remembered from a previous visit (`localStorage`);
3. the browser language — Russian for `ru-*`, English for everything else.

Switching also writes `?lang=` into the address bar, so whatever is on screen can
be copied and sent as is.

One consequence worth knowing: the copy is swapped by JavaScript, so a crawler
that does not run scripts sees the English version. That is the intended default;
`<link rel="alternate" hreflang>` in the `<head>` points at both.

## How to add a project

All copy lives in `js/content.js` — `main.js` holds only logic. Every project is
one object in the `PROJECTS` array; the card, the filter and the panel assemble
themselves:

    {
      id: 'slug',              // unique key
      title: 'Name',           // not translated
      kind: 'tool',            // key, not a label: 'tool' | 'site'
      status: 'live',          // live | wip | idea — label colour
      year: '2026',
      tags: ['HTML/CSS/JS'],
      repo: 'https://github.com/KennyS44/...',
      demo: 'https://…',       // optional
      shots: [
        { src: 'img/x.jpg', w: 1920, h: 1200,
          alt: { en: 'English alt text', ru: 'Русский alt' } },
      ],
      en: {
        tagline: 'One line of substance',
        summary: 'Paragraph for the card',
        about: 'Paragraph for the project panel',
        features: ['Bullet for the "What is inside" list'],
        stack: 'What it is built with',
      },
      ru: { …the same five fields… },
    }

`kind` is deliberately a key rather than a visible word: its label comes from
`UI['kind.tool']`, so switching the language cannot break the current filter.
Interface strings live in the `UI` object at the top of the same file — the same
set of keys must exist under both `en` and `ru`.

The number in the "Projects" stat is counted automatically (slots with
`status: 'idea'` are left out).

## Verified

Chrome (Playwright), 1280×900 and 390×844, 31 checks: cards open, filters switch
the list, the panel closes on Esc, on the backdrop and on the cross, and there is
no horizontal scrolling on a phone.

On the language switch specifically: the page `lang`, the title, the description
and `og:locale` all change; an active filter survives the switch and keeps the
same cards; an open project panel is re-rendered in place instead of closing; the
image close-up is dismissed, because its caption belonged to the old language;
the choice survives a reload; `?lang=` overrides the remembered choice and an
unknown value falls back; a browser set to `ru-RU` opens in Russian and `en-GB`
in English. No console errors, and both fonts load locally.
