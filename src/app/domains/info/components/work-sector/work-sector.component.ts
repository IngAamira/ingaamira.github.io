import { CommonModule } from '@angular/common';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import { ItemSector } from '../../interfaces/i18n-item';

@Component({
  selector: 'app-work-sector',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  template: `
      <div class="container">
        <ul style="text-align: left;">
          <li *ngFor="let sector of itemsSector[0]?.sectors">
            {{ sector | translate }}
          </li>
        </ul>
      </div>
    `,
})
export class WorkSectorComponent implements OnInit, OnDestroy {
  itemsSector: ItemSector[] = [];
  private langChangeSubscription!: Subscription;

  constructor(private translate: TranslateService) {}

  ngOnInit(): void {
    this.loadSectors();
    this.langChangeSubscription = this.translate.onLangChange.subscribe(() => {
      this.loadSectors();
    });
  }

  private loadSectors(): void {
    this.translate.get('SECTOR').subscribe((data: any) => {
      this.itemsSector = [
        {
          title: data.TITLE,
          sectors: data.SECTORS,
        },
      ];
    });
  }

  ngOnDestroy(): void {
    if (this.langChangeSubscription) {
      this.langChangeSubscription.unsubscribe();
    }
  }
}
