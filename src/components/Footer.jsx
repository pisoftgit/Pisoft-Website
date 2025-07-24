import { FaFacebookF, FaLinkedinIn, FaTwitter, FaInstagram } from "react-icons/fa";
import CircularText from "./Circlet";
import { useState, useEffect } from "react";

const Footer = () => {


  const [companyName, setCompanyName] = useState("");
  const [contactNo1, setContactNo1] = useState("");
  const [contactNo2, setContactNo2] = useState("");
  const [email, setEmail] = useState("");
  const [gstIn, setGstIn] = useState("");
  const [companyLogo, setCompanyLogo] = useState("");
  const [addressLine, setAddressLine] = useState("");
  const [addressLine2, setAddressLine2] = useState("");
  const [addressDist, setAddressDist] = useState("");
  const [addressState, setAddressState] = useState("");
  const [addressCountry, setAddressCountry] = useState("");

  useEffect(() => {
    const fetchAboutData = async () => {
      try {
        const response = await fetch("https://project.pisofterp.com/pipl/restworld/aboutUs");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setCompanyName(data.companyName || "");
        setContactNo1(data.contactNo1 || "");
        setContactNo2(data.contactNo2 || "");
        setEmail(data.email || "");
        setGstIn(data.gstIn || "");
        setCompanyLogo(data.companyLogo || "");
        setAddressLine(data.addressLine1 || "");
        setAddressLine2(data.addressLine2 || "");
        setAddressDist(data.addressDistrict || "");
        setAddressState(data.addressState || "");
        setAddressCountry(data.addressCountry || "");
      } catch (err) {
        console.error("Failed to fetch about us data:", err);
      }
    };

    fetchAboutData();
  }, []);


  return (
    <footer className="bg-gradient-to-b from-blue-950 via-gray-950 to-gray-950 text-white px-6 sm:px-12 md:px-24 relative z-10 py-3">
      <div className="max-w-screen mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-14 xl:gap-16 border-b border-gray-700 pb-12">

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
        <div className="flex flex-col items-center sm:items-center mt-10">
          <p className="not-italic text-gray-300 font-md text-sm sm:text-lg leading-relaxed max-w-xs flex items-start justify-items-start">
            Empowering your digital journey through cutting-edge web, mobile, and cloud solutions. Trusted by clients worldwide.
          </p>
          <div className="flex space-x-4 mt-6">
            <a href="#" className="bg-white/10 p-4 rounded-full hover:bg-blue-500 transition duration-300">
              <FaFacebookF />
            </a>
            <a href="https://www.linkedin.com/company/pisoft-informatics/" className="bg-white/10 p-4 rounded-full hover:bg-blue-600 transition duration-300">
              <FaLinkedinIn />
            </a>
            <a href="#" className="bg-white/10 p-4 rounded-full hover:bg-sky-400 transition duration-300">
              <FaTwitter />
            </a>
            <a href="https://www.instagram.com/pisoftinformatics/?hl=en" className="bg-white/10 p-4 rounded-full hover:bg-pink-500 transition duration-300">
              <FaInstagram />
            </a>
          </div>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col items-center sm:items-center text-center sm:text-center mt-5 md:col-span-2 lg:col-span-1">
          <h3 className="text-2xl font-bold tracking-wide text-white uppercase">Contact</h3>
          <address className="not-italic text-gray-300 font-md text-sm sm:text-lg space-y-2 leading-relaxed pt-3">
            <p>{addressLine}</p>
            <p>{addressDist}, {addressState} , {addressCountry}</p>
            <p className="mt-3">📧 {email}</p>
            <p>📞 {contactNo1}, 📞{contactNo2}</p>
          </address>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-10 text-center text-md sm:text-md lg:text-lg text-gray-400 tracking-wider">
        © <span className="text-white font-semibold">{companyName}</span> All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
