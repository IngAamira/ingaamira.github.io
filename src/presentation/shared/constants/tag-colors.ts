import { TagType } from "@domain/models/tag.model";

/**
 * Chips de tags para el tema dark: fondo translúcido + texto/limite del mismo
 * matiz (dark tech). Son clases Tailwind — el contenido de este archivo entra
 * en el purgelist (`content: src/**`), por lo que se generan aunque sean dinámicas.
 */
export const TAG_COLORS: Record<TagType, string> = {

  [TagType.JAVA]: 'text-orange-200 bg-orange-500/10 border border-orange-500/40',
  [TagType.PYTHON]: 'text-blue-200 bg-blue-500/10 border border-blue-500/40',
  [TagType.JAVASCRIPT]: 'text-yellow-200 bg-yellow-500/10 border border-yellow-500/40',
  [TagType.TYPESCRIPT]: 'text-sky-200 bg-sky-500/10 border border-sky-500/40',
  [TagType.SPRING_BOOT]: 'text-green-200 bg-green-500/10 border border-green-500/40',
  [TagType.ANGULAR]: 'text-red-200 bg-red-500/10 border border-red-500/40',
  [TagType.NODE_JS]: 'text-lime-200 bg-lime-500/10 border border-lime-500/40',
  [TagType.FAST_API]: 'text-teal-200 bg-teal-500/10 border border-teal-500/40',
  [TagType.POSTGRES]: 'text-cyan-200 bg-cyan-500/10 border border-cyan-500/40',
  [TagType.HTML]: 'text-orange-300 bg-orange-500/10 border border-orange-500/40',
  [TagType.CSS]: 'text-sky-300 bg-sky-500/10 border border-sky-500/40',
  [TagType.BOOTSTRAP]: 'text-violet-200 bg-violet-500/10 border border-violet-500/40',
  [TagType.THYMELEAF]: 'text-emerald-200 bg-emerald-500/10 border border-emerald-500/40',
  [TagType.OPEN_AI]: 'text-pink-200 bg-pink-500/10 border border-pink-500/40',
  [TagType.GIPHY]: 'text-fuchsia-200 bg-fuchsia-500/10 border border-fuchsia-500/40',
  [TagType.WHATSAPP_API]: 'text-emerald-300 bg-emerald-500/10 border border-emerald-500/40'

} as const;
