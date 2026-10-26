export interface Project {
  id: string;
  title: string;
  category: string;
  type: 'Full-Stack Web Application' | 'Website' | 'Web Application';
  status?: string;
  description: string;
  longDescription?: string;
  technologies: string[];
  features?: string[];
  roles?: string[];
  featured: boolean;
  year: string;
  liveUrl?: string | null;
  githubUrl?: string | null;
  image?: string;
  isHrmSpecial?: boolean;
}

export interface Skill {
  name: string;
  category: 'Frontend' | 'Backend' | 'Database' | 'Programming' | 'Tools';
  icon: string; // Lucide icon name or identifier
  shortDescription: string;
}

export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  location: string;
  period: string;
  start?: string; // ISO date, used to show how long a current role has lasted
  current: boolean;
  responsibilities: string[];
}

export interface ServiceItem {
  number: string;
  title: string;
  description: string;
  icon: string;
}

export interface EducationItem {
  degree: string;
  institution: string;
  location?: string;
  period: string;
  cgpa?: string;
  status?: string;
}

export interface CertificationItem {
  title: string;
  issuer: string;
  year: string;
}
