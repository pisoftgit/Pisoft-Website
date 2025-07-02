"use client";
import React from "react";
import { motion } from "framer-motion"; // corrected import path
import { cn } from "../lib/util";

export function LampDemo() {
    return (
        <LampContainer>
            <motion.h1
                initial={{ opacity: 0, y: 200 }}
                whileInView={{ opacity: 1, y: -100 }}
                transition={{
                    delay: 0.3,
                    duration: 0.8,
                    ease: "easeInOut",
                }}
                viewport={{ once: true }}
                className="text-center text-4xl font-bold tracking-tight text-blue-950 drop-shadow-md md:text-7xl"
            >
                SERVICE PROVIDER'S SYSTEM MANAGEMENT ERP <br /> (SPSME)
            </motion.h1>
        </LampContainer>
    );
}

export const LampContainer = ({ children, className }) => {
    return (
        <div
            className={cn(
                "relative z-0 flex w-full max-h-[150px] min-h-[150px] flex-col items-center justify-center",
                className
            )}
        >
            <div className="relative z-50 flex flex-col items-center px-5">
                {children}
            </div>
            
        </div>
    );
};
