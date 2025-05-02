import { Tag } from "../classes/tag";

export interface Project {
  id: number;
  name: string;
  summary: string;
  projectLink: string;
  pictures: string[];
  tags: Tag[];
}
