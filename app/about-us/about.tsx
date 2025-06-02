'use client';
import Testimonials from "@/components/home/Testimonials";
import { PagesHero } from "@/components/layout/pagesHero";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import AboutCards from "./meteors";

const content = [
  {
    title: "Experience excellence with our expert team",
    description:
      "We take pride in our exceptional team of experts who bring a wealth of experience to every project. With years of industry knowledge and a passion for innovation, our team is dedicated to delivering top-notch solutions that exceed your expectations.",
    content: (
        <div className="flex h-full w-full items-center justify-center text-white">
        <img
          src="/images/Trophy.webp"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="Trophy"
        />
      </div>
    ),
  },
  {
    title: "Customized solutions for your unique needs",
    description:
      "One size does not fit all, and we understand that your needs are unique. That's why we offer fully customized solutions tailored to your specific requirements. From the initial consultation to the final implementation, we collaborate closely with you to ensure the perfect fit for your goals.",
    content: (
      <div className="flex h-full w-full items-center justify-center text-white">
            <img
            src="/images/Settings.webp"
            width={300}
            height={300}
            className="h-full w-full object-cover"
            alt="Setting"
            />
        </div>
    ),
  },
  {
    title: "Transparent communication and collaboration",
    description:
      "We take pride in our exceptional team of experts who bring a wealth of experience to every project. With years of industry knowledge and a passion for innovation, our team is dedicated to delivering top-notch solutions that exceed your expectations.",
    content: (
      <div className="flex h-full w-full items-center justify-center text-white">
            <img
            src="/images/Bubble.webp"
            width={300}
            height={300}
            className=""
            alt="Bubble"
            />
        </div>
    ),
  },
];

export default function AboutUsPage() {
  return (
    <div className="w-full flex flex-col">
      <PagesHero title="About Us" description="We help online businesses grow Together."/>
      <section className="py-24 pt-32">
        <AboutCards/>
      </section>
      <div className="w-full py-4">
        <StickyScroll content={content} />
      </div>
        <Testimonials/>
    </div>
  );
}
