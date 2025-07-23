import React, { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Navbar from '../components/Navbar'
import { Example } from '../components/Corn'
import Footer from '../components/Footer'
import DecryptedText from '../components/Internship/DecryptedText'
import ScrollFloat from '../components/Internship/ScrollDown'
import ScrollVelocity from '../components/Internship/scrollVelocity'
import Orb from '../components/Internship/orb'
import GradientText from '../components/Internship/gradientText'
import BlurText from '../components/BlurText'
import { PinContainer } from "../components/Internship/3Dpin";
import {
  TextRevealCard,
  TextRevealCardDescription,
  TextRevealCardTitle,
} from "../components/Internship/RevealCard";


gsap.registerPlugin(ScrollTrigger);

function Internship() {
  const triggerRef = useRef(null);
  const outerref = useRef(null);
  const svgRef = useRef(null);
  const staticTextRef = useRef(null);
  const vnavRef = useRef(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const text =
    "We are offering an intensive six-month internship program specifically designed for talented students from B.Tech, MCA , BCA, B.Sc (IT),and MBA streams. This program aims to equip you with the coding skills and expertise necessary to excel in the tech industry.";

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

 

  return (
    <div className="bg-white w-full">

      <div className="fixed z-50 top-4 left-0 md:top-12">
        <Navbar />
      </div>
      <div className="fixed top-4 right-4 z-50000 max-w-[90%] sm:max-w-none">
        <Example menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

      </div> 

      <div className='w-full pt-25 h-auto flex flex-row'>
        <div className='w-2/3 h-auto px-4 flex flex-col'>
          <BlurText
            text="HIGH OBJECTIVE PROFESSIONAL EXPERTISE"
            className="md:text-5xl sm:text-lg font-jB text-center leading-tight text-blue-950 px-5"
            delay={110}
            duration={0.7}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-100px"
            textAlign="center"
          />
          <BlurText
            text="( HOPE )"
            className="sm:text-[2.5vw] md:text-[2vw] font-jB text-center leading-tight text-[#F07C22]  px-5"
            delay={110}
            duration={0.7}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-100px"
            textAlign="center"
          />

          <div ref={triggerRef} className="m-5">
            {text.split("").map((word, idx) => (
              <span key={idx} ref={setLetterRef} className="font-jr sm:text-[2.5vw] md:text-[2vw] font-bold text-gray-400">
                {word}
              </span>
            ))}
          </div>
        </div>
        <div className='w-1/3 h-100'>
          <Orb hue={203} hoverIntensity={0.9} rotateOnHover={true}>
            <div className="text-blue-950 text-2xl font-bold ">
              {/* <GradientText
                colors={["#EC390C", "#EC7C0C", "#EC170C", "#ECA90C", "#F80505"]}
                animationSpeed={3}
                showBorder={false}
                className="custom-class md:text-3xl font-jSB text-center sm:text-2xl"
              >
                Our Internship
              </GradientText> */}
              <BlurText
                text="OUR INTERNSHIP"
                className="md:text-3xl font-jSB text-center sm:text-2xl text-blue-950"
                delay={110}
                duration={0.7}
                ease="power3.out"
                splitType="chars"
                from={{ opacity: 0, y: 40 }}
                to={{ opacity: 1, y: 0 }}
                threshold={0.1}
                rootMargin="-100px"
                textAlign="center"
              />
              <GradientText
                colors={["#057FF8", "#0A05F8", "#013FCF", "#0401CF", "#5701CF"]}
                animationSpeed={8}
                showBorder={false}
                className="custom-class md:text-3xl font-jSB text-center sm:text-2xl"
              >
                Program
              </GradientText>
            </div>
          </Orb>
        </div>
      </div>

      {/* <div className='mt-[4rem] w-full text-center font-jrB text-5xl text-shadow-blue-950 shadow-2xl text-blue-950'>
        hello
      </div> */}
      <div className="flex items-center text-center justify-center h-[10rem]">
        <TextRevealCard
          text="OUR COURSES"
          revealText="YOUR SUCCESS"
          className={`text-center`}
        >
        </TextRevealCard>
      </div>


      <div
        className={`flex px-5 justify-center items-center w-full transition-all duration-300 ${menuOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'
          }`}
      >
        <div className=" grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4">
          {cardData.map((item, index) => (
            <PinContainer key={index} title={item.title} description={item.description}>
              <div className="  border-white border-4 rounded-3xl flex flex-col text-slate-100/50 w-[12rem] h-[12rem]">
                <div
                  className="flex-1 w-full rounded-lg bg-cover bg-center"
                  style={{ backgroundImage: `url('${item.image}')` }}
                />
              </div>
            </PinContainer>
          ))}
        </div>
      </div>


      <footer className='w-full'>
        <Footer />
      </footer>
    </div >
  )
}

export default Internship





// "use client";
// import React, { useEffect, useRef, useState } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import MainContent from "../components/Internship/MainContent"

// gsap.registerPlugin(ScrollTrigger);

// export default function DoorRevealPage() {
//   const leftDoor = useRef(null);
//   const rightDoor = useRef(null);
//   const image = useRef(null);
//   const container = useRef(null);
//   const content = useRef(null);

//   const [showContent, setShowContent] = useState(false);
//   const [menuOpen, setMenuOpen] = useState(false);

//   const cardData = [
//     { title: "Course A", description: "Description A", image: "/course-a.jpg" },
//     { title: "Course B", description: "Description B", image: "/course-b.jpg" },
//     // Add more
//   ];

//   useEffect(() => {
//     const tl = gsap.timeline({
//       scrollTrigger: {
//         trigger: container.current,
//         start: "top top",
//         end: "bottom top",
//         scrub: true,
//         pin: true,
//       },
//     });

//     tl.to(leftDoor.current, {
//       rotateY: -90,
//       transformOrigin: "left center",
//       ease: "power2.inOut",
//     })
//       .to(
//         rightDoor.current,
//         {
//           rotateY: 90,
//           transformOrigin: "right center",
//           ease: "power2.inOut",
//         },
//         "<"
//       )
//       .to(
//         image.current,
//         {
//           scale: 0.4,
//           xPercent: 120,
//           ease: "power2.out",
//         },
//         "<"
//       )
//       .add(() => setShowContent(true)) // 👈 show your main content
//       .fromTo(
//         content.current,
//         { opacity: 0 },
//         { opacity: 1, duration: 1 },
//         "<"
//       );
//   }, []);

//   return (
//     <>
//       <div ref={container} className="relative h-screen overflow-hidden bg-black">
//         <div
//           ref={image}
//           className="fixed inset-0 bg-cover bg-center z-10"
//           style={{ backgroundImage: `url("https://source.unsplash.com/random/1920x1080")` }}
//         />

//         <div
//           ref={leftDoor}
//           className="fixed inset-y-0 left-0 w-1/2 bg-gray-900 z-20 origin-left"
//           style={{ transformStyle: "preserve-3d" }}
//         />
//         <div
//           ref={rightDoor}
//           className="fixed inset-y-0 right-0 w-1/2 bg-gray-800 z-20 origin-right"
//           style={{ transformStyle: "preserve-3d" }}
//         />

//         <div
//           ref={content}
//           className="absolute inset-0 z-30 flex items-center justify-center opacity-0"
//         >
//           <h1 className="text-white text-4xl font-bold">Welcome</h1>
//         </div>
//       </div>

//       {showContent && (
//         <MainContent cardData={cardData} menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
//       )}
//     </>
//   );
// }

