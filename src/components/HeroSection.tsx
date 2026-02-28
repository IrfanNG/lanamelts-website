"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { MagneticButton } from "./MagneticButton";
import { ArrowDown } from "lucide-react";

export function HeroSection() {
    const containerRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

    return (
        <div
            ref={containerRef}
            className="relative h-screen w-full overflow-hidden bg-black"
        >
            {/* Background Image Container with Parallax */}
            <motion.div
                style={{ y }}
                className="absolute inset-0 w-full h-[120%]"
            >
                <Image
                    src="https://images.unsplash.com/photo-1599599810769-bcde5a160d32?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
                    alt="Dark chocolate melting and dripping"
                    fill
                    priority
                    className="object-cover opacity-60 mix-blend-multiply"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/80" />
            </motion.div>

            {/* Content */}
            <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4 pt-20">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.2 }}
                >
                    <h1 className="font-serif text-5xl md:text-7xl lg:text-9xl text-[#FDFCFB] tracking-tight mb-6 max-w-5xl">
                        The Art of <br className="hidden md:block" /> the Melt.
                    </h1>
                </motion.div>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.8 }}
                    className="text-[#FDFCFB]/80 font-sans tracking-widest uppercase text-xs md:text-sm max-w-lg mb-12 leading-relaxed"
                >
                    Artisan brownies handcrafted in Malaysia with premium Belgian cocoa.
                    Rich, decadent, and meant to be savored.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 1 }}
                >
                    <MagneticButton onClick={() => window.scrollTo({ top: window.innerHeight, behavior: "smooth" })}>
                        Shop the Collection
                    </MagneticButton>
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                style={{ opacity }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            >
                <span className="text-[#FDFCFB]/50 uppercase tracking-[0.3em] text-[10px]">Scroll</span>
                <ArrowDown className="w-4 h-4 text-[#FDFCFB]/50 stroke-[1]" />
            </motion.div>
        </div>
    );
}
