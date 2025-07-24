import React, { useEffect, useRef, useState } from "react";
import BlurText from "../components/BlurText";
import Navbar from "../components/Navbar";
import { Example } from "../components/Corn";
import Lanyard from "../components/About/Lanyard";
import Tech from "../components/About/Tech";
import { motion, AnimatePresence } from "framer-motion";
import Stepp from "../components/About/Stepp";
import Footer from "../components/Footer";
import { NavbarDemo } from "../components/navbar/Navbar2";
import AuthFloatingButtons from "../components/AuthFloatingButtons";
import Hover from "../components/About/HoverCertificate";

function About() {
  const aboutSectionRef = useRef(null);
  const techSectionRef = useRef(null);

  const [showLanyard, setShowLanyard] = useState(true);
  const [message, setMessage] = useState(null);
  const [Visions, setVisions] = useState("");
  const [Missions, setMissions] = useState("");
  const [showAuthButtons, setShowAuthButtons] = useState(true);

  // === Scroll effect to hide/show Lanyard ===
  useEffect(() => {
    const handleScroll = () => {
      const aboutTop = aboutSectionRef.current.getBoundingClientRect().top;
      const techTop = techSectionRef.current.getBoundingClientRect().top;

      if (aboutTop >= -100 && techTop > window.innerHeight * 0.5) {
        setShowLanyard(true);
      } else {
        setShowLanyard(false);
      }

      // Show/hide AuthFloatingButtons
      if (window.scrollY > 100) {
        setShowAuthButtons(false);
      } else {
        setShowAuthButtons(true);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // === Fetch About Us ===
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://project.pisofterp.com/pipl/restworld/org/about-us/modes/OFFLINE"
        );
        if (!response.ok) throw new Error("Failed to fetch");
        const htmlContent = await response.text();
        setMessage(htmlContent);
      } catch (error) {
        console.error("Error fetching message:", error);
        setMessage("<p>Failed to load content.</p>");
      }
    };

    fetchData();
  }, []);

  // === Fetch Vision ===
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://project.pisofterp.com/pipl/restworld/org/our-vision/modes/OFFLINE"
        );
        if (!response.ok) throw new Error("Failed to fetch");

        const htmlContent = await response.text();
        const parser = new DOMParser();
        const doc = parser.parseFromString(htmlContent, "text/html");
        doc.querySelectorAll("[style]").forEach((el) =>
          el.removeAttribute("style")
        );
        setVisions(doc.body.innerHTML);
      } catch (error) {
        console.error("Error fetching vision:", error);
        setVisions("<p>Failed to load content.</p>");
      }
    };

    fetchData();
  }, []);

  // === Fetch Mission ===
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://project.pisofterp.com/pipl/restworld/org/our-mission/modes/OFFLINE"
        );
        if (!response.ok) throw new Error("Failed to fetch");

        const htmlContent = await response.text();
        const parser = new DOMParser();
        const doc = parser.parseFromString(htmlContent, "text/html");
        doc.querySelectorAll("[style]").forEach((el) =>
          el.removeAttribute("style")
        );
        setMissions(doc.body.innerHTML);
      } catch (error) {
        console.error("Error fetching mission:", error);
        setMissions("<p>Failed to load content.</p>");
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <main className="w-full overflow-hidden p-5">
        <div className="w-full flex flex-col bg-white relative">

          {/* === TOP NAVBAR WRAPPER === */}
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

          {/* === Mobile navbar */}
          <div className="fixed left-5 top-2 z-50000 lg:hidden">
            <Navbar />
          </div>
          <div className="fixed top-2 right-4 z-50 max-w-[90%] sm:max-w-none lg:hidden">
            <Example />
          </div>

          {/* === About Section === */}
          <section
            ref={aboutSectionRef}
            className="min-h-auto flex flex-col md:flex-row items-start relative z-10  pt-13"
          >
            <div className="w-full md:w-2/3 lg:w-[75%] z-10">
              <BlurText
                text="Bringing Ideas to Life"
                delay={200}
                animateBy="words"
                direction="top"
                className="mt-16 font-jB text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-blue-950 tracking-wider"
              />
              <div className="mt-6 sm:mt-8 md:mt-10">
                <BlurText
                  text="About Us"
                  delay={200}
                  animateBy="words"
                  direction="top"
                  className="font-jSB text-2xl sm:text-3xl md:text-4xl text-[#F07C22] tracking-wider"
                />
                <div className="font-jS text-base [text-align:justify] leading-relaxed sm:text-lg md:text-xl lg:text-2xl text-gray-800 tracking-wider mt-4 sm:mt-6">
                  {message ? (
                    message.split("\n").map((line, index) => (
                      <p key={index}>{line}</p>
                    ))
                  ) : (
                    <p>Loading content...</p>
                  )}
                </div>
              </div>
            </div>

            {/* Lanyard Animation */}
            <AnimatePresence>
              {showLanyard && (
                <motion.div
                  className="absolute bg-transparent right-0 top-0 w-full md:w-1/2 lg:w-1/3 z-0"
                  initial={{ opacity: 0, y: -50 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 50 }}
                  transition={{ duration: 0.6 }}
                >
                  <Lanyard position={[0, 0, 25]} gravity={[0, -40, 0]} />
                </motion.div>
              )}
            </AnimatePresence>
          </section>

          {/* === Tech Section === */}
          <section
            ref={techSectionRef}
            className="min-h-[40vh] pt-10 bg-transparent relative z-10"
          >
            <Tech />
          </section>


          {/* === Certificate Section === */}

          <div className="text-center space-y-4 mb-10 w-screen">
            <motion.div
              initial={{ opacity: 0, x: -80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="font-jSB text-blue-950 text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight"
            >
              Get a Globally Recognized
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="font-jSB text-blue-950 text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight"
            >
              Certificate
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="font-jSB text-[#F07C22] text-[18px] sm:text-[20px] leading-tight"
            >
              Earn an industry-standard certificate upon completing your course.
            </motion.div>
          </div>


          <section className="relative z-10 bg-white py-12 px-4 sm:px-8 lg:px-50 text-center">

            <div className="grid lg:grid-cols-2 gap-10 items-center justify-center">

              {/* Text Section */}
              {/* <motion.div
                className="text-center lg:text-left space-y-3"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h3 className="text-blue-950 text-base sm:text-xl font-jl">
                  Get a Globally Recognized
                </h3>
                <h2 className="text-blue-950 font-jSB text-4xl sm:text-5xl lg:text-6xl">
                  Certificate
                </h2>
                <p className="text-[#F07C22] text-base sm:text-xl font-jl">
                  Earn an industry-standard certificate upon completing your course.
                </p>

                <div className="flex flex-col sm:flex-col justify-center lg:justify-start gap-4 mt-6">
                  <div className="flex flex-row gap-4">
                    <div className="bg-orange-100 text-blue-950 rounded-lg px-4 py-2 text-sm font-semibold">
                      title 1 certificates
                    </div>
                    <div className="bg-orange-100 text-blue-950 rounded-lg px-4 py-2 text-sm font-semibold">
                      title 2 certificates
                    </div>
                  </div>
                  <div className="flex flex-row gap-4">
                    <div className="bg-orange-100 text-blue-950 rounded-lg px-4 py-2 text-sm font-semibold">
                      title 3 certificates
                    </div>
                    <div className="bg-orange-100 text-blue-950 rounded-lg px-4 py-2 text-sm font-semibold">
                      title 4 certificates
                    </div>
                  </div>
                </div>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-8 mb-5 md:mb-0 bg-blue-950 text-white px-6 py-3 rounded-lg font-medium shadow hover:bg-blue-800 transition hover:scale-110"
                >
                  Apply Today
                </motion.button>
              </motion.div> */}

              {/* Certificate Image Section */}
              <motion.div
                className="flex justify-center lg:justify-center"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <Hover />
              </motion.div>

              <motion.div
                className="flex justify-center lg:justify-center"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <Hover />
              </motion.div>

            </div>
            
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-12 mb-5 md:mb-0 bg-blue-950 text-white px-6 py-3 rounded-lg font-medium shadow hover:bg-blue-800 transition hover:scale-110"
              >
                Apply Today
              </motion.button>
          </section>

          {/* === Work Approach === */}
          <section className="h-auto p-4 bg-white relative z-10">
            <div className="text-center">
              <div className="font-jr text-gray-500 text-sm sm:text-base md:text-lg">
                Our Work Approach
              </div>
              <div className="font-jSB text-gray-900 text-3xl sm:text-4xl md:text-5xl lg:text-6xl mt-2">
                Driven by innovation
              </div>
              <div className="font-jSB text-gray-900 text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
                we engineer thoughtful digital journeys.
              </div>
            </div>
            <div>
              <Stepp />
            </div>
          </section>

          {/* === Vision & Mission Section === */}
          <section className="w-screen mb-20 flex flex-col space-y-12 sm:space-y-0 text-center overflow-hidden pr-6 sm:pr-8 md:pr-12">
            {/* Vision */}
            <div className="w-full flex flex-col md:flex-row items-center justify-center md:space-x-8">
              <div id="our-vision" className="md:w-2/3 text-center md:text-left">
                <BlurText
                  text="OUR VISION"
                  delay={200}
                  animateBy="words"
                  direction="top"
                  className="mt-16 mb-5 font-jSB text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-blue-950 tracking-wider"
                />
                <div
                  className="font-jS text-base [text-align:justify] leading-relaxed sm:text-sm md:text-md lg:text-xl"
                  dangerouslySetInnerHTML={{ __html: Visions }}
                />
              </div>
              <div className="md:w-1/3 justify-center hidden md:flex">
                <img
                  src="https://energyrayng.com/wp-content/uploads/2024/06/vision-img.png"
                  alt="Vision"
                  className="w-full max-w-[350px] h-auto rounded-lg"
                />
              </div>
            </div>

            {/* Mission */}
            <div className="w-full flex flex-col md:flex-row-reverse items-center justify-center md:space-x-8">
              <div id="our-mission" className="md:w-2/3 text-center md:text-left">
                <BlurText
                  text="OUR MISSION"
                  delay={200}
                  animateBy="words"
                  direction="top"
                  className="mt-16 mb-5 font-jSB text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-blue-950 tracking-wider"
                />
                <div
                  className="font-jS text-base [text-align:justify] leading-relaxed sm:text-sm md:text-md lg:text-xl"
                  dangerouslySetInnerHTML={{ __html: Missions }}
                />
              </div>
              <div className="md:w-1/3 justify-center hidden md:flex">
                <img
                  src="https://www.iicmrmba.edu.in/images/icons/mission.png"
                  alt="Mission"
                  className="w-full max-w-[350px] h-auto rounded-lg"
                />
              </div>
            </div>
          </section>

        </div>
      </main>

      {/* === Footer === */}
      <footer className="relative bg-white z-10">
        <Footer />
      </footer>
    </>
  );
}

export default About;
