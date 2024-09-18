import React from "react";

interface ButtonProps {
  borderColor: string;
  children: React.ReactNode;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ borderColor, children, onClick }) => {
  return (
    <button
      className={`text-white border ${borderColor} py-3 px-10 hover:bg-white hover:text-black transition-all duration-300 rounded-xl`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
