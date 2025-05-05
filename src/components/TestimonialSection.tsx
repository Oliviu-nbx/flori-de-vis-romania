
import { useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star } from "lucide-react";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  avatar?: string;
  rating: number;
}

const TestimonialSection = () => {
  const [testimonials] = useState<Testimonial[]>([
    {
      id: 1,
      name: "Andreea Popescu",
      role: "București",
      content: "Florile primite au fost exact ca în poze, foarte proaspete și frumos aranjate. Livrarea a fost promptă și comunicarea excelentă. Cu siguranță voi mai comanda!",
      avatar: "https://i.pravatar.cc/150?img=32",
      rating: 5
    },
    {
      id: 2,
      name: "Mihai Ionescu",
      role: "Cluj-Napoca",
      content: "Am comandat un buchet pentru aniversarea părinților și au fost încântați. Florile au fost superbe și au rezistat foarte mult timp. Recomand cu mare drag!",
      avatar: "https://i.pravatar.cc/150?img=12",
      rating: 5
    },
    {
      id: 3,
      name: "Elena Dumitrescu",
      role: "Timișoara",
      content: "Service-ul a fost impecabil, de la comandă până la livrare. Aranjamentul floral a fost mai frumos decât mă așteptam. Mulțumesc pentru experiența minunată!",
      avatar: "https://i.pravatar.cc/150?img=26",
      rating: 5
    },
    {
      id: 4,
      name: "Adrian Munteanu",
      role: "Constanța",
      content: "Am fost plăcut surprins de calitatea florilor și de atenția la detalii. Voi reveni cu siguranță pentru alte ocazii speciale.",
      avatar: "https://i.pravatar.cc/150?img=54",
      rating: 4
    }
  ]);

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, index) => (
      <Star
        key={index}
        className={`h-4 w-4 ${
          index < rating ? "text-amber-400 fill-amber-400" : "text-gray-300"
        }`}
      />
    ));
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-semibold text-floral-900 mb-4">
            Ce Spun Clienții Noștri
          </h2>
          <p className="text-floral-700 max-w-2xl mx-auto">
            Florile noastre aduc bucurie, iar zâmbetele clienților sunt cea mai mare mulțumire pentru noi
          </p>
        </div>

        <Carousel className="max-w-4xl mx-auto">
          <CarouselContent>
            {testimonials.map((testimonial) => (
              <CarouselItem key={testimonial.id} className="md:basis-1/2 p-4">
                <div className="bg-floral-50 p-6 rounded-xl shadow-sm border border-floral-100">
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex items-center">
                      <Avatar className="h-12 w-12 border-2 border-white shadow-sm">
                        <AvatarImage src={testimonial.avatar} />
                        <AvatarFallback className="bg-floral-200 text-floral-800">
                          {testimonial.name.charAt(0)}
                        </AvatarFallback>
                      </Avatar>
                      <div className="ml-3">
                        <h4 className="font-medium text-floral-900">{testimonial.name}</h4>
                        <p className="text-sm text-floral-600">{testimonial.role}</p>
                      </div>
                    </div>
                    <div className="flex">
                      {renderStars(testimonial.rating)}
                    </div>
                  </div>
                  <p className="italic text-floral-700">"{testimonial.content}"</p>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute -left-12 top-1/2 transform -translate-y-1/2" />
          <CarouselNext className="absolute -right-12 top-1/2 transform -translate-y-1/2" />
        </Carousel>
      </div>
    </section>
  );
};

export default TestimonialSection;
