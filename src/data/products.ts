// Product / cake catalogue data.
// The business owner can easily replace image, name, description and price here
// without touching any UI component code.

export interface Product {
  id: string;
  name: string;
  category: "Birthday Cakes" | "Celebration Cakes" | "Custom Cakes" | "Pastries" | "Sweet Surprises";
  description: string;
  price: string;
  image: string;
}

export const categories: Product["category"][] = [
  "Birthday Cakes",
  "Celebration Cakes",
  "Custom Cakes",
  "Pastries",
  "Sweet Surprises",
];

export const products: Product[] = [
  {
    id: "birthday-classic-red-ribbon",
    name: "Classic Red Ribbon Birthday Cake",
    category: "Birthday Cakes",
    description: "Rich chocolate sponge finished with white buttercream swirls and a satin ribbon.",
    price: "Price on request",
    image: "/images/cake-birthday-1.jpg",
  },
  {
    id: "pink-ruffle-crown-cake",
    name: "Pink Ruffle Crown Cake",
    category: "Birthday Cakes",
    description: "Soft pink ruffled buttercream topped with a delicate gold crown for the birthday queen.",
    price: "Price on request",
    image: "/images/cake-pink-ruffle.jpg",
  },
  {
    id: "gold-trim-hearts-cake",
    name: "Gold Trim Hearts Celebration Cake",
    category: "Celebration Cakes",
    description: "Elegant white cake with gold trim, heart accents and a hand-tied ribbon bow.",
    price: "Price on request",
    image: "/images/cake-hearts-gold.jpg",
  },
  {
    id: "custom-floral-tier-cake",
    name: "Custom Floral Tier Cake",
    category: "Custom Cakes",
    description: "A bespoke two-tier design with sugar flowers, built around your theme and colours.",
    price: "Price on request",
    image: "/images/cake-custom-floral.jpg",
  },
  {
    id: "assorted-pastry-tray",
    name: "Assorted Pastry Tray",
    category: "Pastries",
    description: "A delightful mix of fresh cupcakes and tarts, perfect for sharing at any gathering.",
    price: "Price on request",
    image: "/images/pastries-tray.jpg",
  },
  {
    id: "sweet-surprise-gift-box",
    name: "Sweet Surprise Gift Box",
    category: "Sweet Surprises",
    description: "A thoughtfully packaged box of treats and mini cakes to brighten someone's day.",
    price: "Price on request",
    image: "/images/sweet-surprise-box.jpg",
  },
];
