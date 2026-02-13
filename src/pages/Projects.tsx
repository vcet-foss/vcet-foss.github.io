import React, { useState, useMemo, useRef, useEffect } from "react";
import { Search, Loader2, SlidersHorizontal, X, ChevronDown } from "lucide-react";
import ProjectCard from "../components/ProjectCard";
import { useProjects } from "../hooks/useProjects";
import { DOMAIN_OPTIONS, SORT_OPTIONS } from "../utils/constants";
import type { SortOption } from "../utils/constants";
import type { Domain } from "../utils/types";

type StatusFilter = "all" | "active" | "dormant" | "idea";
type DifficultyFilter = "all" | "beginner" | "intermediate" | "advanced";
type DomainFilter = "all" | Domain;

const Projects: React.FC = () => {
  const { projects, loading, error } = useProjects();
  const [statusFilter, setStatusFilter] = useState<StatusFilter>("all");
  const [difficultyFilter, setDifficultyFilter] =
    useState<DifficultyFilter>("all");
  const [domainFilter, setDomainFilter] = useState<DomainFilter>("all");
  const [sortBy, setSortBy] = useState<SortOption>("name-asc");
  const [search, setSearch] = useState("");
  const [filtersOpen, setFiltersOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);
  const [panelHeight, setPanelHeight] = useState(0);

  // Measure the panel's scroll height whenever it opens or content changes
  useEffect(() => {
    if (panelRef.current) {
      setPanelHeight(panelRef.current.scrollHeight);
    }
  }, [filtersOpen, statusFilter, difficultyFilter, domainFilter, sortBy]);

  const hasActiveFilters =
    statusFilter !== "all" ||
    difficultyFilter !== "all" ||
    domainFilter !== "all" ||
    sortBy !== "name-asc";

  const activeFilterCount = [
    statusFilter !== "all",
    difficultyFilter !== "all",
    domainFilter !== "all",
    sortBy !== "name-asc",
  ].filter(Boolean).length;

  const clearAll = () => {
    setStatusFilter("all");
    setDifficultyFilter("all");
    setDomainFilter("all");
    setSortBy("name-asc");
    setSearch("");
  };

  const processedProjects = useMemo(() => {
    const filtered = projects.filter((project) => {
      const matchesStatus =
        statusFilter === "all" ? true : project.status === statusFilter;

      const matchesDifficulty =
        difficultyFilter === "all"
          ? true
          : project.difficulty === difficultyFilter;

      const matchesDomain =
        domainFilter === "all"
          ? true
          : (project.domain ?? []).includes(domainFilter as Domain);

      const q = search.toLowerCase();
      const matchesSearch =
        !q ||
        project.name.toLowerCase().includes(q) ||
        project.tagline.toLowerCase().includes(q) ||
        project.description.toLowerCase().includes(q) ||
        project.tech_stack.some((t) => t.toLowerCase().includes(q)) ||
        (project.domain ?? []).some((d) => d.toLowerCase().includes(q));

      return matchesStatus && matchesDifficulty && matchesDomain && matchesSearch;
    });

    const statusOrder: Record<string, number> = {
      active: 0,
      dormant: 1,
      idea: 2,
    };

    const sorted = [...filtered].sort((a, b) => {
      switch (sortBy) {
        case "name-asc":
          return a.name.localeCompare(b.name);
        case "name-desc":
          return b.name.localeCompare(a.name);
        case "status": {
          const sa = statusOrder[a.status] ?? 9;
          const sb = statusOrder[b.status] ?? 9;
          if (sa !== sb) return sa - sb;
          return a.name.localeCompare(b.name);
        }
        case "domain": {
          const da = (a.domain ?? [])[0] ?? "zzz";
          const db = (b.domain ?? [])[0] ?? "zzz";
          if (da !== db) return da.localeCompare(db);
          return a.name.localeCompare(b.name);
        }
        default:
          return 0;
      }
    });

    return sorted;
  }, [projects, statusFilter, difficultyFilter, domainFilter, sortBy, search]);

  const domainCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    projects.forEach((p) => {
      (p.domain ?? []).forEach((d) => {
        counts[d] = (counts[d] ?? 0) + 1;
      });
    });
    return counts;
  }, [projects]);

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

        {/* ═══════════ Search & Filter Bar ═══════════ */}
        <div className="mb-12 border border-white/10 bg-white/[0.02]">
          {/* Always visible: Search + Filter toggle */}
          <div className="flex flex-col sm:flex-row gap-3 p-4 md:p-5">
            {/* Search */}
            <div className="relative flex-1 max-w-lg">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
              <input
                type="text"
                placeholder="Search by name, stack, domain..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full bg-black/50 border border-white/10 py-3 pl-10 pr-4 text-white focus:outline-none focus:border-foss-green font-mono text-sm placeholder:text-gray-600 transition-colors"
              />
              {search && (
                <button
                  onClick={() => setSearch("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-white transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Filter toggle button */}
            <div className="flex items-center gap-2 sm:ml-auto">
              <button
                onClick={() => setFiltersOpen((prev) => !prev)}
                className={`flex items-center gap-2 px-4 py-3 text-sm font-mono border transition-all duration-200 ${filtersOpen
                  ? "bg-foss-green text-black border-foss-green shadow-[0_0_12px_rgba(0,255,127,0.2)]"
                  : "text-gray-400 border-white/10 hover:border-white/30 hover:text-white"
                  }`}
              >
                <SlidersHorizontal className="w-4 h-4" />
                <span>Sort & Filter</span>
                {hasActiveFilters && !filtersOpen && (
                  <span className="flex items-center justify-center w-5 h-5 text-[10px] font-bold bg-foss-green text-black rounded-full">
                    {activeFilterCount}
                  </span>
                )}
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${filtersOpen ? "rotate-180" : ""
                    }`}
                />
              </button>

              {hasActiveFilters && (
                <button
                  onClick={clearAll}
                  className="flex items-center gap-1 px-3 py-3 text-xs font-mono text-gray-500 hover:text-foss-green border border-white/10 hover:border-foss-green/30 transition-colors"
                  title="Clear all filters"
                >
                  <X className="w-3 h-3" />
                  Reset
                </button>
              )}
            </div>
          </div>

          {/* Collapsible filter panel */}
          <div
            className="overflow-hidden transition-all duration-300 ease-in-out"
            style={{ maxHeight: filtersOpen ? `${panelHeight}px` : "0px" }}
          >
            <div
              ref={panelRef}
              className="border-t border-white/10 p-4 md:p-5 flex flex-col gap-5"
            >
              {/* Sort */}
              <div className="flex flex-col gap-2">
                <span className="text-xs text-gray-500 font-mono uppercase tracking-wider">
                  Sort by
                </span>
                <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
                  {SORT_OPTIONS.map((opt) => (
                    <button
                      key={opt.value}
                      onClick={() => setSortBy(opt.value)}
                      className={`px-4 py-2 text-sm font-mono border whitespace-nowrap transition-all duration-200 ${sortBy === opt.value
                        ? "bg-foss-green text-black border-foss-green shadow-[0_0_12px_rgba(0,255,127,0.2)]"
                        : "text-gray-400 border-white/10 hover:border-white/30 hover:text-white"
                        }`}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Domain filter */}
              <div className="flex flex-col gap-2">
                <span className="text-xs text-gray-500 font-mono uppercase tracking-wider">
                  Domain
                </span>
                <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
                  <button
                    onClick={() => setDomainFilter("all")}
                    className={`px-4 py-2 text-sm font-mono border whitespace-nowrap transition-all duration-200 ${domainFilter === "all"
                      ? "bg-foss-green text-black border-foss-green shadow-[0_0_12px_rgba(0,255,127,0.2)]"
                      : "text-gray-400 border-white/10 hover:border-white/30 hover:text-white"
                      }`}
                  >
                    All Domains
                  </button>
                  {DOMAIN_OPTIONS.map((domain) => (
                    <button
                      key={domain}
                      onClick={() => setDomainFilter(domain as DomainFilter)}
                      className={`px-4 py-2 text-sm font-mono border whitespace-nowrap transition-all duration-200 flex items-center gap-2 ${domainFilter === domain
                        ? "bg-foss-green text-black border-foss-green shadow-[0_0_12px_rgba(0,255,127,0.2)]"
                        : "text-gray-400 border-white/10 hover:border-white/30 hover:text-white"
                        }`}
                    >
                      {domain}
                      {domainCounts[domain] ? (
                        <span
                          className={`text-xs px-1.5 py-0.5 rounded-full ${domainFilter === domain
                            ? "bg-black/20 text-black"
                            : "bg-white/10 text-gray-500"
                            }`}
                        >
                          {domainCounts[domain]}
                        </span>
                      ) : null}
                    </button>
                  ))}
                </div>
              </div>

              {/* Status + Difficulty row */}
              <div className="flex flex-col md:flex-row gap-4">
                {/* Status */}
                <div className="flex flex-col gap-2">
                  <span className="text-xs text-gray-500 font-mono uppercase tracking-wider">
                    Status
                  </span>
                  <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
                    {(
                      [
                        ["all", "All"],
                        ["active", "Active"],
                        ["dormant", "Dormant"],
                        ["idea", "Ideas"],
                      ] as [StatusFilter, string][]
                    ).map(([value, label]) => (
                      <button
                        key={value}
                        onClick={() => setStatusFilter(value)}
                        className={`px-4 py-2 text-sm font-mono border whitespace-nowrap transition-all duration-200 ${statusFilter === value
                          ? "bg-foss-green text-black border-foss-green shadow-[0_0_12px_rgba(0,255,127,0.2)]"
                          : "text-gray-400 border-white/10 hover:border-white/30 hover:text-white"
                          }`}
                      >
                        {label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Difficulty */}
                <div className="flex flex-col gap-2 md:ml-auto">
                  <span className="text-xs text-gray-500 font-mono uppercase tracking-wider">
                    Difficulty
                  </span>
                  <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
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
                        className={`px-4 py-2 text-sm font-mono border whitespace-nowrap transition-all duration-200 ${difficultyFilter === value
                          ? "bg-white text-black border-white"
                          : "text-gray-400 border-white/10 hover:border-white/30 hover:text-white"
                          }`}
                      >
                        {label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Result count bar (visible when filters active) */}
          {(hasActiveFilters || search) && (
            <div className="flex items-center gap-3 px-4 md:px-5 py-2.5 border-t border-white/5">
              <span className="text-xs text-gray-500 font-mono">
                {processedProjects.length} project
                {processedProjects.length !== 1 ? "s" : ""} found
              </span>
            </div>
          )}
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
              {processedProjects.map((project) => (
                <ProjectCard key={project.slug} project={project} />
              ))}
            </div>

            {processedProjects.length === 0 && (
              <div className="text-center py-20 border border-dashed border-white/10">
                <p className="text-gray-500 font-mono text-lg">
                  No projects found matching your criteria.
                </p>
                <button
                  onClick={clearAll}
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
