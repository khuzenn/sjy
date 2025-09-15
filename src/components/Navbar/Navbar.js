import { useState } from "react";
import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Parent (container) animation
  const containerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        staggerChildren: 0.1,
      },
    },
    exit: { opacity: 0, y: -20, transition: { duration: 0.2 } },
  };

  // Child (item) animation
  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.3 } },
  };

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about-us" },
    { name: "Services", path: "/services" },
    { name: "Blog", path: "/blog" },
    { name: "Contact Us", path: "/contact-us" },
  ];

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-full max-w-5xl px-4">
      <div className="flex justify-between items-center bg-[#DAC5A7]/5 px-6 py-3 rounded-xl outline outline-2 outline-offset-1 outline-orange-200/5 backdrop-blur-lg shadow-lg shadow-black/30">
        {/* Logo */}
        <NavLink
          to="/"
          className="text-orange-200 font-bold uppercase tracking-wider text-sm"
        >
          SJY
        </NavLink>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `text-xs uppercase tracking-wider transition ${
                  isActive
                    ? "text-white border-b-2 border-orange-200 pb-1"
                    : "text-orange-200 hover:text-white"
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="w-6 h-0.5 bg-orange-200 rounded"></span>
          <span className="w-6 h-0.5 bg-orange-200 rounded"></span>
          <span className="w-6 h-0.5 bg-orange-200 rounded"></span>
        </button>
      </div>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="absolute top-20 left-1/2 -translate-x-1/2 w-[90%] bg-black/80 rounded-xl outline outline-1 outline-orange-200/10 p-6 flex flex-col gap-4 md:hidden"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {navItems.map((item, i) => (
              <motion.div key={i} variants={itemVariants}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    `text-sm uppercase tracking-wider transition ${
                      isActive ? "text-white" : "text-orange-200 hover:text-white"
                    }`
                  }
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </NavLink>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
