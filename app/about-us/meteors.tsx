"use client";

import { Meteors } from "@/components/ui/meteors";
import React from "react";

const content = [
  {
    title: "Flexible & Understanding",
    desc: "We understand that life is full of twists and turns, and sometimes plans need to be adjusted. That's why we take a dynamic and accommodating approach to provide you with tailored solutions."
  },
  {
    title: "Growth & Development",
    desc: "We understand that growth takes many forms – from personal development to organizational advancement. Our mission is to be your partner in this transformative journey, providing you with the resources, tools, and guidance you need to thrive."
  },
  {
    title: "Open & Transparent",
    desc: "We understand that transparency is not just a buzzword; it's a guiding principle that influences everything we do. From our communication with clients, partners, and team members to our business practices and decision-making, we strive to be forthright and candid."
  }
];

export default function AboutCards() {
  return (
    <div className="relative w-full px-4 py-8">
      {/* Gradient Blur Background */}
      <div className="absolute inset-0 -z-10 flex justify-center">
        <div className="h-[90%] w-[90%] scale-90 rounded-full bg-gradient-to-r from-blue-500 to-teal-500 blur-3xl" />
      </div>

      {/* Cards Container */}
      <div className="mx-auto flex max-w-7xl flex-col gap-6 md:flex-row md:gap-4">
        {content.map((item, idx) => (
          <div
            key={idx}
            className="relative flex h-72 flex-col justify-end overflow-hidden rounded-2xl border border-gray-800 bg-gray-900 px-6 py-6 shadow-xl md:flex-1"
          >
            <h2 className="relative z-10 mb-3 text-xl font-bold text-white">
              {item.title}
            </h2>
            <p className="relative z-10 mb-3 text-sm text-slate-400">
              {item.desc}
            </p>
            <Meteors number={20} />
          </div>
        ))}
      </div>
    </div>
  );
}
