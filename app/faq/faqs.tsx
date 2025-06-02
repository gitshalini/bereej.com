"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { BackgroundBeams } from '@/components/ui/background-beams';
import { AnimatePresence } from 'framer-motion';

const faqData = [
  {
    question: "How do I get started with your consulting and services?",
    answer: "To begin, please reach out to us via our contact form or phone number on our website. We'll schedule an initial consultation to discuss your specific requirements and create a tailored strategy for your business."
  },
  {
    question: "Can you provide examples of successful projects or case studies?",
    answer: "Yes, we can provide references and case studies upon request. Feel free to contact us for more information."
  },
  {
    question: "What types of Custom Software Development do you offer?",
    answer: "We provide custom software development services tailored to your specific needs. Whether you need a web application, mobile app, or enterprise software, we can design, develop, and maintain the software solution that aligns with your business goals."
  },
  {
    question: "What kind of Cybersecurity Solutions do you provide?",
    answer: "Our Cybersecurity Solutions encompass a range of services, including risk assessments, security audits, threat detection and response, and employee training. We help protect your data, systems, and networks from cyber threats and breaches."
  }
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full">
      <div className="relative flex items-center min-h-screen gradient-bg pt-24">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url("/images/faq.webp")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >   </div>
        <div className="absolute inset-0 z-0"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <motion.h1 
                className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-background mb-6 text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Frequently asked questions
              </motion.h1>
              
            </motion.div>
          </div>
        </div>
        <BackgroundBeams />
    </div>


      {/* FAQ Accordion */}
      <section className='max-w-3xl mx-auto p-6 py-24'>
        <h2 className="text-3xl md:text-5xl font-bold mb-20">The most common questions</h2>
        {faqData.map((item, index) => (
          <div key={index} className="mb-4 border rounded-lg">
            <button
              onClick={() => toggleAccordion(index)}
              className="w-full flex justify-between items-center p-6 text-left focus:outline-none"
            >
              <span className="font-medium">{item.question}</span>
              <span>{openIndex === index ? '-' : '+'}</span>
            </button>
            <AnimatePresence initial={false}>
              {openIndex === index && (
                <motion.div
                  key="answer"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.6, ease: 'easeInOut' }}
                  layout
                  className="p-4 text-gray-700 border-t bg-gray-50"
                >
                  {item.answer}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </section>
    </div>
  );
}
