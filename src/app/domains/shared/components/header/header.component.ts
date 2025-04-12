import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TranslateModule } from '@ngx-translate/core';

import { TranslationService } from '../../../shared/services/translation.service';
import { MenuItemHeader, ItemTitle } from '../../../shared/interfaces/menu-item';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {

  public itemsTitle: ItemTitle[] = [
    { title: 'PROFILE.NAME'              },
    { title: 'PROFILE.SOFTWARE_ENGINEER' },
    { title: 'PROFILE.DATA_ENGINEER'     },
  ];

  public menuItemsHeader = signal<MenuItemHeader[]> ([
    { flag: 'USA Flag',   img: '../../../../../assets/icons/usa.png',   event: () => this.changeLanguage('en') },
    { flag: 'Spain Flag', img: '../../../../../assets/icons/spain.png', event: () => this.changeLanguage('es') },
  ]);

  constructor( private translationService: TranslationService ) {}

  changeLanguage(lang: string): void {
    this.translationService.changeLanguage(lang);
  }

}
