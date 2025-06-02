import { Metadata } from 'next';
import Link from 'next/link';
import {services} from './services';
import { PagesHero } from '@/components/layout/pagesHero';

export const metadata: Metadata = {
  title: 'Services - Bereej Tech',
};

export default function ServicesPage() {
  return (
    <div className="flex flex-col w-full">
      <PagesHero title="Services" description="We believe in a collaborative approach, working closely with our clients to understand their goals and target audience."/>

      {/* Services List */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {services.map((service) => (
                <Link 
                  key={service.id} 
                  href={`/services/${service.id}`} 
                  className="block bg-card p-6 rounded-lg shadow hover:shadow-lg transition-shadow duration-300 hover:text-primary"
                >
                  <h2 className="text-xl font-semibold mb-2">{service.title}</h2>
                  <p className="text-muted-foreground">{service.description}</p>
                </Link>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}