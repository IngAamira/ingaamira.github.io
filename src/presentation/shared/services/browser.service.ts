import { Injectable, inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({ providedIn: 'root' })
export class BrowserService {

  private platformId = inject(PLATFORM_ID);

  isBrowser(): boolean {
    return isPlatformBrowser(this.platformId);
  }

  get window(): Window | null {
    return this.isBrowser() ? window : null;
  }

  get document(): Document | null {
    return this.isBrowser() ? document : null;
  }

  get localStorage(): Storage | null {
    return this.isBrowser() ? localStorage : null;
  }

}
