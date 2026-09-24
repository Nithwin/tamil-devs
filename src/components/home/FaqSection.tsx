"use client";

import React, { useState, useRef } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface Faq {
  q: string;
  a: string;
}

const FAQS: Faq[] = [
  {
    q: "Do I need to speak only Tamil in the community?",
    a: "Not at all. You are free to communicate in Tamil, English, or Tanglish. Use whichever language lets you explain your questions and code most clearly.",
  },
  {
    q: "Is Tamil Devs completely free to join?",
    a: "Yes, 100% free. There are no paid tiers, subscriptions, or paywalled channels. All reviews, voice interview rooms, and resources are open.",
  },
  {
    q: "Who is this community for?",
    a: "Any developer or student from Tamil Nadu or Tamil speakers globally. We have students, career transitioners, early engineers, senior devs, and tech leads.",
  },
  {
    q: "How do resume reviews work?",
    a: "Post your resume in the dedicated forum channel (make sure to redact phone numbers and addresses). Community members give direct line-by-line feedback on bullets, formatting, and tech stack presentation.",
  },
  {
    q: "Can recruiters or founders share job openings?",
    a: "Yes. We have a dedicated jobs-and-referrals channel for verified openings, internal referrals, and freelance contracts.",
  },
];

function FaqItem({
  faq,
  isOpen,
  onToggle,
}: {
  faq: Faq;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/60 overflow-hidden shadow-xs hover:shadow-sm transition-shadow">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className="w-full text-left px-5 py-4 flex items-center justify-between gap-4 text-sm sm:text-base font-semibold text-zinc-900 dark:text-zinc-100 cursor-pointer"
      >
        <span>{faq.q}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
          className="shrink-0"
        >
          <ChevronDown
            className={`w-4 h-4 transition-colors duration-200 ${
              isOpen ? "text-blue-600 dark:text-blue-400" : "text-zinc-400"
            }`}
          />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="body"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
            style={{ overflow: "hidden" }}
          >
            <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed border-t border-zinc-100 dark:border-zinc-800/60">
              {faq.a}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function FaqSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section
      id="faq"
      className="scroll-mt-20 py-16 md:py-24 px-4 sm:px-6 border-t border-zinc-200/80 dark:border-zinc-800/80 bg-zinc-50/40 dark:bg-zinc-950/40"
    >
      <div className="max-w-3xl mx-auto">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-xl mx-auto mb-10"
        >
          <div className="inline-flex items-center rounded-full border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/60 px-3 py-1 mb-3 text-xs font-medium text-zinc-600 dark:text-zinc-400">
            FAQ
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-50 mb-3">
            Frequently asked questions
          </h2>
          <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed">
            Common questions about the Discord community and how to get involved.
          </p>
        </motion.div>

        {/* Accordion */}
        <motion.div
          className="space-y-3"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.45, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          {FAQS.map((faq, index) => (
            <FaqItem
              key={faq.q}
              faq={faq}
              isOpen={openIdx === index}
              onToggle={() => setOpenIdx(openIdx === index ? null : index)}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
