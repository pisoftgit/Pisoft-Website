import React, { useEffect, useRef } from 'react'
import { useState } from 'react'
import gsap from 'gsap'
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

  return (
    <main ref={sectionRef} className="relative w-full overflow-clip">
      {/* Navbar */}
      <div className="fixed left-5 top-2 z-500000 lg:hidden"><Navbar /></div>
      <div className="fixed top-4 right-4 z-50 lg:hidden"><Example /></div>


      {/* Layer Container */}
      {/* <div
        ref={div1Ref}
        className="sticky top-0 z-48 h-auto backdrop-blur-md bg-white "
      > */}
      {/* Background */}
      <ParallaxBackground className="backdrop-blur-2xl" />

      {/* Hero Section */}
      <div className="relative z-20 pt-15 md:pt-2 bg-white/20 text-center">
        <HeroText />
      </div>
      {/* </div> */}


      {/* div2 for scroll  includes everything below*/}

      {/* <div ref={div2Ref} className="relative top-0 left-0 w-full z-49 pt-screen bg-white"> */}

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


      <section className='w-screen flex flex-row justify-center items-center flex-wrap mt-7'>
        <div
          className={`flex px-5 justify-center items-center w-full transition-all duration-300 ${menuOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
        >
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
            {Technologies.map((item, index) => (
              <PinContainer
                key={index}
                title={item.technologyName}
                description={item.description}
                onClick={() => handleTechClick(item.id)}
              >
                <div className="border-white border-4 rounded-3xl flex flex-col text-slate-100/50 w-[10rem] h-[10rem] lg:w-[12rem] lg:h-[12rem]">
                  <div
                    className="flex-1 w-full rounded-lg bg-contain bg-no-repeat bg-center"
                    style={{ backgroundImage: `url('${item.technologyPic}')` }}
                    onError={(e) => {
                      e.currentTarget.style.backgroundImage = "url('/default-tech-icon.png')";
                    }}
                  />

                </div>
              </PinContainer>
            ))}
          </div>
        </div>
      </section>

      {modalOpen && (
        <div className="fixed inset-0 z-[9999] bg-black/50 flex items-center justify-center">
          <div className="bg-white rounded-lg p-6 max-w-3xl w-full max-h-[90vh] overflow-y-auto relative shadow-lg">
            {/* Close button */}
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-red-500 text-2xl font-bold"
              onClick={() => setModalOpen(false)}
            >
              &times;
            </button>

            {/* Modal content */}
            {modalData && modalData.technologyName ? (
              <>
                {/* Technology Name */}
                <h2 className="text-2xl font-bold mb-2 text-blue-900">
                  {modalData.technologyName}
                </h2>

                {/* Description */}
                <div
                  className="text-gray-700 mb-6 prose max-w-none"
                  dangerouslySetInnerHTML={{ __html: modalData.description }}
                />

                {/* Topics and Subtopics */}
                {/* Topics and Subtopics */}
                <div className="space-y-4 mt-4">
                  {modalData.topics?.length > 0 ? (
                    modalData.topics.map((topic, index) => (
                      <div
                        key={index}
                        className="bg-gray-50 rounded p-4 border border-gray-200"
                      >
                        <h3 className="text-lg font-semibold text-blue-700 mb-2">
                          {topic.topicTitle}
                        </h3>
                        {topic.subTopics?.length > 0 ? (
                          <ul className="list-disc pl-6 text-gray-800">
                            {topic.subTopics.map((sub, idx) => (
                              <li key={idx} className="mb-1">
                                {sub.subTopic || sub}
                              </li>
                            ))}
                          </ul>
                        ) : (
                          <p className="text-sm text-gray-500 italic">No subtopics available.</p>
                        )}
                      </div>
                    ))
                  ) : (
                    <p className="text-gray-600">No topics available.</p>
                  )}
                </div>

              </>
            ) : (
              <div className="text-center text-gray-700">
                <h2 className="text-xl font-semibold mb-2 text-red-500">Oops!</h2>
                <p>We're unable to load details for this technology at the moment.</p>
              </div>
            )}
          </div>
        </div>
      )}

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
      {/* </div> */}
    </main>
  )
}
