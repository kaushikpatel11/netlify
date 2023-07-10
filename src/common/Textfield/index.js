import React from "react";

const Textfield = ({
  inputLabelClass,
  inputLabel,
  inputType,
  inputPlaceholder,
  inputClass,
  inputName,
  handleOnChange,
  inputValue,
}) => {
  return (
    <div className="flex flex-col gap-1 w-full justify-end">
      {inputLabel !== "" && (
        <label className={inputLabelClass}>{inputLabel}</label>
      )}
      <input
        type={inputType}
        placeholder={inputPlaceholder}
        className={inputClass}
        name={inputName}
        onChange={handleOnChange}
        value={inputValue}
      />
    </div>
  );
};

export default Textfield;
