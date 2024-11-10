import React, { InputHTMLAttributes } from "react";

import ArrowDownIcon from "./_components/ArrowDownIcon";
import CalendarIcon from "./_components/CalendarIcon";

type Props = InputHTMLAttributes<HTMLInputElement> & {
  variant?: "error";
  id: string;
  placeholder?: string;
};

const Input = React.forwardRef<HTMLInputElement, Props>((props, ref) => {
  const { id, placeholder, variant, className, type, ...attrs } = props;
  return (
    <label htmlFor={id} className="relative block rounded-md border border-foreground shadow-sm focus-within:border-pink-disabled focus-within:ring-1 focus-within:ring-pink-disabled">
      {type === "date" ? <CalendarIcon /> : false}
      <input id={id} className={`input peer border-none bg-transparent placeholder-transparent focus:ring-0 ${variant === "error" ? "error" : ""} ${type === "date" ? "px-[34px]" : ""} ${className ? className : ""}`} placeholder={placeholder} ref={ref} {...attrs} />
      <span className={`pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 p-0.5 text-xs transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs ${placeholder ? "bg-background" : ""} ${type === "date" ? "start-9" : ""}`}>{placeholder}</span>
      {type === "date" ? <ArrowDownIcon /> : false}
    </label>
  );
});

Input.displayName = "Input";

export default Input;
