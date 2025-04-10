"use client";
import Image from "next/image";
import Link from "next/link";
import RabbitMQImage from "@/public/images/rabbitmq-logo-png-transparent.png";
import { useState } from "react";

export default function RabbitMQHero() {
  const [hoveredDescription, setHoveredDescription] = useState<boolean | null>(
    false
  );

  return (
    <>
      {}
      <div className="flex flex-row items-center justify-end gap-10  text-zinc-500">
        <Link
          key={1}
          href="/demos/rabbitmq/"
          className=" items-center justify-center text-sm duration-200 text-zinc-500 hover:text-zinc-300"
        >
          <div>
            <Image
              className="rounded-xl  justify-self-center"
              src={RabbitMQImage}
              alt="NurtreeImage"
              onMouseEnter={() => setHoveredDescription(true)}
              onMouseLeave={() => setHoveredDescription(false)}
              width={150}
              height={150}
            />
            <div className="justify-self-center">RabbitMQ</div>
          </div>
        </Link>
        {/* <div className="">
          <p
            className={
              hoveredDescription
                ? "opacity-100 transition duration-300 text-center text-balance"
                : "opacity-0 transition duration-300 text-center text-balance"
            }
          >
            Simple email service
            <br></br>
          </p>
          {/* <p
            className={
              hoveredDescription
                ? "opacity-100 transition duration-300 text-center text-balance"
                : "opacity-0 transition duration-300 text-center text-balance"
            }
          >
            Optional: Retrieve guest-user credentials
            <br></br>
          </p> */}
        {/* <p
            className={
              hoveredDescription
                ? "opacity-100 transition duration-500 text-center text-balance"
                : "opacity-0 transition duration-500 text-center text-balance"
            }
          >
            Java, Spring Framework, RabbitMQ
          </p>
          <p
            className={
              hoveredDescription
                ? "opacity-100 transition duration-700 text-center text-balance"
                : "opacity-0 transition duration-700 text-center text-balance"
            }
          >
            AWS MQ, Heroku, Docker
          </p> 
        </div> */}
      </div>
    </>
  );
}
