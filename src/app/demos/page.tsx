import React from "react";
import NurtreeHero from "@/components/hero/NurtreeHero";
import RetoolHero from "@/components/hero/RetoolHero";
import RabbitMQHero from "@/components/hero/RabbitMQHero";
import CatalystHero from "@/components/hero/CatalystHero";

export default function Page() {
  return (
    <div className="items-center justify-content-start pt-10 px-8">
      <div className="flex md:flex-row flex-col items-center justify-center gap-10 pt-10 px-8">
        <NurtreeHero />
        <CatalystHero />
        <RabbitMQHero />
        <RetoolHero />
      </div>
    </div>
  );
}
