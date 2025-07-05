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
  const [menuOpen, setMenuOpen] = useState(false);

  const cardData = [
    {
      title: "PYTHON",
      description: "Customizable Tailwind CSS and Framer Motion Components.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBBlpw_w1NCT1Azn47tJS9utJeXY4aL5eOLgppTYXE2JbWjjrdKLh0FgEjxdmfbeiVYE8&usqp=CAU",
    },
    {
      title: "JAVA",
      description:
        "Build dynamic web interfaces and improve frontend interactivity.",
      image:
        "https://www.infoworld.com/wp-content/uploads/2024/06/java_binary_code_gears_programming_coding_development_by_bluebay2014_gettyimages-1040871468_2400x1600-100795798-orig.jpg?quality=50&strip=all",
    },
    {
      title: "PHP",
      description: "Dive into algorithms and real-world datasets for AI development.",
      image:
        "https://images.unsplash.com/photo-1599507593362-50fa53ed1b40?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGhwfGVufDB8fDB8fHww",
    },
    {
      title: "AI/ML",
      description: "Master system-level programming with a powerful language.",
      image:
        "https://plus.unsplash.com/premium_photo-1683121710572-7723bd2e235d?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YXJ0aWZpY2lhbCUyMGludGVsbGlnZW5jZXxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      title: "MEAN",
      description: "Master system-level programming with a powerful language.",
      image:
        "https://www.mindinventory.com/blog/wp-content/uploads/2023/02/advantages-of-choosing-MEAN-stack-for-web-development-project.webp",
    },
    {
      title: "MERN",
      description: "Master system-level programming with a powerful language.",
      image:
        "https://media.licdn.com/dms/image/v2/D4D12AQFy-IMQFqXBng/article-cover_image-shrink_720_1280/B4DZW4ph79HwAI-/0/1742559650403?e=2147483647&v=beta&t=TfeCia-BE6jf3HLNMe-N6FZFGMm1UTghh1qo-DWVsxE",
    },
    {
      title: "DATA SCIENCE",
      description: "Master system-level programming with a powerful language.",
      image:
        "https://www.gyansetu.in/wp-content/uploads/2024/02/FUqHEVVUsAAbZB0-1024x580-1.jpg",
    },
    {
      title: "ANDROID DEVELOPMENT",
      description: "Master system-level programming with a powerful language.",
      image:
        "https://img.freepik.com/free-vector/app-development-banner_33099-1720.jpg?semt=ais_hybrid&w=740",
    },
    {
      title: "CLOUD COMPUTING",
      description: "Master system-level programming with a powerful language.",
      image:
        "https://plus.unsplash.com/premium_photo-1733306493254-52b143296396?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y2xvdWQlMjBjb21wdXRpbmd8ZW58MHx8MHx8fDA%3D",
    },
    {
      title: "CYBER SECURITY",
      description: "Master system-level programming with a powerful language.",
      image:
        "https://t4.ftcdn.net/jpg/02/45/63/69/360_F_245636933_kY23ohGptK5t6n8wGSXIgLgVXWeHJRct.jpg",
    },
    {
      title: "NETWORKING",
      description: "Master system-level programming with a powerful language.",
      image:
        "https://images.stockcake.com/public/7/a/a/7aab373d-dbc6-44c3-b6cf-95bc96c9c4ed_large/digital-connectivity-mesh-stockcake.jpg",
    },
    {
      title: "FULL STACK",
      description: "Master system-level programming with a powerful language.",
      image:
        "https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZnVsbCUyMHN0YWNrfGVufDB8fDB8fHww",
    },
  ];

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
    <main className='w-full relative'>
      <BackgroundShapes />
      {/* navbar */}
      <div className="fixed left-5 top-2 z-50000 lg:hidden">
        <Navbar />
      </div>
      <div className="fixed top-4 right-4 z-50 max-w-[90%] sm:max-w-none lg:hidden">
        <Example />
      </div>
      <div className="fixed top-0 left-0 w-full z-50 hidden md:block">
        <NavbarDemo />
      </div>

      {/* Background */}
      <ParallaxBackground />

      {/* Hero Section */}
      <div className="relative z-20 pt-5 bg-white/20 ">
        <HeroText />
      </div>

      {/* Text Reveal Section */}
      <section className='w-screen flex flex-row flex-wrap justify-start items-start'>
        <div className='lg:w-2/3 pl-4 pr-4 w-full'>
          <ScrollFloat
            animationDuration={1}
            ease='back.inOut(2)'
            scrollStart='center bottom+=50%'
            scrollEnd='bottom bottom-=40%'
            stagger={0.03}
            className="md:text-5xl sm:text-xl text-center leading-tight font-jr justify-center items-center text-blue-950"
          >
            HIGH OBJECTIVE PROFESSIONAL
          </ScrollFloat>
          <ScrollFloat
            animationDuration={1}
            ease='back.inOut(2)'
            scrollStart='center bottom+=50%'
            scrollEnd='bottom bottom-=40%'
            stagger={0.03}
            className="md:text-5xl sm:text-xl text-start leading-tight font-jr justify-center items-center text-blue-950"
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
                  className="font-jr [text-align:justify] sm:text-[2.5vw] mr-1 md:text-[1.7vw] font-medium text-gray-800 inline-block justify-start"
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
      <section className='w-screen text-center flex justify-start items-start flex-col lg:pl-12 pl-4'>
        <div>
          <BlurText
            text="Explore Our Technologies"
            className="md:text-5xl sm:text-xl mt-0 font-jr text-center leading-tight text-orange-500 px-5"
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
          <p className="mt-4 sm:text-[2.5vw] md:text-[1.7vw] text-blue-950 px-5 mx-auto">
            In the first few months, you'll immerse yourself in advanced technologies, mastering as per the need of IT industry.
          </p>
        </div>
      </section>

      <section className='w-screen flex flex-row justify-center items-center flex-wrap mt-7'>

        <div
          className={`flex px-5 justify-center items-center w-full transition-all duration-300 ${menuOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'
            }`}
        >
          <div className=" grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
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
      </section>

      {/* benefits */}
      <section className='w-screen'>
        <TimelineDemo />
      </section>


      {/* counters */}
      <div className="w-full flex flex-wrap justify-center items-center gap-16 py-16 bg-gray-900 text-white">
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
