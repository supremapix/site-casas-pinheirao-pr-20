import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Phone, MessageCircle, Home, MapPin, CheckCircle, ArrowLeft } from 'lucide-react';
import { getLocationBySlug } from '@/data/locations';
import { housesSimplified, formatPrice } from '@/data/houses';
import Contact from '@/components/Contact';
import FloatingButtons from '@/components/FloatingButtons';
import NotFound from './NotFound';

const LocationPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const location = slug ? getLocationBySlug(slug) : undefined;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!location) {
    return <NotFound />;
  }

  const whatsappMessage = `Olá! Estou interessado em casas pré-fabricadas em ${location.name}. Gostaria de mais informações.`;
  const whatsappLink = `https://wa.me/5511999999999?text=${encodeURIComponent(whatsappMessage)}`;
  
  // Casa mais barata como "isca"
  const cheapestHouse = housesSimplified.reduce((prev, current) => 
    (prev.price && current.price && current.price < prev.price) ? current : prev
  );

  // Conteúdo personalizado por localização
  const getLocalizedContent = () => {
    return [
      {
        title: `Por que escolher ${location.name} para sua casa pré-fabricada?`,
        content: `${location.description} Nossa empresa tem orgulho de atender ${location.name} com casas pré-fabricadas de alta qualidade, oferecendo soluções rápidas e econômicas para quem deseja realizar o sonho da casa própria nesta região.`,
        image: housesSimplified[0]?.image
      },
      {
        title: `Serviços Especializados em ${location.name}`,
        content: `Oferecemos serviços completos de construção de casas pré-fabricadas em ${location.name}. Nossa equipe especializada conhece bem as características da região e está preparada para entregar sua casa dos sonhos com agilidade e qualidade. Trabalhamos com os melhores materiais e técnicas construtivas modernas, garantindo durabilidade e conforto para sua família. ${location.services.join(', ')} são alguns dos nossos diferenciais.`,
        image: housesSimplified[1]?.image
      },
      {
        title: `Vantagens das Casas Pré-Fabricadas em ${location.name}`,
        content: `As casas pré-fabricadas são a solução ideal para quem busca agilidade na construção sem abrir mão da qualidade. Em ${location.name}, nossos clientes aproveitam diversas vantagens: construção até 70% mais rápida que a tradicional, economia de até 30% no investimento total, menor geração de resíduos e impacto ambiental, possibilidade de personalização total do projeto, e garantia de qualidade em todos os materiais utilizados. Além disso, as casas pré-fabricadas são tão resistentes quanto as construções convencionais.`,
        image: housesSimplified[2]?.image
      },
      {
        title: `Conheça ${location.type === 'city' ? 'a Cidade' : 'o Bairro'} e Realize seu Sonho`,
        content: `${location.name} é ${location.type === 'city' ? 'uma cidade' : 'um bairro'} que oferece excelente qualidade de vida e infraestrutura completa. ${location.type === 'city' && location.neighborhoods ? `Com bairros como ${location.neighborhoods.join(', ')}, ` : ''}a região conta com fácil acesso a serviços essenciais, comércio diversificado, escolas, hospitais e áreas de lazer. Nossa empresa está pronta para construir sua casa pré-fabricada em ${location.name}, oferecendo o melhor custo-benefício e a garantia de um lar perfeito para você e sua família. Entre em contato conosco e conheça todos os nossos modelos disponíveis!`,
        image: housesSimplified[0]?.image
      }
    ];
  };

  const localizedContent = getLocalizedContent();

  // FAQs personalizadas
  const localFaqs = [
    {
      question: `Quanto tempo leva para construir uma casa pré-fabricada em ${location.name}?`,
      answer: `Em ${location.name}, o prazo médio para construção e montagem de uma casa pré-fabricada é de 30 a 45 dias após a aprovação do projeto. Este prazo pode variar conforme o tamanho e complexidade do projeto escolhido.`
    },
    {
      question: `Vocês fazem a instalação em ${location.name}?`,
      answer: `Sim! Temos equipe especializada que atende toda a região de ${location.name} e ${location.region}. Fazemos desde a preparação do terreno até a montagem completa da casa, incluindo instalações elétricas e hidráulicas.`
    },
    {
      question: `Quais são os custos adicionais além do valor da casa em ${location.name}?`,
      answer: `Em ${location.name}, além do valor da casa, deve-se considerar a preparação do terreno, fundação, ligações de água, luz e esgoto, e possíveis adequações específicas do local. Nossa equipe realiza uma visita técnica gratuita para orçamento completo.`
    },
    {
      question: `As casas pré-fabricadas são resistentes para o clima de ${location.name}?`,
      answer: `Absolutamente! Nossas casas são projetadas para suportar todas as condições climáticas da região de ${location.name}. Utilizamos materiais de alta qualidade e técnicas construtivas que garantem conforto térmico, resistência e durabilidade.`
    },
    {
      question: `Posso personalizar o projeto da minha casa em ${location.name}?`,
      answer: `Sim! Todos os nossos projetos podem ser personalizados de acordo com suas necessidades e preferências. Nossa equipe está pronta para desenvolver o projeto ideal para você em ${location.name}.`
    }
  ];

  // Schema Markup para SEO
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": `Casas Pré-Fabricadas em ${location.name}`,
    "description": location.seoDescription,
    "brand": {
      "@type": "Brand",
      "name": "Casas Pinheirão"
    },
    "offers": {
      "@type": "Offer",
      "url": `https://casaspinheirao.app.br/${location.slug}`,
      "priceCurrency": "BRL",
      "price": cheapestHouse.price,
      "availability": "https://schema.org/InStock",
      "itemCondition": "https://schema.org/NewCondition"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "127"
    }
  };

  return (
    <>
      <Helmet>
        <title>{location.seoTitle}</title>
        <meta name="description" content={location.seoDescription} />
        <meta name="keywords" content={location.seoKeywords.join(', ')} />
        <link rel="canonical" href={`https://casaspinheirao.app.br/${location.slug}`} />
        
        {/* Open Graph */}
        <meta property="og:title" content={location.seoTitle} />
        <meta property="og:description" content={location.seoDescription} />
        <meta property="og:url" content={`https://casaspinheirao.app.br/${location.slug}`} />
        <meta property="og:type" content="website" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={location.seoTitle} />
        <meta name="twitter:description" content={location.seoDescription} />
        
        {/* Schema.org */}
        <script type="application/ld+json">
          {JSON.stringify(schemaMarkup)}
        </script>
      </Helmet>

      <FloatingButtons />

      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
        {/* Header com navegação */}
        <header className="bg-white shadow-md sticky top-0 z-40">
          <div className="container mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
              <Link to="/" className="flex items-center space-x-2 text-primary hover:text-primary-light transition-colors">
                <ArrowLeft className="w-5 h-5" />
                <span className="font-semibold">Voltar para Home</span>
              </Link>
              <Button 
                className="bg-whatsapp hover:bg-whatsapp/90 text-white"
                asChild
              >
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </header>

        {/* Hero Section com CTAs */}
        <section className="py-20 px-6 bg-gradient-to-r from-primary to-primary-light text-white">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <Badge className="bg-white/20 text-white border-white/30 mb-4">
                <MapPin className="w-4 h-4 mr-2" />
                {location.region}
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Casas Pré-Fabricadas em {location.name}
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-white/90">
                Realize o sonho da casa própria com qualidade, rapidez e preço justo
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg"
                  className="bg-white text-primary hover:bg-white/90 shadow-xl text-lg px-8 py-6"
                  asChild
                >
                  <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Quero Minha Casa Agora
                  </a>
                </Button>
                <Button 
                  size="lg"
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white/10 text-lg px-8 py-6"
                  asChild
                >
                  <a href="tel:+5511999999999">
                    <Phone className="w-5 h-5 mr-2" />
                    Ligar Agora
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Casa Isca */}
        <section className="py-16 px-6 -mt-12">
          <div className="container mx-auto max-w-4xl">
            <Card className="shadow-2xl border-0 overflow-hidden">
              <div className="bg-gradient-to-r from-yellow-400 to-orange-400 text-white py-3 px-6 text-center">
                <p className="font-bold text-lg">🔥 OFERTA ESPECIAL - CASA MAIS VENDIDA 🔥</p>
              </div>
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <img 
                      src={cheapestHouse.image}
                      alt={cheapestHouse.name}
                      className="w-full h-64 object-cover rounded-lg"
                    />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-4">{cheapestHouse.name}</h3>
                    <div className="flex items-baseline gap-2 mb-4">
                      <span className="text-4xl font-bold text-primary">
                        {cheapestHouse.price ? formatPrice(cheapestHouse.price) : 'Consulte'}
                      </span>
                    </div>
                    <div className="space-y-3 mb-6">
                      <div className="flex items-center text-gray-700">
                        <Home className="w-5 h-5 mr-2 text-primary" />
                        <span>{cheapestHouse.area}</span>
                      </div>
                      {cheapestHouse.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center text-gray-700">
                          <CheckCircle className="w-5 h-5 mr-2 text-green-500" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                    <Button 
                      className="w-full bg-whatsapp hover:bg-whatsapp/90 text-white text-lg py-6"
                      asChild
                    >
                      <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                        <MessageCircle className="w-5 h-5 mr-2" />
                        Quero Esta Casa em {location.name}
                      </a>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Vídeo YouTube */}
        <section className="py-16 px-6 bg-white">
          <div className="container mx-auto max-w-5xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Conheça Nossas Casas Pré-Fabricadas
              </h2>
              <p className="text-xl text-gray-600">
                Veja como é rápido e fácil ter sua casa própria
              </p>
            </div>
            <div className="aspect-video rounded-xl overflow-hidden shadow-2xl">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/i-ut0Z0F-wY"
                title="Casas Pré-Fabricadas"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
          </div>
        </section>

        {/* Conteúdo Personalizado */}
        <section className="py-16 px-6">
          <div className="container mx-auto max-w-6xl">
            {localizedContent.map((content, index) => (
              <div key={index} className={`mb-20 ${index % 2 === 0 ? '' : 'bg-white rounded-2xl p-8 shadow-lg'}`}>
                <div className={`grid md:grid-cols-2 gap-12 items-center ${index % 2 === 0 ? '' : 'md:grid-flow-dense'}`}>
                  <div className={index % 2 === 0 ? '' : 'md:col-start-2'}>
                    <h2 className="text-3xl font-bold text-gray-800 mb-6">
                      {content.title}
                    </h2>
                    <p className="text-lg text-gray-600 leading-relaxed">
                      {content.content}
                    </p>
                  </div>
                  <div className={index % 2 === 0 ? '' : 'md:col-start-1 md:row-start-1'}>
                    <img 
                      src={content.image}
                      alt={content.title}
                      className="w-full h-80 object-cover rounded-xl shadow-lg"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Accordion FAQ */}
        <section className="py-16 px-6 bg-gradient-to-br from-gray-50 to-blue-50">
          <div className="container mx-auto max-w-4xl">
            <div className="text-center mb-12">
              <Badge className="bg-primary text-white mb-4">
                Dúvidas Frequentes
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Perguntas sobre Casas em {location.name}
              </h2>
            </div>
            <Card className="shadow-xl border-0">
              <CardContent className="p-8">
                <Accordion type="single" collapsible className="space-y-4">
                  {localFaqs.map((faq, index) => (
                    <AccordionItem 
                      key={index} 
                      value={`faq-${index}`}
                      className="border border-gray-200 rounded-xl px-6 data-[state=open]:bg-blue-50/50"
                    >
                      <AccordionTrigger className="text-left font-semibold text-gray-800 hover:text-primary py-6">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-600 pb-6 leading-relaxed">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* CTA Final */}
        <section className="py-16 px-6 bg-gradient-to-r from-primary to-primary-light text-white">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Pronto para Construir Sua Casa em {location.name}?
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Entre em contato agora e receba um orçamento personalizado sem compromisso
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                className="bg-white text-primary hover:bg-white/90 shadow-xl text-lg px-8 py-6"
                asChild
              >
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Solicitar Orçamento
                </a>
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white/10 text-lg px-8 py-6"
                asChild
              >
                <a href="tel:+5511999999999">
                  <Phone className="w-5 h-5 mr-2" />
                  (11) 99999-9999
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* Contato */}
        <Contact />
      </div>
    </>
  );
};

export default LocationPage;
