import { Ham } from "lucide-react";
import Link from "next/link";
import Hamburger from "./Hamburger";
import BuyMeACoffee from "./BuyMeACoffee";

export default function Footer() {
  return (
    <>
    <div className="flex h-full ">
      </div>
    <footer className="fixed z-50 bottom-0 items-center justify-end w-full bg-[#1f1f1f]">
      
      <div className="flex flex-row items-center justify-end p-4  ">
      <BuyMeACoffee/>
      </div>
    </footer>
    </>
  );
}
