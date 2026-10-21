import { Injectable, inject, Inject, Optional, DOCUMENT } from '@angular/core';

import { Title, Meta } from '@angular/platform-browser';
import { BrowserService } from './browser.service';

import { OG_LOCALES, Locale, isLocale } from '@presentation/shared/i18n/locale';

@Injectable({ providedIn: 'root' })
export class SeoService {

  private title = inject(Title);
  private meta = inject(Meta);
  private browser = inject(BrowserService);

  constructor(@Optional() @Inject(DOCUMENT) private document: Document) {}

  setSEO(data: SeoData): void {
    this.setTitle(data.title);
    this.setStandardMeta(data.description);
    this.setOpenGraph(data);
    this.setTwitter(data);

    if (data.url) {
      this.setCanonical(data.url);
      this.setAlternateLinks(data.alternates);
    }
  }

  /** `og:locale` según el `<html lang>` fijado por el resolver de idioma (URL). */
  private ogLocale(): string {
    return OG_LOCALES[this.locale()] ?? OG_LOCALES['es'];
  }

  private ogAlternateLocale(): string {
    return this.locale() === 'en' ? OG_LOCALES['es'] : OG_LOCALES['en'];
  }

  private locale(): Locale {
    const lang = (this.document?.documentElement?.lang || 'es').split('-')[0];

    return isLocale(lang) ? lang : 'es';
  }

  private setTitle(title: string): void {
    this.title.setTitle(title);
  }

  private setStandardMeta(description: string): void {
    this.meta.updateTag({ name: 'description', content: description });
    this.meta.updateTag({ name: 'robots', content: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' });
  }

  private setOpenGraph(data: SeoData): void {
    this.meta.updateTag({ property: 'og:title', content: data.title });
    this.meta.updateTag({ property: 'og:description', content: data.description });
    this.meta.updateTag({ property: 'og:url', content: data.url || '' });
    this.meta.updateTag({ property: 'og:site_name', content: 'Portfolio IngAamira' });
    this.meta.updateTag({ property: 'og:locale', content: this.ogLocale() });
    this.meta.updateTag({ property: 'og:locale:alternate', content: this.ogAlternateLocale() });

    if (data.image) {
      this.meta.updateTag({ property: 'og:image', content: data.image });
      this.meta.updateTag({ property: 'og:image:secure_url', content: data.image });
      this.meta.updateTag({ property: 'og:image:width', content: '1200' });
      this.meta.updateTag({ property: 'og:image:height', content: '630' });
    }

    this.meta.updateTag({ property: 'og:type', content: data.type || 'website' });
  }

  private setTwitter(data: SeoData): void {
    this.meta.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
    this.meta.updateTag({ name: 'twitter:title', content: data.title });
    this.meta.updateTag({ name: 'twitter:description', content: data.description });
    this.meta.updateTag({ name: 'twitter:site', content: '@ingaamira' });

    if (data.image) {
      this.meta.updateTag({ name: 'twitter:image', content: data.image });
      this.meta.updateTag({ name: 'twitter:image:alt', content: data.title });
    }
  }

  private setCanonical(url: string): void {
    if (!this.document) return;

    const head = this.document.head;
    if (!head) return;

    let link = head.querySelector("link[rel='canonical']") as HTMLLinkElement | null;

    if (!link) {
      link = this.document.createElement('link');
      link.setAttribute('rel', 'canonical');
      head.appendChild(link);
    }

    link.setAttribute('href', url);
  }

  /**
   * Emits `hreflang` alternates only when the site actually serves a distinct URL per
   * language. This site uses a single URL per route with client-side language switching
   * and English SSR output, so advertising `en`/`es` versions pointing at the same URL
   * is misleading and ignored by search engines. When real per-language URLs exist, pass
   * them explicitly via `SeoData.alternates`.
   */
  private setAlternateLinks(alternates?: SeoAlternate[]): void {
    if (!this.document) return;

    const head = this.document.head;
    if (!head) return;

    // Remove existing alternate links
    const existingLinks = head.querySelectorAll("link[rel='alternate'][hreflang]");
    existingLinks.forEach(link => link.remove());

    if (!alternates || alternates.length === 0) return;

    alternates.forEach(({ hreflang, href }) => {
      const link = this.document.createElement('link');
      link.setAttribute('rel', 'alternate');
      link.setAttribute('hreflang', hreflang);
      link.setAttribute('href', href);
      head.appendChild(link);
    });
  }
}
