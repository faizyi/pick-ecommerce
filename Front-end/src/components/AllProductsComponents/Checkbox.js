import React from "react";

export default function Checkbox({ checked, onChange, label }) {
  return (
    <label className="flex items-center space-x-2">
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="form-checkbox h-4 w-4 text-blue-600"
      />
      <span>{label}</span>
    </label>
  );
}
