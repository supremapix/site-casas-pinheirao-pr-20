
console.log('Contact NOVA VERSÃO - LIGUE AGORA:', new Date().toLocaleTimeString());
import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, MessageCircle, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.phone || !formData.message) {
      toast({
        title: "Campos obrigatórios",
        description: "Por favor, preencha nome, telefone e mensagem.",
        variant: "destructive"
      });
      return;
    }

    // Criar mensagem para WhatsApp
    const whatsappMessage = `*Contato via Site - Casas Pinheirão*

*Nome:* ${formData.name}
*Telefone:* ${formData.phone}
*Email:* ${formData.email || 'Não informado'}

*Mensagem:*
${formData.message}`;

    const whatsappLink = `https://wa.me/5541996301028?text=${encodeURIComponent(whatsappMessage)}`;
    
    // Abrir WhatsApp
    window.open(whatsappLink, '_blank');
    
    // Limpar formulário
    setFormData({
      name: '',
      phone: '',
      email: '',
      message: ''
    });

    toast({
      title: "Redirecionando para WhatsApp",
      description: "Sua mensagem será enviada via WhatsApp.",
    });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Telefone",
      info: "(41) 3667-8015",
      link: "tel:(41)36678015"
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      info: "(41) 99630-1028",
      link: "https://wa.me/5541996301028"
    },
    {
      icon: Mail,
      title: "Email",
      info: "casaspinheirao@casaspinheirao.com.br",
      link: "mailto:casaspinheirao@casaspinheirao.com.br"
    },
    {
      icon: MapPin,
      title: "Endereço",
      info: "Av. Jacob Macanhan, 1369 - PR",
      link: "https://maps.google.com/?q=Av.+Jacob+Macanhan,+1369,+PR"
    }
  ];

  return (
    <section id="contato" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4 text-primary">
            Entre em Contato
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Estamos prontos para atender você! Entre em contato conosco e realize o sonho da casa própria.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          
          {/* Informações de Contato */}
          <div className="space-y-8">
            <div>
              <h3 className="font-heading text-2xl font-bold mb-6 text-primary">
                Fale Conosco
              </h3>
              
              <div className="grid sm:grid-cols-2 gap-6">
                {contactInfo.map((item, index) => (
                  <Card key={index} className="border-primary/20 hover:border-primary/40 transition-colors">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="bg-primary/10 p-3 rounded-lg">
                          <item.icon className="h-6 w-6 text-primary" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-foreground mb-1">
                            {item.title}
                          </h4>
                          <a 
                            href={item.link}
                            target={item.link.startsWith('http') ? '_blank' : undefined}
                            rel={item.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                            className="text-sm text-muted-foreground hover:text-primary transition-colors"
                          >
                            {item.info}
                          </a>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Horário de Funcionamento */}
            <Card className="border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center text-primary">
                  <Clock className="h-5 w-5 mr-2" />
                  Horário de Funcionamento
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Segunda à Sexta:</span>
                  <span className="font-semibold">8h às 18h</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Sábado:</span>
                  <span className="font-semibold">8h às 12h</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Domingo:</span>
                  <span className="font-semibold">Fechado</span>
                </div>
              </CardContent>
            </Card>

            {/* WhatsApp Destacado */}
            <div className="bg-gradient-primary rounded-2xl p-6 text-primary-foreground">
              <h4 className="font-heading text-xl font-bold mb-3">
                Ligue agora!
              </h4>
              <p className="text-primary-foreground/90 mb-4">
                Para um atendimento mais rápido, entre em contato diretamente pelo WhatsApp!
              </p>
              <Button 
                className="btn-whatsapp bg-whatsapp hover:bg-whatsapp/90"
                asChild
              >
                <a href="https://wa.me/5541996301028" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="h-4 w-4 mr-2" />
                  Chamar no WhatsApp
                </a>
              </Button>
            </div>
          </div>

          {/* Formulário de Contato */}
          <Card className="border-primary/20">
            <CardHeader>
              <CardTitle className="text-2xl font-heading text-primary">
                Envie sua Mensagem
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Nome Completo *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Seu nome completo"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-2">
                      Telefone/WhatsApp *
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="(41) 99999-9999"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="seu@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Mensagem *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Conte-nos sobre o tipo de casa que você procura, suas necessidades e preferências..."
                    rows={5}
                    required
                  />
                </div>

                <Button type="submit" className="w-full btn-whatsapp">
                  <Send className="h-4 w-4 mr-2" />
                  Enviar via WhatsApp
                </Button>

                <p className="text-xs text-center text-muted-foreground">
                  * Campos obrigatórios. Sua mensagem será redirecionada para nosso WhatsApp.
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
