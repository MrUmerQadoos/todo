"use client";

import { useTheme } from "next-themes";
import Image from "next/image";

// Import images
import { camile, sean } from "../../public";
// import sean from "../../public/sean.jpg";

const Banner: React.FC = () => {
  const { theme } = useTheme();

  return (
    <div className="relative w-full h-[318px]">
      <div className="absolute inset-0 bg-gradient-to-r from-[#a86ff0] to-[#8498f7] opacity-60"></div>
      <div className="relative z-10 w-full h-full">
        <Image
          src={theme === "dark" ? sean : camile}
          alt="Banner Image"
          fill
          style={{ objectFit: "cover" }}
          className="opacity-70"
        />
      </div>
    </div>
  );
};

export default Banner;
