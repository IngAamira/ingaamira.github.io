import { Component, OnInit, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { TranslationModule } from '../../../shared/modules/translation.module';
import { TranslationService } from '../../../shared/services/translation.service';
import { MenuItemHeader } from '../../../shared/interfaces/menu-item';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, TranslationModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent implements OnInit {
  getUsa: string = '';
  getSpain: string = '';

  constructor(
    private translationService: TranslationService,
    private http: HttpClient
  ) {}

  public menuItemsHeader = signal<MenuItemHeader[]> ([
    { flag: 'USA Flag',   getName: this.getUsa,   event: () => this.changeLanguage('en') },
    { flag: 'Spain Flag', getName: this.getSpain, event: () => this.changeLanguage('es') },
  ]);

  ngOnInit(): void {
    this.getUsa =
      'https://firebasestorage.googleapis.com/v0/b/website-ingaamira-dev.appspot.com/o/assets%2Ficons%2Fusa.png?alt=media&token=d7c735aa-2ca7-48e7-aed3-66136adba6b6';

    this.getSpain =
      'https://firebasestorage.googleapis.com/v0/b/website-ingaamira-dev.appspot.com/o/assets%2Ficons%2Fspain.png?alt=media&token=f042f1ac-4b0d-48f8-87d4-0a624b87b12b';
  }

  changeLanguage(lang: string): void {
    this.translationService.changeLanguage(lang);
  }

}
