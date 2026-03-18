import { Injectable } from '@angular/core';
import { ProjectDatasource } from './project.datasource';
import { Project } from '@domain/models/project.model';
import { TagType } from '@domain/models/tag.model';

@Injectable()
export class ProjectLocalDatasource implements ProjectDatasource {

  private projects: Project[] = [
    {
          name: 'Stock Flow App',
          summary: 'StockFlow is an Inventory Management System that allows users to manage categories, products, and view dashboards with charts. It is built with SPRING_BOOT Boot for the backend and Angular for the frontend. The application integrates with Keycloak for authentication and supports exporting data to Excel.',
          projectLink: 'https://github.com/IngAamira/StockFlow',
          pictures: [
            "assets/imgs/projects/stock-flow/folder.png",
            "assets/imgs/projects/stock-flow/endpoints_categories.png",
            "assets/imgs/projects/stock-flow/endpoints_products.png",
            "assets/imgs/projects/stock-flow/product_by_id.png",
            "assets/imgs/projects/stock-flow/delete_product_by_id.png",
          ],
          tags: [ TagType.JAVA, TagType.SPRING_BOOT, TagType.ANGULAR, TagType.POSTGRES ]
        },
        {
          name: 'Neo Shop App',
          summary: 'This is an e-commerce application developed in Java with the SPRING_BOOT Boot framework and using SPRING_BOOT WebFlux for reactive programming. The application allows users to search for and purchase products online, organized into categories.',
          projectLink: 'https://github.com/IngAamira/NeoShop',
          pictures: [
            "assets/imgs/projects/neo-shop/rest.png",
            "assets/imgs/projects/neo-shop/get.png",
            "assets/imgs/projects/neo-shop/post.png",
            "assets/imgs/projects/neo-shop/put.png",
            "assets/imgs/projects/neo-shop/delete.png",
          ],
          tags: [ TagType.JAVA, TagType.SPRING_BOOT, TagType.ANGULAR, TagType.POSTGRES ]
        },
        {
          name: 'Eye Care Hub',
          summary: 'This is a web-app product management system designed for managing an optician\'s office. It allows users to handle clients, products, sales, and appointments efficiently. The project consists of two main components: a backend built with Java and SPRING_BOOT Boot, and a frontend developed using Angular.',
          projectLink: 'https://github.com/IngAamira/EyeCareHub',
          pictures: [
            "assets/imgs/projects/eye-care-hub/tech-used.png",
            "assets/imgs/projects/eye-care-hub/feature.png",
            "assets/imgs/projects/eye-care-hub/endpoints.png",
          ],
          tags: [ TagType.JAVA, TagType.SPRING_BOOT, TagType.ANGULAR, TagType.POSTGRES ]
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
          tags: [ TagType.JAVA, TagType.SPRING_BOOT, TagType.HTML, TagType.CSS, TagType.THYMELEAF ]
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
          tags: [ TagType.TYPESCRIPT, TagType.ANGULAR, TagType.NODE_JS, TagType.BOOTSTRAP ]
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
          tags: [ TagType.TYPESCRIPT, TagType.ANGULAR, TagType.NODE_JS, TagType.BOOTSTRAP, TagType.GIPHY ]
        },
        {
          name: 'Dragon Ball Z App',
          summary: 'This is a simple Angular application for managing Dragon Ball Z characters.',
          projectLink: 'https://ingaamira.github.io/DbzApp/',
          pictures: [
            "assets/imgs/projects/dbz-app/home.png",
          ],
          tags: [ TagType.TYPESCRIPT, TagType.ANGULAR, TagType.NODE_JS, TagType.BOOTSTRAP ]
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
          tags: [ TagType.PYTHON, TagType.FAST_API, TagType.HTML ]
        },
        {
          name: 'Chatbot WHATSAPP_API API',
          summary: 'MedPet is an online pet store chatbot service that integrates with WHATSAPP_API to provide users with assistance, appointment scheduling, and other functionalities. It also integrates with Google Sheets for storing appointment data and OPEN_AI for answering user queries.',
          projectLink: 'https://github.com/IngAamira/ChatbotWhatsappAPI',
          pictures: [
            "assets/imgs/projects/chatbot-wa-api/config.png",
            "assets/imgs/projects/chatbot-wa-api/chat.png",
          ],
          tags: [ TagType.NODE_JS, TagType.JAVASCRIPT, TagType.WHATSAPP_API, TagType.OPEN_AI ]
        },
  ].map((project, index) => ({ id: index, ...project }));

  async getProjects(): Promise<Project[]> {
    return this.projects;
  }
}
