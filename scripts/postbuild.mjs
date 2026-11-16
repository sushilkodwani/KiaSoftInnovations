// GitHub Pages is a static host with no SPA rewrite rules. To make every
// route load directly (and return HTTP 200), copy index.html into a folder
// per route, plus a 404.html fallback for anything unknown.
import fs from 'node:fs';
import path from 'node:path';

const dist = 'dist';
const html = fs.readFileSync(path.join(dist, 'index.html'), 'utf8');
const servicesSrc = fs.readFileSync('src/data/services.js', 'utf8');
const slugs = [...servicesSrc.matchAll(/slug:\s*'([^']+)'/g)].map((m) => m[1]);
const routes = ['services', 'about', 'contact', ...slugs.map((s) => `services/${s}`)];

for (const route of routes) {
  const dir = path.join(dist, route);
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, 'index.html'), html);
}
fs.writeFileSync(path.join(dist, '404.html'), html);

const base = 'https://kiasoftinnovations.com';
const urls = ['', ...routes].map((r) => `  <url><loc>${base}/${r}${r ? '/' : ''}</loc></url>`).join('\n');
fs.writeFileSync(path.join(dist, 'sitemap.xml'), `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`);
console.log(`postbuild: wrote ${routes.length} route pages, 404.html and sitemap.xml`);
