import { Component, signal } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { TranslateModule } from '@ngx-translate/core';

import { MenuItemContact } from '../../../shared/interfaces/menu-item';


@Component({
  standalone: true,
  imports: [CommonModule, TranslateModule],
  selector: 'app-contact',
  template: `
    <div class="container" style="padding-bottom: 12px;">
      <div class="text-center border mb-5 shadow rounded">
        <h1>{{ 'CONTACT.TITLE' | translate }}</h1>
        <p>{{ 'CONTACT.DESCRIPTION' | translate }}:</p>
      </div>
      <div class="list-group shadow">
        <a *ngFor="let item of menuItemsContact()"
          [href]="item.url" target="_blank"
          class="list-group-item list-group-item-action d-flex gap-3 py-3" >
          <img [src]="item.img" width="32" height="32" class="rounded-circle flex-shrink-0 me-5">
          <h3 class="mb-0">{{ item.flag }}</h3>
        </a>
      </div>
    </div>
  `,
})
export default class ContactComponent {

  constructor( private titleService: Title,) {
    this.titleService.setTitle('Contact Me');
  }

  public menuItemsContact = signal<MenuItemContact[]> ([
    { url: 'https://linkedin.com/in/ingaamira/',      img: 'assets/icons/linkedin.png', flag: 'Linkedin' },
    { url: 'https://github.com/IngAamira/',           img: 'assets/icons/github.png',   flag: 'GitHub'   },
    { url: 'https://platzi.com/p/IngAamira/',         img: 'assets/icons/platzi.png',   flag: 'Platzi'   },
    { url: 'https://www.udemy.com/user/andres-mira/', img: 'assets/icons/udemy.png',    flag: 'Udemy'    },
    { url: 'https://twitter.com/Ingaamira/',          img: 'assets/icons/twitter.png',  flag: 'Twitter'  },
    { url: 'mailto:andres.mira@outlook.com/',         img: 'assets/icons/e-mail.png',   flag: 'Email'    },
  ]);

}
