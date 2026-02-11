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
  Palette,
  Cpu,
  Cloud,
  GitBranch,
  Terminal,
  Smartphone,
  Globe,
  Lock,
  Zap,
  Sparkles,
  ChevronRight,
  TrendingUp,
  Layers,
  Shield,
  Clock,
  Rocket,
  Brain,
  Target,
  ArrowRight,
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
    {
      id: "frontend",
      label: "Frontend",
      icon: Globe,
      color: "from-cyan-500 to-blue-600",
    },
    {
      id: "backend",
      label: "Backend",
      icon: Server,
      color: "from-purple-500 to-pink-600",
    },
    {
      id: "database",
      label: "Database",
      icon: Database,
      color: "from-green-500 to-emerald-600",
    },
    {
      id: "devops",
      label: "DevOps",
      icon: Cloud,
      color: "from-orange-500 to-yellow-600",
    },
    {
      id: "tools",
      label: "Tools",
      icon: Terminal,
      color: "from-indigo-500 to-violet-600",
    },
    {
      id: "Language",
      label: "Languages",
      icon: Code2,
      color: "from-red-500 to-rose-600",
    },
  ];

  const skills = {
    frontend: [
      { name: "React", icon: "⚛️", level: 95, color: "bg-cyan-500", years: 4 },
      {
        name: "Next.js",
        icon: "▲",
        level: 92,
        color: "bg-purple-500",
        years: 3,
      },
      {
        name: "TypeScript",
        icon: "TS",
        level: 90,
        color: "bg-blue-500",
        years: 3,
      },
      {
        name: "Tailwind CSS",
        icon: "🎨",
        level: 94,
        color: "bg-teal-500",
        years: 3,
      },
      {
        name: "Framer Motion",
        icon: "🔄",
        level: 88,
        color: "bg-pink-500",
        years: 2,
      },
      {
        name: "GSAP",
        icon: "💫",
        level: 75,
        color: "bg-amber-500",
        years: 1,
      },
      
    ],
    backend: [
      {
        name: "Node.js",
        icon: "🟢",
        level: 92,
        color: "bg-green-500",
        years: 4,
      },
      {
        name: "Express",
        icon: "🚂",
        level: 90,
        color: "bg-emerald-500",
        years: 4,
      },
      {
        name: "Python",
        icon: "🐍",
        level: 85,
        color: "bg-yellow-500",
        years: 3,
      },
      {
        name: "FastAPI",
        icon: "⚡",
        level: 82,
        color: "bg-orange-500",
        years: 2,
      },
      {
        name: "RestAPI",
        icon: "📊",
        level: 78,
        color: "bg-pink-500",
        years: 2,
      },
      {
        name: "Socket.io",
        icon: "🔌",
        level: 80,
        color: "bg-blue-400",
        years: 2,
      },
    ],
    database: [
      {
        name: "MongoDB",
        icon: "🍃",
        level: 88,
        color: "bg-green-600",
        years: 3,
      },
      {
        name: "PostgreSQL",
        icon: "🐘",
        level: 85,
        color: "bg-blue-600",
        years: 3,
      },
      { name: "Redis", icon: "🗃️", level: 82, color: "bg-red-500", years: 2 },
      {
        name: "Firebase",
        icon: "🔥",
        level: 80,
        color: "bg-amber-500",
        years: 2,
      },
      {
        name: "Prisma",
        icon: "⚡",
        level: 78,
        color: "bg-indigo-500",
        years: 1,
      },
      {
        name: "MySQL",
        icon: "🐬",
        level: 75,
        color: "bg-cyan-500",
        years: 1,
      },
       {
        name: "Sequelize",
        icon: "🔗",
        level: 75,
        color: "bg-cyan-500",
        years: 1,
      },
    ],
    devops: [
      { name: "Docker", icon: "🐳", level: 85, color: "bg-blue-400", years: 3 },
      { name: "AWS", icon: "☁️", level: 80, color: "bg-amber-500", years: 2 },
      { name: "CI/CD", icon: "⚙️", level: 82, color: "bg-green-500", years: 2 },
      {
        name: "Nginx",
        icon: "🔧",
        level: 78,
        color: "bg-emerald-500",
        years: 2,
      },
      
    ],
    tools: [
      { name: "Git", icon: "📚", level: 95, color: "bg-orange-500", years: 5 },
      {
        name: "VS Code",
        icon: "💻",
        level: 96,
        color: "bg-blue-500",
      },
     
      { name: "Postman", icon: "🧷", level: 83, color: "bg-blue-600", years: 3 },
     
    ],
    Language: [
      {
        name: "C++",
        icon: "💻",
        level: 85,
        color: "bg-blue-400",
        years: 2,
      },
      {
        name: "C",
        icon: "🔧",
        level: 75,
        color: "bg-cyan-500",
        years: 1,
      },
      {
        name: "Python",
        icon: "🐍",
        level: 65,
        color: "bg-orange-500",
        years: 1,
      },
      {
        name: "JavaScript",
        icon: "📜",
        level: 60,
        color: "bg-purple-500",
        years: 1,
      },
    ],
  };

 

const SkillCard = ({ skill }) => (
  <motion.div
    whileHover={{ y: -8, scale: 1.03 }}
    className="group relative bg-gray-900/60 backdrop-blur-lg border border-gray-800 rounded-2xl p-6 transition-all duration-300 hover:border-cyan-400/40 hover:shadow-lg hover:shadow-cyan-500/10"
  >
    {/* Glow Effect */}
    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500/0 via-purple-500/0 to-pink-500/0 group-hover:from-cyan-500/10 group-hover:via-purple-500/10 group-hover:to-pink-500/10 transition-all duration-500" />

    <div className="relative flex flex-col items-center text-center gap-4">
      
      {/* Icon */}
      <div className="w-16 h-16 rounded-2xl bg-gray-800 flex items-center justify-center text-3xl group-hover:scale-110 transition-transform duration-300">
        {skill.icon}
      </div>

      {/* Skill Name */}
      <h4 className="font-semibold text-white text-lg tracking-wide">
        {skill.name}
      </h4>

    </div>
  </motion.div>
);

  const CategoryButton = ({ category }) => (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={() => setActiveCategory(category.id)}
      className={`px-6 py-3 rounded-xl flex items-center gap-3 transition-all ${
        activeCategory === category.id
          ? `bg-gradient-to-r ${category.color} text-white shadow-lg`
          : "bg-gray-900/50 backdrop-blur-sm border border-gray-800 text-gray-400 hover:text-white hover:border-cyan-500/30"
      }`}
    >
      <category.icon className="w-5 h-5" />
      <span className="font-medium">{category.label}</span>
    </motion.button>
  );

  return (
    <motion.section
      id="skills"
      ref={ref}
      className="relative py-20 lg:py-32 overflow-hidden bg-gradient-to-b from-black via-gray-900 to-black"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div style={{ y }} className="absolute inset-0">
          <div className="absolute top-1/4 -left-20 w-96 h-96 bg-gradient-to-r from-cyan-500/10 via-transparent to-purple-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-gradient-to-r from-pink-500/10 via-transparent to-orange-500/10 rounded-full blur-3xl" />

          {/* Floating Tech Icons */}
          {["⚛️", "▲", "🐍", "🐳", "🔥", "📱"].map((icon, idx) => (
            <motion.div
              key={idx}
              animate={{
                y: [0, -30, 0],
                x: [0, Math.random() * 40 - 20, 0],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 5 + Math.random() * 3,
                repeat: Infinity,
                delay: idx * 0.5,
              }}
              className="absolute text-2xl opacity-20"
              style={{
                left: `${10 + idx * 15}%`,
                top: `${20 + Math.random() * 60}%`,
              }}
            >
              {icon}
            </motion.div>
          ))}
        </motion.div>

        {/* Mesh Gradient */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-500/5 via-transparent to-purple-500/5" />

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f12_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f12_1px,transparent_1px)] bg-[size:60px_60px] lg:bg-[size:80px_80px]" />
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          style={{ scale }}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 lg:mb-20"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20 border border-cyan-500/30 mb-6 backdrop-blur-sm"
          >
            <Sparkles className="w-4 h-4 text-cyan-400" />
            <span className="text-sm font-medium bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Technical Expertise
            </span>
          </motion.div>

          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white via-cyan-100 to-white bg-clip-text text-transparent">
              My Skills
            </span>
          </h1>

          <p className="text-gray-400 text-lg lg:text-xl max-w-3xl mx-auto px-4">
            Mastering the{" "}
            <span className="text-cyan-400">modern tech stack</span> to build
            <span className="text-purple-400"> scalable</span> and
            <span className="text-pink-400"> innovative</span> solutions
          </p>
        </motion.div>

     

        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Left Column - Categories */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.4 }}
              className="sticky top-24"
            >
              <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-3xl p-6">
                <div className="flex items-center gap-3 mb-6">
                  <Layers className="w-6 h-6 text-cyan-400" />
                  <h3 className="text-xl font-semibold text-white">
                    Categories
                  </h3>
                </div>

                <div className="space-y-3">
                  {categories.map((category) => (
                    <CategoryButton key={category.id} category={category} />
                  ))}
                </div>

                {/* Current Category Info */}
                <motion.div
                  key={activeCategory}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="mt-8 p-4 rounded-xl bg-gray-800/50"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div
                      className={`p-2 rounded-lg bg-gradient-to-br ${categories.find((c) => c.id === activeCategory)?.color}`}
                    >
                      {React.createElement(
                        categories.find((c) => c.id === activeCategory)?.icon,
                      )}
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">
                        {categories.find((c) => c.id === activeCategory)?.label}
                      </h4>
                      <p className="text-gray-400 text-sm">
                        {skills[activeCategory].length} skills
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-300 text-sm">
                    {activeCategory === "frontend" &&
                      "Creating responsive and interactive user interfaces"}
                    {activeCategory === "backend" &&
                      "Building scalable server-side applications and APIs"}
                    {activeCategory === "database" &&
                      "Designing efficient data storage and retrieval systems"}
                    {activeCategory === "devops" &&
                      "Deploying and maintaining production applications"}
                    {activeCategory === "tools" &&
                      "Development workflow and productivity tools"}
                    {activeCategory === "mobile" &&
                      "Building cross-platform mobile applications"}
                  </p>
                </motion.div>
              </div>

              
            </motion.div>
          </div>

          {/* Right Column - Skills Grid */}
          <div className="lg:col-span-2">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
              >
                {skills[activeCategory].map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <SkillCard skill={skill} />
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>

         
          </div>
        </div>

        {/* Tech Stack Overview */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          className="mt-20 lg:mt-28"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl lg:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Full Tech Stack
              </span>
            </h3>
            <p className="text-gray-400 max-w-2xl mx-auto">
              A comprehensive overview of technologies I work with across
              different domains
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {Object.entries(skills).map(([category, categorySkills]) => (
              <motion.div
                key={category}
                whileHover={{ scale: 1.05 }}
                className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 text-center hover:border-cyan-500/30 transition-all"
              >
                <div
                  className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${
                    categories.find((c) => c.id === category)?.color
                  } mb-4`}
                >
                  {React.createElement(
                    categories.find((c) => c.id === category)?.icon,
                  )}
                </div>
                <h4 className="font-semibold text-white mb-2 capitalize">
                  {category}
                </h4>
                <div className="flex flex-wrap justify-center gap-2">
                  {categorySkills.slice(0, 3).map((skill) => (
                    <span key={skill.name} className="text-2xl">
                      {skill.icon}
                    </span>
                  ))}
                </div>
                <p className="text-gray-400 text-sm mt-2">
                  {categorySkills.length} skills
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Skills;
