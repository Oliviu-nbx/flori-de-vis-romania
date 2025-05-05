
import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ShoppingBag, Trash, ArrowLeft, ArrowRight, Plus, Minus } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { toast } from "sonner";

const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity, clearCart, cartTotal } = useCart();
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    notes: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckout = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate checkout process
    toast.success("Comandă plasată cu succes!");
    clearCart();
    setIsCheckingOut(false);

    // Redirect to home page after a short delay
    setTimeout(() => {
      window.location.href = "/";
    }, 2000);
  };

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="pt-28 pb-16 container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center py-20">
            <ShoppingBag className="h-20 w-20 mx-auto text-floral-300 mb-6" />
            <h1 className="text-3xl font-semibold text-floral-900 mb-4">Coșul tău este gol</h1>
            <p className="text-floral-700 mb-8">Nu ai adăugat încă niciun produs în coșul de cumpărături.</p>
            <Button 
              asChild 
              className="rounded-full px-8 py-6 bg-floral-600 hover:bg-floral-700 text-white"
            >
              <Link to="/colectii">
                Vezi Colecția de Flori <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
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
          <h1 className="text-3xl md:text-4xl font-display font-semibold text-floral-900 mb-8 text-center">
            Coșul Meu
          </h1>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items Section */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl shadow-sm p-6">
                <div className="space-y-6">
                  {cartItems.map((item) => (
                    <div key={item.id} className="flex flex-col sm:flex-row border-b border-floral-100 pb-6 last:border-0 last:pb-0">
                      {/* Product Image */}
                      <div className="flex-shrink-0 w-full sm:w-24 h-24 mb-4 sm:mb-0">
                        <Link to={`/produs/${item.id}`}>
                          <img 
                            src={item.image} 
                            alt={item.name} 
                            className="w-full h-full object-cover rounded-lg"
                          />
                        </Link>
                      </div>
                      
                      {/* Product Info */}
                      <div className="flex flex-col sm:flex-row flex-grow justify-between sm:ml-4">
                        <div>
                          <Link to={`/produs/${item.id}`} className="font-medium text-floral-900 hover:text-floral-600">
                            {item.name}
                          </Link>
                          <p className="text-sm text-floral-600">{item.category}</p>
                          <p className="font-semibold text-floral-800 mt-1">{item.price} RON</p>
                        </div>
                        
                        <div className="flex items-center justify-between mt-4 sm:mt-0">
                          {/* Quantity Selector */}
                          <div className="flex items-center border border-floral-200 rounded-full overflow-hidden">
                            <button 
                              className="px-2 py-1 bg-floral-50 hover:bg-floral-100 text-floral-800"
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            >
                              <Minus className="h-3 w-3" />
                            </button>
                            <span className="w-8 text-center text-sm text-floral-900">{item.quantity}</span>
                            <button 
                              className="px-2 py-1 bg-floral-50 hover:bg-floral-100 text-floral-800"
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            >
                              <Plus className="h-3 w-3" />
                            </button>
                          </div>
                          
                          {/* Delete Button */}
                          <button 
                            className="ml-4 text-floral-700 hover:text-red-500"
                            onClick={() => removeFromCart(item.id)}
                          >
                            <Trash className="h-5 w-5" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                
                {/* Cart Actions */}
                <div className="flex justify-between items-center mt-8">
                  <Button 
                    variant="outline" 
                    asChild
                    className="rounded-full border-floral-300 text-floral-800"
                  >
                    <Link to="/colectii">
                      <ArrowLeft className="mr-2 h-4 w-4" /> Continuă Cumpărăturile
                    </Link>
                  </Button>
                  
                  <Button 
                    variant="outline" 
                    className="rounded-full border-floral-300 text-red-500 hover:text-white hover:bg-red-500 hover:border-red-500"
                    onClick={clearCart}
                  >
                    <Trash className="mr-2 h-4 w-4" /> Golește Coșul
                  </Button>
                </div>
              </div>
            </div>
            
            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-2xl shadow-sm p-6">
                <h2 className="text-xl font-semibold text-floral-900 mb-4">Sumar Comandă</h2>
                
                <div className="space-y-3 text-floral-800">
                  <div className="flex justify-between py-2 border-b border-floral-100">
                    <span>Subtotal</span>
                    <span>{cartTotal} RON</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-floral-100">
                    <span>Transport</span>
                    <span>{cartTotal >= 200 ? "Gratuit" : "20 RON"}</span>
                  </div>
                  <div className="flex justify-between py-3 font-bold text-lg">
                    <span>Total</span>
                    <span>{cartTotal >= 200 ? cartTotal : cartTotal + 20} RON</span>
                  </div>
                </div>
                
                {!isCheckingOut ? (
                  <Button 
                    className="w-full mt-6 rounded-full py-6 bg-floral-600 hover:bg-floral-700 text-white"
                    onClick={() => setIsCheckingOut(true)}
                  >
                    Finalizează Comanda <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                ) : (
                  <form onSubmit={handleCheckout} className="mt-6 space-y-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-floral-800">Nume Complet</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="mt-1 block w-full rounded-md border border-floral-300 px-3 py-2 text-floral-900 focus:border-floral-500 focus:outline-none"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-floral-800">Email</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="mt-1 block w-full rounded-md border border-floral-300 px-3 py-2 text-floral-900 focus:border-floral-500 focus:outline-none"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-floral-800">Telefon</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        className="mt-1 block w-full rounded-md border border-floral-300 px-3 py-2 text-floral-900 focus:border-floral-500 focus:outline-none"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="address" className="block text-sm font-medium text-floral-800">Adresă</label>
                      <input
                        type="text"
                        id="address"
                        name="address"
                        required
                        value={formData.address}
                        onChange={handleChange}
                        className="mt-1 block w-full rounded-md border border-floral-300 px-3 py-2 text-floral-900 focus:border-floral-500 focus:outline-none"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="city" className="block text-sm font-medium text-floral-800">Oraș</label>
                      <input
                        type="text"
                        id="city"
                        name="city"
                        required
                        value={formData.city}
                        onChange={handleChange}
                        className="mt-1 block w-full rounded-md border border-floral-300 px-3 py-2 text-floral-900 focus:border-floral-500 focus:outline-none"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="notes" className="block text-sm font-medium text-floral-800">Note comandă (opțional)</label>
                      <textarea
                        id="notes"
                        name="notes"
                        rows={3}
                        value={formData.notes}
                        onChange={handleChange}
                        className="mt-1 block w-full rounded-md border border-floral-300 px-3 py-2 text-floral-900 focus:border-floral-500 focus:outline-none"
                      />
                    </div>
                    
                    <div className="pt-4 flex gap-3">
                      <Button 
                        type="button"
                        variant="outline"
                        className="flex-1 rounded-full border-floral-300 text-floral-800"
                        onClick={() => setIsCheckingOut(false)}
                      >
                        Înapoi
                      </Button>
                      <Button 
                        type="submit"
                        className="flex-1 rounded-full bg-floral-600 hover:bg-floral-700 text-white"
                      >
                        Plasează Comanda
                      </Button>
                    </div>
                  </form>
                )}
                
                <div className="mt-6 text-sm text-floral-600">
                  <p className="mb-2">Acceptăm următoarele metode de plată:</p>
                  <div className="flex gap-2">
                    <span className="px-2 py-1 bg-floral-50 rounded-md border border-floral-200">Card</span>
                    <span className="px-2 py-1 bg-floral-50 rounded-md border border-floral-200">Cash la livrare</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Cart;
