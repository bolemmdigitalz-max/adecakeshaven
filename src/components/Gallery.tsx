import Reveal from "./Reveal";

const galleryImages = [
  { src: "/images/cake-pink-ruffle.jpg", alt: "Pink ruffle crown birthday cake", tall: true },
  { src: "/images/cake-hearts-gold.jpg", alt: "Gold trim hearts celebration cake", tall: false },
  { src: "/images/gallery-extra-1.jpg", alt: "Slice of pink layered cake", tall: false },
  { src: "/images/cake-custom-floral.jpg", alt: "Custom floral tier cake", tall: true },
  { src: "/images/gallery-extra-2.jpg", alt: "Birthday celebration table with cake", tall: false },
  { src: "/images/gallery-extra-3.jpg", alt: "Birthday celebration table with cake", tall: false },
  { src: "/images/gallery-extra-4.jpg", alt: "Birthday celebration table with cake", tall: false },
  { src: "/images/cake-birthday-1.jpg", alt: "Chocolate cake with red ribbon", tall: false },
];

export default function Gallery() {
  return (
    <section id="gallery" className="relative bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="mx-auto max-w-xl text-center">
          <span className="font-script text-3xl text-coral">sweet moments</span>
          <h2 className="mt-1 font-display text-3xl font-bold text-brown sm:text-4xl">Our Gallery</h2>

        </Reveal>

        <div className="mt-12 columns-2 gap-4 sm:columns-3 sm:gap-5 [&>*]:mb-4 sm:[&>*]:mb-5">
          {galleryImages.map((img, i) => (
            <Reveal key={img.src} delay={(i % 3) * 100} className="break-inside-avoid">
              <div className="group relative overflow-hidden rounded-2xl border border-soft-pink/30 shadow-sm">
                <img
                  src={img.src}
                  alt={img.alt}
                  className={`w-full object-cover transition-transform duration-500 group-hover:scale-110 ${
                    img.tall ? "h-72 sm:h-96" : "h-52 sm:h-64"
                  }`}
                />
                <div className="absolute inset-0 flex items-end bg-gradient-to-t from-brown/60 via-transparent to-transparent p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <p className="text-sm font-medium text-white">{img.alt}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-8 text-center text-xs text-dark/50" delay={200}>

        </Reveal>
      </div>
    </section>
  );
}
