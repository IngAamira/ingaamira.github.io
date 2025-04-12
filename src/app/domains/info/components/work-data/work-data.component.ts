import { CommonModule } from '@angular/common';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { TranslateModule, TranslateService, LangChangeEvent } from '@ngx-translate/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-work-data',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './work-data.component.html',
})
export class WorkDataComponent implements OnInit, OnDestroy {
  tools: { CATEGORY: string; ITEMS: string[] }[] = [];
  private langChangeSubscription!: Subscription;

  constructor(private translate: TranslateService) {}

  ngOnInit(): void {
    this.loadTools();
    this.langChangeSubscription = this.translate.onLangChange.subscribe((event: LangChangeEvent) => {
      this.loadTools();
    });
  }

  private loadTools(): void {
    this.translate.get('TECHNICAL_SKILLS_DATA.TOOLS').subscribe((tools) => {
      this.tools = tools;
    });
  }

  ngOnDestroy(): void {
    if (this.langChangeSubscription) {
      this.langChangeSubscription.unsubscribe();
    }
  }
}
