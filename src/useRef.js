import React, { useState, useRef } from "react";

function TextDelay() {
  const [inputValue, setInputValue] = useState("");
  const [displayedValue, setDisplayedValue] = useState("");

  const inputRef = useRef(null);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleDisplayClick = () => {
    const currentInput = inputRef.current.value;

    setTimeout(() => {
      setDisplayedValue(currentInput);
    }, 1000);
  };

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        ref={inputRef}
      />

      <button onClick={handleDisplayClick}>Display</button>
      <p>Text: {displayedValue}</p>
    </div>
  );
}

export default TextDelay;
