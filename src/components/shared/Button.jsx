import React from "react";

const Button = ({
  children,
  className,
  onClick,
  type = "submit",
  dataAos,
  disabled,
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`${className} ${
        disabled ? "" : "active:scale-95 duration-300"
      }`}
      data-aos={dataAos}
      disabled={disabled || false}
    >
      {children}
    </button>
  );
};

export default Button;
