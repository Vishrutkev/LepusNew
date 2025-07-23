import React from 'react'
import {
  Truck,
  Package,
  Globe,
  Warehouse,
  Zap,
  Thermometer,
  CheckCircle,
  ArrowRight,
  Clock,
  Shield,
  MapPin
} from 'lucide-react'
import { motion } from 'framer-motion'
import { services } from '../data/mock'

const iconMap = {
  Truck,
  Package,
  Globe,
  Warehouse,
  Zap,
  Thermometer
}

const ServiceDetailCard = ({ service, index }) => {
  const IconComponent = iconMap[service.icon] || Truck
  const colors = ['bg-green-600', 'bg-blue-600', 'bg-orange-600', 'bg-purple-600', 'bg-red-600', 'bg-yellow-600']
  const iconColor = colors[index % colors.length]

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.03 }}
      transition={{ type: 'spring', stiffness: 200, damping: 20, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg cursor-pointer"
    >
      <div className={`w-12 h-12 ${iconColor} rounded-lg flex items-center justify-center mb-4`}>
        <IconComponent className="w-6 h-6 text-white" />
      </div>

      <h3 className="text-lg font-semibold text-gray-900 mb-2">{service.title}</h3>
      <p className="text-gray-600 text-sm mb-6">{service.shortDescription}</p>

      <div className="space-y-3 mb-6">
        <h4 className="font-semibold text-gray-900 text-sm">Key Features:</h4>
        <ul className="space-y-2">
          {service.features.map((feature, idx) => (
            <li key={idx} className="flex items-start text-sm text-gray-600">
              <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      <a
        href="/contact"
        className="inline-flex items-center text-green-600 font-medium hover:text-green-700 transition-colors text-sm"
      >
        Get Quote <ArrowRight className="w-4 h-4 ml-1" />
      </a>
    </motion.div>
  )
}

const Services = () => {
  return (
    <div className="min-h-screen">
      <section className="hero-section bg-gray-900 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="display-lg font-bold mb-6">
            Comprehensive <span className="text-green-400">Logistics Solutions</span>
          </h1>
          <p className="text-lg text-gray-200 max-w-3xl mx-auto mb-8">
            From full truckload shipments to complete supply chain optimization,
            Lepus Group delivers tailored logistics solutions that drive your business forward
            with the speed and reliability of the stars.
          </p>
          <a
            href="/contact"
            className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full inline-flex items-center font-semibold"
          >
            Request Custom Quote <ArrowRight className="w-5 h-5 ml-2" />
          </a>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Lepus Group?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              We combine cutting-edge technology with decades of logistics expertise
              to deliver solutions that exceed expectations.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div whileHover={{ scale: 1.03 }} transition={{ type: 'spring', stiffness: 200, damping: 20 }} className="text-center p-6 cursor-pointer">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Lightning Fast</h3>
              <p className="text-gray-600 text-sm">
                Swift delivery times that keep your business moving at the speed of the market.
              </p>
            </motion.div>

            <motion.div whileHover={{ scale: 1.03 }} transition={{ type: 'spring', stiffness: 200, damping: 20 }} className="text-center p-6 cursor-pointer">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Secure & Reliable</h3>
              <p className="text-gray-600 text-sm">
                Industry-leading security protocols and insurance coverage protect your valuable cargo.
              </p>
            </motion.div>

            <motion.div whileHover={{ scale: 1.03 }} transition={{ type: 'spring', stiffness: 200, damping: 20 }} className="text-center p-6 cursor-pointer">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">North America Wide</h3>
              <p className="text-gray-600 text-sm">
                Extensive network coverage across the United States, Canada, and Mexico.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Service Portfolio</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Comprehensive logistics solutions designed to meet the unique needs of your business,
              from single shipments to complete supply chain management.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceDetailCard key={service.id} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-green-600 to-green-700 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Optimize Your Supply Chain?</h2>
          <p className="text-lg mb-8 opacity-90">
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
              href="tel:+18885378747"
              className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-green-600 transition-colors"
            >
              Call Now: +1 (888) 537-8747
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Services
