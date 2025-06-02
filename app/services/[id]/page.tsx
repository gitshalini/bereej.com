// app/service/[id]/page.tsx
import { services } from '../services';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import CaseStudiesPreview from '@/components/home/CaseStudiesPreview';
import { PagesHero } from '@/components/layout/pagesHero';

interface ServicePageProps {
  params: { id: string };
}

export function generateStaticParams() {
  return services.map((serve) => ({
    id: serve.id,
  }));
}

export default function ServicePage({ params }: ServicePageProps) {
  const service = services.find((serve) => serve.id === params.id);

  if (!service) {
    notFound(); 
  }

  return (
    <div className="flex flex-col w-full">
      <PagesHero title={service.title} description={service.description}/>
      <section className="py-24 px-4 max-w-5xl mx-auto">
        <div className="mb-12 space-y-4">
          <h2 className="text-2xl font-bold mb-2">{service.Service}</h2>
          <p className="text-base text-gray-600">{service.servicedesc}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
          <div className="relative w-full h-64">
            <Image
              src="/images/sw-result 1.webp"
              alt="Result"
              fill
              className="object-cover rounded-lg"
            />
          </div>
          <div>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              {service.features.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4">{service.Benefits}</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
              {service.Benefitdata.map((item, i) => (
              <li key={i}>
                  <strong>{item.title}</strong> {item.description}
              </li>
              ))}
          </ul>
        </div>
      </section>
      <CaseStudiesPreview/>
    </div>
  );
}
