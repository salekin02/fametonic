import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import "./globals.css";


const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Fametonic - Turn Social Media Into a Profitable Career",
  description: "Discover your way to success with Fametonic. Start growing your influence, create viral content, and learn from expert-led courses designed for aspiring influencers.",
  keywords: "social media, influencer, TikTok, Instagram, content creation, AI, courses",
  authors: [{ name: "Fametonic" }],
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${figtree.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
