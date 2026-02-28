"use client";

import { products, Product } from "@/data/products";
import { useCart } from "@/context/CartContext";
import { ScrollReveal } from "./ScrollReveal";
import Image from "next/image";
import { Plus } from "lucide-react";

export function ProductGrid() {
    const { addItem } = useCart();

    return (
        <section id="shop" className="py-24 bg-[#FDFCFB] dark:bg-[#1A0F0A]">
            <div className="container mx-auto px-6 lg:px-12">
                <div className="flex flex-col items-center mb-16 space-y-4">
                    <ScrollReveal>
                        <span className="uppercase text-xs font-medium tracking-[0.3em] text-muted-foreground">Premium Selection</span>
                    </ScrollReveal>
                    <ScrollReveal yOffset={30} delay={0.1}>
                        <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground text-center">
                            The Melts
                        </h2>
                    </ScrollReveal>
                    <ScrollReveal yOffset={30} delay={0.2}>
                        <div className="w-16 h-[1px] bg-primary mt-8" />
                    </ScrollReveal>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
                    {products.map((product, index) => (
                        <ProductCard
                            key={product.id}
                            product={product}
                            onAdd={() => addItem(product)}
                            index={index}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

function ProductCard({ product, onAdd, index }: { product: Product, onAdd: () => void, index: number }) {
    // Stagger animation based on row/col position
    const delay = Math.min((index % 3) * 0.15, 0.45);

    return (
        <ScrollReveal delay={delay} yOffset={40}>
            <div className="group flex flex-col items-start gap-4 cursor-pointer relative">
                <div className="relative w-full aspect-[4/5] bg-muted dark:bg-[#20130d] overflow-hidden border border-[#e6e6e6] dark:border-[#38241a] group-hover:border-primary/50 transition-colors duration-500">
                    <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover transition-transform duration-1000 group-hover:scale-110"
                    />

                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />

                    {/* Quick Add overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500 bg-gradient-to-t from-black/80 to-transparent flex justify-center pb-6">
                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                onAdd();
                            }}
                            className="bg-primary hover:bg-[#A3824A] text-primary-foreground text-xs uppercase tracking-widest px-6 py-3 font-medium flex items-center gap-2 transition-transform active:scale-95"
                        >
                            <Plus className="w-3 h-3 stroke-[3]" />
                            Quick Add
                        </button>
                    </div>
                </div>

                <div className="w-full flex justify-between items-start font-serif group-hover:text-primary transition-colors">
                    <h3 className="text-xl md:text-2xl text-foreground dark:text-[#FDFCFB] pr-4">{product.name}</h3>
                    <span className="text-lg md:text-xl text-primary whitespace-nowrap pt-1 font-sans font-medium tracking-wide">
                        RM {product.price}
                    </span>
                </div>
                <p className="text-muted-foreground text-sm font-sans tracking-wide leading-relaxed -mt-2">
                    {product.description}
                </p>
            </div>
        </ScrollReveal>
    );
}
