/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const Sobre = ({ className, text = "SOBRE" }) => {
  return (
    <div className={`sobre ${className}`}>
      <div className="SOBRE">{text}</div>
    </div>
  );
};

Sobre.propTypes = {
  text: PropTypes.string,
};
