import React from "react";
import Link from "next/link";
import Image from "next/image";
import NurtreeImage from "@/public/images/nurtree.png";
import RetoolImage from "@/public/images/cloud.png";
import NurtreeComponent from "@/components/NurtreeComponent";
import BloggingServiceComponent from "@/components/BloggingServiceComponent";

export default function Page() {
  return (
    <div className="content-center justify-self-center pt-10 px-8">
      <p className="pb-10">
        *NonPublic. Please request me to include your email for access*
      </p>
      <NurtreeComponent />
      <BloggingServiceComponent />
    </div>
  );
}
