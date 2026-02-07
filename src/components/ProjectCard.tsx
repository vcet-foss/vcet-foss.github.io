import React from "react";
import type { Project } from "../utils/types";
import { Github, ExternalLink, Star, GitFork } from "lucide-react";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const statusColors = {
    active: "text-foss-green border-foss-green",
    "looking-for-contributors": "text-yellow-400 border-yellow-400",
    idea: "text-blue-400 border-blue-400",
    completed: "text-gray-400 border-gray-400",
  };

  const statusLabels = {
    active: "Active",
    "looking-for-contributors": "Help Wanted",
    idea: "Idea Phase",
    completed: "Archived",
  };

  return (
    <div className="group relative border border-gray-800 bg-gray-950/50 p-6 transition-all duration-300 hover:border-foss-green hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(0,255,127,0.1)] flex flex-col h-full">
      <div className="absolute top-0 right-0 p-2 opacity-0 group-hover:opacity-100 transition-opacity">
        <ExternalLink className="w-4 h-4 text-foss-green" />
      </div>

      <div className="mb-4">
        <span
          className={`inline-block px-2 py-0.5 text-xs font-mono border ${statusColors[project.status]}`}
        >
          {statusLabels[project.status]}
        </span>
      </div>

      <h3 className="text-xl font-display font-bold text-white mb-2 group-hover:text-foss-green transition-colors">
        {project.name}
      </h3>

      <p className="text-gray-400 text-sm mb-6 flex-grow font-sans leading-relaxed">
        {project.description}
      </p>

      <div className="space-y-4 mt-auto">
        <div className="flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 bg-white/5 text-gray-300 text-xs font-mono"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-between pt-4 border-t border-gray-800">
          <div className="flex gap-4 text-gray-500 text-sm font-mono">
            {project.stars !== undefined && (
              <div className="flex items-center gap-1">
                <Star className="w-3 h-3" />
                <span>{project.stars}</span>
              </div>
            )}
            <div className="flex items-center gap-1">
              <GitFork className="w-3 h-3" />
              <span>Fork</span>
            </div>
          </div>

          <a
            href={project.githubUrl}
            className="flex items-center gap-2 text-sm font-medium text-white hover:text-foss-green transition-colors"
          >
            <Github className="w-4 h-4" />
            <span>Code</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
