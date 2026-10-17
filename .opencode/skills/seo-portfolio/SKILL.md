---
name: SEO Portfolio
description: Use when working on SEO, meta tags, Open Graph, canonical/hreflang, structured data, sitemap.xml or robots.txt.
---

# SEO (sitio de portfolio)

## Por página

`SeoService.setSEO({ title, description, url, image?, type?, alternates? })`
(`src/presentation/shared/services/seo.service.ts`) establece: title, description, robots,
Open Graph, Twitter card y canonical. Se llama en el `ngOnInit` de cada página.

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

## i18n y SEO

- `hreflang` (`rel="alternate"`) solo se emite si la página pasa `alternates` con **URLs distintas
  por idioma**. En el modelo actual (una URL por ruta + cambio de idioma en cliente + SSR en inglés)
  no se emiten: declarar `en`/`es` sobre la misma URL es incorrecto.
- SEO multilingüe real requiere URLs por idioma (`/es/...`) y SSR que respete el idioma.

Ver también: skills `i18n-routing`, `structured-data` y `local-seo`.
