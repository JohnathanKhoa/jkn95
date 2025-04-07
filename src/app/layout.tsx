import type { Metadata } from "next";
import "./globals.css";
import Navigationbar from "@/components/NavigationBar";
import Particles from "@/components/particles";
import Head from "next/head";
import { Geist } from "next/font/google";
const fontFamily = Geist({
  subsets: ["latin"],
  preload: true,
  variable: "--Geist",
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
      <html lang="en" 
      className={ ` ${fontFamily.variable} "overflow-auto scrollbar-hide" `}
      >
        <Head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
        </Head>

        <body className=" ">
          <Particles
            className="absolute inset-0 -z-10 animate-fade-in overflow-auto scrollbar-hide"
            quantity={100}
          />
          <Navigationbar />

          <div className="overflow-auto scrollbar-hide">{children}</div>
        </body>
      </html>
    </>
  );
}
