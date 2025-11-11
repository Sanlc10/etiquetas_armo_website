import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  const whatsappMessage = encodeURIComponent(
    "Hola, me interesa conocer más sobre sus productos de etiquetas y ribbons."
  );
  const whatsappLink = `https://wa.me/525574655927?text=${whatsappMessage}`;

  return (
    <Button
      size="lg"
      className="fixed bottom-6 right-6 z-50 rounded-full w-16 h-16 shadow-2xl bg-[#25D366] hover:bg-[#20BD5A] transition-all hover:scale-110 animate-fade-in"
      asChild
    >
      <a 
        href={whatsappLink} 
        target="_blank" 
        rel="noopener noreferrer"
        aria-label="Contactar por WhatsApp"
      >
        <MessageCircle className="h-8 w-8 text-white" />
      </a>
    </Button>
  );
};

export default WhatsAppButton;
