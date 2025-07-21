import React from 'react';
import { Target, Eye, Heart, Star, ArrowRight } from 'lucide-react';
import { aboutContent, statistics } from '../data/mock';

const ValueCard = ({ value, index }) => {
  return (
    <div className="design-card group">
      <div className={`card-icon ${index === 0 ? 'bg-green-600' : index === 1 ? 'bg-blue-600' : 'bg-orange-600'}`}>
        {index === 0 && <Target className="w-8 h-8 text-white" />}
        {index === 1 && <Eye className="w-8 h-8 text-white" />}
        {index === 2 && <Heart className="w-8 h-8 text-white" />}
      </div>
      <h3 className="card-title">{value.title}</h3>
      <p className="card-description">{value.description}</p>
    </div>
  );
};

const About = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="section-container text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="display-lg text-gray-900 mb-6">
              About <span className="text-green-600">Lepus Group</span>
            </h1>
            <p className="body-xl text-gray-600 max-w-3xl mx-auto">
              Named after the swift Lepus constellation, we've been guiding freight across North America 
              with the same reliability that stars have guided travelers for centuries.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="heading-2 text-gray-900 mb-6">Our Story</h2>
              <p className="body-md text-gray-600 mb-6 leading-relaxed">
                {aboutContent.story}
              </p>
              <div className="flex items-center text-green-600">
                <Star className="w-5 h-5 mr-2" />
                <span className="font-semibold">Swift • Reliable • Trusted Since Day One</span>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl p-8 relative overflow-hidden">
              <div className="absolute top-4 right-4 w-20 h-20 bg-green-600 rounded-full opacity-10"></div>
              <div className="absolute bottom-4 left-4 w-16 h-16 bg-orange-500 rounded-full opacity-10"></div>
              
              <h3 className="heading-3 text-gray-900 mb-4">The Lepus Constellation</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                In ancient mythology, the constellation Lepus (the Rabbit) was known for its incredible speed and agility. 
                Just as this constellation has guided travelers across the night sky for millennia, 
                Lepus Group guides your freight across the continent with unmatched velocity and precision.
              </p>
              
              <div className="mt-6 flex items-center justify-between text-xs text-gray-500">
                <span>✦ Swift Delivery</span>
                <span>✦ Reliable Service</span>
                <span>✦ Stellar Results</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100">
              <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center mb-6">
                <Eye className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="heading-3 text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">{aboutContent.vision}</p>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100">
              <div className="w-16 h-16 bg-orange-100 rounded-xl flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="heading-3 text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">{aboutContent.mission}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="heading-2 text-gray-900 mb-4">Our Core Values</h2>
            <p className="body-lg text-gray-600 max-w-2xl mx-auto">
              These principles guide every decision we make and every relationship we build 
              in our mission to deliver exceptional logistics solutions.
            </p>
          </div>
          
          <div className="design-grid">
            {aboutContent.values.map((value, index) => (
              <ValueCard key={index} value={value} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="heading-2 mb-4">Our Impact by the Numbers</h2>
          <p className="body-lg mb-12 opacity-90 max-w-2xl mx-auto">
            Every number tells a story of trust, reliability, and our commitment to excellence 
            in the logistics industry.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {statistics.map((stat) => (
              <div key={stat.id} className="text-center">
                <div className="text-4xl lg:text-5xl font-bold text-green-400 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-300 text-lg">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-green-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="heading-2 mb-4">Ready to Join Our Constellation?</h2>
          <p className="body-lg mb-8 opacity-90">
            Experience the difference that comes from working with a logistics partner 
            that truly understands your needs and delivers results as reliable as the stars.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-white text-green-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-50 transition-colors inline-flex items-center justify-center"
            >
              Get Started Today <ArrowRight className="w-5 h-5 ml-2" />
            </a>
            <a
              href="/services"
              className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-green-600 transition-colors"
            >
              View Our Services
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;