export interface Project {
  id: number;
  title: string;
  description: string;
  gitRepoUrl: string;
  techStack: string[];
  projectWebsite: string;
  logo: string;
  coverImage: string;
  status: string;
  sortOrder: number;
  categoryId: number;
  createdAt: string;
  updatedAt: string;
}

export interface Portfolio {
  id: number;
  name: string;
  slug: string;
  description: string;
  createdAt: string;
  updatedAt: string;
  projects: Project[];
}
