import { ComponentProps } from "react";

type ButtonProps = ComponentProps<"button">;

export default function ButtonBase({
  children,
  onClick,
  type,
  ...props
}: ButtonProps) {
  return (
    <button onClick={onClick} type={type || "button"} {...props}>
      {children}
    </button>
  );
}
