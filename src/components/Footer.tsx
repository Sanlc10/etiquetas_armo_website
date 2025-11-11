import logoArmo from "@/assets/logo-armo.png";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 md:pl-20">
          <div>
            <img
              src={logoArmo}
              alt="Etiquetas Armo"
              className="h-20 w-auto mb-4 border-2 border-accent rounded-lg transition-transform duration-300 hover:scale-110 hover:shadow-lg hover:shadow-accent/50"
            />
            <p className="text-primary-foreground/80">
              Fabricación e impresión de etiquetas industriales y comerciales de alta calidad. Etiquetas autoadheribles, códigos de barras, ribbons y suministros para impresión térmica.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4 text-primary-foreground">Servicios</h3>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>Etiquetas Personalizadas</li>
              <li>Ribbons Térmicos</li>
              <li>Impresoras</li>
              <li>Software de Etiquetado</li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4 text-primary-foreground">Contacto</h3>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>Laminadores 131</li>
              <li>Azcapotzalco, CDMX</li>
              <li>55 7465 5927</li>
              <li>contacto@etiquetasarmo.com</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-primary-foreground/60">
          <p>&copy; {new Date().getFullYear()} Etiquetas Armo. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
