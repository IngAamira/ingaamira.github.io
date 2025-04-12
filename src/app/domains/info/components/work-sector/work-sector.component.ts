import { CommonModule } from '@angular/common';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-work-sector',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  template: `
      <div class="container">
        <ul style="text-align: left;">
          <li *ngFor="let sector of sectors">
            {{ sector | translate }}
          </li>
        </ul>
      </div>
    `,
})
export class WorkSectorComponent implements OnInit, OnDestroy {
  sectors: string[] = [];
  private langChangeSubscription!: Subscription;

  constructor(private translate: TranslateService) {}

  ngOnInit(): void {
    this.loadSectors();
    this.langChangeSubscription = this.translate.onLangChange.subscribe(() => {
      this.loadSectors();
    });
  }

  private loadSectors(): void {
    this.translate.get('SECTOR.SECTORS').subscribe((sectors: string[]) => {
      this.sectors = sectors;
    });
  }

  ngOnDestroy(): void {
    if (this.langChangeSubscription) {
      this.langChangeSubscription.unsubscribe();
    }
  }
}
