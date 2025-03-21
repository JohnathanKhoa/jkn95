import React from "react";
import { Link } from "lucide-react";

export default function Home() {
  return (
    <div className="pb-48 flex flex-col items-center justify-center w-screen h-screen overflow-hidden scrollbar-hide">
      <a
        className="text-lg text-zinc-500 hover:text-white"
        href="mailto:johnathan.k.nguyen.95@gmail.com"
      >
        Email
      </a>
      <a
        className="text-lg text-zinc-500 hover:text-white"
        href="https://docs.google.com/document/d/1M-gvP145gU3COeSkQeEYHPavSPYaDqjoSUCsCg7A7qw/edit?usp=sharing"
        target="_blank"
        download="Resume-JohnathanKhoaNguyen.pdf"
      >
        Resume
      </a>
      <a
        className="text-lg text-zinc-500 hover:text-white"
        href="https://github.com/JohnathanKhoa"
        target="_blank"
      >
        Github
      </a>
      <a
        className="text-lg text-zinc-500 hover:text-white"
        href="https://www.linkedin.com/in/johnawin/"
        target="_blank"
      >
        LinkedIn
      </a>
    </div>
  );
}
