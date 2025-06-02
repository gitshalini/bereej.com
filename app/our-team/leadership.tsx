'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Linkedin } from 'lucide-react';
import { PagesHero } from '@/components/layout/pagesHero';
import ContactSection from '@/components/home/contact';
import CaseStudiesPreview from '@/components/home/CaseStudiesPreview';

export default function TeamPage() {
  const teamMembers = [
    {
      name: 'Sudeep Khire',
      role: 'Founder and Director',
      image: '/images/sudeep.png',
      linkedin: 'https://www.linkedin.com/in/sudeep-khire/',
    },
    {
      name: 'Advait Joshi',
      role: 'Solution Architect',
      image: '/images/Advait.jpeg',
    },
    {
      name: 'Rakesh Roshan',
      role: 'Head of Technology',
      image: '/images/dummy-man.png',
      linkedin: 'https://www.linkedin.com/in/rakesh-roshan-3327994/',
    },
    {
      name: 'Kuldeep Walujkar',
      role: 'Head  of Business Development',
      image: '/images/Kuldeep.jpg',
      linkedin: 'https://www.linkedin.com/in/kuldeep-walujkar-2357ab20/',
    },
  ];

  return (
    <div className="w-full flex flex-col">
      <PagesHero title='Get to know Our Team'/>

      {/* Team Members Section */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {teamMembers.map((member, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-xl shadow-lg text-center relative hover:shadow-xl transition-shadow duration-300"
          >
            {member.linkedin && (
              <Link
                href={member.linkedin}
                target="_blank"
                className="absolute top-4 right-4 text-blue-600 hover:text-blue-800"
              >
                <Linkedin />
              </Link>
            )}
            <div className="mx-auto mb-4 w-[150px] h-[150px] rounded-full overflow-hidden relative">
              <Image
                src={member.image}
                alt={member.name}
                fill
                sizes="150px"
                className="object-cover"
              />
            </div>
            <h3 className="text-lg md:text-xl font-semibold">{member.name}</h3>
            <p className="text-gray-600 text-sm">{member.role}</p>
          </div>
          ))}
        </div>
      </section>
      
      <CaseStudiesPreview/>
      <ContactSection/>
    </div>
  );
}
