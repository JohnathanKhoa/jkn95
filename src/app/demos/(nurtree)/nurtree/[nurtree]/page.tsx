'use client'
import React from "react";

import { signIn } from "next-auth/react";
import Image from "next/image";
import SpotifyImage from '@/public/images/spotify_logo.png'

export default function Page() {
  const handleLogin = () => {
    signIn("spotify", { callbackUrl: "http://localhost:3000/demos/nurtree" });
  };

  return (
    <>
    <div className="pb-64 flex flex-col items-center justify-center w-screen h-screen gap-20">
      <Image
        src={SpotifyImage}
        alt="spotify logo"
        width={320}
        height={96}
      />
      <button
        className="flex px-12 py-2 text-lg tracking-widest uppercase rounded-full focus:outline-none bg-primary hover:bg-opacity-80"
        onClick={handleLogin}
      >
        Login
      </button>
    </div>
    </>
  );
}