"use client";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
  MobileNavItems,
} from "@/components/ui/resizable-navbar";
import { useState } from "react";

export default function Header() {
  const navItems = [
    {
      name: "Services",
      link: "/services",
    },
    {
      name: "Case Studies",
      link: "/case-studies",
    },
    {
      name: "Company",
      link: "",
      children: [
      { name: 'About Us', link: '/about-us' },
      { name: 'Testimonials', link: '/testimonials' },
      { name: 'Our Values', link: '/our-values' },
      { name: 'Leadership', link: '/our-team' },
      { name: 'Why Choose Us', link: '/why-choose-us' },
      { name: 'FAQ', link: '/faq' },
      { name: 'Careers', link: '/careers' },
      // { name: 'Pricing', link: '/pricing' }
    ]
    },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  function handleClose(): void {
    throw new Error("Function not implemented.");
  }

  return (
      <Navbar>
        {/* Desktop Navigation */}
        <NavBody>
          <NavbarLogo />
          <NavItems items={navItems} />
          <div className="flex items-center gap-4">
            <NavbarButton variant="primary" href="/contact">Get in Touch</NavbarButton>
          </div>
        </NavBody>

        {/* Mobile Navigation */}
        <MobileNav>
          <MobileNavHeader>
            <NavbarLogo />
            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </MobileNavHeader>

          <MobileNavMenu
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
          >
            <MobileNavItems items={navItems} onItemClick={() => setIsMobileMenuOpen(false)} />
            <div className="flex w-full flex-col gap-4">
              <NavbarButton
                href="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
                variant="primary"
                className="w-full"
              >
                Get in Touch
              </NavbarButton>
            </div>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>
  );
};

