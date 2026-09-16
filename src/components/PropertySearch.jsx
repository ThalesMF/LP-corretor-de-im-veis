// src/components/PropertySearch.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, MapPin, Tag } from 'lucide-react';

export default function PropertySearch() {
  const [transactionType, setTransactionType] = useState('venda'); // 'venda' ou 'aluguel'
  const [location, setLocation] = useState('');
  const navigate = useNavigate();

  function handleSearch(e) {
    e.preventDefault();

    const params = new URLSearchParams();
    if (transactionType) {
      params.append('tipo', transactionType);
    }
    if (location && location !== 'todos') {
      params.append('local', location);
    }

    navigate(`/imoveis?${params.toString()}`);
  }

  return (
    <section className="relative z-20 -mt-8 sm:-mt-12 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-10" aria-label="Pesquisa rápida de imóveis">
      <div className="bg-white rounded-2xl shadow-xl border border-brand-border/80 p-4 sm:p-6 backdrop-blur-md">
        
        {/* Alternador Comprar / Alugar */}
        <div className="flex items-center gap-2 mb-4">
          <button
            type="button"
            onClick={function() { setTransactionType('venda'); }}
            className={`px-5 py-2 rounded-xl text-sm font-semibold transition-all duration-200 ${
              transactionType === 'venda'
                ? 'bg-brand-dark text-white shadow-sm'
                : 'text-brand-muted hover:text-brand-dark hover:bg-brand-bg'
            }`}
          >
            Comprar
          </button>
          
          <button
            type="button"
            onClick={function() { setTransactionType('aluguel'); }}
            className={`px-5 py-2 rounded-xl text-sm font-semibold transition-all duration-200 ${
              transactionType === 'aluguel'
                ? 'bg-brand-dark text-white shadow-sm'
                : 'text-brand-muted hover:text-brand-dark hover:bg-brand-bg'
            }`}
          >
            Alugar
          </button>
        </div>

        {/* Formulário de Busca */}
        <form onSubmit={handleSearch} className="grid grid-cols-1 md:grid-cols-12 gap-3 sm:gap-4 items-center">
          
          {/* Seletor de Localização */}
          <div className="md:col-span-8 relative">
            <div className="flex items-center w-full px-4 py-3.5 rounded-xl border border-brand-border/90 bg-brand-bg/40 focus-within:border-brand-gold focus-within:ring-2 focus-within:ring-brand-gold/30 transition-all">
              <MapPin className="w-5 h-5 text-brand-gold mr-3 shrink-0" />
              <div className="w-full">
                <label htmlFor="search-location" className="block text-[11px] font-semibold uppercase tracking-wider text-brand-muted">
                  Onde você quer morar ou investir?
                </label>
                <select
                  id="search-location"
                  value={location}
                  onChange={function(e) { setLocation(e.target.value); }}
                  className="w-full bg-transparent border-0 p-0 text-brand-dark text-sm sm:text-base font-medium focus:outline-none cursor-pointer"
                >
                  <option value="">Todas as localizações</option>
                  <option value="Granja">Granja — CE</option>
                  <option value="Centro">Granja — Centro</option>
                  <option value="Jijoca de Jericoacoara">Jijoca de Jericoacoara — CE</option>
                  <option value="Camocim">Camocim — CE</option>
                </select>
              </div>
            </div>
          </div>

          {/* Botão Buscar */}
          <div className="md:col-span-4">
            <button
              type="submit"
              className="btn-gold w-full py-4 text-base font-semibold shadow-md gap-2"
            >
              <Search className="w-5 h-5" />
              <span>Buscar imóveis</span>
            </button>
          </div>

        </form>
      </div>
    </section>
  );
}
