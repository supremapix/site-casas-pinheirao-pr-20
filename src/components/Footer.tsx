import { MapPin, Phone, Mail, MessageCircle, Facebook, Instagram, Home } from 'lucide-react';
import { Button } from '@/components/ui/button';
import logoImage from '@/assets/images/logo-casas-pinheirao.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Início', href: '#inicio' },
    { name: 'Galeria', href: '#galeria' },
    { name: 'Promoções', href: '#promocoes' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contato', href: '#contato' }
  ];

  const services = [
    'Casas Pré-fabricadas de Madeira',
    'Casas Pré-fabricadas de Alvenaria',
    'Projetos Personalizados',
    'Montagem e Instalação',
    'Reformas e Ampliações'
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.replace('#', ''));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        
        {/* Main Footer Content */}
        <div className="py-16 grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <img 
                src={logoImage} 
                alt="Casas Pinheirão" 
                className="h-12 w-auto filter brightness-0 invert"
              />
              <div>
                <h3 className="font-heading font-bold text-xl">Casas Pinheirão</h3>
                <p className="text-xs text-primary-foreground/80">Casas Pré-fabricadas</p>
              </div>
            </div>
            
            <p className="text-primary-foreground/90 mb-6 leading-relaxed">
              Há mais de 15 anos realizando o sonho da casa própria em Curitiba e região metropolitana. 
              Especialistas em casas pré-fabricadas de madeira e alvenaria com qualidade garantida.
            </p>

            {/* Social Media */}
            <div className="flex space-x-4">
              <Button size="sm" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10" asChild>
                <a href="https://www.facebook.com/100226023480924" target="_blank" rel="noopener noreferrer">
                  <Facebook className="h-4 w-4" />
                </a>
              </Button>
              <Button size="sm" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10" asChild>
                <a href="https://www.instagram.com/casas_pinheirao/" target="_blank" rel="noopener noreferrer">
                  <Instagram className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-6">Navegação</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-primary-foreground/90 hover:text-primary-foreground transition-colors hover:underline"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-6">Nossos Serviços</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service} className="flex items-start">
                  <Home className="h-4 w-4 mr-2 text-primary-glow flex-shrink-0 mt-0.5" />
                  <span className="text-primary-foreground/90 text-sm">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-6">Contato</h4>
            <div className="space-y-4">
              
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-primary-glow flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-primary-foreground/90 text-sm">
                    Av. Jacob Macanhan, 1369<br />
                    Pinhais - PR
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-primary-glow" />
                <a href="tel:(41)36678015" className="text-primary-foreground/90 hover:text-primary-foreground transition-colors">
                  (41) 3667-8015
                </a>
              </div>

              <div className="flex items-center space-x-3">
                <MessageCircle className="h-5 w-5 text-primary-glow" />
                <a href="tel:(41)996301028" className="text-primary-foreground/90 hover:text-primary-foreground transition-colors">
                  (41) 99630-1028
                </a>
              </div>

              <div className="flex items-start space-x-3">
                <Mail className="h-5 w-5 text-primary-glow flex-shrink-0 mt-0.5" />
                <a href="mailto:casaspinheirao@casaspinheirao.com.br" className="text-primary-foreground/90 hover:text-primary-foreground transition-colors text-sm break-all">
                  casaspinheirao@casaspinheirao.com.br
                </a>
              </div>
            </div>

            {/* WhatsApp CTA */}
            <div className="mt-6">
              <Button 
                className="btn-whatsapp bg-whatsapp hover:bg-whatsapp/90 w-full"
                asChild
              >
                <a href="https://wa.me/5541996301028?text=Olá! Visitei o site e gostaria de mais informações sobre as casas pré-fabricadas." target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="h-4 w-4 mr-2" />
                  Falar no WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-primary-foreground/20 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            
            <div className="text-center md:text-left">
              <p className="text-primary-foreground/80 text-sm">
                © {currentYear} Casas Pinheirão. Todos os direitos reservados.
              </p>
              <p className="text-primary-foreground/60 text-xs mt-1">
                Casas pré-fabricadas em Curitiba, Pinhais e região metropolitana do Paraná.
              </p>
            </div>

            <div className="text-center md:text-right">
              <p className="text-primary-foreground/60 text-xs">
                Desenvolvido por{' '}
                <a 
                  href="https://supremamidia.com.br" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary-glow hover:text-primary-foreground transition-colors"
                >
                  Suprema Mídia
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;