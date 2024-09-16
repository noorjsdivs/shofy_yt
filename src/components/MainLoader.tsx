import Image from "next/image";
import { logo } from "../assets";

const MainLoader = () => {
  return (
    <div className="w-full min-h-screen absolute top-0 left-0 bg-white flex flex-col gap-2 items-center justify-center z-50">
      <div className="w-52 p-4 rounded-lg bg-amazonBlue flex items-center justify-center relative">
        <Image
          src={logo}
          alt="Logo"
          className="w-48 h-auto object-contain"
          priority
        />
      </div>

      <span className="w-14 h-14 inline-flex border-8 border-borderColor rounded-full relative">
        <span className="w-14 h-14 border-8 border-r-skyColor border-b-borderColor border-t-borderColor border-l-borderColor rounded-full absolute -top-2 -left-2 animate-spin" />
      </span>
      <p className="text-lg text-center font-semibold tracking-wide text-themeColor tracking-wide">
        Loading...
      </p>
    </div>
  );
};

export default MainLoader;
