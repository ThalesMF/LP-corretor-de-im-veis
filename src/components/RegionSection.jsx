// src/components/RegionSection.jsx
import React from 'react';
import { regions } from '../data/regions';
import { MapPin, Compass } from 'lucide-react';

export default function RegionSection() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20" aria-labelledby="region-title">
      
      {/* Cabeçalho */}
      <div className="max-w-3xl mb-12">
        <span className="text-xs font-semibold uppercase tracking-widest text-brand-gold block mb-2">
          Conhecimento Local
        </span>
        <h2 id="region-title" className="text-2xl sm:text-3xl lg:text-4xl font-bold font-serif text-brand-dark">
          Conheça a Região
        </h2>
        <p className="text-brand-text/80 text-base sm:text-lg mt-3 italic font-serif">
          “Mais do que encontrar um imóvel, encontre o lugar certo para viver.”
        </p>
        <p className="text-brand-muted text-sm sm:text-base mt-2 max-w-2xl">
          Granja e o litoral norte do Ceará combinam história secular, natureza exuberante e um ritmo de vida acolhedor. Descubra os bairros e cidades onde atuo diretamente:
        </p>
      </div>

      {/* Grid das Regiões */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {regions.map(function(region) {
          return (
            <div 
              key={region.id}
              className="group bg-white rounded-2xl overflow-hidden border border-brand-border/80 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col"
            >
              {/* Imagem com tag */}
              <div className="relative aspect-[16/10] overflow-hidden bg-brand-dark/10">
                <img
                  src={region.image}
                  alt={region.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3">
                  <span className="px-3 py-1 text-xs font-semibold rounded-md bg-brand-dark/80 backdrop-blur-md text-white">
                    {region.tag}
                  </span>
                </div>
              </div>

              {/* Informações */}
              <div className="p-6 flex flex-col flex-grow justify-between">
                <div>
                  <h3 className="font-serif text-xl font-bold text-brand-dark mb-1 group-hover:text-brand-gold transition-colors">
                    {region.title}
                  </h3>
                  <span className="block text-xs font-medium text-brand-gold mb-3">
                    {region.subtitle}
                  </span>
                  <p className="text-sm text-brand-muted leading-relaxed">
                    {region.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-brand-border/60 flex items-center text-xs font-semibold text-brand-dark group-hover:text-brand-gold">
                  <MapPin className="w-3.5 h-3.5 mr-1 text-brand-gold" />
                  <span>Imóveis disponíveis nesta região</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

    </section>
  );
}
