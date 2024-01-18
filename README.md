# Website Ingaamira

## Table de Contenido

- [Descripción del Proyecto](#descripción-del-proyecto)
- [Estructura del Proyecto](#estructura-del-proyecto)
  - [Pages](#pages)
  - [Components](#components)
- [Folder Shared](#folder-shared)
  - [Classes](#classes)
  - [Components](#components-1)
  - [Interfaces](#interfaces)
  - [Modules](#modules)
  - [Services](#services)
- [Comandos NPM Utilizados](#comandos-npm-utilizados)
  - [Nombre del Proyecto](#nombre-del-proyecto)
  - [Folder Info](#folder-info)
    - [Pages](#pages-1)
    - [Components](#components-2)
  - [Folder Shared](#folder-shared-1)
    - [Classes](#classes-1)
    - [Components](#components-3)
    - [Interfaces](#interfaces-1)
    - [Modules](#modules-1)
    - [Services](#services-1)
- [Instalación de Bibliotecas](#instalación-de-bibliotecas)
- [Recursos Adicionales](#recursos-adicionales)

## Descripción del Proyecto
Este proyecto, denominado "Website Ingaamira" es una aplicación web desarrollada utilizando Angular. El propósito de la aplicación es proporcionar información sobre Ingaamira, incluyendo detalles sobre proyectos, experiencia laboral y datos de contacto. La estructura del proyecto se organiza en carpetas específicas para facilitar la gestión y mantenimiento del código.

## Requisitos de Sistema
- Node.js (v10.0.0 o superior)
- Angular CLI (v15.0.0 o superior)

## Instrucciones de Ejecución
1. Clona este repositorio: `git clone https://github.com/IngAamira/ingaamira.github.io.git`
2. Navega al directorio del proyecto: `cd ingaamira.github.io`
3. Instala las dependencias: `npm i`
4. Ejecuta la aplicación localmente: `ng serve`

## Ejemplos de Uso
A continuación, se presentan algunos ejemplos de cómo interactuar con las funciones clave de la aplicación:

- **Ver Proyectos:**
  - Accede a la página de portafolio para ver la lista de proyectos.

- **Contacto:**
  - Visita la página de contacto para obtener información de contacto y enviar mensajes.

## Estructura del Proyecto

### Pages
- `contact`: Página de contacto.
- `home`: Página de inicio.
- `not-found`: Página de error 404.
- `portfolio`: Página de portafolio.
- `project-card`: Componente para mostrar tarjetas de proyectos.
- `project-modal`: Componente para mostrar detalles de proyectos en un modal.
- `resume`: Página de currículum.

### Components
- `workExperience`: Componente para mostrar experiencia laboral.
- `workDev`: Componente para mostrar información como desarrollador de software.
- `workData`: Componente para mostrar información como Integeniero de datos.

## Folder Shared

### Classes
- `project`: Clase para representar un proyecto.
- `tag`: Clase para representar una etiqueta asociada a un proyecto.

### Components
- `footer`: Componente del pie de página.
- `header`: Componente del encabezado.
- `layout`: Componente para el diseño general.
- `navbar`: Componente de la barra de navegación.

### Interfaces
- `menu-item`: Interfaz para definir elementos de menú.

### Modules
- `ngx-bootstrap`: Módulo para integrar ngx-bootstrap.
- `translation`: Módulo para la internacionalización y traducción.

### Services
- `projects`: Servicio para gestionar la información de proyectos.
- `translation`: Servicio para gestionar la traducción de la aplicación.

## Comandos NPM Utilizados

### Nombre del Proyecto
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

## Folder Shared

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

## Instalación de Bibliotecas
- Ejecutar `ng add ngx-bootstrap` para agregar ngx-bootstrap.
- Ejecutar `npm i @ngx-translate/core --save` para instalar ngx-translate/core.
- Ejecutar `npm i @ngx-translate/http-loader --save` para instalar ngx-translate/http-loader.

## Recursos Adicionales
- [Documentación ngx-bootstrap](https://valor-software.com/ngx-bootstrap/#/documentation)
- [ngx-translate/core en GitHub](https://github.com/ngx-translate/core)
- [ngx-translate/http-loader en npm](https://www.npmjs.com/package/@ngx-translate/http-loader)
- [Bootstrap](https://getbootstrap.com/)

## Contribuciones
¡Las Contribuciones son bienvenidas!

## Estado del Proyecto
Este proyecto está en desarrollo activo.
