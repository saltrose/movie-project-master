import React from "react";
import "./HeaderStyles.css";
import logo from "../../../assets/img/logo.png";

function Logo({ children, ...restProps }) {
  return (
    <div>
      <a href="/" {...restProps}>
        {children}
        <img className="logo" src={logo} alt="Tix Logo" />
      </a>
    </div>
  );
}

export default Logo;
