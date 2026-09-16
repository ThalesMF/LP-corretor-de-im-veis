// src/App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Properties from './pages/Properties';
import PropertyDetails from './pages/PropertyDetails';
import Buy from './pages/Buy';
import Rent from './pages/Rent';
import About from './pages/About';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-brand-bg text-brand-text font-sans antialiased">
      {/* Header global persistente */}
      <Header />

      {/* Conteúdo dinâmico das rotas */}
      <div className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/imoveis" element={<Properties />} />
          <Route path="/imoveis/:slug" element={<PropertyDetails />} />
          <Route path="/comprar" element={<Buy />} />
          <Route path="/alugar" element={<Rent />} />
          <Route path="/sobre" element={<About />} />
          {/* Fallback para 404 */}
          <Route path="*" element={<Home />} />
        </Routes>
      </div>

      {/* Footer global persistente */}
      <Footer />
    </div>
  );
}
