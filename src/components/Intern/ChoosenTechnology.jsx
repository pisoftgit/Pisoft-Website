"use client";
import React, { useEffect, useState } from "react";
import { Sidebar, SidebarBody, SidebarLink } from "../Sidebar"
import { motion } from "motion/react";
import { cn } from "../../lib/util";

export function SidebarDemo() {
  const [open, setOpen] = useState(false);
  const [technologies, setTechnologies] = useState([]);
  const [selectedTech, setSelectedTech] = useState(null);
  const [loadingDetails, setLoadingDetails] = useState(false);

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
              className="h-10 w-10 shrink-0 rounded-full object-contain"
            />
          ) : (
            <img
              src={item.tempDp || "/default-tech-icon.png"}
              alt={item.technologyName}
              className="h-10 w-10 shrink-0 rounded-full object-contain border border-orange-400"
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

  return (
    <div className="relative flex w-full h-screen font-jl bg-gray-900 text-orange-400 overflow-hidden">
      {/* Sidebar */}
      <Sidebar open={open} setOpen={setOpen}>
        <SidebarBody className="py-6 px-3 gap-6 z-20 h-full overflow-hidden">
          <div className="flex flex-col h-full">
            <Logo open={open} />

            <div className="flex-1 mt-4 overflow-y-auto pr-1 scrollbar-thin scrollbar-thumb-orange-600 scrollbar-track-gray-800">
              {technologies.length === 0 ? (
                <p className="text-sm text-orange-500 text-center italic">
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
                    className="cursor-pointer hover:bg-orange-600/40 px-2 py-2 rounded-md transition-all duration-200 text-orange-400"
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
          "flex flex-1 flex-col p-6 overflow-y-auto h-screen",
          open ? "blur-sm pointer-events-none" : ""
        )}
      >
        {!selectedTech && (
          <h1 className="text-3xl font-bold text-orange-400 self-center mt-20">
            Select a technology from the sidebar
          </h1>
        )}

        {loadingDetails && (
          <p className="text-orange-400 self-center mt-10 italic">Loading...</p>
        )}

        {selectedTech && !loadingDetails && (
          <motion.div
            key={selectedTech.technologyName}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-5xl mx-auto grid grid-cols-1 gap-6"
          >
            {/* Technology Name */}
            <h2 className="text-4xl font-extrabold text-orange-300 mb-2">
              {selectedTech.technologyName}
            </h2>

            {/* Description */}
            <p className="text-orange-400 mb-6">{selectedTech.description}</p>

            {/* Topics Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {selectedTech.topics.map((topic, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.02 }}
                  className="p-4 bg-gray-800 rounded-lg border border-orange-700 cursor-pointer"
                  onClick={() => alert(`Clicked topic: ${topic.topicTitle}`)}
                >
                  <h3 className="text-xl font-semibold text-orange-300 mb-2">
                    {topic.topicTitle}
                  </h3>
                  <p className="text-orange-400 mb-3">{topic.explanation}</p>

                  {/* Subtopics */}
                  <div className="pl-4 border-l border-orange-700">
                    {topic.subTopics.map((sub, subIdx) => (
                      <motion.div
                        key={subIdx}
                        whileHover={{ scale: 1.05 }}
                        className="mb-3 cursor-pointer"
                        onClick={(e) => {
                          e.stopPropagation();
                          alert(`Clicked subtopic: ${sub.subTopic}`);
                        }}
                      >
                        <h4 className="text-orange-300 font-semibold">
                          {sub.subTopic}
                        </h4>
                        <p className="text-orange-400 text-sm">{sub.description}</p>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </main>
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
