import React from "react";
import { Github, AtSign, FileUser, Linkedin } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="pb-48 flex flex-col items-center gap-3 justify-center w-screen h-screen overflow-hidden scrollbar-hide">
      <a
        className=" flex flex-row items-center gap-2 text-lg  text-zinc-500 duration-200 hover:text-white "
        href="mailto:johnathan.k.nguyen.95@gmail.com"
      >
        <AtSign/>
        Email
      </a>
      <a
        className="flex flex-row items-center gap-2 text-lg text-zinc-500 duration-200 hover:text-white "
        href="https://docs.google.com/document/d/1M-gvP145gU3COeSkQeEYHPavSPYaDqjoSUCsCg7A7qw/edit?usp=sharing"
        target="_blank"
        download="Resume-JohnathanKhoaNguyen.pdf"
      >
        <FileUser/>
        Resume
      </a>
      <a
        className="flex flex-row items-center gap-2 text-lg text-zinc-500 duration-200 hover:text-white"
        href="https://github.com/JohnathanKhoa"
        target="_blank"
      >
        <Github/>
        Github
      </a>
      <a
        className="flex flex-row items-center gap-2 text-lg text-zinc-500 duration-200 hover:text-white"
        href="https://www.linkedin.com/in/johnawin/"
        target="_blank"
      >
        <Linkedin/>
        LinkedIn
      </a>
    </div>
  );
}
