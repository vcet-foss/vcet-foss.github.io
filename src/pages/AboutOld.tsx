import React from "react";
import { Target, Heart, Code2 } from "lucide-react";
import GlitchText from "../components/GlitchText";
import RevealOnScroll from "../components/RevealOnScroll.tsx";

const About: React.FC = () => {
  return (
    <div className="pt-32 pb-24 min-h-screen bg-black">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <RevealOnScroll>
          <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-8 jersey-25-regular">
            <GlitchText text="About VCET FOSS" speed={40} />
          </h1>
          <p className="text-xl text-gray-400 font-sans leading-relaxed mb-16">
            We are a student-run initiative dedicated to fostering a culture of
            innovation and open-source contribution at Vidyavardhini's College of
            Engineering and Technology.
          </p>
        </RevealOnScroll>

        <div className="grid md:grid-cols-3 gap-8 text-left">
          <RevealOnScroll delay={100}>
            <div className="p-6 bg-gray-900/30 border border-white/5 hover:border-foss-green/50 transition-colors h-full">
              <Target className="w-8 h-8 text-foss-green mb-4" />
              <h3 className="text-xl font-bold text-white mb-3 jersey-25-regular tracking-wide text-2xl">Our Mission</h3>
              <p className="text-gray-400 text-sm">
                To bridge the gap between academic learning and industry standards
                by building real-world software together.
              </p>
            </div>
          </RevealOnScroll>

          <RevealOnScroll delay={200}>
            <div className="p-6 bg-gray-900/30 border border-white/5 hover:border-foss-green/50 transition-colors h-full">
              <Code2 className="w-8 h-8 text-foss-green mb-4" />
              <h3 className="text-xl font-bold text-white mb-3 jersey-25-regular tracking-wide text-2xl">What We Do</h3>
              <p className="text-gray-400 text-sm">
                We host hackathons, conduct workshops, and maintain open-source
                repositories for college utilities.
              </p>
            </div>
          </RevealOnScroll>

          <RevealOnScroll delay={300}>
            <div className="p-6 bg-gray-900/30 border border-white/5 hover:border-foss-green/50 transition-colors h-full">
              <Heart className="w-8 h-8 text-foss-green mb-4" />
              <h3 className="text-xl font-bold text-white mb-3 jersey-25-regular tracking-wide text-2xl">Core Values</h3>
              <p className="text-gray-400 text-sm">
                Inclusivity, transparency, and collaboration. No gatekeeping.
                Everyone is welcome to learn and contribute.
              </p>
            </div>
          </RevealOnScroll>
        </div>

        <div className="mt-24">
          <RevealOnScroll delay={400}>
            <h2 className="text-3xl font-display font-bold text-white mb-12 jersey-25-regular">
              The Team
            </h2>
            <h1 className="text-7xl font-bold text-foss-green">
              <GlitchText text="YOU ALL!" speed={60} />
            </h1>
          </RevealOnScroll>
        </div>
      </div>
    </div>
  );
};

export default About;
