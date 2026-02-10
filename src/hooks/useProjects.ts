import { useState, useEffect } from "react";
import type { Project } from "../utils/types";

// In production, fetch from the awesome-foss repo's generated JSON.
// During local development, fall back to the bundled copy.
const PROJECTS_URL =
  "https://raw.githubusercontent.com/vcet-foss/awesome-foss/main/dev/generated/projects.json";

// Bundled fallback for local development / offline
const FALLBACK_PROJECTS: Project[] = [
  {
    slug: "lan-share-app",
    name: "LAN Share App",
    tagline: "A peer-to-peer file sharing app for local networks",
    description:
      "A peer-to-peer file sharing app for local networks. It allows users to share files with others in their local network.",
    status: "active",
    difficulty: "beginner",
    tech_stack: ["React", "Node.js", "Socket.io"],
    github_repo: "https://github.com/riteshgharat/lan-share-app",
    maintainers: [
      { name: "Ritesh Gharat", contact: "https://github.com/riteshgharat" },
      {
        name: "Prashant Dhuri",
        contact: "https://github.com/PrashantDhuri08",
      },
    ],
    looking_for_contributors: true,
  },
];

interface UseProjectsResult {
  projects: Project[];
  loading: boolean;
  error: string | null;
}

export function useProjects(): UseProjectsResult {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;

    async function fetchProjects() {
      try {
        const res = await fetch(PROJECTS_URL);
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const data: Project[] = await res.json();
        if (!cancelled) {
          setProjects(data);
          setError(null);
        }
      } catch {
        // Fall back to bundled data
        if (!cancelled) {
          setProjects(FALLBACK_PROJECTS);
          setError(null); // silent fallback — don't scare users
        }
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    fetchProjects();
    return () => {
      cancelled = true;
    };
  }, []);

  return { projects, loading, error };
}
