export interface WorkProps {
  name: string;
  description: string;
  website: string;
  logo: string | null;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  git_repo_url: string;
  tech_stack: string[];
  project_website?: string;
  logo?: string;
  cover_image?: string;
  category_id: number;
  created_at: string;
  updated_at: string;
}

export interface Portfolio {
  id: number;
  name: string;
  slug: string;
  description: string;
  created_at: string;
  updated_at: string;
  projects: Project[];
}
