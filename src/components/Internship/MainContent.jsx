// "use client";
// import React, { useRef, useEffect, useState } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import Internship from "../../pages/internship";
// import Navbar from "../Navbar";
// import { Example } from "../Corn";

// gsap.registerPlugin(ScrollTrigger);

// export default function CinematicDoorIntro() {
//   const containerRef = useRef(null);
//   const leftDoor = useRef(null);
//   const rightDoor = useRef(null);
//   const overlayText = useRef(null);
//   const internshipRef = useRef(null);

//   const [showInternship, setShowInternship] = useState(false);

//   useEffect(() => {
//     const tl = gsap.timeline({
//       scrollTrigger: {
//         trigger: containerRef.current,
//         start: "top top",
//         end: "+=300%", // enough scroll space for 3 steps
//         scrub: true,
//         pin: true,
//         anticipatePin: 1,
//       },
//     });

//     // Step 1: Doors open and fade out fully
//     tl.to(
//       leftDoor.current,
//       {
//         rotateY: -110,
//         transformOrigin: "left center",
//         ease: "power4.inOut",
//         boxShadow: "0 0 90px rgba(255, 69, 0, 0.9)",
//         backgroundColor: "#FF4500",
//         duration: 1,
//         opacity: 1,
//       },
//       0
//     )
//       .to(
//         rightDoor.current,
//         {
//           rotateY: 110,
//           transformOrigin: "right center",
//           ease: "power4.inOut",
//           boxShadow: "0 0 90px rgba(0, 104, 183, 0.9)",
//           backgroundColor: "#0068B7",
//           duration: 1,
//           opacity: 1,
//         },
//         "<"
//       )
//       .to(
//         [leftDoor.current, rightDoor.current],
//         {
//           opacity: 0,
//           duration: 0.5,
//           ease: "power1.out",
//         },
//         "+=0.3"
//       )
//       // Step 2: Welcome text pops in after doors open
//       .to(
//         overlayText.current,
//         {
//           opacity: 1,
//           scale: 1,
//           duration: 0.6,
//           ease: "back.out(1.7)",
//         },
//         ">+0.3"
//       )
//       // Step 3: After welcome text, fade out welcome and show internship content
//       .to(
//         overlayText.current,
//         {
//           opacity: 0,
//           scale: 0.8,
//           duration: 0.5,
//           ease: "power2.inOut",
//           delay: 1, // keep welcome visible for a bit before fading
//         },
//         ">+0.7"
//       )
//       .add(() => setShowInternship(true));
//   }, []);

//   useEffect(() => {
//     if (showInternship) {
//       gsap.fromTo(
//         internshipRef.current,
//         { opacity: 0, y: 40 },
//         { opacity: 1, y: 0, duration: 1, ease: "power2.out", delay: 0.3 }
//       );
//     }
//   }, [showInternship]);

//   return (
//     <div className="relative w-full min-h-screen bg-gradient-to-r from-orange-50 via-orange-100 to-sky-200">
//       {/* Navbar and floating example */}
//       <div className="fixed top-4 left-4 z-50">
//         <Navbar />
//       </div>
//       <div className="fixed top-4 right-4 z-50">
//         <Example />
//       </div>

//       <div
//         ref={containerRef}
//         className="relative h-screen w-full overflow-hidden"
//       >
//         {/* Welcome Overlay Text */}
//         <div
//           ref={overlayText}
//           className="absolute inset-0 flex flex-col items-center justify-center z-30 text-center space-y-6 pointer-events-none opacity-0 scale-90"
//         >
//           <h1 className="text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-yellow-400 to-blue-500 drop-shadow-lg tracking-wide">
//             Welcome to the Internship Program
//           </h1>
//           <p className="text-lg md:text-xl text-blue-900 font-semibold drop-shadow-md">
//             Learn. Build. Thrive.
//           </p>
//         </div>

//         {/* Doors */}
//         <div
//           ref={leftDoor}
//           className="fixed bg-white top-0 left-0 w-1/2 h-full z-40 origin-left transform shadow-2xl backdrop-blur-lg "
//         />
//         <div
//           ref={rightDoor}
//           className="fixed bg-white top-0 right-0 w-1/2 h-full z-40 origin-right transform shadow-2xl backdrop-blur-lg "
//         />
//       </div>

//       {/* Internship Content */}
//       <div
//         ref={internshipRef}
//         className={`transition-opacity duration-700 ease-in-out ${
//           showInternship ? "opacity-100" : "opacity-0"
//         }`}
//       >
//         <Internship />
//       </div>
//     </div>
//   );
// }




"use client";
import React, { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navbar from "../Navbar";
import Internship from "../../pages/internship";
import { Example } from "../Corn";

gsap.registerPlugin(ScrollTrigger);

export default function CinematicIntro() {
  const outerref = useRef(null);
  const svgRef = useRef(null);
  const staticTextRef = useRef(null);
  const internshipContainer = useRef(null);
  const [showInternship, setShowInternship] = useState(false);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: outerref.current,
        start: "top top",
        end: "+=100%",
        scrub: 1,
        pin: true,
      },
    });

    tl.fromTo(
      svgRef.current,
      { scale: 1, opacity: 1 },
      {
        scale: 18,
        opacity: 0,
        ease: "power2.inOut",
        transformOrigin: "center center",
        duration: 1,
      }
    )
      .to(
        staticTextRef.current,
        {
          opacity: 1.5,
          ease: "none",
        },
        0
      )
      .add(() => setShowInternship(true));
  }, []);

  useEffect(() => {
    if (showInternship) {
      gsap.fromTo(
        internshipContainer.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
      );
    }
  }, [showInternship]);

  return (
    <div className="relative w-full bg-blue-950">
      {/* Navbar */}
      <div className="fixed top-4 left-4 z-50">
        <Navbar />
      </div>

<div className="fixed top-4 right-4 z-50"><Example /></div>
      {/* Cinematic Intro Section */}
      <div ref={outerref} className="relative h-screen w-full overflow-hidden">
        {/* Background Video */}
        <video
          className="absolute inset-0 w-full h-full object-cover z-[-1]"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/videos/your-video.mp4" type="video/mp4" />
        </video>

        {/* SVG Mask */}
        <svg
          ref={svgRef}
          className="absolute inset-0 w-full h-full z-10"
          preserveAspectRatio="xMidYMid meet"
        >
          <defs>
            <mask id="text-mask">
              <rect width="100%" height="100%" fill="white" />
              <text
                x="50%"
                y="50%"
                textAnchor="middle"
                dominantBaseline="middle"
                fill="black"
                className="font-bebas"
                style={{ fontSize: "25vw", fontWeight: "bold" }}
              >
                Internship
              </text>
            </mask>
          </defs>
          <rect width="100%" height="100%" fill="white" mask="url(#text-mask)" />
        </svg>

        {/* Overlay Text */}
        {/* <div
          ref={staticTextRef}
          className="absolute inset-0 flex items-center justify-center text-white text-3xl md:text-5xl font-bold z-20 pointer-events-none"
        >
          Welcome to Pisoft Informatics
        </div> */}
      </div>

      {/* Main Content Section */}
      <div
        ref={internshipContainer}
        id="internship-content"
        className={`transition-opacity duration-700 ease-in-out ${
          showInternship ? "opacity-100" : "opacity-0"
        }`}
      >
        <Internship />
      </div>
    </div>
  );
}
