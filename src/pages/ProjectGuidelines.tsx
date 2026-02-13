import React from "react";
import { CheckCircle, AlertCircle, Code2, Users, FileCode, GitPullRequest } from "lucide-react";

const ProjectGuidelines: React.FC = () => {
    return (
        <div className="pt-32 pb-24 min-h-screen bg-black">
            <div className="max-w-4xl mx-auto px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-6">
                        Project Guidelines
                    </h1>
                    <p className="text-xl text-gray-400 font-sans max-w-2xl mx-auto">
                        Best practices and standards for VCET FOSS projects. Follow these guidelines to maintain quality and consistency.
                    </p>
                </div>

                {/* Project Structure */}
                <section className="mb-12 border border-white/10 bg-white/[0.02] p-8">
                    <div className="flex items-start gap-4 mb-4">
                        <FileCode className="w-6 h-6 text-foss-green flex-shrink-0 mt-1" />
                        <div>
                            <h2 className="text-2xl font-display font-bold text-white mb-4">
                                Project Structure
                            </h2>
                            <p className="text-gray-400 font-sans mb-4">
                                Every project should have a clear and organized structure:
                            </p>
                            <ul className="space-y-2 text-gray-400 text-sm font-mono">
                                <li className="flex items-start gap-2">
                                    <CheckCircle className="w-4 h-4 text-foss-green flex-shrink-0 mt-0.5" />
                                    <span><code className="text-foss-green">README.md</code> — Project overview, setup instructions, and usage</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <CheckCircle className="w-4 h-4 text-foss-green flex-shrink-0 mt-0.5" />
                                    <span><code className="text-foss-green">CONTRIBUTING.md</code> — Contribution guidelines</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <CheckCircle className="w-4 h-4 text-foss-green flex-shrink-0 mt-0.5" />
                                    <span><code className="text-foss-green">LICENSE</code> — Open source license (MIT, Apache 2.0, GPL, etc.)</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <CheckCircle className="w-4 h-4 text-foss-green flex-shrink-0 mt-0.5" />
                                    <span><code className="text-foss-green">.gitignore</code> — Files to exclude from version control</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <CheckCircle className="w-4 h-4 text-foss-green flex-shrink-0 mt-0.5" />
                                    <span><code className="text-foss-green">package.json</code> / <code className="text-foss-green">requirements.txt</code> — Dependencies</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Code Quality */}
                <section className="mb-12 border border-white/10 bg-white/[0.02] p-8">
                    <div className="flex items-start gap-4 mb-4">
                        <Code2 className="w-6 h-6 text-foss-green flex-shrink-0 mt-1" />
                        <div>
                            <h2 className="text-2xl font-display font-bold text-white mb-4">
                                Code Quality Standards
                            </h2>

                            <div className="space-y-6">
                                <div>
                                    <h3 className="text-white font-mono text-sm mb-2">✓ Write Clean Code</h3>
                                    <ul className="space-y-1 text-gray-400 text-sm font-sans ml-4">
                                        <li>• Use meaningful variable and function names</li>
                                        <li>• Keep functions small and focused (Single Responsibility Principle)</li>
                                        <li>• Add comments for complex logic, but code should be self-documenting</li>
                                        <li>• Follow language-specific style guides (PEP 8 for Python, ESLint for JavaScript)</li>
                                    </ul>
                                </div>

                                <div>
                                    <h3 className="text-white font-mono text-sm mb-2">✓ Testing</h3>
                                    <ul className="space-y-1 text-gray-400 text-sm font-sans ml-4">
                                        <li>• Write unit tests for critical functionality</li>
                                        <li>• Aim for at least 70% code coverage</li>
                                        <li>• Test edge cases and error handling</li>
                                        <li>• Include integration tests where applicable</li>
                                    </ul>
                                </div>

                                <div>
                                    <h3 className="text-white font-mono text-sm mb-2">✓ Documentation</h3>
                                    <ul className="space-y-1 text-gray-400 text-sm font-sans ml-4">
                                        <li>• Document all public APIs and functions</li>
                                        <li>• Include code examples in documentation</li>
                                        <li>• Keep README up to date with features</li>
                                        <li>• Use inline comments sparingly and only when necessary</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Git Workflow */}
                <section className="mb-12 border border-white/10 bg-white/[0.02] p-8">
                    <div className="flex items-start gap-4 mb-4">
                        <GitPullRequest className="w-6 h-6 text-foss-green flex-shrink-0 mt-1" />
                        <div>
                            <h2 className="text-2xl font-display font-bold text-white mb-4">
                                Git Workflow
                            </h2>

                            <div className="space-y-4 text-gray-400 font-sans text-sm">
                                <div>
                                    <h3 className="text-white font-mono text-sm mb-2">1. Branch Naming</h3>
                                    <ul className="space-y-1 ml-4">
                                        <li>• <code className="text-foss-green">feature/description</code> — New features</li>
                                        <li>• <code className="text-foss-green">fix/description</code> — Bug fixes</li>
                                        <li>• <code className="text-foss-green">docs/description</code> — Documentation updates</li>
                                        <li>• <code className="text-foss-green">refactor/description</code> — Code refactoring</li>
                                    </ul>
                                </div>

                                <div>
                                    <h3 className="text-white font-mono text-sm mb-2">2. Commit Messages</h3>
                                    <p className="mb-2">Follow conventional commits format:</p>
                                    <div className="bg-black/50 p-3 border border-white/10 font-mono text-xs">
                                        <div className="text-foss-green">type(scope): subject</div>
                                        <div className="text-gray-600 mt-1"># Examples:</div>
                                        <div className="text-gray-400">feat(auth): add login functionality</div>
                                        <div className="text-gray-400">fix(api): resolve null pointer exception</div>
                                        <div className="text-gray-400">docs(readme): update installation steps</div>
                                    </div>
                                </div>

                                <div>
                                    <h3 className="text-white font-mono text-sm mb-2">3. Pull Requests</h3>
                                    <ul className="space-y-1 ml-4">
                                        <li>• Create focused PRs (one feature/fix per PR)</li>
                                        <li>• Write clear PR descriptions explaining changes</li>
                                        <li>• Link related issues in PR description</li>
                                        <li>• Request reviews from maintainers</li>
                                        <li>• Address review comments promptly</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Collaboration */}
                <section className="mb-12 border border-white/10 bg-white/[0.02] p-8">
                    <div className="flex items-start gap-4 mb-4">
                        <Users className="w-6 h-6 text-foss-green flex-shrink-0 mt-1" />
                        <div>
                            <h2 className="text-2xl font-display font-bold text-white mb-4">
                                Collaboration Best Practices
                            </h2>

                            <ul className="space-y-3 text-gray-400 text-sm font-sans">
                                <li className="flex items-start gap-2">
                                    <CheckCircle className="w-4 h-4 text-foss-green flex-shrink-0 mt-0.5" />
                                    <span><strong className="text-white">Communication:</strong> Use GitHub issues and discussions for project-related conversations</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <CheckCircle className="w-4 h-4 text-foss-green flex-shrink-0 mt-0.5" />
                                    <span><strong className="text-white">Issue Tracking:</strong> Create detailed issues with clear descriptions and acceptance criteria</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <CheckCircle className="w-4 h-4 text-foss-green flex-shrink-0 mt-0.5" />
                                    <span><strong className="text-white">Code Reviews:</strong> Be constructive and respectful in reviews</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <CheckCircle className="w-4 h-4 text-foss-green flex-shrink-0 mt-0.5" />
                                    <span><strong className="text-white">Labels:</strong> Use GitHub labels to categorize issues (bug, enhancement, good first issue, etc.)</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <CheckCircle className="w-4 h-4 text-foss-green flex-shrink-0 mt-0.5" />
                                    <span><strong className="text-white">Milestones:</strong> Track progress with GitHub milestones for releases</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Things to Avoid */}
                <section className="mb-12 border border-red-500/20 bg-red-500/[0.02] p-8">
                    <div className="flex items-start gap-4 mb-4">
                        <AlertCircle className="w-6 h-6 text-red-400 flex-shrink-0 mt-1" />
                        <div>
                            <h2 className="text-2xl font-display font-bold text-white mb-4">
                                Things to Avoid
                            </h2>

                            <ul className="space-y-2 text-gray-400 text-sm font-sans">
                                <li className="flex items-start gap-2">
                                    <span className="text-red-400">✗</span>
                                    <span>Committing sensitive information (API keys, passwords, credentials)</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-red-400">✗</span>
                                    <span>Large binary files (use Git LFS if necessary)</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-red-400">✗</span>
                                    <span>Commented-out code (delete it, Git has your back)</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-red-400">✗</span>
                                    <span>Pushing directly to main/master branch (use PRs)</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-red-400">✗</span>
                                    <span>Vague commit messages ("fixed stuff", "updates")</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-red-400">✗</span>
                                    <span>Ignoring linting warnings and errors</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Footer CTA */}
                <div className="border border-foss-green/20 bg-foss-green/[0.05] p-8 text-center">
                    <h3 className="text-2xl font-display font-bold text-white mb-4">
                        Questions about these guidelines?
                    </h3>
                    <p className="text-gray-400 font-sans mb-6 max-w-2xl mx-auto">
                        Join our Discord community to discuss project standards, ask questions, or suggest improvements to these guidelines.
                    </p>
                    <a
                        href="https://discord.gg/BHcWFfXzMm"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block px-6 py-3 bg-foss-green text-black font-mono text-sm hover:bg-foss-green/90 transition-colors"
                    >
                        Join Discord
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ProjectGuidelines;
