import { PrerenderFallback, RenderMode, ServerRoute } from '@angular/ssr';

import { SUPPORTED_LOCALES } from '@presentation/shared/i18n/locale';

const localeParams = async () => SUPPORTED_LOCALES.map(lang => ({ lang }));

/* Las rutas con `:lang` usan `PrerenderFallback.None`: solo responden las URLs
 * realmente prerenderizadas (`/es`, `/en` y sus subrutas, servidas por el CDN).
 * Con el fallback por defecto (`Server`) cualquier segmento único desconocido
 * (`/resume`, `/foo`) casaba con `:lang` y devolvía 200 con la página de 404
 * (soft-404). Con `None`, esas URLs siguen cayendo en el `**` de abajo. */
export const serverRoutes: ServerRoute[] = [
  /* `/` se sirve en server (`server.ts` hace el 302 por `Accept-Language`). */
  {
    path: '',
    renderMode: RenderMode.Server
  },
  {
    path: ':lang',
    renderMode: RenderMode.Prerender,
    fallback: PrerenderFallback.None,
    getPrerenderParams: localeParams
  },
  {
    path: ':lang/portfolio',
    renderMode: RenderMode.Prerender,
    fallback: PrerenderFallback.None,
    getPrerenderParams: localeParams
  },
  {
    path: ':lang/resume',
    renderMode: RenderMode.Prerender,
    fallback: PrerenderFallback.None,
    getPrerenderParams: localeParams
  },
  {
    path: ':lang/contact',
    renderMode: RenderMode.Prerender,
    fallback: PrerenderFallback.None,
    getPrerenderParams: localeParams
  },
  /* Rutas no encontradas (p. ej. `/es/loquesea`) → 404 real, no un soft-404
   * con status 200. Con la SSR activa en Vercel esta es la única respuesta
   * que ven los crawlers para URLs desconocidas. */
  {
    path: '**',
    renderMode: RenderMode.Server,
    status: 404
  }
];
