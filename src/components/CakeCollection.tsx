import { useMemo, useState } from "react";
import { categories, products } from "@/data/products";
import ProductCard from "./ProductCard";
import Reveal from "./Reveal";
import { cn } from "@/utils/cn";

export default function CakeCollection() {
  const [active, setActive] = useState<string>("All");
  const filters = ["All", ...categories];

  const filtered = useMemo(
    () => (active === "All" ? products : products.filter((p) => p.category === active)),
    [active],
  );

  return (
    <section id="cakes" className="relative bg-blush/30 py-20 sm:py-24">
      <div id="pastries" className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="mx-auto max-w-xl text-center">
          <span className="font-script text-3xl text-coral">our menu</span>
          <h2 className="mt-1 font-display text-3xl font-bold text-brown sm:text-4xl">Cake &amp; Pastry Collection</h2>
          <p className="mt-3 text-sm text-dark/70 sm:text-base">
            A peek at our favourites — every piece can be customised to fit your celebration.
          </p>
        </Reveal>

        <Reveal className="mt-10 flex flex-wrap justify-center gap-2.5 sm:gap-3" delay={100}>
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActive(filter)}
              className={cn(
                "rounded-full border px-4 py-2 text-xs font-semibold transition-all duration-300 sm:text-sm",
                active === filter
                  ? "border-coral bg-coral text-white shadow-md shadow-coral/30"
                  : "border-soft-pink/60 bg-white text-brown hover:border-coral hover:text-coral",
              )}
            >
              {filter}
            </button>
          ))}
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-7 lg:grid-cols-3">
          {filtered.map((product, i) => (
            <Reveal key={product.id} delay={(i % 3) * 100}>
              <ProductCard product={product} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
