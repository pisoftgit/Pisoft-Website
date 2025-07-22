import React, { useEffect, useRef } from 'react'
import { useState } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import Navbar from '../components/Navbar'
import { Example } from '../components/Corn'
import HeroText from '../components/Intern/HeroText'
import ParallaxBackground from '../components/Intern/ParallaxBackground'
import ScrollFloat from '../components/Intern/scrollFloat'
import { IconCloudDemo } from '../components/Intern/Clouddemo'
import Footer from '../components/Footer'
import CountUp from '../components/Intern/counter'
import { TimelineDemo } from '../components/Intern/timelineDemo'
import { NavbarDemo } from '../components/navbar/Navbar2'
import Technology from '../components/Intern/Technology'
import { motion, AnimatePresence } from "framer-motion";
import AuthFloatingButtons from '../components/AuthFloatingButtons'


gsap.registerPlugin(ScrollTrigger)

export default function Internship() {

  const [menuOpen, setMenuOpen] = useState(false)
  const sectionRef = useRef(null)
  const div1Ref = useRef(null)
  const div2Ref = useRef(null)
  const revealRef = useRef(null)
  const triggerRef = useRef(null)
  const [letterRef, setLetterRef] = useArrayRef()

  const text = "We are offering an intensive six-month internship program specifically designed for talented students from B.Tech, MCA, BCA, B.Sc (IT), and MBA streams. This program aims to equip you with the coding skills and expertise necessary to excel in the tech industry."

  function useArrayRef() {
    const letterRefs = useRef([])
    letterRefs.current = []
    return [letterRefs, (ref) => ref && letterRefs.current.push(ref)]
  }

  useEffect(() => {
    gsap.fromTo(
      revealRef.current,
      { opacity: 0, y: 60 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: revealRef.current,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      }
    )

    gsap.to(letterRef.current, {
      color: 'black',
      scrollTrigger: {
        trigger: triggerRef.current,
        start: 'top 80%',
        end: 'bottom 40%',
        scrub: 1,
        toggleActions: 'play none none reverse',
      },
      stagger: { each: 0.01 },
      duration: 1,
    })
  }, [])

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
    <main className={`relative w-full overflow-clip`}>

      {/* Navbar */}
      <div className="fixed left-5 top-2 z-500000 lg:hidden"><Navbar /></div>
      <div className="fixed top-4 right-4 z-50 lg:hidden"><Example /></div>

      {/* Background */}
      <ParallaxBackground className={`backdrop-blur-2xl`} />

      {/* Hero Section */}
      <div className={`relative z-20 pt-15 md:pt-2 bg-white/20 text-center`}>
        <HeroText />
      </div>

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

      {/* Text Reveal Section */}
      <section className='w-screen flex flex-row flex-wrap justify-start items-start bg-white'>
        <div className='lg:w-2/3 pl-4 pr-4 w-full mt-15'>
          <ScrollFloat
            animationDuration={1}
            ease="back.inOut(2)"
            scrollStart="center bottom+=50%"
            scrollEnd="bottom bottom-=40%"
            stagger={0.03}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-jr text-blue-950 leading-tight text-left sm:text-center"
          >
            HIGH OBJECTIVE PROFESSIONAL
          </ScrollFloat>
          <ScrollFloat
            animationDuration={1}
            ease="back.inOut(2)"
            scrollStart="center bottom+=50%"
            scrollEnd="bottom bottom-=40%"
            stagger={0.03}
            className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-jr text-blue-950 text-start sm:text-center mb-6"
          >
            EXPERTISE (HOPE)
          </ScrollFloat>

          <div
            className="relative [text-align:justify] z-30 mx-auto md:px-10 rounded-xl max-w-screen sm:mt-5"
          >
            <div ref={triggerRef} className="text-start px-4">
              {text.split(" ").map((char, idx) => (
                <span
                  key={idx}
                  ref={setLetterRef}
                  className="font-jr [text-align:justify] sm:text-[2.5vw] mr-1 md:text-[1.3vw] font-medium text-black inline-block justify-start"
                >
                  {char}
                </span>
              ))}
            </div>
          </div>
        </div>
        <div className='lg:w-1/3 hidden lg:block'>
          <IconCloudDemo />
        </div>
      </section>

      {/* technologies */}
      <section className='overflow-clip'>
        <Technology />
      </section>

      {/* benefits */}
      <section className='w-screen'>
        <TimelineDemo />
      </section>


      {/* counters */}
      <div className="w-full flex flex-wrap justify-center items-center gap-16 py-16 text-blue-950">
        {/* Counter 1 */}
        <div className="flex flex-col items-center">
          <CountUp
            from={0}
            to={3400}
            separator=","
            direction="up"
            duration={1}
            className="text-6xl font-extrabold text-orange-400"
          />
          <p className="mt-4 text-center text-lg sm:text-xl font-medium">
            Above No. of Students Trained
          </p>
        </div>

        {/* Counter 2 */}
        <div className="flex flex-col items-center">
          <CountUp
            from={0}
            to={225}
            separator=","
            direction="up"
            duration={1}
            className="text-6xl font-extrabold text-orange-400"
          />
          <p className="mt-4 text-center text-lg sm:text-xl font-medium">
            Above Placements Till Date
          </p>
        </div>

        {/* Counter 3 */}
        <div className="flex flex-col items-center">
          <CountUp
            from={0}
            to={84}
            separator=","
            direction="up"
            duration={1}
            className="text-6xl font-extrabold text-orange-400"
          />
          <p className="mt-4 text-center text-lg sm:text-xl font-medium">
            Corporate Tie Ups
          </p>
        </div>

        {/* Counter 4 */}
        <div className="flex flex-col items-center">
          <CountUp
            from={0}
            to={254}
            separator=","
            direction="up"
            duration={1}
            className="text-6xl font-extrabold text-orange-400"
          />
          <p className="mt-4 text-center text-lg sm:text-xl font-medium">
            Academic Link Ups
          </p>
        </div>
      </div>

      {/* footer */}
      <footer className='w-full'>
        <Footer />
      </footer>
    </main>
  )
}
