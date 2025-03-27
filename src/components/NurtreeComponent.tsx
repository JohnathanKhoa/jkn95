"use client";
import Image from "next/image";
import Link from "next/link";
import NurtreeImage from "@/public/images/nurtree.png";
import { useState } from "react";

export default function NurtreeComponent() {
  const [hoveredDescription, setHoveredDescription] = useState<boolean | null>(
    false
  );

  return (
    <>
      {}
      <div className="pt-2 flex flex-row items-center justify-end gap-10 font-mono">
        <Link
          key={1}
          href="https://www.nurtree.com/"
          className="flex flex-col items-center justify-center text-sm duration-200 text-zinc-500 hover:text-zinc-300"
        >
          <Image
            className="rounded-xl pyobject-scale-down w-48 justify-self-center"
            src={NurtreeImage}
            alt="NurtreeImage"
            onMouseEnter={() => setHoveredDescription(true)}
            onMouseLeave={() => setHoveredDescription(false)}
          />
          <div className="justify-self-center">Nurtree</div>
        </Link>
        <div>
          <p
            className={
              hoveredDescription
                ? "opacity-100 transition duration-300 text-center text-balance"
                : "opacity-0 transition duration-300 text-center text-balance"
            }
          >
            A blend of Spotify and Youtube API
            <br></br>
          </p>
          <p
            className={
              hoveredDescription
                ? "opacity-100 transition duration-500 text-center text-balance"
                : "opacity-0 transition duration-500 text-center text-balance"
            }
          >
            Play all the top music videos using your own curated Spotify
            playlists
          </p>
          <p
            className={
              hoveredDescription
                ? "opacity-100 transition duration-700 text-center text-balance"
                : "opacity-0 transition duration-700 text-center text-balance"
            }
          >
            Vercel, NextJS, TypeScript, JavaScript, HTML, Tailwind/CSS
          </p>
          <p
            className={
              hoveredDescription
                ? "opacity-100 transition duration-900 text-center text-balance"
                : "opacity-0 transition duration-900 text-center text-balance"
            }
          >
            ~ Development Mode. Please request me to include your email for
            access ~
          </p>
        </div>
      </div>
    </>
  );
}
