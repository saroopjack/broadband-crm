import React from "react";

const Dropdown = ({
  register,
  required,
  label,
  optionList,
  onChange,
  name,
  value,
}) => {
  return (
    <div>
      <label
        htmlFor="country"
        className="block text-sm font-medium text-gray-700"
      >
        {label}
      </label>
      <select
        id="country"
        name={name}
        value={value}
        {...register(name, required)}
        autoComplete="country-name"
        onChange={onChange}
        className="mt-1 block w-full py-1 px-3 border border-gray-300 bg-white rounded-md shadow-sm  sm:text-sm"
      >
        {optionList?.map((value, idx) => {
          return <option key={idx}>{value}</option>;
        })}
      </select>
    </div>
  );
};

export default Dropdown;
