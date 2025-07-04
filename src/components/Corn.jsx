import React, { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import { MotionConfig, motion } from "framer-motion";
import { useNavigate, useLocation } from "react-router-dom";
import Accordion from "./Accordion";


export function Example() {
  const [active, setActive] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [bgImage, setBgImage] = useState("/images/default.jpg");
  const navigate = useNavigate();
  const location = useLocation();

  const overlayRef = useRef(null);
  const leftRef = useRef(null);
  const rightRef = useRef(null);
  const tlRef = useRef(null);

  const imageMap = {
    home: "/office.jpeg",
    about: "/office2.jpeg",
    services: "/images/services.jpg",
    contact: "/images/contact.jpg",
  };

  // Reset active state on route change
  useEffect(() => {
    setActive(false);
  }, [location.pathname]);

  // GSAP timeline setup
  useEffect(() => {
    const tl = gsap.timeline({ paused: true });
    tl.set(overlayRef.current, { display: "flex" })
      .fromTo(
        overlayRef.current,
        { y: "-100%" },
        { y: 0, duration: 0.6, ease: "power4.out" }
      )
      .fromTo(
        leftRef.current,
        { y: -100, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, ease: "power3.out" },
        "-=0.2"
      )
      .fromTo(
        rightRef.current,
        { y: -100, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, ease: "power3.out" },
        "-=0.3"
      );

    tlRef.current = tl;
    return () => tl.kill();
  }, []);

  // Play/reverse timeline based on active state
  useEffect(() => {
    if (active) {
      tlRef.current?.play();
    } else {
      tlRef.current
        ?.reverse()
        .eventCallback("onReverseComplete", () => {
          gsap.set(overlayRef.current, { display: "none" });
        });
    }
  }, [active]);


  const handleNavClick = (path) => {
    navigate(path);
    setActive(false);
  };

  return (
    <>
      <div className="flex justify-center items-center h-8 sm:h-10 md:h-12 px-2 sm:px-3 md:px-4 rounded-xl bg-white z-50 relative">
        <h2 className="text-sm sm:text-base md:text-lg font-jl text-black mr-2 sm:mr-3 md:mr-4">
          Menu
        </h2>
        <AnimatedHamburgerButton active={active} setActive={setActive} />
      </div>

      {/* Fullscreen Nav Overlay */}
      <div
        ref={overlayRef}
        className="fixed top-0 left-0 w-full h-screen bg-black text-white z-40 hidden"
      >
        <div className="flex flex-col md:flex-row w-full h-full">
          {/* Branding - Top/Left side */}
          <div
            ref={leftRef}
            className="w-full md:w-[75%] h-[55%] md:h-full flex flex-col justify-center px-4 sm:px-6 md:px-10 relative overflow-hidden"
            style={{
              backgroundImage: `url(${bgImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="relative z-10 pt-15 md:pt-0">
              <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-9xl font-bebas tracking-wide bg-clip-text text-transparent bg-white/80">
                PiSoft
              </h1>
              <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-9xl font-bebas tracking-wide bg-clip-text text-transparent bg-orange-400/80">
                Informatics
              </h1>
              <h3 className="mt-4 sm:mt-6 md:mt-10 text-xl sm:text-2xl md:text-5xl font-bebas tracking-wide bg-clip-text text-transparent bg-orange-400/80">
                Contact
              </h3>
              <div className="text-base sm:text-lg md:text-2xl font-bebas tracking-wide bg-clip-text text-transparent bg-white/80">
                <p className="text-sm sm:text-base md:text-lg">
                  Plot No C-86, Pannu Tower
                </p>
                <p className="text-sm sm:text-base md:text-lg">
                  2nd Floor, Phase 7, Industrial area,
                </p>
                <p className="text-sm sm:text-base md:text-lg">
                  Mohali (Punjab) opp. Cheema Boiler India.
                </p>
                <p className="mt-2 sm:mt-3 md:mt-4 text-sm sm:text-base md:text-lg">
                  Email: info@youritcompany.com
                </p>
                <p className="text-sm sm:text-base md:text-lg">
                  Phone: +918288029930
                </p>
              </div>
            </div>
            <div className="absolute inset-0 bg-black opacity-60 z-0" />
          </div>

          {/* Nav Links - Bottom/Right side */}
          <div
            ref={rightRef}
            className="w-full md:w-1/2 h-[40%] md:h-full flex flex-col items-center justify-center gap-2 sm:gap-4 md:gap-6 font-jl text-xl md:text-3xl"
          >
            <a
              onClick={() => handleNavClick("/")}
              onMouseEnter={() => setBgImage(imageMap.home)}
              className="hover:text-blue-400 transition cursor-pointer"
            >
              Home
            </a>
            <a
              onClick={() => handleNavClick("/about")}
              onMouseEnter={() => setBgImage(imageMap.about)}
              className="hover:text-blue-400 transition cursor-pointer"
            >
              About
            </a>
            <Accordion title="ERP Solutions">
              <div
                className="cursor-pointer hover:text-blue-400 py-1"
                onMouseEnter={() => setBgImage(imageMap.about)}
                onClick={() => handleNavClick("/ERPservices/Education")}
              >
                Education
              </div>
              <div
                className="cursor-pointer hover:text-blue-400 py-1"
                onMouseEnter={() => setBgImage(imageMap.about)}
                onClick={() => handleNavClick("/ERPservices/Finance")}
              >
                Finance
              </div>
              <div
                className="cursor-pointer hover:text-blue-400 py-1"
                onMouseEnter={() => setBgImage(imageMap.about)}
                onClick={() => handleNavClick("/ERPservices/Medical&Healthcare")}
              >
                Medical & Healthcare
              </div>
              <div
                className="cursor-pointer hover:text-blue-400 py-1"
                onMouseEnter={() => setBgImage(imageMap.about)}
                onClick={() => handleNavClick("/ERPservices/AutoMobile")}
              >
                AutoMobile
              </div>
              <div
                className="cursor-pointer hover:text-blue-400 py-1"
                onMouseEnter={() => setBgImage(imageMap.about)}
                onClick={() => handleNavClick("/ERPservices/TourTravels")}
              >
                Tour & Travels
              </div>
              <div
                className="cursor-pointer hover:text-blue-400 py-1"
                onMouseEnter={() => setBgImage(imageMap.about)}
                onClick={() => handleNavClick("/ERPservices/Services")}
              >
                Services
              </div>
            </Accordion>
            <a
              onClick={() => handleNavClick("/IntershipProgram")}
              onMouseEnter={() => setBgImage(imageMap.home)}
              className="hover:text-blue-400 transition cursor-pointer"
            >
              Internship
            </a>
            <a
              onClick={() => handleNavClick("/contact")}
              onMouseEnter={() => setBgImage(imageMap.contact)}
              className="hover:text-blue-400 transition cursor-pointer"
            >
              Contact
            </a>
          </div>

        </div>
      </div>
    </>
  );
};

const AnimatedHamburgerButton = ({ active, setActive }) => {
  return (
    <MotionConfig
      transition={{
        duration: 0.5,
        ease: "easeInOut",
      }}
    >
      <motion.button
        initial={false}
        animate={active ? "open" : "closed"}
        onClick={() => setActive((pv) => !pv)}
        className="relative h-8 sm:h-10 md:h-12 w-8 sm:w-10 md:w-12 rounded-full bg-white/0 transition-colors hover:bg-white/20"
      >
        <motion.span
          variants={VARIANTS.top}
          className="absolute h-[2px] w-5 sm:w-6 md:w-8 bg-black"
          style={{ y: "-50%", left: "50%", x: "-50%", top: "35%" }}
        />
        <motion.span
          variants={VARIANTS.middle}
          className="absolute h-[2px] w-5 sm:w-6 md:w-8 bg-black"
          style={{ left: "50%", x: "-50%", top: "50%", y: "-50%" }}
        />
        <motion.span
          variants={VARIANTS.bottom}
          className="absolute h-[2px] w-3 sm:w-4 md:w-5 bg-black"
          style={{
            x: "-50%",
            y: "50%",
            bottom: "35%",
            left: "calc(50% + 4px)",
          }}
        />
      </motion.button>
    </MotionConfig>
  );
};

const VARIANTS = {
  top: {
    open: {
      rotate: ["0deg", "0deg", "45deg"],
      top: ["35%", "50%", "50%"],
    },
    closed: {
      rotate: ["45deg", "0deg", "0deg"],
      top: ["50%", "50%", "35%"],
    },
  },
  middle: {
    open: {
      rotate: ["0deg", "0deg", "-45deg"],
    },
    closed: {
      rotate: ["-45deg", "0deg", "0deg"],
    },
  },
  bottom: {
    open: {
      rotate: ["0deg", "0deg", "45deg"],
      bottom: ["35%", "50%", "50%"],
      left: "50%",
    },
    closed: {
      rotate: ["45deg", "0deg", "0deg"],
      bottom: ["50%", "50%", "35%"],
      left: "calc(50% + 4px)",
    },
  },
};