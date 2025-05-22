import React from 'react';
import { Phone, Mail, MapPin, Clock, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">MediCare</h3>
            <p className="text-gray-300 mb-4">
              Providing exceptional healthcare services with a focus on patient comfort and cutting-edge medical treatments.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-teal-400 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-teal-400 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-teal-400 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-teal-400 transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-teal-400 transition-colors">Home</a></li>
              <li><a href="#about" className="text-gray-300 hover:text-teal-400 transition-colors">About Us</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-teal-400 transition-colors">Our Services</a></li>
              <li><a href="#doctors" className="text-gray-300 hover:text-teal-400 transition-colors">Our Doctors</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-teal-400 transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-teal-400 transition-colors">Preventive Care</a></li>
              <li><a href="#" className="text-gray-300 hover:text-teal-400 transition-colors">Specialty Consultations</a></li>
              <li><a href="#" className="text-gray-300 hover:text-teal-400 transition-colors">Diagnostic Testing</a></li>
              <li><a href="#" className="text-gray-300 hover:text-teal-400 transition-colors">Chronic Disease Management</a></li>
              <li><a href="#" className="text-gray-300 hover:text-teal-400 transition-colors">Telemedicine</a></li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={18} className="mr-2 text-teal-400 flex-shrink-0 mt-1" />
                <span className="text-gray-300">123 Medical Center Blvd, Anytown, CA 12345</span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-2 text-teal-400" />
                <span className="text-gray-300">(123) 456-7890</span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-2 text-teal-400" />
                <span className="text-gray-300">info@medicare.com</span>
              </li>
              <li className="flex items-start">
                <Clock size={18} className="mr-2 text-teal-400 flex-shrink-0 mt-1" />
                <div className="text-gray-300">
                  <p>Mon-Fri: 8:00 AM - 7:00 PM</p>
                  <p>Sat: 9:00 AM - 5:00 PM</p>
                  <p>Sun: Closed</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-10 pt-6 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} MediCare. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;