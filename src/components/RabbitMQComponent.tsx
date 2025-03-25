"use client";
import Image from "next/image";
import Link from "next/link";
import RabbitMQImage from "@/public/images/rabbitmq-logo-png-transparent.png";
import { useState } from "react";

export default function RabbitMQComponent() {
  const [hoveredDescription, setHoveredDescription] = useState<boolean | null>(
    false
  );

  return (
    <>
      {}
      <div>
        <Link
          key={1}
          href="/demos/rabbitmq/"
          className="flex flex-col items-center justify-center text-sm duration-200 text-zinc-500 hover:text-zinc-300"
        >
          <Image
            className="rounded-xl pyobject-scale-down w-48 justify-self-center"
            src={RabbitMQImage}
            alt="NurtreeImage"
            onMouseEnter={() => setHoveredDescription(true)}
            onMouseLeave={() => setHoveredDescription(false)}
          />
          <div className="justify-self-center">RabbitMQ</div>
        </Link>
        <div>
          <p
            className={
              hoveredDescription
                ? "opacity-100 transition duration-300 text-center text-balance"
                : "opacity-0 transition duration-300 text-center text-balance"
            }
          >
            Send emails to a queue and have them processed by a worker
            <br></br>
          </p>
          <p
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
        </div>
      </div>
    </>
  );
}
