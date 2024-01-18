import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TranslationModule } from '../../../shared/modules/translation.module';
import { TranslationService } from '../../../shared/services/translation.service';
import { MenuItemHeader, ItemTitle } from '../../../shared/interfaces/menu-item';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, TranslationModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {

  constructor( private translationService: TranslationService ) {}

  public menuItemsHeader = signal<MenuItemHeader[]> ([
    { flag: 'USA Flag',   img: '../../../../../assets/icons/usa.png',   event: () => this.changeLanguage('en') },
    { flag: 'Spain Flag', img: '../../../../../assets/icons/spain.png', event: () => this.changeLanguage('es') },
  ]);

  public itemsTitle: ItemTitle[] = [
    { name: 'NAME'               },
    { name: 'UNIVERSITY_TITLE_1' },
    { name: 'SOFTWARE_DEVELOPER' },
    { name: 'DATA_ENGINEER'      },
  ];

  changeLanguage(lang: string): void {
    this.translationService.changeLanguage(lang);
  }

}
