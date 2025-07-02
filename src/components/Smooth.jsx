// SmoothScrolling.jsx
import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

function Smooth() {
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.05,          // how much to interpolate scroll (lower = smoother)
      duration: 1.5,       // duration of scroll (in seconds)
      smooth: true,
      smoothTouch: true,   // for touch devices
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return null;
}

export default Smooth;
