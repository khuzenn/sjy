import { useState } from "react";
import { Link } from "react-router-dom";
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
        staggerChildren: 0.1, // delay tiap anak
      },
    },
    exit: { opacity: 0, y: -20, transition: { duration: 0.2 } },
  };

  // Child (item) animation
  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.3 } },
  };

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-full max-w-5xl px-4">
      <div className="flex justify-between items-center bg-[#DAC5A7]/5 px-6 py-3 rounded-xl outline outline-2 outline-offset-1 outline-orange-200/5 backdrop-blur-lg shadow-lg shadow-black/30">
        {/* Logo */}
        <Link
          to="/"
          className="text-orange-200 font-bold uppercase tracking-wider text-sm"
        >
          SJY
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6">
          <Link
            to="/home"
            className="text-orange-200 text-xs uppercase tracking-wider hover:text-white transition"
          >
            Home
          </Link>
          <Link
            to="/work"
            className="text-orange-200 text-xs uppercase tracking-wider hover:text-white transition"
          >
            About Us
          </Link>
          <Link
            to="/about-us"
            className="text-orange-200 text-xs uppercase tracking-wider hover:text-white transition"
          >
            Services
          </Link>
          <span className="flex items-center text-orange-200 text-xs uppercase tracking-wider cursor-pointer hover:text-white transition">
            Pages
            <svg
              className="w-4 h-4 ml-1"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 
                   1 0 111.414 1.414l-4 4a1 1 0 
                   01-1.414 0l-4-4a1 1 0 
                   010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </span>
          <Link
            to="/services"
            className="text-orange-200 text-xs uppercase tracking-wider hover:text-white transition"
          >
            Blog
          </Link>
          <Link
            to="/contact-us"
            className="text-orange-200 text-xs uppercase tracking-wider hover:text-white transition"
          >
            Contact Us
          </Link>
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
            {["Home", "About Us", "Services", "Blog", "Contact Us"].map(
              (item, i) => (
                <motion.div key={i} variants={itemVariants}>
                  <Link
                    to={
                      item === "Home"
                        ? "/home"
                        : item === "About Us"
                        ? "/work"
                        : item === "Services"
                        ? "/about-us"
                        : item === "Blog"
                        ? "/services"
                        : "/contact-us"
                    }
                    className="text-orange-200 text-sm uppercase tracking-wider hover:text-white transition"
                    onClick={() => setIsOpen(false)}
                  >
                    {item}
                  </Link>
                </motion.div>
              )
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
