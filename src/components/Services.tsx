import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tag, Printer, Truck, Settings } from "lucide-react";

const services = [
  {
    icon: Tag,
    title: "Etiquetas Personalizadas",
    description: "Fabricamos etiquetas en papel, plástico, vinil y más materiales. Diseños personalizados para cualquier industria.",
    features: ["Papel térmico", "Plástico", "Vinil", "Materiales especiales"]
  },
  {
    icon: Printer,
    title: "Ribbons Térmicos",
    description: "Ribbons de alta calidad para impresoras térmicas. Disponibles en cera, resina y textil.",
    features: ["Cera", "Resina", "Textil", "Todas las medidas"]
  },
  {
    icon: Settings,
    title: "Impresoras y Software",
    description: "Venta de impresoras de etiquetas profesionales y software de etiquetado especializado.",
    features: ["Impresoras térmicas", "Software profesional", "Capacitación", "Soporte técnico"]
  },
  {
    icon: Truck,
    title: "Envíos Rápidos",
    description: "Entregas rápidas en toda la Ciudad de México y área metropolitana.",
    features: ["Entrega en 24-48hrs", "Cobertura CDMX", "Seguimiento", "Envío asegurado"]
  }
];

const Services = () => {
  return (
    <section id="servicios" className="py-24 bg-muted/30 scroll-mt-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Nuestros <span className="text-accent">Servicios</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Soluciones completas de etiquetado industrial para tu empresa
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card 
              key={index}
              className="border-2 hover:border-accent/50 transition-all hover:shadow-xl hover:-translate-y-2 duration-300 bg-card group"
            >
              <CardHeader>
                <div className="w-14 h-14 bg-primary/10 group-hover:bg-accent/10 rounded-2xl flex items-center justify-center mb-4 transition-colors">
                  <service.icon className="w-7 h-7 text-primary group-hover:text-accent transition-colors" />
                </div>
                <CardTitle className="text-xl text-foreground">{service.title}</CardTitle>
                <CardDescription className="text-base">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-accent rounded-full mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
