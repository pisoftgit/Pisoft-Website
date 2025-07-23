
import React from "react";
import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import BloomrStyleCards from "./BloomrStyleCard";
import vid1 from "../assets/erp3.mp4";
import vid2 from "../assets/softvid.mp4";
import vid3 from "../assets/web.mp4";
import vid4 from "../assets/mobile.mp4";
import vid5 from "../assets/DM.mp4";
import vid6 from "../assets/TC.mp4";
import BlurText from "./BlurText";

const Horizontal = () => {
  return (
    <div className="w-full">
      <div className="flex justify-center mb-4 sm:mb-6">
        <BlurText
          text="First impressions matter more than ever"
          delay={150}
          animateBy="words"
          direction="top"
          className="font-jl text-base sm:text-lg md:text-2xl font-semibold text-black tracking-wider text-center px-4"
        />
      </div>
      <div className="w-full">
        <div className="flex flex-col items-center justify-center mb-4 sm:mb-6">
          <BlurText
            text="Invest in good Solutions, with"
            delay={100}
            animateBy="words"
            direction="top"
            className="font-jSB text-[20px] mb-1 sm:text-3xl md:text-5xl font-semibold text-black tracking-wider text-center px-4"
          />
          <BlurText
            text="Our Pisoft Dynamic"
            delay={100}
            animateBy="words"
            direction="top"
            className="font-jSB text-[22px] sm:text-3xl md:text-5xl font-semibold text-black tracking-wider text-center px-4"
          />
          <BlurText
            text="Services"
            delay={100}
            animateBy="words"
            direction="top"
            className="font-jSB text-2xl sm:text-3xl md:text-5xl font-semibold text-[#F07C22]  tracking-wider text-center px-4"
          />
        </div>
        <HorizontalScrollCarousel />
      </div>
    </div>
  );
};

const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-66%"]);

  return (
    <div
      ref={targetRef}
      style={{
        backgroundImage: `url('/services9.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
     className="relative mb-8 sm:mb-12 md:mb-16 h-[140vh] sm:h-[160vh] md:h-[170vh] w-full"

    >
      <div className="sticky top-0 flex h-screen items-center overflow-hidden w-full">
        <motion.div
          style={{ x }}
          transition={{ type: "spring", stiffness: 50, damping: 20 }}
          className="flex gap-4 sm:gap-6 md:gap-8 lg:gap-12 px-4"
        >
          {cards.map((card) => (
            <div
              key={card.id}
              className="
        min-w-[90vw] 
        sm:min-w-[75vw] 
        md:min-w-[60vw] 
        lg:min-w-[45vw] 
        xl:min-w-[45vw] 
        max-w-[1200px] 
        mr-4 sm:mr-6
        max-h-[95vh] overflow-hidden"
            >
              <BloomrStyleCards {...card} />
            </div>
          ))}
        </motion.div>

      </div>
    </div>
  );
};

export default Horizontal;

const cards = [
  {
    id: 1,
    subtitle: "ERP Solutions",
    title: "Your website will become your best sales tool",
    description:
      "We offer low cost ERP solutions to our clients in Education, Real Estate, Automobile and Transportation, making their job easy and highly managed",
    videoSrc: vid1,
    bgClass: "white border-white border-1",
  },
  {
    id: 2,
    subtitle: "Software Development",
    title: "Show off your features the right way",
    description:
      "We design, develop, host & maintain web sites. Here, gathering all the required information to develop, we design with the latest technology.",
    videoSrc: vid2,
    bgClass: "white border-white border-1",
  },
  {
    id: 3,
    subtitle: "Web Development",
    title: "From concept to code to launch",
    description:
      "We have designed, developed, deployed and maintained enterprise-level web applications from the ground up that have enhanced the bottom line.",
    videoSrc: vid3,
    bgClass: "white border-white border-1",
  },
  {
    id: 4,
    subtitle: "App Development",
    title: "From concept to code to launch",
    description:
      "We make your brand more relevant to your customers. Starting with comprehensive audience analysis, we uncover the topics that matter most. ",
    videoSrc: vid4,
    bgClass: "white border-white border-1",
  },
  {
    id: 5,
    subtitle: "Digital Marketing",
    title: "From concept to code to launch",
    description:
      "We optimize your website to ensure that both customers and search engines can effortlessly discover and comprehend every page. ",
    videoSrc: vid5,
    bgClass: "white border-white border-1",
  },
  {
    id: 6,
    subtitle: "Technical Support",
    title: "From concept to code to launch",
    description:
      "At Pisoft, we provide comprehensive technical support in areas such as networking, cloud computing, and security. Our dedicated team is here to ensure that your systems run smoothly.",
    videoSrc: vid6,
    bgClass: "white border-white border-1",
  },
];
