import { TagType } from "./tag.model";

export interface Project {
  id: number;
  name: string;
  summary: string[];
  projectLink: string;
  pictures: string[];
  tags: TagType[];
}
