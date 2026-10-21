import { Component, inject, ChangeDetectionStrategy } from '@angular/core';

import { TranslateModule } from '@ngx-translate/core';

import { Locale, isLocale } from '@presentation/shared/i18n/locale';
import { LocaleService } from '@presentation/shared/services/locale.service';

@Component({
  standalone: true,
  selector: 'app-header',
  imports: [
    TranslateModule
],
  changeDetection: ChangeDetectionStrategy.Eager,
  templateUrl: './header.component.html',
})
export class HeaderComponent {

  private localeService = inject(LocaleService);

  public itemsTitle: ItemTitle[] = [
    { title: 'PROFILE.NAME' },
    { title: 'PROFILE.HEADLINE' },
  ];

  public menuItemsHeader: MenuItemHeader[] = [
    { flag: 'English', img: 'assets/icons/usa.png', event: () => this.changeLanguage('en') },
    { flag: 'Español', img: 'assets/icons/spain.png', event: () => this.changeLanguage('es') },
  ];

  /** Cambia de idioma navegando a la URL equivalente (`/en/...`): el resolver fija el idioma. */
  changeLanguage(lang: string): void {
    if (isLocale(lang)) {
      this.localeService.switchTo(lang as Locale);
    }
  }

}
