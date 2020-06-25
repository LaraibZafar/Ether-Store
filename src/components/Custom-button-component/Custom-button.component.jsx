import React from "react";
import "./Custom-button.styles.scss";
const CustomButton = ({ children, isGoogleButton, ...otherProps }) => (
  <button
    className={`${isGoogleButton ? "Google" : ""} custom-button`}
    {...otherProps}
  >
    {children}
  </button>
);

export default CustomButton;
