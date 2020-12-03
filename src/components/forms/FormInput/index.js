import React from "react";
import "./styles.scss";

function FormInput({ handleChange, label, ...restProps }) {
  return (
    <div className="formRow">
      {label && <label>{label}</label>}

      <input className="formInput" onChange={handleChange} {...restProps} />
    </div>
  );
}

export default FormInput;
