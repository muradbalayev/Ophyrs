import React from "react";
import { Link } from "react-router-dom";
const Button = ({ text, href }) => {
  return (
    <Link
      to={href}
      className="px-8 py-3 border-2 border-black  text-black uppercase font-medium hover:bg-black hover:text-white hover:bg-opacity-10 transition duration-300"
    >
      {text}
    </Link>
  );
};

export default Button;
