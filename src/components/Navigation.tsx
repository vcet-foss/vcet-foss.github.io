import React, { useState, useEffect } from "react";
import { Menu, X, Star, Github } from "lucide-react";
import type { Tab } from "../utils/types";
import Button from "./Button";
import Logo from "../assets/vcet-foss-light.svg";

const GITHUB_ORG = "vcet-foss";
const GITHUB_URL = `https://github.com/${GITHUB_ORG}`;

interface NavigationProps {
  activeTab: Tab;
  setActiveTab: (tab: Tab) => void;
}

const Navigation: React.FC<NavigationProps> = ({ activeTab, setActiveTab }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [starCount, setStarCount] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    async function fetchStars() {
      try {
        const res = await fetch(
          `https://api.github.com/orgs/${GITHUB_ORG}/repos?per_page=100`
        );
        if (!res.ok) return;
        const repos = await res.json();
        const total = repos.reduce(
          (sum: number, repo: { stargazers_count: number }) =>
            sum + repo.stargazers_count,
          0
        );
        setStarCount(total);
      } catch {
        // silent fail
      }
    }
    fetchStars();
  }, []);

  const navItems: { id: Tab; label: string }[] = [
    { id: "home", label: "Home" },
    { id: "projects", label: "Projects" },
    { id: "community", label: "Community" },
    { id: "about", label: "About" },
  ];

  const handleNavClick = (id: Tab) => {
    setActiveTab(id);
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${isScrolled
        ? "bg-black/80 backdrop-blur-md border-white/10 py-4"
        : "bg-transparent border-transparent py-6"
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div
            className="flex items-center gap-2 cursor-pointer group"
            onClick={() => handleNavClick("home")}
          >
            <img
              src={Logo}
              alt="VCET FOSS Logo"
              className="h-8 md:h-10 w-auto"
            />
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`text-sm font-mono transition-colors relative group ${activeTab === item.id
                  ? "text-foss-green"
                  : "text-gray-400 hover:text-white"
                  }`}
              >
                {item.label}
                <span
                  className={`absolute -bottom-1 left-0 h-0.5 bg-foss-green transition-all duration-300 ${activeTab === item.id ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                ></span>
              </button>
            ))}
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-1.5 border border-white/10 hover:border-foss-green/50 rounded-full text-sm font-mono text-gray-300 hover:text-white transition-all group"
            >
              <Github className="w-4 h-4 group-hover:text-foss-green transition-colors" />
              {starCount !== null && (
                <>
                  <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" />
                  <span className="text-xs">{starCount}</span>
                </>
              )}
            </a>
            <Button
              variant="outline"
              size="sm"
              onClick={() => handleNavClick("community")}
            >
              Join Us
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white p-1"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-black border-b border-white/10 p-6 animate-in fade-in slide-in-from-top-4">
          <div className="flex flex-col space-y-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`text-left text-lg font-mono py-2 border-l-2 pl-4 transition-colors ${activeTab === item.id
                  ? "text-foss-green border-foss-green bg-foss-green/5"
                  : "text-gray-400 border-transparent hover:text-white"
                  }`}
              >
                {item.label}
              </button>
            ))}
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-3 border border-white/10 font-mono text-gray-300 hover:text-white hover:border-foss-green/50 transition-all"
            >
              <Github className="w-4 h-4" />
              <span>GitHub</span>
              {starCount !== null && (
                <span className="flex items-center gap-1 ml-1">
                  <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" />
                  <span className="text-xs">{starCount}</span>
                </span>
              )}
            </a>
            <Button
              variant="primary"
              className="w-full mt-2"
              onClick={() => handleNavClick("community")}
            >
              Join Discord
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
