export interface Project {
  id: string;
  name: string;
  description: string;
  tech: string[];
  status: "active" | "looking-for-contributors" | "idea" | "completed";
  githubUrl?: string;
  demoUrl?: string;
  stars?: number;
}

export interface NavItem {
  label: string;
  href: string; // Using hash routing logic
}

export type Tab = "home" | "projects" | "community" | "about";
