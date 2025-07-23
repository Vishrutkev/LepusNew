import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Shield, Zap, Heart, Headphones, Award, Users, TrendingUp, 
  ArrowRight, Star, CheckCircle, Target, Truck, Globe, Clock
} from 'lucide-react';
import { aboutContent, companyInfo, statistics, heroImages } from '../data/mock';

const ValueCard = ({ value, index, delay = 0 }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [isHovered, setIsHovered] = useState(false);

  const IconComponent = {
    Shield,
    Zap,
    Heart,
    Headphones
  }[value.icon] || Shield;

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
          {value.title}
        </motion.h3>
        
        <p className="text-gray-600 leading-relaxed">
          {value.description}
        </p>
        
        <motion.div
          className="mt-6 flex items-center text-blue-600 font-semibold"
          animate={{ x: isHovered ? 5 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <span className="text-sm">Core Value</span>
          <ArrowRight className="w-4 h-4 ml-2" />
        </motion.div>
      </div>
    </motion.div>
  );
};

const MilestoneCard = ({ milestone, index, delay = 0 }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const isEven = index % 2 === 0;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: isEven ? -50 : 50 }}
      animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: isEven ? -50 : 50 }}
      transition={{ duration: 0.8, delay: delay + (index * 0.1) }}
      className={`flex items-center mb-12 ${isEven ? 'flex-row' : 'flex-row-reverse'}`}
    >
      <div className="flex-1">
        <motion.div
          className={`bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 ${isEven ? 'mr-8' : 'ml-8'}`}
          whileHover={{ scale: 1.02 }}
        >
          <div className="flex items-center mb-4">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">
              {milestone.year}
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900">{milestone.event}</h3>
              <p className="text-blue-600 font-semibold">{milestone.achievement}</p>
            </div>
          </div>
        </motion.div>
      </div>
      
      <div className="w-4 h-4 bg-blue-500 rounded-full mx-4 relative">
        <div className="absolute inset-0 bg-blue-500 rounded-full animate-ping"></div>
      </div>
      
      <div className="flex-1"></div>
    </motion.div>
  );
};

const AnimatedCounter = ({ number, suffix = "", precision = 0, duration = 2 }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [count, setCount] = useState(0);

  React.useEffect(() => {
    if (inView) {
      let startTime = null;
      const animate = (currentTime) => {
        if (startTime === null) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / (duration * 1000), 1);
        
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        setCount(number * easeOutQuart);
        
        if (progress < 1) {
          requestAnimationFrame(animate);
        } else {
          setCount(number);
        }
      };
      requestAnimationFrame(animate);
    }
  }, [inView, number, duration]);

  return (
    <div ref={ref} className="text-4xl font-bold text-blue-600">
      {count.toFixed(precision)}{suffix}
    </div>
  );
};

const About = () => {
  const [heroRef, heroInView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [storyRef, storyInView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [ctaRef, ctaInView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const achievements = [
    {
      icon: Users,
      title: "1000+",
      subtitle: "Satisfied Clients",
      description: "Trusted by leading companies across North America"
    },
    {
      icon: Truck,
      title: "98.5%",
      subtitle: "On-Time Delivery",
      description: "Industry-leading reliability and performance"
    },
    {
      icon: Globe,
      title: "2 Countries",
      subtitle: "Service Coverage",
      description: "Comprehensive Canada and USA operations"
    },
    {
      icon: Award,
      title: "18+",
      subtitle: "Years Experience",
      description: "Proven track record since 2006"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={heroImages.truck2}
            alt="About Lepus Group" 
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
                About
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                  Lepus Group
                </span>
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 1, delay: 0.3 }}
                className="text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed"
              >
                {aboutContent.mission}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 1, delay: 0.6 }}
                className="flex flex-col sm:flex-row gap-6 justify-center"
              >
                <motion.a 
                  href="#story"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-10 py-5 rounded-full font-bold text-lg transition-all duration-300 flex items-center justify-center group"
                >
                  <span>Our Story</span>
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

      {/* Achievements Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold text-gray-900 mb-6">Our Achievements</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Numbers that speak to our commitment to excellence and our position as a leader in transportation services.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
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
                  <achievement.icon className="w-10 h-10 text-white" />
                </motion.div>
                <div className="text-4xl font-bold text-blue-600 mb-2">{achievement.title}</div>
                <div className="text-lg font-semibold text-gray-900 mb-3">{achievement.subtitle}</div>
                <p className="text-gray-600 text-sm leading-relaxed">{achievement.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section id="story" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              ref={storyRef}
              initial={{ opacity: 0, x: -50 }}
              animate={storyInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-5xl font-bold text-gray-900 mb-6">Our Story</h2>
              <div className="space-y-6 text-gray-600 leading-relaxed">
                <p>{aboutContent.story}</p>
                <div className="grid grid-cols-2 gap-6 mt-8">
                  <div className="text-center p-6 bg-blue-50 rounded-xl">
                    <div className="text-3xl font-bold text-blue-600 mb-2">
                      <AnimatedCounter number={2006} suffix="" duration={2} />
                    </div>
                    <div className="text-gray-600 text-sm font-semibold">Founded</div>
                  </div>
                  <div className="text-center p-6 bg-green-50 rounded-xl">
                    <div className="text-3xl font-bold text-green-600 mb-2">
                      <AnimatedCounter number={18} suffix="+" duration={2} />
                    </div>
                    <div className="text-gray-600 text-sm font-semibold">Years Experience</div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={storyInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src={heroImages.logistics}
                  alt="Lepus Group Story" 
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4">
                    <div className="flex items-center text-gray-700">
                      <Target className="w-5 h-5 text-blue-500 mr-3" />
                      <span className="font-semibold">Transportation Excellence</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold text-gray-900 mb-6">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              The core principles that guide everything we do at {companyInfo.name}, 
              ensuring we deliver exceptional service every time.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {aboutContent.values.map((value, index) => (
              <ValueCard key={index} value={value} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold text-gray-900 mb-6">Our Journey</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Key milestones that have shaped our growth and success over the years.
            </p>
          </motion.div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 to-blue-600"></div>
            
            {aboutContent.milestones.map((milestone, index) => (
              <MilestoneCard key={index} milestone={milestone} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img 
            src={heroImages.transportation2}
            alt="" 
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center lg:text-left"
            >
              <h3 className="text-4xl font-bold text-white mb-6">Our Vision</h3>
              <p className="text-xl text-blue-100 leading-relaxed mb-8">
                {aboutContent.vision}
              </p>
              <div className="flex items-center justify-center lg:justify-start">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mr-4">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <span className="text-white font-semibold">Strategic Excellence</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center lg:text-left"
            >
              <h3 className="text-4xl font-bold text-white mb-6">Our Mission</h3>
              <p className="text-xl text-blue-100 leading-relaxed mb-8">
                {aboutContent.mission}
              </p>
              <div className="flex items-center justify-center lg:justify-start">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mr-4">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <span className="text-white font-semibold">Committed to Excellence</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900">
        <div ref={ctaRef} className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={ctaInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl font-bold text-white mb-6">Ready to Experience Excellence?</h2>
            <p className="text-xl text-gray-300 mb-10 leading-relaxed max-w-3xl mx-auto">
              Join the thousands of satisfied clients who trust {companyInfo.name} with their transportation needs. 
              Experience our commitment to excellence firsthand.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <motion.a 
                href="/contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-10 py-5 rounded-full font-bold text-lg transition-all duration-300 flex items-center justify-center group"
              >
                <span>Contact Us Today</span>
                <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform" />
              </motion.a>
              <motion.a 
                href="/services"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-blue-400 text-blue-400 px-10 py-5 rounded-full font-bold text-lg hover:bg-blue-400 hover:text-white transition-all duration-300 flex items-center justify-center"
              >
                <span>Our Services</span>
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
