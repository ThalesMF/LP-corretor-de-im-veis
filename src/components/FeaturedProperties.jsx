// src/components/FeaturedProperties.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import PropertyCard from './PropertyCard';
import { properties } from '../data/properties';
import { ArrowRight } from 'lucide-react';

export default function FeaturedProperties() {
  // Filtra apenas os imóveis marcados como destaque
  const featured = properties.filter(function(item) {
    return item.featured === true;
  });

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14" aria-labelledby="featured-title">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
        <div>
          <span className="text-xs font-semibold uppercase tracking-widest text-brand-gold block mb-1">
            Curadoria Exclusiva
          </span>
          <h2 id="featured-title" className="text-2xl sm:text-3xl lg:text-4xl font-bold font-serif text-brand-dark">
            Imóveis selecionados para você
          </h2>
          <p className="text-brand-muted text-sm sm:text-base mt-1.5 max-w-xl">
            Uma seleção criteriosa das melhores oportunidades de casas, apartamentos e terrenos disponíveis na região.
          </p>
        </div>

        <Link
          to="/imoveis"
          className="inline-flex items-center gap-2 text-sm font-semibold text-brand-dark hover:text-brand-gold transition-colors shrink-0 group"
        >
          <span>Explorar todos os imóveis</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>

      {/* Grid: 4 cards no desktop, 2 no tablet, 1 no mobile */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {featured.map(function(property) {
          return (
            <PropertyCard key={property.id} property={property} />
          );
        })}
      </div>
    </section>
  );
}
