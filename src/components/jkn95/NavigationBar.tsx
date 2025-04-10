import Hamburger from "./Hamburger";

export default function NavigationBar() {
  return (
    <header className="fixed z-50 items-center w-screen bg-[#1f1f1f]">
      <div className="flex flex-row items-center justify-between p-4  ">
        <div className="flex flex-row">
          <div className="flex flex-row items-start gap-2 ">
            <Hamburger />
            <div
              className={`text-xl font-semibold tracking-tight text-pretty text-slate-500`}
            ></div>
          </div>
        </div>
      </div>
    </header>
  );
}
