---
name: Content strategy
description: Use when planning keywords, service pages, case studies, blog posts, testimonials, internal linking or on-page SEO in ES/EN.
---

# Contenido y keywords

## Estructura objetivo

- Hub **Servicios** + **1 página por servicio**: desarrollo web a medida, automatización de procesos,
  datos/BI, IA/LLM, fullstack/APIs, consultoría/arquitectura.
- **Casos de estudio** por proyecto: problema → solución → stack → **resultado medible**.
- **Blog** técnico (long-tail) ES/EN con enlazado interno a servicios.
- **Testimonios** reales (prueba social); nunca inventar.

## Mapa de keywords

- Bilingüe, por **intención** (informacional vs comercial) y **ciudad** (ver skill `local-seo`).
- Una intención principal por página; sin canibalizar.

## On-page

- Un solo `h1` por página; jerarquía `h2`/`h3` coherente.
- `title`/`description` **localizados** (ES/EN) y únicos por página/idioma.
- Enlazado interno desde blog/casos hacia servicios.
- E‑E‑A‑T: autoría, experiencia real, datos verificables.

## Formato de contenido (sin backend)

- Traducciones en `src/assets/i18n/{es,en}.json` (**mismas claves**).
- Blog/casos en Markdown bajo `content/**` + prerender (Angular, sin CMS).
- Al añadir una página: rutas, `setSEO`, sitemap y ambos idiomas.
