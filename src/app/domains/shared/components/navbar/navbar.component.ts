import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { RouterModule, RouterLinkWithHref, RouterLinkActive } from '@angular/router';

import { TranslateModule } from '@ngx-translate/core';

import { MenuItemNav } from '../../../shared/interfaces/menu-item';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [ CommonModule, RouterModule, RouterLinkWithHref, RouterLinkActive, TranslateModule ],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {

  constructor( ) { }

  public menuItemsHome = signal<MenuItemNav[]> ([
    { route: '/',          img: 'bi bi-house-door-fill',  name: 'HOME'      },
    { route: '/portfolio', img: 'bi bi-briefcase-fill',   name: 'PORTFOLIO' },
    { route: '/resume',    img: 'bi bi-person-workspace', name: 'RESUME'    },
    { route: '/contact',   img: 'bi bi-person-fill-add',  name: 'CONTACT'   },
  ]);

}
