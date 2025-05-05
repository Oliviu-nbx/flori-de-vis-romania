
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="hero-section min-h-screen pt-28 pb-16 flex items-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-semibold leading-tight text-floral-900 opacity-0 animate-fade-in [animation-delay:0.3s]">
            Flori de Vis pentru Momente Speciale
          </h1>
          <p className="text-lg md:text-xl text-floral-800 max-w-2xl mx-auto opacity-0 animate-fade-in [animation-delay:0.6s]">
            Buchetele noastre artizanale transformă orice moment în amintiri de neprecuit.
            Livrare în toată România cu dragoste și grijă.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 opacity-0 animate-fade-in [animation-delay:0.9s]">
            <Button 
              className="text-md rounded-full px-8 py-6 bg-floral-600 hover:bg-floral-700 text-white"
              asChild
            >
              <Link to="/colectii">
                Vezi Colecția <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button 
              variant="outline" 
              className="text-md rounded-full px-8 py-6 border-floral-300 text-floral-800 hover:bg-floral-50"
              asChild
            >
              <Link to="/despre">
                Despre Serviciile Noastre
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
