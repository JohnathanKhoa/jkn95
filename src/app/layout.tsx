import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";
import Navigationbar from "@/components/NavigationBar";
import Particles from "@/components/particles";
import Head from "next/head";
import { Geist_Mono } from "next/font/google";
import Footer from "@/components/Footer";
const fontFamily = Geist_Mono({
  subsets: ["latin"],
  preload: true,
  variable: "--Geist_Mono",
});

export const metadata: Metadata = {
  title: "jkn95dev",
  description: "Personal Portfolio Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <html
        lang="en"
        className={` ${fontFamily.variable} "overflow-auto scrollbar-hide" `}
      >
        <Head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
        </Head>

        <body className="bg-zinc-200 ">
          {/* <Particles
            className="absolute inset-0 -z-10 animate-fade-in overflow-auto scrollbar-hide"
            quantity={100}
          /> */}
          <Navigationbar />
          <div className="overflow-auto scrollbar-hide">{children}</div>
          <Footer />
          <Analytics />
          <SpeedInsights />
        </body>
      </html>
    </>
  );
}
