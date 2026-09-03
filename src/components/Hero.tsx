import { whatsappLink } from "@/data/siteConfig";
import { Heart, DotGrid, Leaf } from "./Decor";

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-28 sm:pt-32">
      {/* Decorative background elements inspired by the flyer */}
      <div className="pointer-events-none absolute -left-10 top-16 -z-10 opacity-70">
        <DotGrid />
      </div>
      <div className="pointer-events-none absolute right-0 top-0 -z-10 h-64 w-64 rounded-full bg-blush blur-2xl sm:h-96 sm:w-96" />
      <div className="pointer-events-none absolute -right-6 top-24 -z-10 hidden sm:block">
        <Leaf />
      </div>
      <Heart className="pointer-events-none absolute left-[8%] top-40 -z-10 text-coral/40 sm:left-[15%]" />
      <Heart className="pointer-events-none absolute left-[20%] top-52 -z-10 h-3 w-3 text-coral/30 sm:left-[24%]" />

      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-5 pb-16 sm:px-8 lg:grid-cols-2 lg:gap-8 lg:pb-24">
        <div className="text-center lg:text-left">
          <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-soft-pink/60 bg-white/70 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-coral">
            <Heart className="h-3 w-3" /> Freshly Baked With Love
          </span>
          <h1 className="font-display text-4xl font-bold leading-[1.15] text-brown sm:text-5xl lg:text-[3.4rem]">
            Where Sweetness <span className="text-coral">Finds A Home</span>
          </h1>
          <p className="mx-auto mt-5 max-w-md text-base leading-relaxed text-dark/75 sm:text-lg lg:mx-0">
            Beautiful cakes, delicious pastries and thoughtful sweet surprises made for your special moments.
          </p>

          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-start">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="w-full rounded-full bg-coral px-8 py-3.5 text-center text-sm font-semibold text-white shadow-lg shadow-coral/30 transition-transform duration-300 hover:-translate-y-0.5 hover:bg-coral-dark sm:w-auto"
            >
              Order Now
            </a>
            <a
              href="#cakes"
              className="w-full rounded-full border-2 border-coral/70 px-8 py-3.5 text-center text-sm font-semibold text-coral transition-colors duration-300 hover:bg-coral hover:text-white sm:w-auto"
            >
              View Our Cakes
            </a>
          </div>

          <div className="mx-auto mt-10 flex max-w-md items-center justify-center gap-8 lg:mx-0 lg:justify-start">
            <div className="text-center lg:text-left">
              <p className="font-display text-2xl font-bold text-coral">100%</p>
              <p className="text-xs text-dark/60">Homemade &amp; Fresh</p>
            </div>
            <div className="h-8 w-px bg-soft-pink/50" />
            <div className="text-center lg:text-left">
              <p className="font-display text-2xl font-bold text-coral">Custom</p>
              <p className="text-xs text-dark/60">Designs For You</p>
            </div>
            <div className="h-8 w-px bg-soft-pink/50" />
            <div className="text-center lg:text-left">
              <p className="font-display text-2xl font-bold text-coral">Fast</p>
              <p className="text-xs text-dark/60">Order Turnaround</p>
            </div>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-md lg:max-w-none">
          <div className="absolute -inset-4 -z-10 rounded-[2.5rem] bg-gradient-to-br from-soft-pink/40 to-blush/60 sm:-inset-6" />
          <div className="overflow-hidden rounded-[2rem] border-4 border-white shadow-2xl shadow-coral/20 sm:rounded-[2.5rem]">
            <img
              src="/images/hero-cake.jpg"
              alt="Elegant pink birthday cake by Ade Cakes Haven"
              className="h-[340px] w-full object-cover sm:h-[440px] lg:h-[500px]"
            />
          </div>
          <div className="absolute -bottom-6 -left-4 flex items-center gap-3 rounded-2xl border border-soft-pink/50 bg-white px-4 py-3 shadow-xl sm:-left-8 sm:px-5">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-blush text-lg">🎂</span>
            <div>
              <p className="font-display text-sm font-bold text-brown">Made To Order</p>
              <p className="text-[11px] text-dark/60">Custom cakes for every occasion</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
