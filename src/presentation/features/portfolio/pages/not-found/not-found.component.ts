import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';

import { LocaleService } from '@presentation/shared/services/locale.service';

@Component({
  standalone: true,
  selector: 'app-not-found',
  imports: [RouterLink],
  templateUrl: './not-found.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['./not-found.component.css'],
})
export class NotFoundComponent {

  private localeService = inject(LocaleService);

  /** Volver al inicio respetando el idioma de la URL. */
  get homeLink(): string {
    return this.localeService.path('');
  }

  constructor(private titleService: Title) {
    this.titleService.setTitle('404 | Portfolio IngAamira');
  }

}
