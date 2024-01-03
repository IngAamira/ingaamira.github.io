import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { TranslationModule } from '../../../shared/modules/translation.module';
import { TranslationService } from '../../../shared/services/translation.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ TranslationModule ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

  constructor(private titleService: Title, private translationService: TranslationService) {
    this.titleService.setTitle('Contact Me');
  }

  changeLanguage(lang: string): void {
    this.translationService.changeLanguage(lang);
  }

}
