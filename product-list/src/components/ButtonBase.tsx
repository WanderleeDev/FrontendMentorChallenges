import { ButtonHTMLAttributes } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  onClick?: () => void
}

export default function ButtonBase({ children, onClick, type, ...props }: Props) {
  return (
    <button onClick={onClick} type={type || "button"} {...props}>
      {children}
    </button>
  );
}
