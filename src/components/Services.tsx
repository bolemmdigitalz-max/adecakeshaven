import Reveal from "./Reveal";

const services = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-8 w-8">
        <path d="M4 20v-3a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v3" strokeLinecap="round" />
        <path d="M4 20h16" strokeLinecap="round" />
        <path d="M7 14V9a5 5 0 0 1 10 0v5" strokeLinecap="round" />
        <path d="M12 9V4" strokeLinecap="round" />
        <circle cx="12" cy="2.5" r="1.2" />
      </svg>
    ),
    title: "Cakes",
    emoji: "🎂",
    description: "Beautiful cakes made for birthdays, celebrations and special occasions.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-8 w-8">
        <path d="M5 11h14l-1.2 8.1a2 2 0 0 1-2 1.9H8.2a2 2 0 0 1-2-1.9L5 11Z" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M6 11a6 6 0 0 1 12 0" strokeLinecap="round" />
        <path d="M12 4c-1 0-1.5.7-1 1.5s1.5.8 1 1.5" strokeLinecap="round" />
      </svg>
    ),
    title: "Pastries",
    emoji: "🧁",
    description: "Fresh and delicious pastries made with care.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-8 w-8">
        <rect x="4" y="9" width="16" height="11" rx="1.5" />
        <path d="M4 9h16M12 9v11" />
        <path d="M12 9C9.5 9 8 7.5 8 6a2 2 0 0 1 4 0 2 2 0 0 1 4 0c0 1.5-1.5 3-4 3Z" strokeLinejoin="round" />
      </svg>
    ),
    title: "Sweet Surprises",
    emoji: "🎁",
    description: "Thoughtful sweet gifts designed to make someone's day special.",
  },
];

export default function Services() {
  return (
    <section className="relative bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="mx-auto max-w-xl text-center">
          <span className="font-script text-3xl text-coral">what we offer</span>
          <h2 className="mt-1 font-display text-3xl font-bold text-brown sm:text-4xl">Sweetness For Every Moment</h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-3 sm:gap-8">
          {services.map((service, i) => (
            <Reveal key={service.title} delay={i * 120}>
              <div className="group h-full rounded-3xl border border-soft-pink/40 bg-blush/40 p-8 text-center shadow-sm transition-all duration-300 hover:-translate-y-2 hover:bg-blush/70 hover:shadow-xl hover:shadow-coral/10">
                <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-white text-coral shadow-md transition-transform duration-300 group-hover:scale-110">
                  {service.icon}
                </div>
                <h3 className="font-display text-xl font-bold text-brown">
                  <span className="mr-1">{service.emoji}</span>
                  {service.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-dark/70">{service.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
