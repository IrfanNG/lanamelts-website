import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { ProductGrid } from "@/components/ProductGrid";
import { WhyLana } from "@/components/WhyLana";
import { FaqSection } from "@/components/FaqSection";
import { Footer } from "@/components/Footer";
import { CartSheet } from "@/components/CartSheet";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground flex flex-col font-sans selection:bg-primary selection:text-primary-foreground">
      <Navbar />
      <CartSheet />

      <div className="flex-1 w-full">
        <HeroSection />
        <ProductGrid />
        <WhyLana />
        <FaqSection />
      </div>

      <Footer />
    </main>
  );
}
