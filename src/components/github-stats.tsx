'use client';

import { useState } from "react";
import GitHubCalendar from "react-github-calendar";

export default function GitHubContributions() {
  return (
    <div className="flex flex-col w-screen items-center justify-center border-1 border-black rounded-md p-4 text-slate-500">
      <h2 className=" text-2xl font-bold mb-6 ">My GitHub Contributions</h2>
      <GitHubCalendar
        username="JohnathanKhoa"
        bl
        blockSize={15}
        blockMargin={2}
        colorScheme="light" // based on your theme
        fontSize={16}
        theme={{
          light: ["#EDEDED", "#ACD5F2", "#7FA8C9", "#527BA0", "#254E77"],
          dark: ["#161b22", "#0e4429", "#006d32", "#26a641", "#39d353"],
        }}
        //year={2025} // year that you joined to github
      />
    </div>
  );
}