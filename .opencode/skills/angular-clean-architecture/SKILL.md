---
name: Angular Clean Architecture
description: Use when adding or changing features, components, services, data flow or DI in this Angular app. Explains the Clean Architecture layering, path aliases, DI wiring and coding conventions of this repository.
---

# Angular Clean Architecture (este repo)

App Angular **standalone** (Angular 22) organizada por capas. Regla de dependencia:
`presentation → domain ← infrastructure`. El `domain` no depende de Angular ni de la UI.

## Capas

- `src/domain` → modelos, interfaces de repositorio, casos de uso.
- `src/infrastructure` → datasources y **implementaciones** de repositorio.
- `src/presentation` → features (`features/portfolio/...`), shared (componentes, servicios, tipos, constantes).
- `src/app` → configuración y rutas.

## Alias de import (usar siempre, nunca rutas relativas profundas)

- `@domain/*`, `@infrastructure/*`, `@presentation/*` (definidos en `tsconfig.json`).

## Wiring de DI

En `src/app/app.config.ts`:

- `ProjectDatasource` → `ProjectLocalDatasource`
- `ProjectRepository` → `ProjectRepositoryImpl`

## Convenciones

- Componentes **standalone**; usar `inject()` en vez de inyección por constructor.
- Estado de UI con **signals** (`signal`, `computed`, `update`), no RxJS para estado local.
- Control flow nuevo: `@if` / `@for` (ya migrado; **no** usar `*ngIf` / `*ngFor`).
- Interfaces compartidas son **globales** en `src/presentation/shared/types/global.d.ts` (no requieren import).
- **Datos de proyectos:** hardcodeados en `src/infrastructure/datasources/project-local.datasource.ts`.
  Etiquetas/filtros en el enum `src/domain/models/tag.model.ts`.
- El filtrado por etiquetas usa **AND** (`tags.every(...)`), no OR.
- `ProjectRepositoryImpl` cachea los proyectos en memoria.

## Al añadir una feature

1. Modelo/interfaz/caso de uso en `domain`.
2. Implementación (datasource/repositorio) en `infrastructure`.
3. Registrar el provider en `app.config.ts` si es nuevo.
4. Componente(s) en `presentation` + ruta lazy en `portfolio.routes.ts`.
5. Validar con `npm run build` (ver skill `verify-build`).

No añadir dependencias nuevas sin justificación técnica.
