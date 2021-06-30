import React, { Fragment, useState } from "react";
import { ITask } from "../../../interfaces/task";
interface Params {
  addTask: (newTask: ITask) => void;
}
function Form({ addTask }: Params) {
  const [inputValue, updateInputValue] = useState<string>("");
  const [hasError, updateHasError] = useState<boolean>(false)
  const onClickAddButton = () => {
    if (inputValue === "") {
        updateHasError(true)
      return;
    }
    updateHasError(false)
    addTask({
      id: +(Math.random() * 1000000).toFixed(0),
      name: inputValue,
    });
    updateInputValue("");
  };
  const onKeyPress = (e: React.KeyboardEvent) => {
    const enterCode = 13;
    if (e.charCode === enterCode) {
      onClickAddButton();
    }
  };
  const renderError = () => {
    if (hasError) {
      return <div className="errorMessage">Invalid value</div>;
    }
    return null;
  };
  return (
    <Fragment>
      <div className="app-form">
        <input
          id="input-task"
          type="text"
          placeholder="Enter your task"
          value={inputValue}
          onChange={(e) => updateInputValue(e.target.value)}
          onKeyPress={onKeyPress}
        />
        <button id="add-button" onClick={onClickAddButton}>
          Add
        </button>
      </div>
      {renderError()}
    </Fragment>
  );
}
export default Form;
