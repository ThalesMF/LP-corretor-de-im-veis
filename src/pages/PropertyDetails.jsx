// src/pages/PropertyDetails.jsx
import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { properties } from "../data/properties";
import PropertyGallery from "../components/PropertyGallery";
import PropertyCard from "../components/PropertyCard";
import {
  Bed,
  Bath,
  Car,
  MapPin,
  Maximize2,
  Phone,
  ArrowLeft,
  ShieldCheck,
  Calendar,
  Share2,
} from "lucide-react";

export default function PropertyDetails() {
  const { slug } = useParams();

  // Rola para o topo ao carregar a página
  useEffect(
    function () {
      window.scrollTo(0, 0);
    },
    [slug],
  );

  // Busca o imóvel pelo slug (CAVEMAN CODE: direto e claro)
  const property = properties.find(function (item) {
    return item.slug === slug;
  });

  // Estado de imóvel não encontrado
  if (!property) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center px-4 text-center">
        <h1 className="font-serif text-3xl font-bold text-brand-dark mb-3">
          Imóvel não encontrado
        </h1>
        <p className="text-brand-muted max-w-md mb-6">
          O imóvel que você está procurando não foi encontrado ou não está mais
          disponível no momento.
        </p>
        <Link to="/imoveis" className="btn-primary gap-2">
          <ArrowLeft className="w-4 h-4" />
          <span>Ver todos os imóveis</span>
        </Link>
      </div>
    );
  }

  // Formatação de preço
  const formattedPrice = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
    maximumFractionDigits: 0,
  }).format(property.price);

  const isRental = property.transactionType === "aluguel";
  const displayPrice = isRental ? `${formattedPrice}/mês` : formattedPrice;

  // Imóveis similares (mesmo tipo ou mesma finalidade, excluindo o atual)
  const relatedProperties = properties
    .filter(function (item) {
      return (
        item.id !== property.id &&
        (item.type === property.type ||
          item.transactionType === property.transactionType)
      );
    })
    .slice(0, 3);

  // Mensagem WhatsApp contextualizada conforme PRD RF-05
  const whatsappMessage = encodeURIComponent(
    `Olá João! Tenho interesse no imóvel "${property.title}" (${displayPrice}) em ${property.location}, ${property.city}. Gostaria de mais informações e agendar uma visita.`,
  );
  const whatsappLink = `https://wa.me/5588999999999?text=${whatsappMessage}`;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      {/* Voltar */}
      <div className="mb-6">
        <Link
          to="/imoveis"
          className="inline-flex items-center gap-2 text-sm font-medium text-brand-muted hover:text-brand-dark transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Voltar para lista de imóveis</span>
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Coluna Esquerda / Principal: Galeria + Detalhes + Descrição */}
        <div className="lg:col-span-2 space-y-8">
          {/* Cabeçalho do Imóvel */}
          <div>
            <div className="flex flex-wrap items-center gap-2.5 mb-3">
              <span
                className={`px-3 py-1 text-xs font-semibold uppercase tracking-wider rounded-md ${
                  isRental
                    ? "bg-amber-700 text-white"
                    : "bg-brand-dark text-white"
                }`}
              >
                {isRental ? "Para Alugar" : "À Venda"}
              </span>
              <span className="px-3 py-1 text-xs font-medium uppercase tracking-wider rounded-md bg-brand-gold/15 text-brand-dark">
                {property.type}
              </span>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-brand-dark leading-tight">
              {property.title}
            </h1>

            <div className="flex items-center gap-2 text-sm text-brand-muted mt-2">
              <MapPin className="w-4 h-4 text-brand-gold shrink-0" />
              <span>
                {property.location} — {property.city}, {property.state}
              </span>
            </div>
          </div>

          {/* Galeria de Fotos */}
          <PropertyGallery images={property.images} title={property.title} />

          {/* Características em Destaque */}
          <div className="bg-white rounded-2xl p-6 border border-brand-border/70 shadow-sm">
            <h2 className="text-lg font-serif font-bold text-brand-dark mb-4">
              Características do Imóvel
            </h2>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {property.bedrooms > 0 && (
                <div className="flex items-center gap-3 p-3 rounded-xl bg-brand-bg/60">
                  <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center text-brand-gold shadow-xs">
                    <Bed className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-xs text-brand-muted">
                      Quartos
                    </span>
                    <span className="font-bold text-brand-dark text-base">
                      {property.bedrooms}
                    </span>
                  </div>
                </div>
              )}

              {property.bathrooms > 0 && (
                <div className="flex items-center gap-3 p-3 rounded-xl bg-brand-bg/60">
                  <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center text-brand-gold shadow-xs">
                    <Bath className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-xs text-brand-muted">
                      Banheiros
                    </span>
                    <span className="font-bold text-brand-dark text-base">
                      {property.bathrooms}
                    </span>
                  </div>
                </div>
              )}

              {property.parkingSpaces > 0 && (
                <div className="flex items-center gap-3 p-3 rounded-xl bg-brand-bg/60">
                  <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center text-brand-gold shadow-xs">
                    <Car className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-xs text-brand-muted">
                      Vagas
                    </span>
                    <span className="font-bold text-brand-dark text-base">
                      {property.parkingSpaces}
                    </span>
                  </div>
                </div>
              )}

              {property.area && (
                <div className="flex items-center gap-3 p-3 rounded-xl bg-brand-bg/60">
                  <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center text-brand-gold shadow-xs">
                    <Maximize2 className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-xs text-brand-muted">
                      Área Total
                    </span>
                    <span className="font-bold text-brand-dark text-base">
                      {property.area} m²
                    </span>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Descrição Detalhada */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-brand-border/70 shadow-sm">
            <h2 className="text-xl font-serif font-bold text-brand-dark mb-4">
              Sobre este imóvel
            </h2>
            <p className="text-brand-text/90 leading-relaxed whitespace-pre-line text-base">
              {property.description}
            </p>

            <div className="mt-6 pt-6 border-t border-brand-border/60 flex flex-wrap gap-4 text-xs text-brand-muted">
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-700" />
                <span>Documentação verificada pelo corretor</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4 text-brand-gold" />
                <span>Visitas disponíveis com agendamento prévio</span>
              </div>
            </div>
          </div>
        </div>

        {/* Coluna Direita: Bloco Fixo de Contato & Preço */}
        <div className="lg:col-span-1">
          <div className="sticky top-28 bg-white rounded-2xl p-6 sm:p-7 border border-brand-border/80 shadow-md space-y-6">
            <div>
              <span className="block text-xs uppercase tracking-wider text-brand-muted font-medium">
                Valor do Imóvel
              </span>
              <span className="price-display text-3xl sm:text-4xl font-semibold text-brand-dark">
                {displayPrice}
              </span>
            </div>

            <hr className="border-brand-border/60" />

            <div className="space-y-3">
              <h3 className="font-serif font-bold text-brand-dark text-lg">
                Gostou deste imóvel?
              </h3>
              <p className="text-sm text-brand-muted leading-relaxed">
                Entre em contato direto com o corretor para tirar dúvidas,
                consultar condições de pagamento ou agendar uma visita
                presencial.
              </p>
            </div>

            {/* CTA WhatsApp Principal */}
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold w-full py-3.5 text-base font-semibold shadow-md gap-2.5"
            >
              <Phone className="w-5 h-5" />
              <span>Tenho interesse</span>
            </a>

            <div className="p-4 rounded-xl bg-brand-bg/80 border border-brand-border/50 text-center">
              <span className="block text-xs font-semibold text-brand-dark">
                Atendimento direto com o corretor
              </span>
              <span className="block text-xs text-brand-muted mt-0.5">
                João Silva • CRECI 00000-F
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Imóveis Relacionados */}
      {relatedProperties.length > 0 && (
        <div className="mt-20 pt-12 border-t border-brand-border/70">
          <h2 className="text-2xl font-serif font-bold text-brand-dark mb-6">
            Outras opções que podem lhe interessar
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedProperties.map(function (item) {
              return <PropertyCard key={item.id} property={item} />;
            })}
          </div>
        </div>
      )}
    </div>
  );
}
