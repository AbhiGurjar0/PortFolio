import React, { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import {
  Users,
  Clock,
  Globe,
  Code2,
  Palette,
  Database,
  Server,
  ChevronRight,
  Sparkles,
  Trophy,
  Target,
  Zap,
  Shield,
} from "lucide-react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.25 });

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]);

  const stats = [
    {
      icon: Trophy,
      value: "40+",
      label: "Projects Built",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Target,
      value: "10+",
      label: "Full Stack Apps",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Clock,
      value: "1+",
      label: "Years Experience",
      color: "from-orange-500 to-yellow-500",
    },
    {
      icon: Globe,
      value: "Open",
      label: "To Opportunities",
      color: "from-green-500 to-emerald-500",
    },
  ];

  const skills = [
    {
      icon: Code2,
      category: "Frontend",
      tech: ["React", "Next.js", "TypeScript", "Tailwind"],
      color: "border-cyan-500/30",
    },
    {
      icon: Server,
      category: "Backend",
      tech: ["Node.js", "Express", "REST APIs"],
      color: "border-purple-500/30",
    },
    {
      icon: Database,
      category: "Database",
      tech: ["MongoDB", "MySQL", "Firebase"],
      color: "border-green-500/30",
    },
    {
      icon: Palette,
      category: "Design",
      tech: ["Figma", "Framer Motion", "UI Systems"],
      color: "border-pink-500/30",
    },
  ];

  return (
    <motion.section
      id="about"
      ref={ref}
      className="relative py-24 lg:py-32 overflow-hidden bg-gradient-to-b from-gray-900 to-black"
    >
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div style={{ y, opacity }} className="absolute inset-0">
          <div className="absolute top-1/4 -left-20 w-96 h-96 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-gradient-to-r from-pink-500/10 to-orange-500/10 rounded-full blur-3xl" />
        </motion.div>

        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>

      <div className="relative container mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-600/20 border border-cyan-500/30 mb-4">
            <Sparkles className="w-4 h-4 text-cyan-400" />
            <span className="text-sm font-medium bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              My Journey & Expertise
            </span>
          </div>

          <h2 className="text-4xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-cyan-100 to-white bg-clip-text text-transparent">
            About Me
          </h2>

          <p className="text-gray-400 text-lg lg:text-xl max-w-3xl mx-auto">
            Full Stack Developer focused on building scalable products,
            high-performance applications, and exceptional user experiences.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden border border-gray-800">
              <img
                src="/src/assets/about.png"
                alt="About me"
                className="w-full h-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
            </div>

            <div className="absolute -inset-4 border border-cyan-500/20 rounded-3xl -z-10" />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
          >
            <h3 className="text-3xl lg:text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Crafting Digital Excellence
            </h3>

            <div className="space-y-4 text-gray-300">
              <p>
                I'm a <span className="text-cyan-400 font-semibold">Full Stack Developer</span> passionate about transforming ideas into powerful digital products. I focus on writing clean, scalable code and building applications that deliver real-world impact.
              </p>

              <p>
                My expertise lies in the <span className="text-purple-400 font-semibold">JavaScript ecosystem</span>, where I build modern interfaces with React and engineer reliable backend systems using Node.js.
              </p>

              <p>
                Beyond coding, I constantly explore emerging technologies and refine my craft — because great developers never stop learning.
              </p>
            </div>

            {/* Value Cards */}
            <div className="grid grid-cols-2 gap-4 mt-10">
              {[
                { icon: Target, title: "Problem Solver" },
                { icon: Zap, title: "Fast Learner" },
                { icon: Shield, title: "Reliable" },
                { icon: Globe, title: "Global Mindset" },
              ].map((item) => (
                <div
                  key={item.title}
                  className="p-4 rounded-2xl bg-gray-900/50 border border-gray-800 hover:border-cyan-500/30 transition"
                >
                  <item.icon className="w-5 h-5 text-cyan-400 mb-2" />
                  <h4 className="text-white font-semibold">{item.title}</h4>
                </div>
              ))}
            </div>

            {/* CTA */}
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 mt-10 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold shadow-lg shadow-cyan-500/20"
            >
              Let’s Work Together
              <ChevronRight />
            </motion.a>
          </motion.div>
        </div>

      

        
      </div>
    </motion.section>
  );
};

export default About;
