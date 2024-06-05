import React from "react";

const Input = ({ label, type, onChange, name, placeholder, value }) => {
  return (
    <div className="input-parent">
      {label && <label htmlFor={name}>{label}</label>}
      <input
        value={value}
        placeholder={placeholder}
        className="main-input"
        type={type || "text"}
        onChange={(e) => onChange(name, e.target.value)}
        name={name}
        id={name}
      />
    </div>
  );
};

export default Input;
