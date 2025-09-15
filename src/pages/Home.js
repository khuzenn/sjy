import React from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import sjyLogo from "../assets/images/sjy.png";

// Trusted Companies
import logo1 from "../assets/images/trusted-companies/logo-1.png";
import logo2 from "../assets/images/trusted-companies/logo-2.jpg";
import logo3 from "../assets/images/trusted-companies/logo-3.jpg";
import logo4 from "../assets/images/trusted-companies/logo-4.jpg";
import logo5 from "../assets/images/trusted-companies/logo-5.jpg";
import logo6 from "../assets/images/trusted-companies/logo-6.jpg";

// Testimonial
import company1 from "../assets/images/testimonial/company/company-1.png";
import avatar1 from "../assets/images/testimonial/avatar-1.jpg";
import company2 from "../assets/images/testimonial/company/company-2.png";
import avatar2 from "../assets/images/testimonial/avatar-2.jpg";
import company3 from "../assets/images/testimonial/company/company-3.png";
import avatar3 from "../assets/images/testimonial/avatar-3.jpg";
import company4 from "../assets/images/testimonial/company/company-4.png";

// FadeInLeft
const fadeInLeft = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 1 } },
};

// FadeInRight
const fadeInRight = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0, transition: { duration: 1 } },
};

// FadeInUp
const fadeInUp = (delay = 0) => ({
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, delay } },
});

// Container untuk stagger
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.3,
        },
    },
};

// Card Variant
const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: "easeOut" },
    },
};

// Variasi animasi untuk angka step
const stepVariants = {
    hidden: { scale: 0.5, opacity: 0 },
    visible: { scale: 1, opacity: 1, transition: { duration: 0.6 } },
    hover: { scale: 1.1, rotate: 10 },
}

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" },
    },
};


// Card Data Experience
const cards = [
    {
        id: 1,
        title: "5 Years of Experience",
        desc: "Pengalaman Management Alih Daya lebih dari 5 tahun, telah mengelola ribuan tenaga kerja dan dipercaya oleh banyak mitra perusahaan yang tersebar di Jabodetabek serta beberapa wilayah di Indonesia.",
    },
    {
        id: 2,
        title: "Best Service Quality",
        desc: "Berekasi cepat dalam menangani keluhan dan meningkatkan kualitas pelayanan melalui langkah – langkah strategis, sehingga tercipta hubungan kerjasama yang saling menguntungkan.",
    },
    {
        id: 3,
        title: "Reasonable Price",
        desc: "Penarawan management fee yang relatif, tergantung dari tingkat besar kecilnya resiko, scope pekerjaanya, jumlah tenaga kerja yang dikelola dan juga melihat dari kemampuan perusahaan pengguna jasa.",
    },
];

// Logo Trusted Company
const logos = [logo1, logo2, logo3, logo4, logo5, logo6];

// Data Testimonial
const testimonials = [
    {
        logo: company1,
        title: "Amazing Results with Arik’s Premium Web Design Services.",
        text: "Arik is a top-notch web designer who created a stunning website for my business. He was attentive to my needs and provided excellent customer service throughout the entire process. I highly recommend his services.",
        name: "John Smith",
        company: "ABC Company",
        avatar: avatar1,
    },
    {
        logo: company2,
        title: "Expert Webflow and SEO Services: Excellent Work. Great Results.",
        text: "Working with Arik on my website redesign was a fantastic experience. He was able to take my vision and turn it into a beautiful and functional website. His attention to detail and creative approach is unmatched. I couldn’t be happier with the end result.",
        name: "David Kim",
        company: "Design Inc.",
        avatar: avatar2,
    },
    {
        logo: company3,
        title: "Web Design and Content Solutions: Stand Out from the Crowd.",
        text: "Arik’s SEO services have helped my business improve its online presence and increase traffic to our website. He is knowledgeable, professional, and provides excellent results. I highly recommend him for all your SEO needs.",
        name: "Emily Davis",
        company: "Greenway Industries",
        avatar: avatar3,
    },
    {
        logo: company4,
        title: "High-Quality Web Design: Exceptional Attention to Detail with Arik.",
        text: "Arik’s development services are top-notch. He is able to take complex ideas and turn them into functional, user-friendly websites. His attention to detail and commitment to customer satisfaction are unmatched. I highly recommend Arik for all your web development needs.",
        name: "Ryan Chen",
        company: "Golden Gate Solutions",
        avatar: avatar3,
    },
];

export default function Home() {
    return (
        <div className="bg-[#0E0E0E] min-h-screen text-[#DAC5A7] font-sans overflow-x-hidden">
            <Navbar />

            {/* Hero Section */}
            <section className="flex flex-col lg:flex-row px-6 lg:px-48 py-12 lg:py-20 gap-10 lg:gap-0">

                {/* Kiri */}
                <motion.div
                    className="pt-10 lg:pt-36 max-w-full lg:max-w-xl text-center lg:text-left"
                    variants={fadeInLeft}
                    initial="hidden"
                    animate="visible">
                    <h1 className="text-lg tracking-wide">PT SATRIA JAYA YUDHA</h1>

                    <motion.h1
                        className="pt-6 text-white text-3xl lg:text-4xl font-bold leading-snug"
                        variants={fadeInUp(0.3)}
                        initial="hidden"
                        animate="visible">
                        Mitra Keamanan Handal <br className="hidden lg:block" /> Untuk Perlindungan Usaha Anda
                    </motion.h1>

                    <motion.p
                        className="pt-6 text-gray-200 leading-relaxed text-sm lg:text-base"
                        variants={fadeInUp(0.6)}
                        initial="hidden"
                        animate="visible">
                        PT Satria Jaya Yudha berkomitmen memberikan layanan outsourcing
                        terbaik untuk mendukung daya saing bisnis dan pengembangan SDM
                        berkualitas.
                    </motion.p>

                    <motion.div
                        className="flex flex-col sm:flex-row justify-center lg:justify-start pt-8 lg:pt-12 gap-4"
                        variants={fadeInUp(0.9)}
                        initial="hidden"
                        animate="visible">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-6 py-3 border rounded-lg bg-[#DAC5A7] border-[#DAC5A7] text-black 
                            hover:bg-transparent hover:text-[#DAC5A7] transition-all duration-300">
                            Discover More
                        </motion.button>

                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-6 py-3 border rounded-3xl bg-transparent border-[#DAC5A7] text-[#DAC5A7] hover:bg-[#DAC5A7] hover:text-black transition-all duration-300">
                            Hire Us Now
                        </motion.button>
                    </motion.div>
                </motion.div>

                {/* Kanan */}
                <motion.div
                    className="flex justify-center pt-6 lg:pt-20 lg:pl-24"
                    variants={fadeInRight}
                    initial="hidden"
                    animate="visible">
                    <motion.img 
                        src={sjyLogo}
                        alt="SJY Logo"
                        className="w-[250px] sm:w-[300px] lg:w-[400px] h-auto object-contain"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ type: "spring", stiffness: 200 }} />
                </motion.div>
            </section>

            {/* Experience */}
            <section className="flex flex-col px-6 sm:px-12 lg:px-32 py-12 lg:py-40">
                <motion.div
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }} >
                        {cards.map((card, index) => (
                            <motion.div
                                key={card.id}
                                variants={cardVariants}
                                className="p-8 sm:p-12 bg-[#DAC5A7]/5 rounded-sm outline outline-1 outline-offset-[-1px] outline-[#DAC5A7]/15 flex flex-col justify-between items-start gap-8">
                                    <div className="flex flex-col justify-start items-start gap-2">
                                        <div className="flex flex-col justify-start items-start gap-1">
                                            <div className="text-[#DAC5A7]/60 text-xs font-['Satoshi'] uppercase tracking-wider">
                                                {String(index + 1).padStart(2, "0")}
                                            </div>
                                            <div className="text-[#DAC5A7] text-xl lg:text-2xl font-light font-['Satoshi'] uppercase leading-loose tracking-wide">
                                                {card.title}
                                            </div>
                                        </div>
                                        <div className="text-[#DAC5A7]/60 text-sm lg:text-base font-['Chillax'] leading-6 lg:leading-7">
                                            {card.desc.split(" ").slice(0, 15).join(" ")}...
                                        </div>
                                    </div>

                                    <motion.div
                                        className="inline-flex justify-start items-center gap-3"
                                        whileHover={{ x: 5 }}
                                        transition={{ type: "spring", stiffness: 150 }} >
                                        <div className="w-8 h-8 px-3 py-2 bg-[#DAC5A7]/5 rounded-full outline outline-1 outline-offset-[-1px] outline-[#DAC5A7]/15 backdrop-blur-lg flex justify-center items-center">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                strokeWidth={1.5}
                                                stroke="currentColor"
                                                className="w-4 h-4"
                                            >
                                                <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                                                />
                                            </svg>
                                        </div>
                                        <div className="text-[#DAC5A7] text-xs lg:text-sm font-['Satoshi'] uppercase tracking-wider">
                                            About {card.title}
                                        </div>
                                    </motion.div>
                            </motion.div>
                        ))}
                </motion.div>
            </section>

            {/* Trusted Companies */}
            <section className="bg-[#0E0E0E] py-16 flex flex-col items-center text-center">
                {/* Heading dengan garis */}
                <div className="flex items-center justify-center w-full max-w-4xl px-4">
                    <div className="flex-1 h-[1px] bg-gradient-to-r from-transparent via-orange-500/50 to-transparent" />
                    <motion.h2
                     className="px-6 text-white text-lg sm:text-xl md:text-2xl font-semibold whitespace-nowrap"
                     initial={{ opacity: 0, y: -20 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     transition={{ duration: 0.8 }}
                     viewport={{ once: true }} >
                        Trusted Over{" "}
                        <span className="text-[#DAC5A7] font-bold">20+</span> Companies in
                        Indonesia
                    </motion.h2>
                    <div className="flex-1 h-[1px] bg-gradient-to-r from-transparent via-orange-500/50 to-transparent" />
                </div>

                {/* Logo Grid */}
                <motion.div
                 className="mt-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center"
                 variants={containerVariants}
                 initial="hidden"
                 whileInView="visible"
                 viewport={{ once: true, amount: 0.3 }} >
                    {logos.map((logo, index) => (
                        <motion.div
                         key={index}
                         variants={itemVariants}
                         className="flex justify-center items-center">
                            <img 
                             src={logo}
                             alt={`Client Logo ${index + 1}`}
                             className="h-12 sm:h-16 object-contain opacity-80 hover:opacity-100 transition"
                            />
                        </motion.div>
                    ))}
                </motion.div>
            </section>

            {/* About Us */}
            <section className="flex flex-col lg:flex-row items-center px-6 lg:px-48 py-12 lg:py-20 gap-12 bg-[#0E0E0E] relative overflow-hidden">
                {/* Dekorasi Garis */}
                <div className="absolute inset-0 -z-10 flex justify-center">
                    <div className="w-px h-full bg-gradient-to-b from-orange-500/30 via-transparent to-orange-500/30"></div>
                </div>

                {/* Kiri */}
                <motion.div
                 className="flex justify-center w-full lg:w-1/2 relative"
                 initial={{ opacity: 0, x: -80 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 viewport={{ once: true, amount: 0.3 }}
                 transition={{ duration: 0.8, ease: "easeOut" }} >
                    <iframe
                     className="w-[280px] sm:w-[400px] lg:w-[500px] h-[200px] sm:h-[250px] lg:h-[300px] rounded-xl border border-orange-500/20 shadow-md"
                     src="https://www.youtube.com/embed/uMftMfefI-g?si=ZTZau-5VmiZmWyKY"
                     title="YouTube video"
                     frameBorder="0"
                     allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                     allowFullScreen >
                    </iframe>
                </motion.div>

                {/* Kanan */}
                <motion.div
                 className="max-w-full lg:w-1/2 text-center lg:text-left relative z-10"
                 initial={{ opacity: 0, y: 50 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true, amount: 0.3 }}
                 transition={{ duration: 0.8, ease: "easeOut" }} >
                    {/* Subtitle */}
                    <motion.h1
                     className="text-sm font-semibold tracking-widest text-[#DAC5A7] font-['Satoshi'] uppercase relative inline-block"
                     initial={{ opacity: 0, x: -40 }}
                     whileInView={{ opacity: 1, x: 0 }}
                     transition={{ duration: 0.6 }} >
                        ABOUT US
                        <span className="absolute -bottom-1 left-0 w-10 h-[2px] bg-[#DAC5A7]"></span>
                    </motion.h1>

                    {/* Title */}
                    <motion.h1
                     className="self-stretch justify-start text-orange-200 text-3xl font-semibold font-['Satoshi'] leading-[52.80px]"
                     initial={{ opacity: 0, x: 40 }}
                     whileInView={{ opacity: 1, x: 0 }}
                     transition={{ duration: 0.6, delay: 0.2 }} >
                        PT SATRIA JAYA YUDHA
                    </motion.h1>

                    {/* Description */}
                    <motion.p
                     className="self-stretch justify-start text-orange-200/60 text-base font-normal font-['Chillax'] leading-7 border-l-2 border-orange-500/20 pl-4"
                     initial={{ opacity: 0 }}
                     whileInView={{ opacity: 1 }}
                     transition={{ duration: 0.8, delay: 0.4 }} >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                        minim veniam, Duis aute irure dolor in reprehenderit in voluptate
                        velit esse cillum quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat.
                    </motion.p>

                    {/* Button */}
                    <motion.button
                     whileHover={{ scale: 1.05 }}
                     whileTap={{ scale: 0.95 }}
                     className="mt-8 px-6 py-3 border rounded-3xl bg-transparent border-[#DAC5A7] text-[#DAC5A7] hover:bg-[#DAC5A7] hover:text-black transition-all duration-300">
                        Load More
                    </motion.button>
                </motion.div>
            </section>

            {/* Services */}
            <section className="flex flex-col px-4 sm:px-8 lg:px-56 py-12 lg:py-3">
                <div className="text-center pb-6">
                    <span className="text-2xl font-semibold font-['Satoshi'] leading-2">
                        Our <br /> Services
                    </span>
                </div>

                {[
                    "Butuh tenaga keamanan handal? Kami menyediakan satpam profesional untuk melindungi gedung, kantor, hotel, apartemen, dan berbagai properti lainnya. Dengan personel disiplin, ramah, dan terlatih, kami siap menciptakan lingkungan yang aman, tertib, dan kondusif.",
                    "Kami menyediakan jasa keamanan temporary dengan kontrak fleksibel harian atau bulanan. Cocok untuk acara, proyek singkat, hingga penjagaan aset sementara. Dengan satpam terlatih dan profesional, keamanan tetap terjaga tanpa kontrak jangka panjang.",
                    "Kami menyediakan layanan bodyguard pribadi untuk bisnis, perjalanan, event, hingga pengawalan VIP. Dengan profesionalisme dan dedikasi tinggi, keamanan Anda adalah prioritas utama.",
                    "Tingkatkan kualitas SDM keamanan melalui pelatihan bersama instruktur berpengalaman. Peserta dibekali keterampilan modern, teknik pengendalian massa, dan etika pelayanan prima untuk siap di berbagai bidang.",
                    "Pastikan acara berjalan lancar dengan jasa pengamanan event profesional. Tim kami siap mengawasi, mengendalikan massa, dan mengamankan VIP agar momen berharga Anda bebas gangguan.",
                    "Kami menyediakan seragam, alat komunikasi, dan perlengkapan pendukung untuk mendukung profesionalisme dan kinerja tim keamanan Anda.",
                    "Kami menyediakan layanan pendukung lengkap: cleaning service, driver, catering, tenaga harian, hingga sistem borongan sesuai kebutuhan Anda.",
                    "Layanan kami eksklusif, fleksibel, dan sepenuhnya dapat disesuaikan untuk pengalaman yang lebih personal dan memuaskan.",
                ].map((text, index) => {
                    const isEven = index % 2 !== 0;
                    return (
                        <div
                         key={index}
                         className="self-stretch inline-flex justify-center items-center gap-3 sm:gap-5 relative">
                            {/* Left Card */}
                            <div className="w-full max-w-[300px] sm:max-w-[350px] md:max-w-[400px] self-stretch">
                                {!isEven && (
                                    <motion.div
                                     className="p-4 sm:p-6 bg-[#DAC5A7]/5 rounded-sm outline outline-1 outline-[#DAC5A7]/15 flex flex-col gap-4"
                                     variants={cardVariants}
                                     initial="hidden"
                                     whileInView="visible"
                                     whileHover="hover"
                                     viewport={{ once: true }} >
                                        <div className="self-stretch justify-start text-orange-200/60 text-base font-normal font-['Chillax'] leading-7">
                                            {text}
                                        </div>
                                    </motion.div>
                                )}
                            </div>

                            {/* Timeline Step */}
                            <motion.div
                             className="self-stretch flex flex-col justify-start items-center gap-2 sm:gap-4"
                             variants={stepVariants}
                             initial="hidden"
                             whileInView="visible"
                             whileHover="hover"
                             viewport={{ once: true }} >
                                <div className="w-px flex-1 bg-[#DAC5A7]/20" />
                                <div className="w-8 h-8 sm:w-10 sm:h-10 flex justify-center items-center bg-[#DAC5A7]/5 rounded-full outline outline-1 outline-orange-200/15">
                                    <span className="text-[#DAC5A7] text-[10px] sm:text-xs font-['Satoshi'] uppercase tracking-wider">
                                        {String(index + 1).padStart(2, "0")}
                                    </span>
                                </div>
                                <div 
                                 className={`w-px flex-1 ${
                                    index === 7 ? "bg-stone-950" : "bg-[#DAC5A7]/20"
                                 }`}
                                />
                            </motion.div>

                            {/* Right Card */}
                            <div className="w-full max-w-[300px] sm:max-w-[350px] md:max-w-[400px] self-stretch">
                                {isEven && (
                                    <motion.div
                                     className="p-4 sm:p-6 bg-[#DAC5A7]/5 rounded-sm outline outline-1 outline-[#DAC5A7]/15 flex flex-col gap-4"
                                     variants={cardVariants}
                                     initial="hidden"
                                     whileInView="visible"
                                     whileHover="hover"
                                     viewport={{ once: true }} >
                                        <div className="self-stretch justify-start text-orange-200/60 text-base font-normal font-['Chillax'] leading-7">
                                            {text}
                                        </div>
                                    </motion.div>
                                )}
                            </div>
                        </div>
                    )
                })}
            </section>

            {/* Testimoni */}
            <section className="flex flex-col px-4 sm:px-8 lg:px-56 py-12 lg:py-20">
                <div className="text-center pb-6">
                    <span className="text-orange-200 text-4xl font-semibold font-['Satoshi']">
                        What my <br />
                    </span>
                    <span className="text-orange-200 text-6xl italic font-extralight font-['Gambetta']">
                        clients say
                    </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {testimonials.map((item, i) => (
                        <motion.div
                         key={i}
                         className="bg-[#DAC5A7]/5 border border-[#DAC5A7]/15 rounded-sm shadow-lg p-6 flex flex-col gap-4"
                         variants={cardVariants}
                         initial="hidden"
                         whileInView="visible"
                         whileHover="hover"
                         viewport={{ once: true, amount: 0.2 }} >
                            {/* Logo */}
                            <div className="w-8 h-8 relative">
                                <img src={item.logo} alt="Logo" fill className="object-contain" />
                            </div>

                            {/* Title */}
                            <h3 className="text-lg font-['Satoshi'] font-semibold text-[#DAC5A7] leading-snug">
                                {item.title}
                            </h3>

                            {/* Text */}
                            <p className="text-sm font-['Chillax'] text-[#DAC5A7]/60 leading-relaxed">{item.text}</p>

                            {/* User */}
                            <div className="flex items-center gap-3 pt-4">
                                <img 
                                 src={item.avatar}
                                 alt={item.name}
                                 className="w-10 h-10 rounded-full object-cover"
                                />
                                <div>
                                    <p className="text-sm font-medium text-[#DAC5A7]">{item.name}</p>
                                    <p className="text-xs text-[#DAC5A7]/60">{item.company}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Footer */}
            <section>
                <Footer />
            </section>
        </div>
    );
}