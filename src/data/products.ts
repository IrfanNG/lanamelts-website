export interface Product {
    id: string;
    name: string;
    description: string;
    price: number;
    image: string;
}

export const products: Product[] = [
    {
        id: "m1",
        name: "The Classic Fudge",
        description: "Our signature dense, gooey brownie made with 70% dark Belgian cocoa.",
        price: 65,
        image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=800&q=80",
    },
    {
        id: "m2",
        name: "Sea Salt Caramel",
        description: "Classic fudge brownie swirled with house-made salted caramel.",
        price: 75,
        image: "https://images.unsplash.com/photo-1621303837174-89787a7d4729?auto=format&fit=crop&w=800&q=80",
    },
    {
        id: "m3",
        name: "Dark Chocolate Raspberry",
        description: "Tart raspberry swirl cutting through rich, intense dark chocolate.",
        price: 80,
        image: "https://images.unsplash.com/photo-1582293041079-7814c2f12063?auto=format&fit=crop&w=800&q=80",
    },
    {
        id: "m4",
        name: "Roasted Pecan",
        description: "Topped with caramelized roasted pecans for a satisfying crunch.",
        price: 75,
        image: "https://images.unsplash.com/photo-1606312619070-d48b4c652a52?auto=format&fit=crop&w=800&q=80",
    },
    {
        id: "m5",
        name: "Matcha White Chocolate",
        description: "Premium Uji matcha infused with creamy Belgian white chocolate.",
        price: 85,
        image: "https://images.unsplash.com/photo-1515037893149-de7f840978e2?auto=format&fit=crop&w=800&q=80",
    },
    {
        id: "m6",
        name: "The Tasting Box",
        description: "A curated selection of our finest flavors. Perfect for gifting.",
        price: 130,
        image: "https://images.unsplash.com/photo-1513201099705-a9746e1e201f?auto=format&fit=crop&w=800&q=80",
    },
];
