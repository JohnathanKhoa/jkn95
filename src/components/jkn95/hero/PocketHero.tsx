"use client";
import Image from "next/image";
import Link from "next/link";
import PocketImage from "@/public/images/photos/pocket.png";
import { useState } from "react";

export default function PocketHero() {
  const [hoveredDescription, setHoveredDescription] = useState<boolean | null>(
    false
  );

  return (
    <>
      {}
      <div className="pt-2 flex flex-row items-center justify-end gap-10  text-zinc-500">
        <Link
          key={1}
          href="https://tailwind-plus-pocket.vercel.app/"
          className="flex flex-col items-center justify-center text-sm duration-200 text-zinc-500 hover:text-zinc-300"
          target="_blank"
        >
          <Image
            className="rounded-xl justify-self-center"
            src={PocketImage}
            alt="NurtreeImage"
            onMouseEnter={() => setHoveredDescription(true)}
            onMouseLeave={() => setHoveredDescription(false)}
            width={150}
            height={150}
          />
          <div className="justify-self-center">Pocket</div>
        </Link>
      </div>
    </>
  );
}
