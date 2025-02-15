import React from "react";
import Link from "next/link";
import Image from "next/image";
import NurtreeImage from '@/public/images/nurtree.png'

export default function Page() {
    return (
        <div className="justify-self-center pt-10">
          
            <Link
              key={1}
              href="/demos/nurtree/login"
              className="justify-self-center text-sm duration-500 text-zinc-500 hover:text-zinc-300"
            >
              <Image className="rounded-xl pyobject-scale-down w-48 justify-self-center" src={NurtreeImage} alt="NurtreeImage"/>
              <div className="justify-self-center">
              Nurtree
              </div>
              
            </Link>
            <p className="text-center text-balance">
              A blend of Spotify and Youtube API 
              <br></br>
            </p>
            <p className="text-center text-balance">
              Get a playlist of top music videos based on your personal Spotify playlists
            </p>
            <p className="text-center text-balance">
              Vercel, NextJS, TypeScript, JavaScript, HTML, Markdown, Tailwind/CSS
            </p>
        </div>
        
    )
}