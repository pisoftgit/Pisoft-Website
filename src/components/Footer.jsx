import { FaFacebookF, FaLinkedinIn, FaTwitter, FaInstagram } from "react-icons/fa";
import CircularText from "./Circlet";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-gray-900 via-gray-950 to-black text-white px-6 sm:px-12 md:px-24 relative z-10 py-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-14 xl:gap-16 border-b border-gray-700 pb-12">

        {/* Branding */}
        <div className="flex flex-col items-center sm:items-center mt-5">
          <div className="relative lg:w-36 lg:h-36 sm:w-36 sm:h-36 md:w-40 md:h-40">
            <CircularText
              text="PISOFT ✦ INFORMATICS ✦ "
              onHover="speedUp"
              spinDuration={15}
              className="custom-class"
            />
          </div>

        </div>

        {/* Links */}
        <div className="flex flex-col items-center sm:items-center mt-5">
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
        <div className="flex flex-col items-center sm:items-center text-center sm:text-center">
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
      <div className="mt-10 text-center text-md sm:text-md lg:text-lg text-gray-800 tracking-wider">
        © {new Date().getFullYear()} <span className="text-white mb-30 font-semibold">Piosft Pvt. Ltd.</span>. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;




// import { FaFacebookF, FaLinkedinIn, FaTwitter, FaInstagram } from "react-icons/fa";
// import CircularText from "./Circlet";

// const Footer = () => {
//   return (
//     <footer className="bg-gray-900 text-white pt-12 sm:pt-16 md:pt-20 pb-8 sm:pb-12 md:pb-16 px-4 sm:px-6 md:px-20">
//       <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-12 md:gap-16 border-b border-gray-700 pb-8 sm:pb-10 md:pb-12">
//         {/* Company Info with CircularText */}
//         <div className="flex flex-col items-center sm:items-start">
//           <div className="relative lg:w-32 lg:h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 md:mb-10">
//             <CircularText
//               text="PISOFT * INFORMATICS * "
//               onHover="speedUp"
//               spinDuration={20}
//               className="custom-class"
//             />
//           </div>
//           <p className="text-gray-400 leading-relaxed text-sm sm:text-base md:text-lg text-center sm:text-left mt-4 sm:mt-6 md:mt-9">
//             We help you build and scale your digital presence with cutting-edge web, mobile, and cloud technologies. Trusted by global businesses.
//           </p>
//           <div className="flex space-x-3 sm:space-x-4 mt-4 sm:mt-6">
//             <a href="#" className="hover:text-blue-400 transition text-lg sm:text-xl">
//               <FaFacebookF />
//             </a>
//             <a href="#" className="hover:text-blue-400 transition text-lg sm:text-xl">
//               <FaLinkedinIn />
//             </a>
//             <a href="#" className="hover:text-blue-400 transition text-lg sm:text-xl">
//               <FaTwitter />
//             </a>
//             <a href="#" className="hover:text-pink-400 transition text-lg sm:text-xl">
//               <FaInstagram />
//             </a>
//           </div>
//         </div>

//         {/* Important Links */}
//         <div className="flex flex-col items-center sm:items-start md:mx-auto">
//           <h3 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 text-white">
//             Important Links
//           </h3>
//           <ul className="space-y-2 sm:space-y-3 text-gray-400 text-base sm:text-lg">
//             <li><a href="#" className="hover:text-white transition">Home</a></li>
//             <li><a href="#" className="hover:text-white transition">About Us</a></li>
//             <li><a href="#" className="hover:text-white transition">Services</a></li>
//             <li><a href="#" className="hover:text-white transition">Careers</a></li>
//             <li><a href="#" className="hover:text-white transition">Contact</a></li>
//           </ul>
//         </div>

//         {/* Address */}
//         <div className="flex flex-col items-center sm:items-end text-center sm:text-right">
//           <h3 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 text-white">
//             Contact Us
//           </h3>
//           <p className="text-gray-400 text-base sm:text-lg">
//             Plot No C-86, Pannu Tower
//           </p>
//           <p className="text-gray-400 text-base sm:text-lg">
//             2nd Floor, Phase 7, Industrial Area,
//           </p>
//           <p className="text-gray-400 text-base sm:text-lg">
//             Mohali (Punjab) opp. Cheema Boiler India
//           </p>
//           <p className="text-gray-400 mt-3 sm:mt-4 text-base sm:text-lg">
//             Email: info@youritcompany.com
//           </p>
//           <p className="text-gray-400 text-base sm:text-lg">
//             Phone: +918288029930
//           </p>
//         </div>
//       </div>

//       {/* Footer Bottom */}
//       {/* <div className="text-center text-xs sm:text-sm text-gray-500 mt-8 sm:mt-10 md:mt-12">
//         © {new Date().getFullYear()} Your IT Company. All rights reserved.
//       </div> */}
//     </footer>
//   );
// };

// export default Footer;

