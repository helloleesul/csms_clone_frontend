import { ComponentProps, ReactNode } from "react";

import { twMerge } from "tailwind-merge";

type ButtonProps = ComponentProps<"button"> & {
  color: "white" | "success" | "primary" | "secondary" | "danger" | "gray";
  children: ReactNode;
};

const colorVariants = {
  white: "bg-white text-black",
  success: "bg-success",
  primary: "bg-primary",
  secondary: "bg-secondary",
  danger: "bg-danger",
  gray: "bg-gray200 text-black",
};

export const Button = ({ color, children }: ButtonProps) => {
  return (
    <button
      className={twMerge(
        `w-full font-gotham font-medium text-sm outline-none px-4 py-2 rounded-[3px] text-white ${colorVariants[color]}`,
      )}
    >
      {children}
    </button>
  );
};
