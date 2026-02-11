import React, { useRef, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useInView,
  AnimatePresence,
} from "framer-motion";
import {
  Code2,
  Server,
  Database,
  Cloud,
  Terminal,
  Globe,
  Sparkles,
  Layers,
} from "lucide-react";

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const [activeCategory, setActiveCategory] = useState("frontend");

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1]);

  const categories = [
    { id: "frontend", label: "Frontend", icon: Globe, color: "from-cyan-500 to-blue-600" },
    { id: "backend", label: "Backend", icon: Server, color: "from-purple-500 to-pink-600" },
    { id: "database", label: "Database", icon: Database, color: "from-green-500 to-emerald-600" },
    { id: "devops", label: "DevOps", icon: Cloud, color: "from-orange-500 to-yellow-600" },
    { id: "tools", label: "Tools", icon: Terminal, color: "from-indigo-500 to-violet-600" },
    { id: "Language", label: "Languages", icon: Code2, color: "from-red-500 to-rose-600" },
  ];

  const skills = {
    frontend: [
      { name: "React", icon: "⚛️" }, { name: "Next.js", icon: "▲" }, { name: "TypeScript", icon: "TS" },
      { name: "Tailwind CSS", icon: "🎨" }, { name: "Framer Motion", icon: "🔄" }, { name: "GSAP", icon: "💫" },
    ],
    backend: [
      { name: "Node.js", icon: "🟢" }, { name: "Express", icon: "🚂" }, { name: "Python", icon: "🐍" },
      { name: "FastAPI", icon: "⚡" }, { name: "RestAPI", icon: "📊" }, { name: "Socket.io", icon: "🔌" },
    ],
    database: [
      { name: "MongoDB", icon: "🍃" }, { name: "PostgreSQL", icon: "🐘" }, { name: "Redis", icon: "🗃️" },
      { name: "Firebase", icon: "🔥" }, { name: "Prisma", icon: "⚡" }, { name: "MySQL", icon: "🐬" }, { name: "Sequelize", icon: "🔗" },
    ],
    devops: [
      { name: "Docker", icon: "🐳" }, { name: "AWS", icon: "☁️" }, { name: "CI/CD", icon: "⚙️" }, { name: "Nginx", icon: "🔧" },
    ],
    tools: [
      { name: "Git", icon: "📚" }, { name: "VS Code", icon: "💻" }, { name: "Postman", icon: "🧷" },
    ],
    Language: [
      { name: "C++", icon: "💻" }, { name: "C", icon: "🔧" }, { name: "Python", icon: "🐍" }, { name: "JavaScript", icon: "📜" },
    ],
  };

  const SkillCard = ({ skill }) => (
    <motion.div
      whileHover={{ y: -5, scale: 1.02 }}
      className="group relative bg-gray-900/60 backdrop-blur-lg border border-gray-800 rounded-2xl p-4 sm:p-6 transition-all duration-300 hover:border-cyan-400/40 h-full"
    >
      <div className="relative flex flex-col items-center text-center gap-3">
        <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl bg-gray-800 flex items-center justify-center text-2xl sm:text-3xl group-hover:scale-110 transition-transform duration-300">
          {skill.icon}
        </div>
        <h4 className="font-semibold text-white text-sm sm:text-lg tracking-wide">{skill.name}</h4>
      </div>
    </motion.div>
  );

  return (
    <motion.section id="skills" ref={ref} className="relative py-16 lg:py-32 overflow-hidden bg-black">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div style={{ y }} className="absolute inset-0">
          <div className="absolute top-1/4 -left-20 w-72 h-72 sm:w-96 sm:h-96 bg-cyan-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 -right-20 w-72 h-72 sm:w-96 sm:h-96 bg-purple-500/10 rounded-full blur-3xl" />
        </motion.div>
      </div>

      <div className="relative container mx-auto px-4">
        <motion.div style={{ scale }} className="text-center mb-10 lg:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/30 mb-6 uppercase tracking-wider text-xs sm:text-sm font-medium text-cyan-400">
            <Sparkles className="w-4 h-4" /> Technical Expertise
          </div>
          <h1 className="text-3xl sm:text-5xl lg:text-7xl font-bold mb-4 text-white">My Skills</h1>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 items-start">
          {/* Column 1: Categories - Fixed for Mobile Scroll */}
          <div className="lg:col-span-1 w-full min-w-0">
            <div className="lg:sticky lg:top-24 bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-3xl p-4 sm:p-6">
              <div className="hidden lg:flex items-center gap-3 mb-6">
                <Layers className="w-6 h-6 text-cyan-400" />
                <h3 className="text-xl font-semibold text-white">Categories</h3>
              </div>
              
              <div className="relative w-full overflow-hidden">
                <div className="flex lg:flex-col overflow-x-auto lg:overflow-visible gap-2 pb-4 lg:pb-0 no-scrollbar touch-pan-x">
                  {categories.map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => setActiveCategory(cat.id)}
                      className={`whitespace-nowrap px-5 py-3 rounded-xl flex items-center gap-3 transition-all flex-shrink-0 lg:flex-shrink-1 lg:w-full ${
                        activeCategory === cat.id
                          ? `bg-gradient-to-r ${cat.color} text-white shadow-lg shadow-cyan-500/20`
                          : "bg-gray-800/40 text-gray-400 border border-gray-800 hover:border-gray-600"
                      }`}
                    >
                      <cat.icon size={18} />
                      <span className="text-sm font-medium">{cat.label}</span>
                    </button>
                  ))}
                </div>
              </div>

              <div className="hidden sm:block mt-6 p-4 rounded-xl bg-gray-800/30 border border-gray-700/50">
                <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
                  {activeCategory === "frontend" && "Crafting high-performance, accessible, and beautiful user interfaces."}
                  {activeCategory === "backend" && "Architecting robust server-side logic and scalable microservices."}
                  {activeCategory === "database" && "Optimizing data flow and ensuring data integrity across platforms."}
                  {activeCategory === "devops" && "Streamlining deployment pipelines and managing cloud infrastructure."}
                  {activeCategory === "tools" && "Utilizing the best-in-class tools for efficient project delivery."}
                  {activeCategory === "Language" && "Leveraging core programming languages for complex problem solving."}
                </p>
              </div>
            </div>
          </div>

          {/* Column 2: Skill Grid - Fixed for Mobile Display */}
          <div className="lg:col-span-2 min-w-0">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-6"
              >
                {skills[activeCategory].map((skill) => (
                  <SkillCard key={skill.name} skill={skill} />
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Tech Stack Overview Footer */}
        <div className="mt-16 lg:mt-32">
          <h3 className="text-2xl lg:text-4xl font-bold mb-8 text-center text-white">Full Stack Overview</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
            {Object.entries(skills).map(([key, list]) => (
              <div key={key} className="p-4 bg-gray-900/40 border border-gray-800 rounded-2xl text-center">
                <div className={`inline-block p-2 rounded-lg bg-gradient-to-br ${categories.find((c) => c.id === key)?.color} mb-3`}>
                  {React.createElement(categories.find((c) => c.id === key)?.icon || Code2, { size: 20, className: "text-white" })}
                </div>
                <h5 className="text-white text-xs sm:text-sm font-bold uppercase mb-1">{key}</h5>
                <p className="text-gray-500 text-[10px] sm:text-xs">{list.length} Technologies</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Skills;