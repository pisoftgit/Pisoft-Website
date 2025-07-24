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
import imgscr from "/Pisoft_logo.png";

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
                backgroundColor: visible ? "rgba(133, 186, 249, 0.3)" : "transparent",
                width: visible ? "40%" : "100%",
                y: visible ? 10 : 0,
            }}
            transition={{
                type: "spring",
                stiffness: 200,
                damping: 50,
            }}
            style={{
                minWidth: "1100px",
            }}
            className={cn(
                "relative z-[60] mx-auto hidden w-auto flex-row items-center justify-between self-start rounded-full px-6 lg:flex",
                className
            )}
        >
            {children}
        </motion.div>
    );
};


export const NavItems = ({ items, className, onItemClick }) => {
    const [hovered, setHovered] = useState(null);
    const [activeIndex, setActiveIndex] = useState(null);
    const dropdownRefs = useRef([]);

    const handleClickOutside = (event) => {
        if (
            dropdownRefs.current.every((ref) => ref && !ref.contains(event.target))
        ) {
            setHovered(null);
        }
    };

    useEffect(() => {
        const currentPath = window.location.pathname;
        const matchedIndex = items.findIndex((item) => item.link === currentPath);
        if (matchedIndex !== -1) setActiveIndex(matchedIndex);
    }, [items]);

    useEffect(() => {
        document.addEventListener("click", handleClickOutside);
        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, []);

    const renderDropdownItems = (children) => {
        return children.map((child, idx) => {
            const hasSubChildren = child.children && child.children.length > 0;

            return (
                <div key={idx} className="relative group text-left">
                    <a
                        href={child.link || "#"}
                        className="block px-4 py-2 text-lg text-blue-950 hover:bg-orange-100 rounded-full whitespace-nowrap"
                    >
                        {child.name} {hasSubChildren ? "▸" : ""}
                    </a>

                    {hasSubChildren && (
                        <div className="absolute left-full top-0 mt-0 ml-2 w-60 rounded-md bg-white shadow-md py-2 z-50 hidden group-hover:block">
                            {renderDropdownItems(child.children)}
                        </div>
                    )}
                </div>
            );
        });
    };

    return (
        <motion.div
            onMouseLeave={() => setHovered(null)}
            className={cn(
                "ml-40 absolute inset-0 hidden flex-1 flex-row items-center justify-center text-lg font-medium text-blue-950 transition duration-200 hover:text-blue-800 lg:flex",
                className
            )}
        >
            {items.map((item, idx) => {
                const isDropdown = item.children && item.children.length > 0;
                const isActive = activeIndex === idx;
                const isHovered = hovered === idx;

                return (
                    <div
                        key={`link-${idx}`}
                        className="relative"
                        onMouseEnter={() => setHovered(idx)}
                        onMouseLeave={() => setHovered(null)}
                        ref={(el) => (dropdownRefs.current[idx] = el)}
                    >
                        <a
                            href={item.link || "#"}
                            onClick={() => {
                                setActiveIndex(idx);
                                onItemClick && onItemClick();
                            }}
                            className="relative px-4 py-2 text-xl cursor-pointer"
                        >
                            {(isHovered || isActive) && (
                                <motion.div
                                    layoutId="hovered"
                                    className="absolute inset-0 h-full w-full rounded-full bg-[#f7c67c] z-10"
                                />
                            )}
                            <span className="relative z-20">
                                {item.name} {isDropdown && "▾"}
                            </span>
                        </a>

                        {/* Dropdown */}
                        {isDropdown && (
                            <AnimatePresence>
                                {isHovered && (
                                    <motion.div
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                        className="absolute left-0 mt-4 w-60 rounded-md bg-white backdrop-blur-xl shadow-md py-2 z-50 text-center"
                                    >
                                        {renderDropdownItems(item.children)}
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        )}
                    </div>
                );
            })}
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
            className="relative z-20 mr-6 flex items-center py-3 text-lg font-semibold text-blue-950"> {/* Increased padding and font size */}
            <img src={imgscr} alt="logo" width={150} height={150} />
        </a>
    );
};
