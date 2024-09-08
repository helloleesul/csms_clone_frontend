import { ChangeEvent, ReactNode } from "react";

type LoginTextFieldProps = {
  type: string;
  placeholder: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  children?: ReactNode;
};

export const LoginTextField = ({
  type,
  placeholder,
  value,
  children,
  onChange,
}: LoginTextFieldProps) => {
  return (
    <div className="bg-[#353743] rounded px-3 py-2 flex">
      <input
        type={type}
        className="bg-transparent outline-none text-white font-gotham flex-1 autofill:shadow-[inset_0_0_0px_1000px_rgb(53,55,67)] autofill:text-fill-white autofill:transition-colors autofill:duration-[5000000ms]"
        placeholder={placeholder}
        onChange={onChange}
        value={value}
      />
      {children}
    </div>
  );
};
