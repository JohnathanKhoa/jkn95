import Image from "next/image";
import ProfileImg from "@/public/images/Prf.jpg";



export default function Blur() {
  return (
    <>
      
        <div className=" z-10 h-full  w-1/5  bg-opacity-50 backdrop-blur-lg shadow-2xl"></div>
        <div className="fixed -z-10  h-full  w-1/5 ">
          <Image
            src={ProfileImg}
            alt={""}
            height={3000}
            width={3000}
            quality={100}
            priority={true}
            className="object-stretch object-cover w-full h-full rounded-xl"
          />
        </div>
      
    </>
  );
}
