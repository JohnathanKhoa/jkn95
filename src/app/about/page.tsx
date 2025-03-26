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
          Grew up in a lively household as the middle child of 5 brothers
          <br />
          <br />
          Found interest building computers, and learning about
          technology at a young age
          <br />
          <br />
          Graduated with a Bachelors of Science, in Computer Science at Cal Poly Pomona
          <br />
          <br />
          Moved across the states for work, gaining valuable experience in the tech industry
          <br />
          <br />
          Now continuing pursuit for higher levels in career and personal growth
        </div>
        </div>
      </div>
    </>
  );
}
