import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Title } from '@angular/platform-browser';

import { NgxBootstrapModule } from 'app/domains/shared/modules/ngx-bootstrap.module';
import { Project } from '../../../shared/interfaces/project';
import { ProjectCardComponent } from '../project-card/project-card.component';
import { ProjectsService } from '../../../shared/services/projects.service';
import { Tag } from '../../../shared/classes/tag';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [ProjectCardComponent, CommonModule, NgxBootstrapModule, FormsModule],
  templateUrl: './portfolio.component.html'
})
export default class PortfolioComponent implements OnInit {

  projects = {} as Project[];

  /*Processes*/
  isCollapsed: boolean = true;
  filtering: boolean = false;


  /*Add Programing Languages*/
  java: boolean = false;
  typescript: boolean = false;
  python: boolean = false;
  nodejs: boolean = false;


  /*Add Framewors*/
  spring: boolean = false;
  angular: boolean = false;
  bootstrap: boolean = false;

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
    if (this.nodejs) {
      filterTags.push(Tag.NODEJS);
    }


    /*Add Framewors*/
    if (this.spring) {
      filterTags.push(Tag.SPRING);
    }
    if (this.angular) {
      filterTags.push(Tag.ANGULAR);
    }
    if (this.bootstrap) {
      filterTags.push(Tag.BOOTSTRAP);
    }


    /*Other Skills*/
    if (this.html) {
      filterTags.push(Tag.HTML);
    }
    if (this.css) {
      filterTags.push(Tag.CSS);
    }


    /*Add filtering*/
    if ( this.java || this.typescript || this.python || this.nodejs || this.spring || this.angular || this.bootstrap || this.html || this.css) {
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
    this.nodejs = false;

    /*Add Framewors*/
    this.spring = false;
    this.angular = false;
    this.bootstrap = false;

    /*Other Skills*/
    this.html = false;
    this.css = false;

    /*Processes*/
    this.filtering = false;
    this.projects = this.projectService.GetProjects();
  }

}
