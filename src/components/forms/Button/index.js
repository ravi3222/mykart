import React from "react";
import "./styles.scss";

function Button({ children, ...restProps }) {
  return (
    <button className="btn" {...restProps}>
      {children}
    </button>
  );
}

export default Button;
