import React, { useState } from "react";
import { Search, Loader2 } from "lucide-react";
import ProjectCard from "../components/ProjectCard";
import { useProjects } from "../hooks/useProjects";

type StatusFilter = "all" | "active" | "dormant" | "idea";
type DifficultyFilter = "all" | "beginner" | "intermediate" | "advanced";

const Projects: React.FC = () => {
  const { projects, loading, error } = useProjects();
  const [statusFilter, setStatusFilter] = useState<StatusFilter>("all");
  const [difficultyFilter, setDifficultyFilter] =
    useState<DifficultyFilter>("all");
  const [search, setSearch] = useState("");

  const filteredProjects = projects.filter((project) => {
    const matchesStatus =
      statusFilter === "all" ? true : project.status === statusFilter;

    const matchesDifficulty =
      difficultyFilter === "all"
        ? true
        : project.difficulty === difficultyFilter;

    const q = search.toLowerCase();
    const matchesSearch =
      !q ||
      project.name.toLowerCase().includes(q) ||
      project.tagline.toLowerCase().includes(q) ||
      project.description.toLowerCase().includes(q) ||
      project.tech_stack.some((t) => t.toLowerCase().includes(q));

    return matchesStatus && matchesDifficulty && matchesSearch;
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
        <div className="flex flex-col gap-6 mb-12 border-b border-white/10 pb-8">
          {/* Search bar */}
          <div className="relative max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
            <input
              type="text"
              placeholder="Search by name, stack, or description..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-white/5 border border-white/10 py-3 pl-10 pr-4 text-white focus:outline-none focus:border-foss-green font-mono text-sm placeholder:text-gray-600 transition-colors"
            />
          </div>

          {/* Status filter */}
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0">
              {(
                [
                  ["all", "All Projects"],
                  ["active", "Active"],
                  ["dormant", "Dormant"],
                  ["idea", "Ideas"],
                ] as [StatusFilter, string][]
              ).map(([value, label]) => (
                <button
                  key={value}
                  onClick={() => setStatusFilter(value)}
                  className={`px-4 py-2 text-sm font-mono border whitespace-nowrap transition-colors ${statusFilter === value
                      ? "bg-foss-green text-black border-foss-green"
                      : "text-gray-400 border-white/10 hover:border-white/30"
                    }`}
                >
                  {label}
                </button>
              ))}
            </div>

            {/* Difficulty filter */}
            <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0 md:ml-auto">
              {(
                [
                  ["all", "Any Level"],
                  ["beginner", "Beginner"],
                  ["intermediate", "Intermediate"],
                  ["advanced", "Advanced"],
                ] as [DifficultyFilter, string][]
              ).map(([value, label]) => (
                <button
                  key={value}
                  onClick={() => setDifficultyFilter(value)}
                  className={`px-4 py-2 text-sm font-mono border whitespace-nowrap transition-colors ${difficultyFilter === value
                      ? "bg-white text-black border-white"
                      : "text-gray-400 border-white/10 hover:border-white/30"
                    }`}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Loading state */}
        {loading && (
          <div className="flex items-center justify-center py-20">
            <Loader2 className="w-8 h-8 text-foss-green animate-spin" />
            <span className="ml-3 text-gray-400 font-mono">
              Loading projects...
            </span>
          </div>
        )}

        {/* Error state */}
        {error && (
          <div className="text-center py-20 border border-dashed border-red-500/30">
            <p className="text-red-400 font-mono text-lg">{error}</p>
          </div>
        )}

        {/* Grid */}
        {!loading && !error && (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.map((project) => (
                <ProjectCard key={project.slug} project={project} />
              ))}
            </div>

            {filteredProjects.length === 0 && (
              <div className="text-center py-20 border border-dashed border-white/10">
                <p className="text-gray-500 font-mono text-lg">
                  No projects found matching your criteria.
                </p>
                <button
                  onClick={() => {
                    setStatusFilter("all");
                    setDifficultyFilter("all");
                    setSearch("");
                  }}
                  className="mt-4 text-foss-green hover:underline font-mono"
                >
                  Clear filters
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Projects;
