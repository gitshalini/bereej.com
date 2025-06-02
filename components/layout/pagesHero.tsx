"use client";

import { motion } from "motion/react";
import React from "react";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { BackgroundBeams } from "@/components/ui/background-beams";
import dynamic from "next/dynamic";

const TextGenerateEffect = dynamic(
  () => import("@/components/ui/text-generate-effect"),
  { ssr: false }
);

export function PagesHero({title, description}:{
  title?:string;
  description?: string;
}) {
  
  return (
    <AuroraBackground>
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative flex flex-col gap-4 items-center justify-center px-4"
      >
        <h1 className="max-w-5xl text-center text-4xl sm:text-6xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-teal-800 via-indigo-800 to-purple-800"
        style={{lineHeight:"4.5rem"}}>{title}</h1>
        <div className="text-xl text-black/80 mb-8 max-w-5xl text-center">
            <TextGenerateEffect words={description ?? ""}/>
        </div>
      </motion.div>
      <BackgroundBeams />
    </AuroraBackground>

  );
}
