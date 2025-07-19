import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { Observable, map, startWith, switchMap } from 'rxjs';
import { ItemSector } from '../../interfaces/i18n-item';

@Component({
  selector: 'app-work-sector',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  template: `
    <div class="container">
      <ul style="text-align: left;">
        <li *ngFor="let sector of (itemsSector$ | async)?.[0]?.sectors">
          {{ sector | translate }}
        </li>
      </ul>
    </div>
  `,
})
export class WorkSectorComponent {
  itemsSector$: Observable<ItemSector[]>;

  constructor(private readonly translate: TranslateService) {
    this.itemsSector$ = this.translate.onLangChange.pipe(
      startWith(null),
      switchMap(() => this.translate.get('SECTOR')),
      map((data: any) => [
        {
          title: data.TITLE,
          sectors: data.SECTORS,
        },
      ])
    );
  }
  
}
