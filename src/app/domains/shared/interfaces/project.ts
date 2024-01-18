import { Tag } from "../classes/tag";

export interface Project {
  id: number;
  name: string;
  summary: string;
  description: string;
  projectLink: string;
  pictures: string[];
  tags: Tag[];
}
