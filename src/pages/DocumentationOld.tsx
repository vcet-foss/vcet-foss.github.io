import React from "react";
import { Book, Code, Terminal, GitBranch, FileText, ExternalLink } from "lucide-react";
import { NavLink } from "react-router-dom";
import RevealOnScroll from "../components/RevealOnScroll.tsx";
import GlitchText from "../components/GlitchText";

interface DocSection {
    id: string;
    title: string;
    icon: React.ReactNode;
    description: string;
    links: Array<{
        label: string;
        url: string;
        external?: boolean;
    }>;
}

const DOC_SECTIONS: DocSection[] = [
    {
        id: "getting-started",
        title: "Getting Started",
        icon: <Book className="w-6 h-6" />,
        description: "New to open source or VCET FOSS? Start here to learn the basics.",
        links: [
            { label: "What is Open Source?", url: "https://opensource.guide/", external: true },
            { label: "How to Contribute", url: "#/community" },
            { label: "Finding Your First Issue", url: "https://github.com/vcet-foss", external: true },
            { label: "Join Our Discord", url: "https://discord.gg/BHcWFfXzMm", external: true },
        ],
    },
    {
        id: "git-github",
        title: "Git & GitHub",
        icon: <GitBranch className="w-6 h-6" />,
        description: "Master version control and collaboration workflows.",
        links: [
            { label: "Git Basics Tutorial", url: "https://git-scm.com/book/en/v2", external: true },
            { label: "GitHub Flow", url: "https://guides.github.com/introduction/flow/", external: true },
            { label: "Pull Request Best Practices", url: "https://github.blog/developer-skills/github/how-to-write-the-perfect-pull-request/", external: true },
            { label: "VCET FOSS GitHub Org", url: "https://github.com/vcet-foss", external: true },
        ],
    },
    {
        id: "contributing",
        title: "Contributing to Projects",
        icon: <Code className="w-6 h-6" />,
        description: "Guidelines for contributing code, documentation, and more.",
        links: [
            { label: "Project Guidelines", url: "#/project-guidelines" },
            { label: "Code of Conduct", url: "#/code-of-conduct" },
            { label: "awesome-foss Contributing Guide", url: "https://github.com/vcet-foss/awesome-foss/blob/main/CONTRIBUTING.md", external: true },
            { label: "Issue Templates", url: "https://github.com/vcet-foss", external: true },
        ],
    },
    {
        id: "development",
        title: "Development Setup",
        icon: <Terminal className="w-6 h-6" />,
        description: "Set up your local environment and tools.",
        links: [
            { label: "Node.js Installation", url: "https://nodejs.org/", external: true },
            { label: "Python Setup", url: "https://www.python.org/downloads/", external: true },
            { label: "VS Code Extensions", url: "https://code.visualstudio.com/docs/editor/extension-marketplace", external: true },
            { label: "Docker Getting Started", url: "https://docs.docker.com/get-started/", external: true },
        ],
    },
];

const Documentation: React.FC = () => {
    return (
        <div className="pt-32 pb-24 min-h-screen bg-black">
            <div className="max-w-6xl mx-auto px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-16">
                    <RevealOnScroll>
                        <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-6 jersey-25-regular">
                            <GlitchText text="Documentation" speed={40} />
                        </h1>
                        <p className="text-xl text-gray-400 font-sans max-w-2xl mx-auto">
                            Everything you need to know to get started with VCET FOSS. From basics to advanced workflows.
                        </p>
                    </RevealOnScroll>
                </div>

                {/* Quick Links */}
                <RevealOnScroll delay={100}>
                    <div className="mb-16 border border-foss-green/20 bg-foss-green/[0.05] p-8">
                        <h2 className="text-2xl font-display font-bold text-white mb-4 flex items-center gap-3 jersey-25-regular tracking-wide text-3xl">
                            <FileText className="w-6 h-6 text-foss-green" />
                            Quick Links
                        </h2>
                        <div className="grid md:grid-cols-3 gap-4">
                            <NavLink
                                to="/projects"
                                className="block p-4 border border-white/10 bg-white/[0.02] hover:border-foss-green/50 transition-all"
                            >
                                <div className="text-foss-green font-mono text-sm mb-1">Browse</div>
                                <div className="text-white font-sans">Our Projects</div>
                            </NavLink>
                            <NavLink
                                to="/code-of-conduct"
                                className="block p-4 border border-white/10 bg-white/[0.02] hover:border-foss-green/50 transition-all"
                            >
                                <div className="text-foss-green font-mono text-sm mb-1">Read</div>
                                <div className="text-white font-sans">Code of Conduct</div>
                            </NavLink>
                            <NavLink
                                to="/events"
                                className="block p-4 border border-white/10 bg-white/[0.02] hover:border-foss-green/50 transition-all"
                            >
                                <div className="text-foss-green font-mono text-sm mb-1">Join</div>
                                <div className="text-white font-sans">Upcoming Events</div>
                            </NavLink>
                        </div>
                    </div>
                </RevealOnScroll>

                {/* Documentation Sections */}
                <div className="grid gap-8">
                    {DOC_SECTIONS.map((section, idx) => (
                        <RevealOnScroll key={section.id} delay={150 + idx * 100}>
                            <DocCard section={section} />
                        </RevealOnScroll>
                    ))}
                </div>

                {/* Help Section */}
                <RevealOnScroll delay={500}>
                    <div className="mt-16 border border-white/10 bg-white/[0.02] p-8 text-center">
                        <h3 className="text-2xl font-display font-bold text-white mb-4 jersey-25-regular tracking-wide text-3xl">
                            Need Help?
                        </h3>
                        <p className="text-gray-400 font-sans mb-6 max-w-2xl mx-auto">
                            Can't find what you're looking for? Join our Discord community or reach out via email.
                            We're here to help!
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <NavLink
                                to="https://discord.gg/BHcWFfXzMm"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block px-6 py-3 bg-foss-green text-black font-mono text-sm hover:bg-foss-green/90 transition-colors"
                            >
                                Join Discord
                            </NavLink>
                            <NavLink
                                to="mailto:vcetopensource@gmail.com"
                                className="inline-block px-6 py-3 border border-white/10 text-white font-mono text-sm hover:border-foss-green/50 transition-colors"
                            >
                                Email Us
                            </NavLink>
                        </div>
                    </div>
                </RevealOnScroll>
            </div>
        </div>
    );
};

// Documentation Card Component
const DocCard: React.FC<{ section: DocSection }> = ({ section }) => {
    return (
        <div className="border border-white/10 bg-white/[0.02] p-8 hover:border-foss-green/30 transition-all">
            <div className="flex items-start gap-4 mb-4">
                <div className="text-foss-green flex-shrink-0 mt-1">{section.icon}</div>
                <div className="flex-1">
                    <h2 className="text-2xl font-display font-bold text-white mb-2 jersey-25-regular tracking-wide text-3xl">
                        {section.title}
                    </h2>
                    <p className="text-gray-400 font-sans text-sm mb-6">
                        {section.description}
                    </p>

                    <ul className="space-y-3">
                        {section.links.map((link, idx) => (
                            <li key={idx}>
                                <NavLink
                                    to={link.url}
                                    target={link.external ? "_blank" : undefined}
                                    rel={link.external ? "noopener noreferrer" : undefined}
                                    className="inline-flex items-center gap-2 text-foss-green hover:text-foss-green/80 font-mono text-sm transition-colors"
                                >
                                    {link.label}
                                    {link.external && <ExternalLink className="w-3 h-3" />}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Documentation;
