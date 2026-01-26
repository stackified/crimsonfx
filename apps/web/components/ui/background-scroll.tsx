"use client";

import React from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

export function BackgroundScroll() {
    const { scrollYProgress } = useScroll();

    // Use springs for smoother movement without jarring jumps
    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    // Transform positions with translate3d for GPU acceleration
    const y1 = useTransform(smoothProgress, [0, 1], ["0%", "30%"]);
    const y2 = useTransform(smoothProgress, [0, 1], ["0%", "-20%"]);
    const y3 = useTransform(smoothProgress, [0, 1], ["0%", "15%"]);

    // Dynamic opacity based on scroll
    const opacity = useTransform(smoothProgress, [0, 0.5, 1], [0.4, 0.7, 0.4]);

    return (
        <div className="fixed inset-0 -z-50 overflow-hidden pointer-events-none">
            {/* Primary Glow */}
            <motion.div
                style={{
                    y: y1,
                    opacity,
                    willChange: "transform"
                }}
                className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-primary/10 blur-[120px] rounded-full"
            />

            {/* Secondary Glow */}
            <motion.div
                style={{
                    y: y2,
                    opacity: useTransform(smoothProgress, [0, 0.5, 1], [0.3, 0.6, 0.3]),
                    willChange: "transform"
                }}
                className="absolute top-[30%] right-[-5%] w-[70%] h-[70%] bg-blue-500/5 blur-[140px] rounded-full"
            />

            {/* Bottom Glow */}
            <motion.div
                style={{
                    y: y3,
                    opacity,
                    willChange: "transform"
                }}
                className="absolute bottom-[-10%] left-[20%] w-[50%] h-[50%] bg-primary/5 blur-[100px] rounded-full"
            />

            {/* Static Grain Texture Overlay (Low Performance Impact) */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
        </div>
    );
}
