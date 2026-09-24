"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export function Preloader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Immediately snap to top — prevents browser scroll-restoration from
    // landing the user mid-page after the preloader overlay fades out.
    window.scrollTo({ top: 0, behavior: "instant" });

    const timer = setTimeout(() => {
      setLoading(false);
    }, 750);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.4, ease: "easeInOut" } }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#f8fafc] dark:bg-[#090a0f]"
        >
          <motion.div
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="flex flex-col items-center"
          >
            <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden border-2 border-zinc-200 dark:border-zinc-700 shadow-md mb-4">
              <Image
                src="/logo.jpg"
                alt="Tamil Devs"
                fill
                sizes="80px"
                className="object-cover"
                priority
              />
            </div>

            <div className="flex items-center gap-2 mb-3">
              <span className="font-bold text-base tracking-tight text-zinc-900 dark:text-zinc-100">
                Tamil Devs
              </span>
              <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-900/60">
                தமிழ்
              </span>
            </div>

            {/* Subtle indeterminate progress bar */}
            <div className="w-28 h-1 bg-zinc-200 dark:bg-zinc-800 rounded-full overflow-hidden">
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{
                  repeat: Infinity,
                  duration: 0.85,
                  ease: "easeInOut",
                }}
                className="w-1/2 h-full bg-blue-600 dark:bg-blue-400 rounded-full"
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
