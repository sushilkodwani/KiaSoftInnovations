# KiaSoft Innovations website

Corporate website for kiasoftinnovations.com. React 18 + Vite + React Router, plain CSS.

## Run locally

```bash
npm install
npm run dev      # http://localhost:5180
npm run build    # production build in dist/
```

## Where to edit

| What | File |
| --- | --- |
| Company name, email, LinkedIn, contact-form endpoint | `src/data/site.js` |
| Services (names, text, capabilities) and technology strip | `src/data/services.js` |
| Pages | `src/pages/` |
| Header, footer, shared blocks | `src/components/` |
| Colors, spacing, layout | `src/styles.css` |
| Logo source (regenerate with `node scripts/prep-assets.mjs`) | `scripts/logo-source.webp` |

Adding a service to `services.js` automatically adds it to the menu, the services
page, the footer and the build's static routes.

## Deploying to GitHub Pages with the custom domain

1. Create a GitHub repository and push **the contents of this folder** as the repo root, on the `main` branch.
2. In the repo: **Settings → Pages → Build and deployment → Source: GitHub Actions**.
   The included workflow (`.github/workflows/deploy.yml`) builds and publishes on every push to `main`.
3. In **Settings → Pages → Custom domain**, enter `kiasoftinnovations.com` (the `public/CNAME` file already declares it).
4. At your domain registrar, add DNS records:
   - `A` records for `@` → `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - `CNAME` record for `www` → `<your-github-username>.github.io`
5. Once DNS has propagated, tick **Enforce HTTPS** in the Pages settings.

GitHub Pages is static hosting. `scripts/postbuild.mjs` writes an `index.html` for every
route so deep links such as `/services/power-bi` load directly, plus `404.html` and `sitemap.xml`.

## Contact form

There is no server, so by default the form opens the visitor's email app with the message
pre-filled. To receive submissions directly, create an endpoint with a form service
(for example Formspree or Web3Forms) and set `formEndpoint` in `src/data/site.js`.

## Assets

- Product icons in `src/assets/icons` are Microsoft's product logos, used to identify the
  technologies the company works with. They are Microsoft trademarks; review Microsoft's
  trademark and brand guidelines before launch.
- Photos in `src/assets/photos` are from Unsplash, used under the Unsplash License.
