
import { Component, OnInit, OnDestroy, ChangeDetectionStrategy } from '@angular/core';
import { Subscription } from 'rxjs';

import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-work-dev',
  imports: [TranslateModule],
  changeDetection: ChangeDetectionStrategy.Eager,
  template: `
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
      @for (skill of itemTechnicalSkills; track skill) {
        <div
          class="bg-ink-900 border rounded-xl p-4 shadow-sm"
          >
          <h3 class="text-base md:text-lg font-semibold text-accent-soft mb-3">
            {{ skill.category | translate }}
          </h3>
          <ul class="space-y-2 text-sm text-slate-200">
            @for (item of skill.items; track item) {
              <li>
                @if (isSkillItemObject(item)) {
                  <p class="font-medium text-slate-100">
                    {{ item.name }}
                  </p>
                  <ul class="list-[circle] ml-4 mt-1 space-y-1 text-slate-300">
                    @for (subitem of item.subitems; track subitem) {
                      <li>
                        {{ subitem }}
                      </li>
                    }
                  </ul>
                } @else {
                  <span
                    class="inline-block bg-ink-700 text-slate-200 px-2 py-1 rounded text-xs"
                    >
                    {{ item }}
                  </span>
                }
              </li>
            }
          </ul>
        </div>
      }
    </div>
    `,
})
export class WorkDevComponent implements OnInit, OnDestroy {
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
    this.langChangeSubscription = this.translate.onLangChange.subscribe(() => {
      this.loadTechnicalSkills();
    });
  }

  private loadTechnicalSkills(): void {
    this.translate
      .get('TECHNICAL_SKILLS_DEV.TOOLS')
      .subscribe((data: any[]) => {
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
