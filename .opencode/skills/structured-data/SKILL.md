---
name: Structured data
description: Use when adding or validating JSON-LD (Person, WebSite, ProfessionalService, Service, BreadcrumbList, BlogPosting, FAQPage, Review).
---

# Datos estructurados (JSON-LD)

## Global (`src/index.html`)

- `Person` (Andrés Mira) y `WebSite`.

## Por página / tipo

- `ProfessionalService` / `LocalBusiness` — local, con `areaServed` y `sameAs`. Ver skill `local-seo`.
- `Service` — una entrada por servicio ofrecido.
- `BreadcrumbList` — navegación jerárquica.
- `BlogPosting` — artículos del blog.
- `FAQPage` — en páginas de servicio con preguntas reales.
- `Review` / `AggregateRating` — **solo con testimonios reales** (normas de Google).

## Reglas

- `inLanguage` por locale (`es` / `en`).
- Añadir por página vía `SeoService` o `src/index.html`; mantener en un único `@graph`.
- Validar con **Rich Results Test** / validador schema.org antes de cerrar: **0 errores**.

Ver también: skills `seo-portfolio`, `i18n-routing`.
