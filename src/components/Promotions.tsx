import { Clock, Gift, MessageCircle, Star, TrendingDown } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { promotions, formatPrice, calculateDiscount } from '@/data/houses';

const Promotions = () => {

  const getWhatsappLink = (message: string) => {
    return `https://wa.me/5541996301028?text=${encodeURIComponent(message)}`;
  };

  return (
    <section id="promocoes" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4 text-primary">
            Promoções Especiais
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Aproveite nossas ofertas exclusivas em casas pré-fabricadas. Entre em contato para conhecer nossas condições especiais!
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {promotions.map((promo) => (
            <Card key={promo.id} className="relative border-2 border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-large group">
              
              {/* Badge de destaque */}
              <div className="absolute -top-3 left-6 z-10">
                <Badge className="bg-gradient-primary text-primary-foreground px-4 py-1 font-semibold shadow-soft">
                  <Gift className="h-4 w-4 mr-1" />
                  {promo.highlight}
                </Badge>
              </div>

              <CardHeader className="pb-4">
                <CardTitle className="text-xl font-heading text-primary mb-2">
                  {promo.title}
                </CardTitle>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Clock className="h-4 w-4 mr-1" />
                    {promo.deadline}
                  </div>
                  {promo.price && promo.oldPrice && (
                    <Badge variant="destructive" className="flex items-center gap-1">
                      <TrendingDown className="h-3 w-3" />
                      -{calculateDiscount(promo.oldPrice, promo.price)}%
                    </Badge>
                  )}
                </div>
              </CardHeader>

              <CardContent className="space-y-6">
                {/* Preço */}
                {promo.price && (
                  <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-lg p-4 border border-primary/20">
                    <p className="text-xs text-muted-foreground mb-1">Valor promocional</p>
                    <div className="flex items-baseline gap-2">
                      <span className="text-3xl font-bold text-primary">{formatPrice(promo.price)}</span>
                      {promo.oldPrice && (
                        <span className="text-sm text-muted-foreground line-through">
                          {formatPrice(promo.oldPrice)}
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">ou condições especiais via WhatsApp</p>
                  </div>
                )}

                {/* Características */}
                <div>
                  <h4 className="font-semibold mb-3 text-foreground">Incluso nesta promoção:</h4>
                  <ul className="space-y-2">
                    {promo.features.map((feature, index) => (
                      <li key={index} className="flex items-start text-sm text-muted-foreground">
                        <Star className="h-4 w-4 mr-2 text-primary flex-shrink-0 mt-0.5" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Botão de ação */}
                <Button 
                  className="btn-whatsapp w-full group-hover:scale-105 transition-transform duration-200" 
                  asChild
                >
                  <a href={getWhatsappLink(promo.whatsappMessage)} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="h-4 w-4 mr-2" />
                    Consultar Condições
                  </a>
                </Button>

                {/* Informação adicional */}
                <p className="text-xs text-center text-muted-foreground">
                  * Inclui estrutura, montagem e instalações básicas. 
                  Consulte condições especiais de pagamento.
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action Adicional */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-primary rounded-2xl p-8 text-primary-foreground">
            <h3 className="font-heading text-2xl font-bold mb-4">
              Não encontrou o modelo ideal?
            </h3>
            <p className="text-lg mb-6 text-primary-foreground/90">
              Fazemos projetos personalizados! Conte-nos sua necessidade e criaremos a casa dos seus sonhos.
            </p>
            <Button 
              size="lg"
              variant="secondary"
              className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
              asChild
            >
              <a href={getWhatsappLink("Olá! Gostaria de um projeto personalizado de casa pré-fabricada. Podem me ajudar?")} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="h-5 w-5 mr-2" />
                Solicitar Projeto Personalizado
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Promotions;
