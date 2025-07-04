"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { AppleCardsCarouselDemo } from "../components/Services/PhotoCarousel";
import { LayoutGridDemo } from "../components/Finance/FiGrid";
import Navbar from "../components/Navbar";
import { Example } from "../components/Corn";
import SButton from "../components/Services/SButton";
import { TypewriterEffect } from "../components/Finance/text2";
import { TypewriterEffectSmoothDemo } from "../components/Education/Text";
// import { CardHoverEffectDemo } from "../components/Services/SCrads";
import { FollowingPointerDemo } from "../components/Services/SFloatingPoint";
// import App from "../components/carousel";
// import BlurText from "../components/BlurText";
import { HeroScrollDemo } from "../components/Services/HeroScroll";
import Footer from "../components/Footer";
// import { Carousel } from "../components/Services/carousel";
// import { CarouselDemo } from "../components/Services/Scarousel";
// import ScrollT from "../components/Page";

gsap.registerPlugin(ScrollTrigger);

export default function Services() {
  const servicesRef = useRef(null);
  const triggerRef = useRef(null);

  const text =
    "One can easily search desired information using various available filters for easy reporting. Create services and packages for easy management and allotment for different services offered by a business and maintain usage information by the customers. A full appointment management system is integrated to provide client services. Billing can be made for different services with taxation.";

  function useArrayRef() {
    const letterRefs = useRef([]);
    letterRefs.current = [];
    return [letterRefs, (ref) => ref && letterRefs.current.push(ref)];
  }

  const [letterRef, setLetterRef] = useArrayRef();

  useGSAP(() => {
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

  return (
    <div className="bg-gradient-to-r from-orange-50 via-orange-100 to-sky-200">
      {/* Navbar */}
      <div className="fixed left-5 top-2 z-50000">
        <Navbar />
      </div>

      {/* Top-right Floating Actions */}
      <div className="fixed top-4 right-4 z-50 flex items-center space-x-4 md:top-8">
        <Example />
      </div>

      <div>
      </div>

      {/* <div className="w-full">
          <App />
        </div> */}
      {/* <div>
          <CarouselDemo />
        </div> */}

      {/* <div>
        <AppleCardsCarouselDemo />
      </div> */}
      {/* <section className="mt-8 sm:mt-10 md:mt-12 px-4 sm:px-6 md:px-8">
        <ScrollT />
      </section> */}

      <div>
        < HeroScrollDemo />
      </div>

      {/* Hero Section */}
      <div className="flex flex-col md:flex-row justify-between items-start pt-8 sm:pt-12 md:pt-16 gap-4 sm:gap-6 md:gap-8">
        <div className="m-4 w-full">
          <h1 className="font-jB text-[8vw] sm:text-[6vw] md:text-[4vw] leading-tight">
            Turning Code into
          </h1>
          <h1 className="font-jB text-[8vw] sm:text-[6vw] md:text-[4vw] text-orange-400 leading-tight mt-[-1vw]">
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
              <SButton />
            </div>
          </div>
        </div>
      </div>

      {/* Typewriter Section */}
      <section className="w-full px-4 py-16 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto flex flex-col items-center text-center space-y-6">
          <TypewriterEffectSmoothDemo />
        </div>
      </section>

      {/* Cards Section */}
      {/* <section className="w-full px-4 py-16 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto flex flex-col items-center text-center space-y-6">
          <CardHoverEffectDemo />
        </div>
      </section> */}

      <section className="w-full px-7 bg-gradient-to-r from-orange-50 via-orange-100 to-sky-200 ">
        <LayoutGridDemo />
      </section>
      {/* Second Typewriter Section */}
      <section className="w-full px-4 py-16 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto flex flex-col items-center text-center space-y-6">
          <TypewriterEffect />
        </div>
      </section>

      {/* Floating Pointer Section */}
      <section className="w-full px-4 py-16 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto flex flex-col items-center text-center space-y-6">
          <FollowingPointerDemo />
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full relative bg-white z-10">
        <Footer />
      </footer>
    </div>
  );
}




// "use client";

// import React, { useRef } from "react";
// import gsap from "gsap";
// import { useGSAP } from "@gsap/react";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import Navbar from "../components/Navbar";
// import { Example } from "../components/Corn";
// import SButton from "../components/Services/SButton";
// import { TypewriterEffect } from "../components/Finance/text2";
// import { TypewriterEffectSmoothDemo } from "../components/Education/Text";
// import { FollowingPointerDemo } from "../components/Services/SFloatingPoint";
// import Footer from "../components/Footer";
// import { HeroScrollDemo } from "../components/Services/HeroScroll";
// import { LayoutGridDemo } from "../components/Finance/FiGrid";
// import { ImagesSliderDemo } from "../components/Services/slider";

// gsap.registerPlugin(ScrollTrigger);

// export default function Services() {
//   const triggerRef = useRef(null);
//   const [letterRefs, setLetterRefs] = useArrayRef();

//   const text =
//     "One can easily search desired information using various available filters for easy reporting. Create services and packages for easy management and allotment for different services offered by a business and maintain usage information by the customers. A full appointment management system is integrated to provide client services. Billing can be made for different services with taxation.";

//   function useArrayRef() {
//     const refs = useRef([]);
//     refs.current = [];
//     return [refs, (el) => el && refs.current.push(el)];
//   }

//   useGSAP(() => {
//     gsap.from(".hero-title", {
//       opacity: 0,
//       y: 50,
//       duration: 1.2,
//       ease: "power2.out",
//       stagger: 0.2,
//     });

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

//     colorTl.fromTo(
//       letterRefs.current,
//       { opacity: 0.3, y: 15 },
//       {
//         opacity: 1,
//         y: 0,
//         color: "black",
//         stagger: 0.05,
//         ease: "power2.out",
//       }
//     );

//     gsap.utils.toArray(".fade-section").forEach((section) => {
//       gsap.from(section, {
//         opacity: 0,
//         y: 50,
//         duration: 1,
//         scrollTrigger: {
//           trigger: section,
//           start: "top 85%",
//           toggleActions: "play none none reverse",
//         },
//       });
//     });

//     ScrollTrigger.refresh();
//   }, []);

//   return (
//     <div className="bg-gradient-to-r from-orange-50 via-orange-100 to-sky-200 min-h-screen overflow-x-hidden">
     
      
//       <section>
//         <ImagesSliderDemo />
//       </section>
//  {/* Navbar */}
//       <div className="fixed top-4 left-4 z-50 flex items-center space-x-4 md:top-8 animate-fade-in-up">
//         <Navbar />
//       </div>

//       {/* Floating Actions */}
//       <div className="fixed top-4 right-4 z-50 flex items-center space-x-4 md:top-8 animate-fade-in-up">
//         <Example />
//       </div>
//       {/* Hero Section */}
//       <div className="px-6 sm:px-10 md:px-16">
//         {/* <HeroScrollDemo /> */}
//         <div className="flex flex-col md:flex-row justify-between items-start">
//           <div className="w-full">
//             <h1 className="mt-5 hero-title font-jB text-[8vw] sm:text-[6vw] md:text-[4vw] leading-tight">
//               Turning Code into
//             </h1>
//             <h1 className="hero-title font-jB text-[8vw] sm:text-[6vw] md:text-[4vw] text-orange-400 leading-tight -mt-2">
//               Impact.
//             </h1>

//             <div
//               ref={triggerRef}
//               className="mt-6 flex flex-wrap gap-x-3 max-w-full"
//             >
//               {text.split(" ").map((word, idx) => (
//                 <span
//                   key={idx}
//                   ref={setLetterRefs}
//                   className="font-jr text-[3.5vw] sm:text-[2.5vw] md:text-[1.75vw] font-bold text-gray-400 transition-all"
//                 >
//                   {word}
//                 </span>
//               ))}
//               <div className="mt-6">
//                 <SButton />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Typewriter */}
//       <section className="fade-section w-full px-4 py-20 sm:px-6 lg:px-8">
//         <div className="max-w-5xl mx-auto text-center space-y-6">
//           <TypewriterEffectSmoothDemo />
//         </div>
//       </section>

//       {/* Layout Grid */}
//       <section className="fade-section w-full px-7 py-16 bg-gradient-to-r from-orange-50 via-orange-100 to-sky-200">
//         <LayoutGridDemo />
//       </section>

//       {/* Second Typewriter */}
//       <section className="fade-section w-full px-4 py-20 sm:px-6 lg:px-8">
//         <div className="max-w-5xl mx-auto text-center space-y-6">
//           <TypewriterEffect />
//         </div>
//       </section>

//       {/* Floating Pointer */}
//       <section className="fade-section w-full px-4 py-20 sm:px-6 lg:px-8">
//         <div className="max-w-5xl mx-auto text-center space-y-6">
//           <FollowingPointerDemo />
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="w-full relative bg-white z-10">
//         <Footer />
//       </footer>
//     </div>
//   );
// }
