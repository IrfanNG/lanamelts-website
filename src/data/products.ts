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
        image: "https://images.unsplash.com/photo-1624353365286-3f8d62daad51?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
        id: "m2",
        name: "Sea Salt Caramel",
        description: "Classic fudge brownie swirled with house-made salted caramel.",
        price: 75,
        image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
        id: "m3",
        name: "Dark Chocolate Raspberry",
        description: "Tart raspberry swirl cutting through rich, intense dark chocolate.",
        price: 80,
        image: "https://images.unsplash.com/photo-1551024506-0cb98416fb8e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
        id: "m4",
        name: "Roasted Pecan",
        description: "Topped with caramelized roasted pecans for a satisfying crunch.",
        price: 75,
        image: "https://images.unsplash.com/photo-1548600810-7aa6fd569107?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
        id: "m5",
        name: "Matcha White Chocolate",
        description: "Premium Uji matcha infused with creamy Belgian white chocolate.",
        price: 85,
        image: "https://images.unsplash.com/photo-1632516429598-f29eebd150da?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
        id: "m6",
        name: "The Tasting Box",
        description: "A curated selection of our finest flavors. Perfect for gifting.",
        price: 130,
        image: "https://images.unsplash.com/photo-1600863821733-4fba8b476e3d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
];
