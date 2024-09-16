"use client";
import Link from "next/link";
import { twMerge } from "tailwind-merge";

interface Props {
  children: React.ReactNode;
  className?: string;
  href?: string;
  onClick?: any;
}

const Button = ({ children, className, href, onClick }: Props) => {
  return (
    <>
      {href ? (
        <Link
          href={href}
          className={twMerge(
            "bg-themeColor/80 text-white py-2 px-6 hover:bg-themeColor cursor-pointer duration-200",
            className
          )}
        >
          {children}
        </Link>
      ) : (
        <button
          onClick={onClick}
          className={twMerge(
            "bg-themeColor/80 text-white py-2 px-6 hover:bg-themeColor cursor-pointer duration-200",
            className
          )}
        >
          {children}
        </button>
      )}
    </>
  );
};

export default Button;
