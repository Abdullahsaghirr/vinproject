
import React from 'react';
import { Facebook, Twitter, Instagram, Phone, Mail, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-blue text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">VehicleSavvyCheck</h3>
            <p className="text-gray-300 mb-4">
              Your trusted partner for comprehensive vehicle inspections and detailed history reports.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-brand-orange transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-white hover:text-brand-orange transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-white hover:text-brand-orange transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-brand-orange transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-brand-orange transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/how-it-works" className="text-gray-300 hover:text-brand-orange transition-colors">
                  How It Works
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-brand-orange transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-brand-orange transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services" className="text-gray-300 hover:text-brand-orange transition-colors">
                  Vehicle History Reports
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-brand-orange transition-colors">
                  Pre-Purchase Inspections
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-brand-orange transition-colors">
                  Safety Assessments
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-brand-orange transition-colors">
                  Vehicle Valuation
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-brand-orange transition-colors">
                  Expert Consultation
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Phone size={18} className="mr-2 mt-1 flex-shrink-0" />
                <span className="text-gray-300">(123) 456-7890</span>
              </li>
              <li className="flex items-start">
                <Mail size={18} className="mr-2 mt-1 flex-shrink-0" />
                <span className="text-gray-300">info@vehiclesavvycheck.com</span>
              </li>
              <li className="flex items-start">
                <MapPin size={18} className="mr-2 mt-1 flex-shrink-0" />
                <span className="text-gray-300">
                  123 Inspection Street, Automotive City, AC 12345
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8">
          <p className="text-center text-gray-400 text-sm">
            © {new Date().getFullYear()} VehicleSavvyCheck. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
