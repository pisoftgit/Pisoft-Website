import React, { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import videosrc from "../assets/p2.mp4";
import { Example } from "./Corn";
import Button from "./Button";
import Marquee from "./Marquee";
import Horizontal from "./HorizontalScroll";
import ScrollT from "./Page";
import TrueFocus from "./FocusText";
import AccordionMenu from "./ServiceCard";
import Footer from "./Footer";
import Hover from "./HoverCard";
import SwipableCardCarousel from "./SwipableCardCarousel";
import BlurText from "./BlurText";
import { InfiniteMovingCards } from "./Intern/infiniteCards";
import { NavbarDemo } from "./navbar/Navbar2";
import { motion, AnimatePresence } from "framer-motion";
import AuthFloatingButtons from "./AuthFloatingButtons";




gsap.registerPlugin(ScrollTrigger);

export default function Firstt() {
  const workRef = useRef(null);
  const servicesRef = useRef(null);
  const svgRef = useRef(null);
  const outerref = useRef(null);
  const staticTextRef = useRef(null);
  const triggerRef = useRef(null);
  const vnavRef = useRef(null);
  const galleryRef = useRef(null);
  const [showCardSwap, setShowCardSwap] = useState(false);
  const textRef = useRef(null);
  const [hoverIntern, setHoverIntern] = useState(false);
  const [hoverTest, setHoverTest] = useState(false);


  const text =
    "Pisoft Informatics is an outsourced software development company specializing in custom product development, legacy platform modernization, and data-driven eCommerce solutions.";

  function useArrayRef() {
    const letterRefs = useRef([]);
    letterRefs.current = [];
    return [letterRefs, (ref) => ref && letterRefs.current.push(ref)];
  }

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

    const isMobile = window.innerWidth < 768;

    // Adjust text Y position before animation begins
    if (textRef.current) {
      textRef.current.setAttribute('y', isMobile ? '50%' : '40%');
    }

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: outerref.current,
        start: "top top",
        end: "bottom+=10% top",
        pin: true,
        scrub: 0.7,
        invalidateOnRefresh: true,
        scroller: document.body,
      },
    });

    tl.fromTo(
      svgRef.current,
      { scale: 1, transformOrigin: "center center" },
      { scale: 60, ease: "power2.inOut" }
    );

    tl.to(staticTextRef.current, {
      opacity: 0,
      duration: 0.5,
      ease: "none",
    }, 0);

    tl.to(vnavRef.current, {
      color: "white",
      duration: 0.5,
      ease: "none",
    }, 0);

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
      duration: 0.5,
    });

    requestAnimationFrame(() => {
      ScrollTrigger.refresh();
    });
  }, []);


  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setShowCardSwap(entry.isIntersecting);
      },
      { threshold: 0.4 }
    );

    if (galleryRef.current) {
      observer.observe(galleryRef.current);
    }

    return () => {
      if (galleryRef.current) {
        observer.unobserve(galleryRef.current);
      }
    };
  }, []);

  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const res = await fetch("https://project.pisofterp.com/pipl/restworld/testimonials");
        const data = await res.json();

        const formattedData = data
          .filter((item) => item.isApproved)
          .map((item) => ({
            name: item.name,
            quote: item.feedback,
            image: item.dp
              ? item.dp.startsWith("data:")
                ? item.dp
                : `data:image/gif;base64,${item.dp}`
              : item.tempDp,
            rating: item.rating,
          }));


        setTestimonials(formattedData);
      } catch (err) {
        console.error("Failed to fetch testimonials:", err);
      }
    };

    fetchTestimonials();
  }, []);



  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const turningCodeRef = useRef(null);
  const [showNavbarDemo, setShowNavbarDemo] = useState(false);


  useEffect(() => {
    const showObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShowNavbarDemo(true);
        }
      },
      { root: null, threshold: 0.3 }
    );

    const hideObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShowNavbarDemo(false);
        }
      },
      { root: null, threshold: 0.1 }
    );

    if (turningCodeRef.current) {
      showObserver.observe(turningCodeRef.current);
    }

    if (outerref.current) {
      hideObserver.observe(outerref.current);
    }

    return () => {
      showObserver.disconnect();
      hideObserver.disconnect();
    };
  }, []);


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



  return (
    <div className="w-full bg-white overflow-clip">
      <div ref={outerref} className="relative min-h-screen sm:min-h-half  w-full flex justify-center overflow-hidden">

        <div className="relative w-full h-screen overflow-hidden">
          {/* Background Video */}
          <div className="absolute top-0 left-0 w-full h-full z-[-1]">
            <video className="w-full h-full object-cover" autoPlay playsInline muted loop preload="auto">
              <source src={videosrc} type="video/mp4" />
            </video>
          </div>

          {/* Masked SVG Text */}
          <svg ref={svgRef} className="relative w-full h-full boder">
            <defs>
              <linearGradient id="gradientFill" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#ffedd5" />
                <stop offset="50%" stopColor="#ffedd5" />
                <stop offset="100%" stopColor="#e0f2fe" />
              </linearGradient>
              <mask id="textmask">
                <rect width="100%" height="100%" fill="white" />
                <text
                  ref={textRef}
                  className="font-bebas select-none"
                  x="50%"
                  y="40%"  // Will override this with JS
                  dominantBaseline="middle"
                  textAnchor="middle"
                  fill="black"
                  style={{
                    fontSize: '34vw',
                  }}
                >
                  PISOFT
                </text>

              </mask>
            </defs>
            <rect width="100%" height="100%" fill="white" mask="url(#textmask)" />
          </svg>

          {/* Static Bottom Left Text */}
          <div
            ref={staticTextRef}
            className="absolute bottom-15 left-4 sm:bottom-6 sm:left-6 md:bottom-11 md:left-8 p-2 sm:p-4 text-black z-10 max-w-[90%]"
          >
            <h1 className="font-jr font-bold leading-snug text-[9vw] sm:text-[7vw] md:text-[5.5vw] lg:text-[4vw] flex flex-wrap">
              <span className="text-orange-400 mr-2">Engineering</span> Excellence in
            </h1>
            <h3 className="font-jr font-bold leading-snug text-[8vw] sm:text-[6vw] md:text-[5vw] lg:text-[3.5vw] flex flex-wrap">
              Every Line of <span className="ml-1">Code...</span>
            </h3>
          </div>
        </div>
      </div>


      <section className="min-h-auto w-full px-4">
        <div className="fixed top-4 right-4 sm:top-6 sm:right-6 z-50 md:hidden">
          <Example />
        </div>
        <div className="flex flex-col md:flex-row justify-between items-start pt-16 gap-6">
          <div className="w-full md:w-1/2">
            <h1 ref={turningCodeRef} className="font-jSB text-[9vw] sm:text-[4vw] md:text-[5.5vw] lg:text-[4vw] text-blue-950 leading-tight">Turning Code into</h1>
            <h1 className="font-jSB  text-[9vw] sm:text-[4vw] md:text-[5.5vw] lg:text-[4vw] text-orange-600 leading-tight">Impact.</h1>
            <div ref={triggerRef} className="mt-6 flex flex-wrap gap-3 max-w-full">
              {text.split(" ").map((word, idx) => (
                <span key={idx} ref={setLetterRef} className="font-jl text-base sm:text-lg md:text-xl font-normal text-gray-400">
                  {word}
                </span>
              ))}
              <div className="mt-6"><Button /></div>
            </div>
          </div>
          <div className="w-full md:w-1/2 mt-10 relative z-10">
            <Hover />
          </div>
        </div>
        <div className="mt-12">
          <h5 className="font-jl text-2xl text-center text-black tracking-wide">Trusted by Clients</h5>
          <Marquee />
        </div>
      </section>

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

      <section className="min-h-auto  w-full">
        <div ref={servicesRef}><Horizontal /></div>
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
            <div className="font-jrB text-4xl sm:text-4xl md:text-5xl text-orange-400 text-center">
              Results matter.
            </div>
            <div className="font-jl text-base sm:text-lg md:text-xl font-normal mt-6 mb-14 sm:mt-8 text-center">
              "Discover how our customized solutions have delivered measurable business outcomes for clients across various industries. Each case study highlights the strategic impact of our work, turning challenges into opportunities for growth."
            </div>
          </div>
        </div>
        <section className="px-4 sm:px-6 mt-6">
          <ScrollT />
        </section>
      </section>

      {/* Gallery Section */}

      <div className="max-w-screen mt-35 px-10 ">
        <BlurText
          text="WHAT OUR CLIENT SAYS"
          className="lg:text-5xl text-3xl font-jB text-center text-orange-500"
          delay={100}
          duration={0.6}
          ease="power3.out"
          splitType="chars"
          from={{ opacity: 0, y: 40 }}
          to={{ opacity: 1, y: 0 }}
          threshold={0.1}
          rootMargin="-100px"
          textAlign="center"
        />
        <p className="mt-10 font-jr text-[2vh] sm:text-[2.2vh] md:text-[2.5vh] pl-0 sm:pl-6 w-full text-black tracking-wider text-center sm:text-left">
          Hear directly from our partners and clients about how our solutions made an impact. We're proud to build relationships that go beyond just delivering projects.
        </p>

        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="slow"
        />
      </div>


      {/* Latest Insights section */}
      <section className="min-h-auto px-10 overflow-hidden mt-20 sm:mt-4 md:mt-20">
        <SwipableCardCarousel />
      </section>

      <section className="bg-white w-full justify-center items-center flex flex-row mt-15">
        <div className="w-full md:w-1/2 hidden lg:block">
          <img
            src="https://img.freepik.com/premium-vector/faqs-concept-illustration_86047-994.jpg"
            alt="FAQs"
            className="rounded-lg w-full h-auto object-contain bg-no-repeat"
          />
        </div>
        <div className="w-full lg:w-1/2">
          <AccordionMenu />
        </div>
      </section>

      <section className="w-full">
        <Footer />
      </section>
    </div >
  );
}