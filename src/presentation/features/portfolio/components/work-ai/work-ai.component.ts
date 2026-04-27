import { CommonModule } from '@angular/common';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import {
  TranslateModule,
  TranslateService,
  LangChangeEvent,
} from '@ngx-translate/core';

@Component({
  selector: 'app-work-ai',
  imports: [CommonModule, TranslateModule],
  template: `
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
      <div
        *ngFor="let skill of itemTechnicalSkills"
        class="bg-white border rounded-xl p-4 shadow-sm"
      >
        <h3 class="text-base md:text-lg font-semibold text-purple-700 mb-3">
          {{ skill.category | translate }}
        </h3>

        <ul class="space-y-2 text-sm text-gray-700">
          <li *ngFor="let item of skill.items">
            <ng-container *ngIf="isSkillItemObject(item); else simpleItem">
              <p class="font-medium text-gray-800">
                {{ item.name }}
              </p>

              <ul class="list-[circle] ml-4 mt-1 space-y-1 text-gray-600">
                <li *ngFor="let subitem of item.subitems">
                  {{ subitem }}
                </li>
              </ul>
            </ng-container>

            <ng-template #simpleItem>
              <span
                class="inline-block bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs"
              >
                {{ item }}
              </span>
            </ng-template>
          </li>
        </ul>
      </div>
    </div>
  `,
})
export class WorkAiComponent implements OnInit, OnDestroy {
  itemTechnicalSkills: ItemTechnicalSkill[] = [];
  private langChangeSubscription!: Subscription;

  constructor(private translate: TranslateService) {}

  isSkillItemObject(
    item: string | { name: string; subitems?: string[] },
  ): item is { name: string; subitems?: string[] } {
    return typeof item === 'object' && 'name' in item;
  }

  ngOnInit(): void {
    this.loadTechnicalSkills();
    this.langChangeSubscription = this.translate.onLangChange.subscribe(
      (event: LangChangeEvent) => {
        this.loadTechnicalSkills();
      },
    );
  }

  private loadTechnicalSkills(): void {
    this.translate.get('TECHNICAL_SKILLS_AI.TOOLS').subscribe((data: any[]) => {
      this.itemTechnicalSkills = data.map(
        (item) =>
          ({
            category: item.CATEGORY,
            items: item.ITEMS.map((subItem: any) => {
              if (subItem.NAME) {
                return {
                  name: subItem.NAME,
                  subitems: subItem.SUBITEMS,
                };
              }
              return subItem;
            }),
          }) as ItemTechnicalSkill,
      );
    });
  }

  ngOnDestroy(): void {
    if (this.langChangeSubscription) {
      this.langChangeSubscription.unsubscribe();
    }
  }
}
