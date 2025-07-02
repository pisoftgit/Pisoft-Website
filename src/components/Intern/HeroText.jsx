import React from 'react'
import { FlipWords } from './flipwords'
import { motion } from 'framer-motion'
import { AnimatedTooltip } from './animatedToolTop'

export default function HeroText() {
    const people = [
        {
            id: 1,
            name: "John Doe",
            designation: "Software Engineer",
            image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&w=3387&q=80",
        },
        {
            id: 2,
            name: "Robert Johnson",
            designation: "Product Manager",
            image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=800&q=60",
        },
        {
            id: 3,
            name: "Jane Smith",
            designation: "Data Scientist",
            image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=800&q=60",
        },
        {
            id: 4,
            name: "Emily Davis",
            designation: "UX Designer",
            image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=800&q=60",
        },
        {
            id: 5,
            name: "Tyler Durden",
            designation: "Soap Developer",
            image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=3540&q=80",
        },
        {
            id: 6,
            name: "Dora",
            designation: "The Explorer",
            image: "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?auto=format&fit=crop&w=3534&q=80",
        },
    ];

    return (
        <section className="flex flex-col items-center justify-between min-h-screen px-6 md:px-16 py-16">
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
                        className="text-2xl md:text-4xl text-blue-950"
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
                        className="text-5xl md:text-6xl font-bold text-white"
                    />
                </motion.div>
            </div>

            {/* Team Section */}
            {/* Team Section */}
            <section className="w-full flex flex-col md:flex-row items-start justify-between gap-10 mt-24 px-4 md:px-10">

                {/* Left side: Buttons aligned to extreme left */}
                <motion.div
                    className="w-full md:w-1/2 flex justify-start"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                >
                    <div className="flex flex-col gap-4 items-start">
                        <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg shadow-md transition-all duration-300">
                            Take a Test
                        </button>
                        <button className="bg-slate-700 hover:bg-slate-800 text-white px-6 py-2 rounded-lg shadow-md transition-all duration-300">
                            Apply for Internship
                        </button>
                    </div>
                </motion.div>

                {/* Right side: Meet Our Team aligned to extreme right */}
                <motion.div
                    className="w-full md:w-1/2 flex justify-end"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                >
                    <div className="text-end">
                        <h2 className="text-2xl md:text-4xl font-jB text-blue-950 mb-6">
                            Meet Our Team
                        </h2>
                        <div className="flex flex-wrap justify-end gap-5">
                            <AnimatedTooltip items={people} />
                        </div>
                    </div>
                </motion.div>

            </section>

        </section>
    );
}
