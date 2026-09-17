// src/pages/Properties.jsx
import React, { useState, useEffect, useRef } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { properties } from "../data/properties";
import PropertyCard from "../components/PropertyCard";
import { ChevronDown, Check, RotateCcw } from "lucide-react";

function StyledSelect({ value, onChange, options, ariaLabel }) {
  const [isOpen, setIsOpen] = useState(false);
  const selectRef = useRef(null);
  const selectedOption = options.find(function (option) {
    return option.value === value;
  });

  useEffect(function () {
    function closeOnOutsideClick(event) {
      if (selectRef.current && !selectRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", closeOnOutsideClick);
    return function () {
      document.removeEventListener("mousedown", closeOnOutsideClick);
    };
  }, []);

  function handleOptionSelect(optionValue) {
    onChange(optionValue);
    setIsOpen(false);
  }

  return (
    <div ref={selectRef} className="relative">
      <button
        type="button"
        onClick={function () {
          setIsOpen(!isOpen);
        }}
        className="flex w-full items-center justify-between rounded-xl border border-brand-border bg-brand-bg/50 px-3 py-2.5 text-left text-sm font-medium text-brand-dark shadow-sm transition-all duration-200 hover:border-brand-gold/70 hover:bg-white focus:border-brand-gold focus:outline-none focus:ring-2 focus:ring-brand-gold/20"
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        aria-label={ariaLabel}
      >
        <span>{selectedOption ? selectedOption.label : "Selecione"}</span>
        <ChevronDown
          className={`h-4 w-4 text-brand-gold transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {isOpen && (
        <div
          className="dropdown-panel absolute left-0 right-0 top-full z-30 mt-2 overflow-hidden rounded-xl border border-brand-border bg-white p-1.5 shadow-xl shadow-brand-dark/10"
          role="listbox"
          aria-label={ariaLabel}
        >
          {options.map(function (option) {
            const isSelected = option.value === value;
            return (
              <button
                key={option.value}
                type="button"
                role="option"
                aria-selected={isSelected}
                onClick={function () {
                  handleOptionSelect(option.value);
                }}
                className={`flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-left text-sm transition-colors duration-150 ${
                  isSelected
                    ? "bg-brand-gold-light font-semibold text-brand-dark"
                    : "text-brand-text hover:bg-brand-bg hover:text-brand-dark"
                }`}
              >
                <span>{option.label}</span>
                {isSelected && (
                  <Check className="h-4 w-4 text-brand-gold-dark" />
                )}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default function Properties() {
  const [searchParams, setSearchParams] = useSearchParams();

  // Estados dos filtros
  const [selectedType, setSelectedType] = useState(
    searchParams.get("tipo") || "todos",
  );
  const [selectedLocation, setSelectedLocation] = useState(
    searchParams.get("local") || "",
  );
  const [selectedCategory, setSelectedCategory] = useState(
    searchParams.get("categoria") || "todos",
  );

  // Atualiza estados caso os parâmetros da URL mudem
  useEffect(
    function () {
      setSelectedType(searchParams.get("tipo") || "todos");
      setSelectedLocation(searchParams.get("local") || "");
      setSelectedCategory(searchParams.get("categoria") || "todos");
      window.scrollTo(0, 0);
    },
    [searchParams],
  );

  // Aplicação dos filtros com CAVEMAN CODE simples e explícito
  const filteredProperties = properties.filter(function (item) {
    // Filtro por tipo de transação (venda / aluguel)
    if (selectedType !== "todos" && item.transactionType !== selectedType) {
      return false;
    }

    // Filtro por categoria (casa, apartamento, etc.)
    if (selectedCategory !== "todos" && item.type !== selectedCategory) {
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
    setSelectedType("todos");
    setSelectedLocation("");
    setSelectedCategory("todos");
    setSearchParams({});
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
      {/* Cabeçalho da Página */}
      <div className="text-center max-w-2xl mx-auto mb-10"></div>

      {/* Barra de Filtros Rápida */}
      <div className="bg-white rounded-2xl p-4 sm:p-6 border border-brand-border/80 shadow-sm mb-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 items-center">
          {/* Finalidade */}
          <div>
            <label className="block text-xs font-semibold text-brand-muted mb-1 uppercase tracking-wider">
              Finalidade
            </label>
            <StyledSelect
              value={selectedType}
              onChange={function (e) {
                setSelectedType(e);
              }}
              options={[
                { value: "todos", label: "Venda e Aluguel" },
                { value: "venda", label: "Comprar (Venda)" },
                { value: "aluguel", label: "Alugar" },
              ]}
              ariaLabel="Finalidade"
            />
          </div>

          {/* Categoria */}
          <div>
            <label className="block text-xs font-semibold text-brand-muted mb-1 uppercase tracking-wider">
              Tipo de Imóvel
            </label>
            <StyledSelect
              value={selectedCategory}
              onChange={function (e) {
                setSelectedCategory(e);
              }}
              options={[
                { value: "todos", label: "Todos os tipos" },
                { value: "casa", label: "Casas" },
                { value: "apartamento", label: "Apartamentos" },
                { value: "terreno", label: "Terrenos" },
                { value: "casa de praia", label: "Casas de Praia" },
              ]}
              ariaLabel="Tipo de imóvel"
            />
          </div>

          {/* Localização */}
          <div>
            <label className="block text-xs font-semibold text-brand-muted mb-1 uppercase tracking-wider">
              Localização
            </label>
            <StyledSelect
              value={selectedLocation}
              onChange={function (e) {
                setSelectedLocation(e);
              }}
              options={[
                { value: "", label: "Todas as cidades" },
                { value: "Granja", label: "Granja" },
                {
                  value: "Jijoca de Jericoacoara",
                  label: "Jijoca de Jericoacoara",
                },
                { value: "Camocim", label: "Camocim" },
              ]}
              ariaLabel="Localização"
            />
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
            Exibindo{" "}
            <strong className="text-brand-dark">
              {filteredProperties.length}
            </strong>{" "}
            {filteredProperties.length === 1
              ? "imóvel encontrado"
              : "imóveis encontrados"}
          </span>
        </div>

        {filteredProperties.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredProperties.map(function (item) {
              return <PropertyCard key={item.id} property={item} />;
            })}
          </div>
        ) : (
          <div className="bg-white rounded-2xl p-12 text-center border border-brand-border/80 shadow-sm max-w-xl mx-auto my-8">
            <h3 className="font-serif text-2xl font-bold text-brand-dark mb-2">
              Nenhum imóvel encontrado
            </h3>
            <p className="text-brand-muted text-sm mb-6">
              Não encontramos nenhum imóvel com os critérios selecionados no
              momento. Tente alterar os filtros ou entre em contato diretamente.
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
