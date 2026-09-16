// src/components/Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Phone, Mail, MessageCircle, MapPin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-dark text-white border-t border-brand-border/20 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          
          {/* Identidade do Corretor */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-brand-gold flex items-center justify-center text-white">
                <Home className="w-5 h-5 text-brand-dark" />
              </div>
              <div>
                <span className="block font-serif text-2xl font-bold tracking-tight text-white">
                  João Silva
                </span>
                <span className="block text-xs uppercase tracking-widest text-brand-gold font-medium">
                  Corretor de Imóveis
                </span>
              </div>
            </Link>

            <p className="text-white/70 text-sm leading-relaxed max-w-sm">
              Assessoria imobiliária humanizada, transparente e especializada em Granja e nas principais regiões turísticas e residenciais do litoral do Ceará.
            </p>

            <div className="pt-2">
              <span className="inline-block px-3 py-1 rounded bg-white/10 text-brand-gold text-xs font-semibold tracking-wider border border-white/10">
                CRECI 00000-F
              </span>
            </div>
          </div>

          {/* Navegação Rápida */}
          <div>
            <h4 className="font-serif text-base font-bold text-white mb-4">
              Navegação
            </h4>
            <ul className="space-y-2.5 text-sm text-white/70">
              <li>
                <Link to="/" className="hover:text-brand-gold transition-colors">Início</Link>
              </li>
              <li>
                <Link to="/imoveis" className="hover:text-brand-gold transition-colors">Todos os Imóveis</Link>
              </li>
              <li>
                <Link to="/comprar" className="hover:text-brand-gold transition-colors">Comprar Imóvel</Link>
              </li>
              <li>
                <Link to="/alugar" className="hover:text-brand-gold transition-colors">Alugar Imóvel</Link>
              </li>
              <li>
                <Link to="/sobre" className="hover:text-brand-gold transition-colors">Sobre o Corretor</Link>
              </li>
            </ul>
          </div>

          {/* Cidades e Bairros */}
          <div>
            <h4 className="font-serif text-base font-bold text-white mb-4">
              Regiões
            </h4>
            <ul className="space-y-2.5 text-sm text-white/70">
              <li>
                <Link to="/imoveis?local=Granja" className="hover:text-brand-gold transition-colors">Granja — Centro</Link>
              </li>
              <li>
                <Link to="/imoveis?local=Granja" className="hover:text-brand-gold transition-colors">Granja — Residenciais</Link>
              </li>
              <li>
                <Link to="/imoveis?local=Jijoca" className="hover:text-brand-gold transition-colors">Jijoca de Jericoacoara</Link>
              </li>
              <li>
                <Link to="/imoveis?local=Camocim" className="hover:text-brand-gold transition-colors">Camocim & Litoral</Link>
              </li>
            </ul>
          </div>

          {/* Contato & Redes Sociais */}
          <div>
            <h4 className="font-serif text-base font-bold text-white mb-4">
              Contato Direto
            </h4>
            <ul className="space-y-3 text-sm text-white/70">
              <li>
                <a 
                  href="https://wa.me/5588999999999" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-brand-gold transition-colors"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>(88) 99999-9999</span>
                </a>
              </li>
              <li>
                <a 
                  href="mailto:contato@joaoimoveisgranja.com.br" 
                  className="flex items-center gap-2 hover:text-brand-gold transition-colors"
                >
                  <Mail className="w-4 h-4 text-brand-gold shrink-0" />
                  <span className="truncate">contato@joaoimoveis.com.br</span>
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-brand-gold shrink-0" />
                <span>Granja — CE, Brasil</span>
              </li>
            </ul>

            <div className="mt-5 flex items-center gap-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-brand-gold hover:text-white flex items-center justify-center transition-colors text-white"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a
                href="https://wa.me/5588999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-brand-gold hover:text-white flex items-center justify-center transition-colors text-white"
                aria-label="WhatsApp"
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>

        {/* Rodapé Inferior / Legal */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/50">
          <p>
            © {currentYear} João Silva — Corretor de Imóveis • CRECI 00000-F. Todos os direitos reservados.
          </p>
          <div className="flex gap-6">
            <span className="hover:text-white transition-colors cursor-pointer">Termos de Uso</span>
            <span className="hover:text-white transition-colors cursor-pointer">Política de Privacidade</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
