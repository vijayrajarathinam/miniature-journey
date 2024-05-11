import { cn } from "@/lib/utils";
import React, { HTMLAttributes } from "react";

interface PhoneProps extends HTMLAttributes<HTMLDivElement> {
  imgSrc: string;
  dark?: boolean;
}

const Phone = ({ imgSrc, className, dark = false, ...props }: PhoneProps) => {
  return (
    <div
      className={cn(
        "relative pointer-events-none z-50 overflow-hidden",
        className
      )}
      {...props}
    >
      <img
        className="pointer-events-none z-50 select-none"
        src={`/phone-template-${dark ? "dark" : "white"}-edges.png`}
      />
      <div className="absolute -z-10 inset-0 ">
        <img className="object-cover" src={imgSrc} alt="overlay phone image" />
      </div>
    </div>
  );
};

export default Phone;
