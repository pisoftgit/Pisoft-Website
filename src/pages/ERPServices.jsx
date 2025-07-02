import React, { useState, useRef } from 'react';
import { useEffect } from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import Navbar from '../components/Navbar';
import { Example } from '../components/Corn';
import Footer from '../components/Footer';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import TextPressure from '../components/TextPressure';
import { TypewriterEffectSmoothDemo } from "../components/Education/Text";
import { FollowingPointerDemo } from "../components/Services/SFloatingPoint";
import { TypewriterEffect } from "../components/Finance/text2";
import { LayoutGridDemo } from "../components/Services/SGrid";
import BlurText from '../components/BlurText';
import { ContainerScroll } from '../components/conatinerScroll';
import ClickSpark from '../components/ClickSpark';
import Threads from '../components/threads';




gsap.registerPlugin(ScrollTrigger);

function ERPServices() {
  const [isLoading, setIsLoading] = useState(true);

  const text =
    "An industry wide connected with different business to cater needs for different customer based PisoftERP is designed to manage customer relationship of client database that handles complete information of respective client along with personal and contact details etc.";


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
    gsap.set(textRef.current, { opacity: 1, y: 0 });
  }, []);


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
        <div className="fixed top-4 right-4 z-50000 max-w-[90%] sm:max-w-none">
          <Example />
        </div>

        <div className="absolute top-12 sm:top-16 md:top-4 w-full flex justify-center px-4 text-center filter drop-shadow-[0_0_8px_rgba(251,153,69,0.7)]">
          <TextPressure
            text="SPSME"
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
        <div className="pt-20 md:pb-12 sm:pb-0 sm:px-6 md:px-12">
          <BlurText
            text="SERVICE PROVIDER'S SYSTEM MANAGEMENT ERP"
            className="font-jr font-extrabold text-[6vw] sm:text-[5vw] md:text-[4vw] leading-tight text-blue-950 text-center drop-shadow-md"
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
                className="font-jmed text-[4vw] sm:text-[1vw] md:text-[1.8vw] text-black font-bold transition-transform duration-300 ease-in-out hover:scale-110 hover:text-[#FB9945]"
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
          <section className="w-full text-center px-4 md:px-8 bg-gradient-to-r from-orange-50 via-orange-100 to-sky-200">
            <LayoutGridDemo />
          </section>
        </ContainerScroll>

        <div ref={sectionRefs.type2} className="px-4 md:px-8 ">
          <TypewriterEffect />
        </div>

          
        <section className="md:w-2/3 sm:w-full flex justify-end items-end">
          <Threads color={[0.086, 0.6, 0.941]} />
        </section>
        
        <div ref={sectionRefs.pointer} className="px-4 md:px-8 py-8 md:py-12">
          <FollowingPointerDemo />
        </div>
        <footer className="relative bg-transparent z-10 pt-18"><Footer /></footer>

      </ClickSpark >
    </div >
  );
}

export default ERPServices;


// import React, { useState } from 'react'
// import Navbar from '../components/Navbar'
// import { Example } from '../components/Corn'
// import Footer from '../components/Footer'
// import RollingGallery from '../components/rollinggallery'
// import { useRef } from 'react'
// import { useGSAP } from '@gsap/react'
// import gsap from "gsap";
// import TextPressure from '../components/TextPressure'
// import FIButton from "../components/Finance/FiButton";
// import { TypewriterEffectSmoothDemo } from "../components/Education/Text";
// import { FollowingPointerDemo } from "../components/Finance/FIFloatingPointer";
// import { TypewriterEffect } from "../components/Finance/text2";
// import { LayoutGridDemo } from "../components/Finance/FiGrid";



// function ERPServices() {

//   const [isExampleOpen, setIsExampleOpen] = useState(false);
//   const triggerRef = useRef(null);
//   const text =
//     "An industry wide connected with different business to cater needs for different customer based PisoftERP is designed to manage customer relationship of client database that handles complete information of respective client along with personal and contact details etc.";

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
//     <div className="bg-gradient-to-r from-orange-50 via-orange-100 to-sky-200 w-full flex flex-col">
//       {/* Navbar */}
//       <div className="fixed top-4 left-4 z-50 flex items-center space-x-4 md:top-8">
//         <Navbar />
//       </div>

//       {/* Top-right action */}
//       <div className="fixed top-4 right-4 z-50 flex items-center space-x-4 md:top-8 ">
//         <Example isOpen={isExampleOpen} setIsOpen={setIsExampleOpen} />
//       </div>

//       {/* Hero Section */}
//       <div
//         className={`w-full flex flex-row absolute top-9 flex-wrap justify-center items-center transition-all duration-300 ease-in-out ${isExampleOpen ? 'opacity-0 pointer-events-none h-0 overflow-hidden' : 'opacity-100'
//           }`}
//       >
//         <TextPressure
//           text="SPSME"
//           flex={true}
//           alpha={true}
//           stroke={false}
//           width={true}
//           weight={true}
//           textColor="#FB9945"
//           strokeColor="orange"
//           minFontSize={15}
//         />
//       </div>

//       <div className="bg-gradient-to-r from-orange-50 via-orange-100 to-sky-200 flex flex-col md:flex-row justify-between items-start sm:pt-12 sm:px-12 md:pt-16 gap-4 sm:gap-6 md:gap-8">
//         <div className="w-full md:w-full">
//           <h1 className="font-jr text-[8vw] sm:text-[6vw] md:text-[4vw] leading-tight">
//             SERVICE PROVIDER'S SYSTEM MANAGEMENT ERP
//           </h1>
//           <div
//             ref={triggerRef}
//             className="mt-4 sm:mt-6 md:mt-8 flex flex-wrap gap-x-2 sm:gap-x-3 md:gap-x-4 max-w-full"
//           >
//             {text.split(" ").map((word, idx) => (
//               <span
//                 key={idx}
//                 ref={setLetterRef}
//                 className="font-jr text-[3.5vw] sm:text-[2.5vw] md:text-[1.75vw] font-bold text-gray-400"
//               >
//                 {word}
//               </span>
//             ))}
//           </div>
//         </div>
//       </div>
//       <section className="w-full px-4 py-16 sm:px-6 lg:px-8 bg-gradient-to-r from-orange-50 via-orange-100 to-sky-200 ">
//         <div className="max-w-5xl mx-auto flex flex-col items-center text-center space-y-6">
//           <TypewriterEffectSmoothDemo />
//         </div>
//       </section>
//       <section className="w-full px-4 bg-gradient-to-r from-orange-50 via-orange-100 to-sky-200 ">
//         <LayoutGridDemo />
//       </section>
//       {/* <section className="w-full px-4 py-16 sm:px-6 lg:px-8 bg-gradient-to-r from-orange-50 via-orange-100 to-sky-200 ">
//           <div className="max-w-5xl mx-auto flex flex-col items-center text-center space-y-6">
//             <CardHoverEffectDemo />
//           </div>
//         </section> */}
//       <section className="w-full px-4 py-16 sm:px-6 lg:px-8 bg-gradient-to-r from-orange-50 via-orange-100 to-sky-200 ">
//         <div className="max-w-5xl mx-auto flex flex-col items-center text-center space-y-6">
//           <TypewriterEffect />
//         </div>
//       </section>
//       <section className="w-full px-4 py-16 sm:px-6 lg:px-8 bg-gradient-to-r from-orange-50 via-orange-100 to-sky-200 ">
//         <div className="max-w-5xl mx-auto flex flex-col items-center text-center space-y-6">
//           <FollowingPointerDemo />
//         </div>
//       </section>


//       <footer className="w-full relative bg-white sm: z-10">
//         <Footer />
//       </footer>
//     </div>
//   )
// }

// export default ERPServices


{/* <section className='pt-15 px-5'>
        <PixelTransition
          firstContent={
            <img
              src="/ESME.PNG"
              alt="default pixel transition content"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          }
          secondContent={
            <div
              style={{
                width: "100%",
                height: "100%",
                display: "grid",
                placeItems: "center",
                backgroundColor: "#fff"
              }}
            >
              <p style={{ fontWeight: 900, fontSize: "3rem", color: "#aaa" }}>ESME!</p>
            </div>
          }
          gridSize={12}
          pixelColor='#FB9945'
          animationStepDuration={0.4}
          className="custom-pixel-card"
        />
      </section> */}



