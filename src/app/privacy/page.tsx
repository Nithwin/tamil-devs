import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SITE_CONFIG } from "@/config/constants";

export const metadata: Metadata = {
  title: "Privacy Policy | Tamil Devs",
  description: "Privacy Policy for the Tamil Devs community and website.",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[#080b14] flex flex-col justify-between">
      <Navbar />

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="mb-8">
          <Link
            href="/"
            className="text-xs sm:text-sm text-cyan-400 hover:underline inline-flex items-center gap-1.5 font-semibold mb-4"
          >
            <span>←</span> Back to Home
          </Link>
          <h1 className="text-3xl sm:text-5xl font-black text-slate-100 tracking-tight">
            Privacy Policy
          </h1>
          <p className="text-slate-400 text-sm mt-2">Last updated: September 2026</p>
        </div>

        <div className="glass-card rounded-2xl p-6 sm:p-10 space-y-6 text-slate-300 text-sm sm:text-base leading-relaxed">
          <section>
            <h2 className="text-xl font-bold text-slate-100 mb-2">1. Overview</h2>
            <p>
              Welcome to <strong>{SITE_CONFIG.name}</strong> ({SITE_CONFIG.tamilName}). We value your privacy. This static website does not collect personal data, sell advertisements, or track user activity across other sites.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-100 mb-2">2. Discord Community</h2>
            <p>
              When you join our Discord server, your interaction is subject to Discord&apos;s Terms of Service and Privacy Policy. We do not store or export your private Discord messages, contact information, or sensitive identity tokens outside the Discord platform.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-100 mb-2">3. Resume Reviews & Code Submissions</h2>
            <p>
              When participating in forum channels (such as #resume-review-and-roast or #code-review), you are encouraged to redact personal contact details (e.g. phone numbers, home addresses) prior to uploading documents. Community feedback is public to server members.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-100 mb-2">4. Third-Party Services</h2>
            <p>
              This website is hosted on Vercel. Standard anonymous web traffic telemetry may be processed by hosting infrastructure to maintain service availability, reliability, and DDoS prevention.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-100 mb-2">5. Contact</h2>
            <p>
              For community moderation inquiries or requests, please reach out to the moderators directly in our official Discord server.
            </p>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
