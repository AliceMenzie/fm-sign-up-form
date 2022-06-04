import React from "react";

interface BannerProps {
  children: React.ReactNode;
}

export default function Banner({ children }: BannerProps) {
  return (
    <div className="shadow-custom2 bg-purple text-white w-[327px] md:w-[540px] h-[88px] md:h-[60px] flex flex-col justify-center items-center text-center rounded-md px-6">
      {children}
    </div>
  );
}
