export interface Certification {
  id: number;

  title: string;

  institution: string;

  type: "Curso" | "Taller" | "Licencia" | "Certificación";

  location: string;

  start: string;

  end: string;

  description: string;

  technologies: string[];

  image: string;

  thumbnail?: string;

  credentialId?: string;

  credentialUrl?: string;

  skills?: string[];
}