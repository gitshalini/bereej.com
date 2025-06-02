"use client";
import Services from "@/components/home/Services";
import CaseStudiesPreview from "@/components/home/CaseStudiesPreview";
import { PagesHero } from "@/components/layout/pagesHero";
import ContactSection from "@/components/home/contact";
import { motion } from 'framer-motion';

export default function ChoosePage(){

    return(
        <div className="w-full flex flex-col">
            <PagesHero title="We are more than just a remarkable company" description="We are architects of innovation, trailblazers of technological advancement, and partners in your success. As a dynamic and forward-thinking organization, we are dedicated to reshaping industries and empowering businesses to navigate the digital age with confidence."/>
            <div className="max-w-6xl mx-auto py-20">
                <section className="w-full bg-background">
                    <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center px-4">
                    <motion.div className="w-full">
                        <motion.h2 className="text-4xl font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-indigo-600 to-purple-600">We are more than just a remarkable company</motion.h2>
                        <motion.p className="text-muted-foreground">
                       We are architects of innovation, trailblazers of technological advancement, and partners in your success. As a dynamic and forward-thinking organization, we are dedicated to reshaping industries and empowering businesses to navigate the digital age with confidence.
                        </motion.p>
                    </motion.div>
                    <div className="px-12">
                        <div className="inline-flex py-4 gap-4" style={{borderBottom: '1px solid #ddd'}}>
                            <h2 className="text-6xl font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-indigo-600 to-purple-600">5+</h2>
                            <p className="text-muted-foreground items-center flex">
                            Years of experience in software development
                            </p>
                        </div>
                        <div className="inline-flex py-4 gap-4">
                            <h2 className="text-6xl font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-indigo-600 to-purple-600">30+</h2>
                            <p className="text-muted-foreground items-center flex">
                            Amassed a portfolio of numerous successfully completed projects
                            </p>
                        </div>
                    </div>
                    </div>
                </section>
            </div>
            <Services />
            <CaseStudiesPreview />
            <ContactSection/>
      </div>
    );
}