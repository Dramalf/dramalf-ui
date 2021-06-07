import React, { useEffect } from "react";
import "./TextInput.css";

function TextInput({ type = "text", label, value, onChange }) {
  useEffect(() => {
    console.log(props.value)
  });
  return (
    <div className="simple-form-group">
      {label && <label className="simple-text-label">{label}</label>}
      <input
        type={type}
        className="simple-text-input"
        value={value}

        onChange={e => onChange && onChange(e.target.value)}
      />
    </div>
  )
}

export default TextInput
