import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Plus } from 'lucide-react';

export default function AccordionMenu() {
  const [services, setServices] = useState([]);
  const [activeIndex, setActiveIndex] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const toggle = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await fetch('https://project.pisofterp.com/pipl//restworld/getAllFAQs');
        const data = await response.json();
        setServices(data);
      } catch (err) {
        console.error('Error fetching services:', err);
        setError('Failed to load data');
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, []);

  if (loading) return <div className="text-center p-10">Loading...</div>;
  if (error) return <div className="text-center p-10 text-red-600">{error}</div>;

  return (
    <div className="w-full mx-auto px-4 sm:px-6">
      <div className="bg-white">
        <div className="flex justify-center mb-4 sm:mb-6"></div>
        <div className="flex justify-center items-center">
          <div className="flex flex-col items-center justify-center mb-4 sm:mb-6">
            <span className="flex flex-wrap items-center font-jSB text-[4vh] sm:text-[4vh] md:text-[6vh] font-semibold text-black tracking-wider text-center">
              You Might Be <h5 className="ml-2 text-[#F07C22]">Wondering…</h5>
            </span>
          </div>
        </div>
      </div>

      <div className="divide-y">
        {services.map((item, index) => {
          const isActive = index === activeIndex;
          return (
            <motion.div
              key={item.id}
              onMouseEnter={() => toggle(index)}
              className={`cursor-pointer transition-colors duration-300 ${
                isActive ? 'bg-white' : 'bg-white'
              }`}
            >
              <div className="flex justify-between items-center py-4 sm:py-8 md:py-5 px-4 sm:px-6">
                <h3
                  className={`font-jr text-xl sm:text-xl md:text-2xl tracking-wide ${
                    isActive ? 'text-[#F07C22]' : 'text-black'
                  }`}
                >
                  {item.question}
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
                {isActive && item.answer && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.5, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <div className="pl-4 sm:pl-6 md:pl-8 lg:pl-10 flex flex-col sm:flex-row justify-between items-start gap-4">
                      <p className="text-gray-950 font-jr tracking-wide text-[2vh] sm:text-[2.2vh] md:text-[2.5vh] max-w-4xl sm:max-w-5xl md:max-w-6xl">
                        {item.answer}
                      </p>
                      <a
                        href="#"
                        className="text-lg sm:text-xl md:text-[2.5vh] font-jmed text-black flex items-center gap-2"
                      >
                        See details{' '}
                        <ArrowUpRight className="w-6 h-6 sm:w-7 sm:h-7 text-sky-600" />
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
