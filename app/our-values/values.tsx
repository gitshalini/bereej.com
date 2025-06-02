import Image from "next/image";
import ContactSection from "@/components/home/contact";
import Testimonials from "@/components/home/Testimonials";
import { PagesHero } from "@/components/layout/pagesHero";

export default function Ourvaluepage(){
      const logos= [
        '/images/logo1.png',
        '/images/logo2.png',
        '/images/logo3.png',
        '/images/logo4.png',
        '/images/logo5.png',
        '/images/logo6.png',
        '/images/logo7.png'
        ]

    return(
        <div className="w-full flex flex-col">
            <PagesHero title="Our Values" description="Our values are rooted in integrity, innovation, and client-centricity, driving us to deliver exceptional results while fostering long-lasting partnerships."/>
            <section className="py-16 bg-white overflow-hidden">
                <div className="relative w-full">
                <div className="flex w-[200%] animate-scroll">
                    <div className="flex gap-8 w-1/2 justify-around items-center">
                    {logos.map((logo, index) => (
                        <Image
                        key={`logo1-${index}`}
                        src={logo}
                        alt={`Logo ${index}`}
                        width={80}
                        height={50}
                        className="object-contain"
                        />
                    ))}
                    </div>
                    <div className="flex gap-8 w-1/2 justify-around items-center">
                    {logos.map((logo, index) => (
                        <Image
                        key={`logo2-${index}`}
                        src={logo}
                        alt={`Logo ${index}`}
                        width={80}
                        height={50}
                        className="object-contain"
                        />
                    ))}
                    </div>
                </div>
                </div>
            </section>

            <div className="w-full bg-gradient-to-br from-white via-blue-50 to-white">
                <section className="w-full py-12">
                    <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center px-4">
                    {/* Image */}
                    <div className="w-full flex justify-center">
                        <img
                        src="/images/sudeep.png"
                        alt="Sudeep"
                        width={300}
                        height={200}
                        className="rounded-xl"
                        />
                    </div>
                    {/* Text */}
                    <div className="px-12">
                        <p className="text-purple-600 mb-4">About Company</p>
                        <h2 className="text-4xl font-semibold mb-4">Inception & Vision</h2>
                        <p className="text-muted-foreground">
                        Our journey began in 2019 when a group of visionary IT professionals came together with a shared dream – to bridge the gap between technology and business success. We recognized that the world of IT was constantly evolving, and businesses needed a partner who could not only keep pace with change but also harness its potential.
                        </p>
                    </div>
                    </div>
                </section>

                <section className="w-full py-12">
                    <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center px-4">
                    {/* Text */}
                    <div className="px-12">
                        <p className="text-purple-600 mb-4">About Company</p>
                        <h2 className="text-4xl font-semibold mb-4">Building Expertise</h2>
                        <p className="text-muted-foreground">
                        In the early years, we invested heavily in building our expertise. Our team tirelessly honed their skills, staying on the cutting edge of emerging technologies, and mastering the intricacies of IT strategy, software development, infrastructure optimization, and more.
                        </p>
                    </div>
                    {/* Image */}
                    <div className="w-full flex justify-center">
                        <img
                        src="/images/value.webp"
                        alt="Settings"
                        width={300}
                        height={200}
                        className="rounded-xl"
                        />
                    </div>
                    </div>
                </section>
                <section className="py-20 bg-gray-50">
                    <h2 className="text-4xl font-bold mb-10 text-center text-transparent bg-clip-text bg-gradient-to-r from-teal-800 via-indigo-800 to-purple-800">Our Values</h2>
                    <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-white shadow-xl rounded-2xl p-6 text-center">
                        <h3 className="text-2xl font-bold mb-2">Development</h3>
                        <p>We strive to support and nurture our employees. Professional growth and learning are our priorities</p>
                    </div>
                    <div className="bg-blue-900 text-white shadow-xl rounded-2xl p-6 text-center">
                        <h3 className="text-2xl font-bold mb-2">Innovation</h3>
                        <p>You'll work on exciting projects and leverage cutting-edge evolving technologies</p>
                    </div>
                    <div className="bg-white shadow-xl rounded-2xl p-6 text-center">
                        <h3 className="text-2xl font-bold mb-2">Team Spirit</h3>
                        <p>Our team is like a family. We believe in teamwork and mutual support</p>
                    </div>
                    </div>
                </section>
            </div>
            <Testimonials/>
            <ContactSection/>
      </div>
    );
}