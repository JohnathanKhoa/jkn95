import React from "react";
import About from '../markdown/about.mdx'
import ProfileImage from '@/public/images/ProfileImage2.png'

export default function Page() {
    return (
        <>
        <div className="w-1/2 justify-self-center text-balance font-serif antialiased opacity-80">
        <h1 className="py-3.5 px-0.5 z-10 text-2xl text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display sm:text-2xl md:text-2xl whitespace-nowrap bg-clip-text ">
                <div className="">
                  <img className="pyobject-scale-down w-1/2 items-center justify-self-center rounded-xl bg-blend-soft-light shadow-lg shadow-black" src={ProfileImage.src} alt="Image"/>
                </div>
                <div className="pt-2">
                Johnathan Nguyen
                </div>
              </h1>
            <About className="font-serif"/>
        </div>
        
        </>
    )
}


