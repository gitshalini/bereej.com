"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";

export const Card = React.memo(
  ({
    card,
    index,
    hovered,
    setHovered,
  }: {
    card: any;
    index: number;
    hovered: number | null;
    setHovered: React.Dispatch<React.SetStateAction<number | null>>;
  }) => (
    <div
      onMouseEnter={() => setHovered(index)}
      onMouseLeave={() => setHovered(null)}
      className={cn(
        "rounded-lg relative bg-gray-100 dark:bg-neutral-900 overflow-hidden h-60 md:h-96 w-full transition-all duration-300 ease-out",
        hovered !== null && hovered !== index && "blur-sm scale-[0.98]"
      )}
    >
      <img
        src={card.image}
        alt={card.title}
        className="object-cover absolute inset-0  h-60 md:h-96 w-full"
        
      />
      <div
        className={cn(
          "absolute inset-0 bg-white/80 flex items-end py-8 px-4 transition-opacity duration-300",
          hovered === index ? "opacity-100" : "opacity-0"
        )}
      >
        <div className="font-medium bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-200">
          <span className="text-sm font-medium text-indigo-500 bg-primary/30 rounded-full px-3 py-1 mb-2">
            {card.category}
          </span>
          <a href={`/case-studies/${card.id}`}
            className="flex text-xl md:text-2xl font-bold text-indigo-800 hover:underline mt-2"
            rel="noopener noreferrer">{card.title}</a>
          <p className="text-sm font-normal text-black dark:text-neutral-300 text-muted-foreground mt-4 mb-4 h-12">{card.description}</p>
        </div>
      </div>
    </div>
  )
);

Card.displayName = "Card";

type Card = {
  id: string;
  title: string;
  description:string;
  image: string;
};

export function FocusCards({ cards }: { cards: Card[] }) {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 w-full md:px-8 mb-12">
      {cards.map((card, index) => (
        <Card
          key={card.id}
          card={card}
          index={index}
          hovered={hovered}
          setHovered={setHovered}
        />
      ))}
    </div>
  );
}
