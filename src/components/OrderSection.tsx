import Reveal from "./Reveal";
import { Heart } from "./Decor";
import { callLink, siteConfig, whatsappLink } from "@/data/siteConfig";

export default function OrderSection() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-24">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-coral to-coral-dark px-6 py-14 text-center shadow-2xl shadow-coral/30 sm:px-16 sm:py-16">
            <Heart className="absolute left-8 top-8 h-6 w-6 text-white/30" />
            <Heart className="absolute bottom-10 right-10 h-8 w-8 text-white/20" />
            <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-white/15 text-3xl">
              🎂
            </span>
            <h2 className="mt-6 font-display text-3xl font-bold text-white sm:text-4xl">
              Ready to Make Your Moment Sweeter?
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-sm leading-relaxed text-white/90 sm:text-base">
              Place your order today and let {siteConfig.name} add something sweet to your celebration.
            </p>

            <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="flex w-full items-center justify-center gap-2 rounded-full bg-whatsapp px-8 py-3.5 text-sm font-semibold text-white shadow-lg transition-transform duration-300 hover:-translate-y-0.5 sm:w-auto"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                  <path d="M17.6 6.3A8.9 8.9 0 0 0 12 4a8.9 8.9 0 0 0-7.9 13.1L3 21l4-1.1A9 9 0 0 0 12 21a9 9 0 0 0 5.6-14.7ZM12 19.3a7.3 7.3 0 0 1-3.7-1l-.3-.2-2.5.7.7-2.4-.2-.3A7.3 7.3 0 1 1 19.3 12 7.3 7.3 0 0 1 12 19.3Zm4-5.5c-.2-.1-1.3-.6-1.5-.7s-.4-.1-.5.1-.6.7-.7.8-.3.2-.5.1a5.9 5.9 0 0 1-1.7-1.1 6.6 6.6 0 0 1-1.2-1.5c-.1-.2 0-.4.1-.5l.4-.4.2-.4v-.4c-.1-.1-.5-1.2-.7-1.7s-.4-.4-.5-.4h-.5a.9.9 0 0 0-.6.3 2.9 2.9 0 0 0-.9 2.1 5 5 0 0 0 1 2.5 11.5 11.5 0 0 0 4.2 3.7c.6.3 1 .4 1.4.5a3.3 3.3 0 0 0 1.5.1 2.4 2.4 0 0 0 1.6-1.1 2 2 0 0 0 .1-1.1c-.1-.1-.2-.2-.4-.3Z" />
                </svg>
                Order via WhatsApp
              </a>
              <a
                href={callLink}
                className="flex w-full items-center justify-center gap-2 rounded-full border-2 border-white px-8 py-3.5 text-sm font-semibold text-white transition-colors duration-300 hover:bg-white hover:text-coral sm:w-auto"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-5 w-5">
                  <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3.1-8.7A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.9.6 2.8a2 2 0 0 1-.5 2.1L8 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.5c.9.3 1.8.5 2.8.6a2 2 0 0 1 1.8 2.2Z" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                Call Us
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
