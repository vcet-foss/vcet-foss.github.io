import React from "react";
import { Home, Github, Code } from "lucide-react";
import { NavLink } from "react-router-dom";
import Button from "../components/Button";

const NotFound: React.FC = () => {
    return (
        <div className="min-h-screen bg-black flex items-center justify-center px-6 relative overflow-hidden">
            {/* Animated background grid */}
            <div className="absolute inset-0 opacity-20">
                <div className="absolute top-0 inset-0"></div>
            </div>

            <div className="max-w-3xl w-full text-center relative z-10">
                {/* Main 404 Message */}
                <h1 className="text-8xl md:text-9xl font-display font-bold mb-6">
                    <span className="text-white">4</span>
                    <span className="text-foss-green animate-pulse">0</span>
                    <span className="text-white">4</span>
                </h1>

                <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
                    Lost in the Void?
                </h2>

                <p className="text-xl text-gray-400 mb-8 font-sans max-w-2xl mx-auto">
                    Looks like this page took a detour through `/dev/null`. Don't worry,
                    even the best developers encounter 404s.
                </p>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <NavLink to="/">
                        <Button variant="primary" className="flex items-center gap-2">
                            <Home className="w-4 h-4" />
                            Back to Home
                        </Button>
                    </NavLink>
                    <NavLink to="/projects">
                        <Button variant="outline" className="flex items-center gap-2">
                            <Code className="w-4 h-4" />
                            Browse Projects
                        </Button>
                    </NavLink>
                    <a
                        href="https://github.com/vcet-foss"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Button variant="outline" className="flex items-center gap-2">
                            <Github className="w-4 h-4" />
                            Visit GitHub
                        </Button>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default NotFound;
