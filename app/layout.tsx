import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/config/site";
import { SpeedInsights } from '@vercel/speed-insights/next';


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default:siteConfig.name,
    template: `%s | ${siteConfig.name}`},
  description: siteConfig.description,
  icons: [
    {
    url:"/favicon.svg",
    href:"/favicon.svg"
    }
  ]

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <SpeedInsights/>
      </body>
    </html>
  );
}
