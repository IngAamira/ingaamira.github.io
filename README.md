# Website Ingaamira

## Table of Contents

- [Project Description](#project-description)
- [Project Structure](#project-structure)
  - [Pages](#pages)
  - [Components](#components)
- [Shared Folder](#shared-folder)
  - [Classes](#classes)
  - [Components](#components-1)
  - [Interfaces](#interfaces)
  - [Modules](#modules)
  - [Services](#services)
- [NPM Commands Used](#npm-commands-used)
  - [Project Name](#project-name)
  - [Folder Info](#folder-info)
    - [Pages](#pages-1)
    - [Components](#components-2)
  - [Shared Folder](#shared-folder-1)
    - [Classes](#classes-1)
    - [Components](#components-3)
    - [Interfaces](#interfaces-1)
    - [Modules](#modules-1)
    - [Services](#services-1)
- [Library Installation](#library-installation)
- [Additional Resources](#additional-resources)
- [Contributions](#contributions)
- [Project Status](#project-status)

## Project Description
This project, named "Website Ingaamira," is a web application developed using Angular. The purpose of the application is to provide information about Ingaamira, including details about projects, work experience, and contact information. The project's structure is organized into specific folders to facilitate code management and maintenance.

## System Requirements
- Node.js (v18.0.0 or higher)
- Angular CLI (v15.0.0 or higher)

## Execution Instructions
1. Clone this repository: `git clone https://github.com/IngAamira/ingaamira.github.io.git`
2. Navigate to the project directory: `cd ingaamira.github.io`
3. Install dependencies: `npm i`
4. Run the application locally: `ng serve`

## Usage Examples
Below are some examples of how to interact with key features of the application:

- **View Projects:**
  - Access the portfolio page to view the list of projects.

- **Contact:**
  - Visit the contact page to obtain contact information and send messages.

## Project Structure

### Pages
- `contact`: Contact page.
- `home`: Home page.
- `not-found`: Error 404 page.
- `portfolio`: Portfolio page.
- `project-card`: Component to display project cards.
- `project-modal`: Component to display project details in a modal.
- `resume`: Resume page.

### Components
- `workExperience`: Component to display work experience.
- `workDev`: Component to display information as a software developer.
- `workData`: Component to display information as a data engineer.

## Shared Folder

### Classes
- `project`: Class to represent a project.
- `tag`: Class to represent a tag associated with a project.

### Components
- `footer`: Footer component.
- `header`: Header component.
- `layout`: Component for the overall layout.
- `navbar`: Navigation bar component.

### Interfaces
- `menu-item`: Interface to define menu items.

### Modules
- `ngx-bootstrap`: Module to integrate ngx-bootstrap.
- `translation`: Module for internationalization and translation.

### Services
- `projects`: Service to manage project information.
- `translation`: Service to manage application translation.

## NPM Commands Used

### Project Name
`ng new ingaamira.github.io --skip-tests`

### Folder Info

#### Pages
- `ng g c domains/info/pages/contact --skip-selector --inline-style --skip-tests`
- `ng g c domains/info/pages/home --skip-selector --inline-style --skip-tests`
- `ng g c domains/info/pages/not-found --skip-selector --skip-tests`
- `ng g c domains/info/pages/portfolio --skip-selector --inline-style --skip-tests`
- `ng g c domains/info/pages/project-card --skip-selector --inline-style --skip-tests`
- `ng g c domains/info/pages/project-modal --skip-selector --inline-style --skip-tests`
- `ng g c domains/info/pages/resume --skip-selector --skip-tests`

#### Components
- `ng g c domains/info/components/workExperience --standalone --skip-tests`
- `ng g c domains/info/components/workDev --standalone --skip-tests`
- `ng g c domains/info/components/workData --standalone --skip-tests`
- `ng g c domains/info/components/workData --standalone --skip-tests`
- `ng g c domains/info/components/workSector --standalone --inline-template --inline-style --skip-tests`
- `ng g c domains/info/components/education --standalone --inline-template --inline-style --skip-tests`
- `ng g c domains/info/components/languages --standalone --inline-template --inline-style --skip-tests`

#### Services
- `ng g i domains/info/services/workExperience --flat`

## Shared Folder

#### Classes
- `ng g cl domains/shared/classes/tag --flat`

#### Components
- `ng g c domains/shared/components/footer --skip-tests`
- `ng g c domains/shared/components/header --skip-tests`
- `ng g c domains/shared/components/layout --inline-style --skip-tests`
- `ng g c domains/shared/components/navbar --skip-tests`

#### Interfaces
- `ng g i domains/shared/classes/project`
- `ng g i domains/shared/interfaces/menu-item`
- `ng g i domains/shared/interfaces/work`

#### Modules
- `ng g m domains/shared/modules/ngx-bootstrap --flat`
- `ng g m domains/shared/modules/translation --flat`

#### Services
- `ng g s domains/shared/services/projects --flat`
- `ng g s domains/shared/services/translation --flat`

## Library Installation
- Run `ng add ngx-bootstrap` to add ngx-bootstrap.
- Run `npm i @ngx-translate/core --save` to install ngx-translate/core.
- Run `npm i @ngx-translate/http-loader --save` to install ngx-translate/http-loader.

## Additional Resources
- [ngx-bootstrap Documentation](https://valor-software.com/ngx-bootstrap/#/documentation)
- [ngx-translate/core on GitHub](https://github.com/ngx-translate/core)
- [ngx-translate/http-loader on npm](https://www.npmjs.com/package/@ngx-translate/http-loader)
- [Bootstrap](https://getbootstrap.com/)
- [Dynamic Component](https://github.com/funOfheuristic/dynamic-component/blob/main/src/app/dynamic-wrapper/dynamic-wrapper.component.html)

## Contributions
Contributions are welcome!

## Project Status
This project is actively under development.
