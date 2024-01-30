import React from "react";
import { LogoIcon } from "../images/index";

const Footer = () => {
  return (
    <footer>
      <img src={LogoIcon} alt="Logo-Icon" />
      <span>
        Made With 💙 , Rafikul and <b>React.Js</b>.
      </span>
    </footer>
  );
};

export default Footer;
