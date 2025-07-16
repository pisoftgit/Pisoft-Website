"use client";

import { Tabs } from "./Tabs";
import Particles from "./Particles";
import { useState, useEffect } from "react";

export function VisionMission() {

    const [Visions, setVisions] = useState("")
    const [Missions, setMissions] = useState("")

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch("https://project.pisofterp.com/pipl/restworld/org/our-vision/modes/OFFLINE");
            if (!response.ok) throw new Error("Failed to fetch");
    
            const htmlContent = await response.text();
    
            const parser = new DOMParser();
            const doc = parser.parseFromString(htmlContent, "text/html");
    
            doc.querySelectorAll("[style]").forEach((el) => el.removeAttribute("style"));
    
            setVisions(doc.body.innerHTML);
          } catch (error) {
            console.error("Error fetching message:", error);
            setVisions("<p>Failed to load content.</p>");
          }
        };
    
        fetchData();
      }, []);
    
      useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch("https://project.pisofterp.com/pipl/restworld/org/our-mission/modes/OFFLINE");
            if (!response.ok) throw new Error("Failed to fetch");
    
            const htmlContent = await response.text();
    
            const parser = new DOMParser();
            const doc = parser.parseFromString(htmlContent, "text/html");
    
            doc.querySelectorAll("[style]").forEach((el) => el.removeAttribute("style"));
    
            setMissions(doc.body.innerHTML);
          } catch (error) {
            console.error("Error fetching message:", error);
            setMissions("<p>Failed to load content.</p>");
          }
        };
    
        fetchData();
      }, []);
    


    const tabs = [
        {
            title: "Our Vision",
            value: "Visions",
            content: (
                <div
                    className="w-full overflow-hidden [text-align:justify] relative h-full rounded-2xl p-10 text-sm md:text-xl font-jS text-black bg-gradient-to-br from-yellow-50 to-sky-100">
                    <div style={{ width: '100%', height: '600px', position: 'absloute' }}>
                        <Particles
                            particleColors={['#000', '#000']}
                            particleCount={200}
                            particleSpread={10}
                            speed={0.1}
                            particleBaseSize={100}
                            moveParticlesOnHover={true}
                            alphaParticles={false}
                            disableRotation={false}
                            Children={Visions}
                        >
                        </Particles>
                    </div>
                </div>
            ),
        },
        {
            title: "Our Mission",
            value: "Missions",
            content: (
                <div
                     className="w-full overflow-hidden [text-align:justify] relative h-full rounded-2xl p-10 text-sm md:text-xl font-jS text-black bg-gradient-to-br from-yellow-50 to-sky-100">
                    <div style={{ width: '100%', height: '600px', position: 'absolute' }}>
                        <Particles
                            particleColors={['#000', '#000']}
                            particleCount={200}
                            particleSpread={10}
                            speed={0.1}
                            particleBaseSize={100}
                            moveParticlesOnHover={true}
                            alphaParticles={false}
                            disableRotation={false}
                            Children={Missions}
                        >
                        </Particles>
                    </div>
                </div>
            ),
        },
    ];

    return (
        <div
            className="h-[40rem] md:h-[10rem] lg:h-[25rem] [perspective:1000px] relative b flex flex-col max-w-5xl mx-auto w-full items-start justify-start mb-20">
            <Tabs tabs={tabs} />
        </div>
    );
}