import React from "react";
import About from '../markdown/about.mdx'
import ProfileImage from '@/public/images/ProfileImage2.png'

export default function Page() {
  return (
    <>
      <div className="flex flex-col items-center justify-center text-balance  antialiased opacity-100">
        <h1 className="py-3.5 px-0.5 z-10 text-2xl text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display sm:text-2xl md:text-2xl whitespace-nowrap bg-clip-text ">
          <div className="">
            <img className="pyobject-scale-down rounded-xl  " src={ProfileImage.src} alt="Image"/>
          </div>
        </h1>
        <h2 className="pt-2">
          Johnathan Nguyen
        </h2>
        <h3 className="pt-10">
          About me
        </h3>
        <div className="text-pretty text-center px-8">
            <br/><br/>
            Coding enthusiast, web developer, software engineer
            <br/><br/>
            Graduated with a Bachelors of Science, in Computer Science, at Cal Poly Pomona
            <br/><br/>
            Started as a Java Developer creating backend services using Spring Framework and SQL
            <br/><br/>
            Proceeded into full-stack development learning frontend React and NextJS
            <br/><br/>
            Now currently pushing career building full-scale web applications
        </div>
    </div>
    
    </>
  )
}


