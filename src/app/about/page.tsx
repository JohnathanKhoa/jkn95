import React from "react";
export default function Page() {
  return (
    <>
      <div className="pt-24 flex flex-col items-center justify-center text-balance  antialiased opacity-100">
        {/* <div className="">
          <Image
            className="pyobject-scale-down rounded-xl w-48 justify-self-center"
            src={ProfileImage}
            alt="Image"
          />
        </div> */}

        <div className="flex flex-col items-center justify-center text-balance text-zinc-300 tracking-widest p">
          <div className=" text-center">
            About me
            <div className="py-8">
              Coding enthusiast, web developer, software engineer
            </div>
            <div className="flex items-end justify-center">
              <a className="w-1/2 ">
                Motivated to discover new solutions to countless real-world
                problems by using software engineering and programming skills
                acquired in the field of Computer Science. Experienced in
                working under a professional setting and not afraid to take
                initiative on important tasks and opportunities. Flexible and
                quick to adapt when working with new tools and changing
                environments. Always open to grow and learn more from mentors
                and peers. Eager to contribute hard work and critical thinking.
                Dedicated to help accomplish goals and reach milestones.
              </a>
            </div>
            {/*  */}
          </div>
        </div>
      </div>
    </>
  );
}
