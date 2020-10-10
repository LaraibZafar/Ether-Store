import React from "react";
import "./form.styles.scss";

const Form = ({ handleChange, name, label, ...otherProps }) => (
  <div className="Form-Container">
    {name ? (
      <label
        className={`${otherProps.value.length ? "User-Input" : ""} Form-Label`}
      >
        {label}
      </label>
    ) : null}
    <input
      className="Form-Input"
      onChange={handleChange}
      name={name}
      {...otherProps}
    />
  </div>
);
export default Form;
