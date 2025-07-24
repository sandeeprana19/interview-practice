import React, { useRef } from "react";

const FocusInput = () => {
  const inputRef = useRef();

  const handleInputFocus = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <div className="flex items-stretch justify-center gap-x-2 pt-10">
      <input
        type="text"
        placeholder="Type here"
        className="border p-2"
        ref={inputRef}
      />
      <button
        className="bg-[#f0f0f0] border border-gray-400 p-2 transition-all hover:bg-[#ebebeb]"
        onClick={handleInputFocus}
      >
        Focus Input
      </button>
    </div>
  );
};

export default FocusInput;
