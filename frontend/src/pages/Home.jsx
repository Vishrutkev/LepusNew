import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowRight, Star, Truck, Clock, Users, Headphones, Shield, Award, Globe, Zap, CheckCircle, Play, TrendingUp, Package, Warehouse, Heart } from 'lucide-react';
import AnimatedCounter from '../components/AnimatedCounter';
import { companyInfo, statistics, partners, services, testimonials, awards, heroImages } from '../data/mock';

const StatCard = ({ stat, index }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const IconComponent = {
    Truck,
    Clock,
    Users,
    Headphones,
    Shield,
    Award,
    Globe
  }[stat.icon] || Truck; // Default to Truck if icon not found

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 group"
    >
      <div className="flex items-center justify-between mb-6">
        <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
          <IconComponent className="w-8 h-8 text-white" />
        </div>
        <div className="text-right">
          <div className="text-4xl font-bold text-gray-900 mb-2">
            <AnimatedCounter
              number={stat.number}
              display={stat.display}
              suffix={stat.suffix || ''}
              precision={stat.precision || 0}
              duration={3}
            />
          </div>
          <div className="text-gray-600 font-medium">{stat.label}</div>
        </div>
      </div>
    </motion.div>
  );
};

const ServiceCard = ({ service, index }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const IconComponent = {
    Truck,
    Package,
    Globe,
    Users,
    Warehouse,
    Zap
  }[service.icon] || Truck;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 80 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 80 }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group"
    >
      <div className="w-20 h-20 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
        <IconComponent className="text-white" />
      </div>
      <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
      <p className="text-gray-600 mb-6 leading-relaxed">{service.shortDescription}</p>
      <ul className="space-y-3 mb-8">
        {service.features.slice(0, 4).map((feature, idx) => (
          <li key={idx} className="flex items-center text-sm text-gray-600">
            <CheckCircle className="w-5 h-5 text-blue-500 mr-3 flex-shrink-0" />
            {feature}
          </li>
        ))}
      </ul>
      <Link
        to="/contact" 
        className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors group-hover:translate-x-1"
      >
        Get Quote <ArrowRight className="w-5 h-5 ml-2" />
      </Link>
    </motion.div>
  );
};

const TestimonialCard = ({ testimonial, index }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300"
    >
      <div className="flex items-center mb-6">
        {[...Array(testimonial.rating)].map((_, i) => (
          <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
        ))}
      </div>
      <p className="text-gray-700 mb-8 leading-relaxed italic text-lg">"{testimonial.content}"</p>
      <div className="border-t border-gray-100 pt-6">
        <div className="flex justify-between items-center">
          <div>
            <div className="font-bold text-gray-900 text-lg">{testimonial.name}</div>
            <div className="text-blue-600 font-semibold">{testimonial.title}</div>
            <div className="text-gray-600 font-medium">{testimonial.company}</div>
          </div>
          <div className="text-right text-sm text-gray-500">
            <div className="font-semibold text-blue-600">{testimonial.shipments}</div>
            <div>Partnership: {testimonial.partnership}</div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Home = () => {
  const [heroRef, heroInView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [partnersRef, partnersInView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <img 
            src={heroImages.primary}
            alt="Professional Truck Transportation" 
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
          <motion.div
            animate={{
              x: [0, 120, 0],
              y: [0, -80, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute top-1/2 left-1/2 w-48 h-48 bg-cyan-500/10 rounded-full blur-3xl"
          />
        </div>

        <div ref={heroRef} className="relative z-10 min-h-screen flex items-center">
          <div className="max-w-7xl mx-auto px-4 py-20">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -100 }}
                animate={heroInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
                transition={{ duration: 1 }}
                className="text-white"
              >
                {/* Company Logo/Brand */}
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="flex items-center mb-8"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mr-4">
                    <Truck className="w-10 h-10 text-white" />
                  </div>
                  <div>
                    <h1 className="text-3xl font-bold text-white">{companyInfo.name}</h1>
                    <p className="text-blue-300 text-lg">{companyInfo.tagline}</p>
                  </div>
                </motion.div>

                <motion.h2
                  initial={{ opacity: 0, y: 50 }}
                  animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                  transition={{ duration: 1, delay: 0.4 }}
                  className="text-6xl lg:text-7xl font-bold leading-tight mb-6"
                >
                  Transportation
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                    Excellence
                  </span>
                </motion.h2>

                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 1, delay: 0.6 }}
                  className="text-2xl text-gray-300 mb-8 leading-relaxed max-w-2xl"
                >
                  {companyInfo.subtitle}. Known for our customer-first approach, we specialize in 
                  <span className="text-blue-300 font-semibold"> dry van transportation</span> ensuring 
                  <span className="text-blue-300 font-semibold"> on-time, damage-free deliveries</span> on every run.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 1, delay: 0.8 }}
                  className="flex flex-col sm:flex-row gap-6"
                >
                  <motion.div
                    whileHover={{ scale: 1.05, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  >
                    <Link 
                      to="/contact" 
                      className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-10 py-5 rounded-full font-bold text-lg transition-all duration-300 flex items-center justify-center group relative overflow-hidden"
                    >
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        whileHover={{ scale: 1.1 }}
                      />
                      <span className="relative z-10">Get Instant Quote</span>
                      <motion.div
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="relative z-10 ml-3"
                      >
                        <ArrowRight className="w-6 h-6" />
                      </motion.div>
                    </Link>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  >
                    <Link 
                      to="/services" 
                      className="border-2 border-blue-400 text-blue-300 hover:bg-blue-400 hover:text-gray-900 px-10 py-5 rounded-full font-bold text-lg transition-all duration-300 flex items-center justify-center group"
                    >
                      <Play className="w-6 h-6 mr-3 group-hover:animate-pulse" />
                      Our Services
                    </Link>
                  </motion.div>
                </motion.div>

                {/* Quick Stats */}
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                  transition={{ duration: 1, delay: 1 }}
                  className="mt-12 grid grid-cols-3 gap-8"
                >
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-400 mb-2">
                      <AnimatedCounter number={98.5} suffix="%" precision={1} duration={2.5} />
                    </div>
                    <div className="text-gray-400 text-sm">On-Time Rate</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-400 mb-2">
                      <AnimatedCounter number={18} suffix="+" duration={2.5} />
                    </div>
                    <div className="text-gray-400 text-sm">Years Experience</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-400 mb-2">
                      <AnimatedCounter number={1000} suffix="+" duration={2.5} />
                    </div>
                    <div className="text-gray-400 text-sm">Satisfied Clients</div>
                  </div>
                </motion.div>
              </motion.div>

              {/* Hero Image */}
              <motion.div
                initial={{ opacity: 0, x: 100 }}
                animate={heroInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="relative"
              >
                <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                  <img 
                    src={heroImages.secondary}
                    alt="Transam Carriers Fleet"
                    className="w-full h-96 lg:h-[600px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent"></div>
                  
                  {/* Floating Stats Card */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={heroInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.8, delay: 1.2 }}
                    className="absolute bottom-8 left-8 bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-2xl"
                  >
                    <div className="flex items-center mb-3">
                      <TrendingUp className="w-8 h-8 text-green-500 mr-3" />
                      <div>
                        <div className="text-2xl font-bold text-gray-900">
                          <AnimatedCounter number={2006} suffix="" duration={3} />
                        </div>
                        <div className="text-gray-600 text-sm font-semibold">Founded</div>
                      </div>
                    </div>
                    <div className="text-green-600 text-sm font-semibold">Here for the Long Haul</div>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold text-gray-900 mb-6">Performance That Delivers</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Our track record of excellence demonstrates why leading companies across North America 
              trust Lepus Group with their most critical shipments and supply chain operations.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {statistics.map((stat, index) => (
              <StatCard key={stat.id} stat={stat} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold text-gray-900 mb-6">Comprehensive Transportation Solutions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              From full truckload to LTL services, we deliver complete transportation solutions 
              tailored to your business needs with experienced team drivers and premium service.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.slice(0, 6).map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-center mt-12"
          >
            <Link
              to="/services"
              className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 inline-flex items-center"
            >
              View All Services <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-blue-900">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            ref={partnersRef}
            initial={{ opacity: 0, y: 50 }}
            animate={partnersInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold text-white mb-6">Trusted by Industry Leaders</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              We're proud to serve leading companies across North America, building lasting partnerships 
              through exceptional service, reliability, and professional transportation solutions.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {partners.map((partner, index) => (
              <motion.div
                key={partner.id}
                initial={{ opacity: 0, y: 60 }}
                animate={partnersInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{partner.name}</h3>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">{partner.description}</p>
                  <div className="border-t border-gray-100 pt-4 mt-4">
                    <div className="text-blue-600 font-bold text-lg mb-1">{partner.loads_per_year}</div>
                    <div className="text-gray-500 text-sm">Annual Loads</div>
                    <div className="text-green-600 font-semibold text-sm mt-2">
                      Partnership: {partner.partnership_duration}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold text-gray-900 mb-6">What Our Partners Say</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Don't just take our word for it. Here's what industry leaders say about 
              partnering with Lepus Group for their critical transportation and logistics needs.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {testimonials.slice(0, 4).map((testimonial, index) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <img 
            src={heroImages.logistics}
            alt="" 
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl font-bold text-white mb-6">Ready to Experience Excellence?</h2>
            <p className="text-xl text-blue-100 mb-10 leading-relaxed max-w-3xl mx-auto">
              Join thousands of satisfied clients who trust Lepus Group with their most important shipments. 
              Get your free quote today and discover why we're Canada and USA's preferred transportation partner.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link 
                to="/contact" 
                className="bg-white text-blue-600 px-10 py-5 rounded-full font-bold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-2xl inline-flex items-center justify-center"
              >
                Get Free Quote <ArrowRight className="w-6 h-6 ml-3" />
              </Link>
              <Link 
                to="/about" 
                className="border-2 border-white text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-white hover:text-blue-600 transition-all duration-300 inline-flex items-center justify-center"
              >
                Learn About Us
              </Link>
            </div>

            {/* Awards Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mt-16 pt-12 border-t border-blue-500"
            >
              <h3 className="text-2xl font-bold text-white mb-8">Industry Recognition</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {awards.map((award, index) => (
                  <motion.div
                    key={award.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center"
                  >
                    <Award className="w-8 h-8 text-yellow-400 mx-auto mb-3" />
                    <div className="text-white font-bold text-sm">{award.title}</div>
                    <div className="text-blue-200 text-xs">{award.organization}</div>
                    <div className="text-blue-300 text-xs font-semibold">{award.year}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;