import { Provider } from '@angular/core';
import { TranslateLoader, TranslationObject } from '@ngx-translate/core';
import { Observable, of } from 'rxjs';

import en from '../../assets/i18n/en.json';
import es from '../../assets/i18n/es.json';

const TRANSLATIONS: Record<string, TranslationObject> = {
  en: en as unknown as TranslationObject,
  es: es as unknown as TranslationObject,
};

/**
 * Carga las traducciones desde los JSON empaquetados en el bundle.
 *
 * Necesario para SSR/prerender: con el loader HTTP el HTML prerenderizado salía con
 * las claves (`ABOUT_ME.TITLE`, `NAVIGATION.HOME`, ...) en lugar del texto traducido,
 * por lo que los buscadores no veían contenido. Al ser síncrono, el render ya tiene
 * las traducciones disponibles.
 */
export class BundledTranslateLoader implements TranslateLoader {
  getTranslation(lang: string): Observable<TranslationObject> {
    return of(TRANSLATIONS[lang] ?? TRANSLATIONS['en']);
  }
}

export function provideBundledTranslateLoader(): Provider {
  return { provide: TranslateLoader, useClass: BundledTranslateLoader };
}
