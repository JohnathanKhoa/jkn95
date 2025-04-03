"use client";
import Image from "next/image";
import Link from "next/link";
import NurtreeImage from "@/public/images/nurtree.png";
import CatalystImage from "@/public/images/catalyst.svg"
import { useState } from "react";

export default function CatalystHero() {
  const [hoveredDescription, setHoveredDescription] = useState<boolean | null>(
    false
  );

  return (
    <>
      {}
      <div className="pt-2 flex flex-row items-center justify-end gap-10  text-zinc-500">
        <Link
          key={1}
          href="https://catalyst-alpha-two.vercel.app/"
          className="flex flex-col items-center justify-center text-sm duration-200 text-zinc-500 hover:text-zinc-300"
          target="_blank"
        >
          <Image
            className="rounded-xl pyobject-scale-down w-48 justify-self-center"
            src={CatalystImage}
            alt="NurtreeImage"
            onMouseEnter={() => setHoveredDescription(true)}
            onMouseLeave={() => setHoveredDescription(false)}
          />
          <div className="justify-self-center">Catalyst</div>
        </Link>
        <div>
          <p
            className={
              hoveredDescription
                ? "opacity-100 transition duration-300 text-center text-balance"
                : "opacity-0 transition duration-300 text-center text-balance"
            }
          >
            Featuring Catalyst UI components with TailwindCSS
            <br></br>
          </p>
          {/* <p
            className={
              hoveredDescription
                ? "opacity-100 transition duration-500 text-center text-balance"
                : "opacity-0 transition duration-500 text-center text-balance"
            }
          >
            Reusable and fully modular, well-crafted API structure
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
            headlessui, clsx, framer-motion, prettier
          </p> */}
        </div>
      </div>
    </>
  );
}
