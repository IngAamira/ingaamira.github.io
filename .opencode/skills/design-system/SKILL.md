---
name: Design system
description: Use when building or changing UI, components, colors, typography or the dark tech visual language.
---

# Design system (oscuro tech)

Dirección estética del rediseño: **dark tech moderno** (fondo oscuro, acento eléctrico, gradientes
sutiles, enfoque data/IA).

## Reglas

- **Tokens** en `tailwind.config.js` (colores, tipografía, espaciado, radios, sombras): extender, no
  duplicar valores sueltos en templates.
- UI con **clases utilitarias** en los templates `.html`; CSS propio solo si Tailwind no alcanza
  (hoy solo `not-found/not-found.component.css`).
- Componentes reutilizables (navbar, hero, cards, badges, modal, footer) y estados (hover/focus/disabled).
- Tipografía **Inter** (self-host/subset; ver skill `performance-web-vitals`).
- Control flow `@if` / `@for`; **no** `*ngIf` / `*ngFor`. Estado de UI con signals.

## Accesibilidad AA (obligatoria)

- Contraste suficiente **sobre fondo oscuro** (texto y acentos).
- Foco visible, navegación por teclado, `aria` en controles y modales.
- Cuidado con degradados/sombras que oculten el foco.

## Presupuesto de build

- `anyComponentStyle`: aviso 4 kB / **error 8 kB**. Evitar CSS por componente grande.

## Validación

`npm run build`. Ver también: `tailwind-ui`, `accessibility`.
