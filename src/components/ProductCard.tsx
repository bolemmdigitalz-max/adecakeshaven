import type { Product } from "@/data/products";
import { whatsappLink } from "@/data/siteConfig";

export default function ProductCard({ product }: { product: Product }) {
  const orderLink = `${whatsappLink}%20-%20${encodeURIComponent(product.name)}`;

  return (
    <div className="group flex flex-col overflow-hidden rounded-3xl border border-soft-pink/40 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-coral/15">
      <div className="relative overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <span className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-coral shadow-sm">
          {product.category}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-display text-lg font-bold text-brown">{product.name}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-dark/70">{product.description}</p>
        <div className="mt-4 flex items-center justify-between gap-3">
          <span className="text-sm font-semibold text-coral">{product.price}</span>
          <a
            href={orderLink}
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-coral px-4 py-2 text-xs font-semibold text-white shadow-sm transition-colors duration-300 hover:bg-coral-dark"
          >
            Order Now
          </a>
        </div>
      </div>
    </div>
  );
}
