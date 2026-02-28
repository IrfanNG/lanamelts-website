"use client";

import { useState, useEffect } from "react";
import { useCart } from "@/context/CartContext";
import { ShoppingBag, Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const { itemCount, setIsCartOpen } = useCart();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={`fixed top-0 w-full z-50 transition-all duration-500 max-w-[100vw] ${isScrolled
                    ? "bg-[#FDFCFB]/80 dark:bg-[#1A0F0A]/80 backdrop-blur-md border-b border-[#e6e6e6]/50 dark:border-[#38241a]/50 py-4"
                    : "bg-transparent py-6"
                }`}
        >
            <div className="container mx-auto px-6 lg:px-12 flex items-center justify-between">

                {/* Mobile Menu */}
                <div className="lg:hidden">
                    <Sheet>
                        <SheetTrigger asChild>
                            <button aria-label="Open Menu">
                                <Menu className="w-6 h-6 text-foreground stroke-[1.5]" />
                            </button>
                        </SheetTrigger>
                        <SheetContent side="left" className="w-[300px] sm:w-[400px] border-r border-[#38241a] bg-[#FDFCFB] dark:bg-[#1A0F0A]">
                            <div className="flex flex-col gap-8 mt-12 pl-4">
                                {["Shop", "Our Story", "Corporate Gifting", "FAQ"].map((link) => (
                                    <a key={link} href={`#${link.toLowerCase().replace(" ", "-")}`} className="font-serif text-3xl tracking-wide dark:text-[#FDFCFB] hover:text-primary transition-colors">
                                        {link}
                                    </a>
                                ))}
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>

                {/* Desktop Links (Left) */}
                <div className="hidden lg:flex items-center gap-10">
                    {["Shop", "Our Story"].map((link) => (
                        <a key={link} href={`#${link.toLowerCase().replace(" ", "-")}`} className="text-sm font-medium tracking-[0.15em] uppercase text-foreground/80 hover:text-primary transition-colors">
                            {link}
                        </a>
                    ))}
                </div>

                {/* Logo (Center) */}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                    <a href="#" className={`font-serif text-3xl tracking-wider text-foreground transition-all duration-500 ${isScrolled ? 'text-2xl' : 'text-4xl'}`}>
                        Lana Melts
                    </a>
                </div>

                {/* Desktop Links & Cart (Right) */}
                <div className="flex items-center gap-8 lg:gap-10">
                    <div className="hidden lg:flex items-center gap-10">
                        {["Gifting", "FAQ"].map((link) => (
                            <a key={link} href={`#${link.toLowerCase().replace(" ", "-")}`} className="text-sm font-medium tracking-[0.15em] uppercase text-foreground/80 hover:text-primary transition-colors">
                                {link}
                            </a>
                        ))}
                    </div>

                    <button
                        onClick={() => setIsCartOpen(true)}
                        className="relative flex items-center group"
                        aria-label="Open Shopping Bag"
                    >
                        <ShoppingBag className="w-6 h-6 lg:w-5 lg:h-5 text-foreground stroke-[1.5] group-hover:text-primary transition-colors" />
                        <span className="absolute -top-1 -right-2 bg-primary text-primary-foreground text-[10px] font-bold h-4 w-4 flex items-center justify-center rounded-full pointer-events-none">
                            {itemCount}
                        </span>
                    </button>
                </div>

            </div>
        </nav>
    );
}
