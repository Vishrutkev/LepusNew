import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from 'lucide-react';
import { contactInfo } from '../data/mock';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: ''
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mock form submission
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        service: '',
        message: ''
      });
    }, 3000);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="section-container text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="display-lg text-gray-900 mb-6">
              Get in <span className="text-green-600">Touch</span>
            </h1>
            <p className="body-xl text-gray-600 max-w-3xl mx-auto">
              Ready to experience logistics solutions as reliable as the stars? 
              Contact Lepus Group today for a free quote or to discuss your transportation needs.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-gray-50 rounded-2xl p-8">
              <h2 className="heading-2 text-gray-900 mb-6">Request a Quote</h2>
              <p className="text-gray-600 mb-8">
                Fill out the form below and our logistics experts will get back to you 
                within 2 hours with a competitive quote tailored to your needs.
              </p>
              
              {isSubmitted ? (
                <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
                  <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-4" />
                  <h3 className="heading-4 text-green-600 mb-2">Thank You!</h3>
                  <p className="text-gray-600">
                    Your quote request has been submitted successfully. 
                    Our team will contact you within 2 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Company Name
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors"
                        placeholder="Your company"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors"
                        placeholder="(555) 123-4567"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Service Needed
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors"
                    >
                      <option value="">Select a service</option>
                      <option value="ftl">Full Truckload (FTL)</option>
                      <option value="ltl">Less Than Truckload (LTL)</option>
                      <option value="brokerage">Freight Brokerage</option>
                      <option value="supply-chain">Supply Chain Solutions</option>
                      <option value="other">Other / Custom Solution</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Message / Requirements *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors"
                      placeholder="Tell us about your shipping needs, pickup/delivery locations, timeline, etc."
                    />
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full btn-primary"
                  >
                    Send Quote Request <Send className="w-5 h-5 ml-2" />
                  </button>
                </form>
              )}
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="heading-2 text-gray-900 mb-6">Contact Information</h2>
                <p className="text-gray-600 mb-8">
                  Have questions or need immediate assistance? Our logistics experts are here to help. 
                  Contact us using any of the methods below.
                </p>
              </div>
              
              {/* Contact Cards */}
              <div className="space-y-6">
                <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                      <MapPin className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">{contactInfo.headquarters.title}</h3>
                      <p className="text-gray-600 text-sm">{contactInfo.headquarters.address}</p>
                      <p className="text-gray-600 text-sm">{contactInfo.headquarters.city}</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                      <Phone className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Phone & Emergency</h3>
                      <p className="text-gray-600 text-sm mb-1">Office: {contactInfo.headquarters.phone}</p>
                      <p className="text-red-600 text-sm font-medium">{contactInfo.hours.emergency}</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mr-4">
                      <Mail className="w-6 h-6 text-orange-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                      <p className="text-gray-600 text-sm mb-1">General: {contactInfo.headquarters.email}</p>
                      <p className="text-gray-600 text-sm">Operations: {contactInfo.operations.email}</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mr-4">
                      <Clock className="w-6 h-6 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Business Hours</h3>
                      <p className="text-gray-600 text-sm mb-1">{contactInfo.hours.office}</p>
                      <p className="text-green-600 text-sm font-medium">{contactInfo.hours.dispatch}</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Call to Action */}
              <div className="bg-gradient-to-br from-green-600 to-green-700 rounded-2xl p-8 text-white">
                <h3 className="heading-3 mb-4">Need Immediate Assistance?</h3>
                <p className="text-green-100 mb-6">
                  Our dispatch team is available 24/7 for urgent shipping needs and emergency support.
                </p>
                <a
                  href="tel:+15559111623"
                  className="bg-white text-green-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-50 transition-colors inline-block"
                >
                  Call Emergency Line
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;