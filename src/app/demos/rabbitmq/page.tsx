import React from "react";
import RabbitMQForm from "@/components/jkn95/RabbitMQForm";

export default function Page() {
  return (
    <div className="content-center justify-self-center pt-16 px-8 text-zinc-500">
      <RabbitMQForm />
      {/* <a className="p-3" href="https://github.com/JohnathanKhoa/amqp" target="_blank">
        <button className="flex content-center justify-self-center rounded-xl text-black hover:text-zinc-300 hover:bg-black transition duration-300 bg-white p-3">
          GitHub
        </button>
      </a> */}
    </div>
  );
}
