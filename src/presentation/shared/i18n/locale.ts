/**
 * Idiomas soportados y utilidades de detección para el SEO multilingüe por URL
 * (`/es/...`, `/en/...`). Ver skill `i18n-routing`.
 */

export const SUPPORTED_LOCALES = ['es', 'en'] as const;

export type Locale = (typeof SUPPORTED_LOCALES)[number];

/** Idioma por defecto (y destino de `x-default`): español, por prioridad local. */
export const DEFAULT_LOCALE: Locale = 'es';

/** Mapa `Locale` → etiqueta `og:locale`. */
export const OG_LOCALES: Record<Locale, string> = {
  es: 'es_CO',
  en: 'en_US',
};

export function isLocale(value: string | null | undefined): value is Locale {
  return value != null && (SUPPORTED_LOCALES as readonly string[]).includes(value);
}

/** Extrae el idioma del primer segmento de una ruta (`/es/portfolio` → `es`). */
export function localeFromPath(path: string | null | undefined): Locale | null {
  if (!path) return null;

  const segment = path.split('/').filter(Boolean)[0];

  return isLocale(segment) ? segment : null;
}

/**
 * Resuelve el idioma a partir de la cabecera `Accept-Language`, respetando los pesos `q=`.
 * Cae a `DEFAULT_LOCALE` cuando no hay coincidencia.
 */
export function localeFromAcceptLanguage(header: string | null | undefined): Locale {
  if (!header) return DEFAULT_LOCALE;

  const ranked = header
    .split(',')
    .map(part => {
      const [tag, ...params] = part.trim().split(';');
      const qParam = params.map(p => p.trim()).find(p => p.startsWith('q='));
      const parsedQ = qParam ? Number.parseFloat(qParam.slice(2)) : 1;
      const q = Number.isFinite(parsedQ) ? parsedQ : 1;

      return { tag: tag.trim().toLowerCase(), q };
    })
    .sort((a, b) => b.q - a.q);

  for (const { tag } of ranked) {
    const base = tag.split('-')[0];

    if (isLocale(base)) return base;
  }

  return DEFAULT_LOCALE;
}

/** Reemplaza el prefijo de idioma de una ruta: `replaceLocalePrefix('/es/x', 'en')` → `/en/x`. */
export function replaceLocalePrefix(path: string, locale: Locale): string {
  const clean = path.startsWith('/') ? path.slice(1) : path;
  const withoutLocale = isLocale(clean.split('/')[0]) ? clean.split('/').slice(1).join('/') : clean;

  return withoutLocale ? `/${locale}/${withoutLocale}` : `/${locale}`;
}
