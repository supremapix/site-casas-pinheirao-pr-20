
import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { MessageCircle, Eye, DollarSign } from 'lucide-react';

const Gallery = () => {
  console.log('Gallery NOVA VERSÃO COM BOTÃO VERDE:', new Date().toLocaleTimeString());
  const [selectedHouse, setSelectedHouse] = useState<any>(null);

  const houses = [
    {
      id: 1,
      name: "Casa Modelo Pinheiral 75m²",
      image: "/assets/images/galeria/casa1.png",
      area: "75m²",
      rooms: "2 quartos, sala, cozinha, banheiro",
      features: ["Estrutura de madeira", "Cobertura colonial", "Instalações inclusas"],
      description: "Casa completa de 75m² com estrutura de madeira tratada, ideal para famílias pequenas. Inclui toda infraestrutura elétrica e hidráulica."
    },
    {
      id: 2,
      name: "Casa Modelo Tradicional 90m²",
      image: "/assets/images/galeria/casa2.png",
      area: "90m²",
      rooms: "3 quartos, sala, cozinha, 2 banheiros",
      features: ["Alvenaria", "Telhado cerâmico", "Churrasqueira"],
      description: "Casa em alvenaria de 90m² com acabamento completo, churrasqueira e área de serviço independente."
    },
    {
      id: 3,
      name: "Casa Modelo Executiva 120m²",
      image: "/assets/images/galeria/casa3.png",
      area: "120m²",
      rooms: "3 quartos, 2 salas, cozinha, 2 banheiros",
      features: ["Estrutura mista", "Varanda", "Garagem"],
      description: "Casa executiva de 120m² com varanda, garagem coberta e acabamentos de primeira qualidade."
    },
    {
      id: 4,
      name: "Casa Modelo Compacta 60m²",
      image: "/assets/images/galeria/casa4.png",
      area: "60m²",
      rooms: "2 quartos, sala, cozinha, banheiro",
      features: ["Madeira tratada", "Compacta", "Pronta entrega"],
      description: "Casa compacta ideal para casais ou início de família. Estrutura otimizada e funcional."
    },
    {
      id: 5,
      name: "Casa Modelo Família 110m²",
      image: "/assets/images/galeria/casa5.png",
      area: "110m²",
      rooms: "3 quartos, sala, cozinha, 2 banheiros",
      features: ["Alvenaria", "Área gourmet", "Lavanderia"],
      description: "Casa espaçosa com área gourmet integrada, perfeita para momentos em família."
    },
    {
      id: 6,
      name: "Casa Modelo Premium 150m²",
      image: "/assets/images/galeria/casa6.png",
      area: "150m²",
      rooms: "4 quartos, 2 salas, cozinha, 3 banheiros",
      features: ["Estrutura premium", "Suíte master", "Varanda gourmet"],
      description: "Casa premium com suíte master, closet e varanda gourmet com churrasqueira integrada."
    }
  ];

  const getWhatsappLink = (house: any) => {
    const message = `Olá eu vi seu site: ${house.name} e gostaria de saber mais!`;
    return `https://wa.me/5541996301028?text=${encodeURIComponent(message)}`;
  };

  return (
    <section id="galeria" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4 text-primary">
            Galeria de Casas Pré-fabricadas
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Conheça nossos modelos de casas de madeira e alvenaria com estrutura, cobertura e instalações básicas incluídas.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {houses.map((house) => (
            <Card key={house.id} className="group hover:shadow-large transition-all duration-300 hover:-translate-y-2">
              <div className="relative overflow-hidden rounded-t-lg">
                <img 
                  src={house.image} 
                  alt={house.name}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-primary text-primary-foreground font-semibold">
                    {house.area}
                  </Badge>
                </div>
                <div className="absolute top-4 right-4">
                  <div className="bg-primary/90 text-primary-foreground px-3 py-2 rounded-lg shadow-lg">
                    <p className="text-xs font-medium text-center">
                      Gostou desse projeto?<br />
                      <span className="font-bold">Entre em contato!</span>
                    </p>
                  </div>
                </div>
              </div>
              
              <CardContent className="p-6">
                <h3 className="font-heading text-xl font-semibold mb-2 text-primary">
                  {house.name}
                </h3>
                
                <p className="text-muted-foreground mb-4">
                  {house.rooms}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {house.features.slice(0, 2).map((feature, index) => (
                    <Badge key={index} variant="outline" className="text-xs">
                      {feature}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-2">
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => setSelectedHouse(house)}
                    className="flex-1"
                  >
                    <Eye className="h-4 w-4 mr-2" />
                    Ver Detalhes
                  </Button>
                  
                  <Button 
                    className="btn-whatsapp flex-1" 
                    size="sm"
                    asChild
                  >
                    <a href={getWhatsappLink(house)} target="_blank" rel="noopener noreferrer">
                      <MessageCircle className="h-4 w-4 mr-2" />
                      Interesse
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Modal de Detalhes */}
        <Dialog open={!!selectedHouse} onOpenChange={() => setSelectedHouse(null)}>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle className="text-2xl font-heading text-primary">
                {selectedHouse?.name}
              </DialogTitle>
            </DialogHeader>
            
            {selectedHouse && (
              <div className="space-y-6">
                <img 
                  src={selectedHouse.image} 
                  alt={selectedHouse.name}
                  className="w-full h-64 object-cover rounded-lg"
                />
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-lg mb-3 text-primary">Informações</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>Área:</span>
                        <span className="font-semibold">{selectedHouse.area}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Cômodos:</span>
                        <span className="font-semibold">{selectedHouse.rooms}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-lg mb-3 text-primary">Características</h4>
                    <ul className="space-y-1 text-sm">
                      {selectedHouse.features.map((feature: string, index: number) => (
                        <li key={index} className="flex items-center">
                          <div className="w-2 h-2 bg-primary rounded-full mr-2"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold text-lg mb-2 text-primary">Descrição</h4>
                  <p className="text-muted-foreground">{selectedHouse.description}</p>
                </div>
                
                <div className="flex gap-4">
                  <Button 
                    className="btn-whatsapp flex-1" 
                    asChild
                  >
                    <a href={getWhatsappLink(selectedHouse)} target="_blank" rel="noopener noreferrer">
                      <MessageCircle className="h-4 w-4 mr-2" />
                      Solicitar Orçamento
                    </a>
                  </Button>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default Gallery;
