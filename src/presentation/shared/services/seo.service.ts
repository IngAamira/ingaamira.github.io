import { Injectable, inject } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { BrowserService } from './browser.service';

@Injectable({ providedIn: 'root' })
export class SeoService {

  private title = inject(Title);
  private meta = inject(Meta);
  private browser = inject(BrowserService);

  setSEO(data: SeoData): void {
    this.setTitle(data.title);
    this.setStandardMeta(data.description);
    this.setOpenGraph(data);
    this.setTwitter(data);

    if (data.url) {
      this.setCanonical(data.url);
    }
  }

  private setTitle(title: string): void {
    this.title.setTitle(title);
  }

  private setStandardMeta(description: string): void {
    this.meta.updateTag({ name: 'description', content: description });
    this.meta.updateTag({ name: 'robots', content: 'index, follow' });
  }

  private setOpenGraph(data: SeoData): void {
    this.meta.updateTag({ property: 'og:title', content: data.title });
    this.meta.updateTag({ property: 'og:description', content: data.description });
    this.meta.updateTag({ property: 'og:url', content: data.url });

    if (data.image) {
      this.meta.updateTag({ property: 'og:image', content: data.image });
    }

    this.meta.updateTag({ property: 'og:type', content: data.type || 'website' });
  }

  private setTwitter(data: SeoData): void {
    this.meta.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
    this.meta.updateTag({ name: 'twitter:title', content: data.title });
    this.meta.updateTag({ name: 'twitter:description', content: data.description });

    if (data.image) {
      this.meta.updateTag({ name: 'twitter:image', content: data.image });
    }
  }

  private setCanonical(url: string): void {
    if (!this.browser.isBrowser()) return;

    const documentRef = this.browser.document;
    if (!documentRef) return;

    const head = documentRef.head;

    let link = head.querySelector("link[rel='canonical']") as HTMLLinkElement | null;

    if (!link) {
      link = documentRef.createElement('link');
      link.setAttribute('rel', 'canonical');
      head.appendChild(link);
    }

    link.setAttribute('href', url);
  }
}
