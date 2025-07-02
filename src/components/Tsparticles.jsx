// Tsparticles.jsx
import React, { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles";

const Tsparticles = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadFull(engine);
    }).then(() => setInit(true));
  }, []);

  const particlesLoaded = (container) => {
    console.log("Particles loaded", container);
  };

  const options = useMemo(() => ({
    fullScreen: {
      enable: false, // Important
    },
    background: {
      color: { value: "transparent" },
    },
    fpsLimit: 120,
    interactivity: {
      events: {
        onClick: { enable: true, mode: "push" },
        onHover: { enable: true, mode: "repulse" },
      },
      modes: {
        push: { quantity: 4 },
        repulse: { distance: 200, duration: 0.4 },
      },
    },
    particles: {
      color: { value: "#00BFFF" },
      links: {
        color: "#87CEFA",
        distance: 150,
        enable: true,
        opacity: 0.5,
        width: 1,
      },
      move: {
        enable: true,
        speed: 2,
        direction: "none",
        outModes: { default: "bounce" },
      },
      number: {
        density: { enable: true, area: 800 },
        value: 40,
      },
      opacity: { value: 0.5 },
      shape: { type: "circle" },
      size: { value: { min: 1, max: 4 } },
    },
    detectRetina: true,
  }), []);

  if (!init) return null;

  return (
    <div className="w-full h-full pointer-events-none">
      <Particles id="tsparticles" particlesLoaded={particlesLoaded} options={options} />
    </div>
  );
};

export default Tsparticles;
