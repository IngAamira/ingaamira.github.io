import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-work-dev',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './work-dev.component.html',
})
export class WorkDevComponent {

  constructor( ) { }

}
