import React, { useEffect, useRef } from 'react'
import { useState } from 'react'
import gsap from 'gsap'
import { motion } from 'framer-motion'
import BlurText from '../BlurText'

function Technology() {
    const [nestedModalOpen, setNestedModalOpen] = useState(false);
    const [nestedModalData, setNestedModalData] = useState(null);
    const [Technologies, setTechnologies] = useState([]);
    const [modalOpen, setModalOpen] = useState(false);
    const [modalData, setModalData] = useState(null);
    const modalTitleRef = useRef(null);
    const modalDescRef = useRef(null)
    const topicRefs = useRef(null)

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

    const handleTechClick = async (techId) => {
        try {
            const response = await fetch(`https://project.pisofterp.com/pipl/restworld/ws-topics/technologies/${techId}`);

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const result = await response.json();

            if (!Array.isArray(result) || result.length === 0) {
                throw new Error("No topics found.");
            }

            const technologyInfo = result[0]?.technology;

            const normalizedData = {
                technologyName: technologyInfo?.technologyName || "Unknown",
                description: technologyInfo?.description || "",
                topics: result.map(topicObj => ({
                    topicTitle: topicObj.topic || "Untitled Topic",
                    explanation: topicObj.explanation || "No description available.",
                    subTopics: (topicObj.subTopics ?? []).map(sub => ({
                        subTopic: sub.subTopic || "Untitled Subtopic",
                        description: sub.explanation || "No subtopic description available.",
                    })),
                })),
            };

            setModalData(normalizedData);
        } catch (err) {
            console.error("Error fetching technology details:", err);
            setModalData({
                technologyName: "Error",
                description: "Failed to load data. Please try again later.",
                topics: [],
            });
        } finally {
            setModalOpen(true);
        }
    };

    const modalRef = useRef(null);

    useEffect(() => {
        if (modalOpen && modalRef.current) {
            gsap.fromTo(
                modalRef.current,
                { opacity: 0, y: 100, scale: 0.95 },
                {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    duration: 0.5,
                    ease: 'power3.out',
                }
            );
        }
    }, [modalOpen]);

    useEffect(() => {
        if (modalOpen && modalRef.current) {
            const ctx = gsap.context(() => {
                gsap.fromTo(
                    modalRef.current,
                    { opacity: 0, y: 100, scale: 0.95 },
                    {
                        opacity: 1,
                        y: 0,
                        scale: 1.0,
                        duration: 1.0,
                        ease: 'power3.out',
                    }
                );

                if (modalTitleRef.current) {
                    gsap.fromTo(
                        modalTitleRef.current,
                        { opacity: 0, y: 30 },
                        { opacity: 1, y: 0, duration: 0.6, delay: 0.3, ease: 'power3.out' }
                    );
                }

                if (modalDescRef.current) {
                    gsap.fromTo(
                        modalDescRef.current,
                        { opacity: 0, y: 20 },
                        { opacity: 1, y: 0, duration: 0.6, delay: 0.4, ease: 'power3.out' }
                    );
                }

                gsap.fromTo(
                    topicRefs.current,
                    { opacity: 0, y: 20 },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 0.6,
                        delay: 0.5,
                        stagger: 0.2,
                        ease: 'power3.out',
                    }
                );
            }, modalRef);

            return () => ctx.revert();
        }
    }, [modalOpen]);

    useEffect(() => {
        if (modalRef.current) {
            const ctx = gsap.context(() => {
                if (modalOpen) {
                    gsap.fromTo(
                        modalRef.current,
                        { right: '-100%', opacity: 0.6 },
                        { right: '0', opacity: 1, duration: 0.3, ease: 'power3.out' }
                    );

                    if (modalTitleRef.current) {
                        gsap.fromTo(
                            modalTitleRef.current,
                            { y: 20, opacity: 0 },
                            { y: 0, opacity: 1, delay: 0.2, duration: 0.3, ease: 'power3.out' }
                        );
                    }

                    if (modalDescRef.current) {
                        gsap.fromTo(
                            modalDescRef.current,
                            { y: 20, opacity: 0 },
                            { y: 0, opacity: 1, delay: 0.3, duration: 0.3, ease: 'power3.out' }
                        );
                    }

                    if (topicRefs.current?.length) {
                        gsap.fromTo(
                            topicRefs.current,
                            { opacity: 0, y: 15 },
                            {
                                opacity: 1,
                                y: 0,
                                duration: 0.6,
                                stagger: 0.15,
                                delay: 0.5,
                                ease: 'power3.out',
                            }
                        );
                    }
                } else {
                    gsap.to(modalRef.current, {
                        right: '-100%',
                        opacity: 0,
                        duration: 0.4,
                        ease: 'power2.inOut',
                    });
                }
            });

            return () => ctx.revert();
        }
    }, [modalOpen]);

    return (
        <div>
            <section className="w-full flex flex-col items-start justify-start text-left px-4 sm:px-6 lg:px-12 py-4">
                <div>
                    <BlurText
                        text="Explore Our Technologies"
                        className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-jr text-orange-500 leading-tight text-left sm:text-center"
                        delay={110}
                        duration={0.7}
                        ease="power3.out"
                        splitType="chars"
                        from={{ opacity: 0, y: 40 }}
                        to={{ opacity: 1, y: 0 }}
                        threshold={0.1}
                        rootMargin="-100px"
                    />
                    <p className="mt-4 text-sm md:text-lg lg:text-xl text-blue-950 mx-auto sm:px-5">
                        In the first few months, you'll immerse yourself in advanced technologies, mastering as per the need of IT industry.
                    </p>
                </div>
            </section>

            <section className='w-screen flex flex-row justify-center items-center flex-wrap mt-10'>
                <div
                    className={`flex px-5 justify-center items-center w-full transition-all duration-300}`}
                >
                    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-6 gap-7">
                        {Technologies.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.4, delay: index * 0.03, ease: 'easeOut' }}
                                viewport={{ once: true }}
                                onClick={() => handleTechClick(item.id)}
                                whileHover={{ scale: 1.05 }}
                                className="group cursor-pointer relative rounded-2xl p-[2px] bg-gradient-to-br from-orange-300 via-yellow-100 to-white hover:from-orange-400 hover:to-white shadow-md hover:shadow-xl transition-all duration-300"
                            >
                                <div className="bg-white rounded-2xl flex flex-col items-center justify-center w-[6rem] h-[6rem] lg:w-[10rem] lg:h-[10rem] overflow-hidden relative transition-all duration-300 group-hover:ring-2 group-hover:ring-orange-400">
                                    <motion.img
                                        src={item.technologyPic}
                                        // alt={item.technologyName}
                                        whileHover={{ scale: 1.15, rotate: 5 }}
                                        transition={{ type: 'spring', stiffness: 300, damping: 12 }}
                                        className="object-contain h-12 w-12 sm:h-18 sm:w-18 mb-1"
                                    />

                                    <p className="text-[0.7rem] md:-text-[1.0rem] lg:text-[1.2rem] text-blue-950 font-jSB mt-2 text-center px-1 break-words leading-tight group-hover:text-orange-500 transition-colors duration-200">
                                        {item.technologyName}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {modalOpen && (
                <>
                    {/* Main Modal Backdrop */}
                    <div
                        className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[9998]"
                        onClick={() => setModalOpen(false)}
                    />

                    {/* Main Modal */}
                    <div
                        className="fixed top-12 md:top-0 inset-0 z-[9999] flex flex-col bg-white w-full sm:w-[90%] md:w-[70%] lg:w-[50%] max-h-screen rounded-t-lg md:rounded-xl shadow-xl overflow-hidden"
                        ref={modalRef}
                    >
                        {/* Header */}
                        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
                            <h2 className="text-xl font-jr text-blue-900" ref={modalTitleRef}>
                                {modalData?.technologyName || "Technology Details"}
                            </h2>
                            <button
                                onClick={() => setModalOpen(false)}
                                className="text-gray-500 hover:text-black transition"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>

                        {/* Scrollable Content */}
                        <div
                            ref={modalDescRef}
                            className="overflow-y-auto p-6 h-full scroll-smooth"
                            style={{
                                WebkitOverflowScrolling: 'touch',
                                touchAction: 'auto',
                            }}
                        >
                            {modalData ? (
                                <>
                                    <div
                                        className="prose prose-sky font-jl max-w-full mb-6 prose-p:text-blue-950 prose-headings:text-orange-600"
                                        dangerouslySetInnerHTML={{ __html: modalData.description }}
                                    />

                                    <div
                                        className="space-y-6"
                                        ref={(el) => (topicRefs.current = el ? Array.from(el.children) : [])}
                                    >
                                        {modalData.topics?.length > 0 ? (
                                            modalData.topics.map((topic, index) => (
                                                <div
                                                    key={index}
                                                    className="bg-orange-50 border border-orange-200 rounded-xl p-4 shadow-sm"
                                                >
                                                    {/* Clickable Topic Title */}
                                                    <h3
                                                        onClick={() => {
                                                            setNestedModalData({
                                                                title: topic.topicTitle,
                                                                description: topic?.explanation || 'This topic has no description.',
                                                            });
                                                            setNestedModalOpen(true);
                                                        }}
                                                        className="text-lg font-jl text-orange-700 mb-2 cursor-pointer hover:underline"
                                                    >
                                                        {topic.topicTitle}
                                                    </h3>

                                                    <ul className="list-disc list-inside space-y-1 text-blue-900 text-sm">
                                                        {topic.subTopics?.length > 0 ? (
                                                            topic.subTopics.map((sub, idx) => (
                                                                <li
                                                                    key={idx}
                                                                    onClick={() => {
                                                                        setNestedModalData({
                                                                            title: sub.subTopic || sub,
                                                                            description: sub.description || 'No subtopic details available.',
                                                                        });
                                                                        setNestedModalOpen(true);
                                                                    }}
                                                                    className="cursor-pointer hover:underline"
                                                                >
                                                                    {sub.subTopic || sub}
                                                                </li>
                                                            ))
                                                        ) : (
                                                            <li className="italic text-sky-600">No subtopics available</li>
                                                        )}
                                                    </ul>
                                                </div>
                                            ))
                                        ) : (
                                            <p className="text-sm text-sky-700">No topics found.</p>
                                        )}
                                    </div>
                                </>
                            ) : (
                                <div className="text-center text-blue-900">
                                    <p className="text-lg font-jl">Loading...</p>
                                </div>
                            )}
                        </div>
                    </div>
                </>
            )}

            {nestedModalOpen && (
                <>
                    {/* Nested Modal Backdrop */}
                    <div
                        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[10000]"
                        onClick={() => setNestedModalOpen(false)}
                    />

                    {/* Nested Modal Content */}
                    <div className="fixed inset-0 z-[10001] flex items-center justify-center">
                        <div className="bg-white rounded-xl shadow-xl w-full max-w-xl max-h-[90vh] overflow-y-auto p-6 relative">
                            <button
                                onClick={() => setNestedModalOpen(false)}
                                className="absolute top-4 right-4 text-gray-600 hover:text-black"
                                aria-label="Close nested modal"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>

                            <h2 className="text-xl font-jSB text-orange-600 mb-4">
                                {nestedModalData?.title || 'Details'}
                            </h2>

                            <div
                                className="prose prose-sky max-w-full prose-p:text-blue-900"
                                dangerouslySetInnerHTML={{ __html: nestedModalData?.description || 'No description available.' }}
                            />
                        </div>
                    </div>
                </>
            )}
        </div>
    )
}

export default Technology
