import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Lana Melts | Artisan Brownies",
  description: "Artisan brownies handcrafted in Malaysia with premium Belgian cocoa.",
};

import { CartProvider } from "../context/CartContext";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="antialiased min-h-screen bg-background text-foreground font-sans selection:bg-primary selection:text-primary-foreground">
        <CartProvider>
          {children}
        </CartProvider>
      </body>
    </html>
  );
}
