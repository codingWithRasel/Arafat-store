import React from "react";
import { twMerge } from "tailwind-merge";
const Button = ({ type, onClick, children, variant, className }) => {
  const variants = {
    primary: "bg-blue-600 hover:bg-blue-700",
    secondary: "bg-gray-500 hover:bg-gray-600",
    warning: "bg-yellow-400 hover:bg-yellow-500",
    success: "bg-green-600 hover:bg-green-700",
    danger: " bg-red-500 hover:bg-red-600",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={twMerge(
        `${
          variant ? variants[variant] : variants.primary
        }  px-[10px] py-[6px] text-white rounded-md border duration-200 whitespace-nowrap, ${className}`
      )}
    >
      {children}
    </button>
  );
};

export default Button;
