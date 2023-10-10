import React from "react";
import "./Button.scss";

interface IButton {
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
  ...rest
}) => {
  return (
    <>
      <button
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
