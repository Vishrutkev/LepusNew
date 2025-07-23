import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Phone, Mail, MapPin, Clock, Send, User, MessageSquare, 
  Truck, Shield, Award, CheckCircle, ArrowRight, Star
} from 'lucide-react';
import { contactInfo, companyInfo, heroImages } from '../data/mock';

const ContactCard = ({ contact, index, delay = 0 }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [isHovered, setIsHovered] = useState(false);

  const iconMap = {
    Phone: Phone,
    Mail: Mail,
    MapPin: MapPin,
    Clock: Clock
  };

  const IconComponent = iconMap[contact.icon] || Phone;

  const colors = [
    'from-blue-500 to-blue-600',
    'from-green-500 to-green-600',
    'from-purple-500 to-purple-600',
    'from-orange-500 to-orange-600'
  ];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8, delay: delay + (index * 0.15) }}
      className="relative group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 h-full group-hover:-translate-y-2">
        <motion.div
          className={`w-20 h-20 bg-gradient-to-r ${colors[index % colors.length]} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
          whileHover={{ rotate: 360 }}
          transition={{ duration: 0.6 }}
        >
          <IconComponent className="w-10 h-10 text-white" />
        </motion.div>
        
        <motion.h3 
          className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors"
          animate={{ scale: isHovered ? 1.05 : 1 }}
          transition={{ duration: 0.3 }}
        >
          {contact.title}
        </motion.h3>
        
        <div className="space-y-3 mb-6">
          {contact.phone && (
            <motion.a
              href={`tel:${contact.phone}`}
              className="flex items-center text-gray-600 hover:text-blue-600 transition-colors"
              whileHover={{ x: 5 }}
              transition={{ duration: 0.3 }}
            >
              <Phone className="w-4 h-4 mr-3 text-blue-500" />
              {contact.phone}
            </motion.a>
          )}
          
          {contact.email && (
            <motion.a
              href={`mailto:${contact.email}`}
              className="flex items-center text-gray-600 hover:text-blue-600 transition-colors"
              whileHover={{ x: 5 }}
              transition={{ duration: 0.3 }}
            >
              <Mail className="w-4 h-4 mr-3 text-blue-500" />
              {contact.email}
            </motion.a>
          )}
          
          {contact.address && (
            <div className="flex items-start text-gray-600">
              <MapPin className="w-4 h-4 mr-3 text-blue-500 mt-1 flex-shrink-0" />
              <div>
                <div>{contact.address}</div>
                <div>{contact.city}</div>
              </div>
            </div>
          )}
          
          {contact.hours && (
            <div className="flex items-start text-gray-600">
              <Clock className="w-4 h-4 mr-3 text-blue-500 mt-1 flex-shrink-0" />
              <div>{contact.hours}</div>
            </div>
          )}
        </div>
        
        {contact.description && (
          <p className="text-gray-500 text-sm leading-relaxed mb-4">
            {contact.description}
          </p>
        )}
        
        <motion.div
          className="flex items-center text-blue-600 font-semibold"
          animate={{ x: isHovered ? 5 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <span className="text-sm">Contact Now</span>
          <ArrowRight className="w-4 h-4 ml-2" />
        </motion.div>
      </div>
    </motion.div>
  );
};

const Contact = () => {
  const [heroRef, heroInView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [formRef, formInView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [ctaRef, ctaInView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const contactMethods = [
    {
      title: contactInfo.headquarters.title,
      phone: contactInfo.headquarters.phone,
      email: contactInfo.headquarters.email,
      address: contactInfo.headquarters.address,
      city: contactInfo.headquarters.city,
      hours: contactInfo.headquarters.hours,
      icon: 'MapPin'
    },
    {
      title: contactInfo.operations.title,
      phone: contactInfo.operations.phone,
      email: contactInfo.operations.email,
      address: contactInfo.operations.address,
      city: contactInfo.operations.city,
      hours: contactInfo.operations.hours,
      description: "24/7 emergency support and dispatch services",
      icon: 'Clock'
    },
    {
      title: contactInfo.newOrders.title,
      phone: contactInfo.newOrders.phone,
      email: contactInfo.newOrders.email,
      description: contactInfo.newOrders.description,
      icon: 'Phone'
    },
    {
      title: contactInfo.careers.title,
      phone: contactInfo.careers.phone,
      email: contactInfo.careers.email,
      description: contactInfo.careers.description,
      icon: 'Mail'
    }
  ];

  const features = [
    {
      icon: Shield,
      title: "Secure Communication",
      description: "Your information is protected with industry-standard security"
    },
    {
      icon: Award,
      title: "Expert Support",
      description: "Knowledgeable team ready to assist with all your needs"
    },
    {
      icon: CheckCircle,
      title: "Quick Response",
      description: "We respond to all inquiries within 24 hours"
    },
    {
      icon: Star,
      title: "Personalized Service",
      description: "Tailored solutions for your specific requirements"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={heroImages.transportation1}
            alt="Contact Lepus Group" 
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 via-gray-900/80 to-blue-900/90"></div>
        </div>

        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{
              x: [0, 100, 0],
              y: [0, -50, 0],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute top-20 left-20 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              x: [0, -80, 0],
              y: [0, 60, 0],
              rotate: [0, -180, -360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute bottom-20 right-20 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl"
          />
        </div>

        <div ref={heroRef} className="relative z-10 min-h-[70vh] flex items-center">
          <div className="max-w-7xl mx-auto px-4 py-20">
            <div className="text-center">
              <motion.h1
                initial={{ opacity: 0, y: 50 }}
                animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 1 }}
                className="text-6xl lg:text-7xl font-bold text-white mb-6"
              >
                Contact
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                  Us
                </span>
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 1, delay: 0.3 }}
                className="text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed"
              >
                Ready to experience transportation excellence? Get in touch with our team for personalized service and expert solutions.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 1, delay: 0.6 }}
                className="flex flex-col sm:flex-row gap-6 justify-center"
              >
                <motion.a 
                  href="#contact-form"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-10 py-5 rounded-full font-bold text-lg transition-all duration-300 flex items-center justify-center group"
                >
                  <span>Get Quote</span>
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="ml-3"
                  >
                    <ArrowRight className="w-6 h-6" />
                  </motion.div>
                </motion.a>
                <motion.a 
                  href={`tel:${companyInfo.phone}`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-blue-400 text-blue-300 px-10 py-5 rounded-full font-bold text-lg hover:bg-blue-400 hover:text-white transition-all duration-300 flex items-center justify-center"
                >
                  <Phone className="w-6 h-6 mr-3" />
                  Call Now
                </motion.a>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Features */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold text-gray-900 mb-6">Why Contact Us?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Experience the difference with our professional, responsive, and personalized approach to customer service.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="text-center bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 group"
              >
                <motion.div
                  className="w-20 h-20 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <feature.icon className="w-10 h-10 text-white" />
                </motion.div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold text-gray-900 mb-6">Get in Touch</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Multiple ways to reach us for all your transportation and logistics needs.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactMethods.map((contact, index) => (
              <ContactCard key={index} contact={contact} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact-form" className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div
            ref={formRef}
            initial={{ opacity: 0, y: 50 }}
            animate={formInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold text-gray-900 mb-6">Send us a Message</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Ready to get started? Fill out the form below and we'll get back to you within 24 hours.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={formInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white rounded-2xl shadow-2xl p-8 lg:p-12"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={formInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-gray-50 hover:bg-white"
                      placeholder="Enter your full name"
                    />
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={formInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-gray-50 hover:bg-white"
                      placeholder="Enter your email"
                    />
                  </div>
                </motion.div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={formInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                >
                  <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-gray-50 hover:bg-white"
                      placeholder="Enter your phone number"
                    />
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={formInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2">
                    Subject *
                  </label>
                  <div className="relative">
                    <Truck className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-gray-50 hover:bg-white"
                    >
                      <option value="">Select a subject</option>
                      <option value="quote">Request Quote</option>
                      <option value="general">General Inquiry</option>
                      <option value="support">Customer Support</option>
                      <option value="careers">Careers</option>
                    </select>
                  </div>
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={formInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.7 }}
              >
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                  Message *
                </label>
                <div className="relative">
                  <MessageSquare className="absolute left-3 top-4 text-gray-400 w-5 h-5" />
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-gray-50 hover:bg-white resize-none"
                    placeholder="Tell us about your transportation needs..."
                  />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={formInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="text-center"
              >
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-12 py-4 rounded-xl font-bold text-lg transition-all duration-300 flex items-center justify-center mx-auto group"
                >
                  <Send className="w-5 h-5 mr-3 group-hover:translate-x-1 transition-transform" />
                  Send Message
                </motion.button>
                <p className="text-sm text-gray-500 mt-4">
                  We'll respond within 24 hours. Fields marked with * are required.
                </p>
              </motion.div>
            </form>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img 
            src={heroImages.truck3}
            alt="" 
            className="w-full h-full object-cover"
          />
        </div>
        
        <div ref={ctaRef} className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={ctaInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl font-bold text-white mb-6">Ready to Ship?</h2>
            <p className="text-xl text-blue-100 mb-10 leading-relaxed max-w-3xl mx-auto">
              Don't wait - get your transportation solution started today. Our team is standing by to help you move forward.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <motion.a 
                href={`tel:${companyInfo.phone}`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-blue-600 px-10 py-5 rounded-full font-bold text-lg hover:bg-gray-100 transition-all duration-300 flex items-center justify-center group"
              >
                <Phone className="w-6 h-6 mr-3" />
                Call {companyInfo.phone}
              </motion.a>
              <motion.a 
                href={`mailto:${companyInfo.email}`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-white hover:text-blue-600 transition-all duration-300 flex items-center justify-center"
              >
                <Mail className="w-6 h-6 mr-3" />
                Email Us
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
