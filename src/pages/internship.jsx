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
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { TimelineDemo } from '../components/Intern/timelineDemo'
import BackgroundShapes from '../components/Intern/backgound'


gsap.registerPlugin(ScrollTrigger)

export default function Internship() {
  const [menuOpen, setMenuOpen] = useState(false);
  const heroRef = useRef(null)
  const hopeRef = useRef(null)
  const techRef = useRef(null)
  const cardsRef = useRef(null)
  const counterRef = useRef(null)
  const benefitRef = useRef(null)
  const iconCloudRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    ScrollTrigger.refresh();
  }, []);

  useEffect(() => {
    const animateSection = (ref, yStart = 50, delay = 0) => {
      if (!ref.current) return;
      gsap.fromTo(ref.current,
        { opacity: 0, y: yStart },
        {
          opacity: 1,
          y: 0,
          delay,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ref.current,
            start: "top 75%",
            toggleActions: "play none none none",
          },
        });
    };

    animateSection(heroRef);
    animateSection(hopeRef, 60, 0.1);
    animateSection(techRef, 60, 0.2);
    animateSection(cardsRef, 60, 0.3);
    animateSection(counterRef, 40, 0.2);
    animateSection(benefitRef, 30, 0.2);
  }, []);

  useEffect(() => {
    const animate = (ref, delay = 0) => {
      if (!ref?.current) return;

      gsap.fromTo(
        ref.current,
        { opacity: 0, y: 100 },
        {
          opacity: 1,
          y: 0,
          delay,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ref.current,
            start: "top 0%",  // adjust this for when animation starts
            toggleActions: "play none none reverse",
          },
        }
      );
    };

    animate(heroRef);
    animate(hopeRef, 0.1);
    animate(techRef, 0.2);
    animate(cardsRef, 0.3);
    animate(counterRef, 0.4);
    animate(benefitRef, 0.5);
  }, []);


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

  const testimonials = [
    {
      quote:
        "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair.",
      name: "Charles Dickens",
      title: "A Tale of Two Cities",
    },
    {
      quote:
        "To be, or not to be, that is the question: Whether 'tis nobler in the mind to suffer The slings and arrows of outrageous fortune, Or to take Arms against a Sea of troubles, And by opposing end them: to die, to sleep.",
      name: "William Shakespeare",
      title: "Hamlet",
    },
    {
      quote: "All that we see or seem is but a dream within a dream.",
      name: "Edgar Allan Poe",
      title: "A Dream Within a Dream",
    },
    {
      quote:
        "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
      name: "Jane Austen",
      title: "Pride and Prejudice",
    },
    {
      quote:
        "Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.",
      name: "Herman Melville",
      title: "Moby-Dick",
    },
  ];


  // const [topCard, setTopCard] = useState(CARDS[0]);
  // const [activeCard, setActiveCard] = useState(CARDS[0]);


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


  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="w-full h-screen flex justify-center items-center bg-white z-50 fixed top-0 left-0">
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
    <main className='w-full relative overflow-x-hidden'>
      <BackgroundShapes />
      {/* navbar */}
      <div className="fixed left-5 top-2 z-50000">
        <Navbar />
      </div>

      {/* Menu Button or Example */}
      <div className="fixed top-4 right-4 z-50000 max-w-[90%] sm:max-w-none">
        <Example menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      </div>

      {/* Background */}
      <ParallaxBackground />

      {/* Hero Section */}
      <div ref={heroRef} className="relative z-20 pt-5 bg-white/20 ">
        <HeroText />
      </div>

      {/* Text Reveal Section */}
      <section ref={hopeRef} className='w-screen flex flex-row flex-wrap justify-around items-center'>
        <div className='w-2/3 pl-4 pr-4'>
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
            ref={revealRef}
            className="relative z-30 mx-auto md:px-10 rounded-xl max-w-screen"
          >
            <div ref={triggerRef} className="text-start px-4">
              {text.split(" ").map((char, idx) => (
                <span
                  key={idx}
                  ref={setLetterRef}
                  className="font-jr sm:text-[2.5vw] mr-1 md:text-[1.7vw] font-medium text-gray-800 inline-block justify-start"
                >
                  {char}
                </span>
              ))}
            </div>
          </div>
        </div>
        <div className='w-1/3'>
          <IconCloudDemo />
        </div>
      </section>

      {/* technologies */}
      <section ref={techRef} className='w-screen text-center flex justify-center items-center flex-col'>
        <div>
          <BlurText
            text="Explore Our Technologies"
            className="text-5xl mt-0 font-jr text-center leading-tight text-orange-500 px-5"
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
          <p className="mt-4 text-xl text-blue-950 px-5 max-w-2xl mx-auto">
            In the first few months, you'll immerse yourself in advanced technologies, mastering as per the need of IT industry.
          </p>
        </div>
      </section>

      <section ref={cardsRef} className='w-screen flex flex-row justify-center items-center flex-wrap mt-7'>

        {/* <div className='w-1/2 flex justify-center items-center'>
            <div className='w-full border-4 border-blue-950 py-10 px-14 rounded-br-4xl rounded-tl-4xl max-w-md text-center'>
              <h2 className="text-3xl font-bold text-blue-950">{activeCard.name}</h2>
              <p className="text-md text-blue-800 italic">{activeCard.designation}</p>
              <p className="mt-4 text-gray-700">{activeCard.content}</p>
            </div>
        </div>

        <div className='w-1/2 h-[30rem] flex justify-center items-center'>
          <CardStack items={CARDS} onCardChange={setActiveCard} />
        </div> */}

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
      </section>

{/* benefits */}
      <section className='w-screen'>
        <TimelineDemo />
      </section>


      {/* counters */}
      <div ref={counterRef} className="w-full flex flex-wrap justify-center items-center gap-16 py-16 bg-gray-900 text-white">
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
