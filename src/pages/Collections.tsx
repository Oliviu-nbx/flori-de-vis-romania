
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, ShoppingBag, Filter } from "lucide-react";
import { Link } from "react-router-dom";
import { useCart } from "@/context/CartContext";

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
}

const Collections = () => {
  const { addToCart } = useCart();
  const [products, setProducts] = useState<Product[]>([
    {
      id: 1,
      name: "Trandafiri Pastel",
      price: 199,
      image: "https://images.unsplash.com/photo-1559563362-c667ba5f5480?q=80&w=1000",
      category: "Buchete Romantice"
    },
    {
      id: 2,
      name: "Lalele Parfumate",
      price: 159,
      image: "https://images.unsplash.com/photo-1468327768560-75b778cbb551?q=80&w=1000",
      category: "Buchete de Primăvară"
    },
    {
      id: 3,
      name: "Orhidee Elegante",
      price: 299,
      image: "https://images.unsplash.com/photo-1523694576729-96d99e9a329b?q=80&w=1000",
      category: "Aranjamente Premium"
    },
    {
      id: 4,
      name: "Crin Imperial",
      price: 219,
      image: "https://images.unsplash.com/photo-1591886960571-74d43a9d4166?q=80&w=1000",
      category: "Buchete Speciale"
    },
    {
      id: 5,
      name: "Trandafiri Roșii",
      price: 229,
      image: "https://images.unsplash.com/photo-1582794543139-8ac9cb0f7b11?q=80&w=1000",
      category: "Buchete Romantice"
    },
    {
      id: 6,
      name: "Crizanteme Colorate",
      price: 179,
      image: "https://images.unsplash.com/photo-1508610048659-a06b669e3321?q=80&w=1000",
      category: "Buchete de Toamnă"
    },
    {
      id: 7,
      name: "Bujori Roz",
      price: 259,
      image: "https://images.unsplash.com/photo-1558697698-da661e1848e3?q=80&w=1000",
      category: "Buchete de Primăvară"
    },
    {
      id: 8,
      name: "Aranjament Tropical",
      price: 349,
      image: "https://images.unsplash.com/photo-1561181286-d5271b222976?q=80&w=1000",
      category: "Aranjamente Premium"
    }
  ]);

  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products);
  const categories = Array.from(new Set(products.map(product => product.category)));

  useEffect(() => {
    if (activeCategory) {
      setFilteredProducts(products.filter(product => product.category === activeCategory));
    } else {
      setFilteredProducts(products);
    }
  }, [activeCategory, products]);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-28 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-display font-semibold text-floral-900 mb-4">
              Colecții de Flori
            </h1>
            <p className="text-floral-700 max-w-2xl mx-auto">
              Descoperă o varietate de buchete și aranjamente florale pentru orice ocazie specială
            </p>
          </div>

          {/* Category filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Button 
              variant={activeCategory === null ? "default" : "outline"}
              className="rounded-full px-6"
              onClick={() => setActiveCategory(null)}
            >
              Toate
            </Button>
            {categories.map(category => (
              <Button 
                key={category}
                variant={activeCategory === category ? "default" : "outline"}
                className="rounded-full px-6"
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Products grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <div key={product.id} className="relative">
                <Card className="card-product overflow-hidden border-0 shadow-sm hover:shadow-lg transition-all duration-300">
                  <Link to={`/produs/${product.id}`}>
                    <CardHeader className="p-0">
                      <div className="relative h-80 overflow-hidden">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                        />
                        <div className="absolute top-4 right-4">
                          <Button
                            variant="outline"
                            size="icon"
                            className="rounded-full bg-white/80 backdrop-blur-sm hover:bg-white border-0"
                          >
                            <Heart className="h-5 w-5 text-floral-800" />
                          </Button>
                        </div>
                        <div className="absolute bottom-4 left-4">
                          <span className="inline-block px-3 py-1 rounded-full bg-white/80 backdrop-blur-sm text-xs font-medium text-floral-800">
                            {product.category}
                          </span>
                        </div>
                      </div>
                    </CardHeader>
                  </Link>
                  <CardContent className="p-4">
                    <Link to={`/produs/${product.id}`}>
                      <h3 className="font-serif text-lg font-medium text-floral-900">{product.name}</h3>
                      <p className="text-floral-800 font-bold mt-1">{product.price} RON</p>
                    </Link>
                  </CardContent>
                  <CardFooter className="px-4 pb-4 pt-0">
                    <Button 
                      className="w-full rounded-full bg-floral-600 hover:bg-floral-700 text-white flex items-center justify-center gap-2"
                      onClick={() => addToCart(product)}
                    >
                      <ShoppingBag className="h-5 w-5" />
                      Adaugă în Coș
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Collections;
