---
name: Verify Build
description: Use before finishing any change to know how to validate it in this repository. Lists the real verification commands and the current gaps (no lint, no tests, no browser).
---

# Cómo validar cambios en este repo

**No hay lint ni formatter** (solo `.editorconfig`) y **no hay specs**. La verificación real es el build.

## Comando principal

```bash
npm run build
```

Compila con `strict` + `strictTemplates` y **prerenderiza 4 rutas**. Falla ante:

- errores de TypeScript;
- errores de template (strict templates);
- errores de **prerender** (acceso a APIs de navegador; ver skill `ssr-safety`).

Ejecutarlo antes de dar cualquier tarea por terminada. `ng build --watch` para desarrollo.

## Otros comandos

```bash
npm start                                        # dev server (SSR), puerto 4200
npm run build:prod                               # build para Vercel (base-href / deploy-url)
npm run serve:ssr:ingaamira.github.io            # sirve el SSR (PORT o 4000)
```

## Tests (estado actual)

- `npm test` / `ng test` usa el builder **Karma**, que **requiere un navegador** (no hay `CHROME_BIN`).
- Angular ≥20 ofrece el builder sin navegador `@angular/build:unit-test` (**Vitest + jsdom**).
  Cuando se añadan tests, migrar con:
  `ng update @angular/cli --name migrate-karma-to-vitest`
- No escribir specs que no puedan ejecutarse; no afirmar que los tests pasan sin correrlos.

## CI

`.github/workflows/ci.yml` ejecuta `npm ci` + `npm run build` en cada push/PR.
