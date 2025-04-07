import { Ham } from "lucide-react";
import Link from "next/link";
import Hamburger from "./Hamburger";

export default function NavigationBar() {
  return (
    <header className="items-center w-full bg-[#1f1f1f]">
      <div className="flex flex-row items-center justify-between p-4  ">
        <div className="flex flex-row">
          <div className="flex flex-row items-start gap-2 ">
            <div
              className={`text-xl font-semibold tracking-tight text-pretty text-slate-500`}
            >
              Johnathan Khoa Nguyen
            </div>

            {/* <Link
              href={"/"}
              className="text-xl duration-500 text-zinc-500 hover:text-zinc-300"
            >
              home
            </Link>
            <Link
              href={"/about"}
              className="text-xl duration-500 text-zinc-500 hover:text-zinc-300"
            >
              about
            </Link>
            <Link
              href={"/techstack"}
              className="text-xl duration-500 text-zinc-500 hover:text-zinc-300"
            >
              tools
            </Link>
            <Link
              href={"/demos"}
              className="text-xl duration-500 text-zinc-500 hover:text-zinc-300"
            >
              demos
            </Link> */}
          </div>
        </div>
        <Hamburger />
      </div>
    </header>
  );
}
