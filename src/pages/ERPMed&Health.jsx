import React, { useState, useRef } from 'react';
import Navbar from '../components/Navbar';
import { Example } from '../components/Corn';
import Footer from '../components/Footer';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import TextPressure from '../components/TextPressure';
import { TypewriterEffectSmoothDemo } from "../components/Education/Text";
import { FollowingPointerDemo } from "../components/Medical/MedFloatingPointer";
import { TypewriterEffect } from "../components/Finance/text2";
import { LayoutGridDemo } from "../components/Medical/MedGrid";
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
    "PisoftERP build Clinics, Hospital and other business directly connected with medical and healthcare industry. For a doctor or hospital the system manages patient details, visits, medical history. Manage diagnosis and prescription with patient history for sharing precise information for further referral and treatments.";


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
    <div className="bg-gradient-to-r from-orange-50 via-orange-100 to-sky-200 w-full">

      <ClickSpark
        sparkColor='black'
        sparkSize={20}
        sparkRadius={15}
        sparkCount={8}
        duration={400}
      >

        <div className="fixed z-50 top-4 left-0 md:top-12">
          <Navbar />
        </div>
        <div className="fixed top-4 right-4 z-50 max-w-[90%] sm:max-w-none">
          <Example />
        </div>

        {/* Hero: animated TextPressure */}
        <div className="absolute top-10 sm:top-16 md:top-4 lg:left-20 sm:left-10 w-full flex items-center justify-center pl-4 text-center">
          <TextPressure
            text="MHSME"
            flex
            alpha
            stroke
            width
            weight
            textColor="#FB9945"
            strokeColor="#FB9945"
            minFontSize={6}
          />
        </div>

        {/* Hero words */}
        <div className="pt-20 md:pb-15 sm:pb-5 sm:px-6 md:px-12">
          <BlurText
            text="MEDICAL & HEALTHCARE SYSTEM MANAGEMENT ERP "
            className="font-jr text-[6vw] mb-5 sm:text-[5vw] md:text-[4vw] leading-tight text-blue-950 text-center"
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

        {/* <ContainerScroll>
          <img
            ref={imageRef}
            src="/Industries.PNG"
            alt="ESME System Overview"
            className="object-cover w-full h-full rounded-2xl"
          />
        </ContainerScroll> */}


        <div ref={sectionRefs.type1} className="px-4 md:px-8 sm:pt-5 md:pt-20">
          <TypewriterEffectSmoothDemo />
        </div>

        <ContainerScroll>
          <section className="w-full text-center px-4 md:px-8 bg-gradient-to-r from-orange-50 via-orange-100 to-sky-200">
            <LayoutGridDemo />
          </section>
        </ContainerScroll>

        <section className="w-full ">
          <Threads color={[]} />
        </section>

        <div ref={sectionRefs.type2} className="px-4 md:px-8 py-8 md:py-12">
          <TypewriterEffect />
        </div>

        <div ref={sectionRefs.pointer} className="px-4 md:px-8 py-8 md:py-12">
          <FollowingPointerDemo />
        </div>
        <footer className="relative bg-white z-10 pt-8"><Footer /></footer>

      </ClickSpark >
    </div >
  );
}

export default ERPFinance;






// "use client";
// import React, { useRef } from "react";
// import Navbar from "../components/Navbar";
// import { Example } from "../components/Corn";
// import MHButton from "../components/Medical&Healthcare/MhButton";
// import { HeroParallax } from "../components/Finance/FiHeroParallax";
// import { TypewriterEffectSmoothDemo } from "../components/Education/Text";
// import { CardHoverEffectDemo } from "../components/Medical&Healthcare/MHCards";
// import { FollowingPointerDemo } from "../components/Medical&Healthcare/MHFloatingPointer";
// import { TypewriterEffect } from "../components/Finance/text2";
// import gsap from "gsap";
// import { useGSAP } from "@gsap/react";
// import Footer from "../components/Footer";

// export default function ERPFinance() {
//   const triggerRef = useRef(null);
//   const text =
//     "Booking of appointment, managing and maintaining records of visitors with an easy online booking system by patients. Helps laboratories, core facilities, and biotech’s companies providing services to clients or partners to keep track of samples arriving for processing, track status and generate reports. Stock and inventory can be maintained of an organisation for internal usage or sales. Smoother system to search stocks by product and batch information. Has an ability to manage different warehouse and stores for easy management. Can be used to manage vendors and suppliers for indent and dispatches.";

//   function useArrayRef() {
//     const letterRefs = useRef([]);
//     letterRefs.current = [];
//     return [letterRefs, (ref) => ref && letterRefs.current.push(ref)];
//   }

//   const [letterRef, setLetterRef] = useArrayRef();
//   useGSAP(() => {
//     const colorTl = gsap.timeline({
//       scrollTrigger: {
//         trigger: triggerRef.current,
//         start: "top 80%",
//         end: "bottom 40%",
//         scrub: 1,
//         toggleActions: "play none none reverse",
//         scroller: document.body,
//       },
//     });

//     colorTl.to(letterRef.current, {
//       color: "black",
//       stagger: { each: 15, ease: "power1.inOut" },
//       duration: 1,
//     });

//     requestAnimationFrame(() => {
//       ScrollTrigger.refresh();
//     }, 200);
//   }, []);

//   return (
//     <div>
//       <div className="w-full bg-gradient-to-r from-orange-50 via-orange-100 to-sky-200 flex flex-col py-4 sm:p-6 md:p-8 relative">
//         {/* Navbar */}
//         <div className="z-50 top-8 left-0 md:top-10 ">
//           <Navbar />
//         </div>

//         {/* Top-right action */}
//         <div className="fixed top-4 right-4 z-50 flex items-center space-x-4 md:top-8 ">
//           <Example />
//         </div>

//         {/* ✅ HeroParallax section */}
//         <div className="realtive top-20 left-0">
//           <HeroParallax />
//         </div>

//         {/* Hero Section */}
//         <div className="flex flex-col md:flex-row justify-between items-start sm:pt-12 md:pt-16 gap-4 sm:gap-6 md:gap-8">
//           <div className="w-full md:w-full">
//             <h1 className="font-jr text-[8vw] sm:text-[6vw] md:text-[4vw] leading-tight">
//               MEDICAL & HEALTHCARE SYSTEM MANAGEMENT ERP
//             </h1>
//             <h1 className="font-jr text-[8vw] sm:text-[6vw] md:text-[4vw] text-orange-400 leading-tight mt-[-1vw]">
//               (MHSME)
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
//               <div className="left-0 mt-4 sm:mt-8">
//                 <MHButton />
//               </div>
//             </div>
//           </div>
//         </div>
//         <section className="w-full px-4 py-16 sm:px-6 lg:px-8 bg-gradient-to-r from-orange-50 via-orange-100 to-sky-200 ">
//           <div className="max-w-5xl mx-auto flex flex-col items-center text-center space-y-6">
//             <TypewriterEffectSmoothDemo />
//           </div>
//         </section>
//         <section className="w-full px-4 py-16 sm:px-6 lg:px-8 bg-gradient-to-r from-orange-50 via-orange-100 to-sky-200 ">
//           <div className="max-w-5xl mx-auto flex flex-col items-center text-center space-y-6">
//             <CardHoverEffectDemo />
//           </div>
//         </section>
//          <section className="w-full px-4 py-16 sm:px-6 lg:px-8 bg-gradient-to-r from-orange-50 via-orange-100 to-sky-200 ">
//                   <div className="max-w-5xl mx-auto flex flex-col items-center text-center space-y-6">
//                     <TypewriterEffect />
//                   </div>
//                 </section>
//         <section className="w-full px-4 py-16 sm:px-6 lg:px-8 bg-gradient-to-r from-orange-50 via-orange-100 to-sky-200 ">
//           <div className="max-w-5xl mx-auto flex flex-col items-center text-center space-y-6">
//             <FollowingPointerDemo />
//           </div>
//         </section>

//         {/* === Footer === */}

//       </div>
//       <footer className="w-full relative bg-white sm: z-10">
//         <Footer />
//       </footer>
//     </div>
//   );
// }