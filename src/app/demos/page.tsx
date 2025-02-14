import React from "react";
import Link from "next/link";
import Image from "next/image";
import NurtreeImage from '@/public/images/nurtree.png'

export default function Page() {
    return (
        <div className="justify-self-center ">
          
            <Link
              key={1}
              href="/demos/nurtree/login"
              className="justify-self-auto text-sm duration-500 text-zinc-500 hover:text-zinc-300"
            >
              <Image className="rounded-xl pyobject-scale-down w-48 justify-self-center" src={NurtreeImage} alt="NurtreeImage"/>
              <div className="justify-self-center">
              Nurtree
              </div>
              
            </Link>
            <p className="justify-self-center">
              A blend of Spotify and Youtube API 
              <br></br>
            </p>
            <p className="justify-self-center">
              Get a playlist of top music videos based on your top tracks
            </p>
            <p>
              Vercel, NextJS, TypeScript, JavaScript, HTML, Markdown, CSS, App Router
            </p>
        </div>
        
    )
}