
import { Truck, Calendar, Heart, Star } from "lucide-react";

const FeatureBar = () => {
  const features = [
    {
      icon: <Truck className="h-6 w-6" />,
      title: "Livrare Rapidă",
      description: "În toată România",
    },
    {
      icon: <Calendar className="h-6 w-6" />,
      title: "Flori Proaspete",
      description: "Garanție de prospețime",
    },
    {
      icon: <Star className="h-6 w-6" />,
      title: "Design Premium",
      description: "Buchete unice",
    },
    {
      icon: <Heart className="h-6 w-6" />,
      title: "Cu Dragoste",
      description: "Pentru momente speciale",
    },
  ];

  return (
    <section className="py-10 bg-sage-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center md:text-left">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="flex flex-col md:flex-row items-center md:items-start gap-3 opacity-0 animate-fade-in"
              style={{ animationDelay: `${0.2 * (index + 1)}s` }}
            >
              <div className="text-floral-600 bg-white rounded-full p-3 shadow-sm">
                {feature.icon}
              </div>
              <div>
                <h3 className="text-lg font-medium text-floral-900">{feature.title}</h3>
                <p className="text-floral-700 mt-1">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureBar;
