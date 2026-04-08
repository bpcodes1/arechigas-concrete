import { useScrollReveal } from "@/hooks/useScrollReveal";
import { pub } from "@/lib/publicUrl";

const galleryImages = [
  { src: pub("/concrete7.webp"), alt: "Concrete work by Arechiga's" },
  { src: pub("/concrete8.webp"), alt: "Concrete patio installation" },
  { src: pub("/concrete9.webp"), alt: "Concrete driveway project" },
  { src: pub("/concrete10.webp"), alt: "Stamped concrete finish" },
  { src: pub("/concrete11.webp"), alt: "Concrete slab pour" },
  { src: pub("/concrete12.webp"), alt: "Retaining wall installation" },
  { src: pub("/concrete13.webp"), alt: "Finished concrete walkway" },
  { src: pub("/concrete14.webp"), alt: "Concrete steps and edging" },
  { src: pub("/trucks.webp"), alt: "Arechiga's Concrete crew and trucks" },
];

const GallerySection = () => {
  const header = useScrollReveal();
  const gallery = useScrollReveal();

  return (
    <section className="py-20 md:py-28 bg-muted">
      <div className="container mx-auto px-4 lg:px-8">
        <div
          ref={header.ref}
          className={`text-center max-w-2xl mx-auto mb-12 scroll-hidden ${header.isVisible ? "scroll-visible" : ""}`}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-foreground mb-4">
            Recent Work
          </h2>
          <p className="text-lg text-muted-foreground italic">
            A sample of what gets built when a crew takes pride in the finished product.
          </p>
        </div>

        <div
          ref={gallery.ref}
          className={`columns-2 md:columns-3 gap-4 scroll-hidden ${gallery.isVisible ? "scroll-visible" : ""}`}
        >
          {galleryImages.map((img, i) => (
            <div
              key={img.src}
              className={`break-inside-avoid mb-4 overflow-hidden rounded-xl border border-border shadow-sm hover:shadow-md transition-shadow scroll-hidden delay-${Math.min(i + 1, 5)} ${gallery.isVisible ? "scroll-visible" : ""}`}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full object-cover"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
