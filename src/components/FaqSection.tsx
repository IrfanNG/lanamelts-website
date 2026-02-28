"use client";

import { ScrollReveal } from "./ScrollReveal";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
    {
        question: "Do you offer nationwide delivery?",
        answer: "Currently, we only offer delivery within Klang Valley via same-day runner services to ensure our brownies arrive in perfect condition. Nationwide courier shipping is coming soon."
    },
    {
        question: "How long do the brownies last?",
        answer: "Our brownies are best consumed within 3 days at room temperature. You can store them in an airtight container in the fridge for up to 7 days. For the best experience, reheat in the microwave for 15 seconds before eating."
    },
    {
        question: "Are your ingredients Halal-certified?",
        answer: "While we do not have official Jakim Halal certification yet, we source 100% Halal ingredients and our kitchen maintains strictly pork-free and alcohol-free practices."
    },
    {
        question: "Do you cater for weddings or corporate events?",
        answer: "Yes, we offer custom packaging and bulk ordering for events. Please reach out to us via our 'Corporate Gifting' page for a custom quotation."
    },
    {
        question: "Can I customize a Tasting Box?",
        answer: "The Tasting Box comes as a pre-curated selection of our best sellers and seasonal flavors, so individual flavor customization isn't available at the moment."
    }
];

export function FaqSection() {
    return (
        <section id="faq" className="py-24 bg-[#FDFCFB] dark:bg-[#1A0F0A]">
            <div className="container mx-auto px-6 lg:px-12 max-w-4xl">
                <ScrollReveal>
                    <div className="flex flex-col items-center mb-16 text-center">
                        <span className="uppercase text-xs font-medium tracking-[0.3em] text-muted-foreground">Information</span>
                        <h2 className="font-serif text-4xl md:text-5xl lg:text-5xl mt-4 text-foreground leading-tight">
                            Frequently Asked Questions
                        </h2>
                        <div className="w-16 h-[1px] bg-primary mt-8" />
                    </div>
                </ScrollReveal>

                <ScrollReveal delay={0.2} yOffset={40}>
                    <Accordion type="single" collapsible className="w-full">
                        {faqs.map((faq, index) => (
                            <AccordionItem
                                key={index}
                                value={`item-${index}`}
                                className="border-b border-border py-4"
                            >
                                <AccordionTrigger className="font-serif text-xl md:text-2xl text-foreground hover:text-primary transition-colors hover:no-underline text-left">
                                    {faq.question}
                                </AccordionTrigger>
                                <AccordionContent className="text-muted-foreground font-sans text-base leading-relaxed pt-4 pb-6 max-w-3xl">
                                    {faq.answer}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </ScrollReveal>
            </div>
        </section>
    );
}
