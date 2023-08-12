import React from "react";

function Faq({ num, title, text, curOpen, id, onOpen }) {
  const isOpen = num === curOpen

  function handleOpen() {
    isOpen ? onOpen(null) : onOpen(num)
  }

  return (
    <div onClick={handleOpen} className={`item ${isOpen ? "open" : ""}`}>
      <div className="question">
        <p
          className={`text-xl font-normal ${
            isOpen ? "text-[#087f5b]" : "text-[#ced4da]"
          }`}
        >
          {num < 10 ? `0${num + 1}` : num}
        </p>
        <p
          className={`text-xl font-semibold ${isOpen ? "text-[#087f5b]" : " "}`}
        >
          {title}
        </p>
        <p className="text-xl font-semibold">{isOpen ? "-" : "+"}</p>
      </div>

      {isOpen && <div className="content-box">{text}</div>}
    </div>
  );
}

export default Faq;
