import React from "react";
import { FileText, Mic, GitPullRequest, Briefcase } from "lucide-react";

const COMMUNITY_FEATURES = [
  {
    icon: FileText,
    title: "Resume & Portfolio Reviews",
    desc: "Post your resume in our dedicated forum to get line-by-line feedback from working developers on formatting, impact metrics, and project bullets.",
  },
  {
    icon: Mic,
    title: "Peer Mock Interviews",
    desc: "Hop into live voice channels to run practice DSA and system design interviews with members preparing for technical rounds.",
  },
  {
    icon: GitPullRequest,
    title: "Code & Architecture Feedback",
    desc: "Drop your GitHub PR or repo link when you're stuck on a tricky bug, design decision, or performance bottleneck.",
  },
  {
    icon: Briefcase,
    title: "Referrals & Hiring",
    desc: "Verified job openings, employee referrals, and freelance contracts posted directly by community members across product companies and startups.",
  },
];

export function FeaturesSection() {
  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 border-t border-zinc-200/80 dark:border-zinc-800/80">
      <div className="max-w-4xl mx-auto">
        {/* Section Heading */}
        <div className="text-center max-w-xl mx-auto mb-12">
          <div className="inline-flex items-center rounded-full border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/60 px-3 py-1 mb-3 text-xs font-medium text-zinc-600 dark:text-zinc-400">
            What We Do
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-50 mb-3">
            Real peer learning, zero gatekeeping
          </h2>
          <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed">
            No paid courses, no marketing hype. Just developers helping each other improve their skills and careers.
          </p>
        </div>

        {/* Features 2x2 Grid */}
        <div className="grid sm:grid-cols-2 gap-4 sm:gap-5">
          {COMMUNITY_FEATURES.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/30 p-6 flex flex-col justify-between transition-colors hover:border-zinc-300 dark:hover:border-zinc-700"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-950/50 border border-blue-200/60 dark:border-blue-900/60 text-blue-600 dark:text-blue-400 flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-semibold text-zinc-900 dark:text-zinc-100 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
