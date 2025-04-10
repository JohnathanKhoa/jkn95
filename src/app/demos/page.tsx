import React from "react";
import NurtreeHero from "@/components/jkn95/hero/NurtreeHero";
import RetoolHero from "@/components/jkn95/hero/RetoolHero";
import RabbitMQHero from "@/components/jkn95/hero/RabbitMQHero";
import CatalystHero from "@/components/jkn95/hero/CatalystHero";
import CommitHero from "@/components/jkn95/hero/CommitHero";
import KeynoteHero from "@/components/jkn95/hero/KeynoteHero";
import PocketHero from "@/components/jkn95/hero/PocketHero";
import ProtocolHero from "@/components/jkn95/hero/ProtocolHero";
import SpotlightHero from "@/components/jkn95/hero/SpotlightHero";
import StudioHero from "@/components/jkn95/hero/StudioHero";

export default function Page() {
  return (
    <div className="flex flex-col w-full items-center justify-content-center my-16 px-8">
      <div className="text-2xl font-bold tracking-tight text-zinc-800  dark:text-zinc-100">
        Developer Demos
      </div>
      <div className="justify-items-center md:flex-row  grid md:grid-cols-4 col-span-2 gap-8 pt-10 px-8">
        <NurtreeHero />
        {/* <RabbitMQHero /> */}
        <RetoolHero />
      </div>
      <div></div>
      <div className=" w-1/3 my-1 h-px bg-zinc-700 mt-8"></div>
      <div className="text-2xl font-bold tracking-tight text-zinc-800  dark:text-zinc-100">
        Tailwind Plus UI
      </div>
      <div className="justify-items-center md:flex-row  grid md:grid-cols-4 col-span-2  gap-8 pt-10 ">
        <CatalystHero />
        {/* <CommitHero /> */}
        <KeynoteHero />
        <PocketHero />
        <ProtocolHero />
        {/* <SpotlightHero /> */}
        <StudioHero />
      </div>
    </div>
  );
}
