import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "María González",
    company: "Distribuidora MG",
    rating: 5,
    comment: "Excelente calidad en sus productos. Las etiquetas son duraderas y el servicio es muy profesional. Totalmente recomendados."
  },
  {
    name: "Carlos Ramírez",
    company: "Logística Express",
    rating: 5,
    comment: "Los ribbons son de primera calidad y las entregas siempre son puntuales. Muy contentos con el servicio."
  },
  {
    name: "Ana Martínez",
    company: "Farmacia San Rafael",
    rating: 5,
    comment: "Nos ayudaron a elegir la impresora correcta y el software. Excelente asesoría y precios competitivos."
  },
  {
    name: "Roberto Silva",
    company: "Almacenes Unidos",
    rating: 5,
    comment: "Llevamos 3 años trabajando con ellos. Siempre cumplen con los tiempos de entrega y la calidad es consistente."
  }
];

const Testimonials = () => {
  return (
    <section id="testimonios" className="py-24 bg-background scroll-mt-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Lo que dicen nuestros <span className="text-accent">clientes</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            La confianza de nuestros clientes es nuestro mejor respaldo
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="border-2 hover:shadow-lg hover:border-accent/30 transition-all duration-300 bg-card"
            >
              <CardContent className="pt-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                  ))}
                </div>
                
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  "{testimonial.comment}"
                </p>
                
                <div className="border-t pt-4">
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
