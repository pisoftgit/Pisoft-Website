import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import RollingGallerys from "./RollingGalary";
import CardSwap, { Card } from '../components/HomePage/cardswap'
import { Example } from "./Corn";
import { Menu, X } from "lucide-react";
import videosrc from "../assets/p2.mp4";
import Navbar from "./Navbar";
import Hover from "./HoverCard";
import Marquee from "./Marquee";
import Button from "./Button";
import Horizontal from "./HorizontalScroll";
import AccordionMenu from "./ServiceCard";
import ScrollT from "./Page";
import TrueFocus from "./FocusText";
import SwipableCardCarousel from "./SwipableCardCarousel";
import Footer from "./Footer";

gsap.registerPlugin(ScrollTrigger);

export default function Firstt() {
  // const [showERPDropdown, setShowERPDropdown] = useState(false);
  const [isERPHovered, setIsERPHovered] = useState(false);

  const navigate = useNavigate();
  const workRef = useRef(null);
  const servicesRef = useRef(null);
  const svgRef = useRef(null);
  const outerref = useRef(null);
  const staticTextRef = useRef(null);
  const triggerRef = useRef(null);
  const vnavRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const text =
    "Pisoft Informatics is an outsourced software development company specializing in custom product development, legacy platform modernization, and data-driven eCommerce solutions.";

  function useArrayRef() {
    const letterRefs = useRef([]);
    letterRefs.current = [];
    return [letterRefs, (ref) => ref && letterRefs.current.push(ref)];
  }

  const handleNavClick = (link) => {
    if (link === "About Us") {
      navigate("/about");
    } else if (link === "Work" && workRef.current) {
      workRef.current.scrollIntoView({ behavior: "smooth" });
    } else if (link === "ERP Solutions" && servicesRef.current) {
      setIsERPHovered((prev) => !prev);
    } else if (link === "Contact Us") {
      navigate("/contact");
    }
  };

  const [letterRef, setLetterRef] = useArrayRef();

  useGSAP(() => {
    ScrollTrigger.scrollerProxy(document.body, {
      scrollTop(value) {
        return value !== undefined ? window.scrollTo(0, value) : window.scrollY;
      },
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        };
      },
      pinType: document.body.style.transform ? "transform" : "fixed",
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: outerref.current,
        start: "top top",
        end: "bottom+=10% top",
        pin: true,
        scrub: 1,
        invalidateOnRefresh: true,
        scroller: document.body,
      },
    });

    tl.fromTo(
      svgRef.current,
      { scale: 1, transformOrigin: "center center" },
      { scale: 100, ease: "power2.inOut" }
    );

    tl.to(
      staticTextRef.current,
      {
        opacity: 0,
        duration: 0.3,
        ease: "none",
      },
      0
    );

    tl.to(
      vnavRef.current,
      {
        color: "white",
        duration: 0.3,
        ease: "none",
      },
      0
    );

    const colorTl = gsap.timeline({
      scrollTrigger: {
        trigger: triggerRef.current,
        start: "top 80%",
        end: "bottom 40%",
        scrub: 1,
        toggleActions: "play none none reverse",
        scroller: document.body,
      },
    });

    colorTl.to(letterRef.current, {
      color: "black",
      stagger: { each: 15, ease: "power1.inOut" },
      duration: 1,
    });

    requestAnimationFrame(() => {
      ScrollTrigger.refresh();
    }, 200);
  }, []);

  return (
    <div className="w-full bg-gradient-to-r from-orange-100 via-orange-100 to-sky-100">
      <div
        ref={outerref}
        className="relative min-h-screen w-full flex justify-center overflow-hidden"
      >
        <div className="fixed left-0 top-4 z-50 md:top-6">
          <Navbar />
        </div>
        <div className="absolute top-0 left-0 w-full h-full z-[-1]">
          <video
            className="w-full h-full object-cover"
            autoPlay
            playsInline
            muted
            loop
            preload="auto"
          >
            <source src={videosrc} type="video/mp4" />
          </video>
        </div>
        <svg
          ref={svgRef}
          width="100%"
          height="100%"
          className="relative w-full h-full"
        >
          <defs>
            <linearGradient id="gradientFill" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#ffedd5" />  {/* from-orange-100 */}
              <stop offset="50%" stopColor="#ffedd5" /> {/* via-orange-100 */}
              <stop offset="100%" stopColor="#e0f2fe" />{/* to-sky-100 */}
            </linearGradient>

            {/* Text mask */}
            <mask id="textmask">
              <rect width="100%" height="100%" fill="white" />
              <text
                className="font-bebas select-none text-black text-[24vw] sm:text-[20vw] md:text-[18vw] lg:text-[32vw] tracking-wider"
                x="50%"
                y="38%"
                dominantBaseline="middle"
                textAnchor="middle"
                fill="black"
              >
                PISOFT
              </text>
            </mask>
          </defs>

          {/* Apply gradient fill inside masked text */}
          <rect
            width="100%"
            height="100%"
            fill="url(#gradientFill)"
            mask="url(#textmask)"
          />
        </svg>

        <div
          ref={staticTextRef}
          className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 md:bottom-8 md:left-8 p-4 sm:p-6 text-black z-10"
        >
          <h1 className="flex flex-col sm:flex-row font-jr text-[5vw] sm:text-[4vw] md:text-[4.5vw] font-bold">
            <span className="text-[#F07C22]  mr-2">Engineering</span> Excellence in
          </h1>
          <h3 className="flex flex-col sm:flex-row font-jr text-[4vw] sm:text-[3vw] md:text-[3.5vw] font-bold">
            Every Line of <span className="ml-0 sm:ml-2">Code...</span>
          </h3>
        </div>
        <div
          ref={vnavRef}
          className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 md:bottom-8 md:right-8 p-4 sm:p-6 text-black z-10 flex flex-col sm:flex-row gap-2 sm:gap-4 md:gap-6"
        >
          <div
            ref={vnavRef}
            className="sm:right-6 md:bottom-8 md:right-8 sm:p-6 text-black z-10 flex flex-col sm:flex-row sm:gap-4 md:gap-6"
          >
            {["Work", "About Us", "Contact Us"].map((link, idx) => (
              <div
                key={idx}
                className={`relative ${link === "ERP Solutions" ? "group" : ""}`}
                onMouseEnter={() => link === "ERP Solutions" && setIsERPHovered(true)}
                onMouseLeave={() => link === "ERP Solutions" && setIsERPHovered(false)}
              >
                <a
                  onClick={() => handleNavClick(link)}
                  className="text-[4vw] sm:text-[2.5vw] md:text-[1.5vw] font-jl cursor-pointer hover:text-[#F07C22] "
                >
                  {link}
                </a>

                {link === "ERP Solutions" && isERPHovered && (
                  <div className="absolute top-full left-0 mt-2  bg-gradient-to-r from-orange-100 via-orange-100 to-sky-100 text-black rounded shadow-lg py-2 px-4 text-sm w-max z-50">
                    <div
                      onClick={() => navigate("/services/erp/manufacturing")}
                      className="hover:text-[#F07C22]  cursor-pointer py-1"
                    >
                      ERP for Manufacturing
                    </div>
                    <div
                      onClick={() => navigate("/services/erp/education")}
                      className="hover:text-[#F07C22]  cursor-pointer py-1"
                    >
                      ERP for Education
                    </div>
                    <div
                      onClick={() => navigate("/services/erp/custom")}
                      className="hover:text-[#F07C22]  cursor-pointer py-1"
                    >
                      Custom ERP
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

        </div>
        <div className="fixed top-4 right-4 sm:top-6 sm:right-6 md:hidden z-50">
          <button
            onClick={toggleMenu}
            className="text-gray-700 focus:outline-none"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        {isOpen && (
          <>
            {isOpen && (
              <>
                <a
                  onClick={() => handleNavClick("Work")}
                  className="text-[4vw] sm:text-[2.5vw] md:text-[1.5vw] font-jl cursor-pointer hover:text-[#F07C22] "
                >
                  Work
                </a>

                <a
                  onClick={() => handleNavClick("About Us")}
                  className="text-[4vw] sm:text-[2.5vw] md:text-[1.5vw] font-jl cursor-pointer hover:text-[#F07C22] "
                >
                  About Us
                </a>

                {/* <div
                  className="relative"
                  onMouseEnter={() => setIsERPHovered(true)}
                  onMouseLeave={() => setIsERPHovered(false)}
                >
                  <a className="text-[4vw] sm:text-[2.5vw] md:text-[1.5vw] font-jl cursor-pointer hover:text-[#F07C22] ">
                    ERP Solutions
                  </a>

                  {isERPHovered && (
                    <div className="absolute top-full left-0 mt-2 bg-white text-black rounded shadow-lg py-2 px-4 z-50 text-sm w-max">
                      <div
                        onClick={() => navigate("/services/erp/manufacturing")}
                        className="hover:text-[#F07C22]  cursor-pointer py-1"
                      >
                        ERP for Manufacturing
                      </div>
                      <div
                        onClick={() => navigate("/services/erp/education")}
                        className="hover:text-[#F07C22]  cursor-pointer py-1"
                      >
                        ERP for Education
                      </div>
                      <div
                        onClick={() => navigate("/services/erp/custom")}
                        className="hover:text-[#F07C22]  cursor-pointer py-1"
                      >
                        Custom ERP
                      </div>
                    </div>
                  )}
                </div> */}

                <a
                  onClick={() => handleNavClick("Contact Us")}
                  className="text-[4vw] sm:text-[2.5vw] md:text-[1.5vw] font-jl cursor-pointer hover:text-[#F07C22] "
                >
                  Contact Us
                </a>
              </>
            )}

          </>

        )}
      </div>

      {/* Content Section */}
      <section className="relative min-h-screen w-full  bg-gradient-to-r from-orange-100 via-orange-100 to-sky-100 px-4 sm:px-6 md:px-8">
        <div className="fixed top-4 right-4 sm:top-6 sm:right-6 z-50 md:flex ">
          <Example />
        </div>
        <div className="flex flex-col md:flex-row justify-between items-start pt-8 sm:pt-12 md:pt-16 gap-4 sm:gap-6 md:gap-8">
          <div className="w-full md:w-1/2">
            <h1 className="font-jB text-[8vw] sm:text-[6vw] md:text-[4vw] leading-tight">
              Turning Code into
            </h1>
            <h1 className="font-jB text-[8vw] sm:text-[6vw] md:text-[4vw] text-[#F07C22]  leading-tight mt-[-1vw]">
              Impact.
            </h1>
            <div
              ref={triggerRef}
              className="mt-4 sm:mt-6 md:mt-8 flex flex-wrap gap-x-2 sm:gap-x-3 md:gap-x-4 max-w-full"
            >
              {text.split(" ").map((word, idx) => (
                <span
                  key={idx}
                  ref={setLetterRef}
                  className="font-jr text-[3.5vw] sm:text-[2.5vw] md:text-[1.75vw] font-bold text-gray-400"
                >
                  {word}
                </span>
              ))}
              <div className="left-0 mt-4 sm:mt-8">
                <Button />
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 mt-8 sm:mt-10 md:mt-0 relative z-10">
            <Hover />
          </div>
        </div>
        <div className="mt-8 overflow-hidden sm:mt-12 md:mt-16">
          <div className="flex justify-center mb-4 sm:mb-6">
            <h5 className="font-jl text-lg sm:text-xl md:text-2xl font-semibold  text-black tracking-wide">
              Trusted by Clients
            </h5>
          </div>
          <Marquee />
        </div>
      </section>

      {/* Services and Work Section */}
      <section className="min-h-screen w-full">
        <div ref={servicesRef}>
          <Horizontal />
        </div>
        <div ref={workRef} className="px-4 sm:px-6 md:px-8">
          <div className="flex justify-center mb-4 sm:mb-6">
            <h5 className="font-jl text-3xl sm:text-xl md:text-2xl font-semibold tracking-wide">
              Have a Glimpse at Our
            </h5>
          </div>
          <TrueFocus
            sentence="Latest Works"
            manualMode={false}
            blurAmount={2}
            borderColor="#022f66"
            text="orange"
            animationDuration={2}
            pauseBetweenAnimations={1}
          />
          <div className="mx-auto max-w-4xl mt-6 sm:mt-8 md:mt-10">
            <div className="font-jrB text-4xl sm:text-4xl md:text-5xl text-[#F07C22]  text-center">
              Results matter.
            </div>
            <div className="font-jl text-base sm:text-lg md:text-xl font-normal mt-6 sm:mt-8 text-center">
              "Discover how our customized solutions have delivered measurable business outcomes for clients across various industries. Each case study highlights the strategic impact of our work, turning challenges into opportunities for growth."
            </div>
          </div>
        </div>
        <section className="sm:mt-10 md:mt-20 px-4 sm:px-6 md:px-10">
          <ScrollT />
        </section>
      </section>

      {/* Gallery Section */}
      <div style={{
        height: '50px',
        width: '50px',
        position: 'relative',
      }}>
        <CardSwap
          cardDistance={60}
          verticalDistance={70}
          delay={4000}
          pauseOnHover={false}
        >
          <Card>
            <h3>Card 1</h3>
            <p>Your content here</p>
          </Card>
          <Card>
            <h3>Card 2</h3>
            <p>Your content here</p>
          </Card>
          <Card>
            <h3>Card 3</h3>
            <p>Your content here</p>
          </Card>
          <Card>
            <h3>Card 4</h3>
            <p>Your content here</p>
          </Card>
        </CardSwap>
      </div>


      {/* Accordion and Carousel Section */}
      <section className=" bg-gradient-to-r from-orange-100 via-orange-100 to-sky-100 w-full px-4 sm:px-6 md:px-0">
        <AccordionMenu />
        {/* <section className="min-h-screen overflow-hidden mt-6 sm:mt-8 md:mt-10">
          <SwipableCardCarousel />
        </section> */}
      </section>

      {/* Footer Section */}
      <section className="w-full">
        <Footer />
      </section>
    </div >
  );
}
