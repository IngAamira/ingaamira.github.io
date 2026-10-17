---
name: SSR Safety
description: Use when touching browser APIs, component lifecycle, services or anything that runs during prerender. Explains how SSR/prerender works here and why direct window/document access breaks the build.
---

# SSR / prerender (crítico)

La app usa `@angular/ssr`. El **prerender ejecuta los componentes en Node durante `npm run build`**.
Acceder a APIs de navegador fuera del navegador **rompe el build**.

## Modos de render

`src/app/app.routes.server.ts`:

- Prerender: `''`, `portfolio`, `resume`, `contact`.
- `**` → `RenderMode.Server` (Express en runtime).

## Regla de oro

**Nunca** usar `window`, `document`, `localStorage`, `sessionStorage`, `navigator` ni `location`
directamente. Inyectar `BrowserService`
(`src/presentation/shared/services/browser.service.ts`), que devuelve `null` fuera del navegador
y expone `isBrowser()`, `window`, `document`, `localStorage`, `open()`, `scrollToTop()`, `gtag()`, `lang`.

```ts
private browser = inject(BrowserService);
if (this.browser.isBrowser()) { /* ... */ }
```

No acceder a APIs de navegador en constructores, `ngOnInit`, `computed`, ni a nivel de módulo.

## Piezas de SSR

- `src/server.ts` — servidor Express (`AngularNodeAppEngine`), sirve `/browser` y renderiza la app; puerto `PORT` o 4000.
- `src/app/app.config.server.ts` — `provideServerRendering(withRoutes(serverRoutes))`.
- `src/main.server.ts` — bootstrap del servidor.

## Verificación

`npm run build` falla si el prerender toca APIs de navegador. Ejecutarlo tras cualquier cambio en
servicios/componentes. Ver skill `verify-build`.
