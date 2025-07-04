"use client";
import { cn } from "../lib/util";
import { IconMenu2, IconX } from "@tabler/icons-react";
import {
    motion,
    AnimatePresence,
    useScroll,
    useMotionValueEvent,
} from "motion/react";

import React, { useRef, useState } from "react";
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
                    ? "0 0 24px rgba(208, 232, 255, 0.3), 0 1px 1px rgba(0, 0, 0, 0.05)"
                    : "none",
                backgroundColor: visible ? "rgba(208, 232, 255, 0.5)" : "transparent",
                width: visible ? "40%" : "100%",
                y: visible ? 20 : 0,
            }}
            transition={{
                type: "spring",
                stiffness: 200,
                damping: 50,
            }}
            style={{ minWidth: "800px" }}
            className={cn(
                "relative z-[60] mx-auto hidden w-full max-w-7xl flex-row items-center justify-between self-start rounded-full px-4 py-2 lg:flex",
                className
            )}>
            {children}
        </motion.div>
    );
};

export const NavItems = ({ items, className, onItemClick }) => {
    const [hovered, setHovered] = useState(null);

    return (
        <motion.div
            onMouseLeave={() => setHovered(null)}
            className={cn(
                "absolute inset-0 hidden flex-1 flex-row items-center justify-center space-x-2 text-sm font-medium text-blue-900 transition duration-200 hover:text-blue-950 lg:flex lg:space-x-2",
                className
            )}>
            {items.map((item, idx) => (
                <a
                    onMouseEnter={() => setHovered(idx)}
                    onClick={onItemClick}
                    className="relative px-4 py-5"
                    key={`link-${idx}`}
                    href={item.link}>
                    {hovered === idx && (
                        <motion.div
                            layoutId="hovered"
                            className="absolute inset-0 h-full w-full rounded-full bg-[#FFE0B2]" />
                    )}
                    <span className="relative z-20">{item.name}</span>
                </a>
            ))}
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
                paddingRight: visible ? "12px" : "0px",
                paddingLeft: visible ? "12px" : "0px",
                borderRadius: visible ? "4px" : "2rem",
                y: visible ? 20 : 0,
            }}
            transition={{
                type: "spring",
                stiffness: 200,
                damping: 50,
            }}
            className={cn(
                "relative z-50 mx-auto flex w-full max-w-[calc(100vw-2rem)] flex-col items-center justify-between px-0 py-2 lg:hidden",
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
        <IconX className="text-blue-950" onClick={onClick} />
    ) : (
        <IconMenu2 className="text-blue-950" onClick={onClick} />
    );
};

export const NavbarLogo = () => {
    return (
        <a
            href="/"
            className="relative z-20 mr-4 flex items-center space-x-2 px-2 py-4 text-sm font-normal text-blue-950">
            <img src={imgscr} alt="logo" width={50} height={150} />
        </a>
    );
};

