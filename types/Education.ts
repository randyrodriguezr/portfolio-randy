export interface Education {
  id: number;

  institution: string;

  degree: string;

  location: string;

  start: string;

  end: string;

  description: string;

  technologies: string[];

  image?: string;

  url?: string;
}