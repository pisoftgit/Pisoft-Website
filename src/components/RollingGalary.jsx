import { useEffect, useState, useRef } from "react";
import {
  motion,
  useMotionValue,
  useAnimation,
  useTransform,
} from "framer-motion";
import BlurText from "./BlurText";

const VIDEO_TESTIMONIALS = [
  {
    src: "https://www.w3schools.com/html/mov_bbb.mp4",
    thumbnail: "/feed4.png",
  },
  {
    src: "https://www.w3schools.com/html/movie.mp4",
    thumbnail: "/feed5.png",
  },
  {
    src: "https://www.w3schools.com/html/mov_bbb.mp4",
    thumbnail: "/feed5.png",
  },
  {
    src: "https://www.w3schools.com/html/movie.mp4",
    thumbnail: "/video-thumb4.jpg",
  },
  {
    src: "https://www.w3schools.com/html/mov_bbb.mp4",
    thumbnail: "/video-thumb5.jpg",
  },
  {
    src: "https://www.w3schools.com/html/movie.mp4",
    thumbnail: "/video-thumb6.jpg",
  },
];

const TEXT_TESTIMONIALS = [
  {
    content: "This service completely transformed our workflow. Highly recommended!",
    name: "Jane Doe",
    designation: "Product Manager, Acme Inc.",
    profilePic: "/random.jpg",
  },
  {
    content: "Outstanding support and amazing UX. Will continue using it for years!",
    name: "John Smith",
    designation: "CTO, Beta Corp",
    profilePic: "/profile2.jpg",
  },
  {
    content: "The level of polish and attention to detail is unmatched.",
    name: "Aisha Khan",
    designation: "CEO, Gamma Ltd.",
    profilePic: "/profile3.jpg",
  },
];

const interleaveTestimonials = () => {
  const items = [];
  let textIndex = 0;
  for (let i = 0; i < VIDEO_TESTIMONIALS.length; i++) {
    items.push({ type: "video", ...VIDEO_TESTIMONIALS[i] });
    if ((i + 1) % 3 === 0 && textIndex < TEXT_TESTIMONIALS.length) {
      items.push({ type: "text", ...TEXT_TESTIMONIALS[textIndex++] });
    }
  }
  return items;
};

const RollingGallery = () => {
  const testimonials = interleaveTestimonials();
  const faceCount = testimonials.length;

  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  useEffect(() => {
    const resize = () => setScreenWidth(window.innerWidth);
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);

  // Responsive face width and height
  const faceWidth = screenWidth <= 640 ? screenWidth * 0.4 : screenWidth / 4.2;
  const faceHeight = screenWidth <= 640 ? 300 : screenWidth <= 768 ? 250 : 350;
  const cylinderWidth = faceWidth * faceCount;
  const radius = cylinderWidth / (2 * Math.PI);

  const rotation = useMotionValue(0);
  const controls = useAnimation();
  const transform = useTransform(rotation, (val) => `rotate3d(0,1,0,${val}deg)`);

  const [isPaused, setIsPaused] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  // Throttle rotation
  useEffect(() => {
    let animationFrameId;
    let lastUpdate = performance.now();

    const animate = (now) => {
      const delta = now - lastUpdate;
      if (!isPaused && !isHovered && delta > 30) {
        rotation.set(rotation.get() + 0.2);
        lastUpdate = now;
      }
      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrameId);
  }, [isPaused, isHovered]);

  const dragFactor = 0.04;
  const handleUpdate = (latest) => {
    if (typeof latest.rotateY === "number") {
      rotation.set(latest.rotateY);
    }
  };

  const handleDrag = (_, info) => {
    setIsPaused(true);
    controls.stop();
    rotation.set(rotation.get() + info.offset.x * dragFactor);
  };

  const handleDragEnd = (_, info) => {
    rotation.set(rotation.get() + info.velocity.x * dragFactor);
    setIsPaused(false);
  };

  return (
    <div className="relative h-screen w-full overflow-hidden mb-8 sm:mb-12 md:mb-16">
      <div className="flex flex-col items-center justify-center mt-6 sm:mt-8 md:mt-10">
        <BlurText
          text="Testimonials"
          delay={250}
          animateBy="words"
          direction="top"
          className="text-4xl sm:text-5xl md:text-6xl font-jSB text-white text-center"
        />
        <BlurText
          text="See the Impact We've Made...."
          delay={150}
          animateBy="words"
          direction="top"
          className="text-lg sm:text-xl md:text-2xl font-jl mt-2 sm:mt-3 text-black text-center"
        />
      </div>

      <div className="flex h-full items-center justify-center [perspective:800px] sm:[perspective:1000px]">
        <motion.div
          drag="x"
          dragElastic={0.2}
          onDrag={handleDrag}
          onDragEnd={handleDragEnd}
          animate={controls}
          onUpdate={handleUpdate}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          style={{
            transform: transform,
            rotateY: rotation,
            width: cylinderWidth,
            transformStyle: "preserve-3d",
            willChange: "transform",
          }}
          className="flex cursor-grab pb-8 sm:pb-12 md:pb-20 items-center justify-center"
        >
          {testimonials.map((item, i) => (
            <div
              key={i}
              className="group absolute flex h-fit items-center justify-center p-2 sm:p-3 md:p-4 [backface-visibility:hidden]"
              style={{
                width: `${faceWidth}px`,
                height: `${faceHeight}px`,
                transform: `rotateY(${(360 / faceCount) * i}deg) translateZ(${radius}px)`,
              }}
            >
              {item.type === "video" ? (
                <div className="relative w-full h-full rounded-lg sm:rounded-xl overflow-hidden border-2 border-gray-200 shadow-lg">
                  <img
                    src={item.thumbnail}
                    alt="Video thumbnail"
                    className="absolute w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-0"
                  />
                  <video
                    src={item.src}
                    muted
                    loop
                    autoPlay
                    playsInline
                    className="absolute w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  />
                </div>
              ) : (
                <div className="bg-white rounded-lg sm:rounded-xl p-4 sm:p-5 md:p-6 shadow-lg flex flex-col items-center text-center h-full w-full">
                  <img
                    src={item.profilePic}
                    className="w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 rounded-full mb-2 sm:mb-3 md:mb-4 object-cover"
                  />
                  <div className="font-SB text-gray-900 text-base sm:text-lg md:text-xl">
                    {item.name}
                  </div>
                  <div className="text-xs sm:text-sm md:text-base font-jl text-gray-700 mb-1 sm:mb-2">
                    {item.designation}
                  </div>
                  <div className="flex mb-2 sm:mb-3 md:mb-4">
                    {Array(5)
                      .fill(0)
                      .map((_, idx) => (
                        <svg
                          key={idx}
                          className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.18c.969 0 1.371 1.24.588 1.81l-3.39 2.462a1 1 0 00-.364 1.118l1.286 3.966c.3.922-.755 1.688-1.54 1.118l-3.39-2.463a1 1 0 00-1.176 0l-3.39 2.463c-.784.57-1.838-.196-1.54-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.45 9.394c-.783-.57-.38-1.81.588-1.81h4.18a1 1 0 00.95-.69l1.286-3.967z" />
                        </svg>
                      ))}
                  </div>
                  <p className="text-gray-700 font-jl text-sm sm:text-base md:text-lg">
                    “{item.content}”
                  </p>
                </div>
              )}
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default RollingGallery;