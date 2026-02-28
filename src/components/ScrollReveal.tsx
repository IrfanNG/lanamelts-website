"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ScrollRevealProps {
    children: ReactNode;
    delay?: number;
    className?: string;
    yOffset?: number;
}

export function ScrollReveal({ children, delay = 0, className = "", yOffset = 50 }: ScrollRevealProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: yOffset }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1], // Custom elegant easing
                delay
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
}
