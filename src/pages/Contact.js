import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Footer from "../components/Footer/Footer";
import { MessageCircle, MapPin, Phone, ChevronDown } from "lucide-react";

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

export default function Contact() {
  
  const [openIndex, setOpenIndex] = useState(null);
  
  const faqs = [
    {
      question: "Apa itu layanan AIS?",
      answer:
        "AIS adalah layanan yang membantu perusahaan dalam manajemen keamanan dengan solusi modern dan efisien.",
    },
    {
      question: "Bagaimana cara menghubungi tim sales?",
      answer:
        "Kamu bisa menghubungi tim sales melalui tombol 'Chat to Sales' atau melalui email resmi kami.",
    },
    {
      question: "Apakah layanan AIS tersedia 24/7?",
      answer:
        "Ya, layanan kami tersedia 24/7 untuk memastikan kebutuhan keamanan Anda selalu terjaga.",
    },
    {
      question: "Apakah ada trial gratis?",
      answer:
        "Ya, kami menyediakan trial gratis untuk pengguna baru agar bisa mencoba layanan sebelum berlangganan.",
    },
  ];
  
  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const items = [
    {
      title: "Chat to sales",
      desc: "Speak to our teams",
      button: "Chat to sales",
      icon: <MessageCircle className="w-6 h-6 text-black" />,
    },
    {
      title: "Visit Us",
      desc: "Visit our office",
      button: "Get Direction",
      icon: <MapPin className="w-6 h-6 text-black" />,
    },
    {
      title: "Call Us",
      desc: "Mon - Fri from 8am to 5pm",
      button: "Chat to sales",
      icon: <Phone className="w-6 h-6 text-black" />,
    },
  ];

  return (
    <div className="text-white">
      {/* Hero Section */}
      <section className="relative w-full min-h-[60vh] overflow-hidden bg-black">
        <div
          className="absolute inset-0 opacity-50"
          style={{
            backgroundImage: `radial-gradient(#DAC5A7 1px, transparent 1px)`,
            backgroundSize: "24px 24px",
          }}
        ></div>
        <div className="absolute inset-0 bg-black/5"></div>

        <motion.div
          className="relative z-10 flex flex-col items-center justify-center min-h-[60vh] text-center px-4"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
        >
          <motion.h1
            className="text-3xl sm:text-4xl lg:text-5xl font-bold font-['Satoshi'] drop-shadow-lg text-[#DAC5A7]"
            variants={fadeInUp}
          >
            Get In Touch
          </motion.h1>
          <motion.div
            className="mt-4 text-2xl text-neutral-300 font-['Satoshi'] font-bold"
            variants={fadeInUp}
          >
            Dapatkan Konsultasi Keamanan: Hubungi Kami untuk Perlindungan Terbaik
          </motion.div>
        </motion.div>
      </section>

      {/* Contact Cards */}
      <section className="bg-black py-16 px-6 sm:px-12 lg:px-64">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {items.map((item, i) => (
            <motion.div
              key={i}
              className="p-4 rounded-lg border border-[#DAC5A7]/60 bg-[#DAC5A7]/15 cursor-pointer"
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <div className="p-2 bg-[#DAC5A7]/60 rounded-md w-10 flex items-center justify-center">
                {item.icon}
              </div>
              <div className="pt-6 font-['Chillax'] text-[#DAC5A7] font-semibold">
                {item.title}
              </div>
              <div className="font-['Chillax'] text-[#DAC5A7]/60 text-sm">
                {item.desc}
              </div>
              <div className="pt-4">
                <button className="p-3 text-xs rounded-xl border text-[#DAC5A7] font-['Chillax'] border-[#DAC5A7] transition-all duration-300 ease-in-out hover:bg-[#DAC5A7] hover:text-black">
                  {item.button}
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Message Form */}
      <section className="bg-black py-16 px-6 sm:px-12 lg:px-64">
        <motion.div
          className="text-center font-bold font-['Satoshi'] text-4xl text-[#DAC5A7]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Message Us
        </motion.div>
        <motion.div
          className="text-center py-6 font-['Chillax'] text-[#DAC5A7]/60"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
        >
          We'll get back to you within 24 hours.
        </motion.div>

        <form className="flex flex-col gap-3">
          {["Name", "Email", "Phone"].map((label, i) => (
            <motion.div
              key={i}
              className="flex flex-col px-44 gap-1"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              viewport={{ once: true }}
            >
              <label className="text-[#DAC5A7] font-semibold font-['Satoshi']">
                {label}
              </label>
              <input
                type="text"
                className="px-2 py-2 border border-[#DAC5A7] bg-transparent rounded-lg text-[#DAC5A7] font-['Chillax']"
                placeholder={`Enter Your ${label}`}
              />
            </motion.div>
          ))}

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="p-2 bg-[#DAC5A7] mx-44 rounded-lg font-semibold font-['Chillax'] text-black"
          >
            SEND
          </motion.button>
        </form>
      </section>

      {/* FAQ */}
      <section className="bg-black py-16 px-6 sm:px-12 lg:px-64">
        <div className="text-2xl font-['Satoshi'] font-bold text-[#DAC5A7] py-6">
          Frequently Asked Questions
        </div>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-[#DAC5A7]/40 rounded-xl bg-[#DAC5A7]/10"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="flex justify-between items-center w-full px-4 py-3 text-left font-['Chillax'] text-[#DAC5A7] font-medium"
              >
                {faq.question}
                <ChevronDown
                  className={`w-5 h-5 transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -5 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="px-4 pb-4 text-sm text-[#DAC5A7]/80"
                  >
                    {faq.answer}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </section>

      <section>
        <Footer />
      </section>
    </div>
  );
}

