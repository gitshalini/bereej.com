'use client';

import { useRef } from 'react';
import { useInView } from 'framer-motion';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { services } from '@/app/services/services';
import { BentoGrid, BentoGridItem } from "../ui/bento-grid";

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px 0px" });

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  const serviceIcons:{[key: string]: string} = {
  'Website-Maintenance': '/images/web-maintenance.png',
  'IT-Consultancy': "/images/IT-consulting.png",
  'QA-Testing': '/images/Q&A-Testing.jpg',
  'Account-Security': '/images/Account-Security.png'
};

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
            How we help you
          </motion.h2>
          <motion.p 
            className="text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            We are committed to staying at the forefront of technological innovation, constantly exploring emerging trends and incorporating the latest   advancements into our solutions.
          </motion.p>
        </div>
        <BentoGrid className="mb-12 w-full">
          {services.slice(-4).map((item, index) => {
            const iconSrc = serviceIcons[item.id];
            return (
              <BentoGridItem
                key={index}
                title={item.title}
                description={item.description}
                icon={
                  iconSrc ? (
                    <img src={iconSrc} alt={item.title} className="w-50 mx-auto" style={{minHeight: '100px', height: 'auto',maxHeight: '120px'}} />
                  ) : null
                }
                learnMoreHref={`/services/${item.id}`}
                className={index === 4 ? "md:col-span-2" : ""}
              />
            );
          })}
        </BentoGrid>
        <div className="text-center">
          <button className="shadow-[0_4px_14px_0_rgb(0,118,255,39%)] hover:shadow-[0_6px_20px_rgba(0,118,255,23%)] hover:bg-[rgba(0,118,255,0.9)] px-8 py-2 bg-[#0070f3] rounded-md text-white font-light transition duration-200 ease-linear">
            <Link href="/services">View All Services</Link>
          </button>
        </div>
      </div>
    </section>
  );
}