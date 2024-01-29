import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-work-data',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './work-data.component.html',
})
export class WorkDataComponent {

  constructor( ) { }

}
