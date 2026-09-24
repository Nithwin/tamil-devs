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
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      {/* Disable browser scroll-restoration so refresh always starts at top */}
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `if ('scrollRestoration' in history) { history.scrollRestoration = 'manual'; }`,
          }}
        />
      </head>
      <body className={`${inter.className} min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
