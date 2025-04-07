
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <img 
              src="/lovable-uploads/a5a6c3b6-3cae-439b-ad2c-4eaddb472bb4.png" 
              alt="Nsangi Secondary School" 
              className="h-12 w-auto mr-3" 
            />
            <div>
              <h1 className="text-nsangi-maroon font-bold text-lg md:text-xl">
                Nsangi Secondary School
              </h1>
              <p className="text-xs italic text-gray-600">
                "Work and Achieve"
              </p>
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-6">
            <Link to="/" className="text-gray-700 hover:text-nsangi-maroon font-medium">
              Home
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-nsangi-maroon font-medium">
              About
            </Link>
            <Link to="/academics" className="text-gray-700 hover:text-nsangi-maroon font-medium">
              Academics
            </Link>
            <Link to="/e-learning" className="text-gray-700 hover:text-nsangi-maroon font-medium">
              E-Learning
            </Link>
            <Link to="/news" className="text-gray-700 hover:text-nsangi-maroon font-medium">
              News
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-nsangi-maroon font-medium">
              Contact
            </Link>
            <Link to="/apply-online" className="text-gray-700 hover:text-nsangi-maroon font-medium">
              Apply Now
            </Link>
          </nav>
          
          <div className="hidden md:block">
            <Link to="/student-login">
              <Button className="bg-nsangi-maroon hover:bg-nsangi-dark text-white">
                Student Login
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button 
            onClick={toggleMenu} 
            className="md:hidden text-gray-700 hover:text-nsangi-maroon"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="container mx-auto px-4 py-3 space-y-2">
            <Link to="/" className="block py-2 text-gray-700 hover:text-nsangi-maroon font-medium">
              Home
            </Link>
            <Link to="/about" className="block py-2 text-gray-700 hover:text-nsangi-maroon font-medium">
              About
            </Link>
            <Link to="/academics" className="block py-2 text-gray-700 hover:text-nsangi-maroon font-medium">
              Academics
            </Link>
            <Link to="/e-learning" className="block py-2 text-gray-700 hover:text-nsangi-maroon font-medium">
              E-Learning
            </Link>
            <Link to="/news" className="block py-2 text-gray-700 hover:text-nsangi-maroon font-medium">
              News
            </Link>
            <Link to="/contact" className="block py-2 text-gray-700 hover:text-nsangi-maroon font-medium">
              Contact
            </Link>
            <Link to="/apply-online" className="block py-2 text-gray-700 hover:text-nsangi-maroon font-medium">
              Apply Now
            </Link>
            <div className="pt-2">
              <Link to="/student-login">
                <Button className="w-full bg-nsangi-maroon hover:bg-nsangi-dark text-white">
                  Student Login
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* Accent Line */}
      <div className="h-1 w-full nsangi-gradient"></div>
    </header>
  );
};

export default Navbar;
