import { Injectable, inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser, DOCUMENT } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class BrowserService {

  private platformId = inject(PLATFORM_ID);
  private doc = inject(DOCUMENT);

  isBrowser(): boolean {
    return isPlatformBrowser(this.platformId);
  }

  get window(): Window | null {
    return this.isBrowser() ? window : null;
  }

  get document(): Document | null {
    return this.isBrowser() ? this.doc : null;
  }

  get navigator(): Navigator | null {
    return this.isBrowser() ? window.navigator : null;
  }

  get localStorage(): Storage | null {
    return this.isBrowser() ? window.localStorage : null;
  }

  get sessionStorage(): Storage | null {
    return this.isBrowser() ? window.sessionStorage : null;
  }

  get location(): Location | null {
    return this.isBrowser() ? window.location : null;
  }

  open(url: string, target: string = '_blank'): void {
    if (!this.isBrowser()) return;

    window.open(url, target, 'noopener,noreferrer');
  }

  scrollToTop(): void {
    if (!this.isBrowser()) return;

    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  gtag(
    eventName: string,
    params?: Record<string, any>
  ): void {
    if (!this.isBrowser()) return;

    const win = window as any;

    if (typeof win.gtag === 'function') {
      win.gtag('event', eventName, params);
    }
  }

  get lang(): string {
    const doc = this.document;
    return doc?.documentElement?.lang || 'en';
  }
}
