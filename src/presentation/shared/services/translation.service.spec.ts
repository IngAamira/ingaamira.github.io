import { TestBed } from '@angular/core/testing';
import { TranslateService } from '@ngx-translate/core';

import { BrowserService } from '@presentation/shared/services/browser.service';
import { TranslationService } from '@presentation/shared/services/translation.service';

describe('TranslationService', () => {
  let service: TranslationService;

  const translateStub = {
    use: () => undefined,
    setDefaultLang: () => undefined,
    getBrowserLang: () => 'en',
  } as unknown as TranslateService;

  const browserStub = {
    document,
    localStorage: null,
  } as unknown as BrowserService;

  beforeEach(() => {
    document.documentElement.lang = 'en';

    TestBed.configureTestingModule({
      providers: [
        TranslationService,
        { provide: TranslateService, useValue: translateStub },
        { provide: BrowserService, useValue: browserStub },
      ],
    });

    service = TestBed.inject(TranslationService);
  });

  it('refleja el idioma seleccionado en el atributo lang del documento', () => {
    service.setLanguage('es');

    expect(document.documentElement.lang).toBe('es');
  });

  it('usa "en" como fallback para idiomas no soportados', () => {
    service.setLanguage('fr');

    expect(document.documentElement.lang).toBe('en');
  });
});
