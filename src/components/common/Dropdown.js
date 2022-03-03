import React from "react";

const Dropdown = ({ label, optionList, onChange }) => {
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
        name="country"
        autoComplete="country-name"
        onChange={onChange}
        className="mt-1 block w-full py-1 px-3 border border-gray-300 bg-white rounded-md shadow-sm  sm:text-sm"
      >
        {optionList?.map((option, idx) => {
          return <option key={idx}>{option}</option>;
        })}
      </select>
    </div>
  );
};

export default Dropdown;
