// src/components/Header.jsx
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Home as HomeIcon } from 'lucide-react';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Início', path: '/' },
    { name: 'Imóveis', path: '/imoveis' },
    { name: 'Comprar', path: '/comprar' },
    { name: 'Alugar', path: '/alugar' },
    { name: 'Sobre mim', path: '/sobre' }
  ];

  function isActive(path) {
    if (path === '/' && location.pathname !== '/') return false;
    return location.pathname === path;
  }

  return (
    <header className="sticky top-0 z-50 bg-[#F7F4EF]/95 backdrop-blur-md border-b border-brand-border/60 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo / Marca do Corretor */}
          <Link 
            to="/" 
            className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-brand-gold rounded-lg p-1"
          >
            <div className="w-10 h-10 rounded-full bg-brand-dark flex items-center justify-center text-brand-gold group-hover:scale-105 transition-transform duration-200 shadow-sm">
              <HomeIcon className="w-5 h-5 text-brand-gold" />
            </div>
            <div>
              <span className="block font-serif text-xl sm:text-2xl font-bold tracking-tight text-brand-dark leading-none">
                João Silva
              </span>
              <span className="block text-xs uppercase tracking-widest text-brand-gold font-medium mt-0.5">
                Corretor de Imóveis • CRECI 00000-F
              </span>
            </div>
          </Link>

          {/* Navegação Desktop */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Navegação Principal">
            {navLinks.map(function(link) {
              const active = isActive(link.path);
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-sm font-medium transition-colors duration-200 py-1 border-b-2 ${
                    active 
                      ? 'text-brand-dark border-brand-gold font-semibold' 
                      : 'text-brand-text/80 border-transparent hover:text-brand-dark hover:border-brand-gold/50'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Botão de Contato Desktop */}
          <div className="hidden md:flex items-center">
            <a
              href="https://wa.me/5588999999999?text=Ol%C3%A1%2C%20Jo%C3%A3o!%20Gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20im%C3%B3veis%20na%20regi%C3%A3o."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold text-sm py-2.5 px-5 gap-2"
              aria-label="Entrar em contato via WhatsApp"
            >
              <Phone className="w-4 h-4" />
              <span>Fale Comigo</span>
            </a>
          </div>

          {/* Botão Menu Mobile */}
          <div className="flex md:hidden">
            <button
              type="button"
              onClick={function() { setIsMobileMenuOpen(!isMobileMenuOpen); }}
              className="p-2 rounded-lg text-brand-dark hover:bg-brand-dark/5 focus:outline-none focus:ring-2 focus:ring-brand-gold"
              aria-expanded={isMobileMenuOpen}
              aria-label={isMobileMenuOpen ? "Fechar menu" : "Abrir menu"}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Menu Mobile */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-brand-border/60 bg-[#F7F4EF] px-4 pt-3 pb-6 space-y-2 shadow-lg animate-in fade-in duration-200">
          <nav className="flex flex-col space-y-1">
            {navLinks.map(function(link) {
              const active = isActive(link.path);
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={function() { setIsMobileMenuOpen(false); }}
                  className={`px-3 py-2.5 rounded-lg text-base font-medium transition-colors ${
                    active
                      ? 'bg-brand-dark text-white'
                      : 'text-brand-text hover:bg-brand-dark/5'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>
          
          <div className="pt-4 border-t border-brand-border/40">
            <a
              href="https://wa.me/5588999999999?text=Ol%C3%A1%2C%20Jo%C3%A3o!%20Gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20im%C3%B3veis%20na%20regi%C3%A3o."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold w-full py-3 gap-2"
            >
              <Phone className="w-4 h-4" />
              <span>Fale Comigo no WhatsApp</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
