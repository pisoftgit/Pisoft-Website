"use client";

import React from "react";
import Navbar from "../components/Navbar";
import { Example } from "../components/Corn";

import {World} from "../components/Globe";
import Footer from "../components/Footer";
import { FiMail, FiInfo } from "react-icons/fi"; // Import the mail and info icons

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
      startLat: 40.7128, // New York
      startLng: -74.0060,
      endLat: 30.430, // London
      endLng: 76.4140,
      color: "#32cd32", // Sky blue for points and arc
      arcAlt: 0.3,
      order: 1,
    },
    {
      startLat: 35.6762, // Tokyo
      startLng: 139.6503,
      endLat: -33.8688, // Sydney
      endLng: 151.2093,
      color: "#Ed7014", // Steel blue for points and arc
      arcAlt: 0.2,
      order: 2,
    },
    {
      startLat: 48.8566, // Paris
      startLng: 2.3522,
      endLat: -23.5505, // São Paulo
      endLng: -46.6333,
      color: "#fa8128", // Dodger blue for points and arc
      arcAlt: 0.25,
      order: 3,
    },
    {
      startLat: 55.7558, // Moscow
      startLng: 37.6173,
      endLat: 99.6139, // New Delhi
      endLng: 77.2090,
      color: "#Ed7014", // Cyan blue for points and arc
      arcAlt: 0.28,
      order: 4,
    },
    {
      startLat: 39.9042, // Beijing
      startLng: 116.4074,
      endLat: -1.2921, // Nairobi
      endLng: 36.8219,
      color: "#87CEEB", // Sky blue (reused)
      arcAlt: 0.22,
      order: 5,
    },
    {
      startLat: 19.4326, // Mexico City
      startLng: -99.1332,
      endLat: 37.7749, // San Francisco
      endLng: -122.4194,
      color: "#fda172", // Steel blue (reused)
      arcAlt: 0.27,
      order: 6,
    },
  ];

  return (
    <div className="bg-white p-4 overflow-hidden">
      <div className="flex flex-row">
        <div className="absolute z-50 top-12 left-0">
          <Navbar />
        </div>
        <div className="fixed top-8 right-0 z-50 flex items-center space-x-4">
          <Example />
        </div>
      </div>

      <section className="mt-25 flex flex-row">
        <div className="flex flex-col w-1/2">
          <div className="flex flex-row">
            <p className="text-6xl font-jB text-orange-500 mr-2">Get in Touch</p>
            <p className="text-6xl font-jB text-gray-900">with us</p>
          </div>
          <p className="mt-2 ml-2 font-jr text-gray-700">
            Fill this form to Reach Our Team or mail us at
          </p>
          <p className="ml-2 font-jr text-gray-700 flex items-center">
            <FiMail className="mr-2 text-gray-700" /> {/* Mail icon */}
            info@pisoftinformatics.com
          </p>
          <div className="w-full mt-10">
            <form className="space-y-6 p-15 bg-gray-50 rounded-lg shadow-md">
              <div className="flex gap-4">
                <div className="w-1/2">
                  <input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    className="w-full border-b placeholder:font-jSB tracking-widest border-gray-400 bg-transparent focus:outline-none focus:border-orange-500 p-1 placeholder-gray-700"
                  />
                </div>
                <div className="w-1/2">
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    className="w-full border-b placeholder:font-jSB tracking-widest border-gray-400 bg-transparent focus:outline-none focus:border-orange-500 p-1 placeholder-gray-700"
                  />
                </div>
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="w-full border-b placeholder:font-jSB tracking-widest border-gray-400 bg-transparent focus:outline-none focus:border-orange-500 p-1 placeholder-gray-700"
                />
              </div>
              <div>
                <input
                  type="tel"
                  name="contact"
                  placeholder="Contact Number"
                  className="w-full border-b placeholder:font-jSB tracking-widest border-gray-400 bg-transparent focus:outline-none focus:border-orange-500 p-1 placeholder-gray-700"
                />
              </div>
              <div>
                <textarea
                  name="message"
                  rows="4"
                  placeholder="Message"
                  className="w-full border-b placeholder:font-jSB tracking-widest border-gray-400 bg-transparent focus:outline-none focus:border-orange-500 p-1 resize-none placeholder-gray-700"
                />
              </div>
              <div>
                <button
                  type="submit"
                  className="bg-orange-500 tracking-widest font-jSB hover:bg-orange-600 text-white font-semibold py-2 px-4 rounded-md"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="w-1/2 flex justify-center items-center relative">
          <div className="ml-20 relative" style={{ height: "705px", width: "900px" }}>
            {/* Info box on top right, behind the globe */}
            <div className="absolute top-0 left--4 w-84 p-2 bg-gray-50 rounded-lg shadow-md z-0">
              <h3 className="text-lg font-jB text-gray-900 relative">
                Office Address
                <FiInfo className="absolute top-0 right-0 text-orange-400" /> {/* Info icon */}
              </h3>
              <p className="mt-1 font-jr text-gray-900 leading-tight">
                Plot No C-86, Pannu Tower, 2nd Floor,<br />
                Phase 7, Industrial area, Mohali (Punjab)<br />
                opp. Cheema Boiler <br />
                India
              </p>
            </div>
            <World globeConfig={globeConfig} data={data} />
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Contact;