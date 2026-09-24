import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { SITE_CONFIG } from "@/config/constants";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy | Tamil Devs",
  description: "Privacy Policy for the Tamil Devs community and website.",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[var(--bg)] text-[var(--text)] flex flex-col justify-between">
      <Navbar />

      <main className="max-w-3xl mx-auto px-4 sm:px-6 py-12 sm:py-16 flex-1 w-full">
        <div className="mb-8">
          <Link
            href="/"
            className="text-xs sm:text-sm text-blue-600 dark:text-blue-400 hover:underline inline-flex items-center gap-1.5 font-medium mb-4"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Home</span>
          </Link>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-100">
            Privacy Policy
          </h1>
          <p className="text-zinc-500 dark:text-zinc-400 text-sm mt-1">Last updated: September 2026</p>
        </div>

        <div className="rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/30 p-6 sm:p-8 space-y-6 text-zinc-600 dark:text-zinc-400 text-sm sm:text-base leading-relaxed">
          <section>
            <h2 className="text-lg font-bold text-zinc-900 dark:text-zinc-100 mb-2">1. Overview</h2>
            <p>
              Welcome to <strong>{SITE_CONFIG.name}</strong> ({SITE_CONFIG.tamilName}). We respect your privacy. This website does not collect personal data, sell advertisements, or track user activity across other sites.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-zinc-900 dark:text-zinc-100 mb-2">2. Discord Community</h2>
            <p>
              When you join our Discord server, your interaction is subject to Discord&apos;s Terms of Service and Privacy Policy. We do not store or export your private Discord messages, contact information, or sensitive identity tokens outside the Discord platform.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-zinc-900 dark:text-zinc-100 mb-2">3. Resume Reviews & Code Submissions</h2>
            <p>
              When participating in forum channels (such as #resume-review or #code-review), please redact personal contact details (e.g. phone numbers, home addresses) prior to uploading documents. Community feedback is public to server members.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-zinc-900 dark:text-zinc-100 mb-2">4. Third-Party Services</h2>
            <p>
              This website is hosted on Vercel. Standard anonymous web traffic telemetry may be processed by hosting infrastructure to maintain service availability, reliability, and security.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-zinc-900 dark:text-zinc-100 mb-2">5. Contact</h2>
            <p>
              For community moderation questions or requests, please reach out to the moderators directly in our official Discord server.
            </p>
          </section>
        </div>
      </main>

      <footer className="py-6 text-center text-xs text-zinc-500 border-t border-zinc-200/60 dark:border-zinc-800/60">
        Tamil Devs • Built for Tamil developers worldwide.
      </footer>
    </div>
  );
}
