import Logo from "./Logo";
import { callLink, siteConfig, whatsappLink } from "@/data/siteConfig";

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Cakes", href: "#cakes" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

const socials = [
  { label: "Instagram", href: siteConfig.social.instagram, icon: "IG" },
  { label: "Facebook", href: siteConfig.social.facebook, icon: "FB" },
  { label: "TikTok", href: siteConfig.social.tiktok, icon: "TT" },
];

export default function Footer() {
  return (
    <footer className="bg-brown pt-16 text-white/80">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid grid-cols-1 gap-10 border-b border-white/10 pb-12 sm:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col items-center text-center sm:items-start sm:text-left">
            <Logo light className="scale-75 sm:items-start" />
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-white/60">
              Beautiful cakes, delicious pastries and thoughtful sweet surprises made for your special moments.
            </p>
          </div>

          <div className="text-center sm:text-left">
            <h4 className="font-display text-base font-bold text-white">Quick Links</h4>
            <ul className="mt-4 space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-sm text-white/60 transition-colors hover:text-coral">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="text-center sm:text-left">
            <h4 className="font-display text-base font-bold text-white">Contact</h4>
            <ul className="mt-4 space-y-2.5 text-sm text-white/60">
              <li>
                <a href={callLink} className="transition-colors hover:text-coral">
                  Call: {siteConfig.phone}
                </a>
              </li>
              <li>
                <a href={whatsappLink} target="_blank" rel="noreferrer" className="transition-colors hover:text-coral">
                  WhatsApp: {siteConfig.whatsapp}
                </a>
              </li>
              <li>{siteConfig.address}</li>
            </ul>
          </div>

          <div className="text-center sm:text-left">
            <h4 className="font-display text-base font-bold text-white">Follow Us</h4>
            <div className="mt-4 flex justify-center gap-3 sm:justify-start">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={social.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-xs font-semibold text-white/70 transition-colors hover:border-coral hover:bg-coral hover:text-white"
                >
                  {social.icon}
                </a>
              ))}
            </div>
            <p className="mt-4 text-xs text-white/40">Social links are placeholders — update with your real handles.</p>
          </div>
        </div>

        <p className="py-6 text-center text-xs text-white/40">
          © {new Date().getFullYear()} {siteConfig.name}. All rights reserved. Made with{" "}
          <span className="text-coral">♥</span> for sweet moments.
        </p>
      </div>
    </footer>
  );
}
