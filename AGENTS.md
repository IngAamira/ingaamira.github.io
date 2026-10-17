# AGENTS.md

Reglas de trabajo para agentes de IA en este repositorio.

Objetivo: entender rápido cómo está construido el proyecto y no romperlo.
El estado operativo (qué se está haciendo, decisiones, pendientes) vive en `MEMORY.md`.

## Qué es este proyecto

- Portfolio personal de IngAamira: **Angular 22 standalone** (TypeScript 6, zone.js) + **SSR/prerender** (`@angular/ssr`).
- **No hay backend.** Los proyectos se cargan desde datos hardcodeados en el repositorio.
- Dominio de producción: `https://portfolio.ingaamira.com`.
- UI en Tailwind CSS (v3). No se usa Bootstrap (el `TagType.BOOTSTRAP` es solo una etiqueta de skill).

## Comandos

```bash
npm start            # ng serve (dev server, SSR). Puerto 4200
npm run build        # producción (defaultConfiguration=production). Type-check + prerender
npm run build:prod   # build con base-href=/ y deploy-url=/
npm test             # Vitest (sin navegador). Ver Validación
npm run serve:ssr:ingaamira.github.io   # sirve dist/.../server/server.mjs (PORT o 4000)
```

Gestor de paquetes: **npm** (hay `package-lock.json` y `npm` está instalado). No
reintroducir `pnpm-lock.yaml`; los scripts, `README.md` y `vercel.json` usan `npm`.
`pnpm` no está instalado en el entorno.

## Validación

- **No hay lint ni formatter configurados** (sin ESLint/Prettier; solo `.editorconfig`).
- Tests con **Vitest + jsdom** (`@angular/build:unit-test`, sin navegador). Correr: `npm test -- --watch=false`.
- La verificación real es el build:

```bash
npm run build
```

Este build falla ante: errores de TypeScript (`strict` + `strictTemplates`), y errores
de **prerender** (ver SSR). Úsalo antes de dar una tarea por terminada.

## Arquitectura (Clean Architecture)

Alias de import en `tsconfig.json` — úsalos, no rutas relativas profundas:

- `@domain/*` → `src/domain` (modelos, interfaces de repositorio, casos de uso)
- `@infrastructure/*` → `src/infrastructure` (datasources, implementaciones de repositorio)
- `@presentation/*` → `src/presentation` (features y shared: componentes, servicios, tipos)

Regla de dependencia: `presentation → domain ← infrastructure`. El dominio no depende de Angular/UI.

Puntos clave:

- `src/app/app.config.ts` — wiring de DI. Aquí se inyectan `ProjectDatasource → ProjectLocalDatasource`
  y `ProjectRepository → ProjectRepositoryImpl`.
- `src/presentation/features/portfolio/portfolio.routes.ts` — rutas lazy (`home`, `portfolio`, `resume`, `contact`).
- **Datos de proyectos:** se editan a mano en `src/infrastructure/datasources/project-local.datasource.ts`.
  Las etiquetas/filtros viven en el enum `src/domain/models/tag.model.ts`.
- El filtrado combina etiquetas con **AND** (`tags.every(...)`), no OR.
- El repositorio cachea en memoria los proyectos tras la primera carga.

## SSR / prerender (gotcha principal)

`src/app/app.routes.server.ts` prerenderiza `''`, `portfolio`, `resume`, `contact` y sirve `**` con `RenderMode.Server`.
El prerender **ejecuta los componentes en Node durante el build**.

- Nunca uses `window`, `document`, `localStorage`, `navigator` directamente.
  Inyéctalo a través de `BrowserService` (`src/presentation/shared/services/browser.service.ts`),
  que ya devuelve `null` fuera del navegador.
- Acceder a APIs de navegador en constructores/`ngOnInit`/carga de módulo rompe `npm run build`.

## i18n

- `@ngx-translate` con JSON en `src/assets/i18n/{en,es}.json` (prefijo `/assets/i18n/`).
- Para añadir un idioma hay que tocar **varios** sitios: el JSON nuevo, `addLangs` en
  `src/app/app.component.ts` y `supportedLanguages` (más `pdfPaths`) en
  `src/presentation/shared/services/translation.service.ts`.
- El idioma se guarda en `localStorage['lang']` (solo navegador).

## Estilo y convenciones

- Tailwind para estilos; clases utilitarias en los templates `.html`.
- `.editorconfig`: 2 espacios, comillas simples en `.ts`, newline final, sin espacios al final.
- Muchas interfaces compartidas son **globales** en `src/presentation/shared/types/global.d.ts`
  (no requieren import; solo hay que tenerlas declaradas allí).
- Control flow `@if` / `@for` (migrado en Angular 21); **no** usar `*ngIf` / `*ngFor`. Estado de UI con signals.
- Los schematics tienen `skipTests: true`: `ng generate` no crea archivos de test.
- `tsconfig.json` conserva `baseUrl` (los alias de import lo necesitan) con `ignoreDeprecations: "6.0"` (deprecación de `baseUrl` rumbo a TS 7).
- Presupuesto de build: `anyComponentStyle` falla por encima de **8 kB** (aviso a 4 kB).

## SEO

- Metadatos globales y JSON-LD en `src/index.html`; Google Analytics también allí.
- Por página se usa `SeoService.setSEO(...)`. Las URLs canónicas están **hardcodeadas** a
  `https://portfolio.ingaamira.com/...`, así que hay que actualizarlas al añadir/renombrar rutas.
- `hreflang` solo se emite si se pasan `alternates` con URLs distintas por idioma; hoy no hay
  (una URL por ruta con i18n en cliente), así que no se emiten alternates.
- `src/sitemap.xml` y `src/robots.txt` se copian como assets: actualízalos al cambiar rutas.
- Dirección: SEO multilingüe por URL (`/es`, `/en`) + SEO local (Medellín, Rionegro, La Ceja, El Retiro);
  ver skills `i18n-routing`, `local-seo` y `structured-data`.

## Deploy

- **Vercel** es el destino principal (`vercel.json`): build `npm run build:prod`, salida
  `dist/ingaamira.github.io`, y reescribe todo a `/server/server.mjs` (SSR).
- Existe además `npm run build:ghpages` (GitHub Pages, rama `gh-pages`) que usa `ngh`,
  pero **`ngh` no está en `devDependencies`**; requeriría instalarlo. Es una vía secundaria.

## Git

- Rama principal: **`trunk`** (no `main`). Los cambios llegan por Pull Request (`Merge pull request #...`).
- Mensajes de commit en inglés, estilo Conventional Commits (`feat:`, `fix:`, `refactor:`, `docs:`).

## CI

- GitHub Actions (`.github/workflows/ci.yml`): `npm ci` + `npm run build` + `npm test` en push a `trunk` y en PRs.
- CI usa Node 22.

## Agentes y skills de OpenCode (V2)

- Config project-local: agentes en `.opencode/agents/*.md` y skills en `.opencode/skills/<id>/SKILL.md`.
- Agentes: `architect`, `developer`, `designer`, `content`, `qa`, `seo`, `local-seo`, `performance`, `analytics`, `devops-release`, `accessibility`.
- Skills: `angular-clean-architecture`, `tailwind-ui`, `design-system`, `i18n-ngx-translate`, `i18n-routing`, `ssr-safety`, `seo-portfolio`, `structured-data`, `local-seo`, `content-strategy`, `performance-web-vitals`, `analytics-ga4`, `deploy-vercel`, `verify-build`.
- No hay `opencode.json` en el repo (no es necesario para usar agentes/skills).
