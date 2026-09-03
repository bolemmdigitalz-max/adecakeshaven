import Reveal from "./Reveal";
import { Heart, Blob } from "./Decor";

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden py-20 sm:py-24">
      <div className="pointer-events-none absolute -left-24 top-10 -z-10 h-72 w-72 opacity-60">
        <Blob />
      </div>

      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:gap-16">
        <Reveal className="relative order-2 mx-auto w-full max-w-md lg:order-1 lg:max-w-none">
          <div className="grid grid-cols-2 gap-4">
            <img
              src="/images/cake-birthday-1.jpg"
              alt="Chocolate birthday cake with red ribbon"
              className="col-span-2 h-52 w-full rounded-3xl border-4 border-white object-cover shadow-lg sm:h-64"
            />
            <img
              src="/images/pastries-tray.jpg"
              alt="Tray of fresh pastries"
              className="h-32 w-full rounded-2xl border-4 border-white object-cover shadow-lg sm:h-40"
            />
            <img
              src="/images/sweet-surprise-box.jpg"
              alt="Sweet surprise gift box"
              className="h-32 w-full rounded-2xl border-4 border-white object-cover shadow-lg sm:h-40"
            />
          </div>
          <Heart className="absolute -right-3 -top-3 h-8 w-8 text-coral/70" />
        </Reveal>

        <Reveal className="order-1 text-center lg:order-2 lg:text-left" delay={100}>
          <span className="font-script text-3xl text-coral">our story</span>
          <h2 className="mt-1 font-display text-3xl font-bold text-brown sm:text-4xl">About Ade Cakes Haven</h2>
          <p className="mx-auto mt-5 max-w-lg text-base leading-relaxed text-dark/75 sm:text-lg lg:mx-0">
            At Ade Cakes Haven, we believe every special moment deserves something sweet. From beautiful
            celebration cakes to delicious pastries and thoughtful surprises, we create treats designed to
            make your moments memorable.
          </p>
          <p className="mx-auto mt-4 max-w-lg text-base leading-relaxed text-dark/75 lg:mx-0">
            Every order is made fresh, by hand, with the same love and care we'd put into a cake for our own
            family — because that's exactly the kind of haven we want to be for yours.
          </p>

          <div className="mx-auto mt-8 grid max-w-md grid-cols-2 gap-4 lg:mx-0">
            {["Handmade with love", "Premium ingredients", "Custom designs", "On-time delivery"].map((item) => (
              <div key={item} className="flex items-center gap-2 rounded-xl bg-blush/50 px-3 py-2.5 text-left">
                <Heart className="h-3.5 w-3.5 flex-shrink-0 text-coral" />
                <span className="text-sm font-medium text-brown">{item}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
