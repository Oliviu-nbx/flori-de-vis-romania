
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-floral-800 text-white pt-16 pb-6">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* About Column */}
          <div>
            <h3 className="text-xl font-display font-semibold mb-4">Flori de Vis</h3>
            <p className="text-floral-200 mb-6">
              Transformăm momentele speciale în amintiri de neuitat prin creații florale autentice și servicii excepționale.
            </p>
            <div className="flex space-x-4">
              <Button size="icon" variant="outline" className="rounded-full border-floral-300 text-white hover:bg-floral-700">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Button>
              <Button size="icon" variant="outline" className="rounded-full border-floral-300 text-white hover:bg-floral-700">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Button>
              <Button size="icon" variant="outline" className="rounded-full border-floral-300 text-white hover:bg-floral-700">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Button>
            </div>
          </div>

          {/* Links Column */}
          <div>
            <h3 className="text-xl font-display font-semibold mb-4">Navigare</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-floral-200 hover:text-white transition-colors">
                  Acasă
                </Link>
              </li>
              <li>
                <Link to="/colectii" className="text-floral-200 hover:text-white transition-colors">
                  Colecții
                </Link>
              </li>
              <li>
                <Link to="/ocazii" className="text-floral-200 hover:text-white transition-colors">
                  Ocazii
                </Link>
              </li>
              <li>
                <Link to="/despre" className="text-floral-200 hover:text-white transition-colors">
                  Despre Noi
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-floral-200 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="text-xl font-display font-semibold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-3 text-floral-300 flex-shrink-0 mt-1" />
                <span className="text-floral-200">
                  Strada Florilor 123, București, România
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-3 text-floral-300" />
                <span className="text-floral-200">+40 755 123 456</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-3 text-floral-300" />
                <span className="text-floral-200">contact@floridevs.ro</span>
              </li>
            </ul>
          </div>

          {/* Newsletter Column */}
          <div>
            <h3 className="text-xl font-display font-semibold mb-4">Newsletter</h3>
            <p className="text-floral-200 mb-4">
              Abonează-te pentru a primi oferte exclusive și noutăți despre colecțiile noastre.
            </p>
            <div className="flex flex-col space-y-3">
              <Input
                type="email"
                placeholder="Email-ul tău"
                className="bg-floral-700 border-floral-600 focus:border-white text-white placeholder:text-floral-300 rounded-full"
              />
              <Button className="rounded-full bg-floral-500 hover:bg-floral-400 text-white">
                Abonează-te
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-floral-700 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-floral-300 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Flori de Vis. Toate drepturile rezervate.
          </p>
          <div className="flex space-x-6">
            <Link to="/termeni" className="text-floral-300 hover:text-white text-sm">
              Termeni și Condiții
            </Link>
            <Link to="/confidentialitate" className="text-floral-300 hover:text-white text-sm">
              Politica de Confidențialitate
            </Link>
            <Link to="/cookies" className="text-floral-300 hover:text-white text-sm">
              Politica de Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
