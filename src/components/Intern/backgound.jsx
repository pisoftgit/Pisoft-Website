import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function BackgroundShapes() {
    const shape1 = useRef(null);
    const shape2 = useRef(null);
    const shape3 = useRef(null);

    useEffect(() => {
        const triggerElement = document.documentElement; // <html> element

        gsap.to(shape1.current, {
            y: -150,
            scrollTrigger: {
                trigger: triggerElement,
                start: 'top top',
                end: 'bottom bottom',
                scrub: true,
                // markers: true,
            },
        });

        gsap.to(shape2.current, {
            x: 100,
            scrollTrigger: {
                trigger: triggerElement,
                start: 'top top',
                end: 'bottom bottom',
                scrub: true,
            },
        });

        gsap.to(shape3.current, {
            scale: 1.3,
            opacity: 0.4,
            scrollTrigger: {
                trigger: triggerElement,
                start: 'top top',
                end: 'bottom bottom',
                scrub: true,
            },
        });

        ScrollTrigger.refresh();
    }, []);


    useEffect(() => {
        // Create zig-zag motion for shape3
        gsap.to(shape3.current, {
            scrollTrigger: {
                trigger: document.documentElement,
                start: 'top top',
                end: 'bottom bottom',
                scrub: true,
                // markers: true,
            },
            keyframes: [
                { x: -100, y: 100 },
                { x: 100, y: 200 },
                { x: -80, y: 300 },
                { x: 120, y: 400 },
                { x: 0, y: 500 },
            ],
            ease: 'none',
        });

        ScrollTrigger.refresh();
    }, []);

    return (
        <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden">
            {/* Shape 1 */}
            <div
                ref={shape1}
                className="absolute top-[15%] left-[10%] w-[20rem] h-[20rem] bg-purple-400 opacity-20 blur-xs rounded-full"
            ></div>

            {/* Shape 2 */}
            <div
                ref={shape2}
                className="absolute bottom-[20%] right-[10%] w-[24rem] h-[24rem] bg-blue-300 opacity-20 blur-3xl rounded-full"
            ></div>

            {/* Shape 3 */}
            <div
                ref={shape3}
                style={{ transform: 'translateX(-50%)' }}
                className="absolute top-[12%] left-[50%] w-[20rem] h-[20rem] bg-gradient-to-r from-pink-300 to-yellow-300 opacity-20 blur-xl rounded-full"
            ></div>

            <div
                ref={shape3}
                style={{ transform: 'translateY(-50%)' }}
                className="absolute z-0 top-[20%] left-[90%] w-[24rem] h-[24rem] bg-gradient-to-r from-orange-300 to-blue-300 opacity-20 blur-xs rounded-full"
            ></div>
            <div
                ref={shape3}
                style={{ transform: 'translateX(-20%)' }}
                className="absolute top-[22%] left-[10%] w-[24rem] h-[24rem] bg-gradient-to-r from-orange-300 to-blue-300 opacity-30 blur-lg rounded-full"
            ></div>
        </div>
    );
}
