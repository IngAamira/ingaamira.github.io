import { Component, signal } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { TranslateModule } from '@ngx-translate/core';
import { MenuItemNav } from '@presentation/shared/types/menu-item.type';

@Component({
  standalone: true,
  selector: 'app-navbar',
  imports: [CommonModule, RouterModule, TranslateModule],
  templateUrl: './navbar.component.html',
})
export class NavbarComponent {

  public menuItemsHome = signal<MenuItemNav[]>([
    { route: '/', img: 'bi bi-house-door-fill', name: 'NAVIGATION.HOME' },
    { route: '/portfolio', img: 'bi bi-briefcase-fill', name: 'NAVIGATION.PORTFOLIO' },
    { route: '/resume', img: 'bi bi-person-workspace', name: 'NAVIGATION.RESUME' },
    { route: '/contact', img: 'bi bi-person-fill-add', name: 'NAVIGATION.CONTACT' },
  ]);

}
