import { Component, inject } from '@angular/core';

import { TranslateService } from '@ngx-translate/core';

import { RouterOutlet } from "@angular/router";

@Component({
  standalone: true,
  selector: 'app-root',
  imports: [RouterOutlet],
  template: '<router-outlet />',
})
export class AppComponent {

  private translate = inject(TranslateService);
  title = 'Portfolio IngAamira';

  constructor() {
    this.translate.addLangs(['es', 'en']);
    this.translate.setFallbackLang('en');
    this.translate.use('en');
  }

}
