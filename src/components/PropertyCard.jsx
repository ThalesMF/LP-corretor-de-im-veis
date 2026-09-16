// src/components/PropertyCard.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { Bed, Bath, Car, MapPin, ArrowRight } from 'lucide-react';

export default function PropertyCard({ property }) {
  if (!property) return null;

  // Formatação monetária em padrão Real (R$)
  function formatPrice(val, type) {
    const formatted = new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
      maximumFractionDigits: 0
    }).format(val);

    return type === 'aluguel' ? `${formatted}/mês` : formatted;
  }

  const isRental = property.transactionType === 'aluguel';

  return (
    <article className="card-base flex flex-col h-full group">
      {/* Imagem do Imóvel */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-brand-dark/10">
        <img
          src={property.images && property.images[0] ? property.images[0] : ''}
          alt={property.title}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
        />
        
        {/* Tag de Negociação (VENDA / ALUGUEL) */}
        <div className="absolute top-3 left-3">
          <span className={`px-2.5 py-1 text-xs font-semibold uppercase tracking-wider rounded-md shadow-sm ${
            isRental 
              ? 'bg-amber-700 text-white' 
              : 'bg-brand-dark text-white'
          }`}>
            {isRental ? 'Aluguel' : 'Venda'}
          </span>
        </div>

        {property.area && (
          <div className="absolute top-3 right-3">
            <span className="px-2 py-0.5 text-xs font-medium bg-black/60 backdrop-blur-md text-white rounded-md">
              {property.area} m²
            </span>
          </div>
        )}
      </div>

      {/* Conteúdo do Card */}
      <div className="p-5 flex flex-col flex-grow justify-between">
        <div>
          {/* Localização */}
          <div className="flex items-center gap-1.5 text-xs text-brand-muted mb-1.5">
            <MapPin className="w-3.5 h-3.5 text-brand-gold shrink-0" />
            <span className="truncate">{property.location} — {property.city}/{property.state}</span>
          </div>

          {/* Título */}
          <h3 className="font-serif text-lg font-bold text-brand-dark leading-snug line-clamp-2 group-hover:text-brand-gold transition-colors duration-200">
            {property.title}
          </h3>

          {/* Características (Ícones visuais claros sem textos repetitivos) */}
          <div className="flex items-center gap-4 py-3 my-3 border-y border-brand-border/60 text-brand-text text-sm">
            {property.bedrooms > 0 && (
              <div className="flex items-center gap-1.5" title={`${property.bedrooms} Quartos`}>
                <Bed className="w-4 h-4 text-brand-gold" />
                <span className="font-semibold">{property.bedrooms}</span>
              </div>
            )}

            {property.bathrooms > 0 && (
              <div className="flex items-center gap-1.5" title={`${property.bathrooms} Banheiros`}>
                <Bath className="w-4 h-4 text-brand-gold" />
                <span className="font-semibold">{property.bathrooms}</span>
              </div>
            )}

            {property.parkingSpaces > 0 && (
              <div className="flex items-center gap-1.5" title={`${property.parkingSpaces} Vagas de Garagem`}>
                <Car className="w-4 h-4 text-brand-gold" />
                <span className="font-semibold">{property.parkingSpaces}</span>
              </div>
            )}

            {property.type === 'terreno' && (
              <span className="text-xs text-brand-muted italic">Pronto para construir</span>
            )}
          </div>
        </div>

        {/* Preço e Botão Ver Detalhes */}
        <div className="pt-2 flex items-center justify-between mt-auto">
          <div>
            <span className="block text-[11px] uppercase tracking-wider text-brand-muted font-medium">Valor</span>
            <span className="text-lg font-bold text-brand-dark font-serif">
              {formatPrice(property.price, property.transactionType)}
            </span>
          </div>

          <Link
            to={`/imoveis/${property.slug}`}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-semibold text-brand-dark bg-brand-bg hover:bg-brand-gold hover:text-white transition-all duration-200"
          >
            <span>Ver detalhes</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </article>
  );
}
