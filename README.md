# MyScreen — project showcase

> [Русская версия](README.ru.md)

A personal portfolio page: dark cyberpunk styling with a businesslike tone,
project cards and a "get to know it" panel for each one. A static site, with no
build step and no server.

## Files

    index.html                the only page, the entry point
    css/style.css             styling: dark base, cyan accent, grid
    css/fonts.css             local font declarations
    js/main.js                project data + cards, filters, project panel
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

## How to add a project

Every project is described in a single `PROJECTS` array at the top of
`js/main.js`. Add an object — the card, the filter and the panel assemble
themselves:

    {
      id: 'slug',              // unique key
      title: 'Name',
      tagline: 'One line of substance',
      status: 'live',          // live | wip | idea — label colour
      statusText: 'Live',
      year: '2026',
      kind: 'Tool',            // feeds the filters
      tags: ['HTML/CSS/JS'],
      summary: 'Paragraph for the card',
      about: 'Paragraph for the project panel',
      features: ['Bullet for the "What is inside" list'],
      stack: 'What it is built with',
      repo: 'https://github.com/KennyS44/...',
    }

The number in the "Projects" stat is counted automatically (slots with
`status: 'idea'` are left out).

## Verified

Chrome (Playwright), 1280×900 and 390×844: cards open, filters switch the list,
the panel closes on Esc, on the backdrop and on the cross, there is no horizontal
scrolling on a phone, no console errors, not a single 4xx/5xx request, and both
fonts load locally.
