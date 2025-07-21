import React from 'react';
import { Truck, Package, Network, Warehouse, CheckCircle, ArrowRight, Clock, Shield, MapPin } from 'lucide-react';
import { services } from '../data/mock';

const ServiceDetailCard = ({ service, index }) => {
  const icons = {
    0: Truck,
    1: Package, 
    2: Network,
    3: Warehouse
  };
  
  const IconComponent = icons[index] || Truck;
  const bgColors = ['bg-green-600', 'bg-blue-600', 'bg-orange-600', 'bg-purple-600'];
  
  return (
    <div className="design-card">
      <div className={`card-icon ${bgColors[index]}`}>
        <IconComponent className="w-8 h-8 text-white" />
      </div>
      
      <h3 className="card-title">{service.title}</h3>
      <p className="card-description mb-6">{service.description}</p>
      
      <div className="space-y-3 mb-6">
        <h4 className="font-semibold text-gray-900">Key Features:</h4>
        <ul className="space-y-2">
          {service.features.map((feature, idx) => (
            <li key={idx} className="flex items-start">
              <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
              <span className="text-gray-600 text-sm">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
      
      <a
        href="/contact"
        className="inline-flex items-center text-green-600 font-semibold hover:text-green-700 transition-colors"
      >
        Get Quote <ArrowRight className="w-4 h-4 ml-1" />
      </a>
    </div>
  );
};

const Services = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="section-container text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="display-lg text-gray-900 mb-6">
              Comprehensive <span className="text-green-600">Logistics Solutions</span>
            </h1>
            <p className="body-xl text-gray-600 max-w-3xl mx-auto mb-8">
              From full truckload shipments to complete supply chain optimization, 
              Lepus Group delivers tailored logistics solutions that drive your business forward 
              with the speed and reliability of the stars.
            </p>
            <a
              href="/contact"
              className="btn-primary"
            >
              Request Custom Quote <ArrowRight className="w-5 h-5 ml-2" />
            </a>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="heading-2 text-gray-900 mb-4">Why Choose Lepus Group?</h2>
            <p className="body-lg text-gray-600 max-w-2xl mx-auto">
              We combine cutting-edge technology with decades of logistics expertise 
              to deliver solutions that exceed expectations.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="heading-4 text-gray-900 mb-3">Lightning Fast</h3>
              <p className="text-gray-600">
                Swift delivery times that keep your business moving at the speed of the market. 
                Our efficient routing ensures your cargo reaches its destination faster.
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="heading-4 text-gray-900 mb-3">Secure & Reliable</h3>
              <p className="text-gray-600">
                Industry-leading security protocols and insurance coverage protect your valuable cargo. 
                Our 99.8% on-time delivery rate speaks to our reliability.
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="heading-4 text-gray-900 mb-3">North America Wide</h3>
              <p className="text-gray-600">
                Extensive network coverage across the United States, Canada, and Mexico. 
                From coast to coast, we've got your logistics needs covered.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="heading-2 text-gray-900 mb-4">Our Service Portfolio</h2>
            <p className="body-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive logistics solutions designed to meet the unique needs of your business, 
              from single shipments to complete supply chain management.
            </p>
          </div>
          
          <div className="design-grid">
            {services.map((service, index) => (
              <ServiceDetailCard key={service.id} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="heading-2 text-gray-900 mb-4">Our Simple Process</h2>
            <p className="body-lg text-gray-600 max-w-2xl mx-auto">
              Getting started with Lepus Group is easy. Our streamlined process ensures 
              you get the logistics solutions you need quickly and efficiently.
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-xl">
                1
              </div>
              <h3 className="heading-4 text-gray-900 mb-3">Request Quote</h3>
              <p className="text-gray-600 text-sm">
                Contact us with your shipping requirements and get a competitive quote within hours.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-xl">
                2
              </div>
              <h3 className="heading-4 text-gray-900 mb-3">Route Planning</h3>
              <p className="text-gray-600 text-sm">
                Our logistics experts plan the optimal route and select the best carriers for your shipment.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-xl">
                3
              </div>
              <h3 className="heading-4 text-gray-900 mb-3">Track & Monitor</h3>
              <p className="text-gray-600 text-sm">
                Real-time tracking and proactive communication keep you informed throughout the journey.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-xl">
                4
              </div>
              <h3 className="heading-4 text-gray-900 mb-3">Delivered</h3>
              <p className="text-gray-600 text-sm">
                Your cargo arrives safely and on time, with detailed delivery confirmation and documentation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-green-700 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="heading-2 mb-4">Ready to Optimize Your Supply Chain?</h2>
          <p className="body-lg mb-8 opacity-90">
            Let our logistics experts design a custom solution that reduces costs, 
            improves efficiency, and gives you the competitive edge you need.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-white text-green-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-50 transition-colors inline-flex items-center justify-center"
            >
              Get Custom Quote <ArrowRight className="w-5 h-5 ml-2" />
            </a>
            <a
              href="tel:+15551234567"
              className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-green-600 transition-colors"
            >
              Call Now: (555) 123-4567
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;