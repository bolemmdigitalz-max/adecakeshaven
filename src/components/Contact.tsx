import Reveal from "./Reveal";
import { callLink, siteConfig, whatsappLink } from "@/data/siteConfig";

export default function Contact() {
  return (
    <section id="contact" className="relative bg-blush/30 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal className="mx-auto max-w-xl text-center">
          <span className="font-script text-3xl text-coral">get in touch</span>
          <h2 className="mt-1 font-display text-3xl font-bold text-brown sm:text-4xl">Contact Us</h2>
          <p className="mt-3 text-sm text-dark/70 sm:text-base">
            We'd love to hear about your celebration — reach out and let's plan something sweet.
          </p>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
          <Reveal delay={0}>
            <a
              href={callLink}
              className="flex h-full flex-col items-center gap-3 rounded-3xl border border-soft-pink/40 bg-white p-8 text-center shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl"
            >
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-blush text-coral">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-6 w-6">
                  <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3.1-8.7A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.9.6 2.8a2 2 0 0 1-.5 2.1L8 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.5c.9.3 1.8.5 2.8.6a2 2 0 0 1 1.8 2.2Z" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              <h3 className="font-display text-lg font-bold text-brown">Call Us</h3>
              <p className="text-sm font-medium text-coral">{siteConfig.phone}</p>
              <p className="text-xs text-dark/60">Tap to call directly</p>
            </a>
          </Reveal>

          <Reveal delay={100}>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="flex h-full flex-col items-center gap-3 rounded-3xl border border-soft-pink/40 bg-white p-8 text-center shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl"
            >
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-whatsapp/10 text-whatsapp">
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
                  <path d="M17.6 6.3A8.9 8.9 0 0 0 12 4a8.9 8.9 0 0 0-7.9 13.1L3 21l4-1.1A9 9 0 0 0 12 21a9 9 0 0 0 5.6-14.7ZM12 19.3a7.3 7.3 0 0 1-3.7-1l-.3-.2-2.5.7.7-2.4-.2-.3A7.3 7.3 0 1 1 19.3 12 7.3 7.3 0 0 1 12 19.3Z" />
                </svg>
              </span>
              <h3 className="font-display text-lg font-bold text-brown">WhatsApp</h3>
              <p className="text-sm font-medium text-whatsapp">{siteConfig.whatsapp}</p>
              <p className="text-xs text-dark/60">Chat with us anytime</p>
            </a>
          </Reveal>

          <Reveal delay={200}>
            <div className="flex h-full flex-col items-center gap-3 rounded-3xl border border-soft-pink/40 bg-white p-8 text-center shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl">
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-blush text-coral">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-6 w-6">
                  <path d="M12 21s-7-4.6-9.3-9.1C1.4 8.3 3 4.5 6.7 4.5c2 0 3.5 1.2 4.3 2.6.8-1.4 2.3-2.6 4.3-2.6 3.7 0 5.3 3.8 4 6.4C19 16.4 12 21 12 21Z" strokeLinejoin="round" />
                </svg>
              </span>
              <h3 className="font-display text-lg font-bold text-brown">Location</h3>
              <p className="text-sm font-medium text-brown">{siteConfig.address}</p>
              <p className="text-xs text-dark/60">Delivery available on request</p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
