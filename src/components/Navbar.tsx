import { useEffect, useState } from "react";
import Logo from "./Logo";
import { cn } from "@/utils/cn";
import { whatsappLink } from "@/data/siteConfig";

const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Cakes", href: "#cakes" },
  { label: "Pastries", href: "#pastries" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = () => setOpen(false);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled ? "bg-cream/95 shadow-[0_4px_20px_rgba(59,32,35,0.08)] backdrop-blur-sm" : "bg-cream/60 backdrop-blur-sm",
      )}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-2 sm:px-8">
        <a href="#home" className="flex items-center" aria-label="Ade Cakes Haven Home">
          <Logo className="scale-[0.55] origin-left sm:scale-75" />
        </a>

        <ul className="hidden items-center gap-8 lg:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="font-display text-[15px] font-medium text-brown/90 transition-colors hover:text-coral"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden lg:block">
          <a
            href={whatsappLink}
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-coral px-6 py-2.5 text-sm font-semibold text-white shadow-md shadow-coral/30 transition-transform duration-300 hover:-translate-y-0.5 hover:bg-coral-dark"
          >
            Order Now
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-full border border-soft-pink/60 lg:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <span className={cn("h-0.5 w-5 bg-brown transition-all", open && "translate-y-2 rotate-45")} />
          <span className={cn("h-0.5 w-5 bg-brown transition-all", open && "opacity-0")} />
          <span className={cn("h-0.5 w-5 bg-brown transition-all", open && "-translate-y-2 -rotate-45")} />
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={cn(
          "overflow-hidden bg-cream/98 shadow-lg backdrop-blur-sm transition-[max-height] duration-300 ease-in-out lg:hidden",
          open ? "max-h-96" : "max-h-0",
        )}
      >
        <ul className="flex flex-col gap-1 px-6 py-4">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={handleNavClick}
                className="block rounded-lg px-3 py-2.5 font-display text-base font-medium text-brown hover:bg-blush hover:text-coral"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li className="pt-2">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
              onClick={handleNavClick}
              className="block rounded-full bg-coral px-6 py-3 text-center text-sm font-semibold text-white shadow-md shadow-coral/30"
            >
              Order Now
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
