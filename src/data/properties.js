// src/data/properties.js
// Catálogo de imóveis seguindo as regras do PRD e CAVEMAN CODE

export const properties = [
  {
    id: 1,
    title: "Casa Moderna no Centro",
    slug: "casa-moderna-centro",
    type: "casa",
    transactionType: "venda",
    price: 350000,
    location: "Centro",
    city: "Granja",
    state: "CE",
    bedrooms: 3,
    bathrooms: 2,
    parkingSpaces: 2,
    area: 180,
    description: "Excelente residência com arquitetura contemporânea, acabamentos nobres em porcelanato e iluminação em LED. Possui ampla sala de estar integrada à sala de jantar, cozinha americana com bancadas em granito, área gourmet privativa com churrasqueira e quintal gramado. Localizada no coração de Granja, com fácil acesso a colégios, supermercados e serviços.",
    featured: true,
    images: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=1000&q=80"
    ]
  },
  {
    id: 2,
    title: "Apartamento Vista Panorâmica",
    slug: "apartamento-vista-panoramica",
    type: "apartamento",
    transactionType: "aluguel",
    price: 1800,
    location: "São Raimundo",
    city: "Granja",
    state: "CE",
    bedrooms: 2,
    bathrooms: 2,
    parkingSpaces: 1,
    area: 75,
    description: "Apartamento arejado no último andar com vista privilegiada para o Rio Coreaú e a cidade. Conta com suíte ampla, varanda espaçosa para relaxar no final de tarde, armários planejados na cozinha e banheiros. Prédio tranquilo, familiar e com baixo custo de condomínio.",
    featured: true,
    images: [
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1000&q=80"
    ]
  },
  {
    id: 3,
    title: "Terreno Plano em Loteamento Nobre",
    slug: "terreno-plano-loteamento-nobre",
    type: "terreno",
    transactionType: "venda",
    price: 95000,
    location: "Residencial Park",
    city: "Granja",
    state: "CE",
    bedrooms: 0,
    bathrooms: 0,
    parkingSpaces: 0,
    area: 360,
    description: "Lote de 360m² (12x30m), totalmente plano e pronto para construir. Rua com pavimentação e infraestrutura de água, energia elétrica e iluminação pública. Região com grande valorização imobiliária nos últimos 2 anos. Documentação 100% regularizada e pronta para transferência.",
    featured: true,
    images: [
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1628744448840-55bdb2497bd4?auto=format&fit=crop&w=1000&q=80"
    ]
  },
  {
    id: 4,
    title: "Casa de Praia & Refúgio Familiar",
    slug: "casa-de-praia-refugio-familiar",
    type: "casa de praia",
    transactionType: "venda",
    price: 780000,
    location: "Lagoa do Paraíso",
    city: "Jijoca de Jericoacoara",
    state: "CE",
    bedrooms: 4,
    bathrooms: 4,
    parkingSpaces: 3,
    area: 260,
    description: "Magnífica casa de praia estilo rústico-chique próxima às águas cristalinas da Lagoa do Paraíso. Composta por 4 suítes, varandas arejadas com redes, deck privativo com piscina, churrasqueira e jardim tropical com coqueiros. Excelente potencial de rentabilidade com locação por temporada ou refúgio exclusivo.",
    featured: true,
    images: [
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1000&q=80"
    ]
  },
  {
    id: 5,
    title: "Residência Clássica com Quintal Amplo",
    slug: "residencia-classica-quintal-amplo",
    type: "casa",
    transactionType: "venda",
    price: 290000,
    location: "Tianguá",
    city: "Granja",
    state: "CE",
    bedrooms: 3,
    bathrooms: 2,
    parkingSpaces: 2,
    area: 150,
    description: "Casa tradicional com estrutura sólida, pé-direito alto e excelente ventilação natural. Possui jardim na frente, 3 quartos (sendo 1 suíte), cozinha independente e quintal com árvores frutíferas e espaço para instalação de piscina.",
    featured: false,
    images: [
      "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1000&q=80"
    ]
  },
  {
    id: 6,
    title: "Chalé Aconchegante Beira-Mar",
    slug: "chale-aconchegante-beira-mar",
    type: "casa de praia",
    transactionType: "aluguel",
    price: 3200,
    location: "Praia do Maceió",
    city: "Camocim",
    state: "CE",
    bedrooms: 2,
    bathrooms: 2,
    parkingSpaces: 2,
    area: 110,
    description: "Chalé totalmente mobiliado a poucos passos da praia. Ambientes integrados com decoração praiana refinada, varanda com vista para o pôr do sol do litoral cearense e cozinha completa. Ideal para quem busca tranquilidade ou trabalho remoto à beira-mar.",
    featured: false,
    images: [
      "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1000&q=80"
    ]
  },
  {
    id: 7,
    title: "Apartamento Compacto e Moderno",
    slug: "apartamento-compacto-moderno",
    type: "apartamento",
    transactionType: "venda",
    price: 175000,
    location: "Centro",
    city: "Granja",
    state: "CE",
    bedrooms: 1,
    bathrooms: 1,
    parkingSpaces: 1,
    area: 48,
    description: "Excelente oportunidade para investimento ou moradia prática. Apartamento tipo studio moderno, com iluminação planejada, piso cerâmico de alta qualidade e localização central que dispensa o uso constante de veículo.",
    featured: false,
    images: [
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1502005229762-ee1b2b8ab98f?auto=format&fit=crop&w=1000&q=80"
    ]
  },
  {
    id: 8,
    title: "Lote Comercial em Avenida Principal",
    slug: "lote-comercial-avenida-principal",
    type: "terreno",
    transactionType: "venda",
    price: 210000,
    location: "Centro",
    city: "Granja",
    state: "CE",
    bedrooms: 0,
    bathrooms: 0,
    parkingSpaces: 0,
    area: 450,
    description: "Terreno de esquina com grande fluxo diário de pedestres e veículos. Ideal para clínicas, agências, galerias comerciais ou galpão logístico. Topografia plana e testada de 18 metros.",
    featured: false,
    images: [
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80"
    ]
  }
];

export default properties;
