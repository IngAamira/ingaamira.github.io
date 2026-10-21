# MEMORY.md

Memoria operativa del proyecto. Describe **dónde está** el proyecto, decisiones, problemas y pendientes.
Las reglas de trabajo permanentes están en `AGENTS.md`.

Mantener breve. Verificar contra el código/configuración real; no guardar secretos. Eliminar lo obsoleto.

---

## 1. Identidad

- **Nombre:** Portfolio IngAamira (paquete `portfolio-ingaamira-lab`).
- **Descripción:** sitio personal/portfolio (Angular standalone + SSR) de Andrés Mira.
- **Repo:** https://github.com/IngAamira/portfolio-ingaamira-lab
- **Producción:** https://portfolio.ingaamira.com
- **Responsable:** IngAamira.
- **Estado:** EN DESARROLLO con despliegue en producción.

## 2. Estado actual

- **Verificado:** `npm run build` pasa; prerender de **8 rutas** (`/es`,`/en` × home/portfolio/resume/contact)
  con texto traducido real, canonical/hreflang por idioma y 0 claves filtradas.
- **Última actualización:** 2026-10-21.
- **Último trabajo:** **Plan Fase 2 (alineación visual)**: acento recoloreado a azul de marca
  (rampa derivada de `#005CBB`: `accent` #2b8fe0, `soft` #93cbf4, `dim` #005CBB) en
  `tailwind.config.js`; gradientes violeta/cyan de identidad eliminados (solo hints
  `accent-dim`); foco/selection azules. Superficies dark (`ink`) intactas (negro del plan).
  Tipografía Inter ya en tokens. Anteriores: Fases 1/3/4 (PR #43).
- **Bloqueos:** ver que el deploy de Vercel recoja `trunk` (producción aún mostraba claves crudas).

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
- **SSR local:** `npm run build` + `npm run serve:ssr:portfolio-ingaamira-lab` (puerto `PORT` o 4000).
- **Producción:** Vercel, proyecto **`portfolio-ingaamira-lab`** — build `npm run build:prod`;
  `vercel.json` reescribe todo a `/server/server.mjs` (SSR) y sitemap/robots a `/browser`.
  El dominio `portfolio.ingaamira.com` ya responde desde Vercel (el repo de GitHub se renombró
  al mismo nombre). El destino GitHub Pages fue retirado: rama `gh-pages` eliminada, scripts
  `build:ghpages`/`build:deploy` con `ngh` borrados. Hoy el proyecto no tiene deployment
  (404 `DEPLOYMENT_NOT_FOUND`): falta Redeploy tras mergear los PRs abiertos.
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
- **Traducciones empaquetadas** (`provideBundledTranslateLoader`): el loader HTTP dejaba el HTML
  prerenderizado con las claves; ahora SSR/prerender renderiza el texto. Se quitó `provideHttpClient(withXhr())`.
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

1. Verificar en producción (Vercel): 302 de `/`, `/es`/`/en` prerenderizadas, hreflang y sitemap.
2. Rediseño (design system oscuro tech) y contenido (servicios, casos de estudio, blog, testimonios).
3. SEO local (GBP, NAP/citas, `LocalBusiness`) y rendimiento (Inter self-host, CWV).
4. Ampliar tests (servicios/componentes) y revisar `npm audit` tras futuros upgrades.

## 13. Siguiente paso

## 13. Siguiente paso

Repo **renombrado a `portfolio-ingaamira-lab`** (paquete, `angular.json`, `vercel.json`,
scripts, docs; el remote de GitHub ya apunta al nombre nuevo). El dominio
`portfolio.ingaamira.com` ya responde desde Vercel. Pendiente del Owner: mergear los PRs
de rename/limpieza, fijar en Vercel **Production Branch = `trunk`** + Redeploy (hoy `/`
responde **404 `DEPLOYMENT_NOT_FOUND`**: no hay deployment) y desactivar GitHub Pages en
Settings (Source: None, sin custom domain). Verificación: 302 de `/`, prerender de
`/es`/`/en` sin claves crudas, CTA diagnóstico, `sitemap.xml`/`robots.txt`. Después:
logo hexagonal IL (Fase 2) y contenido (blog/testimonios); doc de medición unificada va
en el repo de contenido.

## 14. Plan activo: `.opencode/plan/portfolio-ingaamira.md` (2026-10-21)

El plan vigente reemplaza el de rediseño (2026-10-17; su fichero ya no existe). Rol de la web:
1) clientes, 2) marca personal (andres.miram), 3) empleo. Idioma default **ES**, literal EN.

- **Fase 0** estabilización: ✅ (PRs #40–42).
- **Fase 1** fixes técnicos (GA4, footer, lang, demos 🌐, medición): ✅ (GA4/footer/lang/demos;
  doc de medición unificada vive en el repo de contenido, no aquí).
- **Fase 3** copy por audiencia + CTA diagnóstico: ✅ (home titular negocio, CTA `/contact` con
  mensaje exacto; proyectos ya en doble capa: resumen de negocio + chips de stack).
- **Fase 4** cadena de casos Eye Care Hub ↔ Opticarlo's ↔ Instagram: ✅ lado portafolio
  (destacado con narrativa de negocio, sin cifras, link demo).
- **Fase 2** alineación visual: ⚠️ parado — la base dark tech (cyan/violeta info) ya está
  mergeada; pendiente decidir: paleta azul `#005CBB`/blanco/negro y logo hexagonal IL.
- **Reglas:** sin cifras inventadas; `/resume` íntegro; mensaje WhatsApp exacto:
  *"Hola Andrés, quiero agendar el diagnóstico gratuito de 15 min de mi proceso."*
