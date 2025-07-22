"use client";
import React, { useEffect, useState } from "react";
import { Sidebar, SidebarBody, SidebarLink } from "../Sidebar";
import { motion } from "motion/react";
import { cn } from "../../lib/util";

export function SidebarDemo() {
    const [open, setOpen] = useState(false);
    const [technologies, setTechnologies] = useState([]);
    const [selectedTech, setSelectedTech] = useState(null);
    const [loadingDetails, setLoadingDetails] = useState(false);

    // Modal state
    const [modalContent, setModalContent] = useState(null);

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
                        description: sub.explanation || "No subtopic description available.",
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

    // Modal close handler
    const closeModal = () => setModalContent(null);

    return (
        <div className="relative flex w-full h-screen font-jl bg-white overflow-hidden">
            {/* Sidebar */}
            <Sidebar open={open} setOpen={setOpen}>
                <SidebarBody className="py-6 px-3 gap-6 z-20 h-full overflow-hidden">
                    <div className="flex flex-col h-full">
                        <Logo open={open} />

                        <div className="flex-1 mt-4 overflow-y-auto pr-1 scrollbar-thin scrollbar-thumb-blue-900 scrollbar-track-blue-100">
                            {technologies.length === 0 ? (
                                <p className="text-sm text-blue-900 text-center italic">
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
                                        className="cursor-pointer hover:bg-orange-100 hover:text-blue-950 px-2 py-2 rounded-md transition-all duration-200 text-white"
                                    />
                                ))
                            )}
                        </div>
                    </div>
                </SidebarBody>
            </Sidebar>

            {/* Content area */}
            <main
                className={cn(
                    "flex-1 p-6 overflow-y-auto",
                    open ? "blur-sm pointer-events-none" : ""
                )}
                style={{ height: "100vh", WebkitOverflowScrolling: "touch" }}
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
                        className="max-w-5xl mx-auto grid grid-cols-1 gap-6 pb-24"
                    >
                        {/* Technology Name */}
                        <h2
                            className="text-4xl font-jSB text-blue-950 mb-2"
                            dangerouslySetInnerHTML={{ __html: selectedTech.technologyName }}
                        />


                        {/* Description */}
                        <p className="text-blue-950 mb-6">{selectedTech.description}</p>

                        {/* Topics Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {selectedTech.topics.map((topic, i) => (
                                <motion.div
                                    key={i}
                                    whileHover={{ scale: 1.02 }}
                                    className="p-4 bg-blue-950 rounded-lg border border-blue-900 cursor-pointer transition-colors duration-300 hover:bg-orange-400"
                                    onClick={() =>
                                        setModalContent({
                                            type: "topic",
                                            title: topic.topicTitle,
                                            explanation: topic.explanation,
                                            subTopics: topic.subTopics,
                                        })
                                    }
                                >
                                    <h3 className="text-2xl font-jS text-white mb-2">
                                        {topic.topicTitle}
                                    </h3>
                                    <p className="text-white mb-3">{topic.explanation}</p>

                                    {/* Subtopics */}
                                    <div className="pl-4 border-l border-orange-400">
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
                                                <h4 className="text-white font-semibold">
                                                    {sub.subTopic}
                                                </h4>
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
                    className="fixed inset-0 z-50 flex items-center justify-center bg-transparent backdrop-blur-2xl bg-opacity-60"
                    onClick={closeModal}
                >
                    <motion.div
                        onClick={(e) => e.stopPropagation()} // Prevent close on modal click
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        className="bg-white rounded-lg max-w-3xl max-h-[80vh] w-full p-6 overflow-y-auto shadow-lg"
                    >
                        <h2 className="text-2xl font-bold text-blue-950 mb-4">
                            {modalContent.title}
                        </h2>
                        <p className="text-blue-950 whitespace-pre-wrap mb-6">
                            {modalContent.explanation}
                        </p>

                        {/* Show subtopics if this is a topic */}
                        {modalContent.type === "topic" && modalContent.subTopics.length > 0 && (
                            <>
                                <h3 className="text-xl font-semibold text-blue-950 mb-2">
                                    Subtopics
                                </h3>
                                <div className="space-y-4 max-h-64 overflow-y-auto pr-2">
                                    {modalContent.subTopics.map((sub, idx) => (
                                        <div key={idx} className="border border-blue-900 rounded p-3">
                                            <h4 className="text-blue-950 font-semibold mb-1">
                                                {sub.subTopic}
                                            </h4>
                                            <p className="text-blue-950 text-sm whitespace-pre-wrap">
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
    );
}

const Logo = ({ open }) => (
    <div className="mb-4 px-2">
        <a
            href="#"
            className="flex items-center gap-2 font-semibold cursor-default select-none"
        >
            <div className="h-5 w-5 rounded bg-orange-400" />
            {open && (
                <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-lg text-orange-400 font-bold tracking-wide font-jl"
                >
                    All Technologies
                </motion.span>
            )}
        </a>
    </div>
);
