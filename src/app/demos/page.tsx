import React from "react";
import Link from "next/link";
import Image from "next/image";
import NurtreeImage from '@/public/images/nurtree.png'
import RetoolImage from '@/public/images/cloud.png'

export default function Page() {
    return (
        <div className="content-center justify-self-center pt-10 px-8">
          <div>
            <Link
              key={1}
              href="https://www.nurtree.com/"
              className="flex flex-col items-center justify-center text-sm duration-500 text-zinc-500 hover:text-zinc-300"
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
              Vercel, NextJS, TypeScript, JavaScript, HTML, Tailwind/CSS
            </p>
            </div>
            <div className="pt-10">
            <Link
              key={1}
              href="https://johnathankhoa.retool.com/app/blogportfolio/Home"
              className="flex flex-col items-center justify-center text-sm duration-500 text-zinc-500 hover:text-zinc-300"
            >
              <Image className="rounded-xl pyobject-scale-down w-48 justify-self-center" src={RetoolImage} alt="RetoolImage"/>
              <div className="justify-self-center">
                Blogging Service
              </div>
            </Link>
            <p className="text-center text-balance">
              **Non-Public, send me a message for access and demo** 
              <br></br>
            </p>
            <p className="text-center text-balance">
              Send, store, and modify messages in the AWS cloud
            </p>
            <p className="text-center text-balance">
              Java, Spring Framework, Maven, HTTP, REST API, JPA, JDBC, Hibernate, SQL Datasource, Jakarta, Lombok
              <br></br>
              AWS Elastic Beanstalk, EC2, RDS, S3
              <br></br>
              Retool, JavaScript, TypeScript, React
            </p>
            </div>
        </div>
        
    )
}