import React from "react";
import { Shield, Users, AlertTriangle, Mail } from "lucide-react";

const CodeOfConduct: React.FC = () => {
    return (
        <div className="pt-32 pb-24 min-h-screen bg-black">
            <div className="max-w-4xl mx-auto px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-6">
                        Code of Conduct
                    </h1>
                    <p className="text-xl text-gray-400 font-sans">
                        Our commitment to creating an inclusive and welcoming community for everyone
                    </p>
                </div>

                {/* Our Pledge */}
                <section className="mb-12 border border-white/10 bg-white/[0.02] p-8">
                    <div className="flex items-start gap-4 mb-4">
                        <Shield className="w-6 h-6 text-foss-green flex-shrink-0 mt-1" />
                        <div>
                            <h2 className="text-2xl font-display font-bold text-white mb-4">
                                Our Pledge
                            </h2>
                            <p className="text-gray-400 font-sans leading-relaxed">
                                We as members, contributors, and leaders pledge to make participation in our
                                community a harassment-free experience for everyone, regardless of age, body
                                size, visible or invisible disability, ethnicity, sex characteristics, gender
                                identity and expression, level of experience, education, socio-economic status,
                                nationality, personal appearance, race, religion, or sexual identity and orientation.
                            </p>
                            <p className="text-gray-400 font-sans leading-relaxed mt-4">
                                We pledge to act and interact in ways that contribute to an open, welcoming,
                                diverse, inclusive, and healthy community.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Standards */}
                <section className="mb-12">
                    <h2 className="text-2xl font-display font-bold text-white mb-6">
                        Our Standards
                    </h2>

                    <div className="grid md:grid-cols-2 gap-6">
                        {/* Expected Behavior */}
                        <div className="border border-white/10 bg-white/[0.02] p-6">
                            <h3 className="text-lg font-mono text-foss-green mb-4">
                                ✓ Expected Behavior
                            </h3>
                            <ul className="space-y-2 text-gray-400 text-sm font-sans">
                                <li>• Using welcoming and inclusive language</li>
                                <li>• Being respectful of differing viewpoints and experiences</li>
                                <li>• Gracefully accepting constructive criticism</li>
                                <li>• Focusing on what is best for the community</li>
                                <li>• Showing empathy towards other community members</li>
                                <li>• Giving and receiving feedback professionally</li>
                            </ul>
                        </div>

                        {/* Unacceptable Behavior */}
                        <div className="border border-red-500/20 bg-red-500/[0.02] p-6">
                            <h3 className="text-lg font-mono text-red-400 mb-4 flex items-center gap-2">
                                <AlertTriangle className="w-4 h-4" />
                                Unacceptable Behavior
                            </h3>
                            <ul className="space-y-2 text-gray-400 text-sm font-sans">
                                <li>• The use of sexualized language or imagery</li>
                                <li>• Trolling, insulting/derogatory comments, and personal attacks</li>
                                <li>• Public or private harassment</li>
                                <li>• Publishing others' private information without permission</li>
                                <li>• Other conduct which could reasonably be considered inappropriate</li>
                                <li>• Sustained disruption of community events</li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Enforcement */}
                <section className="mb-12 border border-white/10 bg-white/[0.02] p-8">
                    <h2 className="text-2xl font-display font-bold text-white mb-4">
                        Enforcement Guidelines
                    </h2>
                    <div className="space-y-6 text-gray-400 font-sans">
                        <div>
                            <h3 className="text-white font-mono text-sm mb-2">1. Correction</h3>
                            <p className="text-sm">
                                <span className="text-foss-green">Impact:</span> Use of inappropriate language or other behavior deemed unprofessional.
                                <br />
                                <span className="text-foss-green">Consequence:</span> A private, written warning with clarity of violation and explanation.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-white font-mono text-sm mb-2">2. Warning</h3>
                            <p className="text-sm">
                                <span className="text-foss-green">Impact:</span> A violation through a single incident or series of actions.
                                <br />
                                <span className="text-foss-green">Consequence:</span> A warning with consequences for continued behavior. No interaction with involved parties for a specified period.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-white font-mono text-sm mb-2">3. Temporary Ban</h3>
                            <p className="text-sm">
                                <span className="text-foss-green">Impact:</span> A serious violation of community standards.
                                <br />
                                <span className="text-foss-green">Consequence:</span> Temporary ban from any sort of interaction or public communication with the community.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-white font-mono text-sm mb-2">4. Permanent Ban</h3>
                            <p className="text-sm">
                                <span className="text-foss-green">Impact:</span> Demonstrating a pattern of violation or severe incident.
                                <br />
                                <span className="text-foss-green">Consequence:</span> Permanent ban from any sort of public interaction within the community.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Scope */}
                <section className="mb-12 border border-white/10 bg-white/[0.02] p-8">
                    <div className="flex items-start gap-4">
                        <Users className="w-6 h-6 text-foss-green flex-shrink-0 mt-1" />
                        <div>
                            <h2 className="text-2xl font-display font-bold text-white mb-4">
                                Scope
                            </h2>
                            <p className="text-gray-400 font-sans leading-relaxed">
                                This Code of Conduct applies within all community spaces, including:
                            </p>
                            <ul className="mt-4 space-y-2 text-gray-400 text-sm font-sans">
                                <li>• GitHub repositories and discussions</li>
                                <li>• Discord server and community channels</li>
                                <li>• Events, workshops, and hackathons</li>
                                <li>• Social media and online platforms representing VCET FOSS</li>
                                <li>• Any official communication channels</li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Reporting */}
                <section className="border border-foss-green/20 bg-foss-green/[0.05] p-8">
                    <div className="flex items-start gap-4">
                        <Mail className="w-6 h-6 text-foss-green flex-shrink-0 mt-1" />
                        <div>
                            <h2 className="text-2xl font-display font-bold text-white mb-4">
                                Reporting Issues
                            </h2>
                            <p className="text-gray-400 font-sans leading-relaxed mb-4">
                                Instances of abusive, harassing, or otherwise unacceptable behavior may be
                                reported to the community leaders responsible for enforcement at:
                            </p>
                            <a
                                href="mailto:vcetopensource@gmail.com"
                                className="inline-block px-6 py-3 bg-foss-green text-black font-mono text-sm hover:bg-foss-green/90 transition-colors"
                            >
                                vcetopensource@gmail.com
                            </a>
                            <p className="text-gray-500 font-sans text-sm mt-4">
                                All complaints will be reviewed and investigated promptly and fairly. All community
                                leaders are obligated to respect the privacy and security of the reporter.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Attribution */}
                <div className="mt-12 pt-8 border-t border-white/10 text-center">
                    <p className="text-gray-500 text-sm font-mono">
                        This Code of Conduct is adapted from the{" "}
                        <a
                            href="https://www.contributor-covenant.org/version/2/1/code_of_conduct.html"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-foss-green hover:underline"
                        >
                            Contributor Covenant, version 2.1
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default CodeOfConduct;
