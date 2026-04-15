"use client";

import { useCart } from "@/context/CartContext";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { X, Minus, Plus, ShoppingBag } from "lucide-react";
import Image from "next/image";

export function CartSheet() {
    const { items, isCartOpen, setIsCartOpen, removeItem, updateQuantity, cartTotal } = useCart();

    return (
        <Sheet open={isCartOpen} onOpenChange={setIsCartOpen}>
            <SheetContent className="w-full sm:max-w-md border-l border-[#38241a] bg-[#FDFCFB] dark:bg-[#1A0F0A] p-0 flex flex-col h-full font-sans">
                <SheetHeader className="p-6 border-b border-[#e6e6e6] dark:border-[#38241a]">
                    <div className="flex items-center justify-between">
                        <SheetTitle className="font-serif text-2xl dark:text-[#FDFCFB] font-normal tracking-wide flex items-center gap-3">
                            <ShoppingBag className="w-5 h-5 text-primary" strokeWidth={1.5} />
                            Your Bag
                        </SheetTitle>
                    </div>
                </SheetHeader>

                <div className="flex-1 overflow-y-auto p-6 flex flex-col gap-6">
                    {items.length === 0 ? (
                        <div className="flex flex-col items-center justify-center h-full text-center space-y-4 opacity-50 dark:text-[#FDFCFB]">
                            <ShoppingBag className="w-12 h-12 stroke-[1]" />
                            <p className="font-serif tracking-widest uppercase text-sm">Your bag is empty.</p>
                        </div>
                    ) : (
                        items.map((item) => (
                            <div key={item.id} className="flex gap-4 items-start group">
                                <div className="relative w-20 h-24 overflow-hidden bg-muted dark:bg-[#20130d] shrink-0 border border-[#e6e6e6] dark:border-[#38241a]">
                                    <Image
                                        src={item.image}
                                        alt={item.name}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                </div>

                                <div className="flex-1 flex flex-col justify-between h-24 py-1">
                                    <div>
                                        <div className="flex justify-between items-start">
                                            <h3 className="font-serif text-lg leading-tight dark:text-[#FDFCFB]">{item.name}</h3>
                                            <button
                                                onClick={() => removeItem(item.id)}
                                                className="text-muted-foreground hover:text-foreground transition-colors p-1"
                                            >
                                                <X className="w-4 h-4" />
                                            </button>
                                        </div>
                                        <p className="text-primary font-medium tracking-wide text-sm mt-1">RM {item.price.toFixed(2)}</p>
                                    </div>

                                    <div className="flex items-center gap-3 bg-[#f4f4f4] dark:bg-[#20130d] w-max px-2 py-1 border border-[#e6e6e6] dark:border-[#38241a]">
                                        <button
                                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                            className="p-1 text-foreground/70 hover:text-foreground transition-colors dark:text-[#FDFCFB]"
                                        >
                                            <Minus className="w-3 h-3" />
                                        </button>
                                        <span className="text-sm w-4 text-center dark:text-[#FDFCFB]">{item.quantity}</span>
                                        <button
                                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                            className="p-1 text-foreground/70 hover:text-foreground transition-colors dark:text-[#FDFCFB]"
                                        >
                                            <Plus className="w-3 h-3" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))
                    )}
                </div>

                {items.length > 0 && (
                    <div className="p-6 border-t border-[#e6e6e6] dark:border-[#38241a] bg-[#FDFCFB]/80 dark:bg-[#1A0F0A]/80 backdrop-blur-md">
                        <div className="flex justify-between mb-4 font-serif text-lg dark:text-[#FDFCFB]">
                            <span className="tracking-wide">Subtotal</span>
                            <span>RM {cartTotal.toFixed(2)}</span>
                        </div>
                        <p className="text-xs text-muted-foreground mb-6 uppercase tracking-widest">
                            Shipping and taxes calculated at checkout.
                        </p>
                        <button className="w-full bg-primary hover:bg-[#A3824A] text-primary-foreground py-4 uppercase tracking-[0.2em] text-xs font-medium transition-colors">
                            Checkout
                        </button>
                    </div>
                )}
            </SheetContent>
        </Sheet>
    );
}
