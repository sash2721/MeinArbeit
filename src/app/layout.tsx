import type { Metadata } from "next";
import { Geist, Geist_Mono, Lobster } from "next/font/google";
import ThemeProvider from "@/components/theme-provider";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const displayFont = Lobster({
  variable: "--font-audiowide",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: {
    default: "Sahil Shah",
    template: "%s | Sahil Shah",
  },
  description:
    "Software Engineer focused on building scalable backend systems, distributed architectures, and cloud-native platforms. Specializing in Go, Python, TypeScript, AWS, GCP, and Kubernetes.",
  keywords: [
    "Sahil Shah",
    "Software Engineer",
    "Backend Developer",
    "Distributed Systems",
    "Cloud Native",
    "DevOps",
    "Go",
    "Python",
    "TypeScript",
    "AWS",
    "GCP",
    "Kubernetes",
    "Microservices",
    "GenAI",
  ],
  authors: [{ name: "Sahil Shah", url: "https://github.com/sash2721" }],
  creator: "Sahil Shah",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Sahil Shah",
    description:
      "Building scalable backend systems, distributed architectures, and cloud-native platforms.",
    siteName: "Sahil Shah",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sahil Shah",
    description:
      "Building scalable backend systems, distributed architectures, and cloud-native platforms.",
    creator: "@ss_21_",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-theme="dark"
      className={`${geistSans.variable} ${geistMono.variable} ${displayFont.variable} antialiased scroll-smooth`}
    >
      <body className="min-h-screen font-sans">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
