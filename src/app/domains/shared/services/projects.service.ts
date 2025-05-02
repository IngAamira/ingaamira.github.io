import { Injectable } from '@angular/core';

import { Tag } from '../classes/tag';
import { Project } from '../interfaces/project';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  projects: Project[] = [
    {
      name: 'Stock Flow App',
      summary: 'StockFlow is an Inventory Management System that allows users to manage categories, products, and view dashboards with charts. It is built with Spring Boot for the backend and Angular for the frontend. The application integrates with Keycloak for authentication and supports exporting data to Excel.',
      projectLink: 'https://github.com/IngAamira/StockFlow',
      pictures: [
        "assets/imgs/projects/stock-flow/folder.png",
        "assets/imgs/projects/stock-flow/endpoints_categories.png",
        "assets/imgs/projects/stock-flow/endpoints_products.png",
        "assets/imgs/projects/stock-flow/product_by_id.png",
        "assets/imgs/projects/stock-flow/delete_product_by_id.png",
      ],
      tags: [ Tag.JAVA, Tag.SPRING, Tag.ANGULAR, Tag.POSTGRESQL ]
    },
    {
      name: 'Neo Shop App',
      summary: 'This is an e-commerce application developed in Java with the Spring Boot framework and using Spring WebFlux for reactive programming. The application allows users to search for and purchase products online, organized into categories.',
      projectLink: 'https://github.com/IngAamira/NeoShop',
      pictures: [
        "assets/imgs/projects/neo-shop/rest.png",
        "assets/imgs/projects/neo-shop/get.png",
        "assets/imgs/projects/neo-shop/post.png",
        "assets/imgs/projects/neo-shop/put.png",
        "assets/imgs/projects/neo-shop/delete.png",
      ],
      tags: [ Tag.JAVA, Tag.SPRING, Tag.ANGULAR, Tag.POSTGRESQL ]
    },
    {
      name: 'Eye Care Hub',
      summary: 'This is a web-app product management system designed for managing an optician\'s office. It allows users to handle clients, products, sales, and appointments efficiently. The project consists of two main components: a backend built with Java and Spring Boot, and a frontend developed using Angular.',
      projectLink: 'https://github.com/IngAamira/EyeCareHub',
      pictures: [
        "assets/imgs/projects/eye-care-hub/tech-used.png",
        "assets/imgs/projects/eye-care-hub/feature.png",
        "assets/imgs/projects/eye-care-hub/endpoints.png",
      ],
      tags: [ Tag.JAVA, Tag.SPRING, Tag.ANGULAR, Tag.POSTGRESQL ]
    },
    {
      name: 'Tech-Solutions',
      summary: 'This is an e-commerce project developed in Java using Spring Boot. The application implements key functionalities for managing products, orders, users, and the online purchasing process.',
      projectLink: 'https://github.com/IngAamira/TechSolutions',
      pictures: [
        "assets/imgs/projects/tech-solutions/home.png",
        "assets/imgs/projects/tech-solutions/db.png",
        "assets/imgs/projects/tech-solutions/intro.png",
        "assets/imgs/projects/tech-solutions/register.png",
        "assets/imgs/projects/tech-solutions/products.png",
        "assets/imgs/projects/tech-solutions/inventory.png",
        "assets/imgs/projects/tech-solutions/options-admin.png",
        "assets/imgs/projects/tech-solutions/options-user.png"
      ],
      tags: [ Tag.JAVA, Tag.SPRING, Tag.HTML, Tag.CSS, Tag.THYMELEAF ]
    },
    {
      name: 'To-Do App',
      summary: 'This is a simple To-Do application project developed in Angular.',
      projectLink: 'https://ingaamira.github.io/To-doApp/',
      pictures: [
        "assets/imgs/projects/todo-app/home.png",
        "assets/imgs/projects/todo-app/task.png",
        "assets/imgs/projects/todo-app/filter.png"
      ],
      tags: [ Tag.TYPESCRIPT, Tag.ANGULAR, Tag.NODEJS, Tag.BOOTSTRAP ]
    },
    {
      name: 'Gifs App',
      summary: 'This is an Angular application that allows users to search and view gifs using the Giphy API.',
      projectLink: 'https://ingaamira.github.io/GifsApp/',
      pictures: [
        "assets/imgs/projects/gifs-app/home.png",
        "assets/imgs/projects/gifs-app/search.png",
        "assets/imgs/projects/gifs-app/filter.png"
      ],
      tags: [ Tag.TYPESCRIPT, Tag.ANGULAR, Tag.NODEJS, Tag.BOOTSTRAP, Tag.GIPHY ]
    },
    {
      name: 'Dragon Ball Z App',
      summary: 'This is a simple Angular application for managing Dragon Ball Z characters.',
      projectLink: 'https://ingaamira.github.io/DbzApp/',
      pictures: [
        "assets/imgs/projects/dbz-app/home.png",
      ],
      tags: [ Tag.TYPESCRIPT, Tag.ANGULAR, Tag.NODEJS, Tag.BOOTSTRAP ]
    },
    {
      name: 'World Demographics API',
      summary: 'Provides global demographic data for countries and continents. Access population statistics with ease. Ideal for developers and analysts. Explore demographics.',
      projectLink: 'https://github.com/IngAamira/WorldDemographicsAPI',
      pictures: [
        "assets/imgs/projects/world-demo-graphics-api/folder.png",
        "assets/imgs/projects/world-demo-graphics-api/populations.png",
        "assets/imgs/projects/world-demo-graphics-api/world-populations.png"
      ],
      tags: [ Tag.PYTHON, Tag.FASTAPI, Tag.HTML ]
    },
    {
      name: 'Chatbot Whatsapp API',
      summary: 'MedPet is an online pet store chatbot service that integrates with WhatsApp to provide users with assistance, appointment scheduling, and other functionalities. It also integrates with Google Sheets for storing appointment data and OpenAI for answering user queries.',
      projectLink: 'https://github.com/IngAamira/ChatbotWhatsappAPI',
      pictures: [
        "assets/imgs/projects/chatbot-wa-api/config.png",
        "assets/imgs/projects/chatbot-wa-api/chat.png",
      ],
      tags: [ Tag.NODEJS, Tag.JAVASCRIPT, Tag.WHATSAPP, Tag.OPENAI ]
    },

  ].map((project, index) => ({ id: index, ...project }));

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
