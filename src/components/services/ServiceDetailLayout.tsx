'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { 
  FiArrowRight, 
  FiCheckCircle, 
  FiFileText, 
  FiMessageCircle,
  FiShield, 
  FiRefreshCw, 
  FiGlobe, 
  FiAlertTriangle,
  FiBriefcase,
  FiUsers,
  FiUserCheck,
  FiLock,
  FiCreditCard,
  FiClipboard,
  FiSearch,
  FiLayers,
  FiDatabase,
  FiChevronDown
} from 'react-icons/fi';

// Types
interface Benefit {
  title: string;
  description: string;
}

interface Service {
  title: string;
  description: string;
  icon: string;
}

interface FAQ {
  question: string;
  answer: string;
}

interface Testimonial {
  content: string;
  author: string;
}

interface CTA {
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
}

interface ServiceData {
  title: string;
  subtitle: string;
  description: string;
  coverImage: string;
  icon: string;
  benefits: Benefit[];
  services: Service[];
  faq: FAQ[];
  testimonials: Testimonial[];
  cta: CTA;
}

interface ServiceDetailLayoutProps {
  serviceData: ServiceData;
}

const ServiceDetailLayout: React.FC<ServiceDetailLayoutProps> = ({ serviceData }) => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  // Helper function to get the correct icon component
  const getIconComponent = (iconName: string) => {
    const icons: { [key: string]: React.ReactNode } = {
      FiCheckCircle: <FiCheckCircle className="h-6 w-6" />,
      FiFileText: <FiFileText className="h-6 w-6" />,
      FiMessageCircle: <FiMessageCircle className="h-6 w-6" />,
      FiShield: <FiShield className="h-6 w-6" />,
      FiRefreshCw: <FiRefreshCw className="h-6 w-6" />,
      FiGlobe: <FiGlobe className="h-6 w-6" />,
      FiAlertTriangle: <FiAlertTriangle className="h-6 w-6" />,
      FiBriefcase: <FiBriefcase className="h-6 w-6" />,
      FiUsers: <FiUsers className="h-6 w-6" />,
      FiUserCheck: <FiUserCheck className="h-6 w-6" />,
      FiLock: <FiLock className="h-6 w-6" />,
      FiCreditCard: <FiCreditCard className="h-6 w-6" />,
      FiClipboard: <FiClipboard className="h-6 w-6" />,
      FiSearch: <FiSearch className="h-6 w-6" />,
      FiLayers: <FiLayers className="h-6 w-6" />,
      FiDatabase: <FiDatabase className="h-6 w-6" />
    };

    return icons[iconName] || <FiFileText className="h-6 w-6" />;
  };

  return (
    <main>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-violet-800 to-violet-950 py-20 md:py-32 text-white overflow-hidden">
        {/* Background decorative elements - enhanced with more modern shapes */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
          <div className="absolute top-1/4 right-10 w-96 h-96 rounded-full bg-violet-500/20 blur-3xl animate-pulse-slow"></div>
          <div className="absolute bottom-1/4 left-10 w-96 h-96 rounded-full bg-violet-600/20 blur-3xl animate-pulse-slow"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] rounded-full bg-violet-400/10 blur-3xl"></div>
          <div className="hidden md:block absolute top-20 left-20 w-20 h-20 bg-violet-300/20 rounded-lg rotate-12"></div>
          <div className="hidden md:block absolute bottom-20 right-20 w-32 h-32 bg-violet-300/10 rounded-full"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <motion.div 
                className="inline-flex items-center space-x-2 px-4 py-1.5 bg-white/10 backdrop-blur-sm text-white rounded-full text-sm font-medium tracking-wide mb-2"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <span className="w-2 h-2 rounded-full bg-violet-300 animate-pulse"></span>
                <span>Expertise & Solutions</span>
              </motion.div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-violet-200">
                {serviceData.title}
              </h1>
              
              <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-xl">
                {serviceData.subtitle}
              </p>
              
              <p className="text-base md:text-lg text-white/80 mb-10 max-w-xl leading-relaxed">
                {serviceData.description}
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Link 
                  href="/contact?subject=devis" 
                  className="btn-modern btn-lg inline-flex items-center group bg-white text-violet-800 hover:bg-violet-50"
                >
                  Nous contacter
                  <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
                
                <Link 
                  href="#services" 
                  className="btn-modern btn-lg btn-outline inline-flex items-center group text-white border-white/40 hover:bg-white/10"
                >
                  Nos services
                  <FiArrowRight className="ml-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                </Link>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative hidden lg:block"
            >
              <div className="absolute -inset-4 bg-gradient-to-tr from-violet-600/30 to-transparent rounded-2xl transform rotate-6 blur-sm"></div>
              <div className="absolute -inset-0.5 bg-gradient-to-tr from-violet-400/20 to-transparent rounded-2xl transform -rotate-3"></div>
              <div className="relative overflow-hidden rounded-2xl shadow-2xl ring-1 ring-white/20">
                <div className="absolute inset-0 bg-gradient-to-tr from-violet-600/10 to-transparent mix-blend-overlay"></div>
                <Image 
                  src={serviceData.coverImage} 
                  alt={serviceData.title}
                  width={600}
                  height={400}
                  className="w-full h-auto rounded-2xl transform transition-transform hover:scale-105 duration-700"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.span
              className="inline-flex items-center px-3 py-1 rounded-full bg-violet-100 text-violet-800 text-sm font-medium mb-4"
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <span className="w-2 h-2 rounded-full bg-violet-500 mr-2"></span>
              Nos avantages
            </motion.span>
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Pourquoi choisir notre expertise ?
            </motion.h2>
            <motion.div 
              className="w-24 h-1 bg-gradient-to-r from-violet-500 to-violet-700 mx-auto mb-8 rounded-full"
              initial={{ width: 0, opacity: 0 }}
              whileInView={{ width: 96, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            ></motion.div>
            <motion.p
              className="max-w-2xl mx-auto text-lg text-gray-600 mb-12"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Notre cabinet vous accompagne avec une expertise reconnue et des solutions adaptées à vos besoins spécifiques.
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {serviceData.benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 md:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-violet-200 group relative overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-violet-50 rounded-full -mr-16 -mt-16 group-hover:bg-violet-100 transition-colors duration-300"></div>
                <div className="relative z-10">
                  <div className="bg-gradient-to-br from-violet-500 to-violet-700 w-14 h-14 rounded-xl flex items-center justify-center mb-6 shadow-md transform group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                    <FiCheckCircle className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-violet-700 transition-colors duration-300">{benefit.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services List Section */}
      <section id="services-list" className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.span 
              className="inline-flex items-center px-3 py-1 rounded-full bg-violet-100 text-violet-800 text-sm font-medium mb-4"
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <span className="w-2 h-2 rounded-full bg-violet-500 mr-2"></span>
              Nos Prestations
            </motion.span>
            
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Découvrez nos services <span className="text-violet-700">{serviceData.title.toLowerCase()}</span>
            </motion.h2>
            
            <motion.div 
              className="w-24 h-1 bg-gradient-to-r from-violet-500 to-violet-700 mx-auto mb-8 rounded-full"
              initial={{ width: 0, opacity: 0 }}
              whileInView={{ width: 96, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            ></motion.div>
            
            <motion.p
              className="max-w-2xl mx-auto text-lg text-gray-600 mb-12"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Des solutions adaptées à vos besoins spécifiques avec un accompagnement personnalisé.
            </motion.p>
          </div>
          
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {serviceData.services.map((service, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 md:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group hover:border-violet-200 hover:translate-y-[-5px]"
                variants={itemVariants}
              >
                <div className="bg-gradient-to-br from-violet-500 to-violet-700 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-md transform group-hover:rotate-6 transition-transform duration-300">
                  <div className="text-white">
                    {getIconComponent(service.icon)}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-violet-700 transition-colors duration-300">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.span
              className="inline-flex items-center px-3 py-1 rounded-full bg-violet-100 text-violet-800 text-sm font-medium mb-4"
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <span className="w-2 h-2 rounded-full bg-violet-500 mr-2"></span>
              FAQ
            </motion.span>
            
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Questions fréquentes
            </motion.h2>
            <motion.div 
              className="w-24 h-1 bg-gradient-to-r from-violet-500 to-violet-700 mx-auto mb-8 rounded-full"
              initial={{ width: 0, opacity: 0 }}
              whileInView={{ width: 96, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            ></motion.div>
            <motion.p
              className="max-w-2xl mx-auto text-lg text-gray-600 mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Retrouvez les réponses aux questions les plus fréquentes sur nos services.
            </motion.p>
          </div>
          
          <div className="space-y-4">
            {serviceData.faq.map((item, index) => (
              <motion.div 
                key={index}
                className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:border-violet-200 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <button 
                  className="w-full flex justify-between items-center p-6 text-left focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-opacity-20 focus:ring-offset-2 rounded-t-2xl"
                  onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                >
                  <h3 className="text-lg font-semibold text-gray-900 group-hover:text-violet-700">{item.question}</h3>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center bg-violet-100 transition-all duration-300 ${openFAQ === index ? 'bg-violet-600' : ''}`}>
                    <FiChevronDown 
                      className={`h-5 w-5 transition-transform duration-300 ${openFAQ === index ? 'transform rotate-180 text-white' : 'text-violet-600'}`} 
                    />
                  </div>
                </button>
                
                <motion.div 
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ 
                    height: openFAQ === index ? 'auto' : 0,
                    opacity: openFAQ === index ? 1 : 0
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-6 pt-2">
                    <p className="text-gray-600 leading-relaxed">{item.answer}</p>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.span
              className="inline-flex items-center px-3 py-1 rounded-full bg-violet-100 text-violet-800 text-sm font-medium mb-4"
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <span className="w-2 h-2 rounded-full bg-violet-500 mr-2"></span>
              Témoignages
            </motion.span>
            
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Ce que nos clients disent
            </motion.h2>
            <motion.div 
              className="w-24 h-1 bg-gradient-to-r from-violet-500 to-violet-700 mx-auto mb-8 rounded-full"
              initial={{ width: 0, opacity: 0 }}
              whileInView={{ width: 96, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            ></motion.div>
            <motion.p
              className="max-w-2xl mx-auto text-lg text-gray-600 mb-12"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Découvrez l&apos;expérience de nos clients qui nous ont fait confiance.
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {serviceData.testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="bg-white p-8 md:p-10 rounded-2xl shadow-lg relative border border-gray-100 hover:border-violet-200 transition-all duration-300 hover:shadow-xl group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <div className="absolute top-6 left-6 text-8xl text-violet-200 opacity-30 group-hover:text-violet-300 transition-colors duration-300 font-serif">&quot;</div>
                <div className="relative z-10">
                  <p className="text-gray-700 text-lg leading-relaxed mb-8">{testimonial.content}</p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-violet-500 to-violet-700 flex items-center justify-center text-white font-bold text-sm mr-4">
                      {testimonial.author.charAt(0)}
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">{testimonial.author}</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-violet-700 to-violet-900 text-white relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
          <div className="absolute top-1/4 right-10 w-96 h-96 rounded-full bg-violet-500/20 blur-3xl animate-pulse-slow"></div>
          <div className="absolute bottom-1/4 left-10 w-96 h-96 rounded-full bg-violet-600/20 blur-3xl animate-pulse-slow"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] rounded-full bg-violet-400/10 blur-3xl"></div>
        </div>
        
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.span
            className="inline-flex items-center px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm text-white text-sm font-medium mb-6"
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="w-2 h-2 rounded-full bg-white animate-pulse mr-2"></span>
            Passez à l&apos;action
          </motion.span>
          
          <motion.h2 
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-violet-200"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {serviceData.cta.title}
          </motion.h2>
          
          <motion.p 
            className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {serviceData.cta.description}
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <Link 
              href={serviceData.cta.buttonLink} 
              className="btn-modern btn-lg btn-white inline-flex items-center group"
            >
              {serviceData.cta.buttonText}
              <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <Link 
              href="#services-list" 
              className="btn-modern btn-lg btn-outline inline-flex items-center group text-white border-white/40 hover:bg-white/10"
              onClick={(e) => {
                e.preventDefault();
                const servicesSection = document.getElementById('services-list');
                if (servicesSection) {
                  servicesSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              Voir nos services
              <FiArrowRight className="ml-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default ServiceDetailLayout;
