import { Injectable } from '@angular/core';
import { ProjectDatasource } from './project.datasource';
import { Project } from '@domain/models/project.model';
import { TagType } from '@domain/models/tag.model';

@Injectable()
export class ProjectLocalDatasource implements ProjectDatasource {

  private projects: Project[] = [
    {
          name: 'Stock Flow App',
          summary: [
            "StockFlow is an inventory management system that lets you organize categories, manage products, and keep an eye on your business with clean, data-driven dashboards.",
            "On the backend, it runs on Spring Boot; on the frontend, it’s powered by Angular—giving you a fast, modern, and responsive experience.",
            "It also integrates with Keycloak for secure authentication, and when you need your data offline, you can easily export everything to Excel."
          ],
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
          summary: [
            "This is a modern e-commerce application built in Java using Spring Boot, with Spring WebFlux powering a fully reactive, high-performance backend.",
            "Users can seamlessly browse products, explore categories, and make purchases online—all within a smooth, responsive experience designed to scale."
          ],
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
          summary: [
            "This is a web app built to run an optician’s office without the usual chaos. It lets you manage clients, products, sales, and appointments—all in one clean, efficient flow.",
            "On the backend, it’s powered by Java with Spring Boot. On the frontend, Angular keeps everything fast, smooth, and easy to use.",
            "Simple, organized, and built to keep your day-to-day operations moving without friction."
          ],
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
          summary: [
            "This is a solid e-commerce app built in Java with Spring Boot, designed to handle the full online shopping experience from end to end.",
            "It covers everything that matters—product management, user handling, order processing, and a smooth purchasing flow—so the whole system just works, clean and reliable."
          ],
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
          summary: [
            "This is a simple, no-nonsense To-Do app built with Angular.",
            "It helps you stay on top of your tasks, keep things organized, and get stuff done without overcomplicating the experience. Clean, fast, and straight to the point."
          ],
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
          summary: [
            "This is a fun, lightweight Angular app that lets users search and browse GIFs in real time using the Giphy API.",
            "Fast, smooth, and straight to the point—just type what you’re feeling and get the perfect GIF instantly."
          ],
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
          summary: [
            "This is a simple Angular app built for managing Dragon Ball Z characters.",
            "You can add, view, and organize your favorite fighters in one place—clean, straightforward, and made for fans who like to keep things in order."
          ],
          projectLink: 'https://ingaamira.github.io/DbzApp/',
          pictures: [
            "assets/imgs/projects/dbz-app/home.png",
          ],
          tags: [ TagType.TYPESCRIPT, TagType.ANGULAR, TagType.NODE_JS, TagType.BOOTSTRAP ]
        },
        {
          name: 'World Demographics API',
          summary: [
            "Get global demographic data at your fingertips—country by country, continent by continent.",
            "Quick access to population stats, clean and easy to work with. Built for developers and analysts who need reliable data without the hassle."
          ],
          projectLink: 'https://github.com/IngAamira/WorldDemographicsAPI',
          pictures: [
            "assets/imgs/projects/world-demo-graphics-api/folder.png",
            "assets/imgs/projects/world-demo-graphics-api/populations.png",
            "assets/imgs/projects/world-demo-graphics-api/world-populations.png"
          ],
          tags: [ TagType.PYTHON, TagType.FAST_API, TagType.HTML ]
        },
        {
          name: 'Chatbot WhatsApp API',
          summary: [
            "MedPet is an online pet store chatbot built to handle customer interactions directly through WhatsApp.",
            "It helps users get support, schedule appointments, and resolve questions in real time—without friction. Behind the scenes, it connects with Google Sheets to store appointment data and uses OpenAI to deliver smart, conversational responses.",
            "Simple for users, powerful under the hood."
          ],
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
