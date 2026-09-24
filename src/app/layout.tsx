import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme/ThemeProvider";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#090a0f" },
  ],
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://tamil-devs.vercel.app"),
  title: "Tamil Devs | தமிழ் Tech Community",
  icons: {
    icon: "/logo.jpg",
    shortcut: "/logo.jpg",
    apple: "/logo.jpg",
  },
  description:
    "The premier Discord community connecting Tamil software engineers, freshers, students, and tech enthusiasts worldwide. Resume reviews, code PR reviews, mock interviews, AI channels, open source collab, and career mentorship.",
  keywords: [
    "Tamil developers",
    "Tamil Nadu tech",
    "Tamil coding community",
    "Chennai developers Discord",
    "India tech Discord",
    "Tamil software engineers",
    "Tamil DevOps",
    "Tamil AI engineers",
  ],
  authors: [{ name: "Tamil Devs Community" }],
  openGraph: {
    title: "Tamil Devs | தமிழ் Tech Community",
    description:
      "Connect with Tamil software engineers worldwide. Resume reviews, code reviews, mock interviews, and career mentorship — all in one place.",
    type: "website",
    url: "https://tamil-devs.vercel.app",
    images: [{ url: "/logo.jpg", width: 1200, height: 630, alt: "Tamil Devs Community" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tamil Devs | தமிழ் Tech Community",
    description: "The premier Discord community for Tamil software engineers worldwide.",
  },
  verification: {
    google: "7Ff11gtDkkUfoK11mLcMlTWgq8r4WmxJ9j_j8oau_YA",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <head>
        {/*
          Blocking inline script — runs synchronously before first paint.
          1. Sets dark/light class immediately so there is zero FOUC.
          2. Disables browser scroll-restoration so refresh always lands at top.
        */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
(function() {
  try {
    var stored = localStorage.getItem('theme');
    var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    var isDark = stored === 'dark' || (!stored && prefersDark);
    if (isDark) document.documentElement.classList.add('dark');
    else document.documentElement.classList.remove('dark');
  } catch(e) {}
  if ('scrollRestoration' in history) history.scrollRestoration = 'manual';
})();
            `.trim(),
          }}
        />
      </head>
      <body className={`${inter.className} min-h-screen antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
