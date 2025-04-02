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
      <div className="pt-2 flex flex-row items-center justify-end gap-10 font-mono text-zinc-500">
        <Link
          key={1}
          href="https://github.com/JohnathanKhoa/Retool-CloudAWS"
          className="flex flex-col items-center justify-center text-sm duration-200 text-zinc-500 hover:text-zinc-300"
        >
          <Image
            className="rounded-xl pyobject-scale-down w-48 justify-self-center"
            src={RetoolImage}
            alt="RetoolImage"
            onMouseEnter={() => setHoveredDescription(true)}
            onMouseLeave={() => setHoveredDescription(false)}
          />
          <div className="justify-self-center">Retool + Spring + AWS</div>
        </Link>
        <div>
          <p
            className={
              hoveredDescription
                ? "opacity-100  transition duration-300 text-center text-balance"
                : "opacity-0  transition duration-300 text-center text-balance"
            }
          >
            OAuth secured with managed roles and permissions to handle query access and visibility
          </p>
          <p
            className={
              hoveredDescription
                ? "opacity-100 transition duration-500 text-center text-balance"
                : "opacity-0 transition duration-500 text-center text-balance"
            }
          >
            Save, update, retrieve, and remove queried data in the AWS cloud
          </p>

          <p
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
        </div>
      </div>
    </>
  );
}
