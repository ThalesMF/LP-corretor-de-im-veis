// src/pages/Rent.jsx
import React, { useEffect } from 'react';
import { properties } from '../data/properties';
import PropertyCard from '../components/PropertyCard';
import { KeyRound } from 'lucide-react';

export default function Rent() {
  useEffect(function() {
    window.scrollTo(0, 0);
  }, []);

  // Filtra apenas imóveis para aluguel (CAVEMAN CODE)
  const rentProperties = properties.filter(function(item) {
    return item.transactionType === 'aluguel';
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
      
      {/* Cabeçalho */}
      <div className="text-center max-w-2xl mx-auto mb-12">
        <span className="text-xs font-semibold uppercase tracking-widest text-brand-gold block mb-2">
          Imóveis para Locação
        </span>
        <h1 className="text-3xl sm:text-4xl font-serif font-bold text-brand-dark mb-3">
          Imóveis Disponíveis para Aluguel
        </h1>
        <p className="text-brand-muted text-sm sm:text-base">
          Opções residenciais e de veraneio com processo de locação ágil, transparente e sem burocracias desnecessárias.
        </p>
      </div>

      <div className="flex items-center justify-between mb-6">
        <span className="text-sm text-brand-muted font-medium">
          Exibindo <strong className="text-brand-dark">{rentProperties.length}</strong> {rentProperties.length === 1 ? 'imóvel para aluguel' : 'imóveis para aluguel'}
        </span>
      </div>

      {/* Grid de Imóveis */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {rentProperties.map(function(item) {
          return (
            <PropertyCard key={item.id} property={item} />
          );
        })}
      </div>

    </div>
  );
}
