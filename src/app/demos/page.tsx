import React from "react";
import NurtreeHero from "@/components/hero/NurtreeHero";
import RetoolHero from "@/components/hero/RetoolHero";
import RabbitMQHero from "@/components/hero/RabbitMQHero";
import CatalystHero from "@/components/hero/CatalystHero";
import CommitHero from "@/components/hero/CommitHero";
import KeynoteHero from "@/components/hero/KeynoteHero";
import PocketHero from "@/components/hero/PocketHero";
import ProtocolHero from "@/components/hero/ProtocolHero";
import SpotlightHero from "@/components/hero/SpotlightHero";
import StudioHero from "@/components/hero/StudioHero";

export default function Page() {
  return (
    <div className="flex flex-col w-full items-center justify-content-center my-16 px-8">
      <div className="justify-items-center md:flex-row  grid md:grid-cols-2  gap-8 pt-10 px-8">
        <NurtreeHero />
        <RabbitMQHero />
        <RetoolHero />
      </div>
      <div></div>
      <div className=" w-4/5 my-1 h-px bg-white mt-8"></div>
      <div className="text-2xl font-bold tracking-tight text-zinc-800  dark:text-zinc-100">Tailwind Plus</div>
      <div className="justify-items-center md:flex-row  grid md:grid-cols-2  gap-8 pt-10 ">
        <CatalystHero />
        <CommitHero />
        <KeynoteHero />
        <PocketHero />
        <ProtocolHero />
        {/* <SpotlightHero /> */}
        <StudioHero />
      </div>
    </div>
  );
}
