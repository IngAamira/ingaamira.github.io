import { inject } from '@angular/core';
import { CanActivateFn, CanMatchFn, ResolveFn, Router } from '@angular/router';
import { REQUEST } from '@angular/core';

import { TranslateService } from '@ngx-translate/core';

import {
  Locale,
  isLocale,
  localeFromAcceptLanguage,
} from '@presentation/shared/i18n/locale';
import { BrowserService } from '@presentation/shared/services/browser.service';
import { TranslationService } from '@presentation/shared/services/translation.service';

/**
 * Solo deja pasar la ruta `:lang` cuando el segmento es un idioma soportado
 * (`es`/`en`). Así `/portfolio` cae al `**` (404) en vez de tratarse como idioma.
 */
export const localeMatchGuard: CanMatchFn = (_route, segments) => isLocale(segments[0]?.path);

/**
 * Fija el idioma de la UI (y `<html lang>`) desde la URL **antes** de renderizar
 * los componentes de la ruta. Resolvers corren antes de la activación, por lo que
 * SSR/prerender ya emiten el texto en el idioma correcto.
 */
export const localeResolver: ResolveFn<Locale> = route => {
  const lang = route.paramMap.get('lang')!;
  const translationService = inject(TranslationService);

  translationService.setLanguage(lang);

  return isLocale(lang) ? lang : 'en';
};

/**
 * Fallback de `/` en cliente (el redirect real es un 302 en `server.ts`):
 * redirige al idioma según `Accept-Language` (SSR) o el navegador (cliente).
 */
export const rootLocaleRedirectGuard: CanActivateFn = () => {
  const request = inject(REQUEST, { optional: true });
  const browser = inject(BrowserService);
  const router = inject(Router);

  const header = request !== null ? request.headers.get('accept-language') : null;
  const locale = localeFromAcceptLanguage(header ?? browser.navigator?.language ?? null);

  return router.createUrlTree(['/', locale]);
};
