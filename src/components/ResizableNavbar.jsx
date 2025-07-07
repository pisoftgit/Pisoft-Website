"use client";
import { cn } from "../lib/util";
import { IconMenu2, IconX } from "@tabler/icons-react";
import {
    motion,
    AnimatePresence,
    useScroll,
    useMotionValueEvent,
} from "motion/react";


import React, { useRef, useState, useEffect } from "react";
import imgscr from "../assets/latestLogoP.png";

export const Navbar = ({ children, className }) => {
    const ref = useRef(null);
    const { scrollY } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });
    const [visible, setVisible] = useState(false);

    useMotionValueEvent(scrollY, "change", (latest) => {
        setVisible(latest > 100);
    });

    return (
        <motion.div
            ref={ref}
            className={cn("sticky inset-x-0 top-0 z-40 w-full", className)}>
            {React.Children.map(children, (child) =>
                React.isValidElement(child)
                    ? React.cloneElement(child, { visible })
                    : child
            )}
        </motion.div>
    );
};


export const NavBody = ({ children, className, visible }) => {
    return (
        <motion.div
            animate={{
                backdropFilter: visible ? "blur(10px)" : "none",
                boxShadow: visible
                    ? "0 4px 8px rgba(85, 163, 221, 0.4)"
                    : "none",
                backgroundColor: visible ? "rgba(208, 232, 255, 0.5)" : "transparent",
                width: visible ? "40%" : "100%",
                y: visible ? 10 : 0,
            }}
            transition={{
                type: "spring",
                stiffness: 200,
                damping: 50,
            }}
            style={{
                minWidth: "1000px",
            }}
            className={cn(
                "relative z-[60] mx-auto hidden w-full flex-row items-center justify-between self-start rounded-full px-6 lg:flex",
                className
            )}
        >
            {children}
        </motion.div>
    );
};


export const NavItems = ({ items, className, onItemClick }) => {
    const [isERPMenuOpen, setIsERPMenuOpen] = useState(false);
    const [hovered, setHovered] = useState(null);
    const [activeIndex, setActiveIndex] = useState(null); // Step 1: track active item
    const erpRef = useRef(null);

    const handleERPHover = () => {
        setHovered("erp");
        setIsERPMenuOpen(true);
    };

    const handleERPLeave = () => {
        setHovered(null);
    };

    const handleClickOutside = (event) => {
        if (erpRef.current && !erpRef.current.contains(event.target)) {
            setIsERPMenuOpen(false);
        }
    };

    useEffect(() => {
        const currentPath = window.location.pathname;
        const matchedIndex = items.findIndex(item => item.link === currentPath);
        if (matchedIndex !== -1) setActiveIndex(matchedIndex);
    }, []);


    useEffect(() => {
        document.addEventListener("click", handleClickOutside);
        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, []);

    return (
        <motion.div
            onMouseLeave={() => setHovered(null)}
            className={cn(
                "ml-30 absolute inset-0 hidden flex-1 flex-row items-center justify-center space-x-4 text-lg font-medium text-blue-900 transition duration-200 hover:text-blue-950 lg:flex lg:space-x-4",
                className
            )}
        >
            {items.map((item, idx) => (
                <a
                    key={`link-${idx}`}
                    href={item.link}
                    onMouseEnter={() => setHovered(idx)}
                    onClick={(e) => {
                        setActiveIndex(idx);              // Step 2: set active
                        onItemClick && onItemClick(e);
                    }}
                    className="relative px-6 py-2"
                >
                    {/* Step 3: apply background on hover or if active */}
                    {(hovered === idx || activeIndex === idx) && (
                        <motion.div
                            layoutId="hovered"
                            className="absolute inset-0 h-full w-full rounded-full bg-[#FFE0B2]"
                        />
                    )}
                    <span className="relative z-20 text-xl">{item.name}</span>
                </a>
            ))}

            {/* ERP Services Dropdown */}
            <div
                className="relative"
                onMouseEnter={() => {
                    setHovered("erp");
                    setIsERPMenuOpen(true);
                }}
                onMouseLeave={() => {
                    setHovered(null);
                    setIsERPMenuOpen(false);
                }}
            >
                <a className="relative px-6 py-2 text-xl cursor-pointer">
                    {hovered === "erp" && (
                        <motion.div
                            layoutId="hovered"
                            className="absolute inset-0 h-full w-full rounded-full bg-[#FFE0B2] z-10"
                        />
                    )}
                    <span className="relative z-20">ERP Services &#9660;</span>
                </a>

                <AnimatePresence>
                    {isERPMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            className="absolute left-0 w-60 mt-5 text-center rounded-md bg-blue-50 backdrop-blur-3xl opacity-60 shadow-lg py-2 z-50"
                        >
                            {[
                                { name: "Education", href: "/ERPservices/Education" },
                                { name: "Finance", href: "/ERPservices/Finance" },
                                { name: "Medical and Healthcare", href: "/ERPservices/Medical&Healthcare" },
                                { name: "AutoMobile", href: "/ERPservices/AutoMobile" },
                                { name: "Tours & Travels", href: "/ERPservices/TourTravels" },
                                { name: "Services", href: "/ERPservices/Services" },
                            ].map((item, index) => (
                                <a
                                    key={index}
                                    href={item.href}
                                    className="block px-4 py-2 text-lg text-blue-900 hover:bg-orange-100 rounded-full"
                                >
                                    {item.name}
                                </a>
                            ))}
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </motion.div>
    );
};


export const MobileNav = ({ children, className, visible }) => {
    return (
        <motion.div
            animate={{
                backdropFilter: visible ? "blur(10px)" : "none",
                boxShadow: visible
                    ? "0 0 24px rgba(208, 232, 255, 0.2), 0 1px 1px rgba(0, 0, 0, 0.05)"
                    : "none",
                backgroundColor: visible ? "rgba(208, 232, 255, 0.85)" : "transparent",
                width: visible ? "90%" : "100%",
                paddingRight: visible ? "20px" : "0px",
                paddingLeft: visible ? "20px" : "0px",
                borderRadius: visible ? "6px" : "2rem",
                y: visible ? 20 : 0,
            }}
            transition={{
                type: "spring",
                stiffness: 200,
                damping: 50,
            }}
            className={cn(
                "relative z-50 mx-auto flex w-full max-w-[calc(100vw-2rem)] flex-col items-center justify-between px-6 py-4 lg:hidden", // Increased padding (px-6, py-4)
                className
            )}>
            {children}
        </motion.div>
    );
};

export const MobileNavHeader = ({ children, className }) => {
    return (
        <div className={cn("flex w-full flex-row items-center justify-between", className)}>
            {children}
        </div>
    );
};

export const MobileNavMenu = ({ children, className, isOpen }) => {
    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className={cn(
                        "absolute inset-0 h-full w-full rounded-full bg-[#FFE0B2]",
                        className
                    )}>
                    {children}
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export const MobileNavToggle = ({ isOpen, onClick }) => {
    return isOpen ? (
        <IconX className="text-blue-950 text-3xl" onClick={onClick} /> // Increased icon size (text-3xl)
    ) : (
        <IconMenu2 className="text-blue-950 text-3xl" onClick={onClick} /> // Increased icon size (text-3xl)
    );
};

export const NavbarLogo = () => {
    return (
        <a
            href="/"
            className="relative z-20 mr-6 flex items-center space-x-4 px-4 py-3 text-lg font-semibold text-blue-950"> {/* Increased padding and font size */}
            <img src={imgscr} alt="logo" width={150} height={150} />
        </a>
    );
};
