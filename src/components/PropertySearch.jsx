// src/components/PropertySearch.jsx
import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Search, MapPin, ChevronDown, Check } from "lucide-react";

function SearchLocationSelect({ value, onChange }) {
  const [isOpen, setIsOpen] = useState(false);
  const selectRef = useRef(null);
  const options = [
    { value: "", label: "Todas as localizações" },
    { value: "Granja", label: "Granja — CE" },
    { value: "Centro", label: "Granja — Centro" },
    { value: "Jijoca de Jericoacoara", label: "Jijoca de Jericoacoara — CE" },
    { value: "Camocim", label: "Camocim — CE" },
  ];
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

  return (
    <div ref={selectRef} className="relative">
      <button
        type="button"
        onClick={function () {
          setIsOpen(!isOpen);
        }}
        className="flex w-full items-center justify-between bg-transparent p-0 text-left text-sm font-medium text-brand-dark transition-colors focus:outline-none sm:text-base"
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        aria-label="Localização do imóvel"
      >
        <span>
          {selectedOption ? selectedOption.label : "Todas as localizações"}
        </span>
        <ChevronDown
          className={`ml-2 h-4 w-4 shrink-0 text-brand-dark transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
        />
      </button>

      {isOpen && (
        <div
          className="dropdown-panel absolute left-0 right-0 top-full z-40 mt-3 overflow-hidden rounded-xl border border-brand-border bg-white p-1.5 shadow-xl shadow-brand-dark/10"
          role="listbox"
          aria-label="Localização do imóvel"
        >
          {options.map(function (option) {
            const isSelected = option.value === value;
            return (
              <button
                key={option.value || "all"}
                type="button"
                role="option"
                aria-selected={isSelected}
                onClick={function () {
                  onChange(option.value);
                  setIsOpen(false);
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

export default function PropertySearch() {
  const [transactionType, setTransactionType] = useState("venda"); // 'venda' ou 'aluguel'
  const [location, setLocation] = useState("");
  const navigate = useNavigate();

  function handleSearch(e) {
    e.preventDefault();

    const params = new URLSearchParams();
    if (transactionType) {
      params.append("tipo", transactionType);
    }
    if (location && location !== "todos") {
      params.append("local", location);
    }

    navigate(`/imoveis?${params.toString()}`);
  }

  return (
    <section
      className="relative z-20 -mt-8 sm:-mt-12 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-10"
      aria-label="Pesquisa rápida de imóveis"
    >
      <div className="bg-white rounded-2xl shadow-xl border border-brand-border/80 p-4 sm:p-6 backdrop-blur-md">
        {/* Alternador Comprar / Alugar */}
        <div className="flex items-center gap-2 mb-4">
          <button
            type="button"
            onClick={function () {
              setTransactionType("venda");
            }}
            className={`px-5 py-2 rounded-xl text-sm font-semibold transition-all duration-200 ${
              transactionType === "venda"
                ? "bg-brand-dark text-white shadow-sm"
                : "text-brand-muted hover:text-brand-dark hover:bg-brand-bg"
            }`}
          >
            Comprar
          </button>

          <button
            type="button"
            onClick={function () {
              setTransactionType("aluguel");
            }}
            className={`px-5 py-2 rounded-xl text-sm font-semibold transition-all duration-200 ${
              transactionType === "aluguel"
                ? "bg-brand-dark text-white shadow-sm"
                : "text-brand-muted hover:text-brand-dark hover:bg-brand-bg"
            }`}
          >
            Alugar
          </button>
        </div>

        {/* Formulário de Busca */}
        <form
          onSubmit={handleSearch}
          className="grid grid-cols-1 md:grid-cols-12 gap-3 sm:gap-4 items-center"
        >
          {/* Seletor de Localização */}
          <div className="md:col-span-8 relative">
            <div className="flex items-center w-full px-4 py-3.5 rounded-xl border border-brand-border/90 bg-brand-bg/40 focus-within:border-brand-gold focus-within:ring-2 focus-within:ring-brand-gold/30 transition-all">
              <MapPin className="w-5 h-5 text-brand-gold mr-3 shrink-0" />
              <div className="w-full">
                <label
                  htmlFor="search-location"
                  className="block text-[11px] font-semibold uppercase tracking-wider text-brand-muted"
                >
                  Onde você quer morar ou investir?
                </label>
                <SearchLocationSelect value={location} onChange={setLocation} />
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
