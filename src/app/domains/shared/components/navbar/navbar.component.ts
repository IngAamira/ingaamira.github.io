import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule, RouterLinkWithHref, RouterLinkActive } from '@angular/router';

import { TranslationModule } from '../../../shared/modules/translation.module';
import { TranslationService } from '../../../shared/services/translation.service';

interface MenuItem {
  route: string;
  img: string;
}

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [ CommonModule, RouterModule, RouterLinkWithHref, RouterLinkActive, TranslationModule ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  constructor(private translationService: TranslationService) {

  }

  public menuItems: MenuItem[] = [
    { route: '/',          img: 'bi bi-house-door-fill'  },
    { route: '/portfolio', img: 'bi bi-briefcase-fill'   },
    { route: '/resume',    img: 'bi bi-person-workspace' },
    { route: '/contact',   img: 'bi bi-person-fill-add'  },
  ];

  changeLanguage(lang: string): void {
    this.translationService.changeLanguage(lang);
  }

}
