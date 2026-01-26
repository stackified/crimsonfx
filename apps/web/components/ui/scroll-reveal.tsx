"use client";

import React, { ReactNode } from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface ScrollRevealProps {
    children: ReactNode;
    width?: "fit-content" | "100%";
    delay?: number;
    duration?: number;
    direction?: "up" | "down" | "left" | "right";
    distance?: number;
    once?: boolean;
    className?: string;
}

export const ScrollReveal = ({
    children,
    width = "100%",
    delay = 0.2,
    duration = 0.8,
    direction = "up",
    distance = 50,
    once = true,
    className = "",
}: ScrollRevealProps) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once });

    const getVariants = () => {
        switch (direction) {
            case "up":
                return { hidden: { opacity: 0, y: distance }, visible: { opacity: 1, y: 0 } };
            case "down":
                return { hidden: { opacity: 0, y: -distance }, visible: { opacity: 1, y: 0 } };
            case "left":
                return { hidden: { opacity: 0, x: distance }, visible: { opacity: 1, x: 0 } };
            case "right":
                return { hidden: { opacity: 0, x: -distance }, visible: { opacity: 1, x: 0 } };
            default:
                return { hidden: { opacity: 0, y: distance }, visible: { opacity: 1, y: 0 } };
        }
    };

    return (
        <div ref={ref} style={{ position: "relative", width, overflow: "visible" }} className={className}>
            <motion.div
                variants={getVariants()}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                transition={{ duration, delay, ease: "easeOut" }}
                style={{ willChange: "opacity, transform" }}
            >
                {children}
            </motion.div>
        </div>
    );
};
