import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Title } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { CollapseModule } from 'ngx-bootstrap/collapse';

import { Project } from '../../../shared/models/project';
import { ProjectCardComponent } from '../project-card/project-card.component';
import { ProjectsService } from '../../../shared/services/projects.service';
import { Tag } from '../../../shared/models/tag';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [ProjectCardComponent, CommonModule, CollapseModule, FormsModule],
  templateUrl: './portfolio.component.html'
})
export class PortfolioComponent implements OnInit {

  projects = {} as Project[];

  /*Processes*/
  isCollapsed: boolean = true;
  filtering: boolean = false;


  /*Add Programing Languages*/
  java: boolean = false;
  typescript: boolean = false;
  python: boolean = false;


  /*Add Framewors*/
  spring: boolean = false;
  angular: boolean = false;

  /*Other Skills*/
  html: boolean = false;
  css: boolean = false;


  constructor (private titleService: Title, private projectService: ProjectsService) {
    this.titleService.setTitle('Portfolio')
  }
  ngOnInit(): void {
    this.projects = this.projectService.GetProjects();
  }

  /*Add languages or framewors here*/
  Filter() {
    let filterTags: Tag[] = [];

    /*Add Programing Languages*/
    if (this.java) {
      filterTags.push(Tag.JAVA);
    }
    if (this.typescript) {
      filterTags.push(Tag.TYPESCRIPT);
    }
    if (this.python) {
      filterTags.push(Tag.PYTHON);
    }


    /*Add Framewors*/
    if (this.spring) {
      filterTags.push(Tag.SPRING);
    }
    if (this.angular) {
      filterTags.push(Tag.ANGULAR);
    }


    /*Other Skills*/
    if (this.html) {
      filterTags.push(Tag.HTML);
    }
    if (this.css) {
      filterTags.push(Tag.CSS);
    }


    /*Add filtering*/
    if ( this.java || this.typescript || this.python || this.spring || this.angular || this.html || this.css) {
      this.filtering = true;
    }
    else {
      this.filtering = false;
    }

    this.projects = this.projectService.GetProjectsByFilter(filterTags);

  }

  /*Add reset filters here*/
  ResetFilters() {

    /*Add Programing Languages*/
    this.java = false;
    this.typescript = false;
    this.python = false;

    /*Add Framewors*/
    this.spring = false;
    this.angular = false;

    /*Other Skills*/
    this.html = false;
    this.css = false;

    /*Processes*/
    this.filtering = false;
    this.projects = this.projectService.GetProjects();
  }

}
