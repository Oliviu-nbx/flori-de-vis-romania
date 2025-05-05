
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ShoppingBag, Heart, ChevronRight, Minus, Plus } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { toast } from "sonner";

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  description?: string;
}

const allProducts: Product[] = [
  {
    id: 1,
    name: "Trandafiri Pastel",
    price: 199,
    image: "https://images.unsplash.com/photo-1559563362-c667ba5f5480?q=80&w=1000",
    category: "Buchete Romantice",
    description: "Un buchet delicat de trandafiri în culori pastelate, perfect pentru a exprima sentimente delicate și pline de gingășie. Acest aranjament conține 15 trandafiri de cea mai bună calitate, înveliți într-un ambalaj elegant."
  },
  {
    id: 2,
    name: "Lalele Parfumate",
    price: 159,
    image: "https://images.unsplash.com/photo-1468327768560-75b778cbb551?q=80&w=1000",
    category: "Buchete de Primăvară",
    description: "Buchetul nostru de lalele parfumate aduce prospețimea primăverii în orice încăpere. Conține 20 de lalele în nuanțe variate, având un parfum subtil și plăcut care va încânta simțurile."
  },
  {
    id: 3,
    name: "Orhidee Elegante",
    price: 299,
    image: "https://images.unsplash.com/photo-1523694576729-96d99e9a329b?q=80&w=1000",
    category: "Aranjamente Premium",
    description: "Un aranjament sofisticat cu orhidee rare, pentru ocazii speciale. Acest aranjament de lux include 2 orhidee Phalaenopsis în ghiveci decorativ, fiind un cadou durabil care va înfrumuseța locuința persoanei dragi pentru săptămâni întregi."
  },
  {
    id: 4,
    name: "Crin Imperial",
    price: 219,
    image: "https://images.unsplash.com/photo-1591886960571-74d43a9d4166?q=80&w=1000",
    category: "Buchete Speciale",
    description: "Buchetul Crin Imperial combină eleganța crinilor albi cu accente subtile de verdeață și flori delicate. Este alegerea perfectă pentru evenimente formale sau cadouri deosebite. Conține 10 crini imperiali și verdeață decorativă."
  },
  {
    id: 5,
    name: "Trandafiri Roșii",
    price: 229,
    image: "https://images.unsplash.com/photo-1582794543139-8ac9cb0f7b11?q=80&w=1000",
    category: "Buchete Romantice",
    description: "Clasicul buchet de trandafiri roșii, simbolul perfect al iubirii pasionale. Acest aranjament conține 15 trandafiri roșii premium cu tulpini lungi, ambalați elegant pentru a impresiona persoana iubită."
  },
  {
    id: 6,
    name: "Crizanteme Colorate",
    price: 179,
    image: "https://images.unsplash.com/photo-1508610048659-a06b669e3321?q=80&w=1000",
    category: "Buchete de Toamnă",
    description: "Un buchet vibrant de crizanteme în culori variate, aducând atmosfera caldă a toamnei în orice încăpere. Conține 12 crizanteme în nuanțe de galben, portocaliu și burgundy, ideale pentru decorațiuni de sezon."
  },
  {
    id: 7,
    name: "Bujori Roz",
    price: 259,
    image: "https://images.unsplash.com/photo-1558697698-da661e1848e3?q=80&w=1000",
    category: "Buchete de Primăvară",
    description: "Un aranjament exclusivist cu bujori roz, flori delicate și elegante pentru ocazii speciale de primăvară. Acest buchet conține 9 bujori proaspeți în nuanțe de roz, perfecte pentru aniversări sau ca dar de apreciere."
  },
  {
    id: 8,
    name: "Aranjament Tropical",
    price: 349,
    image: "https://images.unsplash.com/photo-1561181286-d5271b222976?q=80&w=1000",
    category: "Aranjamente Premium",
    description: "Un aranjament exotic care îmbină florile și plantele tropicale pentru un impact vizual maxim. Acest aranjament conține anthurium, streliția și alte flori exotice, fiind perfect pentru a aduce o notă de lux în orice spațiu."
  }
];

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const { addToCart } = useCart();
  const [product, setProduct] = useState<Product | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading product from API
    setLoading(true);
    setTimeout(() => {
      const foundProduct = allProducts.find(p => p.id === Number(id));
      setProduct(foundProduct || null);
      setLoading(false);
    }, 500);
  }, [id]);

  const handleQuantityDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleQuantityIncrease = () => {
    setQuantity(quantity + 1);
  };

  const handleAddToCart = () => {
    if (product) {
      for (let i = 0; i < quantity; i++) {
        addToCart(product);
      }
      toast.success(`${quantity} x ${product.name} adăugat în coș`);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="pt-28 pb-16 flex items-center justify-center">
          <div className="animate-pulse text-2xl text-floral-800">Se încarcă...</div>
        </div>
        <Footer />
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="pt-28 pb-16 container mx-auto px-4">
          <div className="text-center py-20">
            <h1 className="text-3xl font-semibold text-floral-900 mb-4">Produsul nu a fost găsit</h1>
            <p className="text-floral-700 mb-8">Ne pare rău, produsul pe care îl cauți nu există.</p>
            <Button onClick={() => window.history.back()} className="rounded-full bg-floral-600 hover:bg-floral-700">
              Înapoi la pagina anterioară
            </Button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-28 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumbs */}
          <div className="flex items-center text-sm text-floral-600 mb-8">
            <Link to="/" className="hover:text-floral-800">Acasă</Link>
            <ChevronRight className="h-4 w-4 mx-2" />
            <Link to="/colectii" className="hover:text-floral-800">Colecții</Link>
            <ChevronRight className="h-4 w-4 mx-2" />
            <span className="text-floral-900">{product.name}</span>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Product Image */}
            <div className="relative overflow-hidden rounded-2xl shadow-xl">
              <img 
                src={product.image} 
                alt={product.name}
                className="w-full h-full object-cover"
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
            
            {/* Product Info */}
            <div className="flex flex-col">
              <h1 className="text-3xl md:text-4xl font-display font-semibold text-floral-900 mb-2">
                {product.name}
              </h1>
              <div className="text-2xl font-bold text-floral-800 mb-6">
                {product.price} RON
              </div>
              
              <div className="prose text-floral-700 mb-8">
                <p>{product.description || "Descriere indisponibilă pentru acest produs."}</p>
              </div>
              
              {/* Quantity Selector */}
              <div className="flex items-center mb-6">
                <span className="text-floral-700 mr-4">Cantitate:</span>
                <div className="flex items-center border border-floral-200 rounded-full overflow-hidden">
                  <button 
                    className="px-3 py-2 bg-floral-50 hover:bg-floral-100 text-floral-800"
                    onClick={handleQuantityDecrease}
                  >
                    <Minus className="h-4 w-4" />
                  </button>
                  <span className="w-12 text-center text-floral-900">{quantity}</span>
                  <button 
                    className="px-3 py-2 bg-floral-50 hover:bg-floral-100 text-floral-800"
                    onClick={handleQuantityIncrease}
                  >
                    <Plus className="h-4 w-4" />
                  </button>
                </div>
              </div>
              
              {/* Add to Cart Button */}
              <Button 
                className="rounded-full py-6 bg-floral-600 hover:bg-floral-700 text-white flex items-center justify-center gap-2 text-lg"
                onClick={handleAddToCart}
              >
                <ShoppingBag className="h-5 w-5" />
                Adaugă în Coș
              </Button>
              
              {/* Additional Info */}
              <div className="mt-8 space-y-4 text-sm text-floral-700">
                <p className="flex items-center gap-2">
                  <span>•</span> Livrare gratuită pentru comenzi peste 200 RON
                </p>
                <p className="flex items-center gap-2">
                  <span>•</span> Livrare în aceeași zi pentru comenzi plasate până la ora 14:00
                </p>
                <p className="flex items-center gap-2">
                  <span>•</span> Florile sunt proaspete și de cea mai bună calitate
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProductDetail;
