"use client";

import React from "react";
import Navbar from "../components/Navbar";
import { Example } from "../components/Corn";
import { World } from "../components/Globe";
import Footer from "../components/Footer";
import { FiMail, FiInfo } from "react-icons/fi";
import { NavbarDemo } from "../components/navbar/Navbar2";
import { useState, useEffect } from "react";
import AuthFloatingButtons from "../components/AuthFloatingButtons";
import { motion, AnimatePresence } from "framer-motion";

function Contact() {
  const globeConfig = {
    pointSize: 5,
    globeColor: "#082567",
    emissive: "#000000",
    emissiveIntensity: 0.1,
    shininess: 0.9,
    atmosphereColor: "#ffffff",
    showAtmosphere: true,
    atmosphereAltitude: 0.8,
    polygonColor: "rgba(255,255,255,0.7)",
    arcTime: 700,
    arcLength: 2.9,
    rings: 3,
    maxRings: 5,
    ambientLight: "#ffffff",
    directionalLeftLight: "#ffffff",
    directionalTopLight: "#ffffff",
    pointLight: "#ffffff",
  };

  const data = [
    {
      startLat: 40.7128, startLng: -74.0060,
      endLat: 30.430, endLng: 76.4140,
      color: "#32cd32", arcAlt: 0.3, order: 1,
    },
    {
      startLat: 35.6762, startLng: 139.6503,
      endLat: -33.8688, endLng: 151.2093,
      color: "#Ed7014", arcAlt: 0.2, order: 2,
    },
    {
      startLat: 48.8566, startLng: 2.3522,
      endLat: -23.5505, endLng: -46.6333,
      color: "#fa8128", arcAlt: 0.25, order: 3,
    },
    {
      startLat: 55.7558, startLng: 37.6173,
      endLat: 99.6139, endLng: 77.2090,
      color: "#Ed7014", arcAlt: 0.28, order: 4,
    },
    {
      startLat: 39.9042, startLng: 116.4074,
      endLat: -1.2921, endLng: 36.8219,
      color: "#87CEEB", arcAlt: 0.22, order: 5,
    },
    {
      startLat: 19.4326, startLng: -99.1332,
      endLat: 37.7749, endLng: -122.4194,
      color: "#fda172", arcAlt: 0.27, order: 6,
    },
  ];


  const [showAuthButtons, setShowAuthButtons] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowAuthButtons(false);
      } else {
        setShowAuthButtons(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
    mobileNo: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const fullName = `${formData.firstName} ${formData.lastName}`;

    const payload = {
      name: fullName,
      email: formData.email,
      subject: formData.subject,
      message: formData.message,
      mobileNo: formData.mobileNo,
    };

    try {
      const response = await fetch("https://project.pisofterp.com/pipl/restworld/saveContactUs", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error("Failed to send form");
      }

      alert("Form submitted successfully!");
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        subject: "",
        message: "",
        mobileNo: "",
      });
    } catch (err) {
      console.error(err);
      alert("Error submitting form.");
    }
  };



  return (
    <div className="w-full overflow-hidden">
      {/* Navbar and Corn Demo */}
      <div className="flex justify-between items-center mb-8">
        <div className="fixed left-5 top-2 z-50000 lg:hidden">
          <Navbar />
        </div>
        <div className="fixed top-2 right-4 z-50 max-w-[90%] sm:max-w-none lg:hidden">
          <Example />
        </div>
        <div className="fixed top-0 left-0 w-full z-50">
          <AnimatePresence>
            {showAuthButtons && (
              <motion.div
                initial={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.3 }}
              >
                <AuthFloatingButtons />
              </motion.div>
            )}
          </AnimatePresence>
          <div className="sticky top-0 z-40">
            <NavbarDemo />
          </div>
        </div>
      </div>


      {/* Contact & Globe Section */}
      <section className="flex flex-col md:flex-row gap-10 pl-10 pt-25">

        {/* Left Contact Section */}
        <div className="w-full md:w-1/2">
          <div className="flex flex-wrap text-4xl sm:text-5xl lg:text-6xl font-bold font-jB mb-4">
            <p className="text-[#F07C22]  mr-2">Get in Touch</p>
            <p className="text-gray-900">with us</p>
          </div>
          <div className="w-80 p-4 mb-15 bg-gray-50 rounded-lg shadow-md z-10 visible md:hidden">
            <h3 className="text-lg font-jB text-gray-900 relative">
              Office Address
              <FiInfo className="absolute top-0 right-0 text-[#F07C22] " />
            </h3>
            <p className="mt-2 font-jr text-gray-900 leading-tight text-sm">
              Plot No C-86, Pannu Tower, 2nd Floor,<br />
              Phase 7, Industrial area, Mohali (Punjab)<br />
              opp. Cheema Boiler<br />
              India
            </p>
          </div>

          <p className="text-gray-700 font-jr ml-2 mb-2">
            Fill this form to reach our team or mail us at:
          </p>

          <p className="flex items-center gap-2 font-jr ml-2 text-gray-700 mb-8">
            <FiMail className="text-xl" />
            info@pisoftinformatics.com
          </p>


          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6 bg-gray-50 p-2 rounded-lg shadow-md">
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleChange}
                className="w-full sm:w-1/2 border-b border-gray-400 placeholder-gray-700 bg-transparent focus:outline-none focus:border-orange-500 p-1 placeholder:font-jSB tracking-widest"
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleChange}
                className="w-full sm:w-1/2 border-b border-gray-400 placeholder-gray-700 bg-transparent focus:outline-none focus:border-orange-500 p-1 placeholder:font-jSB tracking-widest"
              />
            </div>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border-b border-gray-400 placeholder-gray-700 bg-transparent focus:outline-none focus:border-orange-500 p-1 placeholder:font-jSB tracking-widest"
            />
            <input
              type="tel"
              name="mobileNo"
              placeholder="Contact Number"
              value={formData.mobileNo}
              onChange={handleChange}
              className="w-full border-b border-gray-400 placeholder-gray-700 bg-transparent focus:outline-none focus:border-orange-500 p-1 placeholder:font-jSB tracking-widest"
            />
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              className="w-full border-b border-gray-400 placeholder-gray-700 bg-transparent focus:outline-none focus:border-orange-500 p-1 placeholder:font-jSB tracking-widest"
            />
            <textarea
              name="message"
              rows="4"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
              className="w-full border-b border-gray-400 placeholder-gray-700 bg-transparent focus:outline-none focus:border-orange-500 p-1 resize-none placeholder:font-jSB tracking-widest"
            />
            <button
              type="submit"
              className="bg-orange-500 hover:bg-orange-600 text-white font-semibold font-jSB tracking-widest py-2 px-4 rounded-md"
            >
              Submit
            </button>
          </form>

        </div>


        {/* Right Globe Section */}
        <div className="w-full md:w-1/2 hidden md:flex justify-center items-center relative">
          <div className="relative" style={{ height: "705px", width: "100%" }}>
            {/* Office Info */}
            <div className="absolute top-0 left-0 w-80 p-4 bg-gray-50 rounded-lg shadow-md z-10">
              <h3 className="text-lg font-jB text-gray-900 relative">
                Office Address
                <FiInfo className="absolute top-0 right-0 text-[#F07C22] " />
              </h3>
              <p className="mt-2 font-jr text-gray-900 leading-tight text-sm">
                Plot No C-86, Pannu Tower, 2nd Floor,<br />
                Phase 7, Industrial area, Mohali (Punjab)<br />
                opp. Cheema Boiler<br />
                India
              </p>
            </div>
            <div className="w-full h-full">
              <World globeConfig={globeConfig} data={data} />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <section className="w-full mt-10">
        <Footer />
      </section>
    </div>
  );
}

export default Contact;
