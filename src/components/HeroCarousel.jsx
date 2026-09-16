// src/components/HeroCarousel.jsx
import React, { useState, useEffect } from 'react';
import { MapPin } from 'lucide-react';

const heroSlides = [
  {
    id: 1,
    label: "Casa Contemporânea",
    location: "Granja, CE",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1920&q=85"
  },
  {
    id: 2,
    label: "Apartamento com Vista",
    location: "Granja, CE",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1920&q=85"
  },
  {
    id: 3,
    label: "Terreno em Loteamento Nobre",
    location: "Granja, CE",
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1920&q=85"
  },
  {
    id: 4,
    label: "Casa de Praia & Refúgio",
    location: "Jijoca de Jericoacoara, CE",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1920&q=85"
  }
];

export default function HeroCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(function() {
    // Respeita preferência do usuário por redução de movimento
    const prefersReducedMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const timer = setInterval(function() {
      setCurrentIndex(function(prevIndex) {
        return (prevIndex + 1) % heroSlides.length;
      });
    }, 5000);

    return function() {
      clearInterval(timer);
    };
  }, []);

  return (
    <section className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-6" aria-label="Apresentação visual de imóveis">
      <div className="relative w-full h-[55vh] min-h-[380px] sm:h-[65vh] sm:min-h-[460px] md:h-[72vh] md:min-h-[520px] rounded-2xl sm:rounded-3xl overflow-hidden bg-brand-dark shadow-xl">
        
        {heroSlides.map(function(slide, index) {
          const isCurrent = index === currentIndex;
          return (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                isCurrent ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
              }`}
              aria-hidden={!isCurrent}
            >
              <img
                src={slide.image}
                alt={`${slide.label} • ${slide.location}`}
                fetchpriority={index === 0 ? "high" : "low"}
                loading={index === 0 ? "eager" : "lazy"}
                className="w-full h-full object-cover object-center transform scale-100 transition-transform duration-[6000ms] ease-out"
              />
              
              {/* Gradiente suave apenas no rodapé da imagem para contraste do badge */}
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/70 via-transparent to-black/10 pointer-events-none" />

              {/* Identificação discreta do imóvel (conforme PRD RF-01) */}
              <div className="absolute bottom-6 left-6 sm:bottom-8 sm:left-8 pointer-events-none">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-dark/75 backdrop-blur-md border border-white/15 text-white shadow-lg">
                  <MapPin className="w-3.5 h-3.5 text-brand-gold shrink-0" />
                  <span className="text-xs sm:text-sm font-medium tracking-wide">
                    {slide.label} • {slide.location}
                  </span>
                </div>
              </div>
            </div>
          );
        })}

      </div>
    </section>
  );
}
