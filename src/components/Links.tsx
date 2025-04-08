import { Github, AtSign, FileUser, Linkedin } from "lucide-react";

const links = [
  
  {
    name: "resume",
    icon: <FileUser />,
    href: "https://docs.google.com/document/d/1M-gvP145gU3COeSkQeEYHPavSPYaDqjoSUCsCg7A7qw/edit?usp=sharing",
    download: "JohnathanKhoaNguyenResume.pdf",
  },
  {
    name: "github",
    icon: <Github />,
    href: "https://github.com/JohnathanKhoa",
  },
  {
    name: "linkedIn",
    icon: <Linkedin />,
    href: "https://www.linkedin.com/in/johnawin/",
  },
];

export default function Links() {
  return (
    <div className="flex flex-col items-center  gap-3 w-screen overflow-hidden scrollbar-hide text-slate-500">
      <div>
        <div>
          <h1 className="text-2xl font-bold text-center text-slate-500">
            Links
          </h1>
        </div>
      {links.map((link) => (
        <a
          key={link.name}
          className="flex flex-row items-center gap-2 text-xl duration-200 hover:text-white "
          href={link.href}
          target="_blank"
          download={link.download}
        >
          {link.icon}
          {link.name}
        </a>
      ))}
      </div>
    </div>
  );
}
