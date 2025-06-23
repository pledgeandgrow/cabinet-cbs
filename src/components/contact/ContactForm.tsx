'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiSend, FiCheck, FiUser, FiMail, FiPhone, FiBriefcase, FiMessageSquare, FiHelpCircle } from 'react-icons/fi';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    subject: '',
    message: ''
  });
  
  const [formStatus, setFormStatus] = useState({
    isSubmitting: false,
    isSubmitted: false,
    error: null as string | null
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    setFormStatus({
      isSubmitting: true,
      isSubmitted: false,
      error: null
    });
    
    try {
      // Send the form data to our API endpoint
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.error || 'Une erreur est survenue lors de l\'envoi du message');
      }
      
      setFormStatus({
        isSubmitting: false,
        isSubmitted: true,
        error: null
      });
      
      // Reset form after successful submission
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        subject: '',
        message: ''
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setFormStatus(prev => ({
          ...prev,
          isSubmitted: false
        }));
      }, 5000);
      
    } catch (error) {
      console.error('Form submission error:', error);
      
      setFormStatus({
        isSubmitting: false,
        isSubmitted: false,
        error: error instanceof Error ? error.message : 'Une erreur est survenue. Veuillez réessayer plus tard.'
      });
    }
  };
  
  return (
    <section id="contact-form" className="py-12 md:py-16 bg-white relative overflow-hidden">
      {/* Éléments décoratifs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-violet-50 rounded-full opacity-70 blur-3xl"></div>
        <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-violet-50 rounded-full opacity-70 blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl shadow-xl overflow-hidden border border-gray-100"
          >
            <div className="p-8 md:p-10">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-full bg-violet-100 flex items-center justify-center mr-4">
                  <FiMessageSquare className="h-6 w-6 text-violet-600" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-violet-700 to-violet-500">
                  Envoyez-nous un message
                </h2>
              </div>
              
              <p className="text-gray-600 mb-8 pl-16">
                Remplissez le formulaire ci-dessous et nous vous répondrons dans les plus brefs délais.
              </p>
              
              {formStatus.isSubmitted ? (
                <motion.div 
                  className="bg-green-50 p-4 rounded-xl mb-8 border border-green-100 shadow-sm"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex items-center">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                      <FiCheck className="h-5 w-5 text-green-600" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium text-green-800">Message envoyé !</h3>
                      <p className="text-green-700 mt-1">
                        Votre message a été envoyé avec succès. Nous vous répondrons dans les plus brefs délais.
                      </p>
                    </div>
                  </div>
                </motion.div>
              ) : null}
              
              {formStatus.error ? (
                <motion.div 
                  className="bg-red-50 p-4 rounded-xl mb-8 border border-red-100 shadow-sm"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex items-center">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-red-100 flex items-center justify-center">
                      <FiHelpCircle className="h-5 w-5 text-red-600" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium text-red-800">Erreur</h3>
                      <p className="text-red-700 mt-1">
                        {formStatus.error}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ) : null}
              
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="relative">
                    <div className="flex items-center mb-2">
                      <FiUser className="text-violet-500 mr-2" />
                      <label htmlFor="name" className="text-sm font-medium text-gray-700">
                        Nom complet *
                      </label>
                    </div>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg shadow-sm focus:ring-2 focus:ring-violet-300 focus:border-violet-500 transition-all duration-200"
                      placeholder="Votre nom"
                    />
                  </div>
                  
                  <div className="relative">
                    <div className="flex items-center mb-2">
                      <FiMail className="text-violet-500 mr-2" />
                      <label htmlFor="email" className="text-sm font-medium text-gray-700">
                        Email *
                      </label>
                    </div>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg shadow-sm focus:ring-2 focus:ring-violet-300 focus:border-violet-500 transition-all duration-200"
                      placeholder="votre@email.com"
                    />
                  </div>
                  
                  <div className="relative">
                    <div className="flex items-center mb-2">
                      <FiBriefcase className="text-violet-500 mr-2" />
                      <label htmlFor="company" className="text-sm font-medium text-gray-700">
                        Entreprise
                      </label>
                    </div>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg shadow-sm focus:ring-2 focus:ring-violet-300 focus:border-violet-500 transition-all duration-200"
                      placeholder="Nom de votre entreprise"
                    />
                  </div>
                  
                  <div className="relative">
                    <div className="flex items-center mb-2">
                      <FiPhone className="text-violet-500 mr-2" />
                      <label htmlFor="phone" className="text-sm font-medium text-gray-700">
                        Téléphone
                      </label>
                    </div>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg shadow-sm focus:ring-2 focus:ring-violet-300 focus:border-violet-500 transition-all duration-200"
                      placeholder="+223 XX XX XX XX"
                    />
                  </div>
                </div>
                
                <div className="relative">
                  <div className="flex items-center mb-2">
                    <FiHelpCircle className="text-violet-500 mr-2" />
                    <label htmlFor="subject" className="text-sm font-medium text-gray-700">
                      Sujet *
                    </label>
                  </div>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg shadow-sm focus:ring-2 focus:ring-violet-300 focus:border-violet-500 transition-all duration-200 bg-white"
                  >
                    <option value="">Sélectionnez un sujet</option>
                    <option value="consultation">Demande de consultation</option>
                    <option value="information">Demande d&apos;information</option>
                    <option value="devis">Demande de devis</option>
                    <option value="autre">Autre</option>
                  </select>
                </div>
                
                <div className="relative">
                  <div className="flex items-center mb-2">
                    <FiMessageSquare className="text-violet-500 mr-2" />
                    <label htmlFor="message" className="text-sm font-medium text-gray-700">
                      Message *
                    </label>
                  </div>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg shadow-sm focus:ring-2 focus:ring-violet-300 focus:border-violet-500 transition-all duration-200"
                    placeholder="Votre message..."
                  ></textarea>
                </div>
                
                <div className="flex justify-end">
                  <button
                    type="submit"
                    disabled={formStatus.isSubmitting}
                    className={`btn-modern ${formStatus.isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                  >
                    {formStatus.isSubmitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Envoi en cours...
                      </>
                    ) : (
                      <>
                        <FiSend className="mr-2" />
                        Envoyer le message
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
