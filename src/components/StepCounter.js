import React, { useState } from "react";

function StepCounter() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1)

  const date = new Date();
  date.setDate(date.getDate() + count);

  function handleChange(event) {
    setCount(Number(event.target.value))
  }

  function resetHandler() {
    setCount(0);
    setStep(1);
  }

  return (
    <div className="text-center mt-5">
      <div className="step flex gap-2 justify-center items-center mb-3">
      <input
          type="range"
          min="0"
          max="10"
          value={step}
          onChange={(e) => setStep(Number(e.target.value))}
        />
        <span>Step: {step}</span>
      </div>

      <div className="count flex gap-2 justify-center items-center mb-3">
        <button
          className="btn"
          onClick={() => setCount((prevcount) => prevcount - step)}
        >
          -
        </button>
        <input type="text" value={count} placeholder={0} onChange={handleChange} className="border-black border-[1px] rounded-sm px-1" />
        <button
          className="btn"
          onClick={() => setCount((prevcount) => prevcount + step)}
        >
          +
        </button>
      </div>

      <p>
        <span>
          {count === 0
            ? "Today is "
            : count > 0
            ? `${count} days from today is `
            : `${Math.abs(count)} days ago was `}
        </span>
        <span>{date.toDateString()}</span>
      </p>

      <button className="btn mt-5" onClick={resetHandler}>Reset</button>
    </div>
  );
}

export default StepCounter;
