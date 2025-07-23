import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Truck, Package, Globe, Users, Warehouse, Zap, 
  ArrowRight, CheckCircle, Star, Award, ChevronRight,
  Phone, Mail, Clock, MapPin
} from 'lucide-react';
import { services, companyInfo, heroImages } from '../data/mock';

const ServiceCard = ({ service, index, delay = 0 }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [isHovered, setIsHovered] = useState(false);

  const IconComponent = {
    Truck,
    Package,
    Globe,
    Users,
    Warehouse,
    Zap
  }[service.icon] || Truck;

  const backgroundImages = [
    heroImages.truck1,
    heroImages.truck2,
    heroImages.truck3,
    heroImages.transportation1,
    heroImages.transportation2,
    heroImages.warehouse
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
      <div className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 h-full group-hover:-translate-y-2">
        {/* Service Image with Overlay */}
        <div className="relative h-48 overflow-hidden">
          <motion.img
            src={backgroundImages[index % backgroundImages.length]}
            alt={service.title}
            className="w-full h-full object-cover"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.6 }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
          
          {/* Service Icon */}
          <motion.div
            className="absolute top-4 left-4 w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg"
            whileHover={{ scale: 1.1, rotate: 360 }}
            transition={{ duration: 0.6 }}
          >
            <IconComponent className="w-8 h-8 text-white" />
          </motion.div>

          {/* Quick Stats */}
          <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-1">
            <div className="flex items-center text-sm text-gray-700">
              <Star className="w-4 h-4 text-yellow-500 mr-1" />
              <span className="font-semibold">Premium Service</span>
            </div>
          </div>
        </div>

        {/* Service Content */}
        <div className="p-8">
          <motion.h3 
            className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors"
            animate={{ scale: isHovered ? 1.05 : 1 }}
            transition={{ duration: 0.3 }}
          >
            {service.title}
          </motion.h3>
          
          <p className="text-gray-600 mb-6 leading-relaxed">
            {service.shortDescription}
          </p>

          {/* Key Features */}
          <div className="space-y-3 mb-8">
            {service.features.slice(0, 3).map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.5, delay: delay + (index * 0.15) + (idx * 0.1) }}
                className="flex items-center text-sm text-gray-600"
              >
                <motion.div
                  whileHover={{ scale: 1.2 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <CheckCircle className="w-4 h-4 text-blue-500 mr-3 flex-shrink-0" />
                </motion.div>
                {feature}
              </motion.div>
            ))}
          </div>

          {/* Industries Served */}
          <div className="mb-6">
            <div className="text-sm text-gray-500 mb-2">Industries Served:</div>
            <div className="flex flex-wrap gap-2">
              {service.industries.slice(0, 3).map((industry, idx) => (
                <motion.span
                  key={idx}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.4, delay: delay + (index * 0.15) + (idx * 0.1) }}
                  className="px-3 py-1 bg-blue-50 text-blue-700 text-xs rounded-full font-medium"
                >
                  {industry}
                </motion.span>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center group"
          >
            <span>Learn More</span>
            <motion.div
              animate={{ x: isHovered ? 5 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <ChevronRight className="w-5 h-5 ml-2" />
            </motion.div>
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

const Services = () => {
  const [heroRef, heroInView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [ctaRef, ctaInView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const features = [
    {
      icon: Clock,
      title: "24/7 Operations",
      description: "Round-the-clock dispatch and customer support",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Experienced drivers and logistics professionals",
      color: "from-green-500 to-green-600"
    },
    {
      icon: Award,
      title: "98.5% On-Time",
      description: "Industry-leading on-time delivery rate",
      color: "from-orange-500 to-orange-600"
    },
    {
      icon: CheckCircle,
      title: "Damage-Free",
      description: "Secure handling and professional service",
      color: "from-purple-500 to-purple-600"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={heroImages.transportation3}
            alt="Transportation Services" 
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
                Our
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                  Services
                </span>
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 1, delay: 0.3 }}
                className="text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed"
              >
                Comprehensive transportation solutions tailored to your business needs. 
                From full truckload to specialized logistics, we deliver excellence.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 1, delay: 0.6 }}
                className="flex flex-col sm:flex-row gap-6 justify-center"
              >
                <motion.a 
                  href="#services"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-10 py-5 rounded-full font-bold text-lg transition-all duration-300 flex items-center justify-center group"
                >
                  <span>Explore Services</span>
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="ml-3"
                  >
                    <ArrowRight className="w-6 h-6" />
                  </motion.div>
                </motion.a>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold text-gray-900 mb-6">Why Choose Our Services?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Experience the difference with our comprehensive transportation solutions 
              backed by industry-leading service and reliability.
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
                className="text-center group"
              >
                <motion.div
                  className={`w-20 h-20 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}
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

      {/* Services Grid */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold text-gray-900 mb-6">Transportation Solutions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Discover our comprehensive range of transportation services designed to meet 
              your specific logistics needs with professional excellence.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img 
            src={heroImages.logistics2}
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
            <h2 className="text-5xl font-bold text-white mb-6">Ready to Get Started?</h2>
            <p className="text-xl text-blue-100 mb-10 leading-relaxed max-w-3xl mx-auto">
              Experience the {companyInfo.name} difference. Contact us today for a customized 
              transportation solution that meets your specific business needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <motion.a 
                href="/contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-blue-600 px-10 py-5 rounded-full font-bold text-lg hover:bg-gray-100 transition-all duration-300 flex items-center justify-center group"
              >
                <Phone className="w-6 h-6 mr-3" />
                Get Quote Now
              </motion.a>
              <motion.a 
                href="/contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-white hover:text-blue-600 transition-all duration-300 flex items-center justify-center"
              >
                <Mail className="w-6 h-6 mr-3" />
                Contact Us
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;
