import { REQUEST, inject } from '@angular/core';
import {
  CanActivateFn,
  CanMatchFn,
  ResolveFn,
  Router,
  type UrlSegment,
} from '@angular/router';

import {
  DEFAULT_LOCALE,
  isLocale,
  localeFromAcceptLanguage,
} from '@presentation/shared/i18n/locale';
import { BrowserService } from '@presentation/shared/services/browser.service';
import { TranslationService } from '@presentation/shared/services/translation.service';

/**
 * Solo deja pasar la ruta `:lang` cuando el segmento es un idioma soportado
 * (`es`/`en`). Así `/portfolio` cae al `**` (404) en vez de tratarse como idioma.
 */
export const localeMatchGuard: CanMatchFn = (_route, segments: UrlSegment[]) =>
  isLocale(segments[0]?.path);

/**
 * Fija el idioma de la UI (y `<html lang>`) desde la URL **antes** de renderizar
 * los componentes de la ruta. Los resolvers corren antes de la activación, por lo
 * que SSR/prerender ya emiten el texto en el idioma correcto.
 */
export const localeResolver: ResolveFn<string> = route => {
  const lang: string | null = route.paramMap.get('lang');
  const locale = isLocale(lang) ? lang : DEFAULT_LOCALE;

  inject(TranslationService).setLanguage(locale);

  return locale;
};

/**
 * Fallback de `/` en cliente (el redirect real es un 302 en `server.ts`):
 * redirige al idioma según `Accept-Language` (SSR) o el navegador (cliente).
 */
export const rootLocaleRedirectGuard: CanActivateFn = () => {
  const request = inject(REQUEST, { optional: true });
  const browser = inject(BrowserService);
  const router = inject(Router);

  const header = request?.headers.get('accept-language');
  const locale = localeFromAcceptLanguage(header ?? browser.navigator?.language);

  return router.createUrlTree(['/', locale]);
};
