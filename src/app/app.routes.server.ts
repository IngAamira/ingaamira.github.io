import { RenderMode, ServerRoute } from '@angular/ssr';

import { SUPPORTED_LOCALES } from '@presentation/shared/i18n/locale';

const localeParams = async () => SUPPORTED_LOCALES.map(lang => ({ lang }));

export const serverRoutes: ServerRoute[] = [
  /* `/` se sirve en server (`server.ts` hace el 302 por `Accept-Language`). */
  {
    path: '',
    renderMode: RenderMode.Server
  },
  {
    path: ':lang',
    renderMode: RenderMode.Prerender,
    getPrerenderParams: async () => SUPPORTED_LOCALES.map(lang => ({ lang }))
  },
  {
    path: ':lang/portfolio',
    renderMode: RenderMode.Prerender,
    getPrerenderParams: async () => SUPPORTED_LOCALES.map(lang => ({ lang }))
  },
  {
    path: ':lang/resume',
    renderMode: RenderMode.Prerender,
    getPrerenderParams: async () => SUPPORTED_LOCALES.map(lang => ({ lang }))
  },
  {
    path: ':lang/contact',
    renderMode: RenderMode.Prerender,
    getPrerenderParams: async () => SUPPORTED_LOCALES.map(lang => ({ lang }))
  },
  {
    path: '**',
    renderMode: RenderMode.Server
  }
];
