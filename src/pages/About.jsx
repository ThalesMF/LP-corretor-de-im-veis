// src/pages/About.jsx
import React, { useEffect } from 'react';
import { Award, ShieldCheck, HeartHandshake, Phone, Mail, MapPin } from 'lucide-react';

export default function About() {
  useEffect(function() {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      
      {/* Cabeçalho */}
      <div className="text-center max-w-2xl mx-auto mb-14">
        <span className="text-xs font-semibold uppercase tracking-widest text-brand-gold block mb-2">
          Sobre o Corretor
        </span>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-brand-dark mb-4">
          João Silva
        </h1>
        <p className="text-brand-muted text-base sm:text-lg">
          Compromisso, proximidade e conhecimento profundo do mercado imobiliário de Granja e do litoral cearense.
        </p>
      </div>

      {/* Seção Principal */}
      <div className="bg-white rounded-3xl p-8 sm:p-12 border border-brand-border/80 shadow-sm mb-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
          
          <div className="md:col-span-5 flex flex-col items-center">
            <div className="w-56 h-56 rounded-full overflow-hidden border-4 border-brand-gold/60 shadow-lg bg-brand-dark/10">
              <img
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=600&q=80"
                alt="João Silva - Corretor de Imóveis"
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div className="mt-4 text-center">
              <span className="block font-serif font-bold text-brand-dark text-lg">João Silva</span>
              <span className="text-xs font-semibold text-brand-gold uppercase tracking-wider">CRECI 00000-F</span>
            </div>
          </div>

          <div className="md:col-span-7 space-y-4 text-brand-text/90 leading-relaxed text-sm sm:text-base">
            <h2 className="font-serif text-2xl font-bold text-brand-dark">
              Minha História no Mercado Imobiliário
            </h2>
            <p>
              Com mais de 8 anos de atuação dedicada, iniciei minha carreira com uma convicção clara: a compra ou locação de um imóvel não é apenas uma transação financeira, mas a concretização de um plano de vida ou de um investimento patrimonial decisivo.
            </p>
            <p>
              Ao longo desses anos em Granja e nas cidades vizinhas do litoral norte (como Camocim e Jijoca de Jericoacoara), construí uma rede sólida de contatos e um conhecimento minucioso de cada bairro, documentação registral e oportunidades exclusivas.
            </p>
            <p>
              Meu trabalho é pautado pela ética, clareza e acompanhamento integral. Você não é apenas mais um cliente; você tem um consultor dedicado ao seu lado.
            </p>
          </div>

        </div>
      </div>

      {/* Valores e Pilares */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
        <div className="bg-white p-6 rounded-2xl border border-brand-border/70 text-center">
          <div className="w-12 h-12 rounded-xl bg-brand-bg text-brand-gold flex items-center justify-center mx-auto mb-4">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <h3 className="font-serif font-bold text-brand-dark text-lg mb-2">Segurança Jurídica</h3>
          <p className="text-xs sm:text-sm text-brand-muted leading-relaxed">
            Análise criteriosa de matrículas, certidões negativas e contratos para assegurar uma compra 100% tranquila.
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-brand-border/70 text-center">
          <div className="w-12 h-12 rounded-xl bg-brand-bg text-brand-gold flex items-center justify-center mx-auto mb-4">
            <HeartHandshake className="w-6 h-6" />
          </div>
          <h3 className="font-serif font-bold text-brand-dark text-lg mb-2">Ética & Proximidade</h3>
          <p className="text-xs sm:text-sm text-brand-muted leading-relaxed">
            Relacionamento aberto, ouvindo o que você realmente precisa para recomendar apenas opções pertinentes.
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-brand-border/70 text-center">
          <div className="w-12 h-12 rounded-xl bg-brand-bg text-brand-gold flex items-center justify-center mx-auto mb-4">
            <Award className="w-6 h-6" />
          </div>
          <h3 className="font-serif font-bold text-brand-dark text-lg mb-2">Experiência Local</h3>
          <p className="text-xs sm:text-sm text-brand-muted leading-relaxed">
            Conhecimento real do mercado local, avaliações precisas de preço por metro quadrado e tendências de valorização.
          </p>
        </div>
      </div>

      {/* Bloco de Contato Direto */}
      <div className="bg-brand-dark text-white rounded-3xl p-8 sm:p-10 text-center">
        <h2 className="font-serif text-2xl sm:text-3xl font-bold mb-3 text-white">
          Vamos conversar sobre o seu próximo imóvel?
        </h2>
        <p className="text-white/80 text-sm sm:text-base max-w-xl mx-auto mb-8">
          Estou à disposição para responder dúvidas, avaliar seu imóvel ou apresentar oportunidades fora do mercado convencional.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="https://wa.me/5588999999999?text=Ol%C3%A1%20Jo%C3%A3o!%20Gostaria%20de%20agendar%20uma%20conversa."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold gap-2"
          >
            <Phone className="w-4 h-4" />
            <span>Falar no WhatsApp</span>
          </a>
          <a
            href="mailto:contato@joaoimoveisgranja.com.br"
            className="btn-outline border-white/30 text-white hover:bg-white/10 gap-2"
          >
            <Mail className="w-4 h-4" />
            <span>Enviar E-mail</span>
          </a>
        </div>
      </div>

    </div>
  );
}
