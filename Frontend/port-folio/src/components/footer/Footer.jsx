import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  Heart, Coffee, Code2, Rocket, 
  ArrowUp, Mail, Github, Linkedin, Twitter,
  Sparkles, Copyright, Sun, Moon
} from "lucide-react";

const Footer = () => {
  const [isHovering, setIsHovering] = useState(false);

  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

 
  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="relative bg-gradient-to-b from-black via-gray-900 to-black backdrop-blur-xl border-t border-gray-800"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-8">
        {/* Bottom Links */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-500">
            <a href="#home" className="hover:text-cyan-400 transition-colors">Home</a>
            <a href="#about" className="hover:text-purple-400 transition-colors">About</a>
            <a href="#projects" className="hover:text-pink-400 transition-colors">Projects</a>
            <a href="#skills" className="hover:text-green-400 transition-colors">Skills</a>
            <a href="#contact" className="hover:text-amber-400 transition-colors">Contact</a>
          </div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-gray-800"
          >
            <Rocket className="w-4 h-4 text-cyan-400" />
            <span className="text-sm text-gray-400">
              Built with <span className="text-cyan-400">React</span> + <span className="text-purple-400">Tailwind</span>
            </span>
          </motion.div>
        </div>

       
      </div>
    </motion.footer>
  );
};

export default Footer;