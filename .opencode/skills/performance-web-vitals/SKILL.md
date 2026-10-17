---
name: Performance web vitals
description: Use when optimizing load speed, LCP/CLS/INP, fonts, images or build budgets.
---

# Rendimiento / Core Web Vitals

- **HttpClient SSR**: usar **fetch** (quitar `withXhr()` de `provideHttpClient()` en
  `src/app/app.config.ts`) → recomendación NG02801 de Angular.
- **Fuente Inter**: hoy desde Google Fonts en `src/index.html`; migrar a self-host + subset +
  `font-display: swap` para reducir LCP y eliminar conexiones externas.
- **Imágenes**: AVIF/WebP, `loading="lazy"`, `width`/`height` explícitos (evitar CLS);
  optimizar `og/preview.png` y los assets pesados.
- **Prerender** de más rutas reduce TTFB.
- **Budgets** en `angular.json`: `initial` aviso 500 kB / error 1 MB; `anyComponentStyle` 4 kB / 8 kB.
- Medir con **Lighthouse** (gratis) por ruta e idioma; objetivo CWV en verde.

Ver también: skills `ssr-safety`, `design-system`.
