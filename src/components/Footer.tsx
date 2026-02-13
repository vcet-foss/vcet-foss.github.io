import React from "react";
import { Github, Mail } from "lucide-react";
import { NavLink } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-white/10 bg-black pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <h2 className="text-2xl font-display font-bold text-white mb-4">
              VCET FOSS
            </h2>
            <p className="text-gray-400 max-w-sm mb-6 font-sans">
              Building a community of developers, designers, and innovators.
              Solving real-world problems through open source collaboration.
            </p>
            <div className="flex space-x-4">
              <NavLink
                to="https://github.com/vcet-foss"
                target="_blank"
                className="text-gray-400 hover:text-foss-green transition-colors"
              >
                <Github className="w-5 h-5" />
              </NavLink>
              {/* <NavLink
                to="#"
                className="text-gray-400 hover:text-foss-green transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </NavLink>
              <NavLink
                to="#"
                className="text-gray-400 hover:text-foss-green transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </NavLink> */}
            </div>
          </div>

          <div>
            <h3 className="font-mono text-white mb-4">Community</h3>
            <ul className="space-y-3 text-sm text-gray-400 font-sans">
              <li>
                <a
                  href="https://discord.gg/BHcWFfXzMm"
                  target="_blank"
                  className="hover:text-foss-green transition-colors"
                >
                  Join Discord
                </a>
              </li>
              <li>
                <NavLink
                  to="/code-of-conduct"
                  className="hover:text-foss-green transition-colors"
                >
                  Code of Conduct
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/events"
                  className="hover:text-foss-green transition-colors"
                >
                  Events
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/hackathons"
                  className="hover:text-foss-green transition-colors"
                >
                  Hackathons
                </NavLink>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-mono text-white mb-4">Resources</h3>
            <ul className="space-y-3 text-sm text-gray-400 font-sans">
              <li>
                <NavLink to="/documentation" className="hover:text-foss-green transition-colors">
                  Documentation
                </NavLink>
              </li>
              <li>
                <a
                  href="https://github.com/vcet-foss"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-foss-green transition-colors"
                >
                  GitHub Organization
                </a>
              </li>
              <li>
                <NavLink to="/project-guidelines" className="hover:text-foss-green transition-colors">
                  Project Guidelines
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="mailto:vcetopensource@gmail.com"
                  className="hover:text-foss-green transition-colors flex items-center gap-2"
                >
                  <Mail className="w-3 h-3" /> Contact Us
                </NavLink>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm font-mono">
            © {new Date().getFullYear()} VCET FOSS Community. Open source
            forever.
          </p>
          <div className="text-gray-600 text-xs font-mono">
            Designed with 💚 by FOSS Team
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
