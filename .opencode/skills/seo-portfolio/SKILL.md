---
name: SEO Portfolio
description: Use when working on SEO, meta tags, Open Graph, canonical/hreflang, structured data, sitemap.xml or robots.txt.
---

# SEO (sitio de portfolio)

## Por página

`SeoService.setSEO({ title, description, url, image?, type? })`
(`src/presentation/shared/services/seo.service.ts`) establece: title, description, robots,
Open Graph, Twitter card, canonical y `hreflang` alternates. Se llama en el `ngOnInit` de cada página.

Las **URLs canónicas están hardcodeadas** a `https://portfolio.ingaamira.com/...` dentro de cada
componente (home, portfolio, resume, contact, not-found).

## Global

`src/index.html` contiene meta base, Open Graph, **JSON-LD** (Person/WebSite/Service) y
**Google Analytics** (gtag, id `G-KEC6JZR2MT`).

## Archivos estáticos

- `src/sitemap.xml` y `src/robots.txt` (se copian como assets).
- En Vercel, `vercel.json` los reescribe a `/browser/...` con `Content-Type` y cache correctos.

## Checklist al añadir/renombrar una ruta

1. `src/presentation/features/portfolio/portfolio.routes.ts` (ruta lazy).
2. `src/app/app.routes.server.ts` (modo de render: prerender o server).
3. Canonical/OG en el componente (`SeoService.setSEO`).
4. `src/sitemap.xml` y `src/robots.txt`.

## Mejoras conocidas (si se toca SEO)

- `setAlternateLinks` usa **la misma URL** para `en`, `es` y `x-default`; no hay URLs distintas por idioma.
- El `lang` del HTML no se actualiza al cambiar idioma (ver skill `i18n-ngx-translate`).
