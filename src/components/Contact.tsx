import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Mail, MessageCircle } from "lucide-react";

const Contact = () => {
  const whatsappMessage = encodeURIComponent(
    "Hola, me interesa conocer más sobre sus productos de etiquetas y ribbons."
  );
  const whatsappLink = `https://wa.me/525574655927?text=${whatsappMessage}`;

  return (
    <section id="contacto" className="py-24 bg-muted/30 scroll-mt-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            ¿Listo para <span className="text-accent">empezar?</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Contáctanos y descubre cómo podemos ayudar a tu negocio
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <div className="space-y-6">
            <Card className="border-2 hover:border-primary/30 transition-colors">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Dirección</h3>
                    <p className="text-muted-foreground">
                      Laminadores 131, Col. Trabajadores de Hierro<br />
                      Azcapotzalco, 02650<br />
                      Ciudad de México, CDMX
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-2 hover:border-primary/30 transition-colors">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Teléfono</h3>
                    <a
                      href="tel:+525574655927"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      55 7465 5927
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-2 hover:border-primary/30 transition-colors">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Email</h3>
                    <a 
                      href="mailto:contacto@etiquetasarmo.com" 
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      contacto@etiquetasarmo.com
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Button 
              size="lg" 
              className="w-full text-lg py-6 bg-accent hover:bg-accent/90 text-accent-foreground transition-all hover:scale-105 shadow-lg"
              asChild
            >
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 h-5 w-5" />
                Enviar mensaje por WhatsApp
              </a>
            </Button>
          </div>
          
          <div className="rounded-2xl overflow-hidden shadow-lg border-2 border-primary/20 h-[500px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3761.8896247168436!2d-99.18892452462638!3d19.481828981844374!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1f8e7d4d4d4d5%3A0x1234567890!2sLaminadores%20131%2C%20Trabajadores%20de%20Hierro%2C%20Azcapotzalco%2C%2002650%20Ciudad%20de%20M%C3%A9xico%2C%20CDMX!5e0!3m2!1ses!2smx!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación Etiquetas Armo"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
