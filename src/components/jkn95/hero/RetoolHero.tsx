"use client";
import Image from "next/image";
import Link from "next/link";
import RetoolImage from "@/public/images/cloud.png";
import { useState } from "react";

export default function RetoolHero() {
  const [hoveredDescription, setHoveredDescription] = useState<boolean | null>(
    false
  );

  return (
    <>
      <div className="pt-2 flex flex-row items-center justify-end gap-10  text-zinc-500">
        <Link
          key={1}
          href="https://github.com/JohnathanKhoa/Retool-CloudAWS"
          className="flex flex-col items-center justify-center text-sm duration-200 text-zinc-500 hover:text-zinc-300"
          target="_blank"
        >
          <Image
            className="rounded-xl  justify-self-center"
            src={RetoolImage}
            alt="RetoolImage"
            onMouseEnter={() => setHoveredDescription(true)}
            onMouseLeave={() => setHoveredDescription(false)}
            width={150}
            height={150}
          />
          <div className="flex flex-col justify-self-center">Microservice</div>
        </Link>
        {/* <div>
          {/* <p
            className={
              hoveredDescription
                ? "opacity-100  transition duration-300 text-center text-balance"
                : "opacity-0  transition duration-300 text-center text-balance"
            }
          >
            OAuth secured with managed roles and permissions to handle query access and visibility
          </p> */}
        {/* <p
            className={
              hoveredDescription
                ? "opacity-100 transition duration-500 text-center text-balance"
                : "opacity-0 transition duration-500 text-center text-balance"
            }
          >
            Query controller for managing databases in the AWS cloud
          </p> */}

        {/* <p
            className={
              hoveredDescription
                ? "opacity-100 transition duration-700 text-center text-balance"
                : "opacity-0 transition duration-700 text-center text-balance"
            }
          >
            Java, Spring Framework, Hibernate, OAuth
          </p>
          <p
            className={
              hoveredDescription
                ? "opacity-100 transition duration-900 text-center text-balance"
                : "opacity-0 transition duration-900 text-center text-balance"
            }
          >
            Retool, AWS Elastic Beanstalk, EC2, RDS, S3, Docker
          </p> 
        </div> */}
      </div>
    </>
  );
}
