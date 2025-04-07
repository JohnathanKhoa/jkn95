import React from "react";
import { Github, AtSign, FileUser, Linkedin } from "lucide-react";

import GitHubContributions from "@/components/github-stats";

export default function Home() {
  return (
    <div className=" flex flex-col items-center gap-3 justify-center w-screen  overflow-hidden scrollbar-hide text-slate-500">
      <GitHubContributions />
      <a
        className=" flex flex-row items-center gap-2 text-3xl   duration-200 hover:text-white "
        href="mailto:johnathan.k.nguyen.95@gmail.com"
      >
        <AtSign />
        Email
      </a>
      <a
        className="flex flex-row items-center gap-2 text-3xl  duration-200 hover:text-white "
        href="https://docs.google.com/document/d/1mGLYQJzevyh9Ri85ePtBmVh80Wo0epS9fLyG7XrIkIw/edit?usp=sharing"
        target="_blank"
        download="JohnathanKhoaNguyenResume.pdf"
      >
        <FileUser />
        Resume
      </a>
      <a
        className="flex flex-row items-center gap-2 text-3xl  duration-200 hover:text-white"
        href="https://github.com/JohnathanKhoa"
        target="_blank"
      >
        <Github />
        Github
      </a>
      <a
        className="flex flex-row items-center gap-2 text-3xl  duration-200 hover:text-white"
        href="https://www.linkedin.com/in/johnawin/"
        target="_blank"
      >
        <Linkedin />
        LinkedIn
      </a>
    </div>
  );
}
