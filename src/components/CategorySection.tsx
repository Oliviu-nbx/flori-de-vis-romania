
import { Button } from "@/components/ui/button";
import { Calendar, Gift, Heart, Tag } from "lucide-react";

const CategorySection = () => {
  const categories = [
    {
      id: 1,
      name: "Aniversări",
      description: "Surprinde-i pe cei dragi cu buchete speciale",
      icon: <Calendar className="h-8 w-8" />,
      image: "https://images.unsplash.com/photo-1603912699214-92627f304eb6?q=80&w=1000",
      color: "bg-gradient-to-br from-floral-100 to-floral-200",
      textColor: "text-floral-900",
    },
    {
      id: 2,
      name: "Romantice",
      description: "Exprimă-ți dragostea prin flori deosebite",
      icon: <Heart className="h-8 w-8" />,
      image: "https://images.unsplash.com/photo-1457089328589-0d945a242ed4?q=80&w=1000",
      color: "bg-gradient-to-br from-rose-100 to-rose-200",
      textColor: "text-rose-900",
    },
    {
      id: 3,
      name: "Cadouri",
      description: "Aranjamente perfecte pentru orice ocazie",
      icon: <Gift className="h-8 w-8" />,
      image: "https://images.unsplash.com/photo-1571940744454-30688a1121c5?q=80&w=1000",
      color: "bg-gradient-to-br from-sage-100 to-sage-200",
      textColor: "text-sage-900",
    },
    {
      id: 4,
      name: "Promoții",
      description: "Oferte speciale actualizate săptămânal",
      icon: <Tag className="h-8 w-8" />,
      image: "https://images.unsplash.com/photo-1582794543139-8ac9cb0f7b11?q=80&w=1000",
      color: "bg-gradient-to-br from-amber-100 to-amber-200",
      textColor: "text-amber-900",
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-white to-floral-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-semibold text-floral-900 mb-4">
            Descoperă Colecțiile Noastre
          </h2>
          <p className="text-floral-700 max-w-2xl mx-auto">
            Explorează categoriile noastre pentru a găsi aranjamentul floral perfect pentru orice moment și sentiment
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 reveal-on-scroll">
          {categories.map((category, index) => (
            <div 
              key={category.id} 
              className="relative group overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-all duration-500"
            >
              <div className="absolute inset-0 overflow-hidden">
                <img
                  src={category.image}
                  alt={category.name}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/10"></div>
              </div>

              <div className="relative p-6 h-80 flex flex-col justify-end text-white">
                <div className={`mb-4 p-3 rounded-full w-fit ${category.color} ${category.textColor}`}>
                  {category.icon}
                </div>
                <h3 className="text-2xl font-serif font-semibold mb-2">{category.name}</h3>
                <p className="text-white/90 mb-4">{category.description}</p>
                <Button className="w-fit bg-white text-floral-800 hover:bg-white/90 rounded-full">
                  Explorează
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
