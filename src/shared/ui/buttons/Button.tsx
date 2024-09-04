import { ComponentProps, ReactNode } from "react";

import { twMerge } from "tailwind-merge";

type ButtonFontProps = ComponentProps<"button"> & {
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

export const Button = ({ color, children }: ButtonFontProps) => {
  return (
    <button
      className={twMerge(
        `font-gotham font-medium text-2xl outline-none px-6 py-5 rounded-lg text-white ${colorVariants[color]}`,
      )}
    >
      {children}
    </button>
  );
};
