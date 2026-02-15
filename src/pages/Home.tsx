import React from "react";
import { ArrowRight } from "lucide-react";
import Button from "../components/Button";
import { FEATURES } from "../utils/constants";
import { useNavigate, NavLink } from "react-router-dom";

const Home: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex flex-col justify-center pt-20 overflow-hidden">
        {/* Abstract Background Grid */}
        <div className="absolute top-0 inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-size-[4rem_4rem] mask-[radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 z-10">
          <div className="max-w-4xl">
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-display font-bold text-white tracking-tight leading-[1.1] mb-8 jersey-25-regular">
              BUILDING THE <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-white to-gray-500">
                FUTURE OF
              </span>{" "}
              <br />
              <span className="text-foss-green">OPEN SOURCE.</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mb-10 font-sans leading-relaxed">
              We are a community of student developers at VCET solving real
              campus problems. Stop building alone. Join the movement.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">

              <NavLink to="/projects">
                <Button
                  variant="primary"
                  size="lg"
                  className="group"
                >
                  Explore Projects{" "}
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </NavLink>
              <NavLink to="/community">
                <Button
                  variant="outline"
                  size="lg"
                >
                  Join Community
                </Button>
              </NavLink>
            </div>
          </div>
        </div>
        {/* Decorative Terminal Element
        <div className="hidden lg:block absolute right-0 bottom-20 w-1/3 p-6 bg-black border border-gray-800 border-r-0 rounded-l-xl opacity-90 backdrop-blur shadow-2xl translate-x-12 hover:translate-x-0 transition-transform duration-500">
          <div className="flex gap-2 mb-4">
            <div className="w-3 h-3 rounded-full bg-red-500" />
            <div className="w-3 h-3 rounded-full bg-yellow-500" />
            <div className="w-3 h-3 rounded-full bg-green-500" />
          </div>
          <div className="font-mono text-sm space-y-2">
            <div className="flex text-gray-400">
              <span className="text-foss-green mr-2">$</span>
              <span>git clone https://github.com/vcet-foss/future.git</span>
            </div>
            <div className="text-gray-500">Cloning into 'future'...</div>
            <div className="text-gray-500">remote: Enumerating objects: 1024, done.</div>
            <div className="text-gray-500">remote: Total 1024 (delta 42), reused 0 (delta 0)</div>
            <div className="flex text-gray-400">
              <span className="text-foss-green mr-2">$</span>
              <span className="animate-pulse">_</span>
            </div>
          </div>
        </div> */}
      </section>

      {/* Features Section */}
      <section className="py-24 border-t border-white/5 bg-gray-950/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-12">
            {FEATURES.map((feature, index) => (
              <div
                key={index}
                className="group p-8 border-2 border-white/5 hover:border-foss-green/30 bg-black transition-all hover:-translate-y-1"
              >
                <div className="w-12 h-12 bg-white/5 rounded-lg flex items-center justify-center mb-6 text-foss-green group-hover:scale-110 transition-transform">
                  <feature.icon size={24} />
                </div>
                <h3 className="text-xl font-display font-bold text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-400 leading-relaxed font-sans">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-foss-green relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10 pattern-dots" />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-black mb-6">
            Ready to ship code?
          </h2>
          <p className="text-black/80 text-xl max-w-2xl mx-auto mb-10 font-medium">
            Whether you are a complete beginner or a seasoned pro, there is a
            place for you here.
          </p>
          <div className="flex justify-center gap-4">
            <button
              onClick={() => navigate("/community")}
              className="bg-black text-white px-8 py-4 font-mono font-bold hover:bg-gray-900 transition-colors active:scale-95"
            >
              Start Contributing_
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
