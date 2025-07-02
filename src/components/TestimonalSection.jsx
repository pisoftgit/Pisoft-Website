import { useState ,useRef} from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
import BlurText from './BlurText';

const TestimonialSection = () =>
  
  
  {
  const videoTestimonials = [
    {
      name: "Mark T",
      role: "Host of 'Tech Talks'",
      quote: "This platform transformed my podcasting journey with its intuitive tools and outstanding support!",
      thumbnail: "feedback1.png",
      video: "https://www.w3schools.com/html/mov_bbb.mp4",
      isVideo: true
    },
    {
      name: "Jessica M",
      role: "Host of 'Voices Unfiltered'",
      quote: "The community and resources here are unparalleled. It’s a game-changer for podcasters!",
      thumbnail: "https://via.placeholder.com/300x200?text=Thumbnail",
      video: "https://www.w3schools.com/html/mov_bbb.mp4",
      isVideo: true
    },
    {
      name: "Ryan S",
      role: "Host of 'The Daily Update'",
      quote: "I’ve grown my audience exponentially thanks to the amazing features and support!",
      thumbnail: "https://via.placeholder.com/300x200?text=Thumbnail",
      video: "https://www.w3schools.com/html/mov_bbb.mp4",
      isVideo: true
    }

    
  ];

  const nonVideoTestimonials = [
    {
      name: "Sophia L",
      role: "Creative Director",
      quote: "Listening here is like a creative recharge! It brings valuable insights for my entrepreneurial journey.",
      stars: 5,
      isVideo: false
    },
    {
      name: "Alex K",
      role: "Operations Lead",
      quote: "Each episode delivers inspiration and practical tips that help me elevate my marketing approach every day.",
      stars: 5,
      isVideo: false
    },
    {
      name: "Sophie Lane",
      role: "Marketing Specialist",
      quote: "This podcast has a way of sparking new ideas and motivating me to think creatively.",
      stars: 5,
      isVideo: false
    }
  ];

  const textCards = [
    {
      title: "Why Choose Us?",
      content: "Our platform offers unmatched tools and support to elevate your podcasting experience."
    },
    {
      title: "Join Our Community",
      content: "Connect with creators and access resources to grow your audience."
    }
  ];

  // Merge testimonials and insert text cards after every 2-3 testimonials
  const combinedTestimonials = [];
  let nonVideoIndex = 0;
  let textCardIndex = 0;

  videoTestimonials.forEach((videoTestimonial, index) => {
    combinedTestimonials.push(videoTestimonial);
    if (nonVideoIndex < nonVideoTestimonials.length) {
      combinedTestimonials.push(nonVideoTestimonials[nonVideoIndex]);
      nonVideoIndex++;
    }
    if ((index + 1) % 2 === 0 && textCardIndex < textCards.length) {
      combinedTestimonials.push({ ...textCards[textCardIndex], isText: true });
      textCardIndex++;
    }
  });

  // Add remaining non-video testimonials
  while (nonVideoIndex < nonVideoTestimonials.length) {
    combinedTestimonials.push(nonVideoTestimonials[nonVideoIndex]);
    nonVideoIndex++;
  }

  // Add remaining text cards
  while (textCardIndex < textCards.length) {
    combinedTestimonials.push({ ...textCards[textCardIndex], isText: true });
    textCardIndex++;
  }
   const [activeIndex, setActiveIndex] = useState(0);
 const swiperRef = useRef(null);

  return (
    <div className="bg-white h-screen py-18">

 
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <BlurText
  text="Hear from Our Valuable Clients"
  delay={150}
  animateBy="words"
  direction="top"
  
  className="text-2xl  font-jl text-gray-900 text-center mb-4"
/>
        
 <BlurText
  text="Testimonials..."
  delay={250}
  animateBy="words"
  direction="top"
  
  className="text-center text-6xl  font-jSB text-orange-400 mb-22"
/>
   

<Swiper
  modules={[Navigation, Pagination]}
  spaceBetween={20}
  slidesPerView={1.2}
  navigation
  pagination={{ clickable: true }}
  onSwiper={(swiper) => (swiperRef.current = swiper)}
  onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
  breakpoints={{
    640: { slidesPerView: 1 },
    768: { slidesPerView: 2 },
    1024: { slidesPerView: 2.5 }
  }}
>
  {combinedTestimonials.map((item, index) => (
    <SwiperSlide key={index} className="!px-2">
      <TestimonialCard testimonial={item} isFirstVisible={index === activeIndex} />
    </SwiperSlide>
  ))}
</Swiper>

      </div>
    </div>
  );
};

const TestimonialCard = ({ testimonial,isFirstVisible }) => {
  const [isHovered, setIsHovered] = useState(false);

  if (testimonial.isText) {
    return (
      <div className="bg-orange-400 rounded-lg p-6 shadow-lg h-auto min-h-[420px] flex flex-col justify-between">
        <div className="flex-1">
          <h3 className="text-lg font-semibold mb-2">{testimonial.title}</h3>
          <p className="text-gray-600">{testimonial.content}</p>
        </div>
      </div>
    );
  }

  return (
   <div
  className={`bg-gray-800 rounded-lg p-12 shadow-lg h-auto min-h-[420px] min-w-[420px] flex flex-col justify-between ${isFirstVisible ? 'scale-x-105 transition-transform duration-300' : ''}`}
>

      {testimonial.isVideo ? (
        <div
          className="relative w-full h-48 mb-4"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <img
            src={testimonial.thumbnail}
            alt="Video Thumbnail"
            className="w-full h-full object-cover rounded-lg"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end p-4 rounded-lg">
            <p className="text-white text-sm">"{testimonial.quote}"</p>
          </div>
          {!isHovered && (
            <button className="absolute top-2 left-2 bg-gray-800 text-white p-2 rounded-full flex items-center">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M5 3l10 7-10 7V3z" />
              </svg>
            </button>
          )}
          {isHovered && (
            <video
              className="absolute inset-0 w-full h-full object-cover rounded-lg"
              autoPlay
              muted
              loop
            >
              <source src={testimonial.video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          )}
        </div>
      ) : (
        <div className="mb-4 flex-1">
          <p className="text-gray-600 italic">"{testimonial.quote}"</p>
        </div>
      )}
      <div>
        <h3 className="text-lg font-semibold">{testimonial.name}</h3>
        <p className="text-gray-500">{testimonial.role}</p>
        {testimonial.stars && (
          <div className="flex mt-2">
            {[...Array(testimonial.stars)].map((_, i) => (
              <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.97a1 1 0 00.95.69h4.15c.969 0 1.371 1.24.588 1.81l-3.357 2.44a1 1 0 00-.364 1.118l1.287 3.97c.3.921-.755 1.688-1.538 1.118l-3.357-2.44a1 1 0 00-1.175 0l-3.357 2.44c-.783.57-1.838-.197-1.538-1.118l1.287-3.97a1 1 0 00-.364-1.118l-3.357-2.44c-.783-.57-.381-1.81.588-1.81h4.15a1 1 0 00.95-.69l1.286-3.97z" />
              </svg>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default TestimonialSection;