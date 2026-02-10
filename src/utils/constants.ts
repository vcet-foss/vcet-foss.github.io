import {
  Layout,
  Code,
  Users,
  Terminal,
  Database,
  Globe,
  Cpu,
} from "lucide-react";

export const FEATURES = [
  {
    title: "Project Incubation",
    description:
      "We don't just hack; we build. Take your semester projects to the next level with community support.",
    icon: Layout,
  },
  {
    title: "Open Collaboration",
    description:
      "Find teammates who complement your skills. Designers, backend wizards, and frontend gurus.",
    icon: Users,
  },
  {
    title: "Code Culture",
    description:
      "Workshops, code reviews, and contribution guides to help you write production-ready code.",
    icon: Code,
  },
];

export const TECH_ICONS: Record<string, typeof Globe> = {
  React: Globe,
  "Next.js": Globe,
  "Node.js": Terminal,
  Python: Terminal,
  Go: Terminal,
  PostgreSQL: Database,
  Firebase: Database,
  ESP32: Cpu,
  Flutter: Layout,
  Docker: Database,
  MongoDB: Database,
  TypeScript: Code,
  "D3.js": Globe,
  "Tailwind CSS": Layout,
  Prisma: Database,
  Vite: Terminal,
};
