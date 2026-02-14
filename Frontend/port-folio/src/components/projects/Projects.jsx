import React, { useState, useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useInView,
  AnimatePresence,
} from "framer-motion";
import {
  Github,
  ExternalLink,
  ArrowUpRight,
  Code2,
  Sparkles,
  Filter,
  X,
  ChevronRight,
  Eye,
  Layers,
  Globe,
  Smartphone,
  Server,
  Database,
  Cpu,
  Palette,
  Zap,
  Lock,
  Target,
} from "lucide-react";

export const Projects = () => {
  const [selectedFilter, setSelectedFilter] = useState("all");
  const [selectedProject, setSelectedProject] = useState(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1]);

  const filters = [
    { id: "all", label: "All Projects", icon: Layers },
    { id: "frontend", label: "Frontend", icon: Globe },
    { id: "fullstack", label: "Full Stack", icon: Server },
  ];

  const projects = [
    {
      id: 1,
      title: "ExpenceTracker",
      src: "/assets/ExpenseTracker.png",
      description: "JavaScript-based personal expense tracker application",
      longDescription:
        "ExpenceTracker_M is a streamlined personal finance tool that helps track income and expenses. Built with vanilla JavaScript, it emphasizes client-side logic, responsive interactivity, and easy budget management.",
      tags: ["JavaScript", "Web"],
      category: ["fullstack"],
      github: "https://github.com/AbhiGurjar0/ExpenseTrackerFullStack",
      live: "https://expensetracker-mgdk.onrender.com",
      features: [
        "Income & expense logging",
        "Responsive UI",
        "Budget overview",
        "Interactive lists",
      ],
      color: "from-yellow-500 to-amber-500",
      icon: Code2,
    },
    {
      id: 2,
      title: "E-commerce",
      src: "/assets/E-commerce.png",
      description:
        "Full-featured e-commerce website with product browsing and cart features",
      longDescription:
        "A scalable online store platform built using EJS templating and server-side logic. Supports product listings, intuitive shopping cart simulation, and dynamic routing — designed as a foundational full-stack commerce project.",
      tags: ["EJS", "JavaScript", "Node.js"],
      category: ["web", "fullstack"],
      github: "https://github.com/AbhiGurjar0/E-commerce",
      live: "https://e-commerce-wk55.onrender.com",
      features: [
        "Product catalog browsing",
        "Cart interface",
        "Server-rendered views",
        "Responsive components",
      ],
      color: "from-indigo-500 to-purple-500",
      icon: Target,
    },
    {
      id: 3,
      title: "Social-Media-Platform",
      src: "/assets/social.png",
      description:
        "Interactive social media platform for posting and user interaction",
      longDescription:
        "A full-stack social media application that enables users to create profiles, post content, and interact with others. Built with EJS and JavaScript, this project demonstrates handling of user interactions, dynamic content rendering, and structured backend routing.",
      tags: ["EJS", "JavaScript", "Node.js"],
      category: ["web", "fullstack"],
      github: "https://github.com/AbhiGurjar0/Social-Media-Plateform",
      live: "https://social-media-plateform-jd2n.onrender.com",
      features: [
        "User profile pages",
        "Post creation & interaction",
        "Feed display",
        "Responsive UI",
      ],
      color: "from-blue-500 to-cyan-500",
      icon: Code2,
    },
    {
      id: 4,
      title: "SmartEval",
      src: "/assets/SmartEval.png",
      description:
        "A comprehensive academic platform combining advanced AI to detect plagiarism, verify handwriting, and evaluate assignments with precision and efficiency. ",
      longDescription:
        "SmartEval is an innovative academic evaluation platform that leverages cutting-edge AI technologies to provide comprehensive assessment solutions. It features advanced plagiarism detection, handwriting verification, and assignment evaluation capabilities, designed to enhance the integrity and efficiency of the educational process.",
      tags: ["JavaScript", "Web"],
      category: ["fullstack"],
      github: "https://github.com/AbhiGurjar0/SmartEval",
      live: "https://smarteval-1.onrender.com",
      features: [
        "Client-side evaluation logic",
        "Interactive UI",
        "Form handling",
        "Real-time feedback",
      ],
      color: "from-green-500 to-emerald-500",
      icon: Code2,
    },
   
    
    {
      id: 5,
      title: "Fooddie",
      description:
        "Dynamic food delivery platform with interactive UI and order features",
      longDescription:
        "A responsive food delivery application where users can browse restaurants, view menus, and simulate food ordering. Built with modern web technologies, this project highlights user-centric design and real-world interaction workflows.",
      tags: ["HTML", "CSS", "JavaScript", "EJS"],
      category: ["fullstack"],
      github: "https://github.com/AbhiGurjar0/Fooddie",
      live: "https://fooddie.onrender.com",
      features: [
        "Restaurant browsing interface",
        "Interactive menu display",
        "Order simulation UI",
        "Responsive layout",
      ],
      color: "from-yellow-500 to-red-500",
      icon: Globe,
    },
    

    {
      id: 6,
      title: "Animated Website",
      src: "/assets/Animated.png",
      description:
        "Interactive animated website featuring dynamic UI effects and motion design.",
      longDescription:
        "An immersive, visually engaging animated website that showcases modern frontend animation techniques. Built using HTML, CSS, and JavaScript, this project highlights smooth transitions, motion effects, and interactive elements designed to elevate the user experience. Perfect for landing pages, portfolios, and digital showcases that need personality and motion.",
      tags: ["HTML", "CSS", "JavaScript", "Animation", "Web UI"],
      category: ["web", "frontend"],
      github: "https://github.com/AbhiGurjar0/Animated-Website",
      live: "https://animated-website-plum-alpha.vercel.app/",
      features: [
        "Smooth CSS animations",
        "Interactive UI elements",
        "Responsive design",
        "Motion effects using JavaScript",
      ],
      color: "from-indigo-500 to-purple-500",
      icon: Sparkles,
    },
    {
      id:7,
      title: "Dota-2",
      src: "/assets/Dota2.png",
      description:
        "Interactive web project inspired by the Dota 2 universe with dynamic visuals.",
      longDescription:
        "A fan-made interactive project inspired by the popular game Dota 2. Built with modern web technologies, it integrates animations, dynamic UI elements, and visually rich content to deliver an immersive experience inspired by the Dota 2 brand. Ideal for showcasing game-themed interactions and high-impact frontend design.",
      tags: ["HTML", "CSS", "JavaScript", "Responsive UI"],
      category: ["web", "frontend"],
      github: "https://github.com/AbhiGurjar0/Dota-2",
      live: "#",
      features: [
        "Animated visuals",
        "Responsive layout",
        "Game-inspired interface",
        "Interactive UI elements",
      ],
      color: "from-red-500 to-rose-500",
      icon: Sparkles,
    },
    {
      id: 8,
      title: "Furniture Website Clone",
      src: "/assets/Furniture.png",
      description:
        "Clean frontend clone of a modern furniture e-commerce website.",
      longDescription:
        "A pixel-perfect frontend clone of a contemporary furniture e-commerce site. Focused on UI accuracy, responsive design, and user-friendly layout, this project replicates the look and feel of professional online furniture stores using HTML, CSS, and JavaScript. Great for showing precision in UI reproduction and layout mastery.",
      tags: ["HTML", "CSS", "JavaScript", "Responsive Design"],
      category: ["web", "frontend"],
      github: "https://github.com/AbhiGurjar0/Furniture-website-clone",
      live: "https://furniturewebsite-cyan.vercel.app/",
      features: [
        "Responsive UI",
        "Clean UI/UX replication",
        "Mobile optimized",
        "Interactive navigation",
      ],
      color: "from-yellow-500 to-orange-500",
      icon: Globe,
    },
    {
      id: 9,
      title: "Chess",
      description:
        "Browser-based Chess game with move logic and interactive board.",
      longDescription:
        "A fully interactive Chess application built for the web. This project includes board rendering, drag-and-drop piece movement, and rule-based move logic using JavaScript. Designed to mimic the classic game experience in the browser with clean visuals and game controls.",
      tags: ["HTML", "CSS", "JavaScript", "Game Logic"],
      category: ["web", "interactive"],
      github: "https://github.com/AbhiGurjar0/Chess",
      live: "#",
      features: [
        "Interactive board",
        "Drag-and-drop pieces",
        "Rule-based movement logic",
        "Game state tracking",
      ],
      color: "from-black to-gray-700",
      icon: Sparkles,
    },
    {
      id: 10,
      title: "safeTrail",
      src: "/assets/Tourist.png",
      description:
        "Web tool focused on secure navigation and travel assistance.",
      longDescription:
        "safeTrail is a web application designed to assist users with secure navigation, route suggestions, and travel insights. With attention to UI clarity and user experience, this project highlights frontend routing, map integrations, and user-centric design principles.",
      tags: ["HTML", "CSS", "JavaScript", "User Experience"],
      category: ["web", "utility"],
      github: "https://github.com/AbhiGurjar0/safeTrail",
      live: "#",
      features: [
        "Secure travel navigation",
        "Interactive map UI",
        "Responsive layout",
        "Travel insights",
      ],
      color: "from-green-500 to-teal-500",
      icon: Globe,
    },
  ];

  const filteredProjects =
    selectedFilter === "all"
      ? projects
      : projects.filter((project) => project.category.includes(selectedFilter));

  const ProjectCard = ({ project, index }) => (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -10 }}
      className="group relative"
    >
      <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-3xl blur opacity-0 group-hover:opacity-20 transition duration-500"></div>
      <div className="relative bg-gray-900/80 backdrop-blur-xl border border-gray-800 rounded-3xl overflow-hidden hover:border-cyan-500/30 transition-all duration-300 h-full">
        {/* Image Container */}
        <div className="relative h-48 sm:h-56 overflow-hidden">
          <div
            className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-20`}
          />
          <img
            src={project.src}
            alt={project.title}
            className="w-full h-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent z-10" />
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="flex items-center gap-3 mb-4">
            <div
              className={`p-2 rounded-xl bg-gradient-to-br ${project.color}`}
            >
              <project.icon className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white">{project.title}</h3>
          </div>

          <p className="text-gray-400 mb-4 line-clamp-2">
            {project.description}
          </p>

          {/* Features */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.features.map((feature) => (
              <span
                key={feature}
                className="px-3 py-1 bg-gray-800/50 text-gray-300 text-sm rounded-full"
              >
                {feature}
              </span>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 px-4 py-2.5 rounded-xl bg-gray-800 hover:bg-gray-700 text-white font-medium flex items-center justify-center gap-2 transition-all"
            >
              <Github className="w-5 h-5" />
              <span>Code</span>
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 px-4 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-medium flex items-center justify-center gap-2 transition-all shadow-lg shadow-cyan-500/25"
            >
              <ExternalLink className="w-5 h-5" />
              <span>Live Demo</span>
            </motion.a>
          </div>
        </div>
      </div>
    </motion.div>
  );

  return (
    <motion.section
      id="projects"
      ref={ref}
      className="relative py-20 lg:py-32 overflow-hidden bg-gradient-to-b from-black via-gray-900 to-black"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div style={{ y }} className="absolute inset-0">
          <div className="absolute top-1/4 -left-20 w-96 h-96 bg-gradient-to-r from-cyan-500/10 via-transparent to-purple-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-gradient-to-r from-pink-500/10 via-transparent to-orange-500/10 rounded-full blur-3xl" />
        </motion.div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f12_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f12_1px,transparent_1px)] bg-[size:60px_60px] lg:bg-[size:80px_80px]" />

        {/* Floating Elements */}
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
          className="absolute top-20 right-10 p-4 rounded-2xl bg-gray-900/50 backdrop-blur-sm border border-gray-800"
        >
          <Code2 className="w-6 h-6 text-cyan-400" />
        </motion.div>
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
              Featured Work
            </span>
          </motion.div>

          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white via-cyan-100 to-white bg-clip-text text-transparent">
              My Projects
            </span>
          </h1>

          <p className="text-gray-400 text-lg lg:text-xl max-w-3xl mx-auto px-4">
            Showcasing{" "}
            <span className="text-cyan-400">innovative solutions</span> that
            blend
            <span className="text-purple-400">
              {" "}
              cutting-edge technology
            </span>{" "}
            with
            <span className="text-pink-400"> beautiful design</span>
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12 lg:mb-16"
        >
          {filters.map((filter) => (
            <motion.button
              key={filter.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedFilter(filter.id)}
              className={`px-5 py-2.5 rounded-full flex items-center gap-2 transition-all ${
                selectedFilter === filter.id
                  ? "bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-lg shadow-cyan-500/25"
                  : "bg-gray-900/50 backdrop-blur-sm border border-gray-800 text-gray-400 hover:text-white hover:border-cyan-500/30"
              }`}
            >
              <filter.icon className="w-4 h-4" />
              <span className="font-medium">{filter.label}</span>
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>

      {/* Project Modal */}
    </motion.section>
  );
};
