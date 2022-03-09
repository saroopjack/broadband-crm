import React from "react";

const InputBox = ({
  name,
  label,
  onChange,
  value,
  type,
  required,
  inputStyle,
  autoComplete,
}) => {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700">{label}</label>
      <input
        name={name}
        autoComplete={autoComplete}
        type={type}
        value={value}
        required={required}
        onChange={onChange}
        className={`${
          inputStyle ??
          "mt-1 p-1 w-full border rounded-md shadow-sm sm:text-sm border-gray-300"
        } `}
      />
    </div>
  );
};

export default InputBox;
