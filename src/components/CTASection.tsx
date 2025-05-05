
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const CTASection = () => {
  const navigate = useNavigate();

  const handleOrderNow = () => {
    navigate("/colectii");
  };

  return (
    <section className="py-16 bg-gradient-to-r from-floral-500 to-floral-600 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-display font-semibold leading-tight">
            Transformă Orice Moment Într-o Amintire Frumoasă
          </h2>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
            Fie că este vorba de o aniversare, o zi specială sau doar dorința de a face pe cineva fericit, suntem aici să te ajutăm cu cele mai frumoase aranjamente florale.
          </p>
          <div className="pt-4">
            <Button 
              onClick={handleOrderNow}
              className="text-md rounded-full px-8 py-6 bg-white text-floral-800 hover:bg-white/90"
            >
              Comandă Acum <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
