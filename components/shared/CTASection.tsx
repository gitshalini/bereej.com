'use client';

import { useRef } from 'react';
import { useInView } from 'framer-motion';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

interface CTASectionProps {
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
  secondaryButton?: {
    text: string;
    link: string;
  };
}

export default function CTASection({
  title,
  description,
  buttonText,
  buttonLink,
  secondaryButton,
}: CTASectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px 0px' });

  return (
    <section
      ref={ref}
      className="py-24 text-white bg-gradient-to-r from-red-400 via-blue-500 to-purple-600"
    >
      <div className="container mx-auto px-4 text-center max-w-4xl">
        <motion.h2
          className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {title}
        </motion.h2>

        <motion.p
          className="text-lg sm:text-xl opacity-90 mx-auto mb-8 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {description}
        </motion.p>

        <motion.div
          className="flex flex-wrap justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Button asChild size="lg" variant="secondary" className="text-black font-semibold">
            <Link href={buttonLink}>{buttonText}</Link>
          </Button>

          {secondaryButton && (
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10"
            >
              <Link href={secondaryButton.link}>{secondaryButton.text}</Link>
            </Button>
          )}
        </motion.div>
      </div>
    </section>
  );
}
