// src/components/FeaturedProperties.jsx
import React from "react";
import { Link } from "react-router-dom";
import PropertyCard from "./PropertyCard";
import { properties } from "../data/properties";
import { ArrowRight } from "lucide-react";

export default function FeaturedProperties() {
  // Filtra apenas os imóveis marcados como destaque
  const featured = properties.filter(function (item) {
    return item.featured === true;
  });

  return (
    <section
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14"
      aria-labelledby="featured-title"
    >
      <div className="relative mb-8 text-center">
        <div>
          <h2
            id="featured-title"
            className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif text-brand-dark"
          >
            Imóveis selecionados para você
          </h2>
          <p className="text-brand-muted text-sm sm:text-base mt-5 max-w-xl mx-auto">
            Uma seleção criteriosa das melhores oportunidades de casas,
            apartamentos e terrenos disponíveis na região.
          </p>
        </div>

        <Link
          to="/imoveis"
          className="inline-flex items-center gap-2 mt-4 text-sm font-semibold text-brand-dark hover:text-brand-gold transition-colors group md:absolute md:right-0 md:top-1/2 md:mt-0 md:-translate-y-1/2"
        >
          <span>Explorar todos os imóveis</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>

      {/* Grid: 4 cards no desktop, 2 no tablet, 1 no mobile */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {featured.map(function (property) {
          return <PropertyCard key={property.id} property={property} />;
        })}
      </div>
    </section>
  );
}
