import React from 'react';
import { Link } from 'react-router-dom';
import { Truck, Phone, Mail, MapPin, Clock } from 'lucide-react';
import { companyInfo, contactInfo } from '../data/mock';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-green-600 to-green-700 rounded-lg flex items-center justify-center">
                <Truck className="w-6 h-6 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold text-white">Lepus Group</span>
                <span className="text-sm text-gray-400">Swift • Reliable • Trusted</span>
              </div>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              {companyInfo.description}. Named after the swift Lepus constellation, 
              we deliver your freight with the speed and reliability of the stars.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-green-500" />
                <span>{companyInfo.phone}</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-green-500" />
                <span>{companyInfo.email}</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-green-500" />
                <span>{companyInfo.address}</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/services" className="hover:text-green-400 transition-colors">Our Services</Link></li>
              <li><Link to="/about" className="hover:text-green-400 transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-green-400 transition-colors">Contact</Link></li>
              <li><Link to="/quote" className="hover:text-green-400 transition-colors">Get Quote</Link></li>
            </ul>
          </div>

          {/* Operations Hours */}
          <div>
            <h3 className="text-white font-semibold mb-4">Operations</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-green-500 mt-0.5" />
                <div>
                  <div className="text-sm">{contactInfo.hours.office}</div>
                  <div className="text-sm text-gray-400 mt-1">{contactInfo.hours.dispatch}</div>
                </div>
              </div>
              
              <div className="mt-4 p-3 bg-red-900/20 rounded-lg border border-red-800">
                <div className="text-red-400 font-semibold text-sm">Emergency Support</div>
                <div className="text-sm">{contactInfo.hours.emergency}</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm text-gray-400 mb-4 md:mb-0">
              © 2024 Lepus Group. All rights reserved. | Swift as the constellation, reliable as the stars.
            </div>
            <div className="flex space-x-6 text-sm text-gray-400">
              <Link to="/privacy" className="hover:text-green-400 transition-colors">Privacy Policy</Link>
              <Link to="/terms" className="hover:text-green-400 transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;