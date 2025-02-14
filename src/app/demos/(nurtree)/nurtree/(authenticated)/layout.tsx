import "@/app/globals.css";
import Header from "@/components/spotify/Header";
import { NextAuthProvider } from "@/providers/NextAuthProvider";
import PreviewPlayer from "@/components/spotify/PreviewPlayer";
import Sidebar from "@/components/spotify/Sidebar";
import TrackPlayerProvider from "@/providers/TrackPlayerProvider";
import { Montserrat } from "next/font/google";

const fontFamily = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next.js App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    
      <NextAuthProvider>
        <TrackPlayerProvider>
          
            <div className="grid grid-cols-10 gap-2 scrollbar-hide">
              <Sidebar />
              <div className="flex flex-col h-[87vh] col-span-8 overflow-auto rounded-lg bg-paper-700 scrollbar-hide">
                <Header />
                <main className="mx-8 my-4">{children}</main>
              </div>
            </div>
            <PreviewPlayer />
          
        </TrackPlayerProvider>
      </NextAuthProvider>
    
  );
}
