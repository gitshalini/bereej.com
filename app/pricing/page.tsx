'use client';

import { useState } from 'react';
import { Check } from 'lucide-react';
import clsx from 'clsx';
import Link from 'next/link';
import Testimonials from '@/components/home/Testimonials';

export default function PricingPage() {
  const [isAnnual, setIsAnnual] = useState(false);

  const plans = [
    {
      name: 'Basic',
      desc: 'Our Basic Plan provides you with the essential guidance and support needed.',
      month: 'month',
      monthlyPrice: 50,
      annualPrice: 650,
      annual: 'annual',
      What_included: 'What’s included:',
      features: ['Email ticketing', 'Customer Management', 'Mobile Apps', 'Email Support'],
      popular: false,
    },
    {
      name: 'Advanced',
      desc: 'Plan offers a comprehensive suite of IT solutions tailored for growing businesses.',
      month: 'month',
      monthlyPrice: 160,
      annualPrice: 860,
      annual: 'annually',
      What_included: 'What’s included:',
      features: ['Email ticketing', 'Customer Management', 'Mobile Apps', 'Email Support'],
      popular: true,
    },
    {
      name: 'Premium',
      desc: 'Our Premium IT Plan is designed for organizations that demand IT services',
      month: 'month',
      monthlyPrice: 120,
      annualPrice: 920,
      annual: 'annual',
      What_included: 'What’s included:',
      features: ['Email ticketing', 'Customer Management', 'Mobile Apps', 'Email Support'],
      popular: false,
    },
  ];

  return (
    <div className="w-full flex flex-col">
      <section className="py-24 pt-32 bg-gradient-to-r from-blue-500 via-indigo-600 to-purple-500 mb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-white">Our Pricing</h2>
            <p className="text-xl text-white/80 mb-8">
              At Tech, we believe in transparent and competitive pricing to ensure our customers receive the best value for their needs.
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl font-bold mb-4">Choose your plan now</h1>
        <p className="text-gray-600 mb-10 max-w-xl mx-auto">
          Monthly and annual pricing are two different billing options offered by many businesses and service providers, including software companies, subscription services, and more.
        </p>

        {/* Toggle Switch */}
        <div className="flex justify-center items-center gap-3">
          <span className={clsx("text-lg", !isAnnual && "font-semibold text-indigo-600")}>Monthly</span>
          <div
            onClick={() => setIsAnnual(!isAnnual)}
            className="w-14 h-8 bg-purple-950 rounded-full p-1 cursor-pointer flex items-center"
          >
            <div
              className={clsx(
                'w-6 h-6 rounded-full bg-white shadow-md transition-transform',
                isAnnual ? 'translate-x-6' : 'translate-x-0'
              )}
            />
          </div>
          <span className={clsx("text-lg", isAnnual && "font-semibold text-indigo-600")}>Annually</span>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto py-24">
          {plans.map((plan, index) => {
            const price = isAnnual ? plan.annualPrice : plan.monthlyPrice;
            const text = isAnnual ? plan.annual : plan.month;

            return (
              <div
                key={index}
                className={clsx(
                  'flex flex-col p-8 rounded-2xl border shadow-md items-center transition-all duration-300 transform hover:scale-105 hover:shadow-lg h-full',
                  plan.popular
                    ? 'bg-blue-900 text-white border-blue-700 scale-105'
                    : 'bg-white text-gray-800'
                )}
              >
                {/* Popular Badge with placeholder */}
                <div className="min-h-[32px] mb-2">
                  {plan.popular ? (
                    <div className="text-sm bg-yellow-300 text-yellow-900 px-3 py-1 rounded-full font-semibold">
                      Popular
                    </div>
                  ) : (
                    <div className="invisible text-sm px-3 py-1">placeholder</div>
                  )}
                </div>

                <h2 className="text-2xl font-bold mb-4">{plan.name}</h2>

                {/* Consistent height for description */}
                <p className="text-lg font-extrabold text-muted-foreground mb-8 min-h-[72px]">
                  {plan.desc}
                </p>

                <p className="text-2xl font-extrabold mb-4"><span className='align-top text-lg relative'>$</span><span className='text-5xl'>{price}</span>/{text}</p>
                <h3 className="text-lg font-bold mb-4">{plan.What_included}</h3>

                <ul className="text-sm mb-6 space-y-2">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-green-500" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link
                  href={'/contact'}
                  className={clsx(
                    'mt-auto px-6 py-2 rounded-lg font-semibold transition',
                    plan.popular
                      ? 'bg-white text-blue-900 hover:bg-gray-100'
                      : 'bg-blue-600 text-white hover:bg-blue-700'
                  )}
                >
                  Get Started
                </Link>
              </div>
            );
          })}
        </div>

        <Testimonials />
      </div>
    </div>
  );
}
