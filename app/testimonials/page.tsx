import { Star } from 'lucide-react';
import { testimonials } from './testimonial';
import { PagesHero } from '@/components/layout/pagesHero';
import { HoverEffect } from '@/components/ui/card-hover-effect';

export const metadata = {
  title: 'Testimonials - Bereej Tech',
};

export default function TestimonialPage() {
  return (
    <div className="w-full">
      <PagesHero title='Testimonials' description='Welcome to our Testimonials page, where we let our satisfied clients and customers speak for us.'/>
      <div className='max-w-7xl mx-auto py-24'>
        <HoverEffect items={testimonials} />
      </div>
    </div>
  );
}
