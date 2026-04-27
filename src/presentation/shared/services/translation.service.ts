import { Injectable, inject } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { BehaviorSubject } from 'rxjs';

import { BrowserService } from '@presentation/shared/services/browser.service';

@Injectable({ providedIn: 'root' })
export class TranslationService {

  private translate = inject(TranslateService);
  private browser = inject(BrowserService);

  private currentLanguageSubject = new BehaviorSubject<string>('en');
  currentLanguage$ = this.currentLanguageSubject.asObservable();

  private supportedLanguages = ['en', 'es'];

  private pdfPaths: Record<string, string> = {
    en: 'assets/docs/CV_Dev_en.pdf',
    es: 'assets/docs/CV_Dev_es.pdf'
  };

  constructor() {
    this.initializeTranslation();
  }

  private initializeTranslation(): void {
    let savedLang: string | null = null;

    const localStorageRef = this.browser.localStorage;
    if (localStorageRef) {
      savedLang = localStorageRef.getItem('lang');
    }

    const browserLang = this.translate.getBrowserLang();
    const normalizedBrowserLang = browserLang?.split('-')[0];

    let selectedLang = 'en';

    if (savedLang && this.isSupported(savedLang)) {
      selectedLang = savedLang;
    } else if (normalizedBrowserLang && this.isSupported(normalizedBrowserLang)) {
      selectedLang = normalizedBrowserLang;
    }

    this.translate.setDefaultLang('en');
    this.setLanguage(selectedLang);
  }

  setLanguage(lang: string): void {
    if (!this.isSupported(lang)) lang = 'en';

    this.translate.use(lang);
    this.currentLanguageSubject.next(lang);

    const localStorageRef = this.browser.localStorage;
    if (localStorageRef) {
      localStorageRef.setItem('lang', lang);
    }
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
