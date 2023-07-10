import React from "react";

const RadioButton = ({
  inputLabelClass,
  inputLabel,
  inputType,
  inputList,
  inputClass,
  handleOnChange,
}) => {
  return (
    <div className="flex flex-col gap-1 w-full justify-end">
      {inputLabel !== "" && (
        <label className={inputLabelClass}>{inputLabel}</label>
      )}
      <div className="flex items-center gap-4">
        {inputList.map((item) => {
          return (
            <div className="flex" onChange={handleOnChange} key={item.value}>
              <input type={inputType} value={item.value} name="applyType" />
              <span className={inputClass}> {item.name}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RadioButton;
