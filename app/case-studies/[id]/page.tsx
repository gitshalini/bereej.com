import { caseStudies } from '../case-studies';
import Image from 'next/image';
import { PagesHero } from '@/components/layout/pagesHero';

interface CaseStudyPageProps {
  params: { id: string };
}

export function generateStaticParams() {
  return caseStudies.map((cs) => ({
    id: cs.id,
  }));
}

export default function CaseStudyPage({ params }: CaseStudyPageProps) {
  const caseStudy = caseStudies.find((cs) => cs.id === params.id);

  if (!caseStudy) {
    return (
      <div className="text-center text-red-500 py-20">
        Case Study Not Found
      </div>
    );
  }

  const solutions = [];
  for (let i = 1; i <= 5; i++) {
    const titleKey = `solutitle${i}` as keyof typeof caseStudy;
    const paraKey = `solupara${i}` as keyof typeof caseStudy;
    if (caseStudy[titleKey] && caseStudy[paraKey]) {
      solutions.push({
        title: caseStudy[titleKey],
        para: caseStudy[paraKey],
      });
    }
  }
  const gridImages = [
    caseStudy.gridImage1,
    caseStudy.gridImage2,
    caseStudy.gridImage3,
    caseStudy.gridImage4,
  ].filter(Boolean);

  return (
        <div className="flex flex-col w-full">
          <PagesHero title={caseStudy.title} description={caseStudy.description}/>
          <section className="py-24 px-4 max-w-5xl mx-auto">
            <div className="mb-12 space-y-4">
                <h2 className="text-2xl font-bold mb-2">{caseStudy.Background}</h2>
                <p className="text-base text-gray-600">{caseStudy.bgpara1}</p>
                <p className="text-base text-gray-600">{caseStudy.bgpara2}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
              <div className="grid grid-cols-2 grid-rows-3 gap-4">
                  {gridImages.map((img,i)=>(
                  <div className={`relative aspect-[4/3] rounded-xl overflow-hidden ${
                      i % 2 === 1 ? 'sm:translate-y-6' : ''
                      }`}>
                  <Image
                      src={img}
                      alt=""
                      fill
                      className="object-cover rounded-lg"
                  />
                  </div>

                  ))}
              </div>
              <div>
                  <h2 className="text-2xl font-bold mb-4">{caseStudy.Solutions}</h2>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                      {solutions.map((item, i) => (
                          <li key={i}>
                              <strong>{item.title}</strong> {item.para}
                          </li>
                      ))}
                  </ul>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
              <div>
                  <h2 className="text-2xl font-bold mb-4">{caseStudy.Result}</h2>
                  <p className="text-base text-gray-600">
                      {caseStudy.respara}</p>            
              </div>
              <div className='relative'>
                  <Image
                      src={caseStudy.resImage}
                      alt="Image 1"
                      fill
                      className="object-cover rounded-lg"
                  />
              </div>
            </div>
          </section>
          
        </div>
  );
}
