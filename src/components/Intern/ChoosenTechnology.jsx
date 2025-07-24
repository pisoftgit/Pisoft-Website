"use client";
import React, { useEffect, useState, useRef } from "react";
import { Sidebar, SidebarBody, SidebarLink } from "../Sidebar";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "../../lib/util";
import { useSearchParams } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import AuthFloatingButtons from "../AuthFloatingButtons";
import { NavbarDemo } from "../navbar/Navbar2";
import Footer from "../Footer";
import { Example } from "../Corn";

export function SidebarDemo() {
    const [open, setOpen] = useState(false);
    const [technologies, setTechnologies] = useState([]);
    const [selectedTech, setSelectedTech] = useState(null);
    const [loadingDetails, setLoadingDetails] = useState(false);
    const [activeTechId, setActiveTechId] = useState(null);

    const navigate = useNavigate();
    const handleGoBack = () => navigate("/IntershipProgram");

    const [modalContent, setModalContent] = useState(null);
    const scrollYRef = useRef(0);

    const [searchParams] = useSearchParams();
    const techId = searchParams.get("id");

    useEffect(() => {
        if (techId) {
            handleTechClick(techId);
        }
    }, [techId]);



    useEffect(() => {
        const fetchTechnologies = async () => {
            try {
                const res = await fetch(
                    "https://project.pisofterp.com/pipl/restworld/technologies/modes/OFFLINE"
                );
                const data = await res.json();

                const formattedData = data.map((item) => ({
                    label: item.technologyName,
                    id: item.id,
                    href: "#",
                    icon: item.technologyPic ? (
                        <img
                            src={`data:${item.technologyLogoType};base64,${item.technologyPic}`}
                            alt={item.technologyName}
                            className="h-10 w-10 shrink-0 rounded-full object-contain bg-white"
                        />
                    ) : (
                        <img
                            src={item.tempDp || "/default-tech-icon.png"}
                            alt={item.technologyName}
                            className="h-10 w-10 shrink-0 rounded-full object-contain border bg-white border-orange-400"
                        />
                    ),
                }));

                setTechnologies(formattedData);
            } catch (err) {
                console.error("Failed to fetch technologies:", err);
            }
        };

        fetchTechnologies();
    }, []);

    const handleTechClick = async (techId) => {
        setActiveTechId(techId)
        setLoadingDetails(true);
        try {
            const response = await fetch(
                `https://project.pisofterp.com/pipl/restworld/ws-topics/technologies/${techId}`
            );
            const result = await response.json();

            if (!Array.isArray(result) || result.length === 0)
                throw new Error("No topics found.");

            const technologyInfo = result[0]?.technology;

            const normalizedData = {
                technologyName: technologyInfo?.technologyName || "Unknown",
                description: technologyInfo?.description || "",
                topics: result.map((topicObj) => ({
                    topicTitle: topicObj.topic || "Untitled Topic",
                    explanation: topicObj.explanation || "No description available.",
                    subTopics: (topicObj.subTopics ?? []).map((sub) => ({
                        subTopic: sub.subTopic || "Untitled Subtopic",
                        description:
                            sub.explanation || "No subtopic description available.",
                    })),
                })),
            };

            setSelectedTech(normalizedData);
        } catch (err) {
            console.error("Error fetching technology details:", err);
            setSelectedTech({
                technologyName: "Error",
                description: "Failed to load data. Please try again later.",
                topics: [],
            });
        } finally {
            setLoadingDetails(false);
        }
    };

    // Scroll lock on modal open
    useEffect(() => {
        if (modalContent) {
            scrollYRef.current = window.scrollY;
            document.body.style.position = "fixed";
            document.body.style.top = `-${scrollYRef.current}px`;
            document.body.style.width = "100%";
            document.body.style.overflow = "hidden";
            document.body.style.touchAction = "none";

            return () => {
                document.body.style.position = "";
                document.body.style.top = "";
                document.body.style.overflow = "";
                document.body.style.width = "";
                document.body.style.touchAction = "";
                window.scrollTo(0, scrollYRef.current);
            };
        }
    }, [modalContent]);

    const closeModal = () => setModalContent(null);

    return (
        <main className="overflow-clip">
            <div className="relative flex w-full min-h-screen font-jSB bg-white">
                <div className="fixed top-0 left-0 w-full z-50">
                    <div className="sticky top-0 z-40">
                        <NavbarDemo />
                    </div>
                    <div className="fixed top-2 right-4 sm:top-6 sm:right-6 z-50 md:hidden">
                        <Example />
                    </div>
                </div>
                {/* Sidebar */}
                <Sidebar className="min-h-screen mt-5 fixed left-0 top-0" open={open} setOpen={setOpen}>
                    <SidebarBody className="py-6 px-3 gap-6 z-20 min-h-screen overflow-hidden">
                        <div className="flex flex-col h-full mt-12">
                            {/* <Logo open={open} /> */}

                            {/* Sidebar content scroll container */}
                            <div className="flex-1 mt-4 overflow-y-auto overscroll-contain pr-1 scrollbar-thin scrollbar-thumb-blue-900 scrollbar-track-blue-100">
                                {technologies.length === 0 ? (
                                    <p className="text-sm text-white text-center italic">
                                        Loading technologies...
                                    </p>
                                ) : (
                                    technologies.map((tech, idx) => (
                                        <SidebarLink
                                            key={`tech-${idx}`}
                                            link={tech}
                                            onClick={(e) => {
                                                e.preventDefault();
                                                handleTechClick(tech.id);
                                            }}
                                            className={cn(
                                                "cursor-pointer px-2 py-2 rounded-md transition-all duration-200 text-white",
                                                tech.id === activeTechId
                                                    ? "bg-orange-100 text-blue-950 font-semibold"
                                                    : "hover:bg-orange-100 hover:text-blue-950"
                                            )}
                                        />
                                    ))
                                )}
                            </div>
                        </div>
                    </SidebarBody>
                </Sidebar>

                {/* Content Area */}
                <main
                    className={cn(
                        "flex-1 p-6 pt-10 mt-5 lg:mt-15 ml-15 lg:ml-0 overflow-y-auto transition-all duration-300",
                        open ? "overflow-hidden pointer-events-none" : "overflow-y-auto"
                    )}
                    style={{ WebkitOverflowScrolling: "touch" }}
                >
                    {!selectedTech && !loadingDetails && (
                        <h1 className="text-3xl font-bold text-blue-950 flex text-center mt-20">
                            Select a technology from the sidebar
                        </h1>
                    )}

                    {loadingDetails && (
                        <p className="text-blue-950 self-center mt-10 italic">Loading...</p>
                    )}

                    {selectedTech && !loadingDetails && (
                        <motion.div
                            key={selectedTech.technologyName}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="max-w-6xl mx-auto grid grid-cols-1 gap-6 pb-24"
                        >
                            {/* Technology Name */}
                            <h2
                                className="text-xl md:text-2xl lg:text-4xl font-jSB text-blue-950 mb-2"
                                dangerouslySetInnerHTML={{
                                    __html: selectedTech.technologyName,
                                }}
                            />

                            {/* Description */}
                            <p
                                className="text-base md:text-md lg:text-xl font-jl text-blue-950 mb-2"
                                dangerouslySetInnerHTML={{ __html: selectedTech.description }}
                            />

                            {/* Topics Grid */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {selectedTech.topics.map((topic, i) => (
                                    <motion.div
                                        key={i}
                                        whileHover={{ scale: 1.02 }}
                                        className="p-4 bg-blue-950 rounded-lg border border-blue-950 cursor-pointer transition-colors duration-300 hover:scale-103 text-black hover:bg-blue-900"
                                        onClick={() =>
                                            setModalContent({
                                                type: "topic",
                                                title: topic.topicTitle,
                                                explanation: topic.explanation,
                                                subTopics: [],
                                            })
                                        }
                                    >
                                        <h3 className="text-base md:text-md lg:text-xl font-jr text-orange-400 mb-2">
                                            {topic.topicTitle}
                                        </h3>

                                        {/* Subtopics */}
                                        <div className="pl-4 border-l border-orange-300">
                                            {topic.subTopics.map((sub, subIdx) => (
                                                <motion.div
                                                    key={subIdx}
                                                    whileHover={{ scale: 1.05 }}
                                                    className="mb-3 cursor-pointer"
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        setModalContent({
                                                            type: "subtopic",
                                                            title: sub.subTopic,
                                                            explanation: sub.description,
                                                        });
                                                    }}
                                                >
                                                    <h4 className="text-white font-jS">{sub.subTopic}</h4>
                                                </motion.div>
                                            ))}
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    )}
                </main>

                {/* Modal Overlay */}
                {modalContent && (
                    <div
                        className="fixed pt-4 inset-0 z-50 flex items-center justify-center bg-transparent backdrop-blur-2xl bg-opacity-60"
                        onClick={closeModal}
                    >
                        <motion.div
                            onClick={(e) => e.stopPropagation()}
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            className="bg-white rounded-lg max-w-3xl w-full max-h-[90vh] overflow-y-auto p-6 shadow-lg"
                        >
                            <h2 className="text-base md:text-md lg:text-xl font-bold text-blue-950 mb-4">
                                {modalContent.title}
                            </h2>

                            <p
                                className="text-base md:text-md lg:text-xl font-jl text-blue-950 whitespace-pre-wrap mb-6"
                                dangerouslySetInnerHTML={{ __html: modalContent.explanation }}
                            />

                            {modalContent.type === "topic" &&
                                modalContent.subTopics?.length > 0 && (
                                    <>
                                        <h3 className="text-xl font-semibold text-blue-950 mb-2">
                                            Subtopics
                                        </h3>
                                        <div className="space-y-4 max-h-64 overflow-y-auto pr-2">
                                            {modalContent.subTopics.map((sub, idx) => (
                                                <div
                                                    key={idx}
                                                    className="border border-blue-900 rounded p-3"
                                                >
                                                    <h4 className="text-base md:text-md lg:text-xl text-blue-950 font-jl mb-1">
                                                        {sub.subTopic}
                                                    </h4>
                                                    <p className="text-base md:text-md lg:text-xl text-blue-950 whitespace-pre-wrap">
                                                        {sub.description}
                                                    </p>
                                                </div>
                                            ))}
                                        </div>
                                    </>
                                )}

                            <button
                                onClick={closeModal}
                                className="mt-6 px-4 py-2 bg-orange-400 text-white rounded hover:bg-orange-500 transition"
                            >
                                Close
                            </button>
                        </motion.div>
                    </div>
                )}
            </div>


            {/* footer */}
            <section className="w-screen  overflow-hidden">
                <Footer />
            </section>

        </main>

    );
}

const Logo = ({ open }) => (
    <div className="mb-1 px-2">
        <a
            href="#"
            className="flex items-center gap-2 font-semibold cursor-default select-none"
        >
            <div className="h-5 w-5 rounded bg-orange-400" />
        </a>
    </div>
);
