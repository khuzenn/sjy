import { FaInstagram, FaTwitter, FaDribbble, FaBehance } from "react-icons/fa";
import sjyLogo from "../../assets/images/sjy.png";

export default function Footer() {
  return (
    <footer className="bg-[#DAC5A7]/5 text-[#DAC5A7]/60 px-6 sm:px-12 lg:px-32 py-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 pb-10 text-center sm:text-left">
        
        {/* Brand */}
        <div className="space-y-6 flex flex-col items-center sm:items-start">
          <img 
            src={sjyLogo}
            alt="SJY Logo"
            className="w-[150px] sm:w-[200px] lg:w-[220px] h-auto object-contain 
                       transition-transform duration-300 hover:scale-105"
          />
          <h3 className="text-lg sm:text-xl font-semibold text-white">
            PT. SATRIA JAYA YUDHA
          </h3>
        </div>

        {/* Social */}
        <div className="flex flex-col items-center sm:items-start">
          <h3 className="text-sm font-semibold mb-4 text-[#DAC5A7]">Social</h3>
          <ul className="space-y-3">
            <li className="flex items-center justify-center sm:justify-start gap-2 cursor-pointer transition duration-300 hover:text-white hover:translate-x-1">
              <FaInstagram /> Instagram
            </li>
            <li className="flex items-center justify-center sm:justify-start gap-2 cursor-pointer transition duration-300 hover:text-white hover:translate-x-1">
              <FaTwitter /> Twitter
            </li>
            <li className="flex items-center justify-center sm:justify-start gap-2 cursor-pointer transition duration-300 hover:text-white hover:translate-x-1">
              <FaDribbble /> Dribbble
            </li>
            <li className="flex items-center justify-center sm:justify-start gap-2 cursor-pointer transition duration-300 hover:text-white hover:translate-x-1">
              <FaBehance /> Behance
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div className="flex flex-col items-center sm:items-start">
          <h3 className="text-sm font-semibold mb-4 text-[#DAC5A7]">Contact</h3>
          <ul className="space-y-3 text-sm leading-relaxed max-w-xs sm:max-w-none">
            <li className="transition duration-300 hover:text-white">
              <span className="block">
                Ruko Terace 9, Jl. Suvarna Jati Barat Suvarna Sutera No.15 Blok C1, Wanakerta, Kec. Sindang Jaya,
              </span>
              <span className="block">Kabupaten Tangerang, Banten 15560</span>
            </li>
            <li className="transition duration-300 hover:text-white">
              📞 +62 812 3456 7890
            </li>
            <li className="transition duration-300 hover:text-white">
              ✉️ info@sjy.co.id
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="flex flex-col sm:flex-row justify-between items-center pt-6 text-sm text-neutral-500 gap-4 sm:gap-0 text-center sm:text-left">
        <p>© {new Date().getFullYear()} PT. Satria Jaya Yudha. All rights reserved.</p>
        <a
          href="#top"
          className="flex items-center gap-2 text-neutral-400 hover:text-white transition duration-300"
        >
          <span className="w-6 h-6 flex items-center justify-center border border-neutral-400 rounded-full transition-transform duration-300 hover:rotate-180 hover:border-white">
            ↑
          </span>
        </a>
      </div>
    </footer>
  );
}
