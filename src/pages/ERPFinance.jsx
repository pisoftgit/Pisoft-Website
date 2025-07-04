import React, { useState, useRef } from 'react';
import Navbar from '../components/Navbar';
import { Example } from '../components/Corn';
import Footer from '../components/Footer';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import TextPressure from '../components/TextPressure';
import { TypewriterEffectSmoothDemo } from "../components/Education/Text";
import { FollowingPointerDemo } from "../components/Finance/FIFloatingPointer";
import { TypewriterEffect } from "../components/Finance/text2";
import { LayoutGridDemo } from "../components/Finance/FiGrid";
import BlurText from '../components/BlurText';
import ClickSpark from '../components/ClickSpark';
import { ContainerScroll } from '../components/conatinerScroll';
import Threads from '../components/threads';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { useEffect } from 'react';


gsap.registerPlugin(ScrollTrigger);

function ERPFinance() {
  const [isExampleOpen, setIsExampleOpen] = useState(false);

  const text =
    "PisoftERP is an application to manage day to day activities of cooperative credit societies. The automated application updates all deposits, withdraws, interest and loan amount with easy to use tools. The application enables an easy storing, updating and retrieving of data.";


  const triggerRef = useRef(null);
  const sectionRefs = {
    hero: useRef(null),
    type1: useRef(null),
    grid: useRef(null),
    type2: useRef(null),
    pointer: useRef(null),
  };

  function useArrayRef() {
    const r = useRef([]);
    r.current = [];
    return [r, (el) => el && r.current.push(el)];
  }
  const [letterRef, setLetterRef] = useArrayRef();
  const textRef = useRef(null);

  useGSAP(() => {
    // Animate TextPressure on menu toggle
    gsap.set(textRef.current, { opacity: 1, y: 0 });
  }, []);


  React.useEffect(() => {
    gsap.to(textRef.current, {
      opacity: isExampleOpen ? 0 : 1,
      y: isExampleOpen ? -40 : 0,
      duration: 0.4,
      ease: 'power2.out',
      pointerEvents: isExampleOpen ? 'none' : 'auto',
    });
  }, [isExampleOpen]);

  useGSAP(() => {
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

    // Generic section slide-up animation
    Object.values(sectionRefs).forEach((r) => {
      if (!r.current) return;
      gsap.from(r.current, {
        scrollTrigger: {
          trigger: r.current,
          start: "top 85%",
        },
        opacity: 0,
        y: 60,
        duration: 0.8,
        ease: "power3.out",
      });
    });
  }, []);

  const imageRef = useRef(null);

  useGSAP(() => {
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

  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="w-full h-screen flex justify-center items-center bg-white z-50 fixed top-0 left-0">
        {/* <DotLottieReact
              src="https://lottie.host/18f588f2-3aa0-458d-a140-52218fd224fa/g0AlX8iQRa.lottie"
              loop
              autoplay
              className='text-sm'
            /> */}
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
    <div className="bg-gradient-to-r from-orange-50 via-orange-100 to-sky-200 w-full overflow-x-hidden">

      <ClickSpark
        sparkColor='black'
        sparkSize={20}
        sparkRadius={15}
        sparkCount={8}
        duration={400}
      >

        <div className="fixed left-5 top-2 z-50000">
          <Navbar />
        </div>
        <div className="fixed top-4 right-4 z-50 max-w-[90%] sm:max-w-none">
          <Example />
        </div>

        {/* Hero: animated TextPressure */}
        <div className="absolute top-10 left-10 md:top-4 md:left-40  w-full flex items-center justify-center pl-4 text-center">
          <TextPressure
            text=" FSME"
            flex
            alpha
            stroke
            width
            weight
            textColor="#FB9945"
            strokeColor="#FB9945"
            minFontSize={5}
          />
        </div>

        {/* Hero words */}
        <div className="pt-20 md:pb-15 sm:pb-5 sm:px-6 md:px-12">
          <div className='flex flex-wrap w-full justify-center items-center text-center'>
            <BlurText
              text="FINANCIAL SERVICES MANAGEMENT ERP"
              className="font-jr flex flex-wrap justify-center items-center sm:text-center text-[6vw] mb-5 sm:text-[5vw] md:text-[4vw] leading-tight text-blue-950 text-center"
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
                className="font-jmed text-[4vw] sm:text-[1vw] md:text-[1.8vw] text-black font-bold"
              >
                {w}
              </span>
            ))}
          </div>
        </div>

        <div ref={sectionRefs.type1} className="px-4 md:px-8 pt-20">
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

        <section className="w-full flex justify-end items-end">
          <Threads color={[0.086, 0.6, 0.941]} />
        </section>

        <div ref={sectionRefs.pointer} className="px-4 md:px-8 py-8 md:py-12">
          <FollowingPointerDemo />
        </div>
        <footer className="relative z-10"><Footer /></footer>

      </ClickSpark >
    </div >
  );
}

export default ERPFinance;










// "use client";
// import React, { useRef } from "react";
// import Navbar from "../components/Navbar";
// import { Example } from "../components/Corn";
// import FIButton from "../components/Finance/FiButton";
// import { HeroParallax } from "../components/Finance/FiHeroParallax";
// import { TypewriterEffectSmoothDemo } from "../components/Education/Text";
// import { FollowingPointerDemo } from "../components/Finance/FIFloatingPointer";
// import gsap from "gsap";
// import { useGSAP } from "@gsap/react";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import Footer from "../components/Footer";
// import { TypewriterEffect } from "../components/Finance/text2";
// import { LayoutGridDemo } from "../components/Finance/FiGrid";

// gsap.registerPlugin(ScrollTrigger);

// export default function ERPFinance() {
//   const triggerRef = useRef(null);
//   const headingRef = useRef(null);
//   const subheadingRef = useRef(null);
//   const sectionRef = useRef(null);
//   const heroRef = useRef(null);
//   const buttonRef = useRef(null);

//   const text =
//     "PisoftERP is an application to manage day to day activities of cooperative credit societies. The automated application updates all deposits, withdraws, interest and loan amount with easy to use tools. The application enables an easy storing, updating and retrieving of data.Instant and prompt response is essential for a finance application and PisoftERP meets all these prerequisites by providing synchronization between all the modules added in the application.";

//   function useArrayRef() {
//     const letterRefs = useRef([]);
//     letterRefs.current = [];
//     return [letterRefs, (ref) => ref && letterRefs.current.push(ref)];
//   }

//   const [letterRef, setLetterRef] = useArrayRef();

//   useGSAP(() => {
//     // Headings animation
//     gsap.from(headingRef.current, {
//       y: 100,
//       opacity: 0,
//       duration: 1,
//       ease: "power4.out",
//     });

//     gsap.from(subheadingRef.current, {
//       y: 100,
//       opacity: 0,
//       delay: 0.2,
//       duration: 1,
//       ease: "power4.out",
//     });

//     // HeroParallax animation
//     gsap.from(heroRef.current, {
//       opacity: 0,
//       y: 50,
//       duration: 1.2,
//       ease: "power2.out",
//       scrollTrigger: {
//         trigger: heroRef.current,
//         start: "top bottom",
//       },
//     });

//     // Words animation on scroll
//     gsap.from(letterRef.current, {
//       opacity: 0,
//       y: 30,
//       stagger: 0.05,
//       duration: 1,
//       ease: "power2.out",
//       scrollTrigger: {
//         trigger: triggerRef.current,
//         start: "top 80%",
//         end: "bottom 40%",
//         scrub: 1,
//       },
//     });

//     // Button animation
//     gsap.from(buttonRef.current, {
//       scale: 0.8,
//       opacity: 0,
//       duration: 1,
//       delay: 0.5,
//       scrollTrigger: {
//         trigger: buttonRef.current,
//         start: "top 90%",
//       },
//     });
//   }, []);

//   return (
//     <div>
//       <div className="w-full bg-gradient-to-r from-orange-50 via-orange-100 to-sky-200 flex flex-col py-4 sm:p-6 md:p-8 relative">
//         {/* Navbar */}
//         <div className="z-50 top-8 left-0 md:top-10">
//           <Navbar />
//         </div>

//         {/* Top-right menu */}
//         <div className="fixed top-4 right-4 z-50 flex items-center space-x-4 md:top-8">
//           <Example />
//         </div>

//         {/* HeroParallax Section */}
//         <div className="relative top-20 left-0" ref={heroRef}>
//           <HeroParallax />
//         </div>

//         {/* Headings and Paragraphs */}
//         <div className="flex flex-col md:flex-row justify-between items-start sm:pt-12 md:pt-16 gap-4 sm:gap-6 md:gap-8">
//           <div className="w-full md:w-full">
//             <h1
//               ref={headingRef}
//               className="font-jr text-[8vw] sm:text-[6vw] md:text-[4vw] leading-tight"
//             >
//               FINANCIAL SERVICES MANAGEMENT ERP
//             </h1>
//             <h1
//               ref={subheadingRef}
//               className="font-jr text-[8vw] sm:text-[6vw] md:text-[4vw] text-orange-400 leading-tight mt-[-1vw]"
//             >
//               (FSME)
//             </h1>
//             <div
//               ref={triggerRef}
//               className="mt-4 sm:mt-6 md:mt-8 flex flex-wrap gap-x-2 sm:gap-x-3 md:gap-x-4 max-w-full"
//             >
//               {text.split(" ").map((word, idx) => (
//                 <span
//                   key={idx}
//                   ref={setLetterRef}
//                   className="font-jr text-[3.5vw] sm:text-[2.5vw] md:text-[1.75vw] font-bold text-gray-400"
//                 >
//                   {word}
//                 </span>
//               ))}
//               <div className="left-0 mt-4 sm:mt-8" ref={buttonRef}>
//                 <FIButton />
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Sections */}
//         <section className="w-full px-4 py-16 sm:px-6 lg:px-8 bg-gradient-to-r from-orange-50 via-orange-100 to-sky-200">
//           <div className="max-w-5xl mx-auto flex flex-col items-center text-center space-y-6">
//             <TypewriterEffectSmoothDemo />
//           </div>
//         </section>

//         <section className="w-full px-4 bg-gradient-to-r from-orange-50 via-orange-100 to-sky-200">
//           <LayoutGridDemo />
//         </section>

//         <section className="w-full px-4 py-16 sm:px-6 lg:px-8 bg-gradient-to-r from-orange-50 via-orange-100 to-sky-200">
//           <div className="max-w-5xl mx-auto flex flex-col items-center text-center space-y-6">
//             <TypewriterEffect />
//           </div>
//         </section>

//         <section className="w-full px-4 py-16 sm:px-6 lg:px-8 bg-gradient-to-r from-orange-50 via-orange-100 to-sky-200">
//           <div className="max-w-5xl mx-auto flex flex-col items-center text-center space-y-6">
//             <FollowingPointerDemo />
//           </div>
//         </section>
//       </div>

//       {/* Footer */}
//       <footer className="w-full relative bg-white z-10">
//         <Footer />
//       </footer>
//     </div>
//   );
// }