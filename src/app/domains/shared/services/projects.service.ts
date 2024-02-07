import { Injectable } from '@angular/core';

import { Tag } from '../classes/tag';
import { Project } from '../interfaces/project';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  projects: Project[] = [
    { id: 0,
      name: 'E-Shop (Backend)',
      summary: 'This is an e-commerce application developed in Java with the Spring Boot framework and using Spring WebFlux for reactive programming. The application allows users to search for and purchase products online, organized into categories.',
      description: 'Esta es una aplicación de comercio electrónico desarrollada en Java con el framework Spring Boot y usando Spring WebFlux como programación reactiva. La aplicación permite a los usuarios buscar y comprar productos en línea, organizados en categorías.',
      projectLink: 'https://github.com/IngAamira/eshop',
      pictures: [
        "assets/imgs/projects/eshop/rest.png",
        "assets/imgs/projects/eshop/get.png",
        "assets/imgs/projects/eshop/post.png",
        "assets/imgs/projects/eshop/put.png",
        "assets/imgs/projects/eshop/delete.png",
      ],
      tags: [ Tag.JAVA, Tag.SPRING ]
    },
    { id: 1,
      name: 'Tech-Solutions (Backend/Frontend)',
      summary: 'This is an e-commerce project developed in Java using Spring Boot. The application implements key functionalities for managing products, orders, users, and the online purchasing process.',
      description: '',
      projectLink: 'https://github.com/IngAamira/TechSolutions',
      pictures: [
        "assets/imgs/projects/techsolutions/home.png",
        "assets/imgs/projects/techsolutions/db.png",
        "assets/imgs/projects/techsolutions/intro.png",
        "assets/imgs/projects/techsolutions/register.png",
        "assets/imgs/projects/techsolutions/products.png",
        "assets/imgs/projects/techsolutions/inventory.png",
        "assets/imgs/projects/techsolutions/options_admin.png",
        "assets/imgs/projects/techsolutions/options_user.png"
      ],
      tags: [ Tag.JAVA, Tag.SPRING, Tag.HTML, Tag.CSS, Tag.THYMELEAF ]
    },
    { id: 2,
      name: 'Inventory (Backend)',
      summary: 'This is an inventory management application developed in Spring Boot. It provides functionalities for managing inventories, product tracking, and other operations related to inventory management.',
      description: '',
      projectLink: 'https://github.com/IngAamira/inventory-bk',
      pictures: [
        "assets/imgs/projects/inventory-bk/folder.png",
        "assets/imgs/projects/inventory-bk/endpoints_categories.png",
        "assets/imgs/projects/inventory-bk/endpoints_products.png",
        "assets/imgs/projects/inventory-bk/product_by_id.png",
        "assets/imgs/projects/inventory-bk/delete_product_by_id.png",
      ],
      tags: [ Tag.JAVA, Tag.SPRING ]
    },
    { id: 3,
      name: 'World Demographics API',
      summary: 'Provides global demographic data for countries and continents. Access population statistics with ease. Ideal for developers and analysts. Explore demographics.',
      description: '',
      projectLink: 'https://github.com/IngAamira/WorldDemographicsAPI',
      pictures: [
        "assets/imgs/projects/worlddemographicsapi/folder.png",
        "assets/imgs/projects/worlddemographicsapi/populations.png",
        "assets/imgs/projects/worlddemographicsapi/world-populations.png"
      ],
      tags: [ Tag.PYTHON, Tag.HTML ]
    },
    { id: 4,
      name: 'Inventory App',
      summary: 'This is a product management system built using Angular. It allows users to manage product data, including creating new products, updating existing ones, and deleting products. The system includes features such as form validation, error handling, and feedback messages.',
      description: '',
      projectLink: 'https://github.com/IngAamira/inventory-app',
      pictures: [
        "assets/icons/construction.png",
      ],
      tags: [ Tag.TYPESCRIPT, Tag.ANGULAR, Tag.NODEJS, Tag.BOOTSTRAP ]
    },
    { id: 5,
      name: 'To-Do App',
      summary: 'This is a simple To-Do application project developed in Angular.',
      description: '',
      projectLink: 'https://ingaamira.github.io/todo-app/',
      pictures: [
        "assets/imgs/projects/todo-app/home.png",
        "assets/imgs/projects/todo-app/task.png",
        "assets/imgs/projects/todo-app/filter.png"
      ],
      tags: [ Tag.TYPESCRIPT, Tag.ANGULAR, Tag.NODEJS, Tag.BOOTSTRAP ]
    },
    { id: 6,
      name: 'Gifs App',
      summary: 'This is an Angular application that allows users to search and view gifs using the Giphy API.',
      description: '',
      projectLink: 'https://ingaamira.github.io/gifs-app/',
      pictures: [
        "assets/imgs/projects/gifs-app/home.png",
        "assets/imgs/projects/gifs-app/search.png",
        "assets/imgs/projects/gifs-app/filter.png"
      ],
      tags: [ Tag.TYPESCRIPT, Tag.ANGULAR, Tag.NODEJS, Tag.BOOTSTRAP ]
    },

  ];

  constructor() { }

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
