import type { Metadata } from "next";
import { Geist, Geist_Mono, Bungee, Dongle } from "next/font/google";
<<<<<<< HEAD
import { Noto_Sans_KR } from "next/font/google";
=======
>>>>>>> 98b7d2691493251daa9c5db0960b81df6e48b5bb
import "scss/layout.scss";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const bungeeFont = Bungee({
  variable: "--font-bungee",
  subsets: ["latin"],
  weight: ["400"],
});

const dongleFont = Dongle({
  variable: "--font-dongle",
  subsets: ["latin"],
  weight: ["400", "700"],
});

<<<<<<< HEAD
const notoSansKr = Noto_Sans_KR({
  variable: "--font-noto",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

=======
>>>>>>> 98b7d2691493251daa9c5db0960b81df6e48b5bb
export const metadata: Metadata = {
  metadataBase: new URL("https://example.com"),
  title: "Portfolio | Hyejin",
  description: "My developer portfolio showcasing skills and projects.",
  alternates: {
    canonical: "https://example.com",
    languages: {
      "en-US": "https://example.com/en-US",
    },
  },
  openGraph: {
    title: "Portfolio | Hyejin",
    description: "My developer portfolio showcasing skills and projects.",
    url: "https://example.com",
    siteName: "Portfolio | Hyejin",
    images: [{ url: "https://example.com/og.png" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
<<<<<<< HEAD
        className={`${geistSans.variable} ${geistMono.variable} ${bungeeFont.variable} ${dongleFont.variable} ${notoSansKr.variable}`}
=======
        className={`${geistSans.variable} ${geistMono.variable} ${bungeeFont.variable} ${dongleFont.variable}`}
>>>>>>> 98b7d2691493251daa9c5db0960b81df6e48b5bb
      >
        {children}
      </body>
    </html>
  );
}
