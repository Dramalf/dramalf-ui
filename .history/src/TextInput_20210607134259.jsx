import React from "react";
import "./TextInput.css";

function TextInput({ type = "text", label, placeholder, onChange }) {

  return (
    <div className="simple-form-group">
      {label && <label className="simple-text-label">{label}</label>}
      <input
        type={type}
        className="simple-text-input"
        value={value}
        placeholder={placeholder}
        onChange={e => onChange && onChange(e.target.placeholder)}
      />
    </div>
  )
}

export default TextInput
