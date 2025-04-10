"use client";
import Image from "next/image";
import Link from "next/link";
import NurtreeImage from "@/public/images/nurtree.png";
import { useState } from "react";

export default function NurtreeHero() {
  const [hoveredDescription, setHoveredDescription] = useState<boolean | null>(
    false
  );

  return (
    <>
      {}
      <div className="pt-2 flex flex-row items-center justify-end gap-10  text-zinc-500">
        <Link
          key={1}
          href="https://github.com/JohnathanKhoa/NurtreeWeb"
          className="flex flex-col items-center justify-center text-sm duration-200 text-zinc-500 hover:text-zinc-300"
          target="_blank"
        >
          <Image
            className="rounded-xl  justify-self-center"
            src={NurtreeImage}
            alt="NurtreeImage"
            onMouseEnter={() => setHoveredDescription(true)}
            onMouseLeave={() => setHoveredDescription(false)}
            width={150}
            height={150}
          />
          <div className="justify-self-center">Nurtree</div>
        </Link>
        {/* <div>
          {/* <p
            className={
              hoveredDescription
                ? "opacity-100 transition duration-300 text-center text-balance"
                : "opacity-0 transition duration-300 text-center text-balance"
            }
          >
            A blend of Spotify and Youtube API
            <br></br>
          </p> */}
        {/* <p
            className={
              hoveredDescription
                ? "opacity-100 transition duration-500 text-center text-balance"
                : "opacity-0 transition duration-500 text-center text-balance"
            }
          >
            Play all the top music videos using your own curated Spotify
            playlists
          </p> */}
        {/* <p
            className={
              hoveredDescription
                ? "opacity-100 transition duration-700 text-center text-balance"
                : "opacity-0 transition duration-700 text-center text-balance"
            }
          >
            Vercel, NextJS, TypeScript, JavaScript, HTML, Tailwind/CSS, NextAuth, Zustand
          </p>
          <p
            className={
              hoveredDescription
                ? "opacity-100 transition duration-900 text-center text-balance"
                : "opacity-0 transition duration-900 text-center text-balance"
            }
          >
            
          </p> 
        </div> */}
      </div>
    </>
  );
}
