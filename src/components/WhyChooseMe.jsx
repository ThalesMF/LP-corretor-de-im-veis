// src/components/WhyChooseMe.jsx
import React from "react";
import { Handshake, MapPinned, ClipboardCheck, BadgeCheck } from "lucide-react";

export default function WhyChooseMe() {
  const benefits = [
    {
      icon: Handshake,
      title: "Atendimento Personalizado",
      description:
        "Dedicação exclusiva para entender seu perfil, prioridades e orçamento, buscando apenas opções que façam sentido para você.",
    },
    {
      icon: MapPinned,
      title: "Conhecimento da Região",
      description:
        "Amplo domínio dos bairros, tendências de valorização e peculiaridades de Granja e do litoral cearense.",
    },
    {
      icon: ClipboardCheck,
      title: "Acompanhamento Completo",
      description:
        "Suporte do primeiro contato até a assinatura da escritura, cuidando da análise documental e de cada detalhe do processo.",
    },
    {
      icon: BadgeCheck,
      title: "Transparência na Negociação",
      description:
        "Comunicação clara, honesta e sem letras miúdas. Segurança e serenidade em uma das decisões mais importantes da sua vida.",
    },
  ];

  return (
    <section
      className="bg-white/60 border-y border-brand-border/60 py-16 sm:py-20"
      aria-labelledby="why-title"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Cabeçalho da Seção */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2
            id="why-title"
            className="text-2xl sm:text-3xl lg:text-4xl font-bold font-serif text-brand-dark"
          >
            Por que negociar comigo?
          </h2>
          <p className="text-brand-muted text-sm sm:text-base mt-5">
            Mais do que apresentar imóveis, ajudo você a tomar a decisão certa
            com segurança, proximidade e conhecimento local.
          </p>
        </div>

        {/* Grid de Benefícios (4 colunas no desktop) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map(function (item, index) {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="p-6 rounded-2xl bg-[#F7F4EF]/70 border border-brand-border/70 hover:border-brand-gold/50 transition-all duration-300 hover:shadow-sm"
              >
                <div className="w-12 h-12 rounded-xl bg-brand-dark text-brand-gold flex items-center justify-center mb-5 shadow-xs">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-lg font-bold text-brand-dark mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-brand-text/80 leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
