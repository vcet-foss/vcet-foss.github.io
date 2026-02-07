import React, { useState } from "react";
import { Search } from "lucide-react";
import ProjectCard from "../components/ProjectCard";
import { PROJECTS } from "../utils/constants";
// import { Project } from "../utils/types";

const Projects: React.FC = () => {
  const [filter, setFilter] = useState<"all" | "active" | "idea">("all");
  const [search, setSearch] = useState("");

  const filteredProjects = PROJECTS.filter((project) => {
    const matchesFilter =
      filter === "all"
        ? true
        : filter === "active"
          ? project.status === "active" ||
            project.status === "looking-for-contributors"
          : project.status === "idea";

    const matchesSearch =
      project.name.toLowerCase().includes(search.toLowerCase()) ||
      project.description.toLowerCase().includes(search.toLowerCase()) ||
      project.tech.some((t) => t.toLowerCase().includes(search.toLowerCase()));

    return matchesFilter && matchesSearch;
  });

  return (
    <div className="pt-32 pb-24 min-h-screen bg-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-6">
            Our Projects
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl font-sans">
            Explore open-source initiatives built by VCET students. Contribute
            code, design, or ideas.
          </p>
        </div>

        {/* Filters & Search */}
        <div className="flex flex-col md:flex-row gap-6 mb-12 border-b border-white/10 pb-8">
          <div className="relative flex-grow max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
            <input
              type="text"
              placeholder="Search by name, stack, or description..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-white/5 border border-white/10 py-3 pl-10 pr-4 text-white focus:outline-none focus:border-foss-green font-mono text-sm placeholder:text-gray-600 transition-colors"
            />
          </div>

          <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0">
            <button
              onClick={() => setFilter("all")}
              className={`px-4 py-2 text-sm font-mono border whitespace-nowrap transition-colors ${
                filter === "all"
                  ? "bg-foss-green text-black border-foss-green"
                  : "text-gray-400 border-white/10 hover:border-white/30"
              }`}
            >
              All Projects
            </button>
            <button
              onClick={() => setFilter("active")}
              className={`px-4 py-2 text-sm font-mono border whitespace-nowrap transition-colors ${
                filter === "active"
                  ? "bg-foss-green text-black border-foss-green"
                  : "text-gray-400 border-white/10 hover:border-white/30"
              }`}
            >
              Active / Help Wanted
            </button>
            <button
              onClick={() => setFilter("idea")}
              className={`px-4 py-2 text-sm font-mono border whitespace-nowrap transition-colors ${
                filter === "idea"
                  ? "bg-foss-green text-black border-foss-green"
                  : "text-gray-400 border-white/10 hover:border-white/30"
              }`}
            >
              Ideas & Prototypes
            </button>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-20 border border-dashed border-white/10">
            <p className="text-gray-500 font-mono text-lg">
              No projects found matching your criteria.
            </p>
            <button
              onClick={() => {
                setFilter("all");
                setSearch("");
              }}
              className="mt-4 text-foss-green hover:underline font-mono"
            >
              Clear filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects;
