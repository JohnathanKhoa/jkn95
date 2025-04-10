import ProfileImg from "@/public/images/Prf.jpg";
import Image from "next/image";
export default function ProfileImage() {
  return (
    <>
      <div className="flex flex-col items-center justify-center text-balance">
        <div className="">
          <Image
            className="pyobject-scale-down rounded-xl w-48 justify-self-center"
            src={ProfileImg}
            alt="Image"
          />
        </div>
      </div>
    </>
  );
}
