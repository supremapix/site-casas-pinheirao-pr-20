
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import logoImage from '@/assets/images/logo-casas-pinheirao.png';

const Header = () => {
  console.log('Header component loaded - VERSÃO NOVA 2024:', new Date().toLocaleTimeString());
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b shadow-soft">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 lg:h-20">
          
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img 
              src={logoImage} 
              alt="Casas Pinheirão - Casas Pré-fabricadas Curitiba" 
              className="h-10 lg:h-12 w-auto"
            />
            <div className="hidden sm:block">
              <h1 className="font-heading font-bold text-lg lg:text-xl text-primary">
                Casas Pinheirão
              </h1>
              <p className="text-xs text-muted-foreground">Casas Pré-fabricadas</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('inicio')}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Início
            </button>
            <button 
              onClick={() => scrollToSection('galeria')}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Galeria
            </button>
            <button 
              onClick={() => scrollToSection('promocoes')}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Promoções
            </button>
            <button 
              onClick={() => scrollToSection('faq')}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              FAQ
            </button>
            <button 
              onClick={() => scrollToSection('contato')}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Contato
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            onClick={toggleMenu}
            className="lg:hidden"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden border-t bg-background">
            <nav className="py-4 space-y-4">
              <button 
                onClick={() => scrollToSection('inicio')}
                className="block w-full text-left px-4 py-2 text-foreground hover:text-primary hover:bg-muted/50 transition-colors"
              >
                Início
              </button>
              <button 
                onClick={() => scrollToSection('galeria')}
                className="block w-full text-left px-4 py-2 text-foreground hover:text-primary hover:bg-muted/50 transition-colors"
              >
                Galeria
              </button>
              <button 
                onClick={() => scrollToSection('promocoes')}
                className="block w-full text-left px-4 py-2 text-foreground hover:text-primary hover:bg-muted/50 transition-colors"
              >
                Promoções
              </button>
              <button 
                onClick={() => scrollToSection('faq')}
                className="block w-full text-left px-4 py-2 text-foreground hover:text-primary hover:bg-muted/50 transition-colors"
              >
                FAQ
              </button>
              <button 
                onClick={() => scrollToSection('contato')}
                className="block w-full text-left px-4 py-2 text-foreground hover:text-primary hover:bg-muted/50 transition-colors"
              >
                Contato
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
