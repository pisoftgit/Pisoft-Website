import { FaFacebookF, FaLinkedinIn, FaTwitter, FaInstagram } from "react-icons/fa";
import CircularText from "./Circlet";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-gray-900 via-gray-950 to-black text-white px-6 sm:px-12 md:px-24 relative z-10 py-3">
      <div className="max-w-screen mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-14 xl:gap-16 border-b border-gray-700 pb-12">

        {/* Branding */}
        <div className="flex flex-col items-center sm:items-center mt-5">
          <div className="relative lg:w-45 lg:h-45 sm:w-36 sm:h-36 md:w-40 md:h-40">
            <CircularText
              text="PISOFT ✦ INFORMATICS ✦ "
              onHover="speedUp"
              spinDuration={15}
              className="custom-class"
            />
          </div>

        </div>

        {/* Links */}
        <div className="flex flex-col items-center sm:items-center mt-15">
          <p className="text-gray-300 text-sm sm:text-base leading-relaxed max-w-xs">
            Empowering your digital journey through cutting-edge web, mobile, and cloud solutions. Trusted by clients worldwide.
          </p>
          <div className="flex space-x-4 mt-6">
            <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-blue-500 transition duration-300">
              <FaFacebookF />
            </a>
            <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-blue-600 transition duration-300">
              <FaLinkedinIn />
            </a>
            <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-sky-400 transition duration-300">
              <FaTwitter />
            </a>
            <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-pink-500 transition duration-300">
              <FaInstagram />
            </a>
          </div>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col items-center sm:items-center text-center sm:text-center mt-5">
          <h3 className="text-xl font-bold tracking-wide text-white uppercase">Contact</h3>
          <address className="not-italic text-gray-300 text-sm sm:text-base space-y-2 leading-relaxed">
            <p>Plot No C-86, Pannu Tower</p>
            <p>2nd Floor, Phase 7, Industrial Area</p>
            <p>Mohali (Punjab), opp. Cheema Boiler</p>
            <p className="mt-3">📧 info@youritcompany.com</p>
            <p>📞 +91 82880 29930</p>
          </address>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-10 text-center text-md sm:text-md lg:text-lg text-gray-400 tracking-wider">
        © {new Date().getFullYear()} <span className="text-white font-semibold">Piosft Pvt. Ltd.</span>. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
