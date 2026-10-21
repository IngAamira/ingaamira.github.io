# Plan — portfolio.ingaamira.com (portafolio profesional)

**Proyecto destino:** `/root/projects/ingaamira.github.io` (repo `github.com:IngAamira/portfolio-ingaamira-lab`, Angular 22, ngx-translate, prerender/SSG)
**Fecha:** 2026-10-21 · **Estado:** aprobado por el dueño en modo Plan · **Independiente** de `social-ingaamira-landing.md` y `www-ingaamira-web.md`

## Decisiones aprobadas (no re-litigar)

1. **Rol de la web: los tres, ordenados** → 1) clientes potenciales, 2) respaldo de marca personal (andres.miram), 3) empleo/Resume.
2. **Alcance:** arreglos técnicos + copy por audiencia + cadena de casos + alineación visual.
3. **Idioma default: español** (inglés queda como `alternate`).
4. **Caso Opticarlo's:** cualitativo, sin cifras, link `https://opticarlos.ingaamira.com` (mismo copy aprobado en `www-ingaamira-web.md`).
5. **Eye Care Hub = Opticarlo's confirmado:** repo local `/mnt/d/GitHub/EyeCareHub` usa paquetes `com.opticarlos`.
6. **Mensaje de WhatsApp del diagnóstico: idéntico** al de las otras dos webs: *"Hola Andrés, quiero agendar el diagnóstico gratuito de 15 min de mi proceso."*

## ⚠️ Hallazgo crítico previo — trabajo en vuelo

El repo tiene **8 archivos modificados sin commitear**:
`app.component.ts`, `app.config.ts`, `app.routes.server.ts`, `app.routes.ts`, `navbar.component.ts`, `seo.service.ts`, `translation.service.ts`, `server.ts` — trabajo activo de i18n/SSR/SEO.

Además el último commit (`3206b5b fix(i18n): bundle translations so SSR/prerender render real text`) **no se ve reflejado en producción**: el sitio desplegado sigue sirviendo claves crudas (`PROFILE.NAME`, `NAVIGATION.HOME`, `CONTACT.TITLE`, `ABOUT_ME.*`) en `/`, `/portfolio`, `/resume`, `/contact`.

**Regla: Fase 0 antes que nada — no empezar sobre el diff sucio.**

## Fase 0 — Estabilizar

1. Revisar el diff de los 8 archivos; commitear/estabilizar (o descartar con consentimiento del dueño si es trabajo obsoleto).
2. Desplegar y verificar con `curl` que las 4 rutas sirvan texto real prerenderizado.
3. Revisar el trabajo de hreflang/canonical en vuelo antes de tocar idioma/lang (Fase 1.3).

## Fase 1 — Arreglos técnicos

| # | Fix | Ubicación |
|---|---|---|
| 1 | **GA4**: quitar `traffic_type: "internal"` de la config (etiqueta toda visita como tráfico interno; mismo anti-patrón documentado en el repo de www) | `src/index.html:147` |
| 2 | **Link roto** `href="#"` (`FOOTER.BY_TALK`) → destino real (contacto o WhatsApp) | componente footer |
| 3 | **`lang="es"` por defecto** + `hreflang x-default` → es; en = alternate | `index.html` + `seo.service.ts` (coordinar con Fase 0) |
| 4 | Iconos 🌐 de proyectos **sin enlace externo** en el HTML servido → verificar demos reales; Eye Care Hub → `opticarlos.ingaamira.com` | data de proyectos (`src/…/portfolio/`) |
| 5 | **Medición unificada:** dejar G-KEC6JZR2MT corregido; documentar las 3 propiedades GA4 (www `G-1308JXT5XX`, social `G-DXR55GD0SF`, portfolio `G-KEC6JZR2MT`) + UTM consistentes (`utm_source=instagram&utm_medium=perfil`) | doc de medición (repo de contenido) |

**Nota:** los datos GA previos al fix quedan mal etiquetados; línea base = **después** del deploy.

## Fase 2 — Alineación visual

- **Paleta:** azul `#005CBB` / blanco / negro (acentos verde/morado solo secundarios). Eliminar gradientes teal→púrpura→índigo como identidad principal.
- **Tipografía:** fuera Arial. Micro-decisión pendiente: `brand/tipografias.md` dice Segoe UI, www usa Inter → **recomendado alinear portfolio con www (Inter)** y luego resolver la discrepancia marca↔web en el repo de contenido (bandera en `MEMORY.md`).
- **Logo:** adoptar el hexagonal IL (unificado en la landing social); hoy usa `logo-ingaamira.png` antiguo.
- Objetivo: dejar de parecer plantilla genérica de portfolio dev.

## Fase 3 — Copy por audiencia (rol ordenado)

1. **Clientes (prioridad 1):**
   - Home en español: titular orientado a negocio + perfil.
   - Cada proyecto en **doble capa**: resultado de negocio primero, stack técnico después (colapsable/secundario).
   - CTA "Agenda tu diagnóstico (15 min)" en `/contact` con mensaje idéntico al de las otras webs.
2. **Marca personal (prioridad 2):**
   - El portafolio refuerza andres.miram (autoridad/prueba).
   - **Pendiente en repo de contenido:** `estrategia/arquitectura-marcas-canales.md` no menciona el portafolio — añadirlo como canal de respaldo (junto a la ficha T-5 de andres.miram).
3. **Empleo (prioridad 3):** `/resume` **se mantiene íntegro** para reclutadores; deja de protagonizar la home.

## Fase 4 — Cadena de casos (confirmada ✅)

```text
Portafolio: Eye Care Hub (versión técnica + demo → opticarlos.ingaamira.com)
     ↕  mismo caso, tres voces
www.ingaamira.com: caso Opticarlo's cualitativo (ya aprobado en plan www)
     ↕
Instagram: reel 20/09 ya publicado (240 vistas, enlaza el sitio del cliente)
```

- Home del portafolio: Eye Care Hub como **proyecto destacado con narrativa de negocio** (oficina de óptica sin caos de citas), **sin cifras**.
- Enlazar eslabones donde aporte (el portafolio ya enlaza a ingaamira.com en el footer).

## Orden de ejecución

1. Fase 0 (commit/despliegue del trabajo en vuelo + verificación prerender).
2. Fase 1 (GA, link roto, lang es, demos 🌐, medición).
3. Fase 2 (paleta, tipografía, logo).
4. Fase 3 (copy por audiencia + CTA diagnóstico).
5. Fase 4 (cadena de casos).
6. Verificación final + deploy.

## Verificación

- [ ] `ng build` sin errores; prerender con texto real en `/`, `/portfolio`, `/resume`, `/contact` (curl).
- [ ] GA4 sin `traffic_type: internal`; tráfico real visible en modo depuración.
- [ ] hreflang es/en/x-default correctos (sin regresión del trabajo en vuelo).
- [ ] Paleta azul/blanco/negro, tipografía de marca, logo hexagonal en toda la web.
- [ ] CTA diagnóstico → WhatsApp con mensaje exacto.
- [ ] Eye Care Hub con narrativa de negocio y demo enlazada; caso sin cifras.
- [ ] `/resume` intacto.

## Guardrails

- ❌ No pisar los 8 archivos sin commitear (Fase 0 primero; si hay duda, consultar al dueño antes de descartar nada).
- ❌ Sin cifras inventadas (regla del repo de contenido).
- ❌ No romper SEO/hreflang en vuelo ni rutas existentes.
- ❌ No tocar `/resume` salvo arreglo técnico puntual.
- 📌 El repo web tiene su propio `AGENTS.md` y `MEMORY.md`: respetarlos al ejecutar allí.

## Coherencia con los otros dos planes

- Mismo mensaje de WhatsApp de diagnóstico (texto exacto idéntico).
- Mismo caso Opticarlo's cualitativo con `opticarlos.ingaamira.com`.
- UTM consistentes desde Instagram en las tres webs.
- El checklist no se añade al portafolio (no fue seleccionado; vive en www + social).
