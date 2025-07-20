import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Truck, Clock, Users, Headphones } from 'lucide-react';
import { companyInfo, statistics, partners, services, testimonials } from '../data/mock';

const StatCard = ({ stat }) => {
  const IconComponent = {
    Truck,
    Clock, 
    Users,
    Headphones
  }[stat.icon];

  return (
    <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
      <div className="flex items-center justify-between mb-4">
        <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
          <IconComponent className="w-6 h-6 text-green-600" />
        </div>
      </div>
      <div className="text-3xl font-bold text-gray-900 mb-1">{stat.number}</div>
      <div className="text-gray-600">{stat.label}</div>
    </div>
  );
};

const ServiceCard = ({ service }) => {
  return (
    <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
      <div className="w-16 h-16 bg-orange-100 rounded-xl flex items-center justify-center mb-6">
        <Truck className="w-8 h-8 text-orange-600" />
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
      <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
      <ul className="space-y-2 mb-6">
        {service.features.map((feature, index) => (
          <li key={index} className="flex items-center text-sm text-gray-600">
            <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-3"></div>
            {feature}
          </li>
        ))}
      </ul>
      <Link
        to="/contact" 
        className="inline-flex items-center text-green-600 font-semibold hover:text-green-700 transition-colors"
      >
        Learn More <ArrowRight className="w-4 h-4 ml-1" />
      </Link>
    </div>
  );
};

const TestimonialCard = ({ testimonial }) => {
  return (
    <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100">
      <div className="flex items-center mb-4">
        {[...Array(testimonial.rating)].map((_, i) => (
          <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
        ))}
      </div>
      <p className="text-gray-700 mb-6 leading-relaxed italic">"{testimonial.content}"</p>
      <div className="border-t pt-4">
        <div className="font-semibold text-gray-900">{testimonial.name}</div>
        <div className="text-sm text-gray-600">{testimonial.title}</div>
        <div className="text-sm text-green-600 font-medium">{testimonial.company}</div>
      </div>
    </div>
  );
};

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-section bg-gradient-to-br from-gray-50 to-white">
        <div className="section-container text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="display-lg text-gray-900 mb-6">
              Swift as the Constellation,<br />
              <span className="text-green-600">Reliable as the Stars</span>
            </h1>
            <p className="body-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Lepus Group delivers exceptional logistics and transportation services across North America. 
              Like the swift rabbit constellation that has guided travelers for centuries, we guide your freight 
              with unmatched speed and precision.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="btn-primary">
                Get Free Quote <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link to="/services" className="btn-secondary">
                Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="heading-2 text-gray-900 mb-4">Trusted by Industry Leaders</h2>
            <p className="body-lg text-gray-600 max-w-2xl mx-auto">
              Our track record speaks for itself. See why leading companies choose Lepus Group 
              for their logistics and transportation needs.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {statistics.map((stat) => (
              <StatCard key={stat.id} stat={stat} />
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="heading-2 text-gray-900 mb-4">Comprehensive Logistics Solutions</h2>
            <p className="body-lg text-gray-600 max-w-2xl mx-auto">
              From full truckload to supply chain optimization, we offer complete transportation 
              and logistics services tailored to your business needs.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="heading-2 text-gray-900 mb-4">Trusted Partners</h2>
          <p className="body-lg text-gray-600 mb-12 max-w-2xl mx-auto">
            We're proud to serve leading companies across North America, 
            building lasting partnerships through exceptional service and reliability.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {partners.map((partner) => (
              <div key={partner.id} className="bg-gray-50 rounded-xl p-8 border border-gray-200">
                <div className="text-2xl font-bold text-gray-900 mb-2">{partner.name}</div>
                <p className="text-gray-600 mb-4">{partner.description}</p>
                <div className="text-sm text-green-600 font-semibold">
                  Partnership: {partner.partnership_duration}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="heading-2 text-gray-900 mb-4">What Our Clients Say</h2>
            <p className="body-lg text-gray-600 max-w-2xl mx-auto">
              Don't just take our word for it. Here's what industry leaders say about 
              partnering with Lepus Group for their logistics needs.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-green-700 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="heading-2 mb-4">Ready to Experience the Lepus Difference?</h2>
          <p className="body-lg mb-8 opacity-90">
            Join the constellation of satisfied clients who trust Lepus Group with their most important shipments. 
            Get your free quote today and discover why we're the preferred logistics partner across North America.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="bg-white text-green-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-50 transition-colors">
              Get Free Quote
            </Link>
            <Link to="/about" className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-green-600 transition-colors">
              Learn More About Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;