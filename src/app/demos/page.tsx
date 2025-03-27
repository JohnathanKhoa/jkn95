import React from "react";
import NurtreeComponent from "@/components/NurtreeComponent";
import BloggingServiceComponent from "@/components/BloggingServiceComponent";
import RabbitMQComponent from "@/components/RabbitMQComponent";

export default function Page() {
  return (
    <div className="content-center justify-self-center pt-10 px-8">
      <div className="flex flex-col  items-start justify-end pt-10 px-8">
        <RabbitMQComponent />
        <BloggingServiceComponent />
        <NurtreeComponent />
      </div>
    </div>
  );
}
