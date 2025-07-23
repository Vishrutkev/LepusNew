import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Truck, Phone, Mail, MapPin, Clock, ChevronDown, Users, Shield, Zap, Globe } from 'lucide-react';
import { companyInfo, contactInfo, services } from '../data/mock';

const FooterDropdown = ({ title, items, icon: Icon }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div 
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <div className="flex items-center space-x-2 cursor-pointer text-white font-semibold hover:text-blue-300 transition-colors">
        <Icon className="w-5 h-5" />
        <span>{title}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <ChevronDown className="w-4 h-4" />
        </motion.div>
      </div>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 mt-2 bg-white rounded-lg shadow-2xl p-4 min-w-64 z-[9999] border border-gray-200"
            style={{ 
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
              transform: 'translateZ(0)' // Force hardware acceleration
            }}
          >
            <div className="space-y-3">
              {items.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="border-b border-gray-100 last:border-b-0 pb-2 last:pb-0"
                >
                  {item.path ? (
                    <Link
                      to={item.path}
                      className="block text-gray-700 hover:text-blue-600 transition-colors"
                    >
                      <div className="font-semibold text-sm">{item.name}</div>
                      {item.description && (
                        <div className="text-xs text-gray-500 mt-1">{item.description}</div>
                      )}
                    </Link>
                  ) : (
                    <div className="text-gray-700">
                      <div className="font-semibold text-sm">{item.name}</div>
                      {item.description && (
                        <div className="text-xs text-gray-500 mt-1">{item.description}</div>
                      )}
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const Footer = () => {
  const servicesItems = services.slice(0, 4).map(service => ({
    name: service.title,
    description: service.shortDescription.substring(0, 60) + '...',
    path: '/services'
  }));

  const discoverItems = [
    { name: "Our History", description: "Founded in 2006, serving North America", path: "/about" },
    { name: "Coverage Areas", description: "Canada, Midwest USA, Northeastern USA", path: "/coverage" },
    { name: "Equipment", description: "Modern fleet with advanced technology", path: "/about" },
    { name: "Certifications", description: "Industry-leading safety standards", path: "/about" }
  ];

  const contactItems = [
    { name: "General Enquiries", description: companyInfo.phone },
    { name: "New Orders", description: contactInfo.newOrders.phone },
    { name: "Dispatch", description: contactInfo.operations.phone },
    { name: "Emergency", description: companyInfo.emergencyLine }
  ];

  const resourcesItems = [
    { name: "Get Quote", description: "Instant shipping quotes online", path: "/contact" },
    { name: "Track Shipment", description: "Real-time tracking system", path: "/contact" },
    { name: "Customer Portal", description: "Access your account", path: "/contact" },
    { name: "Safety Reports", description: "Our commitment to safety", path: "/about" }
  ];

  return (
    <footer className="bg-gradient-to-r from-gray-900 to-blue-900 text-gray-300 relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="w-full h-full bg-gradient-to-br from-blue-500/10 to-transparent"></div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12 relative">
          {/* Company Info */}
          <div className="md:col-span-1 order-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex items-center space-x-3 mb-6"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
                <Truck className="w-7 h-7 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-white">{companyInfo.name}</span>
                <span className="text-sm text-blue-300">{companyInfo.tagline}</span>
              </div>
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-gray-400 mb-8 leading-relaxed"
            >
              {companyInfo.description}. {companyInfo.tagline} - delivering across Canada and the United States.
            </motion.p>
            
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-4"
            >
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-blue-400" />
                <span className="text-white font-semibold">{companyInfo.phone}</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-blue-400" />
                <span className="text-white">{companyInfo.email}</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                <span className="text-white leading-relaxed">{companyInfo.address}</span>
              </div>
              <div className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-blue-400 mt-0.5" />
                <div className="text-white">
                  <div className="font-semibold">{companyInfo.hours}</div>
                  <div className="text-sm text-gray-400">24/7 Dispatch Available</div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Services Dropdown */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="order-2 flex justify-center md:justify-start items-start"
          >
            <FooterDropdown 
              title="Services" 
              items={servicesItems} 
              icon={Truck}
            />
          </motion.div>

          {/* Discover Dropdown */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="order-3 flex justify-center md:justify-start items-start"
          >
            <FooterDropdown 
              title="Discover" 
              items={discoverItems} 
              icon={Globe}
            />
          </motion.div>

          {/* Resources Dropdown */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="order-4 flex justify-center md:justify-start items-start"
          >
            <FooterDropdown 
              title="Resources" 
              items={resourcesItems} 
              icon={Shield}
            />
          </motion.div>
        </div>

        {/* Additional Contact Numbers */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="grid md:grid-cols-4 gap-6 mb-12 p-8 bg-white/5 rounded-2xl backdrop-blur-sm"
        >
          <div className="text-center">
            <div className="text-blue-300 font-semibold text-sm mb-1">General Enquiries</div>
            <div className="text-white font-bold">{companyInfo.phone}</div>
          </div>
          <div className="text-center">
            <div className="text-blue-300 font-semibold text-sm mb-1">New Orders</div>
            <div className="text-white font-bold">{contactInfo.newOrders.phone}</div>
          </div>
          <div className="text-center">
            <div className="text-blue-300 font-semibold text-sm mb-1">Dispatch</div>
            <div className="text-white font-bold">{contactInfo.operations.phone}</div>
          </div>
          <div className="text-center">
            <div className="text-blue-300 font-semibold text-sm mb-1">Safety</div>
            <div className="text-white font-bold">{contactInfo.safety.phone}</div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="text-center mb-12"
        >
          <h3 className="text-2xl font-bold text-white mb-4">Ready to Ship?</h3>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Get an instant quote for your shipment or contact us to speak with a specialist. 
            We're here to handle your next shipment with the professionalism you deserve.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
            >
              Get Instant Quote
            </Link>
            <Link
              to="/contact"
              className="border-2 border-blue-400 text-blue-300 hover:bg-blue-400 hover:text-white px-8 py-3 rounded-full font-semibold transition-all duration-300"
            >
              Contact Specialist
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Bottom Bar */}
      <div className="relative z-10 border-t border-gray-700/50 bg-black/20 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-sm text-gray-400"
            >
              © 2006-2024 {companyInfo.name}. All rights reserved. | Transportation Excellence.
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex space-x-6 text-sm text-gray-400"
            >
              <Link to="/privacy" className="hover:text-blue-300 transition-colors">Privacy Policy</Link>
              <Link to="/terms" className="hover:text-blue-300 transition-colors">Terms of Service</Link>
              <Link to="/about" className="hover:text-blue-300 transition-colors">Sitemap</Link>
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;