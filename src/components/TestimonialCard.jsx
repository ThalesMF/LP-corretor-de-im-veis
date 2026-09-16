// src/components/TestimonialCard.jsx
import React from 'react';
import { Star, Quote } from 'lucide-react';

export default function TestimonialCard({ testimonial }) {
  return (
    <div className="w-[320px] sm:w-[380px] shrink-0 bg-white rounded-2xl p-6 border border-brand-border/80 shadow-sm flex flex-col justify-between select-none">
      <div>
        {/* Estrelas de Avaliação */}
        <div className="flex items-center gap-1 mb-3 text-amber-500">
          {[...Array(5)].map(function(_, i) {
            return (
              <Star key={i} className="w-4 h-4 fill-amber-500 text-amber-500" />
            );
          })}
        </div>

        {/* Citação */}
        <p className="text-sm sm:text-base text-brand-dark/90 leading-relaxed italic mb-4">
          “{testimonial.text}”
        </p>
      </div>

      {/* Dados do Cliente */}
      <div className="flex items-center gap-3 pt-3 border-t border-brand-border/60">
        <img
          src={testimonial.photo}
          alt={testimonial.name}
          loading="lazy"
          className="w-11 h-11 rounded-full object-cover border-2 border-brand-gold shrink-0"
        />
        <div className="truncate">
          <span className="block font-serif font-bold text-brand-dark text-sm leading-tight truncate">
            {testimonial.name}
          </span>
          <span className="block text-xs text-brand-muted mt-0.5">
            {testimonial.location}
          </span>
        </div>
      </div>
    </div>
  );
}
