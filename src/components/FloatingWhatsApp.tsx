import { whatsappLink } from "@/data/siteConfig";

export default function FloatingWhatsApp() {
  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-whatsapp text-white shadow-xl shadow-whatsapp/40 transition-transform duration-300 hover:scale-110 sm:bottom-7 sm:right-7"
    >
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-7 w-7">
        <path d="M17.6 6.3A8.9 8.9 0 0 0 12 4a8.9 8.9 0 0 0-7.9 13.1L3 21l4-1.1A9 9 0 0 0 12 21a9 9 0 0 0 5.6-14.7ZM12 19.3a7.3 7.3 0 0 1-3.7-1l-.3-.2-2.5.7.7-2.4-.2-.3A7.3 7.3 0 1 1 19.3 12 7.3 7.3 0 0 1 12 19.3Zm4-5.5c-.2-.1-1.3-.6-1.5-.7s-.4-.1-.5.1-.6.7-.7.8-.3.2-.5.1a5.9 5.9 0 0 1-1.7-1.1 6.6 6.6 0 0 1-1.2-1.5c-.1-.2 0-.4.1-.5l.4-.4.2-.4v-.4c-.1-.1-.5-1.2-.7-1.7s-.4-.4-.5-.4h-.5a.9.9 0 0 0-.6.3 2.9 2.9 0 0 0-.9 2.1 5 5 0 0 0 1 2.5 11.5 11.5 0 0 0 4.2 3.7c.6.3 1 .4 1.4.5a3.3 3.3 0 0 0 1.5.1 2.4 2.4 0 0 0 1.6-1.1 2 2 0 0 0 .1-1.1c-.1-.1-.2-.2-.4-.3Z" />
      </svg>
    </a>
  );
}
