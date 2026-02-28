"use client";

import { Instagram, Facebook, Mail } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-[#1A0F0A] text-[#FDFCFB] border-t border-[#38241a] py-20">
            <div className="container mx-auto px-6 lg:px-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 lg:gap-8 mb-16">

                    <div className="col-span-1 md:col-span-2">
                        <h2 className="font-serif text-4xl tracking-wider text-[#C5A059] mb-6">Lana Melts</h2>
                        <p className="text-[#FDFCFB]/70 font-sans tracking-wide leading-relaxed max-w-sm">
                            Artisan brownies handcrafted in Malaysia with premium Belgian cocoa.
                            Elevating the standard of everyday indulgence.
                        </p>
                    </div>

                    <div className="flex flex-col gap-4">
                        <h3 className="uppercase text-xs font-medium tracking-[0.2em] text-[#FDFCFB]/50 mb-2">Shop</h3>
                        {["All Products", "Corporate Gifting", "FAQ", "Shipping Policy"].map((link) => (
                            <a key={link} href="#" className="font-serif text-lg text-[#FDFCFB] hover:text-[#C5A059] transition-colors w-fit">
                                {link}
                            </a>
                        ))}
                    </div>

                    <div className="flex flex-col gap-4">
                        <h3 className="uppercase text-xs font-medium tracking-[0.2em] text-[#FDFCFB]/50 mb-2">Connect</h3>
                        <div className="flex items-center gap-6 mt-2">
                            <a href="#" className="w-10 h-10 rounded-full border border-[#38241a] flex items-center justify-center hover:border-[#C5A059] hover:bg-[#C5A059]/10 transition-colors">
                                <Instagram className="w-4 h-4 text-[#C5A059] stroke-[1.5]" />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full border border-[#38241a] flex items-center justify-center hover:border-[#C5A059] hover:bg-[#C5A059]/10 transition-colors">
                                <Facebook className="w-4 h-4 text-[#C5A059] stroke-[1.5]" />
                            </a>
                            <a href="mailto:hello@lanamelts.com" className="w-10 h-10 rounded-full border border-[#38241a] flex items-center justify-center hover:border-[#C5A059] hover:bg-[#C5A059]/10 transition-colors">
                                <Mail className="w-4 h-4 text-[#C5A059] stroke-[1.5]" />
                            </a>
                        </div>
                    </div>

                </div>

                <div className="pt-8 border-t border-[#38241a] flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-sans tracking-widest text-[#FDFCFB]/40 uppercase">
                    <p>&copy; {new Date().getFullYear()} Lana Melts. All rights reserved.</p>
                    <div className="flex gap-6">
                        <a href="#" className="hover:text-[#C5A059]">Privacy</a>
                        <a href="#" className="hover:text-[#C5A059]">Terms</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
