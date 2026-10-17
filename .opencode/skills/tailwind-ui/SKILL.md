---
name: Tailwind UI
description: Use when editing styles, templates or building UI in this project. Covers how Tailwind is configured, where styles live and the build budgets.
---

# UI y estilos (Tailwind)

- **Tailwind CSS v3** vía PostCSS (`postcss.config.js` con `tailwindcss` + `autoprefixer`).
- `tailwind.config.js` → `content: ["./src/**/*.{html,ts}"]`.
- Estilos globales en `src/styles.css` (capas `@tailwind base/components/utilities` + algunos overrides de `.container`).
- La UI se compone con **clases utilitarias** en los templates `.html`.
- Un único componente usa CSS propio: `not-found/not-found.component.css`. Preferir Tailwind salvo necesidad.
- **No se usa Bootstrap** (el `TagType.BOOTSTRAP` es solo una etiqueta de skill, no una dependencia).
- Tipografía: fuente **Inter** cargada desde Google Fonts en `src/index.html`.

## Presupuesto de build (puede romper el build)

Definido en `angular.json` para producción:

- `initial`: aviso 500 kB / error 1 MB.
- `anyComponentStyle`: aviso 4 kB / **error 8 kB**.

Evitar bloques de CSS grandes por componente.

## Validación

`npm run build` compila y prerenderiza; los errores de estilo/template aparecen ahí (ver skill `verify-build`).
