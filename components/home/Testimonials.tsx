'use client';

import { useRef, useState } from 'react';
import { useInView } from 'framer-motion';
import { motion } from 'framer-motion';
import { testimonials } from '@/app/testimonials/testimonial';
import { InfiniteMovingCards } from '../ui/infinite-moving-cards';

export default function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px 0px" });


  return (
    <section ref={ref} className="py-12 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-3xl sm:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
          >
            Trusted by more than 1000+ company’s around the world
          </motion.h2>
          <motion.p 
            className="text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            We are more than just a business; we are a community driven by our passion for serving our customers with excellence. Our success is intertwined with the success of each individual and company we proudly call our customers
          </motion.p>
        </div>
        <InfiniteMovingCards
          items={testimonials.map((item) => ({
              quote: item.content,
              name: item.author,
              title: `${item.initials}`,
            }))}
          direction="left"
          speed="slow"
        />
      </div>
    </section>
  );
}