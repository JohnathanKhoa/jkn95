import ProfileImg from "@/public/images/Prf.jpg";
import Image from "next/image";
export default function ProfileImage() {
  return (
    <>
      <div className="items-center justify-center ">
        <div className="">
          <Image
            className="pyobject-scale-down rounded w-64 justify-self-center"
            src={ProfileImg}
            alt="Image"
          />
        </div>
      </div>
    </>
  );
}
