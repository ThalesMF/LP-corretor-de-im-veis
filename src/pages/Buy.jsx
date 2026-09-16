// src/pages/Buy.jsx
import React, { useEffect } from 'react';
import { properties } from '../data/properties';
import PropertyCard from '../components/PropertyCard';
import { ShoppingBag } from 'lucide-react';

export default function Buy() {
  useEffect(function() {
    window.scrollTo(0, 0);
  }, []);

  // Filtra apenas imóveis à venda (CAVEMAN CODE)
  const buyProperties = properties.filter(function(item) {
    return item.transactionType === 'venda';
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
      
      {/* Cabeçalho */}
      <div className="text-center max-w-2xl mx-auto mb-12">
        <span className="text-xs font-semibold uppercase tracking-widest text-brand-gold block mb-2">
          Imóveis à Venda
        </span>
        <h1 className="text-3xl sm:text-4xl font-serif font-bold text-brand-dark mb-3">
          Encontre o Imóvel dos Seus Sonhos
        </h1>
        <p className="text-brand-muted text-sm sm:text-base">
          Casas prontas para morar, apartamentos modernos e terrenos com excelente valorização para você comprar com total segurança jurídica.
        </p>
      </div>

      <div className="flex items-center justify-between mb-6">
        <span className="text-sm text-brand-muted font-medium">
          Exibindo <strong className="text-brand-dark">{buyProperties.length}</strong> {buyProperties.length === 1 ? 'imóvel à venda' : 'imóveis à venda'}
        </span>
      </div>

      {/* Grid de Imóveis */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {buyProperties.map(function(item) {
          return (
            <PropertyCard key={item.id} property={item} />
          );
        })}
      </div>

    </div>
  );
}
