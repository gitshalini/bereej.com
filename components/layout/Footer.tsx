import Link from 'next/link';
import { Mail, MapPin, XIcon, LinkedinIcon } from 'lucide-react';
import Image from 'next/image';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-black text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className='flex mb-4'>
              <Link href="/" className="text-2xl font-bold text-primary mb-4">
                <Image
                  src="/images/logo.png"
                  alt="Bereej Tech"
                  width={120}
                  height={120}
                  style={{ display: 'block' }}
                />
              </Link>
            </div>
            <div className="flex space-x-4">
              <Link href="https://www.linkedin.com/company/bereej/posts/?feedView=all" className="text-primary-foreground/80 hover:text-primary-foreground">
                <LinkedinIcon className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link href="https://x.com/BereejTech" target="_blank" className="text-primary-foreground/80 hover:text-primary-foreground">
                <svg  xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round"  className="text-white w-5 h-5 icon icon-tabler icons-tabler-outline icon-tabler-brand-x"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 4l11.733 16h4.267l-11.733 -16z" /><path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" /></svg>
                <span className="sr-only">X</span>
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services" className="text-primary-foreground hover:text-primary-foreground">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/case-studies" className="text-primary-foreground hover:text-primary-foreground">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link href="/about-us" className="text-primary-foreground hover:text-primary-foreground">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-primary-foreground hover:text-primary-foreground">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-primary-foreground hover:text-primary-foreground">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Pages */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/our-values" className="text-primary-foreground hover:text-primary-foreground">
                  Our Values
                </Link>
              </li>
              <li>
                <Link href="/our-team" className="text-primary-foreground hover:text-primary-foreground">
                  Leadership
                </Link>
              </li>
              <li>
                <Link href="/why-choose-us" className="text-primary-foreground hover:text-primary-foreground">
                  Why Choose Us
                </Link>
              </li>
              <li>
                <Link href="/testimonials" className="text-primary-foreground hover:text-primary-foreground">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-primary-foreground hover:text-primary-foreground">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex">
                <MapPin className="h-5 w-5 mr-2 flex-shrink-0 text-primary-foreground" />
                <span className="text-primary-foreground">
                  A-406, Kotibhaskar Business Court,<br/>Opp. Karishma Society,<br/>&zwj;Kothrud, Pune, India - 411 038
                </span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2 flex-shrink-0 text-primary-foreground" />
                <a href="mailto:doreply@bereej.com" className="text-primary-foreground hover:text-primary-foreground">
                  doreply@bereej.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border text-center flex justify-between">
          <p className="text-primary-foreground text-sm">
            © Bereej Technologies Private Limited. All Rights Reserved {currentYear}
          </p>
          <p>Made In India</p>
        </div>
      </div>
    </footer>
  );
}