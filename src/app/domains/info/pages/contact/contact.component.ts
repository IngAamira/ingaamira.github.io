import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { TranslationService } from '../../../shared/services/translation.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html'
})
export class ContactComponent {

  constructor(private titleService: Title, private translationService: TranslationService) {
    this.titleService.setTitle('Contact Me');
  }

  changeLanguage(lang: string): void {
    this.translationService.changeLanguage(lang);
  }

}
