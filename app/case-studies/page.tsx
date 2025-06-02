import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
// import { Card, CardContent } from '@/components/ui/card';
import { caseStudies } from './case-studies';
import {PagesHero} from '@/components/layout/pagesHero';
import { FocusCards } from '@/components/ui/focus-cards';

export const metadata: Metadata = {
  title: 'Case Studies - Bereej Tech',
};


export default function CaseStudiesPage() {
  return (
    <div className="flex flex-col w-full">
      <PagesHero title='Case Studies' description='Explore the transformative journey as Tech collaboratively empowers clients to achieve their digital innovation goals.'/>
      <section className='py-24'>
      <FocusCards cards={
            caseStudies.map(({ id,title,description, image,category }) => ({ id,title,description, image,category })) as Pick<typeof caseStudies[number], "id" | "title" | "description" | "image" | "category">[]
          }/>
          </section>
    </div>
  );
}