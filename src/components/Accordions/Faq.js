import React, { useState } from "react";

function Faq(props) {
  const [isOpen, setIsOpen] = useState(false);

  function handleClick() {
    setIsOpen((prev) => !prev);
    console.log("Opened!");
  }

  return (
    <div onClick={handleClick} className={`item ${isOpen ? "open" : ""}`}>
      <div className="question">
        <p
          className={`text-xl font-normal ${
            isOpen ? "text-[#087f5b]" : "text-[#ced4da]"
          }`}
        >
          {props.num < 10 ? `0${props.num + 1}` : props.num}
        </p>
        <p
          className={`text-xl font-semibold ${
            isOpen ? "text-[#087f5b]" : " "
          }`}
        >
          {props.title}
        </p>
        <p className="text-xl font-semibold">{isOpen ? "-" : "+"}</p>
      </div>

      {isOpen && <div className="content-box">{props.text}</div>}
    </div>
  );
}

export default Faq;
