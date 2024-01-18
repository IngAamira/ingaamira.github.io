import { Injectable } from '@angular/core';

import { Tag } from '../classes/tag';
import { Project } from '../interfaces/project';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  projects: Project[] = [

    { id: 0,
      name: 'Tech-Solutions',
      summary: 'This is an e-commerce project developed in Java using Spring Boot. The application implements key functionalities for managing products, orders, users, and the online purchasing process.',
      description: '',
      projectLink: 'https://github.com/IngAamira/TechSolutions',
      pictures: [
        "assets/imgs/projects/techsolutions/home.png",
        "assets/imgs/projects/techsolutions/folder.png",
        "assets/imgs/projects/techsolutions/db.png",
        "assets/imgs/projects/techsolutions/intro.png",
        "assets/imgs/projects/techsolutions/register.png",
        "assets/imgs/projects/techsolutions/products.png",
        "assets/imgs/projects/techsolutions/inventory.png",
        "assets/imgs/projects/techsolutions/options_admin.png",
        "assets/imgs/projects/techsolutions/options_user.png"
      ],
      tags: [Tag.JAVA, Tag.SPRING]
    },
    { id: 1,
      name: 'World Demographics API',
      summary: 'WorldDemographicsAPI provides global demographic data for countries and continents. Access population statistics with ease. Ideal for developers and analysts. Explore demographics.',
      description: '',
      projectLink: 'https://github.com/IngAamira/WorldDemographicsAPI',
      pictures: [
        "assets/imgs/projects/worlddemographicsapi/folder.png",
        "assets/imgs/projects/worlddemographicsapi/populations.png",
        "assets/imgs/projects/worlddemographicsapi/world-populations.png"
      ],
      tags: [
        Tag.PYTHON,
        Tag.HTML
      ]
    },
    { id: 2,
      name: 'To-Do App',
      summary: 'This is a simple To-Do application project developed in Angular.',
      description: '',
      projectLink: 'https://ingaamira.github.io/todo-app/',
      pictures: [
        "assets/imgs/projects/todo-app/home.png",
        "assets/imgs/projects/todo-app/task.png",
        "assets/imgs/projects/todo-app/filter.png"
      ],
      tags: [
        Tag.TYPESCRIPT,
        Tag.ANGULAR,
        Tag.HTML,
        Tag.CSS,
        Tag.BOOTSTRAP
      ]
    },
    { id: 3,
      name: 'Gifs App',
      summary: 'This is an Angular application that allows users to search and view gifs using the Giphy API.',
      description: '',
      projectLink: 'https://ingaamira.github.io/gifs-app/',
      pictures: [
        "assets/imgs/projects/gifs-app/home.png",
        "assets/imgs/projects/gifs-app/search.png",
        "assets/imgs/projects/gifs-app/filter.png"
      ],
      tags: [
        Tag.TYPESCRIPT,
        Tag.ANGULAR,
        Tag.HTML,
        Tag.CSS,
        Tag.BOOTSTRAP
      ]
    },

  ];

  constructor() {

  }

  GetProjects() {
    return this.projects;
  }

  GetProjectById(id: number): Project {
    let project = this.projects.find(project => project.id === id);

    if(project === undefined) {
      throw new TypeError('There is no project that matches the id' + id);
    }

    return project

  }

  GetProjectsByFilter(filterTags: Tag[]) {
    let filteredProjects: Project[] = [];

    this.projects.forEach(function (project) {
      let foundAll = true;

      filterTags.forEach(function (filterTag) {
        if (project.tags.includes(filterTag) == false) {
          foundAll = false;
        }
      });

      if (foundAll) {
        filteredProjects.push(project);
      }

    });

    return filteredProjects;

  }

}
