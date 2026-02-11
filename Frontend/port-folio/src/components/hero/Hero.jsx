import React, { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  ArrowRight,
  Code,
  Sparkles,
  Cpu,
  Zap,
  Github,
  Linkedin,
  Twitter,
  Download,
} from "lucide-react";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 100]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0.3]);

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [textIndex, setTextIndex] = useState(0);

  const roles = [
    "Full Stack Developer",
    "React Specialist",
    "Next.js Expert",
    "UI/UX Enthusiast",
    "Open Source Contributor",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const x = (clientX / window.innerWidth - 0.5) * 20;
    const y = (clientY / window.innerHeight - 0.5) * 20;
    setMousePosition({ x, y });
  };

  return (
    <motion.section
      id="home"
      onMouseMove={handleMouseMove}
      className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white pt-20 "
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-cyan-500/20 to-purple-600/20 rounded-full blur-3xl"
        />

        <motion.div
          animate={{
            y: [0, -30, 0],
            x: [0, 30, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-br from-pink-500/15 to-orange-500/15 rounded-full blur-3xl"
        />

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />
      </div>

      {/* Floating Elements */}
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
        className="absolute top-20 left-10 p-3 rounded-xl bg-gradient-to-br from-cyan-500/10 to-cyan-500/5 border border-cyan-500/20 backdrop-blur-sm"
      >
        <Code className="w-6 h-6 text-cyan-400" />
      </motion.div>

      <motion.div
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 5, repeat: Infinity, delay: 0.5 }}
        className="absolute bottom-20 right-10 p-3 rounded-xl bg-gradient-to-br from-purple-500/10 to-purple-500/5 border border-purple-500/20 backdrop-blur-sm"
      >
        <Cpu className="w-6 h-6 text-purple-400" />
      </motion.div>

      <div className="relative container mx-auto px-6 lg:px-8 h-screen flex items-center">
        <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
          {/* Left Content */}
          <motion.div
            style={{ y, opacity }}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative z-10"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-600/20 border border-cyan-500/30 mb-6"
            >
              <Sparkles className="w-4 h-4 text-cyan-400" />
              <span className="text-sm font-medium bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Welcome to My Digital Space
              </span>
            </motion.div>

            <h1 className="text-5xl lg:text-7xl font-bold mb-4">
              <span className="block">Abhishek</span>
              <span className="block bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Gurjar
              </span>
            </h1>

            <div className="h-20 mb-6">
              <div className="flex items-center gap-2 text-2xl lg:text-3xl font-semibold">
                <Zap className="w-6 h-6 text-yellow-400 animate-pulse" />
                <TypeAnimation
                  sequence={roles.flatMap((role) => [role, 2000])}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                  className="bg-gradient-to-r from-cyan-300 to-purple-300 bg-clip-text text-transparent"
                />
              </div>
            </div>

            <p className="text-gray-300 text-lg mb-8 max-w-xl">
              Crafting exceptional digital experiences with cutting-edge
              technologies. I transform complex problems into beautiful,
              intuitive solutions that users love.
            </p>

            

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 mb-8">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group px-8 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold flex items-center gap-2 shadow-lg shadow-cyan-500/25 hover:shadow-xl hover:shadow-cyan-500/40 transition-all"
              >
                <a href="#projects" className="flex items-center gap-2">
                  View Projects
                </a>

                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 rounded-full border border-gray-700 hover:border-cyan-500/50 font-medium flex items-center gap-2 hover:bg-gradient-to-r hover:from-cyan-500/10 hover:to-purple-600/10 transition-all"
              >
                <Download className="w-5 h-5" />
                Download CV
              </motion.button>
            </div>

            {/* Social Links */}
            <div className="flex gap-4">
              {[
                { icon: Github, label: "GitHub", color: "hover:text-gray-300", href: "https://github.com/AbhiGurjar0"},
                {
                  icon: Linkedin,
                  label: "LinkedIn",
                  color: "hover:text-blue-400",
                  href: "https://linkedin.com/in/abhigurjar0",
                },
                {
                  icon: Twitter,
                  label: "Twitter",
                  color: "hover:text-sky-400",
                },
              ].map((social) => (
                <motion.a
                  key={social.label}
                  whileHover={{ y: -5 }}
                  href={social.href}
                  className={`w-12 h-12 rounded-xl bg-gray-900/50 border border-gray-800 flex items-center justify-center ${social.color} backdrop-blur-sm hover:border-cyan-500/30 transition-all`}
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Right Content - Profile */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="relative mx-auto max-w-2xl">
              {/* Main Image Container */}
              <motion.div
                style={{
                  x: mousePosition.x,
                  y: mousePosition.y,
                }}
                className="relative rounded-3xl overflow-hidden border-2 border-transparent bg-gradient-to-br from-cyan-500/30 via-transparent to-purple-500/30 p-1"
              >
                <div className="relative rounded-2xl overflow-hidden">
                  <div className="aspect-square relative">
                    {/* Fallback/Placeholder */}
                    <img src="/assets/hero2.png" alt="Profile" />
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/30 to-purple-900/30" />

                    {/* Floating Elements around image */}
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                      className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-r from-cyan-500/20 to-transparent rounded-full blur-xl"
                    />

                    <motion.div
                      animate={{ rotate: -360 }}
                      transition={{
                        duration: 25,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                      className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-r from-purple-500/20 to-transparent rounded-full blur-xl"
                    />
                  </div>
                </div>
              </motion.div>

              {/* Tech Stack Badges */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 flex gap-3"
              >
                {["React", "Next.js", "Node.js", "TypeScript"].map((tech) => (
                  <motion.div
                    key={tech}
                    whileHover={{ y: -5 }}
                    className="px-4 py-2 rounded-full bg-gray-900/80 backdrop-blur-sm border border-gray-800 text-sm font-medium"
                  >
                    {tech}
                  </motion.div>
                ))}
              </motion.div>

              {/* Decorative Rings */}
              <div className="absolute -inset-4 border-2 border-cyan-500/20 rounded-3xl pointer-events-none" />
              <div className="absolute -inset-8 border border-purple-500/10 rounded-3xl pointer-events-none" />
            </div>
          </motion.div>
        </div>

       
      </div>
    </motion.section>
  );
};

export default Hero;
