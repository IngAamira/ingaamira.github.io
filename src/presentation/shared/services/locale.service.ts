import { Injectable, inject, PLATFORM_ID, REQUEST } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Router } from '@angular/router';

import {
  DEFAULT_LOCALE,
  Locale,
  SUPPORTED_LOCALES,
  localeFromPath,
  replaceLocalePrefix,
} from '@presentation/shared/i18n/locale';
import { BrowserService } from '@presentation/shared/services/browser.service';

const ORIGIN = 'https://portfolio.ingaamira.com';

/**
 * Idioma actual derivado de la URL (fuente de verdad en cliente y en SSR/prerender).
 * No depende de `localStorage` ni del navegador para decidir el idioma.
 */
@Injectable({ providedIn: 'root' })
export class LocaleService {
  private platformId = inject(PLATFORM_ID);
  private request = inject(REQUEST, { optional: true });
  private browser = inject(BrowserService);
  private router = inject(Router);

  /** Idioma de la petición/ruta actual, con fallback a `DEFAULT_LOCALE`. */
  get current(): Locale {
    return localeFromPath(this.currentPath) ?? DEFAULT_LOCALE;
  }

  private get currentPath(): string | null {
    if (isPlatformBrowser(this.platformId)) {
      return this.browser.location?.pathname ?? null;
    }

    const url = this.request?.url;

    if (!url) return null;

    try {
      return new URL(url).pathname;
    } catch {
      return url;
    }
  }

  /** URL absoluta canónica para una ruta de la página (p. ej. `url('')`, `url('/portfolio')`). */
  url(path = ''): string {
    return `${ORIGIN}/${this.current}${this.normalizePath(path)}`;
  }

  /**
   * Alternates `hreflang` recíprocos + `x-default` (→ `DEFAULT_LOCALE`) para una ruta de página.
   */
  alternates(path = ''): SeoAlternate[] {
    const clean = this.normalizePath(path);

    return [
      ...SUPPORTED_LOCALES.map(locale => ({
        hreflang: locale,
        href: `${ORIGIN}/${locale}${clean}`,
      })),
      {
        hreflang: 'x-default',
        href: `${ORIGIN}/${DEFAULT_LOCALE}${clean}`,
      },
    ];
  }

  /** Navega a la misma página en otro idioma (redirect interno, sin recargar). */
  switchTo(locale: Locale): void {
    const currentUrl = isPlatformBrowser(this.platformId)
      ? `${this.browser.location?.pathname ?? '/'}${this.browser.location?.search ?? ''}`
      : `/${this.current}`;

    const target = replaceLocalePrefix(currentUrl, locale);

    if (target === currentUrl) return;

    void this.router.navigateByUrl(target);
  }

  private normalizePath(path: string): string {
    if (!path || path === '/') return '';
    return path.startsWith('/') ? path : `/${path}`;
  }
}
