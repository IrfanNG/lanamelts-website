"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import React, { useRef } from "react";

interface MagneticButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    className?: string;
    variant?: "primary" | "secondary" | "outline";
}

export function MagneticButton({
    children,
    className = "",
    variant = "primary",
    ...props
}: MagneticButtonProps) {
    const ref = useRef<HTMLButtonElement>(null);

    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x);
    const mouseYSpring = useSpring(y);

    // Keep button center point subtle
    const btnX = useTransform(mouseXSpring, [-0.5, 0.5], ["-8%", "8%"]);
    const btnY = useTransform(mouseYSpring, [-0.5, 0.5], ["-8%", "8%"]);

    const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
        if (!ref.current) return;

        const rect = ref.current.getBoundingClientRect();

        // Calculate 0,0 at center
        const width = rect.width;
        const height = rect.height;

        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;

        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;

        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    const baseStyles = "relative inline-flex items-center justify-center overflow-hidden px-8 py-4 uppercase tracking-widest text-sm font-medium transition-colors focus:outline-none";
    
    const variantStyles = {
        primary: "bg-primary text-primary-foreground hover:bg-[#A3824A]",
        secondary: "bg-secondary text-secondary-foreground hover:bg-[#111]",
        outline: "border border-border/50 backdrop-blur-sm bg-transparent hover:bg-white/5",
    }[variant];

    return (
        <motion.button
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            onClick={props.onClick}
            style={{ x: btnX, y: btnY }}
            className={`${baseStyles} ${variantStyles} ${className}`}
            disabled={props.disabled}
            type={props.type}
        >
            <span className="relative z-10">{children}</span>
        </motion.button>
    );
}
