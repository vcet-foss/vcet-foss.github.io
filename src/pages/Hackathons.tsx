import React from "react";
import { Code2, Trophy, ExternalLink, ArrowUpRight } from "lucide-react";
import RevealOnScroll from "../components/RevealOnScroll";
import GlitchText from "../components/GlitchText";

interface Hackathon {
  id: string; name: string; date: string; theme: string;
  status: "active" | "upcoming" | "past";
  participants?: number; projects?: number;
  winner?: { teamName: string; projectName: string; members: string[]; repoUrl?: string };
  registrationLink?: string; description: string;
}

const HACKATHONS: Hackathon[] = [
  { id:"1", name:"VCET HackFest 2026", date:"2026-04-10", theme:"AI for Good", status:"upcoming",
    description:"24-hour hackathon focused on building AI-powered solutions for social impact. Categories include healthcare, education, environment, and accessibility.",
    registrationLink:"#" },
  { id:"2", name:"Web3 Build Weekend", date:"2026-01-15", theme:"Decentralized Apps", status:"past",
    participants:56, projects:12,
    winner:{ teamName:"ChainGuard", projectName:"DecentraVote", members:["Ritesh Gharat","Prashant Dhuri","Aditya Sharma"], repoUrl:"https://github.com/vcet-foss/decentravote" },
    description:"Weekend hackathon exploring blockchain technology and decentralized applications." },
];

const upcoming = HACKATHONS.filter(h => h.status === "upcoming");
const past      = HACKATHONS.filter(h => h.status === "past");

const Hackathons: React.FC = () => (
  <>
    <style>{`
      .pg-eyebrow {
        font-family:monospace; font-size:.62rem; letter-spacing:.22em;
        color:rgba(0,255,127,.55); display:flex; align-items:center;
        gap:.5rem; margin-bottom:.6rem;
      }
      .pg-eyebrow::before { content:""; display:inline-block; width:16px; height:1px; background:rgba(0,255,127,.5); }
      .pg-hline { position:absolute; bottom:0; left:0; height:1px; width:100%; background:linear-gradient(90deg,#00ff7f 0%,rgba(0,255,127,.1) 60%,transparent 100%); }

      .hk-card {
        border:1px solid rgba(255,255,255,.08); background:rgba(255,255,255,.02);
        padding:2rem; transition:border-color .25s; position:relative; overflow:hidden;
      }
      .hk-card:hover { border-color:rgba(0,255,127,.25); }
      .hk-card::before {
        content:""; position:absolute; top:0; left:0; width:14px; height:14px;
        border-top:1px solid rgba(0,255,127,0); border-left:1px solid rgba(0,255,127,0);
        transition:border-color .3s;
      }
      .hk-card:hover::before { border-top-color:rgba(0,255,127,.5); border-left-color:rgba(0,255,127,.5); }

      @keyframes up-glow { 0%,100%{box-shadow:0 0 0 0 rgba(0,255,127,.35)} 50%{box-shadow:0 0 0 6px rgba(0,255,127,0)} }
      .up-dot { animation:up-glow 2s ease-in-out infinite; }

      .hk-cta {
        border:1px solid rgba(0,255,127,.22); background:rgba(0,255,127,.04);
        padding:2.5rem; position:relative; overflow:hidden;
      }
    `}</style>

    <div className="pt-32 pb-24 min-h-screen bg-black">
      <div style={{ position:"fixed", top:0, left:0, width:520, height:420, background:"radial-gradient(ellipse at 0% 0%,rgba(0,255,127,.05) 0%,transparent 65%)", pointerEvents:"none", zIndex:0 }} />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">

        {/* HEADER */}
        <div className="mb-14 relative pb-8">
          <div className="pg-hline" />
          <RevealOnScroll>
            <p className="pg-eyebrow">VCET FOSS</p>
            <h1 className="font-display font-bold text-white jersey-25-regular mb-5"
              style={{ fontSize:"clamp(2.8rem,7vw,5.5rem)", lineHeight:1.0, letterSpacing:"0.02em" }}>
              <GlitchText text="Hackathons" speed={40} />
            </h1>
            <p className="text-gray-400 font-mono text-base leading-relaxed"
              style={{ maxWidth:"36rem", borderLeft:"2px solid rgba(0,255,127,.2)", paddingLeft:"1rem" }}>
              Build innovative solutions, collaborate with peers, and showcase your skills.
            </p>
          </RevealOnScroll>
        </div>

        {/* UPCOMING */}
        {upcoming.length > 0 && (
          <section className="mb-14">
            <RevealOnScroll>
              <div className="flex items-center gap-3 mb-6">
                <span className="up-dot inline-block w-2.5 h-2.5 rounded-full bg-foss-green" />
                <p style={{ fontFamily:'"Jersey 25",monospace', fontSize:"1rem", letterSpacing:".08em", color:"rgba(255,255,255,.55)" }}>UPCOMING</p>
              </div>
            </RevealOnScroll>
            <div className="grid md:grid-cols-2 gap-5">
              {upcoming.map((h, i) => (
                <RevealOnScroll key={h.id} delay={i * 100}>
                  <div className="hk-card">
                    <div style={{ position:"absolute", top:"1rem", right:"1rem" }}>
                      <span style={{ padding:"3px 10px", border:"1px solid rgba(0,255,127,.3)", fontFamily:"monospace", fontSize:".6rem", letterSpacing:".15em", color:"rgba(0,255,127,.7)", background:"rgba(0,255,127,.06)" }}>
                        UPCOMING
                      </span>
                    </div>
                    <p style={{ fontFamily:"monospace", fontSize:".6rem", letterSpacing:".15em", color:"rgba(0,255,127,.3)", marginBottom:".6rem" }}>
                      {new Date(h.date).toLocaleDateString("en-US",{ month:"short", day:"numeric", year:"numeric" })}
                    </p>
                    <h3 style={{ fontFamily:'"Jersey 25",monospace', fontSize:"1.3rem", letterSpacing:".04em", color:"#fff", marginBottom:".3rem" }}>{h.name}</h3>
                    <p style={{ fontFamily:"monospace", fontSize:".7rem", letterSpacing:".1em", color:"rgba(0,255,127,.6)", marginBottom:"1rem" }}>
                      THEME: {h.theme}
                    </p>
                    <p className="text-gray-500 font-mono text-sm leading-relaxed mb-5">{h.description}</p>
                    {h.registrationLink && (
                      <a href={h.registrationLink}
                        className="inline-flex items-center gap-2 px-5 py-2.5 bg-foss-green text-black font-mono text-sm font-bold hover:bg-foss-green/90 transition-colors">
                        Register Now <ArrowUpRight className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </RevealOnScroll>
              ))}
            </div>
          </section>
        )}

        {/* HALL OF FAME */}
        {past.length > 0 && (
          <section className="mb-14">
            <RevealOnScroll>
              <div className="flex items-center gap-3 mb-6">
                <Trophy className="w-4 h-4 text-yellow-400" />
                <p style={{ fontFamily:'"Jersey 25",monospace', fontSize:"1rem", letterSpacing:".08em", color:"rgba(255,255,255,.55)" }}>HALL OF FAME</p>
              </div>
            </RevealOnScroll>
            <div className="flex flex-col gap-5">
              {past.map((h, i) => (
                <RevealOnScroll key={h.id} delay={i * 100}>
                  <div className="hk-card">
                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <p style={{ fontFamily:"monospace", fontSize:".6rem", letterSpacing:".15em", color:"rgba(255,255,255,.22)", marginBottom:".5rem" }}>
                          {new Date(h.date).toLocaleDateString("en-US",{ month:"short", day:"numeric", year:"numeric" })} · PAST
                        </p>
                        <h3 style={{ fontFamily:'"Jersey 25",monospace', fontSize:"1.25rem", letterSpacing:".04em", color:"#fff", marginBottom:".3rem" }}>{h.name}</h3>
                        <p style={{ fontFamily:"monospace", fontSize:".7rem", letterSpacing:".1em", color:"rgba(0,255,127,.5)", marginBottom:".9rem" }}>THEME: {h.theme}</p>
                        <p className="text-gray-500 font-mono text-sm leading-relaxed mb-4">{h.description}</p>
                        {h.participants && (
                          <div className="flex gap-5">
                            <span style={{ fontFamily:"monospace", fontSize:".7rem", color:"rgba(255,255,255,.28)" }}>{h.participants} participants</span>
                            <span style={{ fontFamily:"monospace", fontSize:".7rem", color:"rgba(255,255,255,.28)" }}>{h.projects} projects</span>
                          </div>
                        )}
                      </div>
                      {h.winner && (
                        <div style={{ borderLeft:"1px solid rgba(255,255,255,.07)", paddingLeft:"2rem" }}>
                          <div className="flex items-center gap-2 mb-4">
                            <Trophy className="w-4 h-4 text-yellow-400" />
                            <span style={{ fontFamily:"monospace", fontSize:".62rem", letterSpacing:".15em", color:"rgb(250,204,21)", fontWeight:700 }}>WINNER</span>
                          </div>
                          <p style={{ fontFamily:'"Jersey 25",monospace', fontSize:"1rem", letterSpacing:".04em", color:"#fff", marginBottom:".3rem" }}>{h.winner.teamName}</p>
                          <p style={{ fontFamily:"monospace", fontSize:".78rem", color:"rgba(0,255,127,.7)", marginBottom:".8rem" }}>{h.winner.projectName}</p>
                          <p style={{ fontFamily:"monospace", fontSize:".62rem", letterSpacing:".12em", color:"rgba(255,255,255,.28)", marginBottom:".3rem" }}>TEAM MEMBERS</p>
                          <p className="text-gray-400 font-mono text-xs mb-4">{h.winner.members.join(", ")}</p>
                          {h.winner.repoUrl && (
                            <a href={h.winner.repoUrl} target="_blank" rel="noopener noreferrer"
                              className="inline-flex items-center gap-1.5 text-foss-green font-mono text-xs hover:underline">
                              View Project <ExternalLink className="w-3 h-3" />
                            </a>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                </RevealOnScroll>
              ))}
            </div>
          </section>
        )}

        {/* EMPTY STATE (shown only if no hackathons) */}
        {HACKATHONS.length === 0 && (
          <RevealOnScroll>
            <div style={{ border:"1px solid rgba(255,255,255,.07)", background:"rgba(255,255,255,.02)", padding:"4rem 2rem", textAlign:"center", marginBottom:"3rem", position:"relative" }}>
              <span style={{ position:"absolute", top:0, left:0, width:14, height:14, borderTop:"1px solid rgba(0,255,127,.3)", borderLeft:"1px solid rgba(0,255,127,.3)" }} />
              <Code2 className="w-10 h-10 text-gray-700 mx-auto mb-4" />
              <p style={{ fontFamily:'"Jersey 25",monospace', fontSize:"1.4rem", color:"rgba(255,255,255,.25)", letterSpacing:".05em", marginBottom:".4rem" }}>
                No hackathons scheduled yet
              </p>
              <p className="text-gray-700 font-mono text-xs tracking-widest">STAY TUNED FOR UPCOMING EVENTS</p>
            </div>
          </RevealOnScroll>
        )}

        {/* HOST CTA */}
        <RevealOnScroll delay={300}>
          <div className="hk-cta">
            <span style={{ position:"absolute", top:0, left:0, width:14, height:14, borderTop:"1px solid rgba(0,255,127,.55)", borderLeft:"1px solid rgba(0,255,127,.55)" }} />
            <div style={{ position:"absolute", top:"-25%", right:"-10%", width:280, height:280, background:"radial-gradient(circle,rgba(0,255,127,.08) 0%,transparent 70%)", pointerEvents:"none" }} />
            <p className="pg-eyebrow">ORGANIZE</p>
            <h3 style={{ fontFamily:'"Jersey 25",monospace', fontSize:"clamp(1.6rem,3.5vw,2.2rem)", letterSpacing:".04em", color:"#fff", marginBottom:".8rem" }}>
              Want to host a hackathon?
            </h3>
            <p className="text-gray-400 font-mono text-sm leading-relaxed mb-6" style={{ maxWidth:"36rem" }}>
              We provide mentorship, resources, and support to help you organize successful hackathons.
              Whether it's a 24-hour sprint or a week-long challenge, we've got you covered.
            </p>
            <a href="mailto:vcetopensource@gmail.com"
              className="inline-flex items-center gap-2 px-6 py-3 bg-foss-green text-black font-mono text-sm font-bold hover:bg-foss-green/90 transition-colors">
              Get in Touch <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </RevealOnScroll>

        {/* ── Commented-out card components (restore when feature is fully enabled) ──
        // HackathonCard (Active/Upcoming):
        // const HackathonCard: React.FC<{ hackathon: Hackathon }> = ({ hackathon }) => { ... }
        // PastHackathonCard with Winner:
        // const PastHackathonCard: React.FC<{ hackathon: Hackathon }> = ({ hackathon }) => { ... }
        ── */}

      </div>
    </div>
  </>
);

export default Hackathons;