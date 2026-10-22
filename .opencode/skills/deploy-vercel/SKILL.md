---
name: Deploy Vercel
description: Use when deploying, changing the build output, or editing infrastructure/deploy configuration.
---

# Deploy

## Principal: Vercel

`vercel.json`:

- `installCommand`: `npm ci`
- `buildCommand`: `npm run build:prod`
- `outputDirectory`: `dist/portfolio-ingaamira-lab/browser` (HTML prerenderizado + assets → CDN)
- `functions`: `api/index.mjs` con `includeFiles: "dist/portfolio-ingaamira-lab/**"`
- `rewrites`: `/` y `/(.*)` → `/api` (la fase *filesystem* tiene prioridad, así que los
  prerenderizados y los assets nunca tocan la función).
- Headers de seguridad (`X-Content-Type-Options`, `X-Frame-Options`, `X-XSS-Protection`).

**No reescribir a `/server/server.mjs`**: es un archivo estático del output y Vercel lo sirve como
`application/javascript` (rompe todo el sitio).

SSR (`api/index.mjs`):

```js
export default async function handler(req, res) {
  const { reqHandler } = await import(
    '../dist/portfolio-ingaamira-lab/server/server.mjs'
  );
  return reqHandler(req, res);
}
```

Invariantes que hay que mantener al tocar esto:

- `security.allowedHosts` en `angular.json` (`portfolio.ingaamira.com`, `*.vercel.app`). Sin él el
  SSR responde **400** por validación de host.
- `src/server.ts` usa `AngularNodeAppEngine({ trustProxyHeaders: true })`: Vercel termina TLS en
  el borde y añade `X-Forwarded-*`; sin confiarlos, Angular borra esos headers y degrada a CSR
  silencioso (el wildcard `**` dejaría de responder 404).
- `app.routes.server.ts` termina en `'**'` → `RenderMode.Server, status: 404` (sin soft-404).

Dominio de producción: `https://portfolio.ingaamira.com` (servido por Vercel desde `trunk`).

## Notas

- Gestor de paquetes canónico: **npm** (`package-lock.json`). No reintroducir `pnpm-lock.yaml`.
- El SSR local se sirve con `npm run serve:ssr:portfolio-ingaamira-lab` (puerto `PORT` o 4000).
- No commitear secretos. Las credenciales de Vercel van en el proveedor, no en el repo.
