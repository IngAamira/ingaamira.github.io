import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { RouterModule, RouterLinkWithHref, RouterLinkActive } from '@angular/router';

import { TranslationModule } from '../../../shared/modules/translation.module';
import { TranslationService } from '../../../shared/services/translation.service';
import { MenuItemNav } from '../../../shared/interfaces/menu-item';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [ CommonModule, RouterModule, RouterLinkWithHref, RouterLinkActive, TranslationModule ],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {

  constructor(private translationService: TranslationService) { }

  public menuItemsHome = signal<MenuItemNav[]> ([
    { route: '/',          img: 'bi bi-house-door-fill',  name: 'HOME'      },
    { route: '/portfolio', img: 'bi bi-briefcase-fill',   name: 'PORTFOLIO' },
    { route: '/resume',    img: 'bi bi-person-workspace', name: 'RESUME'    },
    { route: '/contact',   img: 'bi bi-person-fill-add',  name: 'CONTACT'   },
  ]);

  changeLanguage(lang: string): void {
    this.translationService.changeLanguage(lang);
  }

}