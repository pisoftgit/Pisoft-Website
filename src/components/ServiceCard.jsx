import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Plus } from 'lucide-react';

const services = [
  {
    title: 'How Custom ERP Software can Scale my Business?',
    description:
      'Custom ERP solutions streamline your operations by automating workflows tailored to your needs. This improves efficiency, reduces costs, and supports long-term growth.',
  },
  {
    title: 'Do we offer Post-launch support?',
    description:
      'Yes, we provide ongoing maintenance, updates, and technical support after your project goes live. Our goal is to ensure long-term reliability and performance.',
  },
  {
    title: 'Why should you choose our company?',
    description:
      'We combine deep technical expertise with a user-first approach to deliver scalable, future-ready digital solutions. Our team works closely with you every step of the way.',
  },
  {
    title: 'Can you update your existing software with us?',
    description:
      'Absolutely! We specialize in modernizing legacy systems, optimizing performance, and adding new features without starting from scratch.',
  },
  {
    title: 'What industries do you specialize in?',
    description:
      'We’ve worked with clients across finance, healthcare, retail, logistics, and education. Our adaptable team customizes solutions for your specific industry needs.',
  },
];

export default function AccordionMenu() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggle = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="w-full mx-auto px-4 sm:px-6 ">
      <div className="bg-white">
        <div className="flex justify-center mb-4 sm:mb-6">
        </div>
        <div className="flex justify-center items-center">
          <div className="flex flex-col items-center justify-center mb-4 sm:mb-6">
            <span className="flex flex-wrap items-center font-jSB text-[4vh] sm:text-[4vh] md:text-[6vh] font-semibold text-black tracking-wider text-center">
              You Might Be <h5 className="ml-2 text-orange-500">Wondering…</h5>
            </span>
          </div>
        </div>
      </div>

      <div className="divide-y">
        {services.map((item, index) => {
          const isActive = index === activeIndex;
          return (
            <motion.div
              key={index}
              onMouseEnter={() => toggle(index)}
              className={`cursor-pointer transition-colors duration-300 ${
                isActive ? 'bg-white' : 'bg-white'
                
              }`}
            >
              <div className="flex justify-between items-center py-6 sm:py-8 md:py-10 px-4 sm:px-6">
                <h3 className={`font-jr text-xl sm:text-xl md:text-2xl tracking-wide ${
                  isActive ? `text-orange-500`: "text-black"
                }`}>
                  {item.title}
                </h3>
                <motion.div
                  initial={{ rotate: 0 }}
                  animate={isActive ? { rotate: 45 } : { rotate: 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-gray-400 hover:text-sky-600"
                >
                  {isActive ? (
                    <ArrowUpRight className="w-5 h-5 sm:w-6 sm:h-6 text-sky-600" />
                  ) : (
                    <Plus className="w-6 h-6 sm:w-7 sm:h-7" />
                  )}
                </motion.div>
              </div>
              <AnimatePresence>
                {isActive && item.description && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.5, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <div className="p-4 sm:p-6 flex flex-col sm:flex-row justify-between items-start gap-4">
                      <p className="text-gray-950 font-jr tracking-wide text-[2vh] sm:text-[2.2vh] md:text-[2.5vh] max-w-4xl sm:max-w-5xl md:max-w-6xl">
                        {item.description}
                      </p>
                      <a
                        href="#"
                        className="text-lg sm:text-xl md:text-[2.5vh] font-jmed text-black flex items-center gap-2"
                      >
                        See details <ArrowUpRight className="w-6 h-6 sm:w-7 sm:h-7 text-sky-600" />
                      </a>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}