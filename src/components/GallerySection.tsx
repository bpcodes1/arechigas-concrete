import { useScrollReveal } from "@/hooks/useScrollReveal";
import { pub } from "@/lib/publicUrl";

const galleryImages = [
  { src: pub("/concrete7.webp"),   alt: "Concrete work by Arechiga's" },
  { src: pub("/concrete8.webp"),   alt: "Concrete patio installation" },
  { src: pub("/concrete9.webp"),   alt: "Concrete driveway project" },
  { src: pub("/concrete10.webp"),  alt: "Stamped concrete finish" },
  { src: pub("/concrete11.webp"),  alt: "Concrete slab pour" },
  { src: pub("/concrete12.webp"),  alt: "Retaining wall installation" },
  { src: pub("/concrete13.webp"),  alt: "Finished concrete walkway" },
  { src: pub("/concrete14.webp"),  alt: "Concrete steps and edging" },
  { src: pub("/concrete15.webp"),  alt: "Concrete project by Arechiga's" },
  { src: pub("/concrete16.webp"),  alt: "Finished concrete work" },
  { src: pub("/hottub.webp"),      alt: "Hot tub concrete surround" },
  { src: pub("/pool_after2.webp"), alt: "Pool deck after resurfacing" },
  { src: pub("/hero.webp"),        alt: "Arechiga's Concrete project" },
  { src: pub("/hero1.webp"),       alt: "Custom concrete work Salem OR" },
  { src: pub("/2022-04-07.webp"),  alt: "Concrete installation project" },
  { src: pub("/trucks.webp"),      alt: "Arechiga's Concrete crew and trucks" },
];

// Desktop (3 cols): col0=6 imgs, col1&col2=5 each
const COL_HEIGHTS: number[][] = [
  [240, 180, 200, 160, 220],
  [160, 240, 180, 220],
  [200, 160, 240, 180],
];

// Mobile (2 cols): 8 imgs each, last image flex-grows to align bottoms
const COL_HEIGHTS_2: number[][] = [
  [200, 160, 220, 180, 200, 160, 220],
  [160, 220, 180, 200, 160, 220, 180],
];

const GallerySection = () => {
  const header = useScrollReveal();
  const gallery = useScrollReveal();

  const columns3 = [
    galleryImages.filter((_, i) => i % 3 === 0),
    galleryImages.filter((_, i) => i % 3 === 1),
    galleryImages.filter((_, i) => i % 3 === 2),
  ];

  const columns2 = [
    galleryImages.filter((_, i) => i % 2 === 0),
    galleryImages.filter((_, i) => i % 2 === 1),
  ];

  return (
    <section className="py-20 md:py-28 bg-muted">
      <div className="container mx-auto px-4 lg:px-8">

        {/* Header */}
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

        {/* Mobile — 2 explicit columns, bottoms aligned */}
        <div className="flex md:hidden gap-3 items-stretch">
          {columns2.map((col, colIdx) => (
            <div key={colIdx} className="flex-1 flex flex-col gap-3">
              {col.map((img, rowIdx) => {
                const isLast = rowIdx === col.length - 1;
                const h = COL_HEIGHTS_2[colIdx]?.[rowIdx];
                return (
                  <div
                    key={img.src}
                    className={`overflow-hidden rounded-xl border border-border shadow-sm${isLast ? " flex-1 min-h-[140px]" : ""}`}
                    style={!isLast && h ? { height: `${h}px` } : undefined}
                  >
                    <img src={img.src} alt={img.alt} className="w-full h-full object-cover" loading="lazy" />
                  </div>
                );
              })}
            </div>
          ))}
        </div>

        {/* Tablet + Desktop — 3 explicit columns, bottoms aligned */}
        <div
          ref={gallery.ref}
          className={`hidden md:flex gap-4 items-stretch scroll-hidden ${gallery.isVisible ? "scroll-visible" : ""}`}
        >
          {columns3.map((col, colIdx) => (
            <div key={colIdx} className="flex-1 flex flex-col gap-4">
              {col.map((img, rowIdx) => {
                const isLast = rowIdx === col.length - 1;
                const h = COL_HEIGHTS[colIdx]?.[rowIdx];
                return (
                  <div
                    key={img.src}
                    className={`overflow-hidden rounded-xl border border-border shadow-sm hover:shadow-md transition-shadow${isLast ? " flex-1 min-h-[160px]" : ""}`}
                    style={!isLast && h ? { height: `${h}px` } : undefined}
                  >
                    <img
                      src={img.src}
                      alt={img.alt}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                );
              })}
            </div>
          ))}
        </div>

        {/* See More button */}
        <div className="mt-10 text-center">
          <a
            href="https://share.google/CC89ewui8gDOXVxoZ"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 cta-lime px-8 py-3 rounded-md text-sm font-bold uppercase tracking-wider transition-all hover:scale-[1.02] active:scale-[0.98]"
          >
            See More of Our Work on Google
          </a>
        </div>

      </div>
    </section>
  );
};

export default GallerySection;
