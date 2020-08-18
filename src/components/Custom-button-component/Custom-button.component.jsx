import React from "react";

import { CustomButtonStyles } from "./Custom-button.styles";

const CustomButton = ({ children, ...props }) => (
  <CustomButtonStyles {...props}>{children}</CustomButtonStyles>
);

export default CustomButton;
