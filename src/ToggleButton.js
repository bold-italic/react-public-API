import "./styles.css";
import React, { useState } from "react";

function ToggleButton() {
  const [buttonTitle, setButtonTitle] = useState("Search");
  const [buttonClass, setButtonClass] = useState("on");

  function buttonOnClick() {
    setButtonTitle("Searching...");
    setButtonClass("off");

    setTimeout(() => {
      setButtonTitle("Search");
      setButtonClass("on");
    }, 1000);
  }

  return (
    <button className={buttonClass} onClick={buttonOnClick}>
      {buttonTitle}
    </button>
  );
}

export default ToggleButton;
