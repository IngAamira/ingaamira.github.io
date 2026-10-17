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

- **Verificado:** `npm install` y `npm run build` funcionan; el build prerenderiza 4 rutas sin errores.
- **Última actualización:** 2026-10-17.
- **Último trabajo:** canonización del gestor de paquetes a **npm**, creación de `AGENTS.md`/`MEMORY.md`,
  revisión de `npm audit` y corrección de la estructura en `README.md`.
- **Bloqueos:** ninguno conocido.

## 3. Stack

| Área | Tecnología | Versión |
|---|---|---|
| Framework | Angular (standalone) | ^19.2 |
| SSR | `@angular/ssr` + Express | ^19.2 / ^4.18 |
| Lenguaje | TypeScript | ~5.7 |
| i18n | `@ngx-translate/core` + `http-loader` | ^17 |
| Estilos | Tailwind CSS | ^3.4 |
| Testing | Karma + Jasmine (sin specs) | 6.4 / 5.6 |
| Gestor de paquetes | npm (lockfile `package-lock.json`) | npm 11 |
| Runtime observado | Node | v26.10.0 |

Sin backend ni base de datos.

## 4. Estructura y entrypoints

- `src/main.ts` (browser), `src/main.server.ts` + `src/server.ts` (SSR/Express).
- `src/app/app.config.ts` — wiring de DI; `src/app/app.routes.ts` — rutas raíz.
- Capas: `src/domain`, `src/infrastructure`, `src/presentation` con alias `@domain`/`@infrastructure`/`@presentation`.
- Datos de proyectos hardcodeados en `src/infrastructure/datasources/project-local.datasource.ts`.

## 5. Arquitectura

Clean Architecture: componente → caso de uso (`domain/use-cases`) → repositorio (interfaz en `domain`,
implementación en `infrastructure`) → datasource local. Sin persistencia; el repositorio cachea en memoria.

## 6. Entornos

- **Desarrollo:** `npm start` (ng serve, SSR, puerto 4200).
- **SSR local:** `npm run build` + `npm run serve:ssr:ingaamira.github.io` (puerto `PORT` o 4000).
- **Producción:** Vercel (`vercel.json`), build `npm run build:prod`, todo reescrito a `/server/server.mjs`.
- **Variables de entorno:** solo `PORT` (opcional). No hay secretos en el repo.

## 7. Datos y persistencia

Sin persistencia. Google Analytics (gtag) y metadatos/JSON-LD en `src/index.html`.
Sitemap y `robots.txt` en `src/` (copiados como assets).

## 8. Validación

| Validación | Comando | Estado |
|---|---|---|
| Build producción (type-check + prerender) | `npm run build` | PASA (98 s, 4 rutas prerenderizadas) |
| Tests | `npm test` | Karma configurado, **0 specs** |
| Lint / formato | — | No configurado |

## 9. Git

- Rama principal: `trunk`. Integración por Pull Request. Commits en inglés (Conventional Commits).
- Sin CI/CD en el repo (no hay `.github/`).

## 10. Decisiones consolidadas

- **npm como gestor canónico**: se eliminó `pnpm-lock.yaml` (huérfano) y se generó `package-lock.json`.
  Motivo: `pnpm` no está instalado y scripts/`README.md`/`vercel.json` ya usaban npm.
- Estilos con Tailwind (Bootstrap retirado).
- SEO centralizado por página vía `SeoService`.
- APIs de navegador encapsuladas en `BrowserService` (requisito de SSR/prerender).

## 11. Problemas y riesgos conocidos

- `npm audit`: 46 vulnerabilidades (2 críticas, 29 altas) en dependencias transitivas del toolchain
  (tar, serialize-javascript, vite, webpack-dev-middleware, postcss, uuid…). Sin evaluar explotabilidad
  (sitio estático, sin backend). **Decisión (2026-10-17):** no aplicar `npm audit fix --force`, porque exige
  subir `@angular/cli`/`@angular-devkit/build-angular` a 21/22 (breaking). Requiere planificar un upgrade mayor aparte.
- Entorno con Node v26; Angular 19 soporta oficialmente 18/20/22. El build funciona, pero verificar si aparecen
  problemas en otras máquinas/CI.
- Prerender cubre solo `''`, `portfolio`, `resume`, `contact`; `**` se sirve en modo Server.
- `README.md` tiene una sección de estructura desactualizada respecto al código real.

## 12. Pendientes

1. Planificar un upgrade mayor de Angular (19 → 21/22) que resuelva las vulnerabilidades de `npm audit`;
   exige evaluar breaking changes y revalidar el build.
2. Tests: la infraestructura Karma existe pero no hay specs.

## 13. Siguiente paso

Planificar el upgrade mayor de Angular para resolver `npm audit` (evaluar breaking changes y revalidar `npm run build`).
