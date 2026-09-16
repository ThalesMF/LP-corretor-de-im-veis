// src/components/FinalCTA.jsx
import React from 'react';
import { Phone, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function FinalCTA() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20" aria-label="Chamada para ação final">
      <div className="relative rounded-3xl overflow-hidden bg-brand-dark px-6 py-14 sm:px-12 sm:py-20 text-center shadow-2xl">
        
        {/* Efeito decorativo sutil de fundo */}
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-brand-gold/10 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-brand-gold/10 blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-2xl mx-auto">
          <span className="inline-block px-3 py-1 rounded-full bg-white/10 text-brand-gold text-xs font-semibold uppercase tracking-widest mb-4 backdrop-blur-sm border border-white/10">
            Dê o Primeiro Passo
          </span>
          
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-white leading-tight mb-4">
            Seu próximo imóvel pode estar mais perto do que você imagina.
          </h2>

          <p className="text-white/80 text-base sm:text-lg leading-relaxed mb-8 max-w-xl mx-auto">
            Vamos encontrar uma oportunidade que faça sentido para você e sua família, com toda a tranquilidade que você merece.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://wa.me/5588999999999?text=Ol%C3%A1%20Jo%C3%A3o!%20Gostaria%20de%20encontrar%20meu%20im%C3%B3vel."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold w-full sm:w-auto px-8 py-4 text-base font-semibold shadow-lg gap-2"
            >
              <Phone className="w-5 h-5" />
              <span>Entrar em contato</span>
            </a>

            <Link
              to="/imoveis"
              className="w-full sm:w-auto px-8 py-4 rounded-lg font-medium text-white border border-white/20 hover:bg-white/10 transition-colors flex items-center justify-center gap-2"
            >
              <span>Encontrar meu imóvel</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
