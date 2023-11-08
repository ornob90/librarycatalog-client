import React from "react";

const Input = ({ className, onChange, type = "text", name, placeholder }) => {
  return (
    <input
      className={`dark:focus:text-dark-mode w-full py-2 pl-2 border rounded-md focus:outline-none ${className}`}
      type={type}
      name={name}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
};

export default Input;
