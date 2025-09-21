import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const FAQ = () => {
  const faqs = [
    {
      id: "item-1",
      question: "Qual é o prazo de entrega das casas pré-fabricadas?",
      answer: "O prazo médio de entrega é de 30 a 45 dias úteis, dependendo do modelo escolhido e das condições climáticas. Este prazo inclui a fabricação completa da estrutura, transporte e montagem no local. Para modelos personalizados, o prazo pode ser estendido para 60 dias."
    },
    {
      id: "item-2",
      question: "As casas pré-fabricadas são resistentes e duráveis?",
      answer: "Sim! Nossas casas são construídas com materiais de primeira qualidade. As estruturas de madeira recebem tratamento antifúngico e anti-insetos, garantindo durabilidade superior a 50 anos. As casas de alvenaria seguem todas as normas técnicas da ABNT, oferecendo a mesma resistência das construções convencionais."
    },
    {
      id: "item-3",
      question: "Quais serviços estão inclusos no preço?",
      answer: "O preço inclui toda a estrutura da casa, cobertura completa (telhado + telhas), instalações elétricas e hidráulicas básicas, transporte até 100km de Curitiba e montagem completa no local. Não estão inclusos: fundação/radier, fossa séptica, poço artesiano e acabamentos externos como pintura (apenas em alguns modelos)."
    },
    {
      id: "item-4",
      question: "É possível financiar a compra da casa?",
      answer: "Sim! Trabalhamos com diversas modalidades de pagamento e financiamento. Aceitamos financiamento pela Caixa Econômica Federal (Programa Minha Casa Minha Vida), bancos privados e também parcelamento direto com a empresa. Consulte nossas condições especiais e facilite a realização do seu sonho."
    },
    {
      id: "item-5",
      question: "Vocês atendem toda a região metropolitana de Curitiba?",
      answer: "Sim! Atendemos Curitiba e toda a região metropolitana, incluindo: Pinhais, São José dos Pinhais, Araucária, Fazenda Rio Grande, Almirante Tamandaré, Colombo, Piraquara, Quatro Barras e outras cidades próximas. Para locais mais distantes, consulte o valor adicional do frete."
    }
  ];

  const whatsappLink = `https://wa.me/5541996301028?text=Olá! Tenho algumas dúvidas sobre as casas pré-fabricadas. Podem me ajudar?`;

  return (
    <section id="faq" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4 text-primary">
              Perguntas Frequentes
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Esclarecemos as principais dúvidas sobre nossas casas pré-fabricadas. 
              Não encontrou sua pergunta? Entre em contato conosco!
            </p>
          </div>

          <div className="bg-card rounded-2xl shadow-medium border p-6 md:p-8">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq) => (
                <AccordionItem 
                  key={faq.id} 
                  value={faq.id}
                  className="border border-border/50 rounded-lg px-6 py-2 hover:border-primary/30 transition-colors"
                >
                  <AccordionTrigger className="text-left font-semibold text-primary hover:text-primary/80 py-4">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed pb-4">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          {/* Call to Action */}
          <div className="mt-12 text-center">
            <div className="bg-gradient-primary rounded-2xl p-8 text-primary-foreground">
              <h3 className="font-heading text-xl md:text-2xl font-bold mb-4">
                Ainda tem dúvidas?
              </h3>
              <p className="text-primary-foreground/90 mb-6 max-w-2xl mx-auto">
                Nossa equipe está pronta para esclarecer todas as suas questões 
                e ajudar você a escolher a casa perfeita para sua família.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button 
                  size="lg"
                  className="btn-whatsapp bg-whatsapp hover:bg-whatsapp/90"
                  asChild
                >
                  <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="h-5 w-5 mr-2" />
                    Falar no WhatsApp
                  </a>
                </Button>
                
                <Button 
                  variant="outline"
                  size="lg"
                  className="bg-primary-foreground/10 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/20"
                  asChild
                >
                  <a href="tel:(41)99630-1028">
                    Ligar: (41) 99630-1028
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;