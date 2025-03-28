import React from "react";
import About from "../markdown/about.mdx";
import ProfileImage from "@/public/images/Prf.jpg";
import Image from "next/image";
export default function Page() {
  return (
    <>
      <div className="pt-24 flex flex-row items-center justify-center text-balance  antialiased opacity-100">
        
          <div className="">
            <Image
              className="pyobject-scale-down rounded-xl w-96 justify-self-center"
              src={ProfileImage}
              alt="Image"
            />
          </div>
        
        <div className="flex flex-col items-center justify-center text-balance">
        <h2 className="pt-2">Johnathan Nguyen</h2>
        <h3 className="pt-10">About me</h3>
        <div className="text-pretty text-center px-8">
          <br />
          <br />
          Coding enthusiast, web developer, software engineer
          <br />
          <br />
          Born and raised in Southern California, Orange County
          <br />
          <br />
          Had my first computer at 10 years old and wanted to be a developer ever since
          <br />
          <br />
          Started programming in high school, taking extra credit classes and learning Java and C++
          <br />
          <br />
          Majored in Computer Science at Cal Poly Pomona and graduated with a Bachelors of Science
          <br />
          <br />
          Moved across the states for work, gaining more experience and strengthening my tech stack
          <br />
          <br />
          Pursuing higher levels in career and personal growth
        </div>
        </div>
      </div>
    </>
  );
}
