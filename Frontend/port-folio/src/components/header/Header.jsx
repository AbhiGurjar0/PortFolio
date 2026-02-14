import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronRight } from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ["home", "about", "skills", "projects", "contact"];
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: "home", label: "Home", icon: "🏠" },
    { id: "about", label: "About", icon: "✨" },
    { id: "skills", label: "Skills", icon: "⚡" },
    { id: "projects", label: "Projects", icon: "🚀" },
    { id: "contact", label: "Contact", icon: "💬" },
  ];

  const handleNavClick = (id) => {
    setActiveSection(id);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMobileMenuOpen(false);
  };

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        /* Adjusted responsive widths and added 'px-4' for mobile padding */
        className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 rounded-full 
        w-[90%] md:w-max px-2 py-1
        ${
          isScrolled || mobileMenuOpen
            ? "md:bg-white/90 md:dark:bg-gray-900/90 md:backdrop-blur-xl md:border md:border-gray-200/20 md:shadow-lg"
            : "bg-transparent border-transparent"
        }`}
      >
        <div className="flex items-center justify-between h-12 md:h-14 px-2">
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <motion.button
                key={item.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleNavClick(item.id)}
                className={`relative px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeSection === item.id
                    ? "text-white"
                    : "text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                }`}
              >
                {activeSection === item.id && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full -z-10"
                    transition={{ type: "spring", bounce: 0.2 }}
                  />
                )}
                <span className="flex items-center gap-2">
                  <span>{item.icon}</span>
                  {item.label}
                </span>
              </motion.button>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden fixed right-2 top-2 p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-white"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu - Now matches the floating style */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            className="fixed top-20 left-1/2 -translate-x-1/2 w-[90%] z-40 bg-white/95 dark:bg-gray-900/95 backdrop-blur-2xl border border-gray-200/20 rounded-3xl overflow-hidden shadow-2xl md:hidden"
          >
            <div className="p-4 flex flex-col gap-2">
              {navItems.map((item) => (
                <motion.button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`flex items-center justify-between px-4 py-4 rounded-2xl transition-all ${
                    activeSection === item.id
                      ? "bg-gradient-to-r from-cyan-500/10 to-purple-600/10 border border-cyan-500/20 text-cyan-600 dark:text-cyan-400"
                      : "text-gray-700 dark:text-gray-300"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-xl">{item.icon}</span>
                    <span className="font-semibold text-base">
                      {item.label}
                    </span>
                  </div>
                  {activeSection === item.id && <ChevronRight size={18} />}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Scroll Progress */}
      <div className="fixed top-0 left-0 right-0 h-1 z-[60]">
        <motion.div
          className="h-full bg-gradient-to-r from-cyan-500 to-purple-600"
          style={{
            scaleX: isScrolled ? 1 : 0,
            originX: 0,
            transition: { duration: 0.3 },
          }}
        />
      </div>
    </>
  );
};

export default Header;
