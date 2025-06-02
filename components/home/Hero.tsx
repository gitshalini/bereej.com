'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { TypewriterEffect } from '../ui/typewriter-effect';
import { BackgroundBeams } from '../ui/background-beams';


export default function Hero() {
  const words = [
    {
      text: "Transforming",
    },
    {
      text: "ideas",
    },
    {
      text: "into",
    },
    {
      text: "inspiring",
    },
    {
      text: "experiences.",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];
  const [mounted, setMounted] = useState(false);
  const logos= [
    '/images/logo1.png',
    '/images/logo2.png',
    '/images/logo3.png',
    '/images/logo4.png',
    '/images/logo5.png',
    '/images/logo6.png',
    '/images/logo7.png'
  ]

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (<>
    <div className="relative flex items-center min-h-screen gradient-bg pt-24">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url("/images/Home_Bg.webp")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      ></div>
      <div className="absolute inset-0 z-0"></div>
      
      <div className="container mx-auto py-6 px-4 relative z-10">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
          <TypewriterEffect words={words} />
            
            <motion.p 
              className="text-xl text-background mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Your one-stop digital software solutions company. At  Bereej Tech, we thrive on transforming your ideas into cutting-edge digital realities.
            </motion.p>
            
            <motion.div 
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <button className="shadow-[0_4px_14px_0_rgb(0,118,255,39%)] hover:shadow-[0_6px_20px_rgba(0,118,255,23%)] hover:bg-[rgba(0,118,255,0.9)] px-8 py-2 bg-[#0070f3] rounded-md text-white font-light transition duration-200 ease-linear">
                <Link href="/contact">Start a Project</Link>
              </button>
              <button className="px-4 py-2 rounded-xl border border-neutral-600 text-black hover:text-white bg-white hover:bg-[rgba(0,118,255,0.9)] transition duration-200">
                <Link href="/case-studies">Our Work</Link>
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>
      <BackgroundBeams />
    </div>
          {/* Logos Slider */}
          <section className="py-10 bg-white overflow-hidden">
            <div className="relative w-full">
              <div className="flex w-[200%] animate-scroll">
                <div className="flex gap-8 w-1/2 justify-around items-center">
                  {logos.map((logo, index) => (
                    <Image
                      key={`logo1-${index}`}
                      src={logo}
                      alt={`Logo ${index}`}
                      width={80}
                      height={50}
                      className="object-contain"
                    />
                  ))}
                </div>
                <div className="flex gap-8 w-1/2 justify-around items-center">
                  {logos.map((logo, index) => (
                    <Image
                      key={`logo2-${index}`}
                      src={logo}
                      alt={`Logo ${index}`}
                      width={80}
                      height={50}
                      className="object-contain"
                    />
                  ))}
                </div>
              </div>
            </div>
          </section>
    </>
  );
}