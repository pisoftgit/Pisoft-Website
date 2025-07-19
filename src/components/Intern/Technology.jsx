import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { motion } from 'framer-motion';
import BlurText from '../BlurText';

function Technology() {
    const [nestedModalOpen, setNestedModalOpen] = useState(false);
    const [nestedModalData, setNestedModalData] = useState(null);
    const [Technologies, setTechnologies] = useState([]);
    const [modalOpen, setModalOpen] = useState(false);
    const [modalData, setModalData] = useState(null);

    const modalTitleRef = useRef(null);
    const modalDescRef = useRef(null);
    const topicRefs = useRef(null);
    const modalRef = useRef(null);
    const nestedModalRef = useRef(null);
    const scrollYRef = useRef(0); // to store scroll position

    const handleScroll = (direction) => {
        const modalContent = modalDescRef.current;
        if (!modalContent) return;

        const scrollAmount = 300;
        modalContent.scrollBy({
            top: direction === 'down' ? scrollAmount : -scrollAmount,
            behavior: 'smooth',
        });
    };

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
            const result = await response.json();

            if (!Array.isArray(result) || result.length === 0) throw new Error("No topics found.");

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

    // Animate modal
    useEffect(() => {
        if (modalOpen && modalRef.current) {
            const ctx = gsap.context(() => {
                gsap.fromTo(modalRef.current, { right: '-100%', opacity: 0.6 }, { right: '0', opacity: 1, duration: 0.4, ease: 'power3.out' });

                if (modalTitleRef.current) {
                    gsap.fromTo(modalTitleRef.current, { y: 20, opacity: 0 }, { y: 0, opacity: 1, delay: 0.2, duration: 0.3 });
                }

                if (modalDescRef.current) {
                    gsap.fromTo(modalDescRef.current, { y: 20, opacity: 0 }, { y: 0, opacity: 1, delay: 0.3, duration: 0.3 });
                }

                if (topicRefs.current?.length) {
                    gsap.fromTo(topicRefs.current, { opacity: 0, y: 15 }, {
                        opacity: 1,
                        y: 0,
                        duration: 0.6,
                        stagger: 0.15,
                        delay: 0.5,
                        ease: 'power3.out',
                    });
                }
            }, modalRef);

            return () => ctx.revert();
        }
    }, [modalOpen]);

    // Lock scroll on modal open
    useEffect(() => {
        if (modalOpen || nestedModalOpen) {
            scrollYRef.current = window.scrollY;
            document.body.style.position = 'fixed';
            document.body.style.top = `-${scrollYRef.current}px`;
            document.body.style.width = '100%';
            document.body.style.overflow = 'hidden';
            document.body.style.touchAction = 'none';

            return () => {
                document.body.style.position = '';
                document.body.style.top = '';
                document.body.style.overflow = '';
                document.body.style.width = '';
                document.body.style.touchAction = '';
                window.scrollTo(0, scrollYRef.current);
            };
        }
    }, [modalOpen, nestedModalOpen]);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (nestedModalRef.current && !nestedModalRef.current.contains(event.target)) {
                setNestedModalOpen(false);
            }
        };

        if (nestedModalOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [nestedModalOpen]);

    return (
        <div className='overflow-clip'>
            {/* Header */}
            <section className="w-full flex flex-col items-start px-4 sm:px-6 lg:px-12 py-4">
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
                            onClick={() => handleTechClick(item.id)}
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

            {/* Main Modal */}
            {modalOpen && (
                <>
                    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[9998]" onClick={() => setModalOpen(false)} />
                    <div ref={modalRef}
                        className="fixed top-0 right-0 z-[9999] w-full sm:w-[90%] md:w-[70%] lg:w-[50%] max-h-screen bg-white rounded-l-lg shadow-xl flex flex-col overflow-hidden"
                    >
                        {/* Header */}
                        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200 flex-shrink-0">
                            <h2 className="text-xl font-jr text-blue-900" ref={modalTitleRef}>
                                {modalData?.technologyName || "Technology Details"}
                            </h2>
                            <button onClick={() => setModalOpen(false)} className="text-gray-500 hover:text-black cursor-pointer">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>

                        {/* Content */}
                        <div
                            ref={modalDescRef}
                            className="overflow-y-auto flex-1 p-6"
                            onWheel={(e) => e.stopPropagation()}
                        >
                            {modalData ? (
                                <>
                                    <div
                                        className="prose prose-sky max-w-full mb-6 prose-p:text-blue-950 prose-headings:text-orange-600"
                                        dangerouslySetInnerHTML={{ __html: modalData.description }}
                                    />
                                    <div className="space-y-6" ref={(el) => (topicRefs.current = el ? Array.from(el.children) : [])}>
                                        {modalData.topics?.map((topic, index) => (
                                            <div key={index} className="bg-orange-50 border border-orange-200 rounded-xl p-4">
                                                <h3
                                                    onClick={() => {
                                                        setNestedModalData({
                                                            title: topic.topicTitle,
                                                            description: topic.explanation,
                                                        });
                                                        setNestedModalOpen(true);
                                                    }}
                                                    className="text-lg font-jl text-orange-700 mb-2 cursor-pointer hover:underline"
                                                >
                                                    {topic.topicTitle}
                                                </h3>
                                                <ul className="list-disc list-inside text-sm text-blue-900">
                                                    {topic.subTopics.length > 0 ? topic.subTopics.map((sub, idx) => (
                                                        <li key={idx} onClick={() => {
                                                            setNestedModalData({
                                                                title: sub.subTopic,
                                                                description: sub.description,
                                                            });
                                                            setNestedModalOpen(true);
                                                        }} className="cursor-pointer hover:underline">
                                                            {sub.subTopic}
                                                        </li>
                                                    )) : (
                                                        <li className="italic text-sky-600">No subtopics available</li>
                                                    )}
                                                </ul>
                                            </div>
                                        ))}
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

            {/* Nested Modal */}
            {nestedModalOpen && (
                <>
                    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[10000]" />
                    <div className="fixed inset-0 z-[10001] flex items-center justify-center">
                        <div
                            ref={nestedModalRef}
                            className="bg-white rounded-xl shadow-xl w-full max-w-xl max-h-[90vh] overflow-y-auto p-6 relative"
                        >
                            <button
                                onClick={() => setNestedModalOpen(false)}
                                className="absolute top-4 right-4 text-gray-600 hover:text-black cursor-pointer"
                            >
                                ✕
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
    );
}

export default Technology;
