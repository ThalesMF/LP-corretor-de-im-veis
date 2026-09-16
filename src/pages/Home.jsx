// src/pages/Home.jsx
import React, { useEffect } from 'react';
import HeroCarousel from '../components/HeroCarousel';
import PropertySearch from '../components/PropertySearch';
import FeaturedProperties from '../components/FeaturedProperties';
import WhyChooseMe from '../components/WhyChooseMe';
import RegionSection from '../components/RegionSection';
import TestimonialsMarquee from '../components/TestimonialsMarquee';
import AboutBroker from '../components/AboutBroker';
import FinalCTA from '../components/FinalCTA';

export default function Home() {
  useEffect(function() {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main>
      {/* 1. Hero com Carrossel Automático de Imóveis */}
      <HeroCarousel />

      {/* 2. Pesquisa de Imóveis */}
      <PropertySearch />

      {/* 3. Imóveis em Destaque (4 no desktop, 1 no mobile) */}
      <FeaturedProperties />

      {/* 4. Por que negociar comigo */}
      <WhyChooseMe />

      {/* 5. Conheça a região */}
      <RegionSection />

      {/* 6. Depoimentos (Infinite Marquee em 2 linhas opostas) */}
      <TestimonialsMarquee />

      {/* 7. Sobre o Corretor (Foto circular, CRECI e apresentação) */}
      <AboutBroker />

      {/* 8. CTA Final */}
      <FinalCTA />
    </main>
  );
}
