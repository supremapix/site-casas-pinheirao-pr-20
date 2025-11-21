import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Phone, MessageCircle, Mail, MapPin, Home, Shield, Clock, Star, Menu, X, ArrowRight, CheckCircle } from "lucide-react";
import { housesSimplified, formatPrice } from '@/data/houses';

const NewLayout = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const whatsappLink = "https://wa.me/5511999999999?text=Olá! Gostaria de conhecer as casas pré-fabricadas da Casas Pinheirão.";

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const faqs = [
    {
      id: "faq-1",
      question: "Qual o prazo de entrega das casas pré-fabricadas?",
      answer: "O prazo médio de entrega é de 30 a 45 dias após a aprovação do projeto e confirmação do pedido."
    },
    {
      id: "faq-2", 
      question: "As casas são resistentes?",
      answer: "Sim! Nossas casas são construídas com materiais de alta qualidade e seguem todas as normas técnicas brasileiras."
    },
    {
      id: "faq-3",
      question: "Vocês fazem a instalação?",
      answer: "Sim, temos equipe especializada para montagem em todo o território nacional."
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Olá! Meu nome é ${formData.name}. ${formData.message}. Telefone: ${formData.phone}. Email: ${formData.email}`;
    const whatsappUrl = `https://wa.me/5511999999999?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    setFormData({ name: '', phone: '', email: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Header Moderno */}
      <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md shadow-lg z-50 border-b border-blue-100">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-green-600 rounded-xl flex items-center justify-center">
                <Home className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-800">Casas Pinheirão</h1>
                <p className="text-sm text-gray-600">Construindo sonhos</p>
              </div>
            </div>

            {/* Desktop Menu */}
            <nav className="hidden md:flex items-center space-x-8">
              <button onClick={() => scrollToSection('inicio')} className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
                Início
              </button>
              <button onClick={() => scrollToSection('galeria')} className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
                Galeria
              </button>
              <button onClick={() => scrollToSection('faq')} className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
                FAQ
              </button>
              <button onClick={() => scrollToSection('contato')} className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
                Contato
              </button>
              <Button className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white shadow-lg" asChild>
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  WhatsApp
                </a>
              </Button>
            </nav>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden mt-6 py-6 border-t border-gray-100">
              <nav className="flex flex-col space-y-4">
                <button onClick={() => scrollToSection('inicio')} className="text-left text-gray-700 hover:text-blue-600 font-medium transition-colors">
                  Início
                </button>
                <button onClick={() => scrollToSection('galeria')} className="text-left text-gray-700 hover:text-blue-600 font-medium transition-colors">
                  Galeria
                </button>
                <button onClick={() => scrollToSection('faq')} className="text-left text-gray-700 hover:text-blue-600 font-medium transition-colors">
                  FAQ
                </button>
                <button onClick={() => scrollToSection('contato')} className="text-left text-gray-700 hover:text-blue-600 font-medium transition-colors">
                  Contato
                </button>
                <Button className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white shadow-lg w-full" asChild>
                  <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="w-4 h-4 mr-2" />
                    WhatsApp
                  </a>
                </Button>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section id="inicio" className="pt-32 pb-20 px-6">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <Badge className="bg-blue-100 text-blue-800 border-blue-200 mb-6 text-sm px-4 py-2">
              ✨ Novo Layout 2024
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold text-gray-800 mb-6 leading-tight">
              Sua Casa dos
              <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent"> Sonhos</span>
            </h1>
            <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
              Casas pré-fabricadas de alta qualidade, entregues em tempo recorde. 
              Transforme seu sonho em realidade com a Casas Pinheirão.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white shadow-xl text-lg px-8 py-4"
                onClick={() => scrollToSection('galeria')}
              >
                Ver Modelos
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-green-500 text-green-600 hover:bg-green-50 text-lg px-8 py-4"
                asChild
              >
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Falar no WhatsApp
                </a>
              </Button>
            </div>
          </div>

          {/* Features Cards */}
          <div className="grid md:grid-cols-3 gap-8 mt-20 max-w-5xl mx-auto">
            <Card className="border-0 shadow-xl bg-white/80 backdrop-blur-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Clock className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">Entrega Rápida</h3>
                <p className="text-gray-600 leading-relaxed">Sua casa pronta em até 45 dias, com qualidade garantida e acompanhamento completo.</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl bg-white/80 backdrop-blur-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">Alta Qualidade</h3>
                <p className="text-gray-600 leading-relaxed">Materiais premium e tecnologia avançada para máxima durabilidade e conforto.</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl bg-white/80 backdrop-blur-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Star className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">Personalização</h3>
                <p className="text-gray-600 leading-relaxed">Projetos sob medida para atender suas necessidades e estilo de vida únicos.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="galeria" className="py-20 px-6 bg-white/50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <Badge className="bg-green-100 text-green-800 border-green-200 mb-4">
              Nossos Modelos
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Escolha Seu Modelo Ideal
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Cada casa é projetada pensando no seu conforto e bem-estar
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {housesSimplified.map((house) => (
              <Card key={house.id} className="border-0 shadow-xl bg-white hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden group">
                <div className="relative">
                  <img 
                    src={house.image} 
                    alt={house.name}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-blue-600 text-white border-0 shadow-lg">
                      {house.highlight}
                    </Badge>
                  </div>
                  <div className="absolute top-4 right-4">
                    <Button 
                      className="bg-green-500 text-white hover:bg-green-600 shadow-lg animate-pulse" 
                      size="sm" 
                      asChild
                    >
                      <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                        <MessageCircle className="h-4 w-4 mr-1" />
                        <span className="text-xs font-bold">Consultar Preço</span>
                      </a>
                    </Button>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">{house.name}</h3>
                  <div className="flex items-center space-x-4 text-gray-600 mb-2">
                    <span className="flex items-center">
                      <Home className="w-4 h-4 mr-1" />
                      {house.area}
                    </span>
                    <span>{house.bedrooms} quartos</span>
                    <span>{house.bathrooms} banheiro{house.bathrooms > 1 ? 's' : ''}</span>
                  </div>
                  
                  {house.price && (
                    <div className="mb-4 py-3 px-4 bg-blue-50 rounded-lg">
                      <div className="flex items-baseline gap-2">
                        <span className="text-2xl font-bold text-blue-600">{formatPrice(house.price)}</span>
                        {house.oldPrice && (
                          <span className="text-sm text-gray-500 line-through">
                            {formatPrice(house.oldPrice)}
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-gray-600 mt-1">* Inclui estrutura e montagem</p>
                    </div>
                  )}

                  <div className="space-y-2">
                    {house.features.map((feature, index) => (
                      <div key={index} className="flex items-center text-gray-700">
                        <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white shadow-xl text-lg px-8 py-4"
              asChild
            >
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-5 h-5 mr-2" />
                Ver Todos os Modelos
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <Badge className="bg-yellow-100 text-yellow-800 border-yellow-200 mb-4">
              Dúvidas Frequentes
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Perguntas e Respostas
            </h2>
            <p className="text-xl text-gray-600">
              Esclarecemos as principais dúvidas sobre nossas casas pré-fabricadas
            </p>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq) => (
                <AccordionItem key={faq.id} value={faq.id} className="border border-gray-100 rounded-xl px-6 data-[state=open]:bg-blue-50/50">
                  <AccordionTrigger className="text-left font-semibold text-gray-800 hover:text-blue-600 py-6">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 pb-6 leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>

            <div className="mt-12 text-center p-8 bg-gradient-to-r from-blue-50 to-green-50 rounded-xl border border-blue-100">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Ainda tem dúvidas?</h3>
              <p className="text-gray-600 mb-6">Nossa equipe está pronta para esclarecer todas as suas questões</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-green-500 hover:bg-green-600 text-white shadow-lg" asChild>
                  <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="w-4 h-4 mr-2" />
                    WhatsApp
                  </a>
                </Button>
                <Button variant="outline" className="border-blue-500 text-blue-600 hover:bg-blue-50" asChild>
                  <a href="tel:+5511999999999">
                    <Phone className="w-4 h-4 mr-2" />
                    Ligar Agora
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contato" className="py-20 px-6 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <Badge className="bg-purple-100 text-purple-800 border-purple-200 mb-4">
              Entre em Contato
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Vamos Conversar
            </h2>
            <p className="text-xl text-gray-600">
              Estamos aqui para tornar seu sonho da casa própria uma realidade
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Nossos Contatos</h3>
                
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center">
                      <MessageCircle className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">WhatsApp</h4>
                      <p className="text-gray-600">(11) 99999-9999</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Telefone</h4>
                      <p className="text-gray-600">(11) 99999-9999</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">E-mail</h4>
                      <p className="text-gray-600">contato@casaspinheirao.com.br</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Endereço</h4>
                      <p className="text-gray-600">São Paulo - SP</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 p-6 bg-gradient-to-r from-green-50 to-blue-50 rounded-xl border border-green-100">
                  <h4 className="font-bold text-gray-800 mb-2">Horário de Atendimento</h4>
                  <p className="text-gray-600">Segunda a Sexta: 8h às 18h</p>
                  <p className="text-gray-600">Sábado: 8h às 12h</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Solicite seu Orçamento</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Nome Completo</label>
                  <Input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Seu nome completo"
                    required
                    className="border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Telefone</label>
                  <Input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="(11) 99999-9999"
                    required
                    className="border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">E-mail</label>
                  <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="seu@email.com"
                    required
                    className="border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Mensagem</label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Conte-nos sobre seu projeto dos sonhos..."
                    rows={5}
                    required
                    className="border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white shadow-lg text-lg py-3"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Enviar via WhatsApp
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12 px-6">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-green-600 rounded-xl flex items-center justify-center">
              <Home className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-2xl font-bold">Casas Pinheirão</h3>
              <p className="text-gray-400">Construindo sonhos</p>
            </div>
          </div>
          
          <p className="text-gray-400 mb-8">
            Transformando vidas através de casas pré-fabricadas de qualidade excepcional.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 mb-8">
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="flex items-center text-green-400 hover:text-green-300 transition-colors">
              <MessageCircle className="w-5 h-5 mr-2" />
              WhatsApp
            </a>
            <a href="tel:+5511999999999" className="flex items-center text-blue-400 hover:text-blue-300 transition-colors">
              <Phone className="w-5 h-5 mr-2" />
              Telefone
            </a>
            <a href="mailto:contato@casaspinheirao.com.br" className="flex items-center text-purple-400 hover:text-purple-300 transition-colors">
              <Mail className="w-5 h-5 mr-2" />
              E-mail
            </a>
          </div>
          
          <div className="border-t border-gray-700 pt-6">
            <p className="text-gray-500 text-sm">
              © 2024 Casas Pinheirão. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default NewLayout;