import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import BlurText from "./BlurText";
import Dbutton from "./Dbutton";
import RotatingText from "./RotatingText";

const cards = [
  {
    time: "10 min read",
    link: "https://google.com",
    title: "We are offering an intensive six-month internship program specifically designed for talented students from B.Tech, MCA , BCA, B.Sc (IT),and MBA streams. This program aims to equip you with the coding skills and ..."
  },
  {
    time: "9 min read",
    link: "https://example.com/genai-product",
    title: "Throughout your internship, our experienced professionals will mentor you at every step, sharing valuable insights and knowledge to help you navigate the IT landscape. You’ll gain hands-on experience in a real-world ..."
  },
  {
    time: "16 min read",
    link: "https://example.com/contentful-101",
    title: "Engage directly with live projects, allowing you to apply your theoretical knowledge in practical scenarios. This immersive experience is invaluable for building confidence and competence in your..."
  },

  {
    time: "18 min read",
    link: "https://example.com/contentful-101",
    title: "You'll have the opportunity to work on live projects, which you can showcase or submit to your college or university. This practical experience will significantly enhance your portfolio and academic credentials..."
  },

  {
    time: "9 min read",
    link: "https://example.com/contentful-101",
    title: "We are dedicated to your professional development. Our program focuses on enhancing your aptitude, communication, and other essential skills to ensure you become a highly employable candidate..."
  },
];


const hoverStyles = [
  "bg-orange-400 text-black border-orange-300",
  "bg-orange-400 text-black border-orange-300",
  "bg-orange-400 text-black border-orange-300",
  "bg-orange-400 text-black border-orange-300",
];

export default function SwipableCardCarousel() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef(null);

  const handlePrev = () => swiperRef.current?.slidePrev();
  const handleNext = () => swiperRef.current?.slideNext();

  return (
    <div className="relative w-full ">
      <div className="flex justify-center sm:justify-start pl-0 sm:pl-5 mb-6 sm:mb-8 md:mb-10">
        <div className="text-3xl sm:text-4xl md:text-5xl mr-2 font-jSB mt-1 sm:mt-2">
          Latest
        </div>
        <RotatingText
          texts={['Insights', 'Blogs', 'Cases']}
          mainClassName="px-1 sm:px-2 md:px-2 text-3xl sm:text-4xl md:text-5xl font-jSB bg-[#f07c22] text-white overflow-hidden py-0.5 sm:py-0.9 md:py-1 justify-center rounded-lg"
          staggerFrom="last"
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          exit={{ y: "-120%" }}
          staggerDuration={0.025}
          splitLevelClassName="overflow-hidden pb-0.5 sm:pb-0.9 md:pb-1"
          transition={{ type: "spring", damping: 30, stiffness: 400 }}
          rotationInterval={2000}
        />
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-between mb-6 sm:mb-8">
        <BlurText
          text="Stay ahead of the curve with our expert analysis, industry trends, and actionable advice. Our blog offers fresh perspectives on the challenges and opportunities in the tech landscape, helping you make informed decisions and drive innovation within your organization."
          delay={10}
          animateBy="words"
          direction="top"
          className="font-jr text-[2vh] sm:text-[2.2vh] md:text-[2.5vh] pl-0 sm:pl-6 w-full sm:w-[60%] text-black tracking-wider text-center sm:text-left"
        />
        <div className="mt-4 sm:mt-0 sm:ml-auto">
          <Dbutton Text="Explore More" />
        </div>
      </div>

      {/* Swiper Carousel */}
      <Swiper
        spaceBetween={25}
        slidesPerView="auto"
        className="!overflow-visible"
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
        breakpoints={{
          320: { slidesPerView: 1, spaceBetween: 8 },
          640: { slidesPerView: 2, spaceBetween: 15 },
          768: { slidesPerView: 2.2, spaceBetween: 20 },
          1024: { slidesPerView: 4, spaceBetween: 30 },
        }}
      >
        {cards.map((card, index) => (
          <SwiperSlide
            key={index}
            style={{
              height: "auto",
              width: "100px",
            }}
          >
            <motion.div
              whileHover={{ scale: 1.03 }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className={`relative group rounded-[1.5rem] sm:rounded-[2rem] p-4 sm:p-6 md:p-2 shadow-md transition-all duration-300 flex flex-col justify-between h-full w-full overflow-hidden ${hoveredIndex === index
                ? hoverStyles[index % hoverStyles.length]
                : "bg-blue-950 text-white"
                }`}
            >
              <div className="flex flex-col justify-between h-full p-4 ">
                <div>
                  <p className={`inline-flex items-center mb-3 px-4 py-2 text-sm font-jSB rounded-full transition-all duration-300 shadow-md self-start ${hoveredIndex === index
                    ? 'bg-white text-black'
                    : 'bg-[#e38724] text-white'
                    } hover:scale-110`}>
                    {card.time}
                  </p>
                  <h2 className="font-jl">
                    {card.title}
                  </h2>
                </div>

                {/* Bottom-aligned CTA Button */}
                {card.link && (
                  <a
                    href={card.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`mt-6 inline-flex items-center px-4 py-2 text-sm font-jS rounded-full transition-all duration-300 shadow-md self-start ${hoveredIndex === index
                      ? 'bg-white text-black'
                      : 'bg-[#f07c22] text-white'
                      } hover:scale-105`}
                  >
                    Read More
                    <ArrowUpRight size={16} className="ml-2" />
                  </a>
                )}

              </div>

              {/* Floating Arrow Button */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{
                  opacity: hoveredIndex === index ? 1 : 0,
                  y: hoveredIndex === index ? 0 : 10,
                }}
                transition={{
                  duration: 0.3,
                  opacity: { duration: hoveredIndex === index ? 0.3 : 0 },
                }}
                className="absolute bottom-[-20px] sm:bottom-[-30px] right-[-20px] sm:right-[-30px] z-10 w-24 sm:w-32 h-24 sm:h-32 rounded-full flex items-center justify-center shadow-lg cursor-pointer"
              >
              </motion.div>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Navigation + Pagination */}
      <div className="flex justify-between items-center mt-6 sm:mt-8 md:mt-10 px-4 sm:px-6">
        <div className="flex items-center gap-2">
          {cards.map((_, i) => (
            <div
              key={i}
              className={`w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full ${i === activeIndex ? "bg-orange-400" : "bg-gray-200"
                }`}
            />
          ))}
        </div>
        <div className="flex items-center gap-2 sm:gap-3">
          <button
            onClick={handlePrev}
            className="bg-orange-400 hover:bg-gray-300 p-1.5 sm:p-2 rounded-full"
          >
            <ArrowLeft size={10} className="text-white size-8" />
          </button>
          <button
            onClick={handleNext}
            className="bg-orange-400 hover:bg-gray-300 p-1.5 sm:p-2 rounded-full"
          >
            <ArrowRight size={10} className="text-white size-8" />
          </button>
        </div>
      </div>
    </div>
  );
}