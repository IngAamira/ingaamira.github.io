# 🚀 Website IngAamira 🚀

## Table of Contents

* [Project Description](#project-description)
* [Architecture](#architecture)
* [System Requirements](#system-requirements)
* [Execution Instructions](#execution-instructions)
* [Key Features](#key-features)
* [Project Structure](#project-structure)
* [State Management (Signals)](#state-management-signals)
* [Use Cases](#use-cases)
* [Libraries](#libraries)
* [Best Practices Applied](#best-practices-applied)
* [Project Status](#project-status)

---

## Project Description

"Website Ingaamira" is a modern Angular application designed to showcase professional experience, projects, and services.

The project follows a **Clean Architecture approach**, separating responsibilities into layers such as domain, application (use cases), and presentation.

---

## Architecture

The application is structured using **Clean Architecture principles**:

```
src/
│
├── domain/           → Models, enums, repository interfaces, use cases
├── infrastructure/   → Datasources and repository implementations
├── presentation/     → Components, pages, shared services (UI)
└── app/              → DI configuration and routing
```

### Key Concepts

* **Domain Layer** → Business logic (pure, reusable)
* **Use Cases** → Application logic (orchestration)
* **Presentation** → UI (Angular components with signals)

---

## System Requirements

* Node.js (v18+)
* Angular CLI (v17+ recommended)

---

## Execution Instructions

```bash
git clone https://github.com/IngAamira/ingaamira.github.io.git
cd ingaamira.github.io
npm install
ng serve
```

---

## Key Features

### 🔹 Portfolio Filtering (PRO)

* Dynamic filtering by technology (Angular, Java, etc.)
* Reactive state using Angular Signals
* Clean separation between UI and business logic
* Optimized filtering (only executes when needed)

### 🔹 Responsive UI

* Mobile-friendly interactions
* Collapsible filters panel
* UX improvements for small screens

### 🔹 Scalable Architecture

* Easy to add new filters or categories
* Decoupled types (`Category`, `TagType`)
* Extendable use cases

---

## Project Structure

### Presentation Layer

```
presentation/
├── features/
│   └── portfolio/
│       ├── pages/          (home, portfolio, resume, contact, project-card, project-modal, not-found)
│       ├── components/     (education, language, work-*)
│       └── portfolio.routes.ts
└── shared/
    ├── components/         (layout, header, navbar, footer)
    ├── services/           (browser, seo, translation)
    ├── constants/
    └── types/global.d.ts
```

### Domain Layer

```
domain/
├── models/                 (project.model.ts, tag.model.ts)
├── repositories/           (project.repository.ts — interface)
└── use-cases/              (get-projects, get-project-by-id, filter-projects)
```

### Infrastructure Layer

```
infrastructure/
├── datasources/            (project.datasource.ts — abstract; project-local.datasource.ts — data)
└── repositories/           (project.repository.impl.ts)
```

### Shared Types

Most shared interfaces are declared globally in `presentation/shared/types/global.d.ts`
(no import required).

---

## State Management (Signals)

The app uses **Angular Signals (modern reactive state)** instead of RxJS for UI state.

### Example

```ts
filters = signal<Record<TagType, boolean>>({})
selectedTags = computed(() => ...)
projects = computed(() => ...)
```

### Benefits

* No subscriptions
* Declarative state
* Better performance
* Simpler mental model

---

## Use Cases

Business logic is encapsulated in use cases:

### GetProjectsUseCase

Responsible for retrieving all projects.

### FilterProjectsUseCase

Filters projects based on selected tags.

```ts
filterProjectsUseCase.execute(projects, tags)
```

---

## Libraries

### Tailwind

#### Install labrery
```sh
  npm install -D tailwindcss@3 postcss autoprefixer
  npx tailwindcss init
```

#### postcss.config.js
```js
  module.exports = {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  }
```

#### tailwind.config.js

```js
  /** @type {import('tailwindcss').Config} */
  module.exports = {
    content: [
      "./src/**/*.{html,ts}"
    ],
    theme: {
      extend: {},
    },
    plugins: [],
  }
```

### Angular Signals → reactive state management

---

## Best Practices Applied

### ✅ Clean Architecture

* Separation of concerns
* Domain independent of UI

### ✅ Reactive Programming (Signals)

* Derived state (`computed`)
* No duplicated state

### ✅ Strong Typing

* `Record<TagType, boolean>`
* No `any`, no `undefined`

### ✅ Performance Optimization

* Avoid unnecessary computations
* Efficient filtering logic

### ✅ UX Improvements

* Collapsible filters
* Mobile-first behavior
* Reset filters functionality

---

## Project Status

🚧 Actively under development

### Next Improvements (Roadmap)

* Persist filters in URL (`?tags=angular,java`)
* LocalStorage state persistence
* Animations (SaaS-level UX)
* Backend integration
* Testing (unit + e2e)

---

## Author

[**IngAamira**](https://ingaamira.github.io/)

---

## Contributions

Contributions are welcome! 🚀
