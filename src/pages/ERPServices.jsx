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
import { NavbarDemo } from '../components/navbar/Navbar2';




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
    <div className="bg-gradient-to-r from-orange-50 via-orange-100 to-sky-200 w-full overflow-x-hidden">
      <ClickSpark
        sparkColor='black'
        sparkSize={20}
        sparkRadius={15}
        sparkCount={8}
        duration={400}
      >

        <div className="fixed left-5 top-2 z-50000 lg:hidden">
          <Navbar />
        </div>
        <div className="fixed top-4 right-4 z-50 max-w-[90%] sm:max-w-none lg:hidden">
          <Example />
        </div>
        <div className="fixed top-0 left-0 w-full z-50 hidden md:block">
          <NavbarDemo />
        </div>


        <div className="absolute top-10 left-10 md:top-4 md:left-40  w-full flex items-center justify-center pl-4 text-center filter drop-shadow-[0_0_8px_rgba(251,153,69,0.7)]">
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
        <div className="pt-20 md:pb-15 sm:pb-5 sm:px-6 md:px-12">
          <div className='flex flex-wrap w-full justify-center items-center text-center'>
            <BlurText
              text="SERVICE PROVIDER'S SYSTEM MANAGEMENT ERP"
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
          <section className="w-full text-center px-4 md:px-8 bg-gradient-to-r from-orange-50 via-orange-100 to-sky-200">
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
        <footer className="w-screen z-10"><Footer /></footer>


      </ClickSpark >
    </div >
  );
}

export default ERPServices;