import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { motion } from 'framer-motion';
import BlurText from '../BlurText';
import { useNavigate } from 'react-router-dom';

function Technology() {
    const [Technologies, setTechnologies] = useState([]);
    const modalDescRef = useRef(null);

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

    const navigate = useNavigate();

   return (
        <div className='overflow-clip mb-6'>
            {/* Header */}
            <section className="w-full flex flex-col items-start px-4 sm:px-6 lg:px-12 py-4 mb-3">
                <BlurText
                    text="Explore Our Technologies"
                    className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-jr text-[#F07C22]  leading-tight text-left sm:text-center"
                    delay={110}
                    duration={0.7}
                    ease="power3.out"
                    splitType="chars"
                    from={{ opacity: 0, y: 40 }}
                    to={{ opacity: 1, y: 0 }}
                    threshold={0.1}
                    rootMargin="-100px"
                />
                <p className="mt-4 text-sm md:text-lg lg:text-xl text-blue-950">
                    In the first few months, you'll immerse yourself in advanced technologies, mastering as per the need of IT industry.
                </p>
            </section>

            {/* Tech Grid */}
            <section className='w-screen flex flex-wrap justify-center items-center mt-10 px-5'>
                <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-7">
                    {Technologies.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.4, delay: index * 0.03 }}
                            viewport={{ once: true }}
                            onClick={() => navigate(`/alltechnologies?id=${item.id}`)}
                            whileHover={{ scale: 1.05 }}
                            className="group cursor-pointer rounded-2xl p-[2px] bg-gradient-to-br from-orange-300 via-yellow-100 to-white shadow-md hover:shadow-xl"
                        >
                            <div className="bg-white rounded-2xl flex flex-col items-center justify-center w-[6rem] h-[6rem] lg:w-[10rem] lg:h-[10rem]">
                                <motion.img
                                    src={item.technologyPic}
                                    whileHover={{ scale: 1.15, rotate: 5 }}
                                    transition={{ type: 'spring', stiffness: 300, damping: 12 }}
                                    className="object-contain h-12 w-12 mb-1"
                                />
                                <p className="text-[0.7rem] lg:text-[1.2rem] text-blue-950 font-jSB mt-2 text-center px-1">
                                    {item.technologyName}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>
        </div>
    );
}

export default Technology;
