import React from "react";
import { MessageSquare, Users, Github, ArrowUpRight } from "lucide-react";
import Button from "../components/Button";

const Community: React.FC = () => {
  return (
    <div className="pt-32 pb-24 min-h-screen bg-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div>
            <h1 className="text-5xl font-display font-bold text-white mb-8">
              Don't Build <br />
              <span className="text-foss-green">Alone.</span>
            </h1>
            <p className="text-xl text-gray-400 mb-10 font-sans leading-relaxed">
              Coding is better when it's collaborative. VCET FOSS is more than
              just a club—it's a network of mentors, peers, and friends who help
              each other ship better software.
            </p>

            <div className="space-y-8">
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 bg-indigo-500/10 rounded flex items-center justify-center shrink-0">
                  <MessageSquare className="text-indigo-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    Join the Discord
                  </h3>
                  <p className="text-gray-400 text-sm mb-4">
                    The heartbeat of our community. Ask questions, share memes,
                    and find teammates.
                  </p>
                  <a
                    href="https://discord.gg/BHcWFfXzMm"
                    target="_blank"
                    className="inline-flex items-center text-foss-green font-mono text-sm hover:underline"
                  >
                    discord.gg/vcet-foss{" "}
                    <ArrowUpRight className="w-4 h-4 ml-1" />
                  </a>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 bg-white/10 rounded flex items-center justify-center shrink-0">
                  <Github className="text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    GitHub Organization
                  </h3>
                  <p className="text-gray-400 text-sm mb-4">
                    All our code is public. Star our repos, fork them, and open
                    your first Pull Request.
                  </p>
                  <a
                    href="https://github.com/vcet-foss"
                    target="_blank"
                    className="inline-flex items-center text-foss-green font-mono text-sm hover:underline"
                  >
                    github.com/vcet-foss{" "}
                    <ArrowUpRight className="w-4 h-4 ml-1" />
                  </a>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 bg-pink-500/10 rounded flex items-center justify-center shrink-0">
                  <Users className="text-pink-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    Weekly Meetups
                  </h3>
                  <p className="text-gray-400 text-sm mb-4">
                    We meet every Friday at 4 PM in the Lab. Code reviews, tech
                    talks, and pizza.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-900/50 border border-white/10 p-8 rounded-lg relative overflow-hidden">
            <div className="absolute top-0 right-0 p-32 bg-foss-green/10 blur-3xl rounded-full pointer-events-none"></div>

            <h3 className="text-2xl font-bold text-white mb-6">
              How to Contribute
            </h3>

            <div className="space-y-6">
              <div className="relative pl-8 border-l border-white/10">
                <div className="absolute left-0 top-0 -translate-x-1/2 w-3 h-3 bg-foss-green rounded-full"></div>
                <h4 className="text-lg font-mono text-white mb-2">
                  1. Find a Project
                </h4>
                <p className="text-gray-400 text-sm">
                  Browse the Projects page. Look for "Help Wanted" tags.
                </p>
              </div>

              <div className="relative pl-8 border-l border-white/10">
                <div className="absolute left-0 top-0 -translate-x-1/2 w-3 h-3 bg-gray-600 rounded-full"></div>
                <h4 className="text-lg font-mono text-white mb-2">
                  2. Check Issues
                </h4>
                <p className="text-gray-400 text-sm">
                  Go to the GitHub repo. Look for "good first issue" labels.
                </p>
              </div>

              <div className="relative pl-8 border-l border-white/10">
                <div className="absolute left-0 top-0 -translate-x-1/2 w-3 h-3 bg-gray-600 rounded-full"></div>
                <h4 className="text-lg font-mono text-white mb-2">
                  3. Fork & Clone
                </h4>
                <p className="text-gray-400 text-sm">
                  Fork the repository to your account and clone it locally.
                </p>
              </div>

              <div className="relative pl-8 border-l-0">
                <div className="absolute left-0 top-0 -translate-x-1/2 w-3 h-3 bg-gray-600 rounded-full"></div>
                <h4 className="text-lg font-mono text-white mb-2">
                  4. Pull Request
                </h4>
                <p className="text-gray-400 text-sm">
                  Push your changes and open a PR. We'll review it together.
                </p>
              </div>
            </div>

            <div className="mt-10 pt-8 border-t border-white/10">
              <h4 className="text-white font-bold mb-2">Got a project idea?</h4>
              <p className="text-gray-400 text-sm mb-4">
                Pitch your idea to the community and find teammates.
              </p>
              <a
                href="https://github.com/vcet-foss/awesome-foss"
                target="_blank"
              >
                <Button className="w-full">Submit Project Idea</Button></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Community;
