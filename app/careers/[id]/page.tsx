
import { career } from '../career';
import { notFound } from 'next/navigation';
import JobForm from '@/components/jobfrom';
import { PagesHero } from '@/components/layout/pagesHero';

interface CareerPageProps {
  params: { id: string };
}

export function generateStaticParams() {
  return career.map((job) => ({
    id: job.id,
  }));
}
export const metadata = {
  title: 'Careers - Bereej Tech',
};

export default function JobDetailPage({ params }: CareerPageProps) {
  const job = career.find((c) => c.id === params.id);
  if (!job) notFound();

  return (
    <div className="w-full">
      <PagesHero title={job.title}/>

      {/* Content Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row gap-20">
          
          {/* Left Column */}
          <div className="lg:w-2/3 space-y-8">
            <div>
              <h2 className="text-2xl font-semibold mb-2">{job.Job_description}</h2>
              <p className="text-gray-700">{job.Job_description_para}</p>
            </div>
            <div>
              <h2 className="text-2xl font-semibold mb-2">{job.Key_Responsibilities}</h2>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                {job.Key_Responsibilities_list.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-semibold mb-2">{job.Requirements}</h2>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                {job.Requirements_list.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-semibold mb-2">{job.What_We_Offer}</h2>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                {job.offer_list.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column - Job Form (Client Component) */}
          <div className="lg:w-1/3">
            <JobForm />
          </div>
        </div>
      </section>
    </div>
  );
}
