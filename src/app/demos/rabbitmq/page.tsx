import React from "react";
import RabbitMQForm from "@/components/rabbitMQ-form";

export default function Page() {
  return (
    <div className="content-center justify-self-center pt-10 px-8 text-zinc-500">
      {/* <p className="pb-10">
        Provide your email to recieve a message from the RabbitMQ broker
      </p> */}
      <RabbitMQForm />
      {/* <a className="p-3" href="https://github.com/JohnathanKhoa/amqp" target="_blank">
        <button className="flex content-center justify-self-center rounded-xl text-black hover:text-zinc-300 hover:bg-black transition duration-300 bg-white p-3">
          GitHub
        </button>
      </a> */}
    </div>
  );
}
