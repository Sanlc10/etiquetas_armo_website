import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import { useState, useEffect } from "react";
import logoComplete from "@/assets/logo-armo-complete-transparent.png";
import almacenArmo from "@/assets/almacen_armo.jpg";
import etiquetaArmo from "@/assets/etiqueta_armo.jpg";
import maquinariaArmo from "@/assets/maquinaria_armo.jpeg";

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [almacenArmo, etiquetaArmo, maquinariaArmo];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Cambiar imagen cada 3 segundos

    return () => clearInterval(interval);
  }, []);
  const whatsappMessage = encodeURIComponent(
    "Hola, me interesa conocer más sobre sus productos de etiquetas y ribbons."
  );
  const whatsappLink = `https://wa.me/525574655927?text=${whatsappMessage}`;

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-secondary/20 to-background overflow-hidden pt-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(0,51,102,0.1),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(220,20,60,0.05),transparent_50%)]" />
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <div className="inline-block">
              <img
                src={logoComplete}
                alt="Etiquetas Armo - Etiqueta Industrial y Código de Barras"
                className="h-48 md:h-56 w-auto"
              />
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-foreground leading-tight">
              Soluciones Profesionales en{" "}
              <span className="text-primary">Etiquetado Industrial</span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-lg">
              Fabricamos etiquetas industriales, ribbons térmicos y códigos de barras de alta calidad. 
              Soluciones profesionales adaptadas a tu negocio.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="text-lg px-8 py-6 bg-accent hover:bg-accent/90 text-accent-foreground transition-all hover:scale-105 shadow-lg"
                asChild
              >
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Hablar por WhatsApp
                </a>
              </Button>
              
              <Button 
                size="lg" 
                variant="outline"
                className="text-lg px-8 py-6 border-2 border-primary hover:bg-primary hover:text-primary-foreground transition-all"
                asChild
              >
                <a href="#servicios">
                  Ver Servicios
                </a>
              </Button>
            </div>
          </div>
          
          <div className="relative hidden md:block animate-fade-in">
            <div className="absolute inset-0 bg-primary/10 rounded-3xl blur-3xl animate-pulse" />
            <div className="relative bg-card rounded-3xl p-8 shadow-2xl border-2 border-primary/20">
              <div className="aspect-square rounded-2xl flex items-center justify-center border-2 border-primary/10 overflow-hidden relative">
                {/* Carrusel de imágenes de fondo */}
                {images.map((image, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-1000 ${
                      index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                    }`}
                  >
                    <img
                      src={image}
                      alt={`Armo ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}

                {/* Capa transparente oscura sobre las imágenes */}
                <div className="absolute inset-0 bg-black/60" />

                {/* Contenido de texto sobre la capa */}
                <div className="text-center space-y-4 relative z-10">
                  <div className="text-6xl font-bold text-white drop-shadow-lg">+15</div>
                  <div className="text-xl text-white/90 drop-shadow-md">Años de experiencia</div>
                  <div className="pt-4 border-t border-white/30">
                    <div className="text-3xl font-bold text-white drop-shadow-lg">1000+</div>
                    <div className="text-sm text-white/90 drop-shadow-md">Clientes satisfechos</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
