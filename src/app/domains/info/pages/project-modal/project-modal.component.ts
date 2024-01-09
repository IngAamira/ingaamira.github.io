import { Component, ChangeDetectionStrategy, OnDestroy, Input  } from '@angular/core';
import { NgFor } from '@angular/common';

import { BsModalRef } from 'ngx-bootstrap/modal';
import { CarouselModule } from 'ngx-bootstrap/carousel';

import { Project } from '../../../shared/models/project';
import { MaterialModule } from '../../../shared/modules/material.module';

@Component({
  selector: 'app-project-modal',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [CarouselModule, NgFor, MaterialModule],
  templateUrl: './project-modal.component.html',
  styleUrls: ['./project-modal.component.css']
})
export class ProjectModalComponent implements OnDestroy {
  @Input() project: Project | undefined;

  constructor(public bsModalRef: BsModalRef) { }

  ngOnDestroy() {
    // Realiza tareas de limpieza aquí si es necesario
  }

}
