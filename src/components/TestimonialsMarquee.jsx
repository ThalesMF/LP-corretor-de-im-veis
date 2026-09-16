// src/components/TestimonialsMarquee.jsx
import React from 'react';
import TestimonialCard from './TestimonialCard';
import { testimonialsRow1, testimonialsRow2 } from '../data/testimonials';

export default function TestimonialsMarquee() {
  // Duplicamos as listas para o efeito contínuo sem saltos
  const row1 = [...testimonialsRow1, ...testimonialsRow1];
  const row2 = [...testimonialsRow2, ...testimonialsRow2];

  return (
    <section className="py-16 sm:py-24 overflow-hidden bg-brand-bg relative" aria-labelledby="testimonials-title">
      
      {/* Cabeçalho */}
      <div className="text-center max-w-2xl mx-auto mb-14 px-4">
        <span className="text-xs font-semibold uppercase tracking-widest text-brand-gold block mb-2">
          Prova Social & Autoridade
        </span>
        <h2 id="testimonials-title" className="text-2xl sm:text-3xl lg:text-4xl font-bold font-serif text-brand-dark">
          O que meus clientes dizem
        </h2>
        <p className="text-brand-muted text-sm sm:text-base mt-2">
          A confiança de quem já encontrou o imóvel perfeito ou realizou uma excelente negociação com minha assessoria.
        </p>
      </div>

      {/* Gradientes laterais para fade suave */}
      <div className="absolute inset-y-0 left-0 w-16 sm:w-32 bg-gradient-to-r from-brand-bg to-transparent pointer-events-none z-10" />
      <div className="absolute inset-y-0 right-0 w-16 sm:w-32 bg-gradient-to-l from-brand-bg to-transparent pointer-events-none z-10" />

      <div className="space-y-6">
        
        {/* Linha 1 — Movimento para a Esquerda */}
        <div className="flex overflow-hidden group">
          <div className="flex gap-6 animate-marquee-left group-hover:[animation-play-state:paused] will-change-transform">
            {row1.map(function(item, index) {
              return (
                <TestimonialCard key={`row1-${item.id}-${index}`} testimonial={item} />
              );
            })}
          </div>
        </div>

        {/* Linha 2 — Movimento para a Direita */}
        <div className="flex overflow-hidden group">
          <div className="flex gap-6 animate-marquee-right group-hover:[animation-play-state:paused] will-change-transform">
            {row2.map(function(item, index) {
              return (
                <TestimonialCard key={`row2-${item.id}-${index}`} testimonial={item} />
              );
            })}
          </div>
        </div>

      </div>

    </section>
  );
}
