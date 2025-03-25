import { emailMQ } from "@/lib/actions";
import { Link } from "lucide-react";
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
    <div className="flex flex-col content-center justify-self-center pt-10 px-8">
      <p className="pb-10">
        Email sent to {d}. Please check your inbox for the message from the RabbitMQ queue
      </p>
      <a className="p-3" href="/demos/rabbitmq/">
        <button className=" rounded-xl hover:bg-slate-300 transition duration-300 bg-slate-500  p-3">Back to RabbitMQ Demo</button> 
      </a>
    </div>
  );
}

