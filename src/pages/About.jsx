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

function About() {
  const aboutSectionRef = useRef(null);
  const techSectionRef = useRef(null);
  const [showLanyard, setShowLanyard] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const aboutTop = aboutSectionRef.current.getBoundingClientRect().top;
      const techTop = techSectionRef.current.getBoundingClientRect().top;

      // Show Lanyard if About section is mostly in view
      if (aboutTop >= -100 && techTop > window.innerHeight * 0.5) {
        setShowLanyard(true);
      } else {
        setShowLanyard(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <main className="w-full">
        <div className="w-full flex flex-col bg-white p-4 sm:p-6 md:p-8 relative">
          {/* Navbar */}

          <div className="fixed left-5 top-2 z-50000 lg:hidden">
            <Navbar />
          </div>
          <div className="fixed top-4 right-4 z-50 max-w-[90%] sm:max-w-none lg:hidden">
            <Example />
          </div>
          <div className="fixed top-0 left-0 w-full z-50 hidden md:block">
            <NavbarDemo />
          </div>


          {/* === About Section === */}
          <section
            ref={aboutSectionRef}
            className="min-h-auto flex flex-col md:flex-row items-start relative z-10"
          >
            <div className="w-full md:w-2/3 lg:w-[65%] z-10">
              <BlurText
                text="Bringing Ideas to Life"
                delay={200}
                animateBy="words"
                direction="top"
                className="mt-16 sm:mt-20 font-jB text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-gray-900 tracking-wider"
              />

              <div className="mt-6 sm:mt-8 md:mt-10">
                <BlurText
                  text="About Us"
                  delay={200}
                  animateBy="words"
                  direction="top"
                  className="font-jSB text-2xl sm:text-3xl md:text-4xl text-orange-400 tracking-wider"
                />

                <div className="text-base [text-align:justify] sm:text-lg md:text-xl lg:text-2xl font-jl text-gray-800 tracking-wider mt-4 sm:mt-6">
                  <p>
                    Pisoft Informatics Private Limited is a dynamic and rapidly
                    growing IT company established in 2016. The company located in
                    Mohali (Punjab) With a diverse portfolio of clients both
                    nationally and internationally, we are dedicated to delivering
                    cutting-edge solutions across various domains including software
                    development, web development, Android services, ERP solutions,
                    Technical Support, as well as design and implementation.
                  </p>
                  <p className="mt-4">
                    Our greatest asset is our efficient and experienced team,
                    equipped with modern infrastructure and a vibrant group of young,
                    competitive professionals. We are committed to providing
                    high-quality, tailored solutions that meet the unique needs of
                    our clients, ensuring their success in a fast-evolving digital
                    landscape.
                  </p>
                </div>
              </div>
            </div>

            {/* === AnimatePresence + Framer Motion for smooth enter/exit === */}
            <AnimatePresence>
              {showLanyard && (
                <motion.div
                  className="absolute min-h-auto bg-transparent right-0 top-0 w-full md:w-1/2 lg:w-1/3 z-0"
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
          <section ref={techSectionRef} className="min-h-[50vh] pt-30 bg-white relative z-10">
            <Tech />
          </section>

          {/* === Work Approach Section === */}
          <section className="h-auto pt-12 bg-white relative z-10">
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

        </div>

        {/* === Footer === */}
        <footer className="relative bg-white z-10">
          <Footer />
        </footer>
      </main>
    </>
  );
}

export default About;