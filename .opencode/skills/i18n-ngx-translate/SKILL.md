---
name: i18n ngx-translate
description: Use when adding or changing translations, adding a language, or touching language switching. Covers @ngx-translate setup, the JSON files and the multiple places language registration lives.
---

# i18n con @ngx-translate

- Librería: `@ngx-translate/core` + `http-loader` v17.
- Configurado en `src/app/app.config.ts` con `provideTranslateService` + `provideTranslateHttpLoader`
  (prefix `/assets/i18n/`, suffix `.json`). Fallback e idioma inicial: `en`.
- Traducciones: `src/assets/i18n/en.json` y `src/assets/i18n/es.json`.

## Añadir un idioma nuevo (hay que tocar VARIOS sitios)

1. Crear `src/assets/i18n/<lang>.json`.
2. Añadirlo a `addLangs([...])` en `src/app/app.component.ts`.
3. Añadirlo a `supportedLanguages` y a `pdfPaths` en
   `src/presentation/shared/services/translation.service.ts`.

Si falta cualquiera de los tres, el idioma no se ofrece o el selector lo ignora.

## Estado e interacción

- El idioma se guarda en `localStorage['lang']` (solo navegador).
- `TranslationService.setLanguage()` y `changeLanguage()` hacen el cambio.
- En HTML se usa `TranslateModule` / pipe `translate`; en TS a veces `translate.instant(...)`
  (ver `HomeComponent.aboutTexts`).

## Bug conocido (corregir si se toca i18n)

`setLanguage()` **no** actualiza `document.documentElement.lang`. Consecuencia: el atributo `lang`
del HTML (y `BrowserService.lang`, usado en analítica y SEO) queda siempre en `en` al cambiar idioma.
Al corregir, hacerlo vía `BrowserService`/`DOCUMENT` (nunca `document` directo; ver skill `ssr-safety`).

Ver también: skill `seo-portfolio` (hreflang).
