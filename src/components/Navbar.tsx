
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Menu, X, Search, Heart } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed w-full top-0 z-50 bg-white/90 backdrop-blur-md border-b border-floral-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">
          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md text-floral-800 hover:bg-floral-50"
            aria-label="Meniu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>

          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <span className="font-display italic text-2xl sm:text-3xl font-semibold text-floral-800">Flori de Vis</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8 ml-8">
            <Link to="/" className="font-medium text-floral-800 hover:text-floral-600 transition-colors">
              Acasă
            </Link>
            <Link to="/colectii" className="font-medium text-floral-800 hover:text-floral-600 transition-colors">
              Colecții
            </Link>
            <Link to="/ocazii" className="font-medium text-floral-800 hover:text-floral-600 transition-colors">
              Ocazii
            </Link>
            <Link to="/despre" className="font-medium text-floral-800 hover:text-floral-600 transition-colors">
              Despre Noi
            </Link>
            <Link to="/contact" className="font-medium text-floral-800 hover:text-floral-600 transition-colors">
              Contact
            </Link>
          </nav>

          {/* Right side icons */}
          <div className="flex items-center space-x-4">
            <button aria-label="Caută" className="p-1.5 rounded-full text-floral-800 hover:bg-floral-50 transition-colors">
              <Search className="h-5 w-5" />
            </button>
            <button aria-label="Favorite" className="p-1.5 rounded-full text-floral-800 hover:bg-floral-50 transition-colors">
              <Heart className="h-5 w-5" />
            </button>
            <Button
              variant="outline"
              size="icon"
              aria-label="Coș de cumpărături"
              className="relative border-floral-200 text-floral-800 hover:bg-floral-50 hover:text-floral-900 transition-colors"
            >
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 bg-floral-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                0
              </span>
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-floral-100 absolute w-full left-0 shadow-lg animate-fade-in">
          <div className="px-4 pt-2 pb-6 space-y-4">
            <Link to="/" className="block py-2.5 px-4 rounded font-medium text-floral-800 hover:bg-floral-50">
              Acasă
            </Link>
            <Link to="/colectii" className="block py-2.5 px-4 rounded font-medium text-floral-800 hover:bg-floral-50">
              Colecții
            </Link>
            <Link to="/ocazii" className="block py-2.5 px-4 rounded font-medium text-floral-800 hover:bg-floral-50">
              Ocazii
            </Link>
            <Link to="/despre" className="block py-2.5 px-4 rounded font-medium text-floral-800 hover:bg-floral-50">
              Despre Noi
            </Link>
            <Link to="/contact" className="block py-2.5 px-4 rounded font-medium text-floral-800 hover:bg-floral-50">
              Contact
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
