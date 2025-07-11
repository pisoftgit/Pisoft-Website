import React from 'react'
import { FlipWords } from './flipwords'
import { motion } from 'framer-motion'
import { AnimatedTooltip } from './animatedToolTop'

export default function HeroText() {
    const people = [
        {
            id: 1,
            name: "John",
            designation: "Software Engineer",
            image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&w=3387&q=80",
        },
        {
            id: 2,
            name: "Jerry",
            designation: "Product Manager",
            image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=800&q=60",
        },
        {
            id: 3,
            name: "Christina",
            designation: "Data Scientist",
            image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=800&q=60",
        },
        {
            id: 4,
            name: "Kerry",
            designation: "UX Designer",
            image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=800&q=60",
        },
        {
            id: 5,
            name: "John",
            designation: "Soap Developer",
            image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=3540&q=80",
        },
        {
            id: 6,
            name: "Dora",
            designation: "Analyst",
            image: "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?auto=format&fit=crop&w=3534&q=80",
        },
    ];

    return (
        <section className="flex flex-col items-center justify-center sm:h-full md:min-h-screen px-6 md:px-16">
            {/* Hero Text */}
            <div className="z-10 text-center md:text-left max-w-4xl">
                <motion.h1
                    className="text-4xl md:text-6xl font-jSB text-orange-500 drop-shadow-lg"
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                >
                    Welcome to our
                </motion.h1>

                <motion.p
                    className="text-4xl md:text-7xl font-jSB text-blue-950"
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8, duration: 0.8 }}
                >
                    Internship Programs <br />
                    <motion.span
                        className="text-2xl md:text-5xl text-blue-950"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.1, duration: 0.6 }}
                    >
                        That are
                    </motion.span>
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.4, duration: 0.6 }}
                >
                    <FlipWords
                        words={['Secure', 'Modern', 'Scalable']}
                        className="text-5xl md:text-6xl lg:text-6xl xl:text-7xl font-bold text-orange-500"
                    />
                </motion.div>
            </div>
        </section>
    );
}
