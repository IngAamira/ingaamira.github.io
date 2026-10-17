---
name: Analytics GA4
description: Use when adding events, conversions or setting up measurement with GA4, Search Console and Google Business Profile.
---

# Medición (GA4 / GSC / GBP)

## GA4

- Propiedad en `src/index.html` (id `G-KEC6JZR2MT`).
- Emitir eventos con `BrowserService.gtag(...)` (nunca `window` directo; ver skill `ssr-safety`).
- **Eventos de conversión**: clic WhatsApp, clic Email, descarga de CV, envío de formulario,
  cambio de idioma, vista de caso de estudio/blog.
- Marcar conversiones en GA4; **no** enviar PII.

## Search Console

- Verificar propiedad y enviar `sitemap.xml`.
- Monitorizar: cobertura, `hreflang`/internacional, renderizado y rendimiento por país/idioma.

## Google Business Profile

- Seguir llamadas, indicaciones y clics al sitio (ver skill `local-seo`).

## Herramientas

- Sin herramientas de pago: **GSC + GA4 + Lighthouse**.
