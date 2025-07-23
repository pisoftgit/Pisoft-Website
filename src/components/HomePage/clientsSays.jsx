import React, { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import CardSwap, { Card } from '../components/HomePage/cardswap';
import Navbar from "./Navbar";
import videosrc from "../assets/p2.mp4";
import RollingGallerys from "./RollingGalary";
import Button from "./Button";
import Marquee from "./Marquee";
import Horizontal from "./HorizontalScroll";
import ScrollT from "./Page";
import TrueFocus from "./FocusText";
import AccordionMenu from "./ServiceCard";
import Footer from "./Footer";
import Hover from "./HoverCard";

gsap.registerPlugin(ScrollTrigger);

export default function Firstt() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [isERPHovered, setIsERPHovered] = useState(false);
  const workRef = useRef(null);
  const servicesRef = useRef(null);
  const svgRef = useRef(null);
  const outerref = useRef(null);
  const staticTextRef = useRef(null);
  const triggerRef = useRef(null);
  const vnavRef = useRef(null);
  const galleryRef = useRef(null);
  const [showCardSwap, setShowCardSwap] = useState(false);

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

    tl.to(staticTextRef.current, {
      opacity: 0,
      duration: 0.3,
      ease: "none",
    }, 0);

    tl.to(vnavRef.current, {
      color: "white",
      duration: 0.3,
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
      duration: 1,
    });

    requestAnimationFrame(() => {
      ScrollTrigger.refresh();
    });
  }, []);

  // CardSwap trigger based on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setShowCardSwap(entry.isIntersecting);
      },
      { threshold: 0.3 }
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

  const text = "Pisoft Informatics is an outsourced software development company specializing in custom product development, legacy platform modernization, and data-driven eCommerce solutions.";

  return (
    <div className="w-full bg-gradient-to-r from-orange-100 via-orange-100 to-sky-100">
      <div ref={outerref} className="relative min-h-screen w-full flex justify-center overflow-hidden">
        <div className="fixed left-0 top-4 z-50 md:top-6">
          <Navbar />
        </div>

        <div className="absolute top-0 left-0 w-full h-full z-[-1]">
          <video className="w-full h-full object-cover" autoPlay playsInline muted loop preload="auto">
            <source src={videosrc} type="video/mp4" />
          </video>
        </div>

        <svg ref={svgRef} width="100%" height="100%" className="relative w-full h-full">
          <defs>
            <linearGradient id="gradientFill" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#ffedd5" />
              <stop offset="50%" stopColor="#ffedd5" />
              <stop offset="100%" stopColor="#e0f2fe" />
            </linearGradient>
            <mask id="textmask">
              <rect width="100%" height="100%" fill="white" />
              <text className="font-bebas select-none text-black text-[24vw] sm:text-[20vw] md:text-[18vw] lg:text-[32vw] tracking-wider"
                x="50%" y="38%" dominantBaseline="middle" textAnchor="middle" fill="black">
                PISOFT
              </text>
            </mask>
          </defs>
          <rect width="100%" height="100%" fill="url(#gradientFill)" mask="url(#textmask)" />
        </svg>

        <div ref={staticTextRef} className="absolute bottom-4 left-4 p-4 text-black z-10">
          <h1 className="font-jr text-[5vw] font-bold">
            <span className="text-[#F07C22]  mr-2">Engineering</span> Excellence in
          </h1>
          <h3 className="font-jr text-[4vw] font-bold">
            Every Line of <span className="ml-2">Code...</span>
          </h3>
        </div>
      </div>

      {/* Main Content Section */}
      <section className="min-h-screen w-full px-4">
        <div className="flex flex-col md:flex-row justify-between items-start pt-46 gap-6">
          <div className="w-full md:w-1/2">
            <h1 className="font-jB text-[4vw] leading-tight">Turning Code into</h1>
            <h1 className="font-jB text-[4vw] text-[#F07C22]  leading-tight">Impact.</h1>
            <div ref={triggerRef} className="mt-6 flex flex-wrap gap-3 max-w-full">
              {text.split(" ").map((word, idx) => (
                <span key={idx} ref={setLetterRef} className="font-jr text-[1.75vw] font-bold text-gray-400">
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

      <section className="min-h-screen w-full">
        <div ref={servicesRef}><Horizontal /></div>
        <div ref={workRef}><ScrollT /></div>
      </section>

      {/* Gallery Section */}
      <div ref={galleryRef} className="w-3/4 min-h-screen relative mt-36 px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          What Our Clients Say
        </h2>
        <p className="text-center text-gray-600 max-w-xl mx-auto mb-10">
          Hear directly from our partners and clients about how our solutions made an impact. We're proud to build relationships that go beyond just delivering projects.
        </p>
        <div className="text-center text-lg text-gray-500">
          {/* Optional additional message or call-to-action */}
          “We don’t just build software, we build trust.”
        </div>
      </div>


      {/* CardSwap shows only when gallery is in view */}
      {showCardSwap && (
        <div
          style={{
            position: 'fixed',
            bottom: '1rem',
            right: '13rem',
            zIndex: 1000,
            overflow: 'hidden',
          }}
        >
          <CardSwap
            cardDistance={60}
            verticalDistance={70}
            delay={4000}
            pauseOnHover={false}
          >
            <Card>
              <img src="/images/testimonial1.jpg" alt="Client 1" className="w-full h-32 object-cover rounded-t" />
              <div className="p-2 text-sm text-white">
                <p>"The team exceeded our expectations with fast delivery."</p>
                <p className="mt-1 text-xs text-[#F07C22] ">— Sarah L., Product Manager</p>
              </div>
            </Card>
            <Card>
              <img src="/images/testimonial2.jpg" alt="Client 2" className="w-full h-32 object-cover rounded-t" />
              <div className="p-2 text-sm text-white">
                <p>"Exceptional service and support throughout our project."</p>
                <p className="mt-1 text-xs text-[#F07C22] ">— James K., CTO</p>
              </div>
            </Card>
            <Card>
              <img src="/images/testimonial3.jpg" alt="Client 3" className="w-full h-32 object-cover rounded-t" />
              <div className="p-2 text-sm text-white">
                <p>"Highly professional and technically sound team."</p>
                <p className="mt-1 text-xs text-[#F07C22] ">— Anita D., CEO</p>
              </div>
            </Card>
            <Card>
              <img src="/images/testimonial4.jpg" alt="Client 4" className="w-full h-32 object-cover rounded-t" />
              <div className="p-2 text-sm text-white">
                <p>"They understood our vision and delivered flawlessly."</p>
                <p className="mt-1 text-xs text-[#F07C22] ">— Carlos M., Startup Founder</p>
              </div>
            </Card>
          </CardSwap>
        </div>
      )}


      <section className="bg-gradient-to-r from-orange-100 via-orange-100 to-sky-100 w-full px-4">
        <AccordionMenu />
      </section>

      <section className="w-full">
        <Footer />
      </section>
    </div>
  );
}

