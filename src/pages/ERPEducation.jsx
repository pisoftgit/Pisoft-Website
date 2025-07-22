import React, { useState, useRef, useEffect } from 'react';
import Navbar from '../components/Navbar';
import { Example } from '../components/Corn';
import Footer from '../components/Footer';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import TextPressure from '../components/TextPressure';
import { TypewriterEffectSmoothDemo } from "../components/Education/Text";
import { FollowingPointerDemo } from "../components/Education/FloatingPointer";
import { TypewriterEffect } from "../components/Finance/text2";
import { LayoutGridDemo } from "../components/Education/EDGrid";
import BlurText from '../components/BlurText';
import ClickSpark from '../components/ClickSpark';
import { ContainerScroll } from '../components/conatinerScroll';
import Threads from '../components/threads';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { NavbarDemo } from '../components/navbar/Navbar2';
import AuthFloatingButtons from '../components/AuthFloatingButtons';
import { motion, AnimatePresence } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

// ✅ FIXED HOOK
function useArrayRef() {
  const ref = useRef([]);
  const setRef = (el) => {
    if (el && !ref.current.includes(el)) {
      ref.current.push(el);
    }
  };
  return [ref, setRef];
}

function ERPEducation() {
  const [isExampleOpen, setIsExampleOpen] = useState(false);
  const [showAuthButtons, setShowAuthButtons] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  const text = "PisoftERP is an internet based web application that can be accessed throughout the organization or from any place just using a web browser. Following a rational approach, this system is designed for better interaction between students, teachers, parents & management.";

  const triggerRef = useRef(null);
  const sectionRefs = {
    type1: useRef(null),
    grid: useRef(null),
    type2: useRef(null),
    pointer: useRef(null),
  };

  const [letterRef, setLetterRef] = useArrayRef();
  const textRef = useRef(null);
  const imageRef = useRef(null);

  // ✅ GSAP Animation
  useGSAP(() => {
    gsap.set(textRef.current, { opacity: 1, y: 0 });

    gsap.from(letterRef.current, {
      scrollTrigger: {
        trigger: triggerRef.current,
        start: "top 80%",
      },
      opacity: 0,
      y: 50,
      stagger: 0.03,
      duration: 0.8,
      ease: "power3.out",
    });

    Object.values(sectionRefs).forEach((ref) => {
      if (ref.current) {
        gsap.from(ref.current, {
          scrollTrigger: {
            trigger: ref.current,
            start: "top 85%",
          },
          opacity: 0,
          y: 60,
          duration: 0.8,
          ease: "power3.out",
        });
      }
    });

    if (imageRef.current) {
      gsap.from(imageRef.current, {
        scrollTrigger: {
          trigger: imageRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
        y: 60,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });
    }
  }, []);

  useEffect(() => {
    gsap.to(textRef.current, {
      opacity: isExampleOpen ? 0 : 1,
      y: isExampleOpen ? -40 : 0,
      duration: 0.4,
      ease: 'power2.out',
      pointerEvents: isExampleOpen ? 'none' : 'auto',
    });
  }, [isExampleOpen]);

  // ✅ Floating Auth button toggle
  useEffect(() => {
    const handleScroll = () => {
      setShowAuthButtons(window.scrollY <= 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ✅ Preloader timeout
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="w-full h-screen flex justify-center items-center bg-white z-50 fixed top-0 left-0">
        <DotLottieReact
          src="https://lottie.host/e4dceebb-728f-458e-9648-fee916f32948/utxxsMf1tH.lottie"
          loop
          autoplay
          className='text-sm'
        />
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-r from-orange-50 via-orange-100 to-sky-200 w-full overflow-x-hidden relative">
      <ClickSpark sparkColor='black' sparkSize={20} sparkRadius={15} sparkCount={8} duration={400}>

        {/* Auth buttons & Navbar */}
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

        {/* Mobile Nav Icons */}
        <div className="fixed left-5 top-2 z-50 lg:hidden">
          <Navbar />
        </div>
        <div className="fixed top-4 right-4 z-50 max-w-[90%] sm:max-w-none lg:hidden">
          <Example />
        </div>

        {/* Hero: animated TextPressure */}
          <div className="absolute top-20 left-15 md:top-4 md:left-80 w-full flex items-center justify-center pl-4 text-center">
          <TextPressure
            text=" ESME"
            flex
            width
            textColor="rgba(251, 153, 69, 0.6)" 
            strokeColor="rgba(251, 153, 69, 0.1)"
            minFontSize={0.5}
          />
        </div>

        {/* Hero words */}
        <div className="pt-30 md:pb-15 sm:pb-5 sm:px-6 md:px-12">
          <div className='flex flex-wrap w-full justify-center items-center text-center'>
            <BlurText
              text="EDUCATION SYSTEM MANAGEMENT ERP "
              className="font-jSB flex flex-wrap justify-center items-center sm:text-center text-[6vw] mb-5 sm:text-xl md:text-5xl leading-tight text-blue-950 text-center"
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
          </div>
          <div ref={triggerRef} className="flex flex-wrap justify-center gap-2 px-4 text-center">
            {text.split(" ").map((w, i) => (
              <span
                key={i}
                ref={setLetterRef}
                className="font-jmed text-[2vh] sm:text-[2.2vh] md:text-[2.9vh] text-black font-bold"
              >
                {w}
              </span>
            ))}
          </div>
        </div>

        <div ref={sectionRefs.type1} className="px-4 md:px-8 pt-5">
          <TypewriterEffectSmoothDemo />
        </div>

        <ContainerScroll>
          <section className="w-full flex flex-wrap justify-center items-center text-center px-4 md:px-8 bg-gradient-to-r from-orange-50 via-orange-100 to-sky-200">
            <LayoutGridDemo />
          </section>
        </ContainerScroll>


        <div ref={sectionRefs.type2} className="px-4 md:px-8 ">
          <TypewriterEffect />
        </div>


        <section className="w-full">
          <Threads color={[0.15, 0.51, 0.831]} />
        </section>


        <div ref={sectionRefs.pointer} className="px-4 md:px-8 py-8 md:py-12">
          <FollowingPointerDemo />
        </div>
        <footer className="w-screen z-10"><Footer /></footer>

      </ClickSpark >
    </div >
  );
}

export default ERPEducation;