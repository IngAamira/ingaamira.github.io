import { Component, inject, ChangeDetectionStrategy } from '@angular/core';

import { TranslateService } from '@ngx-translate/core';

import { RouterOutlet } from "@angular/router";

import { DEFAULT_LOCALE } from '@presentation/shared/i18n/locale';

@Component({
  standalone: true,
  selector: 'app-root',
  imports: [RouterOutlet],
  changeDetection: ChangeDetectionStrategy.Eager,
  template: '<router-outlet />',
})
export class AppComponent {

  private translate = inject(TranslateService);
  title = 'Portfolio IngAamira';

  constructor() {
    /* El idioma inicial lo fija `localeResolver` desde la URL; aquí solo se registran. */
    this.translate.addLangs(['es', 'en']);
    this.translate.setFallbackLang(DEFAULT_LOCALE);
  }

}
