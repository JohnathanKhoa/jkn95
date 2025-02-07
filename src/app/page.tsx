import React from "react";
import ProfileImage from '../images/ProfileImage.png'



export default function Home() {
  return (
    <div className="pb-48 flex flex-col items-center justify-center w-screen h-screen overflow-hidden ">
      <div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      <h1 className="py-3.5 px-0.5 z-10 text-2xl text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display sm:text-2xl md:text-2xl whitespace-nowrap bg-clip-text ">
        <div className="">
          <img className="pyobject-scale-down w-48 items-center justify-self-center rounded-xl bg-blend-soft-light shadow-lg shadow-black" src={ProfileImage.src} alt="Image"/>
        </div>
        <div className="pt-2">
        Johnathan Nguyen
        </div>
      </h1>
      <div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      <div className="my-16 text-center animate-fade-in">
        <h2 className="text-sm text-zinc-500 ">
          Welcome to my home base!
        </h2>
      </div>
    </div>
  );

}