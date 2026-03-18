import { TagType } from "@domain/models/tag.model";

interface FilterItem {
  name: string;
  binding: TagType;
}

export interface Category {
  title: string;
  items: FilterItem[];
}
