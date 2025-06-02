'use client';

import React from "react";
import { Vortex } from "../ui/vortex";
import Link from "next/link";

export default function ContactSection() {
  return (
    <div className="w-full h-[28rem] overflow-hidden mt-12">
      <Vortex
        backgroundColor="black"
        className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full"
      >
        <h2 className="text-white text-2xl md:text-6xl font-bold text-center">
          Let’s build something different
        </h2>
        <p className="text-white text-sm md:text-2xl max-w-4xl mt-6 text-center mb-12">
          Take the first step towards a brighter future and supercharge your business with cutting-edge technologies, expert guidance, and unparalleled support.
        </p>
        <div className="flex flex-col sm:flex-row items-center gap-4 mt-6">
          <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 transition duration-200 rounded-lg text-white shadow-[0px_2px_0px_0px_#FFFFFF40_inset]">
            <Link href="/contact">Get in Touch</Link>
          </button>
        </div>
      </Vortex>
    </div>
  );
}
