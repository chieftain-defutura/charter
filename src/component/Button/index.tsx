import React, { ButtonHTMLAttributes } from "react";
import "./Button.scss";

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant: "primary" | "secondary";
  size?: "small" | "medium" | "large";
  children: React.ReactNode;
  onClick: () => void;
}

const Button: React.FC<IButton> = ({
  variant,
  onClick,
  size,
  children,
  type = "button",
  ...rest
}) => {
  return (
    <>
      <button
        type={type}
        onClick={onClick}
        className={` btn btn-${variant} ${size}`}
        {...rest}
      >
        {children}
      </button>
    </>
  );
};

export default Button;
