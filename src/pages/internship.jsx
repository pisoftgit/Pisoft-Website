import React, { useEffect, useRef } from 'react'
import { useState } from 'react'
import gsap from 'gsap'
import { motion } from 'framer-motion'
import ScrollTrigger from 'gsap/ScrollTrigger'
import Navbar from '../components/Navbar'
import { Example } from '../components/Corn'
import HeroText from '../components/Intern/HeroText'
import ParallaxBackground from '../components/Intern/ParallaxBackground'
import BlurText from "../components/BlurText"
import ScrollFloat from '../components/Intern/scrollFloat'
import { CardStack } from '../components/Intern/tabs'
import { IconCloudDemo } from '../components/Intern/Clouddemo'
import { PinContainer } from "../components/Internship/3Dpin";
import Footer from '../components/Footer'
import CountUp from '../components/Intern/counter'
import { TimelineDemo } from '../components/Intern/timelineDemo'
import BackgroundShapes from '../components/Intern/backgound'
import { NavbarDemo } from '../components/navbar/Navbar2'


gsap.registerPlugin(ScrollTrigger)

export default function Internship() {

  const [menuOpen, setMenuOpen] = useState(false)
  const sectionRef = useRef(null)
  const div1Ref = useRef(null)
  const div2Ref = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: div1Ref.current,
        start: "top top",
        end: `+=100%`, // pin for 100% of screen height
        pin: true,
        pinSpacing: false,
        scrub: true,
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const [Technologies, setTechnologies] = useState([]);

  useEffect(() => {
    const fetchTechnologies = async () => {
      try {
        const res = await fetch("https://project.pisofterp.com/pipl/restworld/technologies");
        const data = await res.json();

        const formattedData = data.map((item) => ({
          technologyName: item.technologyName,
          id: item.id,
          description: item.description,
          technologyPic: item.technologyPic
            ? `data:${item.technologyLogoType};base64,${item.technologyPic}`
            : item.tempDp || '/default-tech-icon.png',
        }));


        setTechnologies(formattedData);
      } catch (err) {
        console.error("Failed to fetch technologies:", err);
      }
    };

    fetchTechnologies();
  }, []);

  const [modalOpen, setModalOpen] = useState(false);
  const [modalData, setModalData] = useState(null);

  const handleTechClick = async (techId) => {
    try {
      const response = await fetch(`https://project.pisofterp.com/pipl/restworld/ws-topics/technologies/${techId}`);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json(); // result is already an array

      if (!Array.isArray(result) || result.length === 0) {
        throw new Error("No topics found.");
      }

      const firstTech = result[0]?.technology;

      const normalizedData = {
        technologyName: firstTech?.technologyName || "Unknown",
        description: firstTech?.description || "",
        topics: result.map(topic => ({
          topicTitle: topic.topic,
          subTopics: topic.subTopics ?? [],
        })),
      };

      setModalData(normalizedData);
    } catch (err) {
      console.error("Error fetching technology details:", err);
      setModalData({
        technologyName: "Error",
        description: "Failed to load data. Please try again later.",
        topics: [],
      });
    } finally {
      setModalOpen(true);
    }
  };

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

  const modalTitleRef = useRef(null);
  const modalDescRef = useRef(null)
  const topicRefs = useRef(null)

  const modalRef = useRef(null);
  useEffect(() => {
    if (modalOpen && modalRef.current) {
      gsap.fromTo(
        modalRef.current,
        { opacity: 0, y: 100, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.5,
          ease: 'power3.out',
        }
      );
    }
  }, [modalOpen]);


  useEffect(() => {
    if (modalOpen && modalRef.current) {
      const ctx = gsap.context(() => {
        // Animate modal container
        gsap.fromTo(
          modalRef.current,
          { opacity: 0, y: 100, scale: 0.95 },
          {
            opacity: 1,
            y: 0,
            scale: 1.0,
            duration: 1.0,
            ease: 'power3.out',
          }
        );

        // Animate title
        if (modalTitleRef.current) {
          gsap.fromTo(
            modalTitleRef.current,
            { opacity: 0, y: 30 },
            { opacity: 1, y: 0, duration: 0.6, delay: 0.3, ease: 'power3.out' }
          );
        }

        // Animate description
        if (modalDescRef.current) {
          gsap.fromTo(
            modalDescRef.current,
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, duration: 0.6, delay: 0.4, ease: 'power3.out' }
          );
        }

        // Animate each topic block with stagger
        gsap.fromTo(
          topicRefs.current,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            delay: 0.5,
            stagger: 0.2,
            ease: 'power3.out',
          }
        );
      }, modalRef);

      return () => ctx.revert();
    }
  }, [modalOpen]);

  useEffect(() => {
    if (modalRef.current) {
      const ctx = gsap.context(() => {
        if (modalOpen) {
          // Drawer Entrance Animation
          gsap.fromTo(
            modalRef.current,
            { right: '-100%', opacity: 0.6 },
            { right: '0', opacity: 1, duration: 0.3, ease: 'power3.out' }
          );

          // Title
          if (modalTitleRef.current) {
            gsap.fromTo(
              modalTitleRef.current,
              { y: 20, opacity: 0 },
              { y: 0, opacity: 1, delay: 0.2, duration: 0.3, ease: 'power3.out' }
            );
          }

          // Description
          if (modalDescRef.current) {
            gsap.fromTo(
              modalDescRef.current,
              { y: 20, opacity: 0 },
              { y: 0, opacity: 1, delay: 0.3, duration: 0.3, ease: 'power3.out' }
            );
          }

          // Topics
          if (topicRefs.current?.length) {
            gsap.fromTo(
              topicRefs.current,
              { opacity: 0, y: 15 },
              {
                opacity: 1,
                y: 0,
                duration: 0.6,
                stagger: 0.15,
                delay: 0.5,
                ease: 'power3.out',
              }
            );
          }
        } else {
          // Drawer Exit Animation
          gsap.to(modalRef.current, {
            right: '-100%',
            opacity: 0,
            duration: 0.4,
            ease: 'power2.inOut',
          });
        }
      });

      return () => ctx.revert();
    }
  }, [modalOpen]);

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


      {/* Text Reveal Section */}
      <section className='w-screen flex flex-row flex-wrap justify-start items-start bg-white'>
        <div className="fixed top-0 left-0 w-full z-50 hidden md:block"><NavbarDemo /></div>
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
      <section className="w-full flex flex-col items-start justify-start text-left px-4 sm:px-6 lg:px-12 py-4">
        <div>
          <BlurText
            text="Explore Our Technologies"
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-jr text-orange-500 leading-tight text-left sm:text-center"
            delay={110}
            duration={0.7}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-100px"
          />
          <p className="mt-4 text-sm md:text-lg lg:text-xl text-blue-950 mx-auto sm:px-5">
            In the first few months, you'll immerse yourself in advanced technologies, mastering as per the need of IT industry.
          </p>
        </div>
      </section>


      <section className='w-screen flex flex-row justify-center items-center flex-wrap mt-10'>
        <div
          className={`flex px-5 justify-center items-center w-full transition-all duration-300}`}
        >
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 gap-5">
            {Technologies.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.03, ease: 'easeOut' }}
                viewport={{ once: true }}
                onClick={() => handleTechClick(item.id)}
                whileHover={{ scale: 1.05 }}
                className="group cursor-pointer relative rounded-2xl p-[2px] bg-gradient-to-br from-orange-300 via-yellow-100 to-white hover:from-orange-400 hover:to-white shadow-md hover:shadow-xl transition-all duration-300"
              >
                <div className="bg-white rounded-2xl flex flex-col items-center justify-center w-[6rem] h-[6rem] lg:w-[10rem] lg:h-[10rem] overflow-hidden relative transition-all duration-300 group-hover:ring-2 group-hover:ring-orange-400">
                  <motion.img
                    src={item.technologyPic}
                    // alt={item.technologyName}
                    whileHover={{ scale: 1.15, rotate: 5 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 12 }}
                    className="object-contain h-12 w-12 sm:h-18 sm:w-18 mb-1"
                  />

                  <p className="text-[0.9rem] text-blue-950 font-jSB mt-2 text-center px-1 break-words leading-tight group-hover:text-orange-500 transition-colors duration-200">

                    {item.technologyName}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {modalOpen && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[9998] transition-opacity duration-300"
          onClick={() => setModalOpen(false)}
        />
      )}

      {/* Animated Drawer */}
      <div
        className={`
    fixed top-0 right-0 h-full w-full sm:w-[40%] bg-white z-[9999]
    shadow-xl transform transition-all duration-500 ease-[cubic-bezier(0.25, 1, 0.5, 1)]
    ${modalOpen ? 'pointer-events-auto' : 'pointer-events-none'}
  `}
        ref={modalRef}
      >
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
          <h2 className="text-xl font-bold text-blue-900" ref={modalTitleRef}>
            {modalData?.technologyName || "Technology Details"}
          </h2>
          <button
            onClick={() => setModalOpen(false)}
            className="text-gray-500 hover:text-black transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="overflow-y-auto p-6 h-[calc(100vh-64px)]" ref={modalDescRef}>
          {modalData ? (
            <>
              <div
                className="prose prose-sky font-jl max-w-full mb-6 prose-p:text-blue-950 prose-headings:text-orange-600"
                dangerouslySetInnerHTML={{ __html: modalData.description }}
              />

              <div className="space-y-6" ref={el => (topicRefs.current = el ? Array.from(el.children) : [])}>
                {modalData.topics?.length > 0 ? (
                  modalData.topics.map((topic, index) => (
                    <div
                      key={index}
                      className="bg-orange-50 border border-orange-200 rounded-xl p-4 shadow-sm"
                    >
                      <h3 className="text-lg font-semibold text-orange-700 mb-2">
                        {topic.topicTitle}
                      </h3>
                      <ul className="list-disc list-inside space-y-1 text-blue-900 text-sm">
                        {topic.subTopics?.length > 0 ? (
                          topic.subTopics.map((sub, idx) => (
                            <li key={idx}>{sub.subTopic || sub}</li>
                          ))
                        ) : (
                          <li className="italic text-sky-600">No subtopics available</li>
                        )}
                      </ul>
                    </div>
                  ))
                ) : (
                  <p className="text-sm text-sky-700">No topics found.</p>
                )}
              </div>
            </>
          ) : (
            <div className="text-center text-blue-900">
              <p className="text-lg font-medium">Loading...</p>
            </div>
          )}
        </div>
      </div>

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
