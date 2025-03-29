import { emailMQ } from "@/lib/actions";
import React from "react";

interface Props {
  params: Promise<{
    email: string;
  }>;
}
export default async function Page({ params }: Props) {
  const param = await params;
  const d = decodeURIComponent(param.email);

  const response = await emailMQ(d);
  return (
    <div className="flex flex-col content-center justify-self-center pt-10 px-8 text-zinc-500">
      <p className="pb-10">Email sent to {d}. Please check your inbox.</p>
      <a className="p-3" href="/demos/rabbitmq/">
        <button className=" rounded-xl text-black hover:text-zinc-300 hover:bg-black transition duration-300 bg-white p-3">
          Back to RabbitMQ Demo
        </button>
      </a>
    </div>
  );
}
