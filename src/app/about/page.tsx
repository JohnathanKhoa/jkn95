import React from "react";
import About from "../markdown/about.mdx";
import ProfileImage from "@/public/images/ProfileImage2.png";
import Image from "next/image";
export default function Page() {
  return (
    <>
      <div className="pt-24 flex flex-col items-center justify-center text-balance  antialiased opacity-100">
        <div className="">
          <Image
            className="pyobject-scale-down rounded-xl w-48 justify-self-center"
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
            Born and raised in Chino Hills, California. San Bernardino County
            <br />
            <br />
            Had my first computer at 10 years old and wanted to be a developer
            ever since
            <br />
            <br />
            Started programming in high school, taking extra credit classes and
            learning Java, Python, and C++
            <br />
            <br />
            Majored in Computer Science at Cal Poly Pomona and graduated with a
            Bachelors of Science
            <br />
            <br />
            Moved across the states for work, gaining experience working with Spring Microservices
            <br />
            <br />
            Now keeping steady track to pursue higher levels in all stacks and
            languages
            <br />
            <br />
            <br />
            <br />
            *Fun fact I am the middle child of 5 siblings, all brothers.*
            <div></div>
          </div>
        </div>
      </div>
    </>
  );
}
