import React,{useEffect} from "react";
import "./TextInput.css";

const TextInput = ({ type = "text", label, value, onChange }) => (
  <div className="simple-form-group">
    {label && <label className="simple-text-label">{label}</label>}
    <input
      type={type}
      className="simple-text-input"
      value={12}
      
      onChange={e => onChange && onChange(e.target.value)}
    />
  </div>
);

export default TextInput;