
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="bg-white sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <span className="text-2xl font-bold text-brand-blue">
                Vehicle<span className="text-brand-orange">Savvy</span>Check
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-gray-700 hover:text-brand-blue font-medium transition-colors">
              Home
            </Link>
            <Link to="/services" className="text-gray-700 hover:text-brand-blue font-medium transition-colors">
              Services
            </Link>
            <Link to="/how-it-works" className="text-gray-700 hover:text-brand-blue font-medium transition-colors">
              How It Works
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-brand-blue font-medium transition-colors">
              About Us
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-brand-blue font-medium transition-colors">
              Contact
            </Link>
            <Button className="bg-brand-orange hover:bg-brand-lightOrange text-white">
              Get Started
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-brand-blue focus:outline-none"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <nav className="flex flex-col space-y-4">
              <Link to="/" className="text-gray-700 hover:text-brand-blue font-medium transition-colors" onClick={toggleMenu}>
                Home
              </Link>
              <Link to="/services" className="text-gray-700 hover:text-brand-blue font-medium transition-colors" onClick={toggleMenu}>
                Services
              </Link>
              <Link to="/how-it-works" className="text-gray-700 hover:text-brand-blue font-medium transition-colors" onClick={toggleMenu}>
                How It Works
              </Link>
              <Link to="/about" className="text-gray-700 hover:text-brand-blue font-medium transition-colors" onClick={toggleMenu}>
                About Us
              </Link>
              <Link to="/contact" className="text-gray-700 hover:text-brand-blue font-medium transition-colors" onClick={toggleMenu}>
                Contact
              </Link>
              <Button className="bg-brand-orange hover:bg-brand-lightOrange text-white w-full">
                Get Started
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
