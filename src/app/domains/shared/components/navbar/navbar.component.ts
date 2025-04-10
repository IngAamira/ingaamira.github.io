import { Component, OnInit, signal } from '@angular/core';
import { TranslateService, TranslateModule } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MenuItemNav } from '../../../shared/interfaces/menu-item';

@Component({
  selector: 'app-navbar',
  standalone: true,
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  imports: [CommonModule, RouterModule, TranslateModule],
})

export class NavbarComponent implements OnInit {
  public menuItemsHome = signal<MenuItemNav[]>([]);

  constructor(private translate: TranslateService) {}

  ngOnInit(): void {
    this.translate.get('NAVIGATION').subscribe((navigation: any) => {
      this.menuItemsHome.set([
        { route: '/', img: 'bi bi-house-door-fill', name: 'NAVIGATION.HOME' },
        { route: '/portfolio', img: 'bi bi-briefcase-fill', name: 'NAVIGATION.PORTFOLIO' },
        { route: '/resume', img: 'bi bi-person-workspace', name: 'NAVIGATION.RESUME' },
        { route: '/contact', img: 'bi bi-person-fill-add', name: 'NAVIGATION.CONTACT' },
      ]);
    });
  }

}
