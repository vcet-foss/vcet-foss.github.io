import React from "react";
import { Code2 } from "lucide-react";
import RevealOnScroll from "../components/RevealOnScroll";
import GlitchText from "../components/GlitchText";

interface Hackathon {
    id: string;
    name: string;
    date: string;
    theme: string;
    status: "active" | "upcoming" | "past";
    participants?: number;
    projects?: number;
    winner?: {
        teamName: string;
        projectName: string;
        members: string[];
        repoUrl?: string;
    };
    registrationLink?: string;
    description: string;
}

// Sample data - replace with actual data source
const HACKATHONS: Hackathon[] = [
    {
        id: "1",
        name: "VCET HackFest 2026",
        date: "2026-04-10",
        theme: "AI for Good",
        status: "upcoming",
        description:
            "24-hour hackathon focused on building AI-powered solutions for social impact. Categories include healthcare, education, environment, and accessibility.",
        registrationLink: "#",
    },
    {
        id: "2",
        name: "Web3 Build Weekend",
        date: "2026-01-15",
        theme: "Decentralized Apps",
        status: "past",
        participants: 56,
        projects: 12,
        winner: {
            teamName: "ChainGuard",
            projectName: "DecentraVote",
            members: ["Ritesh Gharat", "Prashant Dhuri", "Aditya Sharma"],
            repoUrl: "https://github.com/vcet-foss/decentravote",
        },
        description:
            "Weekend hackathon exploring blockchain technology and decentralized applications.",
    },
];

const Hackathons: React.FC = () => {

    return (
        <div className="pt-32 pb-24 min-h-screen bg-black">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                {/* Hero */}
                <div className="text-center mb-16">
                    <RevealOnScroll>
                        <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-6 jersey-25-regular">
                            <GlitchText text="Hackathons" speed={40} />
                        </h1>
                        <p className="text-xl text-gray-400 font-sans max-w-2xl mx-auto mb-8">
                            Build innovative solutions, collaborate with peers, and showcase your skills in our hackathons.
                        </p>
                        {/* {(activeHackathons.length > 0 || upcomingHackathons.length > 0) && (
                            <NavLink
                                to={
                                    activeHackathons[0]?.registrationLink ||
                                    upcomingHackathons[0]?.registrationLink ||
                                    "#"
                                }
                                className="inline-block px-8 py-4 bg-foss-green text-black font-mono text-lg font-bold hover:bg-foss-green/90 transition-all hover:shadow-[0_0_20px_rgba(0,255,127,0.3)]"
                            >
                                Register Now
                            </NavLink>
                        )} */}
                    </RevealOnScroll>
                </div>

                {/* Active Hackathons */}
                {/* {activeHackathons.length > 0 && (
                    <section className="mb-16">
                        <h2 className="text-3xl font-display font-bold text-white mb-8 flex items-center gap-3">
                            <span className="w-2 h-8 bg-red-500 animate-pulse"></span>
                            Live Now
                        </h2>
                        <div className="grid md:grid-cols-2 gap-6">
                            {activeHackathons.map((hackathon) => (
                                <HackathonCard key={hackathon.id} hackathon={hackathon} />
                            ))}
                        </div>
                    </section>
                )} */}

                {/* Upcoming Hackathons */}
                {/* {upcomingHackathons.length > 0 && (
                    <section className="mb-16">
                        <h2 className="text-3xl font-display font-bold text-white mb-8 flex items-center gap-3">
                            <span className="w-2 h-8 bg-foss-green"></span>
                            Upcoming
                        </h2>
                        <div className="grid md:grid-cols-2 gap-6">
                            {upcomingHackathons.map((hackathon) => (
                                <HackathonCard key={hackathon.id} hackathon={hackathon} />
                            ))}
                        </div>
                    </section>
                )} */}

                {/* Past Hackathons */}
                {/* {pastHackathons.length > 0 && (
                    <section className="mb-16">
                        <h2 className="text-3xl font-display font-bold text-white mb-8 flex items-center gap-3">
                            <span className="w-2 h-8 bg-gray-600"></span>
                            Hall of Fame
                        </h2>
                        <div className="space-y-6">
                            {pastHackathons.map((hackathon) => (
                                <PastHackathonCard key={hackathon.id} hackathon={hackathon} />
                            ))}
                        </div>
                    </section>
                )} */}

                {/* Host a Hackathon CTA */}
                <RevealOnScroll delay={200}>
                    <div className="border border-foss-green/20 bg-foss-green/[0.05] p-12 text-center">
                        <h3 className="text-3xl font-display font-bold text-white mb-4 jersey-25-regular">
                            Want to host a hackathon?
                        </h3>
                        <p className="text-gray-400 font-sans mb-8 max-w-2xl mx-auto">
                            We provide mentorship, resources, and support to help you organize
                            successful hackathons. Whether it's a 24-hour coding sprint or a
                            week-long challenge, we've got you covered.
                        </p>
                        <a
                            href="mailto:vcetopensource@gmail.com"
                            className="inline-block px-8 py-4 bg-foss-green text-black font-mono text-sm font-bold hover:bg-foss-green/90 transition-colors"
                        >
                            Get in Touch
                        </a>
                    </div>
                </RevealOnScroll>

                {/* Empty State */}
                {HACKATHONS.length === 0 && (
                    <div className="text-center py-20 border border-dashed border-white/10">
                        <Code2 className="w-12 h-12 text-gray-600 mx-auto mb-4" />
                        <p className="text-gray-500 font-mono text-lg mb-2">
                            No hackathons scheduled yet
                        </p>
                        <p className="text-gray-600 text-sm font-sans">
                            Stay tuned for upcoming events!
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
};

// Hackathon Card (Active/Upcoming) - Commented out as not currently used
// const HackathonCard: React.FC<{ hackathon: Hackathon }> = ({ hackathon }) => {
//     const hackathonDate = new Date(hackathon.date);
//     const formattedDate = hackathonDate.toLocaleDateString("en-US", {
//         month: "short",
//         day: "numeric",
//         year: "numeric",
//     });
//
//     return (
//         <div className="border border-white/10 bg-white/[0.02] p-8 hover:border-foss-green/50 transition-all relative overflow-hidden">
//             {hackathon.status === "active" && (
//                 <div className="absolute top-4 right-4">
//                     <span className="px-3 py-1 bg-red-500 text-white text-xs font-mono font-bold animate-pulse">
//                         LIVE
//                     </span>
//                 </div>
//             )}
//
//             <h3 className="text-2xl font-display font-bold text-white mb-2">
//                 {hackathon.name}
//             </h3>
//
//             <div className="flex items-center gap-4 text-sm text-gray-400 font-mono mb-4">
//                 <div className="flex items-center gap-2">
//                     <Calendar className="w-4 h-4 text-foss-green" />
//                     {formattedDate}
//                 </div>
//                 <div className="flex items-center gap-2">
//                     <Code2 className="w-4 h-4 text-foss-green" />
//                     {hackathon.theme}
//                 </div>
//             </div>
//
//             <p className="text-gray-400 font-sans text-sm mb-6 leading-relaxed">
//                 {hackathon.description}
//             </p>
//
//             {hackathon.registrationLink && (
//                 <a
//                     href={hackathon.registrationLink}
//                     className="inline-flex items-center gap-2 px-6 py-3 bg-foss-green text-black font-mono text-sm font-bold hover:bg-foss-green/90 transition-colors"
//                 >
//                     {hackathon.status === "active" ? "Join Now" : "Register"}
//                     <ExternalLink className="w-4 h-4" />
//                 </a>
//             )}
//         </div>
//     );
// };

// Past Hackathon Card with Winner - Commented out as not currently used
// const PastHackathonCard: React.FC<{ hackathon: Hackathon }> = ({
//     hackathon,
// }) => {
//     const hackathonDate = new Date(hackathon.date);
//     const formattedDate = hackathonDate.toLocaleDateString("en-US", {
//         month: "short",
//         day: "numeric",
//         year: "numeric",
//     });
//
//     return (
//         <div className="border border-white/10 bg-white/[0.02] p-8">
//             <div className="grid md:grid-cols-2 gap-8">
//                 {/* Hackathon Info */}
//                 <div>
//                     <h3 className="text-2xl font-display font-bold text-white mb-3">
//                         {hackathon.name}
//                     </h3>
//
//                     <div className="space-y-2 text-sm text-gray-400 font-mono mb-4">
//                         <div className="flex items-center gap-2">
//                             <Calendar className="w-4 h-4 text-foss-green" />
//                             {formattedDate}
//                         </div>
//                         <div className="flex items-center gap-2">
//                             <Code2 className="w-4 h-4 text-foss-green" />
//                             {hackathon.theme}
//                         </div>
//                     </div>
//
//                     <p className="text-gray-400 font-sans text-sm mb-4">
//                         {hackathon.description}
//                     </p>
//
//                     {hackathon.participants && (
//                         <div className="flex items-center gap-6 text-sm font-mono text-gray-500">
//                             <span>{hackathon.participants} participants</span>
//                             <span>{hackathon.projects} projects</span>
//                         </div>
//                     )}
//                 </div>
//
//                 {/* Winner */}
//                 {hackathon.winner && (
//                     <div className="border-l border-white/10 pl-8">
//                         <div className="flex items-center gap-2 mb-4">
//                             <Trophy className="w-5 h-5 text-yellow-400" />
//                             <span className="text-yellow-400 font-mono text-sm font-bold">
//                                 WINNER
//                             </span>
//                         </div>
//
//                         <h4 className="text-lg font-mono font-bold text-white mb-2">
//                             {hackathon.winner.teamName}
//                         </h4>
//                         <p className="text-foss-green font-mono text-sm mb-3">
//                             {hackathon.winner.projectName}
//                         </p>
//
//                         <div className="text-sm text-gray-400 font-sans mb-4">
//                             <span className="text-gray-500 font-mono text-xs uppercase tracking-wider block mb-1">
//                                 Team Members
//                             </span>
//                             {hackathon.winner.members.join(", ")}
//                         </div>
//
//                         {hackathon.winner.repoUrl && (
//                             <a
//                                 href={hackathon.winner.repoUrl}
//                                 target="_blank"
//                                 rel="noopener noreferrer"
//                                 className="inline-flex items-center gap-2 text-foss-green hover:text-foss-green/80 font-mono text-sm transition-colors"
//                             >
//                                 <Github className="w-4 h-4" />
//                                 View Project
//                             </a>
//                         )}
//                     </div>
//                 )}
//             </div>
//         </div>
//     );
// };

export default Hackathons;
