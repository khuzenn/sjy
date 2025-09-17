import { motion } from "framer-motion";
import Footer from "../components/Footer/Footer";
import bgImage from "../assets/images/services/bg-security.jpg";

// Variants container dengan stagger
const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.25,
    },
  },
};

// Variants fadeInUp untuk smooth scroll
const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

export default function Services() {
  return (
    <div className="flex flex-col min-h-screen text-white bg-black">
      {/* Hero Section */}
      <section className="relative px-64 flex items-center justify-start min-h-[70vh] overflow-hidden">
        {/* Background Image dengan motion */}
        <motion.div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${bgImage})` }}
          initial={{ scale: 1 }}
          animate={{ scale: 1.05 }} // zoom halus
          transition={{ duration: 8, ease: "easeOut" }}
        />

        {/* Overlay gelap */}
        <div className="absolute inset-0 bg-black/60" />

        {/* Text Content */}
        <motion.div
          className="relative z-10 text-start px-4"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h1
            className="text-3xl sm:text-4xl lg:text-5xl font-bold font-['Satoshi'] drop-shadow-lg"
            variants={fadeInUp}
          >
            About Us
          </motion.h1>
          <motion.p
            className="mt-4 text-base sm:text-lg text-neutral-300 font-['Satoshi']"
            variants={fadeInUp}
          >
            Kenali lebih dekat siapa kami dan apa yang kami lakukan.
          </motion.p>
        </motion.div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
