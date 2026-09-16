// src/components/AboutBroker.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { Award, CheckCircle2, Phone, MapPin } from 'lucide-react';

export default function AboutBroker() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24" aria-labelledby="about-title">
      <div className="bg-white rounded-3xl p-8 sm:p-12 lg:p-16 border border-brand-border/80 shadow-md">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Foto Circular do Corretor */}
          <div className="lg:col-span-4 flex flex-col items-center text-center">
            <div className="relative">
              <div className="w-48 h-48 sm:w-56 sm:h-56 rounded-full overflow-hidden border-4 border-brand-gold/60 shadow-xl bg-brand-dark/10">
                <img
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=600&q=80"
                  alt="João Silva - Corretor de Imóveis"
                  loading="lazy"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="absolute bottom-2 right-2 bg-brand-dark text-white p-2 rounded-full border-2 border-white shadow-md">
                <Award className="w-5 h-5 text-brand-gold" />
              </div>
            </div>

            <div className="mt-4">
              <span className="inline-block px-3 py-1 rounded-full bg-brand-bg text-brand-dark text-xs font-semibold uppercase tracking-wider border border-brand-border">
                CRECI 00000-F
              </span>
            </div>
          </div>

          {/* Texto de Apresentação */}
          <div className="lg:col-span-8">
            <span className="text-xs font-semibold uppercase tracking-widest text-brand-gold block mb-2">
              Marca Pessoal & Compromisso
            </span>
            <h2 id="about-title" className="text-2xl sm:text-3xl lg:text-4xl font-bold font-serif text-brand-dark mb-4">
              Olá, eu sou o João Silva.
            </h2>
            <p className="text-brand-text/90 text-base sm:text-lg leading-relaxed mb-6">
              Sou corretor de imóveis especializado em Granja e nas principais localidades do litoral norte do Ceará. Minha missão é transformar a busca pelo imóvel ideal em uma jornada segura, transparente e sem burocracias.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              <div className="flex items-center gap-2.5 text-sm text-brand-text">
                <CheckCircle2 className="w-4 h-4 text-brand-gold shrink-0" />
                <span>Mais de 8 anos de experiência na região</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm text-brand-text">
                <CheckCircle2 className="w-4 h-4 text-brand-gold shrink-0" />
                <span>Assessoria jurídica e conferência documental</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm text-brand-text">
                <CheckCircle2 className="w-4 h-4 text-brand-gold shrink-0" />
                <span>Amplo portfólio em Granja, Jijoca e Camocim</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm text-brand-text">
                <CheckCircle2 className="w-4 h-4 text-brand-gold shrink-0" />
                <span>Atendimento próximo e humanizado</span>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href="https://wa.me/5588999999999?text=Ol%C3%A1%20Jo%C3%A3o!%20Gostaria%20de%20conversar%20sobre%20as%20oportunidades%20imobili%C3%A1rias."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold gap-2 shadow-sm"
              >
                <Phone className="w-4 h-4" />
                <span>Fale diretamente comigo</span>
              </a>

              <Link
                to="/sobre"
                className="btn-outline text-sm"
              >
                Conhecer minha trajetória
              </Link>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
