import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowUp, Phone, MessageCircle } from 'lucide-react';

const FloatingButtons = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const whatsappNumber = "5511999999999";
  const phoneNumber = "5511999999999";

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/${whatsappNumber}?text=Olá! Gostaria de informações sobre as casas pré-fabricadas.`, '_blank');
  };

  const handlePhoneClick = () => {
    window.location.href = `tel:+${phoneNumber}`;
  };

  return (
    <>
      {/* Botões do lado esquerdo */}
      <div className="fixed left-4 bottom-4 flex flex-col gap-3 z-50">
        <Button
          onClick={handlePhoneClick}
          size="lg"
          className="h-14 w-14 rounded-full shadow-lg bg-blue-600 hover:bg-blue-700 text-white transition-all duration-300 hover:scale-110"
          title="Ligar Agora"
        >
          <Phone className="h-6 w-6" />
        </Button>
        <Button
          onClick={handleWhatsAppClick}
          size="lg"
          className="h-14 w-14 rounded-full shadow-lg bg-whatsapp hover:bg-whatsapp/90 text-white transition-all duration-300 hover:scale-110 animate-pulse"
          title="WhatsApp"
        >
          <MessageCircle className="h-6 w-6" />
        </Button>
      </div>

      {/* Botão voltar ao topo - lado direito */}
      {showScrollTop && (
        <Button
          onClick={scrollToTop}
          size="lg"
          className="fixed right-4 bottom-4 h-14 w-14 rounded-full shadow-lg bg-primary hover:bg-primary-light text-white transition-all duration-300 hover:scale-110 z-50"
          title="Voltar ao Topo"
        >
          <ArrowUp className="h-6 w-6" />
        </Button>
      )}
    </>
  );
};

export default FloatingButtons;
