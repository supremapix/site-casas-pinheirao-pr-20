import { ArrowRight, Home, Shield, Truck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const Hero = () => {
  const whatsappLink = `https://wa.me/5541996301028?text=Olá! Gostaria de um orçamento para casa pré-fabricada.`;

  const scrollToGallery = () => {
    const element = document.getElementById('galeria');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const features = [
    {
      icon: Home,
      title: "Construção Rápida",
      description: "Casas prontas em até 45 dias"
    },
    {
      icon: Shield,
      title: "Qualidade Garantida", 
      description: "Materiais de primeira linha"
    },
    {
      icon: Truck,
      title: "Entrega e Montagem",
      description: "Serviço completo incluído"
    }
  ];

  return (
    <section id="inicio" className="min-h-screen flex items-center gradient-hero text-primary-foreground">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-6xl mx-auto">
          
          {/* Main Hero Content */}
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Casas Pré-fabricadas em
              <span className="block text-primary-glow">Curitiba e Região</span>
            </h1>
            
            <p className="text-lg md:text-xl lg:text-2xl mb-8 text-primary-foreground/90 max-w-3xl mx-auto">
              Especializados em casas de madeira e alvenaria. Qualidade, rapidez e o melhor preço da região metropolitana do Paraná.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                size="lg" 
                className="btn-whatsapp text-lg px-8 py-6 h-auto"
                asChild
              >
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2">
                  <span>Solicitar Orçamento</span>
                  <ArrowRight className="h-5 w-5" />
                </a>
              </Button>
              
              <Button 
                variant="outline" 
                size="lg" 
                onClick={scrollToGallery}
                className="text-lg px-8 py-6 h-auto bg-primary-foreground/10 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/20"
              >
                Ver Galeria
              </Button>
            </div>
          </div>

          {/* Features Cards */}
          <div className="grid md:grid-cols-3 gap-6 animate-slide-up">
            {features.map((feature, index) => (
              <Card key={index} className="bg-primary-foreground/10 border-primary-foreground/20 backdrop-blur-sm">
                <CardContent className="p-6 text-center">
                  <feature.icon className="h-12 w-12 mx-auto mb-4 text-primary-glow" />
                  <h3 className="font-heading font-semibold text-lg mb-2 text-primary-foreground">
                    {feature.title}
                  </h3>
                  <p className="text-primary-foreground/80">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="animate-fade-in">
              <div className="text-3xl md:text-4xl font-bold text-primary-glow mb-2">15+</div>
              <div className="text-primary-foreground/80">Anos de Experiência</div>
            </div>
            <div className="animate-fade-in">
              <div className="text-3xl md:text-4xl font-bold text-primary-glow mb-2">500+</div>
              <div className="text-primary-foreground/80">Casas Construídas</div>
            </div>
            <div className="animate-fade-in">
              <div className="text-3xl md:text-4xl font-bold text-primary-glow mb-2">45</div>
              <div className="text-primary-foreground/80">Dias para Entregar</div>
            </div>
            <div className="animate-fade-in">
              <div className="text-3xl md:text-4xl font-bold text-primary-glow mb-2">100%</div>
              <div className="text-primary-foreground/80">Satisfação Garantida</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;