import { Injectable, inject, Inject, DOCUMENT } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { BehaviorSubject } from 'rxjs';

import { BrowserService } from '@presentation/shared/services/browser.service';

@Injectable({ providedIn: 'root' })
export class TranslationService {

  private translate = inject(TranslateService);
  private browser = inject(BrowserService);
  /** `DOCUMENT` funciona también en SSR/prerender; `BrowserService.document` es `null` fuera del navegador. */
  private document = inject(DOCUMENT);

  private currentLanguageSubject = new BehaviorSubject<string>('es');
  currentLanguage$ = this.currentLanguageSubject.asObservable();

  private supportedLanguages = ['en', 'es'];

  private pdfPaths: Record<string, string> = {
    en: 'assets/docs/CV_Dev_en.pdf',
    es: 'assets/docs/CV_Dev_es.pdf'
  };

  constructor() {
    this.initializeTranslation();
  }

  /**
   * El idioma viene de la URL (`/es/...`, `/en/...`, fijado por `localeResolver`).
   * Aquí solo se define el fallback: no se fuerza un idioma inicial.
   */
  private initializeTranslation(): void {
    this.translate.setDefaultLang('en');
  }

  /** Cambia el idioma y devuelve el Observable de `use()` (lo espera `localeResolver`). */
  setLanguage(lang: string): void {
    const locale = this.isSupported(lang) ? lang : 'en';

    this.translate.use(locale);
    this.currentLanguageSubject.next(locale);
    this.updateDocumentLang(locale);

    const localStorageRef = this.browser.localStorage;
    if (localStorageRef) {
      localStorageRef.setItem('lang', locale);
    }
  }

  private updateDocumentLang(lang: string): void {
    this.document.documentElement.lang = lang;
  }

  changeLanguage(lang: string): void {
    this.setLanguage(lang);
  }

  private isSupported(lang: string): boolean {
    return this.supportedLanguages.includes(lang);
  }

  getPdfPath(): string {
    const lang = this.getCurrentLanguage();
    return this.pdfPaths[lang] || this.pdfPaths['en'];
  }

  getCurrentLanguage(): string {
    return this.currentLanguageSubject.getValue();
  }
}
