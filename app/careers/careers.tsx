'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useRef } from 'react';
import { career } from './career';
import { BackgroundBeams } from '@/components/ui/background-beams';
import { AuroraBackground } from '@/components/ui/aurora-background';
import { Button } from '@/components/ui/button';

export default function CareerPage() {
  const openingsRef = useRef<HTMLDivElement | null>(null);
  const logos= [
    '/images/logo1.png',
    '/images/logo2.png',
    '/images/logo3.png',
    '/images/logo4.png',
    '/images/logo5.png',
    '/images/logo6.png',
    '/images/logo7.png'
  ]

  const scrollToOpenings = () => {
    openingsRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="w-full flex flex-col">
      <AuroraBackground>
        <div className='flex'>
          <motion.div
            initial={{ opacity: 0.0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.3,
              duration: 0.8,
              ease: "easeInOut",
            }}
            className="py-24"
          >
            <h1 className="max-w-3xl text-4xl sm:text-6xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-teal-800 via-indigo-800 to-purple-800"
            style={{lineHeight:"4.5rem"}}>Join Our Team</h1>
            <p className="text-xl text-black/80 my-12 max-w-3xl">
              Discover a rewarding career journey with us. We offer exciting opportunities, a collaborative environment, and the chance to make a meaningful impact in the world of IT Consulting.
            </p>
            <button className="absolute z-10 px-4 py-2 rounded-xl border border-neutral-600 text-black hover:text-white bg-white hover:bg-[rgba(0,118,255,0.9)] transition duration-200" onClick={scrollToOpenings}>Career Opportunities</button>
          </motion.div>
          <div className="relative w-full max-w-md px-6 hidden lg:block">
            <Image 
              src="/images/image1.webp" 
              alt="Background"
              width={300}
              height={200}
              className="absolute top-0 left-20 w-full z-0 rounded-xl"
              style={{ transform: 'rotate(-10deg)' }}
            />
            <Image 
              src="/images/Image.webp" 
              alt="Foreground"
              width={300}
              height={200}
              className="relative w-full z-10 rounded-xl shadow-lg top-28"
              style={{ transform: 'rotate(5deg)' }}
            />
          </div>
        </div>
        <BackgroundBeams />
      </AuroraBackground>
      {/* Logos Slider */}
      <section className="py-16 bg-white overflow-hidden">
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

      <section className="py-12 bg-gray-50">
        <h2 className="text-4xl font-bold mb-20 text-center text-transparent bg-clip-text bg-gradient-to-br from-indigo-800 via-purple-700 to-indigo-900">Benefits of working at Tech</h2>
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white shadow-xl rounded-2xl p-6 text-center">
            <h3 className="text-2xl font-bold mb-2">Development</h3>
            <p>We strive to support and nurture our employees. Professional growth and learning are our priorities</p>
          </div>
          <div className="bg-blue-900 text-white shadow-xl rounded-2xl p-6 text-center">
            <h3 className="text-2xl font-bold mb-2">Innovation</h3>
            <p>You'll work on exciting projects and leverage cutting-edge evolving technologies</p>
          </div>
          <div className="bg-white shadow-xl rounded-2xl p-6 text-center">
            <h3 className="text-2xl font-bold mb-2">Team Spirit</h3>
            <p>Our team is like a family. We believe in teamwork and mutual support</p>
          </div>
        </div>
      </section>

      <section ref={openingsRef} className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-20 text-center text-transparent bg-clip-text bg-gradient-to-br from-indigo-800 via-purple-700 to-indigo-900">Currently available positions at Tech</h2>
          <div className="space-y-6 max-w-6xl mx-auto">
            {career.map((job, index) => (
              <div key={index} className="border rounded-xl p-6 flex flex-col md:flex-row justify-between items-center shadow">
                <div className="text-center md:text-left">
                  <h3 className="text-2xl font-semibold">{job.title}</h3>
                  <p className="text-gray-600">{job.location} | Full-time</p>
                </div>
                <Link 
                  key={job.id} 
                  href={`/careers/${job.id}`} 
                  className="block p-6 rounded-lg shadow hover:shadow-lg transition-shadow duration-300 bg-primary hover:bg-primary/90 text-white"
                >Apply
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
