---
name: Deploy Vercel
description: Use when deploying, changing the build output, or editing infrastructure/deploy configuration.
---

# Deploy

## Principal: Vercel

`vercel.json`:

- `buildCommand`: `npm run build:prod`
- `outputDirectory`: `dist/portfolio-ingaamira-lab`
- `installCommand`: `npm install`
- Rewrites: `/sitemap.xml` y `/robots.txt` → `/browser/...`; el resto → `/server/server.mjs` (**SSR**).
- Headers de seguridad (`X-Content-Type-Options`, `X-Frame-Options`, `X-XSS-Protection`).

Dominio de producción: `https://portfolio.ingaamira.com` (servido por Vercel desde `trunk`).

## Notas

- Gestor de paquetes canónico: **npm** (`package-lock.json`). No reintroducir `pnpm-lock.yaml`.
- El SSR local se sirve con `npm run serve:ssr:portfolio-ingaamira-lab` (puerto `PORT` o 4000).
- No commitear secretos. Las credenciales de Vercel van en el proveedor, no en el repo.
