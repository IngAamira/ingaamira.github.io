import { Component, signal } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { TranslateModule } from '@ngx-translate/core';

@Component({
  standalone: true,
  selector: 'app-navbar',
  imports: [
    CommonModule,
    RouterModule,
    TranslateModule
  ],
  templateUrl: './navbar.component.html',
})
export class NavbarComponent {

  public menuItemsHome: MenuItemNav[] = [
    {
      route: '/',
      name: 'NAVIGATION.HOME',
      icon: 'M3 10.5L12 3l9 7.5V20a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1v-9.5z'
    },
    {
      route: '/portfolio',
      name: 'NAVIGATION.PORTFOLIO',
      icon: 'M4 7h16v13a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7zm3-4h10a1 1 0 0 1 1 1v3H6V4a1 1 0 0 1 1-1z'
    },
    {
      route: '/resume',
      name: 'NAVIGATION.RESUME',
      icon: 'M6 2h9l5 5v15a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1zm8 1.5V8h4.5'
    },
    {
      route: '/contact',
      name: 'NAVIGATION.CONTACT',
      icon: 'M12 12c2.761 0 5-2.239 5-5S14.761 2 12 2 7 4.239 7 7s2.239 5 5 5zm0 2c-3.866 0-7 2.239-7 5v1h14v-1c0-2.761-3.134-5-7-5z'
    }
  ];

  trackByRoute(index: number, item: MenuItemNav) {
    return item.route;
  }

}
