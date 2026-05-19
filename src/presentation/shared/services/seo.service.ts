import { Injectable, inject, Inject, Optional } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Title, Meta } from '@angular/platform-browser';
import { BrowserService } from './browser.service';

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
      this.setAlternateLinks(data.url);
    }
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
    this.meta.updateTag({ property: 'og:locale', content: 'es_CO' });
    this.meta.updateTag({ property: 'og:locale:alternate', content: 'en_US' });

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

  private setAlternateLinks(url: string): void {
    if (!this.document) return;

    const head = this.document.head;
    if (!head) return;

    // Remove existing alternate links
    const existingLinks = head.querySelectorAll("link[rel='alternate'][hreflang]");
    existingLinks.forEach(link => link.remove());

    // Add new alternate links for the current URL
    const hreflangs = [
      { lang: 'en', href: url },
      { lang: 'es', href: url },
      { lang: 'x-default', href: url }
    ];

    hreflangs.forEach(({ lang, href }) => {
      const link = this.document.createElement('link');
      link.setAttribute('rel', 'alternate');
      link.setAttribute('hreflang', lang);
      link.setAttribute('href', href);
      head.appendChild(link);
    });
  }
}
