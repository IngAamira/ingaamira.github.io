---
name: i18n routing
description: Use when adding locale-prefixed URLs (/es, /en), SSR language handling, hreflang, x-default, prerendering per locale or the multilingual sitemap.
---

# i18n por URL (`/es`, `/en`)

Objetivo: **una URL canónica por idioma** para SEO multilingüe real (SEO local + internacional).
Sustituye el cambio de idioma solo en cliente.

## Modelo acordado

- Rutas con prefijo de idioma: `/es/...` y `/en/...` (**mismos slugs**).
- `/` **no se indexa**: responde **302** según `Accept-Language` con **fallback `es`** (prioridad local).
- `hreflang` **recíproco** `es` ↔ `en` + `x-default` → versión `es`, en todas las páginas.
- `canonical` **self** por idioma (nunca la raíz).

## SSR / prerender

- El idioma se toma de la **URL**, nunca del navegador.
- Fijar `TranslateService.use(lang)` **antes** del render; `document.documentElement.lang` por locale.
- `src/app/app.routes.server.ts`: `RenderMode.Prerender` con `getPrerenderParams` → `['es','en']` por ruta.
- `og:locale`: `es_CO` / `en_US` según locale.

## Checklist al tocar rutas

1. `src/presentation/features/portfolio/portfolio.routes.ts` — rutas con `:lang`.
2. `src/app/app.routes.server.ts` — prerender por locale.
3. `src/app/app.config.ts` — providers i18n / loader SSR-safe.
4. `src/presentation/shared/services/translation.service.ts` — idioma derivado de la URL.
5. `SeoService.setSEO(...)` — canonical + `alternates` por idioma.
6. `src/sitemap.xml` — `xhtml:link rel="alternate" hreflang="..."` por URL.
7. `vercel.json` — redirect de `/`.

## Validación

- `npm run build` (prerender de ambas locales) y `npm test -- --watch=false`.
- En `dist/`: `hreflang` recíproco, canonical por locale, `<html lang>` correcto.

Ver también: skills `seo-portfolio`, `ssr-safety`, `i18n-ngx-translate`.
