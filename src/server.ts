import {
  AngularNodeAppEngine,
  createNodeRequestHandler,
  isMainModule,
  writeResponseToNodeResponse,
} from '@angular/ssr/node';
import express from 'express';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

import { localeFromAcceptLanguage } from './presentation/shared/i18n/locale';

const serverDistFolder = dirname(fileURLToPath(import.meta.url));
const browserDistFolder = resolve(serverDistFolder, '../browser');

const app = express();

/**
 * Vercel actúa como proxy confiable y añade headers `X-Forwarded-*` (incluyendo
 * `x-forwarded-for`) en cada petición. Sin confiarlos, Angular borra esos headers y
 * degrada a CSR en silencio (sirve el shell del cliente con status 200 en lugar de
 * ejecutar el SSR real, incluyendo el wildcard `**` que debe responder 404).
 * Se confía explícitamente en los headers de proxy porque Vercel es la única
 * plataforma que enruta tráfico hacia esta función.
 */
const angularApp = new AngularNodeAppEngine({ trustProxyHeaders: true });

/**
 * `/` no se indexa: 302 al idioma según `Accept-Language` (fallback `es`).
 */
app.get('/', (req, res) => {
  const locale = localeFromAcceptLanguage(req.headers['accept-language'] ?? null);

  res.redirect(302, `/${locale}`);
});

/**
 * Example Express Rest API endpoints can be defined here.
 * Uncomment and define endpoints as necessary.
 *
 * Example:
 * ```ts
 * app.get('/api/**', (req, res) => {
 *   // Handle API request
 * });
 * ```
 */

/**
 * Serve static files from /browser
 */
app.use(
  express.static(browserDistFolder, {
    maxAge: '1y',
    index: false,
    redirect: false,
  }),
);

/**
 * Handle all other requests by rendering the Angular application.
 */
app.use('/**', (req, res, next) => {
  angularApp
    .handle(req)
    .then((response) =>
      response ? writeResponseToNodeResponse(response, res) : next(),
    )
    .catch(next);
});

/**
 * Start the server if this module is the main entry point.
 * The server listens on the port defined by the `PORT` environment variable, or defaults to 4000.
 */
if (isMainModule(import.meta.url)) {
  const port = process.env['PORT'] || 4000;
  app.listen(port, () => {
    console.log(`Node Express server listening on http://localhost:${port}`);
  });
}

/**
 * Request handler used by the Angular CLI (for dev-server and during build) or Firebase Cloud Functions.
 */
export const reqHandler = createNodeRequestHandler(app);
