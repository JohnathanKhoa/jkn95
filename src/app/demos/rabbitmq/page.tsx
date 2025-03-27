import React from "react";
import RabbitMQForm from "@/components/rabbitMQ-form";

export default function Page() {
  return (
    <div className="content-center justify-self-center pt-10 px-8">
      <p className="pb-10">
        Provide your email to recieve a message from the RabbitMQ broker
      </p>
      <RabbitMQForm />
    </div>
  );
}
