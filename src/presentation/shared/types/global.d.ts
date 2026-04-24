import { TagType } from "@domain/models/tag.model";

export {};

declare global {

  interface Window {
    gtag?: (...args: any[]) => void;
  }

  /* SEO */
  interface SeoData {
    title: string;
    description: string;
    url: string;
    image?: string;
    type?: string;
  }

  /* Categories */
  interface FilterItem {
    name: string;
    binding: TagType;
  }

  interface Category {
    title: string;
    items: FilterItem[];
  }

  /* Menu Header */
  interface MenuItemHeader {
    flag: string;
    img: string;
    event: () => void;
  }

  /* Title */
  interface ItemTitle {
    title: string;
  }

  /* Menu Navbar */
  interface MenuItemNav {
    route: string;
    img: string;
    name: string;
  }

  /* Menu Resume */
  interface MenuItemResume {
    name: string;
    event: () => void;
  }

  /* Menu Footer and Contact */
  interface MenuItemContact {
    url: string;
    img: string;
    flag: string;
  }

  /* i18n */

  /* Education */
  interface Degree {
    title: string;
    dateRange: string;
  }

  interface University {
    name: string;
    degrees: Degree[];
  }

  /* Languages */
  interface ItemLanguage {
    name: string;
    proficiency: string;
  }

  /* Technical Skills */
  interface ItemTechnicalSkill {
    category: string;
    items: (string | { name: string; subitems?: string[] })[];
  }

  /* Work Experience */
  interface Contribution {
    category: string;
    details: string[];
  }

  interface Job {
    title: string;
    date: string;
    title_achievements: string;
    achievements: string[];
    title_contributions: string;
    contributions: Contribution[];
  }

  interface Company {
    name: string;
    jobs: Job[];
  }

  /* Work Sector */
  interface ItemSector {
    title: string;
    sectors: string[];
  }

  /* About Me */
  interface AboutMeTexts {
    texts: string[];
  }
}
