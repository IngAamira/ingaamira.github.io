

interface ItemExperience {
  position: string;
  name: string;
  objetive: string;
  dateRange: string;
  objectiveKeys?: string[];
}


  ngOnInit() {
    this.getI18nData ();
  }

  private getI18nData () {
    this.workExperienceService.getWorkExperienceData().subscribe(data => {
      this.objectiveKeys = Object.keys(data)
        .filter(key => key.startsWith(this.objectivePattern));
    });
  }

public itemsSlector: ItemExperience[] = [
  { position: 'SOFTWARE_DEVELOPER', name: 'IAS Software',      objectivePattern: 'IAS_SD_OBJECTIVE_',      dateRange: '07/2023'           },
  { position: 'IAS_JOB_2',          name: 'IAS Software',      objectivePattern: 'IAS_DWH_OBJECTIVE_',     dateRange: '12/2022 - 06/2023' },
  { position: 'AVALON_JOB',         name: 'Avalon Group',      objectivePattern: 'AVALON_OBJECTIVE_',      dateRange: '06/2022 - 11/2022' },
  { position: 'EMTELCO_JOB_1',      name: 'Emtelco CX & BPO',  objectivePattern: 'EMTELCO_BI_OBJECTIVE_',  dateRange: '03/2021 - 06/2022' },
  { position: 'ULTRACOM_JOB',       name: 'Ultracom IT S.A.S', objectivePattern: 'ULTRACOM_OBJECTIVE_',    dateRange: '12/2019 - 03/2021' },
  { position: 'EMTELCO_JOB_2',      name: 'Emtelco CX & BPO',  objectivePattern: 'EMTELCO_PyC_OBJECTIVE_', dateRange: '12/2011 - 11/2019' },
];

private getItemsData() {
  // Iterar sobre cada elemento en itemsSlector y realizar la llamada al servicio
  for (const item of this.itemsSlector) {
    this.workExperienceService.getWorkExperienceData().subscribe(data => {
      item.objectiveKeys = data[item.objetive];
      console.log('Dav', item.objectiveKeys)
    });
  }
}

<div style="text-align: left;" *ngFor="let item of itemsSlector" >
  <div class="text-primary">{{ item.position| translate }}</div>
  <div class="mb-0">{{ item.name }}</div>
  <div class="text-secondary">{{ 'DATE' | translate }}: {{ item.dateRange }} - {{ 'PRESENT' | translate }}</div>
  <ul>
    <li>
      {{ item.objetive | translate }}
    </li>
  </ul>
</div>

<hr/>


  private handleError(error: any) {
    if (error.status === 0) {
      console.error('Error de red:', error);
    } else if (error.status >= 500) {
      console.error('Error del servidor:', error);
    } else {
      console.error('Error desconocido:', error);
    }
    return of([]);
  }


  private handleError(error: any) {
    console.error('Error en la llamada a getWorkExperienceData:', error);
    return of([]);
  }
