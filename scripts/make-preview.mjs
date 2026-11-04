// Packs the built site into one HTML file you can double-click to view.
// Run `npm run preview-file` to rebuild the site and refresh the file.
import { readdirSync, readFileSync, writeFileSync } from 'node:fs';

const OUTPUT = 'Reva-Website-Preview.html';
const pages = ['index', 'about', 'services', 'team', 'contact', 'privacy', 'terms', 'thanks'];

const read = (page) => readFileSync(page === 'index' ? 'dist/index.html' : `dist/${page}/index.html`, 'utf8');
const between = (html, open, close) => html.slice(html.indexOf(open) + open.length, html.indexOf(close));
const dataUri = (file, type) => `data:${type};base64,${readFileSync(file).toString('base64')}`;

// Keep only the Latin font, embedded, so the file stays small
const assets = readdirSync('dist/_astro');
const css = readFileSync(`dist/_astro/${assets.find((name) => name.endsWith('.css'))}`, 'utf8').replace(
  /@font-face\{[^}]*\}/g,
  (rule) => {
    const url = rule.match(/url\(([^)]*latin-wght-normal[^)]*\.woff2)\)/);
    if (!url || url[1].includes('latin-ext')) return '';
    const file = `dist/_astro/${url[1].split('/').pop()}`;
    return rule.replace(/src:[^;}]*/, `src:url(${dataUri(file, 'font/woff2')}) format("woff2")`);
  },
);

const home = read('index');
const shell = (html) => html.replace(/href="\/([^"]*)"/g, 'href="#/$1"').replaceAll('src="/logo-mark.png"', `src="${dataUri('public/logo-mark.png', 'image/png')}"`);

const header = shell(between(home, '<header class="site-header">', '</header>'));
const footer = shell(between(home, '<footer class="site-footer">', '</footer>'));
const sections = pages
  .map((page) => {
    const route = page === 'index' ? '' : `${page}/`;
    return `<div data-route="${route}" hidden>${shell(between(read(page), '<main id="main">', '</main>'))}</div>`;
  })
  .join('\n');
const formScript = read('contact').match(/<script type="module">([\s\S]*?)<\/script>/)[1];

const router = `
  const show = (route) => {
    const known = document.querySelector('[data-route="' + route + '"]');
    document.querySelectorAll('[data-route]').forEach((el) => (el.hidden = el !== (known || document.querySelector('[data-route=""]'))));
    document.querySelectorAll('.site-header nav a').forEach((a) => {
      if (a.getAttribute('href') === '#/' + route) a.setAttribute('aria-current', 'page');
      else a.removeAttribute('aria-current');
    });
    document.querySelector('.nav-mobile').open = false;
    scrollTo(0, 0);
  };
  const current = () => location.hash.replace(/^#\\//, '');
  document.addEventListener('click', (event) => {
    const link = event.target.closest('a[href^="#/"]');
    if (!link) return;
    event.preventDefault();
    const route = link.getAttribute('href').slice(2);
    show(route);
    try {
      history.pushState(null, '', '#/' + route);
    } catch {
      // Some viewers block history changes; the page has already switched
    }
  });
  addEventListener('popstate', () => show(current()));
  show(current());`;

writeFileSync(
  OUTPUT,
  `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<meta name="robots" content="noindex" />
<title>Reva Associates Limited (preview)</title>
<link rel="icon" href="${dataUri('public/favicon.png', 'image/png')}" />
<style>${css}</style>
</head>
<body>
<header class="site-header">${header}</header>
<main id="main">${sections}</main>
<footer class="site-footer">${footer}</footer>
<script>${router}</script>
<script type="module">${formScript}</script>
</body>
</html>
`,
);
console.log(`Wrote ${OUTPUT}`);
