import type { Metadata } from "next";
import { Geist, Geist_Mono, Bungee, Dongle } from "next/font/google";
import { Noto_Sans_KR } from "next/font/google";
import "scss/layout.scss";

const stickers = [
  {
    label: "사용자 중심",
    position: "top-right",
    rotate: "-8deg",
    tone: "lavender",
  },
  {
    label: "책임감",
    position: "top-left",
    rotate: "-12deg",
    tone: "mint",
  },
  {
    label: "빠른 적응",
    position: "bottom-left",
    rotate: "8deg",
    tone: "lemon",
  },
  {
    label: "꼼꼼함",
    position: "bottom-right",
    rotate: "10deg",
    tone: "peach",
  },
];

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

const notoSansKr = Noto_Sans_KR({
  variable: "--font-noto",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://portfolio-2025-theta-lyart.vercel.app/"),
  title: "Portfolio | Hyejin",
  description: "My developer portfolio showcasing skills and projects.",
  alternates: {
    canonical: "https://portfolio-2025-theta-lyart.vercel.app/",
    languages: {
      "en-US": "https://portfolio-2025-theta-lyart.vercel.app//en-US",
    },
  },
  openGraph: {
    title: "Portfolio | Hyejin",
    description: "My developer portfolio showcasing skills and projects.",
    url: "https://portfolio-2025-theta-lyart.vercel.app/",
    siteName: "Portfolio | Hyejin",
    images: [{ url: "https://portfolio-2025-theta-lyart.vercel.app//og.png" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${bungeeFont.variable} ${dongleFont.variable} ${notoSansKr.variable}`}
      >
        <div aria-hidden="true" className="layout-stickers">
          {stickers.map((sticker) => (
            <span
              key={sticker.label}
              className={`layout-sticker layout-sticker--${sticker.tone} layout-sticker--${sticker.position}`}
              style={
                {
                  "--sticker-rotate": sticker.rotate,
                } as React.CSSProperties
              }
            >
              {sticker.label}
            </span>
          ))}
        </div>
        {children}
      </body>
    </html>
  );
}
