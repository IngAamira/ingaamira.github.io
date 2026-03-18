import { TagType } from "@domain/models/tag.model";

export const TAG_COLORS: Record<TagType, string> = {

  [TagType.JAVA]: '#708090',
  [TagType.PYTHON]: '#4682B4',
  [TagType.JAVASCRIPT]: '#e0e010',
  [TagType.TYPESCRIPT]: '#1E90FF',
  [TagType.SPRING_BOOT]: '#228B22',
  [TagType.ANGULAR]: '#FF0000',
  [TagType.NODE_JS]: '#b2b228',
  [TagType.FAST_API]: '#00FF00',
  [TagType.POSTGRES]: '#A52A2A',
  [TagType.HTML]: '#643321',
  [TagType.CSS]: '#00BFFF',
  [TagType.BOOTSTRAP]: '#8A2BE2',
  [TagType.THYMELEAF]: '#006400',
  [TagType.OPEN_AI]: '#FF1493',
  [TagType.GIPHY]: '#FF69B4',
  [TagType.WHATSAPP_API]: '#4CAF50'

} as const;
