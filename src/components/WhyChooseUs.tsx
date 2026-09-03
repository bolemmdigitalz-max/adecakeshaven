import Reveal from "./Reveal";

const points = [
  { title: "Beautiful custom designs", desc: "Every cake is tailored to your theme, colours and taste." },
  { title: "Freshly made treats", desc: "Baked fresh for every order — never frozen or pre-made." },
  { title: "Perfect for special occasions", desc: "Birthdays, weddings, anniversaries and every celebration in between." },
  { title: "Friendly customer service", desc: "Warm, responsive support from your first message to delivery." },
];

export default function WhyChooseUs() {
  return (
    <section className="relative overflow-hidden bg-brown py-20 sm:py-24">
      <div className="pointer-events-none absolute -right-16 -top-16 h-72 w-72 rounded-full bg-coral/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-20 -left-16 h-72 w-72 rounded-full bg-soft-pink/10 blur-3xl" />

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="mx-auto max-w-xl text-center">
          <span className="font-script text-3xl text-soft-pink">the ade difference</span>
          <h2 className="mt-1 font-display text-3xl font-bold text-white sm:text-4xl">Why Choose Us</h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {points.map((point, i) => (
            <Reveal key={point.title} delay={i * 100}>
              <div className="h-full rounded-2xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur-sm transition-transform duration-300 hover:-translate-y-1.5">
                <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-coral text-white shadow-md">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} className="h-6 w-6">
                    <path d="M5 12.5 9.5 17 19 7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                <h3 className="mt-4 font-display text-base font-bold text-white">{point.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/70">{point.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
