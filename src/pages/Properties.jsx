// src/pages/Properties.jsx
import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { properties } from '../data/properties';
import PropertyCard from '../components/PropertyCard';
import { Search, Filter, RotateCcw } from 'lucide-react';

export default function Properties() {
  const [searchParams, setSearchParams] = useSearchParams();

  // Estados dos filtros
  const [selectedType, setSelectedType] = useState(searchParams.get('tipo') || 'todos');
  const [selectedLocation, setSelectedLocation] = useState(searchParams.get('local') || '');
  const [selectedCategory, setSelectedCategory] = useState(searchParams.get('categoria') || 'todos');

  // Atualiza estados caso os parâmetros da URL mudem
  useEffect(function() {
    setSelectedType(searchParams.get('tipo') || 'todos');
    setSelectedLocation(searchParams.get('local') || '');
    setSelectedCategory(searchParams.get('categoria') || 'todos');
    window.scrollTo(0, 0);
  }, [searchParams]);

  // Aplicação dos filtros com CAVEMAN CODE simples e explícito
  const filteredProperties = properties.filter(function(item) {
    // Filtro por tipo de transação (venda / aluguel)
    if (selectedType !== 'todos' && item.transactionType !== selectedType) {
      return false;
    }

    // Filtro por categoria (casa, apartamento, etc.)
    if (selectedCategory !== 'todos' && item.type !== selectedCategory) {
      return false;
    }

    // Filtro por localização
    if (selectedLocation) {
      const loc = selectedLocation.toLowerCase();
      const matchCity = item.city.toLowerCase().includes(loc);
      const matchLocation = item.location.toLowerCase().includes(loc);
      if (!matchCity && !matchLocation) {
        return false;
      }
    }

    return true;
  });

  function resetFilters() {
    setSelectedType('todos');
    setSelectedLocation('');
    setSelectedCategory('todos');
    setSearchParams({});
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
      
      {/* Cabeçalho da Página */}
      <div className="text-center max-w-2xl mx-auto mb-10">
        <span className="text-xs font-semibold uppercase tracking-widest text-brand-gold block mb-2">
          Catálogo Imobiliário
        </span>
        <h1 className="text-3xl sm:text-4xl font-serif font-bold text-brand-dark mb-3">
          Todos os Imóveis Disponíveis
        </h1>
        <p className="text-brand-muted text-sm sm:text-base">
          Consulte as oportunidades selecionadas na região de Granja e litoral cearense com atendimento direto e personalizado.
        </p>
      </div>

      {/* Barra de Filtros Rápida */}
      <div className="bg-white rounded-2xl p-4 sm:p-6 border border-brand-border/80 shadow-sm mb-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 items-center">
          
          {/* Finalidade */}
          <div>
            <label className="block text-xs font-semibold text-brand-muted mb-1 uppercase tracking-wider">
              Finalidade
            </label>
            <select
              value={selectedType}
              onChange={function(e) { setSelectedType(e.target.value); }}
              className="w-full bg-brand-bg/50 border border-brand-border rounded-xl px-3 py-2 text-sm text-brand-dark font-medium focus:ring-2 focus:ring-brand-gold focus:outline-none"
            >
              <option value="todos">Venda e Aluguel</option>
              <option value="venda">Comprar (Venda)</option>
              <option value="aluguel">Alugar</option>
            </select>
          </div>

          {/* Categoria */}
          <div>
            <label className="block text-xs font-semibold text-brand-muted mb-1 uppercase tracking-wider">
              Tipo de Imóvel
            </label>
            <select
              value={selectedCategory}
              onChange={function(e) { setSelectedCategory(e.target.value); }}
              className="w-full bg-brand-bg/50 border border-brand-border rounded-xl px-3 py-2 text-sm text-brand-dark font-medium focus:ring-2 focus:ring-brand-gold focus:outline-none"
            >
              <option value="todos">Todos os tipos</option>
              <option value="casa">Casas</option>
              <option value="apartamento">Apartamentos</option>
              <option value="terreno">Terrenos</option>
              <option value="casa de praia">Casas de Praia</option>
            </select>
          </div>

          {/* Localização */}
          <div>
            <label className="block text-xs font-semibold text-brand-muted mb-1 uppercase tracking-wider">
              Localização
            </label>
            <select
              value={selectedLocation}
              onChange={function(e) { setSelectedLocation(e.target.value); }}
              className="w-full bg-brand-bg/50 border border-brand-border rounded-xl px-3 py-2 text-sm text-brand-dark font-medium focus:ring-2 focus:ring-brand-gold focus:outline-none"
            >
              <option value="">Todas as cidades</option>
              <option value="Granja">Granja</option>
              <option value="Jijoca de Jericoacoara">Jijoca de Jericoacoara</option>
              <option value="Camocim">Camocim</option>
            </select>
          </div>

          {/* Botão Resetar */}
          <div className="sm:self-end">
            <button
              type="button"
              onClick={resetFilters}
              className="w-full inline-flex items-center justify-center gap-2 py-2 px-4 rounded-xl text-sm font-medium text-brand-muted hover:text-brand-dark hover:bg-brand-bg transition-colors"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Limpar filtros</span>
            </button>
          </div>

        </div>
      </div>

      {/* Resultados da Pesquisa */}
      <div>
        <div className="flex items-center justify-between mb-6">
          <span className="text-sm text-brand-muted font-medium">
            Exibindo <strong className="text-brand-dark">{filteredProperties.length}</strong> {filteredProperties.length === 1 ? 'imóvel encontrado' : 'imóveis encontrados'}
          </span>
        </div>

        {filteredProperties.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredProperties.map(function(item) {
              return (
                <PropertyCard key={item.id} property={item} />
              );
            })}
          </div>
        ) : (
          <div className="bg-white rounded-2xl p-12 text-center border border-brand-border/80 shadow-sm max-w-xl mx-auto my-8">
            <h3 className="font-serif text-2xl font-bold text-brand-dark mb-2">
              Nenhum imóvel encontrado
            </h3>
            <p className="text-brand-muted text-sm mb-6">
              Não encontramos nenhum imóvel com os critérios selecionados no momento. Tente alterar os filtros ou entre em contato diretamente.
            </p>
            <button
              type="button"
              onClick={resetFilters}
              className="btn-primary text-sm gap-2"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Ver todos os imóveis</span>
            </button>
          </div>
        )}
      </div>

    </div>
  );
}
