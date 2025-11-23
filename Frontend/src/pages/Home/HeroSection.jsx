import React, { useState, useEffect, useRef } from "react";

const heroImages = [
  {
    webp: "https://images.unsplash.com/photo-1544531586-fde5298cdd40?q=80&w=1200&auto=format&fit=crop.webp",
    fallback: "https://images.unsplash.com/photo-1544531586-fde5298cdd40?q=80&w=1200&auto=format&fit=crop",
    alt: "Finance classroom"
  },
  {
    webp: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1200&auto=format&fit=crop.webp",
    fallback: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1200&auto=format&fit=crop",
    alt: "Stock market learning"
  },
  {
    webp: "https://images.unsplash.com/photo-1554224154-22dec7ec8818?q=80&w=1200&auto=format&fit=crop.webp",
    fallback: "https://images.unsplash.com/photo-1554224154-22dec7ec8818?q=80&w=1200&auto=format&fit=crop",
    alt: "Finance meeting"
  }
];

function HeroSection() {
  const [index, setIndex] = useState(0);
  const sliderRef = useRef(null);
  const intervalTime = 5000; // 5 seconds autoplay

  // Auto slide
  useEffect(() => {
    const slider = sliderRef.current;

    const interval = setInterval(() => {
      setIndex((prev) => (prev === heroImages.length - 1 ? 0 : prev + 1));
    }, intervalTime);

    // Pause on hover
    slider.addEventListener("mouseenter", () => clearInterval(interval));
    slider.addEventListener("mouseleave", () => clearInterval(interval));

    return () => clearInterval(interval);
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "ArrowLeft") prevSlide();
      if (e.key === "ArrowRight") nextSlide();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  });

  const nextSlide = () => setIndex((prev) => (prev === heroImages.length - 1 ? 0 : prev + 1));
  const prevSlide = () => setIndex((prev) => (prev === 0 ? heroImages.length - 1 : prev - 1));

  return (
    <section ref={sliderRef} className="relative h-[500px] md:h-[600px] mb-16 overflow-hidden">

      {/* Slide Images */}
      <div className="absolute inset-0 w-full h-full">
        {heroImages.map((img, i) => (
          <picture
            key={i}
            className={`absolute inset-0 transition-opacity duration-[1s] ease-in-out ${
              index === i ? "opacity-100" : "opacity-0"
            }`}
          >
            {/* Responsive WebP */}
            <source srcSet={img.webp} type="image/webp" />
            <img
              src={img.fallback}
              alt={img.alt}
              loading="lazy"
              className="w-full h-full object-cover"
            />
          </picture>
        ))}

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent"></div>
      </div>

      {/* Text + CTA */}
      <div className="relative h-full max-w-7xl mx-auto px-6 md:px-12 flex flex-col justify-center">
        <div className="max-w-2xl text-white">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            Rishihood University's<br />
            Official Finance &<br />
            Investment Club
          </h1>

          <p className="text-gray-200 text-lg mb-8 max-w-lg">
            Learn, invest, and grow with a community of finance enthusiasts.
          </p>

          <div className="flex gap-4">
            <button className="bg-[#C0003D] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#a00033] transition-colors">
              Join Finanza
            </button>
            <button className="border border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-black transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </div>

      {/* Navigation arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 text-white text-xl bg-black/40 hover:bg-black/60 p-2 rounded-full"
        aria-label="Previous Slide"
      >
        ←
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 text-white text-xl bg-black/40 hover:bg-black/60 p-2 rounded-full"
        aria-label="Next Slide"
      >
        →
      </button>

      {/* Pagination Dots */}
      <div className="absolute bottom-4 w-full flex justify-center gap-2">
        {heroImages.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`w-3 h-3 rounded-full ${index === i ? "bg-white" : "bg-white/40"}`}
            aria-label={`Slide ${i + 1}`}
          ></button>
        ))}
      </div>
    </section>
  );
}

export default HeroSection;