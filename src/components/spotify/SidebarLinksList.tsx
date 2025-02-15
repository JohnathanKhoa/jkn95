"use client";

import { Home } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function SidebarLinksList() {
  const pathname = usePathname();

  const activeLink = "bg-paper-400 text-white";
  const inactiveLink = "bg-transparent text-gray";
  const linkStyle =
    "flex items-start gap-4 px-2 pt-5 rounded-md cursor-pointer  hover:text-white";

  return (
    <ul className="flex flex-col items-center w-full mt-4">
      <Link href="/demos/nurtree">
        <li
          className={`${linkStyle} ${
            pathname === "/" ? activeLink : inactiveLink
          }`}
        >
          <Home size={20} />
          <span className="md:flex hidden font-semibold">Home</span>
        </li>
        
      </Link>

    </ul>
  );
}
