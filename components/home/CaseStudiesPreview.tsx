'use client';

import { useRef } from 'react';
import { useInView } from 'framer-motion';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { caseStudies } from '@/app/case-studies/case-studies';
import { FocusCards } from '../ui/focus-cards';

export default function CaseStudiesPreview() {
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
            Our latest projects
          </motion.h2>
        </div>

        <FocusCards
          cards={
            caseStudies.slice(0,3).map(({ id,title,description, image,category }) => ({ id,title,description, image,category })) as Pick<typeof caseStudies[number], "id" | "title" | "description" | "image" | "category">[]
          }
        />
        <div className="text-center">
          <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 transition duration-200 rounded-lg text-white shadow-[0px_2px_0px_0px_#FFFFFF40_inset]">
            <Link href="/case-studies">View All Case Studies</Link>
          </button>
        </div>
      </div>
    </section>
  );
}