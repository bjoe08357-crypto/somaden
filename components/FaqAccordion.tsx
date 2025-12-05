'use client';

import { useState } from 'react';

interface FaqItem {
  question: string;
  answer: string;
}

interface FaqAccordionProps {
  items: FaqItem[];
}

export default function FaqAccordion({ items }: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="space-y-4">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div key={item.question} className="overflow-hidden rounded-2xl border border-white/10 bg-charcoal/70">
            <button
              className="flex w-full items-center justify-between px-6 py-4 text-left text-lg font-semibold text-white"
              onClick={() => setOpenIndex(isOpen ? null : index)}
            >
              {item.question}
              <span className="text-gold">{isOpen ? '−' : '+'}</span>
            </button>
            {isOpen && (
              <p className="border-t border-white/5 px-6 py-4 text-white/70">
                {item.answer}
              </p>
            )}
          </div>
        );
      })}
    </div>
  );
}
