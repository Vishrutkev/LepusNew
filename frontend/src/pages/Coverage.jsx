import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { MapPin, Truck, Globe, Clock, ArrowRight, CheckCircle } from 'lucide-react';
import { companyInfo, heroImages } from '../data/mock';

const CoverageArea = ({ area, index, delay = 0 }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8, delay: delay + (index * 0.1) }}
      className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
    >
      <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-6">
        <MapPin className="w-8 h-8 text-white" />
      </div>
      <h3 className="text-2xl font-bold text-gray-900 mb-4">{area.title}</h3>
      <p className="text-gray-600 mb-6 leading-relaxed">{area.description}</p>
      <div className="space-y-2">
        {area.routes.map((route, idx) => (
          <div key={idx} className="flex items-center text-sm text-gray-600">
            <CheckCircle className="w-4 h-4 text-blue-500 mr-3 flex-shrink-0" />
            {route}
          </div>
        ))}
      </div>
      <div className="mt-6 pt-6 border-t border-gray-100">
        <div className="flex items-center justify-between text-sm">
          <span className="text-gray-500">Service Type:</span>
          <span className="font-semibold text-blue-600">{area.serviceType}</span>
        </div>
      </div>
    </motion.div>
  );
};

const Coverage = () => {
  const [heroRef, heroInView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const coverageAreas = [
    {
      title: "Ontario & Western Canada",
      description: "Regular routes serving Ontario and Western Canada with our premium team service, providing some of the quickest transit times in the industry.",
      routes: [
        "Ontario to British Columbia",
        "Ontario to Alberta",
        "Ontario to Saskatchewan",
        "Ontario to Manitoba"
      ],
      serviceType: "Team Service"
    },
    {
      title: "Midwest USA",
      description: "Dedicated service to the Midwest United States with regular scheduled departures and reliable transit times.",
      routes: [
        "Ontario to Chicago",
        "Ontario to Detroit",
        "Ontario to Minneapolis",
        "Ontario to Cleveland"
      ],
      serviceType: "FTL & LTL"
    },
    {
      title: "Northeastern USA",
      description: "Comprehensive coverage of the Northeastern United States with our Transam Express service offering reliable and timely deliveries.",
      routes: [
        "Ontario to New York",
        "Ontario to Boston",
        "Ontario to Philadelphia",
        "Ontario to Washington DC"
      ],
      serviceType: "Express Service"
    },
    {
      title: "Cross-Border Solutions",
      description: "Expert cross-border transportation services between Canada and the USA, handling all customs and regulatory requirements.",
      routes: [
        "Canada to USA corridors",
        "USA to Canada return loads",
        "Bonded carrier services",
        "Customs clearance support"
      ],
      serviceType: "Cross-Border"
    }
  ];

  const features = [
    {
      icon: Clock,
      title: "24/7 Operations",
      description: "Round-the-clock dispatch and customer support to keep your freight moving"
    },
    {
      icon: Truck,
      title: "Team Drivers",
      description: "Experienced team drivers for nonstop service and faster delivery times"
    },
    {
      icon: Globe,
      title: "Cross-Border Expertise",
      description: "Seamless movement between Canada and USA with customs expertise"
    },
    {
      icon: CheckCircle,
      title: "98.5% On-Time",
      description: "Industry-leading on-time service rate with damage-free deliveries"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={heroImages.fleet}
            alt="Transportation Coverage Map" 
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 via-gray-900/80 to-blue-900/90"></div>
        </div>

        <div ref={heroRef} className="relative z-10 min-h-[60vh] flex items-center">
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
                  Coverage
                </span>
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 1, delay: 0.3 }}
                className="text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed"
              >
                Transam Carriers provides point-to-point service between Canada and the USA. 
                Our business area includes regular routes and irregular lanes where needed.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 1, delay: 0.6 }}
                className="flex flex-col sm:flex-row gap-6 justify-center"
              >
                <a 
                  href="#coverage-areas"
                  className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-10 py-5 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl inline-flex items-center justify-center"
                >
                  Explore Coverage <ArrowRight className="w-6 h-6 ml-3" />
                </a>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Coverage Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold text-gray-900 mb-6">Why Choose Our Coverage?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Strategic coverage areas with specialized services designed to meet your specific transportation needs.
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
                className="text-center"
              >
                <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <feature.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Coverage Areas */}
      <section id="coverage-areas" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold text-gray-900 mb-6">Service Areas</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Our comprehensive coverage ensures your freight reaches its destination efficiently, 
              whether it's regular routes or irregular lanes.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {coverageAreas.map((area, index) => (
              <CoverageArea key={index} area={area} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Service Commitment */}
      <section className="py-20 bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 relative overflow-hidden">
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
            <h2 className="text-5xl font-bold text-white mb-6">Ready to Ship Across North America?</h2>
            <p className="text-xl text-blue-100 mb-10 leading-relaxed max-w-3xl mx-auto">
              With our extensive coverage and professional team, we're ready to handle your next shipment 
              across our comprehensive service network.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a 
                href="/contact"
                className="bg-white text-blue-600 px-10 py-5 rounded-full font-bold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-2xl inline-flex items-center justify-center"
              >
                Get Coverage Quote <ArrowRight className="w-6 h-6 ml-3" />
              </a>
              <a 
                href="/contact"
                className="border-2 border-white text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-white hover:text-blue-600 transition-all duration-300 inline-flex items-center justify-center"
              >
                Contact Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Coverage;