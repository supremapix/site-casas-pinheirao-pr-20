// ============================================
// ARQUIVO CENTRALIZADO DE DADOS DAS CASAS
// ============================================
// IMPORTANTE: Todos os preços devem ser atualizados aqui
// Este é o ÚNICO lugar onde os dados das casas devem ser mantidos

export interface HouseData {
  id: number;
  name: string;
  area: string;
  bedrooms: number;
  bathrooms: number;
  rooms?: string;
  image: string;
  features: string[];
  description: string;
  highlight: string;
  price?: number; // Preço atual (em R$)
  oldPrice?: number; // Preço antigo para mostrar desconto (em R$)
}

export interface PromotionData {
  id: number;
  title: string;
  features: string[];
  highlight: string;
  deadline: string;
  whatsappMessage: string;
  price?: number;
  oldPrice?: number;
}

// ============================================
// CASAS PRINCIPAIS - GALERIA COMPLETA
// ============================================
export const houses: HouseData[] = [
  {
    id: 1,
    name: "Casa Modelo Pinheiral 75m²",
    image: "/assets/images/galeria/casa1.png",
    area: "75m²",
    bedrooms: 2,
    bathrooms: 1,
    rooms: "2 quartos, sala, cozinha, banheiro",
    features: ["Estrutura de madeira", "Cobertura colonial", "Instalações inclusas"],
    description: "Casa completa de 75m² com estrutura de madeira tratada, ideal para famílias pequenas. Inclui toda infraestrutura elétrica e hidráulica.",
    highlight: "Mais vendida",
    price: 180000, // ATUALIZE ESTE VALOR
    oldPrice: undefined
  },
  {
    id: 2,
    name: "Casa Modelo Tradicional 90m²",
    image: "/assets/images/galeria/casa2.png",
    area: "90m²",
    bedrooms: 3,
    bathrooms: 2,
    rooms: "3 quartos, sala, cozinha, 2 banheiros",
    features: ["Alvenaria", "Telhado cerâmico", "Churrasqueira"],
    description: "Casa em alvenaria de 90m² com acabamento completo, churrasqueira e área de serviço independente.",
    highlight: "Ideal para famílias",
    price: 250000, // ATUALIZE ESTE VALOR
    oldPrice: undefined
  },
  {
    id: 3,
    name: "Casa Modelo Executiva 120m²",
    image: "/assets/images/galeria/casa3.png",
    area: "120m²",
    bedrooms: 3,
    bathrooms: 2,
    rooms: "3 quartos, 2 salas, cozinha, 2 banheiros",
    features: ["Estrutura mista", "Varanda", "Garagem"],
    description: "Casa executiva de 120m² com varanda, garagem coberta e acabamentos de primeira qualidade.",
    highlight: "Máximo conforto",
    price: 350000, // ATUALIZE ESTE VALOR
    oldPrice: undefined
  },
  {
    id: 4,
    name: "Casa Modelo Compacta 60m²",
    image: "/assets/images/galeria/casa4.png",
    area: "60m²",
    bedrooms: 2,
    bathrooms: 1,
    rooms: "2 quartos, sala, cozinha, banheiro",
    features: ["Madeira tratada", "Compacta", "Pronta entrega"],
    description: "Casa compacta ideal para casais ou início de família. Estrutura otimizada e funcional.",
    highlight: "Pronta entrega",
    price: 150000, // ATUALIZE ESTE VALOR
    oldPrice: undefined
  },
  {
    id: 5,
    name: "Casa Modelo Família 110m²",
    image: "/assets/images/galeria/casa5.png",
    area: "110m²",
    bedrooms: 3,
    bathrooms: 2,
    rooms: "3 quartos, sala, cozinha, 2 banheiros",
    features: ["Alvenaria", "Área gourmet", "Lavanderia"],
    description: "Casa espaçosa com área gourmet integrada, perfeita para momentos em família.",
    highlight: "Ideal para famílias",
    price: 320000, // ATUALIZE ESTE VALOR
    oldPrice: undefined
  },
  {
    id: 6,
    name: "Casa Modelo Premium 150m²",
    image: "/assets/images/galeria/casa6.png",
    area: "150m²",
    bedrooms: 4,
    bathrooms: 3,
    rooms: "4 quartos, 2 salas, cozinha, 3 banheiros",
    features: ["Estrutura premium", "Suíte master", "Varanda gourmet"],
    description: "Casa premium com suíte master, closet e varanda gourmet com churrasqueira integrada.",
    highlight: "Premium",
    price: 450000, // ATUALIZE ESTE VALOR
    oldPrice: undefined
  }
];

// ============================================
// CASAS SIMPLIFICADAS - PARA LAYOUTS ALTERNATIVOS
// ============================================
export const housesSimplified: HouseData[] = [
  {
    id: 1,
    name: "Casa Econômica",
    area: "45m²",
    bedrooms: 2,
    bathrooms: 1,
    image: "/assets/images/galeria/casa1.png",
    features: ["Sala integrada", "Cozinha americana", "Área de serviço"],
    highlight: "Perfeita para começar",
    description: "Casa econômica ideal para quem está começando",
    price: 120000, // ATUALIZE ESTE VALOR
    oldPrice: undefined
  },
  {
    id: 2,
    name: "Casa Familiar",
    area: "70m²",
    bedrooms: 3,
    bathrooms: 2,
    image: "/assets/images/galeria/casa2.png",
    features: ["3 quartos", "Varanda", "Cozinha planejada"],
    highlight: "Ideal para famílias",
    description: "Casa familiar confortável",
    price: 200000, // ATUALIZE ESTE VALOR
    oldPrice: undefined
  },
  {
    id: 3,
    name: "Casa Premium",
    area: "90m²",
    bedrooms: 3,
    bathrooms: 2,
    image: "/assets/images/galeria/casa3.png",
    features: ["Suíte master", "Varanda gourmet", "Garagem"],
    highlight: "Máximo conforto",
    description: "Casa premium com acabamento de luxo",
    price: 280000, // ATUALIZE ESTE VALOR
    oldPrice: undefined
  }
];

// ============================================
// PROMOÇÕES ESPECIAIS
// ============================================
export const promotions: PromotionData[] = [
  {
    id: 1,
    title: "Super Promoção Casa 75m²",
    features: ["2 quartos + sala + cozinha + banheiro", "Estrutura de madeira tratada", "Instalações elétricas e hidráulicas", "Montagem inclusa"],
    highlight: "Mais vendida",
    deadline: "Válida até 31/12/2024",
    whatsappMessage: "Olá! Tenho interesse na promoção da Casa 75m². Gostaria de mais detalhes.",
    price: 180000, // ATUALIZE ESTE VALOR
    oldPrice: 200000 // ATUALIZE ESTE VALOR
  },
  {
    id: 2,
    title: "Oferta Especial Casa Alvenaria 90m²",
    features: ["3 quartos + 2 banheiros + área gourmet", "Construção em alvenaria", "Churrasqueira inclusa", "Pintura completa"],
    highlight: "Promoção especial",
    deadline: "Últimas unidades",
    whatsappMessage: "Olá! Quero saber mais sobre a oferta da Casa Alvenaria 90m².",
    price: 250000, // ATUALIZE ESTE VALOR
    oldPrice: 280000 // ATUALIZE ESTE VALOR
  },
  {
    id: 3,
    title: "Casa Compacta 60m² - Pronta Entrega",
    features: ["2 quartos + sala + cozinha + banheiro", "Ideal para casais", "Entrega em 30 dias", "Financiamento facilitado"],
    highlight: "Pronta entrega",
    deadline: "Oferta relâmpago",
    whatsappMessage: "Olá! Gostaria de informações sobre a Casa Compacta 60m² em promoção.",
    price: 150000, // ATUALIZE ESTE VALOR
    oldPrice: 170000 // ATUALIZE ESTE VALOR
  }
];

// ============================================
// FUNÇÕES AUXILIARES
// ============================================

/**
 * Formata o preço em reais
 */
export const formatPrice = (price: number): string => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(price);
};

/**
 * Calcula o desconto percentual
 */
export const calculateDiscount = (oldPrice: number, newPrice: number): number => {
  return Math.round(((oldPrice - newPrice) / oldPrice) * 100);
};
