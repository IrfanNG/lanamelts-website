"use client";

import { ScrollReveal } from "./ScrollReveal";
import { Coffee, Package, Clock } from "lucide-react";

const features = [
    {
        icon: Coffee,
        title: "70% Dark Cocoa",
        desc: "We source only the finest Belgian covertures, ensuring a deep, complex flavor profile without overwhelming sweetness.",
    },
    {
        icon: Clock,
        title: "Baked Daily",
        desc: "Every batch is prepared fresh in the morning to guarantee the perfect fudgy center and crackly top.",
    },
    {
        icon: Package,
        title: "Gift-Ready Packaging",
        desc: "Presented in our signature minimalist boxes with gold foiling, making them the perfect gift for any occasion.",
    },
];

export function WhyLana() {
    return (
        <section id="our-story" className="py-24 bg-[#1A0F0A] text-[#FDFCFB] border-t border-[#38241a]">
            <div className="container mx-auto px-6 lg:px-12">

                <div className="flex flex-col items-center mb-20 text-center">
                    <ScrollReveal>
                        <span className="uppercase text-xs font-medium tracking-[0.3em] text-[#C5A059]">The Craft</span>
                    </ScrollReveal>
                    <ScrollReveal yOffset={30} delay={0.1}>
                        <h2 className="font-serif text-4xl md:text-5xl lg:text-5xl mt-4 max-w-2xl leading-tight">
                            Why Lana Melts?
                        </h2>
                    </ScrollReveal>
                    <ScrollReveal yOffset={30} delay={0.2}>
                        <div className="w-16 h-[1px] bg-[#C5A059] mt-8" />
                    </ScrollReveal>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-12">
                    {features.map((feature, i) => (
                        <ScrollReveal key={i} delay={0.2 + (i * 0.15)} yOffset={40}>
                            <div className="flex flex-col items-center text-center group">
                                <div className="w-16 h-16 rounded-full bg-[#20130d] border border-[#38241a] flex items-center justify-center mb-6 group-hover:border-[#C5A059] group-hover:bg-[#C5A059]/10 transition-colors duration-500">
                                    <feature.icon className="w-6 h-6 text-[#C5A059] stroke-[1.5]" />
                                </div>
                                <h3 className="font-serif text-2xl mb-4 text-[#FDFCFB] group-hover:text-[#C5A059] transition-colors">
                                    {feature.title}
                                </h3>
                                <p className="text-[#FDFCFB]/70 font-sans tracking-wide leading-relaxed mt-2 max-w-sm">
                                    {feature.desc}
                                </p>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>

            </div>
        </section>
    );
}
