
import { Button } from "@/components/ui/button";
import { Truck, Clock, Calendar } from "lucide-react";

const AboutSection = () => {
  return (
    <section className="py-16 bg-floral-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="order-2 lg:order-1">
            <div className="text-left reveal-on-scroll">
              <h2 className="text-3xl md:text-4xl font-display font-semibold text-floral-900 mb-4">
                Livrăm Emoții prin Flori în Toată România
              </h2>
              <p className="text-floral-700 mb-6">
                Ne-am început povestea cu pasiune pentru frumos și dorința de a aduce zâmbete. Astăzi, Flori de Vis înseamnă o echipă de floriști dedicați artei florale, care creează aranjamente unice pentru orice ocazie.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <div className="mr-4 mt-1 bg-white p-2 rounded-full shadow-sm">
                    <Truck className="h-5 w-5 text-floral-600" />
                  </div>
                  <div>
                    <h3 className="font-medium text-floral-800 mb-1">Livrare Națională</h3>
                    <p className="text-floral-600">Livrăm în toată România, inclusiv în zonele rurale.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="mr-4 mt-1 bg-white p-2 rounded-full shadow-sm">
                    <Clock className="h-5 w-5 text-floral-600" />
                  </div>
                  <div>
                    <h3 className="font-medium text-floral-800 mb-1">Livrare în Aceeași Zi</h3>
                    <p className="text-floral-600">Pentru comenzile plasate până la ora 14:00 în orașele principale.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="mr-4 mt-1 bg-white p-2 rounded-full shadow-sm">
                    <Calendar className="h-5 w-5 text-floral-600" />
                  </div>
                  <div>
                    <h3 className="font-medium text-floral-800 mb-1">Programare În Avans</h3>
                    <p className="text-floral-600">Planifică livrarea pentru data dorită cu până la 3 luni în avans.</p>
                  </div>
                </div>
              </div>

              <Button className="rounded-full px-8 py-6 bg-floral-600 hover:bg-floral-700 text-white">
                Detalii despre Livrare
              </Button>
            </div>
          </div>

          <div className="order-1 lg:order-2 reveal-on-scroll">
            <div className="relative h-full min-h-[400px]">
              <img
                src="https://images.unsplash.com/photo-1565207192894-8fbfaf0a1d5a?q=80&w=1000"
                alt="Florist arranging flowers"
                className="w-full h-full object-cover rounded-xl shadow-xl"
              />
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-6 rounded-lg shadow-lg max-w-xs">
                <h3 className="text-floral-900 font-serif text-lg font-medium mb-2">Flori Proaspete</h3>
                <p className="text-floral-700">
                  Toate aranjamentele noastre sunt create cu flori proaspăt tăiate, pentru a le asigura prospețimea și frumusețea.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
