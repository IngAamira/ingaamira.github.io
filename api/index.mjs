// Punto de entrada de la función serverless de Vercel para el SSR de Angular.
// Vercel llega aquí SOLO cuando la fase "filesystem" no encuentra un archivo
// estático coincidente (ver vercel.json). Angular procesa entonces la ruta real
// (incluyendo la redirección 302 de "/" por Accept-Language y el wildcard "**"
// que debe responder 404) en lugar de que Vercel sirva el bundle del servidor
// como si fuera un asset estático.
export default async function handler(req, res) {
  const { reqHandler } = await import(
    '../dist/portfolio-ingaamira-lab/server/server.mjs'
  );
  return reqHandler(req, res);
}
