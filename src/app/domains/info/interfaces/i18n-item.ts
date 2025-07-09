
/*Education*/
export interface Degree {
  title: string;
  dateRange: string;
}

export interface University {
  name: string;
  degrees: Degree[];
}

/*Languages*/
export interface ItemLanguage {
  name: string;
  proficiency: string;
}

/*Technical Skills*/
export interface ItemTechnicalSkill {
  category: string;
  items: (string | { name: string; subitems?: string[] })[];
}

/*Work Experience*/
export interface Job {
  title: string;
  date: string;
  title_achievements: string;
  achievements: string[];
  title_contributions: string
  contributions: string[];
}

export interface Company {
  name: string;
  jobs: Job[];
}

/*Work Sector*/
export interface ItemSector {
  title: string;
  sectors: string[];
}

/*Projects*/
export interface AboutMeTexts {
  texts: string[];
}
