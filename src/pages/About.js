import { motion } from "framer-motion";
import Footer from "../components/Footer/Footer";
import bgImage from "../assets/images/about-us/bg-security.jpg";
import securityManagement from "../assets/images/about-us/security-manajemen.jpg";
import protection from "../assets/images/about-us/protection.jpg";
import dimas from "../assets/images/about-us/owner/dimas.jpg";
import misnan from "../assets/images/about-us/owner/misnan.jpg";
import rofif from "../assets/images/about-us/owner/rofif.jpg";

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
    transition: { duration: 0.8, ease: "easeOut" } 
  },
};

// Hover animation untuk cards
const hoverCard = {
  hover: {
    scale: 1.05,
    boxShadow: "0px 15px 30px rgba(0,0,0,0.3)",
    transition: { duration: 0.3, ease: "easeOut" },
  },
};

export default function About() {
  return (
    <div className="text-white">
      {/* Hero Section */}
      <section className="relative flex items-center justify-center min-h-[70vh] overflow-hidden">
        {/* Background Image dengan motion */}
        <motion.div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${bgImage})` }}
          initial={{ scale: 1 }}
          whileInView={{ scale: 1.05 }} // zoom halus
          transition={{ duration: 8, ease: "easeOut" }}
        ></motion.div>

        {/* Overlay gelap */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Text Content */}
        <motion.div
          className="relative z-10 text-center px-4"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
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

      {/* Content Section */}
      <section className="bg-black py-16 px-6 sm:px-12 lg:px-64">
        <motion.div
          className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Gambar dengan border custom */}
          <motion.div
            className="relative w-full h-[280px] sm:h-[350px] lg:h-[420px] overflow-hidden shadow-xl rounded-tl-[40px] rounded-br-[40px]"
            variants={fadeInUp}
          >
            <img
              src={securityManagement}
              alt="Security Management"
              className="w-full h-full object-cover mix-blend-lighten"
            />
            <div className="absolute inset-0 border-4 border-[#DAC5A7]/60 rounded-tl-[40px] rounded-br-[40px] pointer-events-none"></div>
          </motion.div>

          {/* Teks */}
          <div className="space-y-6 text-center lg:text-left">
            <motion.h2
              className="self-stretch justify-start text-orange-200 text-5xl font-light font-['Satoshi'] leading-[52.80px]"
              variants={fadeInUp}
            >
              Tentang Kami
            </motion.h2>
            <motion.p
              className="self-stretch justify-start text-orange-200/60 text-base font-normal font-['Chillax'] leading-7"
              variants={fadeInUp}
            >
              PT. Satria Jaya Yudha adalah perusahaan yang bergerak di bidang jasa dengan komitmen kuat untuk menghadirkan layanan profesional yang berstandar tinggi. Kami selalu menempatkan kualitas, ketepatan, dan kepuasan klien sebagai prioritas utama, sehingga setiap solusi yang kami berikan benar-benar sesuai dengan kebutuhan dan harapan mitra kami.
            </motion.p>
            <motion.p
              className="self-stretch justify-start text-orange-200/60 text-base font-normal font-['Chillax'] leading-7"
              variants={fadeInUp}
            >
              Dengan pengalaman panjang dan portofolio yang terus berkembang, 
              kami tidak hanya berfokus pada penyediaan layanan, tetapi juga berupaya menghadirkan inovasi 
              serta pendekatan modern yang mampu menjawab tantangan di tengah dinamika industri saat ini. 
              Didukung oleh tim yang kompeten, berdedikasi, dan berintegritas tinggi.
            </motion.p>
          </div>
        </motion.div>
      </section>

      {/* Experience */}
      <section className="bg-[#DAC5A7]/5 flex flex-col gap-6 py-10 px-6 sm:px-12 lg:px-64">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="space-y-4"
        >
          <motion.div className="uppercase text-xs text-orange-200/60 font-['Satoshi'] tracking-wider" variants={fadeInUp}>
            PT Satria Jaya Yudha
          </motion.div>
          <motion.h2 className="text-3xl sm:text-5xl text-orange-200 font-light leading-snug" variants={fadeInUp}>
            Komitmen Kami dalam Memberikan Layanan Terbaik
          </motion.h2>

          {/* Cards Experience */}
          <motion.div className="space-y-6" variants={fadeInUp}>
            <div>
              <h3 className="text-orange-200/60 font-semibold font-['Chillax']">5 Years of Experience</h3>
              <p className="text-orange-200/60 font-normal font-['Chillax'] leading-7">
                Dengan pengalaman lebih dari lima tahun di bidang Management Alih Daya, 
                kami telah mengelola ribuan tenaga kerja yang tersebar di berbagai sektor industri. 
                Pengalaman panjang ini menjadi bukti nyata komitmen kami dalam memberikan solusi tenaga kerja yang profesional, 
                terpercaya, dan sesuai dengan kebutuhan mitra usaha.
                Tidak hanya sekadar pengalaman waktu, 
                perjalanan kami juga penuh dengan pembelajaran dan peningkatan kualitas manajemen. 
                Setiap tantangan yang dihadapi menjadi fondasi kuat untuk terus berinovasi, 
                sehingga kami mampu memberikan layanan yang lebih matang, terstruktur, 
                dan berorientasi pada kepuasan klien.
              </p>
            </div>
            <div>
              <h3 className="text-orange-200/60 font-semibold font-['Chillax']">Best Service Quality</h3>
              <p className="text-orange-200/60 font-normal font-['Chillax'] leading-7">
                Kami percaya bahwa kualitas layanan adalah kunci utama dalam membangun hubungan jangka panjang 
                dengan setiap klien. Oleh karena itu, kami selalu tanggap dan cepat dalam menangani setiap keluhan, 
                sekaligus berusaha memberikan solusi terbaik yang tepat sasaran.
                Melalui langkah-langkah strategis yang terus kami kembangkan, 
                kualitas pelayanan kami bukan hanya berfokus pada penyelesaian masalah, 
                tetapi juga peningkatan berkelanjutan. Hal ini kami lakukan agar setiap 
                mitra usaha merasakan kenyamanan, keamanan, dan nilai tambah dari layanan yang kami berikan.
              </p>
            </div>
            <div>
              <h3 className="text-orange-200/60 font-semibold font-['Chillax']">Reasonable Price</h3>
              <p className="text-orange-200/60 font-normal font-['Chillax'] leading-7">
                Selain pengalaman dan kualitas, kami memahami bahwa faktor biaya menjadi 
                pertimbangan penting bagi setiap perusahaan. Oleh karena itu, 
                penawaran management fee kami dirancang secara fleksibel dan proporsional, 
                menyesuaikan tingkat risiko, ruang lingkup pekerjaan, serta jumlah tenaga kerja yang dikelola.
                Dengan pendekatan harga yang adil dan transparan, kami memastikan bahwa 
                mitra usaha memperoleh layanan terbaik tanpa harus terbebani biaya yang berlebihan. 
                Komitmen ini menjadi bagian dari upaya kami untuk menciptakan hubungan kerja sama
              </p>
            </div>
          </motion.div>

          <motion.h3 className="text-center text-orange-200 text-2xl sm:text-3xl font-bold font-['Satoshi'] mt-4" variants={fadeInUp}>
            "Bersama Kita Bisa Cepat Tanggap Profesional"
          </motion.h3>
        </motion.div>
      </section>

      {/* Owner */}
      <section className="bg-black py-16 px-6 sm:px-12 lg:px-64">
        <h1 className="text-[#DAC5A7] text-center text-xl font-bold">Who We Are</h1>

        <div className="container mx-auto px-4">

        {/* Enhanced Profile Cards */}
        <div className="flex flex-col lg:flex-row justify-center items-center gap-6 py-6">
          
          {/* Dimas Sandi Yudha */}
          <div className="relative overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 w-[300px]">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-[#DAC5A7]/15 rounded-sm outline outline-1 outline-offset-[-1px] outline-[#DAC5A7]/15">
              <div className="absolute inset-0 opacity-10">
              </div>
            </div>
            
            {/* Profile Image */}
            <div className="relative z-10 flex justify-center pt-8">
              <img 
                src={dimas}
                alt="Dimas Sandi Yudha"
                className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-lg"
              />
            </div>
            
            {/* Content */}
            <div className="relative z-10 p-6 text-center">
              <h3 className="text-2xl font-bold text-[#DAC5A7] mb-2">Dimas Sandi Yudha</h3>
              
              {/* Orange accent bar */}
              <div className="w-12 h-1 bg-orange-500 mx-auto mb-4 rounded-full"></div>
              
              <div className="space-y-2">
                <p className="text-[#DAC5A7]/60 font-semibold">Direktur PT Satria Jaya Yudha</p>
              </div>
            </div>
          </div>

          {/* H Misnan */}
          <div className="relative overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 w-[300px]">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-[#DAC5A7]/15 rounded-sm outline outline-1 outline-offset-[-1px] outline-[#DAC5A7]/15">
              <div className="absolute inset-0 opacity-10">
              </div>
            </div>
            
            {/* Profile Image */}
            <div className="relative z-10 flex justify-center pt-8">
              <img 
                src={misnan}
                alt="H. Misnan S.H"
                className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-lg"
              />
            </div>
            
            {/* Content */}
            <div className="relative z-10 p-6 text-center">
              <h3 className="text-2xl font-bold text-[#DAC5A7] mb-2">H. Misnan S.H</h3>
              
              {/* Orange accent bar */}
              <div className="w-12 h-1 bg-orange-500 mx-auto mb-4 rounded-full"></div>
              
              <div className="space-y-2">
                <p className="text-[#DAC5A7]/60 font-semibold">CEO of MSN Corporate</p>
              </div>
            </div>
          </div>

          {/* Rofiif Abrifianto */}
          <div className="relative overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 w-[300px]">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-[#DAC5A7]/15 rounded-sm outline outline-1 outline-offset-[-1px] outline-[#DAC5A7]/15">
              <div className="absolute inset-0 opacity-10">
              </div>
            </div>
            
            {/* Profile Image */}
            <div className="relative z-10 flex justify-center pt-8">
              <img 
                src={rofif}
                alt="Rofiif Abrifianto"
                className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-lg"
              />
            </div>
            
            {/* Content */}
            <div className="relative z-10 p-6 text-center">
              <h3 className="text-2xl font-bold text-[#DAC5A7] mb-2">Rofiif Abrifianto</h3>
              
              {/* Orange accent bar */}
              <div className="w-12 h-1 bg-orange-500 mx-auto mb-4 rounded-full"></div>
              
              <div className="space-y-2">
                <p className="text-[#DAC5A7]/60 font-semibold">General Manager</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      </section>

      {/* 360 Protection */}
      <section className="bg-black py-16 px-6 sm:px-12 lg:px-64">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        
        {/* Image Section with Custom Border */}
        <div className="relative w-full h-full overflow-hidden shadow-xl rounded-tl-[40px] rounded-br-[40px]">
          <img
            src={protection}
            alt="Security Officer"
            className="w-full h-full object-cover mix-blend-lighten min-h-[500px]"
          />
          <div className="absolute inset-0 border-4 border-[#DAC5A7]/60 rounded-tl-[40px] rounded-br-[40px] pointer-events-none"></div>
        </div>

        {/* Text Content and Cards */}
        <div className="text-center lg:text-left h-full flex flex-col">
          <h2 className="text-[#DAC5A7] text-3xl font-light font-['Satoshi'] leading-tight mb-4">
            Perisai Perlindungan 360
          </h2>
          <p className="text-[#DAC5A7]/60 text-base font-normal font-['Chillax'] leading-7 mb-8">
            Konsep ini menggunakan metafora "perisai" untuk menggambarkan perlindungan komprehensif yang Anda berikan.
          </p>

          {/* Protection Cards with Flex Layout */}
          <div className="flex flex-col lg:flex-row gap-6 items-stretch flex-1">
            {/* Left Column - 2 cards */}
            <div className="flex flex-col gap-6 flex-1">
              {/* Card 1 - Perlindungan Fisik */}
              <div className="bg-[#DAC5A7]/15 p-6 rounded-lg border border-[#DAC5A7]/15 shadow-sm hover:shadow-md transition-shadow duration-300 flex-1">
                <div className="mb-4">
                  <svg className="w-8 h-8 text-[#DAC5A7]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold font-['Satoshi'] mb-3 text-[#DAC5A7]">
                  Perlindungan Fisik
                </h3>
                <p className="text-[#DAC5A7]/60 text-sm leading-relaxed font-['Chillax']">
                  Tim keamanan terlatih yang siaga di lokasi. Patroli, pengawasan, dan respons cepat terhadap ancaman fisik.
                </p>
              </div>

              {/* Card 3 - Perlindungan Strategis */}
              <div className="bg-[#DAC5A7]/15 p-6 rounded-lg border border-[#DAC5A7]/15 shadow-sm hover:shadow-md transition-shadow duration-300 flex-1">
                <div className="mb-4">
                  <svg className="w-8 h-8 text-[#DAC5A7]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                    <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="2" fill="none"/>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold font-['Satoshi'] mb-3 text-[#DAC5A7]">
                  Perlindungan Strategis
                </h3>
                <p className="text-[#DAC5A7]/60 text-sm leading-relaxed font-['Chillax']">
                  Layanan konsultasi dan perencanaan keamanan. Penilaian risiko dan pengembangan prosedur darurat.
                </p>
              </div>
            </div>

            {/* Right Column - 1 card (centered) */}
            <div className="flex flex-col justify-center flex-1">
              <div className="bg-[#DAC5A7]/15 p-6 rounded-lg border border-[#DAC5A7]/15 shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="mb-4">
                  <svg className="w-8 h-8 text-[#DAC5A7]" fill="currentColor" viewBox="0 0 24 24">
                    <rect x="2" y="3" width="20" height="14" rx="2" ry="2" stroke="currentColor" strokeWidth="2" fill="none"/>
                    <line x1="8" y1="21" x2="16" y2="21" stroke="currentColor" strokeWidth="2"/>
                    <line x1="12" y1="17" x2="12" y2="21" stroke="currentColor" strokeWidth="2"/>
                    <circle cx="7" cy="8" r="1" fill="currentColor"/>
                    <circle cx="12" cy="8" r="1" fill="currentColor"/>
                    <circle cx="17" cy="8" r="1" fill="currentColor"/>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold font-['Satoshi'] mb-3 text-[#DAC5A7]">
                  Perlindungan Teknologi
                </h3>
                <p className="text-[#DAC5A7]/60 text-sm leading-relaxed font-['Chillax']">
                  Penggunaan teknologi modern seperti CCTV, alarm system, atau sistem kontrol akses. Jelaskan bagaimana teknologi ini mendukung dan meningkatkan kinerja tim di lapangan.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

      {/* Footer */}
      <section>
          <Footer />
      </section>
    </div>
  );
}
