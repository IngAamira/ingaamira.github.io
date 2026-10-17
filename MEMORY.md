# MEMORY.md

Memoria operativa del proyecto. Describe **dónde está** el proyecto, decisiones, problemas y pendientes.
Las reglas de trabajo permanentes están en `AGENTS.md`.

Mantener breve. Verificar contra el código/configuración real; no guardar secretos. Eliminar lo obsoleto.

---

## 1. Identidad

- **Nombre:** Portfolio IngAamira (paquete `ingaamira.github.io`).
- **Descripción:** sitio personal/portfolio (Angular standalone + SSR) de Andrés Mira.
- **Repo:** https://github.com/IngAamira/ingaamira.github.io
- **Producción:** https://portfolio.ingaamira.com
- **Responsable:** IngAamira.
- **Estado:** EN DESARROLLO con despliegue en producción.

## 2. Estado actual

- **Verificado:** `npm run build` pasa en Angular 22; prerenderiza 4 rutas sin errores.
- **Última actualización:** 2026-10-17.
- **Último trabajo:** upgrade Angular 19 → 22 (escalonado, 3 commits), skills y agentes de OpenCode,
  CI con GitHub Actions, migración de tests a Vitest y actualización de `AGENTS.md`/`MEMORY.md`.
- **Bloqueos:** ninguno conocido.

## 3. Stack

| Área | Tecnología | Versión |
|---|---|---|
| Framework | Angular (standalone) | ^22.2 |
| SSR | `@angular/ssr` + Express | ^22.2 / ^4.18 |
| Lenguaje | TypeScript | ~6.0 |
| Reactividad | RxJS / zone.js (signals para estado UI) | ~7.8 / ~0.15 |
| i18n | `@ngx-translate/core` + `http-loader` | ^17 |
| Estilos | Tailwind CSS | ^3.4 |
| Testing | Vitest + jsdom (`@angular/build:unit-test`, sin navegador) | ^5 |
| Gestor de paquetes | npm (lockfile `package-lock.json`) | npm 11 |
| Runtime observado | Node | v26.10.0 |

Sin backend ni base de datos.

## 4. Estructura y entrypoints

- `src/main.ts` (browser), `src/main.server.ts` + `src/server.ts` (SSR/Express).
- `src/app/app.config.ts` — wiring de DI; `src/app/app.routes.ts` — rutas raíz.
- Capas: `src/domain`, `src/infrastructure`, `src/presentation` con alias `@domain`/`@infrastructure`/`@presentation`.
- Datos de proyectos hardcodeados en `src/infrastructure/datasources/project-local.datasource.ts`.
- Tooling IA: `.opencode/agents/*.md` y `.opencode/skills/<id>/SKILL.md`. CI: `.github/workflows/ci.yml`.

## 5. Arquitectura

Clean Architecture: componente → caso de uso (`domain/use-cases`) → repositorio (interfaz en `domain`,
implementación en `infrastructure`) → datasource local. Sin persistencia; el repositorio cachea en memoria.

## 6. Entornos

- **Desarrollo:** `npm start` (ng serve, SSR, puerto 4200).
- **SSR local:** `npm run build` + `npm run serve:ssr:ingaamira.github.io` (puerto `PORT` o 4000).
- **Producción:** Vercel (`vercel.json`), build `npm run build:prod`, todo reescrito a `/server/server.mjs`.
- **CI:** GitHub Actions (`.github/workflows/ci.yml`), Node 22.
- **Variables de entorno:** solo `PORT` (opcional). No hay secretos en el repo.

## 7. Datos y persistencia

Sin persistencia. Google Analytics (gtag) y metadatos/JSON-LD en `src/index.html`.
Sitemap y `robots.txt` en `src/` (copiados como assets).

## 8. Validación

| Validación | Comando | Estado |
|---|---|---|
| Build producción (type-check + prerender) | `npm run build` | PASA (≈30 s, 4 rutas prerenderizadas) |
| Tests (Vitest) | `npm test -- --watch=false` | PASA (2 archivos, 4 tests) |
| Lint / formato | — | No configurado |

## 9. Git

- Rama principal: `trunk`. Integración por Pull Request. Commits en inglés (Conventional Commits).
- CI: GitHub Actions (`.github/workflows/ci.yml`) — `npm ci` + `npm run build` + `npm test`.

## 10. Decisiones consolidadas

- **npm como gestor canónico**: se eliminó `pnpm-lock.yaml` (huérfano) y se generó `package-lock.json`.
  Motivo: `pnpm` no está instalado y scripts/`README.md`/`vercel.json` ya usaban npm.
- **Upgrade Angular 19 → 22 escalonado** (20 → 21 → 22, un commit por salto) con `npm run build` verde en cada uno.
  Motivo: resolver `npm audit` y volver a una versión soportada. Migraciones automáticas aplicadas:
  control flow (`@if`/`@for`), `provideServerRendering(withRoutes(...))`, `withXhr`, `DOCUMENT` a `@angular/core`.
- **CI con GitHub Actions** (`npm ci` + `build` + `test`).
- **Tests con Vitest** (`@angular/build:unit-test`, sin navegador), migrado desde Karma.
- **Skills y agentes de OpenCode** (V2) project-local, en español.
- Estilos con Tailwind (Bootstrap retirado).
- SEO centralizado por página vía `SeoService`.
- **`hreflang` sin URLs por idioma**: `SeoService` solo emite `rel="alternate"`/`hreflang` si la
  página pasa `alternates` con URLs distintas; hoy no se emiten (una sola URL por ruta, i18n en cliente).
- APIs de navegador encapsuladas en `BrowserService` (requisito de SSR/prerender).
- **`<html lang>` sincronizado con el idioma**: `TranslationService.setLanguage()` actualiza
  `document.documentElement.lang` vía `BrowserService` (SSR-safe).

## 11. Problemas y riesgos conocidos

- `npm audit`: **15 vulnerabilidades (13 altas, 2 moderadas)** tras el upgrade (antes 46, con 2 críticas).
  Todas requieren `npm audit fix --force` (breaking). Revisar de nuevo antes de futuros upgrades.
- Entorno con Node **v26**; Angular 22 soporta oficialmente 20/22/24. El build funciona, pero verificar en CI/otras máquinas.
- `tsconfig.json` mantiene `baseUrl` (los alias lo necesitan) con `ignoreDeprecations: "6.0"` para la
  deprecación de `baseUrl` rumbo a TS 7. Revisar al subir a TS 7.
- Los tests actuales cubren solo el dominio; faltan servicios y componentes.
- Prerender cubre solo `''`, `portfolio`, `resume`, `contact`; `**` se sirve en modo Server.

## 12. Pendientes

1. Ampliar tests: cubrir servicios (`SeoService`, `TranslationService`) y componentes (TestBed/jsdom).
2. SEO multilingüe real (URLs por idioma `/es/...` + SSR que respete el idioma), si se quiere indexar español.
3. Revisar `npm audit` tras futuros upgrades.

## 13. Siguiente paso

Ampliar tests (servicios y componentes) y revisar el SEO multilingüe (URLs por idioma).
