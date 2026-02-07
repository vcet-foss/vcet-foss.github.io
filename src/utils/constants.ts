import type { Project } from "./types";
import {
  Layout,
  Code,
  Users,
  Terminal,
  Database,
  Globe,
  Cpu,
} from "lucide-react";

export const PROJECTS: Project[] = [
  {
    id: "1",
    name: "Campus Attendance System",
    description:
      "RFID based attendance tracking system with a React dashboard for real-time analytics.",
    tech: ["ESP32", "React", "Firebase"],
    status: "active",
    githubUrl: "#",
    stars: 12,
  },
  {
    id: "2",
    name: "NoteShare VCET",
    description:
      "A decentralized platform for students to share and rate handwritten notes and study materials.",
    tech: ["Next.js", "IPFS", "Solidity"],
    status: "looking-for-contributors",
    githubUrl: "#",
    stars: 45,
  },
  {
    id: "3",
    name: "Canteen Pre-Order",
    description:
      "Mobile-first web app to pre-order food from the college canteen to skip the queue.",
    tech: ["Flutter", "Node.js", "PostgreSQL"],
    status: "idea",
    githubUrl: "#",
  },
  {
    id: "4",
    name: "Event Horizon",
    description:
      "Centralized event management portal for all college clubs and hackathons.",
    tech: ["Django", "React", "Docker"],
    status: "completed",
    githubUrl: "#",
    stars: 89,
  },
  {
    id: "5",
    name: "Bus Tracker",
    description:
      "Real-time GPS tracking for college buses using student mobile devices as beacons.",
    tech: ["React Native", "Go", "Redis"],
    status: "looking-for-contributors",
    githubUrl: "#",
  },
  {
    id: "6",
    name: "VCET API",
    description:
      "An open API wrapper for the college website to programmatically access results and notices.",
    tech: ["Python", "FastAPI", "BS4"],
    status: "active",
    githubUrl: "#",
    stars: 34,
  },
];

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

export const TECH_ICONS = {
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
};
