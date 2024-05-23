import React, { ReactNode } from "react";
import { StyledComponent } from "styled-components";
import { Default } from "./ButtonStyle";

interface ButtonProps extends React.ComponentProps<"button"> {
  children: ReactNode;
  Style?: StyledComponent<"button", any>;
}

function Button({ children, Style = Default, ...props }: ButtonProps) {
  return <Style {...props}>{children}</Style>;
}

export default Button;
