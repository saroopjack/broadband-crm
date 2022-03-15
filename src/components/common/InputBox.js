import React from "react";

const InputBox = ({
  imp,
  register,
  name,
  label,
  onChange,
  value,
  defaultValue,
  type,
  required,
  inputStyle,
  autoComplete,
}) => {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700">
        {label}
        <span className="text-red-600">{imp}</span>
      </label>
      <input
        name={name}
        autoComplete={autoComplete}
        type={type}
        value={value}
        onChange={onChange}
        defaultValue={defaultValue}
        {...register(name, required)}
        className={`${
          inputStyle ??
          "mt-1 p-1 w-full border rounded-md shadow-sm sm:text-sm border-gray-300"
        } `}
      />
    </div>
  );
};

export default InputBox;
